import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, map, mapTo, tap} from 'rxjs/operators';
import {Audit, AuditIdDto, CreateAuditDto, MinAuditKeys, UpdateAuditDto} from './model/audit.interface';
import {OfflineAuditService} from './offline-audit.service';
import {ParseAuditService} from './parse-audit.service';

@Injectable()
export class AuditService {

  constructor(
    private offlineAuditService: OfflineAuditService,
    private parseAuditService: ParseAuditService,
  ) {
  }

  findAll<K extends keyof Audit>(filter: Partial<Audit> = {}, keys?: K[]): Observable<Pick<Audit, K | MinAuditKeys>[]> {
    const offlineAudits = this.offlineAuditService.findAll(filter);
    return this.parseAuditService.findAll(filter, keys).pipe(
      catchError(() => of([])),
      map(parseAudits => this.mergeAll([...parseAudits, ...offlineAudits] as any)),
    );
  }

  findOne<K extends keyof Audit>(auditId: string, keys?: K[]): Observable<Pick<Audit, K | MinAuditKeys> | undefined> {
    const offlineAudit = this.offlineAuditService.findOne(auditId);
    return this.parseAuditService.findAll({auditId}, keys).pipe(
      catchError(() => of([])),
      map(parseAudits => this.mergeAll(offlineAudit ? [...parseAudits, offlineAudit] : parseAudits as any)),
      map(audits => audits[0]),
    );
  }

  private mergeAll(audits: Audit[]): Audit[] {
    if (audits.length <= 1) {
      return audits;
    }

    const auditIds = new Map<string, Audit>();

    for (const audit of audits) {
      const auditId = audit.auditId;
      const existing = auditIds.get(auditId);
      if (!existing) {
        auditIds.set(auditId, audit);
        continue;
      }

      let merged: Audit;
      // in case of conflict, prefer newest
      if (existing.updatedAt <= audit.updatedAt) {
        merged = this.merge(existing, audit);
      } else {
        merged = this.merge(audit, existing);
      }
      auditIds.set(auditId, merged);
    }

    return [...auditIds.values()];
  }

  private merge(a1: Audit, a2: Audit): Audit {
    return {
      ...a1,
      ...a2,
      type: {...a1.type, ...a2.type},
      zone: {...a1.zone, ...a2.zone},
    };
  }

  create(dto: CreateAuditDto): Observable<Audit> {
    return this.parseAuditService.create(dto).pipe(catchError(() => {
      return of(this.offlineAuditService.create(dto));
    }));
  }

  update({objectId, auditId}: AuditIdDto, delta: UpdateAuditDto, apply: (a: Audit) => void): Observable<void> {
    const offline = this.offlineAuditService.update(auditId, delta, apply);
    if (offline) {
      return of(undefined);
    }
    return this.parseAuditService.update(objectId, delta);
  }

  upload(audit: Audit): Observable<void> {
    if (audit.objectId.startsWith('local.')) {
      const {objectId, updatedAt, createdAt, pendingChanges, ...rest} = audit;
      return this.parseAuditService.createFromLocal(rest).pipe(
        tap(created => this.offlineAuditService.save(created)),
        mapTo(undefined),
      );
    }

    const deltas = this.offlineAuditService.getDeltas(audit.auditId);
    return this.parseAuditService.updateMany(audit.objectId, deltas).pipe(
      tap(() => this.offlineAuditService.deleteDeltas(audit)),
    );
  }

  delete({objectId}: AuditIdDto): Observable<void> {
    // FIXME delete does not work in offline mode
    return this.parseAuditService.delete(objectId);
  }
}

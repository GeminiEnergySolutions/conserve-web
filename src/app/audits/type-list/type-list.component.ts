import {Component, Input} from '@angular/core';
import {AuditService} from '../audit.service';
import {FeatureService} from '../feature.service';
import {Audit, Type, Zone} from '../model/audit.interface';
import {Types} from '../model/types';
import {TypeService} from '../type.service';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.scss'],
})
export class TypeListComponent {
  @Input() audit: Audit;
  @Input() zone: Zone;
  @Input() types: Type[];
  @Input() type: (typeof Types)[number];
  @Input() routerPrefix = '';

  constructor(
    private auditService: AuditService,
    private typeService: TypeService,
    private featureService: FeatureService,
  ) {
  }

  createType(type: (typeof Types)[number], subType?: (typeof Types)[number]['subTypes'][number]) {
    const name = prompt(`New ${subType?.name ?? type.name} Name`);
    if (!name) {
      return;
    }
    this.typeService.create(this.audit, this.zone, {
      type: type.name,
      subtype: subType?.name ?? null,
      name,
    }).subscribe(type => {
      this.types.push(type);
    });
  }

  rename(type: Type) {
    const name = prompt('Rename Type', type.name);
    if (!name) {
      return;
    }
    this.typeService.update(this.audit, type.id, {name}).subscribe();
  }

  delete(type: Type) {
    if (!confirm(`Are you sure you want to delete '${type.name}'?`)) {
      return;
    }
    this.typeService.delete(this.audit, type.zoneId, type.id).subscribe(() => {
      const index = this.types.indexOf(type);
      if (index >= 0) {
        this.types.splice(index, 1);
      }
    });
    this.featureService.deleteAll({typeId: type.id.toString()}).subscribe();
  }
}

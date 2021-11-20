"use strict";(self.webpackChunkconserve=self.webpackChunkconserve||[]).push([[317],{9317:(Qe,k,m)=>{m.r(k),m.d(k,{AuditsModule:()=>je});var p=m(1914),d=m(8358),N=m(4364),v=m(3197),e=m(3852);let Q=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[p.ez,N.JF,v.u5,d.Gs]]}),i})();var l=m(8341);let H=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[p.ez,l.Bz,d.XC]]}),i})();var h=m(9350),F=m(5e3),f=m(5265),E=m(9833);function y(i){return a=>a.lift(new R(i))}class R{constructor(a){this.value=a}call(a,t){return t.subscribe(new G(a,this.value))}}class G extends E.L{constructor(a,t){super(a),this.value=t}_next(a){this.destination.next(this.value)}}var x=m(4043);let Z=(()=>{class i{constructor(){}findAll(t){const n=[];e:for(let o=0;o<localStorage.length;o++){const r=localStorage.key(o);if(!r.startsWith("audits/")||r.indexOf("/","audits/".length)>=0)continue;const s=localStorage.getItem(r),c=JSON.parse(s);if(t)for(const u of Object.keys(t))if(c[u]!==t[u])continue e;n.push(c)}return n}findOne(t){const n=localStorage.getItem(`audits/${t}`);if(n)return JSON.parse(n)}getDeltas(t){const n={};for(let o=0;o<localStorage.length;o++){const r=localStorage.key(o),s=new RegExp(`^audits/${t}/delta/(d+)$`).exec(r);if(!s)continue;const[,c]=s,u=localStorage.getItem(r);n[c]=JSON.parse(u)}return Object.entries(n).sort((o,r)=>+o[0]-+r[0]).map(([,o])=>o)}save(t){this.deleteDeltas(t),localStorage.setItem(`audits/${t.auditId}`,JSON.stringify(t))}update(t,n,o){const r=`audits/${t.auditId}`;if(!localStorage.getItem(r))return;const c=o?o(t):t;if(c.pendingChanges=(c.pendingChanges||0)+(n?1:0),localStorage.setItem(r,JSON.stringify(c)),n){const u=`audits/${c.auditId}/delta/${+new Date}`;localStorage.setItem(u,JSON.stringify(n))}return c}deleteDeltas(t){this.deleteWithPrefix(`audits/${t.auditId}/delta`),t.pendingChanges=0}delete(t){this.deleteWithPrefix(`audits/${t.auditId}`),delete t.pendingChanges}deleteWithPrefix(t){for(let n=localStorage.length-1;n>=0;n--){const o=localStorage.key(n);o.startsWith(t)&&localStorage.removeItem(o)}}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac}),i})(),S=(()=>{class i{constructor(){}randomIdAndMod(){const t=(new Date).valueOf();return{id:t/1e3|0,mod:t}}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac}),i})();var C=m(2255);let J=(()=>{class i{constructor(t,n){this.idService=t,this.parseService=n}findAll(t={}){return this.parseService.findAll("rAudit",t)}create(t){const{id:n,mod:o}=this.idService.randomIdAndMod(),r=Object.assign({auditId:n.toString(),mod:o.toString(),usn:0},t);return this.parseService.create("rAudit",r)}update(t,n){return this.parseService.update("rAudit",t,n).pipe(y(void 0))}updateMany(t,n){return this.parseService.batch(n.map(o=>({method:"PUT",path:`/classes/rAudit/${t}`,body:o}))).pipe(y(void 0))}delete({objectId:t}){return this.parseService.delete("rAudit",t)}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(S),e.LFG(C.X))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac}),i})(),_=(()=>{class i{constructor(t,n){this.offlineAuditService=t,this.parseAuditService=n}findAll(t={}){const n=this.offlineAuditService.findAll(t);return this.parseAuditService.findAll(t).pipe((0,F.K)(()=>(0,h.of)([])),(0,f.U)(o=>this.mergeAll([...o,...n])))}findOne(t){const n=this.offlineAuditService.findOne(t);return this.parseAuditService.findAll({auditId:t}).pipe((0,F.K)(()=>(0,h.of)([])),(0,f.U)(o=>this.mergeAll(n?[...o,n]:o)),(0,f.U)(o=>o[0]))}mergeAll(t){if(t.length<=1)return t;const n=new Map;for(const o of t){const r=o.auditId,s=n.get(r);if(!s){n.set(r,o);continue}let c;c=s.updatedAt<=o.updatedAt?this.merge(s,o):this.merge(o,s),n.set(r,c)}return[...n.values()]}merge(t,n){return Object.assign(Object.assign(Object.assign({},t),n),{type:Object.assign(Object.assign({},t.type),n.type),zone:Object.assign(Object.assign({},t.zone),n.zone)})}create(t){return this.parseAuditService.create(t)}update(t,n,o){const r=this.offlineAuditService.update(t,n,o);return r?(0,h.of)(r):this.parseAuditService.update(t.objectId,n).pipe(y(t),(0,f.U)(o))}upload(t){const n=this.offlineAuditService.getDeltas(t.auditId);return this.parseAuditService.updateMany(t.objectId,n).pipe((0,x.b)(()=>this.offlineAuditService.deleteDeltas(t)))}delete(t){return this.parseAuditService.delete(t)}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(Z),e.LFG(J))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac}),i})(),q=(()=>{class i{canDeactivate(t){return t.isSaved()||confirm("Are you sure you want to leave this page? Changes that you made may not be saved.")}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var L=m(4616),A=m(1372),B=m(6085);let M=(()=>{class i{constructor(t){this.parseService=t}findAll(t={},n){return this.parseService.findAll("rFeature",t,{keys:n})}create(t){return this.parseService.create("rFeature",t)}update(t,n){return this.parseService.update("rFeature",t,n).pipe(y(void 0))}delete(t){return this.parseService.delete("rFeature",t)}deleteAll(t={}){return this.findAll(t,["objectId"]).pipe((0,A.w)(n=>{const o=n.map(r=>({method:"DELETE",path:"/parse/classes/rFeature/"+r.objectId}));return this.parseService.batch(o)}))}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(C.X))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac}),i})(),z=(()=>{class i{constructor(){}findAll(t){if(t.auditId&&!t.typeId){const s=localStorage.getItem(`audits/${t.auditId}/features/preaudit`);return s?[JSON.parse(s)]:[]}const n=new RegExp(`^audits/${t.auditId||"\\w+"}/features/${t.typeId||"preaudit"}$`),o=[];e:for(let r=0;r<localStorage.length;r++){const s=localStorage.key(r);if(!n.test(s))continue;const c=localStorage.getItem(s),u=JSON.parse(c);for(const g of Object.keys(t))if(u[g]!==t[g])continue e;o.push(u)}return o}save(t){const n=this.getKey(t);localStorage.setItem(n,JSON.stringify(t))}update(t,n){const o=this.getKey(t);if(!localStorage.getItem(o))return;const r=Object.assign(Object.assign({},t),n);return localStorage.setItem(o,JSON.stringify(r)),r}getKey(t){return`audits/${t.auditId}/features/${t.typeId||"preaudit"}`}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac}),i})();const b="\x1f";let T=(()=>{class i{constructor(t,n,o,r){this.parseService=t,this.parseFeatureService=n,this.offlineFeatureService=o,this.offlineAuditService=r}findAll(t={},n){const o=this.offlineFeatureService.findAll(t);return o.length>=0?(0,h.of)(o):this.parseFeatureService.findAll(t,n)}saveAll(t){this.parseFeatureService.findAll(t).subscribe(n=>{for(const o of n)this.offlineFeatureService.save(o)})}create(t){if(this.offlineAuditService.findOne(t.auditId)){const n=(parseInt("local",36)+Math.random()).toString(36),o=(new Date).toJSON(),r=Object.assign({objectId:n,createdAt:o,updatedAt:o},t);return this.offlineFeatureService.save(r),(0,h.of)(r)}return this.parseFeatureService.create(t)}update(t,n){const o=this.offlineFeatureService.update(t,n);return o?(0,h.of)(o):this.parseFeatureService.update(t.objectId,n).pipe(y(Object.assign(Object.assign({},t),n)))}upload(t){const n=this.offlineFeatureService.findAll(t);return this.parseService.batch(n.map(o=>{const{objectId:r}=o,u=(0,B._T)(o,["objectId","createdAt","updatedAt"]);return r.startsWith("local.")?{path:"/classes/rFeature",method:"POST",body:u}:{path:`/classes/rFeature/${r}`,method:"PUT",body:u}})).pipe((0,f.U)(o=>{for(let r=0;r<o.length;r++){const s=o[r],c=n[r];if("error"in s)continue;const u=s.success;"objectId"in u&&(c.objectId=u.objectId),"createdAt"in u&&(c.createdAt=u.createdAt),"updatedAt"in u&&(c.updatedAt=u.updatedAt),this.offlineFeatureService.save(c)}}))}delete(t){return this.parseFeatureService.delete(t.objectId)}deleteAll(t={}){return this.parseFeatureService.deleteAll(t)}feature2Data(t){const n={},o=t.formId.split(b),r=t.values.split(b),s=Math.min(o.length,r.length);for(let c=0;c<s;c++)n[o[c]]=r[c];return n}data2Feature(t,n){const o=Object.entries(n),r=o.map(([c])=>c),s=r.map(c=>this.findElement(t,c));return{id:o.map((c,u)=>u).join(b),dataType:s.map(c=>c.dataType).join(b),fields:s.map(c=>c.param).join(b),formId:r.join(b),values:o.map(c=>c[1]).join(b)}}findElement(t,n){for(let o of t.geminiForm)for(let r of o.elements)if(r.id===n)return r}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(C.X),e.LFG(M),e.LFG(z),e.LFG(Z))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac}),i})(),U=(()=>{class i{constructor(t,n){this.http=t,this.parseService=n}loadSchemas(){return this.parseService.findAll("Form").pipe((0,x.b)(t=>{for(let n of t)this.saveLocal(n)}))}loadSchema(t){return this.parseService.findAll("Form",{name:t},{limit:1,order:["-updatedAt"]}).pipe((0,f.U)(n=>{if(0!==n.length){const o=n[0];return this.saveLocal(o),o}}),(0,F.K)(()=>(0,h.of)(this.getLocal(t))))}getLocal(t){const n=localStorage.getItem(`schemas/${t}`);return n?JSON.parse(n):void 0}saveLocal(t){const{name:n,updatedAt:o}=t,r=localStorage.getItem(`schemas/${n}/updatedAt`);(!r||r<o)&&(localStorage.setItem(`schemas/${n}`,JSON.stringify(t)),localStorage.setItem(`schemas/${n}/updatedAt`,o))}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(N.eN),e.LFG(C.X))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),X=(()=>{class i{transform(t){return i.mapping[t]||"text"}}return i.mapping={emailrow:"email",phonerow:"tel",introw:"number",decimalrow:"number"},i.\u0275fac=function(t){return new(t||i)},i.\u0275pipe=e.Yjl({name:"formInputType",type:i,pure:!0}),i})();function K(i,a){if(1&i&&(e.TgZ(0,"option",15),e._uU(1),e.qZA()),2&i){const t=a.$implicit;e.Q6J("value",t.substring(t.indexOf(":")+1)),e.xp6(1),e.hij(" ",t.substring(t.indexOf(":")+1)," ")}}function W(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"select",13),e.NdJ("ngModelChange",function(o){e.CHM(t);const r=e.oxw().$implicit;return e.oxw(3).data[r.id]=o})("change",function(){return e.CHM(t),e.oxw(4).setDirty()}),e.YNc(1,K,2,2,"option",14),e.qZA()}if(2&i){const t=e.oxw().$implicit,n=e.oxw(2).$implicit,o=e.oxw();e.hYB("id","",n.id,"-",t.id,""),e.Q6J("ngModel",o.data[t.id]),e.uIk("aria-describedby",n.id+"-"+t.id+"-help"),e.xp6(1),e.Q6J("ngForOf",t.defaultValues.split(","))}}function V(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"textarea",13),e.NdJ("ngModelChange",function(o){e.CHM(t);const r=e.oxw().$implicit;return e.oxw(3).data[r.id]=o})("change",function(){return e.CHM(t),e.oxw(4).setDirty()}),e.qZA()}if(2&i){const t=e.oxw().$implicit,n=e.oxw(2).$implicit,o=e.oxw();e.hYB("id","",n.id,"-",t.id,""),e.Q6J("ngModel",o.data[t.id]),e.uIk("aria-describedby",n.id+"-"+t.id+"-help")}}function ee(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"input",16),e.NdJ("ngModelChange",function(o){e.CHM(t);const r=e.oxw().$implicit;return e.oxw(3).data[r.id]=o})("change",function(){return e.CHM(t),e.oxw(4).setDirty()}),e.ALo(1,"formInputType"),e.qZA()}if(2&i){const t=e.oxw().$implicit,n=e.oxw(2).$implicit,o=e.oxw();e.hYB("id","",n.id,"-",t.id,""),e.Q6J("ngModel",o.data[t.id])("type",e.lcZ(1,5,t.dataType)),e.uIk("aria-describedby",n.id+"-"+t.id+"-help")}}function te(i,a){if(1&i&&(e.TgZ(0,"div",7),e.TgZ(1,"label",8),e._uU(2),e.qZA(),e.ynx(3,9),e.YNc(4,W,2,5,"select",10),e.YNc(5,V,1,4,"textarea",10),e.YNc(6,ee,2,7,"input",11),e.BQk(),e.TgZ(7,"small",12),e._uU(8),e.qZA(),e.qZA()),2&i){const t=a.$implicit,n=e.oxw(2).$implicit;e.xp6(1),e.hYB("for","",n.id,"-",t.id,""),e.xp6(1),e.Oqu(t.param),e.xp6(1),e.Q6J("ngSwitch",t.dataType),e.xp6(1),e.Q6J("ngSwitchCase","pickerinputrow"),e.xp6(1),e.Q6J("ngSwitchCase","textarearow"),e.xp6(2),e.hYB("id","",n.id,"-",t.id,"-help"),e.xp6(1),e.Oqu(t.hint)}}function ne(i,a){if(1&i&&e.YNc(0,te,9,9,"div",6),2&i){const t=e.oxw().$implicit;e.Q6J("ngForOf",t.elements)}}function ie(i,a){if(1&i&&(e.TgZ(0,"ngb-panel",4),e.YNc(1,ne,1,1,"ng-template",5),e.qZA()),2&i){const t=a.$implicit;e.Q6J("id","s-"+t.id)("title",t.section)}}const oe=function(){return[]};let Y=(()=>{class i{constructor(t){this.formsService=t,this.data={},this.saved=new e.vpe,this.dirty=!1}ngOnInit(){this.type&&!this.schema&&this.formsService.loadSchema(this.type).subscribe(t=>{this.schema=t})}save(){this.saved.emit([this.schema,this.data]),this.dirty=!1}setDirty(){this.dirty=!0}canDeactivate(){return!this.dirty}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(U))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-form"]],hostBindings:function(t,n){1&t&&e.NdJ("beforeunload",function(){return n.canDeactivate()},!1,e.Jf7)},inputs:{type:"type",schema:"schema",data:"data"},outputs:{saved:"saved"},decls:6,vars:2,consts:[["closeOthers","closeOthers"],["class","form",3,"id","title",4,"ngFor","ngForOf"],[1,"text-center","text-muted","mt-3","mb-5"],["type","button",1,"btn","btn-primary","btn-lg","btn-floating-action",3,"click"],[1,"form",3,"id","title"],["ngbPanelContent",""],["class","form-group",4,"ngFor","ngForOf"],[1,"form-group"],[3,"for"],[3,"ngSwitch"],["class","form-control",3,"ngModel","id","ngModelChange","change",4,"ngSwitchCase"],["class","form-control",3,"ngModel","type","id","ngModelChange","change",4,"ngSwitchDefault"],[1,"form-text","text-muted",3,"id"],[1,"form-control",3,"ngModel","id","ngModelChange","change"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"form-control",3,"ngModel","type","id","ngModelChange","change"]],template:function(t,n){1&t&&(e.TgZ(0,"ngb-accordion",0),e.YNc(1,ie,2,2,"ngb-panel",1),e.qZA(),e.TgZ(2,"p",2),e._uU(3," Don't forget to save when you're done filling out the form!\n"),e.qZA(),e.TgZ(4,"button",3),e.NdJ("click",function(){return n.save()}),e._uU(5," Save\n"),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngForOf",(null==n.schema?null:n.schema.geminiForm)||e.DdM(1,oe)))},directives:[d.gY,p.sg,d.Gk,d.gW,p.RF,p.n9,p.ED,v.EJ,v.JJ,v.On,v.YN,v.Kr,v.Fj],pipes:[X],styles:[""]}),i})(),P=(()=>{class i{constructor(t,n){this.idService=t,this.auditService=n}create(t,n){const{id:o,mod:r}=this.idService.randomIdAndMod(),s=Object.assign({id:o,mod:r,usn:0,name:"",typeId:[]},n);return this.auditService.update(t,{[`zone.${o}`]:s},c=>(c.zone[o]=s,c)).pipe(y(s))}update(t,n,o){const r={};for(const[s,c]of Object.entries(o))r[`zone.${n}.${s}`]=c;return this.auditService.update(t,r,s=>(Object.assign(s.zone[n],o),s))}delete(t,{id:n,typeId:o}){const r={[`zone.${n}`]:{__op:"Delete"}};for(const s of o)r[`type.${s}`]={__op:"Delete"};return this.auditService.update(t,r,s=>{delete s.zone[n];for(const c of o)delete s.type[c];return s})}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(S),e.LFG(_))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac}),i})();const re=["*"];let I=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-options-dropdown"]],inputs:{id:"id"},ngContentSelectors:re,decls:5,vars:2,consts:[["ngbDropdown","","placement","bottom-right","container","body",3,"click"],["ngbDropdownToggle","",1,"btn","btn-secondary","btn-sm",3,"id"],["ngbDropdownMenu",""]],template:function(t,n){1&t&&(e.F$t(),e.TgZ(0,"div",0),e.NdJ("click",function(r){return r.stopPropagation(),r.preventDefault()}),e.TgZ(1,"button",1),e._uU(2," Options "),e.qZA(),e.TgZ(3,"div",2),e.Hsn(4),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.MGl("id","actions-dropdown-",n.id,""),e.xp6(2),e.uIk("aria-labelledby","actions-dropdown-"+n.id))},directives:[d.jt,d.iD,d.Vi],styles:[""]}),i})();function ae(i,a){if(1&i){const t=e.EpF();e.ynx(0),e._UZ(1,"div",8),e.TgZ(2,"button",9),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit;return e.oxw().delete(o.value)}),e._uU(3,"Delete"),e.qZA(),e.BQk()}}const se=function(i){return[i]};function ce(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",3),e.TgZ(1,"div",4),e._uU(2),e.qZA(),e.TgZ(3,"app-options-dropdown",5),e.TgZ(4,"button",6),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.oxw().rename(r.value)}),e._uU(5,"Rename"),e.qZA(),e.YNc(6,ae,4,0,"ng-container",7),e.qZA(),e.qZA()}if(2&i){const t=a.$implicit,n=e.oxw();e.Q6J("routerLink",e.VKq(4,se,n.routerPrefix+t.value.id)),e.xp6(2),e.hij(" ",t.value.name," "),e.xp6(1),e.Q6J("id",t.value.id),e.xp6(3),e.Q6J("ngIf",void 0===n.audit.pendingChanges)}}let $=(()=>{class i{constructor(t,n,o){this.auditService=t,this.zoneService=n,this.featureService=o,this.routerPrefix=""}createZone(){const t=prompt("New Zone Name");!t||this.zoneService.create(this.audit,{name:t}).subscribe(n=>{this.audit.zone[n.id]=n})}rename(t){const n=prompt("Rename Zone",t.name);!n||this.zoneService.update(this.audit,t.id,{name:n}).subscribe(()=>{t.name=n})}delete(t){!confirm(`Are you sure you want to delete '${t.name}'?`)||(this.zoneService.delete(this.audit,t).subscribe(),this.featureService.deleteAll({zoneId:t.id.toString()}).subscribe())}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(_),e.Y36(P),e.Y36(T))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-zone-list"]],inputs:{audit:"audit",routerPrefix:"routerPrefix"},decls:5,vars:3,consts:[[1,"list-group","rounded-0"],[1,"list-group-item","list-group-item-action","text-success",3,"click"],["class","list-group-item list-group-item-action d-flex align-items-center","routerLinkActive","active",3,"routerLink",4,"ngFor","ngForOf"],["routerLinkActive","active",1,"list-group-item","list-group-item-action","d-flex","align-items-center",3,"routerLink"],[1,"flex-grow-1"],[1,"visible-hover",3,"id"],["ngbDropdownItem","",3,"click"],[4,"ngIf"],[1,"dropdown-divider"],["ngbDropdownItem","",1,"text-danger",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"button",1),e.NdJ("click",function(){return n.createZone()}),e._uU(2," New Zone "),e.qZA(),e.YNc(3,ce,7,6,"a",2),e.ALo(4,"keyvalue"),e.qZA()),2&t&&(e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,1,n.audit.zone)))},directives:[p.sg,l.yS,l.Od,I,d.TH,p.O5],pipes:[p.Nd],styles:[""]}),i})();const ue=["form"];function de(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"app-form",10,11),e.NdJ("saved",function(o){return e.CHM(t),e.oxw(2).save(o[0],o[1])}),e.qZA()}if(2&i){const t=e.oxw(2);e.Q6J("data",t.data)}}function le(i,a){if(1&i&&(e.TgZ(0,"div",0),e.YNc(1,de,2,1,"app-form",9),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.selectedAudit)}}function pe(i,a){if(1&i&&e._UZ(0,"app-zone-list",12),2&i){const t=e.oxw();e.Q6J("audit",t.selectedAudit)}}let me=(()=>{class i{constructor(t,n,o){this.auditService=t,this.featureService=n,this.route=o,this.data={},this.activeTab="preaudit"}ngOnInit(){this.route.params.pipe((0,A.w)(({aid:t})=>(0,L.D)([this.auditService.findOne(t),this.featureService.findAll({auditId:t,belongsTo:"preaudit"})]))).subscribe(([t,n])=>{this.selectedAudit=t,this.feature=n[0],this.data=n[0]?this.featureService.feature2Data(n[0]):{}})}isSaved(){var t;return!(null===(t=this.form)||void 0===t?void 0:t.dirty)}save(t,n){if(this.feature){const s=this.featureService.data2Feature(t,n);return void this.featureService.update(this.feature,s).subscribe()}const{formId:o,values:r}=this.featureService.data2Feature(t,n);this.featureService.create({auditId:this.selectedAudit.auditId,belongsTo:"preaudit",mod:(new Date).valueOf().toString(),zoneId:null,typeId:null,usn:0,formId:o,values:r}).subscribe(s=>{this.feature=s})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(_),e.Y36(T),e.Y36(l.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-audit"]],viewQuery:function(t,n){if(1&t&&e.Gf(ue,5),2&t){let o;e.iGM(o=e.CRH())&&(n.form=o.first)}},decls:15,vars:3,consts:[[1,"container"],["routerLink","..",1,"bi-chevron-left","d-lg-none"],["ngbNav","",1,"nav-tabs",3,"activeId","activeIdChange"],["nav","ngbNav"],["ngbNavItem","preaudit"],["ngbNavLink",""],["ngbNavContent",""],["ngbNavItem","zone"],[1,"mt-2",3,"ngbNavOutlet"],["type","preaudit",3,"data","saved",4,"ngIf"],["type","preaudit",3,"data","saved"],["form",""],["routerPrefix","zones/",3,"audit"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h1"),e._UZ(2,"a",1),e._uU(3),e.qZA(),e.TgZ(4,"ul",2,3),e.NdJ("activeIdChange",function(r){return n.activeTab=r}),e.TgZ(6,"li",4),e.TgZ(7,"a",5),e._uU(8,"Preaudit"),e.qZA(),e.YNc(9,le,2,1,"ng-template",6),e.qZA(),e.TgZ(10,"li",7),e.TgZ(11,"a",5),e._uU(12,"Zone"),e.qZA(),e.YNc(13,pe,1,1,"ng-template",6),e.qZA(),e.qZA(),e._UZ(14,"div",8),e.qZA()),2&t){const o=e.MAs(5);e.xp6(3),e.hij(" ",null==n.selectedAudit?null:n.selectedAudit.name," "),e.xp6(1),e.Q6J("activeId",n.activeTab),e.xp6(10),e.Q6J("ngbNavOutlet",o)}},directives:[l.yS,d.Pz,d.nv,d.Vx,d.uN,d.tO,p.O5,Y,$],styles:[""]}),i})();const _e=[[["","breadcrumb",""]],[["","list",""]]],fe=function(){return{exact:!0}},ge=["[breadcrumb]","[list]"];let O=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-master-detail"]],ngContentSelectors:ge,decls:7,vars:2,consts:[[1,"row","no-gutters","h-100"],["routerLinkActive","master-active",1,"col-lg-3","h-100","overflow-auto","master",3,"routerLinkActiveOptions"],["routerLink",".",1,"d-none"],[1,"col-lg-9","h-100","overflow-auto","detail"]],template:function(t,n){1&t&&(e.F$t(_e),e.TgZ(0,"div",0),e.TgZ(1,"div",1),e._UZ(2,"a",2),e.Hsn(3),e.Hsn(4,1),e.qZA(),e.TgZ(5,"div",3),e._UZ(6,"router-outlet"),e.qZA(),e.qZA()),2&t&&(e.xp6(1),e.Q6J("routerLinkActiveOptions",e.DdM(1,fe)))},directives:[l.Od,l.yS,l.lC],styles:["@media (max-width: 991px){.master[_ngcontent-%COMP%]:not(.master-active){display:none!important}.master-active[_ngcontent-%COMP%] + .detail[_ngcontent-%COMP%]{display:none!important}}"]}),i})();function ve(i,a){1&i&&e._UZ(0,"i",15)}function he(i,a){}function ye(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"button",10),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit;return e.oxw().download(o)}),e._uU(1," Download Offline Copy "),e.qZA(),e._UZ(2,"div",11),e.TgZ(3,"button",16),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit;return e.oxw().delete(o)}),e._uU(4,"Delete"),e.qZA()}}function be(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"button",22),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2).$implicit;return e.oxw().upload(o)}),e._uU(1," Upload "),e.qZA()}}function Ae(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"button",16),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2).$implicit;return e.oxw().download(o)}),e._uU(1," Discard "),e.qZA()}}function Te(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"div",17),e._UZ(1,"i",18),e._uU(2," Pending Changes "),e.TgZ(3,"span",19),e._uU(4),e.qZA(),e.qZA(),e.YNc(5,be,2,0,"button",20),e.YNc(6,Ae,2,0,"button",21),e.TgZ(7,"button",16),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit;return e.oxw().deleteOffline(o)}),e._uU(8," Remove Offline Copy "),e.qZA()}if(2&i){const t=e.oxw().$implicit;e.xp6(4),e.Oqu(t.pendingChanges),e.xp6(1),e.Q6J("ngIf",t.pendingChanges),e.xp6(1),e.Q6J("ngIf",t.pendingChanges)}}const xe=function(i){return[i]};function Ze(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",6),e.TgZ(1,"div",7),e._uU(2),e.YNc(3,ve,1,0,"i",8),e.qZA(),e.TgZ(4,"app-options-dropdown",9),e.TgZ(5,"button",10),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.oxw().rename(r)}),e._uU(6,"Rename"),e.qZA(),e._UZ(7,"div",11),e.YNc(8,he,0,0,"ng-template",12),e.YNc(9,ye,5,0,"ng-template",null,13,e.W1O),e.YNc(11,Te,9,3,"ng-template",null,14,e.W1O),e.qZA(),e.qZA()}if(2&i){const t=a.$implicit,n=e.MAs(10),o=e.MAs(12);e.Q6J("routerLink",e.VKq(7,xe,t.auditId)),e.xp6(2),e.hij(" ",t.name," "),e.xp6(1),e.Q6J("ngIf",void 0!==t.pendingChanges),e.xp6(1),e.Q6J("id",t.auditId),e.xp6(4),e.Q6J("ngIf",void 0===t.pendingChanges)("ngIfThen",n)("ngIfElse",o)}}let Se=(()=>{class i{constructor(t,n,o,r){this.auditService=t,this.offlineAuditService=n,this.featureService=o,this.formsService=r,this.audits=[]}ngOnInit(){this.auditService.findAll().subscribe(t=>{this.audits=t})}create(){const t=prompt("New Audit Name");!t||this.auditService.create({name:t,type:{},zone:{}}).subscribe(n=>{this.audits.push(n)})}rename(t){const n=prompt("Rename Audit",t.name);!n||this.auditService.update(t,{name:n},o=>(o.name=n,o)).subscribe()}delete(t){!confirm(`Are you sure you want to delete '${t.name}'?`)||(this.auditService.delete(t).subscribe(()=>{const n=this.audits.indexOf(t);n>=0&&this.audits.splice(n,1)}),this.featureService.deleteAll({auditId:t.auditId}).subscribe())}download(t){t.pendingChanges&&!confirm(`Are you sure you want to discard ${t.pendingChanges} pending changes? This cannot be undone.`)||(this.formsService.loadSchemas().subscribe(),this.offlineAuditService.save(t),this.featureService.saveAll({auditId:t.auditId}))}upload(t){this.auditService.upload(t).subscribe(),this.featureService.upload({auditId:t.auditId}).subscribe()}deleteOffline(t){!confirm("Are you sure you want to discard the offline copy"+(t.pendingChanges?", including "+t.pendingChanges+" pending changes? This cannot be undone.":"? This can be undone once an internet connection is available."))||this.offlineAuditService.delete(t)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(_),e.Y36(Z),e.Y36(T),e.Y36(U))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-pre-audit"]],decls:9,vars:1,consts:[["breadcrumb","","aria-label","breadcrumb"],[1,"breadcrumb"],["aria-current","page",1,"breadcrumb-item","active"],["list","",1,"list-group","rounded-0"],[1,"list-group-item","list-group-item-action","text-success",3,"click"],["class","list-group-item list-group-item-action d-flex align-items-center","routerLinkActive","active text-white",3,"routerLink",4,"ngFor","ngForOf"],["routerLinkActive","active text-white",1,"list-group-item","list-group-item-action","d-flex","align-items-center",3,"routerLink"],[1,"flex-grow-1"],["class","bi-wifi-off","ngbTooltip","Available Offline",4,"ngIf"],[1,"visible-hover",3,"id"],["ngbDropdownItem","",3,"click"],[1,"dropdown-divider"],[3,"ngIf","ngIfThen","ngIfElse"],["onlineOptions",""],["offlineOptions",""],["ngbTooltip","Available Offline",1,"bi-wifi-off"],["ngbDropdownItem","",1,"text-danger",3,"click"],[1,"dropdown-header"],[1,"bi-wifi-off"],[1,"badge","badge-primary"],["ngbDropdownItem","","class","text-success",3,"click",4,"ngIf"],["ngbDropdownItem","","class","text-danger",3,"click",4,"ngIf"],["ngbDropdownItem","",1,"text-success",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"app-master-detail"),e.TgZ(1,"nav",0),e.TgZ(2,"ol",1),e.TgZ(3,"li",2),e._uU(4,"Audits"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(5,"div",3),e.TgZ(6,"button",4),e.NdJ("click",function(){return n.create()}),e._uU(7," New Audit "),e.qZA(),e.YNc(8,Ze,13,9,"a",5),e.qZA(),e.qZA()),2&t&&(e.xp6(8),e.Q6J("ngForOf",n.audits))},directives:[O,p.sg,l.yS,l.Od,p.O5,I,d.TH,d._L],styles:[""]}),i})();const w=[{id:"plugload",name:"Plugload",subTypes:[{id:"combination_oven",name:"Combination Oven"},{id:"convection_oven",name:"Convection Oven"},{id:"conveyor_oven",name:"Conveyor Oven"},{id:"fryer",name:"Fryer"},{id:"icemaker",name:"Ice Maker"},{id:"rack_oven",name:"Rack Oven"},{id:"steam_cooker",name:"Steam Cooker"},{id:"griddle",name:"Griddle"},{id:"hot_food_cabinet",name:"Hot Food Cabinet"},{id:"conveyor_broiler",name:"Conveyor Broiler"},{id:"dishwasher",name:"Dish Washer"},{id:"pre_rinse_spray",name:"Pre Rinse Spray"},{id:"sample_appliance",name:"Sample Appliance"}]},{id:"hvac",name:"HVAC"},{id:"hotwater",name:"WaterHeater"},{id:"refrigeration",name:"Refrigeration",subTypes:[{id:"walkin_refrigerator",name:"Walk-In Refrigerator"},{id:"walkin_freezer",name:"Walk-In Freezer"},{id:"refrigerator",name:"Refrigerator"},{id:"freezer",name:"Freezer"},{id:"walkin_coolbot",name:"Walk-In Cooler Box"}]},{id:"lighting",name:"Lighting",subTypes:[{id:"halogen",name:"Halogen"},{id:"cfl",name:"CFL"},{id:"linearfluorescent",name:"Linear Fluorescent"},{id:"incandescent",name:"Incandescent"},{id:"hpsodium",name:"High Pressure Sodium"},{id:"lpsodium",name:"Low Pressure Sodium"}]},{id:"motors",name:"Motors"},{id:"others",name:"Others"}];let D=(()=>{class i{constructor(t,n){this.idService=t,this.auditService=n}create(t,n,o){const{id:r,mod:s}=this.idService.randomIdAndMod(),c=Object.assign({id:r,mod:s,usn:0,zoneId:n.id},o);return this.auditService.update(t,{[`type.${r}`]:c,[`zone.${n.id}.typeId`]:{__op:"AddUnique",objects:[r]}},u=>(u.type[r]=c,n.typeId.push(r),u)).pipe(y(c))}update(t,n,o){const r={};for(const[s,c]of Object.entries(o))r[`type.${n}.${s}`]=c;return this.auditService.update(t,r,s=>(Object.assign(s.type[n],o),s))}delete(t,n,o){return this.auditService.update(t,{[`type.${o}`]:{__op:"Delete"},[`zone.${n}.typeId`]:{__op:"Remove",objects:[o]}},r=>{delete r.type[o];const s=r.zone[n],c=s.typeId.indexOf(o);return c>=0&&s.typeId.splice(c,1),r})}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(S),e.LFG(_))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac}),i})();function Ce(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"button",4),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return o.createType(o.type)}),e._uU(1),e.qZA()}if(2&i){const t=e.oxw();e.xp6(1),e.hij(" New ",t.type.name," ")}}function we(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"button",7),e.NdJ("click",function(){const r=e.CHM(t).$implicit,s=e.oxw(2);return s.createType(s.type,r)}),e._uU(1),e.qZA()}if(2&i){const t=a.$implicit;e.xp6(1),e.hij(" ",t.name," ")}}function Fe(i,a){if(1&i&&(e.TgZ(0,"details",5),e.TgZ(1,"summary"),e._uU(2,"New"),e.qZA(),e.YNc(3,we,2,1,"button",6),e.qZA()),2&i){const t=e.oxw();e.xp6(3),e.Q6J("ngForOf",t.type.subTypes)}}function Ie(i,a){if(1&i){const t=e.EpF();e.ynx(0),e._UZ(1,"div",14),e.TgZ(2,"button",15),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit;return e.oxw().delete(o)}),e._uU(3,"Delete"),e.qZA(),e.BQk()}}const Oe=function(i){return[i]};function ke(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",8),e.TgZ(1,"div",9),e._uU(2),e.TgZ(3,"small",10),e._uU(4),e.qZA(),e.qZA(),e.TgZ(5,"app-options-dropdown",11),e.TgZ(6,"button",12),e.NdJ("click",function(){const r=e.CHM(t).$implicit;return e.oxw().rename(r)}),e._uU(7,"Rename"),e.qZA(),e.YNc(8,Ie,4,0,"ng-container",13),e.qZA(),e.qZA()}if(2&i){const t=a.$implicit,n=e.oxw();e.Q6J("routerLink",e.VKq(5,Oe,n.routerPrefix+t.id)),e.xp6(2),e.hij(" ",t.name," "),e.xp6(2),e.Oqu(t.subtype),e.xp6(1),e.Q6J("id",t.id),e.xp6(3),e.Q6J("ngIf",void 0===n.audit.pendingChanges)}}let j=(()=>{class i{constructor(t,n,o){this.auditService=t,this.typeService=n,this.featureService=o,this.routerPrefix=""}createType(t,n){var o,r;const s=prompt(`New ${null!==(o=null==n?void 0:n.name)&&void 0!==o?o:t.name} Name`);!s||this.typeService.create(this.audit,this.zone,{type:t.name,subtype:null!==(r=null==n?void 0:n.name)&&void 0!==r?r:null,name:s}).subscribe(c=>{this.types.push(c)})}rename(t){const n=prompt("Rename Type",t.name);!n||this.typeService.update(this.audit,t.id,{name:n}).subscribe()}delete(t){!confirm(`Are you sure you want to delete '${t.name}'?`)||(this.typeService.delete(this.audit,t.zoneId,t.id).subscribe(()=>{const n=this.types.indexOf(t);n>=0&&this.types.splice(n,1)}),this.featureService.deleteAll({typeId:t.id.toString()}).subscribe())}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(_),e.Y36(D),e.Y36(T))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-type-list"]],inputs:{audit:"audit",zone:"zone",types:"types",type:"type",routerPrefix:"routerPrefix"},decls:4,vars:3,consts:[[1,"list-group","rounded-0"],["class","list-group-item list-group-item-action text-success",3,"click",4,"ngIf"],["class","list-group-item text-success",4,"ngIf"],["class","list-group-item list-group-item-action d-flex align-items-center","routerLinkActive","active text-white",3,"routerLink",4,"ngFor","ngForOf"],[1,"list-group-item","list-group-item-action","text-success",3,"click"],[1,"list-group-item","text-success"],["class","btn btn-sm btn-link text-success",3,"click",4,"ngFor","ngForOf"],[1,"btn","btn-sm","btn-link","text-success",3,"click"],["routerLinkActive","active text-white",1,"list-group-item","list-group-item-action","d-flex","align-items-center",3,"routerLink"],[1,"flex-grow-1"],[1,"text-muted"],[1,"visible-hover",3,"id"],["ngbDropdownItem","",3,"click"],[4,"ngIf"],[1,"dropdown-divider"],["ngbDropdownItem","",1,"text-danger",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.YNc(1,Ce,2,1,"button",1),e.YNc(2,Fe,4,1,"details",2),e.YNc(3,ke,9,7,"a",3),e.qZA()),2&t&&(e.xp6(1),e.Q6J("ngIf",!n.type.subTypes),e.xp6(1),e.Q6J("ngIf",n.type.subTypes),e.xp6(1),e.Q6J("ngForOf",n.types))},directives:[p.O5,p.sg,l.yS,l.Od,I,d.TH],styles:[""]}),i})();function Ne(i,a){if(1&i&&e._UZ(0,"app-type-list",9),2&i){const t=e.oxw();e.Q6J("audit",t.audit)("zone",t.zone)("types",t.types)("type",t.type)}}let Je=(()=>{class i{constructor(t,n){this.route=t,this.auditService=n,this.types=[]}ngOnInit(){this.route.params.pipe((0,A.w)(({aid:t,zid:n,type:o})=>this.auditService.findOne(t).pipe((0,x.b)(r=>{this.type=w.find(s=>s.name===o),this.audit=r,this.zone=r.zone[n],this.types=Object.values(r.type).filter(s=>s.type===o&&s.zoneId==n)})))).subscribe()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(l.gz),e.Y36(_))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-pre-type"]],decls:18,vars:4,consts:[["breadcrumb","","aria-label","breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","../../../.."],["routerLink","../../.."],["routerLink","../.."],["routerLink",".."],["aria-current","page",1,"breadcrumb-item","active"],["list","",3,"audit","zone","types","type",4,"ngIf"],["list","",3,"audit","zone","types","type"]],template:function(t,n){1&t&&(e.TgZ(0,"app-master-detail"),e.TgZ(1,"nav",0),e.TgZ(2,"ol",1),e.TgZ(3,"li",2),e.TgZ(4,"a",3),e._uU(5,"Audits"),e.qZA(),e.qZA(),e.TgZ(6,"li",2),e.TgZ(7,"a",4),e._uU(8),e.qZA(),e.qZA(),e.TgZ(9,"li",2),e.TgZ(10,"a",5),e._uU(11,"Zones"),e.qZA(),e.qZA(),e.TgZ(12,"li",2),e.TgZ(13,"a",6),e._uU(14),e.qZA(),e.qZA(),e.TgZ(15,"li",7),e._uU(16),e.qZA(),e.qZA(),e.qZA(),e.YNc(17,Ne,1,4,"app-type-list",8),e.qZA()),2&t&&(e.xp6(8),e.Oqu(null==n.audit?null:n.audit.name),e.xp6(6),e.Oqu(null==n.zone?null:n.zone.name),e.xp6(2),e.Oqu(null==n.type?null:n.type.name),e.xp6(1),e.Q6J("ngIf",n.type&&n.audit&&n.zone&&n.types))},directives:[O,l.yS,p.O5,j],styles:[""]}),i})();function qe(i,a){if(1&i&&e._UZ(0,"app-zone-list",7),2&i){const t=e.oxw();e.Q6J("audit",t.audit)}}let Le=(()=>{class i{constructor(t,n){this.route=t,this.auditService=n}ngOnInit(){this.route.params.pipe((0,A.w)(({aid:t})=>this.auditService.findOne(t))).subscribe(t=>{this.audit=t})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(l.gz),e.Y36(_))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-pre-zone"]],decls:12,vars:2,consts:[["breadcrumb","","aria-label","breadcrumb"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","../.."],["routerLink",".."],["aria-current","page",1,"breadcrumb-item","active"],["list","",3,"audit",4,"ngIf"],["list","",3,"audit"]],template:function(t,n){1&t&&(e.TgZ(0,"app-master-detail"),e.TgZ(1,"nav",0),e.TgZ(2,"ol",1),e.TgZ(3,"li",2),e.TgZ(4,"a",3),e._uU(5,"Audits"),e.qZA(),e.qZA(),e.TgZ(6,"li",2),e.TgZ(7,"a",4),e._uU(8),e.qZA(),e.qZA(),e.TgZ(9,"li",5),e._uU(10,"Zones"),e.qZA(),e.qZA(),e.qZA(),e.YNc(11,qe,1,1,"app-zone-list",6),e.qZA()),2&t&&(e.xp6(8),e.Oqu(null==n.audit?null:n.audit.name),e.xp6(3),e.Q6J("ngIf",n.audit))},directives:[O,l.yS,p.O5,$],styles:[""]}),i})();const Me=["form"];function ze(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"app-form",4,5),e.NdJ("saved",function(){e.CHM(t);const o=e.oxw();return o.save(o.data)}),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("data",t.data)("type",t.schemaId)}}let Ue=(()=>{class i{constructor(t,n,o){this.auditService=t,this.featureService=n,this.route=o}ngOnInit(){this.route.params.pipe((0,A.w)(({aid:t,zid:n,tid:o})=>(0,L.D)([this.auditService.findOne(t).pipe((0,f.U)(r=>r.type[o])),this.featureService.findAll({auditId:t,zoneId:n,typeId:o})]))).subscribe(([t,n])=>{this.type=t;const o=w.find(s=>s.name===t.type),r=t.subtype?o.subTypes.find(s=>s.name===t.subtype):o;this.schemaId=r.id,this.feature=n[0],this.data=this.feature?this.featureService.feature2Data(this.feature):{}})}isSaved(){var t;return!(null===(t=this.form)||void 0===t?void 0:t.dirty)}save(t,n){if(this.feature){const g=this.featureService.data2Feature(t,n);return void this.featureService.update(this.feature,g).subscribe()}const{formId:o,values:r}=this.featureService.data2Feature(t,n),{aid:s,zid:c,tid:u}=this.route.snapshot.params;this.featureService.create({auditId:s,zoneId:c,typeId:u,belongsTo:"type",mod:(new Date).valueOf().toString(),usn:0,formId:o,values:r}).subscribe(g=>{this.feature=g})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(_),e.Y36(T),e.Y36(l.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-type"]],viewQuery:function(t,n){if(1&t&&e.Gf(Me,5),2&t){let o;e.iGM(o=e.CRH())&&(n.form=o.first)}},decls:7,vars:3,consts:[[1,"container"],["routerLink","..",1,"bi-chevron-left","d-lg-none"],[1,"text-muted","small"],[3,"data","type","saved",4,"ngIf"],[3,"data","type","saved"],["form",""]],template:function(t,n){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h1"),e._UZ(2,"a",1),e._uU(3),e.TgZ(4,"span",2),e._uU(5),e.qZA(),e.qZA(),e.YNc(6,ze,2,2,"app-form",3),e.qZA()),2&t&&(e.xp6(3),e.hij(" ",null==n.type?null:n.type.name," "),e.xp6(2),e.hij(" ",null==n.type?null:n.type.subtype," "),e.xp6(1),e.Q6J("ngIf",n.data))},directives:[l.yS,p.O5,Y],styles:[""]}),i})();function Ye(i,a){if(1&i&&e._UZ(0,"app-type-list",9),2&i){const t=e.oxw().$implicit,n=e.oxw();e.Q6J("types",n.groupedTypes[t.name])("audit",n.audit)("zone",n.selectedZone)("type",t)("routerPrefix",t.name+"/")}}function Pe(i,a){if(1&i&&(e.TgZ(0,"li",6),e.TgZ(1,"a",7),e._uU(2),e.qZA(),e.YNc(3,Ye,1,5,"ng-template",8),e.qZA()),2&i){const t=a.$implicit;e.Q6J("ngbNavItem",t.name),e.xp6(2),e.Oqu(t.name)}}const $e=[{path:"",component:Se,children:[{path:":aid",component:me,canDeactivate:[q]}]},{path:":aid/zones",component:Le,children:[{path:":zid",component:(()=>{class i{constructor(t,n){this.auditService=t,this.route=n,this.types=w,this.groupedTypes={}}ngOnInit(){this.route.params.pipe((0,A.w)(({aid:t,zid:n})=>this.auditService.findOne(t).pipe((0,x.b)(o=>this.audit=o),(0,f.U)(o=>o.zone[n])))).subscribe(t=>{var n,o;this.selectedZone=t;const r=null!==(o=null===(n=this.selectedZone)||void 0===n?void 0:n.typeId.map(s=>this.audit.type[s]))&&void 0!==o?o:[];for(const s of w)this.groupedTypes[s.name]=[];for(const s of r)this.groupedTypes[s.type].push(s)})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(_),e.Y36(l.gz))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-zone"]],decls:8,vars:4,consts:[[1,"container"],["routerLink","..",1,"bi-chevron-left","d-lg-none"],["ngbNav","",1,"nav-tabs",3,"activeId","activeIdChange"],["nav","ngbNav"],[3,"ngbNavItem",4,"ngFor","ngForOf"],[1,"mt-2",3,"ngbNavOutlet"],[3,"ngbNavItem"],["ngbNavLink",""],["ngbNavContent",""],[3,"types","audit","zone","type","routerPrefix"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h1"),e._UZ(2,"a",1),e._uU(3),e.qZA(),e.TgZ(4,"ul",2,3),e.NdJ("activeIdChange",function(r){return n.activeTab=r}),e.YNc(6,Pe,4,2,"li",4),e.qZA(),e._UZ(7,"div",5),e.qZA()),2&t){const o=e.MAs(5);e.xp6(3),e.hij(" ",null==n.selectedZone?null:n.selectedZone.name," "),e.xp6(1),e.Q6J("activeId",n.activeTab),e.xp6(2),e.Q6J("ngForOf",n.types),e.xp6(1),e.Q6J("ngbNavOutlet",o)}},directives:[l.yS,d.Pz,p.sg,d.tO,d.nv,d.Vx,d.uN,j],styles:[""]}),i})()}]},{path:":aid/zones/:zid/:type",component:Je,children:[{path:":tid",component:Ue,canDeactivate:[q]}]}];let De=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[l.Bz.forChild($e)],l.Bz]}),i})(),je=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[S,_,Z,J,P,D,T,z,M],imports:[[p.ez,H,Q,d.Oz,d.XC,De,d.HK]]}),i})()}}]);
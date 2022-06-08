"use strict";(self.webpackChunkconserve=self.webpackChunkconserve||[]).push([[648],{3648:(w,d,s)=>{s.r(d),s.d(d,{SettingsModule:()=>N});var p=s(7152),a=s(6542),f=s(6822),c=s(9199),h=s(5713),u=s(6993),_=s(261),v=s(4706),e=s(7932),m=s(6494),b=s(8616),g=s(1021);function C(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"h4"),e._uU(1," Logged in as "),e.TgZ(2,"b"),e._uU(3),e.qZA(),e._uU(4,". "),e.TgZ(5,"button",18),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.logout())}),e._uU(6," Log out "),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(3),e.Oqu(t.user.username)}}function y(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",1)(1,"div",1)(2,"label",19),e._uU(3,"Username"),e.qZA(),e.TgZ(4,"input",20),e.NdJ("ngModelChange",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.username=i)}),e.qZA()(),e.TgZ(5,"div",1)(6,"label",21),e._uU(7,"Password"),e.qZA(),e.TgZ(8,"input",22),e.NdJ("ngModelChange",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.password=i)}),e.qZA()(),e.TgZ(9,"button",10),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.login())}),e._uU(10," Log in "),e.qZA()()}if(2&n){const t=e.oxw();e.xp6(4),e.Q6J("ngModel",t.username),e.xp6(4),e.Q6J("ngModel",t.password)}}function Z(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"button",23),e.NdJ("click",function(){e.CHM(t);const i=e.oxw();return e.KtG(i.delete())}),e._uU(1," Delete "),e.qZA()}}const T={403:"Invalid credentials",404:"Invalid server URL.",0:"Can't connect to server."};let S=(()=>{class n{constructor(t,o,i,r,I){this.parseCredentialService=t,this.parseService=o,this.toastService=i,this.route=r,this.router=I,this.credentials={appId:"",url:""},this.username="",this.password=""}ngOnInit(){this.route.params.pipe((0,u.b)(({id:t})=>this.id=t),(0,_.U)(({id:t})=>this.parseCredentialService.getProfile(t)),(0,u.b)(t=>t&&(this.credentials=t)),(0,v.w)(t=>t?.sessionToken?this.parseService.getCurrentUser(t):(0,h.of)(void 0))).subscribe(t=>{this.user=t})}save(){const t="new"===this.id?Math.random().toString(36):this.id;this.parseCredentialService.saveProfile(t,this.credentials),this.goBack()}delete(){!confirm("Are you sure you want to delete this profile? This cannot be undone.")||(this.parseCredentialService.deleteProfile(this.id),this.goBack())}goBack(){this.router.navigate(["../.."],{relativeTo:this.route})}test(){this.parseService.getConfig(this.credentials).subscribe(t=>{var o;t.brand?((o=this.credentials).name||(o.name=t.brand.name),this.toastService.success("Parse Server","Successfully connected to Parse server.")):this.toastService.warn("Parse Server","Successfully connected to Parse server, but it is not configured correctly (brand parameter missing)")},t=>{console.error(t),this.toastService.error("Parse Server",`Failed to connect to Parse server: ${t.error?.error??T[t.status]}`,t)})}logout(){this.parseService.logout(this.credentials).subscribe(()=>{delete this.user,delete this.credentials.sessionToken},t=>{this.toastService.error("Log out","Failed to log out",t)})}login(){!this.username||!this.password||this.parseService.login(this.username,this.password,this.credentials).subscribe(t=>{this.user=t,this.credentials.sessionToken=t.sessionToken},t=>{this.toastService.error("Log in","Failed to log in",t)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m.U),e.Y36(b.X),e.Y36(g.kl),e.Y36(c.gz),e.Y36(c.F0))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-edit-profile"]],decls:40,vars:8,consts:[[1,"container"],[1,"mb-3"],["for","name",1,"form-label"],["type","text","id","name",1,"form-control",3,"ngModel","ngModelChange"],["for","url",1,"form-label"],["type","url","id","url",1,"form-control",3,"ngModel","ngModelChange"],["for","appId",1,"form-label"],["type","text","id","appId",1,"form-control",3,"ngModel","ngModelChange"],["for","masterKey",1,"form-label"],["type","password","id","masterKey","autocomplete","new-password",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-primary",3,"click"],["for","reportUrl",1,"form-label"],["type","url","id","reportUrl",1,"form-control",3,"ngModel","ngModelChange"],[4,"ngIf"],["class","mb-3",4,"ngIf"],["type","button",1,"btn","btn-primary","me-2",3,"click"],["type","button","class","btn btn-danger me-2",3,"click",4,"ngIf"],["routerLink","../..",1,"btn","btn-secondary"],["type","button",1,"btn","btn-danger",3,"click"],["for","username",1,"form-label"],["type","text","id","username","autocomplete","username",1,"form-control",3,"ngModel","ngModelChange"],["for","password",1,"form-label"],["type","password","id","password","autocomplete","password",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-danger","me-2",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"h1"),e._uU(2,"Edit Profile"),e.qZA(),e.TgZ(3,"div",1)(4,"div",1)(5,"label",2),e._uU(6,"Profile Name"),e.qZA(),e.TgZ(7,"input",3),e.NdJ("ngModelChange",function(r){return o.credentials.name=r}),e.qZA()()(),e.TgZ(8,"h2"),e._uU(9,"Parse Server"),e.qZA(),e.TgZ(10,"div",1)(11,"div",1)(12,"label",4),e._uU(13,"Parse Server URL"),e.qZA(),e.TgZ(14,"input",5),e.NdJ("ngModelChange",function(r){return o.credentials.url=r}),e.qZA()(),e.TgZ(15,"div",1)(16,"label",6),e._uU(17,"Parse App ID"),e.qZA(),e.TgZ(18,"input",7),e.NdJ("ngModelChange",function(r){return o.credentials.appId=r}),e.qZA()(),e.TgZ(19,"div",1)(20,"label",8),e._uU(21,"Parse Master Key (Optional)"),e.qZA(),e.TgZ(22,"input",9),e.NdJ("ngModelChange",function(r){return o.credentials.masterKey=r}),e.qZA()(),e.TgZ(23,"button",10),e.NdJ("click",function(){return o.test()}),e._uU(24," Test "),e.qZA()(),e.TgZ(25,"h2"),e._uU(26,"Reports"),e.qZA(),e.TgZ(27,"div",1)(28,"label",11),e._uU(29,"Report Service URL"),e.qZA(),e.TgZ(30,"input",12),e.NdJ("ngModelChange",function(r){return o.credentials.reportUrl=r}),e.qZA()(),e.TgZ(31,"h2"),e._uU(32,"User"),e.qZA(),e.YNc(33,C,7,1,"h4",13),e.YNc(34,y,11,2,"div",14),e.TgZ(35,"button",15),e.NdJ("click",function(){return o.save()}),e._uU(36," Save "),e.qZA(),e.YNc(37,Z,2,0,"button",16),e.TgZ(38,"a",17),e._uU(39," Cancel "),e.qZA()()),2&t&&(e.xp6(7),e.Q6J("ngModel",o.credentials.name),e.xp6(7),e.Q6J("ngModel",o.credentials.url),e.xp6(4),e.Q6J("ngModel",o.credentials.appId),e.xp6(4),e.Q6J("ngModel",o.credentials.masterKey),e.xp6(8),e.Q6J("ngModel",o.credentials.reportUrl),e.xp6(3),e.Q6J("ngIf",o.user),e.xp6(1),e.Q6J("ngIf",!o.user),e.xp6(3),e.Q6J("ngIf","new"!==o.id))},dependencies:[p.O5,a.Fj,a.JJ,a.On,c.yS]}),n})();var M=s(7950),A=s(746);function P(n,l){1&n&&(e.TgZ(0,"button",16),e._uU(1," Active "),e.qZA())}function U(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"button",17),e.NdJ("click",function(){e.CHM(t);const i=e.oxw().$implicit,r=e.oxw();return e.KtG(r.setActiveProfile(i.key))}),e._uU(1," Select "),e.qZA()}}const J=function(n){return["profiles",n]};function k(n,l){if(1&n&&(e.TgZ(0,"li",10)(1,"div",11),e._uU(2),e.TgZ(3,"span",12),e._uU(4),e.qZA()(),e.YNc(5,P,2,0,"button",13),e.YNc(6,U,2,0,"button",14),e.TgZ(7,"a",15),e._uU(8," Edit "),e.qZA()()),2&n){const t=l.$implicit,o=e.oxw();e.xp6(2),e.hij(" ",t.value.name," "),e.xp6(2),e.hij(" ",t.value.url," "),e.xp6(1),e.Q6J("ngIf",t.key===o.activeProfile),e.xp6(1),e.Q6J("ngIf",t.key!==o.activeProfile),e.xp6(1),e.Q6J("routerLink",e.VKq(5,J,t.key))}}const x=function(){return["profiles","new"]},E=[{path:"profiles/:id",component:S},{path:"",component:(()=>{class n{constructor(t,o,i,r){this.parseCredentialService=t,this.companycamCredentialService=o,this.toastService=i,this.companycamService=r}ngOnInit(){this.profiles=this.parseCredentialService.getProfiles(),this.activeProfile=this.parseCredentialService.activeProfile,this.companycamApiKey=this.companycamCredentialService.apiKey}setActiveProfile(t){this.activeProfile=t,this.parseCredentialService.activeProfile=t}saveCompanycam(){this.companycamCredentialService.apiKey=this.companycamApiKey}testCompanycam(){this.saveCompanycam(),this.companycamService.test(this.companycamApiKey).subscribe(t=>{this.toastService.success("Companycam",`Logged in as ${t.first_name} ${t.last_name}`)},t=>{this.toastService.error("Companycam","Failed to log in",t)})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m.U),e.Y36(M.L),e.Y36(g.kl),e.Y36(A.Y))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-settings"]],decls:21,vars:6,consts:[[1,"container"],[1,"d-flex","align-items-center"],[1,"btn","btn-success","bi-plus-circle","ms-auto",3,"routerLink"],[1,"list-group","mb-3"],["class","list-group-item d-flex align-items-center",4,"ngFor","ngForOf"],[1,"mb-3"],["for","companyCamApiKeyInput",1,"form-label"],["type","password","id","companyCamApiKeyInput","autocomplete","off",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-primary","me-2",3,"click"],["type","button",1,"btn","btn-success",3,"click"],[1,"list-group-item","d-flex","align-items-center"],[1,"me-auto"],[1,"text-muted"],["class","btn btn-outline-secondary bi-check-circle","disabled","",4,"ngIf"],["class","btn btn-primary bi-check-circle ms-2",3,"click",4,"ngIf"],[1,"btn","btn-secondary","bi-pencil","ms-2",3,"routerLink"],["disabled","",1,"btn","btn-outline-secondary","bi-check-circle"],[1,"btn","btn-primary","bi-check-circle","ms-2",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"h1"),e._uU(2,"Settings"),e.qZA(),e.TgZ(3,"h2",1),e._uU(4," Parse Server Profiles "),e.TgZ(5,"a",2),e._uU(6," Add "),e.qZA()(),e.TgZ(7,"ul",3),e.YNc(8,k,9,7,"li",4),e.ALo(9,"keyvalue"),e.qZA(),e.TgZ(10,"h2"),e._uU(11,"CompanyCam"),e.qZA(),e.TgZ(12,"div",5)(13,"div",5)(14,"label",6),e._uU(15,"API Key"),e.qZA(),e.TgZ(16,"input",7),e.NdJ("ngModelChange",function(r){return o.companycamApiKey=r}),e.qZA()(),e.TgZ(17,"button",8),e.NdJ("click",function(){return o.saveCompanycam()}),e._uU(18," Save "),e.qZA(),e.TgZ(19,"button",9),e.NdJ("click",function(){return o.testCompanycam()}),e._uU(20," Test "),e.qZA()()()),2&t&&(e.xp6(5),e.Q6J("routerLink",e.DdM(5,x)),e.xp6(3),e.Q6J("ngForOf",e.lcZ(9,3,o.profiles)),e.xp6(8),e.Q6J("ngModel",o.companycamApiKey))},dependencies:[p.sg,p.O5,a.Fj,a.JJ,a.On,c.yS,p.Nd]}),n})()}];let q=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.Bz.forChild(E),c.Bz]}),n})(),N=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.ez,a.u5,q,f.B]}),n})()}}]);
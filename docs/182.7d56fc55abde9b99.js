"use strict";(self.webpackChunkformApp=self.webpackChunkformApp||[]).push([[182],{3182:(W,h,s)=>{s.r(h),s.d(h,{AuthModule:()=>K});var c=s(6814),a=s(95),p=s(7882),e=s(4946);let y=(()=>{class n{constructor(){this.firstNameAndLastnamePattern="([a-zA-Z]+) ([a-zA-Z]+)",this.emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",this.cantBeStrider=t=>"strider"===t.value.trim().toLowerCase()?{noStrider:!0}:null,this.isValidField=(t,r)=>t.controls[r].errors&&t.controls[r].touched}isFieldOneEquialFieldTwo(t,r){return i=>{const l=i.get(t)?.value,m=i.get(r)?.value;return l!==m?(i.get(r)?.setErrors({notEqual:!0}),{notEqual:!0}):(i.get(r)?.setErrors(null),null)}}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var f=s(5592),T=s(7394);class F extends T.w0{constructor(o,t){super()}schedule(o,t=0){return this}}const d={setInterval(n,o,...t){const{delegate:r}=d;return r?.setInterval?r.setInterval(n,o,...t):setInterval(n,o,...t)},clearInterval(n){const{delegate:o}=d;return(o?.clearInterval||clearInterval)(n)},delegate:void 0};var U=s(9039);const g={now:()=>(g.delegate||Date).now(),delegate:void 0};class u{constructor(o,t=u.now){this.schedulerActionCtor=o,this.now=t}schedule(o,t=0,r){return new this.schedulerActionCtor(this,o).schedule(r,t)}}u.now=g.now;const Z=new class w extends u{constructor(o,t=u.now){super(o,t),this.actions=[],this._active=!1}flush(o){const{actions:t}=this;if(this._active)return void t.push(o);let r;this._active=!0;do{if(r=o.execute(o.state,o.delay))break}while(o=t.shift());if(this._active=!1,r){for(;o=t.shift();)o.unsubscribe();throw r}}}(class q extends F{constructor(o,t){super(o,t),this.scheduler=o,this.work=t,this.pending=!1}schedule(o,t=0){var r;if(this.closed)return this;this.state=o;const i=this.id,l=this.scheduler;return null!=i&&(this.id=this.recycleAsyncId(l,i,t)),this.pending=!0,this.delay=t,this.id=null!==(r=this.id)&&void 0!==r?r:this.requestAsyncId(l,this.id,t),this}requestAsyncId(o,t,r=0){return d.setInterval(o.flush.bind(o,this),r)}recycleAsyncId(o,t,r=0){if(null!=r&&this.delay===r&&!1===this.pending)return t;null!=t&&d.clearInterval(t)}execute(o,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const r=this._execute(o,t);if(r)return r;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(o,t){let i,r=!1;try{this.work(o)}catch(l){r=!0,i=l||new Error("Scheduled action threw falsy error")}if(r)return this.unsubscribe(),i}unsubscribe(){if(!this.closed){const{id:o,scheduler:t}=this,{actions:r}=t;this.work=this.state=this.scheduler=null,this.pending=!1,(0,U.P)(r,this),null!=o&&(this.id=this.recycleAsyncId(t,o,null)),this.delay=null,super.unsubscribe()}}}),I=Z;var V=s(5211),v=s(8180),j=s(9360),C=s(8251),S=s(2420),P=s(975),L=s(1631),N=s(4829);function A(n,o){return o?t=>(0,V.z)(o.pipe((0,v.q)(1),function x(){return(0,j.e)((n,o)=>{n.subscribe((0,C.x)(o,S.Z))})}()),t.pipe(A(n))):(0,L.z)((t,r)=>(0,N.Xf)(n(t,r)).pipe((0,v.q)(1),(0,P.h)(t)))}var b=s(671);var J=s(9862);let Y=(()=>{class n{constructor(t){this.http=t}validate(t){const r=t.value;return new f.y(l=>{if(console.log({email:r}),"fernando@google.com"===r)return l.next({emailTaken:!0}),void l.complete();l.next(null),l.complete()}).pipe(function z(n,o=Z){const t=function R(n=0,o,t=I){let r=-1;return null!=o&&((0,b.K)(o)?t=o:r=o),new f.y(i=>{let l=function E(n){return n instanceof Date&&!isNaN(n)}(n)?+n-t.now():n;l<0&&(l=0);let m=0;return t.schedule(function(){i.closed||(i.next(m++),0<=r?this.schedule(void 0,r):i.complete())},l)})}(n,o);return A(()=>t)}(3e3))}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(J.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function B(n,o){1&n&&(e.TgZ(0,"span",13),e._uU(1," Debe de ser en formato de nombre y apellido "),e.qZA())}function M(n,o){1&n&&(e.TgZ(0,"span",13),e._uU(1," mensaje de error del email "),e.qZA())}function O(n,o){1&n&&(e.TgZ(0,"span",13),e._uU(1," El username no puede ser Strider "),e.qZA())}function Q(n,o){1&n&&(e.TgZ(0,"span",13),e._uU(1," La contrase\xf1a debe de ser mayor de 6 caracteres. "),e.qZA())}function k(n,o){1&n&&(e.TgZ(0,"span",13),e._uU(1," Las contrase\xf1as deben de ser iguales "),e.qZA())}const D=[{path:"",children:[{path:"sign-up",component:(()=>{class n{constructor(t,r,i){this.formBuilder=t,this.validatorsService=r,this.emailValidator=i,this.myForm=this.formBuilder.group({name:["",[a.kI.required,a.kI.pattern(this.validatorsService.firstNameAndLastnamePattern)],[]],email:["",[a.kI.required,a.kI.pattern(this.validatorsService.emailPattern)],[this.emailValidator]],username:["",[a.kI.required,this.validatorsService.cantBeStrider],[]],password:["",[a.kI.required,a.kI.minLength(6)],[]],password2:["",[a.kI.required,a.kI.minLength(6)],[]]},{validators:[this.validatorsService.isFieldOneEquialFieldTwo("password","password2")]})}ngOnInit(){console.log(123)}isValidField(t){return this.validatorsService.isValidField(this.myForm,t)}onSubmit(){this.myForm.markAllAsTouched()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(a.qu),e.Y36(y),e.Y36(Y))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-register-page"]],decls:91,vars:42,consts:[[1,"row"],[1,"col"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"row","mb-3"],[1,"col-sm-3","col-form-label"],[1,"col-sm-9"],["type","text","formControlName","name","placeholder","Nombre del usuario",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["type","email","formControlName","email","placeholder","Email del usuario",1,"form-control"],["type","text","formControlName","username","placeholder","Nombre c\xf3digo del usuario",1,"form-control"],["type","password","formControlName","password","placeholder","Password de su cuenta",1,"form-control"],["type","password","formControlName","password2","placeholder","Confirmar la contrase\xf1a",1,"form-control"],["type","submit",1,"btn","btn-primary","float-end"],[1,"form-text","text-danger"]],template:function(t,r){1&t&&(e.TgZ(0,"h2"),e._uU(1,"Validaciones Reactivas"),e.qZA(),e._UZ(2,"hr"),e.TgZ(3,"div",0)(4,"div",1)(5,"form",2),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e.TgZ(6,"div",3)(7,"label",4),e._uU(8,"Nombre"),e.qZA(),e.TgZ(9,"div",5),e._UZ(10,"input",6),e.YNc(11,B,2,0,"span",7),e.qZA()(),e.TgZ(12,"div",3)(13,"label",4),e._uU(14,"Email"),e.qZA(),e.TgZ(15,"div",5),e._UZ(16,"input",8),e.YNc(17,M,2,0,"span",7),e.qZA()(),e.TgZ(18,"div",3)(19,"label",4),e._uU(20,"Username"),e.qZA(),e.TgZ(21,"div",5),e._UZ(22,"input",9),e.YNc(23,O,2,0,"span",7),e.qZA()(),e.TgZ(24,"div",3)(25,"label",4),e._uU(26,"Password"),e.qZA(),e.TgZ(27,"div",5),e._UZ(28,"input",10),e.YNc(29,Q,2,0,"span",7),e.qZA()(),e.TgZ(30,"div",3)(31,"label",4),e._uU(32,"Confirmar"),e.qZA(),e.TgZ(33,"div",5),e._UZ(34,"input",11),e.YNc(35,k,2,0,"span",7),e.qZA()(),e.TgZ(36,"div",0)(37,"div",1)(38,"button",12),e._uU(39," Crear "),e.qZA()()()()()(),e.TgZ(40,"h2"),e._uU(41),e.qZA(),e.TgZ(42,"h2"),e._uU(43),e.qZA(),e.TgZ(44,"h2"),e._uU(45),e.qZA(),e.TgZ(46,"h2"),e._uU(47,"Form errors"),e.qZA(),e.TgZ(48,"pre"),e._uU(49),e.ALo(50,"json"),e.qZA(),e.TgZ(51,"h5"),e._uU(52,"Nombre"),e.qZA(),e.TgZ(53,"pre"),e._uU(54),e.ALo(55,"json"),e.qZA(),e.TgZ(56,"pre"),e._uU(57),e.ALo(58,"json"),e.qZA(),e.TgZ(59,"h5"),e._uU(60,"Email"),e.qZA(),e.TgZ(61,"pre"),e._uU(62),e.ALo(63,"json"),e.qZA(),e.TgZ(64,"pre"),e._uU(65),e.ALo(66,"json"),e.qZA(),e.TgZ(67,"h5"),e._uU(68,"Username"),e.qZA(),e.TgZ(69,"pre"),e._uU(70),e.ALo(71,"json"),e.qZA(),e.TgZ(72,"pre"),e._uU(73),e.ALo(74,"json"),e.qZA(),e.TgZ(75,"h5"),e._uU(76,"Password"),e.qZA(),e.TgZ(77,"pre"),e._uU(78),e.ALo(79,"json"),e.qZA(),e.TgZ(80,"pre"),e._uU(81),e.ALo(82,"json"),e.qZA(),e.TgZ(83,"h5"),e._uU(84,"Confirmar"),e.qZA(),e.TgZ(85,"pre"),e._uU(86),e.ALo(87,"json"),e.qZA(),e.TgZ(88,"pre"),e._uU(89),e.ALo(90,"json"),e.qZA()),2&t&&(e.xp6(5),e.Q6J("formGroup",r.myForm),e.xp6(6),e.Q6J("ngIf",r.isValidField("name")),e.xp6(6),e.Q6J("ngIf",r.isValidField("email")),e.xp6(6),e.Q6J("ngIf",r.isValidField("username")),e.xp6(6),e.Q6J("ngIf",r.isValidField("password")),e.xp6(6),e.Q6J("ngIf",r.isValidField("password2")),e.xp6(6),e.hij("Form Valid: ",r.myForm.valid," "),e.xp6(2),e.hij("Form Status: ",r.myForm.status," "),e.xp6(2),e.hij("Form Pending: ",r.myForm.pending," "),e.xp6(4),e.Oqu(e.lcZ(50,20,r.myForm.errors)),e.xp6(5),e.hij("Valor: ",e.lcZ(55,22,r.myForm.controls.name.value),""),e.xp6(3),e.hij("Valor: ",e.lcZ(58,24,r.myForm.controls.name.errors),""),e.xp6(5),e.hij("Valor: ",e.lcZ(63,26,r.myForm.controls.email.value),""),e.xp6(3),e.hij("Valor: ",e.lcZ(66,28,r.myForm.controls.email.errors),""),e.xp6(5),e.hij("Valor: ",e.lcZ(71,30,r.myForm.controls.username.value),""),e.xp6(3),e.hij("Valor: ",e.lcZ(74,32,r.myForm.controls.username.errors),""),e.xp6(5),e.hij("Valor: ",e.lcZ(79,34,r.myForm.controls.password.value),""),e.xp6(3),e.hij("Valor: ",e.lcZ(82,36,r.myForm.controls.password.errors),""),e.xp6(5),e.hij("Valor: ",e.lcZ(87,38,r.myForm.controls.password2.value),""),e.xp6(3),e.hij("Valor: ",e.lcZ(90,40,r.myForm.controls.password2.errors),""))},dependencies:[c.O5,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,c.Ts],encapsulation:2}),n})()},{path:"**",redirectTo:"sign-up"}]}];let X=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[p.Bz.forChild(D),p.Bz]}),n})(),K=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,X,a.UX]}),n})()}}]);
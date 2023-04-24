"use strict";(self.webpackChunksol=self.webpackChunksol||[]).push([[9853],{9853:(oe,Y,o)=>{o.r(Y),o.d(Y,{TasksModule:()=>D});var l=o(1390),f=o(1206),K=o(7957),T=o(4859),S=o(6709),N=o(3238),x=o(9602),B=o(4850),J=o(9549),R=o(7392),O=o(284),E=o(9506),w=o(8255),H=o(3162),j=o(1948),V=o(4385),F=o(3267),P=o(266),X=o(6468),W=o(4466),t=o(4650);class v{canDeactivate(e,n,i,a){let r=a.root;for(;r.firstChild;)r=r.firstChild;return!(a.url.includes("/tasks")&&!r.paramMap.get("id"))||e.closeDrawer().then(()=>!0)}}v.\u0275fac=function(e){return new(e||v)},v.\u0275prov=t.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"});var tt=o(262),z=o(2843),L=o(1135),U=o(8505),u=o(5698),_=o(3900),k=o(4004),I=o(9300),et=o(9646),nt=o(529);class m{constructor(e){this._httpClient=e,this._tags=new L.X(null),this._task=new L.X(null),this._tasks=new L.X(null)}get tags$(){return this._tags.asObservable()}get task$(){return this._task.asObservable()}get tasks$(){return this._tasks.asObservable()}getTags(){return this._httpClient.get("api/apps/tasks/tags").pipe((0,U.b)(e=>{this._tags.next(e)}))}createTag(e){return this.tags$.pipe((0,u.q)(1),(0,_.w)(n=>this._httpClient.post("api/apps/tasks/tag",{tag:e}).pipe((0,k.U)(i=>(this._tags.next([...n,i]),i)))))}updateTag(e,n){return this.tags$.pipe((0,u.q)(1),(0,_.w)(i=>this._httpClient.patch("api/apps/tasks/tag",{id:e,tag:n}).pipe((0,k.U)(a=>{const r=i.findIndex(c=>c.id===e);return i[r]=a,this._tags.next(i),a}))))}deleteTag(e){return this.tags$.pipe((0,u.q)(1),(0,_.w)(n=>this._httpClient.delete("api/apps/tasks/tag",{params:{id:e}}).pipe((0,k.U)(i=>{const a=n.findIndex(r=>r.id===e);return n.splice(a,1),this._tags.next(n),i}),(0,I.h)(i=>i),(0,_.w)(i=>this.tasks$.pipe((0,u.q)(1),(0,k.U)(a=>(a.forEach(r=>{const c=r.tags.findIndex(g=>g===e);c>-1&&r.tags.splice(c,1)}),i)))))))}getTasks(){return this._httpClient.get("api/apps/tasks/all").pipe((0,U.b)(e=>{this._tasks.next(e)}))}updateTasksOrders(e){return this._httpClient.patch("api/apps/tasks/order",{tasks:e})}searchTasks(e){return this._httpClient.get("api/apps/tasks/search",{params:{query:e}})}getTaskById(e){return this._tasks.pipe((0,u.q)(1),(0,k.U)(n=>{const i=n.find(a=>a.id===e)||null;return this._task.next(i),i}),(0,_.w)(n=>n?(0,et.of)(n):(0,z._)("Could not found task with id of "+e+"!")))}createTask(e){return this.tasks$.pipe((0,u.q)(1),(0,_.w)(n=>this._httpClient.post("api/apps/tasks/task",{type:e}).pipe((0,k.U)(i=>(this._tasks.next([i,...n]),i)))))}updateTask(e,n){return this.tasks$.pipe((0,u.q)(1),(0,_.w)(i=>this._httpClient.patch("api/apps/tasks/task",{id:e,task:n}).pipe((0,k.U)(a=>{const r=i.findIndex(c=>c.id===e);return i[r]=a,this._tasks.next(i),a}),(0,_.w)(a=>this.task$.pipe((0,u.q)(1),(0,I.h)(r=>r&&r.id===e),(0,U.b)(()=>(this._task.next(a),a)))))))}deleteTask(e){return this.tasks$.pipe((0,u.q)(1),(0,_.w)(n=>this._httpClient.delete("api/apps/tasks/task",{params:{id:e}}).pipe((0,k.U)(i=>{const a=n.findIndex(r=>r.id===e);return n.splice(a,1),this._tasks.next(n),i}))))}}m.\u0275fac=function(e){return new(e||m)(t.LFG(nt.eN))},m.\u0275prov=t.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"});class y{constructor(e){this._tasksService=e}resolve(e,n){return this._tasksService.getTags()}}y.\u0275fac=function(e){return new(e||y)(t.LFG(m))},y.\u0275prov=t.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"});class C{constructor(e){this._tasksService=e}resolve(e,n){return this._tasksService.getTasks()}}C.\u0275fac=function(e){return new(e||C)(t.LFG(m))},C.\u0275prov=t.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"});class b{constructor(e,n){this._router=e,this._tasksService=n}resolve(e,n){return this._tasksService.getTaskById(e.paramMap.get("id")).pipe((0,tt.K)(i=>{console.error(i);const a=n.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(a),(0,z._)(i)}))}}b.\u0275fac=function(e){return new(e||b)(t.LFG(l.F0),t.LFG(m))},b.\u0275prov=t.Yz7({token:b,factory:b.\u0275fac,providedIn:"root"});class Q{constructor(){}}Q.\u0275fac=function(e){return new(e||Q)},Q.\u0275cmp=t.Xpm({type:Q,selectors:[["tasks"]],decls:1,vars:0,template:function(e,n){1&e&&t._UZ(0,"router-outlet")},dependencies:[l.lC],encapsulation:2,changeDetection:0});var d=o(6895),q=o(7579),p=o(2722),st=o(4968),it=o(8778),at=o(4668);const ot=["matDrawer"];function rt(s,e){1&s&&(t.TgZ(0,"span"),t._uU(1,"All tasks completed!"),t.qZA())}function ct(s,e){if(1&s&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&s){const n=t.oxw();t.xp6(1),t.hij("",n.tasksCount.incomplete," remaining tasks")}}function lt(s,e){1&s&&t._UZ(0,"div",28)}function pt(s,e){1&s&&(t.ynx(0),t._UZ(1,"div",29),t.BQk())}function gt(s,e){1&s&&(t.ynx(0),t._UZ(1,"mat-icon",31),t.BQk()),2&s&&(t.xp6(1),t.Q6J("svgIcon","heroicons_outline:check-circle"))}function mt(s,e){1&s&&(t.ynx(0),t._UZ(1,"mat-icon",32),t.BQk()),2&s&&(t.xp6(1),t.Q6J("svgIcon","heroicons_outline:check-circle"))}function dt(s,e){if(1&s){const n=t.EpF();t.TgZ(0,"button",30),t.NdJ("click",function(){t.CHM(n);const a=t.oxw().$implicit,r=t.oxw(2);return t.KtG(r.toggleCompleted(a))}),t.YNc(1,gt,2,1,"ng-container",9),t.YNc(2,mt,2,1,"ng-container",9),t.qZA()}if(2&s){const n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",n.completed),t.xp6(1),t.Q6J("ngIf",!n.completed)}}function ut(s,e){if(1&s&&(t.ynx(0),t.TgZ(1,"span"),t._uU(2),t.qZA(),t.BQk()),2&s){const n=t.oxw().$implicit;t.xp6(2),t.Oqu(n.title)}}function _t(s,e){if(1&s&&(t.ynx(0),t.TgZ(1,"span",33),t._uU(2),t.ALo(3,"titlecase"),t.qZA(),t.BQk()),2&s){const n=t.oxw().$implicit;t.xp6(2),t.hij("",t.lcZ(3,1,n.type)," title")}}function kt(s,e){1&s&&t._UZ(0,"mat-icon",37),2&s&&t.Q6J("svgIcon","heroicons_solid:arrow-narrow-down")("title","Low")}function ht(s,e){1&s&&t._UZ(0,"mat-icon",38),2&s&&t.Q6J("svgIcon","heroicons_solid:arrow-narrow-up")("title","High")}function ft(s,e){if(1&s&&(t.ynx(0),t.TgZ(1,"div",34),t.YNc(2,kt,1,2,"mat-icon",35),t.YNc(3,ht,1,2,"mat-icon",36),t.qZA(),t.BQk()),2&s){const n=t.oxw().$implicit;t.xp6(2),t.Q6J("ngIf",0===n.priority),t.xp6(1),t.Q6J("ngIf",2===n.priority)}}function Tt(s,e){if(1&s&&(t.TgZ(0,"div",39),t._uU(1),t.ALo(2,"date"),t.qZA()),2&s){const n=t.oxw().$implicit;t.xp6(1),t.hij(" ",t.xi3(2,1,n.dueDate,"LLL dd")," ")}}const xt=function(s,e,n){return{"h-12 text-lg font-semibold bg-gray-50 dark:bg-transparent":s,"h-16":e,"text-hint":n}},vt=function(s){return[s]};function yt(s,e){if(1&s&&(t.ynx(0),t.TgZ(1,"div",19),t.YNc(2,lt,1,0,"div",20),t.TgZ(3,"div",21),t.YNc(4,pt,2,0,"ng-container",9),t.TgZ(5,"div",22),t._UZ(6,"mat-icon",23),t.qZA(),t.YNc(7,dt,3,2,"button",24),t.TgZ(8,"a",25)(9,"div",26),t.YNc(10,ut,3,1,"ng-container",9),t.YNc(11,_t,4,3,"ng-container",9),t.qZA(),t.YNc(12,ft,4,2,"ng-container",9),t.YNc(13,Tt,3,4,"div",27),t.qZA()()(),t.BQk()),2&s){const n=e.$implicit,i=e.first,a=t.oxw(2);t.xp6(1),t.ekj("border-t",i),t.Q6J("id","task-"+n.id)("ngClass",t.kEZ(13,xt,"section"===n.type,"task"===n.type,n.completed))("cdkDragLockAxis","y"),t.xp6(3),t.Q6J("ngIf",a.selectedTask&&a.selectedTask.id===n.id),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:menu"),t.xp6(1),t.Q6J("ngIf","task"===n.type),t.xp6(1),t.Q6J("routerLink",t.VKq(17,vt,n.id)),t.xp6(2),t.Q6J("ngIf",n.title),t.xp6(1),t.Q6J("ngIf",!n.title),t.xp6(1),t.Q6J("ngIf","task"===n.type),t.xp6(1),t.Q6J("ngIf","task"===n.type)}}function Ct(s,e){if(1&s){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",17),t.NdJ("cdkDropListDropped",function(a){t.CHM(n);const r=t.oxw();return t.KtG(r.dropped(a))}),t.YNc(2,yt,14,19,"ng-container",18),t.qZA(),t.BQk()}if(2&s){const n=t.oxw();t.xp6(1),t.Q6J("cdkDropListData",n.tasks),t.xp6(1),t.Q6J("ngForOf",n.tasks)("ngForTrackBy",n.trackByFn)}}function bt(s,e){1&s&&(t.TgZ(0,"div",40),t._UZ(1,"mat-icon",41),t.TgZ(2,"div",42),t._uU(3,"Add a task to start planning!"),t.qZA()()),2&s&&(t.xp6(1),t.Q6J("svgIcon","heroicons_outline:clipboard-list"))}class Z{constructor(e,n,i,a,r,c,g){this._activatedRoute=e,this._changeDetectorRef=n,this._document=i,this._router=a,this._tasksService=r,this._solMediaWatcherService=c,this._solNavigationService=g,this.tasksCount={completed:0,incomplete:0,total:0},this._unsubscribeAll=new q.x}ngOnInit(){this._tasksService.tags$.pipe((0,p.R)(this._unsubscribeAll)).subscribe(e=>{this.tags=e,this._changeDetectorRef.markForCheck()}),this._tasksService.tasks$.pipe((0,p.R)(this._unsubscribeAll)).subscribe(e=>{this.tasks=e,this.tasksCount.total=this.tasks.filter(n=>"task"===n.type).length,this.tasksCount.completed=this.tasks.filter(n=>"task"===n.type&&n.completed).length,this.tasksCount.incomplete=this.tasksCount.total-this.tasksCount.completed,this._changeDetectorRef.markForCheck(),setTimeout(()=>{const n=this._solNavigationService.getComponent("mainNavigation");n&&(this._solNavigationService.getItem("apps.tasks",n.navigation).subtitle=this.tasksCount.incomplete+" remaining tasks",n.refresh())})}),this._tasksService.task$.pipe((0,p.R)(this._unsubscribeAll)).subscribe(e=>{this.selectedTask=e,this._changeDetectorRef.markForCheck()}),this._solMediaWatcherService.onMediaQueryChange$("(min-width: 1440px)").pipe((0,p.R)(this._unsubscribeAll)).subscribe(e=>{this.drawerMode=e.matches?"side":"over",this._changeDetectorRef.markForCheck()}),(0,st.R)(this._document,"keydown").pipe((0,p.R)(this._unsubscribeAll),(0,I.h)(e=>(!0===e.ctrlKey||e.metaKey)&&("/"===e.key||"."===e.key))).subscribe(e=>{"/"===e.key&&this.createTask("task"),"."===e.key&&this.createTask("section")})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}onBackdropClicked(){this._router.navigate(["./"],{relativeTo:this._activatedRoute}),this._changeDetectorRef.markForCheck()}createTask(e){this._tasksService.createTask(e).subscribe(n=>{this._router.navigate(["./",n.id],{relativeTo:this._activatedRoute}),this._changeDetectorRef.markForCheck()})}toggleCompleted(e){e.completed=!e.completed,this._tasksService.updateTask(e.id,e).subscribe(),this._changeDetectorRef.markForCheck()}dropped(e){(0,f.bA)(e.container.data,e.previousIndex,e.currentIndex),this._tasksService.updateTasksOrders(e.container.data).subscribe(),this._changeDetectorRef.markForCheck()}trackByFn(e,n){return n.id||e}}Z.\u0275fac=function(e){return new(e||Z)(t.Y36(l.gz),t.Y36(t.sBO),t.Y36(d.K0),t.Y36(l.F0),t.Y36(m),t.Y36(it.L),t.Y36(at.kg))},Z.\u0275cmp=t.Xpm({type:Z,selectors:[["tasks-list"]],viewQuery:function(e,n){if(1&e&&t.Gf(ot,7),2&e){let i;t.iGM(i=t.CRH())&&(n.matDrawer=i.first)}},decls:26,vars:14,consts:[[1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-hidden"],[1,"flex-auto","h-full","bg-card","dark:bg-transparent",3,"backdropClick"],[1,"w-full","sm:w-128","dark:bg-gray-900",3,"mode","opened","position","disableClose"],["matDrawer",""],[1,"flex","flex-col"],[1,"flex","flex-col","flex-auto"],[1,"flex","flex-col","sm:flex-row","items-start","sm:items-center","sm:justify-between","py-8","px-6","md:px-8"],[1,"text-4xl","font-extrabold","tracking-tight","leading-none"],[1,"ml-0.5","font-medium","text-secondary"],[4,"ngIf"],[1,"mt-4","sm:mt-0"],["mat-flat-button","",3,"color","matTooltip","click"],[3,"svgIcon"],[1,"ml-2","mr-1"],["mat-flat-button","",1,"ml-3",3,"color","matTooltip","click"],[4,"ngIf","ngIfElse"],["noTasks",""],["cdkDropList","",1,"divide-y",3,"cdkDropListData","cdkDropListDropped"],[4,"ngFor","ngForOf","ngForTrackBy"],["cdkDrag","",1,"group","w-full","select-none","hover:bg-gray-100","dark:hover:bg-hover",3,"id","ngClass","cdkDragLockAxis"],["class","flex flex-0 w-0 h-0",4,"cdkDragPreview"],[1,"relative","flex","items-center","h-full","pl-10"],["cdkDragHandle","",1,"md:hidden","absolute","flex","items-center","justify-center","inset-y-0","left-0","w-8","cursor-move","md:group-hover:flex"],[1,"icon-size-5","text-hint",3,"svgIcon"],["class","mr-2 -ml-2.5 leading-none","mat-icon-button","",3,"click",4,"ngIf"],[1,"flex","flex-auto","items-center","min-w-0","h-full","pr-7",3,"routerLink"],[1,"flex-auto","mr-2","truncate"],["class","text-sm whitespace-nowrap text-secondary",4,"ngIf"],[1,"flex","flex-0","w-0","h-0"],[1,"z-10","absolute","-top-px","right-0","-bottom-px","flex","flex-0","w-1","bg-primary"],["mat-icon-button","",1,"mr-2","-ml-2.5","leading-none",3,"click"],[1,"text-primary",3,"svgIcon"],[1,"text-hint",3,"svgIcon"],[1,"select-none","text-hint"],[1,"w-4","h-4","mr-3"],["class","icon-size-4 text-green-600 dark:text-green-400",3,"svgIcon","title",4,"ngIf"],["class","icon-size-4 text-red-600 dark:text-red-400",3,"svgIcon","title",4,"ngIf"],[1,"icon-size-4","text-green-600","dark:text-green-400",3,"svgIcon","title"],[1,"icon-size-4","text-red-600","dark:text-red-400",3,"svgIcon","title"],[1,"text-sm","whitespace-nowrap","text-secondary"],[1,"flex","flex-auto","flex-col","items-center","justify-center","bg-gray-100","dark:bg-transparent"],[1,"icon-size-24",3,"svgIcon"],[1,"mt-4","text-2xl","font-semibold","tracking-tight","text-secondary"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0)(1,"mat-drawer-container",1),t.NdJ("backdropClick",function(){return n.onBackdropClicked()}),t.TgZ(2,"mat-drawer",2,3),t._UZ(4,"router-outlet"),t.qZA(),t.TgZ(5,"mat-drawer-content",4)(6,"div",5)(7,"div",6)(8,"div")(9,"div",7),t._uU(10,"Tasks"),t.qZA(),t.TgZ(11,"div",8),t.YNc(12,rt,2,0,"span",9),t.YNc(13,ct,2,1,"span",9),t.qZA()(),t.TgZ(14,"div",10)(15,"button",11),t.NdJ("click",function(){return n.createTask("section")}),t._UZ(16,"mat-icon",12),t.TgZ(17,"span",13),t._uU(18,"Add Section"),t.qZA()(),t.TgZ(19,"button",14),t.NdJ("click",function(){return n.createTask("task")}),t._UZ(20,"mat-icon",12),t.TgZ(21,"span",13),t._uU(22,"Add Task"),t.qZA()()()(),t.YNc(23,Ct,3,3,"ng-container",15),t.YNc(24,bt,4,1,"ng-template",null,16,t.W1O),t.qZA()()()()),2&e){const i=t.MAs(25);t.xp6(2),t.Q6J("mode",n.drawerMode)("opened",!1)("position","end")("disableClose",!0),t.xp6(10),t.Q6J("ngIf",0===n.tasksCount.incomplete),t.xp6(1),t.Q6J("ngIf",0!==n.tasksCount.incomplete),t.xp6(2),t.Q6J("color","accent")("matTooltip","Shortcut: Ctrl + ."),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:plus"),t.xp6(3),t.Q6J("color","primary")("matTooltip","Shortcut: Ctrl + /"),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:plus"),t.xp6(3),t.Q6J("ngIf",n.tasks&&n.tasks.length>0)("ngIfElse",i)}},dependencies:[l.lC,l.rH,f.Wj,f.Zt,f.Bh,f.pV,T.lW,T.RK,R.Hw,F.jA,F.kh,F.LW,P.gM,d.mk,d.sg,d.O5,d.rS,d.uU],encapsulation:2,changeDetection:0});var Zt=o(4080),$=o(8372),Dt=o(9858),G=o(1837),h=o(4006),It=o(7763),Qt=o(8184),At=o(9349),Jt=o(9455);const wt=["tagsPanelOrigin"],Ft=["tagsPanel"],Ut=["titleField"];function Nt(s,e){1&s&&(t.ynx(0),t.TgZ(1,"div",39),t._UZ(2,"mat-icon",7),t.TgZ(3,"span",40),t._uU(4,"MARK AS COMPLETE"),t.qZA()(),t.BQk()),2&s&&(t.xp6(2),t.Q6J("svgIcon","heroicons_outline:check-circle"))}function Rt(s,e){1&s&&(t.ynx(0),t.TgZ(1,"div",39),t._UZ(2,"mat-icon",41),t.TgZ(3,"span",40),t._uU(4,"MARK AS INCOMPLETE"),t.qZA()(),t.BQk()),2&s&&(t.xp6(2),t.Q6J("svgIcon","heroicons_outline:check-circle"))}function Lt(s,e){if(1&s&&(t.ynx(0),t.TgZ(1,"div",43)(2,"span",44),t._uU(3),t.qZA()(),t.BQk()),2&s){const n=e.$implicit;t.xp6(3),t.Oqu(n.title)}}function Mt(s,e){if(1&s&&(t.ynx(0),t.YNc(1,Lt,4,1,"ng-container",42),t.ALo(2,"solFindByKey"),t.BQk()),2&s){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.Dn7(2,2,n.task.tags,"id",n.tags))("ngForTrackBy",n.trackByFn)}}function Yt(s,e){1&s&&(t.ynx(0),t._UZ(1,"mat-icon",45),t.TgZ(2,"span",46),t._uU(3,"Edit"),t.qZA(),t.BQk()),2&s&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:pencil-alt"))}function St(s,e){1&s&&(t.ynx(0),t._UZ(1,"mat-icon",45),t.TgZ(2,"span",46),t._uU(3,"Add"),t.qZA(),t.BQk()),2&s&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:plus-circle"))}function Bt(s,e){1&s&&t._UZ(0,"mat-icon",45),2&s&&t.Q6J("svgIcon","heroicons_solid:pencil-alt")}function Ot(s,e){1&s&&t._UZ(0,"mat-icon",45),2&s&&t.Q6J("svgIcon","heroicons_solid:check")}function Et(s,e){if(1&s){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",56),t.NdJ("click",function(){const r=t.CHM(n).$implicit,c=t.oxw(3);return t.KtG(c.toggleTaskTag(r))}),t._UZ(2,"mat-checkbox",57),t.TgZ(3,"div",58),t._uU(4),t.qZA()(),t.BQk()}if(2&s){const n=e.$implicit,i=t.oxw(3);t.xp6(2),t.Q6J("checked",i.task.tags.includes(n.id))("color","primary")("disableRipple",!0),t.xp6(2),t.Oqu(n.title)}}function Pt(s,e){if(1&s&&(t.ynx(0),t.YNc(1,Et,5,4,"ng-container",42),t.BQk()),2&s){const n=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",n.filteredTags)("ngForTrackBy",n.trackByFn)}}function zt(s,e){if(1&s){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",5)(2,"mat-form-field",60)(3,"input",61),t.NdJ("input",function(a){const c=t.CHM(n).$implicit,g=t.oxw(3);return t.KtG(g.updateTagTitle(c,a))}),t.qZA(),t.TgZ(4,"button",62),t.NdJ("click",function(){const r=t.CHM(n).$implicit,c=t.oxw(3);return t.KtG(c.deleteTag(r))}),t._UZ(5,"mat-icon",63),t.qZA()()(),t.BQk()}if(2&s){const n=e.$implicit;t.xp6(2),t.Q6J("subscriptSizing","dynamic"),t.xp6(1),t.Q6J("value",n.title),t.xp6(2),t.Q6J("svgIcon","heroicons_solid:trash")}}function qt(s,e){if(1&s&&(t.ynx(0),t.TgZ(1,"div",59),t.YNc(2,zt,6,3,"ng-container",42),t.qZA(),t.BQk()),2&s){const n=t.oxw(2);t.xp6(2),t.Q6J("ngForOf",n.filteredTags)("ngForTrackBy",n.trackByFn)}}function $t(s,e){if(1&s){const n=t.EpF();t.TgZ(0,"div",64),t.NdJ("click",function(){t.CHM(n),t.oxw();const a=t.MAs(6);return t.oxw().createTag(a.value),t.KtG(a.value="")}),t._UZ(1,"mat-icon",65),t.TgZ(2,"div",66),t._uU(3,'Create "'),t.TgZ(4,"b"),t._uU(5),t.qZA(),t._uU(6,'"'),t.qZA()()}if(2&s){t.oxw();const n=t.MAs(6);t.xp6(1),t.Q6J("svgIcon","heroicons_solid:plus-circle"),t.xp6(4),t.Oqu(n.value)}}function Gt(s,e){if(1&s){const n=t.EpF();t.TgZ(0,"div",47)(1,"div",48)(2,"div",5),t._UZ(3,"mat-icon",45),t.TgZ(4,"div",49)(5,"input",50,51),t.NdJ("input",function(a){t.CHM(n);const r=t.oxw();return t.KtG(r.filterTags(a))})("keydown",function(a){t.CHM(n);const r=t.oxw();return t.KtG(r.filterTagsInputKeyDown(a))}),t.qZA()()(),t.TgZ(7,"button",52),t.NdJ("click",function(){t.CHM(n);const a=t.oxw();return t.KtG(a.toggleTagsEditMode())}),t.YNc(8,Bt,1,1,"mat-icon",53),t.YNc(9,Ot,1,1,"mat-icon",53),t.qZA()(),t.TgZ(10,"div",54),t.YNc(11,Pt,2,2,"ng-container",4),t.YNc(12,qt,3,2,"ng-container",4),t.YNc(13,$t,7,2,"div",55),t.qZA()()}if(2&s){const n=t.MAs(6),i=t.oxw();t.xp6(3),t.Q6J("svgIcon","heroicons_solid:search"),t.xp6(2),t.Q6J("maxLength",30),t.xp6(3),t.Q6J("ngIf",!i.tagsEditMode),t.xp6(1),t.Q6J("ngIf",i.tagsEditMode),t.xp6(2),t.Q6J("ngIf",!i.tagsEditMode),t.xp6(1),t.Q6J("ngIf",i.tagsEditMode),t.xp6(1),t.Q6J("ngIf",i.shouldShowCreateTagButton(n.value))}}function Kt(s,e){1&s&&(t.ynx(0),t._UZ(1,"mat-icon",32),t.TgZ(2,"span",67),t._uU(3,"Low"),t.qZA(),t.BQk()),2&s&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:arrow-narrow-down"))}function Ht(s,e){1&s&&(t.ynx(0),t._UZ(1,"mat-icon",68),t.TgZ(2,"span",67),t._uU(3,"Normal"),t.qZA(),t.BQk()),2&s&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:minus"))}function jt(s,e){1&s&&(t.ynx(0),t._UZ(1,"mat-icon",68),t.TgZ(2,"span",67),t._uU(3,"High"),t.qZA(),t.BQk()),2&s&&(t.xp6(1),t.Q6J("svgIcon","heroicons_solid:arrow-narrow-up"))}function Vt(s,e){if(1&s&&(t.ynx(0),t._uU(1),t.ALo(2,"date"),t.BQk()),2&s){const n=t.oxw();t.xp6(1),t.Oqu(t.xi3(2,1,n.task.dueDate,"longDate"))}}function Xt(s,e){1&s&&(t.ynx(0),t._uU(1,"Not set"),t.BQk())}const Wt=function(){return["../"]},te=function(s,e,n){return{"text-green-800 bg-green-200 dark:text-green-100 dark:bg-green-500":s,"text-gray-800 bg-gray-200 dark:text-gray-100 dark:bg-gray-500":e,"text-red-800 bg-red-200 dark:text-red-100 dark:bg-red-500":n}},M=function(s){return{"bg-hover":s}},ee=function(s,e,n){return{"text-gray-500 bg-gray-100 dark:text-gray-300 dark:bg-gray-700":s,"text-green-800 bg-green-200 dark:text-green-100 dark:bg-green-500":e,"text-red-800 bg-red-200 dark:text-red-100 dark:bg-red-500":n}};class A{constructor(e,n,i,a,r,c,g,se,ie,ae){this._activatedRoute=e,this._changeDetectorRef=n,this._formBuilder=i,this._solConfirmationService=a,this._renderer2=r,this._router=c,this._tasksListComponent=g,this._tasksService=se,this._overlay=ie,this._viewContainerRef=ae,this.tagsEditMode=!1,this._unsubscribeAll=new q.x}ngOnInit(){this._tasksListComponent.matDrawer.open(),this.taskForm=this._formBuilder.group({id:[""],type:[""],title:[""],notes:[""],completed:[!1],dueDate:[null],priority:[0],tags:[[]],order:[0]}),this._tasksService.tags$.pipe((0,p.R)(this._unsubscribeAll)).subscribe(e=>{this.tags=e,this.filteredTags=e,this._changeDetectorRef.markForCheck()}),this._tasksService.tasks$.pipe((0,p.R)(this._unsubscribeAll)).subscribe(e=>{this.tasks=e,this._changeDetectorRef.markForCheck()}),this._tasksService.task$.pipe((0,p.R)(this._unsubscribeAll)).subscribe(e=>{this._tasksListComponent.matDrawer.open(),this.task=e,this.taskForm.patchValue(e,{emitEvent:!1}),this._changeDetectorRef.markForCheck()}),this.taskForm.valueChanges.pipe((0,U.b)(e=>{this.task=(0,Dt.Z)(this.task,e)}),(0,$.b)(300),(0,p.R)(this._unsubscribeAll)).subscribe(e=>{this._tasksService.updateTask(e.id,e).subscribe(),this._changeDetectorRef.markForCheck()}),this._router.events.pipe((0,p.R)(this._unsubscribeAll),(0,I.h)(e=>e instanceof l.m2)).subscribe(()=>{this._titleField.nativeElement.focus()})}ngAfterViewInit(){this._tasksListComponent.matDrawer.openedChange.pipe((0,p.R)(this._unsubscribeAll),(0,I.h)(e=>e)).subscribe(()=>{this._titleField.nativeElement.focus()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete(),this._tagsPanelOverlayRef&&this._tagsPanelOverlayRef.dispose()}closeDrawer(){return this._tasksListComponent.matDrawer.close()}toggleCompleted(){const e=this.taskForm.get("completed");e.setValue(!e.value)}openTagsPanel(){this._tagsPanelOverlayRef=this._overlay.create({backdropClass:"",hasBackdrop:!0,scrollStrategy:this._overlay.scrollStrategies.block(),positionStrategy:this._overlay.position().flexibleConnectedTo(this._tagsPanelOrigin.nativeElement).withFlexibleDimensions(!0).withViewportMargin(64).withLockedPosition(!0).withPositions([{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"}])}),this._tagsPanelOverlayRef.attachments().subscribe(()=>{this._tagsPanelOverlayRef.overlayElement.querySelector("input").focus()});const e=new Zt.UE(this._tagsPanel,this._viewContainerRef);this._tagsPanelOverlayRef.attach(e),this._tagsPanelOverlayRef.backdropClick().subscribe(()=>{this._tagsPanelOverlayRef&&this._tagsPanelOverlayRef.hasAttached()&&(this._tagsPanelOverlayRef.detach(),this.filteredTags=this.tags,this.tagsEditMode=!1),e&&e.isAttached&&e.detach()})}toggleTagsEditMode(){this.tagsEditMode=!this.tagsEditMode}filterTags(e){const n=e.target.value.toLowerCase();this.filteredTags=this.tags.filter(i=>i.title.toLowerCase().includes(n))}filterTagsInputKeyDown(e){if("Enter"!==e.key)return;if(0===this.filteredTags.length)return this.createTag(e.target.value),void(e.target.value="");const n=this.filteredTags[0];this.task.tags.find(a=>a===n.id)?this.deleteTagFromTask(n):this.addTagToTask(n)}createTag(e){this._tasksService.createTag({title:e}).subscribe(i=>{this.addTagToTask(i)})}updateTagTitle(e,n){e.title=n.target.value,this._tasksService.updateTag(e.id,e).pipe((0,$.b)(300)).subscribe(),this._changeDetectorRef.markForCheck()}deleteTag(e){this._tasksService.deleteTag(e.id).subscribe(),this._changeDetectorRef.markForCheck()}addTagToTask(e){this.task.tags.unshift(e.id),this.taskForm.get("tags").patchValue(this.task.tags),this._changeDetectorRef.markForCheck()}deleteTagFromTask(e){this.task.tags.splice(this.task.tags.findIndex(n=>n===e.id),1),this.taskForm.get("tags").patchValue(this.task.tags),this._changeDetectorRef.markForCheck()}toggleTaskTag(e){this.task.tags.includes(e.id)?this.deleteTagFromTask(e):this.addTagToTask(e)}shouldShowCreateTagButton(e){return!(""===e||this.tags.findIndex(n=>n.title.toLowerCase()===e.toLowerCase())>-1)}setTaskPriority(e){this.taskForm.get("priority").setValue(e)}isOverdue(){return G.ou.fromISO(this.task.dueDate).startOf("day")<G.ou.now().startOf("day")}deleteTask(){this._solConfirmationService.open({title:"Delete task",message:"Are you sure you want to delete this task? This action cannot be undone!",actions:{confirm:{label:"Delete"}}}).afterClosed().subscribe(n=>{if("confirmed"===n){const i=this.task.id,a=this.tasks.findIndex(g=>g.id===i),c=1===this.tasks.length&&this.tasks[0].id===i?null:this.tasks[a+(a===this.tasks.length-1?-1:1)].id;this._tasksService.deleteTask(i).subscribe(g=>{g&&this._router.navigate(c?["../",c]:["../"],{relativeTo:this._activatedRoute})}),this._changeDetectorRef.markForCheck()}})}trackByFn(e,n){return n.id||e}}A.\u0275fac=function(e){return new(e||A)(t.Y36(l.gz),t.Y36(t.sBO),t.Y36(h.QS),t.Y36(It.Z),t.Y36(t.Qsj),t.Y36(l.F0),t.Y36(Z),t.Y36(m),t.Y36(Qt.aV),t.Y36(t.s_b))},A.\u0275cmp=t.Xpm({type:A,selectors:[["tasks-details"]],viewQuery:function(e,n){if(1&e&&(t.Gf(wt,5),t.Gf(Ft,5),t.Gf(Ut,5)),2&e){let i;t.iGM(i=t.CRH())&&(n._tagsPanelOrigin=i.first),t.iGM(i=t.CRH())&&(n._tagsPanel=i.first),t.iGM(i=t.CRH())&&(n._titleField=i.first)}},decls:82,vars:53,consts:[[1,"flex","flex-auto"],[1,"flex","flex-col","flex-auto","p-6","pt-10","sm:p-8","sm:pt-10","overflow-y-auto",3,"formGroup"],[1,"flex","items-center","justify-between","-mt-3","-ml-4"],["mat-button","",1,"pr-4","pl-3.5",3,"click"],[4,"ngIf"],[1,"flex","items-center"],["mat-icon-button","",3,"matMenuTriggerFor"],[3,"svgIcon"],["moreMenu","matMenu"],["mat-menu-item","",3,"click"],["mat-icon-button","",3,"routerLink"],[1,"mt-6","mb-8"],[1,"w-full",3,"subscriptSizing"],["matInput","","cdkTextareaAutosize","",3,"formControlName","spellcheck"],["titleField",""],[1,"mt-8"],[1,"font-medium","mb-1.5"],[1,"flex","flex-wrap","items-center","-m-1.5"],[1,"flex","items-center","justify-center","px-4","m-1.5","rounded-full","leading-9","cursor-pointer","text-gray-500","bg-gray-100","dark:text-gray-300","dark:bg-gray-700",3,"click"],["tagsPanelOrigin",""],["tagsPanel",""],[1,"flex","flex-wrap","items-center","mt-8"],[1,"font-medium"],[1,"flex","items-center","mt-1.5","px-4","leading-9","rounded-full","cursor-pointer",3,"ngClass","matMenuTriggerFor"],["priorityMenu","matMenu"],["mat-menu-item","",3,"ngClass","click"],[1,"inline-flex","items-center","justify-between","w-full","min-w-30","leading-5"],[1,"mr-0","icon-size-4","text-green-600","dark:text-green-500",3,"svgIcon"],[1,"mr-0","icon-size-4","text-gray-600","dark:text-gray-500",3,"svgIcon"],[1,"mr-0","icon-size-4","text-red-600","dark:text-red-500",3,"svgIcon"],[1,"ml-6"],[1,"relative","flex","items-center","mt-1.5","px-4","leading-9","rounded-full","cursor-pointer",3,"ngClass","click"],[1,"icon-size-5","text-current",3,"svgIcon"],[1,"ml-2","text-md","font-medium"],[1,"sol-mat-dense","invisible","absolute","inset-0","-mt-2.5","opacity-0","pointer-events-none",3,"subscriptSizing"],["matInput","",3,"formControlName","matDatepicker"],["dueDatePicker",""],["mat-button","","matDatepickerCancel","",3,"click"],["mat-flat-button","","matDatepickerApply","",1,"",3,"color"],[1,"flex","items-center","justify-center"],[1,"ml-2","font-semibold"],[1,"text-primary",3,"svgIcon"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"flex","items-center","justify-center","px-4","m-1.5","rounded-full","leading-9","text-gray-500","bg-gray-100","dark:text-gray-300","dark:bg-gray-700"],[1,"text-md","font-medium","whitespace-nowrap"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-1.5","text-md","font-medium","whitespace-nowrap"],[1,"w-60","rounded","border","shadow-md","bg-card"],[1,"flex","items-center","m-3","mr-2"],[1,"ml-2"],["type","text","placeholder","Enter tag name",1,"w-full","min-w-0","py-1","border-0",3,"maxLength","input","keydown"],["newTagInput",""],["mat-icon-button","",1,"ml-1",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],[1,"flex","flex-col","max-h-64","py-2","border-t","overflow-y-auto"],["class","flex items-center h-10 min-h-10 -ml-0.5 pl-4 pr-3 leading-none cursor-pointer hover:bg-hover","matRipple","",3,"click",4,"ngIf"],["matRipple","",1,"flex","items-center","h-10","min-h-10","pl-1","pr-4","cursor-pointer","hover:bg-hover",3,"click"],[1,"flex","items-center","h-10","min-h-10","pointer-events-none",3,"checked","color","disableRipple"],[1,"ml-1"],[1,"py-2","space-y-2"],[1,"sol-mat-dense","w-full","mx-4",3,"subscriptSizing"],["matInput","",3,"value","input"],["mat-icon-button","","matSuffix","",3,"click"],[1,"icon-size-5","ml-2",3,"svgIcon"],["matRipple","",1,"flex","items-center","h-10","min-h-10","-ml-0.5","pl-4","pr-3","leading-none","cursor-pointer","hover:bg-hover",3,"click"],[1,"mr-2","icon-size-5",3,"svgIcon"],[1,"break-all"],[1,"ml-2","mr-1","text-md","font-medium"],[1,"icon-size-4","text-current",3,"svgIcon"]],template:function(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"button",3),t.NdJ("click",function(){return n.toggleCompleted()}),t.YNc(4,Nt,5,1,"ng-container",4),t.YNc(5,Rt,5,1,"ng-container",4),t.qZA(),t.TgZ(6,"div",5)(7,"button",6),t._UZ(8,"mat-icon",7),t.qZA(),t.TgZ(9,"mat-menu",null,8)(11,"button",9),t.NdJ("click",function(){return n.deleteTask()}),t._UZ(12,"mat-icon",7),t.TgZ(13,"span"),t._uU(14),t.qZA()()(),t.TgZ(15,"a",10),t._UZ(16,"mat-icon",7),t.qZA()()(),t._UZ(17,"mat-divider",11),t.TgZ(18,"div")(19,"mat-form-field",12)(20,"mat-label"),t._uU(21),t.qZA(),t._UZ(22,"textarea",13,14),t.qZA()(),t.TgZ(24,"div",15)(25,"div",16),t._uU(26,"Tags"),t.qZA(),t.TgZ(27,"div",17),t.YNc(28,Mt,3,6,"ng-container",4),t.TgZ(29,"div",18,19),t.NdJ("click",function(){return n.openTagsPanel()}),t.YNc(31,Yt,4,1,"ng-container",4),t.YNc(32,St,4,1,"ng-container",4),t.YNc(33,Gt,14,7,"ng-template",null,20,t.W1O),t.qZA()()(),t.TgZ(35,"div",21)(36,"div")(37,"div",22),t._uU(38,"Priority"),t.qZA(),t.TgZ(39,"div",23),t.YNc(40,Kt,4,1,"ng-container",4),t.YNc(41,Ht,4,1,"ng-container",4),t.YNc(42,jt,4,1,"ng-container",4),t.qZA(),t.TgZ(43,"mat-menu",null,24)(45,"button",25),t.NdJ("click",function(){return n.setTaskPriority(0)}),t.TgZ(46,"span",26)(47,"span",22),t._uU(48,"Low"),t.qZA(),t._UZ(49,"mat-icon",27),t.qZA()(),t.TgZ(50,"button",25),t.NdJ("click",function(){return n.setTaskPriority(1)}),t.TgZ(51,"span",26)(52,"span",22),t._uU(53,"Normal"),t.qZA(),t._UZ(54,"mat-icon",28),t.qZA()(),t.TgZ(55,"button",25),t.NdJ("click",function(){return n.setTaskPriority(2)}),t.TgZ(56,"span",26)(57,"span",22),t._uU(58,"High"),t.qZA(),t._UZ(59,"mat-icon",29),t.qZA()()()(),t.TgZ(60,"div",30)(61,"div",22),t._uU(62,"Due date"),t.qZA(),t.TgZ(63,"div",31),t.NdJ("click",function(){t.CHM(i);const r=t.MAs(71);return t.KtG(r.open())}),t._UZ(64,"mat-icon",32),t.TgZ(65,"span",33),t.YNc(66,Vt,3,4,"ng-container",4),t.YNc(67,Xt,2,0,"ng-container",4),t.qZA(),t.TgZ(68,"mat-form-field",34),t._UZ(69,"input",35),t.TgZ(70,"mat-datepicker",null,36)(72,"mat-datepicker-actions")(73,"button",37),t.NdJ("click",function(){return n.taskForm.get("dueDate").setValue(null)}),t._uU(74,"Clear "),t.qZA(),t.TgZ(75,"button",38),t._uU(76,"Select "),t.qZA()()()()()()(),t.TgZ(77,"div",15)(78,"mat-form-field",12)(79,"mat-label"),t._uU(80,"Notes"),t.qZA(),t._UZ(81,"textarea",13),t.qZA()()()()}if(2&e){const i=t.MAs(10),a=t.MAs(44),r=t.MAs(71);t.xp6(1),t.Q6J("formGroup",n.taskForm),t.xp6(3),t.Q6J("ngIf",!n.taskForm.get("completed").value),t.xp6(1),t.Q6J("ngIf",n.taskForm.get("completed").value),t.xp6(2),t.Q6J("matMenuTriggerFor",i),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:dots-vertical"),t.xp6(4),t.Q6J("svgIcon","heroicons_outline:trash"),t.xp6(2),t.hij("Delete ","task"===n.task.type?"task":"section",""),t.xp6(1),t.Q6J("routerLink",t.DdM(38,Wt)),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:x"),t.xp6(3),t.Q6J("subscriptSizing","dynamic"),t.xp6(2),t.Oqu("task"===n.task.type?"Task title":"Section title"),t.xp6(1),t.Q6J("formControlName","title")("spellcheck",!1),t.xp6(6),t.Q6J("ngIf",n.task.tags.length),t.xp6(3),t.Q6J("ngIf",n.task.tags.length),t.xp6(1),t.Q6J("ngIf",!n.task.tags.length),t.xp6(7),t.Q6J("ngClass",t.kEZ(39,te,0===n.task.priority,1===n.task.priority,2===n.task.priority))("matMenuTriggerFor",a),t.xp6(1),t.Q6J("ngIf",0===n.task.priority),t.xp6(1),t.Q6J("ngIf",1===n.task.priority),t.xp6(1),t.Q6J("ngIf",2===n.task.priority),t.xp6(3),t.Q6J("ngClass",t.VKq(43,M,0===n.task.priority)),t.xp6(4),t.Q6J("svgIcon","heroicons_solid:arrow-narrow-down"),t.xp6(1),t.Q6J("ngClass",t.VKq(45,M,1===n.task.priority)),t.xp6(4),t.Q6J("svgIcon","heroicons_solid:minus"),t.xp6(1),t.Q6J("ngClass",t.VKq(47,M,2===n.task.priority)),t.xp6(4),t.Q6J("svgIcon","heroicons_solid:arrow-narrow-up"),t.xp6(4),t.Q6J("ngClass",t.kEZ(49,ee,!n.task.dueDate,n.task.dueDate&&!n.isOverdue(),n.task.dueDate&&n.isOverdue())),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:calendar"),t.xp6(2),t.Q6J("ngIf",n.task.dueDate),t.xp6(1),t.Q6J("ngIf",!n.task.dueDate),t.xp6(1),t.Q6J("subscriptSizing","dynamic"),t.xp6(1),t.Q6J("formControlName","dueDate")("matDatepicker",r),t.xp6(6),t.Q6J("color","primary"),t.xp6(3),t.Q6J("subscriptSizing","dynamic"),t.xp6(3),t.Q6J("formControlName","notes")("spellcheck",!1)}},dependencies:[l.rH,T.lW,T.o6,T.RK,S.oG,x.Mq,x.hl,x.M5,x.dp,x.DK,B.d,J.KE,J.hX,J.R9,R.Hw,O.Nt,At.IC,w.VK,w.OP,w.p6,N.wG,d.mk,d.sg,d.O5,h._Y,h.Fj,h.JJ,h.JL,h.sg,h.u,Jt.t,d.uU],encapsulation:2,changeDetection:0});const ne=[{path:"",component:Q,resolve:{tags:y},children:[{path:"",component:Z,resolve:{tasks:C},children:[{path:":id",component:A,resolve:{task:b},canDeactivate:[v]}]}]}];class D{}D.\u0275fac=function(e){return new(e||D)},D.\u0275mod=t.oAB({type:D}),D.\u0275inj=t.cJS({providers:[{provide:N.sG,useValue:E._O}],imports:[l.Bz.forChild(ne),f._t,K.Bb,T.ot,S.p9,x.FA,B.t,J.lN,R.Ps,O.c,E.En,w.Tx,H.Cv,j.Fk,N.si,V.LD,F.SJ,P.AV,X.P,W.m]})}}]);
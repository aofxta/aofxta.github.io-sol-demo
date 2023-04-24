"use strict";(self.webpackChunksol=self.webpackChunksol||[]).push([[3477],{3477:(Qt,z,a)=>{a.r(z),a.d(z,{ScrumboardModule:()=>Z});var _=a(1390),x=a(1206),b=a(4859),G=a(6709),N=a(5412),W=a(3238),v=a(9602),q=a(9549),C=a(7392),$=a(284),j=a(9506),O=a(8255),tt=a(3162),et=a(4466),V=a(7579),A=a(2722),S=a(1837),t=a(4650),Y=a(1135),u=a(4004),f=a(8505),h=a(5698),g=a(3900),M=a(2843),rt=a(9646);class E{constructor(e){this.id=e.id||null,this.title=e.title,this.description=e.description||null,this.icon=e.icon||null,this.lastActivity=e.lastActivity||null,this.lists=[],this.labels=[],this.members=[],e.lists&&(this.lists=e.lists.map(r=>r instanceof y?r:new y(r))),e.labels&&(this.labels=e.labels.map(r=>r instanceof R?r:new R(r))),e.members&&(this.members=e.members.map(r=>r instanceof K?r:new K(r)))}}class y{constructor(e){this.id=e.id||null,this.boardId=e.boardId,this.position=e.position,this.title=e.title,this.cards=[],e.cards&&(this.cards=e.cards.map(r=>r instanceof I?r:new I(r)))}}class I{constructor(e){this.id=e.id||null,this.boardId=e.boardId,this.listId=e.listId,this.position=e.position,this.title=e.title,this.description=e.description||null,this.labels=[],this.dueDate=e.dueDate||null,e.labels&&(this.labels=e.labels.map(r=>r instanceof R?r:new R(r)))}}class K{constructor(e){this.id=e.id||null,this.name=e.name,this.avatar=e.avatar||null}}class R{constructor(e){this.id=e.id||null,this.boardId=e.boardId,this.title=e.title}}var ot=a(529);class m{constructor(e){this._httpClient=e,this._board=new Y.X(null),this._boards=new Y.X(null),this._card=new Y.X(null)}get board$(){return this._board.asObservable()}get boards$(){return this._boards.asObservable()}get card$(){return this._card.asObservable()}getBoards(){return this._httpClient.get("api/apps/scrumboard/boards").pipe((0,u.U)(e=>e.map(r=>new E(r))),(0,f.b)(e=>this._boards.next(e)))}getBoard(e){return this._httpClient.get("api/apps/scrumboard/board",{params:{id:e}}).pipe((0,u.U)(r=>new E(r)),(0,f.b)(r=>this._board.next(r)))}createBoard(e){return this.boards$.pipe((0,h.q)(1),(0,g.w)(r=>this._httpClient.put("api/apps/scrumboard/board",{board:e}).pipe((0,u.U)(o=>(this._boards.next([...r,o]),o)))))}updateBoard(e,r){return this.boards$.pipe((0,h.q)(1),(0,g.w)(o=>this._httpClient.patch("api/apps/scrumboard/board",{id:e,board:r}).pipe((0,u.U)(n=>{const s=o.findIndex(c=>c.id===e);return o[s]=n,this._boards.next(o),n}))))}deleteBoard(e){return this.boards$.pipe((0,h.q)(1),(0,g.w)(r=>this._httpClient.delete("api/apps/scrumboard/board",{params:{id:e}}).pipe((0,u.U)(o=>{const n=r.findIndex(s=>s.id===e);return r.splice(n,1),this._boards.next(r),this._board.next(null),this._card.next(null),o}))))}createList(e){return this._httpClient.post("api/apps/scrumboard/board/list",{list:e}).pipe((0,u.U)(r=>new y(r)),(0,f.b)(r=>{const o=this._board.value;o.lists=[...o.lists,r],o.lists.sort((n,s)=>n.position-s.position),this._board.next(o)}))}updateList(e){return this._httpClient.patch("api/apps/scrumboard/board/list",{list:e}).pipe((0,u.U)(r=>new y(r)),(0,f.b)(r=>{const o=this._board.value,n=o.lists.findIndex(s=>s.id===e.id);o.lists[n]=r,o.lists.sort((s,c)=>s.position-c.position),this._board.next(o)}))}updateLists(e){return this._httpClient.patch("api/apps/scrumboard/board/lists",{lists:e}).pipe((0,u.U)(r=>r.map(o=>new y(o))),(0,f.b)(r=>{const o=this._board.value;r.forEach(n=>{const s=o.lists.findIndex(c=>c.id===n.id);o.lists[s]=n}),o.lists.sort((n,s)=>n.position-s.position),this._board.next(o)}))}deleteList(e){return this._httpClient.delete("api/apps/scrumboard/board/list",{params:{id:e}}).pipe((0,f.b)(r=>{const o=this._board.value,n=o.lists.findIndex(s=>s.id===e);o.lists.splice(n,1),o.lists.sort((s,c)=>s.position-c.position),this._board.next(o)}))}getCard(e){return this._board.pipe((0,h.q)(1),(0,u.U)(r=>{const o=r.lists.find(n=>n.cards.some(s=>s.id===e)).cards.find(n=>n.id===e);return this._card.next(o),o}),(0,g.w)(r=>r?(0,rt.of)(r):(0,M._)("Could not found the card with id of "+e+"!")))}createCard(e){return this._httpClient.put("api/apps/scrumboard/board/card",{card:e}).pipe((0,u.U)(r=>new I(r)),(0,f.b)(r=>{const o=this._board.value;return o.lists.forEach((n,s,c)=>{n.id===r.listId&&c[s].cards.push(r)}),this._board.next(o),r}))}updateCard(e,r){return this.board$.pipe((0,h.q)(1),(0,g.w)(o=>this._httpClient.patch("api/apps/scrumboard/board/card",{id:e,card:r}).pipe((0,u.U)(n=>(o.lists.forEach(s=>{s.cards.forEach((c,l,U)=>{c.id===e&&(U[l]=n)})}),this._board.next(o),this._card.next(n),n)))))}updateCards(e){return this._httpClient.patch("api/apps/scrumboard/board/cards",{cards:e}).pipe((0,u.U)(r=>r.map(o=>new I(o))),(0,f.b)(r=>{const o=this._board.value;r.forEach(n=>{const s=o.lists.findIndex(l=>l.id===n.listId),c=o.lists[s].cards.findIndex(l=>l.id===n.id);o.lists[s].cards[c]=n,o.lists[s].cards.sort((l,U)=>l.position-U.position)}),this._board.next(o)}))}deleteCard(e){return this.board$.pipe((0,h.q)(1),(0,g.w)(r=>this._httpClient.delete("api/apps/scrumboard/board/card",{params:{id:e}}).pipe((0,u.U)(o=>(r.lists.forEach(n=>{n.cards.forEach((s,c,l)=>{s.id===e&&l.splice(c,1)})}),this._board.next(r),this._card.next(null),o)))))}updateCardPositions(e){}createLabel(e){return this.board$.pipe((0,h.q)(1),(0,g.w)(r=>this._httpClient.post("api/apps/scrumboard/board/label",{label:e}).pipe((0,u.U)(o=>(r.labels=[...r.labels,o],this._board.next(r),o)))))}updateLabel(e,r){return this.board$.pipe((0,h.q)(1),(0,g.w)(o=>this._httpClient.patch("api/apps/scrumboard/board/label",{id:e,label:r}).pipe((0,u.U)(n=>{const s=o.labels.findIndex(c=>c.id===e);return o.labels[s]=n,this._board.next(o),n}))))}deleteLabel(e){return this.board$.pipe((0,h.q)(1),(0,g.w)(r=>this._httpClient.delete("api/apps/scrumboard/board/label",{params:{id:e}}).pipe((0,u.U)(o=>{const n=r.labels.findIndex(s=>s.id===e);return r.labels.splice(n,1),o&&r.lists.forEach(s=>{s.cards.forEach(c=>{const l=c.labels.findIndex(U=>U.id===e);l>-1&&c.labels.splice(l,1)})}),this._board.next(r),o}))))}search(e){return this._httpClient.get("api/apps/scrumboard/board/search",{params:{query:e}})}}m.\u0275fac=function(e){return new(e||m)(t.LFG(ot.eN))},m.\u0275prov=t.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"});var H=a(7376),p=a(6895);function it(i,e){if(1&i&&(t.ynx(0),t._UZ(1,"img",18),t.BQk()),2&i){const r=e.$implicit;t.xp6(1),t.Q6J("src",r.avatar,t.LSH)}}function nt(i,e){if(1&i&&(t.ynx(0),t.TgZ(1,"div",19)(2,"div",20),t._uU(3),t.qZA()(),t.BQk()),2&i){const r=t.oxw(2).$implicit;t.xp6(3),t.hij(" +",r.members.slice(5).length," ")}}function st(i,e){if(1&i&&(t.ynx(0),t._UZ(1,"div",16),t.TgZ(2,"div",17),t.YNc(3,it,2,1,"ng-container",4),t.YNc(4,nt,4,1,"ng-container",12),t.qZA(),t.BQk()),2&i){const r=t.oxw().$implicit,o=t.oxw();t.xp6(3),t.Q6J("ngForOf",r.members.slice(0,5))("ngForTrackBy",o.trackByFn),t.xp6(1),t.Q6J("ngIf",r.members.length>5)}}const at=function(i){return[i]};function ct(i,e){if(1&i&&(t.ynx(0),t.TgZ(1,"a",7)(2,"div",8),t._UZ(3,"mat-icon",9),t.qZA(),t.TgZ(4,"div",10),t._uU(5),t.qZA(),t.TgZ(6,"div",11),t._uU(7),t.qZA(),t.YNc(8,st,5,3,"ng-container",12),t.TgZ(9,"div",13)(10,"div",14),t._uU(11,"Edited:"),t.qZA(),t.TgZ(12,"div",15),t._uU(13),t.qZA()()(),t.BQk()),2&i){const r=e.$implicit,o=t.oxw();t.xp6(1),t.Q6J("routerLink",t.VKq(6,at,r.id)),t.xp6(2),t.Q6J("svgIcon",r.icon),t.xp6(2),t.Oqu(r.title),t.xp6(2),t.Oqu(r.description),t.xp6(1),t.Q6J("ngIf",null==r.members?null:r.members.length),t.xp6(5),t.Oqu(o.formatDateAsRelative(r.lastActivity))}}class D{constructor(e,r){this._changeDetectorRef=e,this._scrumboardService=r,this._unsubscribeAll=new V.x}ngOnInit(){this._scrumboardService.boards$.pipe((0,A.R)(this._unsubscribeAll)).subscribe(e=>{this.boards=e,this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}formatDateAsRelative(e){return S.ou.fromISO(e).toRelative()}trackByFn(e,r){return r.id||e}}D.\u0275fac=function(e){return new(e||D)(t.Y36(t.sBO),t.Y36(m))},D.\u0275cmp=t.Xpm({type:D,selectors:[["scrumboard-boards"]],decls:8,vars:3,consts:[["cdkScrollable","",1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-y-auto"],[1,"flex","flex-col","flex-auto","items-center","p-6","sm:p-10"],[1,"mt-4","md:mt-24","text-3xl","md:text-6xl","font-extrabold","tracking-tight","leading-7","sm:leading-10"],[1,"grid","grid-cols-1","sm:grid-cols-2","lg:grid-cols-4","gap-4","mt-8","md:mt-16"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"flex","flex-col","items-center","justify-center","w-56","rounded-lg","cursor-pointer","border-2","border-gray-300","border-dashed","hover:bg-hover","transition-colors","duration-150","ease-in-out"],[1,"icon-size-12","text-hint",3,"svgIcon"],[1,"flex","flex-col","items-start","w-56","p-6","rounded-lg","shadow","bg-card","rounded-lg","hover:shadow-xl","transition-shadow","duration-150","ease-in-out",3,"routerLink"],[1,"flex","items-center","justify-center","p-4","rounded-full","bg-primary-50","text-primary-700","dark:bg-primary","dark:text-on-primary"],[1,"text-current",3,"svgIcon"],[1,"mt-5","text-lg","font-medium","leading-5"],[1,"mt-0.5","line-clamp-2","text-secondary"],[4,"ngIf"],[1,"flex","items-center","mt-4","text-md","font-md"],[1,"text-secondary"],[1,"ml-1"],[1,"w-12","h-1","mt-6","border-t-2"],[1,"flex","items-center","mt-6","-space-x-1.5"],["alt","Member avatar",1,"flex-0","w-8","h-8","rounded-full","ring","ring-offset-1","ring-bg-card","ring-offset-transparent","object-cover",3,"src"],[1,"flex","flex-0","items-center","justify-center","w-8","h-8","rounded-full","ring","ring-offset-1","ring-bg-card","ring-offset-transparent","bg-gray-200","text-gray-500"],[1,"text-md","font-semibold"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3," Scrumboard Boards "),t.qZA(),t.TgZ(4,"div",3),t.YNc(5,ct,14,8,"ng-container",4),t.TgZ(6,"div",5),t._UZ(7,"mat-icon",6),t.qZA()()()()),2&e&&(t.xp6(5),t.Q6J("ngForOf",r.boards)("ngForTrackBy",r.trackByFn),t.xp6(2),t.Q6J("svgIcon","heroicons_outline:plus"))},dependencies:[_.rH,H.PQ,C.Hw,p.sg,p.O5],encapsulation:2,changeDetection:0});var P=a(262);class k{constructor(e){this._scrumboardService=e}resolve(e,r){return this._scrumboardService.getBoards()}}k.\u0275fac=function(e){return new(e||k)(t.LFG(m))},k.\u0275prov=t.Yz7({token:k,factory:k.\u0275fac,providedIn:"root"});class T{constructor(e,r){this._router=e,this._scrumboardService=r}resolve(e,r){return this._scrumboardService.getBoard(e.paramMap.get("boardId")).pipe((0,P.K)(o=>{console.error(o);const n=r.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(n),(0,M._)(o)}))}}T.\u0275fac=function(e){return new(e||T)(t.LFG(_.F0),t.LFG(m))},T.\u0275prov=t.Yz7({token:T,factory:T.\u0275fac,providedIn:"root"});class w{constructor(e,r){this._router=e,this._scrumboardService=r}resolve(e,r){return this._scrumboardService.getCard(e.paramMap.get("cardId")).pipe((0,P.K)(o=>{console.error(o);const n=r.url.split("/").slice(0,-1).join("/");return this._router.navigateByUrl(n),(0,M._)(o)}))}}w.\u0275fac=function(e){return new(e||w)(t.LFG(_.F0),t.LFG(m))},w.\u0275prov=t.Yz7({token:w,factory:w.\u0275fac,providedIn:"root"});var d=a(4006),dt=a(7763),X=a(9349);const lt=["titleInput"],ut=["titleAutosize"],pt=function(i){return{"opacity-0 pointer-events-none":i}},mt=function(i){return{"opacity-0":i}};class B{constructor(e,r){this._changeDetectorRef=e,this._formBuilder=r,this.buttonTitle="Add a card",this.saved=new t.vpe,this.formVisible=!1}ngOnInit(){this.form=this._formBuilder.group({title:[""]})}save(){const e=this.form.get("title").value;!e||""===e.trim()||(this.saved.next(e.trim()),this.formVisible=!1,this.form.get("title").setValue(""),setTimeout(()=>{this.titleInput.nativeElement.value="",this.titleAutosize.reset()}),this._changeDetectorRef.markForCheck())}toggleFormVisibility(){this.formVisible=!this.formVisible,this.formVisible&&this.titleInput.nativeElement.focus()}}B.\u0275fac=function(e){return new(e||B)(t.Y36(t.sBO),t.Y36(d.QS))},B.\u0275cmp=t.Xpm({type:B,selectors:[["scrumboard-board-add-card"]],viewQuery:function(e,r){if(1&e&&(t.Gf(lt,5),t.Gf(ut,5)),2&e){let o;t.iGM(o=t.CRH())&&(r.titleInput=o.first),t.iGM(o=t.CRH())&&(r.titleAutosize=o.first)}},inputs:{buttonTitle:"buttonTitle"},outputs:{saved:"saved"},decls:17,vars:18,consts:[[1,"p-3","pt-0"],[1,"relative","flex","w-full","h-full","rounded-lg"],["mat-button","","disableRipple","",1,"absolute","inset-0","justify-start","w-full","rounded-lg",3,"ngClass","click"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2","text-secondary"],[1,"flex","flex-col","items-start","w-full",3,"ngClass","formGroup"],[1,"flex","w-full","p-5","rounded-lg","shadow","bg-card"],["cdkTextareaAutosize","",1,"w-full","text-lg","font-medium","leading-5",3,"spellcheck","formControlName","placeholder","keydown.enter"],["titleInput","","titleAutosize","cdkTextareaAutosize"],[1,"flex","items-center","mt-2"],["mat-flat-button","",1,"h-8","min-h-8",3,"color","type","click"],["mat-icon-button","",1,"ml-1","w-8","h-8","min-h-8",3,"type","click"],[1,"icon-size-4",3,"svgIcon"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"button",2),t.NdJ("click",function(){return r.toggleFormVisibility()}),t._UZ(3,"mat-icon",3),t.TgZ(4,"span",4),t._uU(5),t.qZA()(),t.TgZ(6,"form",5)(7,"div",6)(8,"textarea",7,8),t.NdJ("keydown.enter",function(){return r.save()}),t._uU(11,"                "),t.qZA()(),t.TgZ(12,"div",9)(13,"button",10),t.NdJ("click",function(){return r.save()}),t._uU(14," Add card "),t.qZA(),t.TgZ(15,"button",11),t.NdJ("click",function(){return r.toggleFormVisibility()}),t._UZ(16,"mat-icon",12),t.qZA()()()()()),2&e&&(t.ekj("h-13",!r.formVisible),t.xp6(2),t.Q6J("ngClass",t.VKq(14,pt,r.formVisible)),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:plus-circle"),t.xp6(2),t.Oqu(r.buttonTitle),t.xp6(1),t.Q6J("ngClass",t.VKq(16,mt,!r.formVisible))("formGroup",r.form),t.xp6(2),t.Q6J("spellcheck","off")("formControlName","title")("placeholder","Enter card title..."),t.xp6(5),t.Q6J("color","primary")("type","button"),t.xp6(2),t.Q6J("type","button"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:x"))},dependencies:[b.lW,b.RK,C.Hw,X.IC,p.mk,d._Y,d.Fj,d.JJ,d.JL,d.sg,d.u],encapsulation:2,changeDetection:0});const bt=["titleInput"],ft=function(i){return{"opacity-0 pointer-events-none":i}},ht=function(i){return{"opacity-0":i}};class J{constructor(e,r){this._changeDetectorRef=e,this._formBuilder=r,this.buttonTitle="Add a list",this.saved=new t.vpe,this.formVisible=!1}ngOnInit(){this.form=this._formBuilder.group({title:[""]})}save(){const e=this.form.get("title").value;!e||""===e.trim()||(this.saved.next(e.trim()),this.form.get("title").setValue(""),this.formVisible=!1,this._changeDetectorRef.markForCheck())}toggleFormVisibility(){this.formVisible=!this.formVisible,this.formVisible&&this.titleInput.nativeElement.focus()}}function gt(i,e){if(1&i&&(t.ynx(0),t.TgZ(1,"div",30),t._UZ(2,"img",31),t.qZA(),t.BQk()),2&i){const r=t.oxw().$implicit;t.xp6(2),t.Q6J("src",r.coverImage,t.LSH)}}function _t(i,e){if(1&i&&(t.ynx(0),t.TgZ(1,"div",33),t._uU(2),t.qZA(),t.BQk()),2&i){const r=e.$implicit;t.xp6(2),t.hij(" ",r.title," ")}}function xt(i,e){if(1&i&&(t.ynx(0),t.TgZ(1,"div")(2,"div",32),t.YNc(3,_t,3,1,"ng-container",12),t.qZA()(),t.BQk()),2&i){const r=t.oxw().$implicit,o=t.oxw(2);t.xp6(3),t.Q6J("ngForOf",r.labels)("ngForTrackBy",o.trackByFn)}}J.\u0275fac=function(e){return new(e||J)(t.Y36(t.sBO),t.Y36(d.QS))},J.\u0275cmp=t.Xpm({type:J,selectors:[["scrumboard-board-add-list"]],viewQuery:function(e,r){if(1&e&&t.Gf(bt,5),2&e){let o;t.iGM(o=t.CRH())&&(r.titleInput=o.first)}},inputs:{buttonTitle:"buttonTitle"},outputs:{saved:"saved"},decls:14,vars:18,consts:[[1,"mt-11","w-64","py-2.5","px-2"],[1,"relative","flex","w-full","h-full","overflow-hidden","rounded-xl","bg-gray-200","dark:bg-gray-700"],["mat-button","","disableRipple","",1,"absolute","inset-0","justify-start","w-full","px-3","rounded-xl","bg-transparent",3,"ngClass","click"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2","text-secondary"],[1,"flex","flex-col","items-start","w-full","p-3",3,"ngClass","formGroup"],[1,"w-full","py-2","px-3","leading-5","rounded-md","shadow-sm","border","border-gray-300","bg-white","focus:border-primary","dark:border-gray-500","dark:focus:border-primary","dark:bg-black","dark:bg-opacity-5",3,"autocomplete","formControlName","placeholder","keydown.enter"],["titleInput",""],[1,"flex","items-center","mt-2"],["mat-flat-button","",1,"h-8","min-h-8",3,"color","type","click"],["mat-icon-button","",1,"ml-1","w-8","h-8","min-h-8",3,"type","click"],[1,"icon-size-4",3,"svgIcon"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"button",2),t.NdJ("click",function(){return r.toggleFormVisibility()}),t._UZ(3,"mat-icon",3),t.TgZ(4,"span",4),t._uU(5),t.qZA()(),t.TgZ(6,"form",5)(7,"input",6,7),t.NdJ("keydown.enter",function(){return r.save()}),t.qZA(),t.TgZ(9,"div",8)(10,"button",9),t.NdJ("click",function(){return r.save()}),t._uU(11," Add list "),t.qZA(),t.TgZ(12,"button",10),t.NdJ("click",function(){return r.toggleFormVisibility()}),t._UZ(13,"mat-icon",11),t.qZA()()()()()),2&e&&(t.ekj("h-15",!r.formVisible),t.xp6(2),t.Q6J("ngClass",t.VKq(14,ft,r.formVisible)),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:plus-circle"),t.xp6(2),t.Oqu(r.buttonTitle),t.xp6(1),t.Q6J("ngClass",t.VKq(16,ht,!r.formVisible))("formGroup",r.form),t.xp6(1),t.Q6J("autocomplete","off")("formControlName","title")("placeholder","Enter list title..."),t.xp6(3),t.Q6J("color","primary")("type","button"),t.xp6(2),t.Q6J("type","button"),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:x"))},dependencies:[b.lW,b.RK,C.Hw,p.mk,d._Y,d.Fj,d.JJ,d.JL,d.sg,d.u],encapsulation:2,changeDetection:0});const vt=function(i){return{"text-red-600":i}};function Ct(i,e){if(1&i&&(t.ynx(0),t.TgZ(1,"div",34),t._UZ(2,"mat-icon",35),t.TgZ(3,"div",21),t._uU(4),t.ALo(5,"date"),t.qZA()(),t.BQk()),2&i){const r=t.oxw().$implicit,o=t.oxw(2);t.xp6(1),t.Q6J("ngClass",t.VKq(6,vt,o.isOverdue(r.dueDate))),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:clock"),t.xp6(2),t.hij(" ",t.xi3(5,3,r.dueDate,"longDate")," ")}}const yt=function(i){return["card",i]};function kt(i,e){if(1&i&&(t.ynx(0),t.TgZ(1,"a",27),t.YNc(2,gt,3,1,"ng-container",28),t.TgZ(3,"div",29),t._uU(4),t.qZA(),t.YNc(5,xt,4,2,"ng-container",28),t.YNc(6,Ct,6,8,"ng-container",28),t.qZA(),t.BQk()),2&i){const r=e.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(5,yt,r.id)),t.xp6(1),t.Q6J("ngIf",r.coverImage),t.xp6(2),t.Oqu(r.title),t.xp6(1),t.Q6J("ngIf",r.labels.length),t.xp6(1),t.Q6J("ngIf",r.dueDate)}}function Tt(i,e){if(1&i){const r=t.EpF();t.ynx(0),t.TgZ(1,"div",15)(2,"div",16)(3,"div",17)(4,"input",18,19),t.NdJ("focusout",function(n){const c=t.CHM(r).$implicit,l=t.oxw();return t.KtG(l.updateListTitle(n,c))})("keydown.enter",function(){t.CHM(r);const n=t.MAs(5);return t.KtG(n.blur())}),t.qZA()(),t.TgZ(6,"div",20),t._uU(7),t.qZA(),t.TgZ(8,"div",21)(9,"button",22),t._UZ(10,"mat-icon",6),t.qZA(),t.TgZ(11,"mat-menu",null,23)(13,"button",24),t.NdJ("click",function(){t.CHM(r);const n=t.MAs(5),s=t.oxw();return t.KtG(s.renameList(n))}),t._UZ(14,"mat-icon",6),t._uU(15," Rename list "),t.qZA(),t.TgZ(16,"button",24),t.NdJ("click",function(){const s=t.CHM(r).$implicit,c=t.oxw();return t.KtG(c.deleteList(s.id))}),t._UZ(17,"mat-icon",6),t._uU(18," Delete list "),t.qZA()()()(),t.TgZ(19,"div",25)(20,"div",26),t.NdJ("cdkDropListDropped",function(n){t.CHM(r);const s=t.oxw();return t.KtG(s.cardDropped(n))}),t.YNc(21,kt,7,7,"ng-container",12),t.qZA(),t.TgZ(22,"scrumboard-board-add-card",13),t.NdJ("saved",function(n){const c=t.CHM(r).$implicit,l=t.oxw();return t.KtG(l.addCard(c,n))}),t.qZA()()(),t.BQk()}if(2&i){const r=e.$implicit,o=t.MAs(12),n=t.oxw();t.xp6(1),t.Q6J("cdkDragLockAxis","x"),t.xp6(3),t.Q6J("spellcheck","false")("value",r.title),t.xp6(3),t.hij(" ",r.cards.length," "),t.xp6(2),t.Q6J("matMenuTriggerFor",o),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:dots-vertical"),t.xp6(4),t.Q6J("svgIcon","heroicons_solid:pencil-alt"),t.xp6(3),t.Q6J("svgIcon","heroicons_solid:trash"),t.xp6(3),t.Q6J("id",r.id)("cdkDropListData",r.cards),t.xp6(1),t.Q6J("ngForOf",r.cards)("ngForTrackBy",n.trackByFn),t.xp6(1),t.Q6J("buttonTitle",r.cards.length?"Add another card":"Add a card")}}const wt=function(){return[".."]};class L{constructor(e,r,o,n){this._changeDetectorRef=e,this._formBuilder=r,this._solConfirmationService=o,this._scrumboardService=n,this._positionStep=65536,this._maxListCount=200,this._maxPosition=500*this._positionStep,this._unsubscribeAll=new V.x}ngOnInit(){this.listTitleForm=this._formBuilder.group({title:[""]}),this._scrumboardService.board$.pipe((0,A.R)(this._unsubscribeAll)).subscribe(e=>{this.board={...e},this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}renameList(e){setTimeout(()=>{e.focus()})}addList(e){if(this.board.lists.length>=this._maxListCount)return;const r=new y({boardId:this.board.id,position:this.board.lists.length?this.board.lists[this.board.lists.length-1].position+this._positionStep:this._positionStep,title:e});this._scrumboardService.createList(r).subscribe()}updateListTitle(e,r){const o=e.target,n=o.value;n&&""!==n.trim()?(r.title=o.value=n.trim(),this._scrumboardService.updateList(r).subscribe()):o.value=r.title}deleteList(e){this._solConfirmationService.open({title:"Delete list",message:"Are you sure you want to delete this list and its cards? This action cannot be undone!",actions:{confirm:{label:"Delete"}}}).afterClosed().subscribe(o=>{"confirmed"===o&&this._scrumboardService.deleteList(e).subscribe()})}addCard(e,r){const o=new I({boardId:this.board.id,listId:e.id,position:e.cards.length?e.cards[e.cards.length-1].position+this._positionStep:this._positionStep,title:r});this._scrumboardService.createCard(o).subscribe()}listDropped(e){(0,x.bA)(e.container.data,e.previousIndex,e.currentIndex);const r=this._calculatePositions(e);this._scrumboardService.updateLists(r).subscribe()}cardDropped(e){e.previousContainer===e.container?(0,x.bA)(e.container.data,e.previousIndex,e.currentIndex):((0,x.EA)(e.previousContainer.data,e.container.data,e.previousIndex,e.currentIndex),e.container.data[e.currentIndex].listId=e.container.id);const r=this._calculatePositions(e);this._scrumboardService.updateCards(r).subscribe()}isOverdue(e){return S.ou.fromISO(e).startOf("day")<S.ou.now().startOf("day")}trackByFn(e,r){return r.id||e}_calculatePositions(e){let r=e.container.data;const o=r[e.currentIndex],n=r[e.currentIndex-1]||null,s=r[e.currentIndex+1]||null;return o.position=n?s?(n.position+s.position)/2:n.position+this._positionStep:s?s.position/2:this._positionStep,!Number.isInteger(o.position)||o.position>=this._maxPosition?(r=r.map((c,l)=>(c.position=(l+1)*this._positionStep,c)),r):[o]}}L.\u0275fac=function(e){return new(e||L)(t.Y36(t.sBO),t.Y36(d.QS),t.Y36(dt.Z),t.Y36(m))},L.\u0275cmp=t.Xpm({type:L,selectors:[["scrumboard-board"]],decls:21,vars:10,consts:[[1,"absolute","inset-0","flex","flex-col","min-w-0","overflow-hidden"],[1,"flex","flex-col","sm:flex-row","flex-0","sm:items-center","sm:justify-between","p-6","sm:py-8","sm:px-10","border-b","bg-card","dark:bg-transparent"],[1,"flex-1","min-w-0"],[1,"text-3xl","md:text-4xl","font-extrabold","tracking-tight","leading-7","sm:leading-10","truncate"],[1,"flex","shrink-0","items-center","mt-6","sm:mt-0","sm:ml-4"],["mat-stroked-button","",3,"routerLink"],[1,"icon-size-5",3,"svgIcon"],[1,"ml-2"],["mat-stroked-button","",1,"ml-3"],["cdkScrollable","",1,"flex-auto","p-6","sm:p-8","sm:pt-4","overflow-y-auto"],["cdkDropList","",1,"flex",3,"cdkDropListData","cdkDropListOrientation","cdkDropListDropped"],["cdkDropListGroup","",1,"flex","items-start"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"buttonTitle","saved"],[1,"absolute","invisible","w-0","h-0","opacity-0","pointer-events-none"],["cdkDrag","",1,"flex-0","w-72","p-2","rounded-2xl","bg-default",3,"cdkDragLockAxis"],["cdkDragHandle","",1,"flex","items-center","justify-between"],[1,"flex","items-center","w-full","py-2","px-3","rounded-md","cursor-text","border","border-transparent","focus-within:bg-white","focus-within:shadow-sm","focus-within:border-primary","dark:focus-within:bg-gray-900"],[1,"w-full","font-medium","leading-5","bg-transparent",3,"spellcheck","value","focusout","keydown.enter"],["listTitleInput",""],[1,"flex","items-center","justify-center","min-w-6","ml-4","text-sm","font-semibold","leading-6","rounded-full","bg-gray-300","text-secondary","dark:bg-gray-700"],[1,"ml-1"],["mat-icon-button","",1,"w-8","h-8","min-h-8",3,"matMenuTriggerFor"],["listMenu","matMenu"],["mat-menu-item","",3,"click"],[1,"mt-2","rounded-xl","bg-gray-400","bg-opacity-12","dark:bg-transparent","dark:border"],["cdkDropList","",1,"p-3","pb-0",3,"id","cdkDropListData","cdkDropListDropped"],["cdkDrag","",1,"flex","flex-col","items-start","mb-3","p-5","space-y-3","shadow","rounded-lg","overflow-hidden","bg-card",3,"routerLink"],[4,"ngIf"],[1,"text-lg","font-medium","leading-5"],[1,"-mx-5","-mt-5","mb-2"],[1,"w-full","object-cover",3,"src"],[1,"flex","flex-wrap","-mx-1","-mb-2"],[1,"mx-1","mb-2","py-0.5","px-3","rounded-full","text-sm","font-medium","text-gray-500","bg-gray-100","dark:text-gray-300","dark:bg-gray-700"],[1,"flex","items-center","rounded","text-sm","font-medium","leading-5","text-secondary",3,"ngClass"],[1,"icon-size-4","text-current",3,"svgIcon"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),t._uU(4),t.qZA()(),t.TgZ(5,"div",4)(6,"a",5),t._UZ(7,"mat-icon",6),t.TgZ(8,"span",7),t._uU(9,"Boards"),t.qZA()(),t.TgZ(10,"button",8),t._UZ(11,"mat-icon",6),t.TgZ(12,"span",7),t._uU(13,"Settings"),t.qZA()()()(),t.TgZ(14,"div",9)(15,"div",10),t.NdJ("cdkDropListDropped",function(n){return r.listDropped(n)}),t.TgZ(16,"div",11),t.YNc(17,Tt,23,13,"ng-container",12),t.TgZ(18,"scrumboard-board-add-list",13),t.NdJ("saved",function(n){return r.addList(n)}),t.qZA()()()()(),t.TgZ(19,"div",14),t._UZ(20,"router-outlet"),t.qZA()),2&e&&(t.xp6(4),t.hij(" ",r.board.title," "),t.xp6(2),t.Q6J("routerLink",t.DdM(9,wt)),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:view-boards"),t.xp6(4),t.Q6J("svgIcon","heroicons_solid:cog"),t.xp6(4),t.Q6J("cdkDropListData",r.board.lists)("cdkDropListOrientation","horizontal"),t.xp6(2),t.Q6J("ngForOf",r.board.lists)("ngForTrackBy",r.trackByFn),t.xp6(1),t.Q6J("buttonTitle",r.board.lists.length?"Add another list":"Add a list"))},dependencies:[_.lC,_.rH,H.PQ,x.Wj,x.Fd,x.Zt,x.Bh,b.zs,b.lW,b.RK,C.Hw,O.VK,O.OP,O.p6,p.mk,p.sg,p.O5,B,J,p.uU],styles:[".cdk-drag-preview{--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / .25);--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.cdk-drop-list-dragging div:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}\n"],encapsulation:2,changeDetection:0});var Zt=a(8372),At=a(9858);const St=["labelInput"];function It(i,e){if(1&i&&(t.ynx(0),t._uU(1),t.ALo(2,"date"),t.BQk()),2&i){const r=t.oxw();t.xp6(1),t.Oqu(t.xi3(2,1,r.card.dueDate,"longDate"))}}function Dt(i,e){1&i&&(t.ynx(0),t._uU(1,"Not set"),t.BQk())}function Bt(i,e){if(1&i){const r=t.EpF();t.ynx(0),t.TgZ(1,"mat-checkbox",26),t.NdJ("change",function(n){const c=t.CHM(r).$implicit,l=t.oxw();return t.KtG(l.toggleProductTag(c,n))}),t._uU(2),t.qZA(),t.BQk()}if(2&i){const r=e.$implicit,o=t.oxw();t.xp6(1),t.Q6J("color","primary")("checked",o.hasLabel(r)),t.xp6(1),t.hij(" ",r.title," ")}}const Jt=function(i,e,r){return{"text-gray-500 bg-gray-100 dark:text-gray-300 dark:bg-gray-700":i,"text-green-800 bg-green-200 dark:text-green-100 dark:bg-green-500":e,"text-red-800 bg-red-200 dark:text-red-100 dark:bg-red-500":r}};class Q{constructor(e,r,o,n){this.matDialogRef=e,this._changeDetectorRef=r,this._formBuilder=o,this._scrumboardService=n,this._unsubscribeAll=new V.x}ngOnInit(){this._scrumboardService.board$.pipe((0,A.R)(this._unsubscribeAll)).subscribe(e=>{this.board=e,this.labels=this.filteredLabels=e.labels}),this._scrumboardService.card$.pipe((0,A.R)(this._unsubscribeAll)).subscribe(e=>{this.card=e}),this.cardForm=this._formBuilder.group({id:[""],title:["",d.kI.required],description:[""],labels:[[]],dueDate:[null]}),this.cardForm.setValue({id:this.card.id,title:this.card.title,description:this.card.description,labels:this.card.labels,dueDate:this.card.dueDate}),this.cardForm.valueChanges.pipe((0,f.b)(e=>{this.card=(0,At.Z)(this.card,e)}),(0,Zt.b)(300),(0,A.R)(this._unsubscribeAll)).subscribe(e=>{this._scrumboardService.updateCard(e.id,e).subscribe(),this._changeDetectorRef.markForCheck()})}ngOnDestroy(){this._unsubscribeAll.next(null),this._unsubscribeAll.complete()}hasLabel(e){return!!this.card.labels.find(r=>r.id===e.id)}filterLabels(e){const r=e.target.value.toLowerCase();this.filteredLabels=this.labels.filter(o=>o.title.toLowerCase().includes(r))}filterLabelsInputKeyDown(e){if("Enter"!==e.key||0===this.filteredLabels.length)return;const r=this.filteredLabels[0];this.card.labels.find(n=>n.id===r.id)?this.removeLabelFromCard(r):this.addLabelToCard(r)}toggleProductTag(e,r){r.checked?this.addLabelToCard(e):this.removeLabelFromCard(e)}addLabelToCard(e){this.card.labels.unshift(e),this.cardForm.get("labels").patchValue(this.card.labels),this._changeDetectorRef.markForCheck()}removeLabelFromCard(e){this.card.labels.splice(this.card.labels.findIndex(r=>r.id===e.id),1),this.cardForm.get("labels").patchValue(this.card.labels),this._changeDetectorRef.markForCheck()}isOverdue(e){return S.ou.fromISO(e).startOf("day")<S.ou.now().startOf("day")}trackByFn(e,r){return r.id||e}_readAsDataURL(e){return new Promise((r,o)=>{const n=new FileReader;n.onload=()=>{r(n.result)},n.onerror=s=>{o(s)},n.readAsDataURL(e)})}}Q.\u0275fac=function(e){return new(e||Q)(t.Y36(N.so),t.Y36(t.sBO),t.Y36(d.QS),t.Y36(m))},Q.\u0275cmp=t.Xpm({type:Q,selectors:[["scrumboard-card-details"]],viewQuery:function(e,r){if(1&e&&t.Gf(St,5),2&e){let o;t.iGM(o=t.CRH())&&(r.labelInput=o.first)}},decls:44,vars:27,consts:[[1,"flex","flex-col","flex-auto","md:w-160","md:min-w-160","max-h-160","-m-6","overflow-y-auto"],[1,"flex","flex-0","items-center","justify-between","h-16","pr-3","sm:pr-5","pl-6","sm:pl-8","bg-primary","text-on-primary"],[1,"text-lg","font-medium"],["mat-icon-button","",3,"tabIndex","click"],[1,"text-current",3,"svgIcon"],[1,"flex","flex-col","flex-0","items-start","w-full","p-6","sm:p-8","space-y-6","overflow-y-auto",3,"formGroup"],[1,"w-full",3,"subscriptSizing"],["matInput","","cdkTextareaAutosize","",3,"formControlName","rows","cdkAutosizeMinRows"],[1,"font-medium"],[1,"relative","flex","items-center","mt-1.5","px-4","leading-9","rounded-full","cursor-pointer",3,"ngClass","click"],[1,"icon-size-5","text-current",3,"svgIcon"],[1,"ml-2","text-md","font-medium"],[4,"ngIf"],[1,"sol-mat-dense","invisible","absolute","inset-0","-mt-2.5","opacity-0","pointer-events-none",3,"subscriptSizing"],["matInput","",3,"formControlName","matDatepicker"],["dueDatePicker",""],["mat-button","","matDatepickerCancel","",3,"click"],["mat-flat-button","","matDatepickerApply","",3,"color"],[1,"w-full"],[1,"mt-1","rounded-md","border","border-gray-300","shadow-sm","overflow-hidden"],[1,"flex","items-center","my-2","mx-3"],[1,"flex","items-center","flex-auto","min-w-0"],[1,"icon-size-5",3,"svgIcon"],["type","text","placeholder","Enter label name",1,"min-w-0","ml-2","py-1","border-0",3,"maxLength","input","keydown"],[1,"max-h-40","leading-none","overflow-y-auto","border-t"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"flex","items-center","h-10","min-h-10","pl-1","pr-4",3,"color","checked","change"]],template:function(e,r){if(1&e){const o=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._uU(3,"Card"),t.qZA(),t.TgZ(4,"button",3),t.NdJ("click",function(){return r.matDialogRef.close()}),t._UZ(5,"mat-icon",4),t.qZA()(),t.TgZ(6,"form",5)(7,"mat-form-field",6)(8,"mat-label"),t._uU(9,"Title"),t.qZA(),t.TgZ(10,"textarea",7),t._uU(11,"            "),t.qZA()(),t.TgZ(12,"mat-form-field",6)(13,"mat-label"),t._uU(14,"Description"),t.qZA(),t.TgZ(15,"textarea",7),t._uU(16,"            "),t.qZA()(),t.TgZ(17,"div")(18,"div",8),t._uU(19,"Due date"),t.qZA(),t.TgZ(20,"div",9),t.NdJ("click",function(){t.CHM(o);const s=t.MAs(28);return t.KtG(s.open())}),t._UZ(21,"mat-icon",10),t.TgZ(22,"span",11),t.YNc(23,It,3,4,"ng-container",12),t.YNc(24,Dt,2,0,"ng-container",12),t.qZA(),t.TgZ(25,"mat-form-field",13),t._UZ(26,"input",14),t.TgZ(27,"mat-datepicker",null,15)(29,"mat-datepicker-actions")(30,"button",16),t.NdJ("click",function(){return r.cardForm.get("dueDate").setValue(null)}),t._uU(31," Clear "),t.qZA(),t.TgZ(32,"button",17),t._uU(33," Select "),t.qZA()()()()()(),t.TgZ(34,"div",18)(35,"div",8),t._uU(36,"Labels"),t.qZA(),t.TgZ(37,"div",19)(38,"div",20)(39,"div",21),t._UZ(40,"mat-icon",22),t.TgZ(41,"input",23),t.NdJ("input",function(s){return r.filterLabels(s)})("keydown",function(s){return r.filterLabelsInputKeyDown(s)}),t.qZA()()(),t.TgZ(42,"div",24),t.YNc(43,Bt,3,3,"ng-container",25),t.qZA()()()()()}if(2&e){const o=t.MAs(28);t.xp6(4),t.Q6J("tabIndex",-1),t.xp6(1),t.Q6J("svgIcon","heroicons_outline:x"),t.xp6(1),t.Q6J("formGroup",r.cardForm),t.xp6(1),t.Q6J("subscriptSizing","dynamic"),t.xp6(3),t.Q6J("formControlName","title")("rows",1)("cdkAutosizeMinRows",1),t.xp6(2),t.Q6J("subscriptSizing","dynamic"),t.xp6(3),t.Q6J("formControlName","description")("rows",1)("cdkAutosizeMinRows",1),t.xp6(5),t.Q6J("ngClass",t.kEZ(23,Jt,!r.card.dueDate,r.card.dueDate&&!r.isOverdue(r.card.dueDate),r.card.dueDate&&r.isOverdue(r.card.dueDate))),t.xp6(1),t.Q6J("svgIcon","heroicons_solid:calendar"),t.xp6(2),t.Q6J("ngIf",r.card.dueDate),t.xp6(1),t.Q6J("ngIf",!r.card.dueDate),t.xp6(1),t.Q6J("subscriptSizing","dynamic"),t.xp6(1),t.Q6J("formControlName","dueDate")("matDatepicker",o),t.xp6(6),t.Q6J("color","primary"),t.xp6(8),t.Q6J("svgIcon","heroicons_solid:search"),t.xp6(1),t.Q6J("maxLength",50),t.xp6(2),t.Q6J("ngForOf",r.filteredLabels)("ngForTrackBy",r.trackByFn)}},dependencies:[b.lW,b.RK,G.oG,v.Mq,v.hl,v.M5,v.dp,v.DK,q.KE,q.hX,C.Hw,$.Nt,X.IC,p.mk,p.sg,p.O5,d._Y,d.Fj,d.JJ,d.JL,d.sg,d.u,p.uU],encapsulation:2,changeDetection:0});class F{constructor(e,r,o){this._activatedRoute=e,this._matDialog=r,this._router=o}ngOnInit(){this._matDialog.open(Q,{autoFocus:!1}).afterClosed().subscribe(()=>{this._router.navigate(["./../.."],{relativeTo:this._activatedRoute})})}}F.\u0275fac=function(e){return new(e||F)(t.Y36(_.gz),t.Y36(N.uw),t.Y36(_.F0))},F.\u0275cmp=t.Xpm({type:F,selectors:[["scrumboard-card"]],decls:1,vars:0,template:function(e,r){1&e&&t._uU(0,"SCRUMBOARD -> BOARDS -> LIST -> CARD\n")},encapsulation:2,changeDetection:0});const Lt=[{path:"",component:D,resolve:{boards:k}},{path:":boardId",component:L,resolve:{board:T},children:[{path:"card/:cardId",component:F,resolve:{card:w}}]}];class Z{}Z.\u0275fac=function(e){return new(e||Z)},Z.\u0275mod=t.oAB({type:Z}),Z.\u0275inj=t.cJS({providers:[{provide:W.sG,useValue:j._O}],imports:[_.Bz.forChild(Lt),x._t,b.ot,G.p9,v.FA,N.Is,q.lN,C.Ps,$.c,j.En,O.Tx,tt.Cv,et.m]})}}]);
(this.webpackJsonpcardmaker=this.webpackJsonpcardmaker||[]).push([[0],{11:function(e,t,a){e.exports={makerBlack:"black",makerWhite:"white",form:"card_add_form_form__1mJeN",input:"card_add_form_input__1s9KG",textarea:"card_add_form_textarea__3OTfu",select:"card_add_form_select__2br_K",button:"card_add_form_button__3PkX4",fileInput:"card_add_form_fileInput__R7REj"}},12:function(e,t,a){e.exports={makerBlack:"black",makerWhite:"white",form:"card_edit_form_form__2xQD4",input:"card_edit_form_input__uur0a",textarea:"card_edit_form_textarea__1-v1B",select:"card_edit_form_select__V3wH9",button:"card_edit_form_button__3Jpk4",fileInput:"card_edit_form_fileInput__3mXDK"}},15:function(e,t,a){e.exports={makerGreen:"#385461",makerLightPink:"#ffeae8",makerWhite:"white",login:"login_login__19aQM",list:"login_list__17HtO",item:"login_item__3A1Lj",button:"login_button__Fi6x4"}},16:function(e,t,a){e.exports={makerLightGrey:"#e8e7e6",makerLightPink:"#ffeae8",makerPink:"pink",container:"image_file_input_container__3Eqtx",input:"image_file_input_input__1K4NM",button:"image_file_input_button__3E8sw",grey:"image_file_input_grey__68AiQ",pink:"image_file_input_pink__1V0O7",loading:"image_file_input_loading__3OwEa",spin:"image_file_input_spin__1K71y"}},21:function(e,t,a){e.exports={makerGreen:"#385461",makerBlack:"black",makerWhite:"white",header:"header_header__v9FKw",logo:"header_logo__1X7aW",title:"header_title__1DXxp",logout:"header_logout__1MXam"}},25:function(e,t,a){e.exports={makerGreen:"#385461",preview:"preview_preview__3lr-V",title:"preview_title__3zLS1",cards:"preview_cards__1KzyC"}},30:function(e,t,a){e.exports={makerWhite:"white",makerGreen:"#385461",footer:"footer_footer__1lZIc",title:"footer_title__pkoUs"}},33:function(e,t,a){e.exports={makerGreen:"#385461",makerLightGrey:"#e8e7e6",editor:"editor_editor__1nHIK",title:"editor_title__21REx"}},34:function(e,t,a){e.exports={mediaQuery:"62rem",makerWhite:"white",maker:"maker_maker__1Jsum",container:"maker_container__25Mis"}},38:function(e,t,a){e.exports={makerGrey:"#626262",app:"app_app__cewju"}},40:function(e,t,a){e.exports={makerWhite:"white",makerGreen:"#385461",button:"button_button__3_GL1"}},45:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a(2),c=a.n(r),i=a(37),o=a.n(i),s=(a(45),a(22)),l=a(5),u=a(38),d=a.n(u),m=a(30),j=a.n(m),f=a(1),_=Object(r.memo)((function(){return Object(f.jsx)("footer",{className:j.a.footer,children:Object(f.jsx)("p",{className:j.a.title,children:"Code your dream"})})})),p=a(21),b=a.n(p),h=Object(r.memo)((function(e){var t=e.onLogout;return Object(f.jsxs)("header",{className:b.a.header,children:[t&&Object(f.jsx)("button",{className:b.a.logout,onClick:t,children:"Logout"}),Object(f.jsx)("img",{className:b.a.logo,src:"/images/logo.png",alt:"logo"}),Object(f.jsx)("h1",{className:b.a.title,children:"Business Card Maker"})]})})),O=a(15),x=a.n(O),g=function(e){var t=e.authService,a=Object(l.f)(),n=function(e){a.push({pathname:"/maker",state:{id:e}})},c=function(e){t.login(e.currentTarget.textContent).then((function(e){return n(e.user.uid)}))};return Object(r.useEffect)((function(){t.onAuthChange((function(e){e&&n(e.id)}))})),Object(f.jsxs)("section",{className:x.a.login,children:[Object(f.jsx)(h,{}),Object(f.jsxs)("section",{children:[Object(f.jsx)("h1",{children:"Login"}),Object(f.jsxs)("ul",{className:x.a.list,children:[Object(f.jsx)("li",{className:x.a.item,children:Object(f.jsx)("button",{className:x.a.button,onClick:c,children:"Google"})}),Object(f.jsx)("li",{className:x.a.item,children:Object(f.jsx)("button",{className:x.a.button,onClick:c,children:"Github"})})]})]}),Object(f.jsx)(_,{})]})},v=a(13),k=a(11),N=a.n(k),y=a(40),C=a.n(y),w=Object(r.memo)((function(e){var t=e.name,a=e.onClick;return Object(f.jsx)("button",{className:C.a.button,onClick:a,children:t})})),R=Object(r.memo)((function(e){var t=e.FileInput,a=e.onAdd,n=Object(r.useRef)(),c=Object(r.useRef)(),i=Object(r.useRef)(),o=Object(r.useRef)(),s=Object(r.useRef)(),l=Object(r.useRef)(),u=Object(r.useRef)(),d=Object(r.useState)({fileName:null,fileURL:null}),m=Object(v.a)(d,2),j=m[0],_=m[1];return Object(f.jsxs)("form",{ref:n,className:N.a.form,children:[Object(f.jsx)("input",{ref:c,className:N.a.input,type:"text",name:"name",placeholder:"Name"}),Object(f.jsx)("input",{ref:i,className:N.a.input,type:"text",name:"company",placeholder:"Company"}),Object(f.jsxs)("select",{ref:o,className:N.a.select,name:"theme",placeholder:"Theme",children:[Object(f.jsx)("option",{placeholder:"light",children:"light"}),Object(f.jsx)("option",{placeholder:"dark",children:"dark"}),Object(f.jsx)("option",{placeholder:"colorful",children:"colorful"})]}),Object(f.jsx)("input",{ref:s,className:N.a.input,type:"text",name:"title",placeholder:"Title"}),Object(f.jsx)("input",{ref:l,className:N.a.input,type:"text",name:"email",placeholder:"Email"}),Object(f.jsx)("textarea",{ref:u,className:N.a.textarea,name:"message",placeholder:"Message"}),Object(f.jsx)("div",{className:N.a.fileInput,children:Object(f.jsx)(t,{name:j.fileName,onFileChange:function(e){console.log(e),_({fileName:e.name,fileURL:e.url})}})}),Object(f.jsx)(w,{name:"Add",onClick:function(e){e.preventDefault();var t={id:Date.now(),name:c.current.value||"",company:i.current.value||"",theme:o.current.value,title:s.current.value||"",email:l.current.value||"",message:u.current.value||"",fileName:j.fileName||"",fileURL:j.fileURL||""};n.current.reset(),_({fileName:null,fileURL:null}),a(t)}})]})})),I=a(23),G=a(12),L=a.n(G),F=Object(r.memo)((function(e){var t=e.FileInput,a=e.card,c=e.updateCard,i=e.deleteCard,o=Object(r.useRef)(),s=Object(r.useRef)(),l=Object(r.useRef)(),u=Object(r.useRef)(),d=Object(r.useRef)(),m=Object(r.useRef)(),j=a.name,_=a.company,p=a.title,b=a.email,h=a.message,O=a.theme,x=a.fileName,g=function(e){null!=e.currentTarget&&(e.preventDefault(),c(Object(n.a)(Object(n.a)({},a),{},Object(I.a)({},e.currentTarget.name,e.currentTarget.value))))};return Object(f.jsxs)("form",{className:L.a.form,children:[Object(f.jsx)("input",{className:L.a.input,type:"text",name:"name",ref:o,value:j,onChange:g}),Object(f.jsx)("input",{className:L.a.input,type:"text",name:"company",ref:s,value:_,onChange:g}),Object(f.jsxs)("select",{className:L.a.select,name:"theme",ref:l,value:O,onChange:g,children:[Object(f.jsx)("option",{value:"light",children:"light"}),Object(f.jsx)("option",{value:"dark",children:"dark"}),Object(f.jsx)("option",{value:"colorful",children:"colorful"})]}),Object(f.jsx)("input",{className:L.a.input,type:"text",name:"title",ref:u,value:p,onChange:g}),Object(f.jsx)("input",{className:L.a.input,type:"text",name:"email",ref:d,value:b,onChange:g}),Object(f.jsx)("textarea",{className:L.a.textarea,ref:m,name:"message",value:h,onChange:g}),Object(f.jsx)("div",{className:L.a.fileInput,children:Object(f.jsx)(t,{name:x,onFileChange:function(e){c(Object(n.a)(Object(n.a)({},a),{},{fileName:e.name,fileURL:e.url}))}})}),Object(f.jsx)(w,{name:"Delete",onClick:function(){i(a)}})]})})),S=a(33),A=a.n(S),E=function(e){var t=e.FileInput,a=e.cards,n=e.addCard,r=e.updateCard,c=e.deleteCard;return Object(f.jsxs)("section",{className:A.a.editor,children:[Object(f.jsx)("h1",{className:A.a.title,children:"Card Maker"}),Object.keys(a).map((function(e){return Object(f.jsx)(F,{FileInput:t,card:a[e],updateCard:r,deleteCard:c},e)})),Object(f.jsx)(R,{FileInput:t,onAdd:n})]})},P=a(8),U=a.n(P);function W(e){switch(e){case"dark":return U.a.dark;case"light":return U.a.light;case"colorful":return U.a.colorful;default:throw new Error("unknown theme: ".concat(e))}}var D=Object(r.memo)((function(e){var t=e.card,a=t.name,n=t.company,r=t.title,c=t.email,i=t.message,o=t.theme,s=t.fileURL||"/images/default_logo.png";return Object(f.jsxs)("li",{className:"".concat(U.a.card," ").concat(W(o)),children:[Object(f.jsx)("img",{className:U.a.avatar,src:s,alt:"profile"}),Object(f.jsxs)("div",{className:U.a.info,children:[Object(f.jsx)("h1",{className:U.a.name,children:a}),Object(f.jsx)("p",{className:U.a.company,children:n}),Object(f.jsx)("p",{className:U.a.title,children:r}),Object(f.jsx)("p",{className:U.a.email,children:c}),Object(f.jsx)("p",{className:U.a.message,children:i})]})]})})),M=a(25),z=a.n(M),K=function(e){var t=e.cards;return Object(f.jsxs)("section",{className:z.a.preview,children:[Object(f.jsx)("h1",{className:z.a.title,children:"Card Preview"}),Object(f.jsx)("ul",{className:z.a.cards,children:Object.keys(t).map((function(e){return Object(f.jsx)(D,{card:t[e]},e)}))})]})},B=a(34),T=a.n(B),H=function(e){var t,a=e.FileInput,c=e.authService,i=e.cardRepository,o=Object(l.f)(),s=null===o||void 0===o||null===(t=o.location)||void 0===t?void 0:t.state,u=Object(r.useState)({}),d=Object(v.a)(u,2),m=d[0],j=d[1],p=Object(r.useState)(s&&s.id),b=Object(v.a)(p,2),O=b[0],x=b[1],g=Object(r.useCallback)((function(){c.logout()}),[c]);Object(r.useEffect)((function(){if(O){var e=i.syncCards(O,(function(e){j(e)}));return function(){return e()}}}),[O,i]),Object(r.useEffect)((function(){c.onAuthChange((function(e){e?x(e.uid):o.push("/")}))}),[c,O,o]);var k=function(e){j((function(t){var a=Object(n.a)({},t);return a[e.id]=e,a})),i.saveCard(O,e)};return Object(f.jsxs)("section",{className:T.a.maker,children:[Object(f.jsx)(h,{onLogout:g}),Object(f.jsxs)("div",{className:T.a.container,children:[Object(f.jsx)(E,{FileInput:a,cards:m,addCard:k,updateCard:k,deleteCard:function(e){j((function(t){var a=Object(n.a)({},t);return delete a[e.id],a})),i.removeCard(O,e)}}),Object(f.jsx)(K,{cards:m})]}),Object(f.jsx)(_,{})]})};var J=function(e){var t=e.FileInput,a=e.authService,n=e.cardRepository;return Object(f.jsx)("div",{className:d.a.app,children:Object(f.jsx)(s.a,{children:Object(f.jsxs)(l.c,{children:[Object(f.jsx)(l.a,{exact:!0,path:"/",children:Object(f.jsx)(g,{authService:a})}),Object(f.jsx)(l.a,{path:"/maker",children:Object(f.jsx)(H,{FileInput:t,authService:a,cardRepository:n})})]})})})},Q=a(17),V=a(18),X=a(26),q=(a(51),a(53),X.a.initializeApp({apiKey:"AIzaSyAmtHz_QCvEc4JSQoEA9ynV4iPvHBMcORw",authDomain:"business-card-maker-5be90.firebaseapp.com",databaseURL:"https://business-card-maker-5be90-default-rtdb.firebaseio.com",projectId:"business-card-maker-5be90"})),Z=q.auth(),Y=q.database(),$=new X.a.auth.GoogleAuthProvider,ee=new X.a.auth.GithubAuthProvider,te=function(){function e(){Object(Q.a)(this,e)}return Object(V.a)(e,[{key:"login",value:function(e){var t=this.getProvider(e);return Z.signInWithPopup(t)}},{key:"logout",value:function(){Z.signOut()}},{key:"onAuthChange",value:function(e){Z.onAuthStateChanged((function(t){e(t)}))}},{key:"getProvider",value:function(e){switch(e){case"Google":return $;case"Github":return ee;default:throw new Error("not supported provider: ".concat(e))}}}]),e}(),ae=a(19),ne=a.n(ae),re=a(24),ce=function(){function e(){Object(Q.a)(this,e)}return Object(V.a)(e,[{key:"upload",value:function(){var e=Object(re.a)(ne.a.mark((function e(t){var a,n;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("file",t),a.append("upload_preset","pdzaoz52"),e.next=5,fetch("https://api.cloudinary.com/v1_1/drqni4rhj/upload",{method:"POST",body:a});case 5:return n=e.sent,e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),ie=a(16),oe=a.n(ie),se=Object(r.memo)((function(e){var t=e.imageUploader,a=e.name,n=e.onFileChange,c=Object(r.useState)(!1),i=Object(v.a)(c,2),o=i[0],s=i[1],l=Object(r.useRef)(),u=function(){var e=Object(re.a)(ne.a.mark((function e(a){var r;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!0),e.next=3,t.upload(a.target.files[0]);case 3:r=e.sent,s(!1),n({name:r.original_filename,url:r.url});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:oe.a.container,children:[Object(f.jsx)("input",{ref:l,className:oe.a.input,type:"file",accept:"image/*",name:"file",onChange:u}),!o&&Object(f.jsx)("button",{className:"".concat(oe.a.button," ").concat(a?oe.a.pink:oe.a.grey),onClick:function(e){e.preventDefault(),l.current.click()},children:a||"No file"}),o&&Object(f.jsx)("div",{className:oe.a.loading})]})})),le=function(){function e(){Object(Q.a)(this,e)}return Object(V.a)(e,[{key:"syncCards",value:function(e,t){var a=Y.ref("".concat(e,"/cards"));return a.on("value",(function(e){var a=e.val();a&&t(a)})),function(){return a.off()}}},{key:"saveCard",value:function(e,t){Y.ref("".concat(e,"/cards/").concat(t.id)).set(t)}},{key:"removeCard",value:function(e,t){Y.ref("".concat(e,"/cards/").concat(t.id)).remove()}}]),e}(),ue=new te,de=new le,me=new ce;o.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(J,{authService:ue,FileInput:function(e){return Object(f.jsx)(se,Object(n.a)(Object(n.a)({},e),{},{imageUploader:me}))},cardRepository:de})}),document.getElementById("root"))},8:function(e,t,a){e.exports={makerBlack:"black",makerWhite:"white",makerColorful:"linear-gradient(166deg, rgba(237, 193, 211, 1) 0%,rgba(212, 149, 161, 1) 60%, rgba(162, 63, 63, 1) 100%, rgba(127, 188, 242, 1) 100%)",makerShadow:"rgba(217, 217, 217, 1)",makerWheat:"wheat",card:"card_card__1py-W",dark:"card_dark__1FdRe",light:"card_light__1Cc6G",colorful:"card_colorful__2zruV",avatar:"card_avatar__33lzN",info:"card_info__2Fslj",name:"card_name__31aE7",company:"card_company__3UM9t",title:"card_title__25_dG",email:"card_email__3uHYI",message:"card_message__2dRnZ"}}},[[58,1,2]]]);
//# sourceMappingURL=main.8c06bbc6.chunk.js.map
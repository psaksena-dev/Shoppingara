(this.webpackJsonpshoppingara=this.webpackJsonpshoppingara||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},120:function(e,t,n){},121:function(e,t,n){},127:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(1),a=n.n(c),i=n(37),s=n.n(i),o=n(24),l=n(65),u=(n(85),n(86),n(66)),d=n.n(u),p=n(5),b=n(25),j=n(67),m=n.n(j),O=n(31),f=n.n(O),h=n(14),x=Object(h.g)((function(e){var t=e.title,n=e.imageUrl,c=e.size,a=e.linkUrl,i=e.history,s=e.match,o=[f.a.menuitem];return c&&o.push(f.a.large),Object(r.jsxs)("div",{className:o.join(" "),onClick:function(){i.push("".concat(s.url).concat(a))},children:[Object(r.jsx)("div",{style:{backgroundImage:"url(".concat(n,")")},className:f.a.backgroundImage}),Object(r.jsxs)("div",{className:f.a.content,children:[Object(r.jsxs)("h1",{className:f.a.title,children:[t.toUpperCase()," "]}),Object(r.jsx)("span",{className:f.a.subtitle,children:"SHOP NOW"})]})]})})),g=n(12),v=n(11),_=Object(v.a)([function(e){return e.directory}],(function(e){return e.sections})),w=Object(v.b)({sections:_}),y=Object(g.b)(w)((function(e){var t=e.sections;return Object(r.jsx)("div",{className:m.a.directorymenu,children:t.map((function(e){var t=e.id,n=Object(b.a)(e,["id"]);return Object(r.jsx)(x,Object(p.a)({},n),t)}))})})),N=function(){return Object(r.jsx)("div",{className:d.a.homepage,children:Object(r.jsx)(y,{})})},C={FETCH_COLLECTION_START:"FETCH_COLLECTION_START",FETCH_COLLECTION_SUCCESS:"FETCH_COLLECTION_SUCCESS",FETCH_COLLECTION_FAILURE:"FETCH_COLLECTION_SUCCESS"},k=function(e){return{type:C.FETCH_COLLECTION_SUCCESS,payload:e}},E=function(e){return e.shop},I=Object(v.a)([E],(function(e){return e.collections})),S=Object(v.a)([I],(function(e){return e?Object.keys(e).map((function(t){return e[t]})):[]})),T=Object(v.a)([E],(function(e){return e.isFetching})),U=Object(v.a)([E],(function(e){return!!e.collections})),A=n(53),L=n(54);function P(){var e=Object(A.a)(["\n\tdisplay: inline-block;\n\twidth: 50px;\n\theight: 50px;\n\tborder: 3px solid rgba(195, 195, 195, 0.6);\n\tborder-radius: 50%;\n\tborder-top-color: #636767;\n\tanimation: spin 1s ease-in-out infinite;\n\t-webkit-animation: spin 1s ease-in-out infinite;\n\n\t@keyframes spin {\n\t\tto {\n\t\t\t-webkit-transform: rotate(360deg);\n\t\t}\n\t}\n\t@-webkit-keyframes spin {\n\t\tto {\n\t\t\t-webkit-transform: rotate(360deg);\n\t\t}\n\t}\n"]);return P=function(){return e},e}function R(){var e=Object(A.a)(["\n\theight: 60vh;\n\twidth: 100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n"]);return R=function(){return e},e}var F=L.a.div(R()),G=L.a.div(P()),H=function(e){return function(t){var n=t.isLoading,c=Object(b.a)(t,["isLoading"]);return n?Object(r.jsx)(F,{children:Object(r.jsx)(G,{})}):Object(r.jsx)(e,Object(p.a)({},c))}},q=(n(97),n(34)),D=n.n(q),M=(n(98),function(e){var t=e.children,n=e.isGoogleSignIn,c=e.inverted,a=Object(b.a)(e,["children","isGoogleSignIn","inverted"]);return Object(r.jsx)("button",Object(p.a)(Object(p.a)({className:"".concat(c?"inverted":""," ").concat(n?"google-sign-in":""," custom-button")},a),{},{children:t}))}),z="TOGGLE_CART_DROPDOWN",B="ADD_ITEM",W="REMOVE_ITEM",V="CLEAR_ITEM_FROM_CART",X="CLEAR_CART",Z=function(){return{type:z}},K=function(e){return{type:B,payload:e}},J=Object(g.b)(null,(function(e){return{addItem:function(t){return e(K(t))}}}))((function(e){var t=e.item,n=e.addItem,c=t.name,a=t.imageUrl,i=t.price;return Object(r.jsxs)("div",{className:D.a.collectionItem,children:[Object(r.jsx)("div",{className:D.a.image,style:{backgroundImage:"url(".concat(a,")")}}),Object(r.jsxs)("div",{className:D.a.collectionFooter,children:[Object(r.jsx)("span",{className:D.a.name,children:c}),Object(r.jsxs)("span",{className:D.a.price,children:["$",i]})]}),Object(r.jsx)(M,{inverted:!0,onClick:function(){return n(t)},children:"Add To Cart"})]})})),Q=Object(g.b)((function(e,t){return{collection:(n=t.match.params.collectionId,Object(v.a)([I],(function(e){return e[n]})))(e)};var n}))((function(e){var t=e.collection,n=t.title,c=t.items;return Object(r.jsxs)("div",{className:"collection-page",children:[Object(r.jsx)("h2",{className:"title",children:n}),Object(r.jsx)("div",{className:"items",children:c.map((function(e){return Object(r.jsx)(J,{item:e},e.id)}))})]})})),$=Object(v.b)({isLoading:function(e){return!U(e)}}),Y=Object(g.b)($)(H(Q)),ee=(n(99),n(42)),te=n.n(ee),ne=function(e){var t=e.title,n=e.items;return Object(r.jsxs)("div",{className:te.a.collectionPreview,children:[Object(r.jsx)("h1",{className:te.a.title,children:t.toUpperCase()}),Object(r.jsx)("div",{className:te.a.preview,children:n.filter((function(e,t){return t<4})).map((function(e){return Object(r.jsx)(J,{item:e},e.id)}))})]})},re=Object(v.b)({collections:S}),ce=Object(g.b)(re)((function(e){var t=e.collections;return Object(r.jsx)("div",{className:"collections-overview",children:t.map((function(e){var t=e.id,n=Object(b.a)(e,["id"]);return Object(r.jsx)(ne,Object(p.a)({},n),t)}))})})),ae=Object(v.b)({isLoading:T}),ie=Object(g.b)(ae)(H(ce)),se=Object(g.b)(null,(function(e){return{fetchCollectionStart:function(){return e({type:C.FETCH_COLLECTION_START})}}}))((function(e){var t=e.fetchCollectionStart,n=e.match;return Object(c.useEffect)((function(){t()}),[t]),Object(r.jsxs)("div",{children:[Object(r.jsx)(h.b,{exact:!0,path:"".concat(n.path),component:ie}),Object(r.jsx)(h.b,{path:"".concat(n.path,"/:collectionId"),component:Y})]})})),oe=(n(100),function(e){return e.cart}),le=Object(v.a)([oe],(function(e){return e.cartItems})),ue=Object(v.a)([le],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),de=Object(v.a)([oe],(function(e){return e.hidden})),pe=Object(v.a)([le],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),be=(n(101),Object(g.b)(null,(function(e){return{clearItem:function(t){return e({type:V,payload:t})},addItem:function(t){return e(K(t))},removeItem:function(t){return e({type:W,payload:t})}}}))((function(e){var t=e.cartItem,n=e.clearItem,c=e.addItem,a=e.removeItem,i=t.name,s=t.imageUrl,o=t.price,l=t.quantity;return Object(r.jsxs)("div",{className:"checkout-item",children:[Object(r.jsx)("div",{className:"image-container",children:Object(r.jsx)("img",{src:s,alt:"item"})}),Object(r.jsx)("span",{className:"name",children:i}),Object(r.jsxs)("span",{className:"quantity",children:[Object(r.jsx)("div",{className:"arrow",onClick:function(){return a(t)},children:"\u276e"}),Object(r.jsx)("span",{className:"value",children:l}),Object(r.jsx)("div",{className:"arrow",onClick:function(){return c(t)},children:"\u276f"})]}),Object(r.jsx)("span",{className:"price",children:o}),Object(r.jsx)("div",{className:"remove-button",onClick:function(){return n(t)},children:"\u2715"})]})}))),je=n(73),me=n.n(je),Oe=n(74),fe=n.n(Oe),he=function(e){var t=e.price,n=100*t;return Object(r.jsx)(me.a,{label:"Pay Now",name:"Shoppingara Ltd.",billingAddress:!0,shippingAddress:!0,description:"Your total is $".concat(t),amount:n,panelLabel:"Pay Now",token:function(e){fe()({url:"payment",method:"post",data:{amount:n,token:e}}).then((function(e){alert("Payment successfull")})).catch((function(e){console.log("Payment error : ",JSON.parse(e)),alert("There was an issue with your payment. Please use the provided credit card.")}))},stripeKey:"pk_test_ZA6ojoN61lBDokncaXfgRlWP007MH8Mzg1",image:"https://svgshare.com/i/UPG.svg"})},xe=Object(v.b)({cartItems:le,total:pe}),ge=Object(g.b)(xe)((function(e){var t=e.cartItems,n=e.total;return Object(r.jsxs)("div",{className:"checkout-page",children:[Object(r.jsxs)("div",{className:"checkout-header",children:[Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Product"})}),Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Description"})}),Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Quantity"})}),Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Price"})}),Object(r.jsx)("div",{className:"header-block",children:Object(r.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(r.jsx)(be,{cartItem:e},e.id)})),Object(r.jsx)("div",{className:"total",children:Object(r.jsxs)("span",{children:["TOTAL: $",n]})}),Object(r.jsxs)("div",{className:"test-warning",children:["*Please use the following test credit card for payments*",Object(r.jsx)("br",{}),"4242 4242 4242 4242 - Exp: 01/23 - CVV: 123"]}),Object(r.jsx)(he,{price:n})]})})),ve=n(75),_e=n.n(ve),we=n(33),ye=n(4),Ne=n.n(ye),Ce=n(29),ke=n(41),Ee=(n(120),function(e){var t=e.handleChange,n=e.label,c=Object(b.a)(e,["handleChange","label"]);return Object(r.jsxs)("div",{className:"group",children:[Object(r.jsx)("input",Object(p.a)({className:"form-input",onChange:t},c)),n?Object(r.jsx)("label",{className:"".concat(c.value.length?"shrink":""," form-input-label"),children:n}):null]})}),Ie=n(43),Se=n.n(Ie),Te="GOOGLE_SIGNIN_START",Ue="EMAIL_SIGNIN_START",Ae="SIGNIN_SUCCESS",Le="SIGNIN_FAIL",Pe="CHECK_USER_SESSION",Re="SIGN_OUT_START",Fe="SIGN_OUT_SUCCESS",Ge="SIGN_OUT_FAILURE",He="SIGN_UP_START",qe="SIGN_UP_SUCCESS",De="SIGN_UP_FAILURE",Me=function(e){return{type:Ae,payload:e}},ze=function(e){return{type:Le,payload:e}},Be=function(e){var t=e.user,n=e.additionalData;return{type:qe,payload:{user:t,additionalData:n}}},We=Object(g.b)(null,(function(e){return{googleSignInStart:function(){return e({type:Te})},emailSignInStart:function(t){return e(function(e){return{type:Ue,payload:e}}(t))}}}))((function(e){var t=e.emailSignInStart,n=e.googleSignInStart,a=Object(c.useState)({email:"",password:""}),i=Object(ke.a)(a,2),s=i[0],o=i[1],l=s.email,u=s.password,d=function(){var e=Object(Ce.a)(Ne.a.mark((function e(n){return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t({email:l,password:u});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(e){var t=e.target,n=t.value,r=t.name;o(Object(p.a)(Object(p.a)({},s),{},Object(we.a)({},r,n)))};return Object(r.jsxs)("div",{className:Se.a.signin,children:[Object(r.jsx)("h2",{className:Se.a.title,children:"I already have an account"}),Object(r.jsx)("span",{children:"Sign in with your email and password"}),Object(r.jsxs)("form",{onSubmit:d,children:[Object(r.jsx)(Ee,{type:"email",name:"email",value:l,required:!0,onChange:b,label:"Email"}),Object(r.jsx)(Ee,{type:"password",name:"password",value:u,required:!0,onChange:b,label:"Password"}),Object(r.jsxs)("div",{className:Se.a.buttons,children:[Object(r.jsx)(M,{type:"submit",children:"Sign In"}),Object(r.jsx)(M,{type:"button",isGoogleSignIn:!0,onClick:n,children:"Sign In With Google"})]})]})]})})),Ve=n(44),Xe=n.n(Ve),Ze=Object(g.b)(null,(function(e){return{signUpStart:function(t){return e(function(e){return{type:He,payload:e}}(t))}}}))((function(e){var t=e.signUpStart,n=Object(c.useState)({displayName:"",email:"",password:"",confirmPassword:""}),a=Object(ke.a)(n,2),i=a[0],s=a[1],o=i.displayName,l=i.email,u=i.password,d=i.confirmPassword,b=function(){var e=Object(Ce.a)(Ne.a.mark((function e(n){return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),u===d){e.next=4;break}return alert("passwords don't match"),e.abrupt("return");case 4:t({email:l,password:u,displayName:o});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,n=t.name,r=t.value;s(Object(p.a)(Object(p.a)({},i),{},Object(we.a)({},n,r)))};return Object(r.jsxs)("div",{className:Xe.a["sign-up"],children:[Object(r.jsx)("h2",{className:Xe.a.title,children:"I do not have an account"}),Object(r.jsx)("span",{children:"Sign up with your email and password"}),Object(r.jsxs)("form",{className:Xe.a["sign-up-form"],onSubmit:b,children:[Object(r.jsx)(Ee,{type:"text",name:"displayName",value:o,onChange:j,label:"Display Name",required:!0}),Object(r.jsx)(Ee,{type:"email",name:"email",value:l,onChange:j,label:"Email",required:!0}),Object(r.jsx)(Ee,{type:"password",name:"password",value:u,onChange:j,label:"Password",required:!0}),Object(r.jsx)(Ee,{type:"password",name:"confirmPassword",value:d,onChange:j,label:"Confirm Password",required:!0}),Object(r.jsx)(M,{type:"submit",children:"Sign Up"})]})]})})),Ke=function(){return Object(r.jsxs)("div",{className:_e.a["sign-in-and-sign-up"],children:[Object(r.jsx)(We,{}),Object(r.jsx)(Ze,{})]})},Je=n(27),Qe=n.n(Je);function $e(){return($e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function Ye(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var et=c.createElement("desc",null,"Created with Sketch."),tt=c.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},c.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},c.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},c.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),c.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),c.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))));function nt(e,t){var n=e.title,r=e.titleId,a=Ye(e,["title","titleId"]);return c.createElement("svg",$e({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":r},a),void 0===n?c.createElement("title",{id:r},"Group"):n?c.createElement("title",{id:r},n):null,et,tt)}var rt=c.forwardRef(nt);n.p;function ct(){return(ct=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function at(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var it=c.createElement("g",null),st=c.createElement("g",null),ot=c.createElement("g",null),lt=c.createElement("g",null),ut=c.createElement("g",null),dt=c.createElement("g",null),pt=c.createElement("g",null),bt=c.createElement("g",null),jt=c.createElement("g",null),mt=c.createElement("g",null),Ot=c.createElement("g",null),ft=c.createElement("g",null),ht=c.createElement("g",null),xt=c.createElement("g",null),gt=c.createElement("g",null);function vt(e,t){var n=e.title,r=e.titleId,a=at(e,["title","titleId"]);return c.createElement("svg",ct({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?c.createElement("title",{id:r},n):null,c.createElement("g",null,c.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),c.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),c.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),c.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),it,st,ot,lt,ut,dt,pt,bt,jt,mt,Ot,ft,ht,xt,gt)}var _t=c.forwardRef(vt),wt=(n.p,n(45)),yt=n.n(wt),Nt=Object(v.b)({itemCount:ue}),Ct=Object(g.b)(Nt,(function(e){return{toggleCartDropdown:function(){return e(Z())}}}))((function(e){var t=e.toggleCartDropdown,n=e.itemCount;return Object(r.jsxs)("div",{className:yt.a["cart-icon"],children:[Object(r.jsx)(_t,{className:yt.a["shopping-icon"],onClick:t}),Object(r.jsx)("span",{className:yt.a["item-count"],children:n})]})})),kt=n(46),Et=n.n(kt),It=(n(121),function(e){var t=e.item,n=t.imageUrl,c=t.name,a=t.price,i=t.quantity;return Object(r.jsxs)("div",{className:"cart-item",children:[Object(r.jsx)("img",{src:n,alt:"item"}),Object(r.jsxs)("div",{className:"item-details",children:[Object(r.jsx)("span",{className:"name",children:c}),Object(r.jsxs)("span",{className:"price",children:[i," x $",a]})]})]})}),St=Object(v.b)({cartItems:le}),Tt=Object(h.g)(Object(g.b)(St)((function(e){var t=e.cartItems,n=e.history,c=e.dispatch;return Object(r.jsxs)("div",{className:Et.a["cart-dropdown"],children:[Object(r.jsx)("div",{className:Et.a["cart-items"],children:t.length?t.map((function(e){return Object(r.jsx)(It,{item:e},e.id)})):Object(r.jsx)("span",{className:Et.a["empty-message"],children:"Your cart is empty"})}),Object(r.jsx)(M,{onClick:function(){n.push("/checkout"),c(Z())},children:"Go To Checkout"})]})}))),Ut=Object(v.a)([function(e){return e.user}],(function(e){return e.currentUser})),At=Object(v.b)({currentUser:Ut,hidden:de}),Lt=Object(g.b)(At,(function(e){return{signOutStart:function(){return e({type:Re})}}}))((function(e){var t=e.currentUser,n=e.hidden,c=e.signOutStart;return Object(r.jsxs)("div",{className:Qe.a.header,children:[Object(r.jsx)("div",{className:Qe.a.logocontainer,children:Object(r.jsx)(o.b,{to:"/",children:Object(r.jsx)(rt,{})})}),Object(r.jsxs)("div",{className:Qe.a.options,children:[Object(r.jsx)(o.b,{to:"/shop",className:Qe.a.option,children:"SHOP"}),Object(r.jsx)(o.b,{to:"/contact",className:Qe.a.option,children:"CONTACT"}),t?Object(r.jsx)("div",{className:Qe.a.option,onClick:c,children:"SIGN OUT"}):Object(r.jsx)(o.b,{to:"/signin",className:Qe.a.option,children:"SIGN IN"}),Object(r.jsx)(Ct,{})]}),n?null:Object(r.jsx)(Tt,{})]})})),Pt=Object(v.b)({currentUser:Ut}),Rt=Object(g.b)(Pt,(function(e){return{checkUserSession:function(){return e({type:Pe})}}}))((function(e){var t=e.checkUserSession,n=e.currentUser;return Object(c.useEffect)((function(){t()}),[t]),Object(r.jsxs)("div",{children:[Object(r.jsx)(Lt,{}),Object(r.jsxs)(h.d,{children:[Object(r.jsx)(h.b,{exact:!0,path:"/",component:N}),Object(r.jsx)(h.b,{path:"/shop",component:se}),Object(r.jsx)(h.b,{exact:!0,path:"/checkout",component:ge}),Object(r.jsx)(h.b,{exact:!0,path:"/signin",render:function(){return n?Object(r.jsx)(h.a,{to:"/"}):Object(r.jsx)(Ke,{})}})]})]})})),Ft=n(19),Gt=n(79),Ht=(n(122),n(40)),qt=n(76),Dt=n.n(qt),Mt={currentUser:null,error:null},zt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ae:return Object(p.a)(Object(p.a)({},e),{},{currentUser:t.payload,error:null});case Fe:return Object(p.a)(Object(p.a)({},e),{},{currentUser:null,error:null});case Ge:case Le:case De:return Object(p.a)(Object(p.a)({},e),{},{error:t.payload});default:return e}},Bt=n(78),Wt=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(p.a)(Object(p.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(Bt.a)(e),[Object(p.a)(Object(p.a)({},t),{},{quantity:1})])},Vt=function(e,t){return 1===e.find((function(e){return e.id===t.id})).quantity?e.filter((function(e){return e.id!==t.id})):e.map((function(e){return e.id===t.id?Object(p.a)(Object(p.a)({},e),{},{quantity:e.quantity-1}):e}))},Xt={hidden:!0,cartItems:[]},Zt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Xt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case z:return Object(p.a)(Object(p.a)({},e),{},{hidden:!e.hidden});case B:return Object(p.a)(Object(p.a)({},e),{},{cartItems:Wt(e.cartItems,t.payload)});case W:return Object(p.a)(Object(p.a)({},e),{},{cartItems:Vt(e.cartItems,t.payload)});case V:return Object(p.a)(Object(p.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.id!==t.payload.id}))});case X:return Object(p.a)(Object(p.a)({},e),{},{cartItems:[]});default:return e}},Kt={sections:[{title:"hats",imageUrl:"https://i.ibb.co/cvpntL1/hats.png",id:1,linkUrl:"shop/hats"},{title:"jackets",imageUrl:"https://i.ibb.co/px2tCc3/jackets.png",id:2,linkUrl:"shop/jackets"},{title:"sneakers",imageUrl:"https://i.ibb.co/0jqHpnp/sneakers.png",id:3,linkUrl:"shop/sneakers"},{title:"womens",imageUrl:"https://i.ibb.co/GCCdy8t/womens.png",size:"large",id:4,linkUrl:"shop/womens"},{title:"mens",imageUrl:"https://i.ibb.co/R70vBrQ/men.png",size:"large",id:5,linkUrl:"shop/mens"}]},Jt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Kt,t=arguments.length>1?arguments[1]:void 0;return t.type,e},Qt={collections:null,isFetching:!1,errorMessage:null},$t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C.FETCH_COLLECTION_START:return Object(p.a)(Object(p.a)({},e),{},{isFetching:!0});case C.FETCH_COLLECTION_SUCCESS:return Object(p.a)(Object(p.a)({},e),{},{isFetching:!1,collections:t.payload});case C.FETCH_COLLECTION_FAILURE:return Object(p.a)(Object(p.a)({},e),{},{isFetching:!1,errorMessage:t.payload});default:return e}},Yt={key:"root",storage:Dt.a,whitelist:["cart"]},en=Object(Ft.c)({user:zt,cart:Zt,directory:Jt,shop:$t}),tn=Object(Ht.a)(Yt,en),nn=n(8),rn=n(35),cn=(n(128),n(125),function(){var e=Object(Ce.a)(Ne.a.mark((function e(t,n){var r,c,a,i;return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=on.doc("users/".concat(t.uid)),e.next=5,r.get();case 5:if(e.sent.exists){e.next=17;break}return c=t.displayName,a=t.email,i=new Date,e.prev=9,e.next=12,r.set(Object(p.a)({displayName:c,email:a,createdAt:i},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",r);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}()),an=function(e){return e.docs.map((function(e){var t=e.data(),n=t.title,r=t.items;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:r}})).reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{})};rn.a.initializeApp({apiKey:"AIzaSyDzPuMowrv_nTT9hsHKCW0vFpxlPge12DI",authDomain:"shoppinggara-70ae0.firebaseapp.com",projectId:"shoppinggara-70ae0",storageBucket:"shoppinggara-70ae0.appspot.com",messagingSenderId:"699015041587",appId:"1:699015041587:web:71e2410979e6d927018946",measurementId:"G-ZJ0RNBC2CD"});var sn=rn.a.auth(),on=rn.a.firestore(),ln=new rn.a.auth.GoogleAuthProvider;ln.setCustomParameters({prompt:"select_account"});rn.a;var un=Ne.a.mark(bn),dn=Ne.a.mark(jn),pn=Ne.a.mark(mn);function bn(){var e,t,n;return Ne.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return console.log("in saga"),r.prev=1,e=on.collection("collections"),r.next=5,e.get();case 5:return t=r.sent,r.next=8,Object(nn.b)(an,t);case 8:return n=r.sent,r.next=11,Object(nn.c)(k(n));case 11:r.next=17;break;case 13:return r.prev=13,r.t0=r.catch(1),r.next=17,Object(nn.c)((c=r.t0.message,{type:C.FETCH_COLLECTION_FAILURE,payload:c}));case 17:case"end":return r.stop()}var c}),un,null,[[1,13]])}function jn(){return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(nn.d)(C.FETCH_COLLECTION_START,bn);case 2:case"end":return e.stop()}}),dn)}function mn(){return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(nn.a)([Object(nn.b)(jn)]);case 2:case"end":return e.stop()}}),pn)}var On=Ne.a.mark(Sn),fn=Ne.a.mark(Tn),hn=Ne.a.mark(Un),xn=Ne.a.mark(An),gn=Ne.a.mark(Ln),vn=Ne.a.mark(Pn),_n=Ne.a.mark(Rn),wn=Ne.a.mark(Fn),yn=Ne.a.mark(Gn),Nn=Ne.a.mark(Hn),Cn=Ne.a.mark(qn),kn=Ne.a.mark(Dn),En=Ne.a.mark(Mn),In=Ne.a.mark(zn);function Sn(e,t){var n,r;return Ne.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.prev=0,c.next=3,Object(nn.b)(cn,e,t);case 3:return n=c.sent,c.next=6,n.get();case 6:return r=c.sent,c.next=9,Object(nn.c)(Me(Object(p.a)({id:r.id},r.data())));case 9:c.next=15;break;case 11:return c.prev=11,c.t0=c.catch(0),c.next=15,Object(nn.c)(ze(c.t0));case 15:case"end":return c.stop()}}),On,null,[[0,11]])}function Tn(){var e,t;return Ne.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,sn.signInWithPopup(ln);case 3:return e=n.sent,t=e.user,n.next=7,Object(nn.b)(Sn,t);case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(nn.c)(ze(n.t0));case 13:case"end":return n.stop()}}),fn,null,[[0,9]])}function Un(){return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(nn.d)(Te,Tn);case 2:case"end":return e.stop()}}),hn)}function An(e){var t,n,r,c,a;return Ne.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.payload,n=t.email,r=t.password,i.prev=1,i.next=4,sn.signInWithEmailAndPassword(n,r);case 4:return c=i.sent,a=c.user,i.next=8,Object(nn.b)(Sn,a);case 8:i.next=14;break;case 10:return i.prev=10,i.t0=i.catch(1),i.next=14,Object(nn.c)(ze(i.t0));case 14:case"end":return i.stop()}}),xn,null,[[1,10]])}function Ln(){return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(nn.d)(Ue,An);case 2:case"end":return e.stop()}}),gn)}function Pn(){var e;return Ne.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,new Promise((function(e,t){var n=sn.onAuthStateChanged((function(t){n(),e(t)}),t)}));case 3:if(e=t.sent){t.next=6;break}return t.abrupt("return");case 6:return t.next=8,Sn(e);case 8:t.next=14;break;case 10:return t.prev=10,t.t0=t.catch(0),t.next=14,Object(nn.c)(ze(t.t0));case 14:case"end":return t.stop()}}),vn,null,[[0,10]])}function Rn(){return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(nn.d)(Pe,Pn);case 2:case"end":return e.stop()}}),_n)}function Fn(){return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,sn.signOut();case 3:return e.next=5,Object(nn.c)({type:Fe});case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(nn.c)((t=e.t0,{type:Ge,payload:t}));case 11:case"end":return e.stop()}var t}),wn,null,[[0,7]])}function Gn(){return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(nn.d)(Re,Fn);case 2:case"end":return e.stop()}}),yn)}function Hn(e){var t,n,r,c,a,i;return Ne.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return t=e.payload,n=t.email,r=t.password,c=t.displayName,s.prev=1,s.next=4,sn.createUserWithEmailAndPassword(n,r);case 4:return a=s.sent,i=a.user,s.next=9,Object(nn.c)(Be({user:i,additionalData:{displayName:c}}));case 9:s.next=15;break;case 11:return s.prev=11,s.t0=s.catch(1),s.next=15,Object(nn.c)((o=s.t0,{type:De,payload:o}));case 15:case"end":return s.stop()}var o}),Nn,null,[[1,11]])}function qn(e){var t,n,r;return Ne.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.payload,n=t.user,r=t.additionalData,c.next=4,Sn(n,r);case 4:case"end":return c.stop()}}),Cn)}function Dn(){return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(nn.d)(He,Hn);case 2:case"end":return e.stop()}}),kn)}function Mn(){return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(nn.d)(qe,qn);case 2:case"end":return e.stop()}}),En)}function zn(){return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(nn.a)([Object(nn.b)(Un),Object(nn.b)(Ln),Object(nn.b)(Rn),Object(nn.b)(Gn),Object(nn.b)(Dn),Object(nn.b)(Mn)]);case 2:case"end":return e.stop()}}),In)}var Bn=Ne.a.mark(Xn),Wn=Ne.a.mark(Zn),Vn=Ne.a.mark(Kn);function Xn(){return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(nn.c)({type:X});case 2:case"end":return e.stop()}}),Bn)}function Zn(){return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(nn.d)(Fe,Xn);case 2:case"end":return e.stop()}}),Wn)}function Kn(){return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(nn.a)([Object(nn.b)(Zn)]);case 2:case"end":return e.stop()}}),Vn)}var Jn=Ne.a.mark(Qn);function Qn(){return Ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(nn.a)([Object(nn.b)(mn),Object(nn.b)(zn),Object(nn.b)(Kn)]);case 2:case"end":return e.stop()}}),Jn)}var $n=Object(Gt.a)(),Yn=[$n];var er=Object(Ft.e)(tn,Ft.a.apply(void 0,Yn));$n.run(Qn);var tr=Object(Ht.b)(er);s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(g.a,{store:er,children:Object(r.jsx)(o.a,{children:Object(r.jsx)(l.a,{persistor:tr,children:Object(r.jsx)(Rt,{})})})})}),document.getElementById("root"))},27:function(e,t,n){e.exports={header:"header_header__3wy06",logocontainer:"header_logocontainer__341aa",options:"header_options__1Cz2-",option:"header_option__VRgOl"}},31:function(e,t,n){e.exports={menuitem:"menu-item_menuitem__RXUg2",backgroundImage:"menu-item_backgroundImage__1odnA",content:"menu-item_content__tHwva",large:"menu-item_large__3Uk2h",title:"menu-item_title__3BlCW",subtitle:"menu-item_subtitle__1cKEP"}},34:function(e,t,n){e.exports={collectionItem:"collection-item_collectionItem__3MGBR",image:"collection-item_image__Yhq3X",collectionFooter:"collection-item_collectionFooter__u5XZ2",name:"collection-item_name__2N8ZM",price:"collection-item_price__tlZP1"}},42:function(e,t,n){e.exports={collectionPreview:"collection-preview_collectionPreview__A4AAk",title:"collection-preview_title__1g1Ak",preview:"collection-preview_preview__3w-SW"}},43:function(e,t,n){e.exports={signin:"signin_signin__1gRcX",title:"signin_title__3ors9",buttons:"signin_buttons___Bw_3"}},44:function(e,t,n){e.exports={"sign-up":"signup_sign-up__1bW_B",title:"signup_title__1fapX"}},45:function(e,t,n){e.exports={"cart-icon":"cart-icon_cart-icon__2VC8n","shopping-icon":"cart-icon_shopping-icon__3tQzo","item-count":"cart-icon_item-count__2ANZn"}},46:function(e,t,n){e.exports={"cart-dropdown":"cart-dropdown_cart-dropdown__23eA8","empty-message":"cart-dropdown_empty-message__2BmQU","cart-items":"cart-dropdown_cart-items__vqk-7"}},66:function(e,t,n){e.exports={homepage:"homepage_homepage__jrl1c"}},67:function(e,t,n){e.exports={directorymenu:"directory_directorymenu__2FA7R"}},75:function(e,t,n){e.exports={"sign-in-and-sign-up":"sign-in-and-sign-up_sign-in-and-sign-up__2dpAl"}},85:function(e,t,n){},86:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[127,1,2]]]);
//# sourceMappingURL=main.0db6a445.chunk.js.map
"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[219],{4219:function(e,n,t){t.r(n),t.d(n,{default:function(){return I}});var s=t(2791),r=t(4735),a=t(4165),c=t(5861),i=t(6382),o=null,u={"messages-received":[],"status-changed":[]},l=function(){v("pending"),setTimeout(g,3e3)},m=function(e){var n=JSON.parse(e.data);u["messages-received"].forEach((function(e){return e(n)}))},f=function(){v("ready")},h=function(){v("error"),console.error("Some error occurred. Please refresh the page.")},d=function(){var e,n,t,s;null===(e=o)||void 0===e||e.removeEventListener("close",l),null===(n=o)||void 0===n||n.removeEventListener("message",m),null===(t=o)||void 0===t||t.removeEventListener("open",f),null===(s=o)||void 0===s||s.removeEventListener("error",h)},v=function(e){u["status-changed"].forEach((function(n){return n(e)}))};function g(){var e;d(),null===(e=o)||void 0===e||e.close(),o=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"),v("pending"),o.addEventListener("close",l),o.addEventListener("message",m),o.addEventListener("open",f),o.addEventListener("error",h)}var _=function(){g()},p=function(){var e;u["messages-received"]=[],u["status-changed"]=[],d(),null===(e=o)||void 0===e||e.close()},x=function(e,n){return u[e].push(n),function(){u[e]=u[e].filter((function(e){return e!==n}))}},j=function(e,n){u[e]=u[e].filter((function(e){return e!==n}))},N=function(e){var n;null===(n=o)||void 0===n||n.send(e)},b=t(3358),E=null,w=function(e){return null===E&&(E=function(n){e((0,b.Q3)(n))}),E},Z=null,k=function(e){return null===Z&&(Z=function(n){e((0,b.Th)(n))}),Z},y=(0,i.hg)("chat/startMessagesListening",function(){var e=(0,c.Z)((0,a.Z)().mark((function e(n,t){var s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=t.dispatch,_(),x("messages-received",w(s)),x("status-changed",k(s));case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),L=(0,i.hg)("chat/stopMessagesListening",function(){var e=(0,c.Z)((0,a.Z)().mark((function e(n,t){var s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=t.dispatch,j("messages-received",w(s)),j("status-changed",k(s)),p();case 4:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),S=(0,i.hg)("chat/sendMessage",function(){var e=(0,c.Z)((0,a.Z)().mark((function e(n,t){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.dispatch,N(n);case 2:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()),C=function(e){return e.chat.messages},T=function(e){return e.chat.status},H=t(1271),M=t(2506),F=t(184),J=(0,s.memo)((function(){var e=(0,r.C)(T),n=(0,r.T)();return(0,F.jsx)(M.J9,{initialValues:{chat_message_form__text:""},validate:H.Ei,onSubmit:function(e,t){var s=t.resetForm,r=t.setSubmitting;e.chat_message_form__text&&setTimeout((function(){n(S(e.chat_message_form__text)),s({}),r(!1)}),400)},children:function(n){n.resetForm;var t=n.isSubmitting,s=n.handleChange;return(0,F.jsxs)(M.l0,{className:"chat_message_form__inner",children:[(0,F.jsx)(M.gN,{name:"chat_message_form__text",type:"text",onChange:s,placeholder:"Enter your message...",className:"chat-message-form__textarea"}),(0,F.jsx)(M.Bc,{name:"chat_message_form__text",component:"div",className:"_error"}),(0,F.jsx)("button",{type:"submit",disabled:"ready"!==e||t,className:"chat-message-form__btn btn _hover",children:"Send"})]})}})})),P=t(885),V=t(7818),A=(0,s.memo)((function(e){var n=e.message,t=n.photo,s=n.userName,r=n.message;return(0,F.jsxs)("div",{className:"chat-message__container",children:[(0,F.jsx)(V.Z,{avatar:t}),(0,F.jsxs)("div",{className:"chat-message__message__inner",children:[(0,F.jsx)("div",{className:"chat-message__user-name",children:s}),(0,F.jsx)("div",{className:"chat-message__message-text",children:r})]})]})})),B=(0,s.memo)((function(){var e=(0,r.C)(C),n=(0,s.useRef)(null),t=(0,s.useState)(!0),a=(0,P.Z)(t,2),c=a[0],i=a[1];return(0,s.useEffect)((function(){if(c){setTimeout((function(){var e;return null===(e=n.current)||void 0===e?void 0:e.scrollIntoView({block:"end",behavior:"smooth"})}),300)}}),[e,c]),(0,F.jsxs)("div",{className:"chat-messages-screen__container",onScroll:function(e){var n=e.currentTarget;Math.abs(n.scrollHeight-n.scrollTop-n.clientHeight)<300?!c&&i(!0):c&&i(!1)},children:[e.map((function(e,n){return(0,F.jsx)(A,{message:e},n)})),(0,F.jsx)("div",{ref:n})]})})),I=(0,t(2312).h)((function(){var e=(0,r.C)(T),n=(0,r.T)();return(0,s.useEffect)((function(){return n(y()),function(){n(L())}}),[]),(0,F.jsxs)("main",{className:"chat__container",children:[(0,F.jsx)("h2",{className:"main-page__h2",children:"CHAT"}),"error"===e&&(0,F.jsx)("div",{children:"Some error occured. Please refresh the page."}),(0,F.jsxs)("div",{className:"chat__inner",children:[(0,F.jsx)(B,{}),(0,F.jsx)(J,{})]})]})}))}}]);
//# sourceMappingURL=219.9361f324.chunk.js.map
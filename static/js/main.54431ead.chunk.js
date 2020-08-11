(this.webpackJsonphangman=this.webpackJsonphangman||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),l=n.n(c),o=(n(12),n(4)),i=n(2),s=(n(13),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Hangman"),r.a.createElement("p",null,"Find the hidden word - Enter a letter"))}),u=function(e){var t=e.wrongLetters.length;return r.a.createElement("svg",{height:"250",width:"200",className:"figure-container"},r.a.createElement("line",{x1:"60",y1:"20",x2:"140",y2:"20"}),r.a.createElement("line",{x1:"140",y1:"20",x2:"140",y2:"50"}),r.a.createElement("line",{x1:"60",y1:"20",x2:"60",y2:"230"}),r.a.createElement("line",{x1:"20",y1:"230",x2:"100",y2:"230"}),t>0&&r.a.createElement("circle",{cx:"140",cy:"70",r:"20",className:"figure-part"}),t>1&&r.a.createElement("line",{x1:"140",y1:"90",x2:"140",y2:"150",className:"figure-part"}),t>2&&r.a.createElement("line",{x1:"140",y1:"120",x2:"120",y2:"100",className:"figure-part"}),t>3&&r.a.createElement("line",{x1:"140",y1:"120",x2:"160",y2:"100",className:"figure-part"}),t>4&&r.a.createElement("line",{x1:"140",y1:"150",x2:"120",y2:"180",className:"figure-part"}),t>5&&r.a.createElement("line",{x1:"140",y1:"150",x2:"160",y2:"180",className:"figure-part"}))},m=function(e){var t=e.wrongLetters;return r.a.createElement("div",{className:"wrong-letters-container"},r.a.createElement("div",null,t.length>0&&r.a.createElement("p",null,"Wrong"),t.map((function(e,t){return r.a.createElement("span",{key:t},"".concat(e,", "))}))))},d=function(e){var t=e.selectedWord,n=e.correctLetters;return r.a.createElement("div",{className:"word"},t.split("").map((function(e,t){return r.a.createElement("span",{className:"letter",key:t},n.includes(e)?e:"")})))},f=function(e){var t=e.showNotification;return r.a.createElement("div",{className:"notification-container ".concat(t?"show":"")},r.a.createElement("p",null,"You have already entered this letter"))},E=function(e){e(!0),setTimeout((function(){e(!1)}),2e3)},y=function(e,t,n){var a="win";return n.split("").forEach((function(t){e.includes(t)||(a="")})),6===t.length&&(a="lose"),a},g=function(e){var t=e.correctLetters,n=e.wrongLetters,c=e.selectedWord,l=e.setPlayable,o=e.playAgain,i="",s="",u=!0;return"win"===y(t,n,c)?(i="Congratulations! You won!",u=!1):"lose"===y(t,n,c)&&(i="Unfortunately you lost.",s="...the word was: ".concat(c),u=!1),Object(a.useEffect)((function(){return l(u)})),r.a.createElement("div",{className:"popup-container",style:""!==i?{display:"flex"}:{}},r.a.createElement("div",{className:"popup"},r.a.createElement("h2",null,i),r.a.createElement("h3",null,s),r.a.createElement("button",{onClick:o},"Play Again")))},p=["rich","sign","student","hardware","museum","freedom","language","magnitude","physical","unfortunate"],h=p[Math.floor(Math.random()*p.length)];var w=function(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)([]),y=Object(i.a)(l,2),w=y[0],v=y[1],x=Object(a.useState)([]),b=Object(i.a)(x,2),N=b[0],L=b[1],j=Object(a.useState)(!1),O=Object(i.a)(j,2),k=O[0],M=O[1];return Object(a.useEffect)((function(){var e=function(e){var t=e.key,a=e.keyCode;if(n&&a>=65&&a<=90){var r=t.toLowerCase();h.includes(r)?w.includes(r)?E(M):v((function(e){return[].concat(Object(o.a)(e),[r])})):N.includes(r)?E(M):L((function(e){return[].concat(Object(o.a)(e),[r])}))}};return window.addEventListener("keydown",e),function(){return window.removeEventListener("keydown",e)}}),[w,N,n]),r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement("div",{className:"game-container"},r.a.createElement(u,{wrongLetters:N}),r.a.createElement(m,{wrongLetters:N}),r.a.createElement(d,{selectedWord:h,correctLetters:w})),r.a.createElement(g,{correctLetters:w,wrongLetters:N,selectedWord:h,setPlayable:c,playAgain:function(){c(!0),v([]),L([]);var e=Math.floor(Math.random()*p.length);h=p[e]}}),r.a.createElement(f,{showNotification:k}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.54431ead.chunk.js.map
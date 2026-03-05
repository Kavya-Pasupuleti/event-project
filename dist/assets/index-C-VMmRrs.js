(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const y of l)if(y.type==="childList")for(const L of y.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&a(L)}).observe(document,{childList:!0,subtree:!0});function o(l){const y={};return l.integrity&&(y.integrity=l.integrity),l.referrerPolicy&&(y.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?y.credentials="include":l.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function a(l){if(l.ep)return;l.ep=!0;const y=o(l);fetch(l.href,y)}})();const K=[{id:1,title:"Semantic Navigation with Dropdown",html_question:`Create a semantic <nav> with:
- Logo div
- 3 menu items
- One dropdown submenu (nested <ul>)
- Proper class names`,html_solution:'<nav class="navbar"><div class="logo"></div><ul><li><a href="#"></a></li><li class="dropdown"><a href="#"></a><ul><li><a href="#"></a></li></ul></li><li><a href="#"></a></li></ul></nav>',python_question:"Write a function that checks if a number is prime.",python_solution:"is_prime()",sql_question:"Select top 5 highest salary employees.",sql_solution:"ORDER BY salary DESC LIMIT 5",logic_question:`
Q1. Three boxes are labeled: Apples, Oranges, Apples & Oranges.
All labels are wrong. You can pick only one fruit from one box.
A) Apples
B) Oranges
C) Apples & Oranges
D) Any box

Q2. Three switches control three bulbs in another room.
You may enter the room only once.
A) Turn all ON
B) Turn one ON, wait, turn OFF, turn another ON, then check heat
C) Random guess
D) Turn all OFF
`,logic_solution:["C","B"]},{id:2,title:"Validated Registration Form",html_question:`Create a form with:
- Username (required)
- Email (type=email)
- Password (minlength 8)
- Submit button
- Proper label association`,html_solution:'<form><label for="u"></label><input id="u" required><label for="e"></label><input type="email" id="e"><label for="p"></label><input type="password" id="p" minlength="8"><button type="submit"></button></form>',python_question:"How to write a recursive factorial function of a number n.",python_solution:"factorial(n)",sql_question:"Join users and orders tables.",sql_solution:"JOIN orders ON users.id = orders.user_id",logic_question:`
Q1. After 100 passes toggling lockers, which remain open?
A) Prime numbers
B) Even numbers
C) Perfect squares
D) Multiples of 10

Q2. Find missing number:
2 6 7
4 8 12
6 ? 17
A) 9
B) 10
C) 11
D) 12
`,logic_solution:["C","B"]},{id:3,title:"Semantic Layout Structure",html_question:`Create layout using:
<header>, <main>, <section>, <aside>, <footer>`,html_solution:"<div><header></header><main><section></section><aside></aside></main><footer></footer></div>",python_question:"How to Reverse a string in python without slicing.",python_solution:"reversed()",sql_question:"Group total sales by customer_id.",sql_solution:"GROUP BY customer_id",logic_question:`
Q1. Bridge crossing 1,2,7,10 minutes. Minimum time?
A) 19
B) 18
C) 17
D) 16

Q2. 9 coins, one heavier. Minimum weighings?
A) 1
B) 2
C) 3
D) 4
`,logic_solution:["C","B"]},{id:4,title:"Table Builder Advanced",html_question:"Create a table with header row and 3 data rows.",html_solution:"<table><tr><th></th></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr></table>",python_question:"How to Ccheck if a given string is palindrome or not in python.",python_solution:"palindrome",sql_question:"Delete users where age < 18. in the users table",sql_solution:"DELETE FROM users WHERE age < 18",logic_question:`
Q1. One guard lies, one tells truth. Best strategy?
A) Ask which door is correct
B) Ask both guards
C) Ask what the other guard would say, choose opposite
D) Random choice

Q2. Father 4x son's age. In 20 years twice. Son’s age?
A) 8
B) 10
C) 12
D) 15
`,logic_solution:["C","B"]},{id:5,title:"Image Card Component",html_question:"Create card with <img>, <h3>, <p>, button.",html_solution:"<div><img><h3></h3><p></p><button></button></div>",python_question:"Find largest number in list [1,2,3,4,5].",python_solution:"max(1,2,3,4,5)",sql_question:"Select distinct city names from customers table.",sql_solution:"SELECT DISTINCT city FROM customers",logic_question:`
Q1. Seating puzzle middle person?
A) A
B) B
C) C
D) D

Q2. Two ropes burn unevenly. Measure 45 min?
A) Burn one rope fully
B) Burn both one end
C) Burn one both ends & other one end
D) Cut rope
`,logic_solution:["A","C"]},{id:6,title:"Video Section",html_question:"Create section with video and source.",html_solution:"<section><video><source></video></section>",python_question:"Create dictionary of first 5 natural numbers.",python_solution:"{1:1,2:2,3:3,4:4,5:5}",sql_question:"Update salary to 50000 where id = 2.",sql_solution:"UPDATE employees SET salary = 50000 WHERE id = 2",logic_question:`
Q1. 2^5 equals?
A) 16
B) 32
C) 64
D) 128

Q2. Pattern: 5,10,20,40,?
A) 60
B) 70
C) 80
D) 90
`,logic_solution:["B","C"]},{id:7,title:"Ordered List Page",html_question:"Create ordered list with 5 items.",html_solution:"<ol><li></li><li></li><li></li><li></li><li></li></ol>",python_question:"Convert string 'Hello' to integer safely.",python_solution:"int(Hello)",sql_question:"How to Count total orders.",sql_solution:"COUNT(*)",logic_question:`
Q1. 7 factorial?
A) 720
B) 5040
C) 40320
D) 840

Q2. 3 machines make 90 items in 6 hrs. Per hour?
A) 10
B) 15
C) 18
D) 20
`,logic_solution:["B","B"]},{id:8,title:"Form Validation Advanced",html_question:"Create form with required validation and pattern attribute.",html_solution:'<form><input required pattern=".{5,}"><button type="submit"></button></form>',python_question:"Check if a number 'n' is even.",python_solution:"n% 2 == 0",sql_question:"Select names starting with 'A'.",sql_solution:"LIKE 'A%'",logic_question:`
Q1. Perfect squares after 100 lockers?
A) Prime
B) Even
C) Perfect squares
D) Multiples of 10

Q2. Missing sequence: 3,9,27,81,?
A) 162
B) 200
C) 243
D) 300
`,logic_solution:["C","C"]}];var re={};(function c(n,o,a,l){var y=!!(n.Worker&&n.Blob&&n.Promise&&n.OffscreenCanvas&&n.OffscreenCanvasRenderingContext2D&&n.HTMLCanvasElement&&n.HTMLCanvasElement.prototype.transferControlToOffscreen&&n.URL&&n.URL.createObjectURL),L=typeof Path2D=="function"&&typeof DOMMatrix=="function",S=(function(){if(!n.OffscreenCanvas)return!1;try{var t=new OffscreenCanvas(1,1),e=t.getContext("2d");e.fillRect(0,0,1,1);var r=t.transferToImageBitmap();e.createPattern(r,"no-repeat")}catch{return!1}return!0})();function f(){}function w(t){var e=o.exports.Promise,r=e!==void 0?e:n.Promise;return typeof r=="function"?new r(t):(t(f,f),null)}var g=(function(t,e){return{transform:function(r){if(t)return r;if(e.has(r))return e.get(r);var i=new OffscreenCanvas(r.width,r.height),d=i.getContext("2d");return d.drawImage(r,0,0),e.set(r,i),i},clear:function(){e.clear()}}})(S,new Map),N=(function(){var t=Math.floor(16.666666666666668),e,r,i={},d=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(u){var m=Math.random();return i[m]=requestAnimationFrame(function s(h){d===h||d+t-1<h?(d=h,delete i[m],u()):i[m]=requestAnimationFrame(s)}),m},r=function(u){i[u]&&cancelAnimationFrame(i[u])}):(e=function(u){return setTimeout(u,t)},r=function(u){return clearTimeout(u)}),{frame:e,cancel:r}})(),H=(function(){var t,e,r={};function i(d){function u(m,s){d.postMessage({options:m||{},callback:s})}d.init=function(s){var h=s.transferControlToOffscreen();d.postMessage({canvas:h},[h])},d.fire=function(s,h,v){if(e)return u(s,null),e;var E=Math.random().toString(36).slice(2);return e=w(function(b){function M(B){B.data.callback===E&&(delete r[E],d.removeEventListener("message",M),e=null,g.clear(),v(),b())}d.addEventListener("message",M),u(s,E),r[E]=M.bind(null,{data:{callback:E}})}),e},d.reset=function(){d.postMessage({reset:!0});for(var s in r)r[s](),delete r[s]}}return function(){if(t)return t;if(!a&&y){var d=["var CONFETTI, SIZE = {}, module = {};","("+c.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([d])))}catch(u){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",u),null}i(t)}return t}})(),Ee={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function Me(t,e){return e?e(t):t}function Ce(t){return t!=null}function C(t,e,r){return Me(t&&Ce(t[e])?t[e]:Ee[e],r)}function Be(t){return t<0?0:Math.floor(t)}function Ie(t,e){return Math.floor(Math.random()*(e-t))+t}function Q(t){return parseInt(t,16)}function Le(t){return t.map(Te)}function Te(t){var e=String(t).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:Q(e.substring(0,2)),g:Q(e.substring(2,4)),b:Q(e.substring(4,6))}}function qe(t){var e=C(t,"origin",Object);return e.x=C(e,"x",Number),e.y=C(e,"y",Number),e}function _e(t){t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight}function ke(t){var e=t.getBoundingClientRect();t.width=e.width,t.height=e.height}function Ae(t){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=t,e}function Se(t,e,r,i,d,u,m,s,h){t.save(),t.translate(e,r),t.rotate(u),t.scale(i,d),t.arc(0,0,1,m,s,h),t.restore()}function Pe(t){var e=t.angle*(Math.PI/180),r=t.spread*(Math.PI/180);return{x:t.x,y:t.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:t.startVelocity*.5+Math.random()*t.startVelocity,angle2D:-e+(.5*r-Math.random()*r),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:t.color,shape:t.shape,tick:0,totalTicks:t.ticks,decay:t.decay,drift:t.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:t.gravity*3,ovalScalar:.6,scalar:t.scalar,flat:t.flat}}function xe(t,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var r=e.tick++/e.totalTicks,i=e.x+e.random*e.tiltCos,d=e.y+e.random*e.tiltSin,u=e.wobbleX+e.random*e.tiltCos,m=e.wobbleY+e.random*e.tiltSin;if(t.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-r)+")",t.beginPath(),L&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))t.fill(Oe(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(u-i)*.1,Math.abs(m-d)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var s=Math.PI/10*e.wobble,h=Math.abs(u-i)*.1,v=Math.abs(m-d)*.1,E=e.shape.bitmap.width*e.scalar,b=e.shape.bitmap.height*e.scalar,M=new DOMMatrix([Math.cos(s)*h,Math.sin(s)*h,-Math.sin(s)*v,Math.cos(s)*v,e.x,e.y]);M.multiplySelf(new DOMMatrix(e.shape.matrix));var B=t.createPattern(g.transform(e.shape.bitmap),"no-repeat");B.setTransform(M),t.globalAlpha=1-r,t.fillStyle=B,t.fillRect(e.x-E/2,e.y-b/2,E,b),t.globalAlpha=1}else if(e.shape==="circle")t.ellipse?t.ellipse(e.x,e.y,Math.abs(u-i)*e.ovalScalar,Math.abs(m-d)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):Se(t,e.x,e.y,Math.abs(u-i)*e.ovalScalar,Math.abs(m-d)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var p=Math.PI/2*3,T=4*e.scalar,_=8*e.scalar,k=e.x,P=e.y,F=5,A=Math.PI/F;F--;)k=e.x+Math.cos(p)*_,P=e.y+Math.sin(p)*_,t.lineTo(k,P),p+=A,k=e.x+Math.cos(p)*T,P=e.y+Math.sin(p)*T,t.lineTo(k,P),p+=A;else t.moveTo(Math.floor(e.x),Math.floor(e.y)),t.lineTo(Math.floor(e.wobbleX),Math.floor(d)),t.lineTo(Math.floor(u),Math.floor(m)),t.lineTo(Math.floor(i),Math.floor(e.wobbleY));return t.closePath(),t.fill(),e.tick<e.totalTicks}function Fe(t,e,r,i,d){var u=e.slice(),m=t.getContext("2d"),s,h,v=w(function(E){function b(){s=h=null,m.clearRect(0,0,i.width,i.height),g.clear(),d(),E()}function M(){a&&!(i.width===l.width&&i.height===l.height)&&(i.width=t.width=l.width,i.height=t.height=l.height),!i.width&&!i.height&&(r(t),i.width=t.width,i.height=t.height),m.clearRect(0,0,i.width,i.height),u=u.filter(function(B){return xe(m,B)}),u.length?s=N.frame(M):b()}s=N.frame(M),h=b});return{addFettis:function(E){return u=u.concat(E),v},canvas:t,promise:v,reset:function(){s&&N.cancel(s),h&&h()}}}function ie(t,e){var r=!t,i=!!C(e||{},"resize"),d=!1,u=C(e,"disableForReducedMotion",Boolean),m=y&&!!C(e||{},"useWorker"),s=m?H():null,h=r?_e:ke,v=t&&s?!!t.__confetti_initialized:!1,E=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,b;function M(p,T,_){for(var k=C(p,"particleCount",Be),P=C(p,"angle",Number),F=C(p,"spread",Number),A=C(p,"startVelocity",Number),Ne=C(p,"decay",Number),$e=C(p,"gravity",Number),je=C(p,"drift",Number),ce=C(p,"colors",Le),Ue=C(p,"ticks",Number),de=C(p,"shapes"),He=C(p,"scalar"),We=!!C(p,"flat"),ue=qe(p),me=k,J=[],ze=t.width*ue.x,Qe=t.height*ue.y;me--;)J.push(Pe({x:ze,y:Qe,angle:P,spread:F,startVelocity:A,color:ce[me%ce.length],shape:de[Ie(0,de.length)],ticks:Ue,decay:Ne,gravity:$e,drift:je,scalar:He,flat:We}));return b?b.addFettis(J):(b=Fe(t,J,h,T,_),b.promise)}function B(p){var T=u||C(p,"disableForReducedMotion",Boolean),_=C(p,"zIndex",Number);if(T&&E)return w(function(A){A()});r&&b?t=b.canvas:r&&!t&&(t=Ae(_),document.body.appendChild(t)),i&&!v&&h(t);var k={width:t.width,height:t.height};s&&!v&&s.init(t),v=!0,s&&(t.__confetti_initialized=!0);function P(){if(s){var A={getBoundingClientRect:function(){if(!r)return t.getBoundingClientRect()}};h(A),s.postMessage({resize:{width:A.width,height:A.height}});return}k.width=k.height=null}function F(){b=null,i&&(d=!1,n.removeEventListener("resize",P)),r&&t&&(document.body.contains(t)&&document.body.removeChild(t),t=null,v=!1)}return i&&!d&&(d=!0,n.addEventListener("resize",P,!1)),s?s.fire(p,k,F):M(p,k,F)}return B.reset=function(){s&&s.reset(),b&&b.reset()},B}var V;function le(){return V||(V=ie(null,{useWorker:!0,resize:!0})),V}function Oe(t,e,r,i,d,u,m){var s=new Path2D(t),h=new Path2D;h.addPath(s,new DOMMatrix(e));var v=new Path2D;return v.addPath(h,new DOMMatrix([Math.cos(m)*d,Math.sin(m)*d,-Math.sin(m)*u,Math.cos(m)*u,r,i])),v}function Re(t){if(!L)throw new Error("path confetti are not supported in this browser");var e,r;typeof t=="string"?e=t:(e=t.path,r=t.matrix);var i=new Path2D(e),d=document.createElement("canvas"),u=d.getContext("2d");if(!r){for(var m=1e3,s=m,h=m,v=0,E=0,b,M,B=0;B<m;B+=2)for(var p=0;p<m;p+=2)u.isPointInPath(i,B,p,"nonzero")&&(s=Math.min(s,B),h=Math.min(h,p),v=Math.max(v,B),E=Math.max(E,p));b=v-s,M=E-h;var T=10,_=Math.min(T/b,T/M);r=[_,0,0,_,-Math.round(b/2+s)*_,-Math.round(M/2+h)*_]}return{type:"path",path:e,matrix:r}}function De(t){var e,r=1,i="#000000",d='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof t=="string"?e=t:(e=t.text,r="scalar"in t?t.scalar:r,d="fontFamily"in t?t.fontFamily:d,i="color"in t?t.color:i);var u=10*r,m=""+u+"px "+d,s=new OffscreenCanvas(u,u),h=s.getContext("2d");h.font=m;var v=h.measureText(e),E=Math.ceil(v.actualBoundingBoxRight+v.actualBoundingBoxLeft),b=Math.ceil(v.actualBoundingBoxAscent+v.actualBoundingBoxDescent),M=2,B=v.actualBoundingBoxLeft+M,p=v.actualBoundingBoxAscent+M;E+=M+M,b+=M+M,s=new OffscreenCanvas(E,b),h=s.getContext("2d"),h.font=m,h.fillStyle=i,h.fillText(e,B,p);var T=1/r;return{type:"bitmap",bitmap:s.transferToImageBitmap(),matrix:[T,0,0,T,-E*T/2,-b*T/2]}}o.exports=function(){return le().apply(this,arguments)},o.exports.reset=function(){le().reset()},o.exports.create=ie,o.exports.shapeFromPath=Re,o.exports.shapeFromText=De})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),re,!1);const Ve=re.exports;re.exports.create;let j=null,oe=0,R=1,x=0,q=null,$=null,X=null;const ae=document.getElementById("landing-screen"),ee=document.getElementById("auth-screen"),be=document.getElementById("dashboard-screen"),te=document.getElementById("admin-screen"),se=document.getElementById("game-area"),ne=document.getElementById("admin-shortcut-btn"),Je=document.getElementById("auth-title"),he=document.getElementById("auth-action-btn"),W=document.getElementById("toggle-auth-mode"),Y=document.getElementById("auth-toggle-text"),Z=document.getElementById("register-fields"),G=document.getElementById("confirm-pass-field"),Ye=document.getElementById("email"),Ze=document.getElementById("password"),Ge=document.getElementById("confirm-password"),Ke=document.getElementById("name"),fe=document.getElementById("college"),pe=document.getElementById("phone"),we=document.getElementById("user-info"),Xe=document.getElementById("user-email-display"),et=document.getElementById("current-score"),tt=document.getElementById("progress-bar-fill"),nt=document.getElementById("progress-percent"),rt=document.getElementById("notification-container"),ot=document.getElementById("check-answer-btn"),at=document.getElementById("back-to-dash-btn"),U=document.getElementById("html-input"),ge=document.getElementById("html-preview");function st(){lt(),z(),it()}function it(){const c=document.getElementById("landing-screen"),n=["{ }","< />","(?)","[ ]","=>","==","func","def","SELECT","print"];for(let o=0;o<15;o++){const a=document.createElement("span");a.className="floating-symbol",a.textContent=n[Math.floor(Math.random()*n.length)],a.style.left=`${Math.random()*100}%`,a.style.animationDelay=`${Math.random()*15}s`,a.style.fontSize=`${Math.random()*1.5+1}rem`,c.appendChild(a)}}function D(c,n="success"){const o=document.createElement("div");o.className=`toast ${n}`,o.innerHTML=`
    <i class="fas ${n==="success"?"fa-check-circle":"fa-exclamation-circle"}"></i>
    <span>${c}</span>
  `,rt.appendChild(o),setTimeout(()=>{o.style.opacity="0",o.style.transform="translateX(100%)",setTimeout(()=>o.remove(),300)},3500)}function O(){[ae,ee,be,te].forEach(c=>c.classList.add("hidden"))}function z(){et.textContent=oe;const c=(R-1)/4*100;tt.style.width=`${c}%`,nt.textContent=`${Math.floor(c)}%`,document.querySelectorAll(".level-card").forEach((n,o)=>{o+1<=R?(n.classList.remove("locked"),n.querySelector(".level-status").textContent="Open!"):(n.classList.add("locked"),n.querySelector(".level-status").textContent="Locked")})}function lt(){document.getElementById("join-game-btn").addEventListener("click",()=>{O(),ee.classList.remove("hidden"),o(!1)}),document.getElementById("admin-login-btn").addEventListener("click",()=>{O(),ee.classList.remove("hidden"),o(!1,!0)}),document.getElementById("logo").addEventListener("click",()=>{O(),ae.classList.remove("hidden")}),document.getElementById("admin-ptr-link").addEventListener("click",a=>{a.preventDefault(),o(!1,!0)});let c=!1,n=!1;function o(a,l=!1){c=a,n=l,Je.textContent=l?"Admin Portal":a?"Join the Sprint":"Welcome Back Racer",he.textContent=a?"Create Account":"Login",Y.textContent=a?"Already have an account?":"No account?",W.textContent=a?"Login here":"Register here",a?(Z.classList.remove("hidden"),G.classList.remove("hidden")):(Z.classList.add("hidden"),G.classList.add("hidden")),l?(Z.classList.add("hidden"),G.classList.add("hidden"),W.classList.add("hidden"),Y.classList.add("hidden")):(W.classList.remove("hidden"),Y.classList.remove("hidden"))}W.addEventListener("click",a=>{a.preventDefault(),o(!c)}),he.addEventListener("click",async a=>{a.preventDefault();const l=Ye.value,y=Ze.value,L=Ke.value,S=fe?fe.value:"",f=pe?pe.value:"";if(c){if(!l||!y||!L||!S||!f)return I("Please fill all fields","error");if(y!==Ge.value)return I("Passwords don't match","error");try{const w=await fetch("https://relay-race-backend-1.onrender.com/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:L,email:l,phone:f,college:S})}),g=await w.json();w.ok?(I("🎉 Registered Successfully! You can now login.","success"),o(!1)):I(g.message||"Registration failed","error")}catch(w){console.error("Registration Error:",w),I("Server error. Please check if backend is running.","error")}}else n&&l==="admin@debug.com"&&y==="admin123"?(O(),te.classList.remove("hidden"),ne.classList.remove("hidden"),I("Access Granted: Admin Control Center Active","success"),ve()):n?I("Invalid Credentials provided","error"):(j={name:L||"Racer",email:l},Xe.textContent=l,O(),be.classList.remove("hidden"),we.classList.remove("hidden"),I(`Welcome ${j.name}! Start the race.`,"success"),z())}),document.querySelectorAll(".level-card").forEach(a=>{a.addEventListener("click",()=>{const l=parseInt(a.dataset.level);l<=R&&ct(l)})}),at.addEventListener("click",()=>{se.style.display="none",document.querySelector(".levels-grid").style.display="grid"}),ot.addEventListener("click",ht),document.getElementById("logout-btn").addEventListener("click",()=>ye()),document.getElementById("admin-logout").addEventListener("click",()=>ye()),ne.addEventListener("click",()=>{O(),te.classList.remove("hidden"),ve()}),U.addEventListener("input",()=>{const a=ge.contentDocument||ge.contentWindow.document;a.open(),a.write(`
      <style>body { font-family: sans-serif; }</style>
      ${U.value}
    `),a.close()})}function ye(){j=null,q=null,R=1,oe=0,$=null,X=null,we.classList.add("hidden"),ne.classList.add("hidden"),O(),ae.classList.remove("hidden"),I("Logged out successfully","success")}function ct(c){if(c<1||c>4){I(`Invalid level ${c}.`,"error");return}try{x=c,c===1&&!$&&($=Date.now(),console.log("⏱️ Timer started at:",new Date($).toLocaleTimeString())),q||(q=K[Math.floor(Math.random()*K.length)]),document.querySelector(".levels-grid").style.display="none",se.style.display="block";const n=document.getElementById("problem-title"),o=document.getElementById("level-badge"),a=document.getElementById("html-interface"),l=document.getElementById("standard-interface"),y=document.getElementById("html-problem-content"),L=document.getElementById("standard-problem-content"),S=document.getElementById("answer-input");if(n.textContent=q.title,o.textContent=`LEVEL ${c} - ${dt(c)}`,S.value="",c===1)a.classList.remove("hidden"),l.classList.add("hidden"),y.textContent=q.html_question,U.value="",U.dispatchEvent(new Event("input"));else{a.classList.add("hidden"),l.classList.remove("hidden");let f="";c===2&&(f=q.python_question),c===3&&(f=q.sql_question),c===4&&(f=q.logic_question),L.textContent=f}}catch(n){console.error("Error in startLevel:",n),I("An unexpected error occurred while starting the level.","error")}}function dt(c){return["HTML","Python","SQL","Logic"][c-1]}function ut(c,n){const o=a=>a.replace(/<!--.*?-->/gs,"").toLowerCase().replace(/\s/g,"");if(Array.isArray(n)){const a=n.join(",");return o(c)===o(a)}return o(c)===o(n)}function I(c,n="success"){let o=document.getElementById("custom-popup");o||(o=document.createElement("div"),o.id="custom-popup",o.innerHTML=`
            <div class="popup-content">
                <i class="popup-icon fas"></i>
                <p class="popup-message"></p>
                <button class="popup-close">Continue</button>
            </div>`,document.body.appendChild(o),o.querySelector(".popup-close").addEventListener("click",()=>{o.classList.remove("visible")}));const a=o.querySelector(".popup-content"),l=o.querySelector(".popup-icon"),y=o.querySelector(".popup-message");a.className=`popup-content ${n}`,l.className=`popup-icon fas ${n==="success"?"fa-check-circle":"fa-times-circle"}`,y.textContent=c,o.classList.add("visible")}function mt(){x===R&&(R=Math.min(R+1,5),oe++,z())}function ht(){let c="",n="";if(x===1?(c=U.value,n=q.html_solution):(c=document.getElementById("answer-input").value,x===2&&(n=q.python_solution),x===3&&(n=q.sql_solution),x===4&&(n=q.logic_solution)),ut(c,n)){if(x<4?I("Congratulations! You have qualified to the next level.","success"):I("🎉 Congratulations on becoming a Relay Racer!","success"),mt(),x===4&&j){X=Date.now();const o=(X-$)/1e3;console.log(`⏱️ Race Finished! Total Time: ${o.toFixed(2)}s`),fetch(`https://relay-race-backend-1.onrender.com/complete/${j.email}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({totalTime:o})}).then(a=>a.json()).then(a=>{D("🎉 Your total time has been recorded!","success")}).catch(a=>{console.error("Failed to save race time:",a),D("⚠️ Time was not saved. Please check server.","error")})}Ve({particleCount:150,spread:80,origin:{y:.6},colors:["#6366f1","#10b981","#fbbf24"]}),setTimeout(()=>{document.getElementById("custom-popup").classList.remove("visible"),se.style.display="none",document.querySelector(".levels-grid").style.display="grid",z()},2500)}else I("Better luck next time. Check your code for bugs!","error")}function ve(){const c=document.getElementById("problems-list"),n=document.getElementById("users-list"),o=document.getElementById("registered-users-list"),a=async()=>{try{const f=await fetch("https://relay-race-backend-1.onrender.com/admin/users",{headers:{"x-admin-token":"admin123"}});if(!f.ok)throw new Error("Failed to list users");const w=await f.json();o.innerHTML=w.length>0?w.map(g=>`
                <tr>
                  <td>${g.name}</td>
                  <td>${g.email}</td>
                  <td>${new Date(g.registeredAt).toLocaleString()}</td>
                </tr>
            `).join(""):'<tr><td colspan="3" style="text-align: center; opacity: 0.5; padding: 2rem;">No registered users yet.</td></tr>'}catch(f){console.error("Error fetching registered users:",f),o.innerHTML='<tr><td colspan="3" style="text-align: center; color: #ef4444;">Failed to load registered users.</td></tr>'}};a();const l=document.getElementById("refresh-registered-btn");l&&l.addEventListener("click",()=>{D("Refreshing registered users...","success"),a()});const y=async()=>{try{const w=await(await fetch("https://relay-race-backend-1.onrender.com/admin/participants")).json();n.innerHTML=w.length>0?w.map(g=>`
                <tr class="${g.winner?"winner-row":""}">
                  <td>${g.name}</td>
                  <td>${g.college}</td>
                  <td>${g.email}</td>
                  <td style="font-weight: 800; color: #fbbf24;">${g.totalTime>0?g.totalTime.toFixed(2)+"s":"In Progress"}</td>
                  <td>${g.winner?'<span style="font-size: 1.5rem;">👑</span>':"-"}</td>
                  <td>
                    ${g.winner?'<span style="color: #10b981; font-weight: bold;">Confirmed</span>':`<button class="win-btn" data-id="${g._id}" style="width: auto; padding: 5px 10px; font-size: 0.7rem; background: #10b981;">🏆 Winner</button>`}
                  </td>
                </tr>
            `).join(""):'<tr><td colspan="6" style="text-align: center; opacity: 0.5; padding: 2rem;">No participants have joined the race yet.</td></tr>',document.querySelectorAll(".win-btn").forEach(g=>{g.addEventListener("click",async()=>{const N=g.dataset.id;try{(await fetch(`https://relay-race-backend-1.onrender.com/admin/mark-winner/${N}`,{method:"PUT"})).ok&&(D("🏆 Participant marked as winner successfully!","success"),y())}catch(H){console.error("Mark winner error:",H),D("Failed to mark winner.","error")}})})}catch(f){console.error("Error fetching participants:",f),n.innerHTML='<tr><td colspan="5" style="text-align: center; color: #ef4444;">Failed to load leaderboard.</td></tr>'}};y();const L=document.getElementById("refresh-leaderboard-btn");L&&L.addEventListener("click",()=>{D("Refreshing leaderboard...","success"),y()}),c.innerHTML=K.map(f=>`
    <tr id="prob-row-${f.id}">
      <td>#${f.id}</td>
      <td>${f.title}</td>
      <td>Multi-Stage</td>
      <td>
        <button style="width: auto; padding: 5px 10px; font-size: 0.8rem; background: var(--primary); color: white; border-radius: 5px;">Edit</button>
        <button class="delete-prob-btn" data-id="${f.id}" style="width: auto; padding: 10px 10px; font-size: 1rem; background: var(--admin); color: white; border-radius: 5px;">🗑️</button>
      </td>
    </tr>
  `).join(""),document.querySelectorAll(".delete-prob-btn").forEach(f=>{f.addEventListener("click",()=>{const w=f.dataset.id,g=document.getElementById(`prob-row-${w}`);g&&(g.remove(),I(`Problem #${w} removed from the relay race!`,"success"))})});const S=document.getElementById("add-problem-btn");S&&S.addEventListener("click",()=>{I("The Problem Editor is a pro feature. For the IT Fest, please edit src/problems.js directly to add new challenges!","error")}),document.querySelectorAll(".tab-btn").forEach(f=>{f.addEventListener("click",()=>{document.querySelectorAll(".tab-btn").forEach(w=>w.classList.remove("active")),document.querySelectorAll(".admin-tab-content").forEach(w=>w.classList.add("hidden")),f.classList.add("active"),document.getElementById(f.dataset.tab).classList.remove("hidden")})}),document.getElementById("save-theme-btn").addEventListener("click",()=>{const f=document.getElementById("theme-primary").value,w=document.getElementById("theme-bg").value,g=document.getElementById("theme-font").value;document.documentElement.style.setProperty("--primary",f),document.documentElement.style.setProperty("--bg",w),document.body.style.fontFamily=g,I("Theme settings applied successfully!","success"),localStorage.setItem("relay_theme",JSON.stringify({primary:f,bg:w,font:g}))})}st();

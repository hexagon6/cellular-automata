(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{2:function(t,e,c){"use strict";c.r(e);var n=c(0);function i(t,e){var c,i,a,o,l=e.key,r=e.value;return{c:function(){c=Object(n.l)("li"),i=Object(n.n)(l),a=Object(n.n)(": "),o=Object(n.n)(r),this.h()},l:function(t){c=Object(n.j)(t,"LI",{class:!0},!1);var e=Object(n.i)(c);i=Object(n.k)(e,l),a=Object(n.k)(e,": "),o=Object(n.k)(e,r),e.forEach(n.p),this.h()},h:function(){c.className="svelte-e73a0l"},m:function(t,e){Object(n.u)(c,t,e),Object(n.d)(i,c),Object(n.d)(a,c),Object(n.d)(o,c)},p:function(t,e){t.els&&l!==(l=e.key)&&(i.data=l),t.els&&r!==(r=e.value)&&(o.data=r)},u:function(){Object(n.p)(c)},d:n.v}}function a(t){var e;if(Object(n.t)(this,t),this._state=Object(n.e)({els:[]},t.data),this._recompute({elements:1},this._state),document.getElementById("svelte-e73a0l-style")||((e=Object(n.l)("style")).id="svelte-e73a0l-style",e.textContent="ul.svelte-e73a0l{list-style:none}li.svelte-e73a0l{float:left;padding-right:2em}",Object(n.d)(e,document.head)),this._fragment=function(t,e){for(var c,a=e.els,o=[],l=0;l<a.length;l+=1)o[l]=i(0,Object(n.e)(Object(n.e)({},e),{each_value:a,key_value:a[l],key_value_index:l,key:a[l][0],value:a[l][1]}));return{c:function(){c=Object(n.l)("ul");for(var t=0;t<o.length;t+=1)o[t].c();this.h()},l:function(t){c=Object(n.j)(t,"UL",{class:!0},!1);for(var e=Object(n.i)(c),i=0;i<o.length;i+=1)o[i].l(e);e.forEach(n.p),this.h()},h:function(){c.className="svelte-e73a0l"},m:function(t,e){Object(n.u)(c,t,e);for(var i=0;i<o.length;i+=1)o[i].m(c,null)},p:function(t,e){var a=e.els;if(t.els){for(var l=0;l<a.length;l+=1){var r=Object(n.e)(Object(n.e)({},e),{each_value:a,key_value:a[l],key_value_index:l,key:a[l][0],value:a[l][1]});o[l]?o[l].p(t,r):(o[l]=i(0,r),o[l].c(),o[l].m(c,null))}for(;l<o.length;l+=1)o[l].u(),o[l].d();o.length=a.length}},u:function(){Object(n.p)(c);for(var t=0;t<o.length;t+=1)o[t].u()},d:function(){Object(n.o)(o)}}}(0,this._state),t.target){var c=Object(n.i)(t.target);t.hydrate?this._fragment.l(c):this._fragment.c(),c.forEach(n.p),this._mount(t.target,t.anchor)}}Object(n.e)(a.prototype,n.x),a.prototype._recompute=function(t,e){t.elements&&this._differs(e.els,e.els=function({elements:t}){return Object.entries(t)}(e))&&(t.els=!0)};var o=a;const l=t=>t.map(t=>t.join(",")).join(" "),r=t=>t.split(" ").map(t=>t.split(",").map(Number));var s={field:(t,e,c,n)=>(t=>Array.from({length:t}).map((t,e)=>e))(t*e).map(((t,e,c,n)=>i=>({x:i%t,y:Math.floor(i/e),v:n(i,c)}))(t,e,c,n)),scale:(t=1)=>l(r("60,26 45,52 15,52 0,26 15,0 45,0").map(e=>e.map(e=>t*e))),serialize:l,deserialize:r,hexagonPoints:"60,26 45,52 15,52 0,26 15,0 45,0",bigHexagonPoints:"300,130 225,260 75,260 0,130 75,0 225,0"};var f={field:(t,e,c,n)=>Array.from({length:t*e}).map((e,i)=>({x:i%t,y:Math.floor(i/t),v:n(i,c)}))};const b=["hexagonal","rectangular"],j=[["#ff6738","#18c8ff","#efaf03","#60f370"],["#ffffff","#efefef"]];var O={name:"Game of Life",algorithm:{name:"GoL"},field:[],fieldtype:b[0],fieldtypes:b,statecolors:j[0],stati:j};const{scale:h}=s;function u(t,e){return e<t.length?t[e]:t[0]}var d={click:function({x:t,y:e}){console.log(t,e)}};function y(t,e){var c,i,a,o,l,r;return{c:function(){c=Object(n.m)("g"),i=Object(n.m)("use"),this.h()},l:function(t){c=Object(n.j)(t,"g",{transform:!0},!0);var e=Object(n.i)(c);i=Object(n.j)(e,"use",{x:!0,y:!0,href:!0,fill:!0,stroke:!0,"stroke-opacity":!0},!0),Object(n.i)(i).forEach(n.p),e.forEach(n.p),this.h()},h:function(){i._svelte={component:t,ctx:e},Object(n.c)(i,"click",x),Object(n.z)(i,"x",a=e.f.x),Object(n.z)(i,"y",o=e.f.x%2==1?e.f.y+e.cy:e.f.y),Object(n.z)(i,"href","#hexagon"),Object(n.z)(i,"fill",l=u(e.statecolors,e.f.v)),Object(n.z)(i,"stroke","#efefef"),Object(n.z)(i,"stroke-opacity","0.2"),Object(n.z)(c,"transform",r="matrix(1,0,0,1,"+1*e.f.x*e.cx+","+2*e.f.y*e.cy+")")},m:function(t,e){Object(n.u)(c,t,e),Object(n.d)(i,c)},p:function(t,e){i._svelte.ctx=e,t.field&&a!==(a=e.f.x)&&Object(n.z)(i,"x",a),(t.field||t.cy)&&o!==(o=e.f.x%2==1?e.f.y+e.cy:e.f.y)&&Object(n.z)(i,"y",o),(t.statecolors||t.field)&&l!==(l=u(e.statecolors,e.f.v))&&Object(n.z)(i,"fill",l),(t.field||t.cx||t.cy)&&r!==(r="matrix(1,0,0,1,"+1*e.f.x*e.cx+","+2*e.f.y*e.cy+")")&&Object(n.z)(c,"transform",r)},u:function(){Object(n.p)(c)},d:function(){Object(n.y)(i,"click",x)}}}function p(t,e){for(var c,i,a,o,l,r,s,f,b,j=e.field,O=[],h=0;h<j.length;h+=1)O[h]=y(t,Object(n.e)(Object(n.e)({},e),{each_value:j,f:j[h],i:h}));return{c:function(){c=Object(n.m)("svg"),i=Object(n.m)("defs"),a=Object(n.m)("polygon"),o=Object(n.m)("g"),l=Object(n.m)("rect");for(var t=0;t<O.length;t+=1)O[t].c();this.h()},l:function(t){c=Object(n.j)(t,"svg",{width:!0,height:!0,class:!0},!0);var e=Object(n.i)(c);i=Object(n.j)(e,"defs",{},!0);var r=Object(n.i)(i);a=Object(n.j)(r,"polygon",{id:!0,points:!0},!0),Object(n.i)(a).forEach(n.p),r.forEach(n.p),o=Object(n.j)(e,"g",{},!0);var s=Object(n.i)(o);l=Object(n.j)(s,"rect",{width:!0,height:!0,fill:!0},!0),Object(n.i)(l).forEach(n.p);for(var f=0;f<O.length;f+=1)O[f].l(s);s.forEach(n.p),e.forEach(n.p),this.h()},h:function(){Object(n.z)(a,"id","hexagon"),Object(n.z)(a,"points",e.hexagon),Object(n.z)(l,"width",r=e.x*e.cx+.5*e.cx),Object(n.z)(l,"height",s=e.y*e.cy*2+1.5*e.cy),Object(n.z)(l,"fill","#efefef"),Object(n.z)(c,"width",f=e.x*e.cx),Object(n.z)(c,"height",b=(e.y+1)*e.cy*2),Object(n.z)(c,"class","svelte-16r8qhl")},m:function(t,e){Object(n.u)(c,t,e),Object(n.d)(i,c),Object(n.d)(a,i),Object(n.d)(o,c),Object(n.d)(l,o);for(var r=0;r<O.length;r+=1)O[r].m(o,null)},p:function(e,i){e.hexagon&&Object(n.z)(a,"points",i.hexagon),(e.x||e.cx)&&r!==(r=i.x*i.cx+.5*i.cx)&&Object(n.z)(l,"width",r),(e.y||e.cy)&&s!==(s=i.y*i.cy*2+1.5*i.cy)&&Object(n.z)(l,"height",s);var j=i.field;if(e.field||e.cx||e.cy||e.statecolors){for(var h=0;h<j.length;h+=1){var u=Object(n.e)(Object(n.e)({},i),{each_value:j,f:j[h],i:h});O[h]?O[h].p(e,u):(O[h]=y(t,u),O[h].c(),O[h].m(o,null))}for(;h<O.length;h+=1)O[h].u(),O[h].d();O.length=j.length}(e.x||e.cx)&&f!==(f=i.x*i.cx)&&Object(n.z)(c,"width",f),(e.y||e.cy)&&b!==(b=(i.y+1)*i.cy*2)&&Object(n.z)(c,"height",b)},u:function(){Object(n.p)(c);for(var t=0;t<O.length;t+=1)O[t].u()},d:function(){Object(n.o)(O)}}}function g(t,e){var c,i,a,o;return{c:function(){c=Object(n.m)("use"),this.h()},l:function(t){c=Object(n.j)(t,"use",{x:!0,y:!0,href:!0,fill:!0,stroke:!0,"stroke-opacity":!0},!0),Object(n.i)(c).forEach(n.p),this.h()},h:function(){c._svelte={component:t,ctx:e},Object(n.c)(c,"click",_),Object(n.z)(c,"x",i=e.f.x*e.cx),Object(n.z)(c,"y",a=e.f.y*e.cy),Object(n.z)(c,"href","#rectangle"),Object(n.z)(c,"fill",o=u(e.statecolors,e.f.v)),Object(n.z)(c,"stroke","#efefef"),Object(n.z)(c,"stroke-opacity","0.2")},m:function(t,e){Object(n.u)(c,t,e)},p:function(t,e){c._svelte.ctx=e,(t.field||t.cx)&&i!==(i=e.f.x*e.cx)&&Object(n.z)(c,"x",i),(t.field||t.cy)&&a!==(a=e.f.y*e.cy)&&Object(n.z)(c,"y",a),(t.statecolors||t.field)&&o!==(o=u(e.statecolors,e.f.v))&&Object(n.z)(c,"fill",o)},u:function(){Object(n.p)(c)},d:function(){Object(n.y)(c,"click",_)}}}function m(t,e){for(var c,i,a,o,l,r,s=e.field,f=[],b=0;b<s.length;b+=1)f[b]=g(t,Object(n.e)(Object(n.e)({},e),{each_value_1:s,f:s[b],i:b}));return{c:function(){c=Object(n.m)("svg"),i=Object(n.m)("defs"),a=Object(n.m)("rect"),o=Object(n.m)("g");for(var t=0;t<f.length;t+=1)f[t].c();this.h()},l:function(t){c=Object(n.j)(t,"svg",{width:!0,height:!0,class:!0},!0);var e=Object(n.i)(c);i=Object(n.j)(e,"defs",{},!0);var l=Object(n.i)(i);a=Object(n.j)(l,"rect",{id:!0,width:!0,height:!0},!0),Object(n.i)(a).forEach(n.p),l.forEach(n.p),o=Object(n.j)(e,"g",{},!0);for(var r=Object(n.i)(o),s=0;s<f.length;s+=1)f[s].l(r);r.forEach(n.p),e.forEach(n.p),this.h()},h:function(){Object(n.z)(a,"id","rectangle"),Object(n.z)(a,"width",e.cx),Object(n.z)(a,"height",e.cy),Object(n.z)(c,"width",l=e.x*e.cx),Object(n.z)(c,"height",r=e.y*e.cy),Object(n.z)(c,"class","svelte-16r8qhl")},m:function(t,e){Object(n.u)(c,t,e),Object(n.d)(i,c),Object(n.d)(a,i),Object(n.d)(o,c);for(var l=0;l<f.length;l+=1)f[l].m(o,null)},p:function(e,i){e.cx&&Object(n.z)(a,"width",i.cx),e.cy&&Object(n.z)(a,"height",i.cy);var s=i.field;if(e.field||e.cx||e.cy||e.statecolors){for(var b=0;b<s.length;b+=1){var j=Object(n.e)(Object(n.e)({},i),{each_value_1:s,f:s[b],i:b});f[b]?f[b].p(e,j):(f[b]=g(t,j),f[b].c(),f[b].m(o,null))}for(;b<f.length;b+=1)f[b].u(),f[b].d();f.length=s.length}(e.x||e.cx)&&l!==(l=i.x*i.cx)&&Object(n.z)(c,"width",l),(e.y||e.cy)&&r!==(r=i.y*i.cy)&&Object(n.z)(c,"height",r)},u:function(){Object(n.p)(c);for(var t=0;t<f.length;t+=1)f[t].u()},d:function(){Object(n.o)(f)}}}function v(t,e){var c,i,a,o,l,r,s=e._s;return{c:function(){c=Object(n.l)("li"),i=Object(n.l)("span"),a=Object(n.n)("["),o=Object(n.n)(s),l=Object(n.n)("]"),this.h()},l:function(t){c=Object(n.j)(t,"LI",{class:!0},!1);var e=Object(n.i)(c);i=Object(n.j)(e,"SPAN",{style:!0},!1);var r=Object(n.i)(i);a=Object(n.k)(r,"["),o=Object(n.k)(r,s),l=Object(n.k)(r,"]"),r.forEach(n.p),e.forEach(n.p),this.h()},h:function(){i.style.cssText=r=`color: ${e._s};`,c.className="svelte-16r8qhl"},m:function(t,e){Object(n.u)(c,t,e),Object(n.d)(i,c),Object(n.d)(a,i),Object(n.d)(o,i),Object(n.d)(l,i)},p:function(t,e){t.statecolors&&s!==(s=e._s)&&(o.data=s),t.statecolors&&r!==(r=`color: ${e._s};`)&&(i.style.cssText=r)},u:function(){Object(n.p)(c)},d:n.v}}function x(t){const{component:e,ctx:c}=this._svelte;e.click({x:c.f.x,y:c.f.y})}function _(t){const{component:e,ctx:c}=this._svelte;e.click({x:c.f.x,y:c.f.y})}function k(t){var e;if(Object(n.t)(this,t),this._state=Object(n.e)({hexagon:h(1)},t.data),this._recompute({size:1},this._state),document.getElementById("svelte-16r8qhl-style")||((e=Object(n.l)("style")).id="svelte-16r8qhl-style",e.textContent="span.overview.svelte-16r8qhl{width:10vw;color:violet;font-weight:700;font-size:0.5em}svg.svelte-16r8qhl{width:70vw;border:1px solid white}ul.svelte-16r8qhl{font-weight:300;font-style:italic;list-style:none}li.svelte-16r8qhl{display:block;float:left}",Object(n.d)(e,document.head)),t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=function(t,e){for(var c,i,a,l,r,s,f="hexagonal"===e.fieldtype&&p(t,e),b="rectangular"===e.fieldtype&&m(t,e),j={elements:{x:e.x,y:e.y,cells:e.x*e.y,cx:e.cx,cy:e.cy}},O=new o({root:t.root,data:j}),h=e.statecolors,u=[],d=0;d<h.length;d+=1)u[d]=v(0,Object(n.e)(Object(n.e)({},e),{each_value_2:h,_s:h[d],_s_index:d}));return{c:function(){f&&f.c(),c=Object(n.n)("\n\n"),b&&b.c(),i=Object(n.n)("\n"),a=Object(n.l)("span"),O._fragment.c(),l=Object(n.n)("\n  "),r=Object(n.l)("div"),s=Object(n.l)("ul");for(var t=0;t<u.length;t+=1)u[t].c();this.h()},l:function(t){f&&f.l(t),c=Object(n.k)(t,"\n\n"),b&&b.l(t),i=Object(n.k)(t,"\n"),a=Object(n.j)(t,"SPAN",{class:!0},!1);var e=Object(n.i)(a);O._fragment.l(e),l=Object(n.k)(e,"\n  "),r=Object(n.j)(e,"DIV",{},!1);var o=Object(n.i)(r);s=Object(n.j)(o,"UL",{class:!0},!1);for(var j=Object(n.i)(s),h=0;h<u.length;h+=1)u[h].l(j);j.forEach(n.p),o.forEach(n.p),e.forEach(n.p),this.h()},h:function(){s.className="svelte-16r8qhl",a.className="overview svelte-16r8qhl"},m:function(t,e){f&&f.m(t,e),Object(n.u)(c,t,e),b&&b.m(t,e),Object(n.u)(i,t,e),Object(n.u)(a,t,e),O._mount(a,null),Object(n.d)(l,a),Object(n.d)(r,a),Object(n.d)(s,r);for(var o=0;o<u.length;o+=1)u[o].m(s,null)},p:function(e,a){"hexagonal"===a.fieldtype?f?f.p(e,a):((f=p(t,a)).c(),f.m(c.parentNode,c)):f&&(f.u(),f.d(),f=null),"rectangular"===a.fieldtype?b?b.p(e,a):((b=m(t,a)).c(),b.m(i.parentNode,i)):b&&(b.u(),b.d(),b=null);var o={};(e.x||e.y||e.cx||e.cy)&&(o.elements={x:a.x,y:a.y,cells:a.x*a.y,cx:a.cx,cy:a.cy}),O._set(o);var l=a.statecolors;if(e.statecolors){for(var r=0;r<l.length;r+=1){var j=Object(n.e)(Object(n.e)({},a),{each_value_2:l,_s:l[r],_s_index:r});u[r]?u[r].p(e,j):(u[r]=v(0,j),u[r].c(),u[r].m(s,null))}for(;r<u.length;r+=1)u[r].u(),u[r].d();u.length=l.length}},u:function(){f&&f.u(),Object(n.p)(c),b&&b.u(),Object(n.p)(i),Object(n.p)(a);for(var t=0;t<u.length;t+=1)u[t].u()},d:function(){f&&f.d(),b&&b.d(),O.destroy(!1),Object(n.o)(u)}}}(this,this._state),t.target){var c=Object(n.i)(t.target);t.hydrate?this._fragment.l(c):this._fragment.c(),c.forEach(n.p),this._mount(t.target,t.anchor),this._lock=!0,Object(n.h)(this._beforecreate),Object(n.h)(this._oncreate),Object(n.h)(this._aftercreate),this._lock=!1}}Object(n.e)(k.prototype,n.x),Object(n.e)(k.prototype,d),k.prototype._recompute=function(t,e){t.size&&this._differs(e.hexagon,e.hexagon=function({size:t}){return h(t)}(e))&&(t.hexagon=!0)};var z=k;const E=(t,e)=>{const c={hexagonal:{cx:44*e,cy:25*e},rectangular:{cx:40*e,cy:40*e}};return t in c?c[t]:c.rectangular};function w(t){var e,c,i,a,o,l,r,s,f,b,j,O,h,u,d,y,p;if(Object(n.t)(this,t),this._state=Object(n.e)({field:[],x:0,y:0,fieldtype:"",statecolors:[],size:1},t.data),this._recompute({fieldtype:1,size:1},this._state),document.getElementById("svelte-1kshz2b-style")||((e=Object(n.l)("style")).id="svelte-1kshz2b-style",e.textContent=".container.svelte-1kshz2b{border:1px solid orange;background-color:#5f5f7f;color:white}",Object(n.d)(e,document.head)),t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=(c=this,i=this._state,y={name:i.name,x:i.x,y:i.y,field:i.field,fieldtype:i.fieldtype,statecolors:i.statecolors,cx:i.cx,cy:i.cy,size:i.size},p=new z({root:c.root,data:y}),{c:function(){a=Object(n.l)("div"),o=Object(n.l)("span"),l=Object(n.n)("["),r=Object(n.n)(i.id),s=Object(n.n)(" - "),f=Object(n.n)(i.name),b=Object(n.n)("] "),j=Object(n.n)(i.fieldtype),O=Object(n.n)(' CA of type: "'),h=Object(n.n)(i.type),u=Object(n.n)('"'),d=Object(n.n)("\n"),p._fragment.c(),this.h()},l:function(t){a=Object(n.j)(t,"DIV",{class:!0},!1);var e=Object(n.i)(a);o=Object(n.j)(e,"SPAN",{},!1);var c=Object(n.i)(o);l=Object(n.k)(c,"["),r=Object(n.k)(c,i.id),s=Object(n.k)(c," - "),f=Object(n.k)(c,i.name),b=Object(n.k)(c,"] "),j=Object(n.k)(c,i.fieldtype),O=Object(n.k)(c,' CA of type: "'),h=Object(n.k)(c,i.type),u=Object(n.k)(c,'"'),c.forEach(n.p),d=Object(n.k)(e,"\n"),p._fragment.l(e),e.forEach(n.p),this.h()},h:function(){a.className="container svelte-1kshz2b"},m:function(t,e){Object(n.u)(a,t,e),Object(n.d)(o,a),Object(n.d)(l,o),Object(n.d)(r,o),Object(n.d)(s,o),Object(n.d)(f,o),Object(n.d)(b,o),Object(n.d)(j,o),Object(n.d)(O,o),Object(n.d)(h,o),Object(n.d)(u,o),Object(n.d)(d,a),p._mount(a,null)},p:function(t,e){t.id&&(r.data=e.id),t.name&&(f.data=e.name),t.fieldtype&&(j.data=e.fieldtype),t.type&&(h.data=e.type);var c={};t.name&&(c.name=e.name),t.x&&(c.x=e.x),t.y&&(c.y=e.y),t.field&&(c.field=e.field),t.fieldtype&&(c.fieldtype=e.fieldtype),t.statecolors&&(c.statecolors=e.statecolors),t.cx&&(c.cx=e.cx),t.cy&&(c.cy=e.cy),t.size&&(c.size=e.size),p._set(c)},u:function(){Object(n.p)(a)},d:function(){p.destroy(!1)}}),t.target){var g=Object(n.i)(t.target);t.hydrate?this._fragment.l(g):this._fragment.c(),g.forEach(n.p),this._mount(t.target,t.anchor),this._lock=!0,Object(n.h)(this._beforecreate),Object(n.h)(this._oncreate),Object(n.h)(this._aftercreate),this._lock=!1}}Object(n.e)(w.prototype,n.x),w.prototype._recompute=function(t,e){(t.fieldtype||t.size)&&(this._differs(e.cx,e.cx=function({fieldtype:t,size:e}){return E(t,e).cx}(e))&&(t.cx=!0),this._differs(e.cy,e.cy=function({fieldtype:t,size:e}){return E(t,e).cy}(e))&&(t.cy=!0))};var N=w;const[T,q]=[8,8],I=[];var B={generateField:function({x:t,y:e,initializer:c,field:n}){const i=this.get().statecolors.length,a=(t=>{const e={hexagonal:s.field,rectangular:f.field};return t in e?e[t]:e.rectangular})(this.get("fieldtype"))(t,e,i,c);this.set({field:a})}};function A(t){var e;if(Object(n.t)(this,t),this._state=Object(n.e)({x:T,y:q,field:I,...O},t.data),document.getElementById("svelte-1yp6mn3-style")||((e=Object(n.l)("style")).id="svelte-1yp6mn3-style",e.textContent="div.games.svelte-1yp6mn3{display:flex;align-content:space-between;justify-content:center;flex-wrap:wrap}",Object(n.d)(e,document.head)),t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=function(t,e){var c,i,a,o,l,r,s,f,b,j,O,h,u,d,y,p;function g(e){t.set({fieldtype:"hexagonal"})}function m(e){t.set({fieldtype:"rectangular"})}function v(e){t.set({statecolors:["#ff6738","#18c8ff","#efaf03","#60f370"]})}function x(e){t.set({statecolors:["#ffffff","#efefef"]})}function _(c){t.generateField({x:e.x,y:e.y,initializer:(t,e)=>t%e,field:[]})}var k={id:e.id,name:e.name,field:e.field,fieldtype:e.fieldtype,type:e.algorithm.name,x:e.x,y:e.y,states:e.state,size:"1"},z=new N({root:t.root,data:k});return{c:function(){c=Object(n.l)("button"),i=Object(n.n)("hexagonal"),a=Object(n.n)("\n\n"),o=Object(n.l)("button"),l=Object(n.n)("rectangular"),r=Object(n.n)("\n\n"),s=Object(n.l)("button"),f=Object(n.n)("4 states"),b=Object(n.n)("\n\n"),j=Object(n.l)("button"),O=Object(n.n)("2 states"),h=Object(n.n)("\n\n"),u=Object(n.l)("button"),d=Object(n.n)("initialize empty field"),y=Object(n.n)("\n\n"),p=Object(n.l)("div"),z._fragment.c(),this.h()},l:function(t){c=Object(n.j)(t,"BUTTON",{},!1);var e=Object(n.i)(c);i=Object(n.k)(e,"hexagonal"),e.forEach(n.p),a=Object(n.k)(t,"\n\n"),o=Object(n.j)(t,"BUTTON",{},!1);var g=Object(n.i)(o);l=Object(n.k)(g,"rectangular"),g.forEach(n.p),r=Object(n.k)(t,"\n\n"),s=Object(n.j)(t,"BUTTON",{},!1);var m=Object(n.i)(s);f=Object(n.k)(m,"4 states"),m.forEach(n.p),b=Object(n.k)(t,"\n\n"),j=Object(n.j)(t,"BUTTON",{},!1);var v=Object(n.i)(j);O=Object(n.k)(v,"2 states"),v.forEach(n.p),h=Object(n.k)(t,"\n\n"),u=Object(n.j)(t,"BUTTON",{},!1);var x=Object(n.i)(u);d=Object(n.k)(x,"initialize empty field"),x.forEach(n.p),y=Object(n.k)(t,"\n\n"),p=Object(n.j)(t,"DIV",{class:!0},!1);var _=Object(n.i)(p);z._fragment.l(_),_.forEach(n.p),this.h()},h:function(){Object(n.c)(c,"click",g),Object(n.c)(o,"click",m),Object(n.c)(s,"click",v),Object(n.c)(j,"click",x),Object(n.c)(u,"click",_),p.className="games svelte-1yp6mn3"},m:function(t,e){Object(n.u)(c,t,e),Object(n.d)(i,c),Object(n.u)(a,t,e),Object(n.u)(o,t,e),Object(n.d)(l,o),Object(n.u)(r,t,e),Object(n.u)(s,t,e),Object(n.d)(f,s),Object(n.u)(b,t,e),Object(n.u)(j,t,e),Object(n.d)(O,j),Object(n.u)(h,t,e),Object(n.u)(u,t,e),Object(n.d)(d,u),Object(n.u)(y,t,e),Object(n.u)(p,t,e),z._mount(p,null)},p:function(t,c){e=c;var n={};t.id&&(n.id=e.id),t.name&&(n.name=e.name),t.field&&(n.field=e.field),t.fieldtype&&(n.fieldtype=e.fieldtype),t.algorithm&&(n.type=e.algorithm.name),t.x&&(n.x=e.x),t.y&&(n.y=e.y),t.state&&(n.states=e.state),z._set(n)},u:function(){Object(n.p)(c),Object(n.p)(a),Object(n.p)(o),Object(n.p)(r),Object(n.p)(s),Object(n.p)(b),Object(n.p)(j),Object(n.p)(h),Object(n.p)(u),Object(n.p)(y),Object(n.p)(p)},d:function(){Object(n.y)(c,"click",g),Object(n.y)(o,"click",m),Object(n.y)(s,"click",v),Object(n.y)(j,"click",x),Object(n.y)(u,"click",_),z.destroy(!1)}}}(this,this._state),this.root._oncreate.push(()=>{(function(){console.log("init GameofLife")}).call(this),this.fire("update",{changed:Object(n.f)({},this._state),current:this._state})}),t.target){var c=Object(n.i)(t.target);t.hydrate?this._fragment.l(c):this._fragment.c(),c.forEach(n.p),this._mount(t.target,t.anchor),this._lock=!0,Object(n.h)(this._beforecreate),Object(n.h)(this._oncreate),Object(n.h)(this._aftercreate),this._lock=!1}}Object(n.e)(A.prototype,n.x),Object(n.e)(A.prototype,B);var C=A;function L(t){var e,c,i,a,o,l,r;if(Object(n.t)(this,t),this._state=Object(n.e)({},t.data),document.getElementById("svelte-7big2b-style")||((e=Object(n.l)("style")).id="svelte-7big2b-style",e.textContent=".container.svelte-7big2b{width:100%}",Object(n.d)(e,document.head)),t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=(c=this,this._state,l=new C({root:c.root,data:{id:"1"}}),r=new C({root:c.root,data:{id:"2"}}),{c:function(){i=Object(n.n)("\n\n\n"),a=Object(n.l)("div"),l._fragment.c(),o=Object(n.n)("\n  "),r._fragment.c(),this.h()},l:function(t){i=Object(n.k)(t,"\n\n\n"),a=Object(n.j)(t,"DIV",{class:!0},!1);var e=Object(n.i)(a);l._fragment.l(e),o=Object(n.k)(e,"\n  "),r._fragment.l(e),e.forEach(n.p),this.h()},h:function(){document.title="About",a.className="container svelte-7big2b"},m:function(t,e){Object(n.u)(i,t,e),Object(n.u)(a,t,e),l._mount(a,null),Object(n.d)(o,a),r._mount(a,null)},p:n.v,u:function(){Object(n.p)(i),Object(n.p)(a)},d:function(){l.destroy(!1),r.destroy(!1)}}),t.target){var s=Object(n.i)(t.target);t.hydrate?this._fragment.l(s):this._fragment.c(),s.forEach(n.p),this._mount(t.target,t.anchor),this._lock=!0,Object(n.h)(this._beforecreate),Object(n.h)(this._oncreate),Object(n.h)(this._aftercreate),this._lock=!1}}Object(n.e)(L.prototype,n.x);e.default=L}}]);
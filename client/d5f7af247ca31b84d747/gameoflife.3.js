(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{7:function(t,e,o){"use strict";o.r(e);var s=o(0),n=o(3),i=o(4),c=o(2);var r={next(){console.log("next");const{field:t,statecolors:{length:e},fieldtype:o,x:s,y:n}=this.store.get();this.store.set({field:Object(c.d)(Object(c.f)(s,n)(Object(c.h)(t)))})},init(t,e){console.log("iniiit");const{statecolors:{length:o},fieldtype:s}=this.store.get(),n=Object(c.e)(s)(t,e,o,c.j);this.store.set({field:n})}};function a(t){var e,o,r,a,h,l,f,d,u,b;if(Object(s.v)(this,t),this._state=Object(s.e)(this.store._init(["algorithm","x","y"]),t.data),this.store._add(this,["algorithm","x","y"]),this._recompute({$algorithm:1},this._state),this._handlers.destroy=[s.B],document.getElementById("svelte-vsvcuh-style")||((e=Object(s.m)("style")).id="svelte-vsvcuh-style",e.textContent=".container.svelte-vsvcuh{width:100%}",Object(s.d)(e,document.head)),t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=(o=this,r=this._state,d={id:"1",type:r.type},u=new n.a({root:o.root,data:d}),(b=new i.a({root:o.root,slots:{default:Object(s.n)()}})).on("next",function(t){o.next()}),b.on("init",function(t){o.init(r.$x,r.$y)}),{c:function(){a=Object(s.p)("\n\n"),h=Object(s.m)("div"),l=Object(s.p)("\n    "),u._fragment.c(),f=Object(s.p)("\n  "),b._fragment.c(),this.h()},l:function(t){a=Object(s.k)(t,"\n\n"),h=Object(s.j)(t,"DIV",{class:!0},!1);var e=Object(s.i)(h);l=Object(s.k)(t,"\n    "),u._fragment.l(t),f=Object(s.k)(t,"\n  "),b._fragment.l(e),e.forEach(s.r),this.h()},h:function(){document.title="Game of Life",h.className="container svelte-vsvcuh"},m:function(t,e){Object(s.w)(a,t,e),Object(s.w)(h,t,e),Object(s.d)(l,b._slotted.default),u._mount(b._slotted.default,null),Object(s.d)(f,b._slotted.default),b._mount(h,null)},p:function(t,e){r=e;var o={};t.type&&(o.type=r.type),u._set(o)},u:function(){Object(s.r)(a),Object(s.r)(h)},d:function(){u.destroy(!1),b.destroy(!1)}}),this.root._oncreate.push(()=>{(function(){const{algorithm:t,fieldtype:e,name:o,statecolors:s,stati:n}=c.a;this.store.set({algorithm:t,fieldtype:e,statecolors:s,stati:n,name:o})}).call(this),this.fire("update",{changed:Object(s.f)({},this._state),current:this._state})}),t.target){var _=Object(s.i)(t.target);t.hydrate?this._fragment.l(_):this._fragment.c(),_.forEach(s.r),this._mount(t.target,t.anchor),this._lock=!0,Object(s.h)(this._beforecreate),Object(s.h)(this._oncreate),Object(s.h)(this._aftercreate),this._lock=!1}}Object(s.e)(a.prototype,s.z),Object(s.e)(a.prototype,r),a.prototype._recompute=function(t,e){t.$algorithm&&this._differs(e.type,e.type=function({$algorithm:t}){return t&&t.name||""}(e))&&(t.type=!0)},e.default=a}}]);
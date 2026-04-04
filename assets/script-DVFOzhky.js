(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bh="183",Kv=0,sf=1,Yv=2,Za=1,Qv=2,So=3,pr=0,En=1,Ti=2,Ii=0,Rs=1,au=2,of=3,af=4,Jv=5,Vr=100,Zv=101,e0=102,t0=103,n0=104,i0=200,r0=201,s0=202,o0=203,cu=204,lu=205,a0=206,c0=207,l0=208,u0=209,h0=210,d0=211,f0=212,p0=213,m0=214,uu=0,hu=1,du=2,Os=3,fu=4,pu=5,mu=6,gu=7,Nm=0,g0=1,_0=2,ri=0,Um=1,Om=2,Fm=3,Vm=4,km=5,Bm=6,zm=7,Gm=300,Xr=301,Fs=302,ml=303,gl=304,Vc=306,_u=1e3,Mi=1001,vu=1002,rn=1003,v0=1004,xa=1005,dn=1006,_l=1007,Br=1008,Pn=1009,Hm=1010,Wm=1011,Uo=1012,Ih=1013,hi=1014,ni=1015,Ni=1016,Rh=1017,Ch=1018,Oo=1020,qm=35902,Xm=35899,$m=1021,jm=1022,Hn=1023,Ui=1026,zr=1027,Km=1028,Ph=1029,Vs=1030,Dh=1031,Lh=1033,ec=33776,tc=33777,nc=33778,ic=33779,yu=35840,Eu=35841,xu=35842,Su=35843,Tu=36196,Au=37492,Mu=37496,wu=37488,bu=37489,Iu=37490,Ru=37491,Cu=37808,Pu=37809,Du=37810,Lu=37811,Nu=37812,Uu=37813,Ou=37814,Fu=37815,Vu=37816,ku=37817,Bu=37818,zu=37819,Gu=37820,Hu=37821,Wu=36492,qu=36494,Xu=36495,$u=36283,ju=36284,Ku=36285,Yu=36286,y0=3200,E0=0,x0=1,ir="",Rn="srgb",ks="srgb-linear",mc="linear",At="srgb",us=7680,cf=519,S0=512,T0=513,A0=514,Nh=515,M0=516,w0=517,Uh=518,b0=519,lf=35044,uf="300 es",ii=2e3,gc=2001;function I0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _c(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function R0(){const i=_c("canvas");return i.style.display="block",i}const hf={};function df(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ym(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function nt(...i){i=Ym(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function yt(...i){i=Ym(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function vc(...i){const e=i.join(" ");e in hf||(hf[e]=!0,nt(...i))}function C0(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const P0={[uu]:hu,[du]:mu,[fu]:gu,[Os]:pu,[hu]:uu,[mu]:du,[gu]:fu,[pu]:Os};class js{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vl=Math.PI/180,Qu=180/Math.PI;function Ko(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function D0(i,e){return(i%e+e)%e}function yl(i,e,t){return(1-t)*i+t*e}function po(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class bt{constructor(e=0,t=0){bt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ks{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,c){let l=n[r+0],u=n[r+1],h=n[r+2],f=n[r+3],d=s[o+0],g=s[o+1],x=s[o+2],b=s[o+3];if(f!==b||l!==d||u!==g||h!==x){let _=l*d+u*g+h*x+f*b;_<0&&(d=-d,g=-g,x=-x,b=-b,_=-_);let v=1-c;if(_<.9995){const R=Math.acos(_),N=Math.sin(R);v=Math.sin(v*R)/N,c=Math.sin(c*R)/N,l=l*v+d*c,u=u*v+g*c,h=h*v+x*c,f=f*v+b*c}else{l=l*v+d*c,u=u*v+g*c,h=h*v+x*c,f=f*v+b*c;const R=1/Math.sqrt(l*l+u*u+h*h+f*f);l*=R,u*=R,h*=R,f*=R}}e[t]=l,e[t+1]=u,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const c=n[r],l=n[r+1],u=n[r+2],h=n[r+3],f=s[o],d=s[o+1],g=s[o+2],x=s[o+3];return e[t]=c*x+h*f+l*g-u*d,e[t+1]=l*x+h*d+u*f-c*g,e[t+2]=u*x+h*g+c*d-l*f,e[t+3]=h*x-c*f-l*d-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,c=Math.cos,l=Math.sin,u=c(n/2),h=c(r/2),f=c(s/2),d=l(n/2),g=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=d*h*f+u*g*x,this._y=u*g*f-d*h*x,this._z=u*h*x+d*g*f,this._w=u*h*f-d*g*x;break;case"YXZ":this._x=d*h*f+u*g*x,this._y=u*g*f-d*h*x,this._z=u*h*x-d*g*f,this._w=u*h*f+d*g*x;break;case"ZXY":this._x=d*h*f-u*g*x,this._y=u*g*f+d*h*x,this._z=u*h*x+d*g*f,this._w=u*h*f-d*g*x;break;case"ZYX":this._x=d*h*f-u*g*x,this._y=u*g*f+d*h*x,this._z=u*h*x-d*g*f,this._w=u*h*f+d*g*x;break;case"YZX":this._x=d*h*f+u*g*x,this._y=u*g*f+d*h*x,this._z=u*h*x-d*g*f,this._w=u*h*f-d*g*x;break;case"XZY":this._x=d*h*f-u*g*x,this._y=u*g*f-d*h*x,this._z=u*h*x+d*g*f,this._w=u*h*f+d*g*x;break;default:nt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],c=t[5],l=t[9],u=t[2],h=t[6],f=t[10],d=n+c+f;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(h-l)*g,this._y=(s-u)*g,this._z=(o-r)*g}else if(n>c&&n>f){const g=2*Math.sqrt(1+n-c-f);this._w=(h-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+u)/g}else if(c>f){const g=2*Math.sqrt(1+c-n-f);this._w=(s-u)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+h)/g}else{const g=2*Math.sqrt(1+f-n-c);this._w=(o-r)/g,this._x=(s+u)/g,this._y=(l+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,c=t._x,l=t._y,u=t._z,h=t._w;return this._x=n*h+o*c+r*u-s*l,this._y=r*h+o*l+s*c-n*u,this._z=s*h+o*u+n*l-r*c,this._w=o*h-n*c-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,c=this.dot(e);c<0&&(n=-n,r=-r,s=-s,o=-o,c=-c);let l=1-t;if(c<.9995){const u=Math.acos(c),h=Math.sin(u);l=Math.sin(l*u)/h,t=Math.sin(t*u)/h,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,n=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ff.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ff.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,c=e.z,l=e.w,u=2*(o*r-c*n),h=2*(c*t-s*r),f=2*(s*n-o*t);return this.x=t+l*u+o*f-c*h,this.y=n+l*h+c*u-s*f,this.z=r+l*f+s*h-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,c=t.y,l=t.z;return this.x=r*l-s*c,this.y=s*o-n*l,this.z=n*c-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return El.copy(this).projectOnVector(e),this.sub(El)}reflect(e){return this.sub(El.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const El=new j,ff=new Ks;class st{constructor(e,t,n,r,s,o,c,l,u){st.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,c,l,u)}set(e,t,n,r,s,o,c,l,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=c,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],c=n[3],l=n[6],u=n[1],h=n[4],f=n[7],d=n[2],g=n[5],x=n[8],b=r[0],_=r[3],v=r[6],R=r[1],N=r[4],L=r[7],U=r[2],F=r[5],A=r[8];return s[0]=o*b+c*R+l*U,s[3]=o*_+c*N+l*F,s[6]=o*v+c*L+l*A,s[1]=u*b+h*R+f*U,s[4]=u*_+h*N+f*F,s[7]=u*v+h*L+f*A,s[2]=d*b+g*R+x*U,s[5]=d*_+g*N+x*F,s[8]=d*v+g*L+x*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],c=e[5],l=e[6],u=e[7],h=e[8];return t*o*h-t*c*u-n*s*h+n*c*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],c=e[5],l=e[6],u=e[7],h=e[8],f=h*o-c*u,d=c*l-h*s,g=u*s-o*l,x=t*f+n*d+r*g;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/x;return e[0]=f*b,e[1]=(r*u-h*n)*b,e[2]=(c*n-r*o)*b,e[3]=d*b,e[4]=(h*t-r*l)*b,e[5]=(r*s-c*t)*b,e[6]=g*b,e[7]=(n*l-u*t)*b,e[8]=(o*t-n*s)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,c){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*o+u*c)+o+e,-r*u,r*l,-r*(-u*o+l*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(xl.makeScale(e,t)),this}rotate(e){return this.premultiply(xl.makeRotation(-e)),this}translate(e,t){return this.premultiply(xl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xl=new st,pf=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),mf=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function L0(){const i={enabled:!0,workingColorSpace:ks,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===At&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===At&&(r.r=Cs(r.r),r.g=Cs(r.g),r.b=Cs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ir?mc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return vc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return vc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ks]:{primaries:e,whitePoint:n,transfer:mc,toXYZ:pf,fromXYZ:mf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:e,whitePoint:n,transfer:At,toXYZ:pf,fromXYZ:mf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),i}const vt=L0();function Ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let hs;class N0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{hs===void 0&&(hs=_c("canvas")),hs.width=e.width,hs.height=e.height;const r=hs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=hs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_c("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ri(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ri(t[n]/255)*255):t[n]=Ri(t[n]);return{data:t,width:e.width,height:e.height}}else return nt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let U0=0;class Oh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Ko(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,c=r.length;o<c;o++)r[o].isDataTexture?s.push(Sl(r[o].image)):s.push(Sl(r[o]))}else s=Sl(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Sl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?N0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(nt("Texture: Unable to serialize Texture."),{})}let O0=0;const Tl=new j;class mn extends js{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,n=Mi,r=Mi,s=dn,o=Br,c=Hn,l=Pn,u=mn.DEFAULT_ANISOTROPY,h=ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Ko(),this.name="",this.source=new Oh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new bt(0,0),this.repeat=new bt(1,1),this.center=new bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Tl).x}get height(){return this.source.getSize(Tl).y}get depth(){return this.source.getSize(Tl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){nt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){nt(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _u:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case vu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _u:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case vu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Gm;mn.DEFAULT_ANISOTROPY=1;class kt{constructor(e=0,t=0,n=0,r=1){kt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,u=l[0],h=l[4],f=l[8],d=l[1],g=l[5],x=l[9],b=l[2],_=l[6],v=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-b)<.01&&Math.abs(x-_)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+b)<.1&&Math.abs(x+_)<.1&&Math.abs(u+g+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(u+1)/2,L=(g+1)/2,U=(v+1)/2,F=(h+d)/4,A=(f+b)/4,m=(x+_)/4;return N>L&&N>U?N<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(N),r=F/n,s=A/n):L>U?L<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(L),n=F/r,s=m/r):U<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(U),n=A/s,r=m/s),this.set(n,r,s,t),this}let R=Math.sqrt((_-x)*(_-x)+(f-b)*(f-b)+(d-h)*(d-h));return Math.abs(R)<.001&&(R=1),this.x=(_-x)/R,this.y=(f-b)/R,this.z=(d-h)/R,this.w=Math.acos((u+g+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class F0 extends js{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new mn(r),o=n.count;for(let c=0;c<o;c++)this.textures[c]=s.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:dn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Oh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class si extends F0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Qm extends mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class V0 extends mn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bt{constructor(e,t,n,r,s,o,c,l,u,h,f,d,g,x,b,_){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,c,l,u,h,f,d,g,x,b,_)}set(e,t,n,r,s,o,c,l,u,h,f,d,g,x,b,_){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=r,v[1]=s,v[5]=o,v[9]=c,v[13]=l,v[2]=u,v[6]=h,v[10]=f,v[14]=d,v[3]=g,v[7]=x,v[11]=b,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,r=1/ds.setFromMatrixColumn(e,0).length(),s=1/ds.setFromMatrixColumn(e,1).length(),o=1/ds.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),c=Math.sin(n),l=Math.cos(r),u=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*h,g=o*f,x=c*h,b=c*f;t[0]=l*h,t[4]=-l*f,t[8]=u,t[1]=g+x*u,t[5]=d-b*u,t[9]=-c*l,t[2]=b-d*u,t[6]=x+g*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,g=l*f,x=u*h,b=u*f;t[0]=d+b*c,t[4]=x*c-g,t[8]=o*u,t[1]=o*f,t[5]=o*h,t[9]=-c,t[2]=g*c-x,t[6]=b+d*c,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,g=l*f,x=u*h,b=u*f;t[0]=d-b*c,t[4]=-o*f,t[8]=x+g*c,t[1]=g+x*c,t[5]=o*h,t[9]=b-d*c,t[2]=-o*u,t[6]=c,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,g=o*f,x=c*h,b=c*f;t[0]=l*h,t[4]=x*u-g,t[8]=d*u+b,t[1]=l*f,t[5]=b*u+d,t[9]=g*u-x,t[2]=-u,t[6]=c*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,g=o*u,x=c*l,b=c*u;t[0]=l*h,t[4]=b-d*f,t[8]=x*f+g,t[1]=f,t[5]=o*h,t[9]=-c*h,t[2]=-u*h,t[6]=g*f+x,t[10]=d-b*f}else if(e.order==="XZY"){const d=o*l,g=o*u,x=c*l,b=c*u;t[0]=l*h,t[4]=-f,t[8]=u*h,t[1]=d*f+b,t[5]=o*h,t[9]=g*f-x,t[2]=x*f-g,t[6]=c*h,t[10]=b*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(k0,e,B0)}lookAt(e,t,n){const r=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Yi.crossVectors(n,Tn),Yi.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Yi.crossVectors(n,Tn)),Yi.normalize(),Sa.crossVectors(Tn,Yi),r[0]=Yi.x,r[4]=Sa.x,r[8]=Tn.x,r[1]=Yi.y,r[5]=Sa.y,r[9]=Tn.y,r[2]=Yi.z,r[6]=Sa.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],c=n[4],l=n[8],u=n[12],h=n[1],f=n[5],d=n[9],g=n[13],x=n[2],b=n[6],_=n[10],v=n[14],R=n[3],N=n[7],L=n[11],U=n[15],F=r[0],A=r[4],m=r[8],y=r[12],P=r[1],T=r[5],C=r[9],M=r[13],Y=r[2],q=r[6],J=r[10],H=r[14],le=r[3],ae=r[7],Ae=r[11],Pe=r[15];return s[0]=o*F+c*P+l*Y+u*le,s[4]=o*A+c*T+l*q+u*ae,s[8]=o*m+c*C+l*J+u*Ae,s[12]=o*y+c*M+l*H+u*Pe,s[1]=h*F+f*P+d*Y+g*le,s[5]=h*A+f*T+d*q+g*ae,s[9]=h*m+f*C+d*J+g*Ae,s[13]=h*y+f*M+d*H+g*Pe,s[2]=x*F+b*P+_*Y+v*le,s[6]=x*A+b*T+_*q+v*ae,s[10]=x*m+b*C+_*J+v*Ae,s[14]=x*y+b*M+_*H+v*Pe,s[3]=R*F+N*P+L*Y+U*le,s[7]=R*A+N*T+L*q+U*ae,s[11]=R*m+N*C+L*J+U*Ae,s[15]=R*y+N*M+L*H+U*Pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],c=e[5],l=e[9],u=e[13],h=e[2],f=e[6],d=e[10],g=e[14],x=e[3],b=e[7],_=e[11],v=e[15],R=l*g-u*d,N=c*g-u*f,L=c*d-l*f,U=o*g-u*h,F=o*d-l*h,A=o*f-c*h;return t*(b*R-_*N+v*L)-n*(x*R-_*U+v*F)+r*(x*N-b*U+v*A)-s*(x*L-b*F+_*A)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],c=e[5],l=e[6],u=e[7],h=e[8],f=e[9],d=e[10],g=e[11],x=e[12],b=e[13],_=e[14],v=e[15],R=t*c-n*o,N=t*l-r*o,L=t*u-s*o,U=n*l-r*c,F=n*u-s*c,A=r*u-s*l,m=h*b-f*x,y=h*_-d*x,P=h*v-g*x,T=f*_-d*b,C=f*v-g*b,M=d*v-g*_,Y=R*M-N*C+L*T+U*P-F*y+A*m;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/Y;return e[0]=(c*M-l*C+u*T)*q,e[1]=(r*C-n*M-s*T)*q,e[2]=(b*A-_*F+v*U)*q,e[3]=(d*F-f*A-g*U)*q,e[4]=(l*P-o*M-u*y)*q,e[5]=(t*M-r*P+s*y)*q,e[6]=(_*L-x*A-v*N)*q,e[7]=(h*A-d*L+g*N)*q,e[8]=(o*C-c*P+u*m)*q,e[9]=(n*P-t*C-s*m)*q,e[10]=(x*F-b*L+v*R)*q,e[11]=(f*L-h*F-g*R)*q,e[12]=(c*y-o*T-l*m)*q,e[13]=(t*T-n*y+r*m)*q,e[14]=(b*N-x*U-_*R)*q,e[15]=(h*U-f*N+d*R)*q,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,c=e.y,l=e.z,u=s*o,h=s*c;return this.set(u*o+n,u*c-r*l,u*l+r*c,0,u*c+r*l,h*c+n,h*l-r*o,0,u*l-r*c,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,c=t._z,l=t._w,u=s+s,h=o+o,f=c+c,d=s*u,g=s*h,x=s*f,b=o*h,_=o*f,v=c*f,R=l*u,N=l*h,L=l*f,U=n.x,F=n.y,A=n.z;return r[0]=(1-(b+v))*U,r[1]=(g+L)*U,r[2]=(x-N)*U,r[3]=0,r[4]=(g-L)*F,r[5]=(1-(d+v))*F,r[6]=(_+R)*F,r[7]=0,r[8]=(x+N)*A,r[9]=(_-R)*A,r[10]=(1-(d+b))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let o=ds.set(r[0],r[1],r[2]).length();const c=ds.set(r[4],r[5],r[6]).length(),l=ds.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Vn.copy(this);const u=1/o,h=1/c,f=1/l;return Vn.elements[0]*=u,Vn.elements[1]*=u,Vn.elements[2]*=u,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=f,Vn.elements[9]*=f,Vn.elements[10]*=f,t.setFromRotationMatrix(Vn),n.x=o,n.y=c,n.z=l,this}makePerspective(e,t,n,r,s,o,c=ii,l=!1){const u=this.elements,h=2*s/(t-e),f=2*s/(n-r),d=(t+e)/(t-e),g=(n+r)/(n-r);let x,b;if(l)x=s/(o-s),b=o*s/(o-s);else if(c===ii)x=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(c===gc)x=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=h,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=f,u[9]=g,u[13]=0,u[2]=0,u[6]=0,u[10]=x,u[14]=b,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,o,c=ii,l=!1){const u=this.elements,h=2/(t-e),f=2/(n-r),d=-(t+e)/(t-e),g=-(n+r)/(n-r);let x,b;if(l)x=1/(o-s),b=o/(o-s);else if(c===ii)x=-2/(o-s),b=-(o+s)/(o-s);else if(c===gc)x=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=h,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=f,u[9]=0,u[13]=g,u[2]=0,u[6]=0,u[10]=x,u[14]=b,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ds=new j,Vn=new Bt,k0=new j(0,0,0),B0=new j(1,1,1),Yi=new j,Sa=new j,Tn=new j,gf=new Bt,_f=new Ks;class Oi{constructor(e=0,t=0,n=0,r=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],c=r[8],l=r[1],u=r[5],h=r[9],f=r[2],d=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:nt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return gf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(gf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _f.setFromEuler(this),this.setFromQuaternion(_f,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class Jm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let z0=0;const vf=new j,fs=new Ks,vi=new Bt,Ta=new j,mo=new j,G0=new j,H0=new Ks,yf=new j(1,0,0),Ef=new j(0,1,0),xf=new j(0,0,1),Sf={type:"added"},W0={type:"removed"},ps={type:"childadded",child:null},Al={type:"childremoved",child:null};class xn extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new j,t=new Oi,n=new Ks,r=new j(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Bt},normalMatrix:{value:new st}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(yf,e)}rotateY(e){return this.rotateOnAxis(Ef,e)}rotateZ(e){return this.rotateOnAxis(xf,e)}translateOnAxis(e,t){return vf.copy(e).applyQuaternion(this.quaternion),this.position.add(vf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yf,e)}translateY(e){return this.translateOnAxis(Ef,e)}translateZ(e){return this.translateOnAxis(xf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ta.copy(e):Ta.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(mo,Ta,this.up):vi.lookAt(Ta,mo,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),fs.setFromRotationMatrix(vi),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(yt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sf),ps.child=e,this.dispatchEvent(ps),ps.child=null):yt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(W0),Al.child=e,this.dispatchEvent(Al),Al.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sf),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,e,G0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,H0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(c=>({...c})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const l=c.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(s(e.materials,this.material[l]));r.material=c}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const l=this.animations[c];r.animations.push(s(e.animations,l))}}if(t){const c=o(e.geometries),l=o(e.materials),u=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),g=o(e.animations),x=o(e.nodes);c.length>0&&(n.geometries=c),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),x.length>0&&(n.nodes=x)}return n.object=r,n;function o(c){const l=[];for(const u in c){const h=c[u];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}xn.DEFAULT_UP=new j(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Aa extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const q0={type:"move"};class Ml{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Aa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Aa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Aa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const c=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const b of e.hand.values()){const _=t.getJointPose(b,n),v=this._getHandJoint(u,b);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}const h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=h.position.distanceTo(f.position),g=.02,x=.005;u.inputState.pinching&&d>g+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=g-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(q0)))}return c!==null&&(c.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Aa;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Zm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qi={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function wl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Mt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=vt.workingColorSpace){if(e=D0(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=wl(o,s,e+1/3),this.g=wl(o,s,e),this.b=wl(o,s,e-1/3)}return vt.colorSpaceToWorking(this,r),this}setStyle(e,t=Rn){function n(s){s!==void 0&&parseFloat(s)<1&&nt("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],c=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:nt("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);nt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rn){const n=Zm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):nt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return vt.workingToColorSpace(ln.copy(this),e),Math.round(ft(ln.r*255,0,255))*65536+Math.round(ft(ln.g*255,0,255))*256+Math.round(ft(ln.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(ln.copy(this),t);const n=ln.r,r=ln.g,s=ln.b,o=Math.max(n,r,s),c=Math.min(n,r,s);let l,u;const h=(c+o)/2;if(c===o)l=0,u=0;else{const f=o-c;switch(u=h<=.5?f/(o+c):f/(2-o-c),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=h,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Rn){vt.workingToColorSpace(ln.copy(this),e);const t=ln.r,n=ln.g,r=ln.b;return e!==Rn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Qi),this.setHSL(Qi.h+e,Qi.s+t,Qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qi),e.getHSL(Ma);const n=yl(Qi.h,Ma.h,t),r=yl(Qi.s,Ma.s,t),s=yl(Qi.l,Ma.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new Mt;Mt.NAMES=Zm;class X0 extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const kn=new j,yi=new j,bl=new j,Ei=new j,ms=new j,gs=new j,Tf=new j,Il=new j,Rl=new j,Cl=new j,Pl=new kt,Dl=new kt,Ll=new kt;class Gn{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),kn.subVectors(e,t),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){kn.subVectors(r,t),yi.subVectors(n,t),bl.subVectors(e,t);const o=kn.dot(kn),c=kn.dot(yi),l=kn.dot(bl),u=yi.dot(yi),h=yi.dot(bl),f=o*u-c*c;if(f===0)return s.set(0,0,0),null;const d=1/f,g=(u*l-c*h)*d,x=(o*h-c*l)*d;return s.set(1-g-x,x,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,t,n,r,s,o,c,l){return this.getBarycoord(e,t,n,r,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(c,Ei.z),l)}static getInterpolatedAttribute(e,t,n,r,s,o){return Pl.setScalar(0),Dl.setScalar(0),Ll.setScalar(0),Pl.fromBufferAttribute(e,t),Dl.fromBufferAttribute(e,n),Ll.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Pl,s.x),o.addScaledVector(Dl,s.y),o.addScaledVector(Ll,s.z),o}static isFrontFacing(e,t,n,r){return kn.subVectors(n,t),yi.subVectors(e,t),kn.cross(yi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),kn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,c;ms.subVectors(r,n),gs.subVectors(s,n),Il.subVectors(e,n);const l=ms.dot(Il),u=gs.dot(Il);if(l<=0&&u<=0)return t.copy(n);Rl.subVectors(e,r);const h=ms.dot(Rl),f=gs.dot(Rl);if(h>=0&&f<=h)return t.copy(r);const d=l*f-h*u;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ms,o);Cl.subVectors(e,s);const g=ms.dot(Cl),x=gs.dot(Cl);if(x>=0&&g<=x)return t.copy(s);const b=g*u-l*x;if(b<=0&&u>=0&&x<=0)return c=u/(u-x),t.copy(n).addScaledVector(gs,c);const _=h*x-g*f;if(_<=0&&f-h>=0&&g-x>=0)return Tf.subVectors(s,r),c=(f-h)/(f-h+(g-x)),t.copy(r).addScaledVector(Tf,c);const v=1/(_+b+d);return o=b*v,c=d*v,t.copy(n).addScaledVector(ms,o).addScaledVector(gs,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Yo{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,c=s.count;o<c;o++)e.isMesh===!0?e.getVertexPosition(o,Bn):Bn.fromBufferAttribute(s,o),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wa.copy(n.boundingBox)),wa.applyMatrix4(e.matrixWorld),this.union(wa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(go),ba.subVectors(this.max,go),_s.subVectors(e.a,go),vs.subVectors(e.b,go),ys.subVectors(e.c,go),Ji.subVectors(vs,_s),Zi.subVectors(ys,vs),Cr.subVectors(_s,ys);let t=[0,-Ji.z,Ji.y,0,-Zi.z,Zi.y,0,-Cr.z,Cr.y,Ji.z,0,-Ji.x,Zi.z,0,-Zi.x,Cr.z,0,-Cr.x,-Ji.y,Ji.x,0,-Zi.y,Zi.x,0,-Cr.y,Cr.x,0];return!Nl(t,_s,vs,ys,ba)||(t=[1,0,0,0,1,0,0,0,1],!Nl(t,_s,vs,ys,ba))?!1:(Ia.crossVectors(Ji,Zi),t=[Ia.x,Ia.y,Ia.z],Nl(t,_s,vs,ys,ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xi=[new j,new j,new j,new j,new j,new j,new j,new j],Bn=new j,wa=new Yo,_s=new j,vs=new j,ys=new j,Ji=new j,Zi=new j,Cr=new j,go=new j,ba=new j,Ia=new j,Pr=new j;function Nl(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Pr.fromArray(i,s);const c=r.x*Math.abs(Pr.x)+r.y*Math.abs(Pr.y)+r.z*Math.abs(Pr.z),l=e.dot(Pr),u=t.dot(Pr),h=n.dot(Pr);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>c)return!1}return!0}const zt=new j,Ra=new bt;let $0=0;class Xn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=lf,this.updateRanges=[],this.gpuType=ni,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ra.fromBufferAttribute(this,t),Ra.applyMatrix3(e),this.setXY(t,Ra.x,Ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=po(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=po(t,this.array)),t}setX(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=po(t,this.array)),t}setY(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=po(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=po(t,this.array)),t}setW(e,t){return this.normalized&&(t=_n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array),r=_n(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=_n(t,this.array),n=_n(n,this.array),r=_n(r,this.array),s=_n(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lf&&(e.usage=this.usage),e}}class eg extends Xn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class tg extends Xn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ci extends Xn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const j0=new Yo,_o=new j,Ul=new j;class kc{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):j0.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_o.subVectors(e,this.center);const t=_o.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(_o,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_o.copy(e.center).add(Ul)),this.expandByPoint(_o.copy(e.center).sub(Ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let K0=0;const In=new Bt,Ol=new xn,Es=new j,An=new Yo,vo=new Yo,Jt=new j;class Yn extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=Ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(I0(e)?tg:eg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new st().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,n){return In.makeTranslation(e,t,n),this.applyMatrix4(In),this}scale(e,t,n){return In.makeScale(e,t,n),this.applyMatrix4(In),this}lookAt(e){return Ol.lookAt(e),Ol.updateMatrix(),this.applyMatrix4(Ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ci(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&nt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const n=this.boundingSphere.center;if(An.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const c=t[s];vo.setFromBufferAttribute(c),this.morphTargetsRelative?(Jt.addVectors(An.min,vo.min),An.expandByPoint(Jt),Jt.addVectors(An.max,vo.max),An.expandByPoint(Jt)):(An.expandByPoint(vo.min),An.expandByPoint(vo.max))}An.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Jt));if(t)for(let s=0,o=t.length;s<o;s++){const c=t[s],l=this.morphTargetsRelative;for(let u=0,h=c.count;u<h;u++)Jt.fromBufferAttribute(c,u),l&&(Es.fromBufferAttribute(e,u),Jt.add(Es)),r=Math.max(r,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),c=[],l=[];for(let m=0;m<n.count;m++)c[m]=new j,l[m]=new j;const u=new j,h=new j,f=new j,d=new bt,g=new bt,x=new bt,b=new j,_=new j;function v(m,y,P){u.fromBufferAttribute(n,m),h.fromBufferAttribute(n,y),f.fromBufferAttribute(n,P),d.fromBufferAttribute(s,m),g.fromBufferAttribute(s,y),x.fromBufferAttribute(s,P),h.sub(u),f.sub(u),g.sub(d),x.sub(d);const T=1/(g.x*x.y-x.x*g.y);isFinite(T)&&(b.copy(h).multiplyScalar(x.y).addScaledVector(f,-g.y).multiplyScalar(T),_.copy(f).multiplyScalar(g.x).addScaledVector(h,-x.x).multiplyScalar(T),c[m].add(b),c[y].add(b),c[P].add(b),l[m].add(_),l[y].add(_),l[P].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let m=0,y=R.length;m<y;++m){const P=R[m],T=P.start,C=P.count;for(let M=T,Y=T+C;M<Y;M+=3)v(e.getX(M+0),e.getX(M+1),e.getX(M+2))}const N=new j,L=new j,U=new j,F=new j;function A(m){U.fromBufferAttribute(r,m),F.copy(U);const y=c[m];N.copy(y),N.sub(U.multiplyScalar(U.dot(y))).normalize(),L.crossVectors(F,y);const T=L.dot(l[m])<0?-1:1;o.setXYZW(m,N.x,N.y,N.z,T)}for(let m=0,y=R.length;m<y;++m){const P=R[m],T=P.start,C=P.count;for(let M=T,Y=T+C;M<Y;M+=3)A(e.getX(M+0)),A(e.getX(M+1)),A(e.getX(M+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);const r=new j,s=new j,o=new j,c=new j,l=new j,u=new j,h=new j,f=new j;if(e)for(let d=0,g=e.count;d<g;d+=3){const x=e.getX(d+0),b=e.getX(d+1),_=e.getX(d+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,b),o.fromBufferAttribute(t,_),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,b),u.fromBufferAttribute(n,_),c.add(h),l.add(h),u.add(h),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(_,u.x,u.y,u.z)}else for(let d=0,g=t.count;d<g;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),f.subVectors(r,s),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(c,l){const u=c.array,h=c.itemSize,f=c.normalized,d=new u.constructor(l.length*h);let g=0,x=0;for(let b=0,_=l.length;b<_;b++){c.isInterleavedBufferAttribute?g=l[b]*c.data.stride+c.offset:g=l[b]*h;for(let v=0;v<h;v++)d[x++]=u[g++]}return new Xn(d,h,f)}if(this.index===null)return nt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yn,n=this.index.array,r=this.attributes;for(const c in r){const l=r[c],u=e(l,n);t.setAttribute(c,u)}const s=this.morphAttributes;for(const c in s){const l=[],u=s[c];for(let h=0,f=u.length;h<f;h++){const d=u[h],g=e(d,n);l.push(g)}t.morphAttributes[c]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let c=0,l=o.length;c<l;c++){const u=o[c];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const u=n[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let f=0,d=u.length;f<d;f++){const g=u[f];h.push(g.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(t))}const s=e.morphAttributes;for(const u in s){const h=[],f=s[u];for(let d=0,g=f.length;d<g;d++)h.push(f[d].clone(t));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,h=o.length;u<h;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Y0=0;class Qo extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=Ko(),this.name="",this.type="Material",this.blending=Rs,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cu,this.blendDst=lu,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=us,this.stencilZFail=us,this.stencilZPass=us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){nt(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){nt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(n.blending=this.blending),this.side!==pr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cu&&(n.blendSrc=this.blendSrc),this.blendDst!==lu&&(n.blendDst=this.blendDst),this.blendEquation!==Vr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const c in s){const l=s[c];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Si=new j,Fl=new j,Ca=new j,er=new j,Vl=new j,Pa=new j,kl=new j;class ng{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Fl.copy(e).add(t).multiplyScalar(.5),Ca.copy(t).sub(e).normalize(),er.copy(this.origin).sub(Fl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Ca),c=er.dot(this.direction),l=-er.dot(Ca),u=er.lengthSq(),h=Math.abs(1-o*o);let f,d,g,x;if(h>0)if(f=o*l-c,d=o*c-l,x=s*h,f>=0)if(d>=-x)if(d<=x){const b=1/h;f*=b,d*=b,g=f*(f+o*d+2*c)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+c)),g=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+c)),g=-f*f+d*(d+2*l)+u;else d<=-x?(f=Math.max(0,-(-o*s+c)),d=f>0?-s:Math.min(Math.max(-s,-l),s),g=-f*f+d*(d+2*l)+u):d<=x?(f=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+u):(f=Math.max(0,-(o*s+c)),d=f>0?s:Math.min(Math.max(-s,-l),s),g=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+c)),g=-f*f+d*(d+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Fl).addScaledVector(Ca,d),g}intersectSphere(e,t){Si.subVectors(e.center,this.origin);const n=Si.dot(this.direction),r=Si.dot(Si)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),c=n-o,l=n+o;return l<0?null:c<0?this.at(l,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,c,l;const u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(n=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(n=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(c=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(c=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||c>r)||((c>n||n!==n)&&(n=c),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,n,r,s){Vl.subVectors(t,e),Pa.subVectors(n,e),kl.crossVectors(Vl,Pa);let o=this.direction.dot(kl),c;if(o>0){if(r)return null;c=1}else if(o<0)c=-1,o=-o;else return null;er.subVectors(this.origin,e);const l=c*this.direction.dot(Pa.crossVectors(er,Pa));if(l<0)return null;const u=c*this.direction.dot(Vl.cross(er));if(u<0||l+u>o)return null;const h=-c*er.dot(kl);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ig extends Qo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Nm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Af=new Bt,Dr=new ng,Da=new kc,Mf=new j,La=new j,Na=new j,Ua=new j,Bl=new j,Oa=new j,wf=new j,Fa=new j;class Fi extends xn{constructor(e=new Yn,t=new ig){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(s&&c){Oa.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const h=c[l],f=s[l];h!==0&&(Bl.fromBufferAttribute(f,e),o?Oa.addScaledVector(Bl,h):Oa.addScaledVector(Bl.sub(t),h))}t.add(Oa)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(s),Dr.copy(e.ray).recast(e.near),!(Da.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(Da,Mf)===null||Dr.origin.distanceToSquared(Mf)>(e.far-e.near)**2))&&(Af.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(Af),!(n.boundingBox!==null&&Dr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Dr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,c=s.index,l=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,d=s.groups,g=s.drawRange;if(c!==null)if(Array.isArray(o))for(let x=0,b=d.length;x<b;x++){const _=d[x],v=o[_.materialIndex],R=Math.max(_.start,g.start),N=Math.min(c.count,Math.min(_.start+_.count,g.start+g.count));for(let L=R,U=N;L<U;L+=3){const F=c.getX(L),A=c.getX(L+1),m=c.getX(L+2);r=Va(this,v,e,n,u,h,f,F,A,m),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const x=Math.max(0,g.start),b=Math.min(c.count,g.start+g.count);for(let _=x,v=b;_<v;_+=3){const R=c.getX(_),N=c.getX(_+1),L=c.getX(_+2);r=Va(this,o,e,n,u,h,f,R,N,L),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,b=d.length;x<b;x++){const _=d[x],v=o[_.materialIndex],R=Math.max(_.start,g.start),N=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let L=R,U=N;L<U;L+=3){const F=L,A=L+1,m=L+2;r=Va(this,v,e,n,u,h,f,F,A,m),r&&(r.faceIndex=Math.floor(L/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const x=Math.max(0,g.start),b=Math.min(l.count,g.start+g.count);for(let _=x,v=b;_<v;_+=3){const R=_,N=_+1,L=_+2;r=Va(this,o,e,n,u,h,f,R,N,L),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function Q0(i,e,t,n,r,s,o,c){let l;if(e.side===En?l=n.intersectTriangle(o,s,r,!0,c):l=n.intersectTriangle(r,s,o,e.side===pr,c),l===null)return null;Fa.copy(c),Fa.applyMatrix4(i.matrixWorld);const u=t.ray.origin.distanceTo(Fa);return u<t.near||u>t.far?null:{distance:u,point:Fa.clone(),object:i}}function Va(i,e,t,n,r,s,o,c,l,u){i.getVertexPosition(c,La),i.getVertexPosition(l,Na),i.getVertexPosition(u,Ua);const h=Q0(i,e,t,n,La,Na,Ua,wf);if(h){const f=new j;Gn.getBarycoord(wf,La,Na,Ua,f),r&&(h.uv=Gn.getInterpolatedAttribute(r,c,l,u,f,new bt)),s&&(h.uv1=Gn.getInterpolatedAttribute(s,c,l,u,f,new bt)),o&&(h.normal=Gn.getInterpolatedAttribute(o,c,l,u,f,new j),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:c,b:l,c:u,normal:new j,materialIndex:0};Gn.getNormal(La,Na,Ua,d.normal),h.face=d,h.barycoord=f}return h}class J0 extends mn{constructor(e=null,t=1,n=1,r,s,o,c,l,u=rn,h=rn,f,d){super(null,o,c,l,u,h,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zl=new j,Z0=new j,ey=new st;class Or{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=zl.subVectors(n,t).cross(Z0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(zl),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ey.getNormalMatrix(e),r=this.coplanarPoint(zl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Lr=new kc,ty=new bt(.5,.5),ka=new j;class rg{constructor(e=new Or,t=new Or,n=new Or,r=new Or,s=new Or,o=new Or){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(s),c[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ii,n=!1){const r=this.planes,s=e.elements,o=s[0],c=s[1],l=s[2],u=s[3],h=s[4],f=s[5],d=s[6],g=s[7],x=s[8],b=s[9],_=s[10],v=s[11],R=s[12],N=s[13],L=s[14],U=s[15];if(r[0].setComponents(u-o,g-h,v-x,U-R).normalize(),r[1].setComponents(u+o,g+h,v+x,U+R).normalize(),r[2].setComponents(u+c,g+f,v+b,U+N).normalize(),r[3].setComponents(u-c,g-f,v-b,U-N).normalize(),n)r[4].setComponents(l,d,_,L).normalize(),r[5].setComponents(u-l,g-d,v-_,U-L).normalize();else if(r[4].setComponents(u-l,g-d,v-_,U-L).normalize(),t===ii)r[5].setComponents(u+l,g+d,v+_,U+L).normalize();else if(t===gc)r[5].setComponents(l,d,_,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Lr)}intersectsSprite(e){Lr.center.set(0,0,0);const t=ty.distanceTo(e.center);return Lr.radius=.7071067811865476+t,Lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Lr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ka.x=r.normal.x>0?e.max.x:e.min.x,ka.y=r.normal.y>0?e.max.y:e.min.y,ka.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sg extends Qo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bf=new Bt,Ju=new ng,Ba=new kc,za=new j;class ny extends xn{constructor(e=new Yn,t=new sg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(r),Ba.radius+=s,e.ray.intersectsSphere(Ba)===!1)return;bf.copy(r).invert(),Ju.copy(e.ray).applyMatrix4(bf);const c=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=c*c,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,b=g;x<b;x++){const _=u.getX(x);za.fromBufferAttribute(f,_),If(za,_,l,r,e,t,this)}}else{const d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,b=g;x<b;x++)za.fromBufferAttribute(f,x),If(za,x,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}}function If(i,e,t,n,r,s,o){const c=Ju.distanceSqToPoint(i);if(c<t){const l=new j;Ju.closestPointToPoint(i,l),l.applyMatrix4(n);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(c),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class og extends mn{constructor(e=[],t=Xr,n,r,s,o,c,l,u,h){super(e,t,n,r,s,o,c,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fo extends mn{constructor(e,t,n=hi,r,s,o,c=rn,l=rn,u,h=Ui,f=1){if(h!==Ui&&h!==zr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,o,c,l,h,n,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Oh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class iy extends Fo{constructor(e,t=hi,n=Xr,r,s,o=rn,c=rn,l,u=Ui){const h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,r,s,o,c,l,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ag extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Jo extends Yn{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const c=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],h=[],f=[];let d=0,g=0;x("z","y","x",-1,-1,n,t,e,o,s,0),x("z","y","x",1,-1,n,t,-e,o,s,1),x("x","z","y",1,1,e,n,t,r,o,2),x("x","z","y",1,-1,e,n,-t,r,o,3),x("x","y","z",1,-1,e,t,n,r,s,4),x("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ci(u,3)),this.setAttribute("normal",new Ci(h,3)),this.setAttribute("uv",new Ci(f,2));function x(b,_,v,R,N,L,U,F,A,m,y){const P=L/A,T=U/m,C=L/2,M=U/2,Y=F/2,q=A+1,J=m+1;let H=0,le=0;const ae=new j;for(let Ae=0;Ae<J;Ae++){const Pe=Ae*T-M;for(let Me=0;Me<q;Me++){const Qe=Me*P-C;ae[b]=Qe*R,ae[_]=Pe*N,ae[v]=Y,u.push(ae.x,ae.y,ae.z),ae[b]=0,ae[_]=0,ae[v]=F>0?1:-1,h.push(ae.x,ae.y,ae.z),f.push(Me/A),f.push(1-Ae/m),H+=1}}for(let Ae=0;Ae<m;Ae++)for(let Pe=0;Pe<A;Pe++){const Me=d+Pe+q*Ae,Qe=d+Pe+q*(Ae+1),Et=d+(Pe+1)+q*(Ae+1),xt=d+(Pe+1)+q*Ae;l.push(Me,Qe,xt),l.push(Qe,Et,xt),le+=6}c.addGroup(g,le,y),g+=le,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Bc extends Yn{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,c=Math.floor(n),l=Math.floor(r),u=c+1,h=l+1,f=e/c,d=t/l,g=[],x=[],b=[],_=[];for(let v=0;v<h;v++){const R=v*d-o;for(let N=0;N<u;N++){const L=N*f-s;x.push(L,-R,0),b.push(0,0,1),_.push(N/c),_.push(1-v/l)}}for(let v=0;v<l;v++)for(let R=0;R<c;R++){const N=R+u*v,L=R+u*(v+1),U=R+1+u*(v+1),F=R+1+u*v;g.push(N,L,F),g.push(L,U,F)}this.setIndex(g),this.setAttribute("position",new Ci(x,3)),this.setAttribute("normal",new Ci(b,3)),this.setAttribute("uv",new Ci(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bc(e.width,e.height,e.widthSegments,e.heightSegments)}}function Bs(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(nt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function pn(i){const e={};for(let t=0;t<i.length;t++){const n=Bs(i[t]);for(const r in n)e[r]=n[r]}return e}function ry(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cg(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const sy={clone:Bs,merge:pn};var oy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ay=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class di extends Qo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oy,this.fragmentShader=ay,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bs(e.uniforms),this.uniformsGroups=ry(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class cy extends di{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ly extends Qo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=y0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uy extends Qo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ga=new j,Ha=new Ks,Jn=new j;class lg extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ga,Ha,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Ha,Jn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Ga,Ha,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Ha,Jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const tr=new j,Rf=new bt,Cf=new bt;class Cn extends lg{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qu*2*Math.atan(Math.tan(vl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(tr.x,tr.y).multiplyScalar(-e/tr.z),tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(tr.x,tr.y).multiplyScalar(-e/tr.z)}getViewSize(e,t){return this.getViewBounds(e,Rf,Cf),t.subVectors(Cf,Rf)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vl*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/u,r*=o.width/l,n*=o.height/u}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ug extends lg{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,c=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,c-=h*this.view.offsetY,l=c-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,c,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xs=-90,Ss=1;class hy extends xn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Cn(xs,Ss,e,t);r.layers=this.layers,this.add(r);const s=new Cn(xs,Ss,e,t);s.layers=this.layers,this.add(s);const o=new Cn(xs,Ss,e,t);o.layers=this.layers,this.add(o);const c=new Cn(xs,Ss,e,t);c.layers=this.layers,this.add(c);const l=new Cn(xs,Ss,e,t);l.layers=this.layers,this.add(l);const u=new Cn(xs,Ss,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,c,l]=t;for(const u of t)this.remove(u);if(e===ii)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===gc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,c,l,u,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,3,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,r),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,g),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}}class dy extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Pf(i,e,t,n){const r=fy(n);switch(t){case $m:return i*e;case Km:return i*e/r.components*r.byteLength;case Ph:return i*e/r.components*r.byteLength;case Vs:return i*e*2/r.components*r.byteLength;case Dh:return i*e*2/r.components*r.byteLength;case jm:return i*e*3/r.components*r.byteLength;case Hn:return i*e*4/r.components*r.byteLength;case Lh:return i*e*4/r.components*r.byteLength;case ec:case tc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case nc:case ic:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Eu:case Su:return Math.max(i,16)*Math.max(e,8)/4;case yu:case xu:return Math.max(i,8)*Math.max(e,8)/2;case Tu:case Au:case wu:case bu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Mu:case Iu:case Ru:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Cu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Du:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Lu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Nu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Uu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ou:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Fu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Vu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ku:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Bu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case zu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Gu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Hu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Wu:case qu:case Xu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case $u:case ju:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ku:case Yu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fy(i){switch(i){case Pn:case Hm:return{byteLength:1,components:1};case Uo:case Wm:case Ni:return{byteLength:2,components:1};case Rh:case Ch:return{byteLength:2,components:4};case hi:case Ih:case ni:return{byteLength:4,components:1};case qm:case Xm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bh}}));typeof window<"u"&&(window.__THREE__?nt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hg(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function py(i){const e=new WeakMap;function t(c,l){const u=c.array,h=c.usage,f=u.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,u,h),c.onUploadCallback();let g;if(u instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)g=i.HALF_FLOAT;else if(u instanceof Uint16Array)c.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=i.SHORT;else if(u instanceof Uint32Array)g=i.UNSIGNED_INT;else if(u instanceof Int32Array)g=i.INT;else if(u instanceof Int8Array)g=i.BYTE;else if(u instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:f}}function n(c,l,u){const h=l.array,f=l.updateRanges;if(i.bindBuffer(u,c),f.length===0)i.bufferSubData(u,0,h);else{f.sort((g,x)=>g.start-x.start);let d=0;for(let g=1;g<f.length;g++){const x=f[d],b=f[g];b.start<=x.start+x.count+1?x.count=Math.max(x.count,b.start+b.count-x.start):(++d,f[d]=b)}f.length=d+1;for(let g=0,x=f.length;g<x;g++){const b=f[g];i.bufferSubData(u,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const l=e.get(c);l&&(i.deleteBuffer(l.buffer),e.delete(c))}function o(c,l){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const h=e.get(c);(!h||h.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const u=e.get(c);if(u===void 0)e.set(c,t(c,l));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,c,l),u.version=c.version}}return{get:r,remove:s,update:o}}var my=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_y=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ey=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Sy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ty=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ay=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,My=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,by=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Iy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ry=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ny=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Oy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Vy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ky=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,By=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$y=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,jy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ky=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,iE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,oE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,aE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,cE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_E=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,TE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,AE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ME=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,IE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,PE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,LE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,NE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,UE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,VE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,WE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$E=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,KE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,QE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,JE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ZE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,ex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,nx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ix=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ox=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ax=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const px=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_x=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Sx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ix=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Px=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ux=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ox=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Hx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$x=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:my,alphahash_pars_fragment:gy,alphamap_fragment:_y,alphamap_pars_fragment:vy,alphatest_fragment:yy,alphatest_pars_fragment:Ey,aomap_fragment:xy,aomap_pars_fragment:Sy,batching_pars_vertex:Ty,batching_vertex:Ay,begin_vertex:My,beginnormal_vertex:wy,bsdfs:by,iridescence_fragment:Iy,bumpmap_pars_fragment:Ry,clipping_planes_fragment:Cy,clipping_planes_pars_fragment:Py,clipping_planes_pars_vertex:Dy,clipping_planes_vertex:Ly,color_fragment:Ny,color_pars_fragment:Uy,color_pars_vertex:Oy,color_vertex:Fy,common:Vy,cube_uv_reflection_fragment:ky,defaultnormal_vertex:By,displacementmap_pars_vertex:zy,displacementmap_vertex:Gy,emissivemap_fragment:Hy,emissivemap_pars_fragment:Wy,colorspace_fragment:qy,colorspace_pars_fragment:Xy,envmap_fragment:$y,envmap_common_pars_fragment:jy,envmap_pars_fragment:Ky,envmap_pars_vertex:Yy,envmap_physical_pars_fragment:aE,envmap_vertex:Qy,fog_vertex:Jy,fog_pars_vertex:Zy,fog_fragment:eE,fog_pars_fragment:tE,gradientmap_pars_fragment:nE,lightmap_pars_fragment:iE,lights_lambert_fragment:rE,lights_lambert_pars_fragment:sE,lights_pars_begin:oE,lights_toon_fragment:cE,lights_toon_pars_fragment:lE,lights_phong_fragment:uE,lights_phong_pars_fragment:hE,lights_physical_fragment:dE,lights_physical_pars_fragment:fE,lights_fragment_begin:pE,lights_fragment_maps:mE,lights_fragment_end:gE,logdepthbuf_fragment:_E,logdepthbuf_pars_fragment:vE,logdepthbuf_pars_vertex:yE,logdepthbuf_vertex:EE,map_fragment:xE,map_pars_fragment:SE,map_particle_fragment:TE,map_particle_pars_fragment:AE,metalnessmap_fragment:ME,metalnessmap_pars_fragment:wE,morphinstance_vertex:bE,morphcolor_vertex:IE,morphnormal_vertex:RE,morphtarget_pars_vertex:CE,morphtarget_vertex:PE,normal_fragment_begin:DE,normal_fragment_maps:LE,normal_pars_fragment:NE,normal_pars_vertex:UE,normal_vertex:OE,normalmap_pars_fragment:FE,clearcoat_normal_fragment_begin:VE,clearcoat_normal_fragment_maps:kE,clearcoat_pars_fragment:BE,iridescence_pars_fragment:zE,opaque_fragment:GE,packing:HE,premultiplied_alpha_fragment:WE,project_vertex:qE,dithering_fragment:XE,dithering_pars_fragment:$E,roughnessmap_fragment:jE,roughnessmap_pars_fragment:KE,shadowmap_pars_fragment:YE,shadowmap_pars_vertex:QE,shadowmap_vertex:JE,shadowmask_pars_fragment:ZE,skinbase_vertex:ex,skinning_pars_vertex:tx,skinning_vertex:nx,skinnormal_vertex:ix,specularmap_fragment:rx,specularmap_pars_fragment:sx,tonemapping_fragment:ox,tonemapping_pars_fragment:ax,transmission_fragment:cx,transmission_pars_fragment:lx,uv_pars_fragment:ux,uv_pars_vertex:hx,uv_vertex:dx,worldpos_vertex:fx,background_vert:px,background_frag:mx,backgroundCube_vert:gx,backgroundCube_frag:_x,cube_vert:vx,cube_frag:yx,depth_vert:Ex,depth_frag:xx,distance_vert:Sx,distance_frag:Tx,equirect_vert:Ax,equirect_frag:Mx,linedashed_vert:wx,linedashed_frag:bx,meshbasic_vert:Ix,meshbasic_frag:Rx,meshlambert_vert:Cx,meshlambert_frag:Px,meshmatcap_vert:Dx,meshmatcap_frag:Lx,meshnormal_vert:Nx,meshnormal_frag:Ux,meshphong_vert:Ox,meshphong_frag:Fx,meshphysical_vert:Vx,meshphysical_frag:kx,meshtoon_vert:Bx,meshtoon_frag:zx,points_vert:Gx,points_frag:Hx,shadow_vert:Wx,shadow_frag:qx,sprite_vert:Xx,sprite_frag:$x},Se={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},ti={basic:{uniforms:pn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:pn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Mt(0)},envMapIntensity:{value:1}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:pn([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:pn([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:pn([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Mt(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:pn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:pn([Se.points,Se.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:pn([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:pn([Se.common,Se.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:pn([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:pn([Se.sprite,Se.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distance:{uniforms:pn([Se.common,Se.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distance_vert,fragmentShader:at.distance_frag},shadow:{uniforms:pn([Se.lights,Se.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};ti.physical={uniforms:pn([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const Wa={r:0,b:0,g:0},Nr=new Oi,jx=new Bt;function Kx(i,e,t,n,r,s){const o=new Mt(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function g(R){let N=R.isScene===!0?R.background:null;if(N&&N.isTexture){const L=R.backgroundBlurriness>0;N=e.get(N,L)}return N}function x(R){let N=!1;const L=g(R);L===null?_(o,c):L&&L.isColor&&(_(L,1),N=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?t.buffers.color.setClear(0,0,0,1,s):U==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||N)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(R,N){const L=g(N);L&&(L.isCubeTexture||L.mapping===Vc)?(u===void 0&&(u=new Fi(new Jo(1,1,1),new di({name:"BackgroundCubeMaterial",uniforms:Bs(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,F,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),Nr.copy(N.backgroundRotation),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jx.makeRotationFromEuler(Nr)),u.material.toneMapped=vt.getTransfer(L.colorSpace)!==At,(h!==L||f!==L.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=L,f=L.version,d=i.toneMapping),u.layers.enableAll(),R.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(l===void 0&&(l=new Fi(new Bc(2,2),new di({name:"BackgroundMaterial",uniforms:Bs(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=L,l.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,l.material.toneMapped=vt.getTransfer(L.colorSpace)!==At,L.matrixAutoUpdate===!0&&L.updateMatrix(),l.material.uniforms.uvTransform.value.copy(L.matrix),(h!==L||f!==L.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=L,f=L.version,d=i.toneMapping),l.layers.enableAll(),R.unshift(l,l.geometry,l.material,0,0,null))}function _(R,N){R.getRGB(Wa,cg(i)),t.buffers.color.setClear(Wa.r,Wa.g,Wa.b,N,s)}function v(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(R,N=1){o.set(R),c=N,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(R){c=R,_(o,c)},render:x,addToRenderList:b,dispose:v}}function Yx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,o=!1;function c(T,C,M,Y,q){let J=!1;const H=f(T,Y,M,C);s!==H&&(s=H,u(s.object)),J=g(T,Y,M,q),J&&x(T,Y,M,q),q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,L(T,C,M,Y),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return i.createVertexArray()}function u(T){return i.bindVertexArray(T)}function h(T){return i.deleteVertexArray(T)}function f(T,C,M,Y){const q=Y.wireframe===!0;let J=n[C.id];J===void 0&&(J={},n[C.id]=J);const H=T.isInstancedMesh===!0?T.id:0;let le=J[H];le===void 0&&(le={},J[H]=le);let ae=le[M.id];ae===void 0&&(ae={},le[M.id]=ae);let Ae=ae[q];return Ae===void 0&&(Ae=d(l()),ae[q]=Ae),Ae}function d(T){const C=[],M=[],Y=[];for(let q=0;q<t;q++)C[q]=0,M[q]=0,Y[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:M,attributeDivisors:Y,object:T,attributes:{},index:null}}function g(T,C,M,Y){const q=s.attributes,J=C.attributes;let H=0;const le=M.getAttributes();for(const ae in le)if(le[ae].location>=0){const Pe=q[ae];let Me=J[ae];if(Me===void 0&&(ae==="instanceMatrix"&&T.instanceMatrix&&(Me=T.instanceMatrix),ae==="instanceColor"&&T.instanceColor&&(Me=T.instanceColor)),Pe===void 0||Pe.attribute!==Me||Me&&Pe.data!==Me.data)return!0;H++}return s.attributesNum!==H||s.index!==Y}function x(T,C,M,Y){const q={},J=C.attributes;let H=0;const le=M.getAttributes();for(const ae in le)if(le[ae].location>=0){let Pe=J[ae];Pe===void 0&&(ae==="instanceMatrix"&&T.instanceMatrix&&(Pe=T.instanceMatrix),ae==="instanceColor"&&T.instanceColor&&(Pe=T.instanceColor));const Me={};Me.attribute=Pe,Pe&&Pe.data&&(Me.data=Pe.data),q[ae]=Me,H++}s.attributes=q,s.attributesNum=H,s.index=Y}function b(){const T=s.newAttributes;for(let C=0,M=T.length;C<M;C++)T[C]=0}function _(T){v(T,0)}function v(T,C){const M=s.newAttributes,Y=s.enabledAttributes,q=s.attributeDivisors;M[T]=1,Y[T]===0&&(i.enableVertexAttribArray(T),Y[T]=1),q[T]!==C&&(i.vertexAttribDivisor(T,C),q[T]=C)}function R(){const T=s.newAttributes,C=s.enabledAttributes;for(let M=0,Y=C.length;M<Y;M++)C[M]!==T[M]&&(i.disableVertexAttribArray(M),C[M]=0)}function N(T,C,M,Y,q,J,H){H===!0?i.vertexAttribIPointer(T,C,M,q,J):i.vertexAttribPointer(T,C,M,Y,q,J)}function L(T,C,M,Y){b();const q=Y.attributes,J=M.getAttributes(),H=C.defaultAttributeValues;for(const le in J){const ae=J[le];if(ae.location>=0){let Ae=q[le];if(Ae===void 0&&(le==="instanceMatrix"&&T.instanceMatrix&&(Ae=T.instanceMatrix),le==="instanceColor"&&T.instanceColor&&(Ae=T.instanceColor)),Ae!==void 0){const Pe=Ae.normalized,Me=Ae.itemSize,Qe=e.get(Ae);if(Qe===void 0)continue;const Et=Qe.buffer,xt=Qe.type,V=Qe.bytesPerElement,G=xt===i.INT||xt===i.UNSIGNED_INT||Ae.gpuType===Ih;if(Ae.isInterleavedBufferAttribute){const Q=Ae.data,re=Q.stride,he=Ae.offset;if(Q.isInstancedInterleavedBuffer){for(let fe=0;fe<ae.locationSize;fe++)v(ae.location+fe,Q.meshPerAttribute);T.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let fe=0;fe<ae.locationSize;fe++)_(ae.location+fe);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let fe=0;fe<ae.locationSize;fe++)N(ae.location+fe,Me/ae.locationSize,xt,Pe,re*V,(he+Me/ae.locationSize*fe)*V,G)}else{if(Ae.isInstancedBufferAttribute){for(let Q=0;Q<ae.locationSize;Q++)v(ae.location+Q,Ae.meshPerAttribute);T.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Q=0;Q<ae.locationSize;Q++)_(ae.location+Q);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let Q=0;Q<ae.locationSize;Q++)N(ae.location+Q,Me/ae.locationSize,xt,Pe,Me*V,Me/ae.locationSize*Q*V,G)}}else if(H!==void 0){const Pe=H[le];if(Pe!==void 0)switch(Pe.length){case 2:i.vertexAttrib2fv(ae.location,Pe);break;case 3:i.vertexAttrib3fv(ae.location,Pe);break;case 4:i.vertexAttrib4fv(ae.location,Pe);break;default:i.vertexAttrib1fv(ae.location,Pe)}}}}R()}function U(){y();for(const T in n){const C=n[T];for(const M in C){const Y=C[M];for(const q in Y){const J=Y[q];for(const H in J)h(J[H].object),delete J[H];delete Y[q]}}delete n[T]}}function F(T){if(n[T.id]===void 0)return;const C=n[T.id];for(const M in C){const Y=C[M];for(const q in Y){const J=Y[q];for(const H in J)h(J[H].object),delete J[H];delete Y[q]}}delete n[T.id]}function A(T){for(const C in n){const M=n[C];for(const Y in M){const q=M[Y];if(q[T.id]===void 0)continue;const J=q[T.id];for(const H in J)h(J[H].object),delete J[H];delete q[T.id]}}}function m(T){for(const C in n){const M=n[C],Y=T.isInstancedMesh===!0?T.id:0,q=M[Y];if(q!==void 0){for(const J in q){const H=q[J];for(const le in H)h(H[le].object),delete H[le];delete q[J]}delete M[Y],Object.keys(M).length===0&&delete n[C]}}}function y(){P(),o=!0,s!==r&&(s=r,u(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:c,reset:y,resetDefaultState:P,dispose:U,releaseStatesOfGeometry:F,releaseStatesOfObject:m,releaseStatesOfProgram:A,initAttributes:b,enableAttribute:_,disableUnusedAttributes:R}}function Qx(i,e,t){let n;function r(u){n=u}function s(u,h){i.drawArrays(n,u,h),t.update(h,n,1)}function o(u,h,f){f!==0&&(i.drawArraysInstanced(n,u,h,f),t.update(h,n,f))}function c(u,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x];t.update(g,n,1)}function l(u,h,f,d){if(f===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let x=0;x<u.length;x++)o(u[x],h[x],d[x]);else{g.multiDrawArraysInstancedWEBGL(n,u,0,h,0,d,0,f);let x=0;for(let b=0;b<f;b++)x+=h[b]*d[b];t.update(x,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=c,this.renderMultiDrawInstances=l}function Jx(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Hn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(A){const m=A===Ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Pn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ni&&!m)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const h=l(u);h!==u&&(nt("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),N=i.getParameter(i.MAX_VARYING_VECTORS),L=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=i.getParameter(i.MAX_SAMPLES),F=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:c,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:g,maxVertexTextures:x,maxTextureSize:b,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:R,maxVaryings:N,maxFragmentUniforms:L,maxSamples:U,samples:F}}function Zx(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Or,c=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const g=f.length!==0||d||n!==0||r;return r=d,n=f.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,g){const x=f.clippingPlanes,b=f.clipIntersection,_=f.clipShadows,v=i.get(f);if(!r||x===null||x.length===0||s&&!_)s?h(null):u();else{const R=s?0:n,N=R*4;let L=v.clippingState||null;l.value=L,L=h(x,d,N,g);for(let U=0;U!==N;++U)L[U]=t[U];v.clippingState=L,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=R}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,g,x){const b=f!==null?f.length:0;let _=null;if(b!==0){if(_=l.value,x!==!0||_===null){const v=g+b*4,R=d.matrixWorldInverse;c.getNormalMatrix(R),(_===null||_.length<v)&&(_=new Float32Array(v));for(let N=0,L=g;N!==b;++N,L+=4)o.copy(f[N]).applyMatrix4(R,c),o.normal.toArray(_,L),_[L+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,_}}const ar=4,Df=[.125,.215,.35,.446,.526,.582],kr=20,eS=256,yo=new ug,Lf=new Mt;let Gl=null,Hl=0,Wl=0,ql=!1;const tS=new j;class Nf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:o=256,position:c=tS}=s;Gl=this._renderer.getRenderTarget(),Hl=this._renderer.getActiveCubeFace(),Wl=this._renderer.getActiveMipmapLevel(),ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,c),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ff(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Gl,Hl,Wl),this._renderer.xr.enabled=ql,e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xr||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gl=this._renderer.getRenderTarget(),Hl=this._renderer.getActiveCubeFace(),Wl=this._renderer.getActiveMipmapLevel(),ql=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Ni,format:Hn,colorSpace:ks,depthBuffer:!1},r=Uf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uf(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=nS(s)),this._blurMaterial=rS(s,e,t),this._ggxMaterial=iS(s,e,t)}return r}_compileMaterial(e){const t=new Fi(new Yn,e);this._renderer.compile(t,yo)}_sceneToCubeUV(e,t,n,r,s){const l=new Cn(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,g=f.toneMapping;f.getClearColor(Lf),f.toneMapping=ri,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fi(new Jo,new ig({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,_=b.material;let v=!1;const R=e.background;R?R.isColor&&(_.color.copy(R),e.background=null,v=!0):(_.color.copy(Lf),v=!0);for(let N=0;N<6;N++){const L=N%3;L===0?(l.up.set(0,u[N],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[N],s.y,s.z)):L===1?(l.up.set(0,0,u[N]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[N],s.z)):(l.up.set(0,u[N],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[N]));const U=this._cubeSize;Ts(r,L*U,N>2?U:0,U,U),f.setRenderTarget(r),v&&f.render(b,l),f.render(e,l)}f.toneMapping=g,f.autoClear=d,e.background=R}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Xr||e.mapping===Fs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ff()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Of());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const c=s.uniforms;c.envMap.value=e;const l=this._cubeSize;Ts(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,yo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,c=this._lodMeshes[n];c.material=o;const l=o.uniforms,u=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(u*u-h*h),d=0+u*1.25,g=f*d,{_lodMax:x}=this,b=this._sizeLods[n],_=3*b*(n>x-ar?n-x+ar:0),v=4*(this._cubeSize-b);l.envMap.value=e.texture,l.roughness.value=g,l.mipInt.value=x-t,Ts(s,_,v,3*b,2*b),r.setRenderTarget(s),r.render(c,yo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-n,Ts(e,_,v,3*b,2*b),r.setRenderTarget(e),r.render(c,yo)}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,c){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&yt("blur direction must be either latitudinal or longitudinal!");const h=3,f=this._lodMeshes[r];f.material=u;const d=u.uniforms,g=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*kr-1),b=s/x,_=isFinite(s)?1+Math.floor(h*b):kr;_>kr&&nt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${kr}`);const v=[];let R=0;for(let A=0;A<kr;++A){const m=A/b,y=Math.exp(-m*m/2);v.push(y),A===0?R+=y:A<_&&(R+=2*y)}for(let A=0;A<v.length;A++)v[A]=v[A]/R;d.envMap.value=e.texture,d.samples.value=_,d.weights.value=v,d.latitudinal.value=o==="latitudinal",c&&(d.poleAxis.value=c);const{_lodMax:N}=this;d.dTheta.value=x,d.mipInt.value=N-n;const L=this._sizeLods[r],U=3*L*(r>N-ar?r-N+ar:0),F=4*(this._cubeSize-L);Ts(t,U,F,3*L,2*L),l.setRenderTarget(t),l.render(f,yo)}}function nS(i){const e=[],t=[],n=[];let r=i;const s=i-ar+1+Df.length;for(let o=0;o<s;o++){const c=Math.pow(2,r);e.push(c);let l=1/c;o>i-ar?l=Df[o-i+ar-1]:o===0&&(l=0),t.push(l);const u=1/(c-2),h=-u,f=1+u,d=[h,h,f,h,f,f,h,h,f,f,h,f],g=6,x=6,b=3,_=2,v=1,R=new Float32Array(b*x*g),N=new Float32Array(_*x*g),L=new Float32Array(v*x*g);for(let F=0;F<g;F++){const A=F%3*2/3-1,m=F>2?0:-1,y=[A,m,0,A+2/3,m,0,A+2/3,m+1,0,A,m,0,A+2/3,m+1,0,A,m+1,0];R.set(y,b*x*F),N.set(d,_*x*F);const P=[F,F,F,F,F,F];L.set(P,v*x*F)}const U=new Yn;U.setAttribute("position",new Xn(R,b)),U.setAttribute("uv",new Xn(N,_)),U.setAttribute("faceIndex",new Xn(L,v)),n.push(new Fi(U,null)),r>ar&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Uf(i,e,t){const n=new si(i,e,t);return n.texture.mapping=Vc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ts(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function iS(i,e,t){return new di({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:eS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function rS(i,e,t){const n=new Float32Array(kr),r=new j(0,1,0);return new di({name:"SphericalGaussianBlur",defines:{n:kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Of(){return new di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Ff(){return new di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function zc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class dg extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new og(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Jo(5,5,5),s=new di({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:Ii});s.uniforms.tEquirect.value=t;const o=new Fi(r,s),c=t.minFilter;return t.minFilter===Br&&(t.minFilter=dn),new hy(1,10,this).update(e,o),t.minFilter=c,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}function sS(i){let e=new WeakMap,t=new WeakMap,n=null;function r(d,g=!1){return d==null?null:g?o(d):s(d)}function s(d){if(d&&d.isTexture){const g=d.mapping;if(g===ml||g===gl)if(e.has(d)){const x=e.get(d).texture;return c(x,d.mapping)}else{const x=d.image;if(x&&x.height>0){const b=new dg(x.height);return b.fromEquirectangularTexture(i,d),e.set(d,b),d.addEventListener("dispose",u),c(b.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const g=d.mapping,x=g===ml||g===gl,b=g===Xr||g===Fs;if(x||b){let _=t.get(d);const v=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return n===null&&(n=new Nf(i)),_=x?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const R=d.image;return x&&R&&R.height>0||b&&R&&l(R)?(n===null&&(n=new Nf(i)),_=x?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",h),_.texture):null}}}return d}function c(d,g){return g===ml?d.mapping=Xr:g===gl&&(d.mapping=Fs),d}function l(d){let g=0;const x=6;for(let b=0;b<x;b++)d[b]!==void 0&&g++;return g===x}function u(d){const g=d.target;g.removeEventListener("dispose",u);const x=e.get(g);x!==void 0&&(e.delete(g),x.dispose())}function h(d){const g=d.target;g.removeEventListener("dispose",h);const x=t.get(g);x!==void 0&&(t.delete(g),x.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:f}}function oS(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&vc("WebGLRenderer: "+n+" extension not supported."),r}}}function aS(i,e,t,n){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",o),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function c(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER)}function u(f){const d=[],g=f.index,x=f.attributes.position;let b=0;if(x===void 0)return;if(g!==null){const R=g.array;b=g.version;for(let N=0,L=R.length;N<L;N+=3){const U=R[N+0],F=R[N+1],A=R[N+2];d.push(U,F,F,A,A,U)}}else{const R=x.array;b=x.version;for(let N=0,L=R.length/3-1;N<L;N+=3){const U=N+0,F=N+1,A=N+2;d.push(U,F,F,A,A,U)}}const _=new(x.count>=65535?tg:eg)(d,1);_.version=b;const v=s.get(f);v&&e.remove(v),s.set(f,_)}function h(f){const d=s.get(f);if(d){const g=f.index;g!==null&&d.version<g.version&&u(f)}else u(f);return s.get(f)}return{get:c,update:l,getWireframeAttribute:h}}function cS(i,e,t){let n;function r(d){n=d}let s,o;function c(d){s=d.type,o=d.bytesPerElement}function l(d,g){i.drawElements(n,g,s,d*o),t.update(g,n,1)}function u(d,g,x){x!==0&&(i.drawElementsInstanced(n,g,s,d*o,x),t.update(g,n,x))}function h(d,g,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,s,d,0,x);let _=0;for(let v=0;v<x;v++)_+=g[v];t.update(_,n,1)}function f(d,g,x,b){if(x===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<d.length;v++)u(d[v]/o,g[v],b[v]);else{_.multiDrawElementsInstancedWEBGL(n,g,0,s,d,0,b,0,x);let v=0;for(let R=0;R<x;R++)v+=g[R]*b[R];t.update(v,n,1)}}this.setMode=r,this.setIndex=c,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function lS(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,c){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=c*(s/3);break;case i.LINES:t.lines+=c*(s/2);break;case i.LINE_STRIP:t.lines+=c*(s-1);break;case i.LINE_LOOP:t.lines+=c*s;break;case i.POINTS:t.points+=c*s;break;default:yt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function uS(i,e,t){const n=new WeakMap,r=new kt;function s(o,c,l){const u=o.morphTargetInfluences,h=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,f=h!==void 0?h.length:0;let d=n.get(c);if(d===void 0||d.count!==f){let P=function(){m.dispose(),n.delete(c),c.removeEventListener("dispose",P)};var g=P;d!==void 0&&d.texture.dispose();const x=c.morphAttributes.position!==void 0,b=c.morphAttributes.normal!==void 0,_=c.morphAttributes.color!==void 0,v=c.morphAttributes.position||[],R=c.morphAttributes.normal||[],N=c.morphAttributes.color||[];let L=0;x===!0&&(L=1),b===!0&&(L=2),_===!0&&(L=3);let U=c.attributes.position.count*L,F=1;U>e.maxTextureSize&&(F=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const A=new Float32Array(U*F*4*f),m=new Qm(A,U,F,f);m.type=ni,m.needsUpdate=!0;const y=L*4;for(let T=0;T<f;T++){const C=v[T],M=R[T],Y=N[T],q=U*F*4*T;for(let J=0;J<C.count;J++){const H=J*y;x===!0&&(r.fromBufferAttribute(C,J),A[q+H+0]=r.x,A[q+H+1]=r.y,A[q+H+2]=r.z,A[q+H+3]=0),b===!0&&(r.fromBufferAttribute(M,J),A[q+H+4]=r.x,A[q+H+5]=r.y,A[q+H+6]=r.z,A[q+H+7]=0),_===!0&&(r.fromBufferAttribute(Y,J),A[q+H+8]=r.x,A[q+H+9]=r.y,A[q+H+10]=r.z,A[q+H+11]=Y.itemSize===4?r.w:1)}}d={count:f,texture:m,size:new bt(U,F)},n.set(c,d),c.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let x=0;for(let _=0;_<u.length;_++)x+=u[_];const b=c.morphTargetsRelative?1:1-x;l.getUniforms().setValue(i,"morphTargetBaseInfluence",b),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function hS(i,e,t,n,r){let s=new WeakMap;function o(u){const h=r.render.frame,f=u.geometry,d=e.get(u,f);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==h&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){const g=u.skeleton;s.get(g)!==h&&(g.update(),s.set(g,h))}return d}function c(){s=new WeakMap}function l(u){const h=u.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:c}}const dS={[Um]:"LINEAR_TONE_MAPPING",[Om]:"REINHARD_TONE_MAPPING",[Fm]:"CINEON_TONE_MAPPING",[Vm]:"ACES_FILMIC_TONE_MAPPING",[Bm]:"AGX_TONE_MAPPING",[zm]:"NEUTRAL_TONE_MAPPING",[km]:"CUSTOM_TONE_MAPPING"};function fS(i,e,t,n,r){const s=new si(e,t,{type:i,depthBuffer:n,stencilBuffer:r}),o=new si(e,t,{type:Ni,depthBuffer:!1,stencilBuffer:!1}),c=new Yn;c.setAttribute("position",new Ci([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ci([0,2,0,0,2,0],2));const l=new cy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Fi(c,l),h=new ug(-1,1,1,-1,0,1);let f=null,d=null,g=!1,x,b=null,_=[],v=!1;this.setSize=function(R,N){s.setSize(R,N),o.setSize(R,N);for(let L=0;L<_.length;L++){const U=_[L];U.setSize&&U.setSize(R,N)}},this.setEffects=function(R){_=R,v=_.length>0&&_[0].isRenderPass===!0;const N=s.width,L=s.height;for(let U=0;U<_.length;U++){const F=_[U];F.setSize&&F.setSize(N,L)}},this.begin=function(R,N){if(g||R.toneMapping===ri&&_.length===0)return!1;if(b=N,N!==null){const L=N.width,U=N.height;(s.width!==L||s.height!==U)&&this.setSize(L,U)}return v===!1&&R.setRenderTarget(s),x=R.toneMapping,R.toneMapping=ri,!0},this.hasRenderPass=function(){return v},this.end=function(R,N){R.toneMapping=x,g=!0;let L=s,U=o;for(let F=0;F<_.length;F++){const A=_[F];if(A.enabled!==!1&&(A.render(R,U,L,N),A.needsSwap!==!1)){const m=L;L=U,U=m}}if(f!==R.outputColorSpace||d!==R.toneMapping){f=R.outputColorSpace,d=R.toneMapping,l.defines={},vt.getTransfer(f)===At&&(l.defines.SRGB_TRANSFER="");const F=dS[d];F&&(l.defines[F]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=L.texture,R.setRenderTarget(b),R.render(u,h),b=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){s.dispose(),o.dispose(),c.dispose(),l.dispose()}}const fg=new mn,Zu=new Fo(1,1),pg=new Qm,mg=new V0,gg=new og,Vf=[],kf=[],Bf=new Float32Array(16),zf=new Float32Array(9),Gf=new Float32Array(4);function Ys(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Vf[r];if(s===void 0&&(s=new Float32Array(r),Vf[r]=s),e!==0){n.toArray(s,0);for(let o=1,c=0;o!==e;++o)c+=t,i[o].toArray(s,c)}return s}function Kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Gc(i,e){let t=kf[e];t===void 0&&(t=new Int32Array(e),kf[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function pS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function mS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2fv(this.addr,e),Yt(t,e)}}function gS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;i.uniform3fv(this.addr,e),Yt(t,e)}}function _S(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4fv(this.addr,e),Yt(t,e)}}function vS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Yt(t,e)}else{if(Kt(t,n))return;Gf.set(n),i.uniformMatrix2fv(this.addr,!1,Gf),Yt(t,n)}}function yS(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Yt(t,e)}else{if(Kt(t,n))return;zf.set(n),i.uniformMatrix3fv(this.addr,!1,zf),Yt(t,n)}}function ES(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Yt(t,e)}else{if(Kt(t,n))return;Bf.set(n),i.uniformMatrix4fv(this.addr,!1,Bf),Yt(t,n)}}function xS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function SS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2iv(this.addr,e),Yt(t,e)}}function TS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3iv(this.addr,e),Yt(t,e)}}function AS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4iv(this.addr,e),Yt(t,e)}}function MS(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function wS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2uiv(this.addr,e),Yt(t,e)}}function bS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3uiv(this.addr,e),Yt(t,e)}}function IS(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4uiv(this.addr,e),Yt(t,e)}}function RS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Zu.compareFunction=t.isReversedDepthBuffer()?Uh:Nh,s=Zu):s=fg,t.setTexture2D(e||s,r)}function CS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||mg,r)}function PS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||gg,r)}function DS(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||pg,r)}function LS(i){switch(i){case 5126:return pS;case 35664:return mS;case 35665:return gS;case 35666:return _S;case 35674:return vS;case 35675:return yS;case 35676:return ES;case 5124:case 35670:return xS;case 35667:case 35671:return SS;case 35668:case 35672:return TS;case 35669:case 35673:return AS;case 5125:return MS;case 36294:return wS;case 36295:return bS;case 36296:return IS;case 35678:case 36198:case 36298:case 36306:case 35682:return RS;case 35679:case 36299:case 36307:return CS;case 35680:case 36300:case 36308:case 36293:return PS;case 36289:case 36303:case 36311:case 36292:return DS}}function NS(i,e){i.uniform1fv(this.addr,e)}function US(i,e){const t=Ys(e,this.size,2);i.uniform2fv(this.addr,t)}function OS(i,e){const t=Ys(e,this.size,3);i.uniform3fv(this.addr,t)}function FS(i,e){const t=Ys(e,this.size,4);i.uniform4fv(this.addr,t)}function VS(i,e){const t=Ys(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function kS(i,e){const t=Ys(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function BS(i,e){const t=Ys(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function zS(i,e){i.uniform1iv(this.addr,e)}function GS(i,e){i.uniform2iv(this.addr,e)}function HS(i,e){i.uniform3iv(this.addr,e)}function WS(i,e){i.uniform4iv(this.addr,e)}function qS(i,e){i.uniform1uiv(this.addr,e)}function XS(i,e){i.uniform2uiv(this.addr,e)}function $S(i,e){i.uniform3uiv(this.addr,e)}function jS(i,e){i.uniform4uiv(this.addr,e)}function KS(i,e,t){const n=this.cache,r=e.length,s=Gc(t,r);Kt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Zu:o=fg;for(let c=0;c!==r;++c)t.setTexture2D(e[c]||o,s[c])}function YS(i,e,t){const n=this.cache,r=e.length,s=Gc(t,r);Kt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||mg,s[o])}function QS(i,e,t){const n=this.cache,r=e.length,s=Gc(t,r);Kt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||gg,s[o])}function JS(i,e,t){const n=this.cache,r=e.length,s=Gc(t,r);Kt(n,s)||(i.uniform1iv(this.addr,s),Yt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||pg,s[o])}function ZS(i){switch(i){case 5126:return NS;case 35664:return US;case 35665:return OS;case 35666:return FS;case 35674:return VS;case 35675:return kS;case 35676:return BS;case 5124:case 35670:return zS;case 35667:case 35671:return GS;case 35668:case 35672:return HS;case 35669:case 35673:return WS;case 5125:return qS;case 36294:return XS;case 36295:return $S;case 36296:return jS;case 35678:case 36198:case 36298:case 36306:case 35682:return KS;case 35679:case 36299:case 36307:return YS;case 35680:case 36300:case 36308:case 36293:return QS;case 36289:case 36303:case 36311:case 36292:return JS}}class eT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=LS(t.type)}}class tT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ZS(t.type)}}class nT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const c=r[s];c.setValue(e,t[c.id],n)}}}const Xl=/(\w+)(\])?(\[|\.)?/g;function Hf(i,e){i.seq.push(e),i.map[e.id]=e}function iT(i,e,t){const n=i.name,r=n.length;for(Xl.lastIndex=0;;){const s=Xl.exec(n),o=Xl.lastIndex;let c=s[1];const l=s[2]==="]",u=s[3];if(l&&(c=c|0),u===void 0||u==="["&&o+2===r){Hf(t,u===void 0?new eT(c,i,e):new tT(c,i,e));break}else{let f=t.map[c];f===void 0&&(f=new nT(c),Hf(t,f)),t=f}}}class rc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){const c=e.getActiveUniform(t,o),l=e.getUniformLocation(t,c.name);iT(c,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const c=t[s],l=n[c.id];l.needsUpdate!==!1&&c.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function Wf(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const rT=37297;let sT=0;function oT(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const c=o+1;n.push(`${c===e?">":" "} ${c}: ${t[o]}`)}return n.join(`
`)}const qf=new st;function aT(i){vt._getMatrix(qf,vt.workingColorSpace,i);const e=`mat3( ${qf.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(i)){case mc:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return nt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Xf(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const c=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+oT(i.getShaderSource(e),c)}else return s}function cT(i,e){const t=aT(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const lT={[Um]:"Linear",[Om]:"Reinhard",[Fm]:"Cineon",[Vm]:"ACESFilmic",[Bm]:"AgX",[zm]:"Neutral",[km]:"Custom"};function uT(i,e){const t=lT[e];return t===void 0?(nt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const qa=new j;function hT(){vt.getLuminanceCoefficients(qa);const i=qa.x.toFixed(4),e=qa.y.toFixed(4),t=qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function dT(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function fT(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pT(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let c=1;s.type===i.FLOAT_MAT2&&(c=2),s.type===i.FLOAT_MAT3&&(c=3),s.type===i.FLOAT_MAT4&&(c=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:c}}return t}function To(i){return i!==""}function $f(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mT=/^[ \t]*#include +<([\w\d./]+)>/gm;function eh(i){return i.replace(mT,_T)}const gT=new Map;function _T(i,e){let t=at[e];if(t===void 0){const n=gT.get(e);if(n!==void 0)t=at[n],nt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return eh(t)}const vT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kf(i){return i.replace(vT,yT)}function yT(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Yf(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ET={[Za]:"SHADOWMAP_TYPE_PCF",[So]:"SHADOWMAP_TYPE_VSM"};function xT(i){return ET[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const ST={[Xr]:"ENVMAP_TYPE_CUBE",[Fs]:"ENVMAP_TYPE_CUBE",[Vc]:"ENVMAP_TYPE_CUBE_UV"};function TT(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":ST[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const AT={[Fs]:"ENVMAP_MODE_REFRACTION"};function MT(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":AT[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const wT={[Nm]:"ENVMAP_BLENDING_MULTIPLY",[g0]:"ENVMAP_BLENDING_MIX",[_0]:"ENVMAP_BLENDING_ADD"};function bT(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":wT[i.combine]||"ENVMAP_BLENDING_NONE"}function IT(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function RT(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,c=t.fragmentShader;const l=xT(t),u=TT(t),h=MT(t),f=bT(t),d=IT(t),g=dT(t),x=fT(s),b=r.createProgram();let _,v,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(To).join(`
`),_.length>0&&(_+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(To).join(`
`),v.length>0&&(v+=`
`)):(_=[Yf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),v=[Yf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ri?"#define TONE_MAPPING":"",t.toneMapping!==ri?at.tonemapping_pars_fragment:"",t.toneMapping!==ri?uT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,cT("linearToOutputTexel",t.outputColorSpace),hT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(To).join(`
`)),o=eh(o),o=$f(o,t),o=jf(o,t),c=eh(c),c=$f(c,t),c=jf(c,t),o=Kf(o),c=Kf(c),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,v=["#define varying in",t.glslVersion===uf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===uf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=R+_+o,L=R+v+c,U=Wf(r,r.VERTEX_SHADER,N),F=Wf(r,r.FRAGMENT_SHADER,L);r.attachShader(b,U),r.attachShader(b,F),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function A(T){if(i.debug.checkShaderErrors){const C=r.getProgramInfoLog(b)||"",M=r.getShaderInfoLog(U)||"",Y=r.getShaderInfoLog(F)||"",q=C.trim(),J=M.trim(),H=Y.trim();let le=!0,ae=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(le=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,U,F);else{const Ae=Xf(r,U,"vertex"),Pe=Xf(r,F,"fragment");yt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+q+`
`+Ae+`
`+Pe)}else q!==""?nt("WebGLProgram: Program Info Log:",q):(J===""||H==="")&&(ae=!1);ae&&(T.diagnostics={runnable:le,programLog:q,vertexShader:{log:J,prefix:_},fragmentShader:{log:H,prefix:v}})}r.deleteShader(U),r.deleteShader(F),m=new rc(r,b),y=pT(r,b)}let m;this.getUniforms=function(){return m===void 0&&A(this),m};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(b,rT)),P},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=sT++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=U,this.fragmentShader=F,this}let CT=0;class PT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new DT(e),t.set(e,n)),n}}class DT{constructor(e){this.id=CT++,this.code=e,this.usedTimes=0}}function LT(i,e,t,n,r,s){const o=new Jm,c=new PT,l=new Set,u=[],h=new Map,f=n.logarithmicDepthBuffer;let d=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(m){return l.add(m),m===0?"uv":`uv${m}`}function b(m,y,P,T,C){const M=T.fog,Y=C.geometry,q=m.isMeshStandardMaterial||m.isMeshLambertMaterial||m.isMeshPhongMaterial?T.environment:null,J=m.isMeshStandardMaterial||m.isMeshLambertMaterial&&!m.envMap||m.isMeshPhongMaterial&&!m.envMap,H=e.get(m.envMap||q,J),le=H&&H.mapping===Vc?H.image.height:null,ae=g[m.type];m.precision!==null&&(d=n.getMaxPrecision(m.precision),d!==m.precision&&nt("WebGLProgram.getParameters:",m.precision,"not supported, using",d,"instead."));const Ae=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Pe=Ae!==void 0?Ae.length:0;let Me=0;Y.morphAttributes.position!==void 0&&(Me=1),Y.morphAttributes.normal!==void 0&&(Me=2),Y.morphAttributes.color!==void 0&&(Me=3);let Qe,Et,xt,V;if(ae){const lt=ti[ae];Qe=lt.vertexShader,Et=lt.fragmentShader}else Qe=m.vertexShader,Et=m.fragmentShader,c.update(m),xt=c.getVertexShaderID(m),V=c.getFragmentShaderID(m);const G=i.getRenderTarget(),Q=i.state.buffers.depth.getReversed(),re=C.isInstancedMesh===!0,he=C.isBatchedMesh===!0,fe=!!m.map,We=!!m.matcap,ge=!!H,we=!!m.aoMap,qe=!!m.lightMap,Fe=!!m.bumpMap,ct=!!m.normalMap,O=!!m.displacementMap,rt=!!m.emissiveMap,Ke=!!m.metalnessMap,pt=!!m.roughnessMap,Ne=m.anisotropy>0,D=m.clearcoat>0,S=m.dispersion>0,B=m.iridescence>0,ne=m.sheen>0,oe=m.transmission>0,te=Ne&&!!m.anisotropyMap,Ve=D&&!!m.clearcoatMap,_e=D&&!!m.clearcoatNormalMap,ze=D&&!!m.clearcoatRoughnessMap,Xe=B&&!!m.iridescenceMap,ce=B&&!!m.iridescenceThicknessMap,de=ne&&!!m.sheenColorMap,Ue=ne&&!!m.sheenRoughnessMap,Re=!!m.specularMap,be=!!m.specularColorMap,et=!!m.specularIntensityMap,k=oe&&!!m.transmissionMap,me=oe&&!!m.thicknessMap,pe=!!m.gradientMap,ve=!!m.alphaMap,ue=m.alphaTest>0,ee=!!m.alphaHash,De=!!m.extensions;let Je=ri;m.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Je=i.toneMapping);const wt={shaderID:ae,shaderType:m.type,shaderName:m.name,vertexShader:Qe,fragmentShader:Et,defines:m.defines,customVertexShaderID:xt,customFragmentShaderID:V,isRawShaderMaterial:m.isRawShaderMaterial===!0,glslVersion:m.glslVersion,precision:d,batching:he,batchingColor:he&&C._colorsTexture!==null,instancing:re,instancingColor:re&&C.instanceColor!==null,instancingMorph:re&&C.morphTexture!==null,outputColorSpace:G===null?i.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ks,alphaToCoverage:!!m.alphaToCoverage,map:fe,matcap:We,envMap:ge,envMapMode:ge&&H.mapping,envMapCubeUVHeight:le,aoMap:we,lightMap:qe,bumpMap:Fe,normalMap:ct,displacementMap:O,emissiveMap:rt,normalMapObjectSpace:ct&&m.normalMapType===x0,normalMapTangentSpace:ct&&m.normalMapType===E0,metalnessMap:Ke,roughnessMap:pt,anisotropy:Ne,anisotropyMap:te,clearcoat:D,clearcoatMap:Ve,clearcoatNormalMap:_e,clearcoatRoughnessMap:ze,dispersion:S,iridescence:B,iridescenceMap:Xe,iridescenceThicknessMap:ce,sheen:ne,sheenColorMap:de,sheenRoughnessMap:Ue,specularMap:Re,specularColorMap:be,specularIntensityMap:et,transmission:oe,transmissionMap:k,thicknessMap:me,gradientMap:pe,opaque:m.transparent===!1&&m.blending===Rs&&m.alphaToCoverage===!1,alphaMap:ve,alphaTest:ue,alphaHash:ee,combine:m.combine,mapUv:fe&&x(m.map.channel),aoMapUv:we&&x(m.aoMap.channel),lightMapUv:qe&&x(m.lightMap.channel),bumpMapUv:Fe&&x(m.bumpMap.channel),normalMapUv:ct&&x(m.normalMap.channel),displacementMapUv:O&&x(m.displacementMap.channel),emissiveMapUv:rt&&x(m.emissiveMap.channel),metalnessMapUv:Ke&&x(m.metalnessMap.channel),roughnessMapUv:pt&&x(m.roughnessMap.channel),anisotropyMapUv:te&&x(m.anisotropyMap.channel),clearcoatMapUv:Ve&&x(m.clearcoatMap.channel),clearcoatNormalMapUv:_e&&x(m.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&x(m.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&x(m.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&x(m.iridescenceThicknessMap.channel),sheenColorMapUv:de&&x(m.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&x(m.sheenRoughnessMap.channel),specularMapUv:Re&&x(m.specularMap.channel),specularColorMapUv:be&&x(m.specularColorMap.channel),specularIntensityMapUv:et&&x(m.specularIntensityMap.channel),transmissionMapUv:k&&x(m.transmissionMap.channel),thicknessMapUv:me&&x(m.thicknessMap.channel),alphaMapUv:ve&&x(m.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ct||Ne),vertexColors:m.vertexColors,vertexAlphas:m.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!Y.attributes.uv&&(fe||ve),fog:!!M,useFog:m.fog===!0,fogExp2:!!M&&M.isFogExp2,flatShading:m.wireframe===!1&&(m.flatShading===!0||Y.attributes.normal===void 0&&ct===!1&&(m.isMeshLambertMaterial||m.isMeshPhongMaterial||m.isMeshStandardMaterial||m.isMeshPhysicalMaterial)),sizeAttenuation:m.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Q,skinning:C.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Pe,morphTextureStride:Me,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:m.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Je,decodeVideoTexture:fe&&m.map.isVideoTexture===!0&&vt.getTransfer(m.map.colorSpace)===At,decodeVideoTextureEmissive:rt&&m.emissiveMap.isVideoTexture===!0&&vt.getTransfer(m.emissiveMap.colorSpace)===At,premultipliedAlpha:m.premultipliedAlpha,doubleSided:m.side===Ti,flipSided:m.side===En,useDepthPacking:m.depthPacking>=0,depthPacking:m.depthPacking||0,index0AttributeName:m.index0AttributeName,extensionClipCullDistance:De&&m.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&m.extensions.multiDraw===!0||he)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:m.customProgramCacheKey()};return wt.vertexUv1s=l.has(1),wt.vertexUv2s=l.has(2),wt.vertexUv3s=l.has(3),l.clear(),wt}function _(m){const y=[];if(m.shaderID?y.push(m.shaderID):(y.push(m.customVertexShaderID),y.push(m.customFragmentShaderID)),m.defines!==void 0)for(const P in m.defines)y.push(P),y.push(m.defines[P]);return m.isRawShaderMaterial===!1&&(v(y,m),R(y,m),y.push(i.outputColorSpace)),y.push(m.customProgramCacheKey),y.join()}function v(m,y){m.push(y.precision),m.push(y.outputColorSpace),m.push(y.envMapMode),m.push(y.envMapCubeUVHeight),m.push(y.mapUv),m.push(y.alphaMapUv),m.push(y.lightMapUv),m.push(y.aoMapUv),m.push(y.bumpMapUv),m.push(y.normalMapUv),m.push(y.displacementMapUv),m.push(y.emissiveMapUv),m.push(y.metalnessMapUv),m.push(y.roughnessMapUv),m.push(y.anisotropyMapUv),m.push(y.clearcoatMapUv),m.push(y.clearcoatNormalMapUv),m.push(y.clearcoatRoughnessMapUv),m.push(y.iridescenceMapUv),m.push(y.iridescenceThicknessMapUv),m.push(y.sheenColorMapUv),m.push(y.sheenRoughnessMapUv),m.push(y.specularMapUv),m.push(y.specularColorMapUv),m.push(y.specularIntensityMapUv),m.push(y.transmissionMapUv),m.push(y.thicknessMapUv),m.push(y.combine),m.push(y.fogExp2),m.push(y.sizeAttenuation),m.push(y.morphTargetsCount),m.push(y.morphAttributeCount),m.push(y.numDirLights),m.push(y.numPointLights),m.push(y.numSpotLights),m.push(y.numSpotLightMaps),m.push(y.numHemiLights),m.push(y.numRectAreaLights),m.push(y.numDirLightShadows),m.push(y.numPointLightShadows),m.push(y.numSpotLightShadows),m.push(y.numSpotLightShadowsWithMaps),m.push(y.numLightProbes),m.push(y.shadowMapType),m.push(y.toneMapping),m.push(y.numClippingPlanes),m.push(y.numClipIntersection),m.push(y.depthPacking)}function R(m,y){o.disableAll(),y.instancing&&o.enable(0),y.instancingColor&&o.enable(1),y.instancingMorph&&o.enable(2),y.matcap&&o.enable(3),y.envMap&&o.enable(4),y.normalMapObjectSpace&&o.enable(5),y.normalMapTangentSpace&&o.enable(6),y.clearcoat&&o.enable(7),y.iridescence&&o.enable(8),y.alphaTest&&o.enable(9),y.vertexColors&&o.enable(10),y.vertexAlphas&&o.enable(11),y.vertexUv1s&&o.enable(12),y.vertexUv2s&&o.enable(13),y.vertexUv3s&&o.enable(14),y.vertexTangents&&o.enable(15),y.anisotropy&&o.enable(16),y.alphaHash&&o.enable(17),y.batching&&o.enable(18),y.dispersion&&o.enable(19),y.batchingColor&&o.enable(20),y.gradientMap&&o.enable(21),m.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),m.push(o.mask)}function N(m){const y=g[m.type];let P;if(y){const T=ti[y];P=sy.clone(T.uniforms)}else P=m.uniforms;return P}function L(m,y){let P=h.get(y);return P!==void 0?++P.usedTimes:(P=new RT(i,y,m,r),u.push(P),h.set(y,P)),P}function U(m){if(--m.usedTimes===0){const y=u.indexOf(m);u[y]=u[u.length-1],u.pop(),h.delete(m.cacheKey),m.destroy()}}function F(m){c.remove(m)}function A(){c.dispose()}return{getParameters:b,getProgramCacheKey:_,getUniforms:N,acquireProgram:L,releaseProgram:U,releaseShaderCache:F,programs:u,dispose:A}}function NT(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let c=i.get(o);return c===void 0&&(c={},i.set(o,c)),c}function n(o){i.delete(o)}function r(o,c,l){i.get(o)[c]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function UT(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Qf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Jf(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(d){let g=0;return d.isInstancedMesh&&(g+=2),d.isSkinnedMesh&&(g+=1),g}function c(d,g,x,b,_,v){let R=i[e];return R===void 0?(R={id:d.id,object:d,geometry:g,material:x,materialVariant:o(d),groupOrder:b,renderOrder:d.renderOrder,z:_,group:v},i[e]=R):(R.id=d.id,R.object=d,R.geometry=g,R.material=x,R.materialVariant=o(d),R.groupOrder=b,R.renderOrder=d.renderOrder,R.z=_,R.group=v),e++,R}function l(d,g,x,b,_,v){const R=c(d,g,x,b,_,v);x.transmission>0?n.push(R):x.transparent===!0?r.push(R):t.push(R)}function u(d,g,x,b,_,v){const R=c(d,g,x,b,_,v);x.transmission>0?n.unshift(R):x.transparent===!0?r.unshift(R):t.unshift(R)}function h(d,g){t.length>1&&t.sort(d||UT),n.length>1&&n.sort(g||Qf),r.length>1&&r.sort(g||Qf)}function f(){for(let d=e,g=i.length;d<g;d++){const x=i[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:u,finish:f,sort:h}}function OT(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new Jf,i.set(n,[o])):r>=s.length?(o=new Jf,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function FT(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new Mt};break;case"SpotLight":t={position:new j,direction:new j,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":t={color:new Mt,position:new j,halfWidth:new j,halfHeight:new j};break}return i[e.id]=t,t}}}function VT(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let kT=0;function BT(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function zT(i){const e=new FT,t=VT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new j);const r=new j,s=new Bt,o=new Bt;function c(u){let h=0,f=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let g=0,x=0,b=0,_=0,v=0,R=0,N=0,L=0,U=0,F=0,A=0;u.sort(BT);for(let y=0,P=u.length;y<P;y++){const T=u[y],C=T.color,M=T.intensity,Y=T.distance;let q=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===Vs?q=T.shadow.map.texture:q=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)h+=C.r*M,f+=C.g*M,d+=C.b*M;else if(T.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(T.sh.coefficients[J],M);A++}else if(T.isDirectionalLight){const J=e.get(T);if(J.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const H=T.shadow,le=t.get(T);le.shadowIntensity=H.intensity,le.shadowBias=H.bias,le.shadowNormalBias=H.normalBias,le.shadowRadius=H.radius,le.shadowMapSize=H.mapSize,n.directionalShadow[g]=le,n.directionalShadowMap[g]=q,n.directionalShadowMatrix[g]=T.shadow.matrix,R++}n.directional[g]=J,g++}else if(T.isSpotLight){const J=e.get(T);J.position.setFromMatrixPosition(T.matrixWorld),J.color.copy(C).multiplyScalar(M),J.distance=Y,J.coneCos=Math.cos(T.angle),J.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),J.decay=T.decay,n.spot[b]=J;const H=T.shadow;if(T.map&&(n.spotLightMap[U]=T.map,U++,H.updateMatrices(T),T.castShadow&&F++),n.spotLightMatrix[b]=H.matrix,T.castShadow){const le=t.get(T);le.shadowIntensity=H.intensity,le.shadowBias=H.bias,le.shadowNormalBias=H.normalBias,le.shadowRadius=H.radius,le.shadowMapSize=H.mapSize,n.spotShadow[b]=le,n.spotShadowMap[b]=q,L++}b++}else if(T.isRectAreaLight){const J=e.get(T);J.color.copy(C).multiplyScalar(M),J.halfWidth.set(T.width*.5,0,0),J.halfHeight.set(0,T.height*.5,0),n.rectArea[_]=J,_++}else if(T.isPointLight){const J=e.get(T);if(J.color.copy(T.color).multiplyScalar(T.intensity),J.distance=T.distance,J.decay=T.decay,T.castShadow){const H=T.shadow,le=t.get(T);le.shadowIntensity=H.intensity,le.shadowBias=H.bias,le.shadowNormalBias=H.normalBias,le.shadowRadius=H.radius,le.shadowMapSize=H.mapSize,le.shadowCameraNear=H.camera.near,le.shadowCameraFar=H.camera.far,n.pointShadow[x]=le,n.pointShadowMap[x]=q,n.pointShadowMatrix[x]=T.shadow.matrix,N++}n.point[x]=J,x++}else if(T.isHemisphereLight){const J=e.get(T);J.skyColor.copy(T.color).multiplyScalar(M),J.groundColor.copy(T.groundColor).multiplyScalar(M),n.hemi[v]=J,v++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Se.LTC_FLOAT_1,n.rectAreaLTC2=Se.LTC_FLOAT_2):(n.rectAreaLTC1=Se.LTC_HALF_1,n.rectAreaLTC2=Se.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;const m=n.hash;(m.directionalLength!==g||m.pointLength!==x||m.spotLength!==b||m.rectAreaLength!==_||m.hemiLength!==v||m.numDirectionalShadows!==R||m.numPointShadows!==N||m.numSpotShadows!==L||m.numSpotMaps!==U||m.numLightProbes!==A)&&(n.directional.length=g,n.spot.length=b,n.rectArea.length=_,n.point.length=x,n.hemi.length=v,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=N,n.pointShadowMap.length=N,n.spotShadow.length=L,n.spotShadowMap.length=L,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=N,n.spotLightMatrix.length=L+U-F,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=A,m.directionalLength=g,m.pointLength=x,m.spotLength=b,m.rectAreaLength=_,m.hemiLength=v,m.numDirectionalShadows=R,m.numPointShadows=N,m.numSpotShadows=L,m.numSpotMaps=U,m.numLightProbes=A,n.version=kT++)}function l(u,h){let f=0,d=0,g=0,x=0,b=0;const _=h.matrixWorldInverse;for(let v=0,R=u.length;v<R;v++){const N=u[v];if(N.isDirectionalLight){const L=n.directional[f];L.direction.setFromMatrixPosition(N.matrixWorld),r.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(_),f++}else if(N.isSpotLight){const L=n.spot[g];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(_),L.direction.setFromMatrixPosition(N.matrixWorld),r.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(_),g++}else if(N.isRectAreaLight){const L=n.rectArea[x];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(_),o.identity(),s.copy(N.matrixWorld),s.premultiply(_),o.extractRotation(s),L.halfWidth.set(N.width*.5,0,0),L.halfHeight.set(0,N.height*.5,0),L.halfWidth.applyMatrix4(o),L.halfHeight.applyMatrix4(o),x++}else if(N.isPointLight){const L=n.point[d];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(_),d++}else if(N.isHemisphereLight){const L=n.hemi[b];L.direction.setFromMatrixPosition(N.matrixWorld),L.direction.transformDirection(_),b++}}}return{setup:c,setupView:l,state:n}}function Zf(i){const e=new zT(i),t=[],n=[];function r(h){u.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function c(){e.setup(t)}function l(h){e.setupView(t,h)}const u={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:c,setupLightsView:l,pushLight:s,pushShadow:o}}function GT(i){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let c;return o===void 0?(c=new Zf(i),e.set(r,[c])):s>=o.length?(c=new Zf(i),o.push(c)):c=o[s],c}function n(){e=new WeakMap}return{get:t,dispose:n}}const HT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,qT=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],XT=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],ep=new Bt,Eo=new j,$l=new j;function $T(i,e,t){let n=new rg;const r=new bt,s=new bt,o=new kt,c=new ly,l=new uy,u={},h=t.maxTextureSize,f={[pr]:En,[En]:pr,[Ti]:Ti},d=new di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new bt},radius:{value:4}},vertexShader:HT,fragmentShader:WT}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const x=new Yn;x.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Fi(x,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Za;let v=this.type;this.render=function(F,A,m){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||F.length===0)return;this.type===Qv&&(nt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Za);const y=i.getRenderTarget(),P=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),C=i.state;C.setBlending(Ii),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);const M=v!==this.type;M&&A.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(q=>q.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,q=F.length;Y<q;Y++){const J=F[Y],H=J.shadow;if(H===void 0){nt("WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const le=H.getFrameExtents();r.multiply(le),s.copy(H.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/le.x),r.x=s.x*le.x,H.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/le.y),r.y=s.y*le.y,H.mapSize.y=s.y));const ae=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ae,H.map===null||M===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===So){if(J.isPointLight){nt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new si(r.x,r.y,{format:Vs,type:Ni,minFilter:dn,magFilter:dn,generateMipmaps:!1}),H.map.texture.name=J.name+".shadowMap",H.map.depthTexture=new Fo(r.x,r.y,ni),H.map.depthTexture.name=J.name+".shadowMapDepth",H.map.depthTexture.format=Ui,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=rn,H.map.depthTexture.magFilter=rn}else J.isPointLight?(H.map=new dg(r.x),H.map.depthTexture=new iy(r.x,hi)):(H.map=new si(r.x,r.y),H.map.depthTexture=new Fo(r.x,r.y,hi)),H.map.depthTexture.name=J.name+".shadowMap",H.map.depthTexture.format=Ui,this.type===Za?(H.map.depthTexture.compareFunction=ae?Uh:Nh,H.map.depthTexture.minFilter=dn,H.map.depthTexture.magFilter=dn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=rn,H.map.depthTexture.magFilter=rn);H.camera.updateProjectionMatrix()}const Ae=H.map.isWebGLCubeRenderTarget?6:1;for(let Pe=0;Pe<Ae;Pe++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,Pe),i.clear();else{Pe===0&&(i.setRenderTarget(H.map),i.clear());const Me=H.getViewport(Pe);o.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),C.viewport(o)}if(J.isPointLight){const Me=H.camera,Qe=H.matrix,Et=J.distance||Me.far;Et!==Me.far&&(Me.far=Et,Me.updateProjectionMatrix()),Eo.setFromMatrixPosition(J.matrixWorld),Me.position.copy(Eo),$l.copy(Me.position),$l.add(qT[Pe]),Me.up.copy(XT[Pe]),Me.lookAt($l),Me.updateMatrixWorld(),Qe.makeTranslation(-Eo.x,-Eo.y,-Eo.z),ep.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),H._frustum.setFromProjectionMatrix(ep,Me.coordinateSystem,Me.reversedDepth)}else H.updateMatrices(J);n=H.getFrustum(),L(A,m,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===So&&R(H,m),H.needsUpdate=!1}v=this.type,_.needsUpdate=!1,i.setRenderTarget(y,P,T)};function R(F,A){const m=e.update(b);d.defines.VSM_SAMPLES!==F.blurSamples&&(d.defines.VSM_SAMPLES=F.blurSamples,g.defines.VSM_SAMPLES=F.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new si(r.x,r.y,{format:Vs,type:Ni})),d.uniforms.shadow_pass.value=F.map.depthTexture,d.uniforms.resolution.value=F.mapSize,d.uniforms.radius.value=F.radius,i.setRenderTarget(F.mapPass),i.clear(),i.renderBufferDirect(A,null,m,d,b,null),g.uniforms.shadow_pass.value=F.mapPass.texture,g.uniforms.resolution.value=F.mapSize,g.uniforms.radius.value=F.radius,i.setRenderTarget(F.map),i.clear(),i.renderBufferDirect(A,null,m,g,b,null)}function N(F,A,m,y){let P=null;const T=m.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(T!==void 0)P=T;else if(P=m.isPointLight===!0?l:c,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const C=P.uuid,M=A.uuid;let Y=u[C];Y===void 0&&(Y={},u[C]=Y);let q=Y[M];q===void 0&&(q=P.clone(),Y[M]=q,A.addEventListener("dispose",U)),P=q}if(P.visible=A.visible,P.wireframe=A.wireframe,y===So?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:f[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,m.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const C=i.properties.get(P);C.light=m}return P}function L(F,A,m,y,P){if(F.visible===!1)return;if(F.layers.test(A.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&P===So)&&(!F.frustumCulled||n.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(m.matrixWorldInverse,F.matrixWorld);const M=e.update(F),Y=F.material;if(Array.isArray(Y)){const q=M.groups;for(let J=0,H=q.length;J<H;J++){const le=q[J],ae=Y[le.materialIndex];if(ae&&ae.visible){const Ae=N(F,ae,y,P);F.onBeforeShadow(i,F,A,m,M,Ae,le),i.renderBufferDirect(m,null,M,Ae,F,le),F.onAfterShadow(i,F,A,m,M,Ae,le)}}}else if(Y.visible){const q=N(F,Y,y,P);F.onBeforeShadow(i,F,A,m,M,q,null),i.renderBufferDirect(m,null,M,q,F,null),F.onAfterShadow(i,F,A,m,M,q,null)}}const C=F.children;for(let M=0,Y=C.length;M<Y;M++)L(C[M],A,m,y,P)}function U(F){F.target.removeEventListener("dispose",U);for(const m in u){const y=u[m],P=F.target.uuid;P in y&&(y[P].dispose(),delete y[P])}}}function jT(i,e){function t(){let k=!1;const me=new kt;let pe=null;const ve=new kt(0,0,0,0);return{setMask:function(ue){pe!==ue&&!k&&(i.colorMask(ue,ue,ue,ue),pe=ue)},setLocked:function(ue){k=ue},setClear:function(ue,ee,De,Je,wt){wt===!0&&(ue*=Je,ee*=Je,De*=Je),me.set(ue,ee,De,Je),ve.equals(me)===!1&&(i.clearColor(ue,ee,De,Je),ve.copy(me))},reset:function(){k=!1,pe=null,ve.set(-1,0,0,0)}}}function n(){let k=!1,me=!1,pe=null,ve=null,ue=null;return{setReversed:function(ee){if(me!==ee){const De=e.get("EXT_clip_control");ee?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),me=ee;const Je=ue;ue=null,this.setClear(Je)}},getReversed:function(){return me},setTest:function(ee){ee?G(i.DEPTH_TEST):Q(i.DEPTH_TEST)},setMask:function(ee){pe!==ee&&!k&&(i.depthMask(ee),pe=ee)},setFunc:function(ee){if(me&&(ee=P0[ee]),ve!==ee){switch(ee){case uu:i.depthFunc(i.NEVER);break;case hu:i.depthFunc(i.ALWAYS);break;case du:i.depthFunc(i.LESS);break;case Os:i.depthFunc(i.LEQUAL);break;case fu:i.depthFunc(i.EQUAL);break;case pu:i.depthFunc(i.GEQUAL);break;case mu:i.depthFunc(i.GREATER);break;case gu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=ee}},setLocked:function(ee){k=ee},setClear:function(ee){ue!==ee&&(ue=ee,me&&(ee=1-ee),i.clearDepth(ee))},reset:function(){k=!1,pe=null,ve=null,ue=null,me=!1}}}function r(){let k=!1,me=null,pe=null,ve=null,ue=null,ee=null,De=null,Je=null,wt=null;return{setTest:function(lt){k||(lt?G(i.STENCIL_TEST):Q(i.STENCIL_TEST))},setMask:function(lt){me!==lt&&!k&&(i.stencilMask(lt),me=lt)},setFunc:function(lt,Un,On){(pe!==lt||ve!==Un||ue!==On)&&(i.stencilFunc(lt,Un,On),pe=lt,ve=Un,ue=On)},setOp:function(lt,Un,On){(ee!==lt||De!==Un||Je!==On)&&(i.stencilOp(lt,Un,On),ee=lt,De=Un,Je=On)},setLocked:function(lt){k=lt},setClear:function(lt){wt!==lt&&(i.clearStencil(lt),wt=lt)},reset:function(){k=!1,me=null,pe=null,ve=null,ue=null,ee=null,De=null,Je=null,wt=null}}}const s=new t,o=new n,c=new r,l=new WeakMap,u=new WeakMap;let h={},f={},d=new WeakMap,g=[],x=null,b=!1,_=null,v=null,R=null,N=null,L=null,U=null,F=null,A=new Mt(0,0,0),m=0,y=!1,P=null,T=null,C=null,M=null,Y=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,H=0;const le=i.getParameter(i.VERSION);le.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(le)[1]),J=H>=1):le.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),J=H>=2);let ae=null,Ae={};const Pe=i.getParameter(i.SCISSOR_BOX),Me=i.getParameter(i.VIEWPORT),Qe=new kt().fromArray(Pe),Et=new kt().fromArray(Me);function xt(k,me,pe,ve){const ue=new Uint8Array(4),ee=i.createTexture();i.bindTexture(k,ee),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let De=0;De<pe;De++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(me,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(me+De,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return ee}const V={};V[i.TEXTURE_2D]=xt(i.TEXTURE_2D,i.TEXTURE_2D,1),V[i.TEXTURE_CUBE_MAP]=xt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),V[i.TEXTURE_2D_ARRAY]=xt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),V[i.TEXTURE_3D]=xt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),c.setClear(0),G(i.DEPTH_TEST),o.setFunc(Os),Fe(!1),ct(sf),G(i.CULL_FACE),we(Ii);function G(k){h[k]!==!0&&(i.enable(k),h[k]=!0)}function Q(k){h[k]!==!1&&(i.disable(k),h[k]=!1)}function re(k,me){return f[k]!==me?(i.bindFramebuffer(k,me),f[k]=me,k===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=me),k===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=me),!0):!1}function he(k,me){let pe=g,ve=!1;if(k){pe=d.get(me),pe===void 0&&(pe=[],d.set(me,pe));const ue=k.textures;if(pe.length!==ue.length||pe[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,De=ue.length;ee<De;ee++)pe[ee]=i.COLOR_ATTACHMENT0+ee;pe.length=ue.length,ve=!0}}else pe[0]!==i.BACK&&(pe[0]=i.BACK,ve=!0);ve&&i.drawBuffers(pe)}function fe(k){return x!==k?(i.useProgram(k),x=k,!0):!1}const We={[Vr]:i.FUNC_ADD,[Zv]:i.FUNC_SUBTRACT,[e0]:i.FUNC_REVERSE_SUBTRACT};We[t0]=i.MIN,We[n0]=i.MAX;const ge={[i0]:i.ZERO,[r0]:i.ONE,[s0]:i.SRC_COLOR,[cu]:i.SRC_ALPHA,[h0]:i.SRC_ALPHA_SATURATE,[l0]:i.DST_COLOR,[a0]:i.DST_ALPHA,[o0]:i.ONE_MINUS_SRC_COLOR,[lu]:i.ONE_MINUS_SRC_ALPHA,[u0]:i.ONE_MINUS_DST_COLOR,[c0]:i.ONE_MINUS_DST_ALPHA,[d0]:i.CONSTANT_COLOR,[f0]:i.ONE_MINUS_CONSTANT_COLOR,[p0]:i.CONSTANT_ALPHA,[m0]:i.ONE_MINUS_CONSTANT_ALPHA};function we(k,me,pe,ve,ue,ee,De,Je,wt,lt){if(k===Ii){b===!0&&(Q(i.BLEND),b=!1);return}if(b===!1&&(G(i.BLEND),b=!0),k!==Jv){if(k!==_||lt!==y){if((v!==Vr||L!==Vr)&&(i.blendEquation(i.FUNC_ADD),v=Vr,L=Vr),lt)switch(k){case Rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case au:i.blendFunc(i.ONE,i.ONE);break;case of:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case af:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:yt("WebGLState: Invalid blending: ",k);break}else switch(k){case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case au:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case of:yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case af:yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:yt("WebGLState: Invalid blending: ",k);break}R=null,N=null,U=null,F=null,A.set(0,0,0),m=0,_=k,y=lt}return}ue=ue||me,ee=ee||pe,De=De||ve,(me!==v||ue!==L)&&(i.blendEquationSeparate(We[me],We[ue]),v=me,L=ue),(pe!==R||ve!==N||ee!==U||De!==F)&&(i.blendFuncSeparate(ge[pe],ge[ve],ge[ee],ge[De]),R=pe,N=ve,U=ee,F=De),(Je.equals(A)===!1||wt!==m)&&(i.blendColor(Je.r,Je.g,Je.b,wt),A.copy(Je),m=wt),_=k,y=!1}function qe(k,me){k.side===Ti?Q(i.CULL_FACE):G(i.CULL_FACE);let pe=k.side===En;me&&(pe=!pe),Fe(pe),k.blending===Rs&&k.transparent===!1?we(Ii):we(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);const ve=k.stencilWrite;c.setTest(ve),ve&&(c.setMask(k.stencilWriteMask),c.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),c.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),rt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?G(i.SAMPLE_ALPHA_TO_COVERAGE):Q(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(k){P!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),P=k)}function ct(k){k!==Kv?(G(i.CULL_FACE),k!==T&&(k===sf?i.cullFace(i.BACK):k===Yv?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Q(i.CULL_FACE),T=k}function O(k){k!==C&&(J&&i.lineWidth(k),C=k)}function rt(k,me,pe){k?(G(i.POLYGON_OFFSET_FILL),(M!==me||Y!==pe)&&(M=me,Y=pe,o.getReversed()&&(me=-me),i.polygonOffset(me,pe))):Q(i.POLYGON_OFFSET_FILL)}function Ke(k){k?G(i.SCISSOR_TEST):Q(i.SCISSOR_TEST)}function pt(k){k===void 0&&(k=i.TEXTURE0+q-1),ae!==k&&(i.activeTexture(k),ae=k)}function Ne(k,me,pe){pe===void 0&&(ae===null?pe=i.TEXTURE0+q-1:pe=ae);let ve=Ae[pe];ve===void 0&&(ve={type:void 0,texture:void 0},Ae[pe]=ve),(ve.type!==k||ve.texture!==me)&&(ae!==pe&&(i.activeTexture(pe),ae=pe),i.bindTexture(k,me||V[k]),ve.type=k,ve.texture=me)}function D(){const k=Ae[ae];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(k){yt("WebGLState:",k)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(k){yt("WebGLState:",k)}}function ne(){try{i.texSubImage2D(...arguments)}catch(k){yt("WebGLState:",k)}}function oe(){try{i.texSubImage3D(...arguments)}catch(k){yt("WebGLState:",k)}}function te(){try{i.compressedTexSubImage2D(...arguments)}catch(k){yt("WebGLState:",k)}}function Ve(){try{i.compressedTexSubImage3D(...arguments)}catch(k){yt("WebGLState:",k)}}function _e(){try{i.texStorage2D(...arguments)}catch(k){yt("WebGLState:",k)}}function ze(){try{i.texStorage3D(...arguments)}catch(k){yt("WebGLState:",k)}}function Xe(){try{i.texImage2D(...arguments)}catch(k){yt("WebGLState:",k)}}function ce(){try{i.texImage3D(...arguments)}catch(k){yt("WebGLState:",k)}}function de(k){Qe.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Qe.copy(k))}function Ue(k){Et.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),Et.copy(k))}function Re(k,me){let pe=u.get(me);pe===void 0&&(pe=new WeakMap,u.set(me,pe));let ve=pe.get(k);ve===void 0&&(ve=i.getUniformBlockIndex(me,k.name),pe.set(k,ve))}function be(k,me){const ve=u.get(me).get(k);l.get(me)!==ve&&(i.uniformBlockBinding(me,ve,k.__bindingPointIndex),l.set(me,ve))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ae=null,Ae={},f={},d=new WeakMap,g=[],x=null,b=!1,_=null,v=null,R=null,N=null,L=null,U=null,F=null,A=new Mt(0,0,0),m=0,y=!1,P=null,T=null,C=null,M=null,Y=null,Qe.set(0,0,i.canvas.width,i.canvas.height),Et.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),c.reset()}return{buffers:{color:s,depth:o,stencil:c},enable:G,disable:Q,bindFramebuffer:re,drawBuffers:he,useProgram:fe,setBlending:we,setMaterial:qe,setFlipSided:Fe,setCullFace:ct,setLineWidth:O,setPolygonOffset:rt,setScissorTest:Ke,activeTexture:pt,bindTexture:Ne,unbindTexture:D,compressedTexImage2D:S,compressedTexImage3D:B,texImage2D:Xe,texImage3D:ce,updateUBOMapping:Re,uniformBlockBinding:be,texStorage2D:_e,texStorage3D:ze,texSubImage2D:ne,texSubImage3D:oe,compressedTexSubImage2D:te,compressedTexSubImage3D:Ve,scissor:de,viewport:Ue,reset:et}}function KT(i,e,t,n,r,s,o){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new bt,h=new WeakMap;let f;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,S){return g?new OffscreenCanvas(D,S):_c("canvas")}function b(D,S,B){let ne=1;const oe=Ne(D);if((oe.width>B||oe.height>B)&&(ne=B/Math.max(oe.width,oe.height)),ne<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const te=Math.floor(ne*oe.width),Ve=Math.floor(ne*oe.height);f===void 0&&(f=x(te,Ve));const _e=S?x(te,Ve):f;return _e.width=te,_e.height=Ve,_e.getContext("2d").drawImage(D,0,0,te,Ve),nt("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+te+"x"+Ve+")."),_e}else return"data"in D&&nt("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),D;return D}function _(D){return D.generateMipmaps}function v(D){i.generateMipmap(D)}function R(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function N(D,S,B,ne,oe=!1){if(D!==null){if(i[D]!==void 0)return i[D];nt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let te=S;if(S===i.RED&&(B===i.FLOAT&&(te=i.R32F),B===i.HALF_FLOAT&&(te=i.R16F),B===i.UNSIGNED_BYTE&&(te=i.R8)),S===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(te=i.R8UI),B===i.UNSIGNED_SHORT&&(te=i.R16UI),B===i.UNSIGNED_INT&&(te=i.R32UI),B===i.BYTE&&(te=i.R8I),B===i.SHORT&&(te=i.R16I),B===i.INT&&(te=i.R32I)),S===i.RG&&(B===i.FLOAT&&(te=i.RG32F),B===i.HALF_FLOAT&&(te=i.RG16F),B===i.UNSIGNED_BYTE&&(te=i.RG8)),S===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(te=i.RG8UI),B===i.UNSIGNED_SHORT&&(te=i.RG16UI),B===i.UNSIGNED_INT&&(te=i.RG32UI),B===i.BYTE&&(te=i.RG8I),B===i.SHORT&&(te=i.RG16I),B===i.INT&&(te=i.RG32I)),S===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(te=i.RGB8UI),B===i.UNSIGNED_SHORT&&(te=i.RGB16UI),B===i.UNSIGNED_INT&&(te=i.RGB32UI),B===i.BYTE&&(te=i.RGB8I),B===i.SHORT&&(te=i.RGB16I),B===i.INT&&(te=i.RGB32I)),S===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(te=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(te=i.RGBA16UI),B===i.UNSIGNED_INT&&(te=i.RGBA32UI),B===i.BYTE&&(te=i.RGBA8I),B===i.SHORT&&(te=i.RGBA16I),B===i.INT&&(te=i.RGBA32I)),S===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(te=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(te=i.R11F_G11F_B10F)),S===i.RGBA){const Ve=oe?mc:vt.getTransfer(ne);B===i.FLOAT&&(te=i.RGBA32F),B===i.HALF_FLOAT&&(te=i.RGBA16F),B===i.UNSIGNED_BYTE&&(te=Ve===At?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function L(D,S){let B;return D?S===null||S===hi||S===Oo?B=i.DEPTH24_STENCIL8:S===ni?B=i.DEPTH32F_STENCIL8:S===Uo&&(B=i.DEPTH24_STENCIL8,nt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===hi||S===Oo?B=i.DEPTH_COMPONENT24:S===ni?B=i.DEPTH_COMPONENT32F:S===Uo&&(B=i.DEPTH_COMPONENT16),B}function U(D,S){return _(D)===!0||D.isFramebufferTexture&&D.minFilter!==rn&&D.minFilter!==dn?Math.log2(Math.max(S.width,S.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?S.mipmaps.length:1}function F(D){const S=D.target;S.removeEventListener("dispose",F),m(S),S.isVideoTexture&&h.delete(S)}function A(D){const S=D.target;S.removeEventListener("dispose",A),P(S)}function m(D){const S=n.get(D);if(S.__webglInit===void 0)return;const B=D.source,ne=d.get(B);if(ne){const oe=ne[S.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&y(D),Object.keys(ne).length===0&&d.delete(B)}n.remove(D)}function y(D){const S=n.get(D);i.deleteTexture(S.__webglTexture);const B=D.source,ne=d.get(B);delete ne[S.__cacheKey],o.memory.textures--}function P(D){const S=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(S.__webglFramebuffer[ne]))for(let oe=0;oe<S.__webglFramebuffer[ne].length;oe++)i.deleteFramebuffer(S.__webglFramebuffer[ne][oe]);else i.deleteFramebuffer(S.__webglFramebuffer[ne]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ne])}else{if(Array.isArray(S.__webglFramebuffer))for(let ne=0;ne<S.__webglFramebuffer.length;ne++)i.deleteFramebuffer(S.__webglFramebuffer[ne]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ne=0;ne<S.__webglColorRenderbuffer.length;ne++)S.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ne]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=D.textures;for(let ne=0,oe=B.length;ne<oe;ne++){const te=n.get(B[ne]);te.__webglTexture&&(i.deleteTexture(te.__webglTexture),o.memory.textures--),n.remove(B[ne])}n.remove(D)}let T=0;function C(){T=0}function M(){const D=T;return D>=r.maxTextures&&nt("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),T+=1,D}function Y(D){const S=[];return S.push(D.wrapS),S.push(D.wrapT),S.push(D.wrapR||0),S.push(D.magFilter),S.push(D.minFilter),S.push(D.anisotropy),S.push(D.internalFormat),S.push(D.format),S.push(D.type),S.push(D.generateMipmaps),S.push(D.premultiplyAlpha),S.push(D.flipY),S.push(D.unpackAlignment),S.push(D.colorSpace),S.join()}function q(D,S){const B=n.get(D);if(D.isVideoTexture&&Ke(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&B.__version!==D.version){const ne=D.image;if(ne===null)nt("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)nt("WebGLRenderer: Texture marked for update but image is incomplete");else{V(B,D,S);return}}else D.isExternalTexture&&(B.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+S)}function J(D,S){const B=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&B.__version!==D.version){V(B,D,S);return}else D.isExternalTexture&&(B.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+S)}function H(D,S){const B=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&B.__version!==D.version){V(B,D,S);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+S)}function le(D,S){const B=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&B.__version!==D.version){G(B,D,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+S)}const ae={[_u]:i.REPEAT,[Mi]:i.CLAMP_TO_EDGE,[vu]:i.MIRRORED_REPEAT},Ae={[rn]:i.NEAREST,[v0]:i.NEAREST_MIPMAP_NEAREST,[xa]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[_l]:i.LINEAR_MIPMAP_NEAREST,[Br]:i.LINEAR_MIPMAP_LINEAR},Pe={[S0]:i.NEVER,[b0]:i.ALWAYS,[T0]:i.LESS,[Nh]:i.LEQUAL,[A0]:i.EQUAL,[Uh]:i.GEQUAL,[M0]:i.GREATER,[w0]:i.NOTEQUAL};function Me(D,S){if(S.type===ni&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===dn||S.magFilter===_l||S.magFilter===xa||S.magFilter===Br||S.minFilter===dn||S.minFilter===_l||S.minFilter===xa||S.minFilter===Br)&&nt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,ae[S.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,ae[S.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,ae[S.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,Ae[S.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,Ae[S.minFilter]),S.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Pe[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===rn||S.minFilter!==xa&&S.minFilter!==Br||S.type===ni&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Qe(D,S){let B=!1;D.__webglInit===void 0&&(D.__webglInit=!0,S.addEventListener("dispose",F));const ne=S.source;let oe=d.get(ne);oe===void 0&&(oe={},d.set(ne,oe));const te=Y(S);if(te!==D.__cacheKey){oe[te]===void 0&&(oe[te]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),oe[te].usedTimes++;const Ve=oe[D.__cacheKey];Ve!==void 0&&(oe[D.__cacheKey].usedTimes--,Ve.usedTimes===0&&y(S)),D.__cacheKey=te,D.__webglTexture=oe[te].texture}return B}function Et(D,S,B){return Math.floor(Math.floor(D/B)/S)}function xt(D,S,B,ne){const te=D.updateRanges;if(te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,B,ne,S.data);else{te.sort((ce,de)=>ce.start-de.start);let Ve=0;for(let ce=1;ce<te.length;ce++){const de=te[Ve],Ue=te[ce],Re=de.start+de.count,be=Et(Ue.start,S.width,4),et=Et(de.start,S.width,4);Ue.start<=Re+1&&be===et&&Et(Ue.start+Ue.count-1,S.width,4)===be?de.count=Math.max(de.count,Ue.start+Ue.count-de.start):(++Ve,te[Ve]=Ue)}te.length=Ve+1;const _e=i.getParameter(i.UNPACK_ROW_LENGTH),ze=i.getParameter(i.UNPACK_SKIP_PIXELS),Xe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let ce=0,de=te.length;ce<de;ce++){const Ue=te[ce],Re=Math.floor(Ue.start/4),be=Math.ceil(Ue.count/4),et=Re%S.width,k=Math.floor(Re/S.width),me=be,pe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,et),i.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,et,k,me,pe,B,ne,S.data)}D.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,_e),i.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(i.UNPACK_SKIP_ROWS,Xe)}}function V(D,S,B){let ne=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ne=i.TEXTURE_3D);const oe=Qe(D,S),te=S.source;t.bindTexture(ne,D.__webglTexture,i.TEXTURE0+B);const Ve=n.get(te);if(te.version!==Ve.__version||oe===!0){t.activeTexture(i.TEXTURE0+B);const _e=vt.getPrimaries(vt.workingColorSpace),ze=S.colorSpace===ir?null:vt.getPrimaries(S.colorSpace),Xe=S.colorSpace===ir||_e===ze?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let ce=b(S.image,!1,r.maxTextureSize);ce=pt(S,ce);const de=s.convert(S.format,S.colorSpace),Ue=s.convert(S.type);let Re=N(S.internalFormat,de,Ue,S.colorSpace,S.isVideoTexture);Me(ne,S);let be;const et=S.mipmaps,k=S.isVideoTexture!==!0,me=Ve.__version===void 0||oe===!0,pe=te.dataReady,ve=U(S,ce);if(S.isDepthTexture)Re=L(S.format===zr,S.type),me&&(k?t.texStorage2D(i.TEXTURE_2D,1,Re,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,Re,ce.width,ce.height,0,de,Ue,null));else if(S.isDataTexture)if(et.length>0){k&&me&&t.texStorage2D(i.TEXTURE_2D,ve,Re,et[0].width,et[0].height);for(let ue=0,ee=et.length;ue<ee;ue++)be=et[ue],k?pe&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,be.width,be.height,de,Ue,be.data):t.texImage2D(i.TEXTURE_2D,ue,Re,be.width,be.height,0,de,Ue,be.data);S.generateMipmaps=!1}else k?(me&&t.texStorage2D(i.TEXTURE_2D,ve,Re,ce.width,ce.height),pe&&xt(S,ce,de,Ue)):t.texImage2D(i.TEXTURE_2D,0,Re,ce.width,ce.height,0,de,Ue,ce.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){k&&me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Re,et[0].width,et[0].height,ce.depth);for(let ue=0,ee=et.length;ue<ee;ue++)if(be=et[ue],S.format!==Hn)if(de!==null)if(k){if(pe)if(S.layerUpdates.size>0){const De=Pf(be.width,be.height,S.format,S.type);for(const Je of S.layerUpdates){const wt=be.data.subarray(Je*De/be.data.BYTES_PER_ELEMENT,(Je+1)*De/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,Je,be.width,be.height,1,de,wt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,be.width,be.height,ce.depth,de,be.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,Re,be.width,be.height,ce.depth,0,be.data,0,0);else nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,be.width,be.height,ce.depth,de,Ue,be.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,Re,be.width,be.height,ce.depth,0,de,Ue,be.data)}else{k&&me&&t.texStorage2D(i.TEXTURE_2D,ve,Re,et[0].width,et[0].height);for(let ue=0,ee=et.length;ue<ee;ue++)be=et[ue],S.format!==Hn?de!==null?k?pe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,be.width,be.height,de,be.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,Re,be.width,be.height,0,be.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?pe&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,be.width,be.height,de,Ue,be.data):t.texImage2D(i.TEXTURE_2D,ue,Re,be.width,be.height,0,de,Ue,be.data)}else if(S.isDataArrayTexture)if(k){if(me&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ve,Re,ce.width,ce.height,ce.depth),pe)if(S.layerUpdates.size>0){const ue=Pf(ce.width,ce.height,S.format,S.type);for(const ee of S.layerUpdates){const De=ce.data.subarray(ee*ue/ce.data.BYTES_PER_ELEMENT,(ee+1)*ue/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,ce.width,ce.height,1,de,Ue,De)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,de,Ue,ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,ce.width,ce.height,ce.depth,0,de,Ue,ce.data);else if(S.isData3DTexture)k?(me&&t.texStorage3D(i.TEXTURE_3D,ve,Re,ce.width,ce.height,ce.depth),pe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,de,Ue,ce.data)):t.texImage3D(i.TEXTURE_3D,0,Re,ce.width,ce.height,ce.depth,0,de,Ue,ce.data);else if(S.isFramebufferTexture){if(me)if(k)t.texStorage2D(i.TEXTURE_2D,ve,Re,ce.width,ce.height);else{let ue=ce.width,ee=ce.height;for(let De=0;De<ve;De++)t.texImage2D(i.TEXTURE_2D,De,Re,ue,ee,0,de,Ue,null),ue>>=1,ee>>=1}}else if(et.length>0){if(k&&me){const ue=Ne(et[0]);t.texStorage2D(i.TEXTURE_2D,ve,Re,ue.width,ue.height)}for(let ue=0,ee=et.length;ue<ee;ue++)be=et[ue],k?pe&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,de,Ue,be):t.texImage2D(i.TEXTURE_2D,ue,Re,de,Ue,be);S.generateMipmaps=!1}else if(k){if(me){const ue=Ne(ce);t.texStorage2D(i.TEXTURE_2D,ve,Re,ue.width,ue.height)}pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,Ue,ce)}else t.texImage2D(i.TEXTURE_2D,0,Re,de,Ue,ce);_(S)&&v(ne),Ve.__version=te.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function G(D,S,B){if(S.image.length!==6)return;const ne=Qe(D,S),oe=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+B);const te=n.get(oe);if(oe.version!==te.__version||ne===!0){t.activeTexture(i.TEXTURE0+B);const Ve=vt.getPrimaries(vt.workingColorSpace),_e=S.colorSpace===ir?null:vt.getPrimaries(S.colorSpace),ze=S.colorSpace===ir||Ve===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const Xe=S.isCompressedTexture||S.image[0].isCompressedTexture,ce=S.image[0]&&S.image[0].isDataTexture,de=[];for(let ee=0;ee<6;ee++)!Xe&&!ce?de[ee]=b(S.image[ee],!0,r.maxCubemapSize):de[ee]=ce?S.image[ee].image:S.image[ee],de[ee]=pt(S,de[ee]);const Ue=de[0],Re=s.convert(S.format,S.colorSpace),be=s.convert(S.type),et=N(S.internalFormat,Re,be,S.colorSpace),k=S.isVideoTexture!==!0,me=te.__version===void 0||ne===!0,pe=oe.dataReady;let ve=U(S,Ue);Me(i.TEXTURE_CUBE_MAP,S);let ue;if(Xe){k&&me&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,et,Ue.width,Ue.height);for(let ee=0;ee<6;ee++){ue=de[ee].mipmaps;for(let De=0;De<ue.length;De++){const Je=ue[De];S.format!==Hn?Re!==null?k?pe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De,0,0,Je.width,Je.height,Re,Je.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De,et,Je.width,Je.height,0,Je.data):nt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De,0,0,Je.width,Je.height,Re,be,Je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De,et,Je.width,Je.height,0,Re,be,Je.data)}}}else{if(ue=S.mipmaps,k&&me){ue.length>0&&ve++;const ee=Ne(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ve,et,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ce){k?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,de[ee].width,de[ee].height,Re,be,de[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,et,de[ee].width,de[ee].height,0,Re,be,de[ee].data);for(let De=0;De<ue.length;De++){const wt=ue[De].image[ee].image;k?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De+1,0,0,wt.width,wt.height,Re,be,wt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De+1,et,wt.width,wt.height,0,Re,be,wt.data)}}else{k?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Re,be,de[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,et,Re,be,de[ee]);for(let De=0;De<ue.length;De++){const Je=ue[De];k?pe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De+1,0,0,Re,be,Je.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,De+1,et,Re,be,Je.image[ee])}}}_(S)&&v(i.TEXTURE_CUBE_MAP),te.__version=oe.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function Q(D,S,B,ne,oe,te){const Ve=s.convert(B.format,B.colorSpace),_e=s.convert(B.type),ze=N(B.internalFormat,Ve,_e,B.colorSpace),Xe=n.get(S),ce=n.get(B);if(ce.__renderTarget=S,!Xe.__hasExternalTextures){const de=Math.max(1,S.width>>te),Ue=Math.max(1,S.height>>te);oe===i.TEXTURE_3D||oe===i.TEXTURE_2D_ARRAY?t.texImage3D(oe,te,ze,de,Ue,S.depth,0,Ve,_e,null):t.texImage2D(oe,te,ze,de,Ue,0,Ve,_e,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),rt(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,oe,ce.__webglTexture,0,O(S)):(oe===i.TEXTURE_2D||oe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,oe,ce.__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function re(D,S,B){if(i.bindRenderbuffer(i.RENDERBUFFER,D),S.depthBuffer){const ne=S.depthTexture,oe=ne&&ne.isDepthTexture?ne.type:null,te=L(S.stencilBuffer,oe),Ve=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;rt(S)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,O(S),te,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,O(S),te,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,te,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ve,i.RENDERBUFFER,D)}else{const ne=S.textures;for(let oe=0;oe<ne.length;oe++){const te=ne[oe],Ve=s.convert(te.format,te.colorSpace),_e=s.convert(te.type),ze=N(te.internalFormat,Ve,_e,te.colorSpace);rt(S)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,O(S),ze,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,O(S),ze,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ze,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(D,S,B){const ne=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=n.get(S.depthTexture);if(oe.__renderTarget=S,(!oe.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),ne){if(oe.__webglInit===void 0&&(oe.__webglInit=!0,S.depthTexture.addEventListener("dispose",F)),oe.__webglTexture===void 0){oe.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),Me(i.TEXTURE_CUBE_MAP,S.depthTexture);const Xe=s.convert(S.depthTexture.format),ce=s.convert(S.depthTexture.type);let de;S.depthTexture.format===Ui?de=i.DEPTH_COMPONENT24:S.depthTexture.format===zr&&(de=i.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,de,S.width,S.height,0,Xe,ce,null)}}else q(S.depthTexture,0);const te=oe.__webglTexture,Ve=O(S),_e=ne?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,ze=S.depthTexture.format===zr?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Ui)rt(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ze,_e,te,0,Ve):i.framebufferTexture2D(i.FRAMEBUFFER,ze,_e,te,0);else if(S.depthTexture.format===zr)rt(S)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ze,_e,te,0,Ve):i.framebufferTexture2D(i.FRAMEBUFFER,ze,_e,te,0);else throw new Error("Unknown depthTexture format")}function fe(D){const S=n.get(D),B=D.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==D.depthTexture){const ne=D.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ne){const oe=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ne.removeEventListener("dispose",oe)};ne.addEventListener("dispose",oe),S.__depthDisposeCallback=oe}S.__boundDepthTexture=ne}if(D.depthTexture&&!S.__autoAllocateDepthBuffer)if(B)for(let ne=0;ne<6;ne++)he(S.__webglFramebuffer[ne],D,ne);else{const ne=D.texture.mipmaps;ne&&ne.length>0?he(S.__webglFramebuffer[0],D,0):he(S.__webglFramebuffer,D,0)}else if(B){S.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ne]),S.__webglDepthbuffer[ne]===void 0)S.__webglDepthbuffer[ne]=i.createRenderbuffer(),re(S.__webglDepthbuffer[ne],D,!1);else{const oe=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=S.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,te)}}else{const ne=D.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),re(S.__webglDepthbuffer,D,!1);else{const oe=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,te=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,te),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,te)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function We(D,S,B){const ne=n.get(D);S!==void 0&&Q(ne.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&fe(D)}function ge(D){const S=D.texture,B=n.get(D),ne=n.get(S);D.addEventListener("dispose",A);const oe=D.textures,te=D.isWebGLCubeRenderTarget===!0,Ve=oe.length>1;if(Ve||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=S.version,o.memory.textures++),te){B.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[_e]=[];for(let ze=0;ze<S.mipmaps.length;ze++)B.__webglFramebuffer[_e][ze]=i.createFramebuffer()}else B.__webglFramebuffer[_e]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let _e=0;_e<S.mipmaps.length;_e++)B.__webglFramebuffer[_e]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Ve)for(let _e=0,ze=oe.length;_e<ze;_e++){const Xe=n.get(oe[_e]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&rt(D)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let _e=0;_e<oe.length;_e++){const ze=oe[_e];B.__webglColorRenderbuffer[_e]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[_e]);const Xe=s.convert(ze.format,ze.colorSpace),ce=s.convert(ze.type),de=N(ze.internalFormat,Xe,ce,ze.colorSpace,D.isXRRenderTarget===!0),Ue=O(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,de,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_e,i.RENDERBUFFER,B.__webglColorRenderbuffer[_e])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),re(B.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Me(i.TEXTURE_CUBE_MAP,S);for(let _e=0;_e<6;_e++)if(S.mipmaps&&S.mipmaps.length>0)for(let ze=0;ze<S.mipmaps.length;ze++)Q(B.__webglFramebuffer[_e][ze],D,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ze);else Q(B.__webglFramebuffer[_e],D,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);_(S)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let _e=0,ze=oe.length;_e<ze;_e++){const Xe=oe[_e],ce=n.get(Xe);let de=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(de=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,ce.__webglTexture),Me(de,Xe),Q(B.__webglFramebuffer,D,Xe,i.COLOR_ATTACHMENT0+_e,de,0),_(Xe)&&v(de)}t.unbindTexture()}else{let _e=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(_e=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(_e,ne.__webglTexture),Me(_e,S),S.mipmaps&&S.mipmaps.length>0)for(let ze=0;ze<S.mipmaps.length;ze++)Q(B.__webglFramebuffer[ze],D,S,i.COLOR_ATTACHMENT0,_e,ze);else Q(B.__webglFramebuffer,D,S,i.COLOR_ATTACHMENT0,_e,0);_(S)&&v(_e),t.unbindTexture()}D.depthBuffer&&fe(D)}function we(D){const S=D.textures;for(let B=0,ne=S.length;B<ne;B++){const oe=S[B];if(_(oe)){const te=R(D),Ve=n.get(oe).__webglTexture;t.bindTexture(te,Ve),v(te),t.unbindTexture()}}}const qe=[],Fe=[];function ct(D){if(D.samples>0){if(rt(D)===!1){const S=D.textures,B=D.width,ne=D.height;let oe=i.COLOR_BUFFER_BIT;const te=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ve=n.get(D),_e=S.length>1;if(_e)for(let Xe=0;Xe<S.length;Xe++)t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer);const ze=D.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let Xe=0;Xe<S.length;Xe++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(oe|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(oe|=i.STENCIL_BUFFER_BIT)),_e){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ve.__webglColorRenderbuffer[Xe]);const ce=n.get(S[Xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,B,ne,0,0,B,ne,oe,i.NEAREST),l===!0&&(qe.length=0,Fe.length=0,qe.push(i.COLOR_ATTACHMENT0+Xe),D.depthBuffer&&D.resolveDepthBuffer===!1&&(qe.push(te),Fe.push(te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,qe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_e)for(let Xe=0;Xe<S.length;Xe++){t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.RENDERBUFFER,Ve.__webglColorRenderbuffer[Xe]);const ce=n.get(S[Xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.TEXTURE_2D,ce,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const S=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function O(D){return Math.min(r.maxSamples,D.samples)}function rt(D){const S=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ke(D){const S=o.render.frame;h.get(D)!==S&&(h.set(D,S),D.update())}function pt(D,S){const B=D.colorSpace,ne=D.format,oe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||B!==ks&&B!==ir&&(vt.getTransfer(B)===At?(ne!==Hn||oe!==Pn)&&nt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):yt("WebGLTextures: Unsupported texture color space:",B)),S}function Ne(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(u.width=D.naturalWidth||D.width,u.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(u.width=D.displayWidth,u.height=D.displayHeight):(u.width=D.width,u.height=D.height),u}this.allocateTextureUnit=M,this.resetTextureUnits=C,this.setTexture2D=q,this.setTexture2DArray=J,this.setTexture3D=H,this.setTextureCube=le,this.rebindTextures=We,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=rt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function YT(i,e){function t(n,r=ir){let s;const o=vt.getTransfer(r);if(n===Pn)return i.UNSIGNED_BYTE;if(n===Rh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ch)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xm)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hm)return i.BYTE;if(n===Wm)return i.SHORT;if(n===Uo)return i.UNSIGNED_SHORT;if(n===Ih)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===ni)return i.FLOAT;if(n===Ni)return i.HALF_FLOAT;if(n===$m)return i.ALPHA;if(n===jm)return i.RGB;if(n===Hn)return i.RGBA;if(n===Ui)return i.DEPTH_COMPONENT;if(n===zr)return i.DEPTH_STENCIL;if(n===Km)return i.RED;if(n===Ph)return i.RED_INTEGER;if(n===Vs)return i.RG;if(n===Dh)return i.RG_INTEGER;if(n===Lh)return i.RGBA_INTEGER;if(n===ec||n===tc||n===nc||n===ic)if(o===At)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===ec)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===ec)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===nc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ic)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yu||n===Eu||n===xu||n===Su)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===yu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Eu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Su)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Tu||n===Au||n===Mu||n===wu||n===bu||n===Iu||n===Ru)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Tu||n===Au)return o===At?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Mu)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===wu)return s.COMPRESSED_R11_EAC;if(n===bu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Iu)return s.COMPRESSED_RG11_EAC;if(n===Ru)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Cu||n===Pu||n===Du||n===Lu||n===Nu||n===Uu||n===Ou||n===Fu||n===Vu||n===ku||n===Bu||n===zu||n===Gu||n===Hu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Cu)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pu)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Du)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lu)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nu)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Uu)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ou)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fu)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vu)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ku)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Bu)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zu)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gu)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hu)return o===At?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wu||n===qu||n===Xu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Wu)return o===At?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$u||n===ju||n===Ku||n===Yu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===$u)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ju)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ku)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Oo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const QT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,JT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ZT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new ag(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new di({vertexShader:QT,fragmentShader:JT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fi(new Bc(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class eA extends js{constructor(e,t){super();const n=this;let r=null,s=1,o=null,c="local-floor",l=1,u=null,h=null,f=null,d=null,g=null,x=null;const b=typeof XRWebGLBinding<"u",_=new ZT,v={},R=t.getContextAttributes();let N=null,L=null;const U=[],F=[],A=new bt;let m=null;const y=new Cn;y.viewport=new kt;const P=new Cn;P.viewport=new kt;const T=[y,P],C=new dy;let M=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let G=U[V];return G===void 0&&(G=new Ml,U[V]=G),G.getTargetRaySpace()},this.getControllerGrip=function(V){let G=U[V];return G===void 0&&(G=new Ml,U[V]=G),G.getGripSpace()},this.getHand=function(V){let G=U[V];return G===void 0&&(G=new Ml,U[V]=G),G.getHandSpace()};function q(V){const G=F.indexOf(V.inputSource);if(G===-1)return;const Q=U[G];Q!==void 0&&(Q.update(V.inputSource,V.frame,u||o),Q.dispatchEvent({type:V.type,data:V.inputSource}))}function J(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",J),r.removeEventListener("inputsourceschange",H);for(let V=0;V<U.length;V++){const G=F[V];G!==null&&(F[V]=null,U[V].disconnect(G))}M=null,Y=null,_.reset();for(const V in v)delete v[V];e.setRenderTarget(N),g=null,d=null,f=null,r=null,L=null,xt.stop(),n.isPresenting=!1,e.setPixelRatio(m),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&nt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){c=V,n.isPresenting===!0&&nt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(V){u=V},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return f===null&&b&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(N=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",J),r.addEventListener("inputsourceschange",H),R.xrCompatible!==!0&&await t.makeXRCompatible(),m=e.getPixelRatio(),e.getSize(A),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,re=null,he=null;R.depth&&(he=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=R.stencil?zr:Ui,re=R.stencil?Oo:hi);const fe={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(fe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),L=new si(d.textureWidth,d.textureHeight,{format:Hn,type:Pn,depthTexture:new Fo(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Q={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),L=new si(g.framebufferWidth,g.framebufferHeight,{format:Hn,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(c),xt.setContext(r),xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function H(V){for(let G=0;G<V.removed.length;G++){const Q=V.removed[G],re=F.indexOf(Q);re>=0&&(F[re]=null,U[re].disconnect(Q))}for(let G=0;G<V.added.length;G++){const Q=V.added[G];let re=F.indexOf(Q);if(re===-1){for(let fe=0;fe<U.length;fe++)if(fe>=F.length){F.push(Q),re=fe;break}else if(F[fe]===null){F[fe]=Q,re=fe;break}if(re===-1)break}const he=U[re];he&&he.connect(Q)}}const le=new j,ae=new j;function Ae(V,G,Q){le.setFromMatrixPosition(G.matrixWorld),ae.setFromMatrixPosition(Q.matrixWorld);const re=le.distanceTo(ae),he=G.projectionMatrix.elements,fe=Q.projectionMatrix.elements,We=he[14]/(he[10]-1),ge=he[14]/(he[10]+1),we=(he[9]+1)/he[5],qe=(he[9]-1)/he[5],Fe=(he[8]-1)/he[0],ct=(fe[8]+1)/fe[0],O=We*Fe,rt=We*ct,Ke=re/(-Fe+ct),pt=Ke*-Fe;if(G.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(pt),V.translateZ(Ke),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),he[10]===-1)V.projectionMatrix.copy(G.projectionMatrix),V.projectionMatrixInverse.copy(G.projectionMatrixInverse);else{const Ne=We+Ke,D=ge+Ke,S=O-pt,B=rt+(re-pt),ne=we*ge/D*Ne,oe=qe*ge/D*Ne;V.projectionMatrix.makePerspective(S,B,ne,oe,Ne,D),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function Pe(V,G){G===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(G.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let G=V.near,Q=V.far;_.texture!==null&&(_.depthNear>0&&(G=_.depthNear),_.depthFar>0&&(Q=_.depthFar)),C.near=P.near=y.near=G,C.far=P.far=y.far=Q,(M!==C.near||Y!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),M=C.near,Y=C.far),C.layers.mask=V.layers.mask|6,y.layers.mask=C.layers.mask&-5,P.layers.mask=C.layers.mask&-3;const re=V.parent,he=C.cameras;Pe(C,re);for(let fe=0;fe<he.length;fe++)Pe(he[fe],re);he.length===2?Ae(C,y,P):C.projectionMatrix.copy(y.projectionMatrix),Me(V,C,re)};function Me(V,G,Q){Q===null?V.matrix.copy(G.matrixWorld):(V.matrix.copy(Q.matrixWorld),V.matrix.invert(),V.matrix.multiply(G.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(G.projectionMatrix),V.projectionMatrixInverse.copy(G.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Qu*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(C)},this.getCameraTexture=function(V){return v[V]};let Qe=null;function Et(V,G){if(h=G.getViewerPose(u||o),x=G,h!==null){const Q=h.views;g!==null&&(e.setRenderTargetFramebuffer(L,g.framebuffer),e.setRenderTarget(L));let re=!1;Q.length!==C.cameras.length&&(C.cameras.length=0,re=!0);for(let ge=0;ge<Q.length;ge++){const we=Q[ge];let qe=null;if(g!==null)qe=g.getViewport(we);else{const ct=f.getViewSubImage(d,we);qe=ct.viewport,ge===0&&(e.setRenderTargetTextures(L,ct.colorTexture,ct.depthStencilTexture),e.setRenderTarget(L))}let Fe=T[ge];Fe===void 0&&(Fe=new Cn,Fe.layers.enable(ge),Fe.viewport=new kt,T[ge]=Fe),Fe.matrix.fromArray(we.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(we.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(qe.x,qe.y,qe.width,qe.height),ge===0&&(C.matrix.copy(Fe.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),re===!0&&C.cameras.push(Fe)}const he=r.enabledFeatures;if(he&&he.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){f=n.getBinding();const ge=f.getDepthInformation(Q[0]);ge&&ge.isValid&&ge.texture&&_.init(ge,r.renderState)}if(he&&he.includes("camera-access")&&b){e.state.unbindTexture(),f=n.getBinding();for(let ge=0;ge<Q.length;ge++){const we=Q[ge].camera;if(we){let qe=v[we];qe||(qe=new ag,v[we]=qe);const Fe=f.getCameraImage(we);qe.sourceTexture=Fe}}}}for(let Q=0;Q<U.length;Q++){const re=F[Q],he=U[Q];re!==null&&he!==void 0&&he.update(re,G,u||o)}Qe&&Qe(V,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),x=null}const xt=new hg;xt.setAnimationLoop(Et),this.setAnimationLoop=function(V){Qe=V},this.dispose=function(){}}}const Ur=new Oi,tA=new Bt;function nA(i,e){function t(_,v){_.matrixAutoUpdate===!0&&_.updateMatrix(),v.value.copy(_.matrix)}function n(_,v){v.color.getRGB(_.fogColor.value,cg(i)),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function r(_,v,R,N,L){v.isMeshBasicMaterial?s(_,v):v.isMeshLambertMaterial?(s(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(s(_,v),f(_,v)):v.isMeshPhongMaterial?(s(_,v),h(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(s(_,v),d(_,v),v.isMeshPhysicalMaterial&&g(_,v,L)):v.isMeshMatcapMaterial?(s(_,v),x(_,v)):v.isMeshDepthMaterial?s(_,v):v.isMeshDistanceMaterial?(s(_,v),b(_,v)):v.isMeshNormalMaterial?s(_,v):v.isLineBasicMaterial?(o(_,v),v.isLineDashedMaterial&&c(_,v)):v.isPointsMaterial?l(_,v,R,N):v.isSpriteMaterial?u(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function s(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map,t(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,t(v.alphaMap,_.alphaMapTransform)),v.bumpMap&&(_.bumpMap.value=v.bumpMap,t(v.bumpMap,_.bumpMapTransform),_.bumpScale.value=v.bumpScale,v.side===En&&(_.bumpScale.value*=-1)),v.normalMap&&(_.normalMap.value=v.normalMap,t(v.normalMap,_.normalMapTransform),_.normalScale.value.copy(v.normalScale),v.side===En&&_.normalScale.value.negate()),v.displacementMap&&(_.displacementMap.value=v.displacementMap,t(v.displacementMap,_.displacementMapTransform),_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,_.emissiveMapTransform)),v.specularMap&&(_.specularMap.value=v.specularMap,t(v.specularMap,_.specularMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const R=e.get(v),N=R.envMap,L=R.envMapRotation;N&&(_.envMap.value=N,Ur.copy(L),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),_.envMapRotation.value.setFromMatrix4(tA.makeRotationFromEuler(Ur)),_.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap&&(_.lightMap.value=v.lightMap,_.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,_.lightMapTransform)),v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,_.aoMapTransform))}function o(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,v.map&&(_.map.value=v.map,t(v.map,_.mapTransform))}function c(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function l(_,v,R,N){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*R,_.scale.value=N*.5,v.map&&(_.map.value=v.map,t(v.map,_.uvTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,t(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function u(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map,t(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,t(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function h(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function f(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function d(_,v){_.metalness.value=v.metalness,v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,_.metalnessMapTransform)),_.roughness.value=v.roughness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,_.roughnessMapTransform)),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function g(_,v,R){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,_.sheenColorMapTransform)),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,_.sheenRoughnessMapTransform))),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,_.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(_.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===En&&_.clearcoatNormalScale.value.negate())),v.dispersion>0&&(_.dispersion.value=v.dispersion),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,_.iridescenceMapTransform)),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=R.texture,_.transmissionSamplerSize.value.set(R.width,R.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,_.transmissionMapTransform)),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(_.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(_.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,_.specularColorMapTransform)),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,_.specularIntensityMapTransform))}function x(_,v){v.matcap&&(_.matcap.value=v.matcap)}function b(_,v){const R=e.get(v).light;_.referencePosition.value.setFromMatrixPosition(R.matrixWorld),_.nearDistance.value=R.shadow.camera.near,_.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function iA(i,e,t,n){let r={},s={},o=[];const c=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,N){const L=N.program;n.uniformBlockBinding(R,L)}function u(R,N){let L=r[R.id];L===void 0&&(x(R),L=h(R),r[R.id]=L,R.addEventListener("dispose",_));const U=N.program;n.updateUBOMapping(R,U);const F=e.render.frame;s[R.id]!==F&&(d(R),s[R.id]=F)}function h(R){const N=f();R.__bindingPointIndex=N;const L=i.createBuffer(),U=R.__size,F=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,L),i.bufferData(i.UNIFORM_BUFFER,U,F),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,N,L),L}function f(){for(let R=0;R<c;R++)if(o.indexOf(R)===-1)return o.push(R),R;return yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){const N=r[R.id],L=R.uniforms,U=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,N);for(let F=0,A=L.length;F<A;F++){const m=Array.isArray(L[F])?L[F]:[L[F]];for(let y=0,P=m.length;y<P;y++){const T=m[y];if(g(T,F,y,U)===!0){const C=T.__offset,M=Array.isArray(T.value)?T.value:[T.value];let Y=0;for(let q=0;q<M.length;q++){const J=M[q],H=b(J);typeof J=="number"||typeof J=="boolean"?(T.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,C+Y,T.__data)):J.isMatrix3?(T.__data[0]=J.elements[0],T.__data[1]=J.elements[1],T.__data[2]=J.elements[2],T.__data[3]=0,T.__data[4]=J.elements[3],T.__data[5]=J.elements[4],T.__data[6]=J.elements[5],T.__data[7]=0,T.__data[8]=J.elements[6],T.__data[9]=J.elements[7],T.__data[10]=J.elements[8],T.__data[11]=0):(J.toArray(T.__data,Y),Y+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,C,T.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(R,N,L,U){const F=R.value,A=N+"_"+L;if(U[A]===void 0)return typeof F=="number"||typeof F=="boolean"?U[A]=F:U[A]=F.clone(),!0;{const m=U[A];if(typeof F=="number"||typeof F=="boolean"){if(m!==F)return U[A]=F,!0}else if(m.equals(F)===!1)return m.copy(F),!0}return!1}function x(R){const N=R.uniforms;let L=0;const U=16;for(let A=0,m=N.length;A<m;A++){const y=Array.isArray(N[A])?N[A]:[N[A]];for(let P=0,T=y.length;P<T;P++){const C=y[P],M=Array.isArray(C.value)?C.value:[C.value];for(let Y=0,q=M.length;Y<q;Y++){const J=M[Y],H=b(J),le=L%U,ae=le%H.boundary,Ae=le+ae;L+=ae,Ae!==0&&U-Ae<H.storage&&(L+=U-Ae),C.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=L,L+=H.storage}}}const F=L%U;return F>0&&(L+=U-F),R.__size=L,R.__cache={},this}function b(R){const N={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(N.boundary=4,N.storage=4):R.isVector2?(N.boundary=8,N.storage=8):R.isVector3||R.isColor?(N.boundary=16,N.storage=12):R.isVector4?(N.boundary=16,N.storage=16):R.isMatrix3?(N.boundary=48,N.storage=48):R.isMatrix4?(N.boundary=64,N.storage=64):R.isTexture?nt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):nt("WebGLRenderer: Unsupported uniform value type.",R),N}function _(R){const N=R.target;N.removeEventListener("dispose",_);const L=o.indexOf(N.__bindingPointIndex);o.splice(L,1),i.deleteBuffer(r[N.id]),delete r[N.id],delete s[N.id]}function v(){for(const R in r)i.deleteBuffer(r[R]);o=[],r={},s={}}return{bind:l,update:u,dispose:v}}const rA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zn=null;function sA(){return Zn===null&&(Zn=new J0(rA,16,16,Vs,Ni),Zn.name="DFG_LUT",Zn.minFilter=dn,Zn.magFilter=dn,Zn.wrapS=Mi,Zn.wrapT=Mi,Zn.generateMipmaps=!1,Zn.needsUpdate=!0),Zn}class oA{constructor(e={}){const{canvas:t=R0(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:c=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:g=Pn}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=o;const b=g,_=new Set([Lh,Dh,Ph]),v=new Set([Pn,hi,Uo,Oo,Rh,Ch]),R=new Uint32Array(4),N=new Int32Array(4);let L=null,U=null;const F=[],A=[];let m=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let P=!1;this._outputColorSpace=Rn;let T=0,C=0,M=null,Y=-1,q=null;const J=new kt,H=new kt;let le=null;const ae=new Mt(0);let Ae=0,Pe=t.width,Me=t.height,Qe=1,Et=null,xt=null;const V=new kt(0,0,Pe,Me),G=new kt(0,0,Pe,Me);let Q=!1;const re=new rg;let he=!1,fe=!1;const We=new Bt,ge=new j,we=new kt,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Fe=!1;function ct(){return M===null?Qe:1}let O=n;function rt(w,z){return t.getContext(w,z)}try{const w={alpha:!0,depth:r,stencil:s,antialias:c,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bh}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",wt,!1),O===null){const z="webgl2";if(O=rt(z,w),O===null)throw rt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw yt("WebGLRenderer: "+w.message),w}let Ke,pt,Ne,D,S,B,ne,oe,te,Ve,_e,ze,Xe,ce,de,Ue,Re,be,et,k,me,pe,ve;function ue(){Ke=new oS(O),Ke.init(),me=new YT(O,Ke),pt=new Jx(O,Ke,e,me),Ne=new jT(O,Ke),pt.reversedDepthBuffer&&d&&Ne.buffers.depth.setReversed(!0),D=new lS(O),S=new NT,B=new KT(O,Ke,Ne,S,pt,me,D),ne=new sS(y),oe=new py(O),pe=new Yx(O,oe),te=new aS(O,oe,D,pe),Ve=new hS(O,te,oe,pe,D),be=new uS(O,pt,B),de=new Zx(S),_e=new LT(y,ne,Ke,pt,pe,de),ze=new nA(y,S),Xe=new OT,ce=new GT(Ke),Re=new Kx(y,ne,Ne,Ve,x,l),Ue=new $T(y,Ve,pt),ve=new iA(O,D,pt,Ne),et=new Qx(O,Ke,D),k=new cS(O,Ke,D),D.programs=_e.programs,y.capabilities=pt,y.extensions=Ke,y.properties=S,y.renderLists=Xe,y.shadowMap=Ue,y.state=Ne,y.info=D}ue(),b!==Pn&&(m=new fS(b,t.width,t.height,r,s));const ee=new eA(y,O);this.xr=ee,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const w=Ke.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ke.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Qe},this.setPixelRatio=function(w){w!==void 0&&(Qe=w,this.setSize(Pe,Me,!1))},this.getSize=function(w){return w.set(Pe,Me)},this.setSize=function(w,z,K=!0){if(ee.isPresenting){nt("WebGLRenderer: Can't change size while VR device is presenting.");return}Pe=w,Me=z,t.width=Math.floor(w*Qe),t.height=Math.floor(z*Qe),K===!0&&(t.style.width=w+"px",t.style.height=z+"px"),m!==null&&m.setSize(t.width,t.height),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(Pe*Qe,Me*Qe).floor()},this.setDrawingBufferSize=function(w,z,K){Pe=w,Me=z,Qe=K,t.width=Math.floor(w*K),t.height=Math.floor(z*K),this.setViewport(0,0,w,z)},this.setEffects=function(w){if(b===Pn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let z=0;z<w.length;z++)if(w[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}m.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(J)},this.getViewport=function(w){return w.copy(V)},this.setViewport=function(w,z,K,$){w.isVector4?V.set(w.x,w.y,w.z,w.w):V.set(w,z,K,$),Ne.viewport(J.copy(V).multiplyScalar(Qe).round())},this.getScissor=function(w){return w.copy(G)},this.setScissor=function(w,z,K,$){w.isVector4?G.set(w.x,w.y,w.z,w.w):G.set(w,z,K,$),Ne.scissor(H.copy(G).multiplyScalar(Qe).round())},this.getScissorTest=function(){return Q},this.setScissorTest=function(w){Ne.setScissorTest(Q=w)},this.setOpaqueSort=function(w){Et=w},this.setTransparentSort=function(w){xt=w},this.getClearColor=function(w){return w.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(w=!0,z=!0,K=!0){let $=0;if(w){let X=!1;if(M!==null){const Ee=M.texture.format;X=_.has(Ee)}if(X){const Ee=M.texture.type,Ie=v.has(Ee),xe=Re.getClearColor(),ke=Re.getClearAlpha(),Be=xe.r,tt=xe.g,Ye=xe.b;Ie?(R[0]=Be,R[1]=tt,R[2]=Ye,R[3]=ke,O.clearBufferuiv(O.COLOR,0,R)):(N[0]=Be,N[1]=tt,N[2]=Ye,N[3]=ke,O.clearBufferiv(O.COLOR,0,N))}else $|=O.COLOR_BUFFER_BIT}z&&($|=O.DEPTH_BUFFER_BIT),K&&($|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&O.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",wt,!1),Re.dispose(),Xe.dispose(),ce.dispose(),S.dispose(),ne.dispose(),Ve.dispose(),pe.dispose(),ve.dispose(),_e.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",ss),ee.removeEventListener("sessionend",Hi),pi.stop()};function De(w){w.preventDefault(),df("WebGLRenderer: Context Lost."),P=!0}function Je(){df("WebGLRenderer: Context Restored."),P=!1;const w=D.autoReset,z=Ue.enabled,K=Ue.autoUpdate,$=Ue.needsUpdate,X=Ue.type;ue(),D.autoReset=w,Ue.enabled=z,Ue.autoUpdate=K,Ue.needsUpdate=$,Ue.type=X}function wt(w){yt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function lt(w){const z=w.target;z.removeEventListener("dispose",lt),Un(z)}function Un(w){On(w),S.remove(w)}function On(w){const z=S.get(w).programs;z!==void 0&&(z.forEach(function(K){_e.releaseProgram(K)}),w.isShaderMaterial&&_e.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,K,$,X,Ee){z===null&&(z=qe);const Ie=X.isMesh&&X.matrixWorld.determinant()<0,xe=cl(w,z,K,$,X);Ne.setMaterial($,Ie);let ke=K.index,Be=1;if($.wireframe===!0){if(ke=te.getWireframeAttribute(K),ke===void 0)return;Be=2}const tt=K.drawRange,Ye=K.attributes.position;let Le=tt.start*Be,mt=(tt.start+tt.count)*Be;Ee!==null&&(Le=Math.max(Le,Ee.start*Be),mt=Math.min(mt,(Ee.start+Ee.count)*Be)),ke!==null?(Le=Math.max(Le,0),mt=Math.min(mt,ke.count)):Ye!=null&&(Le=Math.max(Le,0),mt=Math.min(mt,Ye.count));const It=mt-Le;if(It<0||It===1/0)return;pe.setup(X,$,xe,K,ke);let Ct,He=et;if(ke!==null&&(Ct=oe.get(ke),He=k,He.setIndex(Ct)),X.isMesh)$.wireframe===!0?(Ne.setLineWidth($.wireframeLinewidth*ct()),He.setMode(O.LINES)):He.setMode(O.TRIANGLES);else if(X.isLine){let Ot=$.linewidth;Ot===void 0&&(Ot=1),Ne.setLineWidth(Ot*ct()),X.isLineSegments?He.setMode(O.LINES):X.isLineLoop?He.setMode(O.LINE_LOOP):He.setMode(O.LINE_STRIP)}else X.isPoints?He.setMode(O.POINTS):X.isSprite&&He.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)vc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),He.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))He.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ot=X._multiDrawStarts,Oe=X._multiDrawCounts,Xt=X._multiDrawCount,gt=ke?oe.get(ke).bytesPerElement:1,gn=S.get($).currentProgram.getUniforms();for(let bn=0;bn<Xt;bn++)gn.setValue(O,"_gl_DrawID",bn),He.render(Ot[bn]/gt,Oe[bn])}else if(X.isInstancedMesh)He.renderInstances(Le,It,X.count);else if(K.isInstancedBufferGeometry){const Ot=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Oe=Math.min(K.instanceCount,Ot);He.renderInstances(Le,It,Oe)}else He.render(Le,It)};function Mr(w,z,K){w.transparent===!0&&w.side===Ti&&w.forceSinglePass===!1?(w.side=En,w.needsUpdate=!0,wr(w,z,K),w.side=pr,w.needsUpdate=!0,wr(w,z,K),w.side=Ti):wr(w,z,K)}this.compile=function(w,z,K=null){K===null&&(K=w),U=ce.get(K),U.init(z),A.push(U),K.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(U.pushLight(X),X.castShadow&&U.pushShadow(X))}),w!==K&&w.traverseVisible(function(X){X.isLight&&X.layers.test(z.layers)&&(U.pushLight(X),X.castShadow&&U.pushShadow(X))}),U.setupLights();const $=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Ee=X.material;if(Ee)if(Array.isArray(Ee))for(let Ie=0;Ie<Ee.length;Ie++){const xe=Ee[Ie];Mr(xe,K,X),$.add(xe)}else Mr(Ee,K,X),$.add(Ee)}),U=A.pop(),$},this.compileAsync=function(w,z,K=null){const $=this.compile(w,z,K);return new Promise(X=>{function Ee(){if($.forEach(function(Ie){S.get(Ie).currentProgram.isReady()&&$.delete(Ie)}),$.size===0){X(w);return}setTimeout(Ee,10)}Ke.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let rs=null;function ha(w){rs&&rs(w)}function ss(){pi.stop()}function Hi(){pi.start()}const pi=new hg;pi.setAnimationLoop(ha),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(w){rs=w,ee.setAnimationLoop(w),w===null?pi.stop():pi.start()},ee.addEventListener("sessionstart",ss),ee.addEventListener("sessionend",Hi),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;const K=ee.enabled===!0&&ee.isPresenting===!0,$=m!==null&&(M===null||K)&&m.begin(y,M);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(m===null||m.isCompositing()===!1)&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(z),z=ee.getCamera()),w.isScene===!0&&w.onBeforeRender(y,w,z,M),U=ce.get(w,A.length),U.init(z),A.push(U),We.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),re.setFromProjectionMatrix(We,ii,z.reversedDepth),fe=this.localClippingEnabled,he=de.init(this.clippingPlanes,fe),L=Xe.get(w,F.length),L.init(),F.push(L),ee.enabled===!0&&ee.isPresenting===!0){const Ie=y.xr.getDepthSensingMesh();Ie!==null&&wn(Ie,z,-1/0,y.sortObjects)}wn(w,z,0,y.sortObjects),L.finish(),y.sortObjects===!0&&L.sort(Et,xt),Fe=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Fe&&Re.addToRenderList(L,w),this.info.render.frame++,he===!0&&de.beginShadows();const X=U.state.shadowsArray;if(Ue.render(X,w,z),he===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&m.hasRenderPass())===!1){const Ie=L.opaque,xe=L.transmissive;if(U.setupLights(),z.isArrayCamera){const ke=z.cameras;if(xe.length>0)for(let Be=0,tt=ke.length;Be<tt;Be++){const Ye=ke[Be];so(Ie,xe,w,Ye)}Fe&&Re.render(w);for(let Be=0,tt=ke.length;Be<tt;Be++){const Ye=ke[Be];ro(L,w,Ye,Ye.viewport)}}else xe.length>0&&so(Ie,xe,w,z),Fe&&Re.render(w),ro(L,w,z)}M!==null&&C===0&&(B.updateMultisampleRenderTarget(M),B.updateRenderTargetMipmap(M)),$&&m.end(y),w.isScene===!0&&w.onAfterRender(y,w,z),pe.resetDefaultState(),Y=-1,q=null,A.pop(),A.length>0?(U=A[A.length-1],he===!0&&de.setGlobalState(y.clippingPlanes,U.state.camera)):U=null,F.pop(),F.length>0?L=F[F.length-1]:L=null};function wn(w,z,K,$){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)K=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)U.pushLight(w),w.castShadow&&U.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||re.intersectsSprite(w)){$&&we.setFromMatrixPosition(w.matrixWorld).applyMatrix4(We);const Ie=Ve.update(w),xe=w.material;xe.visible&&L.push(w,Ie,xe,K,we.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||re.intersectsObject(w))){const Ie=Ve.update(w),xe=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),we.copy(w.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),we.copy(Ie.boundingSphere.center)),we.applyMatrix4(w.matrixWorld).applyMatrix4(We)),Array.isArray(xe)){const ke=Ie.groups;for(let Be=0,tt=ke.length;Be<tt;Be++){const Ye=ke[Be],Le=xe[Ye.materialIndex];Le&&Le.visible&&L.push(w,Ie,Le,K,we.z,Ye)}}else xe.visible&&L.push(w,Ie,xe,K,we.z,null)}}const Ee=w.children;for(let Ie=0,xe=Ee.length;Ie<xe;Ie++)wn(Ee[Ie],z,K,$)}function ro(w,z,K,$){const{opaque:X,transmissive:Ee,transparent:Ie}=w;U.setupLightsView(K),he===!0&&de.setGlobalState(y.clippingPlanes,K),$&&Ne.viewport(J.copy($)),X.length>0&&Wi(X,z,K),Ee.length>0&&Wi(Ee,z,K),Ie.length>0&&Wi(Ie,z,K),Ne.buffers.depth.setTest(!0),Ne.buffers.depth.setMask(!0),Ne.buffers.color.setMask(!0),Ne.setPolygonOffset(!1)}function so(w,z,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[$.id]===void 0){const Le=Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[$.id]=new si(1,1,{generateMipmaps:!0,type:Le?Ni:Pn,minFilter:Br,samples:Math.max(4,pt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace})}const Ee=U.state.transmissionRenderTarget[$.id],Ie=$.viewport||J;Ee.setSize(Ie.z*y.transmissionResolutionScale,Ie.w*y.transmissionResolutionScale);const xe=y.getRenderTarget(),ke=y.getActiveCubeFace(),Be=y.getActiveMipmapLevel();y.setRenderTarget(Ee),y.getClearColor(ae),Ae=y.getClearAlpha(),Ae<1&&y.setClearColor(16777215,.5),y.clear(),Fe&&Re.render(K);const tt=y.toneMapping;y.toneMapping=ri;const Ye=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),U.setupLightsView($),he===!0&&de.setGlobalState(y.clippingPlanes,$),Wi(w,K,$),B.updateMultisampleRenderTarget(Ee),B.updateRenderTargetMipmap(Ee),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let mt=0,It=z.length;mt<It;mt++){const Ct=z[mt],{object:He,geometry:Ot,material:Oe,group:Xt}=Ct;if(Oe.side===Ti&&He.layers.test($.layers)){const gt=Oe.side;Oe.side=En,Oe.needsUpdate=!0,os(He,K,$,Ot,Oe,Xt),Oe.side=gt,Oe.needsUpdate=!0,Le=!0}}Le===!0&&(B.updateMultisampleRenderTarget(Ee),B.updateRenderTargetMipmap(Ee))}y.setRenderTarget(xe,ke,Be),y.setClearColor(ae,Ae),Ye!==void 0&&($.viewport=Ye),y.toneMapping=tt}function Wi(w,z,K){const $=z.isScene===!0?z.overrideMaterial:null;for(let X=0,Ee=w.length;X<Ee;X++){const Ie=w[X],{object:xe,geometry:ke,group:Be}=Ie;let tt=Ie.material;tt.allowOverride===!0&&$!==null&&(tt=$),xe.layers.test(K.layers)&&os(xe,z,K,ke,tt,Be)}}function os(w,z,K,$,X,Ee){w.onBeforeRender(y,z,K,$,X,Ee),w.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(y,z,K,$,w,Ee),X.transparent===!0&&X.side===Ti&&X.forceSinglePass===!1?(X.side=En,X.needsUpdate=!0,y.renderBufferDirect(K,z,$,X,w,Ee),X.side=pr,X.needsUpdate=!0,y.renderBufferDirect(K,z,$,X,w,Ee),X.side=Ti):y.renderBufferDirect(K,z,$,X,w,Ee),w.onAfterRender(y,z,K,$,X,Ee)}function wr(w,z,K){z.isScene!==!0&&(z=qe);const $=S.get(w),X=U.state.lights,Ee=U.state.shadowsArray,Ie=X.state.version,xe=_e.getParameters(w,X.state,Ee,z,K),ke=_e.getProgramCacheKey(xe);let Be=$.programs;$.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?z.environment:null,$.fog=z.fog;const tt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;$.envMap=ne.get(w.envMap||$.environment,tt),$.envMapRotation=$.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,Be===void 0&&(w.addEventListener("dispose",lt),Be=new Map,$.programs=Be);let Ye=Be.get(ke);if(Ye!==void 0){if($.currentProgram===Ye&&$.lightsStateVersion===Ie)return oo(w,xe),Ye}else xe.uniforms=_e.getUniforms(w),w.onBeforeCompile(xe,y),Ye=_e.acquireProgram(xe,ke),Be.set(ke,Ye),$.uniforms=xe.uniforms;const Le=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Le.clippingPlanes=de.uniform),oo(w,xe),$.needsLights=fa(w),$.lightsStateVersion=Ie,$.needsLights&&(Le.ambientLightColor.value=X.state.ambient,Le.lightProbe.value=X.state.probe,Le.directionalLights.value=X.state.directional,Le.directionalLightShadows.value=X.state.directionalShadow,Le.spotLights.value=X.state.spot,Le.spotLightShadows.value=X.state.spotShadow,Le.rectAreaLights.value=X.state.rectArea,Le.ltc_1.value=X.state.rectAreaLTC1,Le.ltc_2.value=X.state.rectAreaLTC2,Le.pointLights.value=X.state.point,Le.pointLightShadows.value=X.state.pointShadow,Le.hemisphereLights.value=X.state.hemi,Le.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Le.spotLightMatrix.value=X.state.spotLightMatrix,Le.spotLightMap.value=X.state.spotLightMap,Le.pointShadowMatrix.value=X.state.pointShadowMatrix),$.currentProgram=Ye,$.uniformsList=null,Ye}function da(w){if(w.uniformsList===null){const z=w.currentProgram.getUniforms();w.uniformsList=rc.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function oo(w,z){const K=S.get(w);K.outputColorSpace=z.outputColorSpace,K.batching=z.batching,K.batchingColor=z.batchingColor,K.instancing=z.instancing,K.instancingColor=z.instancingColor,K.instancingMorph=z.instancingMorph,K.skinning=z.skinning,K.morphTargets=z.morphTargets,K.morphNormals=z.morphNormals,K.morphColors=z.morphColors,K.morphTargetsCount=z.morphTargetsCount,K.numClippingPlanes=z.numClippingPlanes,K.numIntersection=z.numClipIntersection,K.vertexAlphas=z.vertexAlphas,K.vertexTangents=z.vertexTangents,K.toneMapping=z.toneMapping}function cl(w,z,K,$,X){z.isScene!==!0&&(z=qe),B.resetTextureUnits();const Ee=z.fog,Ie=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?z.environment:null,xe=M===null?y.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:ks,ke=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Be=ne.get($.envMap||Ie,ke),tt=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Ye=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Le=!!K.morphAttributes.position,mt=!!K.morphAttributes.normal,It=!!K.morphAttributes.color;let Ct=ri;$.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Ct=y.toneMapping);const He=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Ot=He!==void 0?He.length:0,Oe=S.get($),Xt=U.state.lights;if(he===!0&&(fe===!0||w!==q)){const Ft=w===q&&$.id===Y;de.setState($,w,Ft)}let gt=!1;$.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==Xt.state.version||Oe.outputColorSpace!==xe||X.isBatchedMesh&&Oe.batching===!1||!X.isBatchedMesh&&Oe.batching===!0||X.isBatchedMesh&&Oe.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Oe.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Oe.instancing===!1||!X.isInstancedMesh&&Oe.instancing===!0||X.isSkinnedMesh&&Oe.skinning===!1||!X.isSkinnedMesh&&Oe.skinning===!0||X.isInstancedMesh&&Oe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Oe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Oe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Oe.instancingMorph===!1&&X.morphTexture!==null||Oe.envMap!==Be||$.fog===!0&&Oe.fog!==Ee||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==de.numPlanes||Oe.numIntersection!==de.numIntersection)||Oe.vertexAlphas!==tt||Oe.vertexTangents!==Ye||Oe.morphTargets!==Le||Oe.morphNormals!==mt||Oe.morphColors!==It||Oe.toneMapping!==Ct||Oe.morphTargetsCount!==Ot)&&(gt=!0):(gt=!0,Oe.__version=$.version);let gn=Oe.currentProgram;gt===!0&&(gn=wr($,z,X));let bn=!1,gi=!1,qi=!1;const Tt=gn.getUniforms(),Lt=Oe.uniforms;if(Ne.useProgram(gn.program)&&(bn=!0,gi=!0,qi=!0),$.id!==Y&&(Y=$.id,gi=!0),bn||q!==w){Ne.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Tt.setValue(O,"projectionMatrix",w.projectionMatrix),Tt.setValue(O,"viewMatrix",w.matrixWorldInverse);const Fn=Tt.map.cameraPosition;Fn!==void 0&&Fn.setValue(O,ge.setFromMatrixPosition(w.matrixWorld)),pt.logarithmicDepthBuffer&&Tt.setValue(O,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Tt.setValue(O,"isOrthographic",w.isOrthographicCamera===!0),q!==w&&(q=w,gi=!0,qi=!0)}if(Oe.needsLights&&(Xt.state.directionalShadowMap.length>0&&Tt.setValue(O,"directionalShadowMap",Xt.state.directionalShadowMap,B),Xt.state.spotShadowMap.length>0&&Tt.setValue(O,"spotShadowMap",Xt.state.spotShadowMap,B),Xt.state.pointShadowMap.length>0&&Tt.setValue(O,"pointShadowMap",Xt.state.pointShadowMap,B)),X.isSkinnedMesh){Tt.setOptional(O,X,"bindMatrix"),Tt.setOptional(O,X,"bindMatrixInverse");const Ft=X.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),Tt.setValue(O,"boneTexture",Ft.boneTexture,B))}X.isBatchedMesh&&(Tt.setOptional(O,X,"batchingTexture"),Tt.setValue(O,"batchingTexture",X._matricesTexture,B),Tt.setOptional(O,X,"batchingIdTexture"),Tt.setValue(O,"batchingIdTexture",X._indirectTexture,B),Tt.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&Tt.setValue(O,"batchingColorTexture",X._colorsTexture,B));const an=K.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&be.update(X,K,gn),(gi||Oe.receiveShadow!==X.receiveShadow)&&(Oe.receiveShadow=X.receiveShadow,Tt.setValue(O,"receiveShadow",X.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&z.environment!==null&&(Lt.envMapIntensity.value=z.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=sA()),gi&&(Tt.setValue(O,"toneMappingExposure",y.toneMappingExposure),Oe.needsLights&&as(Lt,qi),Ee&&$.fog===!0&&ze.refreshFogUniforms(Lt,Ee),ze.refreshMaterialUniforms(Lt,$,Qe,Me,U.state.transmissionRenderTarget[w.id]),rc.upload(O,da(Oe),Lt,B)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(rc.upload(O,da(Oe),Lt,B),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Tt.setValue(O,"center",X.center),Tt.setValue(O,"modelViewMatrix",X.modelViewMatrix),Tt.setValue(O,"normalMatrix",X.normalMatrix),Tt.setValue(O,"modelMatrix",X.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Ft=$.uniformsGroups;for(let Fn=0,_i=Ft.length;Fn<_i;Fn++){const co=Ft[Fn];ve.update(co,gn),ve.bind(co,gn)}}return gn}function as(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function fa(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(w,z,K){const $=S.get(w);$.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),S.get(w.texture).__webglTexture=z,S.get(w.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:K,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,z){const K=S.get(w);K.__webglFramebuffer=z,K.__useDefaultFramebuffer=z===void 0};const ao=O.createFramebuffer();this.setRenderTarget=function(w,z=0,K=0){M=w,T=z,C=K;let $=null,X=!1,Ee=!1;if(w){const xe=S.get(w);if(xe.__useDefaultFramebuffer!==void 0){Ne.bindFramebuffer(O.FRAMEBUFFER,xe.__webglFramebuffer),J.copy(w.viewport),H.copy(w.scissor),le=w.scissorTest,Ne.viewport(J),Ne.scissor(H),Ne.setScissorTest(le),Y=-1;return}else if(xe.__webglFramebuffer===void 0)B.setupRenderTarget(w);else if(xe.__hasExternalTextures)B.rebindTextures(w,S.get(w.texture).__webglTexture,S.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const tt=w.depthTexture;if(xe.__boundDepthTexture!==tt){if(tt!==null&&S.has(tt)&&(w.width!==tt.image.width||w.height!==tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(w)}}const ke=w.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ee=!0);const Be=S.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Be[z])?$=Be[z][K]:$=Be[z],X=!0):w.samples>0&&B.useMultisampledRTT(w)===!1?$=S.get(w).__webglMultisampledFramebuffer:Array.isArray(Be)?$=Be[K]:$=Be,J.copy(w.viewport),H.copy(w.scissor),le=w.scissorTest}else J.copy(V).multiplyScalar(Qe).floor(),H.copy(G).multiplyScalar(Qe).floor(),le=Q;if(K!==0&&($=ao),Ne.bindFramebuffer(O.FRAMEBUFFER,$)&&Ne.drawBuffers(w,$),Ne.viewport(J),Ne.scissor(H),Ne.setScissorTest(le),X){const xe=S.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+z,xe.__webglTexture,K)}else if(Ee){const xe=z;for(let ke=0;ke<w.textures.length;ke++){const Be=S.get(w.textures[ke]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+ke,Be.__webglTexture,K,xe)}}else if(w!==null&&K!==0){const xe=S.get(w.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,xe.__webglTexture,K)}Y=-1},this.readRenderTargetPixels=function(w,z,K,$,X,Ee,Ie,xe=0){if(!(w&&w.isWebGLRenderTarget)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=S.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ie!==void 0&&(ke=ke[Ie]),ke){Ne.bindFramebuffer(O.FRAMEBUFFER,ke);try{const Be=w.textures[xe],tt=Be.format,Ye=Be.type;if(w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+xe),!pt.textureFormatReadable(tt)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(Ye)){yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-$&&K>=0&&K<=w.height-X&&O.readPixels(z,K,$,X,me.convert(tt),me.convert(Ye),Ee)}finally{const Be=M!==null?S.get(M).__webglFramebuffer:null;Ne.bindFramebuffer(O.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(w,z,K,$,X,Ee,Ie,xe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=S.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ie!==void 0&&(ke=ke[Ie]),ke)if(z>=0&&z<=w.width-$&&K>=0&&K<=w.height-X){Ne.bindFramebuffer(O.FRAMEBUFFER,ke);const Be=w.textures[xe],tt=Be.format,Ye=Be.type;if(w.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+xe),!pt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Le=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Le),O.bufferData(O.PIXEL_PACK_BUFFER,Ee.byteLength,O.STREAM_READ),O.readPixels(z,K,$,X,me.convert(tt),me.convert(Ye),0);const mt=M!==null?S.get(M).__webglFramebuffer:null;Ne.bindFramebuffer(O.FRAMEBUFFER,mt);const It=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await C0(O,It,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Le),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ee),O.deleteBuffer(Le),O.deleteSync(It),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,z=null,K=0){const $=Math.pow(2,-K),X=Math.floor(w.image.width*$),Ee=Math.floor(w.image.height*$),Ie=z!==null?z.x:0,xe=z!==null?z.y:0;B.setTexture2D(w,0),O.copyTexSubImage2D(O.TEXTURE_2D,K,0,0,Ie,xe,X,Ee),Ne.unbindTexture()};const br=O.createFramebuffer(),mi=O.createFramebuffer();this.copyTextureToTexture=function(w,z,K=null,$=null,X=0,Ee=0){let Ie,xe,ke,Be,tt,Ye,Le,mt,It;const Ct=w.isCompressedTexture?w.mipmaps[Ee]:w.image;if(K!==null)Ie=K.max.x-K.min.x,xe=K.max.y-K.min.y,ke=K.isBox3?K.max.z-K.min.z:1,Be=K.min.x,tt=K.min.y,Ye=K.isBox3?K.min.z:0;else{const Lt=Math.pow(2,-X);Ie=Math.floor(Ct.width*Lt),xe=Math.floor(Ct.height*Lt),w.isDataArrayTexture?ke=Ct.depth:w.isData3DTexture?ke=Math.floor(Ct.depth*Lt):ke=1,Be=0,tt=0,Ye=0}$!==null?(Le=$.x,mt=$.y,It=$.z):(Le=0,mt=0,It=0);const He=me.convert(z.format),Ot=me.convert(z.type);let Oe;z.isData3DTexture?(B.setTexture3D(z,0),Oe=O.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(B.setTexture2DArray(z,0),Oe=O.TEXTURE_2D_ARRAY):(B.setTexture2D(z,0),Oe=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment);const Xt=O.getParameter(O.UNPACK_ROW_LENGTH),gt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),gn=O.getParameter(O.UNPACK_SKIP_PIXELS),bn=O.getParameter(O.UNPACK_SKIP_ROWS),gi=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ct.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ct.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Be),O.pixelStorei(O.UNPACK_SKIP_ROWS,tt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Ye);const qi=w.isDataArrayTexture||w.isData3DTexture,Tt=z.isDataArrayTexture||z.isData3DTexture;if(w.isDepthTexture){const Lt=S.get(w),an=S.get(z),Ft=S.get(Lt.__renderTarget),Fn=S.get(an.__renderTarget);Ne.bindFramebuffer(O.READ_FRAMEBUFFER,Ft.__webglFramebuffer),Ne.bindFramebuffer(O.DRAW_FRAMEBUFFER,Fn.__webglFramebuffer);for(let _i=0;_i<ke;_i++)qi&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,S.get(w).__webglTexture,X,Ye+_i),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,S.get(z).__webglTexture,Ee,It+_i)),O.blitFramebuffer(Be,tt,Ie,xe,Le,mt,Ie,xe,O.DEPTH_BUFFER_BIT,O.NEAREST);Ne.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||S.has(w)){const Lt=S.get(w),an=S.get(z);Ne.bindFramebuffer(O.READ_FRAMEBUFFER,br),Ne.bindFramebuffer(O.DRAW_FRAMEBUFFER,mi);for(let Ft=0;Ft<ke;Ft++)qi?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Lt.__webglTexture,X,Ye+Ft):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Lt.__webglTexture,X),Tt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,an.__webglTexture,Ee,It+Ft):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,an.__webglTexture,Ee),X!==0?O.blitFramebuffer(Be,tt,Ie,xe,Le,mt,Ie,xe,O.COLOR_BUFFER_BIT,O.NEAREST):Tt?O.copyTexSubImage3D(Oe,Ee,Le,mt,It+Ft,Be,tt,Ie,xe):O.copyTexSubImage2D(Oe,Ee,Le,mt,Be,tt,Ie,xe);Ne.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ne.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Tt?w.isDataTexture||w.isData3DTexture?O.texSubImage3D(Oe,Ee,Le,mt,It,Ie,xe,ke,He,Ot,Ct.data):z.isCompressedArrayTexture?O.compressedTexSubImage3D(Oe,Ee,Le,mt,It,Ie,xe,ke,He,Ct.data):O.texSubImage3D(Oe,Ee,Le,mt,It,Ie,xe,ke,He,Ot,Ct):w.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Ee,Le,mt,Ie,xe,He,Ot,Ct.data):w.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Ee,Le,mt,Ct.width,Ct.height,He,Ct.data):O.texSubImage2D(O.TEXTURE_2D,Ee,Le,mt,Ie,xe,He,Ot,Ct);O.pixelStorei(O.UNPACK_ROW_LENGTH,Xt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,gt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,gn),O.pixelStorei(O.UNPACK_SKIP_ROWS,bn),O.pixelStorei(O.UNPACK_SKIP_IMAGES,gi),Ee===0&&z.generateMipmaps&&O.generateMipmap(Oe),Ne.unbindTexture()},this.initRenderTarget=function(w){S.get(w).__webglFramebuffer===void 0&&B.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?B.setTextureCube(w,0):w.isData3DTexture?B.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?B.setTexture2DArray(w,0):B.setTexture2D(w,0),Ne.unbindTexture()},this.resetState=function(){T=0,C=0,M=null,Ne.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}const aA=()=>{};var tp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g=function(i){const e=[];let t=0;for(let n=0;n<i.length;n++){let r=i.charCodeAt(n);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&n+1<i.length&&(i.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(i.charCodeAt(++n)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},cA=function(i){const e=[];let t=0,n=0;for(;t<i.length;){const r=i[t++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const s=i[t++];e[n++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=i[t++],o=i[t++],c=i[t++],l=((r&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(l>>10)),e[n++]=String.fromCharCode(56320+(l&1023))}else{const s=i[t++],o=i[t++];e[n++]=String.fromCharCode((r&15)<<12|(s&63)<<6|o&63)}}return e.join("")},vg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<i.length;r+=3){const s=i[r],o=r+1<i.length,c=o?i[r+1]:0,l=r+2<i.length,u=l?i[r+2]:0,h=s>>2,f=(s&3)<<4|c>>4;let d=(c&15)<<2|u>>6,g=u&63;l||(g=64,o||(d=64)),n.push(t[h],t[f],t[d],t[g])}return n.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(_g(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):cA(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<i.length;){const s=t[i.charAt(r++)],c=r<i.length?t[i.charAt(r)]:0;++r;const u=r<i.length?t[i.charAt(r)]:64;++r;const f=r<i.length?t[i.charAt(r)]:64;if(++r,s==null||c==null||u==null||f==null)throw new lA;const d=s<<2|c>>4;if(n.push(d),u!==64){const g=c<<4&240|u>>2;if(n.push(g),f!==64){const x=u<<6&192|f;n.push(x)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class lA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uA=function(i){const e=_g(i);return vg.encodeByteArray(e,!0)},yg=function(i){return uA(i).replace(/\./g,"")},Eg=function(i){try{return vg.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA=()=>hA().__FIREBASE_DEFAULTS__,fA=()=>{if(typeof process>"u"||typeof tp>"u")return;const i=tp.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},pA=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&Eg(i[1]);return e&&JSON.parse(e)},Hc=()=>{try{return aA()||dA()||fA()||pA()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},mA=i=>{var e,t;return(t=(e=Hc())==null?void 0:e.emulatorHosts)==null?void 0:t[i]},xg=()=>{var i;return(i=Hc())==null?void 0:i.config},Sg=i=>{var e;return(e=Hc())==null?void 0:e[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function _A(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fn())}function vA(){var e;const i=(e=Hc())==null?void 0:e.forceEnvironment;if(i==="node")return!0;if(i==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function yA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function EA(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function xA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function SA(){const i=fn();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function TA(){return!vA()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function AA(){try{return typeof indexedDB=="object"}catch{return!1}}function MA(){return new Promise((i,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(n),i(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)==null?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA="FirebaseError";class Gi extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=wA,Object.setPrototypeOf(this,Gi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zo.prototype.create)}}class Zo{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],o=s?bA(s,n):"Error",c=`${this.serviceName}: ${o} (${r}).`;return new Gi(r,c,n)}}function bA(i,e){return i.replace(IA,(t,n)=>{const r=e[n];return r!=null?String(r):`<${n}?>`})}const IA=/\{\$([^}]+)}/g;function RA(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function $r(i,e){if(i===e)return!0;const t=Object.keys(i),n=Object.keys(e);for(const r of t){if(!n.includes(r))return!1;const s=i[r],o=e[r];if(np(s)&&np(o)){if(!$r(s,o))return!1}else if(s!==o)return!1}for(const r of n)if(!t.includes(r))return!1;return!0}function np(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ea(i){const e=[];for(const[t,n]of Object.entries(i))Array.isArray(n)?n.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function Ao(i){const e={};return i.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[r,s]=n.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function Mo(i){const e=i.indexOf("?");if(!e)return"";const t=i.indexOf("#",e);return i.substring(e,t>0?t:void 0)}function CA(i,e){const t=new PA(i,e);return t.subscribe.bind(t)}class PA{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");DA(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:n},r.next===void 0&&(r.next=jl),r.error===void 0&&(r.error=jl),r.complete===void 0&&(r.complete=jl);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function DA(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function jl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(i){return i&&i._delegate?i._delegate:i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Tg(i){return(await fetch(i,{credentials:"include"})).ok}class jr{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LA{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new gA;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),n=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(n)return null;throw r}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(UA(e))try{this.getOrInitializeService({instanceIdentifier:Fr})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});n.resolve(s)}catch{}}}}clearInstance(e=Fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Fr){return this.instances.has(e)}getOptions(e=Fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);n===c&&o.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const s=this.instances.get(n);return s&&e(s,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:NA(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=Fr){return this.component?this.component.multipleInstances?e:Fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function NA(i){return i===Fr?void 0:i}function UA(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new LA(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(ut||(ut={}));const FA={debug:ut.DEBUG,verbose:ut.VERBOSE,info:ut.INFO,warn:ut.WARN,error:ut.ERROR,silent:ut.SILENT},VA=ut.INFO,kA={[ut.DEBUG]:"log",[ut.VERBOSE]:"log",[ut.INFO]:"info",[ut.WARN]:"warn",[ut.ERROR]:"error"},BA=(i,e,...t)=>{if(e<i.logLevel)return;const n=new Date().toISOString(),r=kA[e];if(r)console[r](`[${n}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fh{constructor(e){this.name=e,this._logLevel=VA,this._logHandler=BA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ut))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?FA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ut.DEBUG,...e),this._logHandler(this,ut.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ut.VERBOSE,...e),this._logHandler(this,ut.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ut.INFO,...e),this._logHandler(this,ut.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ut.WARN,...e),this._logHandler(this,ut.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ut.ERROR,...e),this._logHandler(this,ut.ERROR,...e)}}const zA=(i,e)=>e.some(t=>i instanceof t);let ip,rp;function GA(){return ip||(ip=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function HA(){return rp||(rp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ag=new WeakMap,th=new WeakMap,Mg=new WeakMap,Kl=new WeakMap,Vh=new WeakMap;function WA(i){const e=new Promise((t,n)=>{const r=()=>{i.removeEventListener("success",s),i.removeEventListener("error",o)},s=()=>{t(lr(i.result)),r()},o=()=>{n(i.error),r()};i.addEventListener("success",s),i.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Ag.set(t,i)}).catch(()=>{}),Vh.set(e,i),e}function qA(i){if(th.has(i))return;const e=new Promise((t,n)=>{const r=()=>{i.removeEventListener("complete",s),i.removeEventListener("error",o),i.removeEventListener("abort",o)},s=()=>{t(),r()},o=()=>{n(i.error||new DOMException("AbortError","AbortError")),r()};i.addEventListener("complete",s),i.addEventListener("error",o),i.addEventListener("abort",o)});th.set(i,e)}let nh={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return th.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Mg.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return lr(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function XA(i){nh=i(nh)}function $A(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=i.call(Yl(this),e,...t);return Mg.set(n,e.sort?e.sort():[e]),lr(n)}:HA().includes(i)?function(...e){return i.apply(Yl(this),e),lr(Ag.get(this))}:function(...e){return lr(i.apply(Yl(this),e))}}function jA(i){return typeof i=="function"?$A(i):(i instanceof IDBTransaction&&qA(i),zA(i,GA())?new Proxy(i,nh):i)}function lr(i){if(i instanceof IDBRequest)return WA(i);if(Kl.has(i))return Kl.get(i);const e=jA(i);return e!==i&&(Kl.set(i,e),Vh.set(e,i)),e}const Yl=i=>Vh.get(i);function KA(i,e,{blocked:t,upgrade:n,blocking:r,terminated:s}={}){const o=indexedDB.open(i,e),c=lr(o);return n&&o.addEventListener("upgradeneeded",l=>{n(lr(o.result),l.oldVersion,l.newVersion,lr(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),c.then(l=>{s&&l.addEventListener("close",()=>s()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const YA=["get","getKey","getAll","getAllKeys","count"],QA=["put","add","delete","clear"],Ql=new Map;function sp(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(Ql.get(e))return Ql.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,r=QA.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(r||YA.includes(t)))return;const s=async function(o,...c){const l=this.transaction(o,r?"readwrite":"readonly");let u=l.store;return n&&(u=u.index(c.shift())),(await Promise.all([u[t](...c),r&&l.done]))[0]};return Ql.set(e,s),s}XA(i=>({...i,get:(e,t,n)=>sp(e,t)||i.get(e,t,n),has:(e,t)=>!!sp(e,t)||i.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ZA(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function ZA(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ih="@firebase/app",op="0.14.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=new Fh("@firebase/app"),eM="@firebase/app-compat",tM="@firebase/analytics-compat",nM="@firebase/analytics",iM="@firebase/app-check-compat",rM="@firebase/app-check",sM="@firebase/auth",oM="@firebase/auth-compat",aM="@firebase/database",cM="@firebase/data-connect",lM="@firebase/database-compat",uM="@firebase/functions",hM="@firebase/functions-compat",dM="@firebase/installations",fM="@firebase/installations-compat",pM="@firebase/messaging",mM="@firebase/messaging-compat",gM="@firebase/performance",_M="@firebase/performance-compat",vM="@firebase/remote-config",yM="@firebase/remote-config-compat",EM="@firebase/storage",xM="@firebase/storage-compat",SM="@firebase/firestore",TM="@firebase/ai",AM="@firebase/firestore-compat",MM="firebase",wM="12.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh="[DEFAULT]",bM={[ih]:"fire-core",[eM]:"fire-core-compat",[nM]:"fire-analytics",[tM]:"fire-analytics-compat",[rM]:"fire-app-check",[iM]:"fire-app-check-compat",[sM]:"fire-auth",[oM]:"fire-auth-compat",[aM]:"fire-rtdb",[cM]:"fire-data-connect",[lM]:"fire-rtdb-compat",[uM]:"fire-fn",[hM]:"fire-fn-compat",[dM]:"fire-iid",[fM]:"fire-iid-compat",[pM]:"fire-fcm",[mM]:"fire-fcm-compat",[gM]:"fire-perf",[_M]:"fire-perf-compat",[vM]:"fire-rc",[yM]:"fire-rc-compat",[EM]:"fire-gcs",[xM]:"fire-gcs-compat",[SM]:"fire-fst",[AM]:"fire-fst-compat",[TM]:"fire-vertex","fire-js":"fire-js",[MM]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=new Map,IM=new Map,sh=new Map;function ap(i,e){try{i.container.addComponent(e)}catch(t){Vi.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function zs(i){const e=i.name;if(sh.has(e))return Vi.debug(`There were multiple attempts to register component ${e}.`),!1;sh.set(e,i);for(const t of yc.values())ap(t,i);for(const t of IM.values())ap(t,i);return!0}function kh(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function Mn(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RM={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ur=new Zo("app","Firebase",RM);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CM{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new jr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ur.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=wM;function wg(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const n={name:rh,automaticDataCollectionEnabled:!0,...e},r=n.name;if(typeof r!="string"||!r)throw ur.create("bad-app-name",{appName:String(r)});if(t||(t=xg()),!t)throw ur.create("no-options");const s=yc.get(r);if(s){if($r(t,s.options)&&$r(n,s.config))return s;throw ur.create("duplicate-app",{appName:r})}const o=new OA(r);for(const l of sh.values())o.addComponent(l);const c=new CM(t,n,o);return yc.set(r,c),c}function PM(i=rh){const e=yc.get(i);if(!e&&i===rh&&xg())return wg();if(!e)throw ur.create("no-app",{appName:i});return e}function hr(i,e,t){let n=bM[i]??i;t&&(n+=`-${t}`);const r=n.match(/\s|\//),s=e.match(/\s|\//);if(r||s){const o=[`Unable to register library "${n}" with version "${e}":`];r&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),r&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vi.warn(o.join(" "));return}zs(new jr(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DM="firebase-heartbeat-database",LM=1,Vo="firebase-heartbeat-store";let Jl=null;function bg(){return Jl||(Jl=KA(DM,LM,{upgrade:(i,e)=>{switch(e){case 0:try{i.createObjectStore(Vo)}catch(t){console.warn(t)}}}}).catch(i=>{throw ur.create("idb-open",{originalErrorMessage:i.message})})),Jl}async function NM(i){try{const t=(await bg()).transaction(Vo),n=await t.objectStore(Vo).get(Ig(i));return await t.done,n}catch(e){if(e instanceof Gi)Vi.warn(e.message);else{const t=ur.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vi.warn(t.message)}}}async function cp(i,e){try{const n=(await bg()).transaction(Vo,"readwrite");await n.objectStore(Vo).put(e,Ig(i)),await n.done}catch(t){if(t instanceof Gi)Vi.warn(t.message);else{const n=ur.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Vi.warn(n.message)}}}function Ig(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UM=1024,OM=30;class FM{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new kM(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,t;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=lp();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats.length>OM){const o=BM(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){Vi.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=lp(),{heartbeatsToSend:n,unsentEntries:r}=VM(this._heartbeatsCache.heartbeats),s=yg(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Vi.warn(t),""}}}function lp(){return new Date().toISOString().substring(0,10)}function VM(i,e=UM){const t=[];let n=i.slice();for(const r of i){const s=t.find(o=>o.agent===r.agent);if(s){if(s.dates.push(r.date),up(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),up(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class kM{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return AA()?MA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await NM(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return cp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return cp(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function up(i){return yg(JSON.stringify({version:2,heartbeats:i})).length}function BM(i){if(i.length===0)return-1;let e=0,t=i[0].date;for(let n=1;n<i.length;n++)i[n].date<t&&(t=i[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zM(i){zs(new jr("platform-logger",e=>new JA(e),"PRIVATE")),zs(new jr("heartbeat",e=>new FM(e),"PRIVATE")),hr(ih,op,i),hr(ih,op,"esm2020"),hr("fire-js","")}zM("");var GM="firebase",HM="12.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hr(GM,HM,"app");function Rg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const WM=Rg,Cg=new Zo("auth","Firebase",Rg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec=new Fh("@firebase/auth");function qM(i,...e){Ec.logLevel<=ut.WARN&&Ec.warn(`Auth (${Qs}): ${i}`,...e)}function sc(i,...e){Ec.logLevel<=ut.ERROR&&Ec.error(`Auth (${Qs}): ${i}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(i,...e){throw zh(i,...e)}function $n(i,...e){return zh(i,...e)}function Bh(i,e,t){const n={...WM(),[e]:t};return new Zo("auth","Firebase",n).create(e,{appName:i.name})}function Pi(i){return Bh(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function XM(i,e,t){const n=t;if(!(e instanceof n))throw n.name!==e.constructor.name&&Nn(i,"argument-error"),Bh(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function zh(i,...e){if(typeof i!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=i.name),i._errorFactory.create(t,...n)}return Cg.create(i,...e)}function $e(i,e,...t){if(!i)throw zh(e,...t)}function wi(i){const e="INTERNAL ASSERTION FAILED: "+i;throw sc(e),new Error(e)}function ki(i,e){i||wi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function $M(){return hp()==="http:"||hp()==="https:"}function hp(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jM(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($M()||EA()||"connection"in navigator)?navigator.onLine:!0}function KM(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,t){this.shortDelay=e,this.longDelay=t,ki(t>e,"Short delay should be less than long delay!"),this.isMobile=_A()||xA()}get(){return jM()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(i,e){ki(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YM={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QM=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],JM=new na(3e4,6e4);function xr(i,e){return i.tenantId&&!e.tenantId?{...e,tenantId:i.tenantId}:e}async function Sr(i,e,t,n,r={}){return Dg(i,r,async()=>{let s={},o={};n&&(e==="GET"?o=n:s={body:JSON.stringify(n)});const c=ea({key:i.config.apiKey,...o}).slice(1),l=await i._getAdditionalHeaders();l["Content-Type"]="application/json",i.languageCode&&(l["X-Firebase-Locale"]=i.languageCode);const u={method:e,headers:l,...s};return yA()||(u.referrerPolicy="no-referrer"),i.emulatorConfig&&ta(i.emulatorConfig.host)&&(u.credentials="include"),Pg.fetch()(await Lg(i,i.config.apiHost,t,c),u)})}async function Dg(i,e,t){i._canInitEmulator=!1;const n={...YM,...e};try{const r=new ew(i),s=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Xa(i,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xa(i,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Xa(i,"email-already-in-use",o);if(l==="USER_DISABLED")throw Xa(i,"user-disabled",o);const h=n[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Bh(i,h,u);Nn(i,h)}}catch(r){if(r instanceof Gi)throw r;Nn(i,"network-request-failed",{message:String(r)})}}async function ia(i,e,t,n,r={}){const s=await Sr(i,e,t,n,r);return"mfaPendingCredential"in s&&Nn(i,"multi-factor-auth-required",{_serverResponse:s}),s}async function Lg(i,e,t,n){const r=`${e}${t}?${n}`,s=i,o=s.config.emulator?Gh(i.config,r):`${i.config.apiScheme}://${r}`;return QM.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function ZM(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ew{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n($n(this.auth,"network-request-failed")),JM.get())})}}function Xa(i,e,t){const n={appName:i.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const r=$n(i,e,n);return r.customData._tokenResponse=t,r}function dp(i){return i!==void 0&&i.enterprise!==void 0}class tw{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return ZM(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function nw(i,e){return Sr(i,"GET","/v2/recaptchaConfig",xr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iw(i,e){return Sr(i,"POST","/v1/accounts:delete",e)}async function xc(i,e){return Sr(i,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function rw(i,e=!1){const t=sn(i),n=await t.getIdToken(e),r=Hh(n);$e(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:r,token:n,authTime:Co(Zl(r.auth_time)),issuedAtTime:Co(Zl(r.iat)),expirationTime:Co(Zl(r.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Zl(i){return Number(i)*1e3}function Hh(i){const[e,t,n]=i.split(".");if(e===void 0||t===void 0||n===void 0)return sc("JWT malformed, contained fewer than 3 sections"),null;try{const r=Eg(t);return r?JSON.parse(r):(sc("Failed to decode base64 JWT payload"),null)}catch(r){return sc("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function fp(i){const e=Hh(i);return $e(e,"internal-error"),$e(typeof e.exp<"u","internal-error"),$e(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(i,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof Gi&&sw(n)&&i.auth.currentUser===i&&await i.auth.signOut(),n}}function sw({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Co(this.lastLoginAt),this.creationTime=Co(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sc(i){var f;const e=i.auth,t=await i.getIdToken(),n=await ko(i,xc(e,{idToken:t}));$e(n==null?void 0:n.users.length,e,"internal-error");const r=n.users[0];i._notifyReloadListener(r);const s=(f=r.providerUserInfo)!=null&&f.length?Ng(r.providerUserInfo):[],o=cw(i.providerData,s),c=i.isAnonymous,l=!(i.email&&r.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new ah(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(i,h)}async function aw(i){const e=sn(i);await Sc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cw(i,e){return[...i.filter(n=>!e.some(r=>r.providerId===n.providerId)),...e]}function Ng(i){return i.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lw(i,e){const t=await Dg(i,{},async()=>{const n=ea({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=i.config,o=await Lg(i,r,"/v1/token",`key=${s}`),c=await i._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:n};return i.emulatorConfig&&ta(i.emulatorConfig.host)&&(l.credentials="include"),Pg.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function uw(i,e){return Sr(i,"POST","/v2/accounts:revokeToken",xr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$e(e.idToken,"internal-error"),$e(typeof e.idToken<"u","internal-error"),$e(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):fp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){$e(e.length!==0,"internal-error");const t=fp(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:($e(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:s}=await lw(e,t);this.updateTokensAndExpiration(n,r,Number(s))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:s}=t,o=new Ps;return n&&($e(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),r&&($e(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),s&&($e(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ps,this.toJSON())}_performRefresh(){return wi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(i,e){$e(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Wn{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new ow(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ah(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await ko(this,this.stsTokenManager.getToken(this.auth,e));return $e(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return rw(this,e)}reload(){return aw(this)}_assign(e){this!==e&&($e(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Wn({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){$e(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Sc(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Mn(this.auth.app))return Promise.reject(Pi(this.auth));const e=await this.getIdToken();return await ko(this,iw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,s=t.phoneNumber??void 0,o=t.photoURL??void 0,c=t.tenantId??void 0,l=t._redirectEventId??void 0,u=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:f,emailVerified:d,isAnonymous:g,providerData:x,stsTokenManager:b}=t;$e(f&&b,e,"internal-error");const _=Ps.fromJSON(this.name,b);$e(typeof f=="string",e,"internal-error"),nr(n,e.name),nr(r,e.name),$e(typeof d=="boolean",e,"internal-error"),$e(typeof g=="boolean",e,"internal-error"),nr(s,e.name),nr(o,e.name),nr(c,e.name),nr(l,e.name),nr(u,e.name),nr(h,e.name);const v=new Wn({uid:f,auth:e,email:r,emailVerified:d,displayName:n,isAnonymous:g,photoURL:o,phoneNumber:s,tenantId:c,stsTokenManager:_,createdAt:u,lastLoginAt:h});return x&&Array.isArray(x)&&(v.providerData=x.map(R=>({...R}))),l&&(v._redirectEventId=l),v}static async _fromIdTokenResponse(e,t,n=!1){const r=new Ps;r.updateFromServerResponse(t);const s=new Wn({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Sc(s),s}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];$e(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?Ng(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),c=new Ps;c.updateFromIdToken(n);const l=new Wn({uid:r.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new ah(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=new Map;function bi(i){ki(i instanceof Function,"Expected a class definition");let e=pp.get(i);return e?(ki(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,pp.set(i,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ug.type="NONE";const mp=Ug;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(i,e,t){return`firebase:${i}:${e}:${t}`}class Ds{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:s}=this.auth;this.fullUserKey=oc(this.userKey,r.apiKey,s),this.fullPersistenceKey=oc("persistence",r.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await xc(this.auth,{idToken:e}).catch(()=>{});return t?Wn._fromGetAccountInfoResponse(this.auth,t,e):null}return Wn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Ds(bi(mp),e,n);const r=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=r[0]||bi(mp);const o=oc(n,e.config.apiKey,e.name);let c=null;for(const u of t)try{const h=await u._get(o);if(h){let f;if(typeof h=="string"){const d=await xc(e,{idToken:h}).catch(()=>{});if(!d)break;f=await Wn._fromGetAccountInfoResponse(e,d,h)}else f=Wn._fromJSON(e,h);u!==s&&(c=f),s=u;break}}catch{}const l=r.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ds(s,e,n):(s=l[0],c&&await s._set(o,c.toJSON()),await Promise.all(t.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ds(s,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gp(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Og(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zg(e))return"Blackberry";if(Gg(e))return"Webos";if(Fg(e))return"Safari";if((e.includes("chrome/")||Vg(e))&&!e.includes("edge/"))return"Chrome";if(Bg(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=i.match(t);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Og(i=fn()){return/firefox\//i.test(i)}function Fg(i=fn()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vg(i=fn()){return/crios\//i.test(i)}function kg(i=fn()){return/iemobile/i.test(i)}function Bg(i=fn()){return/android/i.test(i)}function zg(i=fn()){return/blackberry/i.test(i)}function Gg(i=fn()){return/webos/i.test(i)}function Wh(i=fn()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function hw(i=fn()){var e;return Wh(i)&&!!((e=window.navigator)!=null&&e.standalone)}function dw(){return SA()&&document.documentMode===10}function Hg(i=fn()){return Wh(i)||Bg(i)||Gg(i)||zg(i)||/windows phone/i.test(i)||kg(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(i,e=[]){let t;switch(i){case"Browser":t=gp(fn());break;case"Worker":t=`${gp(fn())}-${i}`;break;default:t=i}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Qs}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=s=>new Promise((o,c)=>{try{const l=e(s);o(l)}catch(l){c(l)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pw(i,e={}){return Sr(i,"GET","/v2/passwordPolicy",xr(i,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mw=6;class gw{constructor(e){var n;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??mw,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((n=e.allowedNonAlphanumericCharacters)==null?void 0:n.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _w{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _p(this),this.idTokenSubscription=new _p(this),this.beforeStateQueue=new fw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Cg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=bi(t)),this._initializationPromise=this.queue(async()=>{var n,r,s;if(!this._deleted&&(this.persistenceManager=await Ds.create(this,e),(n=this._resolvePersistenceManagerAvailable)==null||n.call(this),!this._deleted)){if((r=this._popupRedirectResolver)!=null&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await xc(this,{idToken:e}),n=await Wn._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(Mn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,c=n==null?void 0:n._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(n=l.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(o){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return $e(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Sc(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=KM()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Mn(this.app))return Promise.reject(Pi(this));const t=e?sn(e):null;return t&&$e(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&$e(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Mn(this.app)?Promise.reject(Pi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Mn(this.app)?Promise.reject(Pi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(bi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pw(this),t=new gw(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Zo("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await uw(this,n)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&bi(e)||this._popupRedirectResolver;$e(t,this,"argument-error"),this.redirectPersistenceManager=await Ds.create(this,[bi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((n=this.redirectUser)==null?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if($e(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,n,r);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $e(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Wg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var r;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((r=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:r.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){var t;if(Mn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&qM(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Tr(i){return sn(i)}class _p{constructor(e){this.auth=e,this.observer=null,this.addObserver=CA(t=>this.observer=t)}get next(){return $e(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function vw(i){Wc=i}function qg(i){return Wc.loadJS(i)}function yw(){return Wc.recaptchaEnterpriseScript}function Ew(){return Wc.gapiScript}function xw(i){return`__${i}${Math.floor(Math.random()*1e6)}`}class Sw{constructor(){this.enterprise=new Tw}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Tw{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const Aw="recaptcha-enterprise",Xg="NO_RECAPTCHA";class Mw{constructor(e){this.type=Aw,this.auth=Tr(e)}async verify(e="verify",t=!1){async function n(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{nw(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new tw(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function r(s,o,c){const l=window.grecaptcha;dp(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(Xg)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Sw().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{n(this.auth).then(c=>{if(!t&&dp(window.grecaptcha))r(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=yw();l.length!==0&&(l+=c),qg(l).then(()=>{r(c,s,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function vp(i,e,t,n=!1,r=!1){const s=new Mw(i);let o;if(r)o=Xg;else try{o=await s.verify(t)}catch{o=await s.verify(t,!0)}const c={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return n?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function ch(i,e,t,n,r){var s;if((s=i._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await vp(i,e,t,t==="getOobCode");return n(i,o)}else return n(i,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await vp(i,e,t,t==="getOobCode");return n(i,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(i,e){const t=kh(i,"auth");if(t.isInitialized()){const r=t.getImmediate(),s=t.getOptions();if($r(s,e??{}))return r;Nn(r,"already-initialized")}return t.initialize({options:e})}function bw(i,e){const t=(e==null?void 0:e.persistence)||[],n=(Array.isArray(t)?t:[t]).map(bi);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}function Iw(i,e,t){const n=Tr(i);$e(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const r=!1,s=$g(e),{host:o,port:c}=Rw(e),l=c===null?"":`:${c}`,u={url:`${s}//${o}${l}/`},h=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!n._canInitEmulator){$e(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),$e($r(u,n.config.emulator)&&$r(h,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=u,n.emulatorConfig=h,n.settings.appVerificationDisabledForTesting=!0,ta(o)?Tg(`${s}//${o}${l}`):Cw()}function $g(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function Rw(i){const e=$g(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){const s=r[1];return{host:s,port:yp(n.substr(s.length+1))}}else{const[s,o]=n.split(":");return{host:s,port:yp(o)}}}function yp(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function Cw(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return wi("not implemented")}_getIdTokenResponse(e){return wi("not implemented")}_linkToIdToken(e,t){return wi("not implemented")}_getReauthenticationResolver(e){return wi("not implemented")}}async function Pw(i,e){return Sr(i,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dw(i,e){return ia(i,"POST","/v1/accounts:signInWithPassword",xr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lw(i,e){return ia(i,"POST","/v1/accounts:signInWithEmailLink",xr(i,e))}async function Nw(i,e){return ia(i,"POST","/v1/accounts:signInWithEmailLink",xr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo extends qh{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Bo(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Bo(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ch(e,t,"signInWithPassword",Dw);case"emailLink":return Lw(e,{email:this._email,oobCode:this._password});default:Nn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ch(e,n,"signUpPassword",Pw);case"emailLink":return Nw(e,{idToken:t,email:this._email,oobCode:this._password});default:Nn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(i,e){return ia(i,"POST","/v1/accounts:signInWithIdp",xr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw="http://localhost";class Kr extends qh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Nn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:r,...s}=t;if(!n||!r)return null;const o=new Kr(n,r);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Ls(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ls(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ls(e,t)}buildRequest(){const e={requestUri:Uw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ea(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Fw(i){const e=Ao(Mo(i)).link,t=e?Ao(Mo(e)).deep_link_id:null,n=Ao(Mo(i)).deep_link_id;return(n?Ao(Mo(n)).link:null)||n||t||e||i}class Xh{constructor(e){const t=Ao(Mo(e)),n=t.apiKey??null,r=t.oobCode??null,s=Ow(t.mode??null);$e(n&&r&&s,"argument-error"),this.apiKey=n,this.operation=s,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Fw(e);try{return new Xh(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(){this.providerId=Js.PROVIDER_ID}static credential(e,t){return Bo._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Xh.parseLink(t);return $e(n,"argument-error"),Bo._fromEmailAndCode(e,n.code,n.tenantId)}}Js.PROVIDER_ID="password";Js.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Js.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $h{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra extends $h{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends ra{constructor(){super("facebook.com")}static credential(e){return Kr._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";rr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends ra{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Kr._fromParams({providerId:Ai.PROVIDER_ID,signInMethod:Ai.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ai.credentialFromTaggedObject(e)}static credentialFromError(e){return Ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ai.credential(t,n)}catch{return null}}}Ai.GOOGLE_SIGN_IN_METHOD="google.com";Ai.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends ra{constructor(){super("github.com")}static credential(e){return Kr._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.GITHUB_SIGN_IN_METHOD="github.com";sr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends ra{constructor(){super("twitter.com")}static credential(e,t){return Kr._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return or.credential(t,n)}catch{return null}}}or.TWITTER_SIGN_IN_METHOD="twitter.com";or.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vw(i,e){return ia(i,"POST","/v1/accounts:signUp",xr(i,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const s=await Wn._fromIdTokenResponse(e,n,r),o=Ep(n);return new Yr({user:s,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ep(n);return new Yr({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ep(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc extends Gi{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Tc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Tc(e,t,n,r)}}function jg(i,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Tc._fromErrorAndOperation(i,s,e,n):s})}async function kw(i,e,t=!1){const n=await ko(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Yr._forOperation(i,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bw(i,e,t=!1){const{auth:n}=i;if(Mn(n.app))return Promise.reject(Pi(n));const r="reauthenticate";try{const s=await ko(i,jg(n,r,e,i),t);$e(s.idToken,n,"internal-error");const o=Hh(s.idToken);$e(o,n,"internal-error");const{sub:c}=o;return $e(i.uid===c,n,"user-mismatch"),Yr._forOperation(i,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Nn(n,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kg(i,e,t=!1){if(Mn(i.app))return Promise.reject(Pi(i));const n="signIn",r=await jg(i,n,e),s=await Yr._fromIdTokenResponse(i,n,r);return t||await i._updateCurrentUser(s.user),s}async function zw(i,e){return Kg(Tr(i),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yg(i){const e=Tr(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Gw(i,e,t){if(Mn(i.app))return Promise.reject(Pi(i));const n=Tr(i),o=await ch(n,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Vw).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Yg(i),l}),c=await Yr._fromIdTokenResponse(n,"signIn",o);return await n._updateCurrentUser(c.user),c}function Hw(i,e,t){return Mn(i.app)?Promise.reject(Pi(i)):zw(sn(i),Js.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&Yg(i),n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(i,e){return sn(i).setPersistence(e)}function qw(i,e,t,n){return sn(i).onIdTokenChanged(e,t,n)}function Xw(i,e,t){return sn(i).beforeAuthStateChanged(e,t)}function $w(i,e,t,n){return sn(i).onAuthStateChanged(e,t,n)}function jw(i){return sn(i).signOut()}const Ac="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ac,"1"),this.storage.removeItem(Ac),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw=1e3,Yw=10;class Jg extends Qg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},s=this.storage.getItem(n);dw()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,Yw):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},Kw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jg.type="LOCAL";const Zg=Jg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_ extends Qg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}e_.type="SESSION";const t_=e_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const n=new qc(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:s}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const c=Array.from(o).map(async u=>u(t.origin,s)),l=await Qw(c);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}qc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(i="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return i+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,o;return new Promise((c,l)=>{const u=jh("",20);r.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(d.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(){return window}function Zw(i){oi().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n_(){return typeof oi().WorkerGlobalScope<"u"&&typeof oi().importScripts=="function"}async function eb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tb(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function nb(){return n_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_="firebaseLocalStorageDb",ib=1,Mc="firebaseLocalStorage",r_="fbase_key";class sa{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Xc(i,e){return i.transaction([Mc],e?"readwrite":"readonly").objectStore(Mc)}function rb(){const i=indexedDB.deleteDatabase(i_);return new sa(i).toPromise()}function lh(){const i=indexedDB.open(i_,ib);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const n=i.result;try{n.createObjectStore(Mc,{keyPath:r_})}catch(r){t(r)}}),i.addEventListener("success",async()=>{const n=i.result;n.objectStoreNames.contains(Mc)?e(n):(n.close(),await rb(),e(await lh()))})})}async function xp(i,e,t){const n=Xc(i,!0).put({[r_]:e,value:t});return new sa(n).toPromise()}async function sb(i,e){const t=Xc(i,!1).get(e),n=await new sa(t).toPromise();return n===void 0?null:n.value}function Sp(i,e){const t=Xc(i,!0).delete(e);return new sa(t).toPromise()}const ob=800,ab=3;class s_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lh(),this.db)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(t++>ab)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return n_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qc._getInstance(nb()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await eb(),!this.activeServiceWorker)return;this.sender=new Jw(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(n=e[0])!=null&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lh();return await xp(e,Ac,"1"),await Sp(e,Ac),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>xp(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>sb(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Sp(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=Xc(r,!1).getAll();return new sa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ob)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}s_.type="LOCAL";const cb=s_;new na(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(i,e){return e?bi(e):($e(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh extends qh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ls(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ls(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function lb(i){return Kg(i.auth,new Kh(i),i.bypassAuthState)}function ub(i){const{auth:e,user:t}=i;return $e(t,e,"internal-error"),Bw(t,new Kh(i),i.bypassAuthState)}async function hb(i){const{auth:e,user:t}=i;return $e(t,e,"internal-error"),kw(t,new Kh(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,t,n,r,s=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:n,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lb;case"linkViaPopup":case"linkViaRedirect":return hb;case"reauthViaPopup":case"reauthViaRedirect":return ub;default:Nn(this.auth,"internal-error")}}resolve(e){ki(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ki(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const db=new na(2e3,1e4);async function fb(i,e,t){if(Mn(i.app))return Promise.reject($n(i,"operation-not-supported-in-this-environment"));const n=Tr(i);XM(i,e,$h);const r=o_(n,t);return new Gr(n,"signInViaPopup",e,r).executeNotNull()}class Gr extends a_{constructor(e,t,n,r,s){super(e,t,r,s),this.provider=n,this.authWindow=null,this.pollId=null,Gr.currentPopupAction&&Gr.currentPopupAction.cancel(),Gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $e(e,this.auth,"internal-error"),e}async onExecution(){ki(this.filter.length===1,"Popup operations only handle one event");const e=jh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject($n(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject($n(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;if((n=(t=this.authWindow)==null?void 0:t.window)!=null&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($n(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,db.get())};e()}}Gr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pb="pendingRedirect",ac=new Map;class mb extends a_{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ac.get(this.auth._key());if(!e){try{const n=await gb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ac.set(this.auth._key(),e)}return this.bypassAuthState||ac.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gb(i,e){const t=yb(e),n=vb(i);if(!await n._isAvailable())return!1;const r=await n._get(t)==="true";return await n._remove(t),r}function _b(i,e){ac.set(i._key(),e)}function vb(i){return bi(i._redirectPersistence)}function yb(i){return oc(pb,i.config.apiKey,i.name)}async function Eb(i,e,t=!1){if(Mn(i.app))return Promise.reject(Pi(i));const n=Tr(i),r=o_(n,e),o=await new mb(n,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xb=600*1e3;class Sb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Tb(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!c_(e)){const r=((n=e.error.code)==null?void 0:n.split("auth/")[1])||"internal-error";t.onError($n(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tp(e))}saveEventToCache(e){this.cachedEventUids.add(Tp(e)),this.lastProcessedEventTime=Date.now()}}function Tp(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function c_({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Tb(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return c_(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ab(i,e={}){return Sr(i,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wb=/^https?/;async function bb(i){if(i.config.emulator)return;const{authorizedDomains:e}=await Ab(i);for(const t of e)try{if(Ib(t))return}catch{}Nn(i,"unauthorized-domain")}function Ib(i){const e=oh(),{protocol:t,hostname:n}=new URL(e);if(i.startsWith("chrome-extension://")){const o=new URL(i);return o.hostname===""&&n===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!wb.test(t))return!1;if(Mb.test(i))return n===i;const r=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb=new na(3e4,6e4);function Ap(){const i=oi().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function Cb(i){return new Promise((e,t)=>{var r,s,o;function n(){Ap(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ap(),t($n(i,"network-request-failed"))},timeout:Rb.get()})}if((s=(r=oi().gapi)==null?void 0:r.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=oi().gapi)!=null&&o.load)n();else{const c=xw("iframefcb");return oi()[c]=()=>{gapi.load?n():t($n(i,"network-request-failed"))},qg(`${Ew()}?onload=${c}`).catch(l=>t(l))}}).catch(e=>{throw cc=null,e})}let cc=null;function Pb(i){return cc=cc||Cb(i),cc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=new na(5e3,15e3),Lb="__/auth/iframe",Nb="emulator/auth/iframe",Ub={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ob=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fb(i){const e=i.config;$e(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?Gh(e,Nb):`https://${i.config.authDomain}/${Lb}`,n={apiKey:e.apiKey,appName:i.name,v:Qs},r=Ob.get(i.config.apiHost);r&&(n.eid=r);const s=i._getFrameworks();return s.length&&(n.fw=s.join(",")),`${t}?${ea(n).slice(1)}`}async function Vb(i){const e=await Pb(i),t=oi().gapi;return $e(t,i,"internal-error"),e.open({where:document.body,url:Fb(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ub,dontclear:!0},n=>new Promise(async(r,s)=>{await n.restyle({setHideOnLeave:!1});const o=$n(i,"network-request-failed"),c=oi().setTimeout(()=>{s(o)},Db.get());function l(){oi().clearTimeout(c),r(n)}n.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Bb=500,zb=600,Gb="_blank",Hb="http://localhost";class Mp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Wb(i,e,t,n=Bb,r=zb){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let c="";const l={...kb,width:n.toString(),height:r.toString(),top:s,left:o},u=fn().toLowerCase();t&&(c=Vg(u)?Gb:t),Og(u)&&(e=e||Hb,l.scrollbars="yes");const h=Object.entries(l).reduce((d,[g,x])=>`${d}${g}=${x},`,"");if(hw(u)&&c!=="_self")return qb(e||"",c),new Mp(null);const f=window.open(e||"",c,h);$e(f,i,"popup-blocked");try{f.focus()}catch{}return new Mp(f)}function qb(i,e){const t=document.createElement("a");t.href=i,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xb="__/auth/handler",$b="emulator/auth/handler",jb=encodeURIComponent("fac");async function wp(i,e,t,n,r,s){$e(i.config.authDomain,i,"auth-domain-config-required"),$e(i.config.apiKey,i,"invalid-api-key");const o={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:n,v:Qs,eventId:r};if(e instanceof $h){e.setDefaultLanguage(i.languageCode),o.providerId=e.providerId||"",RA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof ra){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}i.tenantId&&(o.tid=i.tenantId);const c=o;for(const h of Object.keys(c))c[h]===void 0&&delete c[h];const l=await i._getAppCheckToken(),u=l?`#${jb}=${encodeURIComponent(l)}`:"";return`${Kb(i)}?${ea(c).slice(1)}${u}`}function Kb({config:i}){return i.emulator?Gh(i,$b):`https://${i.authDomain}/${Xb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu="webStorageSupport";class Yb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=t_,this._completeRedirectFn=Eb,this._overrideRedirectResult=_b}async _openPopup(e,t,n,r){var o;ki((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await wp(e,t,n,oh(),r);return Wb(e,s,jh())}async _openRedirect(e,t,n,r){await this._originValidation(e);const s=await wp(e,t,n,oh(),r);return Zw(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:s}=this.eventManagers[t];return r?Promise.resolve(r):(ki(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Vb(e),n=new Sb(e);return t.register("authEvent",r=>($e(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:n.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(eu,{type:eu},r=>{var o;const s=(o=r==null?void 0:r[0])==null?void 0:o[eu];s!==void 0&&t(!!s),Nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=bb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Hg()||Fg()||Wh()}}const Qb=Yb;var bp="@firebase/auth",Ip="1.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){$e(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zb(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eI(i){zs(new jr("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=n.options;$e(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const l={apiKey:o,authDomain:c,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Wg(i)},u=new _w(n,r,s,l);return bw(u,t),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),zs(new jr("auth-internal",e=>{const t=Tr(e.getProvider("auth").getImmediate());return(n=>new Jb(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),hr(bp,Ip,Zb(i)),hr(bp,Ip,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI=300,nI=Sg("authIdTokenMaxAge")||tI;let Rp=null;const iI=i=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>nI)return;const r=t==null?void 0:t.token;Rp!==r&&(Rp=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function rI(i=PM()){const e=kh(i,"auth");if(e.isInitialized())return e.getImmediate();const t=ww(i,{popupRedirectResolver:Qb,persistence:[cb,Zg,t_]}),n=Sg("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(n,location.origin);if(location.origin===s.origin){const o=iI(s.toString());Xw(t,o,()=>o(t.currentUser)),qw(t,c=>o(c))}}const r=mA("auth");return r&&Iw(t,`http://${r}`),t}function sI(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}vw({loadJS(i){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",i),n.onload=e,n.onerror=r=>{const s=$n("internal-error");s.customData=r,t(s)},n.type="text/javascript",n.charset="UTF-8",sI().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eI("Browser");var Cp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dr,l_;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,m){function y(){}y.prototype=m.prototype,A.F=m.prototype,A.prototype=new y,A.prototype.constructor=A,A.D=function(P,T,C){for(var M=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)M[Y-2]=arguments[Y];return m.prototype[T].apply(P,M)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(A,m,y){y||(y=0);const P=Array(16);if(typeof m=="string")for(var T=0;T<16;++T)P[T]=m.charCodeAt(y++)|m.charCodeAt(y++)<<8|m.charCodeAt(y++)<<16|m.charCodeAt(y++)<<24;else for(T=0;T<16;++T)P[T]=m[y++]|m[y++]<<8|m[y++]<<16|m[y++]<<24;m=A.g[0],y=A.g[1],T=A.g[2];let C=A.g[3],M;M=m+(C^y&(T^C))+P[0]+3614090360&4294967295,m=y+(M<<7&4294967295|M>>>25),M=C+(T^m&(y^T))+P[1]+3905402710&4294967295,C=m+(M<<12&4294967295|M>>>20),M=T+(y^C&(m^y))+P[2]+606105819&4294967295,T=C+(M<<17&4294967295|M>>>15),M=y+(m^T&(C^m))+P[3]+3250441966&4294967295,y=T+(M<<22&4294967295|M>>>10),M=m+(C^y&(T^C))+P[4]+4118548399&4294967295,m=y+(M<<7&4294967295|M>>>25),M=C+(T^m&(y^T))+P[5]+1200080426&4294967295,C=m+(M<<12&4294967295|M>>>20),M=T+(y^C&(m^y))+P[6]+2821735955&4294967295,T=C+(M<<17&4294967295|M>>>15),M=y+(m^T&(C^m))+P[7]+4249261313&4294967295,y=T+(M<<22&4294967295|M>>>10),M=m+(C^y&(T^C))+P[8]+1770035416&4294967295,m=y+(M<<7&4294967295|M>>>25),M=C+(T^m&(y^T))+P[9]+2336552879&4294967295,C=m+(M<<12&4294967295|M>>>20),M=T+(y^C&(m^y))+P[10]+4294925233&4294967295,T=C+(M<<17&4294967295|M>>>15),M=y+(m^T&(C^m))+P[11]+2304563134&4294967295,y=T+(M<<22&4294967295|M>>>10),M=m+(C^y&(T^C))+P[12]+1804603682&4294967295,m=y+(M<<7&4294967295|M>>>25),M=C+(T^m&(y^T))+P[13]+4254626195&4294967295,C=m+(M<<12&4294967295|M>>>20),M=T+(y^C&(m^y))+P[14]+2792965006&4294967295,T=C+(M<<17&4294967295|M>>>15),M=y+(m^T&(C^m))+P[15]+1236535329&4294967295,y=T+(M<<22&4294967295|M>>>10),M=m+(T^C&(y^T))+P[1]+4129170786&4294967295,m=y+(M<<5&4294967295|M>>>27),M=C+(y^T&(m^y))+P[6]+3225465664&4294967295,C=m+(M<<9&4294967295|M>>>23),M=T+(m^y&(C^m))+P[11]+643717713&4294967295,T=C+(M<<14&4294967295|M>>>18),M=y+(C^m&(T^C))+P[0]+3921069994&4294967295,y=T+(M<<20&4294967295|M>>>12),M=m+(T^C&(y^T))+P[5]+3593408605&4294967295,m=y+(M<<5&4294967295|M>>>27),M=C+(y^T&(m^y))+P[10]+38016083&4294967295,C=m+(M<<9&4294967295|M>>>23),M=T+(m^y&(C^m))+P[15]+3634488961&4294967295,T=C+(M<<14&4294967295|M>>>18),M=y+(C^m&(T^C))+P[4]+3889429448&4294967295,y=T+(M<<20&4294967295|M>>>12),M=m+(T^C&(y^T))+P[9]+568446438&4294967295,m=y+(M<<5&4294967295|M>>>27),M=C+(y^T&(m^y))+P[14]+3275163606&4294967295,C=m+(M<<9&4294967295|M>>>23),M=T+(m^y&(C^m))+P[3]+4107603335&4294967295,T=C+(M<<14&4294967295|M>>>18),M=y+(C^m&(T^C))+P[8]+1163531501&4294967295,y=T+(M<<20&4294967295|M>>>12),M=m+(T^C&(y^T))+P[13]+2850285829&4294967295,m=y+(M<<5&4294967295|M>>>27),M=C+(y^T&(m^y))+P[2]+4243563512&4294967295,C=m+(M<<9&4294967295|M>>>23),M=T+(m^y&(C^m))+P[7]+1735328473&4294967295,T=C+(M<<14&4294967295|M>>>18),M=y+(C^m&(T^C))+P[12]+2368359562&4294967295,y=T+(M<<20&4294967295|M>>>12),M=m+(y^T^C)+P[5]+4294588738&4294967295,m=y+(M<<4&4294967295|M>>>28),M=C+(m^y^T)+P[8]+2272392833&4294967295,C=m+(M<<11&4294967295|M>>>21),M=T+(C^m^y)+P[11]+1839030562&4294967295,T=C+(M<<16&4294967295|M>>>16),M=y+(T^C^m)+P[14]+4259657740&4294967295,y=T+(M<<23&4294967295|M>>>9),M=m+(y^T^C)+P[1]+2763975236&4294967295,m=y+(M<<4&4294967295|M>>>28),M=C+(m^y^T)+P[4]+1272893353&4294967295,C=m+(M<<11&4294967295|M>>>21),M=T+(C^m^y)+P[7]+4139469664&4294967295,T=C+(M<<16&4294967295|M>>>16),M=y+(T^C^m)+P[10]+3200236656&4294967295,y=T+(M<<23&4294967295|M>>>9),M=m+(y^T^C)+P[13]+681279174&4294967295,m=y+(M<<4&4294967295|M>>>28),M=C+(m^y^T)+P[0]+3936430074&4294967295,C=m+(M<<11&4294967295|M>>>21),M=T+(C^m^y)+P[3]+3572445317&4294967295,T=C+(M<<16&4294967295|M>>>16),M=y+(T^C^m)+P[6]+76029189&4294967295,y=T+(M<<23&4294967295|M>>>9),M=m+(y^T^C)+P[9]+3654602809&4294967295,m=y+(M<<4&4294967295|M>>>28),M=C+(m^y^T)+P[12]+3873151461&4294967295,C=m+(M<<11&4294967295|M>>>21),M=T+(C^m^y)+P[15]+530742520&4294967295,T=C+(M<<16&4294967295|M>>>16),M=y+(T^C^m)+P[2]+3299628645&4294967295,y=T+(M<<23&4294967295|M>>>9),M=m+(T^(y|~C))+P[0]+4096336452&4294967295,m=y+(M<<6&4294967295|M>>>26),M=C+(y^(m|~T))+P[7]+1126891415&4294967295,C=m+(M<<10&4294967295|M>>>22),M=T+(m^(C|~y))+P[14]+2878612391&4294967295,T=C+(M<<15&4294967295|M>>>17),M=y+(C^(T|~m))+P[5]+4237533241&4294967295,y=T+(M<<21&4294967295|M>>>11),M=m+(T^(y|~C))+P[12]+1700485571&4294967295,m=y+(M<<6&4294967295|M>>>26),M=C+(y^(m|~T))+P[3]+2399980690&4294967295,C=m+(M<<10&4294967295|M>>>22),M=T+(m^(C|~y))+P[10]+4293915773&4294967295,T=C+(M<<15&4294967295|M>>>17),M=y+(C^(T|~m))+P[1]+2240044497&4294967295,y=T+(M<<21&4294967295|M>>>11),M=m+(T^(y|~C))+P[8]+1873313359&4294967295,m=y+(M<<6&4294967295|M>>>26),M=C+(y^(m|~T))+P[15]+4264355552&4294967295,C=m+(M<<10&4294967295|M>>>22),M=T+(m^(C|~y))+P[6]+2734768916&4294967295,T=C+(M<<15&4294967295|M>>>17),M=y+(C^(T|~m))+P[13]+1309151649&4294967295,y=T+(M<<21&4294967295|M>>>11),M=m+(T^(y|~C))+P[4]+4149444226&4294967295,m=y+(M<<6&4294967295|M>>>26),M=C+(y^(m|~T))+P[11]+3174756917&4294967295,C=m+(M<<10&4294967295|M>>>22),M=T+(m^(C|~y))+P[2]+718787259&4294967295,T=C+(M<<15&4294967295|M>>>17),M=y+(C^(T|~m))+P[9]+3951481745&4294967295,A.g[0]=A.g[0]+m&4294967295,A.g[1]=A.g[1]+(T+(M<<21&4294967295|M>>>11))&4294967295,A.g[2]=A.g[2]+T&4294967295,A.g[3]=A.g[3]+C&4294967295}n.prototype.v=function(A,m){m===void 0&&(m=A.length);const y=m-this.blockSize,P=this.C;let T=this.h,C=0;for(;C<m;){if(T==0)for(;C<=y;)r(this,A,C),C+=this.blockSize;if(typeof A=="string"){for(;C<m;)if(P[T++]=A.charCodeAt(C++),T==this.blockSize){r(this,P),T=0;break}}else for(;C<m;)if(P[T++]=A[C++],T==this.blockSize){r(this,P),T=0;break}}this.h=T,this.o+=m},n.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var m=1;m<A.length-8;++m)A[m]=0;m=this.o*8;for(var y=A.length-8;y<A.length;++y)A[y]=m&255,m/=256;for(this.v(A),A=Array(16),m=0,y=0;y<4;++y)for(let P=0;P<32;P+=8)A[m++]=this.g[y]>>>P&255;return A};function s(A,m){var y=c;return Object.prototype.hasOwnProperty.call(y,A)?y[A]:y[A]=m(A)}function o(A,m){this.h=m;const y=[];let P=!0;for(let T=A.length-1;T>=0;T--){const C=A[T]|0;P&&C==m||(y[T]=C,P=!1)}this.g=y}var c={};function l(A){return-128<=A&&A<128?s(A,function(m){return new o([m|0],m<0?-1:0)}):new o([A|0],A<0?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return f;if(A<0)return _(u(-A));const m=[];let y=1;for(let P=0;A>=y;P++)m[P]=A/y|0,y*=4294967296;return new o(m,0)}function h(A,m){if(A.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(A.charAt(0)=="-")return _(h(A.substring(1),m));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=u(Math.pow(m,8));let P=f;for(let C=0;C<A.length;C+=8){var T=Math.min(8,A.length-C);const M=parseInt(A.substring(C,C+T),m);T<8?(T=u(Math.pow(m,T)),P=P.j(T).add(u(M))):(P=P.j(y),P=P.add(u(M)))}return P}var f=l(0),d=l(1),g=l(16777216);i=o.prototype,i.m=function(){if(b(this))return-_(this).m();let A=0,m=1;for(let y=0;y<this.g.length;y++){const P=this.i(y);A+=(P>=0?P:4294967296+P)*m,m*=4294967296}return A},i.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(x(this))return"0";if(b(this))return"-"+_(this).toString(A);const m=u(Math.pow(A,6));var y=this;let P="";for(;;){const T=L(y,m).g;y=v(y,T.j(m));let C=((y.g.length>0?y.g[0]:y.h)>>>0).toString(A);if(y=T,x(y))return C+P;for(;C.length<6;)C="0"+C;P=C+P}},i.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function x(A){if(A.h!=0)return!1;for(let m=0;m<A.g.length;m++)if(A.g[m]!=0)return!1;return!0}function b(A){return A.h==-1}i.l=function(A){return A=v(this,A),b(A)?-1:x(A)?0:1};function _(A){const m=A.g.length,y=[];for(let P=0;P<m;P++)y[P]=~A.g[P];return new o(y,~A.h).add(d)}i.abs=function(){return b(this)?_(this):this},i.add=function(A){const m=Math.max(this.g.length,A.g.length),y=[];let P=0;for(let T=0;T<=m;T++){let C=P+(this.i(T)&65535)+(A.i(T)&65535),M=(C>>>16)+(this.i(T)>>>16)+(A.i(T)>>>16);P=M>>>16,C&=65535,M&=65535,y[T]=M<<16|C}return new o(y,y[y.length-1]&-2147483648?-1:0)};function v(A,m){return A.add(_(m))}i.j=function(A){if(x(this)||x(A))return f;if(b(this))return b(A)?_(this).j(_(A)):_(_(this).j(A));if(b(A))return _(this.j(_(A)));if(this.l(g)<0&&A.l(g)<0)return u(this.m()*A.m());const m=this.g.length+A.g.length,y=[];for(var P=0;P<2*m;P++)y[P]=0;for(P=0;P<this.g.length;P++)for(let T=0;T<A.g.length;T++){const C=this.i(P)>>>16,M=this.i(P)&65535,Y=A.i(T)>>>16,q=A.i(T)&65535;y[2*P+2*T]+=M*q,R(y,2*P+2*T),y[2*P+2*T+1]+=C*q,R(y,2*P+2*T+1),y[2*P+2*T+1]+=M*Y,R(y,2*P+2*T+1),y[2*P+2*T+2]+=C*Y,R(y,2*P+2*T+2)}for(A=0;A<m;A++)y[A]=y[2*A+1]<<16|y[2*A];for(A=m;A<2*m;A++)y[A]=0;return new o(y,0)};function R(A,m){for(;(A[m]&65535)!=A[m];)A[m+1]+=A[m]>>>16,A[m]&=65535,m++}function N(A,m){this.g=A,this.h=m}function L(A,m){if(x(m))throw Error("division by zero");if(x(A))return new N(f,f);if(b(A))return m=L(_(A),m),new N(_(m.g),_(m.h));if(b(m))return m=L(A,_(m)),new N(_(m.g),m.h);if(A.g.length>30){if(b(A)||b(m))throw Error("slowDivide_ only works with positive integers.");for(var y=d,P=m;P.l(A)<=0;)y=U(y),P=U(P);var T=F(y,1),C=F(P,1);for(P=F(P,2),y=F(y,2);!x(P);){var M=C.add(P);M.l(A)<=0&&(T=T.add(y),C=M),P=F(P,1),y=F(y,1)}return m=v(A,T.j(m)),new N(T,m)}for(T=f;A.l(m)>=0;){for(y=Math.max(1,Math.floor(A.m()/m.m())),P=Math.ceil(Math.log(y)/Math.LN2),P=P<=48?1:Math.pow(2,P-48),C=u(y),M=C.j(m);b(M)||M.l(A)>0;)y-=P,C=u(y),M=C.j(m);x(C)&&(C=d),T=T.add(C),A=v(A,M)}return new N(T,A)}i.B=function(A){return L(this,A).h},i.and=function(A){const m=Math.max(this.g.length,A.g.length),y=[];for(let P=0;P<m;P++)y[P]=this.i(P)&A.i(P);return new o(y,this.h&A.h)},i.or=function(A){const m=Math.max(this.g.length,A.g.length),y=[];for(let P=0;P<m;P++)y[P]=this.i(P)|A.i(P);return new o(y,this.h|A.h)},i.xor=function(A){const m=Math.max(this.g.length,A.g.length),y=[];for(let P=0;P<m;P++)y[P]=this.i(P)^A.i(P);return new o(y,this.h^A.h)};function U(A){const m=A.g.length+1,y=[];for(let P=0;P<m;P++)y[P]=A.i(P)<<1|A.i(P-1)>>>31;return new o(y,A.h)}function F(A,m){const y=m>>5;m%=32;const P=A.g.length-y,T=[];for(let C=0;C<P;C++)T[C]=m>0?A.i(C+y)>>>m|A.i(C+y+1)<<32-m:A.i(C+y);return new o(T,A.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,l_=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,dr=o}).apply(typeof Cp<"u"?Cp:typeof self<"u"?self:typeof window<"u"?window:{});var $a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var u_,wo,h_,lc,uh,d_,f_,p_;(function(){var i,e=Object.defineProperty;function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof $a=="object"&&$a];for(var p=0;p<a.length;++p){var E=a[p];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var n=t(this);function r(a,p){if(p)e:{var E=n;a=a.split(".");for(var I=0;I<a.length-1;I++){var W=a[I];if(!(W in E))break e;E=E[W]}a=a[a.length-1],I=E[a],p=p(I),p!=I&&p!=null&&e(E,a,{configurable:!0,writable:!0,value:p})}}r("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(a){return a||function(p){var E=[],I;for(I in p)Object.prototype.hasOwnProperty.call(p,I)&&E.push([I,p[I]]);return E}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function c(a){var p=typeof a;return p=="object"&&a!=null||p=="function"}function l(a,p,E){return a.call.apply(a.bind,arguments)}function u(a,p,E){return u=l,u.apply(null,arguments)}function h(a,p){var E=Array.prototype.slice.call(arguments,1);return function(){var I=E.slice();return I.push.apply(I,arguments),a.apply(this,I)}}function f(a,p){function E(){}E.prototype=p.prototype,a.Z=p.prototype,a.prototype=new E,a.prototype.constructor=a,a.Ob=function(I,W,Z){for(var ye=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)ye[ot-2]=arguments[ot];return p.prototype[W].apply(I,ye)}}var d=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function g(a){const p=a.length;if(p>0){const E=Array(p);for(let I=0;I<p;I++)E[I]=a[I];return E}return[]}function x(a,p){for(let I=1;I<arguments.length;I++){const W=arguments[I];var E=typeof W;if(E=E!="object"?E:W?Array.isArray(W)?"array":E:"null",E=="array"||E=="object"&&typeof W.length=="number"){E=a.length||0;const Z=W.length||0;a.length=E+Z;for(let ye=0;ye<Z;ye++)a[E+ye]=W[ye]}else a.push(W)}}class b{constructor(p,E){this.i=p,this.j=E,this.h=0,this.g=null}get(){let p;return this.h>0?(this.h--,p=this.g,this.g=p.next,p.next=null):p=this.i(),p}}function _(a){o.setTimeout(()=>{throw a},0)}function v(){var a=A;let p=null;return a.g&&(p=a.g,a.g=a.g.next,a.g||(a.h=null),p.next=null),p}class R{constructor(){this.h=this.g=null}add(p,E){const I=N.get();I.set(p,E),this.h?this.h.next=I:this.g=I,this.h=I}}var N=new b(()=>new L,a=>a.reset());class L{constructor(){this.next=this.g=this.h=null}set(p,E){this.h=p,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let U,F=!1,A=new R,m=()=>{const a=Promise.resolve(void 0);U=()=>{a.then(y)}};function y(){for(var a;a=v();){try{a.h.call(a.g)}catch(E){_(E)}var p=N;p.j(a),p.h<100&&(p.h++,a.next=p.g,p.g=a)}F=!1}function P(){this.u=this.u,this.C=this.C}P.prototype.u=!1,P.prototype.dispose=function(){this.u||(this.u=!0,this.N())},P.prototype[Symbol.dispose]=function(){this.dispose()},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(a,p){this.type=a,this.g=this.target=p,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var C=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,p=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const E=()=>{};o.addEventListener("test",E,p),o.removeEventListener("test",E,p)}catch{}return a})();function M(a){return/^[\s\xa0]*$/.test(a)}function Y(a,p){T.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,p)}f(Y,T),Y.prototype.init=function(a,p){const E=this.type=a.type,I=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=p,p=a.relatedTarget,p||(E=="mouseover"?p=a.fromElement:E=="mouseout"&&(p=a.toElement)),this.relatedTarget=p,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&Y.Z.h.call(this)},Y.prototype.h=function(){Y.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var q="closure_listenable_"+(Math.random()*1e6|0),J=0;function H(a,p,E,I,W){this.listener=a,this.proxy=null,this.src=p,this.type=E,this.capture=!!I,this.ha=W,this.key=++J,this.da=this.fa=!1}function le(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ae(a,p,E){for(const I in a)p.call(E,a[I],I,a)}function Ae(a,p){for(const E in a)p.call(void 0,a[E],E,a)}function Pe(a){const p={};for(const E in a)p[E]=a[E];return p}const Me="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Qe(a,p){let E,I;for(let W=1;W<arguments.length;W++){I=arguments[W];for(E in I)a[E]=I[E];for(let Z=0;Z<Me.length;Z++)E=Me[Z],Object.prototype.hasOwnProperty.call(I,E)&&(a[E]=I[E])}}function Et(a){this.src=a,this.g={},this.h=0}Et.prototype.add=function(a,p,E,I,W){const Z=a.toString();a=this.g[Z],a||(a=this.g[Z]=[],this.h++);const ye=V(a,p,I,W);return ye>-1?(p=a[ye],E||(p.fa=!1)):(p=new H(p,this.src,Z,!!I,W),p.fa=E,a.push(p)),p};function xt(a,p){const E=p.type;if(E in a.g){var I=a.g[E],W=Array.prototype.indexOf.call(I,p,void 0),Z;(Z=W>=0)&&Array.prototype.splice.call(I,W,1),Z&&(le(p),a.g[E].length==0&&(delete a.g[E],a.h--))}}function V(a,p,E,I){for(let W=0;W<a.length;++W){const Z=a[W];if(!Z.da&&Z.listener==p&&Z.capture==!!E&&Z.ha==I)return W}return-1}var G="closure_lm_"+(Math.random()*1e6|0),Q={};function re(a,p,E,I,W){if(Array.isArray(p)){for(let Z=0;Z<p.length;Z++)re(a,p[Z],E,I,W);return null}return E=O(E),a&&a[q]?a.J(p,E,c(I)?!!I.capture:!1,W):he(a,p,E,!1,I,W)}function he(a,p,E,I,W,Z){if(!p)throw Error("Invalid event type");const ye=c(W)?!!W.capture:!!W;let ot=Fe(a);if(ot||(a[G]=ot=new Et(a)),E=ot.add(p,E,I,ye,Z),E.proxy)return E;if(I=fe(),E.proxy=I,I.src=a,I.listener=E,a.addEventListener)C||(W=ye),W===void 0&&(W=!1),a.addEventListener(p.toString(),I,W);else if(a.attachEvent)a.attachEvent(we(p.toString()),I);else if(a.addListener&&a.removeListener)a.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return E}function fe(){function a(E){return p.call(a.src,a.listener,E)}const p=qe;return a}function We(a,p,E,I,W){if(Array.isArray(p))for(var Z=0;Z<p.length;Z++)We(a,p[Z],E,I,W);else I=c(I)?!!I.capture:!!I,E=O(E),a&&a[q]?(a=a.i,Z=String(p).toString(),Z in a.g&&(p=a.g[Z],E=V(p,E,I,W),E>-1&&(le(p[E]),Array.prototype.splice.call(p,E,1),p.length==0&&(delete a.g[Z],a.h--)))):a&&(a=Fe(a))&&(p=a.g[p.toString()],a=-1,p&&(a=V(p,E,I,W)),(E=a>-1?p[a]:null)&&ge(E))}function ge(a){if(typeof a!="number"&&a&&!a.da){var p=a.src;if(p&&p[q])xt(p.i,a);else{var E=a.type,I=a.proxy;p.removeEventListener?p.removeEventListener(E,I,a.capture):p.detachEvent?p.detachEvent(we(E),I):p.addListener&&p.removeListener&&p.removeListener(I),(E=Fe(p))?(xt(E,a),E.h==0&&(E.src=null,p[G]=null)):le(a)}}}function we(a){return a in Q?Q[a]:Q[a]="on"+a}function qe(a,p){if(a.da)a=!0;else{p=new Y(p,this);const E=a.listener,I=a.ha||a.src;a.fa&&ge(a),a=E.call(I,p)}return a}function Fe(a){return a=a[G],a instanceof Et?a:null}var ct="__closure_events_fn_"+(Math.random()*1e9>>>0);function O(a){return typeof a=="function"?a:(a[ct]||(a[ct]=function(p){return a.handleEvent(p)}),a[ct])}function rt(){P.call(this),this.i=new Et(this),this.M=this,this.G=null}f(rt,P),rt.prototype[q]=!0,rt.prototype.removeEventListener=function(a,p,E,I){We(this,a,p,E,I)};function Ke(a,p){var E,I=a.G;if(I)for(E=[];I;I=I.G)E.push(I);if(a=a.M,I=p.type||p,typeof p=="string")p=new T(p,a);else if(p instanceof T)p.target=p.target||a;else{var W=p;p=new T(I,a),Qe(p,W)}W=!0;let Z,ye;if(E)for(ye=E.length-1;ye>=0;ye--)Z=p.g=E[ye],W=pt(Z,I,!0,p)&&W;if(Z=p.g=a,W=pt(Z,I,!0,p)&&W,W=pt(Z,I,!1,p)&&W,E)for(ye=0;ye<E.length;ye++)Z=p.g=E[ye],W=pt(Z,I,!1,p)&&W}rt.prototype.N=function(){if(rt.Z.N.call(this),this.i){var a=this.i;for(const p in a.g){const E=a.g[p];for(let I=0;I<E.length;I++)le(E[I]);delete a.g[p],a.h--}}this.G=null},rt.prototype.J=function(a,p,E,I){return this.i.add(String(a),p,!1,E,I)},rt.prototype.K=function(a,p,E,I){return this.i.add(String(a),p,!0,E,I)};function pt(a,p,E,I){if(p=a.i.g[String(p)],!p)return!0;p=p.concat();let W=!0;for(let Z=0;Z<p.length;++Z){const ye=p[Z];if(ye&&!ye.da&&ye.capture==E){const ot=ye.listener,$t=ye.ha||ye.src;ye.fa&&xt(a.i,ye),W=ot.call($t,I)!==!1&&W}}return W&&!I.defaultPrevented}function Ne(a,p){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=u(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(p)>2147483647?-1:o.setTimeout(a,p||0)}function D(a){a.g=Ne(()=>{a.g=null,a.i&&(a.i=!1,D(a))},a.l);const p=a.h;a.h=null,a.m.apply(null,p)}class S extends P{constructor(p,E){super(),this.m=p,this.l=E,this.h=null,this.i=!1,this.g=null}j(p){this.h=arguments,this.g?this.i=!0:D(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function B(a){P.call(this),this.h=a,this.g={}}f(B,P);var ne=[];function oe(a){ae(a.g,function(p,E){this.g.hasOwnProperty(E)&&ge(p)},a),a.g={}}B.prototype.N=function(){B.Z.N.call(this),oe(this)},B.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var te=o.JSON.stringify,Ve=o.JSON.parse,_e=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function ze(){}function Xe(){}var ce={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function de(){T.call(this,"d")}f(de,T);function Ue(){T.call(this,"c")}f(Ue,T);var Re={},be=null;function et(){return be=be||new rt}Re.Ia="serverreachability";function k(a){T.call(this,Re.Ia,a)}f(k,T);function me(a){const p=et();Ke(p,new k(p))}Re.STAT_EVENT="statevent";function pe(a,p){T.call(this,Re.STAT_EVENT,a),this.stat=p}f(pe,T);function ve(a){const p=et();Ke(p,new pe(p,a))}Re.Ja="timingevent";function ue(a,p){T.call(this,Re.Ja,a),this.size=p}f(ue,T);function ee(a,p){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},p)}function De(){this.g=!0}De.prototype.ua=function(){this.g=!1};function Je(a,p,E,I,W,Z){a.info(function(){if(a.g)if(Z){var ye="",ot=Z.split("&");for(let Rt=0;Rt<ot.length;Rt++){var $t=ot[Rt].split("=");if($t.length>1){const Qt=$t[0];$t=$t[1];const Qn=Qt.split("_");ye=Qn.length>=2&&Qn[1]=="type"?ye+(Qt+"="+$t+"&"):ye+(Qt+"=redacted&")}}}else ye=null;else ye=Z;return"XMLHTTP REQ ("+I+") [attempt "+W+"]: "+p+`
`+E+`
`+ye})}function wt(a,p,E,I,W,Z,ye){a.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+W+"]: "+p+`
`+E+`
`+Z+" "+ye})}function lt(a,p,E,I){a.info(function(){return"XMLHTTP TEXT ("+p+"): "+On(a,E)+(I?" "+I:"")})}function Un(a,p){a.info(function(){return"TIMEOUT: "+p})}De.prototype.info=function(){};function On(a,p){if(!a.g)return p;if(!p)return null;try{const Z=JSON.parse(p);if(Z){for(a=0;a<Z.length;a++)if(Array.isArray(Z[a])){var E=Z[a];if(!(E.length<2)){var I=E[1];if(Array.isArray(I)&&!(I.length<1)){var W=I[0];if(W!="noop"&&W!="stop"&&W!="close")for(let ye=1;ye<I.length;ye++)I[ye]=""}}}}return te(Z)}catch{return p}}var Mr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},rs={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},ha;function ss(){}f(ss,ze),ss.prototype.g=function(){return new XMLHttpRequest},ha=new ss;function Hi(a){return encodeURIComponent(String(a))}function pi(a){var p=1;a=a.split(":");const E=[];for(;p>0&&a.length;)E.push(a.shift()),p--;return a.length&&E.push(a.join(":")),E}function wn(a,p,E,I){this.j=a,this.i=p,this.l=E,this.S=I||1,this.V=new B(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new ro}function ro(){this.i=null,this.g="",this.h=!1}var so={},Wi={};function os(a,p,E){a.M=1,a.A=Ot(Le(p)),a.u=E,a.R=!0,wr(a,null)}function wr(a,p){a.F=Date.now(),as(a),a.B=Le(a.A);var E=a.B,I=a.S;Array.isArray(I)||(I=[String(I)]),co(E.i,"t",I),a.C=0,E=a.j.L,a.h=new ro,a.g=ef(a.j,E?p:null,!a.u),a.P>0&&(a.O=new S(u(a.Y,a,a.g),a.P)),p=a.V,E=a.g,I=a.ba;var W="readystatechange";Array.isArray(W)||(W&&(ne[0]=W.toString()),W=ne);for(let Z=0;Z<W.length;Z++){const ye=re(E,W[Z],I||p.handleEvent,!1,p.h||p);if(!ye)break;p.g[ye.key]=ye}p=a.J?Pe(a.J):{},a.u?(a.v||(a.v="POST"),p["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,p)):(a.v="GET",a.g.ea(a.B,a.v,null,p)),me(),Je(a.i,a.v,a.B,a.l,a.S,a.u)}wn.prototype.ba=function(a){a=a.target;const p=this.O;p&&$i(a)==3?p.j():this.Y(a)},wn.prototype.Y=function(a){try{if(a==this.g)e:{const ot=$i(this.g),$t=this.g.ya(),Rt=this.g.ca();if(!(ot<3)&&(ot!=3||this.g&&(this.h.h||this.g.la()||Hd(this.g)))){this.K||ot!=4||$t==7||($t==8||Rt<=0?me(3):me(2)),ao(this);var p=this.g.ca();this.X=p;var E=da(this);if(this.o=p==200,wt(this.i,this.v,this.B,this.l,this.S,ot,p),this.o){if(this.U&&!this.L){t:{if(this.g){var I,W=this.g;if((I=W.g?W.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(I)){var Z=I;break t}}Z=null}if(a=Z)lt(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,w(this,a);else{this.o=!1,this.m=3,ve(12),mi(this),br(this);break e}}if(this.R){a=!0;let Qt;for(;!this.K&&this.C<E.length;)if(Qt=cl(this,E),Qt==Wi){ot==4&&(this.m=4,ve(14),a=!1),lt(this.i,this.l,null,"[Incomplete Response]");break}else if(Qt==so){this.m=4,ve(15),lt(this.i,this.l,E,"[Invalid Chunk]"),a=!1;break}else lt(this.i,this.l,Qt,null),w(this,Qt);if(oo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||E.length!=0||this.h.h||(this.m=1,ve(16),a=!1),this.o=this.o&&a,!a)lt(this.i,this.l,E,"[Invalid Chunked Response]"),mi(this),br(this);else if(E.length>0&&!this.W){this.W=!0;var ye=this.j;ye.g==this&&ye.aa&&!ye.P&&(ye.j.info("Great, no buffering proxy detected. Bytes received: "+E.length),fl(ye),ye.P=!0,ve(11))}}else lt(this.i,this.l,E,null),w(this,E);ot==4&&mi(this),this.o&&!this.K&&(ot==4?Yd(this.j,this):(this.o=!1,as(this)))}else $v(this.g),p==400&&E.indexOf("Unknown SID")>0?(this.m=3,ve(12)):(this.m=0,ve(13)),mi(this),br(this)}}}catch{}finally{}};function da(a){if(!oo(a))return a.g.la();const p=Hd(a.g);if(p==="")return"";let E="";const I=p.length,W=$i(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return mi(a),br(a),"";a.h.i=new o.TextDecoder}for(let Z=0;Z<I;Z++)a.h.h=!0,E+=a.h.i.decode(p[Z],{stream:!(W&&Z==I-1)});return p.length=0,a.h.g+=E,a.C=0,a.h.g}function oo(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function cl(a,p){var E=a.C,I=p.indexOf(`
`,E);return I==-1?Wi:(E=Number(p.substring(E,I)),isNaN(E)?so:(I+=1,I+E>p.length?Wi:(p=p.slice(I,I+E),a.C=I+E,p)))}wn.prototype.cancel=function(){this.K=!0,mi(this)};function as(a){a.T=Date.now()+a.H,fa(a,a.H)}function fa(a,p){if(a.D!=null)throw Error("WatchDog timer not null");a.D=ee(u(a.aa,a),p)}function ao(a){a.D&&(o.clearTimeout(a.D),a.D=null)}wn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(Un(this.i,this.B),this.M!=2&&(me(),ve(17)),mi(this),this.m=2,br(this)):fa(this,this.T-a)};function br(a){a.j.I==0||a.K||Yd(a.j,a)}function mi(a){ao(a);var p=a.O;p&&typeof p.dispose=="function"&&p.dispose(),a.O=null,oe(a.V),a.g&&(p=a.g,a.g=null,p.abort(),p.dispose())}function w(a,p){try{var E=a.j;if(E.I!=0&&(E.g==a||Ee(E.h,a))){if(!a.L&&Ee(E.h,a)&&E.I==3){try{var I=E.Ba.g.parse(p)}catch{I=null}if(Array.isArray(I)&&I.length==3){var W=I;if(W[0]==0){e:if(!E.v){if(E.g)if(E.g.F+3e3<a.F)va(E),ga(E);else break e;dl(E),ve(18)}}else E.xa=W[1],0<E.xa-E.K&&W[2]<37500&&E.F&&E.A==0&&!E.C&&(E.C=ee(u(E.Va,E),6e3));X(E.h)<=1&&E.ta&&(E.ta=void 0)}else Ir(E,11)}else if((a.L||E.g==a)&&va(E),!M(p))for(W=E.Ba.g.parse(p),p=0;p<W.length;p++){let Rt=W[p];const Qt=Rt[0];if(!(Qt<=E.K))if(E.K=Qt,Rt=Rt[1],E.I==2)if(Rt[0]=="c"){E.M=Rt[1],E.ba=Rt[2];const Qn=Rt[3];Qn!=null&&(E.ka=Qn,E.j.info("VER="+E.ka));const Rr=Rt[4];Rr!=null&&(E.za=Rr,E.j.info("SVER="+E.za));const ji=Rt[5];ji!=null&&typeof ji=="number"&&ji>0&&(I=1.5*ji,E.O=I,E.j.info("backChannelRequestTimeoutMs_="+I)),I=E;const Ki=a.g;if(Ki){const Ea=Ki.g?Ki.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ea){var Z=I.h;Z.g||Ea.indexOf("spdy")==-1&&Ea.indexOf("quic")==-1&&Ea.indexOf("h2")==-1||(Z.j=Z.l,Z.g=new Set,Z.h&&(Ie(Z,Z.h),Z.h=null))}if(I.G){const pl=Ki.g?Ki.g.getResponseHeader("X-HTTP-Session-Id"):null;pl&&(I.wa=pl,He(I.J,I.G,pl))}}E.I=3,E.l&&E.l.ra(),E.aa&&(E.T=Date.now()-a.F,E.j.info("Handshake RTT: "+E.T+"ms")),I=E;var ye=a;if(I.na=Zd(I,I.L?I.ba:null,I.W),ye.L){xe(I.h,ye);var ot=ye,$t=I.O;$t&&(ot.H=$t),ot.D&&(ao(ot),as(ot)),I.g=ye}else jd(I);E.i.length>0&&_a(E)}else Rt[0]!="stop"&&Rt[0]!="close"||Ir(E,7);else E.I==3&&(Rt[0]=="stop"||Rt[0]=="close"?Rt[0]=="stop"?Ir(E,7):hl(E):Rt[0]!="noop"&&E.l&&E.l.qa(Rt),E.A=0)}}me(4)}catch{}}var z=class{constructor(a,p){this.g=a,this.map=p}};function K(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function $(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function X(a){return a.h?1:a.g?a.g.size:0}function Ee(a,p){return a.h?a.h==p:a.g?a.g.has(p):!1}function Ie(a,p){a.g?a.g.add(p):a.h=p}function xe(a,p){a.h&&a.h==p?a.h=null:a.g&&a.g.has(p)&&a.g.delete(p)}K.prototype.cancel=function(){if(this.i=ke(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function ke(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let p=a.i;for(const E of a.g.values())p=p.concat(E.G);return p}return g(a.i)}var Be=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tt(a,p){if(a){a=a.split("&");for(let E=0;E<a.length;E++){const I=a[E].indexOf("=");let W,Z=null;I>=0?(W=a[E].substring(0,I),Z=a[E].substring(I+1)):W=a[E],p(W,Z?decodeURIComponent(Z.replace(/\+/g," ")):"")}}}function Ye(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let p;a instanceof Ye?(this.l=a.l,mt(this,a.j),this.o=a.o,this.g=a.g,It(this,a.u),this.h=a.h,Ct(this,Fd(a.i)),this.m=a.m):a&&(p=String(a).match(Be))?(this.l=!1,mt(this,p[1]||"",!0),this.o=Oe(p[2]||""),this.g=Oe(p[3]||"",!0),It(this,p[4]),this.h=Oe(p[5]||"",!0),Ct(this,p[6]||"",!0),this.m=Oe(p[7]||"")):(this.l=!1,this.i=new Lt(null,this.l))}Ye.prototype.toString=function(){const a=[];var p=this.j;p&&a.push(Xt(p,gn,!0),":");var E=this.g;return(E||p=="file")&&(a.push("//"),(p=this.o)&&a.push(Xt(p,gn,!0),"@"),a.push(Hi(E).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.u,E!=null&&a.push(":",String(E))),(E=this.h)&&(this.g&&E.charAt(0)!="/"&&a.push("/"),a.push(Xt(E,E.charAt(0)=="/"?gi:bn,!0))),(E=this.i.toString())&&a.push("?",E),(E=this.m)&&a.push("#",Xt(E,Tt)),a.join("")},Ye.prototype.resolve=function(a){const p=Le(this);let E=!!a.j;E?mt(p,a.j):E=!!a.o,E?p.o=a.o:E=!!a.g,E?p.g=a.g:E=a.u!=null;var I=a.h;if(E)It(p,a.u);else if(E=!!a.h){if(I.charAt(0)!="/")if(this.g&&!this.h)I="/"+I;else{var W=p.h.lastIndexOf("/");W!=-1&&(I=p.h.slice(0,W+1)+I)}if(W=I,W==".."||W==".")I="";else if(W.indexOf("./")!=-1||W.indexOf("/.")!=-1){I=W.lastIndexOf("/",0)==0,W=W.split("/");const Z=[];for(let ye=0;ye<W.length;){const ot=W[ye++];ot=="."?I&&ye==W.length&&Z.push(""):ot==".."?((Z.length>1||Z.length==1&&Z[0]!="")&&Z.pop(),I&&ye==W.length&&Z.push("")):(Z.push(ot),I=!0)}I=Z.join("/")}else I=W}return E?p.h=I:E=a.i.toString()!=="",E?Ct(p,Fd(a.i)):E=!!a.m,E&&(p.m=a.m),p};function Le(a){return new Ye(a)}function mt(a,p,E){a.j=E?Oe(p,!0):p,a.j&&(a.j=a.j.replace(/:$/,""))}function It(a,p){if(p){if(p=Number(p),isNaN(p)||p<0)throw Error("Bad port number "+p);a.u=p}else a.u=null}function Ct(a,p,E){p instanceof Lt?(a.i=p,zv(a.i,a.l)):(E||(p=Xt(p,qi)),a.i=new Lt(p,a.l))}function He(a,p,E){a.i.set(p,E)}function Ot(a){return He(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function Oe(a,p){return a?p?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Xt(a,p,E){return typeof a=="string"?(a=encodeURI(a).replace(p,gt),E&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function gt(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var gn=/[#\/\?@]/g,bn=/[#\?:]/g,gi=/[#\?]/g,qi=/[#\?@]/g,Tt=/#/g;function Lt(a,p){this.h=this.g=null,this.i=a||null,this.j=!!p}function an(a){a.g||(a.g=new Map,a.h=0,a.i&&tt(a.i,function(p,E){a.add(decodeURIComponent(p.replace(/\+/g," ")),E)}))}i=Lt.prototype,i.add=function(a,p){an(this),this.i=null,a=cs(this,a);let E=this.g.get(a);return E||this.g.set(a,E=[]),E.push(p),this.h+=1,this};function Ft(a,p){an(a),p=cs(a,p),a.g.has(p)&&(a.i=null,a.h-=a.g.get(p).length,a.g.delete(p))}function Fn(a,p){return an(a),p=cs(a,p),a.g.has(p)}i.forEach=function(a,p){an(this),this.g.forEach(function(E,I){E.forEach(function(W){a.call(p,W,I,this)},this)},this)};function _i(a,p){an(a);let E=[];if(typeof p=="string")Fn(a,p)&&(E=E.concat(a.g.get(cs(a,p))));else for(a=Array.from(a.g.values()),p=0;p<a.length;p++)E=E.concat(a[p]);return E}i.set=function(a,p){return an(this),this.i=null,a=cs(this,a),Fn(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[p]),this.h+=1,this},i.get=function(a,p){return a?(a=_i(this,a),a.length>0?String(a[0]):p):p};function co(a,p,E){Ft(a,p),E.length>0&&(a.i=null,a.g.set(cs(a,p),g(E)),a.h+=E.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],p=Array.from(this.g.keys());for(let I=0;I<p.length;I++){var E=p[I];const W=Hi(E);E=_i(this,E);for(let Z=0;Z<E.length;Z++){let ye=W;E[Z]!==""&&(ye+="="+Hi(E[Z])),a.push(ye)}}return this.i=a.join("&")};function Fd(a){const p=new Lt;return p.i=a.i,a.g&&(p.g=new Map(a.g),p.h=a.h),p}function cs(a,p){return p=String(p),a.j&&(p=p.toLowerCase()),p}function zv(a,p){p&&!a.j&&(an(a),a.i=null,a.g.forEach(function(E,I){const W=I.toLowerCase();I!=W&&(Ft(this,I),co(this,W,E))},a)),a.j=p}function Gv(a,p){const E=new De;if(o.Image){const I=new Image;I.onload=h(Xi,E,"TestLoadImage: loaded",!0,p,I),I.onerror=h(Xi,E,"TestLoadImage: error",!1,p,I),I.onabort=h(Xi,E,"TestLoadImage: abort",!1,p,I),I.ontimeout=h(Xi,E,"TestLoadImage: timeout",!1,p,I),o.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=a}else p(!1)}function Hv(a,p){const E=new De,I=new AbortController,W=setTimeout(()=>{I.abort(),Xi(E,"TestPingServer: timeout",!1,p)},1e4);fetch(a,{signal:I.signal}).then(Z=>{clearTimeout(W),Z.ok?Xi(E,"TestPingServer: ok",!0,p):Xi(E,"TestPingServer: server error",!1,p)}).catch(()=>{clearTimeout(W),Xi(E,"TestPingServer: error",!1,p)})}function Xi(a,p,E,I,W){try{W&&(W.onload=null,W.onerror=null,W.onabort=null,W.ontimeout=null),I(E)}catch{}}function Wv(){this.g=new _e}function ll(a){this.i=a.Sb||null,this.h=a.ab||!1}f(ll,ze),ll.prototype.g=function(){return new pa(this.i,this.h)};function pa(a,p){rt.call(this),this.H=a,this.o=p,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(pa,rt),i=pa.prototype,i.open=function(a,p){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=p,this.readyState=1,uo(this)},i.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const p={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(p.body=a),(this.H||o).fetch(new Request(this.D,p)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,lo(this)),this.readyState=0},i.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,uo(this)),this.g&&(this.readyState=3,uo(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Vd(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function Vd(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}i.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var p=a.value?a.value:new Uint8Array(0);(p=this.B.decode(p,{stream:!a.done}))&&(this.response=this.responseText+=p)}a.done?lo(this):uo(this),this.readyState==3&&Vd(this)}},i.Oa=function(a){this.g&&(this.response=this.responseText=a,lo(this))},i.Na=function(a){this.g&&(this.response=a,lo(this))},i.ga=function(){this.g&&lo(this)};function lo(a){a.readyState=4,a.l=null,a.j=null,a.B=null,uo(a)}i.setRequestHeader=function(a,p){this.A.append(a,p)},i.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],p=this.h.entries();for(var E=p.next();!E.done;)E=E.value,a.push(E[0]+": "+E[1]),E=p.next();return a.join(`\r
`)};function uo(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(pa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function kd(a){let p="";return ae(a,function(E,I){p+=I,p+=":",p+=E,p+=`\r
`}),p}function ul(a,p,E){e:{for(I in E){var I=!1;break e}I=!0}I||(E=kd(E),typeof a=="string"?E!=null&&Hi(E):He(a,p,E))}function Ut(a){rt.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(Ut,rt);var qv=/^https?$/i,Xv=["POST","PUT"];i=Ut.prototype,i.Fa=function(a){this.H=a},i.ea=function(a,p,E,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);p=p?p.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():ha.g(),this.g.onreadystatechange=d(u(this.Ca,this));try{this.B=!0,this.g.open(p,String(a),!0),this.B=!1}catch(Z){Bd(this,Z);return}if(a=E||"",E=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var W in I)E.set(W,I[W]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const Z of I.keys())E.set(Z,I.get(Z));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(E.keys()).find(Z=>Z.toLowerCase()=="content-type"),W=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(Xv,p,void 0)>=0)||I||W||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Z,ye]of E)this.g.setRequestHeader(Z,ye);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(Z){Bd(this,Z)}};function Bd(a,p){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=p,a.o=5,zd(a),ma(a)}function zd(a){a.A||(a.A=!0,Ke(a,"complete"),Ke(a,"error"))}i.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,Ke(this,"complete"),Ke(this,"abort"),ma(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ma(this,!0)),Ut.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?Gd(this):this.Xa())},i.Xa=function(){Gd(this)};function Gd(a){if(a.h&&typeof s<"u"){if(a.v&&$i(a)==4)setTimeout(a.Ca.bind(a),0);else if(Ke(a,"readystatechange"),$i(a)==4){a.h=!1;try{const Z=a.ca();e:switch(Z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var p=!0;break e;default:p=!1}var E;if(!(E=p)){var I;if(I=Z===0){let ye=String(a.D).match(Be)[1]||null;!ye&&o.self&&o.self.location&&(ye=o.self.location.protocol.slice(0,-1)),I=!qv.test(ye?ye.toLowerCase():"")}E=I}if(E)Ke(a,"complete"),Ke(a,"success");else{a.o=6;try{var W=$i(a)>2?a.g.statusText:""}catch{W=""}a.l=W+" ["+a.ca()+"]",zd(a)}}finally{ma(a)}}}}function ma(a,p){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const E=a.g;a.g=null,p||Ke(a,"ready");try{E.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function $i(a){return a.g?a.g.readyState:0}i.ca=function(){try{return $i(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(a){if(this.g){var p=this.g.responseText;return a&&p.indexOf(a)==0&&(p=p.substring(a.length)),Ve(p)}};function Hd(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function $v(a){const p={};a=(a.g&&$i(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<a.length;I++){if(M(a[I]))continue;var E=pi(a[I]);const W=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const Z=p[W]||[];p[W]=Z,Z.push(E)}Ae(p,function(I){return I.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ho(a,p,E){return E&&E.internalChannelParams&&E.internalChannelParams[a]||p}function Wd(a){this.za=0,this.i=[],this.j=new De,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ho("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ho("baseRetryDelayMs",5e3,a),this.Za=ho("retryDelaySeedMs",1e4,a),this.Ta=ho("forwardChannelMaxRetries",2,a),this.va=ho("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new K(a&&a.concurrentRequestLimit),this.Ba=new Wv,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=Wd.prototype,i.ka=8,i.I=1,i.connect=function(a,p,E,I){ve(0),this.W=a,this.H=p||{},E&&I!==void 0&&(this.H.OSID=E,this.H.OAID=I),this.F=this.X,this.J=Zd(this,null,this.W),_a(this)};function hl(a){if(qd(a),a.I==3){var p=a.V++,E=Le(a.J);if(He(E,"SID",a.M),He(E,"RID",p),He(E,"TYPE","terminate"),fo(a,E),p=new wn(a,a.j,p),p.M=2,p.A=Ot(Le(E)),E=!1,o.navigator&&o.navigator.sendBeacon)try{E=o.navigator.sendBeacon(p.A.toString(),"")}catch{}!E&&o.Image&&(new Image().src=p.A,E=!0),E||(p.g=ef(p.j,null),p.g.ea(p.A)),p.F=Date.now(),as(p)}Jd(a)}function ga(a){a.g&&(fl(a),a.g.cancel(),a.g=null)}function qd(a){ga(a),a.v&&(o.clearTimeout(a.v),a.v=null),va(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function _a(a){if(!$(a.h)&&!a.m){a.m=!0;var p=a.Ea;U||m(),F||(U(),F=!0),A.add(p,a),a.D=0}}function jv(a,p){return X(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=p.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=ee(u(a.Ea,a,p),Qd(a,a.D)),a.D++,!0)}i.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const W=new wn(this,this.j,a);let Z=this.o;if(this.U&&(Z?(Z=Pe(Z),Qe(Z,this.U)):Z=this.U),this.u!==null||this.R||(W.J=Z,Z=null),this.S)e:{for(var p=0,E=0;E<this.i.length;E++){t:{var I=this.i[E];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(p+=I,p>4096){p=E;break e}if(p===4096||E===this.i.length-1){p=E+1;break e}}p=1e3}else p=1e3;p=$d(this,W,p),E=Le(this.J),He(E,"RID",a),He(E,"CVER",22),this.G&&He(E,"X-HTTP-Session-Id",this.G),fo(this,E),Z&&(this.R?p="headers="+Hi(kd(Z))+"&"+p:this.u&&ul(E,this.u,Z)),Ie(this.h,W),this.Ra&&He(E,"TYPE","init"),this.S?(He(E,"$req",p),He(E,"SID","null"),W.U=!0,os(W,E,null)):os(W,E,p),this.I=2}}else this.I==3&&(a?Xd(this,a):this.i.length==0||$(this.h)||Xd(this))};function Xd(a,p){var E;p?E=p.l:E=a.V++;const I=Le(a.J);He(I,"SID",a.M),He(I,"RID",E),He(I,"AID",a.K),fo(a,I),a.u&&a.o&&ul(I,a.u,a.o),E=new wn(a,a.j,E,a.D+1),a.u===null&&(E.J=a.o),p&&(a.i=p.G.concat(a.i)),p=$d(a,E,1e3),E.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Ie(a.h,E),os(E,I,p)}function fo(a,p){a.H&&ae(a.H,function(E,I){He(p,I,E)}),a.l&&ae({},function(E,I){He(p,I,E)})}function $d(a,p,E){E=Math.min(a.i.length,E);const I=a.l?u(a.l.Ka,a.l,a):null;e:{var W=a.i;let ot=-1;for(;;){const $t=["count="+E];ot==-1?E>0?(ot=W[0].g,$t.push("ofs="+ot)):ot=0:$t.push("ofs="+ot);let Rt=!0;for(let Qt=0;Qt<E;Qt++){var Z=W[Qt].g;const Qn=W[Qt].map;if(Z-=ot,Z<0)ot=Math.max(0,W[Qt].g-100),Rt=!1;else try{Z="req"+Z+"_"||"";try{var ye=Qn instanceof Map?Qn:Object.entries(Qn);for(const[Rr,ji]of ye){let Ki=ji;c(ji)&&(Ki=te(ji)),$t.push(Z+Rr+"="+encodeURIComponent(Ki))}}catch(Rr){throw $t.push(Z+"type="+encodeURIComponent("_badmap")),Rr}}catch{I&&I(Qn)}}if(Rt){ye=$t.join("&");break e}}ye=void 0}return a=a.i.splice(0,E),p.G=a,ye}function jd(a){if(!a.g&&!a.v){a.Y=1;var p=a.Da;U||m(),F||(U(),F=!0),A.add(p,a),a.A=0}}function dl(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=ee(u(a.Da,a),Qd(a,a.A)),a.A++,!0)}i.Da=function(){if(this.v=null,Kd(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=ee(u(this.Wa,this),a)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ve(10),ga(this),Kd(this))};function fl(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function Kd(a){a.g=new wn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var p=Le(a.na);He(p,"RID","rpc"),He(p,"SID",a.M),He(p,"AID",a.K),He(p,"CI",a.F?"0":"1"),!a.F&&a.ia&&He(p,"TO",a.ia),He(p,"TYPE","xmlhttp"),fo(a,p),a.u&&a.o&&ul(p,a.u,a.o),a.O&&(a.g.H=a.O);var E=a.g;a=a.ba,E.M=1,E.A=Ot(Le(p)),E.u=null,E.R=!0,wr(E,a)}i.Va=function(){this.C!=null&&(this.C=null,ga(this),dl(this),ve(19))};function va(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function Yd(a,p){var E=null;if(a.g==p){va(a),fl(a),a.g=null;var I=2}else if(Ee(a.h,p))E=p.G,xe(a.h,p),I=1;else return;if(a.I!=0){if(p.o)if(I==1){E=p.u?p.u.length:0,p=Date.now()-p.F;var W=a.D;I=et(),Ke(I,new ue(I,E)),_a(a)}else jd(a);else if(W=p.m,W==3||W==0&&p.X>0||!(I==1&&jv(a,p)||I==2&&dl(a)))switch(E&&E.length>0&&(p=a.h,p.i=p.i.concat(E)),W){case 1:Ir(a,5);break;case 4:Ir(a,10);break;case 3:Ir(a,6);break;default:Ir(a,2)}}}function Qd(a,p){let E=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(E*=2),E*p}function Ir(a,p){if(a.j.info("Error code "+p),p==2){var E=u(a.bb,a),I=a.Ua;const W=!I;I=new Ye(I||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||mt(I,"https"),Ot(I),W?Gv(I.toString(),E):Hv(I.toString(),E)}else ve(2);a.I=0,a.l&&a.l.pa(p),Jd(a),qd(a)}i.bb=function(a){a?(this.j.info("Successfully pinged google.com"),ve(2)):(this.j.info("Failed to ping google.com"),ve(1))};function Jd(a){if(a.I=0,a.ja=[],a.l){const p=ke(a.h);(p.length!=0||a.i.length!=0)&&(x(a.ja,p),x(a.ja,a.i),a.h.i.length=0,g(a.i),a.i.length=0),a.l.oa()}}function Zd(a,p,E){var I=E instanceof Ye?Le(E):new Ye(E);if(I.g!="")p&&(I.g=p+"."+I.g),It(I,I.u);else{var W=o.location;I=W.protocol,p=p?p+"."+W.hostname:W.hostname,W=+W.port;const Z=new Ye(null);I&&mt(Z,I),p&&(Z.g=p),W&&It(Z,W),E&&(Z.h=E),I=Z}return E=a.G,p=a.wa,E&&p&&He(I,E,p),He(I,"VER",a.ka),fo(a,I),I}function ef(a,p,E){if(p&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return p=a.Aa&&!a.ma?new Ut(new ll({ab:E})):new Ut(a.ma),p.Fa(a.L),p}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function tf(){}i=tf.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function ya(){}ya.prototype.g=function(a,p){return new Sn(a,p)};function Sn(a,p){rt.call(this),this.g=new Wd(p),this.l=a,this.h=p&&p.messageUrlParams||null,a=p&&p.messageHeaders||null,p&&p.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=p&&p.initMessageHeaders||null,p&&p.messageContentType&&(a?a["X-WebChannel-Content-Type"]=p.messageContentType:a={"X-WebChannel-Content-Type":p.messageContentType}),p&&p.sa&&(a?a["X-WebChannel-Client-Profile"]=p.sa:a={"X-WebChannel-Client-Profile":p.sa}),this.g.U=a,(a=p&&p.Qb)&&!M(a)&&(this.g.u=a),this.A=p&&p.supportsCrossDomainXhr||!1,this.v=p&&p.sendRawJson||!1,(p=p&&p.httpSessionIdParam)&&!M(p)&&(this.g.G=p,a=this.h,a!==null&&p in a&&(a=this.h,p in a&&delete a[p])),this.j=new ls(this)}f(Sn,rt),Sn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Sn.prototype.close=function(){hl(this.g)},Sn.prototype.o=function(a){var p=this.g;if(typeof a=="string"){var E={};E.__data__=a,a=E}else this.v&&(E={},E.__data__=te(a),a=E);p.i.push(new z(p.Ya++,a)),p.I==3&&_a(p)},Sn.prototype.N=function(){this.g.l=null,delete this.j,hl(this.g),delete this.g,Sn.Z.N.call(this)};function nf(a){de.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var p=a.__sm__;if(p){e:{for(const E in p){a=E;break e}a=void 0}(this.i=a)&&(a=this.i,p=p!==null&&a in p?p[a]:void 0),this.data=p}else this.data=a}f(nf,de);function rf(){Ue.call(this),this.status=1}f(rf,Ue);function ls(a){this.g=a}f(ls,tf),ls.prototype.ra=function(){Ke(this.g,"a")},ls.prototype.qa=function(a){Ke(this.g,new nf(a))},ls.prototype.pa=function(a){Ke(this.g,new rf)},ls.prototype.oa=function(){Ke(this.g,"b")},ya.prototype.createWebChannel=ya.prototype.g,Sn.prototype.send=Sn.prototype.o,Sn.prototype.open=Sn.prototype.m,Sn.prototype.close=Sn.prototype.close,p_=function(){return new ya},f_=function(){return et()},d_=Re,uh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Mr.NO_ERROR=0,Mr.TIMEOUT=8,Mr.HTTP_ERROR=6,lc=Mr,rs.COMPLETE="complete",h_=rs,Xe.EventType=ce,ce.OPEN="a",ce.CLOSE="b",ce.ERROR="c",ce.MESSAGE="d",rt.prototype.listen=rt.prototype.J,wo=Xe,Ut.prototype.listenOnce=Ut.prototype.K,Ut.prototype.getLastError=Ut.prototype.Ha,Ut.prototype.getLastErrorCode=Ut.prototype.ya,Ut.prototype.getStatus=Ut.prototype.ca,Ut.prototype.getResponseJson=Ut.prototype.La,Ut.prototype.getResponseText=Ut.prototype.la,Ut.prototype.send=Ut.prototype.ea,Ut.prototype.setWithCredentials=Ut.prototype.Fa,u_=Ut}).apply(typeof $a<"u"?$a:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vn.UNAUTHENTICATED=new vn(null),vn.GOOGLE_CREDENTIALS=new vn("google-credentials-uid"),vn.FIRST_PARTY=new vn("first-party-uid"),vn.MOCK_USER=new vn("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zs="12.11.0";function oI(i){Zs=i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=new Fh("@firebase/firestore");function As(){return Qr.logLevel}function Ce(i,...e){if(Qr.logLevel<=ut.DEBUG){const t=e.map(Yh);Qr.debug(`Firestore (${Zs}): ${i}`,...t)}}function Bi(i,...e){if(Qr.logLevel<=ut.ERROR){const t=e.map(Yh);Qr.error(`Firestore (${Zs}): ${i}`,...t)}}function Gs(i,...e){if(Qr.logLevel<=ut.WARN){const t=e.map(Yh);Qr.warn(`Firestore (${Zs}): ${i}`,...t)}}function Yh(i){if(typeof i=="string")return i;try{return(function(t){return JSON.stringify(t)})(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(i,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,m_(i,n,t)}function m_(i,e,t){let n=`FIRESTORE (${Zs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${i.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw Bi(n),new Error(n)}function St(i,e,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,i||m_(e,r,n)}function it(i,e){return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Te extends Gi{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(vn.UNAUTHENTICATED)))}shutdown(){}}class lI{constructor(e){this.t=e,this.currentUser=vn.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){St(this.o===void 0,42304);let n=this.i;const r=l=>this.i!==n?(n=this.i,t(l)):Promise.resolve();let s=new Di;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Di,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const l=s;e.enqueueRetryable((async()=>{await l.promise,await r(this.currentUser)}))},c=l=>{Ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Di)}}),0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.i!==e?(Ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(St(typeof n.accessToken=="string",31837,{l:n}),new aI(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return St(e===null||typeof e=="string",2055,{h:e}),new vn(e)}}class uI{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=vn.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class hI{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new uI(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(vn.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Pp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class dI{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Mn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){St(this.o===void 0,3512);const n=s=>{s.error!=null&&Ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,Ce("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable((()=>n(s)))};const r=s=>{Ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((s=>r(s))),setTimeout((()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?r(s):Ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Pp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(St(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Pp(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(i){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(i);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<i;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const r=fI(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<t&&(n+=e.charAt(r[s]%62))}return n}}function ht(i,e){return i<e?-1:i>e?1:0}function hh(i,e){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++){const r=i.charAt(n),s=e.charAt(n);if(r!==s)return tu(r)===tu(s)?ht(r,s):tu(r)?1:-1}return ht(i.length,e.length)}const pI=55296,mI=57343;function tu(i){const e=i.charCodeAt(0);return e>=pI&&e<=mI}function Hs(i,e,t){return i.length===e.length&&i.every(((n,r)=>t(n,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp="__name__";class ei{constructor(e,t,n){t===void 0?t=0:t>e.length&&je(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&je(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return ei.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ei?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const s=ei.compareSegments(e.get(r),t.get(r));if(s!==0)return s}return ht(e.length,t.length)}static compareSegments(e,t){const n=ei.isNumericId(e),r=ei.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?ei.extractNumericId(e).compare(ei.extractNumericId(t)):hh(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return dr.fromString(e.substring(4,e.length-2))}}class Pt extends ei{construct(e,t,n){return new Pt(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Te(ie.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((r=>r.length>0)))}return new Pt(t)}static emptyPath(){return new Pt([])}}const gI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nn extends ei{construct(e,t,n){return new nn(e,t,n)}static isValidIdentifier(e){return gI.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nn.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Dp}static keyField(){return new nn([Dp])}static fromServerFormat(e){const t=[];let n="",r=0;const s=()=>{if(n.length===0)throw new Te(ie.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const c=e[r];if(c==="\\"){if(r+1===e.length)throw new Te(ie.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new Te(ie.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=l,r+=2}else c==="`"?(o=!o,r++):c!=="."||o?(n+=c,r++):(s(),r++)}if(s(),o)throw new Te(ie.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nn(t)}static emptyPath(){return new nn([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.path=e}static fromPath(e){return new Ge(Pt.fromString(e))}static fromName(e){return new Ge(Pt.fromString(e).popFirst(5))}static empty(){return new Ge(Pt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Pt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ge(new Pt(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(i,e,t){if(!t)throw new Te(ie.INVALID_ARGUMENT,`Function ${i}() cannot be called with an empty ${e}.`)}function _I(i,e,t,n){if(e===!0&&n===!0)throw new Te(ie.INVALID_ARGUMENT,`${i} and ${t} cannot be used together.`)}function Lp(i){if(!Ge.isDocumentKey(i))throw new Te(ie.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${i} has ${i.length}.`)}function Np(i){if(Ge.isDocumentKey(i))throw new Te(ie.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${i} has ${i.length}.`)}function __(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function $c(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(i);return e?`a custom ${e} object`:"an object"}}return typeof i=="function"?"a function":je(12329,{type:typeof i})}function Li(i,e){if("_delegate"in i&&(i=i._delegate),!(i instanceof e)){if(e.name===i.constructor.name)throw new Te(ie.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=$c(i);throw new Te(ie.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(i,e){const t={typeString:i};return e&&(t.value=e),t}function oa(i,e){if(!__(i))throw new Te(ie.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const r=e[n].typeString,s="value"in e[n]?{value:e[n].value}:void 0;if(!(n in i)){t=`JSON missing required field: '${n}'`;break}const o=i[n];if(r&&typeof o!==r){t=`JSON field '${n}' must be a ${r}.`;break}if(s!==void 0&&o!==s.value){t=`Expected '${n}' field to equal '${s.value}'`;break}}if(t)throw new Te(ie.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up=-62135596800,Op=1e6;class Dt{static now(){return Dt.fromMillis(Date.now())}static fromDate(e){return Dt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Op);return new Dt(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Te(ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Te(ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Up)throw new Te(ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Te(ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Op}_compareTo(e){return this.seconds===e.seconds?ht(this.nanoseconds,e.nanoseconds):ht(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Dt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(oa(e,Dt._jsonSchema))return new Dt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Up;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Dt._jsonSchemaVersion="firestore/timestamp/1.0",Dt._jsonSchema={type:Wt("string",Dt._jsonSchemaVersion),seconds:Wt("number"),nanoseconds:Wt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{static fromTimestamp(e){return new Ze(e)}static min(){return new Ze(new Dt(0,0))}static max(){return new Ze(new Dt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=-1;function vI(i,e){const t=i.toTimestamp().seconds,n=i.toTimestamp().nanoseconds+1,r=Ze.fromTimestamp(n===1e9?new Dt(t+1,0):new Dt(t,n));return new mr(r,Ge.empty(),e)}function yI(i){return new mr(i.readTime,i.key,zo)}class mr{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new mr(Ze.min(),Ge.empty(),zo)}static max(){return new mr(Ze.max(),Ge.empty(),zo)}}function EI(i,e){let t=i.readTime.compareTo(e.readTime);return t!==0?t:(t=Ge.comparator(i.documentKey,e.documentKey),t!==0?t:ht(i.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class SI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo(i){if(i.code!==ie.FAILED_PRECONDITION||i.message!==xI)throw i;Ce("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&je(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new se(((n,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(n,r)},this.catchCallback=s=>{this.wrapFailure(t,s).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof se?t:se.resolve(t)}catch(t){return se.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):se.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):se.reject(t)}static resolve(e){return new se(((t,n)=>{t(e)}))}static reject(e){return new se(((t,n)=>{n(e)}))}static waitFor(e){return new se(((t,n)=>{let r=0,s=0,o=!1;e.forEach((c=>{++r,c.next((()=>{++s,o&&s===r&&t()}),(l=>n(l)))})),o=!0,s===r&&t()}))}static or(e){let t=se.resolve(!1);for(const n of e)t=t.next((r=>r?se.resolve(r):n()));return t}static forEach(e,t){const n=[];return e.forEach(((r,s)=>{n.push(t.call(this,r,s))})),this.waitFor(n)}static mapArray(e,t){return new se(((n,r)=>{const s=e.length,o=new Array(s);let c=0;for(let l=0;l<s;l++){const u=l;t(e[u]).next((h=>{o[u]=h,++c,c===s&&n(o)}),(h=>r(h)))}}))}static doWhile(e,t){return new se(((n,r)=>{const s=()=>{e()===!0?t().next((()=>{s()}),r):n()};s()}))}}function TI(i){const e=i.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function to(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.ae(n),this.ue=n=>t.writeSequenceNumber(n))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}jc.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=-1;function Kc(i){return i==null}function wc(i){return i===0&&1/i==-1/0}function AI(i){return typeof i=="number"&&Number.isInteger(i)&&!wc(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v_="";function MI(i){let e="";for(let t=0;t<i.length;t++)e.length>0&&(e=Fp(e)),e=wI(i.get(t),e);return Fp(e)}function wI(i,e){let t=e;const n=i.length;for(let r=0;r<n;r++){const s=i.charAt(r);switch(s){case"\0":t+="";break;case v_:t+="";break;default:t+=s}}return t}function Fp(i){return i+v_+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(i){let e=0;for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e++;return e}function es(i,e){for(const t in i)Object.prototype.hasOwnProperty.call(i,t)&&e(t,i[t])}function y_(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,t){this.comparator=e,this.root=t||tn.EMPTY}insert(e,t){return new Nt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,tn.BLACK,null,null))}remove(e){return new Nt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,tn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ja(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ja(this.root,e,this.comparator,!1)}getReverseIterator(){return new ja(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ja(this.root,e,this.comparator,!0)}}class ja{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class tn{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=n??tn.RED,this.left=r??tn.EMPTY,this.right=s??tn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new tn(e??this.key,t??this.value,n??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):s===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return tn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return tn.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,tn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,tn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw je(43730,{key:this.key,value:this.value});if(this.right.isRed())throw je(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw je(27949);return e+(this.isRed()?0:1)}}tn.EMPTY=null,tn.RED=!0,tn.BLACK=!1;tn.EMPTY=new class{constructor(){this.size=0}get key(){throw je(57766)}get value(){throw je(16141)}get color(){throw je(16727)}get left(){throw je(29726)}get right(){throw je(36894)}copy(e,t,n,r,s){return this}insert(e,t,n){return new tn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this.comparator=e,this.data=new Nt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new kp(this.data.getIterator())}getIteratorFrom(e){return new kp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof jt)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,s=n.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new jt(this.comparator);return t.data=e,t}}class kp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this.fields=e,e.sort(nn.comparator)}static empty(){return new qn([])}unionWith(e){let t=new jt(nn.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new qn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Hs(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new E_("Invalid base64 string: "+s):s}})(e);return new on(t)}static fromUint8Array(e){const t=(function(r){let s="";for(let o=0;o<r.length;++o)s+=String.fromCharCode(r[o]);return s})(e);return new on(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ht(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}on.EMPTY_BYTE_STRING=new on("");const bI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gr(i){if(St(!!i,39018),typeof i=="string"){let e=0;const t=bI.exec(i);if(St(!!t,46558,{timestamp:i}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const n=new Date(i);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:Vt(i.seconds),nanos:Vt(i.nanos)}}function Vt(i){return typeof i=="number"?i:typeof i=="string"?Number(i):0}function _r(i){return typeof i=="string"?on.fromBase64String(i):on.fromUint8Array(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_="server_timestamp",S_="__type__",T_="__previous_value__",A_="__local_write_time__";function Zh(i){var t,n;return((n=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[S_])==null?void 0:n.stringValue)===x_}function Yc(i){const e=i.mapValue.fields[T_];return Zh(e)?Yc(e):e}function Go(i){const e=gr(i.mapValue.fields[A_].timestampValue);return new Dt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e,t,n,r,s,o,c,l,u,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=h,this.apiKey=f}}const bc="(default)";class Ho{constructor(e,t){this.projectId=e,this.database=t||bc}static empty(){return new Ho("","")}get isDefaultDatabase(){return this.database===bc}isEqual(e){return e instanceof Ho&&e.projectId===this.projectId&&e.database===this.database}}function RI(i,e){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new Te(ie.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ho(i.options.projectId,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_="__type__",CI="__max__",Ka={mapValue:{}},w_="__vector__",Ic="value";function vr(i){return"nullValue"in i?0:"booleanValue"in i?1:"integerValue"in i||"doubleValue"in i?2:"timestampValue"in i?3:"stringValue"in i?5:"bytesValue"in i?6:"referenceValue"in i?7:"geoPointValue"in i?8:"arrayValue"in i?9:"mapValue"in i?Zh(i)?4:DI(i)?9007199254740991:PI(i)?10:11:je(28295,{value:i})}function fi(i,e){if(i===e)return!0;const t=vr(i);if(t!==vr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return i.booleanValue===e.booleanValue;case 4:return Go(i).isEqual(Go(e));case 3:return(function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const o=gr(r.timestampValue),c=gr(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(i,e);case 5:return i.stringValue===e.stringValue;case 6:return(function(r,s){return _r(r.bytesValue).isEqual(_r(s.bytesValue))})(i,e);case 7:return i.referenceValue===e.referenceValue;case 8:return(function(r,s){return Vt(r.geoPointValue.latitude)===Vt(s.geoPointValue.latitude)&&Vt(r.geoPointValue.longitude)===Vt(s.geoPointValue.longitude)})(i,e);case 2:return(function(r,s){if("integerValue"in r&&"integerValue"in s)return Vt(r.integerValue)===Vt(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const o=Vt(r.doubleValue),c=Vt(s.doubleValue);return o===c?wc(o)===wc(c):isNaN(o)&&isNaN(c)}return!1})(i,e);case 9:return Hs(i.arrayValue.values||[],e.arrayValue.values||[],fi);case 10:case 11:return(function(r,s){const o=r.mapValue.fields||{},c=s.mapValue.fields||{};if(Vp(o)!==Vp(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!fi(o[l],c[l])))return!1;return!0})(i,e);default:return je(52216,{left:i})}}function Wo(i,e){return(i.values||[]).find((t=>fi(t,e)))!==void 0}function Ws(i,e){if(i===e)return 0;const t=vr(i),n=vr(e);if(t!==n)return ht(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return ht(i.booleanValue,e.booleanValue);case 2:return(function(s,o){const c=Vt(s.integerValue||s.doubleValue),l=Vt(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(i,e);case 3:return Bp(i.timestampValue,e.timestampValue);case 4:return Bp(Go(i),Go(e));case 5:return hh(i.stringValue,e.stringValue);case 6:return(function(s,o){const c=_r(s),l=_r(o);return c.compareTo(l)})(i.bytesValue,e.bytesValue);case 7:return(function(s,o){const c=s.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const h=ht(c[u],l[u]);if(h!==0)return h}return ht(c.length,l.length)})(i.referenceValue,e.referenceValue);case 8:return(function(s,o){const c=ht(Vt(s.latitude),Vt(o.latitude));return c!==0?c:ht(Vt(s.longitude),Vt(o.longitude))})(i.geoPointValue,e.geoPointValue);case 9:return zp(i.arrayValue,e.arrayValue);case 10:return(function(s,o){var d,g,x,b;const c=s.fields||{},l=o.fields||{},u=(d=c[Ic])==null?void 0:d.arrayValue,h=(g=l[Ic])==null?void 0:g.arrayValue,f=ht(((x=u==null?void 0:u.values)==null?void 0:x.length)||0,((b=h==null?void 0:h.values)==null?void 0:b.length)||0);return f!==0?f:zp(u,h)})(i.mapValue,e.mapValue);case 11:return(function(s,o){if(s===Ka.mapValue&&o===Ka.mapValue)return 0;if(s===Ka.mapValue)return 1;if(o===Ka.mapValue)return-1;const c=s.fields||{},l=Object.keys(c),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const d=hh(l[f],h[f]);if(d!==0)return d;const g=Ws(c[l[f]],u[h[f]]);if(g!==0)return g}return ht(l.length,h.length)})(i.mapValue,e.mapValue);default:throw je(23264,{he:t})}}function Bp(i,e){if(typeof i=="string"&&typeof e=="string"&&i.length===e.length)return ht(i,e);const t=gr(i),n=gr(e),r=ht(t.seconds,n.seconds);return r!==0?r:ht(t.nanos,n.nanos)}function zp(i,e){const t=i.values||[],n=e.values||[];for(let r=0;r<t.length&&r<n.length;++r){const s=Ws(t[r],n[r]);if(s)return s}return ht(t.length,n.length)}function qs(i){return dh(i)}function dh(i){return"nullValue"in i?"null":"booleanValue"in i?""+i.booleanValue:"integerValue"in i?""+i.integerValue:"doubleValue"in i?""+i.doubleValue:"timestampValue"in i?(function(t){const n=gr(t);return`time(${n.seconds},${n.nanos})`})(i.timestampValue):"stringValue"in i?i.stringValue:"bytesValue"in i?(function(t){return _r(t).toBase64()})(i.bytesValue):"referenceValue"in i?(function(t){return Ge.fromName(t).toString()})(i.referenceValue):"geoPointValue"in i?(function(t){return`geo(${t.latitude},${t.longitude})`})(i.geoPointValue):"arrayValue"in i?(function(t){let n="[",r=!0;for(const s of t.values||[])r?r=!1:n+=",",n+=dh(s);return n+"]"})(i.arrayValue):"mapValue"in i?(function(t){const n=Object.keys(t.fields||{}).sort();let r="{",s=!0;for(const o of n)s?s=!1:r+=",",r+=`${o}:${dh(t.fields[o])}`;return r+"}"})(i.mapValue):je(61005,{value:i})}function uc(i){switch(vr(i)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Yc(i);return e?16+uc(e):16;case 5:return 2*i.stringValue.length;case 6:return _r(i.bytesValue).approximateByteSize();case 7:return i.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((r,s)=>r+uc(s)),0)})(i.arrayValue);case 10:case 11:return(function(n){let r=0;return es(n.fields,((s,o)=>{r+=s.length+uc(o)})),r})(i.mapValue);default:throw je(13486,{value:i})}}function Gp(i,e){return{referenceValue:`projects/${i.projectId}/databases/${i.database}/documents/${e.path.canonicalString()}`}}function fh(i){return!!i&&"integerValue"in i}function ed(i){return!!i&&"arrayValue"in i}function Hp(i){return!!i&&"nullValue"in i}function Wp(i){return!!i&&"doubleValue"in i&&isNaN(Number(i.doubleValue))}function hc(i){return!!i&&"mapValue"in i}function PI(i){var t,n;return((n=(((t=i==null?void 0:i.mapValue)==null?void 0:t.fields)||{})[M_])==null?void 0:n.stringValue)===w_}function Po(i){if(i.geoPointValue)return{geoPointValue:{...i.geoPointValue}};if(i.timestampValue&&typeof i.timestampValue=="object")return{timestampValue:{...i.timestampValue}};if(i.mapValue){const e={mapValue:{fields:{}}};return es(i.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Po(n))),e}if(i.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(i.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Po(i.arrayValue.values[t]);return e}return{...i}}function DI(i){return(((i.mapValue||{}).fields||{}).__type__||{}).stringValue===CI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(e){this.value=e}static empty(){return new Dn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!hc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Po(t)}setAll(e){let t=nn.emptyPath(),n={},r=[];e.forEach(((o,c)=>{if(!t.isImmediateParentOf(c)){const l=this.getFieldsMap(t);this.applyChanges(l,n,r),n={},r=[],t=c.popLast()}o?n[c.lastSegment()]=Po(o):r.push(c.lastSegment())}));const s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){const t=this.field(e.popLast());hc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];hc(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){es(t,((r,s)=>e[r]=s));for(const r of n)delete e[r]}clone(){return new Dn(Po(this.value))}}function b_(i){const e=[];return es(i.fields,((t,n)=>{const r=new nn([t]);if(hc(n)){const s=b_(n.mapValue).fields;if(s.length===0)e.push(r);else for(const o of s)e.push(r.child(o))}else e.push(r)})),new qn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(e,t,n,r,s,o,c){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new hn(e,0,Ze.min(),Ze.min(),Ze.min(),Dn.empty(),0)}static newFoundDocument(e,t,n,r){return new hn(e,1,t,Ze.min(),n,r,0)}static newNoDocument(e,t){return new hn(e,2,t,Ze.min(),Ze.min(),Dn.empty(),0)}static newUnknownDocument(e,t){return new hn(e,3,t,Ze.min(),Ze.min(),Dn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ze.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ze.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof hn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new hn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t){this.position=e,this.inclusive=t}}function qp(i,e,t){let n=0;for(let r=0;r<i.position.length;r++){const s=e[r],o=i.position[r];if(s.field.isKeyField()?n=Ge.comparator(Ge.fromName(o.referenceValue),t.key):n=Ws(o,t.data.field(s.field)),s.dir==="desc"&&(n*=-1),n!==0)break}return n}function Xp(i,e){if(i===null)return e===null;if(e===null||i.inclusive!==e.inclusive||i.position.length!==e.position.length)return!1;for(let t=0;t<i.position.length;t++)if(!fi(i.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,t="asc"){this.field=e,this.dir=t}}function LI(i,e){return i.dir===e.dir&&i.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{}class Ht extends I_{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new UI(e,t,n):t==="array-contains"?new VI(e,n):t==="in"?new kI(e,n):t==="not-in"?new BI(e,n):t==="array-contains-any"?new zI(e,n):new Ht(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new OI(e,n):new FI(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ws(t,this.value)):t!==null&&vr(this.value)===vr(t)&&this.matchesComparison(Ws(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return je(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Kn extends I_{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Kn(e,t)}matches(e){return R_(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function R_(i){return i.op==="and"}function C_(i){return NI(i)&&R_(i)}function NI(i){for(const e of i.filters)if(e instanceof Kn)return!1;return!0}function ph(i){if(i instanceof Ht)return i.field.canonicalString()+i.op.toString()+qs(i.value);if(C_(i))return i.filters.map((e=>ph(e))).join(",");{const e=i.filters.map((t=>ph(t))).join(",");return`${i.op}(${e})`}}function P_(i,e){return i instanceof Ht?(function(n,r){return r instanceof Ht&&n.op===r.op&&n.field.isEqual(r.field)&&fi(n.value,r.value)})(i,e):i instanceof Kn?(function(n,r){return r instanceof Kn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce(((s,o,c)=>s&&P_(o,r.filters[c])),!0):!1})(i,e):void je(19439)}function D_(i){return i instanceof Ht?(function(t){return`${t.field.canonicalString()} ${t.op} ${qs(t.value)}`})(i):i instanceof Kn?(function(t){return t.op.toString()+" {"+t.getFilters().map(D_).join(" ,")+"}"})(i):"Filter"}class UI extends Ht{constructor(e,t,n){super(e,t,n),this.key=Ge.fromName(n.referenceValue)}matches(e){const t=Ge.comparator(e.key,this.key);return this.matchesComparison(t)}}class OI extends Ht{constructor(e,t){super(e,"in",t),this.keys=L_("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class FI extends Ht{constructor(e,t){super(e,"not-in",t),this.keys=L_("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function L_(i,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map((n=>Ge.fromName(n.referenceValue)))}class VI extends Ht{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ed(t)&&Wo(t.arrayValue,this.value)}}class kI extends Ht{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Wo(this.value.arrayValue,t)}}class BI extends Ht{constructor(e,t){super(e,"not-in",t)}matches(e){if(Wo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Wo(this.value.arrayValue,t)}}class zI extends Ht{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ed(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>Wo(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,t=null,n=[],r=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=o,this.endAt=c,this.Te=null}}function $p(i,e=null,t=[],n=[],r=null,s=null,o=null){return new GI(i,e,t,n,r,s,o)}function td(i){const e=it(i);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>ph(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(s){return s.field.canonicalString()+s.dir})(n))).join(","),Kc(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>qs(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>qs(n))).join(",")),e.Te=t}return e.Te}function nd(i,e){if(i.limit!==e.limit||i.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<i.orderBy.length;t++)if(!LI(i.orderBy[t],e.orderBy[t]))return!1;if(i.filters.length!==e.filters.length)return!1;for(let t=0;t<i.filters.length;t++)if(!P_(i.filters[t],e.filters[t]))return!1;return i.collectionGroup===e.collectionGroup&&!!i.path.isEqual(e.path)&&!!Xp(i.startAt,e.startAt)&&Xp(i.endAt,e.endAt)}function mh(i){return Ge.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,t=null,n=[],r=[],s=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=l,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function HI(i,e,t,n,r,s,o,c){return new no(i,e,t,n,r,s,o,c)}function Qc(i){return new no(i)}function jp(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}function WI(i){return Ge.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}function N_(i){return i.collectionGroup!==null}function Do(i){const e=it(i);if(e.Ee===null){e.Ee=[];const t=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),t.add(s.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new jt(nn.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((s=>{t.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new qo(s,n))})),t.has(nn.keyField().canonicalString())||e.Ee.push(new qo(nn.keyField(),n))}return e.Ee}function ai(i){const e=it(i);return e.Ie||(e.Ie=qI(e,Do(i))),e.Ie}function qI(i,e){if(i.limitType==="F")return $p(i.path,i.collectionGroup,e,i.filters,i.limit,i.startAt,i.endAt);{e=e.map((r=>{const s=r.dir==="desc"?"asc":"desc";return new qo(r.field,s)}));const t=i.endAt?new Rc(i.endAt.position,i.endAt.inclusive):null,n=i.startAt?new Rc(i.startAt.position,i.startAt.inclusive):null;return $p(i.path,i.collectionGroup,e,i.filters,i.limit,t,n)}}function gh(i,e){const t=i.filters.concat([e]);return new no(i.path,i.collectionGroup,i.explicitOrderBy.slice(),t,i.limit,i.limitType,i.startAt,i.endAt)}function XI(i,e){const t=i.explicitOrderBy.concat([e]);return new no(i.path,i.collectionGroup,t,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)}function _h(i,e,t){return new no(i.path,i.collectionGroup,i.explicitOrderBy.slice(),i.filters.slice(),e,t,i.startAt,i.endAt)}function Jc(i,e){return nd(ai(i),ai(e))&&i.limitType===e.limitType}function U_(i){return`${td(ai(i))}|lt:${i.limitType}`}function Ms(i){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((r=>D_(r))).join(", ")}]`),Kc(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((r=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(r))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((r=>qs(r))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((r=>qs(r))).join(",")),`Target(${n})`})(ai(i))}; limitType=${i.limitType})`}function Zc(i,e){return e.isFoundDocument()&&(function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):Ge.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)})(i,e)&&(function(n,r){for(const s of Do(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0})(i,e)&&(function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0})(i,e)&&(function(n,r){return!(n.startAt&&!(function(o,c,l){const u=qp(o,c,l);return o.inclusive?u<=0:u<0})(n.startAt,Do(n),r)||n.endAt&&!(function(o,c,l){const u=qp(o,c,l);return o.inclusive?u>=0:u>0})(n.endAt,Do(n),r))})(i,e)}function $I(i){return i.collectionGroup||(i.path.length%2==1?i.path.lastSegment():i.path.get(i.path.length-2))}function O_(i){return(e,t)=>{let n=!1;for(const r of Do(i)){const s=jI(r,e,t);if(s!==0)return s;n=n||r.field.isKeyField()}return 0}}function jI(i,e,t){const n=i.field.isKeyField()?Ge.comparator(e.key,t.key):(function(s,o,c){const l=o.data.field(s),u=c.data.field(s);return l!==null&&u!==null?Ws(l,u):je(42886)})(i.field,e,t);switch(i.dir){case"asc":return n;case"desc":return-1*n;default:return je(19790,{direction:i.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[r,s]of n)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return n.length===1?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){es(this.inner,((t,n)=>{for(const[r,s]of n)e(r,s)}))}isEmpty(){return y_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI=new Nt(Ge.comparator);function zi(){return KI}const F_=new Nt(Ge.comparator);function bo(...i){let e=F_;for(const t of i)e=e.insert(t.key,t);return e}function V_(i){let e=F_;return i.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Hr(){return Lo()}function k_(){return Lo()}function Lo(){return new ts((i=>i.toString()),((i,e)=>i.isEqual(e)))}const YI=new Nt(Ge.comparator),QI=new jt(Ge.comparator);function dt(...i){let e=QI;for(const t of i)e=e.add(t);return e}const JI=new jt(ht);function ZI(){return JI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(i,e){if(i.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wc(e)?"-0":e}}function B_(i){return{integerValue:""+i}}function eR(i,e){return AI(e)?B_(e):id(i,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(){this._=void 0}}function tR(i,e,t){return i instanceof Xo?(function(r,s){const o={fields:{[S_]:{stringValue:x_},[A_]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&Zh(s)&&(s=Yc(s)),s&&(o.fields[T_]=s),{mapValue:o}})(t,e):i instanceof $o?G_(i,e):i instanceof jo?H_(i,e):(function(r,s){const o=z_(r,s),c=Kp(o)+Kp(r.Ae);return fh(o)&&fh(r.Ae)?B_(c):id(r.serializer,c)})(i,e)}function nR(i,e,t){return i instanceof $o?G_(i,e):i instanceof jo?H_(i,e):t}function z_(i,e){return i instanceof Cc?(function(n){return fh(n)||(function(s){return!!s&&"doubleValue"in s})(n)})(e)?e:{integerValue:0}:null}class Xo extends el{}class $o extends el{constructor(e){super(),this.elements=e}}function G_(i,e){const t=W_(e);for(const n of i.elements)t.some((r=>fi(r,n)))||t.push(n);return{arrayValue:{values:t}}}class jo extends el{constructor(e){super(),this.elements=e}}function H_(i,e){let t=W_(e);for(const n of i.elements)t=t.filter((r=>!fi(r,n)));return{arrayValue:{values:t}}}class Cc extends el{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Kp(i){return Vt(i.integerValue||i.doubleValue)}function W_(i){return ed(i)&&i.arrayValue.values?i.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iR{constructor(e,t){this.field=e,this.transform=t}}function rR(i,e){return i.field.isEqual(e.field)&&(function(n,r){return n instanceof $o&&r instanceof $o||n instanceof jo&&r instanceof jo?Hs(n.elements,r.elements,fi):n instanceof Cc&&r instanceof Cc?fi(n.Ae,r.Ae):n instanceof Xo&&r instanceof Xo})(i.transform,e.transform)}class sR{constructor(e,t){this.version=e,this.transformResults=t}}class ci{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ci}static exists(e){return new ci(void 0,e)}static updateTime(e){return new ci(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function dc(i,e){return i.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(i.updateTime):i.exists===void 0||i.exists===e.isFoundDocument()}class tl{}function q_(i,e){if(!i.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return i.isNoDocument()?new rd(i.key,ci.none()):new aa(i.key,i.data,ci.none());{const t=i.data,n=Dn.empty();let r=new jt(nn.comparator);for(let s of e.fields)if(!r.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?n.delete(s):n.set(s,o),r=r.add(s)}return new ns(i.key,n,new qn(r.toArray()),ci.none())}}function oR(i,e,t){i instanceof aa?(function(r,s,o){const c=r.value.clone(),l=Qp(r.fieldTransforms,s,o.transformResults);c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(i,e,t):i instanceof ns?(function(r,s,o){if(!dc(r.precondition,s))return void s.convertToUnknownDocument(o.version);const c=Qp(r.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(X_(r)),l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(i,e,t):(function(r,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function No(i,e,t,n){return i instanceof aa?(function(s,o,c,l){if(!dc(s.precondition,o))return c;const u=s.value.clone(),h=Jp(s.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(i,e,t,n):i instanceof ns?(function(s,o,c,l){if(!dc(s.precondition,o))return c;const u=Jp(s.fieldTransforms,l,o),h=o.data;return h.setAll(X_(s)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map((f=>f.field)))})(i,e,t,n):(function(s,o,c){return dc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(i,e,t)}function aR(i,e){let t=null;for(const n of i.fieldTransforms){const r=e.data.field(n.field),s=z_(n.transform,r||null);s!=null&&(t===null&&(t=Dn.empty()),t.set(n.field,s))}return t||null}function Yp(i,e){return i.type===e.type&&!!i.key.isEqual(e.key)&&!!i.precondition.isEqual(e.precondition)&&!!(function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Hs(n,r,((s,o)=>rR(s,o)))})(i.fieldTransforms,e.fieldTransforms)&&(i.type===0?i.value.isEqual(e.value):i.type!==1||i.data.isEqual(e.data)&&i.fieldMask.isEqual(e.fieldMask))}class aa extends tl{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ns extends tl{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function X_(i){const e=new Map;return i.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=i.data.field(t);e.set(t,n)}})),e}function Qp(i,e,t){const n=new Map;St(i.length===t.length,32656,{Ve:t.length,de:i.length});for(let r=0;r<t.length;r++){const s=i[r],o=s.transform,c=e.data.field(s.field);n.set(s.field,nR(o,c,t[r]))}return n}function Jp(i,e,t){const n=new Map;for(const r of i){const s=r.transform,o=t.data.field(r.field);n.set(r.field,tR(s,o,e))}return n}class rd extends tl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class cR extends tl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&oR(s,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=No(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=No(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=k_();return this.mutations.forEach((r=>{const s=e.get(r.key),o=s.overlayedDocument;let c=this.applyToLocalView(o,s.mutatedFields);c=t.has(r.key)?null:c;const l=q_(o,c);l!==null&&n.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(Ze.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),dt())}isEqual(e){return this.batchId===e.batchId&&Hs(this.mutations,e.mutations,((t,n)=>Yp(t,n)))&&Hs(this.baseMutations,e.baseMutations,((t,n)=>Yp(t,n)))}}class sd{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){St(e.mutations.length===n.length,58842,{me:e.mutations.length,fe:n.length});let r=(function(){return YI})();const s=e.mutations;for(let o=0;o<s.length;o++)r=r.insert(s[o].key,n[o].version);return new sd(e,t,n,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gt,_t;function dR(i){switch(i){case ie.OK:return je(64938);case ie.CANCELLED:case ie.UNKNOWN:case ie.DEADLINE_EXCEEDED:case ie.RESOURCE_EXHAUSTED:case ie.INTERNAL:case ie.UNAVAILABLE:case ie.UNAUTHENTICATED:return!1;case ie.INVALID_ARGUMENT:case ie.NOT_FOUND:case ie.ALREADY_EXISTS:case ie.PERMISSION_DENIED:case ie.FAILED_PRECONDITION:case ie.ABORTED:case ie.OUT_OF_RANGE:case ie.UNIMPLEMENTED:case ie.DATA_LOSS:return!0;default:return je(15467,{code:i})}}function $_(i){if(i===void 0)return Bi("GRPC error has no .code"),ie.UNKNOWN;switch(i){case Gt.OK:return ie.OK;case Gt.CANCELLED:return ie.CANCELLED;case Gt.UNKNOWN:return ie.UNKNOWN;case Gt.DEADLINE_EXCEEDED:return ie.DEADLINE_EXCEEDED;case Gt.RESOURCE_EXHAUSTED:return ie.RESOURCE_EXHAUSTED;case Gt.INTERNAL:return ie.INTERNAL;case Gt.UNAVAILABLE:return ie.UNAVAILABLE;case Gt.UNAUTHENTICATED:return ie.UNAUTHENTICATED;case Gt.INVALID_ARGUMENT:return ie.INVALID_ARGUMENT;case Gt.NOT_FOUND:return ie.NOT_FOUND;case Gt.ALREADY_EXISTS:return ie.ALREADY_EXISTS;case Gt.PERMISSION_DENIED:return ie.PERMISSION_DENIED;case Gt.FAILED_PRECONDITION:return ie.FAILED_PRECONDITION;case Gt.ABORTED:return ie.ABORTED;case Gt.OUT_OF_RANGE:return ie.OUT_OF_RANGE;case Gt.UNIMPLEMENTED:return ie.UNIMPLEMENTED;case Gt.DATA_LOSS:return ie.DATA_LOSS;default:return je(39323,{code:i})}}(_t=Gt||(Gt={}))[_t.OK=0]="OK",_t[_t.CANCELLED=1]="CANCELLED",_t[_t.UNKNOWN=2]="UNKNOWN",_t[_t.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",_t[_t.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",_t[_t.NOT_FOUND=5]="NOT_FOUND",_t[_t.ALREADY_EXISTS=6]="ALREADY_EXISTS",_t[_t.PERMISSION_DENIED=7]="PERMISSION_DENIED",_t[_t.UNAUTHENTICATED=16]="UNAUTHENTICATED",_t[_t.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",_t[_t.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",_t[_t.ABORTED=10]="ABORTED",_t[_t.OUT_OF_RANGE=11]="OUT_OF_RANGE",_t[_t.UNIMPLEMENTED=12]="UNIMPLEMENTED",_t[_t.INTERNAL=13]="INTERNAL",_t[_t.UNAVAILABLE=14]="UNAVAILABLE",_t[_t.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=new dr([4294967295,4294967295],0);function Zp(i){const e=fR().encode(i),t=new l_;return t.update(e),new Uint8Array(t.digest())}function em(i){const e=new DataView(i.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),r=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new dr([t,n],0),new dr([r,s],0)]}class od{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Io(`Invalid padding: ${t}`);if(n<0)throw new Io(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new Io(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new Io(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=dr.fromNumber(this.ge)}ye(e,t,n){let r=e.add(t.multiply(dr.fromNumber(n)));return r.compare(pR)===1&&(r=new dr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Zp(e),[n,r]=em(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(n,r,s);if(!this.we(o))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new od(s,r,t);return n.forEach((c=>o.insert(c))),o}insert(e){if(this.ge===0)return;const t=Zp(e),[n,r]=em(t);for(let s=0;s<this.hashCount;s++){const o=this.ye(n,r,s);this.Se(o)}}Se(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Io extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,ca.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new nl(Ze.min(),r,new Nt(ht),zi(),dt())}}class ca{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new ca(n,t,dt(),dt(),dt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,t,n,r){this.be=e,this.removedTargetIds=t,this.key=n,this.De=r}}class j_{constructor(e,t){this.targetId=e,this.Ce=t}}class K_{constructor(e,t,n=on.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class tm{constructor(){this.ve=0,this.Fe=nm(),this.Me=on.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=dt(),t=dt(),n=dt();return this.Fe.forEach(((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:je(38017,{changeType:s})}})),new ca(this.Me,this.xe,e,t,n)}qe(){this.Oe=!1,this.Fe=nm()}Ke(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,St(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class mR{constructor(e){this.Ge=e,this.ze=new Map,this.je=zi(),this.Je=Ya(),this.He=Ya(),this.Ze=new Nt(ht)}Xe(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Ye(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const n=this.nt(t);switch(e.state){case 0:this.rt(t)&&n.Le(e.resumeToken);break;case 1:n.We(),n.Ne||n.qe(),n.Le(e.resumeToken);break;case 2:n.We(),n.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(n.Qe(),n.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),n.Le(e.resumeToken));break;default:je(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((n,r)=>{this.rt(r)&&t(r)}))}st(e){const t=e.targetId,n=e.Ce.count,r=this.ot(t);if(r){const s=r.target;if(mh(s))if(n===0){const o=new Ge(s.path);this.et(t,o,hn.newNoDocument(o,Ze.min()))}else St(n===1,20013,{expectedCount:n});else{const o=this._t(t);if(o!==n){const c=this.ut(e),l=c?this.ct(c,e,o):1;if(l!==0){this.it(t);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,u)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:s=0}=t;let o,c;try{o=_r(n).toUint8Array()}catch(l){if(l instanceof E_)return Gs("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new od(o,r,s)}catch(l){return Gs(l instanceof Io?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.ge===0?null:c}ct(e,t,n){return t.Ce.count===n-this.Pt(e,t.targetId)?0:2}Pt(e,t){const n=this.Ge.getRemoteKeysForTarget(t);let r=0;return n.forEach((s=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.et(t,s,null),r++)})),r}Tt(e){const t=new Map;this.ze.forEach(((s,o)=>{const c=this.ot(o);if(c){if(s.current&&mh(c.target)){const l=new Ge(c.target.path);this.Et(l).has(o)||this.It(o,l)||this.et(o,l,hn.newNoDocument(l,e))}s.Be&&(t.set(o,s.ke()),s.qe())}}));let n=dt();this.He.forEach(((s,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.ot(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(n=n.add(s))})),this.je.forEach(((s,o)=>o.setReadTime(e)));const r=new nl(e,t,this.Ze,this.je,n);return this.je=zi(),this.Je=Ya(),this.He=Ya(),this.Ze=new Nt(ht),r}Ye(e,t){if(!this.rt(e))return;const n=this.It(e,t.key)?2:0;this.nt(e).Ke(t.key,n),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.He=this.He.insert(t.key,this.Rt(t.key).add(e))}et(e,t,n){if(!this.rt(e))return;const r=this.nt(e);this.It(e,t)?r.Ke(t,1):r.Ue(t),this.He=this.He.insert(t,this.Rt(t).delete(e)),this.He=this.He.insert(t,this.Rt(t).add(e)),n&&(this.je=this.je.insert(t,n))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let t=this.ze.get(e);return t||(t=new tm,this.ze.set(e,t)),t}Rt(e){let t=this.He.get(e);return t||(t=new jt(ht),this.He=this.He.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new jt(ht),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||Ce("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new tm),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}It(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ya(){return new Nt(Ge.comparator)}function nm(){return new Nt(Ge.comparator)}const gR={asc:"ASCENDING",desc:"DESCENDING"},_R={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vR={and:"AND",or:"OR"};class yR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function vh(i,e){return i.useProto3Json||Kc(e)?e:{value:e}}function Pc(i,e){return i.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Y_(i,e){return i.useProto3Json?e.toBase64():e.toUint8Array()}function ER(i,e){return Pc(i,e.toTimestamp())}function li(i){return St(!!i,49232),Ze.fromTimestamp((function(t){const n=gr(t);return new Dt(n.seconds,n.nanos)})(i))}function ad(i,e){return yh(i,e).canonicalString()}function yh(i,e){const t=(function(r){return new Pt(["projects",r.projectId,"databases",r.database])})(i).child("documents");return e===void 0?t:t.child(e)}function Q_(i){const e=Pt.fromString(i);return St(nv(e),10190,{key:e.toString()}),e}function Eh(i,e){return ad(i.databaseId,e.path)}function nu(i,e){const t=Q_(e);if(t.get(1)!==i.databaseId.projectId)throw new Te(ie.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+i.databaseId.projectId);if(t.get(3)!==i.databaseId.database)throw new Te(ie.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+i.databaseId.database);return new Ge(Z_(t))}function J_(i,e){return ad(i.databaseId,e)}function xR(i){const e=Q_(i);return e.length===4?Pt.emptyPath():Z_(e)}function xh(i){return new Pt(["projects",i.databaseId.projectId,"databases",i.databaseId.database]).canonicalString()}function Z_(i){return St(i.length>4&&i.get(4)==="documents",29091,{key:i.toString()}),i.popFirst(5)}function im(i,e,t){return{name:Eh(i,e),fields:t.value.mapValue.fields}}function SR(i,e){let t;if("targetChange"in e){e.targetChange;const n=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:je(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=(function(u,h){return u.useProto3Json?(St(h===void 0||typeof h=="string",58123),on.fromBase64String(h||"")):(St(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),on.fromUint8Array(h||new Uint8Array))})(i,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const h=u.code===void 0?ie.UNKNOWN:$_(u.code);return new Te(h,u.message||"")})(o);t=new K_(n,r,s,c||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const r=nu(i,n.document.name),s=li(n.document.updateTime),o=n.document.createTime?li(n.document.createTime):Ze.min(),c=new Dn({mapValue:{fields:n.document.fields}}),l=hn.newFoundDocument(r,s,o,c),u=n.targetIds||[],h=n.removedTargetIds||[];t=new fc(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const r=nu(i,n.document),s=n.readTime?li(n.readTime):Ze.min(),o=hn.newNoDocument(r,s),c=n.removedTargetIds||[];t=new fc([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const r=nu(i,n.document),s=n.removedTargetIds||[];t=new fc([],s,r,null)}else{if(!("filter"in e))return je(11601,{Vt:e});{e.filter;const n=e.filter;n.targetId;const{count:r=0,unchangedNames:s}=n,o=new hR(r,s),c=n.targetId;t=new j_(c,o)}}return t}function TR(i,e){let t;if(e instanceof aa)t={update:im(i,e.key,e.value)};else if(e instanceof rd)t={delete:Eh(i,e.key)};else if(e instanceof ns)t={update:im(i,e.key,e.data),updateMask:DR(e.fieldMask)};else{if(!(e instanceof cR))return je(16599,{dt:e.type});t={verify:Eh(i,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(s,o){const c=o.transform;if(c instanceof Xo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof $o)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof jo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof Cc)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw je(20930,{transform:o.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(r,s){return s.updateTime!==void 0?{updateTime:ER(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:je(27497)})(i,e.precondition)),t}function AR(i,e){return i&&i.length>0?(St(e!==void 0,14353),i.map((t=>(function(r,s){let o=r.updateTime?li(r.updateTime):li(s);return o.isEqual(Ze.min())&&(o=li(s)),new sR(o,r.transformResults||[])})(t,e)))):[]}function MR(i,e){return{documents:[J_(i,e.path)]}}function wR(i,e){const t={structuredQuery:{}},n=e.path;let r;e.collectionGroup!==null?(r=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=J_(i,r);const s=(function(u){if(u.length!==0)return tv(Kn.create(u,"and"))})(e.filters);s&&(t.structuredQuery.where=s);const o=(function(u){if(u.length!==0)return u.map((h=>(function(d){return{field:ws(d.field),direction:RR(d.dir)}})(h)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const c=vh(i,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{ft:t,parent:r}}function bR(i){let e=xR(i.parent);const t=i.structuredQuery,n=t.from?t.from.length:0;let r=null;if(n>0){St(n===1,65062);const h=t.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let s=[];t.where&&(s=(function(f){const d=ev(f);return d instanceof Kn&&C_(d)?d.getFilters():[d]})(t.where));let o=[];t.orderBy&&(o=(function(f){return f.map((d=>(function(x){return new qo(bs(x.field),(function(_){switch(_){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(x.direction))})(d)))})(t.orderBy));let c=null;t.limit&&(c=(function(f){let d;return d=typeof f=="object"?f.value:f,Kc(d)?null:d})(t.limit));let l=null;t.startAt&&(l=(function(f){const d=!!f.before,g=f.values||[];return new Rc(g,d)})(t.startAt));let u=null;return t.endAt&&(u=(function(f){const d=!f.before,g=f.values||[];return new Rc(g,d)})(t.endAt)),HI(e,r,o,s,c,"F",l,u)}function IR(i,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return je(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ev(i){return i.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=bs(t.unaryFilter.field);return Ht.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=bs(t.unaryFilter.field);return Ht.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=bs(t.unaryFilter.field);return Ht.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=bs(t.unaryFilter.field);return Ht.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return je(61313);default:return je(60726)}})(i):i.fieldFilter!==void 0?(function(t){return Ht.create(bs(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return je(58110);default:return je(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(i):i.compositeFilter!==void 0?(function(t){return Kn.create(t.compositeFilter.filters.map((n=>ev(n))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return je(1026)}})(t.compositeFilter.op))})(i):je(30097,{filter:i})}function RR(i){return gR[i]}function CR(i){return _R[i]}function PR(i){return vR[i]}function ws(i){return{fieldPath:i.canonicalString()}}function bs(i){return nn.fromServerFormat(i.fieldPath)}function tv(i){return i instanceof Ht?(function(t){if(t.op==="=="){if(Wp(t.value))return{unaryFilter:{field:ws(t.field),op:"IS_NAN"}};if(Hp(t.value))return{unaryFilter:{field:ws(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Wp(t.value))return{unaryFilter:{field:ws(t.field),op:"IS_NOT_NAN"}};if(Hp(t.value))return{unaryFilter:{field:ws(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ws(t.field),op:CR(t.op),value:t.value}}})(i):i instanceof Kn?(function(t){const n=t.getFilters().map((r=>tv(r)));return n.length===1?n[0]:{compositeFilter:{op:PR(t.op),filters:n}}})(i):je(54877,{filter:i})}function DR(i){const e=[];return i.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function nv(i){return i.length>=4&&i.get(0)==="projects"&&i.get(2)==="databases"}function iv(i){return!!i&&typeof i._toProto=="function"&&i._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(e,t,n,r,s=Ze.min(),o=Ze.min(),c=on.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e){this.yt=e}}function NR(i){const e=bR({parent:i.parent,structuredQuery:i.structuredQuery});return i.limitType==="LAST"?_h(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(){this.bn=new OR}addToCollectionParentIndex(e,t){return this.bn.add(t),se.resolve()}getCollectionParents(e,t){return se.resolve(this.bn.getEntries(t))}addFieldIndex(e,t){return se.resolve()}deleteFieldIndex(e,t){return se.resolve()}deleteAllFieldIndexes(e){return se.resolve()}createTargetIndexes(e,t){return se.resolve()}getDocumentsMatchingTarget(e,t){return se.resolve(null)}getIndexType(e,t){return se.resolve(0)}getFieldIndexes(e,t){return se.resolve([])}getNextCollectionGroupToUpdate(e){return se.resolve(null)}getMinOffset(e,t){return se.resolve(mr.min())}getMinOffsetFromCollectionGroup(e,t){return se.resolve(mr.min())}updateCollectionGroup(e,t,n){return se.resolve()}updateIndexEntries(e,t){return se.resolve()}}class OR{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new jt(Pt.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new jt(Pt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},rv=41943040;class yn{static withCacheSize(e){return new yn(e,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yn.DEFAULT_COLLECTION_PERCENTILE=10,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,yn.DEFAULT=new yn(rv,yn.DEFAULT_COLLECTION_PERCENTILE,yn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),yn.DISABLED=new yn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Xs(0)}static ar(){return new Xs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm="LruGarbageCollector",sv=1048576;function om([i,e],[t,n]){const r=ht(i,t);return r===0?ht(e,n):r}class FR{constructor(e){this.Pr=e,this.buffer=new jt(om),this.Tr=0}Er(){return++this.Tr}Ir(e){const t=[e,this.Er()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();om(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class VR{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){Ce(sm,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){to(t)?Ce(sm,"Ignoring IndexedDB error during garbage collection: ",t):await eo(t)}await this.Ar(3e5)}))}}class kR{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.dr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return se.resolve(jc.ce);const n=new FR(t);return this.Vr.forEachTarget(e,(r=>n.Ir(r.sequenceNumber))).next((()=>this.Vr.mr(e,(r=>n.Ir(r))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(Ce("LruGarbageCollector","Garbage collection skipped; disabled"),se.resolve(rm)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(Ce("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rm):this.gr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,t){let n,r,s,o,c,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((f=>(f>this.params.maximumSequenceNumbersToCollect?(Ce("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),r=this.params.maximumSequenceNumbersToCollect):r=f,o=Date.now(),this.nthSequenceNumber(e,r)))).next((f=>(n=f,c=Date.now(),this.removeTargets(e,n,t)))).next((f=>(s=f,l=Date.now(),this.removeOrphanedDocuments(e,n)))).next((f=>(u=Date.now(),As()<=ut.DEBUG&&Ce("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(c-o)+`ms
	Removed ${s} targets in `+(l-c)+`ms
	Removed ${f} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),se.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:f}))))}}function BR(i,e){return new kR(i,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(){this.changes=new ts((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,hn.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?se.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HR{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(n!==null&&No(n.mutation,r,qn.empty(),Dt.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,dt()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=dt()){const r=Hr();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((s=>{let o=bo();return s.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const n=Hr();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,dt())))}populateOverlays(e,t,n){const r=[];return n.forEach((s=>{t.has(s)||r.push(s)})),this.documentOverlayCache.getOverlays(e,r).next((s=>{s.forEach(((o,c)=>{t.set(o,c)}))}))}computeViews(e,t,n,r){let s=zi();const o=Lo(),c=(function(){return Lo()})();return t.forEach(((l,u)=>{const h=n.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof ns)?s=s.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),No(h.mutation,u,h.mutation.getFieldMask(),Dt.now())):o.set(u.key,qn.empty())})),this.recalculateAndSaveOverlays(e,s).next((l=>(l.forEach(((u,h)=>o.set(u,h))),t.forEach(((u,h)=>c.set(u,new GR(h,o.get(u)??null)))),c)))}recalculateAndSaveOverlays(e,t){const n=Lo();let r=new Nt(((o,c)=>o-c)),s=dt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=t.get(l);if(u===null)return;let h=n.get(l)||qn.empty();h=c.applyToLocalView(u,h),n.set(l,h);const f=(r.get(c.batchId)||dt()).add(l);r=r.insert(c.batchId,f)}))})).next((()=>{const o=[],c=r.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,h=l.value,f=k_();h.forEach((d=>{if(!s.has(d)){const g=q_(t.get(d),n.get(d));g!==null&&f.set(d,g),s=s.add(d)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return se.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,r){return WI(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):N_(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((s=>{const o=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-s.size):se.resolve(Hr());let c=zo,l=s;return o.next((u=>se.forEach(u,((h,f)=>(c<f.largestBatchId&&(c=f.largestBatchId),s.get(h)?se.resolve():this.remoteDocumentCache.getEntry(e,h).next((d=>{l=l.insert(h,d)}))))).next((()=>this.populateOverlays(e,u,s))).next((()=>this.computeViews(e,l,u,dt()))).next((h=>({batchId:c,changes:V_(h)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ge(t)).next((n=>{let r=bo();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const s=t.collectionGroup;let o=bo();return this.indexManager.getCollectionParents(e,s).next((c=>se.forEach(c,(l=>{const u=(function(f,d){return new no(d,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)})(t,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,n,r).next((h=>{h.forEach(((f,d)=>{o=o.insert(f,d)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,r)))).next((o=>{s.forEach(((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,hn.newInvalidDocument(h)))}));let c=bo();return o.forEach(((l,u)=>{const h=s.get(l);h!==void 0&&No(h.mutation,u,qn.empty(),Dt.now()),Zc(t,u)&&(c=c.insert(l,u))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,t){return se.resolve(this.Nr.get(t))}saveBundleMetadata(e,t){return this.Nr.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:li(r.createTime)}})(t)),se.resolve()}getNamedQuery(e,t){return se.resolve(this.Br.get(t))}saveNamedQuery(e,t){return this.Br.set(t.name,(function(r){return{name:r.name,query:NR(r.bundledQuery),readTime:li(r.readTime)}})(t)),se.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(){this.overlays=new Nt(Ge.comparator),this.Lr=new Map}getOverlay(e,t){return se.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Hr();return se.forEach(t,(r=>this.getOverlay(e,r).next((s=>{s!==null&&n.set(r,s)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((r,s)=>{this.St(e,t,s)})),se.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Lr.get(n);return r!==void 0&&(r.forEach((s=>this.overlays=this.overlays.remove(s))),this.Lr.delete(n)),se.resolve()}getOverlaysForCollection(e,t,n){const r=Hr(),s=t.length+1,o=new Ge(t.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>n&&r.set(l.getKey(),l)}return se.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new Nt(((u,h)=>u-h));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>n){let h=s.get(u.largestBatchId);h===null&&(h=Hr(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const c=Hr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,h)=>c.set(u,h))),!(c.size()>=r)););return se.resolve(c)}St(e,t,n){const r=this.overlays.get(n.key);if(r!==null){const o=this.Lr.get(r.largestBatchId).delete(n.key);this.Lr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new uR(t,n));let s=this.Lr.get(t);s===void 0&&(s=dt(),this.Lr.set(t,s)),this.Lr.set(t,s.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(){this.sessionToken=on.EMPTY_BYTE_STRING}getSessionToken(e){return se.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,se.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(){this.kr=new jt(Zt.qr),this.Kr=new jt(Zt.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,t){const n=new Zt(e,t);this.kr=this.kr.add(n),this.Kr=this.Kr.add(n)}$r(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Wr(new Zt(e,t))}Qr(e,t){e.forEach((n=>this.removeReference(n,t)))}Gr(e){const t=new Ge(new Pt([])),n=new Zt(t,e),r=new Zt(t,e+1),s=[];return this.Kr.forEachInRange([n,r],(o=>{this.Wr(o),s.push(o.key)})),s}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.Kr=this.Kr.delete(e)}jr(e){const t=new Ge(new Pt([])),n=new Zt(t,e),r=new Zt(t,e+1);let s=dt();return this.Kr.forEachInRange([n,r],(o=>{s=s.add(o.key)})),s}containsKey(e){const t=new Zt(e,0),n=this.kr.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class Zt{constructor(e,t){this.key=e,this.Jr=t}static qr(e,t){return Ge.comparator(e.key,t.key)||ht(e.Jr,t.Jr)}static Ur(e,t){return ht(e.Jr,t.Jr)||Ge.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Yn=1,this.Hr=new jt(Zt.qr)}checkEmpty(e){return se.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,r){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new lR(s,t,n,r);this.mutationQueue.push(o);for(const c of r)this.Hr=this.Hr.add(new Zt(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return se.resolve(o)}lookupMutationBatch(e,t){return se.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Xr(n),s=r<0?0:r;return se.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return se.resolve(this.mutationQueue.length===0?Jh:this.Yn-1)}getAllMutationBatches(e){return se.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Zt(t,0),r=new Zt(t,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([n,r],(o=>{const c=this.Zr(o.Jr);s.push(c)})),se.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new jt(ht);return t.forEach((r=>{const s=new Zt(r,0),o=new Zt(r,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],(c=>{n=n.add(c.Jr)}))})),se.resolve(this.Yr(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let s=n;Ge.isDocumentKey(s)||(s=s.child(""));const o=new Zt(new Ge(s),0);let c=new jt(ht);return this.Hr.forEachWhile((l=>{const u=l.key.path;return!!n.isPrefixOf(u)&&(u.length===r&&(c=c.add(l.Jr)),!0)}),o),se.resolve(this.Yr(c))}Yr(e){const t=[];return e.forEach((n=>{const r=this.Zr(n);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){St(this.ei(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Hr;return se.forEach(t.mutations,(r=>{const s=new Zt(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Hr=n}))}nr(e){}containsKey(e,t){const n=new Zt(t,0),r=this.Hr.firstAfterOrEqual(n);return se.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,se.resolve()}ei(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e){this.ti=e,this.docs=(function(){return new Nt(Ge.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),s=r?r.size:0,o=this.ti(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return se.resolve(n?n.document.mutableCopy():hn.newInvalidDocument(t))}getEntries(e,t){let n=zi();return t.forEach((r=>{const s=this.docs.get(r);n=n.insert(r,s?s.document.mutableCopy():hn.newInvalidDocument(r))})),se.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let s=zi();const o=t.path,c=new Ge(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||EI(yI(h),n)<=0||(r.has(h.key)||Zc(t,h))&&(s=s.insert(h.key,h.mutableCopy()))}return se.resolve(s)}getAllFromCollectionGroup(e,t,n,r){je(9500)}ni(e,t){return se.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new KR(this)}getSize(e){return se.resolve(this.size)}}class KR extends zR{constructor(e){super(),this.Mr=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Mr.addEntry(e,r)):this.Mr.removeEntry(n)})),se.waitFor(t)}getFromCache(e,t){return this.Mr.getEntry(e,t)}getAllFromCache(e,t){return this.Mr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e){this.persistence=e,this.ri=new ts((t=>td(t)),nd),this.lastRemoteSnapshotVersion=Ze.min(),this.highestTargetId=0,this.ii=0,this.si=new cd,this.targetCount=0,this.oi=Xs._r()}forEachTarget(e,t){return this.ri.forEach(((n,r)=>t(r))),se.resolve()}getLastRemoteSnapshotVersion(e){return se.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return se.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),se.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.ii&&(this.ii=t),se.resolve()}lr(e){this.ri.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.oi=new Xs(t),this.highestTargetId=t),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,t){return this.lr(t),this.targetCount+=1,se.resolve()}updateTargetData(e,t){return this.lr(t),se.resolve()}removeTargetData(e,t){return this.ri.delete(t.target),this.si.Gr(t.targetId),this.targetCount-=1,se.resolve()}removeTargets(e,t,n){let r=0;const s=[];return this.ri.forEach(((o,c)=>{c.sequenceNumber<=t&&n.get(c.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),r++)})),se.waitFor(s).next((()=>r))}getTargetCount(e){return se.resolve(this.targetCount)}getTargetData(e,t){const n=this.ri.get(t)||null;return se.resolve(n)}addMatchingKeys(e,t,n){return this.si.$r(t,n),se.resolve()}removeMatchingKeys(e,t,n){this.si.Qr(t,n);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach((o=>{s.push(r.markPotentiallyOrphaned(e,o))})),se.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.si.Gr(t),se.resolve()}getMatchingKeysForTargetId(e,t){const n=this.si.jr(t);return se.resolve(n)}containsKey(e,t){return se.resolve(this.si.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,t){this._i={},this.overlays={},this.ai=new jc(0),this.ui=!1,this.ui=!0,this.ci=new XR,this.referenceDelegate=e(this),this.li=new YR(this),this.indexManager=new UR,this.remoteDocumentCache=(function(r){return new jR(r)})((n=>this.referenceDelegate.hi(n))),this.serializer=new LR(t),this.Pi=new WR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new qR,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this._i[e.toKey()];return n||(n=new $R(t,this.referenceDelegate),this._i[e.toKey()]=n),n}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,t,n){Ce("MemoryPersistence","Starting transaction:",e);const r=new QR(this.ai.next());return this.referenceDelegate.Ti(),n(r).next((s=>this.referenceDelegate.Ei(r).next((()=>s)))).toPromise().then((s=>(r.raiseOnCommittedEvent(),s)))}Ii(e,t){return se.or(Object.values(this._i).map((n=>()=>n.containsKey(e,t))))}}class QR extends SI{constructor(e){super(),this.currentSequenceNumber=e}}class ld{constructor(e){this.persistence=e,this.Ri=new cd,this.Ai=null}static Vi(e){return new ld(e)}get di(){if(this.Ai)return this.Ai;throw je(60996)}addReference(e,t,n){return this.Ri.addReference(n,t),this.di.delete(n.toString()),se.resolve()}removeReference(e,t,n){return this.Ri.removeReference(n,t),this.di.add(n.toString()),se.resolve()}markPotentiallyOrphaned(e,t){return this.di.add(t.toString()),se.resolve()}removeTarget(e,t){this.Ri.Gr(t.targetId).forEach((r=>this.di.add(r.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((s=>this.di.add(s.toString())))})).next((()=>n.removeTargetData(e,t)))}Ti(){this.Ai=new Set}Ei(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return se.forEach(this.di,(n=>{const r=Ge.fromPath(n);return this.mi(e,r).next((s=>{s||t.removeEntry(r,Ze.min())}))})).next((()=>(this.Ai=null,t.apply(e))))}updateLimboDocument(e,t){return this.mi(e,t).next((n=>{n?this.di.delete(t.toString()):this.di.add(t.toString())}))}hi(e){return 0}mi(e,t){return se.or([()=>se.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ii(e,t)])}}class Dc{constructor(e,t){this.persistence=e,this.fi=new ts((n=>MI(n.path)),((n,r)=>n.isEqual(r))),this.garbageCollector=BR(this,t)}static Vi(e,t){return new Dc(e,t)}Ti(){}Ei(e){return se.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}dr(e){const t=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((r=>n+r))))}pr(e){let t=0;return this.mr(e,(n=>{t++})).next((()=>t))}mr(e,t){return se.forEach(this.fi,((n,r)=>this.wr(e,n,r).next((s=>s?se.resolve():t(r)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),s=r.newChangeBuffer();return r.ni(e,(o=>this.wr(e,o,t).next((c=>{c||(n++,s.removeEntry(o,Ze.min()))})))).next((()=>s.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.fi.set(t,e.currentSequenceNumber),se.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),se.resolve()}removeReference(e,t,n){return this.fi.set(n,e.currentSequenceNumber),se.resolve()}updateLimboDocument(e,t){return this.fi.set(t,e.currentSequenceNumber),se.resolve()}hi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=uc(e.data.value)),t}wr(e,t,n){return se.or([()=>this.persistence.Ii(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.fi.get(t);return se.resolve(r!==void 0&&r>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Ts=n,this.Es=r}static Is(e,t){let n=dt(),r=dt();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new ud(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return TA()?8:TI(fn())>0?6:4})()}initialize(e,t){this.fs=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,n,r){const s={result:null};return this.gs(e,t).next((o=>{s.result=o})).next((()=>{if(!s.result)return this.ps(e,t,r,n).next((o=>{s.result=o}))})).next((()=>{if(s.result)return;const o=new JR;return this.ys(e,t,o).next((c=>{if(s.result=c,this.As)return this.ws(e,t,o,c.size)}))})).next((()=>s.result))}ws(e,t,n,r){return n.documentReadCount<this.Vs?(As()<=ut.DEBUG&&Ce("QueryEngine","SDK will not create cache indexes for query:",Ms(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),se.resolve()):(As()<=ut.DEBUG&&Ce("QueryEngine","Query:",Ms(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ds*r?(As()<=ut.DEBUG&&Ce("QueryEngine","The SDK decides to create cache indexes for query:",Ms(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ai(t))):se.resolve())}gs(e,t){if(jp(t))return se.resolve(null);let n=ai(t);return this.indexManager.getIndexType(e,n).next((r=>r===0?null:(t.limit!==null&&r===1&&(t=_h(t,null,"F"),n=ai(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((s=>{const o=dt(...s);return this.fs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,n).next((l=>{const u=this.Ss(t,c);return this.bs(t,u,o,l.readTime)?this.gs(e,_h(t,null,"F")):this.Ds(e,u,t,l)}))))})))))}ps(e,t,n,r){return jp(t)||r.isEqual(Ze.min())?se.resolve(null):this.fs.getDocuments(e,n).next((s=>{const o=this.Ss(t,s);return this.bs(t,o,n,r)?se.resolve(null):(As()<=ut.DEBUG&&Ce("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ms(t)),this.Ds(e,o,t,vI(r,zo)).next((c=>c)))}))}Ss(e,t){let n=new jt(O_(e));return t.forEach(((r,s)=>{Zc(e,s)&&(n=n.add(s))})),n}bs(e,t,n,r){if(e.limit===null)return!1;if(n.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}ys(e,t,n){return As()<=ut.DEBUG&&Ce("QueryEngine","Using full collection scan to execute query:",Ms(t)),this.fs.getDocumentsMatchingQuery(e,t,mr.min(),n)}Ds(e,t,n,r){return this.fs.getDocumentsMatchingQuery(e,n,r).next((s=>(t.forEach((o=>{s=s.insert(o.key,o)})),s)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="LocalStore",eC=3e8;class tC{constructor(e,t,n,r){this.persistence=e,this.Cs=t,this.serializer=r,this.vs=new Nt(ht),this.Fs=new ts((s=>td(s)),nd),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(n)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new HR(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.vs)))}}function nC(i,e,t,n){return new tC(i,e,t,n)}async function av(i,e){const t=it(i);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let r;return t.mutationQueue.getAllMutationBatches(n).next((s=>(r=s,t.Os(e),t.mutationQueue.getAllMutationBatches(n)))).next((s=>{const o=[],c=[];let l=dt();for(const u of r){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of s){c.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return t.localDocuments.getDocuments(n,l).next((u=>({Ns:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function iC(i,e){const t=it(i);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const r=e.batch.keys(),s=t.xs.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,h){const f=u.batch,d=f.keys();let g=se.resolve();return d.forEach((x=>{g=g.next((()=>h.getEntry(l,x))).next((b=>{const _=u.docVersions.get(x);St(_!==null,48541),b.version.compareTo(_)<0&&(f.applyToRemoteDocument(b,u),b.isValidDocument()&&(b.setReadTime(u.commitVersion),h.addEntry(b)))}))})),g.next((()=>c.mutationQueue.removeMutationBatch(l,f)))})(t,n,e,s).next((()=>s.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(c){let l=dt();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>t.localDocuments.getDocuments(n,r)))}))}function cv(i){const e=it(i);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.li.getLastRemoteSnapshotVersion(t)))}function rC(i,e){const t=it(i),n=e.snapshotVersion;let r=t.vs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(s=>{const o=t.xs.newChangeBuffer({trackRemovals:!0});r=t.vs;const c=[];e.targetChanges.forEach(((h,f)=>{const d=r.get(f);if(!d)return;c.push(t.li.removeMatchingKeys(s,h.removedDocuments,f).next((()=>t.li.addMatchingKeys(s,h.addedDocuments,f))));let g=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(on.EMPTY_BYTE_STRING,Ze.min()).withLastLimboFreeSnapshotVersion(Ze.min()):h.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(h.resumeToken,n)),r=r.insert(f,g),(function(b,_,v){return b.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=eC?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0})(d,g,h)&&c.push(t.li.updateTargetData(s,g))}));let l=zi(),u=dt();if(e.documentUpdates.forEach((h=>{e.resolvedLimboDocuments.has(h)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(s,h))})),c.push(sC(s,o,e.documentUpdates).next((h=>{l=h.Bs,u=h.Ls}))),!n.isEqual(Ze.min())){const h=t.li.getLastRemoteSnapshotVersion(s).next((f=>t.li.setTargetsMetadata(s,s.currentSequenceNumber,n)));c.push(h)}return se.waitFor(c).next((()=>o.apply(s))).next((()=>t.localDocuments.getLocalViewOfDocuments(s,l,u))).next((()=>l))})).then((s=>(t.vs=r,s)))}function sC(i,e,t){let n=dt(),r=dt();return t.forEach((s=>n=n.add(s))),e.getEntries(i,n).next((s=>{let o=zi();return t.forEach(((c,l)=>{const u=s.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(c)),l.isNoDocument()&&l.version.isEqual(Ze.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):Ce(hd,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{Bs:o,Ls:r}}))}function oC(i,e){const t=it(i);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=Jh),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function aC(i,e){const t=it(i);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let r;return t.li.getTargetData(n,e).next((s=>s?(r=s,se.resolve(r)):t.li.allocateTargetId(n).next((o=>(r=new cr(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.li.addTargetData(n,r).next((()=>r)))))))})).then((n=>{const r=t.vs.get(n.targetId);return(r===null||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.vs=t.vs.insert(n.targetId,n),t.Fs.set(e,n.targetId)),n}))}async function Sh(i,e,t){const n=it(i),r=n.vs.get(e),s=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",s,(o=>n.persistence.referenceDelegate.removeTarget(o,r)))}catch(o){if(!to(o))throw o;Ce(hd,`Failed to update sequence numbers for target ${e}: ${o}`)}n.vs=n.vs.remove(e),n.Fs.delete(r.target)}function am(i,e,t){const n=it(i);let r=Ze.min(),s=dt();return n.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,h){const f=it(l),d=f.Fs.get(h);return d!==void 0?se.resolve(f.vs.get(d)):f.li.getTargetData(u,h)})(n,o,ai(e)).next((c=>{if(c)return r=c.lastLimboFreeSnapshotVersion,n.li.getMatchingKeysForTargetId(o,c.targetId).next((l=>{s=l}))})).next((()=>n.Cs.getDocumentsMatchingQuery(o,e,t?r:Ze.min(),t?s:dt()))).next((c=>(cC(n,$I(e),c),{documents:c,ks:s})))))}function cC(i,e,t){let n=i.Ms.get(e)||Ze.min();t.forEach(((r,s)=>{s.readTime.compareTo(n)>0&&(n=s.readTime)})),i.Ms.set(e,n)}class cm{constructor(){this.activeTargetIds=ZI()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lC{constructor(){this.vo=new cm,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,t,n){this.Fo[e]=t}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new cm,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{Mo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="ConnectivityMonitor";class um{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){Ce(lm,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){Ce(lm,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qa=null;function Th(){return Qa===null?Qa=(function(){return 268435456+Math.round(2147483648*Math.random())})():Qa++,"0x"+Qa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu="RestConnection",hC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class dC{get qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Uo=`projects/${n}/databases/${r}`,this.$o=this.databaseId.database===bc?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Wo(e,t,n,r,s){const o=Th(),c=this.Qo(e,t.toUriEncodedString());Ce(iu,`Sending RPC '${e}' ${o}:`,c,n);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(l,r,s);const{host:u}=new URL(c),h=ta(u);return this.zo(e,c,l,n,h).then((f=>(Ce(iu,`Received RPC '${e}' ${o}: `,f),f)),(f=>{throw Gs(iu,`RPC '${e}' ${o} failed with error: `,f,"url: ",c,"request:",n),f}))}jo(e,t,n,r,s,o){return this.Wo(e,t,n,r,s)}Go(e,t,n){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Zs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,s)=>e[s]=r)),n&&n.headers.forEach(((r,s)=>e[s]=r))}Qo(e,t){const n=hC[e];let r=`${this.Ko}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un="WebChannelConnection",xo=(i,e,t)=>{i.listen(e,(n=>{try{t(n)}catch(r){setTimeout((()=>{throw r}),0)}}))};class Ns extends dC{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Ns.c_){const e=f_();xo(e,d_.STAT_EVENT,(t=>{t.stat===uh.PROXY?Ce(un,"STAT_EVENT: detected buffering proxy"):t.stat===uh.NOPROXY&&Ce(un,"STAT_EVENT: detected no buffering proxy")})),Ns.c_=!0}}zo(e,t,n,r,s){const o=Th();return new Promise(((c,l)=>{const u=new u_;u.setWithCredentials(!0),u.listenOnce(h_.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case lc.NO_ERROR:const f=u.getResponseJson();Ce(un,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),c(f);break;case lc.TIMEOUT:Ce(un,`RPC '${e}' ${o} timed out`),l(new Te(ie.DEADLINE_EXCEEDED,"Request time out"));break;case lc.HTTP_ERROR:const d=u.getStatus();if(Ce(un,`RPC '${e}' ${o} failed with status:`,d,"response text:",u.getResponseText()),d>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const x=g==null?void 0:g.error;if(x&&x.status&&x.message){const b=(function(v){const R=v.toLowerCase().replace(/_/g,"-");return Object.values(ie).indexOf(R)>=0?R:ie.UNKNOWN})(x.status);l(new Te(b,x.message))}else l(new Te(ie.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new Te(ie.UNAVAILABLE,"Connection failed."));break;default:je(9055,{l_:e,streamId:o,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{Ce(un,`RPC '${e}' ${o} completed.`)}}));const h=JSON.stringify(r);Ce(un,`RPC '${e}' ${o} sending request:`,r),u.send(t,"POST",h,n,15)}))}T_(e,t,n){const r=Th(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,t,n),c.encodeInitMessageHeaders=!0;const u=s.join("");Ce(un,`Creating RPC '${e}' stream ${r}: ${u}`,c);const h=o.createWebChannel(u,c);this.E_(h);let f=!1,d=!1;const g=new fC({Jo:x=>{d?Ce(un,`Not sending because RPC '${e}' stream ${r} is closed:`,x):(f||(Ce(un,`Opening RPC '${e}' stream ${r} transport.`),h.open(),f=!0),Ce(un,`RPC '${e}' stream ${r} sending:`,x),h.send(x))},Ho:()=>h.close()});return xo(h,wo.EventType.OPEN,(()=>{d||(Ce(un,`RPC '${e}' stream ${r} transport opened.`),g.i_())})),xo(h,wo.EventType.CLOSE,(()=>{d||(d=!0,Ce(un,`RPC '${e}' stream ${r} transport closed`),g.o_(),this.I_(h))})),xo(h,wo.EventType.ERROR,(x=>{d||(d=!0,Gs(un,`RPC '${e}' stream ${r} transport errored. Name:`,x.name,"Message:",x.message),g.o_(new Te(ie.UNAVAILABLE,"The operation could not be completed")))})),xo(h,wo.EventType.MESSAGE,(x=>{var b;if(!d){const _=x.data[0];St(!!_,16349);const v=_,R=(v==null?void 0:v.error)||((b=v[0])==null?void 0:b.error);if(R){Ce(un,`RPC '${e}' stream ${r} received error:`,R);const N=R.status;let L=(function(A){const m=Gt[A];if(m!==void 0)return $_(m)})(N),U=R.message;N==="NOT_FOUND"&&U.includes("database")&&U.includes("does not exist")&&U.includes(this.databaseId.database)&&Gs(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),L===void 0&&(L=ie.INTERNAL,U="Unknown error status: "+N+" with message "+R.message),d=!0,g.o_(new Te(L,U)),h.close()}else Ce(un,`RPC '${e}' stream ${r} received:`,_),g.__(_)}})),Ns.u_(),setTimeout((()=>{g.s_()}),0),g}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}E_(e){this.a_.push(e)}I_(e){this.a_=this.a_.filter((t=>t===e))}Go(e,t,n){super.Go(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return p_()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(i){return new Ns(i)}function ru(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(i){return new yR(i,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ns.c_=!1;class lv{constructor(e,t,n=1e3,r=1.5,s=6e4){this.Ci=e,this.timerId=t,this.R_=n,this.A_=r,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const t=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),r=Math.max(0,t-n);r>0&&Ce("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.d_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,r,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm="PersistentStream";class uv{constructor(e,t,n,r,s,o,c,l){this.Ci=e,this.S_=n,this.b_=r,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new lv(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.K_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}K_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.K_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===ie.RESOURCE_EXHAUSTED?(Bi(t.toString()),Bi("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===ie.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(t)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,r])=>{this.D_===t&&this.G_(n,r)}),(n=>{e((()=>{const r=new Te(ie.UNKNOWN,"Fetching auth token failed: "+n.message);return this.z_(r)}))}))}G_(e,t){const n=this.Q_(this.D_);this.stream=this.j_(e,t),this.stream.Zo((()=>{n((()=>this.listener.Zo()))})),this.stream.Yo((()=>{n((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((r=>{n((()=>this.z_(r)))})),this.stream.onMessage((r=>{n((()=>++this.F_==1?this.J_(r):this.onNext(r)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return Ce(hm,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return t=>{this.Ci.enqueueAndForget((()=>this.D_===e?t():(Ce(hm,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class mC extends uv{constructor(e,t,n,r,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,o),this.serializer=s}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=SR(this.serializer,e),n=(function(s){if(!("targetChange"in s))return Ze.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Ze.min():o.readTime?li(o.readTime):Ze.min()})(e);return this.listener.H_(t,n)}Z_(e){const t={};t.database=xh(this.serializer),t.addTarget=(function(s,o){let c;const l=o.target;if(c=mh(l)?{documents:MR(s,l)}:{query:wR(s,l).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Y_(s,o.resumeToken);const u=vh(s,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(Ze.min())>0){c.readTime=Pc(s,o.snapshotVersion.toTimestamp());const u=vh(s,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const n=IR(this.serializer,e);n&&(t.labels=n),this.q_(t)}X_(e){const t={};t.database=xh(this.serializer),t.removeTarget=e,this.q_(t)}}class gC extends uv{constructor(e,t,n,r,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return St(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,St(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){St(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=AR(e.writeResults,e.commitTime),n=li(e.commitTime);return this.listener.na(n,t)}ra(){const e={};e.database=xh(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>TR(this.serializer,n)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{}class vC extends _C{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ia=!1}sa(){if(this.ia)throw new Te(ie.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,r){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,o])=>this.connection.Wo(e,yh(t,n),r,s,o))).catch((s=>{throw s.name==="FirebaseError"?(s.code===ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new Te(ie.UNKNOWN,s.toString())}))}jo(e,t,n,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.jo(e,yh(t,n),r,o,c,s))).catch((o=>{throw o.name==="FirebaseError"?(o.code===ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new Te(ie.UNKNOWN,o.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function yC(i,e,t,n){return new vC(i,e,t,n)}class EC{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Bi(t),this.aa=!1):Ce("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr="RemoteStore";class xC{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Ta=[],this.Ea=new Map,this.Ia=new Set,this.Ra=[],this.Aa=s,this.Aa.Mo((o=>{n.enqueueAndForget((async()=>{is(this)&&(Ce(Jr,"Restarting streams for network reachability change."),await(async function(l){const u=it(l);u.Ia.add(4),await la(u),u.Va.set("Unknown"),u.Ia.delete(4),await rl(u)})(this))}))})),this.Va=new EC(n,r)}}async function rl(i){if(is(i))for(const e of i.Ra)await e(!0)}async function la(i){for(const e of i.Ra)await e(!1)}function hv(i,e){const t=it(i);t.Ea.has(e.targetId)||(t.Ea.set(e.targetId,e),md(t)?pd(t):io(t).O_()&&fd(t,e))}function dd(i,e){const t=it(i),n=io(t);t.Ea.delete(e),n.O_()&&dv(t,e),t.Ea.size===0&&(n.O_()?n.L_():is(t)&&t.Va.set("Unknown"))}function fd(i,e){if(i.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ze.min())>0){const t=i.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}io(i).Z_(e)}function dv(i,e){i.da.$e(e),io(i).X_(e)}function pd(i){i.da=new mR({getRemoteKeysForTarget:e=>i.remoteSyncer.getRemoteKeysForTarget(e),At:e=>i.Ea.get(e)||null,ht:()=>i.datastore.serializer.databaseId}),io(i).start(),i.Va.ua()}function md(i){return is(i)&&!io(i).x_()&&i.Ea.size>0}function is(i){return it(i).Ia.size===0}function fv(i){i.da=void 0}async function SC(i){i.Va.set("Online")}async function TC(i){i.Ea.forEach(((e,t)=>{fd(i,e)}))}async function AC(i,e){fv(i),md(i)?(i.Va.ha(e),pd(i)):i.Va.set("Unknown")}async function MC(i,e,t){if(i.Va.set("Online"),e instanceof K_&&e.state===2&&e.cause)try{await(async function(r,s){const o=s.cause;for(const c of s.targetIds)r.Ea.has(c)&&(await r.remoteSyncer.rejectListen(c,o),r.Ea.delete(c),r.da.removeTarget(c))})(i,e)}catch(n){Ce(Jr,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Lc(i,n)}else if(e instanceof fc?i.da.Xe(e):e instanceof j_?i.da.st(e):i.da.tt(e),!t.isEqual(Ze.min()))try{const n=await cv(i.localStore);t.compareTo(n)>=0&&await(function(s,o){const c=s.da.Tt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=s.Ea.get(u);h&&s.Ea.set(u,h.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const h=s.Ea.get(l);if(!h)return;s.Ea.set(l,h.withResumeToken(on.EMPTY_BYTE_STRING,h.snapshotVersion)),dv(s,l);const f=new cr(h.target,l,u,h.sequenceNumber);fd(s,f)})),s.remoteSyncer.applyRemoteEvent(c)})(i,t)}catch(n){Ce(Jr,"Failed to raise snapshot:",n),await Lc(i,n)}}async function Lc(i,e,t){if(!to(e))throw e;i.Ia.add(1),await la(i),i.Va.set("Offline"),t||(t=()=>cv(i.localStore)),i.asyncQueue.enqueueRetryable((async()=>{Ce(Jr,"Retrying IndexedDB access"),await t(),i.Ia.delete(1),await rl(i)}))}function pv(i,e){return e().catch((t=>Lc(i,t,e)))}async function sl(i){const e=it(i),t=yr(e);let n=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Jh;for(;wC(e);)try{const r=await oC(e.localStore,n);if(r===null){e.Ta.length===0&&t.L_();break}n=r.batchId,bC(e,r)}catch(r){await Lc(e,r)}mv(e)&&gv(e)}function wC(i){return is(i)&&i.Ta.length<10}function bC(i,e){i.Ta.push(e);const t=yr(i);t.O_()&&t.Y_&&t.ea(e.mutations)}function mv(i){return is(i)&&!yr(i).x_()&&i.Ta.length>0}function gv(i){yr(i).start()}async function IC(i){yr(i).ra()}async function RC(i){const e=yr(i);for(const t of i.Ta)e.ea(t.mutations)}async function CC(i,e,t){const n=i.Ta.shift(),r=sd.from(n,e,t);await pv(i,(()=>i.remoteSyncer.applySuccessfulWrite(r))),await sl(i)}async function PC(i,e){e&&yr(i).Y_&&await(async function(n,r){if((function(o){return dR(o)&&o!==ie.ABORTED})(r.code)){const s=n.Ta.shift();yr(n).B_(),await pv(n,(()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r))),await sl(n)}})(i,e),mv(i)&&gv(i)}async function dm(i,e){const t=it(i);t.asyncQueue.verifyOperationInProgress(),Ce(Jr,"RemoteStore received new credentials");const n=is(t);t.Ia.add(3),await la(t),n&&t.Va.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await rl(t)}async function DC(i,e){const t=it(i);e?(t.Ia.delete(2),await rl(t)):e||(t.Ia.add(2),await la(t),t.Va.set("Unknown"))}function io(i){return i.ma||(i.ma=(function(t,n,r){const s=it(t);return s.sa(),new mC(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)})(i.datastore,i.asyncQueue,{Zo:SC.bind(null,i),Yo:TC.bind(null,i),t_:AC.bind(null,i),H_:MC.bind(null,i)}),i.Ra.push((async e=>{e?(i.ma.B_(),md(i)?pd(i):i.Va.set("Unknown")):(await i.ma.stop(),fv(i))}))),i.ma}function yr(i){return i.fa||(i.fa=(function(t,n,r){const s=it(t);return s.sa(),new gC(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)})(i.datastore,i.asyncQueue,{Zo:()=>Promise.resolve(),Yo:IC.bind(null,i),t_:PC.bind(null,i),ta:RC.bind(null,i),na:CC.bind(null,i)}),i.Ra.push((async e=>{e?(i.fa.B_(),await sl(i)):(await i.fa.stop(),i.Ta.length>0&&(Ce(Jr,`Stopping write stream with ${i.Ta.length} pending writes`),i.Ta=[]))}))),i.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new Di,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,s){const o=Date.now()+n,c=new gd(e,t,o,r,s);return c.start(n),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Te(ie.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _d(i,e){if(Bi("AsyncQueue",`${e}: ${i}`),to(i))return new Te(ie.UNAVAILABLE,`${e}: ${i}`);throw i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{static emptySet(e){return new Us(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||Ge.comparator(t.key,n.key):(t,n)=>Ge.comparator(t.key,n.key),this.keyedMap=bo(),this.sortedSet=new Nt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Us)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,s=n.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Us;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(){this.ga=new Nt(Ge.comparator)}track(e){const t=e.doc.key,n=this.ga.get(t);n?e.type!==0&&n.type===3?this.ga=this.ga.insert(t,e):e.type===3&&n.type!==1?this.ga=this.ga.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.ga=this.ga.remove(t):e.type===1&&n.type===2?this.ga=this.ga.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):je(63341,{Vt:e,pa:n}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,n)=>{e.push(n)})),e}}class $s{constructor(e,t,n,r,s,o,c,l,u){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,t,n,r,s){const o=[];return t.forEach((c=>{o.push({type:0,doc:c})})),new $s(e,t,Us.emptySet(t),o,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Jc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class NC{constructor(){this.queries=pm(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,n){const r=it(t),s=r.queries;r.queries=pm(),s.forEach(((o,c)=>{for(const l of c.Sa)l.onError(n)}))})(this,new Te(ie.ABORTED,"Firestore shutting down"))}}function pm(){return new ts((i=>U_(i)),Jc)}async function vd(i,e){const t=it(i);let n=3;const r=e.query;let s=t.queries.get(r);s?!s.ba()&&e.Da()&&(n=2):(s=new LC,n=e.Da()?0:1);try{switch(n){case 0:s.wa=await t.onListen(r,!0);break;case 1:s.wa=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(o){const c=_d(o,`Initialization of query '${Ms(e.query)}' failed`);return void e.onError(c)}t.queries.set(r,s),s.Sa.push(e),e.va(t.onlineState),s.wa&&e.Fa(s.wa)&&Ed(t)}async function yd(i,e){const t=it(i),n=e.query;let r=3;const s=t.queries.get(n);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?r=e.Da()?0:1:!s.ba()&&e.Da()&&(r=2))}switch(r){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function UC(i,e){const t=it(i);let n=!1;for(const r of e){const s=r.query,o=t.queries.get(s);if(o){for(const c of o.Sa)c.Fa(r)&&(n=!0);o.wa=r}}n&&Ed(t)}function OC(i,e,t){const n=it(i),r=n.queries.get(e);if(r)for(const s of r.Sa)s.onError(t);n.queries.delete(e)}function Ed(i){i.Ca.forEach((e=>{e.next()}))}var Ah,mm;(mm=Ah||(Ah={})).Ma="default",mm.Cache="cache";class xd{constructor(e,t,n){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=n||{}}Fa(e){if(!this.options.includeMetadataChanges){const n=[];for(const r of e.docChanges)r.type!==3&&n.push(r);e=new $s(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const n=t!=="Offline";return(!this.options.qa||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=$s.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ah.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e){this.key=e}}class vv{constructor(e){this.key=e}}class FC{constructor(e,t){this.query=e,this.Za=t,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=dt(),this.mutatedKeys=dt(),this.eu=O_(e),this.tu=new Us(this.eu)}get nu(){return this.Za}ru(e,t){const n=t?t.iu:new fm,r=t?t.tu:this.tu;let s=t?t.mutatedKeys:this.mutatedKeys,o=r,c=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((h,f)=>{const d=r.get(h),g=Zc(this.query,f)?f:null,x=!!d&&this.mutatedKeys.has(d.key),b=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let _=!1;d&&g?d.data.isEqual(g.data)?x!==b&&(n.track({type:3,doc:g}),_=!0):this.su(d,g)||(n.track({type:2,doc:g}),_=!0,(l&&this.eu(g,l)>0||u&&this.eu(g,u)<0)&&(c=!0)):!d&&g?(n.track({type:0,doc:g}),_=!0):d&&!g&&(n.track({type:1,doc:d}),_=!0,(l||u)&&(c=!0)),_&&(g?(o=o.add(g),s=b?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),n.track({type:1,doc:h})}return{tu:o,iu:n,bs:c,mutatedKeys:s}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const s=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const o=e.iu.ya();o.sort(((h,f)=>(function(g,x){const b=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return je(20277,{Vt:_})}};return b(g)-b(x)})(h.type,f.type)||this.eu(h.doc,f.doc))),this.ou(n),r=r??!1;const c=t&&!r?this._u():[],l=this.Ya.size===0&&this.current&&!r?1:0,u=l!==this.Xa;return this.Xa=l,o.length!==0||u?{snapshot:new $s(this.query,e.tu,s,o,e.mutatedKeys,l===0,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new fm,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Za=this.Za.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Za=this.Za.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=dt(),this.tu.forEach((n=>{this.uu(n.key)&&(this.Ya=this.Ya.add(n.key))}));const t=[];return e.forEach((n=>{this.Ya.has(n)||t.push(new vv(n))})),this.Ya.forEach((n=>{e.has(n)||t.push(new _v(n))})),t}cu(e){this.Za=e.ks,this.Ya=dt();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return $s.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Sd="SyncEngine";class VC{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class kC{constructor(e){this.key=e,this.hu=!1}}class BC{constructor(e,t,n,r,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Pu={},this.Tu=new ts((c=>U_(c)),Jc),this.Eu=new Map,this.Iu=new Set,this.Ru=new Nt(Ge.comparator),this.Au=new Map,this.Vu=new cd,this.du={},this.mu=new Map,this.fu=Xs.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function zC(i,e,t=!0){const n=Av(i);let r;const s=n.Tu.get(e);return s?(n.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.lu()):r=await yv(n,e,t,!0),r}async function GC(i,e){const t=Av(i);await yv(t,e,!0,!1)}async function yv(i,e,t,n){const r=await aC(i.localStore,ai(e)),s=r.targetId,o=i.sharedClientState.addLocalQueryTarget(s,t);let c;return n&&(c=await HC(i,e,s,o==="current",r.resumeToken)),i.isPrimaryClient&&t&&hv(i.remoteStore,r),c}async function HC(i,e,t,n,r){i.pu=(f,d,g)=>(async function(b,_,v,R){let N=_.view.ru(v);N.bs&&(N=await am(b.localStore,_.query,!1).then((({documents:A})=>_.view.ru(A,N))));const L=R&&R.targetChanges.get(_.targetId),U=R&&R.targetMismatches.get(_.targetId)!=null,F=_.view.applyChanges(N,b.isPrimaryClient,L,U);return _m(b,_.targetId,F.au),F.snapshot})(i,f,d,g);const s=await am(i.localStore,e,!0),o=new FC(e,s.ks),c=o.ru(s.documents),l=ca.createSynthesizedTargetChangeForCurrentChange(t,n&&i.onlineState!=="Offline",r),u=o.applyChanges(c,i.isPrimaryClient,l);_m(i,t,u.au);const h=new VC(e,t,o);return i.Tu.set(e,h),i.Eu.has(t)?i.Eu.get(t).push(e):i.Eu.set(t,[e]),u.snapshot}async function WC(i,e,t){const n=it(i),r=n.Tu.get(e),s=n.Eu.get(r.targetId);if(s.length>1)return n.Eu.set(r.targetId,s.filter((o=>!Jc(o,e)))),void n.Tu.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Sh(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),t&&dd(n.remoteStore,r.targetId),Mh(n,r.targetId)})).catch(eo)):(Mh(n,r.targetId),await Sh(n.localStore,r.targetId,!0))}async function qC(i,e){const t=it(i),n=t.Tu.get(e),r=t.Eu.get(n.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),dd(t.remoteStore,n.targetId))}async function XC(i,e,t){const n=ZC(i);try{const r=await(function(o,c){const l=it(o),u=Dt.now(),h=c.reduce(((g,x)=>g.add(x.key)),dt());let f,d;return l.persistence.runTransaction("Locally write mutations","readwrite",(g=>{let x=zi(),b=dt();return l.xs.getEntries(g,h).next((_=>{x=_,x.forEach(((v,R)=>{R.isValidDocument()||(b=b.add(v))}))})).next((()=>l.localDocuments.getOverlayedDocuments(g,x))).next((_=>{f=_;const v=[];for(const R of c){const N=aR(R,f.get(R.key).overlayedDocument);N!=null&&v.push(new ns(R.key,N,b_(N.value.mapValue),ci.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,v,c)})).next((_=>{d=_;const v=_.applyToLocalDocumentSet(f,b);return l.documentOverlayCache.saveOverlays(g,_.batchId,v)}))})).then((()=>({batchId:d.batchId,changes:V_(f)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(r.batchId),(function(o,c,l){let u=o.du[o.currentUser.toKey()];u||(u=new Nt(ht)),u=u.insert(c,l),o.du[o.currentUser.toKey()]=u})(n,r.batchId,t),await ua(n,r.changes),await sl(n.remoteStore)}catch(r){const s=_d(r,"Failed to persist write");t.reject(s)}}async function Ev(i,e){const t=it(i);try{const n=await rC(t.localStore,e);e.targetChanges.forEach(((r,s)=>{const o=t.Au.get(s);o&&(St(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.hu=!0:r.modifiedDocuments.size>0?St(o.hu,14607):r.removedDocuments.size>0&&(St(o.hu,42227),o.hu=!1))})),await ua(t,n,e)}catch(n){await eo(n)}}function gm(i,e,t){const n=it(i);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const r=[];n.Tu.forEach(((s,o)=>{const c=o.view.va(e);c.snapshot&&r.push(c.snapshot)})),(function(o,c){const l=it(o);l.onlineState=c;let u=!1;l.queries.forEach(((h,f)=>{for(const d of f.Sa)d.va(c)&&(u=!0)})),u&&Ed(l)})(n.eventManager,e),r.length&&n.Pu.H_(r),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function $C(i,e,t){const n=it(i);n.sharedClientState.updateQueryState(e,"rejected",t);const r=n.Au.get(e),s=r&&r.key;if(s){let o=new Nt(Ge.comparator);o=o.insert(s,hn.newNoDocument(s,Ze.min()));const c=dt().add(s),l=new nl(Ze.min(),new Map,new Nt(ht),o,c);await Ev(n,l),n.Ru=n.Ru.remove(s),n.Au.delete(e),Td(n)}else await Sh(n.localStore,e,!1).then((()=>Mh(n,e,t))).catch(eo)}async function jC(i,e){const t=it(i),n=e.batch.batchId;try{const r=await iC(t.localStore,e);Sv(t,n,null),xv(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await ua(t,r)}catch(r){await eo(r)}}async function KC(i,e,t){const n=it(i);try{const r=await(function(o,c){const l=it(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let h;return l.mutationQueue.lookupMutationBatch(u,c).next((f=>(St(f!==null,37113),h=f.keys(),l.mutationQueue.removeMutationBatch(u,f)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h))).next((()=>l.localDocuments.getDocuments(u,h)))}))})(n.localStore,e);Sv(n,e,t),xv(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await ua(n,r)}catch(r){await eo(r)}}function xv(i,e){(i.mu.get(e)||[]).forEach((t=>{t.resolve()})),i.mu.delete(e)}function Sv(i,e,t){const n=it(i);let r=n.du[n.currentUser.toKey()];if(r){const s=r.get(e);s&&(t?s.reject(t):s.resolve(),r=r.remove(e)),n.du[n.currentUser.toKey()]=r}}function Mh(i,e,t=null){i.sharedClientState.removeLocalQueryTarget(e);for(const n of i.Eu.get(e))i.Tu.delete(n),t&&i.Pu.yu(n,t);i.Eu.delete(e),i.isPrimaryClient&&i.Vu.Gr(e).forEach((n=>{i.Vu.containsKey(n)||Tv(i,n)}))}function Tv(i,e){i.Iu.delete(e.path.canonicalString());const t=i.Ru.get(e);t!==null&&(dd(i.remoteStore,t),i.Ru=i.Ru.remove(e),i.Au.delete(t),Td(i))}function _m(i,e,t){for(const n of t)n instanceof _v?(i.Vu.addReference(n.key,e),YC(i,n)):n instanceof vv?(Ce(Sd,"Document no longer in limbo: "+n.key),i.Vu.removeReference(n.key,e),i.Vu.containsKey(n.key)||Tv(i,n.key)):je(19791,{wu:n})}function YC(i,e){const t=e.key,n=t.path.canonicalString();i.Ru.get(t)||i.Iu.has(n)||(Ce(Sd,"New document in limbo: "+t),i.Iu.add(n),Td(i))}function Td(i){for(;i.Iu.size>0&&i.Ru.size<i.maxConcurrentLimboResolutions;){const e=i.Iu.values().next().value;i.Iu.delete(e);const t=new Ge(Pt.fromString(e)),n=i.fu.next();i.Au.set(n,new kC(t)),i.Ru=i.Ru.insert(t,n),hv(i.remoteStore,new cr(ai(Qc(t.path)),n,"TargetPurposeLimboResolution",jc.ce))}}async function ua(i,e,t){const n=it(i),r=[],s=[],o=[];n.Tu.isEmpty()||(n.Tu.forEach(((c,l)=>{o.push(n.pu(l,e,t).then((u=>{var h;if((u||t)&&n.isPrimaryClient){const f=u?!u.fromCache:(h=t==null?void 0:t.targetChanges.get(l.targetId))==null?void 0:h.current;n.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){r.push(u);const f=ud.Is(l.targetId,u);s.push(f)}})))})),await Promise.all(o),n.Pu.H_(r),await(async function(l,u){const h=it(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(f=>se.forEach(u,(d=>se.forEach(d.Ts,(g=>h.persistence.referenceDelegate.addReference(f,d.targetId,g))).next((()=>se.forEach(d.Es,(g=>h.persistence.referenceDelegate.removeReference(f,d.targetId,g)))))))))}catch(f){if(!to(f))throw f;Ce(hd,"Failed to update sequence numbers: "+f)}for(const f of u){const d=f.targetId;if(!f.fromCache){const g=h.vs.get(d),x=g.snapshotVersion,b=g.withLastLimboFreeSnapshotVersion(x);h.vs=h.vs.insert(d,b)}}})(n.localStore,s))}async function QC(i,e){const t=it(i);if(!t.currentUser.isEqual(e)){Ce(Sd,"User change. New user:",e.toKey());const n=await av(t.localStore,e);t.currentUser=e,(function(s,o){s.mu.forEach((c=>{c.forEach((l=>{l.reject(new Te(ie.CANCELLED,o))}))})),s.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await ua(t,n.Ns)}}function JC(i,e){const t=it(i),n=t.Au.get(e);if(n&&n.hu)return dt().add(n.key);{let r=dt();const s=t.Eu.get(e);if(!s)return r;for(const o of s){const c=t.Tu.get(o);r=r.unionWith(c.view.nu)}return r}}function Av(i){const e=it(i);return e.remoteStore.remoteSyncer.applyRemoteEvent=Ev.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=JC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$C.bind(null,e),e.Pu.H_=UC.bind(null,e.eventManager),e.Pu.yu=OC.bind(null,e.eventManager),e}function ZC(i){const e=it(i);return e.remoteStore.remoteSyncer.applySuccessfulWrite=jC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=KC.bind(null,e),e}class Nc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=il(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return nC(this.persistence,new ZR,e.initialUser,this.serializer)}Cu(e){return new ov(ld.Vi,this.serializer)}Du(e){return new lC}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Nc.provider={build:()=>new Nc};class eP extends Nc{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){St(this.persistence.referenceDelegate instanceof Dc,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new VR(n,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?yn.withCacheSize(this.cacheSizeBytes):yn.DEFAULT;return new ov((n=>Dc.Vi(n,t)),this.serializer)}}class wh{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>gm(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=QC.bind(null,this.syncEngine),await DC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new NC})()}createDatastore(e){const t=il(e.databaseInfo.databaseId),n=pC(e.databaseInfo);return yC(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,r,s,o,c){return new xC(n,r,s,o,c)})(this.localStore,this.datastore,e.asyncQueue,(t=>gm(this.syncEngine,t,0)),(function(){return um.v()?new um:new uC})())}createSyncEngine(e,t){return(function(r,s,o,c,l,u,h){const f=new BC(r,s,o,c,l,u);return h&&(f.gu=!0),f})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(r){const s=it(r);Ce(Jr,"RemoteStore shutting down."),s.Ia.add(5),await la(s),s.Aa.shutdown(),s.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}wh.provider={build:()=>new wh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Bi("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="FirestoreClient";class tP{constructor(e,t,n,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=r,this.user=vn.UNAUTHENTICATED,this.clientId=Qh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,(async o=>{Ce(Er,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(n,(o=>(Ce(Er,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Di;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=_d(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function su(i,e){i.asyncQueue.verifyOperationInProgress(),Ce(Er,"Initializing OfflineComponentProvider");const t=i.configuration;await e.initialize(t);let n=t.initialUser;i.setCredentialChangeListener((async r=>{n.isEqual(r)||(await av(e.localStore,r),n=r)})),e.persistence.setDatabaseDeletedListener((()=>i.terminate())),i._offlineComponents=e}async function vm(i,e){i.asyncQueue.verifyOperationInProgress();const t=await nP(i);Ce(Er,"Initializing OnlineComponentProvider"),await e.initialize(t,i.configuration),i.setCredentialChangeListener((n=>dm(e.remoteStore,n))),i.setAppCheckTokenChangeListener(((n,r)=>dm(e.remoteStore,r))),i._onlineComponents=e}async function nP(i){if(!i._offlineComponents)if(i._uninitializedComponentsProvider){Ce(Er,"Using user provided OfflineComponentProvider");try{await su(i,i._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===ie.FAILED_PRECONDITION||r.code===ie.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;Gs("Error using user provided cache. Falling back to memory cache: "+t),await su(i,new Nc)}}else Ce(Er,"Using default OfflineComponentProvider"),await su(i,new eP(void 0));return i._offlineComponents}async function Mv(i){return i._onlineComponents||(i._uninitializedComponentsProvider?(Ce(Er,"Using user provided OnlineComponentProvider"),await vm(i,i._uninitializedComponentsProvider._online)):(Ce(Er,"Using default OnlineComponentProvider"),await vm(i,new wh))),i._onlineComponents}function iP(i){return Mv(i).then((e=>e.syncEngine))}async function Uc(i){const e=await Mv(i),t=e.eventManager;return t.onListen=zC.bind(null,e.syncEngine),t.onUnlisten=WC.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=GC.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=qC.bind(null,e.syncEngine),t}function rP(i,e,t,n){const r=new Ad(n),s=new xd(e,r,t);return i.asyncQueue.enqueueAndForget((async()=>vd(await Uc(i),s))),()=>{r.Nu(),i.asyncQueue.enqueueAndForget((async()=>yd(await Uc(i),s)))}}function sP(i,e,t={}){const n=new Di;return i.asyncQueue.enqueueAndForget((async()=>(function(s,o,c,l,u){const h=new Ad({next:d=>{h.Nu(),o.enqueueAndForget((()=>yd(s,f)));const g=d.docs.has(c);!g&&d.fromCache?u.reject(new Te(ie.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&d.fromCache&&l&&l.source==="server"?u.reject(new Te(ie.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),f=new xd(Qc(c.path),h,{includeMetadataChanges:!0,qa:!0});return vd(s,f)})(await Uc(i),i.asyncQueue,e,t,n))),n.promise}function oP(i,e,t={}){const n=new Di;return i.asyncQueue.enqueueAndForget((async()=>(function(s,o,c,l,u){const h=new Ad({next:d=>{h.Nu(),o.enqueueAndForget((()=>yd(s,f))),d.fromCache&&l.source==="server"?u.reject(new Te(ie.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(d)},error:d=>u.reject(d)}),f=new xd(c,h,{includeMetadataChanges:!0,qa:!0});return vd(s,f)})(await Uc(i),i.asyncQueue,e,t,n))),n.promise}function aP(i,e){const t=new Di;return i.asyncQueue.enqueueAndForget((async()=>XC(await iP(i),e,t))),t.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wv(i){const e={};return i.timeoutSeconds!==void 0&&(e.timeoutSeconds=i.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP="ComponentProvider",ym=new Map;function lP(i,e,t,n,r){return new II(i,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,wv(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP="firestore.googleapis.com",Em=!0;class xm{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Te(ie.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=uP,this.ssl=Em}else this.host=e.host,this.ssl=e.ssl??Em;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=rv;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<sv)throw new Te(ie.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}_I("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wv(e.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new Te(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new Te(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new Te(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,r){return n.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Md{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xm({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Te(ie.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Te(ie.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xm(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new cI;switch(n.type){case"firstParty":return new hI(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new Te(ie.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=ym.get(t);n&&(Ce(cP,"Removing Datastore"),ym.delete(t),n.terminate())})(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ar(this.firestore,e,this._query)}}class qt{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qt(this.firestore,e,this._key)}toJSON(){return{type:qt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(oa(t,qt._jsonSchema))return new qt(e,n||null,new Ge(Pt.fromString(t.referencePath)))}}qt._jsonSchemaVersion="firestore/documentReference/1.0",qt._jsonSchema={type:Wt("string",qt._jsonSchemaVersion),referencePath:Wt("string")};class fr extends Ar{constructor(e,t,n){super(e,t,Qc(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qt(this.firestore,null,new Ge(e))}withConverter(e){return new fr(this.firestore,e,this._path)}}function Ja(i,e,...t){if(i=sn(i),g_("collection","path",e),i instanceof Md){const n=Pt.fromString(e,...t);return Np(n),new fr(i,null,n)}{if(!(i instanceof qt||i instanceof fr))throw new Te(ie.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(Pt.fromString(e,...t));return Np(n),new fr(i.firestore,null,n)}}function wd(i,e,...t){if(i=sn(i),arguments.length===1&&(e=Qh.newId()),g_("doc","path",e),i instanceof Md){const n=Pt.fromString(e,...t);return Lp(n),new qt(i,null,new Ge(n))}{if(!(i instanceof qt||i instanceof fr))throw new Te(ie.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=i._path.child(Pt.fromString(e,...t));return Lp(n),new qt(i.firestore,i instanceof fr?i.converter:null,new Ge(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm="AsyncQueue";class Tm{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new lv(this,"async_queue_retry"),this._c=()=>{const n=ru();n&&Ce(Sm,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.ac=e;const t=ru();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=ru();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Di;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!to(e))throw e;Ce(Sm,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((n=>{throw this.nc=n,this.rc=!1,Bi("INTERNAL UNHANDLED ERROR: ",Am(n)),n})).then((n=>(this.rc=!1,n))))));return this.ac=t,t}enqueueAfterDelay(e,t,n){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const r=gd.createAndSchedule(this,e,t,n,(s=>this.hc(s)));return this.tc.push(r),r}uc(){this.nc&&je(47125,{Pc:Am(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ec(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ic(e){return this.Tc().then((()=>{this.tc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Am(i){let e=i.message||"";return i.stack&&(e=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),e}class Zr extends Md{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new Tm,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Tm(e),this._firestoreClient=void 0,await e}}}function hP(i,e,t){t||(t=bc);const n=kh(i,"firestore");if(n.isInitialized(t)){const r=n.getImmediate({identifier:t}),s=n.getOptions(t);if($r(s,e))return r;throw new Te(ie.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new Te(ie.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<sv)throw new Te(ie.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return e.host&&ta(e.host)&&Tg(e.host),n.initialize({options:e,instanceIdentifier:t})}function ol(i){if(i._terminated)throw new Te(ie.FAILED_PRECONDITION,"The client has already been terminated.");return i._firestoreClient||dP(i),i._firestoreClient}function dP(i){var n,r,s,o;const e=i._freezeSettings(),t=lP(i._databaseId,((n=i._app)==null?void 0:n.options.appId)||"",i._persistenceKey,(r=i._app)==null?void 0:r.options.apiKey,e);i._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(i._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),i._firestoreClient=new tP(i._authCredentials,i._appCheckCredentials,i._queue,t,i._componentsProvider&&(function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}})(i._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ln(on.fromBase64String(e))}catch(t){throw new Te(ie.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ln(on.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ln._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(oa(e,Ln._jsonSchema))return Ln.fromBase64String(e.bytes)}}Ln._jsonSchemaVersion="firestore/bytes/1.0",Ln._jsonSchema={type:Wt("string",Ln._jsonSchemaVersion),bytes:Wt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Te(ie.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nn(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Te(ie.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Te(ie.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ht(this._lat,e._lat)||ht(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ui._jsonSchemaVersion}}static fromJSON(e){if(oa(e,ui._jsonSchema))return new ui(e.latitude,e.longitude)}}ui._jsonSchemaVersion="firestore/geoPoint/1.0",ui._jsonSchema={type:Wt("string",ui._jsonSchemaVersion),latitude:Wt("number"),longitude:Wt("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,r){if(n.length!==r.length)return!1;for(let s=0;s<n.length;++s)if(n[s]!==r[s])return!1;return!0})(this._values,e._values)}toJSON(){return{type:jn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(oa(e,jn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new jn(e.vectorValues);throw new Te(ie.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}jn._jsonSchemaVersion="firestore/vectorValue/1.0",jn._jsonSchema={type:Wt("string",jn._jsonSchemaVersion),vectorValues:Wt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=/^__.*__$/;class pP{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new ns(e,this.data,this.fieldMask,t,this.fieldTransforms):new aa(e,this.data,t,this.fieldTransforms)}}function Iv(i){switch(i){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw je(40011,{dataSource:i})}}class Id{constructor(e,t,n,r,s,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,s===void 0&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Id({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}dc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),n=this.i({path:t,arrayElement:!1});return n.mc(e),n}fc(e){var r;const t=(r=this.path)==null?void 0:r.child(e),n=this.i({path:t,arrayElement:!1});return n.Ac(),n}gc(e){return this.i({path:void 0,arrayElement:!0})}yc(e){return Oc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.mc(this.path.get(e))}mc(e){if(e.length===0)throw this.yc("Document fields must not be empty");if(Iv(this.dataSource)&&fP.test(e))throw this.yc('Document fields cannot begin and end with "__"')}}class mP{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||il(e)}A(e,t,n,r=!1){return new Id({dataSource:e,methodName:t,targetDoc:n,path:nn.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Rv(i){const e=i._freezeSettings(),t=il(i._databaseId);return new mP(i._databaseId,!!e.ignoreUndefinedProperties,t)}function gP(i,e,t,n,r,s={}){const o=i.A(s.merge||s.mergeFields?2:0,e,t,r);Dv("Data must be an object, but it was:",o,n);const c=Cv(n,o);let l,u;if(s.merge)l=new qn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const f of s.mergeFields){const d=al(e,f,t);if(!o.contains(d))throw new Te(ie.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);EP(h,d)||h.push(d)}l=new qn(h),u=o.fieldTransforms.filter((f=>l.covers(f.field)))}else l=null,u=o.fieldTransforms;return new pP(new Dn(c),l,u)}class Rd extends bd{_toFieldTransform(e){return new iR(e.path,new Xo)}isEqual(e){return e instanceof Rd}}function _P(i,e,t,n=!1){return Cd(t,i.A(n?4:3,e))}function Cd(i,e){if(Pv(i=sn(i)))return Dv("Unsupported field value:",e,i),Cv(i,e);if(i instanceof bd)return(function(n,r){if(!Iv(r.dataSource))throw r.yc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.yc(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)})(i,e),null;if(i===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),i instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.yc("Nested arrays are not supported");return(function(n,r){const s=[];let o=0;for(const c of n){let l=Cd(c,r.gc(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}})(i,e)}return(function(n,r){if((n=sn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return eR(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=Dt.fromDate(n);return{timestampValue:Pc(r.serializer,s)}}if(n instanceof Dt){const s=new Dt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Pc(r.serializer,s)}}if(n instanceof ui)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ln)return{bytesValue:Y_(r.serializer,n._byteString)};if(n instanceof qt){const s=r.databaseId,o=n.firestore._databaseId;if(!o.isEqual(s))throw r.yc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ad(n.firestore._databaseId||r.databaseId,n._key.path)}}if(n instanceof jn)return(function(o,c){const l=o instanceof jn?o.toArray():o;return{mapValue:{fields:{[M_]:{stringValue:w_},[Ic]:{arrayValue:{values:l.map((h=>{if(typeof h!="number")throw c.yc("VectorValues must only contain numeric values.");return id(c.serializer,h)}))}}}}}})(n,r);if(iv(n))return n._toProto(r.serializer);throw r.yc(`Unsupported field value: ${$c(n)}`)})(i,e)}function Cv(i,e){const t={};return y_(i)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):es(i,((n,r)=>{const s=Cd(r,e.dc(n));s!=null&&(t[n]=s)})),{mapValue:{fields:t}}}function Pv(i){return!(typeof i!="object"||i===null||i instanceof Array||i instanceof Date||i instanceof Dt||i instanceof ui||i instanceof Ln||i instanceof qt||i instanceof bd||i instanceof jn||iv(i))}function Dv(i,e,t){if(!Pv(t)||!__(t)){const n=$c(t);throw n==="an object"?e.yc(i+" a custom object"):e.yc(i+" "+n)}}function al(i,e,t){if((e=sn(e))instanceof bv)return e._internalPath;if(typeof e=="string")return yP(i,e);throw Oc("Field path arguments must be of type string or ",i,!1,void 0,t)}const vP=new RegExp("[~\\*/\\[\\]]");function yP(i,e,t){if(e.search(vP)>=0)throw Oc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,i,!1,void 0,t);try{return new bv(...e.split("."))._internalPath}catch{throw Oc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i,!1,void 0,t)}}function Oc(i,e,t,n,r){const s=n&&!n.isEmpty(),o=r!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${n}`),o&&(l+=` in document ${r}`),l+=")"),new Te(ie.INVALID_ARGUMENT,c+i+l)}function EP(i,e){return i.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xP{convertValue(e,t="none"){switch(vr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Vt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(_r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw je(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return es(e,((r,s)=>{n[r]=this.convertValue(s,t)})),n}convertVectorValue(e){var n,r,s;const t=(s=(r=(n=e.fields)==null?void 0:n[Ic].arrayValue)==null?void 0:r.values)==null?void 0:s.map((o=>Vt(o.doubleValue)));return new jn(t)}convertGeoPoint(e){return new ui(Vt(e.latitude),Vt(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Yc(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Go(e));default:return null}}convertTimestamp(e){const t=gr(e);return new Dt(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Pt.fromString(e);St(nv(n),9688,{name:e});const r=new Ho(n.get(1),n.get(3)),s=new Ge(n.popFirst(5));return r.isEqual(t)||Bi(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd extends xP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ln(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qt(this.firestore,null,t)}}function SP(){return new Rd("serverTimestamp")}const Mm="@firebase/firestore",wm="4.13.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(i){return(function(t,n){if(typeof t!="object"||t===null)return!1;const r=t;for(const s of n)if(s in r&&typeof r[s]=="function")return!0;return!1})(i,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new TP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const t=this._document.data.field(al("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class TP extends Lv{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(i){if(i.limitType==="L"&&i.explicitOrderBy.length===0)throw new Te(ie.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Dd{}class Uv extends Dd{}function ou(i,e,...t){let n=[];e instanceof Dd&&n.push(e),n=n.concat(t),(function(s){const o=s.filter((l=>l instanceof Nd)).length,c=s.filter((l=>l instanceof Ld)).length;if(o>1||o>0&&c>0)throw new Te(ie.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(n);for(const r of n)i=r._apply(i);return i}class Ld extends Uv{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new Ld(e,t,n)}_apply(e){const t=this._parse(e);return Ov(e._query,t),new Ar(e.firestore,e.converter,gh(e._query,t))}_parse(e){const t=Rv(e.firestore);return(function(s,o,c,l,u,h,f){let d;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new Te(ie.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Cm(f,h);const x=[];for(const b of f)x.push(Rm(l,s,b));d={arrayValue:{values:x}}}else d=Rm(l,s,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Cm(f,h),d=_P(c,o,f,h==="in"||h==="not-in");return Ht.create(u,h,d)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Nd extends Dd{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Nd(e,t)}_parse(e){const t=this._queryConstraints.map((n=>n._parse(e))).filter((n=>n.getFilters().length>0));return t.length===1?t[0]:Kn.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(r,s){let o=r;const c=s.getFlattenedFilters();for(const l of c)Ov(o,l),o=gh(o,l)})(e._query,t),new Ar(e.firestore,e.converter,gh(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ud extends Uv{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Ud(e,t)}_apply(e){const t=(function(r,s,o){if(r.startAt!==null)throw new Te(ie.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new Te(ie.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new qo(s,o)})(e._query,this._field,this._direction);return new Ar(e.firestore,e.converter,XI(e._query,t))}}function Im(i,e="asc"){const t=e,n=al("orderBy",i);return Ud._create(n,t)}function Rm(i,e,t){if(typeof(t=sn(t))=="string"){if(t==="")throw new Te(ie.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!N_(e)&&t.indexOf("/")!==-1)throw new Te(ie.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const n=e.path.child(Pt.fromString(t));if(!Ge.isDocumentKey(n))throw new Te(ie.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Gp(i,new Ge(n))}if(t instanceof qt)return Gp(i,t._key);throw new Te(ie.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${$c(t)}.`)}function Cm(i,e){if(!Array.isArray(i)||i.length===0)throw new Te(ie.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ov(i,e){const t=(function(r,s){for(const o of r)for(const c of o.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null})(i.filters,(function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new Te(ie.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new Te(ie.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function AP(i,e,t){let n;return n=i?i.toFirestore(e):e,n}class Ro{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Wr extends Lv{constructor(e,t,n,r,s,o){super(e,t,n,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new pc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(al("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Te(ie.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Wr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Wr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Wr._jsonSchema={type:Wt("string",Wr._jsonSchemaVersion),bundleSource:Wt("string","DocumentSnapshot"),bundleName:Wt("string"),bundle:Wt("string")};class pc extends Wr{data(e={}){return super.data(e)}}class qr{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Ro(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new pc(this._firestore,this._userDataWriter,n.key,n,new Ro(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Te(ie.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,s){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map((c=>{const l=new pc(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Ro(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((c=>s||c.type!==3)).map((c=>{const l=new pc(r._firestore,r._userDataWriter,c.doc.key,c.doc,new Ro(r._snapshot.mutatedKeys.has(c.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),h=o.indexOf(c.doc.key)),{type:MP(c.type),doc:l,oldIndex:u,newIndex:h}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Te(ie.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=qr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Qh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach((s=>{s._document!==null&&(t.push(s._document),n.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),r.push(s.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function MP(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return je(61501,{type:i})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qr._jsonSchemaVersion="firestore/querySnapshot/1.0",qr._jsonSchema={type:Wt("string",qr._jsonSchemaVersion),bundleSource:Wt("string","QuerySnapshot"),bundleName:Wt("string"),bundle:Wt("string")};function wP(i){i=Li(i,qt);const e=Li(i.firestore,Zr),t=ol(e);return sP(t,i._key,{source:"server"}).then((n=>Vv(e,i,n)))}function bP(i){i=Li(i,Ar);const e=Li(i.firestore,Zr),t=ol(e),n=new Pd(e);return Nv(i._query),oP(t,i._query).then((r=>new qr(e,n,i,r)))}function Pm(i){return Fv(Li(i.firestore,Zr),[new rd(i._key,ci.none())])}function IP(i,e){const t=Li(i.firestore,Zr),n=wd(i),r=AP(i.converter,e),s=Rv(i.firestore);return Fv(t,[gP(s,"addDoc",n._key,r,i.converter!==null,{}).toMutation(n._key,ci.exists(!1))]).then((()=>n))}function Dm(i,...e){var u,h,f;i=sn(i);let t={includeMetadataChanges:!1,source:"default"},n=0;typeof e[n]!="object"||bm(e[n])||(t=e[n++]);const r={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(bm(e[n])){const d=e[n];e[n]=(u=d.next)==null?void 0:u.bind(d),e[n+1]=(h=d.error)==null?void 0:h.bind(d),e[n+2]=(f=d.complete)==null?void 0:f.bind(d)}let s,o,c;if(i instanceof qt)o=Li(i.firestore,Zr),c=Qc(i._key.path),s={next:d=>{e[n]&&e[n](Vv(o,i,d))},error:e[n+1],complete:e[n+2]};else{const d=Li(i,Ar);o=Li(d.firestore,Zr),c=d._query;const g=new Pd(o);s={next:x=>{e[n]&&e[n](new qr(o,g,d,x))},error:e[n+1],complete:e[n+2]},Nv(i._query)}const l=ol(o);return rP(l,c,r,s)}function Fv(i,e){const t=ol(i);return aP(t,e)}function Vv(i,e,t){const n=t.docs.get(e._key),r=new Pd(i);return new Wr(i,r,e._key,n,new Ro(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){oI(Qs),zs(new jr("firestore",((n,{instanceIdentifier:r,options:s})=>{const o=n.getProvider("app").getImmediate(),c=new Zr(new lI(n.getProvider("auth-internal")),new dI(o,n.getProvider("app-check-internal")),RI(o,r),o);return s={useFetchStreams:t,...s},c._setSettings(s),c}),"PUBLIC").setMultipleInstances(!0)),hr(Mm,wm,e),hr(Mm,wm,"esm2020")})();const RP="gen-lang-client-0240166093",CP="1:486378715514:web:aada6c68b0c1034e99fec3",PP="AIzaSyCbqqwUpOZPzcNT6BiQJD6s9Usv1Yg8kqk",DP="gen-lang-client-0240166093.firebaseapp.com",LP="ai-studio-7d6e0a9f-cb0c-487b-b54d-436cbaeb0dcc",NP="gen-lang-client-0240166093.firebasestorage.app",UP="486378715514",OP="",Od={projectId:RP,appId:CP,apiKey:PP,authDomain:DP,firestoreDatabaseId:LP,storageBucket:NP,messagingSenderId:UP,measurementId:OP},kv=wg(Od),Is=hP(kv,{experimentalForceLongPolling:!0,experimentalAutoDetectLongPolling:!1,useFetchStreams:!1},Od.firestoreDatabaseId),en=rI(kv);Ww(en,Zg).catch(i=>{console.error("Error setting persistence:",i)});en||console.error("CRITICAL: Firebase Auth failed to initialize!");let Fc=!0;async function FP(){try{const i=new AbortController,e=setTimeout(()=>i.abort(),5e3),t=await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+Od.apiKey,{method:"POST",body:JSON.stringify({}),signal:i.signal});clearTimeout(e),Fc=!0,console.log("Auth endpoint reachability check completed.")}catch(i){Fc=!1,i.name==="AbortError"?console.warn("DIAGNOSTIC: Firebase Auth endpoint timed out. Possible network restriction."):console.warn("DIAGNOSTIC: Could not reach Firebase Auth endpoint. This is likely due to an ad-blocker or firewall blocking 'identitytoolkit.googleapis.com'.",i)}}FP();const VP=new Ai;async function kP(){try{await wP(wd(Is,"_system_","connection-test")),console.log("Firestore connection test successful.")}catch(i){i instanceof Error&&i.message.includes("the client is offline")?console.error("Firestore Error: The client is offline. Please check your network or ad blocker settings."):console.log("Firestore backend reached (test completed).")}}kP();const BP=async()=>{try{if(console.log("Attempting Google sign in with popup..."),!en)throw console.error("Auth is not defined!"),new Error("Auth is not defined!");return(await fb(en,VP)).user}catch(i){throw console.error("Error signing in with Google. Code:",i.code,"Message:",i.message),i}},Bv=async(i,e,t=0)=>{try{if(en.currentUser&&en.currentUser.email&&en.currentUser.email.toLowerCase()===i.toLowerCase())return console.log("User already logged in, skipping manual sign-in."),en.currentUser;console.log(`Attempting sign in with email: ${i} (Attempt ${t+1})`);const n=await Hw(en,i,e);return console.log("Sign in successful"),n.user}catch(n){if(n.code==="auth/network-request-failed"&&t<3)return console.warn(`Network error detected (Attempt ${t+1}). Retrying in 2s...`),await new Promise(r=>setTimeout(r,2e3)),Bv(i,e,t+1);if(n.code==="auth/invalid-credential"||n.code==="auth/user-not-found")try{console.log("User might not exist, attempting to create account...");const r=await Gw(en,i,e);return console.log("Account created and signed in successfully"),r.user}catch(r){throw r.code==="auth/email-already-in-use"?(console.error("Account exists, but wrong password was provided."),new Error("Incorrect password. Please try again.")):r}throw console.error("Error signing in with email. Code:",n.code,"Message:",n.message),n}},zP=async()=>{try{await jw(en)}catch(i){throw console.error("Error signing out",i),i}},zn=(i,e="success")=>{const t=document.createElement("div");t.innerText=i,t.className="custom-toast",t.style.position="fixed",t.style.bottom="100px",t.style.left="50%",t.style.transform="translateX(-50%)",t.style.background=e==="error"?"#ff4444":"var(--gold-gradient)",t.style.color=e==="error"?"white":"var(--bg-color)",t.style.padding="15px 30px",t.style.borderRadius="30px",t.style.zIndex="10000",t.style.boxShadow="0 10px 30px rgba(0,0,0,0.5)",t.style.fontWeight="bold",t.style.textAlign="center",t.style.minWidth="300px",t.style.opacity="0",t.style.transition="opacity 0.5s ease, transform 0.5s ease",document.body.appendChild(t),setTimeout(()=>{t.style.opacity="1",t.style.transform="translateX(-50%) translateY(-10px)"},10),setTimeout(()=>{t.style.opacity="0",t.style.transform="translateX(-50%) translateY(0)",setTimeout(()=>t.remove(),500)},4e3)},Lm=(i,e)=>{const t=document.createElement("div");t.className="custom-confirm-overlay",t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.background="rgba(0,0,0,0.85)",t.style.zIndex="20000",t.style.display="flex",t.style.alignItems="center",t.style.justifyContent="center",t.style.backdropFilter="blur(10px)";const n=document.createElement("div");n.style.background="#111",n.style.border="1px solid var(--primary-color)",n.style.padding="40px",n.style.borderRadius="20px",n.style.maxWidth="400px",n.style.textAlign="center",n.style.boxShadow="0 20px 50px rgba(0,0,0,0.5)",n.innerHTML=`
        <h3 style="margin-bottom: 20px; color: var(--primary-color); font-size: 1.5rem;">Confirm Action</h3>
        <p style="margin-bottom: 30px; color: white; opacity: 0.9; line-height: 1.6;">${i}</p>
        <div style="display: flex; gap: 15px; justify-content: center;">
            <button class="btn btn-primary btn-sm" id="confirmYes" style="background: #ff4444; border-color: #ff4444;">Yes, Proceed</button>
            <button class="btn btn-secondary btn-sm" id="confirmNo">Cancel</button>
        </div>
    `,t.appendChild(n),document.body.appendChild(t),t.querySelector("#confirmYes").onclick=()=>{e(),document.body.removeChild(t)},t.querySelector("#confirmNo").onclick=()=>{document.body.removeChild(t)}},GP=()=>{const i=document.getElementById("three-canvas-container");if(!i)return;const e=new X0,t=new Cn(75,window.innerWidth/window.innerHeight,.1,1e3),n=new oA({antialias:!0,alpha:!0});n.setSize(window.innerWidth,window.innerHeight),n.setPixelRatio(window.devicePixelRatio),i.appendChild(n.domElement);const r=new Yn,s=2e3,o=new Float32Array(s*3);for(let d=0;d<s*3;d++)o[d]=(Math.random()-.5)*10;r.setAttribute("position",new Xn(o,3));const c=new sg({size:.01,color:13938487,transparent:!0,opacity:.6,blending:au}),l=new ny(r,c);e.add(l),console.log("3D Background Initialized"),t.position.z=2;let u=0,h=0;document.addEventListener("mousemove",d=>{u=d.clientX/window.innerWidth-.5,h=d.clientY/window.innerHeight-.5});const f=()=>{requestAnimationFrame(f),l.rotation.y+=.001,l.rotation.x+=5e-4,l.position.x+=(u*.1-l.position.x)*.05,l.position.y+=(-h*.1-l.position.y)*.05,n.render(e,t)};f(),window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)})};document.addEventListener("DOMContentLoaded",()=>{GP()});document.addEventListener("DOMContentLoaded",()=>{const i=document.getElementById("navbar"),e=document.querySelector(".hamburger"),t=document.querySelector(".nav-links"),n=document.querySelectorAll(".nav-links a");document.getElementById("openAddModal"),window.addEventListener("scroll",()=>{i&&(window.scrollY>50?i.classList.add("sticky"):i.classList.remove("sticky"))}),e&&t&&e.addEventListener("click",()=>{e.classList.toggle("active"),t.classList.toggle("active");const V=e.querySelectorAll("span");V.length>=3&&(t.classList.contains("active")?(V[0].style.transform="rotate(45deg) translate(5px, 5px)",V[1].style.opacity="0",V[2].style.transform="rotate(-45deg) translate(7px, -7px)"):(V[0].style.transform="none",V[1].style.opacity="1",V[2].style.transform="none"))}),n&&e&&t&&n.forEach(V=>{V.addEventListener("click",()=>{e.classList.remove("active"),t.classList.remove("active");const G=e.querySelectorAll("span");G.length>=3&&(G.forEach(Q=>Q.style.transform="none"),G[1].style.opacity="1")})}),document.querySelectorAll('a[href^="#"]').forEach(V=>{V.addEventListener("click",function(G){const Q=this.getAttribute("href");if(Q!=="#"){G.preventDefault();try{const re=document.querySelector(Q);re&&re.scrollIntoView({behavior:"smooth"})}catch{console.warn("Invalid selector:",Q)}}})});const r=document.getElementById("contactForm");r&&r.addEventListener("submit",V=>{V.preventDefault();const G=r.querySelector("button"),Q=G.innerText;G.innerText="Sending...",G.disabled=!0,setTimeout(()=>{const re=document.createElement("div");re.className="form-success",re.innerText="Inquiry received. Our elite team will contact you shortly.",re.style.color="var(--primary-color)",re.style.marginTop="20px",re.style.textAlign="center",re.style.fontWeight="600",r.appendChild(re),r.reset(),G.innerText="Sent Successfully",setTimeout(()=>{re.remove(),G.innerText=Q,G.disabled=!1},5e3)},1500)});const s=document.querySelector(".scroll-progress");s&&window.addEventListener("scroll",()=>{const V=document.body.scrollTop||document.documentElement.scrollTop,G=document.documentElement.scrollHeight-document.documentElement.clientHeight,Q=V/G*100;s.style.width=Q+"%"});const o=document.createElement("button");o.innerHTML="↑",o.className="scroll-top-btn",document.body.appendChild(o),window.addEventListener("scroll",()=>{window.scrollY>500?o.classList.add("visible"):o.classList.remove("visible")}),o.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const c=document.querySelector(".hero-bg-video");c&&window.addEventListener("scroll",()=>{const V=window.pageYOffset;c.style.transform=`translateY(${V*.5}px)`});const l=document.getElementById("scrollDown");l&&l.addEventListener("click",()=>{const V=document.querySelector(".stats");V&&V.scrollIntoView({behavior:"smooth"})});const u=document.querySelector(".cta-bg-glow");u&&window.addEventListener("scroll",()=>{const V=window.pageYOffset,G=document.querySelector(".cta-section").offsetTop;V>G-window.innerHeight&&(u.style.transform=`translate(-50%, -50%) translateY(${(V-G)*.2}px)`)});const h=document.getElementById("adminModal");document.getElementById("adminLoginLink");const f=document.getElementById("closeAdminModal"),d=document.getElementById("adminLoginForm"),g=document.getElementById("googleSignInBtn"),x=document.getElementById("adminEmail"),b=document.getElementById("adminPassword");document.getElementById("adminManageBtn");const _=document.getElementById("adminLogoutBtn");document.getElementById("clearMarketplaceBtn"),document.getElementById("adminManageDesc");const v=document.getElementById("addWebsiteModal"),R=document.getElementById("closeAddModal"),N=document.getElementById("addWebsiteForm"),L=document.getElementById("marketplaceGrid");let U=!1,F=null,A=null;const m=async()=>{try{await zP(),U=!1,y()}catch(V){console.error("Error logging out",V)}},y=()=>{console.log("Updating Admin UI. isAdmin:",U);const V=document.getElementById("adminManageBtn"),G=document.getElementById("adminManageDesc"),Q=document.getElementById("adminLoginLink"),re=document.querySelector(".admin-management-section");U?(document.body.classList.add("is-admin"),re&&(re.style.display="block")):(document.body.classList.remove("is-admin"),re&&(re.style.display="none")),V&&(U?(V.innerText="Add New Website to Marketplace",V.style.display="inline-flex",V.onclick=We=>{We.preventDefault(),console.log("Add New Website button clicked"),v?v.style.display="block":console.error("addWebsiteModal not found in DOM")},G&&(G.innerText="Welcome, Administrator. You can now add new websites to your marketplace.")):(V.style.display="none",G&&(G.innerText="Exclusive access for QuickSite administrators.")));const he=document.getElementById("clearMarketplaceBtn");he&&(he.style.display=U?"inline-flex":"none",he.onclick=We=>{We.preventDefault(),console.log("Clear Marketplace button clicked"),Lm("Are you sure you want to clear ALL dynamic marketplace listings? This cannot be undone.",async()=>{try{const ge=ou(Ja(Is,"marketplaceItems")),qe=(await bP(ge)).docs.map(Fe=>Pm(Fe.ref));await Promise.all(qe),zn("Marketplace cleared successfully.")}catch(ge){q(ge,Y.DELETE,"marketplaceItems")}})});const fe=document.getElementById("adminLogoutBtn");fe&&(fe.style.display=U?"inline-flex":"none"),Q&&(U?(Q.innerText="Admin Logout",Q.style.opacity="1",Q.onclick=async We=>{We.preventDefault(),await m()}):(Q.innerText="Admin Login",Q.style.opacity="0.5",Q.style.cursor="pointer",Q.style.pointerEvents="auto",Q.onclick=We=>{We.preventDefault();const ge=document.getElementById("adminModal");ge&&(ge.style.display="block")}))};let P=null;$w(en,V=>{if(!(V&&V.uid===P)){if(P=V?V.uid:null,console.log("Auth state changed:",V?`logged in (${V.email})`:"logged out"),V){const G=V.email?V.email.toLowerCase().trim():"";if(console.log("Checking admin privileges for:",G),["michaelmulili41@gmail.com","michael.mulili@quicksite.com","michael.michael@quicksite.com"].includes(G)){console.log("Admin access granted for:",G),U=!0,document.body.classList.add("is-admin");const re=document.getElementById("adminModal");if(re&&(re.style.display="none"),new URLSearchParams(window.location.search).get("action")==="addWebsite"){const fe=document.getElementById("addWebsiteModal");fe&&(fe.style.display="block"),window.history.replaceState({},document.title,window.location.pathname)}else window.location.pathname.includes("portfolio.html")}else{console.warn("Access denied for non-admin user:",G),U=!1,document.body.classList.remove("is-admin");const re=document.getElementById("adminModal");re&&re.style.display==="block"&&(zn("Access Denied: Your account ("+G+") does not have administrator privileges.","error"),m())}}else U=!1,document.body.classList.remove("is-admin");y(),L&&J(),document.getElementById("liveSlider")&&M()}}),y(),h&&f&&(f.onclick=()=>h.style.display="none"),d&&x&&b&&d.addEventListener("submit",async V=>{V.preventDefault();const G=document.getElementById("loadingOverlay");G&&(G.style.display="flex");const Q=x.value,re=b.value;try{await Bv(Q,re),G&&(G.style.display="none")}catch(he){if(G&&(G.style.display="none"),U){console.log("Manual login failed but user is authenticated. Ignoring error.");return}console.error("Login error:",he),he.code==="auth/network-request-failed"?zn("Login failed: Network request blocked. "+(Fc?"":" (DIAGNOSTIC: Firebase Auth endpoint is currently unreachable from your browser. This is almost certainly caused by an ad-blocker or firewall.)")+" Please disable extensions and try again.","error"):he.code==="auth/invalid-credential"?zn("Login failed: Invalid email or password.","error"):zn("Login failed: "+he.message,"error")}}),g&&(g.onclick=async V=>{V&&V.preventDefault();const G=document.getElementById("loadingOverlay");G&&(G.style.display="flex");try{await BP(),G&&(G.style.display="none")}catch(Q){if(G&&(G.style.display="none"),U){console.log("Manual Google login failed but user is authenticated. Ignoring error.");return}console.error("Google Sign In error:",Q),Q.code==="auth/network-request-failed"?zn("Sign In failed: Network request blocked. "+(Fc?"":" (DIAGNOSTIC: Firebase Auth endpoint is currently unreachable from your browser.)")+" Please disable extensions and try again.","error"):Q.code==="auth/popup-blocked"?zn("Sign In failed: Popup blocked. Please allow popups for this site.","error"):zn("Sign In failed: "+Q.message,"error")}}),_&&(_.onclick=async V=>{V.preventDefault(),console.log("Admin Logout button clicked"),await m()}),v&&R&&(R.onclick=()=>v.style.display="none",window.addEventListener("click",V=>{V.target===v&&(v.style.display="none")})),N&&N.addEventListener("submit",async V=>{if(V.preventDefault(),!U){zn("Unauthorized: Only administrators can list websites.","error");return}const G=document.getElementById("siteName").value,Q=document.getElementById("siteCategory").value,re=document.getElementById("sitePrice").value,he=document.getElementById("siteDesc").value,fe=document.getElementById("siteImage").value,We=document.getElementById("siteLink").value;let ge=fe||"https://picsum.photos/seed/placeholder/600/400";const we=ge.toLowerCase(),qe=window.location.protocol==="https:",Fe=we.includes("localhost")||we.includes("127.0.0.1")||we.includes("192.168.");qe&&Fe?console.warn(`Local URL ${ge} will be blocked by browser PNA policy on secure origins.`):ge.startsWith("http://")&&!Fe&&(ge=ge.replace("http://","https://"));const ct=N.querySelector('button[type="submit"]'),O=ct.innerText;ct.innerText="Submitting...",ct.disabled=!0;try{await IP(Ja(Is,"marketplaceItems"),{name:G,category:Q,price:re,desc:he,img:ge,link:We,createdAt:SP()}),N.reset(),v&&(v.style.display="none"),zn("Website submitted successfully!")}catch(rt){q(rt,Y.WRITE,"marketplaceItems")}finally{ct.innerText=O,ct.disabled=!1}});let T;const C=()=>{const V=document.getElementById("liveSlider"),G=document.getElementById("prevSlide"),Q=document.getElementById("nextSlide");if(V&&G&&Q){T&&clearInterval(T);let re=0;const fe=V.querySelectorAll(".slide").length;if(fe>0){const We=()=>{V.style.transform=`translateX(-${re*100}%)`};Q.onclick=()=>{re=(re+1)%fe,We()},G.onclick=()=>{re=(re-1+fe)%fe,We()},T=setInterval(()=>{re=(re+1)%fe,We()},5e3)}}},M=()=>{const V=document.getElementById("liveSlider");if(!V)return;A&&(A(),A=null);const G=ou(Ja(Is,"marketplaceItems"),Im("createdAt","desc"));A=Dm(G,Q=>{V.querySelectorAll(".dynamic-slide").forEach(he=>he.remove()),Q.forEach(he=>{const fe=he.data();if(!fe)return;const We=fe.name||"Unnamed Project",ge=fe.desc||"Premium digital asset.";let we=fe.img||"https://picsum.photos/seed/placeholder/1200/600";const qe=we.toLowerCase(),Fe=window.location.protocol==="https:",ct=qe.includes("localhost")||qe.includes("127.0.0.1")||qe.includes("192.168.");Fe&&ct?(console.warn(`Local URL ${we} blocked by browser PNA policy. Using placeholder.`),we=`https://picsum.photos/seed/${encodeURIComponent(We)}/1200/600`):we.startsWith("http://")&&!ct&&(we=we.replace("http://","https://"));const O=document.createElement("div");O.className="slide dynamic-slide",O.innerHTML=`
                    <div class="slide-content">
                        <img src="${we}" alt="${We}" onerror="this.src='https://picsum.photos/seed/error/1200/600'" referrerPolicy="no-referrer">
                        <div class="slide-info">
                            <span class="slide-tag">Marketplace</span>
                            <h3>${We}</h3>
                            <p>${ge}</p>
                            <a href="portfolio.html?site=${encodeURIComponent(We)}" class="btn btn-primary btn-sm">Visit Site</a>
                        </div>
                    </div>
                `,V.insertBefore(O,V.firstChild)}),C()})};C();const Y={DELETE:"delete",LIST:"list",WRITE:"write"},q=(V,G,Q)=>{var he,fe,We,ge,we,qe;const re={error:V instanceof Error?V.message:String(V),authInfo:{userId:(he=en.currentUser)==null?void 0:he.uid,email:(fe=en.currentUser)==null?void 0:fe.email,emailVerified:(We=en.currentUser)==null?void 0:We.emailVerified,isAnonymous:(ge=en.currentUser)==null?void 0:ge.isAnonymous,tenantId:(we=en.currentUser)==null?void 0:we.tenantId,providerInfo:((qe=en.currentUser)==null?void 0:qe.providerData.map(Fe=>({providerId:Fe.providerId,displayName:Fe.displayName,email:Fe.email,photoUrl:Fe.photoURL})))||[]},operationType:G,path:Q};if(console.error("Firestore Error: ",JSON.stringify(re)),re.error.includes("Could not reach Cloud Firestore backend")||re.error.includes("the client is offline")){const Fe=document.createElement("div");Fe.className="container firestore-error-msg",Fe.style.color="#ff4444",Fe.style.padding="20px",Fe.style.textAlign="center",Fe.innerHTML=`
                <p><strong>Database Connection Error:</strong> We could not reach the marketplace database.</p>
                <p style="font-size: 0.8rem; opacity: 0.8; margin-bottom: 15px;">This is often caused by an Ad Blocker (like uBlock Origin) or <strong>Brave Shields</strong> blocking the connection. Please try disabling them or refreshing the page.</p>
                <button class="btn btn-secondary btn-sm" onclick="location.reload()">Retry Connection</button>
            `,L&&(document.querySelectorAll(".firestore-error-msg").forEach(O=>O.remove()),L.parentElement.insertBefore(Fe,L))}throw new Error(JSON.stringify(re))},J=()=>{if(!L)return;F&&(F(),F=null);const V=ou(Ja(Is,"marketplaceItems"),Im("createdAt","desc"));F=Dm(V,G=>{L.querySelectorAll(".dynamic-item").forEach(re=>re.remove()),G.forEach(re=>{const he=re.data();if(!he)return;const fe=he.name||"Unnamed Project",We=he.price||"0",ge=he.desc||"No description available.";let we=he.img||"https://picsum.photos/seed/placeholder/600/400";const qe=we.toLowerCase(),Fe=window.location.protocol==="https:",ct=qe.includes("localhost")||qe.includes("127.0.0.1")||qe.includes("192.168.");Fe&&ct?(console.warn(`Local URL ${we} blocked by browser PNA policy. Using placeholder.`),we=`https://picsum.photos/seed/${encodeURIComponent(fe)}/600/400`):we.startsWith("http://")&&!ct&&(we=we.replace("http://","https://"));const O=document.createElement("div");O.className="marketplace-item dynamic-item";const rt=isNaN(Number(We))?We:Number(We).toLocaleString(),Ke=U?`
                    <button class="delete-item-btn admin-only block" data-id="${re.id}" title="Delete Listing" style="position: absolute; top: 10px; right: 10px; background: rgba(255,0,0,0.7); color: white; border: none; border-radius: 50%; width: 30px; height: 30px; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 10;">
                        <i data-lucide="trash-2" style="width: 16px; height: 16px;"></i>
                    </button>
                `:"";if(O.innerHTML=`
                    <div class="item-badge">For Sale</div>
                    ${Ke}
                    <img src="${we}" alt="${fe}" onerror="this.src='https://picsum.photos/seed/error/600/400'">
                    <div class="item-content">
                        <div class="item-header">
                            <div>
                                <h3 style="margin-bottom: 5px;">${fe}</h3>
                                <span style="font-size: 0.7rem; color: var(--primary-color); text-transform: uppercase; letter-spacing: 1px;">${he.category||"Website"}</span>
                            </div>
                            <span class="price-tag">KSh ${rt}</span>
                        </div>
                        <p>${ge}</p>
                        <div class="item-footer">
                            <a href="portfolio.html?site=${encodeURIComponent(fe)}" class="btn btn-secondary btn-sm">View Details</a>
                            <a href="${he.link||"#"}" class="btn btn-primary btn-sm" target="_blank">Live Demo</a>
                        </div>
                    </div>
                `,U){const Ne=O.querySelector(".delete-item-btn");Ne&&(Ne.onclick=D=>{D.preventDefault(),D.stopPropagation();const S=Ne.getAttribute("data-id");Lm(`Are you sure you want to delete "${fe}"?`,async()=>{try{await Pm(wd(Is,"marketplaceItems",S)),zn("Item deleted successfully.")}catch(B){q(B,Y.DELETE,"marketplaceItems/"+S)}})})}const pt=L.querySelector(".marketplace-item:not(.dynamic-item)");pt?L.insertBefore(O,pt):L.appendChild(O)}),window.lucide&&window.lucide.createIcons()},G=>{q(G,Y.LIST,"marketplaceItems")})},H=document.querySelector(".cursor-dot"),le=document.querySelector(".cursor-outline");H&&le&&(window.addEventListener("mousemove",G=>{const Q=G.clientX,re=G.clientY;H.style.left=`${Q}px`,H.style.top=`${re}px`,le.animate({left:`${Q}px`,top:`${re}px`},{duration:500,fill:"forwards"})}),document.querySelectorAll("a, button, .logo, .nav-links li, .stat-item, .bento-item, .gallery-item, .social-links a").forEach(G=>{G.addEventListener("mouseenter",()=>{H.classList.add("active"),le.classList.add("active")}),G.addEventListener("mouseleave",()=>{H.classList.remove("active"),le.classList.remove("active")})}));const ae=document.querySelectorAll(".reveal"),Ae={threshold:.15,rootMargin:"0px 0px -50px 0px"},Pe=new IntersectionObserver((V,G)=>{V.forEach(Q=>{Q.isIntersecting&&(Q.target.classList.add("active"),Q.target.classList.contains("stats")&&Me(),G.unobserve(Q.target))})},Ae);ae.forEach(V=>{!V.classList.contains("reveal-left")&&!V.classList.contains("reveal-right")&&V.classList.add("reveal-up"),Pe.observe(V)});const Me=()=>{const V=document.querySelectorAll(".stat-item h3");V.length&&V.forEach(G=>{const Q=G.innerText,re=parseInt(Q);if(isNaN(re))return;let he=0;const We=re/(2e3/16),ge=()=>{if(he<re){he+=We;const we=Q.includes("+")?"+":Q.includes("%")?"%":"";G.innerText=Math.ceil(he)+we,requestAnimationFrame(ge)}else{const we=Q.includes("+")?"+":Q.includes("%")?"%":"";G.innerText=re+we}};ge()})},Qe=document.querySelector(".hero-content");Qe&&window.addEventListener("mousemove",V=>{const G=(V.clientX-window.innerWidth/2)*.01,Q=(V.clientY-window.innerHeight/2)*.01;Qe.style.transform=`translate(${G}px, ${Q}px)`}),(()=>{const G=new URLSearchParams(window.location.search).get("site");if(G&&window.location.pathname.includes("portfolio.html")){const Q=document.querySelector(".page-header h1"),re=document.querySelector(".page-header p");if(Q&&(Q.innerHTML=`<span>${G}</span>`),re){re.innerText=`Detailed overview of the ${G} digital masterpiece. Crafted with precision for Nairobi's elite.`;const ge=document.createElement("a");ge.href="portfolio.html",ge.className="btn btn-primary btn-sm",ge.style.marginTop="20px",ge.innerText="← Back to All Projects",re.parentNode.appendChild(ge)}let fe={"Safari Luxury Estates":[{url:"https://picsum.photos/seed/safari1/800/500",cap:"Elegant Property Listings"},{url:"https://picsum.photos/seed/safari2/800/500",cap:"Interactive Map Integration"},{url:"https://picsum.photos/seed/safari3/800/500",cap:"Luxury Interior Showcases"},{url:"https://picsum.photos/seed/safari4/800/500",cap:"Mobile-First Responsive Design"}],"Nairobi Legal Elite":[{url:"https://picsum.photos/seed/legal1/800/500",cap:"Professional Attorney Profiles"},{url:"https://picsum.photos/seed/legal2/800/500",cap:"Secure Client Portal"},{url:"https://picsum.photos/seed/legal3/800/500",cap:"Resourceful Legal Blog"},{url:"https://picsum.photos/seed/legal4/800/500",cap:"Streamlined Appointment Booking"}],"Zuri Fashion House":[{url:"https://picsum.photos/seed/fashion1/800/500",cap:"High-Resolution Lookbooks"},{url:"https://picsum.photos/seed/fashion2/800/500",cap:"Seamless Checkout Experience"},{url:"https://picsum.photos/seed/fashion3/800/500",cap:"Dynamic Product Filtering"},{url:"https://picsum.photos/seed/fashion4/800/500",cap:"Instagram Feed Integration"}],"Fashion Hub Pro":[{url:"https://picsum.photos/seed/hub1/800/500",cap:"E-commerce Dashboard"},{url:"https://picsum.photos/seed/hub2/800/500",cap:"Inventory Management"},{url:"https://picsum.photos/seed/hub3/800/500",cap:"Customer Reviews System"},{url:"https://picsum.photos/seed/hub4/800/500",cap:"M-Pesa API Integration"}],"Property Pulse":[{url:"https://picsum.photos/seed/pulse1/800/500",cap:"Real-time Property Alerts"},{url:"https://picsum.photos/seed/pulse2/800/500",cap:"Agent Management System"},{url:"https://picsum.photos/seed/pulse3/800/500",cap:"Virtual Tour Support"},{url:"https://picsum.photos/seed/pulse4/800/500",cap:"Lead Generation Forms"}],"Serengeti Elite":[{url:"https://picsum.photos/seed/resort1/800/500",cap:"Luxury Suite Booking"},{url:"https://picsum.photos/seed/resort2/800/500",cap:"Safari Experience Planner"},{url:"https://picsum.photos/seed/resort3/800/500",cap:"Exclusive Member Lounge"},{url:"https://picsum.photos/seed/resort4/800/500",cap:"Interactive Resort Map"}],"Nairobi Chambers":[{url:"https://picsum.photos/seed/law1/800/500",cap:"Corporate Law Portal"},{url:"https://picsum.photos/seed/law2/800/500",cap:"Secure Document Vault"},{url:"https://picsum.photos/seed/law3/800/500",cap:"Expert Legal Team"},{url:"https://picsum.photos/seed/law4/800/500",cap:"Case Management System"}]}[G];if(!fe){const ge=encodeURIComponent(G.replace(/\s+/g,""));fe=[{url:`https://picsum.photos/seed/${ge}1/800/500`,cap:"Homepage Overview"},{url:`https://picsum.photos/seed/${ge}2/800/500`,cap:"Core Features"},{url:`https://picsum.photos/seed/${ge}3/800/500`,cap:"User Dashboard"},{url:`https://picsum.photos/seed/${ge}4/800/500`,cap:"Mobile Responsive View"}]}if(fe){const ge=document.createElement("section");ge.className="site-gallery-section",ge.innerHTML=`
                    <div class="container">
                        <div class="section-header">
                            <h2>Project <span>Gallery</span></h2>
                            <p>Visual highlights of the ${G} digital experience.</p>
                        </div>
                        <div class="gallery-grid">
                            ${fe.map(qe=>`
                                <div class="gallery-item">
                                    <img src="${qe.url}" alt="${qe.cap}" referrerPolicy="no-referrer">
                                    <div class="gallery-caption">${qe.cap}</div>
                                </div>
                            `).join("")}
                        </div>
                    </div>
                `;const we=document.querySelector(".page-header");we&&we.parentNode&&we.parentNode.insertBefore(ge,we.nextSibling)}window.scrollTo(0,0),document.querySelectorAll(".portfolio-item, .marketplace-item").forEach(ge=>{var qe;const we=(qe=ge.querySelector("h3"))==null?void 0:qe.innerText;we&&G.toLowerCase().includes(we.toLowerCase())&&(ge.scrollIntoView({behavior:"smooth",block:"center"}),ge.style.border="2px solid var(--primary-color)",ge.style.boxShadow="0 0 30px rgba(212, 175, 55, 0.3)")})}})(),(()=>{const G=new URLSearchParams(window.location.search).get("id");if(G&&window.location.pathname.includes("blog-post.html")){const re={"luxury-web-design":{date:"April 1, 2026",title:"The Evolution of Luxury Web Design in Kenya",subtitle:"How high-end brands are redefining the digital experience through minimalist aesthetics and gold-standard UI.",img:"https://picsum.photos/seed/luxury-tech/1200/600",content:`
                        <p>In the rapidly evolving digital landscape of Nairobi, a new standard for web design is emerging. No longer is it enough to simply have a functional website; for Kenya's elite brands, the digital presence must be an extension of their physical prestige.</p>
                        
                        <h2>The Shift to Minimalism</h2>
                        <p>We are seeing a significant move away from cluttered, information-heavy layouts toward minimalist, "breathing" designs. This aesthetic choice isn't just about style—it's about clarity and focus. By stripping away the non-essential, brands can highlight their core values and premium offerings with greater impact.</p>
                        
                        <blockquote>"Luxury is not about more; it's about the right things, presented perfectly."</blockquote>
                        
                        <h2>Gold-Standard UI/UX</h2>
                        <p>User experience in the luxury sector requires a different approach. It's about the 'digital concierge' experience—anticipating the user's needs and providing a seamless, frictionless journey. From smooth scroll animations to intuitive navigation, every interaction is an opportunity to reinforce the brand's commitment to excellence.</p>
                        
                        <h2>The Kenyan Context</h2>
                        <p>What makes luxury web design unique in Kenya is the integration of local cultural elements with global design standards. Whether it's the subtle use of traditional patterns in a modern context or the optimization for high-end mobile devices, the goal is to create a digital asset that feels both international and deeply rooted in the Kenyan market.</p>
                    `},"mpesa-integration":{date:"March 25, 2026",title:"Integrating M-Pesa for High-Value Transactions",subtitle:"A strategic guide to handling premium payments securely and efficiently in the Kenyan market.",img:"https://picsum.photos/seed/fintech-gold/1200/600",content:`
                        <p>M-Pesa has revolutionized commerce in Kenya, but for high-end businesses, the integration must go beyond basic functionality. It requires a sophisticated approach that prioritizes security, user trust, and seamless brand alignment.</p>
                        
                        <h2>Security First</h2>
                        <p>When dealing with high-value transactions, security is paramount. Implementing robust API integrations with real-time verification and multi-factor authentication is non-negotiable. Our approach ensures that both the business and the client are protected at every step of the payment process.</p>
                        
                        <blockquote>"Trust is the ultimate currency in high-value digital transactions."</blockquote>
                        
                        <h2>Seamless User Experience</h2>
                        <p>The payment process should never feel like a hurdle. By integrating M-Pesa directly into the checkout flow with custom-styled interfaces, we maintain the premium feel of the brand even during the transaction phase. No jarring redirects, just a smooth, integrated experience.</p>
                        
                        <h2>Reporting and Analytics</h2>
                        <p>For elite businesses, data is key. Our integrations provide detailed transaction reporting and real-time analytics, allowing business owners to monitor their revenue streams with precision and make informed strategic decisions.</p>
                    `},"strategic-seo":{date:"March 15, 2026",title:"Strategic SEO for Nairobi's Prestigious Brands",subtitle:"How to position your brand at the pinnacle of search results for high-intent, high-value keywords.",img:"https://picsum.photos/seed/nairobi-skyline/1200/600",content:`
                        <p>In the competitive markets of Nairobi and beyond, being visible is not enough. You must be visible to the right people at the right time. Strategic SEO for luxury brands is about quality over quantity.</p>
                        
                        <h2>Targeting High-Intent Keywords</h2>
                        <p>Instead of chasing broad, high-volume search terms, we focus on high-intent, niche keywords that align with the search behavior of high-net-worth individuals. This ensures that the traffic coming to your site is qualified and more likely to convert.</p>
                        
                        <blockquote>"SEO is not just about being found; it's about being found by those who matter most to your brand."</blockquote>
                        
                        <h2>Content as Authority</h2>
                        <p>Search engines reward authority. By creating high-quality, insightful content that positions your brand as a thought leader in your industry, we not only improve your search rankings but also build deep trust with your audience.</p>
                        
                        <h2>Technical Excellence</h2>
                        <p>Luxury SEO also involves technical perfection. Fast loading speeds, mobile optimization, and secure hosting are all signals that search engines use to rank sites. For a premium brand, these technical details are the foundation of digital success.</p>
                    `}}[G];if(re){document.title=`${re.title} | QuickSite Kenya`;const he=document.getElementById("post-date"),fe=document.getElementById("post-title"),We=document.getElementById("post-subtitle"),ge=document.getElementById("post-img-container"),we=document.getElementById("post-body");he&&(he.innerText=re.date),fe&&(fe.innerText=re.title),We&&(We.innerText=re.subtitle),ge&&(ge.innerHTML=`<img src="${re.img}" alt="${re.title}" referrerPolicy="no-referrer">`),we&&(we.innerHTML=re.content),window.lucide&&window.lucide.createIcons()}else{const he=document.getElementById("post-title"),fe=document.getElementById("post-subtitle");he&&(he.innerText="Article Not Found"),fe&&(fe.innerText="The requested article could not be located.")}}})()});

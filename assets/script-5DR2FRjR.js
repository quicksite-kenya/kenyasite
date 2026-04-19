import{k as ti,q as rn,m as ni,c as Bt,u as ko,b as Bn,d as Mt,s as ci,f as Xi,o as kf,j as Of,i as Gf,h as Cn,l as Vf,w as Xr,n as pl,g as Oo,a as po}from"./firebase-BIUChNWT.js";/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const za="183",Hf=0,ml=1,zf=2,gr=1,Wf=2,Ao=3,hi=0,Qt=1,zn=2,qn=0,Ki=1,Ds=2,gl=3,_l=4,qf=5,Mi=100,$f=101,Xf=102,Yf=103,Jf=104,Kf=200,Zf=201,Qf=202,jf=203,Ls=204,Us=205,eh=206,th=207,nh=208,ih=209,oh=210,rh=211,sh=212,ah=213,lh=214,Fs=0,Bs=1,ks=2,eo=3,Os=4,Gs=5,Vs=6,Hs=7,od=0,ch=1,uh=2,Nn=0,rd=1,sd=2,ad=3,ld=4,cd=5,ud=6,dd=7,fd=300,wi=301,to=302,Yr=303,Jr=304,Ur=306,zs=1e3,Wn=1001,Ws=1002,Vt=1003,dh=1004,Go=1005,qt=1006,Kr=1007,Ci=1008,cn=1009,hd=1010,pd=1011,wo=1012,Wa=1013,Ln=1014,bn=1015,Xn=1016,qa=1017,$a=1018,Ro=1020,md=35902,gd=35899,_d=1021,vd=1022,yn=1023,Yn=1026,Ii=1027,yd=1028,Xa=1029,no=1030,Ya=1031,Ja=1033,_r=33776,vr=33777,yr=33778,Er=33779,qs=35840,$s=35841,Xs=35842,Ys=35843,Js=36196,Ks=37492,Zs=37496,Qs=37488,js=37489,ea=37490,ta=37491,na=37808,ia=37809,oa=37810,ra=37811,sa=37812,aa=37813,la=37814,ca=37815,ua=37816,da=37817,fa=37818,ha=37819,pa=37820,ma=37821,ga=36492,_a=36494,va=36495,ya=36283,Ea=36284,Sa=36285,xa=36286,fh=3200,hh=0,ph=1,ui="",an="srgb",io="srgb-linear",Mr="linear",gt="srgb",Ni=7680,vl=519,mh=512,gh=513,_h=514,Ka=515,vh=516,yh=517,Za=518,Eh=519,yl=35044,El="300 es",Pn=2e3,Ar=2001;function Sh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Cr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function xh(){const n=Cr("canvas");return n.style.display="block",n}const Sl={};function xl(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ed(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Xe(...n){n=Ed(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function rt(...n){n=Ed(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ir(...n){const e=n.join(" ");e in Sl||(Sl[e]=!0,Xe(...n))}function Th(n,e,t){return new Promise(function(i,o){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}const Mh={[Fs]:Bs,[ks]:Vs,[Os]:Hs,[eo]:Gs,[Bs]:Fs,[Vs]:ks,[Hs]:Os,[Gs]:eo};class ro{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const o=i[e];if(o!==void 0){const r=o.indexOf(t);r!==-1&&o.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let r=0,s=o.length;r<s;r++)o[r].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zr=Math.PI/180,Ta=180/Math.PI;function Po(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[n&255]+zt[n>>8&255]+zt[n>>16&255]+zt[n>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[t&63|128]+zt[t>>8&255]+"-"+zt[t>>16&255]+zt[t>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function ot(n,e,t){return Math.max(e,Math.min(t,n))}function Ah(n,e){return(n%e+e)%e}function Qr(n,e,t){return(1-t)*n+t*e}function mo(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class vt{constructor(e=0,t=0){vt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*i-s*o+e.x,this.y=r*o+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class so{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,r,s,l){let d=i[o+0],c=i[o+1],f=i[o+2],p=i[o+3],h=r[s+0],m=r[s+1],v=r[s+2],E=r[s+3];if(p!==E||d!==h||c!==m||f!==v){let g=d*h+c*m+f*v+p*E;g<0&&(h=-h,m=-m,v=-v,E=-E,g=-g);let _=1-l;if(g<.9995){const T=Math.acos(g),A=Math.sin(T);_=Math.sin(_*T)/A,l=Math.sin(l*T)/A,d=d*_+h*l,c=c*_+m*l,f=f*_+v*l,p=p*_+E*l}else{d=d*_+h*l,c=c*_+m*l,f=f*_+v*l,p=p*_+E*l;const T=1/Math.sqrt(d*d+c*c+f*f+p*p);d*=T,c*=T,f*=T,p*=T}}e[t]=d,e[t+1]=c,e[t+2]=f,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,o,r,s){const l=i[o],d=i[o+1],c=i[o+2],f=i[o+3],p=r[s],h=r[s+1],m=r[s+2],v=r[s+3];return e[t]=l*v+f*p+d*m-c*h,e[t+1]=d*v+f*h+c*p-l*m,e[t+2]=c*v+f*m+l*h-d*p,e[t+3]=f*v-l*p-d*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,r=e._z,s=e._order,l=Math.cos,d=Math.sin,c=l(i/2),f=l(o/2),p=l(r/2),h=d(i/2),m=d(o/2),v=d(r/2);switch(s){case"XYZ":this._x=h*f*p+c*m*v,this._y=c*m*p-h*f*v,this._z=c*f*v+h*m*p,this._w=c*f*p-h*m*v;break;case"YXZ":this._x=h*f*p+c*m*v,this._y=c*m*p-h*f*v,this._z=c*f*v-h*m*p,this._w=c*f*p+h*m*v;break;case"ZXY":this._x=h*f*p-c*m*v,this._y=c*m*p+h*f*v,this._z=c*f*v+h*m*p,this._w=c*f*p-h*m*v;break;case"ZYX":this._x=h*f*p-c*m*v,this._y=c*m*p+h*f*v,this._z=c*f*v-h*m*p,this._w=c*f*p+h*m*v;break;case"YZX":this._x=h*f*p+c*m*v,this._y=c*m*p+h*f*v,this._z=c*f*v-h*m*p,this._w=c*f*p-h*m*v;break;case"XZY":this._x=h*f*p-c*m*v,this._y=c*m*p-h*f*v,this._z=c*f*v+h*m*p,this._w=c*f*p+h*m*v;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],r=t[8],s=t[1],l=t[5],d=t[9],c=t[2],f=t[6],p=t[10],h=i+l+p;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(f-d)*m,this._y=(r-c)*m,this._z=(s-o)*m}else if(i>l&&i>p){const m=2*Math.sqrt(1+i-l-p);this._w=(f-d)/m,this._x=.25*m,this._y=(o+s)/m,this._z=(r+c)/m}else if(l>p){const m=2*Math.sqrt(1+l-i-p);this._w=(r-c)/m,this._x=(o+s)/m,this._y=.25*m,this._z=(d+f)/m}else{const m=2*Math.sqrt(1+p-i-l);this._w=(s-o)/m,this._x=(r+c)/m,this._y=(d+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,r=e._z,s=e._w,l=t._x,d=t._y,c=t._z,f=t._w;return this._x=i*f+s*l+o*c-r*d,this._y=o*f+s*d+r*l-i*c,this._z=r*f+s*c+i*d-o*l,this._w=s*f-i*l-o*d-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,o=e._y,r=e._z,s=e._w,l=this.dot(e);l<0&&(i=-i,o=-o,r=-r,s=-s,l=-l);let d=1-t;if(l<.9995){const c=Math.acos(l),f=Math.sin(c);d=Math.sin(d*c)/f,t=Math.sin(t*c)/f,this._x=this._x*d+i*t,this._y=this._y*d+o*t,this._z=this._z*d+r*t,this._w=this._w*d+s*t,this._onChangeCallback()}else this._x=this._x*d+i*t,this._y=this._y*d+o*t,this._z=this._z*d+r*t,this._w=this._w*d+s*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,t=0,i=0){J.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*o,this.y=r[1]*t+r[4]*i+r[7]*o,this.z=r[2]*t+r[5]*i+r[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,r=e.elements,s=1/(r[3]*t+r[7]*i+r[11]*o+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*o+r[12])*s,this.y=(r[1]*t+r[5]*i+r[9]*o+r[13])*s,this.z=(r[2]*t+r[6]*i+r[10]*o+r[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,r=e.x,s=e.y,l=e.z,d=e.w,c=2*(s*o-l*i),f=2*(l*t-r*o),p=2*(r*i-s*t);return this.x=t+d*c+s*p-l*f,this.y=i+d*f+l*c-r*p,this.z=o+d*p+r*f-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*o,this.y=r[1]*t+r[5]*i+r[9]*o,this.z=r[2]*t+r[6]*i+r[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,r=e.z,s=t.x,l=t.y,d=t.z;return this.x=o*d-r*l,this.y=r*s-i*d,this.z=i*l-o*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return jr.copy(this).projectOnVector(e),this.sub(jr)}reflect(e){return this.sub(jr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jr=new J,Tl=new so;class Ze{constructor(e,t,i,o,r,s,l,d,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,r,s,l,d,c)}set(e,t,i,o,r,s,l,d,c){const f=this.elements;return f[0]=e,f[1]=o,f[2]=l,f[3]=t,f[4]=r,f[5]=d,f[6]=i,f[7]=s,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,r=this.elements,s=i[0],l=i[3],d=i[6],c=i[1],f=i[4],p=i[7],h=i[2],m=i[5],v=i[8],E=o[0],g=o[3],_=o[6],T=o[1],A=o[4],C=o[7],w=o[2],M=o[5],P=o[8];return r[0]=s*E+l*T+d*w,r[3]=s*g+l*A+d*M,r[6]=s*_+l*C+d*P,r[1]=c*E+f*T+p*w,r[4]=c*g+f*A+p*M,r[7]=c*_+f*C+p*P,r[2]=h*E+m*T+v*w,r[5]=h*g+m*A+v*M,r[8]=h*_+m*C+v*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],r=e[3],s=e[4],l=e[5],d=e[6],c=e[7],f=e[8];return t*s*f-t*l*c-i*r*f+i*l*d+o*r*c-o*s*d}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],r=e[3],s=e[4],l=e[5],d=e[6],c=e[7],f=e[8],p=f*s-l*c,h=l*d-f*r,m=c*r-s*d,v=t*p+i*h+o*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/v;return e[0]=p*E,e[1]=(o*c-f*i)*E,e[2]=(l*i-o*s)*E,e[3]=h*E,e[4]=(f*t-o*d)*E,e[5]=(o*r-l*t)*E,e[6]=m*E,e[7]=(i*d-c*t)*E,e[8]=(s*t-i*r)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,r,s,l){const d=Math.cos(r),c=Math.sin(r);return this.set(i*d,i*c,-i*(d*s+c*l)+s+e,-o*c,o*d,-o*(-c*s+d*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(es.makeScale(e,t)),this}rotate(e){return this.premultiply(es.makeRotation(-e)),this}translate(e,t){return this.premultiply(es.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const es=new Ze,Ml=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Al=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ch(){const n={enabled:!0,workingColorSpace:io,spaces:{},convert:function(o,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===gt&&(o.r=$n(o.r),o.g=$n(o.g),o.b=$n(o.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(o.applyMatrix3(this.spaces[r].toXYZ),o.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===gt&&(o.r=Zi(o.r),o.g=Zi(o.g),o.b=Zi(o.b))),o},workingToColorSpace:function(o,r){return this.convert(o,this.workingColorSpace,r)},colorSpaceToWorking:function(o,r){return this.convert(o,r,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===ui?Mr:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,r=this.workingColorSpace){return o.fromArray(this.spaces[r].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,r,s){return o.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,r){return Ir("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,r)},toWorkingColorSpace:function(o,r){return Ir("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[io]:{primaries:e,whitePoint:i,transfer:Mr,toXYZ:Ml,fromXYZ:Al,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:Ml,fromXYZ:Al,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),n}const st=Ch();function $n(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Di;class Ih{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Di===void 0&&(Di=Cr("canvas")),Di.width=e.width,Di.height=e.height;const o=Di.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),i=Di}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Cr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),r=o.data;for(let s=0;s<r.length;s++)r[s]=$n(r[s]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor($n(t[i]/255)*255):t[i]=$n(t[i]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wh=0;class Qa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Po(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let r;if(Array.isArray(o)){r=[];for(let s=0,l=o.length;s<l;s++)o[s].isDataTexture?r.push(ts(o[s].image)):r.push(ts(o[s]))}else r=ts(o);i.url=r}return t||(e.images[this.uuid]=i),i}}function ts(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ih.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}let Rh=0;const ns=new J;class Jt extends ro{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,i=Wn,o=Wn,r=qt,s=Ci,l=yn,d=cn,c=Jt.DEFAULT_ANISOTROPY,f=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rh++}),this.uuid=Po(),this.name="",this.source=new Qa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=r,this.minFilter=s,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=d,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ns).x}get height(){return this.source.getSize(ns).y}get depth(){return this.source.getSize(ns).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&i&&o.isVector2&&i.isVector2||o&&i&&o.isVector3&&i.isVector3||o&&i&&o.isMatrix3&&i.isMatrix3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zs:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Ws:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zs:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Ws:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=fd;Jt.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,i=0,o=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*o+s[12]*r,this.y=s[1]*t+s[5]*i+s[9]*o+s[13]*r,this.z=s[2]*t+s[6]*i+s[10]*o+s[14]*r,this.w=s[3]*t+s[7]*i+s[11]*o+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,r;const d=e.elements,c=d[0],f=d[4],p=d[8],h=d[1],m=d[5],v=d[9],E=d[2],g=d[6],_=d[10];if(Math.abs(f-h)<.01&&Math.abs(p-E)<.01&&Math.abs(v-g)<.01){if(Math.abs(f+h)<.1&&Math.abs(p+E)<.1&&Math.abs(v+g)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,C=(m+1)/2,w=(_+1)/2,M=(f+h)/4,P=(p+E)/4,S=(v+g)/4;return A>C&&A>w?A<.01?(i=0,o=.707106781,r=.707106781):(i=Math.sqrt(A),o=M/i,r=P/i):C>w?C<.01?(i=.707106781,o=0,r=.707106781):(o=Math.sqrt(C),i=M/o,r=S/o):w<.01?(i=.707106781,o=.707106781,r=0):(r=Math.sqrt(w),i=P/r,o=S/r),this.set(i,o,r,t),this}let T=Math.sqrt((g-v)*(g-v)+(p-E)*(p-E)+(h-f)*(h-f));return Math.abs(T)<.001&&(T=1),this.x=(g-v)/T,this.y=(p-E)/T,this.z=(h-f)/T,this.w=Math.acos((c+m+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bh extends ro{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:i.depth},r=new Jt(o),s=i.count;for(let l=0;l<s;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,r=this.textures.length;o<r;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Qa(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends bh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Sd extends Jt{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ph extends Jt{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wt{constructor(e,t,i,o,r,s,l,d,c,f,p,h,m,v,E,g){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,r,s,l,d,c,f,p,h,m,v,E,g)}set(e,t,i,o,r,s,l,d,c,f,p,h,m,v,E,g){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=o,_[1]=r,_[5]=s,_[9]=l,_[13]=d,_[2]=c,_[6]=f,_[10]=p,_[14]=h,_[3]=m,_[7]=v,_[11]=E,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,o=1/Li.setFromMatrixColumn(e,0).length(),r=1/Li.setFromMatrixColumn(e,1).length(),s=1/Li.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,r=e.z,s=Math.cos(i),l=Math.sin(i),d=Math.cos(o),c=Math.sin(o),f=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const h=s*f,m=s*p,v=l*f,E=l*p;t[0]=d*f,t[4]=-d*p,t[8]=c,t[1]=m+v*c,t[5]=h-E*c,t[9]=-l*d,t[2]=E-h*c,t[6]=v+m*c,t[10]=s*d}else if(e.order==="YXZ"){const h=d*f,m=d*p,v=c*f,E=c*p;t[0]=h+E*l,t[4]=v*l-m,t[8]=s*c,t[1]=s*p,t[5]=s*f,t[9]=-l,t[2]=m*l-v,t[6]=E+h*l,t[10]=s*d}else if(e.order==="ZXY"){const h=d*f,m=d*p,v=c*f,E=c*p;t[0]=h-E*l,t[4]=-s*p,t[8]=v+m*l,t[1]=m+v*l,t[5]=s*f,t[9]=E-h*l,t[2]=-s*c,t[6]=l,t[10]=s*d}else if(e.order==="ZYX"){const h=s*f,m=s*p,v=l*f,E=l*p;t[0]=d*f,t[4]=v*c-m,t[8]=h*c+E,t[1]=d*p,t[5]=E*c+h,t[9]=m*c-v,t[2]=-c,t[6]=l*d,t[10]=s*d}else if(e.order==="YZX"){const h=s*d,m=s*c,v=l*d,E=l*c;t[0]=d*f,t[4]=E-h*p,t[8]=v*p+m,t[1]=p,t[5]=s*f,t[9]=-l*f,t[2]=-c*f,t[6]=m*p+v,t[10]=h-E*p}else if(e.order==="XZY"){const h=s*d,m=s*c,v=l*d,E=l*c;t[0]=d*f,t[4]=-p,t[8]=c*f,t[1]=h*p+E,t[5]=s*f,t[9]=m*p-v,t[2]=v*p-m,t[6]=l*f,t[10]=E*p+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Nh,e,Dh)}lookAt(e,t,i){const o=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),ii.crossVectors(i,tn),ii.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),ii.crossVectors(i,tn)),ii.normalize(),Vo.crossVectors(tn,ii),o[0]=ii.x,o[4]=Vo.x,o[8]=tn.x,o[1]=ii.y,o[5]=Vo.y,o[9]=tn.y,o[2]=ii.z,o[6]=Vo.z,o[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,r=this.elements,s=i[0],l=i[4],d=i[8],c=i[12],f=i[1],p=i[5],h=i[9],m=i[13],v=i[2],E=i[6],g=i[10],_=i[14],T=i[3],A=i[7],C=i[11],w=i[15],M=o[0],P=o[4],S=o[8],I=o[12],W=o[1],N=o[5],H=o[9],V=o[13],X=o[2],G=o[6],q=o[10],O=o[14],re=o[3],ie=o[7],_e=o[11],Ie=o[15];return r[0]=s*M+l*W+d*X+c*re,r[4]=s*P+l*N+d*G+c*ie,r[8]=s*S+l*H+d*q+c*_e,r[12]=s*I+l*V+d*O+c*Ie,r[1]=f*M+p*W+h*X+m*re,r[5]=f*P+p*N+h*G+m*ie,r[9]=f*S+p*H+h*q+m*_e,r[13]=f*I+p*V+h*O+m*Ie,r[2]=v*M+E*W+g*X+_*re,r[6]=v*P+E*N+g*G+_*ie,r[10]=v*S+E*H+g*q+_*_e,r[14]=v*I+E*V+g*O+_*Ie,r[3]=T*M+A*W+C*X+w*re,r[7]=T*P+A*N+C*G+w*ie,r[11]=T*S+A*H+C*q+w*_e,r[15]=T*I+A*V+C*O+w*Ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],r=e[12],s=e[1],l=e[5],d=e[9],c=e[13],f=e[2],p=e[6],h=e[10],m=e[14],v=e[3],E=e[7],g=e[11],_=e[15],T=d*m-c*h,A=l*m-c*p,C=l*h-d*p,w=s*m-c*f,M=s*h-d*f,P=s*p-l*f;return t*(E*T-g*A+_*C)-i*(v*T-g*w+_*M)+o*(v*A-E*w+_*P)-r*(v*C-E*M+g*P)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],r=e[3],s=e[4],l=e[5],d=e[6],c=e[7],f=e[8],p=e[9],h=e[10],m=e[11],v=e[12],E=e[13],g=e[14],_=e[15],T=t*l-i*s,A=t*d-o*s,C=t*c-r*s,w=i*d-o*l,M=i*c-r*l,P=o*c-r*d,S=f*E-p*v,I=f*g-h*v,W=f*_-m*v,N=p*g-h*E,H=p*_-m*E,V=h*_-m*g,X=T*V-A*H+C*N+w*W-M*I+P*S;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/X;return e[0]=(l*V-d*H+c*N)*G,e[1]=(o*H-i*V-r*N)*G,e[2]=(E*P-g*M+_*w)*G,e[3]=(h*M-p*P-m*w)*G,e[4]=(d*W-s*V-c*I)*G,e[5]=(t*V-o*W+r*I)*G,e[6]=(g*C-v*P-_*A)*G,e[7]=(f*P-h*C+m*A)*G,e[8]=(s*H-l*W+c*S)*G,e[9]=(i*W-t*H-r*S)*G,e[10]=(v*M-E*C+_*T)*G,e[11]=(p*C-f*M-m*T)*G,e[12]=(l*I-s*N-d*S)*G,e[13]=(t*N-i*I+o*S)*G,e[14]=(E*A-v*w-g*T)*G,e[15]=(f*w-p*A+h*T)*G,this}scale(e){const t=this.elements,i=e.x,o=e.y,r=e.z;return t[0]*=i,t[4]*=o,t[8]*=r,t[1]*=i,t[5]*=o,t[9]*=r,t[2]*=i,t[6]*=o,t[10]*=r,t[3]*=i,t[7]*=o,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),r=1-i,s=e.x,l=e.y,d=e.z,c=r*s,f=r*l;return this.set(c*s+i,c*l-o*d,c*d+o*l,0,c*l+o*d,f*l+i,f*d-o*s,0,c*d-o*l,f*d+o*s,r*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,r,s){return this.set(1,i,r,0,e,1,s,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,r=t._x,s=t._y,l=t._z,d=t._w,c=r+r,f=s+s,p=l+l,h=r*c,m=r*f,v=r*p,E=s*f,g=s*p,_=l*p,T=d*c,A=d*f,C=d*p,w=i.x,M=i.y,P=i.z;return o[0]=(1-(E+_))*w,o[1]=(m+C)*w,o[2]=(v-A)*w,o[3]=0,o[4]=(m-C)*M,o[5]=(1-(h+_))*M,o[6]=(g+T)*M,o[7]=0,o[8]=(v+A)*P,o[9]=(g-T)*P,o[10]=(1-(h+E))*P,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const r=this.determinant();if(r===0)return i.set(1,1,1),t.identity(),this;let s=Li.set(o[0],o[1],o[2]).length();const l=Li.set(o[4],o[5],o[6]).length(),d=Li.set(o[8],o[9],o[10]).length();r<0&&(s=-s),mn.copy(this);const c=1/s,f=1/l,p=1/d;return mn.elements[0]*=c,mn.elements[1]*=c,mn.elements[2]*=c,mn.elements[4]*=f,mn.elements[5]*=f,mn.elements[6]*=f,mn.elements[8]*=p,mn.elements[9]*=p,mn.elements[10]*=p,t.setFromRotationMatrix(mn),i.x=s,i.y=l,i.z=d,this}makePerspective(e,t,i,o,r,s,l=Pn,d=!1){const c=this.elements,f=2*r/(t-e),p=2*r/(i-o),h=(t+e)/(t-e),m=(i+o)/(i-o);let v,E;if(d)v=r/(s-r),E=s*r/(s-r);else if(l===Pn)v=-(s+r)/(s-r),E=-2*s*r/(s-r);else if(l===Ar)v=-s/(s-r),E=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=p,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,o,r,s,l=Pn,d=!1){const c=this.elements,f=2/(t-e),p=2/(i-o),h=-(t+e)/(t-e),m=-(i+o)/(i-o);let v,E;if(d)v=1/(s-r),E=s/(s-r);else if(l===Pn)v=-2/(s-r),E=-(s+r)/(s-r);else if(l===Ar)v=-1/(s-r),E=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=p,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=v,c[14]=E,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Li=new J,mn=new wt,Nh=new J(0,0,0),Dh=new J(1,1,1),ii=new J,Vo=new J,tn=new J,Cl=new wt,Il=new so;class Jn{constructor(e=0,t=0,i=0,o=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,r=o[0],s=o[4],l=o[8],d=o[1],c=o[5],f=o[9],p=o[2],h=o[6],m=o[10];switch(t){case"XYZ":this._y=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(d,c)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(d,r));break;case"ZYX":this._y=Math.asin(-ot(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(d,r)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-ot(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Cl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Il.setFromEuler(this),this.setFromQuaternion(Il,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class ja{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lh=0;const wl=new J,Ui=new so,kn=new wt,Ho=new J,go=new J,Uh=new J,Fh=new so,Rl=new J(1,0,0),bl=new J(0,1,0),Pl=new J(0,0,1),Nl={type:"added"},Bh={type:"removed"},Fi={type:"childadded",child:null},is={type:"childremoved",child:null};class jt extends ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lh++}),this.uuid=Po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new J,t=new Jn,i=new so,o=new J(1,1,1);function r(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new wt},normalMatrix:{value:new Ze}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis(Rl,e)}rotateY(e){return this.rotateOnAxis(bl,e)}rotateZ(e){return this.rotateOnAxis(Pl,e)}translateOnAxis(e,t){return wl.copy(e).applyQuaternion(this.quaternion),this.position.add(wl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rl,e)}translateY(e){return this.translateOnAxis(bl,e)}translateZ(e){return this.translateOnAxis(Pl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ho.copy(e):Ho.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(go,Ho,this.up):kn.lookAt(Ho,go,this.up),this.quaternion.setFromRotationMatrix(kn),o&&(kn.extractRotation(o.matrixWorld),Ui.setFromRotationMatrix(kn),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nl),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null):rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Bh),is.child=e,this.dispatchEvent(is),is.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nl),Fi.child=e,this.dispatchEvent(Fi),Fi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let r=0,s=o.length;r<s;r++)o[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,e,Uh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(go,Fh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,o=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*o,r[13]+=i-r[1]*t-r[5]*i-r[9]*o,r[14]+=o-r[2]*t-r[6]*i-r[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let r=0,s=o.length;r<s;r++)o[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(l=>({...l})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function r(l,d){return l[d.uuid]===void 0&&(l[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=r(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const d=l.shapes;if(Array.isArray(d))for(let c=0,f=d.length;c<f;c++){const p=d[c];r(e.shapes,p)}else r(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let d=0,c=this.material.length;d<c;d++)l.push(r(e.materials,this.material[d]));o.material=l}else o.material=r(e.materials,this.material);if(this.children.length>0){o.children=[];for(let l=0;l<this.children.length;l++)o.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let l=0;l<this.animations.length;l++){const d=this.animations[l];o.animations.push(r(e.animations,d))}}if(t){const l=s(e.geometries),d=s(e.materials),c=s(e.textures),f=s(e.images),p=s(e.shapes),h=s(e.skeletons),m=s(e.animations),v=s(e.nodes);l.length>0&&(i.geometries=l),d.length>0&&(i.materials=d),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),p.length>0&&(i.shapes=p),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=o,i;function s(l){const d=[];for(const c in l){const f=l[c];delete f.metadata,d.push(f)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}jt.DEFAULT_UP=new J(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zo extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kh={type:"move"};class os{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,r=null,s=null;const l=this._targetRay,d=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const E of e.hand.values()){const g=t.getJointPose(E,i),_=this._getHandJoint(c,E);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}const f=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],h=f.position.distanceTo(p.position),m=.02,v=.005;c.inputState.pinching&&h>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(d.matrix.fromArray(r.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,r.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(r.linearVelocity)):d.hasLinearVelocity=!1,r.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(r.angularVelocity)):d.hasAngularVelocity=!1));l!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&r!==null&&(o=r),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(kh)))}return l!==null&&(l.visible=o!==null),d!==null&&(d.visible=r!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new zo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Wo={h:0,s:0,l:0};function rs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class _t{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,i,o=st.workingColorSpace){return this.r=e,this.g=t,this.b=i,st.colorSpaceToWorking(this,o),this}setHSL(e,t,i,o=st.workingColorSpace){if(e=Ah(e,1),t=ot(t,0,1),i=ot(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,s=2*i-r;this.r=rs(s,r,e+1/3),this.g=rs(s,r,e),this.b=rs(s,r,e-1/3)}return st.colorSpaceToWorking(this,o),this}setStyle(e,t=an){function i(r){r!==void 0&&parseFloat(r)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=o[1],l=o[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=o[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){const i=xd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$n(e.r),this.g=$n(e.g),this.b=$n(e.b),this}copyLinearToSRGB(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return st.workingToColorSpace(Wt.copy(this),e),Math.round(ot(Wt.r*255,0,255))*65536+Math.round(ot(Wt.g*255,0,255))*256+Math.round(ot(Wt.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace(Wt.copy(this),t);const i=Wt.r,o=Wt.g,r=Wt.b,s=Math.max(i,o,r),l=Math.min(i,o,r);let d,c;const f=(l+s)/2;if(l===s)d=0,c=0;else{const p=s-l;switch(c=f<=.5?p/(s+l):p/(2-s-l),s){case i:d=(o-r)/p+(o<r?6:0);break;case o:d=(r-i)/p+2;break;case r:d=(i-o)/p+4;break}d/=6}return e.h=d,e.s=c,e.l=f,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=an){st.workingToColorSpace(Wt.copy(this),e);const t=Wt.r,i=Wt.g,o=Wt.b;return e!==an?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(Wo);const i=Qr(oi.h,Wo.h,t),o=Qr(oi.s,Wo.s,t),r=Qr(oi.l,Wo.l,t);return this.setHSL(i,o,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*o,this.g=r[1]*t+r[4]*i+r[7]*o,this.b=r[2]*t+r[5]*i+r[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new _t;_t.NAMES=xd;class Oh extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const gn=new J,On=new J,ss=new J,Gn=new J,Bi=new J,ki=new J,Dl=new J,as=new J,ls=new J,cs=new J,us=new Pt,ds=new Pt,fs=new Pt;class vn{constructor(e=new J,t=new J,i=new J){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),gn.subVectors(e,t),o.cross(gn);const r=o.lengthSq();return r>0?o.multiplyScalar(1/Math.sqrt(r)):o.set(0,0,0)}static getBarycoord(e,t,i,o,r){gn.subVectors(o,t),On.subVectors(i,t),ss.subVectors(e,t);const s=gn.dot(gn),l=gn.dot(On),d=gn.dot(ss),c=On.dot(On),f=On.dot(ss),p=s*c-l*l;if(p===0)return r.set(0,0,0),null;const h=1/p,m=(c*d-l*f)*h,v=(s*f-l*d)*h;return r.set(1-m-v,v,m)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(e,t,i,o,r,s,l,d){return this.getBarycoord(e,t,i,o,Gn)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(r,Gn.x),d.addScaledVector(s,Gn.y),d.addScaledVector(l,Gn.z),d)}static getInterpolatedAttribute(e,t,i,o,r,s){return us.setScalar(0),ds.setScalar(0),fs.setScalar(0),us.fromBufferAttribute(e,t),ds.fromBufferAttribute(e,i),fs.fromBufferAttribute(e,o),s.setScalar(0),s.addScaledVector(us,r.x),s.addScaledVector(ds,r.y),s.addScaledVector(fs,r.z),s}static isFrontFacing(e,t,i,o){return gn.subVectors(i,t),On.subVectors(e,t),gn.cross(On).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),gn.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,r){return vn.getInterpolation(e,this.a,this.b,this.c,t,i,o,r)}containsPoint(e){return vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,r=this.c;let s,l;Bi.subVectors(o,i),ki.subVectors(r,i),as.subVectors(e,i);const d=Bi.dot(as),c=ki.dot(as);if(d<=0&&c<=0)return t.copy(i);ls.subVectors(e,o);const f=Bi.dot(ls),p=ki.dot(ls);if(f>=0&&p<=f)return t.copy(o);const h=d*p-f*c;if(h<=0&&d>=0&&f<=0)return s=d/(d-f),t.copy(i).addScaledVector(Bi,s);cs.subVectors(e,r);const m=Bi.dot(cs),v=ki.dot(cs);if(v>=0&&m<=v)return t.copy(r);const E=m*c-d*v;if(E<=0&&c>=0&&v<=0)return l=c/(c-v),t.copy(i).addScaledVector(ki,l);const g=f*v-m*p;if(g<=0&&p-f>=0&&m-v>=0)return Dl.subVectors(r,o),l=(p-f)/(p-f+(m-v)),t.copy(o).addScaledVector(Dl,l);const _=1/(g+E+h);return s=E*_,l=h*_,t.copy(i).addScaledVector(Bi,s).addScaledVector(ki,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class No{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,l=r.count;s<l;s++)e.isMesh===!0?e.getVertexPosition(s,_n):_n.fromBufferAttribute(r,s),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qo.copy(i.boundingBox)),qo.applyMatrix4(e.matrixWorld),this.union(qo)}const o=e.children;for(let r=0,s=o.length;r<s;r++)this.expandByObject(o[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_o),$o.subVectors(this.max,_o),Oi.subVectors(e.a,_o),Gi.subVectors(e.b,_o),Vi.subVectors(e.c,_o),ri.subVectors(Gi,Oi),si.subVectors(Vi,Gi),gi.subVectors(Oi,Vi);let t=[0,-ri.z,ri.y,0,-si.z,si.y,0,-gi.z,gi.y,ri.z,0,-ri.x,si.z,0,-si.x,gi.z,0,-gi.x,-ri.y,ri.x,0,-si.y,si.x,0,-gi.y,gi.x,0];return!hs(t,Oi,Gi,Vi,$o)||(t=[1,0,0,0,1,0,0,0,1],!hs(t,Oi,Gi,Vi,$o))?!1:(Xo.crossVectors(ri,si),t=[Xo.x,Xo.y,Xo.z],hs(t,Oi,Gi,Vi,$o))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Vn=[new J,new J,new J,new J,new J,new J,new J,new J],_n=new J,qo=new No,Oi=new J,Gi=new J,Vi=new J,ri=new J,si=new J,gi=new J,_o=new J,$o=new J,Xo=new J,_i=new J;function hs(n,e,t,i,o){for(let r=0,s=n.length-3;r<=s;r+=3){_i.fromArray(n,r);const l=o.x*Math.abs(_i.x)+o.y*Math.abs(_i.y)+o.z*Math.abs(_i.z),d=e.dot(_i),c=t.dot(_i),f=i.dot(_i);if(Math.max(-Math.max(d,c,f),Math.min(d,c,f))>l)return!1}return!0}const Nt=new J,Yo=new vt;let Gh=0;class En{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Gh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=yl,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,r=this.itemSize;o<r;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Yo.fromBufferAttribute(this,t),Yo.applyMatrix3(e),this.setXY(t,Yo.x,Yo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=mo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),o=Zt(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),o=Zt(o,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yl&&(e.usage=this.usage),e}}class Td extends En{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Md extends En{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class un extends En{constructor(e,t,i){super(new Float32Array(e),t,i)}}const Vh=new No,vo=new J,ps=new J;class Fr{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Vh.setFromPoints(e).getCenter(i);let o=0;for(let r=0,s=e.length;r<s;r++)o=Math.max(o,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vo.subVectors(e,this.center);const t=vo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(vo,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ps.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vo.copy(e.center).add(ps)),this.expandByPoint(vo.copy(e.center).sub(ps))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Hh=0;const sn=new wt,ms=new jt,Hi=new J,nn=new No,yo=new No,Ft=new J;class fn extends ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=Po(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sh(e)?Md:Td)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ze().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,i){return sn.makeTranslation(e,t,i),this.applyMatrix4(sn),this}scale(e,t,i){return sn.makeScale(e,t,i),this.applyMatrix4(sn),this}lookAt(e){return ms.lookAt(e),ms.updateMatrix(),this.applyMatrix4(ms.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let o=0,r=e.length;o<r;o++){const s=e[o];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new un(i,3))}else{const i=Math.min(e.length,t.count);for(let o=0;o<i;o++){const r=e[o];t.setXYZ(o,r.x,r.y,r.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new No);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const r=t[i];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const l=t[r];yo.setFromBufferAttribute(l),this.morphTargetsRelative?(Ft.addVectors(nn.min,yo.min),nn.expandByPoint(Ft),Ft.addVectors(nn.max,yo.max),nn.expandByPoint(Ft)):(nn.expandByPoint(yo.min),nn.expandByPoint(yo.max))}nn.getCenter(i);let o=0;for(let r=0,s=e.count;r<s;r++)Ft.fromBufferAttribute(e,r),o=Math.max(o,i.distanceToSquared(Ft));if(t)for(let r=0,s=t.length;r<s;r++){const l=t[r],d=this.morphTargetsRelative;for(let c=0,f=l.count;c<f;c++)Ft.fromBufferAttribute(l,c),d&&(Hi.fromBufferAttribute(e,c),Ft.add(Hi)),o=Math.max(o,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),l=[],d=[];for(let S=0;S<i.count;S++)l[S]=new J,d[S]=new J;const c=new J,f=new J,p=new J,h=new vt,m=new vt,v=new vt,E=new J,g=new J;function _(S,I,W){c.fromBufferAttribute(i,S),f.fromBufferAttribute(i,I),p.fromBufferAttribute(i,W),h.fromBufferAttribute(r,S),m.fromBufferAttribute(r,I),v.fromBufferAttribute(r,W),f.sub(c),p.sub(c),m.sub(h),v.sub(h);const N=1/(m.x*v.y-v.x*m.y);isFinite(N)&&(E.copy(f).multiplyScalar(v.y).addScaledVector(p,-m.y).multiplyScalar(N),g.copy(p).multiplyScalar(m.x).addScaledVector(f,-v.x).multiplyScalar(N),l[S].add(E),l[I].add(E),l[W].add(E),d[S].add(g),d[I].add(g),d[W].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let S=0,I=T.length;S<I;++S){const W=T[S],N=W.start,H=W.count;for(let V=N,X=N+H;V<X;V+=3)_(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const A=new J,C=new J,w=new J,M=new J;function P(S){w.fromBufferAttribute(o,S),M.copy(w);const I=l[S];A.copy(I),A.sub(w.multiplyScalar(w.dot(I))).normalize(),C.crossVectors(M,I);const N=C.dot(d[S])<0?-1:1;s.setXYZW(S,A.x,A.y,A.z,N)}for(let S=0,I=T.length;S<I;++S){const W=T[S],N=W.start,H=W.count;for(let V=N,X=N+H;V<X;V+=3)P(e.getX(V+0)),P(e.getX(V+1)),P(e.getX(V+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new En(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const o=new J,r=new J,s=new J,l=new J,d=new J,c=new J,f=new J,p=new J;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),E=e.getX(h+1),g=e.getX(h+2);o.fromBufferAttribute(t,v),r.fromBufferAttribute(t,E),s.fromBufferAttribute(t,g),f.subVectors(s,r),p.subVectors(o,r),f.cross(p),l.fromBufferAttribute(i,v),d.fromBufferAttribute(i,E),c.fromBufferAttribute(i,g),l.add(f),d.add(f),c.add(f),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(E,d.x,d.y,d.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)o.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),f.subVectors(s,r),p.subVectors(o,r),f.cross(p),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(l,d){const c=l.array,f=l.itemSize,p=l.normalized,h=new c.constructor(d.length*f);let m=0,v=0;for(let E=0,g=d.length;E<g;E++){l.isInterleavedBufferAttribute?m=d[E]*l.data.stride+l.offset:m=d[E]*f;for(let _=0;_<f;_++)h[v++]=c[m++]}return new En(h,f,p)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new fn,i=this.index.array,o=this.attributes;for(const l in o){const d=o[l],c=e(d,i);t.setAttribute(l,c)}const r=this.morphAttributes;for(const l in r){const d=[],c=r[l];for(let f=0,p=c.length;f<p;f++){const h=c[f],m=e(h,i);d.push(m)}t.morphAttributes[l]=d}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let l=0,d=s.length;l<d;l++){const c=s[l];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const c in d)d[c]!==void 0&&(e[c]=d[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const c=i[d];e.data.attributes[d]=c.toJSON(e.data)}const o={};let r=!1;for(const d in this.morphAttributes){const c=this.morphAttributes[d],f=[];for(let p=0,h=c.length;p<h;p++){const m=c[p];f.push(m.toJSON(e.data))}f.length>0&&(o[d]=f,r=!0)}r&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const o=e.attributes;for(const c in o){const f=o[c];this.setAttribute(c,f.clone(t))}const r=e.morphAttributes;for(const c in r){const f=[],p=r[c];for(let h=0,m=p.length;h<m;h++)f.push(p[h].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,f=s.length;c<f;c++){const p=s[c];this.addGroup(p.start,p.count,p.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let zh=0;class Do extends ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zh++}),this.uuid=Po(),this.name="",this.type="Material",this.blending=Ki,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ls,this.blendDst=Us,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _t(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ni,this.stencilZFail=Ni,this.stencilZPass=Ni,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(i.blending=this.blending),this.side!==hi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ls&&(i.blendSrc=this.blendSrc),this.blendDst!==Us&&(i.blendDst=this.blendDst),this.blendEquation!==Mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ni&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ni&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ni&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(r){const s=[];for(const l in r){const d=r[l];delete d.metadata,s.push(d)}return s}if(t){const r=o(e.textures),s=o(e.images);r.length>0&&(i.textures=r),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let r=0;r!==o;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Hn=new J,gs=new J,Jo=new J,ai=new J,_s=new J,Ko=new J,vs=new J;class el{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){gs.copy(e).add(t).multiplyScalar(.5),Jo.copy(t).sub(e).normalize(),ai.copy(this.origin).sub(gs);const r=e.distanceTo(t)*.5,s=-this.direction.dot(Jo),l=ai.dot(this.direction),d=-ai.dot(Jo),c=ai.lengthSq(),f=Math.abs(1-s*s);let p,h,m,v;if(f>0)if(p=s*d-l,h=s*l-d,v=r*f,p>=0)if(h>=-v)if(h<=v){const E=1/f;p*=E,h*=E,m=p*(p+s*h+2*l)+h*(s*p+h+2*d)+c}else h=r,p=Math.max(0,-(s*h+l)),m=-p*p+h*(h+2*d)+c;else h=-r,p=Math.max(0,-(s*h+l)),m=-p*p+h*(h+2*d)+c;else h<=-v?(p=Math.max(0,-(-s*r+l)),h=p>0?-r:Math.min(Math.max(-r,-d),r),m=-p*p+h*(h+2*d)+c):h<=v?(p=0,h=Math.min(Math.max(-r,-d),r),m=h*(h+2*d)+c):(p=Math.max(0,-(s*r+l)),h=p>0?r:Math.min(Math.max(-r,-d),r),m=-p*p+h*(h+2*d)+c);else h=s>0?-r:r,p=Math.max(0,-(s*h+l)),m=-p*p+h*(h+2*d)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),o&&o.copy(gs).addScaledVector(Jo,h),m}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const i=Hn.dot(this.direction),o=Hn.dot(Hn)-i*i,r=e.radius*e.radius;if(o>r)return null;const s=Math.sqrt(r-o),l=i-s,d=i+s;return d<0?null:l<0?this.at(d,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,r,s,l,d;const c=1/this.direction.x,f=1/this.direction.y,p=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,o=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,o=(e.min.x-h.x)*c),f>=0?(r=(e.min.y-h.y)*f,s=(e.max.y-h.y)*f):(r=(e.max.y-h.y)*f,s=(e.min.y-h.y)*f),i>s||r>o||((r>i||isNaN(i))&&(i=r),(s<o||isNaN(o))&&(o=s),p>=0?(l=(e.min.z-h.z)*p,d=(e.max.z-h.z)*p):(l=(e.max.z-h.z)*p,d=(e.min.z-h.z)*p),i>d||l>o)||((l>i||i!==i)&&(i=l),(d<o||o!==o)&&(o=d),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,i,o,r){_s.subVectors(t,e),Ko.subVectors(i,e),vs.crossVectors(_s,Ko);let s=this.direction.dot(vs),l;if(s>0){if(o)return null;l=1}else if(s<0)l=-1,s=-s;else return null;ai.subVectors(this.origin,e);const d=l*this.direction.dot(Ko.crossVectors(ai,Ko));if(d<0)return null;const c=l*this.direction.dot(_s.cross(ai));if(c<0||d+c>s)return null;const f=-l*ai.dot(vs);return f<0?null:this.at(f/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tl extends Do{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=od,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ll=new wt,vi=new el,Zo=new Fr,Ul=new J,Qo=new J,jo=new J,er=new J,ys=new J,tr=new J,Fl=new J,nr=new J;class Un extends jt{constructor(e=new fn,t=new tl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=o.length;r<s;r++){const l=o[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,r=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const l=this.morphTargetInfluences;if(r&&l){tr.set(0,0,0);for(let d=0,c=r.length;d<c;d++){const f=l[d],p=r[d];f!==0&&(ys.fromBufferAttribute(p,e),s?tr.addScaledVector(ys,f):tr.addScaledVector(ys.sub(t),f))}t.add(tr)}return t}raycast(e,t){const i=this.geometry,o=this.material,r=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zo.copy(i.boundingSphere),Zo.applyMatrix4(r),vi.copy(e.ray).recast(e.near),!(Zo.containsPoint(vi.origin)===!1&&(vi.intersectSphere(Zo,Ul)===null||vi.origin.distanceToSquared(Ul)>(e.far-e.near)**2))&&(Ll.copy(r).invert(),vi.copy(e.ray).applyMatrix4(Ll),!(i.boundingBox!==null&&vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,i){let o;const r=this.geometry,s=this.material,l=r.index,d=r.attributes.position,c=r.attributes.uv,f=r.attributes.uv1,p=r.attributes.normal,h=r.groups,m=r.drawRange;if(l!==null)if(Array.isArray(s))for(let v=0,E=h.length;v<E;v++){const g=h[v],_=s[g.materialIndex],T=Math.max(g.start,m.start),A=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let C=T,w=A;C<w;C+=3){const M=l.getX(C),P=l.getX(C+1),S=l.getX(C+2);o=ir(this,_,e,i,c,f,p,M,P,S),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const v=Math.max(0,m.start),E=Math.min(l.count,m.start+m.count);for(let g=v,_=E;g<_;g+=3){const T=l.getX(g),A=l.getX(g+1),C=l.getX(g+2);o=ir(this,s,e,i,c,f,p,T,A,C),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(s))for(let v=0,E=h.length;v<E;v++){const g=h[v],_=s[g.materialIndex],T=Math.max(g.start,m.start),A=Math.min(d.count,Math.min(g.start+g.count,m.start+m.count));for(let C=T,w=A;C<w;C+=3){const M=C,P=C+1,S=C+2;o=ir(this,_,e,i,c,f,p,M,P,S),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const v=Math.max(0,m.start),E=Math.min(d.count,m.start+m.count);for(let g=v,_=E;g<_;g+=3){const T=g,A=g+1,C=g+2;o=ir(this,s,e,i,c,f,p,T,A,C),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}}}function Wh(n,e,t,i,o,r,s,l){let d;if(e.side===Qt?d=i.intersectTriangle(s,r,o,!0,l):d=i.intersectTriangle(o,r,s,e.side===hi,l),d===null)return null;nr.copy(l),nr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(nr);return c<t.near||c>t.far?null:{distance:c,point:nr.clone(),object:n}}function ir(n,e,t,i,o,r,s,l,d,c){n.getVertexPosition(l,Qo),n.getVertexPosition(d,jo),n.getVertexPosition(c,er);const f=Wh(n,e,t,i,Qo,jo,er,Fl);if(f){const p=new J;vn.getBarycoord(Fl,Qo,jo,er,p),o&&(f.uv=vn.getInterpolatedAttribute(o,l,d,c,p,new vt)),r&&(f.uv1=vn.getInterpolatedAttribute(r,l,d,c,p,new vt)),s&&(f.normal=vn.getInterpolatedAttribute(s,l,d,c,p,new J),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:l,b:d,c,normal:new J,materialIndex:0};vn.getNormal(Qo,jo,er,h.normal),f.face=h,f.barycoord=p}return f}class qh extends Jt{constructor(e=null,t=1,i=1,o,r,s,l,d,c=Vt,f=Vt,p,h){super(null,s,l,d,c,f,o,r,p,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Es=new J,$h=new J,Xh=new Ze;class xi{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=Es.subVectors(i,t).cross($h.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Es),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/o;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Xh.getNormalMatrix(e),o=this.coplanarPoint(Es).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new Fr,Yh=new vt(.5,.5),or=new J;class Ad{constructor(e=new xi,t=new xi,i=new xi,o=new xi,r=new xi,s=new xi){this.planes=[e,t,i,o,r,s]}set(e,t,i,o,r,s){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(o),l[4].copy(r),l[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Pn,i=!1){const o=this.planes,r=e.elements,s=r[0],l=r[1],d=r[2],c=r[3],f=r[4],p=r[5],h=r[6],m=r[7],v=r[8],E=r[9],g=r[10],_=r[11],T=r[12],A=r[13],C=r[14],w=r[15];if(o[0].setComponents(c-s,m-f,_-v,w-T).normalize(),o[1].setComponents(c+s,m+f,_+v,w+T).normalize(),o[2].setComponents(c+l,m+p,_+E,w+A).normalize(),o[3].setComponents(c-l,m-p,_-E,w-A).normalize(),i)o[4].setComponents(d,h,g,C).normalize(),o[5].setComponents(c-d,m-h,_-g,w-C).normalize();else if(o[4].setComponents(c-d,m-h,_-g,w-C).normalize(),t===Pn)o[5].setComponents(c+d,m+h,_+g,w+C).normalize();else if(t===Ar)o[5].setComponents(d,h,g,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){yi.center.set(0,0,0);const t=Yh.distanceTo(e.center);return yi.radius=.7071067811865476+t,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(or.x=o.normal.x>0?e.max.x:e.min.x,or.y=o.normal.y>0?e.max.y:e.min.y,or.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(or)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cd extends Do{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _t(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bl=new wt,Ma=new el,rr=new Fr,sr=new J;class Jh extends jt{constructor(e=new fn,t=new Cd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,o=this.matrixWorld,r=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),rr.copy(i.boundingSphere),rr.applyMatrix4(o),rr.radius+=r,e.ray.intersectsSphere(rr)===!1)return;Bl.copy(o).invert(),Ma.copy(e.ray).applyMatrix4(Bl);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),d=l*l,c=i.index,p=i.attributes.position;if(c!==null){const h=Math.max(0,s.start),m=Math.min(c.count,s.start+s.count);for(let v=h,E=m;v<E;v++){const g=c.getX(v);sr.fromBufferAttribute(p,g),kl(sr,g,d,o,e,t,this)}}else{const h=Math.max(0,s.start),m=Math.min(p.count,s.start+s.count);for(let v=h,E=m;v<E;v++)sr.fromBufferAttribute(p,v),kl(sr,v,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=o.length;r<s;r++){const l=o[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function kl(n,e,t,i,o,r,s){const l=Ma.distanceSqToPoint(n);if(l<t){const d=new J;Ma.closestPointToPoint(n,d),d.applyMatrix4(i);const c=o.ray.origin.distanceTo(d);if(c<o.near||c>o.far)return;r.push({distance:c,distanceToRay:Math.sqrt(l),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Id extends Jt{constructor(e=[],t=wi,i,o,r,s,l,d,c,f){super(e,t,i,o,r,s,l,d,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bo extends Jt{constructor(e,t,i=Ln,o,r,s,l=Vt,d=Vt,c,f=Yn,p=1){if(f!==Yn&&f!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:p};super(h,o,r,s,l,d,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Kh extends bo{constructor(e,t=Ln,i=wi,o,r,s=Vt,l=Vt,d,c=Yn){const f={width:e,height:e,depth:1},p=[f,f,f,f,f,f];super(e,e,t,i,o,r,s,l,d,c),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class wd extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Lo extends fn{constructor(e=1,t=1,i=1,o=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:r,depthSegments:s};const l=this;o=Math.floor(o),r=Math.floor(r),s=Math.floor(s);const d=[],c=[],f=[],p=[];let h=0,m=0;v("z","y","x",-1,-1,i,t,e,s,r,0),v("z","y","x",1,-1,i,t,-e,s,r,1),v("x","z","y",1,1,e,i,t,o,s,2),v("x","z","y",1,-1,e,i,-t,o,s,3),v("x","y","z",1,-1,e,t,i,o,r,4),v("x","y","z",-1,-1,e,t,-i,o,r,5),this.setIndex(d),this.setAttribute("position",new un(c,3)),this.setAttribute("normal",new un(f,3)),this.setAttribute("uv",new un(p,2));function v(E,g,_,T,A,C,w,M,P,S,I){const W=C/P,N=w/S,H=C/2,V=w/2,X=M/2,G=P+1,q=S+1;let O=0,re=0;const ie=new J;for(let _e=0;_e<q;_e++){const Ie=_e*N-V;for(let xe=0;xe<G;xe++){const He=xe*W-H;ie[E]=He*T,ie[g]=Ie*A,ie[_]=X,c.push(ie.x,ie.y,ie.z),ie[E]=0,ie[g]=0,ie[_]=M>0?1:-1,f.push(ie.x,ie.y,ie.z),p.push(xe/P),p.push(1-_e/S),O+=1}}for(let _e=0;_e<S;_e++)for(let Ie=0;Ie<P;Ie++){const xe=h+Ie+G*_e,He=h+Ie+G*(_e+1),mt=h+(Ie+1)+G*(_e+1),yt=h+(Ie+1)+G*_e;d.push(xe,He,yt),d.push(He,mt,yt),re+=6}l.addGroup(m,re,I),m+=re,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Br extends fn{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const r=e/2,s=t/2,l=Math.floor(i),d=Math.floor(o),c=l+1,f=d+1,p=e/l,h=t/d,m=[],v=[],E=[],g=[];for(let _=0;_<f;_++){const T=_*h-s;for(let A=0;A<c;A++){const C=A*p-r;v.push(C,-T,0),E.push(0,0,1),g.push(A/l),g.push(1-_/d)}}for(let _=0;_<d;_++)for(let T=0;T<l;T++){const A=T+c*_,C=T+c*(_+1),w=T+1+c*(_+1),M=T+1+c*_;m.push(A,C,M),m.push(C,w,M)}this.setIndex(m),this.setAttribute("position",new un(v,3)),this.setAttribute("normal",new un(E,3)),this.setAttribute("uv",new un(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.width,e.height,e.widthSegments,e.heightSegments)}}class nl extends fn{constructor(e=1,t=32,i=16,o=0,r=Math.PI*2,s=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:o,phiLength:r,thetaStart:s,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const d=Math.min(s+l,Math.PI);let c=0;const f=[],p=new J,h=new J,m=[],v=[],E=[],g=[];for(let _=0;_<=i;_++){const T=[],A=_/i;let C=0;_===0&&s===0?C=.5/t:_===i&&d===Math.PI&&(C=-.5/t);for(let w=0;w<=t;w++){const M=w/t;p.x=-e*Math.cos(o+M*r)*Math.sin(s+A*l),p.y=e*Math.cos(s+A*l),p.z=e*Math.sin(o+M*r)*Math.sin(s+A*l),v.push(p.x,p.y,p.z),h.copy(p).normalize(),E.push(h.x,h.y,h.z),g.push(M+C,1-A),T.push(c++)}f.push(T)}for(let _=0;_<i;_++)for(let T=0;T<t;T++){const A=f[_][T+1],C=f[_][T],w=f[_+1][T],M=f[_+1][T+1];(_!==0||s>0)&&m.push(A,C,M),(_!==i-1||d<Math.PI)&&m.push(C,w,M)}this.setIndex(m),this.setAttribute("position",new un(v,3)),this.setAttribute("normal",new un(E,3)),this.setAttribute("uv",new un(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function oo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const o=n[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function Xt(n){const e={};for(let t=0;t<n.length;t++){const i=oo(n[t]);for(const o in i)e[o]=i[o]}return e}function Zh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Rd(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const Qh={clone:oo,merge:Xt};var jh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ep=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fn extends Do{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jh,this.fragmentShader=ep,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=Zh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const s=this.uniforms[o].value;s&&s.isTexture?t.uniforms[o]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[o]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[o]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[o]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[o]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[o]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[o]={type:"m4",value:s.toArray()}:t.uniforms[o]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class tp extends Fn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class np extends Do{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ip extends Do{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ar=new J,lr=new so,In=new J;class bd extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ar,lr,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ar,lr,In.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(ar,lr,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ar,lr,In.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const li=new J,Ol=new vt,Gl=new vt;class ln extends bd{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ta*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ta*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,Ol,Gl),t.subVectors(Gl,Ol)}setViewOffset(e,t,i,o,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zr*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,r=-.5*o;const s=this.view;if(this.view!==null&&this.view.enabled){const d=s.fullWidth,c=s.fullHeight;r+=s.offsetX*o/d,t-=s.offsetY*i/c,o*=s.width/d,i*=s.height/c}const l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+o,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Pd extends bd{constructor(e=-1,t=1,i=1,o=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let r=i-e,s=i+e,l=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,s=r+c*this.view.width,l-=f*this.view.offsetY,d=l-f*this.view.height}this.projectionMatrix.makeOrthographic(r,s,l,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const zi=-90,Wi=1;class op extends jt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ln(zi,Wi,e,t);o.layers=this.layers,this.add(o);const r=new ln(zi,Wi,e,t);r.layers=this.layers,this.add(r);const s=new ln(zi,Wi,e,t);s.layers=this.layers,this.add(s);const l=new ln(zi,Wi,e,t);l.layers=this.layers,this.add(l);const d=new ln(zi,Wi,e,t);d.layers=this.layers,this.add(d);const c=new ln(zi,Wi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,r,s,l,d]=t;for(const c of t)this.remove(c);if(e===Pn)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Ar)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,l,d,c,f]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,o),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,o),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,2,o),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,3,o),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(i,4,o),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,o),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(p,h,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class rp extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Vl=new wt;class sp{constructor(e,t,i=0,o=1/0){this.ray=new el(e,t),this.near=i,this.far=o,this.camera=null,this.layers=new ja,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):rt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Vl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vl),this}intersectObject(e,t=!0,i=[]){return Aa(e,this,i,t),i.sort(Hl),i}intersectObjects(e,t=!0,i=[]){for(let o=0,r=e.length;o<r;o++)Aa(e[o],this,i,t);return i.sort(Hl),i}}function Hl(n,e){return n.distance-e.distance}function Aa(n,e,t,i){let o=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(o=!1),o===!0&&i===!0){const r=n.children;for(let s=0,l=r.length;s<l;s++)Aa(r[s],e,t,!0)}}function zl(n,e,t,i){const o=ap(i);switch(t){case _d:return n*e;case yd:return n*e/o.components*o.byteLength;case Xa:return n*e/o.components*o.byteLength;case no:return n*e*2/o.components*o.byteLength;case Ya:return n*e*2/o.components*o.byteLength;case vd:return n*e*3/o.components*o.byteLength;case yn:return n*e*4/o.components*o.byteLength;case Ja:return n*e*4/o.components*o.byteLength;case _r:case vr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case yr:case Er:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $s:case Ys:return Math.max(n,16)*Math.max(e,8)/4;case qs:case Xs:return Math.max(n,8)*Math.max(e,8)/2;case Js:case Ks:case Qs:case js:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Zs:case ea:case ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ia:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case oa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ra:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case sa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case aa:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case la:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ca:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ua:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case da:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case fa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ha:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case pa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ma:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ga:case _a:case va:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ya:case Ea:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Sa:case xa:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ap(n){switch(n){case cn:case hd:return{byteLength:1,components:1};case wo:case pd:case Xn:return{byteLength:2,components:1};case qa:case $a:return{byteLength:2,components:4};case Ln:case Wa:case bn:return{byteLength:4,components:1};case md:case gd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:za}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=za);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Nd(){let n=null,e=!1,t=null,i=null;function o(r,s){t(r,s),i=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function lp(n){const e=new WeakMap;function t(l,d){const c=l.array,f=l.usage,p=c.byteLength,h=n.createBuffer();n.bindBuffer(d,h),n.bufferData(d,c,f),l.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=n.HALF_FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:p}}function i(l,d,c){const f=d.array,p=d.updateRanges;if(n.bindBuffer(c,l),p.length===0)n.bufferSubData(c,0,f);else{p.sort((m,v)=>m.start-v.start);let h=0;for(let m=1;m<p.length;m++){const v=p[h],E=p[m];E.start<=v.start+v.count+1?v.count=Math.max(v.count,E.start+E.count-v.start):(++h,p[h]=E)}p.length=h+1;for(let m=0,v=p.length;m<v;m++){const E=p[m];n.bufferSubData(c,E.start*f.BYTES_PER_ELEMENT,f,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const d=e.get(l);d&&(n.deleteBuffer(d.buffer),e.delete(l))}function s(l,d){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const f=e.get(l);(!f||f.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=e.get(l);if(c===void 0)e.set(l,t(l,d));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,l,d),c.version=l.version}}return{get:o,remove:r,update:s}}var cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,up=`#ifdef USE_ALPHAHASH
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
#endif`,dp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mp=`#ifdef USE_AOMAP
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
#endif`,gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_p=`#ifdef USE_BATCHING
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
#endif`,vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ep=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xp=`#ifdef USE_IRIDESCENCE
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
#endif`,Tp=`#ifdef USE_BUMPMAP
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
#endif`,Mp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Np=`#define PI 3.141592653589793
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
} // validated`,Dp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lp=`vec3 transformedNormal = objectNormal;
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
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Op="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qp=`#ifdef USE_ENVMAP
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
#endif`,$p=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kp=`#ifdef USE_GRADIENTMAP
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
}`,Zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,em=`uniform bool receiveShadow;
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
#endif`,tm=`#ifdef USE_ENVMAP
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
#endif`,nm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,im=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,om=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sm=`PhysicalMaterial material;
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
#endif`,am=`uniform sampler2D dfgLUT;
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
}`,lm=`
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
#endif`,cm=`#if defined( RE_IndirectDiffuse )
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
#endif`,um=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_m=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vm=`#if defined( USE_POINTS_UV )
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
#endif`,ym=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Em=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mm=`#ifdef USE_MORPHTARGETS
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
#endif`,Am=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Im=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pm=`#ifdef USE_NORMALMAP
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
#endif`,Nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Um=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,km=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xm=`float getShadowMask() {
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
}`,Ym=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jm=`#ifdef USE_SKINNING
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
#endif`,Km=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zm=`#ifdef USE_SKINNING
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
#endif`,Qm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ng=`#ifdef USE_TRANSMISSION
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
#endif`,ig=`#ifdef USE_TRANSMISSION
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
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cg=`uniform sampler2D t2D;
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
}`,ug=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`#include <common>
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
}`,mg=`#if DEPTH_PACKING == 3200
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
}`,gg=`#define DISTANCE
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
}`,_g=`#define DISTANCE
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
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Eg=`uniform float scale;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,xg=`#include <common>
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
}`,Tg=`uniform vec3 diffuse;
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
}`,Mg=`#define LAMBERT
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
}`,Ag=`#define LAMBERT
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
}`,Cg=`#define MATCAP
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
}`,Ig=`#define MATCAP
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
}`,wg=`#define NORMAL
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
}`,Rg=`#define NORMAL
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
}`,bg=`#define PHONG
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
}`,Pg=`#define PHONG
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
}`,Ng=`#define STANDARD
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
}`,Dg=`#define STANDARD
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
}`,Lg=`#define TOON
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
}`,Ug=`#define TOON
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
}`,Fg=`uniform float size;
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
}`,Bg=`uniform vec3 diffuse;
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
}`,kg=`#include <common>
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
}`,Og=`uniform vec3 color;
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
}`,Gg=`uniform float rotation;
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
}`,Vg=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:cp,alphahash_pars_fragment:up,alphamap_fragment:dp,alphamap_pars_fragment:fp,alphatest_fragment:hp,alphatest_pars_fragment:pp,aomap_fragment:mp,aomap_pars_fragment:gp,batching_pars_vertex:_p,batching_vertex:vp,begin_vertex:yp,beginnormal_vertex:Ep,bsdfs:Sp,iridescence_fragment:xp,bumpmap_pars_fragment:Tp,clipping_planes_fragment:Mp,clipping_planes_pars_fragment:Ap,clipping_planes_pars_vertex:Cp,clipping_planes_vertex:Ip,color_fragment:wp,color_pars_fragment:Rp,color_pars_vertex:bp,color_vertex:Pp,common:Np,cube_uv_reflection_fragment:Dp,defaultnormal_vertex:Lp,displacementmap_pars_vertex:Up,displacementmap_vertex:Fp,emissivemap_fragment:Bp,emissivemap_pars_fragment:kp,colorspace_fragment:Op,colorspace_pars_fragment:Gp,envmap_fragment:Vp,envmap_common_pars_fragment:Hp,envmap_pars_fragment:zp,envmap_pars_vertex:Wp,envmap_physical_pars_fragment:tm,envmap_vertex:qp,fog_vertex:$p,fog_pars_vertex:Xp,fog_fragment:Yp,fog_pars_fragment:Jp,gradientmap_pars_fragment:Kp,lightmap_pars_fragment:Zp,lights_lambert_fragment:Qp,lights_lambert_pars_fragment:jp,lights_pars_begin:em,lights_toon_fragment:nm,lights_toon_pars_fragment:im,lights_phong_fragment:om,lights_phong_pars_fragment:rm,lights_physical_fragment:sm,lights_physical_pars_fragment:am,lights_fragment_begin:lm,lights_fragment_maps:cm,lights_fragment_end:um,logdepthbuf_fragment:dm,logdepthbuf_pars_fragment:fm,logdepthbuf_pars_vertex:hm,logdepthbuf_vertex:pm,map_fragment:mm,map_pars_fragment:gm,map_particle_fragment:_m,map_particle_pars_fragment:vm,metalnessmap_fragment:ym,metalnessmap_pars_fragment:Em,morphinstance_vertex:Sm,morphcolor_vertex:xm,morphnormal_vertex:Tm,morphtarget_pars_vertex:Mm,morphtarget_vertex:Am,normal_fragment_begin:Cm,normal_fragment_maps:Im,normal_pars_fragment:wm,normal_pars_vertex:Rm,normal_vertex:bm,normalmap_pars_fragment:Pm,clearcoat_normal_fragment_begin:Nm,clearcoat_normal_fragment_maps:Dm,clearcoat_pars_fragment:Lm,iridescence_pars_fragment:Um,opaque_fragment:Fm,packing:Bm,premultiplied_alpha_fragment:km,project_vertex:Om,dithering_fragment:Gm,dithering_pars_fragment:Vm,roughnessmap_fragment:Hm,roughnessmap_pars_fragment:zm,shadowmap_pars_fragment:Wm,shadowmap_pars_vertex:qm,shadowmap_vertex:$m,shadowmask_pars_fragment:Xm,skinbase_vertex:Ym,skinning_pars_vertex:Jm,skinning_vertex:Km,skinnormal_vertex:Zm,specularmap_fragment:Qm,specularmap_pars_fragment:jm,tonemapping_fragment:eg,tonemapping_pars_fragment:tg,transmission_fragment:ng,transmission_pars_fragment:ig,uv_pars_fragment:og,uv_pars_vertex:rg,uv_vertex:sg,worldpos_vertex:ag,background_vert:lg,background_frag:cg,backgroundCube_vert:ug,backgroundCube_frag:dg,cube_vert:fg,cube_frag:hg,depth_vert:pg,depth_frag:mg,distance_vert:gg,distance_frag:_g,equirect_vert:vg,equirect_frag:yg,linedashed_vert:Eg,linedashed_frag:Sg,meshbasic_vert:xg,meshbasic_frag:Tg,meshlambert_vert:Mg,meshlambert_frag:Ag,meshmatcap_vert:Cg,meshmatcap_frag:Ig,meshnormal_vert:wg,meshnormal_frag:Rg,meshphong_vert:bg,meshphong_frag:Pg,meshphysical_vert:Ng,meshphysical_frag:Dg,meshtoon_vert:Lg,meshtoon_frag:Ug,points_vert:Fg,points_frag:Bg,shadow_vert:kg,shadow_frag:Og,sprite_vert:Gg,sprite_frag:Vg},ge={common:{diffuse:{value:new _t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new _t(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Rn={basic:{uniforms:Xt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Xt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new _t(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Xt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new _t(0)},specular:{value:new _t(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Xt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new _t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Xt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new _t(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Xt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Xt([ge.points,ge.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Xt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Xt([ge.common,ge.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Xt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Xt([ge.sprite,ge.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:Xt([ge.common,ge.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:Xt([ge.lights,ge.fog,{color:{value:new _t(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Rn.physical={uniforms:Xt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new _t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new _t(0)},specularColor:{value:new _t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const cr={r:0,b:0,g:0},Ei=new Jn,Hg=new wt;function zg(n,e,t,i,o,r){const s=new _t(0);let l=o===!0?0:1,d,c,f=null,p=0,h=null;function m(T){let A=T.isScene===!0?T.background:null;if(A&&A.isTexture){const C=T.backgroundBlurriness>0;A=e.get(A,C)}return A}function v(T){let A=!1;const C=m(T);C===null?g(s,l):C&&C.isColor&&(g(C,1),A=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function E(T,A){const C=m(A);C&&(C.isCubeTexture||C.mapping===Ur)?(c===void 0&&(c=new Un(new Lo(1,1,1),new Fn({name:"BackgroundCubeMaterial",uniforms:oo(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,M,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),Ei.copy(A.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),c.material.uniforms.envMap.value=C,c.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Hg.makeRotationFromEuler(Ei)),c.material.toneMapped=st.getTransfer(C.colorSpace)!==gt,(f!==C||p!==C.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,f=C,p=C.version,h=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):C&&C.isTexture&&(d===void 0&&(d=new Un(new Br(2,2),new Fn({name:"BackgroundMaterial",uniforms:oo(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=C,d.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,d.material.toneMapped=st.getTransfer(C.colorSpace)!==gt,C.matrixAutoUpdate===!0&&C.updateMatrix(),d.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||p!==C.version||h!==n.toneMapping)&&(d.material.needsUpdate=!0,f=C,p=C.version,h=n.toneMapping),d.layers.enableAll(),T.unshift(d,d.geometry,d.material,0,0,null))}function g(T,A){T.getRGB(cr,Rd(n)),t.buffers.color.setClear(cr.r,cr.g,cr.b,A,r)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return s},setClearColor:function(T,A=1){s.set(T),l=A,g(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,g(s,l)},render:v,addToRenderList:E,dispose:_}}function Wg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},o=h(null);let r=o,s=!1;function l(N,H,V,X,G){let q=!1;const O=p(N,X,V,H);r!==O&&(r=O,c(r.object)),q=m(N,X,V,G),q&&v(N,X,V,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(q||s)&&(s=!1,C(N,H,V,X),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function d(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function f(N){return n.deleteVertexArray(N)}function p(N,H,V,X){const G=X.wireframe===!0;let q=i[H.id];q===void 0&&(q={},i[H.id]=q);const O=N.isInstancedMesh===!0?N.id:0;let re=q[O];re===void 0&&(re={},q[O]=re);let ie=re[V.id];ie===void 0&&(ie={},re[V.id]=ie);let _e=ie[G];return _e===void 0&&(_e=h(d()),ie[G]=_e),_e}function h(N){const H=[],V=[],X=[];for(let G=0;G<t;G++)H[G]=0,V[G]=0,X[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:V,attributeDivisors:X,object:N,attributes:{},index:null}}function m(N,H,V,X){const G=r.attributes,q=H.attributes;let O=0;const re=V.getAttributes();for(const ie in re)if(re[ie].location>=0){const Ie=G[ie];let xe=q[ie];if(xe===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(xe=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(xe=N.instanceColor)),Ie===void 0||Ie.attribute!==xe||xe&&Ie.data!==xe.data)return!0;O++}return r.attributesNum!==O||r.index!==X}function v(N,H,V,X){const G={},q=H.attributes;let O=0;const re=V.getAttributes();for(const ie in re)if(re[ie].location>=0){let Ie=q[ie];Ie===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(Ie=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(Ie=N.instanceColor));const xe={};xe.attribute=Ie,Ie&&Ie.data&&(xe.data=Ie.data),G[ie]=xe,O++}r.attributes=G,r.attributesNum=O,r.index=X}function E(){const N=r.newAttributes;for(let H=0,V=N.length;H<V;H++)N[H]=0}function g(N){_(N,0)}function _(N,H){const V=r.newAttributes,X=r.enabledAttributes,G=r.attributeDivisors;V[N]=1,X[N]===0&&(n.enableVertexAttribArray(N),X[N]=1),G[N]!==H&&(n.vertexAttribDivisor(N,H),G[N]=H)}function T(){const N=r.newAttributes,H=r.enabledAttributes;for(let V=0,X=H.length;V<X;V++)H[V]!==N[V]&&(n.disableVertexAttribArray(V),H[V]=0)}function A(N,H,V,X,G,q,O){O===!0?n.vertexAttribIPointer(N,H,V,G,q):n.vertexAttribPointer(N,H,V,X,G,q)}function C(N,H,V,X){E();const G=X.attributes,q=V.getAttributes(),O=H.defaultAttributeValues;for(const re in q){const ie=q[re];if(ie.location>=0){let _e=G[re];if(_e===void 0&&(re==="instanceMatrix"&&N.instanceMatrix&&(_e=N.instanceMatrix),re==="instanceColor"&&N.instanceColor&&(_e=N.instanceColor)),_e!==void 0){const Ie=_e.normalized,xe=_e.itemSize,He=e.get(_e);if(He===void 0)continue;const mt=He.buffer,yt=He.type,ne=He.bytesPerElement,he=yt===n.INT||yt===n.UNSIGNED_INT||_e.gpuType===Wa;if(_e.isInterleavedBufferAttribute){const pe=_e.data,Ge=pe.stride,Oe=_e.offset;if(pe.isInstancedInterleavedBuffer){for(let ze=0;ze<ie.locationSize;ze++)_(ie.location+ze,pe.meshPerAttribute);N.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let ze=0;ze<ie.locationSize;ze++)g(ie.location+ze);n.bindBuffer(n.ARRAY_BUFFER,mt);for(let ze=0;ze<ie.locationSize;ze++)A(ie.location+ze,xe/ie.locationSize,yt,Ie,Ge*ne,(Oe+xe/ie.locationSize*ze)*ne,he)}else{if(_e.isInstancedBufferAttribute){for(let pe=0;pe<ie.locationSize;pe++)_(ie.location+pe,_e.meshPerAttribute);N.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let pe=0;pe<ie.locationSize;pe++)g(ie.location+pe);n.bindBuffer(n.ARRAY_BUFFER,mt);for(let pe=0;pe<ie.locationSize;pe++)A(ie.location+pe,xe/ie.locationSize,yt,Ie,xe*ne,xe/ie.locationSize*pe*ne,he)}}else if(O!==void 0){const Ie=O[re];if(Ie!==void 0)switch(Ie.length){case 2:n.vertexAttrib2fv(ie.location,Ie);break;case 3:n.vertexAttrib3fv(ie.location,Ie);break;case 4:n.vertexAttrib4fv(ie.location,Ie);break;default:n.vertexAttrib1fv(ie.location,Ie)}}}}T()}function w(){I();for(const N in i){const H=i[N];for(const V in H){const X=H[V];for(const G in X){const q=X[G];for(const O in q)f(q[O].object),delete q[O];delete X[G]}}delete i[N]}}function M(N){if(i[N.id]===void 0)return;const H=i[N.id];for(const V in H){const X=H[V];for(const G in X){const q=X[G];for(const O in q)f(q[O].object),delete q[O];delete X[G]}}delete i[N.id]}function P(N){for(const H in i){const V=i[H];for(const X in V){const G=V[X];if(G[N.id]===void 0)continue;const q=G[N.id];for(const O in q)f(q[O].object),delete q[O];delete G[N.id]}}}function S(N){for(const H in i){const V=i[H],X=N.isInstancedMesh===!0?N.id:0,G=V[X];if(G!==void 0){for(const q in G){const O=G[q];for(const re in O)f(O[re].object),delete O[re];delete G[q]}delete V[X],Object.keys(V).length===0&&delete i[H]}}}function I(){W(),s=!0,r!==o&&(r=o,c(r.object))}function W(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:l,reset:I,resetDefaultState:W,dispose:w,releaseStatesOfGeometry:M,releaseStatesOfObject:S,releaseStatesOfProgram:P,initAttributes:E,enableAttribute:g,disableUnusedAttributes:T}}function qg(n,e,t){let i;function o(c){i=c}function r(c,f){n.drawArrays(i,c,f),t.update(f,i,1)}function s(c,f,p){p!==0&&(n.drawArraysInstanced(i,c,f,p),t.update(f,i,p))}function l(c,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,p);let m=0;for(let v=0;v<p;v++)m+=f[v];t.update(m,i,1)}function d(c,f,p,h){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)s(c[v],f[v],h[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,p);let v=0;for(let E=0;E<p;E++)v+=f[E]*h[E];t.update(v,i,1)}}this.setMode=o,this.render=r,this.renderInstances=s,this.renderMultiDraw=l,this.renderMultiDrawInstances=d}function $g(n,e,t,i){let o;function r(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function s(P){return!(P!==yn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(P){const S=P===Xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==cn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==bn&&!S)}function d(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=d(c);f!==c&&(Xe("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const p=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),M=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:d,textureFormatReadable:s,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:v,maxTextureSize:E,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:T,maxVaryings:A,maxFragmentUniforms:C,maxSamples:w,samples:M}}function Xg(n){const e=this;let t=null,i=0,o=!1,r=!1;const s=new xi,l=new Ze,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const m=p.length!==0||h||i!==0||o;return o=h,i=p.length,m},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,h){t=f(p,h,0)},this.setState=function(p,h,m){const v=p.clippingPlanes,E=p.clipIntersection,g=p.clipShadows,_=n.get(p);if(!o||v===null||v.length===0||r&&!g)r?f(null):c();else{const T=r?0:i,A=T*4;let C=_.clippingState||null;d.value=C,C=f(v,h,A,m);for(let w=0;w!==A;++w)C[w]=t[w];_.clippingState=C,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=T}};function c(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(p,h,m,v){const E=p!==null?p.length:0;let g=null;if(E!==0){if(g=d.value,v!==!0||g===null){const _=m+E*4,T=h.matrixWorldInverse;l.getNormalMatrix(T),(g===null||g.length<_)&&(g=new Float32Array(_));for(let A=0,C=m;A!==E;++A,C+=4)s.copy(p[A]).applyMatrix4(T,l),s.normal.toArray(g,C),g[C+3]=s.constant}d.value=g,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,g}}const di=4,Wl=[.125,.215,.35,.446,.526,.582],Ai=20,Yg=256,Eo=new Pd,ql=new _t;let Ss=null,xs=0,Ts=0,Ms=!1;const Jg=new J;class $l{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,o=100,r={}){const{size:s=256,position:l=Jg}=r;Ss=this._renderer.getRenderTarget(),xs=this._renderer.getActiveCubeFace(),Ts=this._renderer.getActiveMipmapLevel(),Ms=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,i,o,d,l),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ss,xs,Ts),this._renderer.xr.enabled=Ms,e.scissorTest=!1,qi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wi||e.mapping===to?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ss=this._renderer.getRenderTarget(),xs=this._renderer.getActiveCubeFace(),Ts=this._renderer.getActiveMipmapLevel(),Ms=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Xn,format:yn,colorSpace:io,depthBuffer:!1},o=Xl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xl(e,t,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Kg(r)),this._blurMaterial=Qg(r,e,t),this._ggxMaterial=Zg(r,e,t)}return o}_compileMaterial(e){const t=new Un(new fn,e);this._renderer.compile(t,Eo)}_sceneToCubeUV(e,t,i,o,r){const d=new ln(90,1,t,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,m=p.toneMapping;p.getClearColor(ql),p.toneMapping=Nn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(o),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Un(new Lo,new tl({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,g=E.material;let _=!1;const T=e.background;T?T.isColor&&(g.color.copy(T),e.background=null,_=!0):(g.color.copy(ql),_=!0);for(let A=0;A<6;A++){const C=A%3;C===0?(d.up.set(0,c[A],0),d.position.set(r.x,r.y,r.z),d.lookAt(r.x+f[A],r.y,r.z)):C===1?(d.up.set(0,0,c[A]),d.position.set(r.x,r.y,r.z),d.lookAt(r.x,r.y+f[A],r.z)):(d.up.set(0,c[A],0),d.position.set(r.x,r.y,r.z),d.lookAt(r.x,r.y,r.z+f[A]));const w=this._cubeSize;qi(o,C*w,A>2?w:0,w,w),p.setRenderTarget(o),_&&p.render(E,d),p.render(e,d)}p.toneMapping=m,p.autoClear=h,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===wi||e.mapping===to;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yl());const r=o?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const l=r.uniforms;l.envMap.value=e;const d=this._cubeSize;qi(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(s,Eo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let r=1;r<o;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){const o=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,l=this._lodMeshes[i];l.material=s;const d=s.uniforms,c=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),p=Math.sqrt(c*c-f*f),h=0+c*1.25,m=p*h,{_lodMax:v}=this,E=this._sizeLods[i],g=3*E*(i>v-di?i-v+di:0),_=4*(this._cubeSize-E);d.envMap.value=e.texture,d.roughness.value=m,d.mipInt.value=v-t,qi(r,g,_,3*E,2*E),o.setRenderTarget(r),o.render(l,Eo),d.envMap.value=r.texture,d.roughness.value=0,d.mipInt.value=v-i,qi(e,g,_,3*E,2*E),o.setRenderTarget(e),o.render(l,Eo)}_blur(e,t,i,o,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,o,"latitudinal",r),this._halfBlur(s,e,i,i,o,"longitudinal",r)}_halfBlur(e,t,i,o,r,s,l){const d=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&rt("blur direction must be either latitudinal or longitudinal!");const f=3,p=this._lodMeshes[o];p.material=c;const h=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ai-1),E=r/v,g=isFinite(r)?1+Math.floor(f*E):Ai;g>Ai&&Xe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ai}`);const _=[];let T=0;for(let P=0;P<Ai;++P){const S=P/E,I=Math.exp(-S*S/2);_.push(I),P===0?T+=I:P<g&&(T+=2*I)}for(let P=0;P<_.length;P++)_[P]=_[P]/T;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=_,h.latitudinal.value=s==="latitudinal",l&&(h.poleAxis.value=l);const{_lodMax:A}=this;h.dTheta.value=v,h.mipInt.value=A-i;const C=this._sizeLods[o],w=3*C*(o>A-di?o-A+di:0),M=4*(this._cubeSize-C);qi(t,w,M,3*C,2*C),d.setRenderTarget(t),d.render(p,Eo)}}function Kg(n){const e=[],t=[],i=[];let o=n;const r=n-di+1+Wl.length;for(let s=0;s<r;s++){const l=Math.pow(2,o);e.push(l);let d=1/l;s>n-di?d=Wl[s-n+di-1]:s===0&&(d=0),t.push(d);const c=1/(l-2),f=-c,p=1+c,h=[f,f,p,f,p,p,f,f,p,p,f,p],m=6,v=6,E=3,g=2,_=1,T=new Float32Array(E*v*m),A=new Float32Array(g*v*m),C=new Float32Array(_*v*m);for(let M=0;M<m;M++){const P=M%3*2/3-1,S=M>2?0:-1,I=[P,S,0,P+2/3,S,0,P+2/3,S+1,0,P,S,0,P+2/3,S+1,0,P,S+1,0];T.set(I,E*v*M),A.set(h,g*v*M);const W=[M,M,M,M,M,M];C.set(W,_*v*M)}const w=new fn;w.setAttribute("position",new En(T,E)),w.setAttribute("uv",new En(A,g)),w.setAttribute("faceIndex",new En(C,_)),i.push(new Un(w,null)),o>di&&o--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Xl(n,e,t){const i=new Dn(n,e,t);return i.texture.mapping=Ur,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function qi(n,e,t,i,o){n.viewport.set(e,t,i,o),n.scissor.set(e,t,i,o)}function Zg(n,e,t){return new Fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Yg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kr(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Qg(n,e,t){const i=new Float32Array(Ai),o=new J(0,1,0);return new Fn({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:kr(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Yl(){return new Fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kr(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Jl(){return new Fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function kr(){return`

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
	`}class Dd extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new Id(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Lo(5,5,5),r=new Fn({name:"CubemapFromEquirect",uniforms:oo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:qn});r.uniforms.tEquirect.value=t;const s=new Un(o,r),l=t.minFilter;return t.minFilter===Ci&&(t.minFilter=qt),new op(1,10,this).update(e,s),t.minFilter=l,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,i=!0,o=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,o);e.setRenderTarget(r)}}function jg(n){let e=new WeakMap,t=new WeakMap,i=null;function o(h,m=!1){return h==null?null:m?s(h):r(h)}function r(h){if(h&&h.isTexture){const m=h.mapping;if(m===Yr||m===Jr)if(e.has(h)){const v=e.get(h).texture;return l(v,h.mapping)}else{const v=h.image;if(v&&v.height>0){const E=new Dd(v.height);return E.fromEquirectangularTexture(n,h),e.set(h,E),h.addEventListener("dispose",c),l(E.texture,h.mapping)}else return null}}return h}function s(h){if(h&&h.isTexture){const m=h.mapping,v=m===Yr||m===Jr,E=m===wi||m===to;if(v||E){let g=t.get(h);const _=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return i===null&&(i=new $l(n)),g=v?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const T=h.image;return v&&T&&T.height>0||E&&T&&d(T)?(i===null&&(i=new $l(n)),g=v?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",f),g.texture):null}}}return h}function l(h,m){return m===Yr?h.mapping=wi:m===Jr&&(h.mapping=to),h}function d(h){let m=0;const v=6;for(let E=0;E<v;E++)h[E]!==void 0&&m++;return m===v}function c(h){const m=h.target;m.removeEventListener("dispose",c);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function f(h){const m=h.target;m.removeEventListener("dispose",f);const v=t.get(m);v!==void 0&&(t.delete(m),v.dispose())}function p(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:o,dispose:p}}function e_(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const o=n.getExtension(i);return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&Ir("WebGLRenderer: "+i+" extension not supported."),o}}}function t_(n,e,t,i){const o={},r=new WeakMap;function s(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",s),delete o[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function l(p,h){return o[h.id]===!0||(h.addEventListener("dispose",s),o[h.id]=!0,t.memory.geometries++),h}function d(p){const h=p.attributes;for(const m in h)e.update(h[m],n.ARRAY_BUFFER)}function c(p){const h=[],m=p.index,v=p.attributes.position;let E=0;if(v===void 0)return;if(m!==null){const T=m.array;E=m.version;for(let A=0,C=T.length;A<C;A+=3){const w=T[A+0],M=T[A+1],P=T[A+2];h.push(w,M,M,P,P,w)}}else{const T=v.array;E=v.version;for(let A=0,C=T.length/3-1;A<C;A+=3){const w=A+0,M=A+1,P=A+2;h.push(w,M,M,P,P,w)}}const g=new(v.count>=65535?Md:Td)(h,1);g.version=E;const _=r.get(p);_&&e.remove(_),r.set(p,g)}function f(p){const h=r.get(p);if(h){const m=p.index;m!==null&&h.version<m.version&&c(p)}else c(p);return r.get(p)}return{get:l,update:d,getWireframeAttribute:f}}function n_(n,e,t){let i;function o(h){i=h}let r,s;function l(h){r=h.type,s=h.bytesPerElement}function d(h,m){n.drawElements(i,m,r,h*s),t.update(m,i,1)}function c(h,m,v){v!==0&&(n.drawElementsInstanced(i,m,r,h*s,v),t.update(m,i,v))}function f(h,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,h,0,v);let g=0;for(let _=0;_<v;_++)g+=m[_];t.update(g,i,1)}function p(h,m,v,E){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<h.length;_++)c(h[_]/s,m[_],E[_]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,r,h,0,E,0,v);let _=0;for(let T=0;T<v;T++)_+=m[T]*E[T];t.update(_,i,1)}}this.setMode=o,this.setIndex=l,this.render=d,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function i_(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,s,l){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=l*(r/3);break;case n.LINES:t.lines+=l*(r/2);break;case n.LINE_STRIP:t.lines+=l*(r-1);break;case n.LINE_LOOP:t.lines+=l*r;break;case n.POINTS:t.points+=l*r;break;default:rt("WebGLInfo: Unknown draw mode:",s);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function o_(n,e,t){const i=new WeakMap,o=new Pt;function r(s,l,d){const c=s.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=f!==void 0?f.length:0;let h=i.get(l);if(h===void 0||h.count!==p){let I=function(){P.dispose(),i.delete(l),l.removeEventListener("dispose",I)};h!==void 0&&h.texture.dispose();const m=l.morphAttributes.position!==void 0,v=l.morphAttributes.normal!==void 0,E=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],_=l.morphAttributes.normal||[],T=l.morphAttributes.color||[];let A=0;m===!0&&(A=1),v===!0&&(A=2),E===!0&&(A=3);let C=l.attributes.position.count*A,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const M=new Float32Array(C*w*4*p),P=new Sd(M,C,w,p);P.type=bn,P.needsUpdate=!0;const S=A*4;for(let W=0;W<p;W++){const N=g[W],H=_[W],V=T[W],X=C*w*4*W;for(let G=0;G<N.count;G++){const q=G*S;m===!0&&(o.fromBufferAttribute(N,G),M[X+q+0]=o.x,M[X+q+1]=o.y,M[X+q+2]=o.z,M[X+q+3]=0),v===!0&&(o.fromBufferAttribute(H,G),M[X+q+4]=o.x,M[X+q+5]=o.y,M[X+q+6]=o.z,M[X+q+7]=0),E===!0&&(o.fromBufferAttribute(V,G),M[X+q+8]=o.x,M[X+q+9]=o.y,M[X+q+10]=o.z,M[X+q+11]=V.itemSize===4?o.w:1)}}h={count:p,texture:P,size:new vt(C,w)},i.set(l,h),l.addEventListener("dispose",I)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let m=0;for(let E=0;E<c.length;E++)m+=c[E];const v=l.morphTargetsRelative?1:1-m;d.getUniforms().setValue(n,"morphTargetBaseInfluence",v),d.getUniforms().setValue(n,"morphTargetInfluences",c)}d.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function r_(n,e,t,i,o){let r=new WeakMap;function s(c){const f=o.render.frame,p=c.geometry,h=e.get(c,p);if(r.get(h)!==f&&(e.update(h),r.set(h,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",d)===!1&&c.addEventListener("dispose",d),r.get(c)!==f&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==f&&(m.update(),r.set(m,f))}return h}function l(){r=new WeakMap}function d(c){const f=c.target;f.removeEventListener("dispose",d),i.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:s,dispose:l}}const s_={[rd]:"LINEAR_TONE_MAPPING",[sd]:"REINHARD_TONE_MAPPING",[ad]:"CINEON_TONE_MAPPING",[ld]:"ACES_FILMIC_TONE_MAPPING",[ud]:"AGX_TONE_MAPPING",[dd]:"NEUTRAL_TONE_MAPPING",[cd]:"CUSTOM_TONE_MAPPING"};function a_(n,e,t,i,o){const r=new Dn(e,t,{type:n,depthBuffer:i,stencilBuffer:o}),s=new Dn(e,t,{type:Xn,depthBuffer:!1,stencilBuffer:!1}),l=new fn;l.setAttribute("position",new un([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new un([0,2,0,0,2,0],2));const d=new tp({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Un(l,d),f=new Pd(-1,1,1,-1,0,1);let p=null,h=null,m=!1,v,E=null,g=[],_=!1;this.setSize=function(T,A){r.setSize(T,A),s.setSize(T,A);for(let C=0;C<g.length;C++){const w=g[C];w.setSize&&w.setSize(T,A)}},this.setEffects=function(T){g=T,_=g.length>0&&g[0].isRenderPass===!0;const A=r.width,C=r.height;for(let w=0;w<g.length;w++){const M=g[w];M.setSize&&M.setSize(A,C)}},this.begin=function(T,A){if(m||T.toneMapping===Nn&&g.length===0)return!1;if(E=A,A!==null){const C=A.width,w=A.height;(r.width!==C||r.height!==w)&&this.setSize(C,w)}return _===!1&&T.setRenderTarget(r),v=T.toneMapping,T.toneMapping=Nn,!0},this.hasRenderPass=function(){return _},this.end=function(T,A){T.toneMapping=v,m=!0;let C=r,w=s;for(let M=0;M<g.length;M++){const P=g[M];if(P.enabled!==!1&&(P.render(T,w,C,A),P.needsSwap!==!1)){const S=C;C=w,w=S}}if(p!==T.outputColorSpace||h!==T.toneMapping){p=T.outputColorSpace,h=T.toneMapping,d.defines={},st.getTransfer(p)===gt&&(d.defines.SRGB_TRANSFER="");const M=s_[h];M&&(d.defines[M]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=C.texture,T.setRenderTarget(E),T.render(c,f),E=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){r.dispose(),s.dispose(),l.dispose(),d.dispose()}}const Ld=new Jt,Ca=new bo(1,1),Ud=new Sd,Fd=new Ph,Bd=new Id,Kl=[],Zl=[],Ql=new Float32Array(16),jl=new Float32Array(9),ec=new Float32Array(4);function ao(n,e,t){const i=n[0];if(i<=0||i>0)return n;const o=e*t;let r=Kl[o];if(r===void 0&&(r=new Float32Array(o),Kl[o]=r),e!==0){i.toArray(r,0);for(let s=1,l=0;s!==e;++s)l+=t,n[s].toArray(r,l)}return r}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Or(n,e){let t=Zl[e];t===void 0&&(t=new Int32Array(e),Zl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function l_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function c_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function u_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function d_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function f_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,i))return;ec.set(i),n.uniformMatrix2fv(this.addr,!1,ec),Lt(t,i)}}function h_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,i))return;jl.set(i),n.uniformMatrix3fv(this.addr,!1,jl),Lt(t,i)}}function p_(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Dt(t,i))return;Ql.set(i),n.uniformMatrix4fv(this.addr,!1,Ql),Lt(t,i)}}function m_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function g_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function __(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function v_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function y_(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function E_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function S_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function x_(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function T_(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o);let r;this.type===n.SAMPLER_2D_SHADOW?(Ca.compareFunction=t.isReversedDepthBuffer()?Za:Ka,r=Ca):r=Ld,t.setTexture2D(e||r,o)}function M_(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||Fd,o)}function A_(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||Bd,o)}function C_(n,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(n.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||Ud,o)}function I_(n){switch(n){case 5126:return l_;case 35664:return c_;case 35665:return u_;case 35666:return d_;case 35674:return f_;case 35675:return h_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return g_;case 35668:case 35672:return __;case 35669:case 35673:return v_;case 5125:return y_;case 36294:return E_;case 36295:return S_;case 36296:return x_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return M_;case 35680:case 36300:case 36308:case 36293:return A_;case 36289:case 36303:case 36311:case 36292:return C_}}function w_(n,e){n.uniform1fv(this.addr,e)}function R_(n,e){const t=ao(e,this.size,2);n.uniform2fv(this.addr,t)}function b_(n,e){const t=ao(e,this.size,3);n.uniform3fv(this.addr,t)}function P_(n,e){const t=ao(e,this.size,4);n.uniform4fv(this.addr,t)}function N_(n,e){const t=ao(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function D_(n,e){const t=ao(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function L_(n,e){const t=ao(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function U_(n,e){n.uniform1iv(this.addr,e)}function F_(n,e){n.uniform2iv(this.addr,e)}function B_(n,e){n.uniform3iv(this.addr,e)}function k_(n,e){n.uniform4iv(this.addr,e)}function O_(n,e){n.uniform1uiv(this.addr,e)}function G_(n,e){n.uniform2uiv(this.addr,e)}function V_(n,e){n.uniform3uiv(this.addr,e)}function H_(n,e){n.uniform4uiv(this.addr,e)}function z_(n,e,t){const i=this.cache,o=e.length,r=Or(t,o);Dt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));let s;this.type===n.SAMPLER_2D_SHADOW?s=Ca:s=Ld;for(let l=0;l!==o;++l)t.setTexture2D(e[l]||s,r[l])}function W_(n,e,t){const i=this.cache,o=e.length,r=Or(t,o);Dt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let s=0;s!==o;++s)t.setTexture3D(e[s]||Fd,r[s])}function q_(n,e,t){const i=this.cache,o=e.length,r=Or(t,o);Dt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let s=0;s!==o;++s)t.setTextureCube(e[s]||Bd,r[s])}function $_(n,e,t){const i=this.cache,o=e.length,r=Or(t,o);Dt(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let s=0;s!==o;++s)t.setTexture2DArray(e[s]||Ud,r[s])}function X_(n){switch(n){case 5126:return w_;case 35664:return R_;case 35665:return b_;case 35666:return P_;case 35674:return N_;case 35675:return D_;case 35676:return L_;case 5124:case 35670:return U_;case 35667:case 35671:return F_;case 35668:case 35672:return B_;case 35669:case 35673:return k_;case 5125:return O_;case 36294:return G_;case 36295:return V_;case 36296:return H_;case 35678:case 36198:case 36298:case 36306:case 35682:return z_;case 35679:case 36299:case 36307:return W_;case 35680:case 36300:case 36308:case 36293:return q_;case 36289:case 36303:case 36311:case 36292:return $_}}class Y_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=I_(t.type)}}class J_{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=X_(t.type)}}class K_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let r=0,s=o.length;r!==s;++r){const l=o[r];l.setValue(e,t[l.id],i)}}}const As=/(\w+)(\])?(\[|\.)?/g;function tc(n,e){n.seq.push(e),n.map[e.id]=e}function Z_(n,e,t){const i=n.name,o=i.length;for(As.lastIndex=0;;){const r=As.exec(i),s=As.lastIndex;let l=r[1];const d=r[2]==="]",c=r[3];if(d&&(l=l|0),c===void 0||c==="["&&s+2===o){tc(t,c===void 0?new Y_(l,n,e):new J_(l,n,e));break}else{let p=t.map[l];p===void 0&&(p=new K_(l),tc(t,p)),t=p}}}class Sr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const l=e.getActiveUniform(t,s),d=e.getUniformLocation(t,l.name);Z_(l,d,this)}const o=[],r=[];for(const s of this.seq)s.type===e.SAMPLER_2D_SHADOW||s.type===e.SAMPLER_CUBE_SHADOW||s.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(s):r.push(s);o.length>0&&(this.seq=o.concat(r))}setValue(e,t,i,o){const r=this.map[t];r!==void 0&&r.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let r=0,s=t.length;r!==s;++r){const l=t[r],d=i[l.id];d.needsUpdate!==!1&&l.setValue(e,d.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,r=e.length;o!==r;++o){const s=e[o];s.id in t&&i.push(s)}return i}}function nc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Q_=37297;let j_=0;function ev(n,e){const t=n.split(`
`),i=[],o=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=o;s<r;s++){const l=s+1;i.push(`${l===e?">":" "} ${l}: ${t[s]}`)}return i.join(`
`)}const ic=new Ze;function tv(n){st._getMatrix(ic,st.workingColorSpace,n);const e=`mat3( ${ic.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(n)){case Mr:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function oc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const l=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+ev(n.getShaderSource(e),l)}else return r}function nv(n,e){const t=tv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const iv={[rd]:"Linear",[sd]:"Reinhard",[ad]:"Cineon",[ld]:"ACESFilmic",[ud]:"AgX",[dd]:"Neutral",[cd]:"Custom"};function ov(n,e){const t=iv[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ur=new J;function rv(){st.getLuminanceCoefficients(ur);const n=ur.x.toFixed(4),e=ur.y.toFixed(4),t=ur.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Co).join(`
`)}function av(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const r=n.getActiveAttrib(e,o),s=r.name;let l=1;r.type===n.FLOAT_MAT2&&(l=2),r.type===n.FLOAT_MAT3&&(l=3),r.type===n.FLOAT_MAT4&&(l=4),t[s]={type:r.type,location:n.getAttribLocation(e,s),locationSize:l}}return t}function Co(n){return n!==""}function rc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ia(n){return n.replace(cv,dv)}const uv=new Map;function dv(n,e){let t=Qe[e];if(t===void 0){const i=uv.get(e);if(i!==void 0)t=Qe[i],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ia(t)}const fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ac(n){return n.replace(fv,hv)}function hv(n,e,t,i){let o="";for(let r=parseInt(e);r<parseInt(t);r++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return o}function lc(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const pv={[gr]:"SHADOWMAP_TYPE_PCF",[Ao]:"SHADOWMAP_TYPE_VSM"};function mv(n){return pv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const gv={[wi]:"ENVMAP_TYPE_CUBE",[to]:"ENVMAP_TYPE_CUBE",[Ur]:"ENVMAP_TYPE_CUBE_UV"};function _v(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":gv[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const vv={[to]:"ENVMAP_MODE_REFRACTION"};function yv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":vv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Ev={[od]:"ENVMAP_BLENDING_MULTIPLY",[ch]:"ENVMAP_BLENDING_MIX",[uh]:"ENVMAP_BLENDING_ADD"};function Sv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Ev[n.combine]||"ENVMAP_BLENDING_NONE"}function xv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Tv(n,e,t,i){const o=n.getContext(),r=t.defines;let s=t.vertexShader,l=t.fragmentShader;const d=mv(t),c=_v(t),f=yv(t),p=Sv(t),h=xv(t),m=sv(t),v=av(r),E=o.createProgram();let g,_,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Co).join(`
`),g.length>0&&(g+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Co).join(`
`),_.length>0&&(_+=`
`)):(g=[lc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Co).join(`
`),_=[lc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Nn?ov("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,nv("linearToOutputTexel",t.outputColorSpace),rv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Co).join(`
`)),s=Ia(s),s=rc(s,t),s=sc(s,t),l=Ia(l),l=rc(l,t),l=sc(l,t),s=ac(s),l=ac(l),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["#define varying in",t.glslVersion===El?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===El?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const A=T+g+s,C=T+_+l,w=nc(o,o.VERTEX_SHADER,A),M=nc(o,o.FRAGMENT_SHADER,C);o.attachShader(E,w),o.attachShader(E,M),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function P(N){if(n.debug.checkShaderErrors){const H=o.getProgramInfoLog(E)||"",V=o.getShaderInfoLog(w)||"",X=o.getShaderInfoLog(M)||"",G=H.trim(),q=V.trim(),O=X.trim();let re=!0,ie=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(re=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,E,w,M);else{const _e=oc(o,w,"vertex"),Ie=oc(o,M,"fragment");rt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+G+`
`+_e+`
`+Ie)}else G!==""?Xe("WebGLProgram: Program Info Log:",G):(q===""||O==="")&&(ie=!1);ie&&(N.diagnostics={runnable:re,programLog:G,vertexShader:{log:q,prefix:g},fragmentShader:{log:O,prefix:_}})}o.deleteShader(w),o.deleteShader(M),S=new Sr(o,E),I=lv(o,E)}let S;this.getUniforms=function(){return S===void 0&&P(this),S};let I;this.getAttributes=function(){return I===void 0&&P(this),I};let W=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return W===!1&&(W=o.getProgramParameter(E,Q_)),W},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=j_++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=w,this.fragmentShader=M,this}let Mv=0;class Av{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),r=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(o)===!1&&(s.add(o),o.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Cv(e),t.set(e,i)),i}}class Cv{constructor(e){this.id=Mv++,this.code=e,this.usedTimes=0}}function Iv(n,e,t,i,o,r){const s=new ja,l=new Av,d=new Set,c=[],f=new Map,p=i.logarithmicDepthBuffer;let h=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return d.add(S),S===0?"uv":`uv${S}`}function E(S,I,W,N,H){const V=N.fog,X=H.geometry,G=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?N.environment:null,q=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,O=e.get(S.envMap||G,q),re=O&&O.mapping===Ur?O.image.height:null,ie=m[S.type];S.precision!==null&&(h=i.getMaxPrecision(S.precision),h!==S.precision&&Xe("WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const _e=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ie=_e!==void 0?_e.length:0;let xe=0;X.morphAttributes.position!==void 0&&(xe=1),X.morphAttributes.normal!==void 0&&(xe=2),X.morphAttributes.color!==void 0&&(xe=3);let He,mt,yt,ne;if(ie){const ft=Rn[ie];He=ft.vertexShader,mt=ft.fragmentShader}else He=S.vertexShader,mt=S.fragmentShader,l.update(S),yt=l.getVertexShaderID(S),ne=l.getFragmentShaderID(S);const he=n.getRenderTarget(),pe=n.state.buffers.depth.getReversed(),Ge=H.isInstancedMesh===!0,Oe=H.isBatchedMesh===!0,ze=!!S.map,At=!!S.matcap,qe=!!O,et=!!S.aoMap,ht=!!S.lightMap,We=!!S.bumpMap,at=!!S.normalMap,D=!!S.displacementMap,Ct=!!S.emissiveMap,lt=!!S.metalnessMap,pt=!!S.roughnessMap,Pe=S.anisotropy>0,R=S.clearcoat>0,y=S.dispersion>0,F=S.iridescence>0,te=S.sheen>0,oe=S.transmission>0,Z=Pe&&!!S.anisotropyMap,Ae=R&&!!S.clearcoatMap,fe=R&&!!S.clearcoatNormalMap,Le=R&&!!S.clearcoatRoughnessMap,ke=F&&!!S.iridescenceMap,ae=F&&!!S.iridescenceThicknessMap,ue=te&&!!S.sheenColorMap,we=te&&!!S.sheenRoughnessMap,Re=!!S.specularMap,Se=!!S.specularColorMap,Je=!!S.specularIntensityMap,U=oe&&!!S.transmissionMap,le=oe&&!!S.thicknessMap,se=!!S.gradientMap,Me=!!S.alphaMap,ce=S.alphaTest>0,j=!!S.alphaHash,be=!!S.extensions;let Ve=Nn;S.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Ve=n.toneMapping);const dt={shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:He,fragmentShader:mt,defines:S.defines,customVertexShaderID:yt,customFragmentShaderID:ne,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:Oe,batchingColor:Oe&&H._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&H.instanceColor!==null,instancingMorph:Ge&&H.morphTexture!==null,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:io,alphaToCoverage:!!S.alphaToCoverage,map:ze,matcap:At,envMap:qe,envMapMode:qe&&O.mapping,envMapCubeUVHeight:re,aoMap:et,lightMap:ht,bumpMap:We,normalMap:at,displacementMap:D,emissiveMap:Ct,normalMapObjectSpace:at&&S.normalMapType===ph,normalMapTangentSpace:at&&S.normalMapType===hh,metalnessMap:lt,roughnessMap:pt,anisotropy:Pe,anisotropyMap:Z,clearcoat:R,clearcoatMap:Ae,clearcoatNormalMap:fe,clearcoatRoughnessMap:Le,dispersion:y,iridescence:F,iridescenceMap:ke,iridescenceThicknessMap:ae,sheen:te,sheenColorMap:ue,sheenRoughnessMap:we,specularMap:Re,specularColorMap:Se,specularIntensityMap:Je,transmission:oe,transmissionMap:U,thicknessMap:le,gradientMap:se,opaque:S.transparent===!1&&S.blending===Ki&&S.alphaToCoverage===!1,alphaMap:Me,alphaTest:ce,alphaHash:j,combine:S.combine,mapUv:ze&&v(S.map.channel),aoMapUv:et&&v(S.aoMap.channel),lightMapUv:ht&&v(S.lightMap.channel),bumpMapUv:We&&v(S.bumpMap.channel),normalMapUv:at&&v(S.normalMap.channel),displacementMapUv:D&&v(S.displacementMap.channel),emissiveMapUv:Ct&&v(S.emissiveMap.channel),metalnessMapUv:lt&&v(S.metalnessMap.channel),roughnessMapUv:pt&&v(S.roughnessMap.channel),anisotropyMapUv:Z&&v(S.anisotropyMap.channel),clearcoatMapUv:Ae&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:fe&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:we&&v(S.sheenRoughnessMap.channel),specularMapUv:Re&&v(S.specularMap.channel),specularColorMapUv:Se&&v(S.specularColorMap.channel),specularIntensityMapUv:Je&&v(S.specularIntensityMap.channel),transmissionMapUv:U&&v(S.transmissionMap.channel),thicknessMapUv:le&&v(S.thicknessMap.channel),alphaMapUv:Me&&v(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(at||Pe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!X.attributes.uv&&(ze||Me),fog:!!V,useFog:S.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||X.attributes.normal===void 0&&at===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:pe,skinning:H.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:xe,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ve,decodeVideoTexture:ze&&S.map.isVideoTexture===!0&&st.getTransfer(S.map.colorSpace)===gt,decodeVideoTextureEmissive:Ct&&S.emissiveMap.isVideoTexture===!0&&st.getTransfer(S.emissiveMap.colorSpace)===gt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===zn,flipSided:S.side===Qt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:be&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&S.extensions.multiDraw===!0||Oe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return dt.vertexUv1s=d.has(1),dt.vertexUv2s=d.has(2),dt.vertexUv3s=d.has(3),d.clear(),dt}function g(S){const I=[];if(S.shaderID?I.push(S.shaderID):(I.push(S.customVertexShaderID),I.push(S.customFragmentShaderID)),S.defines!==void 0)for(const W in S.defines)I.push(W),I.push(S.defines[W]);return S.isRawShaderMaterial===!1&&(_(I,S),T(I,S),I.push(n.outputColorSpace)),I.push(S.customProgramCacheKey),I.join()}function _(S,I){S.push(I.precision),S.push(I.outputColorSpace),S.push(I.envMapMode),S.push(I.envMapCubeUVHeight),S.push(I.mapUv),S.push(I.alphaMapUv),S.push(I.lightMapUv),S.push(I.aoMapUv),S.push(I.bumpMapUv),S.push(I.normalMapUv),S.push(I.displacementMapUv),S.push(I.emissiveMapUv),S.push(I.metalnessMapUv),S.push(I.roughnessMapUv),S.push(I.anisotropyMapUv),S.push(I.clearcoatMapUv),S.push(I.clearcoatNormalMapUv),S.push(I.clearcoatRoughnessMapUv),S.push(I.iridescenceMapUv),S.push(I.iridescenceThicknessMapUv),S.push(I.sheenColorMapUv),S.push(I.sheenRoughnessMapUv),S.push(I.specularMapUv),S.push(I.specularColorMapUv),S.push(I.specularIntensityMapUv),S.push(I.transmissionMapUv),S.push(I.thicknessMapUv),S.push(I.combine),S.push(I.fogExp2),S.push(I.sizeAttenuation),S.push(I.morphTargetsCount),S.push(I.morphAttributeCount),S.push(I.numDirLights),S.push(I.numPointLights),S.push(I.numSpotLights),S.push(I.numSpotLightMaps),S.push(I.numHemiLights),S.push(I.numRectAreaLights),S.push(I.numDirLightShadows),S.push(I.numPointLightShadows),S.push(I.numSpotLightShadows),S.push(I.numSpotLightShadowsWithMaps),S.push(I.numLightProbes),S.push(I.shadowMapType),S.push(I.toneMapping),S.push(I.numClippingPlanes),S.push(I.numClipIntersection),S.push(I.depthPacking)}function T(S,I){s.disableAll(),I.instancing&&s.enable(0),I.instancingColor&&s.enable(1),I.instancingMorph&&s.enable(2),I.matcap&&s.enable(3),I.envMap&&s.enable(4),I.normalMapObjectSpace&&s.enable(5),I.normalMapTangentSpace&&s.enable(6),I.clearcoat&&s.enable(7),I.iridescence&&s.enable(8),I.alphaTest&&s.enable(9),I.vertexColors&&s.enable(10),I.vertexAlphas&&s.enable(11),I.vertexUv1s&&s.enable(12),I.vertexUv2s&&s.enable(13),I.vertexUv3s&&s.enable(14),I.vertexTangents&&s.enable(15),I.anisotropy&&s.enable(16),I.alphaHash&&s.enable(17),I.batching&&s.enable(18),I.dispersion&&s.enable(19),I.batchingColor&&s.enable(20),I.gradientMap&&s.enable(21),S.push(s.mask),s.disableAll(),I.fog&&s.enable(0),I.useFog&&s.enable(1),I.flatShading&&s.enable(2),I.logarithmicDepthBuffer&&s.enable(3),I.reversedDepthBuffer&&s.enable(4),I.skinning&&s.enable(5),I.morphTargets&&s.enable(6),I.morphNormals&&s.enable(7),I.morphColors&&s.enable(8),I.premultipliedAlpha&&s.enable(9),I.shadowMapEnabled&&s.enable(10),I.doubleSided&&s.enable(11),I.flipSided&&s.enable(12),I.useDepthPacking&&s.enable(13),I.dithering&&s.enable(14),I.transmission&&s.enable(15),I.sheen&&s.enable(16),I.opaque&&s.enable(17),I.pointsUvs&&s.enable(18),I.decodeVideoTexture&&s.enable(19),I.decodeVideoTextureEmissive&&s.enable(20),I.alphaToCoverage&&s.enable(21),S.push(s.mask)}function A(S){const I=m[S.type];let W;if(I){const N=Rn[I];W=Qh.clone(N.uniforms)}else W=S.uniforms;return W}function C(S,I){let W=f.get(I);return W!==void 0?++W.usedTimes:(W=new Tv(n,I,S,o),c.push(W),f.set(I,W)),W}function w(S){if(--S.usedTimes===0){const I=c.indexOf(S);c[I]=c[c.length-1],c.pop(),f.delete(S.cacheKey),S.destroy()}}function M(S){l.remove(S)}function P(){l.dispose()}return{getParameters:E,getProgramCacheKey:g,getUniforms:A,acquireProgram:C,releaseProgram:w,releaseShaderCache:M,programs:c,dispose:P}}function wv(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let l=n.get(s);return l===void 0&&(l={},n.set(s,l)),l}function i(s){n.delete(s)}function o(s,l,d){n.get(s)[l]=d}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:o,dispose:r}}function Rv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function cc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function uc(){const n=[];let e=0;const t=[],i=[],o=[];function r(){e=0,t.length=0,i.length=0,o.length=0}function s(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function l(h,m,v,E,g,_){let T=n[e];return T===void 0?(T={id:h.id,object:h,geometry:m,material:v,materialVariant:s(h),groupOrder:E,renderOrder:h.renderOrder,z:g,group:_},n[e]=T):(T.id=h.id,T.object=h,T.geometry=m,T.material=v,T.materialVariant=s(h),T.groupOrder=E,T.renderOrder=h.renderOrder,T.z=g,T.group=_),e++,T}function d(h,m,v,E,g,_){const T=l(h,m,v,E,g,_);v.transmission>0?i.push(T):v.transparent===!0?o.push(T):t.push(T)}function c(h,m,v,E,g,_){const T=l(h,m,v,E,g,_);v.transmission>0?i.unshift(T):v.transparent===!0?o.unshift(T):t.unshift(T)}function f(h,m){t.length>1&&t.sort(h||Rv),i.length>1&&i.sort(m||cc),o.length>1&&o.sort(m||cc)}function p(){for(let h=e,m=n.length;h<m;h++){const v=n[h];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:o,init:r,push:d,unshift:c,finish:p,sort:f}}function bv(){let n=new WeakMap;function e(i,o){const r=n.get(i);let s;return r===void 0?(s=new uc,n.set(i,[s])):o>=r.length?(s=new uc,r.push(s)):s=r[o],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function Pv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new J,color:new _t};break;case"SpotLight":t={position:new J,direction:new J,color:new _t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new _t,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new _t,groundColor:new _t};break;case"RectAreaLight":t={color:new _t,position:new J,halfWidth:new J,halfHeight:new J};break}return n[e.id]=t,t}}}function Nv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Dv=0;function Lv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Uv(n){const e=new Pv,t=Nv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new J);const o=new J,r=new wt,s=new wt;function l(c){let f=0,p=0,h=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let m=0,v=0,E=0,g=0,_=0,T=0,A=0,C=0,w=0,M=0,P=0;c.sort(Lv);for(let I=0,W=c.length;I<W;I++){const N=c[I],H=N.color,V=N.intensity,X=N.distance;let G=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===no?G=N.shadow.map.texture:G=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)f+=H.r*V,p+=H.g*V,h+=H.b*V;else if(N.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(N.sh.coefficients[q],V);P++}else if(N.isDirectionalLight){const q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const O=N.shadow,re=t.get(N);re.shadowIntensity=O.intensity,re.shadowBias=O.bias,re.shadowNormalBias=O.normalBias,re.shadowRadius=O.radius,re.shadowMapSize=O.mapSize,i.directionalShadow[m]=re,i.directionalShadowMap[m]=G,i.directionalShadowMatrix[m]=N.shadow.matrix,T++}i.directional[m]=q,m++}else if(N.isSpotLight){const q=e.get(N);q.position.setFromMatrixPosition(N.matrixWorld),q.color.copy(H).multiplyScalar(V),q.distance=X,q.coneCos=Math.cos(N.angle),q.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),q.decay=N.decay,i.spot[E]=q;const O=N.shadow;if(N.map&&(i.spotLightMap[w]=N.map,w++,O.updateMatrices(N),N.castShadow&&M++),i.spotLightMatrix[E]=O.matrix,N.castShadow){const re=t.get(N);re.shadowIntensity=O.intensity,re.shadowBias=O.bias,re.shadowNormalBias=O.normalBias,re.shadowRadius=O.radius,re.shadowMapSize=O.mapSize,i.spotShadow[E]=re,i.spotShadowMap[E]=G,C++}E++}else if(N.isRectAreaLight){const q=e.get(N);q.color.copy(H).multiplyScalar(V),q.halfWidth.set(N.width*.5,0,0),q.halfHeight.set(0,N.height*.5,0),i.rectArea[g]=q,g++}else if(N.isPointLight){const q=e.get(N);if(q.color.copy(N.color).multiplyScalar(N.intensity),q.distance=N.distance,q.decay=N.decay,N.castShadow){const O=N.shadow,re=t.get(N);re.shadowIntensity=O.intensity,re.shadowBias=O.bias,re.shadowNormalBias=O.normalBias,re.shadowRadius=O.radius,re.shadowMapSize=O.mapSize,re.shadowCameraNear=O.camera.near,re.shadowCameraFar=O.camera.far,i.pointShadow[v]=re,i.pointShadowMap[v]=G,i.pointShadowMatrix[v]=N.shadow.matrix,A++}i.point[v]=q,v++}else if(N.isHemisphereLight){const q=e.get(N);q.skyColor.copy(N.color).multiplyScalar(V),q.groundColor.copy(N.groundColor).multiplyScalar(V),i.hemi[_]=q,_++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=h;const S=i.hash;(S.directionalLength!==m||S.pointLength!==v||S.spotLength!==E||S.rectAreaLength!==g||S.hemiLength!==_||S.numDirectionalShadows!==T||S.numPointShadows!==A||S.numSpotShadows!==C||S.numSpotMaps!==w||S.numLightProbes!==P)&&(i.directional.length=m,i.spot.length=E,i.rectArea.length=g,i.point.length=v,i.hemi.length=_,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=C,i.spotShadowMap.length=C,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=C+w-M,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=P,S.directionalLength=m,S.pointLength=v,S.spotLength=E,S.rectAreaLength=g,S.hemiLength=_,S.numDirectionalShadows=T,S.numPointShadows=A,S.numSpotShadows=C,S.numSpotMaps=w,S.numLightProbes=P,i.version=Dv++)}function d(c,f){let p=0,h=0,m=0,v=0,E=0;const g=f.matrixWorldInverse;for(let _=0,T=c.length;_<T;_++){const A=c[_];if(A.isDirectionalLight){const C=i.directional[p];C.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(g),p++}else if(A.isSpotLight){const C=i.spot[m];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(g),C.direction.setFromMatrixPosition(A.matrixWorld),o.setFromMatrixPosition(A.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(g),m++}else if(A.isRectAreaLight){const C=i.rectArea[v];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(g),s.identity(),r.copy(A.matrixWorld),r.premultiply(g),s.extractRotation(r),C.halfWidth.set(A.width*.5,0,0),C.halfHeight.set(0,A.height*.5,0),C.halfWidth.applyMatrix4(s),C.halfHeight.applyMatrix4(s),v++}else if(A.isPointLight){const C=i.point[h];C.position.setFromMatrixPosition(A.matrixWorld),C.position.applyMatrix4(g),h++}else if(A.isHemisphereLight){const C=i.hemi[E];C.direction.setFromMatrixPosition(A.matrixWorld),C.direction.transformDirection(g),E++}}}return{setup:l,setupView:d,state:i}}function dc(n){const e=new Uv(n),t=[],i=[];function o(f){c.camera=f,t.length=0,i.length=0}function r(f){t.push(f)}function s(f){i.push(f)}function l(){e.setup(t)}function d(f){e.setupView(t,f)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:c,setupLights:l,setupLightsView:d,pushLight:r,pushShadow:s}}function Fv(n){let e=new WeakMap;function t(o,r=0){const s=e.get(o);let l;return s===void 0?(l=new dc(n),e.set(o,[l])):r>=s.length?(l=new dc(n),s.push(l)):l=s[r],l}function i(){e=new WeakMap}return{get:t,dispose:i}}const Bv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kv=`uniform sampler2D shadow_pass;
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
}`,Ov=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],Gv=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],fc=new wt,So=new J,Cs=new J;function Vv(n,e,t){let i=new Ad;const o=new vt,r=new vt,s=new Pt,l=new np,d=new ip,c={},f=t.maxTextureSize,p={[hi]:Qt,[Qt]:hi,[zn]:zn},h=new Fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:Bv,fragmentShader:kv}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new fn;v.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Un(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gr;let _=this.type;this.render=function(M,P,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||M.length===0)return;this.type===Wf&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=gr);const I=n.getRenderTarget(),W=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),H=n.state;H.setBlending(qn),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const V=_!==this.type;V&&P.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(G=>G.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,G=M.length;X<G;X++){const q=M[X],O=q.shadow;if(O===void 0){Xe("WebGLShadowMap:",q,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;o.copy(O.mapSize);const re=O.getFrameExtents();o.multiply(re),r.copy(O.mapSize),(o.x>f||o.y>f)&&(o.x>f&&(r.x=Math.floor(f/re.x),o.x=r.x*re.x,O.mapSize.x=r.x),o.y>f&&(r.y=Math.floor(f/re.y),o.y=r.y*re.y,O.mapSize.y=r.y));const ie=n.state.buffers.depth.getReversed();if(O.camera._reversedDepth=ie,O.map===null||V===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Ao){if(q.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Dn(o.x,o.y,{format:no,type:Xn,minFilter:qt,magFilter:qt,generateMipmaps:!1}),O.map.texture.name=q.name+".shadowMap",O.map.depthTexture=new bo(o.x,o.y,bn),O.map.depthTexture.name=q.name+".shadowMapDepth",O.map.depthTexture.format=Yn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Vt,O.map.depthTexture.magFilter=Vt}else q.isPointLight?(O.map=new Dd(o.x),O.map.depthTexture=new Kh(o.x,Ln)):(O.map=new Dn(o.x,o.y),O.map.depthTexture=new bo(o.x,o.y,Ln)),O.map.depthTexture.name=q.name+".shadowMap",O.map.depthTexture.format=Yn,this.type===gr?(O.map.depthTexture.compareFunction=ie?Za:Ka,O.map.depthTexture.minFilter=qt,O.map.depthTexture.magFilter=qt):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Vt,O.map.depthTexture.magFilter=Vt);O.camera.updateProjectionMatrix()}const _e=O.map.isWebGLCubeRenderTarget?6:1;for(let Ie=0;Ie<_e;Ie++){if(O.map.isWebGLCubeRenderTarget)n.setRenderTarget(O.map,Ie),n.clear();else{Ie===0&&(n.setRenderTarget(O.map),n.clear());const xe=O.getViewport(Ie);s.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),H.viewport(s)}if(q.isPointLight){const xe=O.camera,He=O.matrix,mt=q.distance||xe.far;mt!==xe.far&&(xe.far=mt,xe.updateProjectionMatrix()),So.setFromMatrixPosition(q.matrixWorld),xe.position.copy(So),Cs.copy(xe.position),Cs.add(Ov[Ie]),xe.up.copy(Gv[Ie]),xe.lookAt(Cs),xe.updateMatrixWorld(),He.makeTranslation(-So.x,-So.y,-So.z),fc.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),O._frustum.setFromProjectionMatrix(fc,xe.coordinateSystem,xe.reversedDepth)}else O.updateMatrices(q);i=O.getFrustum(),C(P,S,O.camera,q,this.type)}O.isPointLightShadow!==!0&&this.type===Ao&&T(O,S),O.needsUpdate=!1}_=this.type,g.needsUpdate=!1,n.setRenderTarget(I,W,N)};function T(M,P){const S=e.update(E);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,m.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Dn(o.x,o.y,{format:no,type:Xn})),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,n.setRenderTarget(M.mapPass),n.clear(),n.renderBufferDirect(P,null,S,h,E,null),m.uniforms.shadow_pass.value=M.mapPass.texture,m.uniforms.resolution.value=M.mapSize,m.uniforms.radius.value=M.radius,n.setRenderTarget(M.map),n.clear(),n.renderBufferDirect(P,null,S,m,E,null)}function A(M,P,S,I){let W=null;const N=S.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(N!==void 0)W=N;else if(W=S.isPointLight===!0?d:l,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const H=W.uuid,V=P.uuid;let X=c[H];X===void 0&&(X={},c[H]=X);let G=X[V];G===void 0&&(G=W.clone(),X[V]=G,P.addEventListener("dispose",w)),W=G}if(W.visible=P.visible,W.wireframe=P.wireframe,I===Ao?W.side=P.shadowSide!==null?P.shadowSide:P.side:W.side=P.shadowSide!==null?P.shadowSide:p[P.side],W.alphaMap=P.alphaMap,W.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,W.map=P.map,W.clipShadows=P.clipShadows,W.clippingPlanes=P.clippingPlanes,W.clipIntersection=P.clipIntersection,W.displacementMap=P.displacementMap,W.displacementScale=P.displacementScale,W.displacementBias=P.displacementBias,W.wireframeLinewidth=P.wireframeLinewidth,W.linewidth=P.linewidth,S.isPointLight===!0&&W.isMeshDistanceMaterial===!0){const H=n.properties.get(W);H.light=S}return W}function C(M,P,S,I,W){if(M.visible===!1)return;if(M.layers.test(P.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&W===Ao)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,M.matrixWorld);const V=e.update(M),X=M.material;if(Array.isArray(X)){const G=V.groups;for(let q=0,O=G.length;q<O;q++){const re=G[q],ie=X[re.materialIndex];if(ie&&ie.visible){const _e=A(M,ie,I,W);M.onBeforeShadow(n,M,P,S,V,_e,re),n.renderBufferDirect(S,null,V,_e,M,re),M.onAfterShadow(n,M,P,S,V,_e,re)}}}else if(X.visible){const G=A(M,X,I,W);M.onBeforeShadow(n,M,P,S,V,G,null),n.renderBufferDirect(S,null,V,G,M,null),M.onAfterShadow(n,M,P,S,V,G,null)}}const H=M.children;for(let V=0,X=H.length;V<X;V++)C(H[V],P,S,I,W)}function w(M){M.target.removeEventListener("dispose",w);for(const S in c){const I=c[S],W=M.target.uuid;W in I&&(I[W].dispose(),delete I[W])}}}function Hv(n,e){function t(){let U=!1;const le=new Pt;let se=null;const Me=new Pt(0,0,0,0);return{setMask:function(ce){se!==ce&&!U&&(n.colorMask(ce,ce,ce,ce),se=ce)},setLocked:function(ce){U=ce},setClear:function(ce,j,be,Ve,dt){dt===!0&&(ce*=Ve,j*=Ve,be*=Ve),le.set(ce,j,be,Ve),Me.equals(le)===!1&&(n.clearColor(ce,j,be,Ve),Me.copy(le))},reset:function(){U=!1,se=null,Me.set(-1,0,0,0)}}}function i(){let U=!1,le=!1,se=null,Me=null,ce=null;return{setReversed:function(j){if(le!==j){const be=e.get("EXT_clip_control");j?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),le=j;const Ve=ce;ce=null,this.setClear(Ve)}},getReversed:function(){return le},setTest:function(j){j?he(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(j){se!==j&&!U&&(n.depthMask(j),se=j)},setFunc:function(j){if(le&&(j=Mh[j]),Me!==j){switch(j){case Fs:n.depthFunc(n.NEVER);break;case Bs:n.depthFunc(n.ALWAYS);break;case ks:n.depthFunc(n.LESS);break;case eo:n.depthFunc(n.LEQUAL);break;case Os:n.depthFunc(n.EQUAL);break;case Gs:n.depthFunc(n.GEQUAL);break;case Vs:n.depthFunc(n.GREATER);break;case Hs:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Me=j}},setLocked:function(j){U=j},setClear:function(j){ce!==j&&(ce=j,le&&(j=1-j),n.clearDepth(j))},reset:function(){U=!1,se=null,Me=null,ce=null,le=!1}}}function o(){let U=!1,le=null,se=null,Me=null,ce=null,j=null,be=null,Ve=null,dt=null;return{setTest:function(ft){U||(ft?he(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(ft){le!==ft&&!U&&(n.stencilMask(ft),le=ft)},setFunc:function(ft,Mn,hn){(se!==ft||Me!==Mn||ce!==hn)&&(n.stencilFunc(ft,Mn,hn),se=ft,Me=Mn,ce=hn)},setOp:function(ft,Mn,hn){(j!==ft||be!==Mn||Ve!==hn)&&(n.stencilOp(ft,Mn,hn),j=ft,be=Mn,Ve=hn)},setLocked:function(ft){U=ft},setClear:function(ft){dt!==ft&&(n.clearStencil(ft),dt=ft)},reset:function(){U=!1,le=null,se=null,Me=null,ce=null,j=null,be=null,Ve=null,dt=null}}}const r=new t,s=new i,l=new o,d=new WeakMap,c=new WeakMap;let f={},p={},h=new WeakMap,m=[],v=null,E=!1,g=null,_=null,T=null,A=null,C=null,w=null,M=null,P=new _t(0,0,0),S=0,I=!1,W=null,N=null,H=null,V=null,X=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,O=0;const re=n.getParameter(n.VERSION);re.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(re)[1]),q=O>=1):re.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),q=O>=2);let ie=null,_e={};const Ie=n.getParameter(n.SCISSOR_BOX),xe=n.getParameter(n.VIEWPORT),He=new Pt().fromArray(Ie),mt=new Pt().fromArray(xe);function yt(U,le,se,Me){const ce=new Uint8Array(4),j=n.createTexture();n.bindTexture(U,j),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let be=0;be<se;be++)U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY?n.texImage3D(le,0,n.RGBA,1,1,Me,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(le+be,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return j}const ne={};ne[n.TEXTURE_2D]=yt(n.TEXTURE_2D,n.TEXTURE_2D,1),ne[n.TEXTURE_CUBE_MAP]=yt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[n.TEXTURE_2D_ARRAY]=yt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ne[n.TEXTURE_3D]=yt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),l.setClear(0),he(n.DEPTH_TEST),s.setFunc(eo),We(!1),at(ml),he(n.CULL_FACE),et(qn);function he(U){f[U]!==!0&&(n.enable(U),f[U]=!0)}function pe(U){f[U]!==!1&&(n.disable(U),f[U]=!1)}function Ge(U,le){return p[U]!==le?(n.bindFramebuffer(U,le),p[U]=le,U===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=le),U===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=le),!0):!1}function Oe(U,le){let se=m,Me=!1;if(U){se=h.get(le),se===void 0&&(se=[],h.set(le,se));const ce=U.textures;if(se.length!==ce.length||se[0]!==n.COLOR_ATTACHMENT0){for(let j=0,be=ce.length;j<be;j++)se[j]=n.COLOR_ATTACHMENT0+j;se.length=ce.length,Me=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,Me=!0);Me&&n.drawBuffers(se)}function ze(U){return v!==U?(n.useProgram(U),v=U,!0):!1}const At={[Mi]:n.FUNC_ADD,[$f]:n.FUNC_SUBTRACT,[Xf]:n.FUNC_REVERSE_SUBTRACT};At[Yf]=n.MIN,At[Jf]=n.MAX;const qe={[Kf]:n.ZERO,[Zf]:n.ONE,[Qf]:n.SRC_COLOR,[Ls]:n.SRC_ALPHA,[oh]:n.SRC_ALPHA_SATURATE,[nh]:n.DST_COLOR,[eh]:n.DST_ALPHA,[jf]:n.ONE_MINUS_SRC_COLOR,[Us]:n.ONE_MINUS_SRC_ALPHA,[ih]:n.ONE_MINUS_DST_COLOR,[th]:n.ONE_MINUS_DST_ALPHA,[rh]:n.CONSTANT_COLOR,[sh]:n.ONE_MINUS_CONSTANT_COLOR,[ah]:n.CONSTANT_ALPHA,[lh]:n.ONE_MINUS_CONSTANT_ALPHA};function et(U,le,se,Me,ce,j,be,Ve,dt,ft){if(U===qn){E===!0&&(pe(n.BLEND),E=!1);return}if(E===!1&&(he(n.BLEND),E=!0),U!==qf){if(U!==g||ft!==I){if((_!==Mi||C!==Mi)&&(n.blendEquation(n.FUNC_ADD),_=Mi,C=Mi),ft)switch(U){case Ki:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ds:n.blendFunc(n.ONE,n.ONE);break;case gl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _l:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:rt("WebGLState: Invalid blending: ",U);break}else switch(U){case Ki:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case gl:rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _l:rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rt("WebGLState: Invalid blending: ",U);break}T=null,A=null,w=null,M=null,P.set(0,0,0),S=0,g=U,I=ft}return}ce=ce||le,j=j||se,be=be||Me,(le!==_||ce!==C)&&(n.blendEquationSeparate(At[le],At[ce]),_=le,C=ce),(se!==T||Me!==A||j!==w||be!==M)&&(n.blendFuncSeparate(qe[se],qe[Me],qe[j],qe[be]),T=se,A=Me,w=j,M=be),(Ve.equals(P)===!1||dt!==S)&&(n.blendColor(Ve.r,Ve.g,Ve.b,dt),P.copy(Ve),S=dt),g=U,I=!1}function ht(U,le){U.side===zn?pe(n.CULL_FACE):he(n.CULL_FACE);let se=U.side===Qt;le&&(se=!se),We(se),U.blending===Ki&&U.transparent===!1?et(qn):et(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const Me=U.stencilWrite;l.setTest(Me),Me&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),Ct(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function We(U){W!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),W=U)}function at(U){U!==Hf?(he(n.CULL_FACE),U!==N&&(U===ml?n.cullFace(n.BACK):U===zf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),N=U}function D(U){U!==H&&(q&&n.lineWidth(U),H=U)}function Ct(U,le,se){U?(he(n.POLYGON_OFFSET_FILL),(V!==le||X!==se)&&(V=le,X=se,s.getReversed()&&(le=-le),n.polygonOffset(le,se))):pe(n.POLYGON_OFFSET_FILL)}function lt(U){U?he(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function pt(U){U===void 0&&(U=n.TEXTURE0+G-1),ie!==U&&(n.activeTexture(U),ie=U)}function Pe(U,le,se){se===void 0&&(ie===null?se=n.TEXTURE0+G-1:se=ie);let Me=_e[se];Me===void 0&&(Me={type:void 0,texture:void 0},_e[se]=Me),(Me.type!==U||Me.texture!==le)&&(ie!==se&&(n.activeTexture(se),ie=se),n.bindTexture(U,le||ne[U]),Me.type=U,Me.texture=le)}function R(){const U=_e[ie];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function y(){try{n.compressedTexImage2D(...arguments)}catch(U){rt("WebGLState:",U)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(U){rt("WebGLState:",U)}}function te(){try{n.texSubImage2D(...arguments)}catch(U){rt("WebGLState:",U)}}function oe(){try{n.texSubImage3D(...arguments)}catch(U){rt("WebGLState:",U)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(U){rt("WebGLState:",U)}}function Ae(){try{n.compressedTexSubImage3D(...arguments)}catch(U){rt("WebGLState:",U)}}function fe(){try{n.texStorage2D(...arguments)}catch(U){rt("WebGLState:",U)}}function Le(){try{n.texStorage3D(...arguments)}catch(U){rt("WebGLState:",U)}}function ke(){try{n.texImage2D(...arguments)}catch(U){rt("WebGLState:",U)}}function ae(){try{n.texImage3D(...arguments)}catch(U){rt("WebGLState:",U)}}function ue(U){He.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),He.copy(U))}function we(U){mt.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),mt.copy(U))}function Re(U,le){let se=c.get(le);se===void 0&&(se=new WeakMap,c.set(le,se));let Me=se.get(U);Me===void 0&&(Me=n.getUniformBlockIndex(le,U.name),se.set(U,Me))}function Se(U,le){const Me=c.get(le).get(U);d.get(le)!==Me&&(n.uniformBlockBinding(le,Me,U.__bindingPointIndex),d.set(le,Me))}function Je(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ie=null,_e={},p={},h=new WeakMap,m=[],v=null,E=!1,g=null,_=null,T=null,A=null,C=null,w=null,M=null,P=new _t(0,0,0),S=0,I=!1,W=null,N=null,H=null,V=null,X=null,He.set(0,0,n.canvas.width,n.canvas.height),mt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),l.reset()}return{buffers:{color:r,depth:s,stencil:l},enable:he,disable:pe,bindFramebuffer:Ge,drawBuffers:Oe,useProgram:ze,setBlending:et,setMaterial:ht,setFlipSided:We,setCullFace:at,setLineWidth:D,setPolygonOffset:Ct,setScissorTest:lt,activeTexture:pt,bindTexture:Pe,unbindTexture:R,compressedTexImage2D:y,compressedTexImage3D:F,texImage2D:ke,texImage3D:ae,updateUBOMapping:Re,uniformBlockBinding:Se,texStorage2D:fe,texStorage3D:Le,texSubImage2D:te,texSubImage3D:oe,compressedTexSubImage2D:Z,compressedTexSubImage3D:Ae,scissor:ue,viewport:we,reset:Je}}function zv(n,e,t,i,o,r,s){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,f=new WeakMap;let p;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,y){return m?new OffscreenCanvas(R,y):Cr("canvas")}function E(R,y,F){let te=1;const oe=Pe(R);if((oe.width>F||oe.height>F)&&(te=F/Math.max(oe.width,oe.height)),te<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(te*oe.width),Ae=Math.floor(te*oe.height);p===void 0&&(p=v(Z,Ae));const fe=y?v(Z,Ae):p;return fe.width=Z,fe.height=Ae,fe.getContext("2d").drawImage(R,0,0,Z,Ae),Xe("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+Z+"x"+Ae+")."),fe}else return"data"in R&&Xe("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),R;return R}function g(R){return R.generateMipmaps}function _(R){n.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(R,y,F,te,oe=!1){if(R!==null){if(n[R]!==void 0)return n[R];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=y;if(y===n.RED&&(F===n.FLOAT&&(Z=n.R32F),F===n.HALF_FLOAT&&(Z=n.R16F),F===n.UNSIGNED_BYTE&&(Z=n.R8)),y===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.R8UI),F===n.UNSIGNED_SHORT&&(Z=n.R16UI),F===n.UNSIGNED_INT&&(Z=n.R32UI),F===n.BYTE&&(Z=n.R8I),F===n.SHORT&&(Z=n.R16I),F===n.INT&&(Z=n.R32I)),y===n.RG&&(F===n.FLOAT&&(Z=n.RG32F),F===n.HALF_FLOAT&&(Z=n.RG16F),F===n.UNSIGNED_BYTE&&(Z=n.RG8)),y===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.RG8UI),F===n.UNSIGNED_SHORT&&(Z=n.RG16UI),F===n.UNSIGNED_INT&&(Z=n.RG32UI),F===n.BYTE&&(Z=n.RG8I),F===n.SHORT&&(Z=n.RG16I),F===n.INT&&(Z=n.RG32I)),y===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),F===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),F===n.UNSIGNED_INT&&(Z=n.RGB32UI),F===n.BYTE&&(Z=n.RGB8I),F===n.SHORT&&(Z=n.RGB16I),F===n.INT&&(Z=n.RGB32I)),y===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),F===n.UNSIGNED_INT&&(Z=n.RGBA32UI),F===n.BYTE&&(Z=n.RGBA8I),F===n.SHORT&&(Z=n.RGBA16I),F===n.INT&&(Z=n.RGBA32I)),y===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),y===n.RGBA){const Ae=oe?Mr:st.getTransfer(te);F===n.FLOAT&&(Z=n.RGBA32F),F===n.HALF_FLOAT&&(Z=n.RGBA16F),F===n.UNSIGNED_BYTE&&(Z=Ae===gt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function C(R,y){let F;return R?y===null||y===Ln||y===Ro?F=n.DEPTH24_STENCIL8:y===bn?F=n.DEPTH32F_STENCIL8:y===wo&&(F=n.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ln||y===Ro?F=n.DEPTH_COMPONENT24:y===bn?F=n.DEPTH_COMPONENT32F:y===wo&&(F=n.DEPTH_COMPONENT16),F}function w(R,y){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Vt&&R.minFilter!==qt?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function M(R){const y=R.target;y.removeEventListener("dispose",M),S(y),y.isVideoTexture&&f.delete(y)}function P(R){const y=R.target;y.removeEventListener("dispose",P),W(y)}function S(R){const y=i.get(R);if(y.__webglInit===void 0)return;const F=R.source,te=h.get(F);if(te){const oe=te[y.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&I(R),Object.keys(te).length===0&&h.delete(F)}i.remove(R)}function I(R){const y=i.get(R);n.deleteTexture(y.__webglTexture);const F=R.source,te=h.get(F);delete te[y.__cacheKey],s.memory.textures--}function W(R){const y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(y.__webglFramebuffer[te]))for(let oe=0;oe<y.__webglFramebuffer[te].length;oe++)n.deleteFramebuffer(y.__webglFramebuffer[te][oe]);else n.deleteFramebuffer(y.__webglFramebuffer[te]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[te])}else{if(Array.isArray(y.__webglFramebuffer))for(let te=0;te<y.__webglFramebuffer.length;te++)n.deleteFramebuffer(y.__webglFramebuffer[te]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let te=0;te<y.__webglColorRenderbuffer.length;te++)y.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[te]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const F=R.textures;for(let te=0,oe=F.length;te<oe;te++){const Z=i.get(F[te]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),s.memory.textures--),i.remove(F[te])}i.remove(R)}let N=0;function H(){N=0}function V(){const R=N;return R>=o.maxTextures&&Xe("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+o.maxTextures),N+=1,R}function X(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function G(R,y){const F=i.get(R);if(R.isVideoTexture&&lt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&F.__version!==R.version){const te=R.image;if(te===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(F,R,y);return}}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+y)}function q(R,y){const F=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){ne(F,R,y);return}else R.isExternalTexture&&(F.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+y)}function O(R,y){const F=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){ne(F,R,y);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+y)}function re(R,y){const F=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&F.__version!==R.version){he(F,R,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+y)}const ie={[zs]:n.REPEAT,[Wn]:n.CLAMP_TO_EDGE,[Ws]:n.MIRRORED_REPEAT},_e={[Vt]:n.NEAREST,[dh]:n.NEAREST_MIPMAP_NEAREST,[Go]:n.NEAREST_MIPMAP_LINEAR,[qt]:n.LINEAR,[Kr]:n.LINEAR_MIPMAP_NEAREST,[Ci]:n.LINEAR_MIPMAP_LINEAR},Ie={[mh]:n.NEVER,[Eh]:n.ALWAYS,[gh]:n.LESS,[Ka]:n.LEQUAL,[_h]:n.EQUAL,[Za]:n.GEQUAL,[vh]:n.GREATER,[yh]:n.NOTEQUAL};function xe(R,y){if(y.type===bn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===qt||y.magFilter===Kr||y.magFilter===Go||y.magFilter===Ci||y.minFilter===qt||y.minFilter===Kr||y.minFilter===Go||y.minFilter===Ci)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,ie[y.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,ie[y.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,ie[y.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,_e[y.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,_e[y.minFilter]),y.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Ie[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Vt||y.minFilter!==Go&&y.minFilter!==Ci||y.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,o.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function He(R,y){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",M));const te=y.source;let oe=h.get(te);oe===void 0&&(oe={},h.set(te,oe));const Z=X(y);if(Z!==R.__cacheKey){oe[Z]===void 0&&(oe[Z]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,F=!0),oe[Z].usedTimes++;const Ae=oe[R.__cacheKey];Ae!==void 0&&(oe[R.__cacheKey].usedTimes--,Ae.usedTimes===0&&I(y)),R.__cacheKey=Z,R.__webglTexture=oe[Z].texture}return F}function mt(R,y,F){return Math.floor(Math.floor(R/F)/y)}function yt(R,y,F,te){const Z=R.updateRanges;if(Z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,F,te,y.data);else{Z.sort((ae,ue)=>ae.start-ue.start);let Ae=0;for(let ae=1;ae<Z.length;ae++){const ue=Z[Ae],we=Z[ae],Re=ue.start+ue.count,Se=mt(we.start,y.width,4),Je=mt(ue.start,y.width,4);we.start<=Re+1&&Se===Je&&mt(we.start+we.count-1,y.width,4)===Se?ue.count=Math.max(ue.count,we.start+we.count-ue.start):(++Ae,Z[Ae]=we)}Z.length=Ae+1;const fe=n.getParameter(n.UNPACK_ROW_LENGTH),Le=n.getParameter(n.UNPACK_SKIP_PIXELS),ke=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let ae=0,ue=Z.length;ae<ue;ae++){const we=Z[ae],Re=Math.floor(we.start/4),Se=Math.ceil(we.count/4),Je=Re%y.width,U=Math.floor(Re/y.width),le=Se,se=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Je),n.pixelStorei(n.UNPACK_SKIP_ROWS,U),t.texSubImage2D(n.TEXTURE_2D,0,Je,U,le,se,F,te,y.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,fe),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Le),n.pixelStorei(n.UNPACK_SKIP_ROWS,ke)}}function ne(R,y,F){let te=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(te=n.TEXTURE_3D);const oe=He(R,y),Z=y.source;t.bindTexture(te,R.__webglTexture,n.TEXTURE0+F);const Ae=i.get(Z);if(Z.version!==Ae.__version||oe===!0){t.activeTexture(n.TEXTURE0+F);const fe=st.getPrimaries(st.workingColorSpace),Le=y.colorSpace===ui?null:st.getPrimaries(y.colorSpace),ke=y.colorSpace===ui||fe===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let ae=E(y.image,!1,o.maxTextureSize);ae=pt(y,ae);const ue=r.convert(y.format,y.colorSpace),we=r.convert(y.type);let Re=A(y.internalFormat,ue,we,y.colorSpace,y.isVideoTexture);xe(te,y);let Se;const Je=y.mipmaps,U=y.isVideoTexture!==!0,le=Ae.__version===void 0||oe===!0,se=Z.dataReady,Me=w(y,ae);if(y.isDepthTexture)Re=C(y.format===Ii,y.type),le&&(U?t.texStorage2D(n.TEXTURE_2D,1,Re,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Re,ae.width,ae.height,0,ue,we,null));else if(y.isDataTexture)if(Je.length>0){U&&le&&t.texStorage2D(n.TEXTURE_2D,Me,Re,Je[0].width,Je[0].height);for(let ce=0,j=Je.length;ce<j;ce++)Se=Je[ce],U?se&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Se.width,Se.height,ue,we,Se.data):t.texImage2D(n.TEXTURE_2D,ce,Re,Se.width,Se.height,0,ue,we,Se.data);y.generateMipmaps=!1}else U?(le&&t.texStorage2D(n.TEXTURE_2D,Me,Re,ae.width,ae.height),se&&yt(y,ae,ue,we)):t.texImage2D(n.TEXTURE_2D,0,Re,ae.width,ae.height,0,ue,we,ae.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){U&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Re,Je[0].width,Je[0].height,ae.depth);for(let ce=0,j=Je.length;ce<j;ce++)if(Se=Je[ce],y.format!==yn)if(ue!==null)if(U){if(se)if(y.layerUpdates.size>0){const be=zl(Se.width,Se.height,y.format,y.type);for(const Ve of y.layerUpdates){const dt=Se.data.subarray(Ve*be/Se.data.BYTES_PER_ELEMENT,(Ve+1)*be/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,Ve,Se.width,Se.height,1,ue,dt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,Se.width,Se.height,ae.depth,ue,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ce,Re,Se.width,Se.height,ae.depth,0,Se.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ce,0,0,0,Se.width,Se.height,ae.depth,ue,we,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ce,Re,Se.width,Se.height,ae.depth,0,ue,we,Se.data)}else{U&&le&&t.texStorage2D(n.TEXTURE_2D,Me,Re,Je[0].width,Je[0].height);for(let ce=0,j=Je.length;ce<j;ce++)Se=Je[ce],y.format!==yn?ue!==null?U?se&&t.compressedTexSubImage2D(n.TEXTURE_2D,ce,0,0,Se.width,Se.height,ue,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,ce,Re,Se.width,Se.height,0,Se.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?se&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,Se.width,Se.height,ue,we,Se.data):t.texImage2D(n.TEXTURE_2D,ce,Re,Se.width,Se.height,0,ue,we,Se.data)}else if(y.isDataArrayTexture)if(U){if(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Re,ae.width,ae.height,ae.depth),se)if(y.layerUpdates.size>0){const ce=zl(ae.width,ae.height,y.format,y.type);for(const j of y.layerUpdates){const be=ae.data.subarray(j*ce/ae.data.BYTES_PER_ELEMENT,(j+1)*ce/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,j,ae.width,ae.height,1,ue,we,be)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ue,we,ae.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Re,ae.width,ae.height,ae.depth,0,ue,we,ae.data);else if(y.isData3DTexture)U?(le&&t.texStorage3D(n.TEXTURE_3D,Me,Re,ae.width,ae.height,ae.depth),se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ue,we,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Re,ae.width,ae.height,ae.depth,0,ue,we,ae.data);else if(y.isFramebufferTexture){if(le)if(U)t.texStorage2D(n.TEXTURE_2D,Me,Re,ae.width,ae.height);else{let ce=ae.width,j=ae.height;for(let be=0;be<Me;be++)t.texImage2D(n.TEXTURE_2D,be,Re,ce,j,0,ue,we,null),ce>>=1,j>>=1}}else if(Je.length>0){if(U&&le){const ce=Pe(Je[0]);t.texStorage2D(n.TEXTURE_2D,Me,Re,ce.width,ce.height)}for(let ce=0,j=Je.length;ce<j;ce++)Se=Je[ce],U?se&&t.texSubImage2D(n.TEXTURE_2D,ce,0,0,ue,we,Se):t.texImage2D(n.TEXTURE_2D,ce,Re,ue,we,Se);y.generateMipmaps=!1}else if(U){if(le){const ce=Pe(ae);t.texStorage2D(n.TEXTURE_2D,Me,Re,ce.width,ce.height)}se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,we,ae)}else t.texImage2D(n.TEXTURE_2D,0,Re,ue,we,ae);g(y)&&_(te),Ae.__version=Z.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function he(R,y,F){if(y.image.length!==6)return;const te=He(R,y),oe=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+F);const Z=i.get(oe);if(oe.version!==Z.__version||te===!0){t.activeTexture(n.TEXTURE0+F);const Ae=st.getPrimaries(st.workingColorSpace),fe=y.colorSpace===ui?null:st.getPrimaries(y.colorSpace),Le=y.colorSpace===ui||Ae===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const ke=y.isCompressedTexture||y.image[0].isCompressedTexture,ae=y.image[0]&&y.image[0].isDataTexture,ue=[];for(let j=0;j<6;j++)!ke&&!ae?ue[j]=E(y.image[j],!0,o.maxCubemapSize):ue[j]=ae?y.image[j].image:y.image[j],ue[j]=pt(y,ue[j]);const we=ue[0],Re=r.convert(y.format,y.colorSpace),Se=r.convert(y.type),Je=A(y.internalFormat,Re,Se,y.colorSpace),U=y.isVideoTexture!==!0,le=Z.__version===void 0||te===!0,se=oe.dataReady;let Me=w(y,we);xe(n.TEXTURE_CUBE_MAP,y);let ce;if(ke){U&&le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Je,we.width,we.height);for(let j=0;j<6;j++){ce=ue[j].mipmaps;for(let be=0;be<ce.length;be++){const Ve=ce[be];y.format!==yn?Re!==null?U?se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,0,0,Ve.width,Ve.height,Re,Ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,Je,Ve.width,Ve.height,0,Ve.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,0,0,Ve.width,Ve.height,Re,Se,Ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,be,Je,Ve.width,Ve.height,0,Re,Se,Ve.data)}}}else{if(ce=y.mipmaps,U&&le){ce.length>0&&Me++;const j=Pe(ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Je,j.width,j.height)}for(let j=0;j<6;j++)if(ae){U?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ue[j].width,ue[j].height,Re,Se,ue[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Je,ue[j].width,ue[j].height,0,Re,Se,ue[j].data);for(let be=0;be<ce.length;be++){const dt=ce[be].image[j].image;U?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,0,0,dt.width,dt.height,Re,Se,dt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,Je,dt.width,dt.height,0,Re,Se,dt.data)}}else{U?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Re,Se,ue[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Je,Re,Se,ue[j]);for(let be=0;be<ce.length;be++){const Ve=ce[be];U?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,0,0,Re,Se,Ve.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,be+1,Je,Re,Se,Ve.image[j])}}}g(y)&&_(n.TEXTURE_CUBE_MAP),Z.__version=oe.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function pe(R,y,F,te,oe,Z){const Ae=r.convert(F.format,F.colorSpace),fe=r.convert(F.type),Le=A(F.internalFormat,Ae,fe,F.colorSpace),ke=i.get(y),ae=i.get(F);if(ae.__renderTarget=y,!ke.__hasExternalTextures){const ue=Math.max(1,y.width>>Z),we=Math.max(1,y.height>>Z);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,Z,Le,ue,we,y.depth,0,Ae,fe,null):t.texImage2D(oe,Z,Le,ue,we,0,Ae,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Ct(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,oe,ae.__webglTexture,0,D(y)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,oe,ae.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ge(R,y,F){if(n.bindRenderbuffer(n.RENDERBUFFER,R),y.depthBuffer){const te=y.depthTexture,oe=te&&te.isDepthTexture?te.type:null,Z=C(y.stencilBuffer,oe),Ae=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ct(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D(y),Z,y.width,y.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,D(y),Z,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Z,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ae,n.RENDERBUFFER,R)}else{const te=y.textures;for(let oe=0;oe<te.length;oe++){const Z=te[oe],Ae=r.convert(Z.format,Z.colorSpace),fe=r.convert(Z.type),Le=A(Z.internalFormat,Ae,fe,Z.colorSpace);Ct(y)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,D(y),Le,y.width,y.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,D(y),Le,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Le,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Oe(R,y,F){const te=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=i.get(y.depthTexture);if(oe.__renderTarget=y,(!oe.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),te){if(oe.__webglInit===void 0&&(oe.__webglInit=!0,y.depthTexture.addEventListener("dispose",M)),oe.__webglTexture===void 0){oe.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,oe.__webglTexture),xe(n.TEXTURE_CUBE_MAP,y.depthTexture);const ke=r.convert(y.depthTexture.format),ae=r.convert(y.depthTexture.type);let ue;y.depthTexture.format===Yn?ue=n.DEPTH_COMPONENT24:y.depthTexture.format===Ii&&(ue=n.DEPTH24_STENCIL8);for(let we=0;we<6;we++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ue,y.width,y.height,0,ke,ae,null)}}else G(y.depthTexture,0);const Z=oe.__webglTexture,Ae=D(y),fe=te?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,Le=y.depthTexture.format===Ii?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===Yn)Ct(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Le,fe,Z,0,Ae):n.framebufferTexture2D(n.FRAMEBUFFER,Le,fe,Z,0);else if(y.depthTexture.format===Ii)Ct(y)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Le,fe,Z,0,Ae):n.framebufferTexture2D(n.FRAMEBUFFER,Le,fe,Z,0);else throw new Error("Unknown depthTexture format")}function ze(R){const y=i.get(R),F=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const te=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),te){const oe=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,te.removeEventListener("dispose",oe)};te.addEventListener("dispose",oe),y.__depthDisposeCallback=oe}y.__boundDepthTexture=te}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(F)for(let te=0;te<6;te++)Oe(y.__webglFramebuffer[te],R,te);else{const te=R.texture.mipmaps;te&&te.length>0?Oe(y.__webglFramebuffer[0],R,0):Oe(y.__webglFramebuffer,R,0)}else if(F){y.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[te]),y.__webglDepthbuffer[te]===void 0)y.__webglDepthbuffer[te]=n.createRenderbuffer(),Ge(y.__webglDepthbuffer[te],R,!1);else{const oe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer[te];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,Z)}}else{const te=R.texture.mipmaps;if(te&&te.length>0?t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),Ge(y.__webglDepthbuffer,R,!1);else{const oe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,Z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function At(R,y,F){const te=i.get(R);y!==void 0&&pe(te.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&ze(R)}function qe(R){const y=R.texture,F=i.get(R),te=i.get(y);R.addEventListener("dispose",P);const oe=R.textures,Z=R.isWebGLCubeRenderTarget===!0,Ae=oe.length>1;if(Ae||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=y.version,s.memory.textures++),Z){F.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer[fe]=[];for(let Le=0;Le<y.mipmaps.length;Le++)F.__webglFramebuffer[fe][Le]=n.createFramebuffer()}else F.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){F.__webglFramebuffer=[];for(let fe=0;fe<y.mipmaps.length;fe++)F.__webglFramebuffer[fe]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(Ae)for(let fe=0,Le=oe.length;fe<Le;fe++){const ke=i.get(oe[fe]);ke.__webglTexture===void 0&&(ke.__webglTexture=n.createTexture(),s.memory.textures++)}if(R.samples>0&&Ct(R)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let fe=0;fe<oe.length;fe++){const Le=oe[fe];F.__webglColorRenderbuffer[fe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[fe]);const ke=r.convert(Le.format,Le.colorSpace),ae=r.convert(Le.type),ue=A(Le.internalFormat,ke,ae,Le.colorSpace,R.isXRRenderTarget===!0),we=D(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,we,ue,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+fe,n.RENDERBUFFER,F.__webglColorRenderbuffer[fe])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Ge(F.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),xe(n.TEXTURE_CUBE_MAP,y);for(let fe=0;fe<6;fe++)if(y.mipmaps&&y.mipmaps.length>0)for(let Le=0;Le<y.mipmaps.length;Le++)pe(F.__webglFramebuffer[fe][Le],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Le);else pe(F.__webglFramebuffer[fe],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);g(y)&&_(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let fe=0,Le=oe.length;fe<Le;fe++){const ke=oe[fe],ae=i.get(ke);let ue=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ue=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,ae.__webglTexture),xe(ue,ke),pe(F.__webglFramebuffer,R,ke,n.COLOR_ATTACHMENT0+fe,ue,0),g(ke)&&_(ue)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(fe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(fe,te.__webglTexture),xe(fe,y),y.mipmaps&&y.mipmaps.length>0)for(let Le=0;Le<y.mipmaps.length;Le++)pe(F.__webglFramebuffer[Le],R,y,n.COLOR_ATTACHMENT0,fe,Le);else pe(F.__webglFramebuffer,R,y,n.COLOR_ATTACHMENT0,fe,0);g(y)&&_(fe),t.unbindTexture()}R.depthBuffer&&ze(R)}function et(R){const y=R.textures;for(let F=0,te=y.length;F<te;F++){const oe=y[F];if(g(oe)){const Z=T(R),Ae=i.get(oe).__webglTexture;t.bindTexture(Z,Ae),_(Z),t.unbindTexture()}}}const ht=[],We=[];function at(R){if(R.samples>0){if(Ct(R)===!1){const y=R.textures,F=R.width,te=R.height;let oe=n.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ae=i.get(R),fe=y.length>1;if(fe)for(let ke=0;ke<y.length;ke++)t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);const Le=R.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ke=0;ke<y.length;ke++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),fe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[ke]);const ae=i.get(y[ke]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ae,0)}n.blitFramebuffer(0,0,F,te,0,0,F,te,oe,n.NEAREST),d===!0&&(ht.length=0,We.length=0,ht.push(n.COLOR_ATTACHMENT0+ke),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ht.push(Z),We.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,We)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),fe)for(let ke=0;ke<y.length;ke++){t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,Ae.__webglColorRenderbuffer[ke]);const ae=i.get(y[ke]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ae.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&d){const y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function D(R){return Math.min(o.maxSamples,R.samples)}function Ct(R){const y=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function lt(R){const y=s.render.frame;f.get(R)!==y&&(f.set(R,y),R.update())}function pt(R,y){const F=R.colorSpace,te=R.format,oe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||F!==io&&F!==ui&&(st.getTransfer(F)===gt?(te!==yn||oe!==cn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rt("WebGLTextures: Unsupported texture color space:",F)),y}function Pe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=H,this.setTexture2D=G,this.setTexture2DArray=q,this.setTexture3D=O,this.setTextureCube=re,this.rebindTextures=At,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Wv(n,e){function t(i,o=ui){let r;const s=st.getTransfer(o);if(i===cn)return n.UNSIGNED_BYTE;if(i===qa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===$a)return n.UNSIGNED_SHORT_5_5_5_1;if(i===md)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===gd)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===hd)return n.BYTE;if(i===pd)return n.SHORT;if(i===wo)return n.UNSIGNED_SHORT;if(i===Wa)return n.INT;if(i===Ln)return n.UNSIGNED_INT;if(i===bn)return n.FLOAT;if(i===Xn)return n.HALF_FLOAT;if(i===_d)return n.ALPHA;if(i===vd)return n.RGB;if(i===yn)return n.RGBA;if(i===Yn)return n.DEPTH_COMPONENT;if(i===Ii)return n.DEPTH_STENCIL;if(i===yd)return n.RED;if(i===Xa)return n.RED_INTEGER;if(i===no)return n.RG;if(i===Ya)return n.RG_INTEGER;if(i===Ja)return n.RGBA_INTEGER;if(i===_r||i===vr||i===yr||i===Er)if(s===gt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===_r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===_r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===vr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qs||i===$s||i===Xs||i===Ys)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===qs)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$s)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xs)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ys)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Js||i===Ks||i===Zs||i===Qs||i===js||i===ea||i===ta)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Js||i===Ks)return s===gt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Zs)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Qs)return r.COMPRESSED_R11_EAC;if(i===js)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ea)return r.COMPRESSED_RG11_EAC;if(i===ta)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===na||i===ia||i===oa||i===ra||i===sa||i===aa||i===la||i===ca||i===ua||i===da||i===fa||i===ha||i===pa||i===ma)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===na)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ia)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===oa)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ra)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sa)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===aa)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===la)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ca)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ua)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===da)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fa)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ha)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pa)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ma)return s===gt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ga||i===_a||i===va)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ga)return s===gt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_a)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===va)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ya||i===Ea||i===Sa||i===xa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===ya)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Ea)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===xa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ro?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const qv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$v=`
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

}`;class Xv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new wd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Fn({vertexShader:qv,fragmentShader:$v,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Un(new Br(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yv extends ro{constructor(e,t){super();const i=this;let o=null,r=1,s=null,l="local-floor",d=1,c=null,f=null,p=null,h=null,m=null,v=null;const E=typeof XRWebGLBinding<"u",g=new Xv,_={},T=t.getContextAttributes();let A=null,C=null;const w=[],M=[],P=new vt;let S=null;const I=new ln;I.viewport=new Pt;const W=new ln;W.viewport=new Pt;const N=[I,W],H=new rp;let V=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let he=w[ne];return he===void 0&&(he=new os,w[ne]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ne){let he=w[ne];return he===void 0&&(he=new os,w[ne]=he),he.getGripSpace()},this.getHand=function(ne){let he=w[ne];return he===void 0&&(he=new os,w[ne]=he),he.getHandSpace()};function G(ne){const he=M.indexOf(ne.inputSource);if(he===-1)return;const pe=w[he];pe!==void 0&&(pe.update(ne.inputSource,ne.frame,c||s),pe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function q(){o.removeEventListener("select",G),o.removeEventListener("selectstart",G),o.removeEventListener("selectend",G),o.removeEventListener("squeeze",G),o.removeEventListener("squeezestart",G),o.removeEventListener("squeezeend",G),o.removeEventListener("end",q),o.removeEventListener("inputsourceschange",O);for(let ne=0;ne<w.length;ne++){const he=M[ne];he!==null&&(M[ne]=null,w[ne].disconnect(he))}V=null,X=null,g.reset();for(const ne in _)delete _[ne];e.setRenderTarget(A),m=null,h=null,p=null,o=null,C=null,yt.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,i.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){l=ne,i.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return p===null&&E&&(p=new XRWebGLBinding(o,t)),p},this.getFrame=function(){return v},this.getSession=function(){return o},this.setSession=async function(ne){if(o=ne,o!==null){if(A=e.getRenderTarget(),o.addEventListener("select",G),o.addEventListener("selectstart",G),o.addEventListener("selectend",G),o.addEventListener("squeeze",G),o.addEventListener("squeezestart",G),o.addEventListener("squeezeend",G),o.addEventListener("end",q),o.addEventListener("inputsourceschange",O),T.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(P),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Ge=null,Oe=null;T.depth&&(Oe=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=T.stencil?Ii:Yn,Ge=T.stencil?Ro:Ln);const ze={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:r};p=this.getBinding(),h=p.createProjectionLayer(ze),o.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),C=new Dn(h.textureWidth,h.textureHeight,{format:yn,type:cn,depthTexture:new bo(h.textureWidth,h.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const pe={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(o,t,pe),o.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),C=new Dn(m.framebufferWidth,m.framebufferHeight,{format:yn,type:cn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(d),c=null,s=await o.requestReferenceSpace(l),yt.setContext(o),yt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(ne){for(let he=0;he<ne.removed.length;he++){const pe=ne.removed[he],Ge=M.indexOf(pe);Ge>=0&&(M[Ge]=null,w[Ge].disconnect(pe))}for(let he=0;he<ne.added.length;he++){const pe=ne.added[he];let Ge=M.indexOf(pe);if(Ge===-1){for(let ze=0;ze<w.length;ze++)if(ze>=M.length){M.push(pe),Ge=ze;break}else if(M[ze]===null){M[ze]=pe,Ge=ze;break}if(Ge===-1)break}const Oe=w[Ge];Oe&&Oe.connect(pe)}}const re=new J,ie=new J;function _e(ne,he,pe){re.setFromMatrixPosition(he.matrixWorld),ie.setFromMatrixPosition(pe.matrixWorld);const Ge=re.distanceTo(ie),Oe=he.projectionMatrix.elements,ze=pe.projectionMatrix.elements,At=Oe[14]/(Oe[10]-1),qe=Oe[14]/(Oe[10]+1),et=(Oe[9]+1)/Oe[5],ht=(Oe[9]-1)/Oe[5],We=(Oe[8]-1)/Oe[0],at=(ze[8]+1)/ze[0],D=At*We,Ct=At*at,lt=Ge/(-We+at),pt=lt*-We;if(he.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(pt),ne.translateZ(lt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Oe[10]===-1)ne.projectionMatrix.copy(he.projectionMatrix),ne.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Pe=At+lt,R=qe+lt,y=D-pt,F=Ct+(Ge-pt),te=et*qe/R*Pe,oe=ht*qe/R*Pe;ne.projectionMatrix.makePerspective(y,F,te,oe,Pe,R),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function Ie(ne,he){he===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(he.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(o===null)return;let he=ne.near,pe=ne.far;g.texture!==null&&(g.depthNear>0&&(he=g.depthNear),g.depthFar>0&&(pe=g.depthFar)),H.near=W.near=I.near=he,H.far=W.far=I.far=pe,(V!==H.near||X!==H.far)&&(o.updateRenderState({depthNear:H.near,depthFar:H.far}),V=H.near,X=H.far),H.layers.mask=ne.layers.mask|6,I.layers.mask=H.layers.mask&-5,W.layers.mask=H.layers.mask&-3;const Ge=ne.parent,Oe=H.cameras;Ie(H,Ge);for(let ze=0;ze<Oe.length;ze++)Ie(Oe[ze],Ge);Oe.length===2?_e(H,I,W):H.projectionMatrix.copy(I.projectionMatrix),xe(ne,H,Ge)};function xe(ne,he,pe){pe===null?ne.matrix.copy(he.matrixWorld):(ne.matrix.copy(pe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(he.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(he.projectionMatrix),ne.projectionMatrixInverse.copy(he.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Ta*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&m===null))return d},this.setFoveation=function(ne){d=ne,h!==null&&(h.fixedFoveation=ne),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=ne)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(ne){return _[ne]};let He=null;function mt(ne,he){if(f=he.getViewerPose(c||s),v=he,f!==null){const pe=f.views;m!==null&&(e.setRenderTargetFramebuffer(C,m.framebuffer),e.setRenderTarget(C));let Ge=!1;pe.length!==H.cameras.length&&(H.cameras.length=0,Ge=!0);for(let qe=0;qe<pe.length;qe++){const et=pe[qe];let ht=null;if(m!==null)ht=m.getViewport(et);else{const at=p.getViewSubImage(h,et);ht=at.viewport,qe===0&&(e.setRenderTargetTextures(C,at.colorTexture,at.depthStencilTexture),e.setRenderTarget(C))}let We=N[qe];We===void 0&&(We=new ln,We.layers.enable(qe),We.viewport=new Pt,N[qe]=We),We.matrix.fromArray(et.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(et.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(ht.x,ht.y,ht.width,ht.height),qe===0&&(H.matrix.copy(We.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Ge===!0&&H.cameras.push(We)}const Oe=o.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&E){p=i.getBinding();const qe=p.getDepthInformation(pe[0]);qe&&qe.isValid&&qe.texture&&g.init(qe,o.renderState)}if(Oe&&Oe.includes("camera-access")&&E){e.state.unbindTexture(),p=i.getBinding();for(let qe=0;qe<pe.length;qe++){const et=pe[qe].camera;if(et){let ht=_[et];ht||(ht=new wd,_[et]=ht);const We=p.getCameraImage(et);ht.sourceTexture=We}}}}for(let pe=0;pe<w.length;pe++){const Ge=M[pe],Oe=w[pe];Ge!==null&&Oe!==void 0&&Oe.update(Ge,he,c||s)}He&&He(ne,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),v=null}const yt=new Nd;yt.setAnimationLoop(mt),this.setAnimationLoop=function(ne){He=ne},this.dispose=function(){}}}const Si=new Jn,Jv=new wt;function Kv(n,e){function t(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}function i(g,_){_.color.getRGB(g.fogColor.value,Rd(n)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function o(g,_,T,A,C){_.isMeshBasicMaterial?r(g,_):_.isMeshLambertMaterial?(r(g,_),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(g,_),p(g,_)):_.isMeshPhongMaterial?(r(g,_),f(g,_),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(g,_),h(g,_),_.isMeshPhysicalMaterial&&m(g,_,C)):_.isMeshMatcapMaterial?(r(g,_),v(g,_)):_.isMeshDepthMaterial?r(g,_):_.isMeshDistanceMaterial?(r(g,_),E(g,_)):_.isMeshNormalMaterial?r(g,_):_.isLineBasicMaterial?(s(g,_),_.isLineDashedMaterial&&l(g,_)):_.isPointsMaterial?d(g,_,T,A):_.isSpriteMaterial?c(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,t(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===Qt&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,t(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===Qt&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,t(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,t(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);const T=e.get(_),A=T.envMap,C=T.envMapRotation;A&&(g.envMap.value=A,Si.copy(C),Si.x*=-1,Si.y*=-1,Si.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),g.envMapRotation.value.setFromMatrix4(Jv.makeRotationFromEuler(Si)),g.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap&&(g.lightMap.value=_.lightMap,g.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,g.lightMapTransform)),_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,g.aoMapTransform))}function s(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform))}function l(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function d(g,_,T,A){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*T,g.scale.value=A*.5,_.map&&(g.map.value=_.map,t(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function c(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function f(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function p(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function h(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,g.roughnessMapTransform)),_.envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function m(g,_,T){g.ior.value=_.ior,_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Qt&&g.clearcoatNormalScale.value.negate())),_.dispersion>0&&(g.dispersion.value=_.dispersion),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,_){_.matcap&&(g.matcap.value=_.matcap)}function E(g,_){const T=e.get(_).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function Zv(n,e,t,i){let o={},r={},s=[];const l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(T,A){const C=A.program;i.uniformBlockBinding(T,C)}function c(T,A){let C=o[T.id];C===void 0&&(v(T),C=f(T),o[T.id]=C,T.addEventListener("dispose",g));const w=A.program;i.updateUBOMapping(T,w);const M=e.render.frame;r[T.id]!==M&&(h(T),r[T.id]=M)}function f(T){const A=p();T.__bindingPointIndex=A;const C=n.createBuffer(),w=T.__size,M=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,w,M),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,C),C}function p(){for(let T=0;T<l;T++)if(s.indexOf(T)===-1)return s.push(T),T;return rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const A=o[T.id],C=T.uniforms,w=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let M=0,P=C.length;M<P;M++){const S=Array.isArray(C[M])?C[M]:[C[M]];for(let I=0,W=S.length;I<W;I++){const N=S[I];if(m(N,M,I,w)===!0){const H=N.__offset,V=Array.isArray(N.value)?N.value:[N.value];let X=0;for(let G=0;G<V.length;G++){const q=V[G],O=E(q);typeof q=="number"||typeof q=="boolean"?(N.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,H+X,N.__data)):q.isMatrix3?(N.__data[0]=q.elements[0],N.__data[1]=q.elements[1],N.__data[2]=q.elements[2],N.__data[3]=0,N.__data[4]=q.elements[3],N.__data[5]=q.elements[4],N.__data[6]=q.elements[5],N.__data[7]=0,N.__data[8]=q.elements[6],N.__data[9]=q.elements[7],N.__data[10]=q.elements[8],N.__data[11]=0):(q.toArray(N.__data,X),X+=O.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,H,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(T,A,C,w){const M=T.value,P=A+"_"+C;if(w[P]===void 0)return typeof M=="number"||typeof M=="boolean"?w[P]=M:w[P]=M.clone(),!0;{const S=w[P];if(typeof M=="number"||typeof M=="boolean"){if(S!==M)return w[P]=M,!0}else if(S.equals(M)===!1)return S.copy(M),!0}return!1}function v(T){const A=T.uniforms;let C=0;const w=16;for(let P=0,S=A.length;P<S;P++){const I=Array.isArray(A[P])?A[P]:[A[P]];for(let W=0,N=I.length;W<N;W++){const H=I[W],V=Array.isArray(H.value)?H.value:[H.value];for(let X=0,G=V.length;X<G;X++){const q=V[X],O=E(q),re=C%w,ie=re%O.boundary,_e=re+ie;C+=ie,_e!==0&&w-_e<O.storage&&(C+=w-_e),H.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=C,C+=O.storage}}}const M=C%w;return M>0&&(C+=w-M),T.__size=C,T.__cache={},this}function E(T){const A={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(A.boundary=4,A.storage=4):T.isVector2?(A.boundary=8,A.storage=8):T.isVector3||T.isColor?(A.boundary=16,A.storage=12):T.isVector4?(A.boundary=16,A.storage=16):T.isMatrix3?(A.boundary=48,A.storage=48):T.isMatrix4?(A.boundary=64,A.storage=64):T.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Xe("WebGLRenderer: Unsupported uniform value type.",T),A}function g(T){const A=T.target;A.removeEventListener("dispose",g);const C=s.indexOf(A.__bindingPointIndex);s.splice(C,1),n.deleteBuffer(o[A.id]),delete o[A.id],delete r[A.id]}function _(){for(const T in o)n.deleteBuffer(o[T]);s=[],o={},r={}}return{bind:d,update:c,dispose:_}}const Qv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let wn=null;function jv(){return wn===null&&(wn=new qh(Qv,16,16,no,Xn),wn.name="DFG_LUT",wn.minFilter=qt,wn.magFilter=qt,wn.wrapS=Wn,wn.wrapT=Wn,wn.generateMipmaps=!1,wn.needsUpdate=!0),wn}class e0{constructor(e={}){const{canvas:t=xh(),context:i=null,depth:o=!0,stencil:r=!1,alpha:s=!1,antialias:l=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:m=cn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=s;const E=m,g=new Set([Ja,Ya,Xa]),_=new Set([cn,Ln,wo,Ro,qa,$a]),T=new Uint32Array(4),A=new Int32Array(4);let C=null,w=null;const M=[],P=[];let S=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Nn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let W=!1;this._outputColorSpace=an;let N=0,H=0,V=null,X=-1,G=null;const q=new Pt,O=new Pt;let re=null;const ie=new _t(0);let _e=0,Ie=t.width,xe=t.height,He=1,mt=null,yt=null;const ne=new Pt(0,0,Ie,xe),he=new Pt(0,0,Ie,xe);let pe=!1;const Ge=new Ad;let Oe=!1,ze=!1;const At=new wt,qe=new J,et=new Pt,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function at(){return V===null?He:1}let D=i;function Ct(x,B){return t.getContext(x,B)}try{const x={alpha:!0,depth:o,stencil:r,antialias:l,premultipliedAlpha:d,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${za}`),t.addEventListener("webglcontextlost",be,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",dt,!1),D===null){const B="webgl2";if(D=Ct(B,x),D===null)throw Ct(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw rt("WebGLRenderer: "+x.message),x}let lt,pt,Pe,R,y,F,te,oe,Z,Ae,fe,Le,ke,ae,ue,we,Re,Se,Je,U,le,se,Me;function ce(){lt=new e_(D),lt.init(),le=new Wv(D,lt),pt=new $g(D,lt,e,le),Pe=new Hv(D,lt),pt.reversedDepthBuffer&&h&&Pe.buffers.depth.setReversed(!0),R=new i_(D),y=new wv,F=new zv(D,lt,Pe,y,pt,le,R),te=new jg(I),oe=new lp(D),se=new Wg(D,oe),Z=new t_(D,oe,R,se),Ae=new r_(D,Z,oe,se,R),Se=new o_(D,pt,F),ue=new Xg(y),fe=new Iv(I,te,lt,pt,se,ue),Le=new Kv(I,y),ke=new bv,ae=new Fv(lt),Re=new zg(I,te,Pe,Ae,v,d),we=new Vv(I,Ae,pt),Me=new Zv(D,R,pt,Pe),Je=new qg(D,lt,R),U=new n_(D,lt,R),R.programs=fe.programs,I.capabilities=pt,I.extensions=lt,I.properties=y,I.renderLists=ke,I.shadowMap=we,I.state=Pe,I.info=R}ce(),E!==cn&&(S=new a_(E,t.width,t.height,o,r));const j=new Yv(I,D);this.xr=j,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const x=lt.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=lt.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return He},this.setPixelRatio=function(x){x!==void 0&&(He=x,this.setSize(Ie,xe,!1))},this.getSize=function(x){return x.set(Ie,xe)},this.setSize=function(x,B,z=!0){if(j.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}Ie=x,xe=B,t.width=Math.floor(x*He),t.height=Math.floor(B*He),z===!0&&(t.style.width=x+"px",t.style.height=B+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,x,B)},this.getDrawingBufferSize=function(x){return x.set(Ie*He,xe*He).floor()},this.setDrawingBufferSize=function(x,B,z){Ie=x,xe=B,He=z,t.width=Math.floor(x*z),t.height=Math.floor(B*z),this.setViewport(0,0,x,B)},this.setEffects=function(x){if(E===cn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let B=0;B<x.length;B++)if(x[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(q)},this.getViewport=function(x){return x.copy(ne)},this.setViewport=function(x,B,z,Y){x.isVector4?ne.set(x.x,x.y,x.z,x.w):ne.set(x,B,z,Y),Pe.viewport(q.copy(ne).multiplyScalar(He).round())},this.getScissor=function(x){return x.copy(he)},this.setScissor=function(x,B,z,Y){x.isVector4?he.set(x.x,x.y,x.z,x.w):he.set(x,B,z,Y),Pe.scissor(O.copy(he).multiplyScalar(He).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(x){Pe.setScissorTest(pe=x)},this.setOpaqueSort=function(x){mt=x},this.setTransparentSort=function(x){yt=x},this.getClearColor=function(x){return x.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(x=!0,B=!0,z=!0){let Y=0;if(x){let $=!1;if(V!==null){const ye=V.texture.format;$=g.has(ye)}if($){const ye=V.texture.type,Ce=_.has(ye),Ee=Re.getClearColor(),Ne=Re.getClearAlpha(),Fe=Ee.r,Ke=Ee.g,je=Ee.b;Ce?(T[0]=Fe,T[1]=Ke,T[2]=je,T[3]=Ne,D.clearBufferuiv(D.COLOR,0,T)):(A[0]=Fe,A[1]=Ke,A[2]=je,A[3]=Ne,D.clearBufferiv(D.COLOR,0,A))}else Y|=D.COLOR_BUFFER_BIT}B&&(Y|=D.DEPTH_BUFFER_BIT),z&&(Y|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&D.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",be,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",dt,!1),Re.dispose(),ke.dispose(),ae.dispose(),y.dispose(),te.dispose(),Ae.dispose(),se.dispose(),Me.dispose(),fe.dispose(),j.dispose(),j.removeEventListener("sessionstart",Bo),j.removeEventListener("sessionend",k),b.stop()};function be(x){x.preventDefault(),xl("WebGLRenderer: Context Lost."),W=!0}function Ve(){xl("WebGLRenderer: Context Restored."),W=!1;const x=R.autoReset,B=we.enabled,z=we.autoUpdate,Y=we.needsUpdate,$=we.type;ce(),R.autoReset=x,we.enabled=B,we.autoUpdate=z,we.needsUpdate=Y,we.type=$}function dt(x){rt("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function ft(x){const B=x.target;B.removeEventListener("dispose",ft),Mn(B)}function Mn(x){hn(x),y.remove(x)}function hn(x){const B=y.get(x).programs;B!==void 0&&(B.forEach(function(z){fe.releaseProgram(z)}),x.isShaderMaterial&&fe.releaseShaderCache(x))}this.renderBufferDirect=function(x,B,z,Y,$,ye){B===null&&(B=ht);const Ce=$.isMesh&&$.matrixWorld.determinant()<0,Ee=me(x,B,z,Y,$);Pe.setMaterial(Y,Ce);let Ne=z.index,Fe=1;if(Y.wireframe===!0){if(Ne=Z.getWireframeAttribute(z),Ne===void 0)return;Fe=2}const Ke=z.drawRange,je=z.attributes.position;let Be=Ke.start*Fe,Et=(Ke.start+Ke.count)*Fe;ye!==null&&(Be=Math.max(Be,ye.start*Fe),Et=Math.min(Et,(ye.start+ye.count)*Fe)),Ne!==null?(Be=Math.max(Be,0),Et=Math.min(Et,Ne.count)):je!=null&&(Be=Math.max(Be,0),Et=Math.min(Et,je.count));const bt=Et-Be;if(bt<0||bt===1/0)return;se.setup($,Y,Ee,z,Ne);let It,St=Je;if(Ne!==null&&(It=oe.get(Ne),St=U,St.setIndex(It)),$.isMesh)Y.wireframe===!0?(Pe.setLineWidth(Y.wireframeLinewidth*at()),St.setMode(D.LINES)):St.setMode(D.TRIANGLES);else if($.isLine){let Ht=Y.linewidth;Ht===void 0&&(Ht=1),Pe.setLineWidth(Ht*at()),$.isLineSegments?St.setMode(D.LINES):$.isLineLoop?St.setMode(D.LINE_LOOP):St.setMode(D.LINE_STRIP)}else $.isPoints?St.setMode(D.POINTS):$.isSprite&&St.setMode(D.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Ir("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))St.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Ht=$._multiDrawStarts,De=$._multiDrawCounts,en=$._multiDrawCount,ct=Ne?oe.get(Ne).bytesPerElement:1,pn=y.get(Y).currentProgram.getUniforms();for(let An=0;An<en;An++)pn.setValue(D,"_gl_DrawID",An),St.render(Ht[An]/ct,De[An])}else if($.isInstancedMesh)St.renderInstances(Be,bt,$.count);else if(z.isInstancedBufferGeometry){const Ht=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,De=Math.min(z.instanceCount,Ht);St.renderInstances(Be,bt,De)}else St.render(Be,bt)};function Fo(x,B,z){x.transparent===!0&&x.side===zn&&x.forceSinglePass===!1?(x.side=Qt,x.needsUpdate=!0,Te(x,B,z),x.side=hi,x.needsUpdate=!0,Te(x,B,z),x.side=zn):Te(x,B,z)}this.compile=function(x,B,z=null){z===null&&(z=x),w=ae.get(z),w.init(B),P.push(w),z.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),x!==z&&x.traverseVisible(function($){$.isLight&&$.layers.test(B.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),w.setupLights();const Y=new Set;return x.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const ye=$.material;if(ye)if(Array.isArray(ye))for(let Ce=0;Ce<ye.length;Ce++){const Ee=ye[Ce];Fo(Ee,z,$),Y.add(Ee)}else Fo(ye,z,$),Y.add(ye)}),w=P.pop(),Y},this.compileAsync=function(x,B,z=null){const Y=this.compile(x,B,z);return new Promise($=>{function ye(){if(Y.forEach(function(Ce){y.get(Ce).currentProgram.isReady()&&Y.delete(Ce)}),Y.size===0){$(x);return}setTimeout(ye,10)}lt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let ho=null;function $r(x){ho&&ho(x)}function Bo(){b.stop()}function k(){b.start()}const b=new Nd;b.setAnimationLoop($r),typeof self<"u"&&b.setContext(self),this.setAnimationLoop=function(x){ho=x,j.setAnimationLoop(x),x===null?b.stop():b.start()},j.addEventListener("sessionstart",Bo),j.addEventListener("sessionend",k),this.render=function(x,B){if(B!==void 0&&B.isCamera!==!0){rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;const z=j.enabled===!0&&j.isPresenting===!0,Y=S!==null&&(V===null||z)&&S.begin(I,V);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(j.cameraAutoUpdate===!0&&j.updateCamera(B),B=j.getCamera()),x.isScene===!0&&x.onBeforeRender(I,x,B,V),w=ae.get(x,P.length),w.init(B),P.push(w),At.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ge.setFromProjectionMatrix(At,Pn,B.reversedDepth),ze=this.localClippingEnabled,Oe=ue.init(this.clippingPlanes,ze),C=ke.get(x,M.length),C.init(),M.push(C),j.enabled===!0&&j.isPresenting===!0){const Ce=I.xr.getDepthSensingMesh();Ce!==null&&L(Ce,B,-1/0,I.sortObjects)}L(x,B,0,I.sortObjects),C.finish(),I.sortObjects===!0&&C.sort(mt,yt),We=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,We&&Re.addToRenderList(C,x),this.info.render.frame++,Oe===!0&&ue.beginShadows();const $=w.state.shadowsArray;if(we.render($,x,B),Oe===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&S.hasRenderPass())===!1){const Ce=C.opaque,Ee=C.transmissive;if(w.setupLights(),B.isArrayCamera){const Ne=B.cameras;if(Ee.length>0)for(let Fe=0,Ke=Ne.length;Fe<Ke;Fe++){const je=Ne[Fe];ee(Ce,Ee,x,je)}We&&Re.render(x);for(let Fe=0,Ke=Ne.length;Fe<Ke;Fe++){const je=Ne[Fe];K(C,x,je,je.viewport)}}else Ee.length>0&&ee(Ce,Ee,x,B),We&&Re.render(x),K(C,x,B)}V!==null&&H===0&&(F.updateMultisampleRenderTarget(V),F.updateRenderTargetMipmap(V)),Y&&S.end(I),x.isScene===!0&&x.onAfterRender(I,x,B),se.resetDefaultState(),X=-1,G=null,P.pop(),P.length>0?(w=P[P.length-1],Oe===!0&&ue.setGlobalState(I.clippingPlanes,w.state.camera)):w=null,M.pop(),M.length>0?C=M[M.length-1]:C=null};function L(x,B,z,Y){if(x.visible===!1)return;if(x.layers.test(B.layers)){if(x.isGroup)z=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(B);else if(x.isLight)w.pushLight(x),x.castShadow&&w.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Ge.intersectsSprite(x)){Y&&et.setFromMatrixPosition(x.matrixWorld).applyMatrix4(At);const Ce=Ae.update(x),Ee=x.material;Ee.visible&&C.push(x,Ce,Ee,z,et.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Ge.intersectsObject(x))){const Ce=Ae.update(x),Ee=x.material;if(Y&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),et.copy(x.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),et.copy(Ce.boundingSphere.center)),et.applyMatrix4(x.matrixWorld).applyMatrix4(At)),Array.isArray(Ee)){const Ne=Ce.groups;for(let Fe=0,Ke=Ne.length;Fe<Ke;Fe++){const je=Ne[Fe],Be=Ee[je.materialIndex];Be&&Be.visible&&C.push(x,Ce,Be,z,et.z,je)}}else Ee.visible&&C.push(x,Ce,Ee,z,et.z,null)}}const ye=x.children;for(let Ce=0,Ee=ye.length;Ce<Ee;Ce++)L(ye[Ce],B,z,Y)}function K(x,B,z,Y){const{opaque:$,transmissive:ye,transparent:Ce}=x;w.setupLightsView(z),Oe===!0&&ue.setGlobalState(I.clippingPlanes,z),Y&&Pe.viewport(q.copy(Y)),$.length>0&&Q($,B,z),ye.length>0&&Q(ye,B,z),Ce.length>0&&Q(Ce,B,z),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function ee(x,B,z,Y){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Y.id]===void 0){const Be=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Y.id]=new Dn(1,1,{generateMipmaps:!0,type:Be?Xn:cn,minFilter:Ci,samples:Math.max(4,pt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace})}const ye=w.state.transmissionRenderTarget[Y.id],Ce=Y.viewport||q;ye.setSize(Ce.z*I.transmissionResolutionScale,Ce.w*I.transmissionResolutionScale);const Ee=I.getRenderTarget(),Ne=I.getActiveCubeFace(),Fe=I.getActiveMipmapLevel();I.setRenderTarget(ye),I.getClearColor(ie),_e=I.getClearAlpha(),_e<1&&I.setClearColor(16777215,.5),I.clear(),We&&Re.render(z);const Ke=I.toneMapping;I.toneMapping=Nn;const je=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),w.setupLightsView(Y),Oe===!0&&ue.setGlobalState(I.clippingPlanes,Y),Q(x,z,Y),F.updateMultisampleRenderTarget(ye),F.updateRenderTargetMipmap(ye),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Et=0,bt=B.length;Et<bt;Et++){const It=B[Et],{object:St,geometry:Ht,material:De,group:en}=It;if(De.side===zn&&St.layers.test(Y.layers)){const ct=De.side;De.side=Qt,De.needsUpdate=!0,de(St,z,Y,Ht,De,en),De.side=ct,De.needsUpdate=!0,Be=!0}}Be===!0&&(F.updateMultisampleRenderTarget(ye),F.updateRenderTargetMipmap(ye))}I.setRenderTarget(Ee,Ne,Fe),I.setClearColor(ie,_e),je!==void 0&&(Y.viewport=je),I.toneMapping=Ke}function Q(x,B,z){const Y=B.isScene===!0?B.overrideMaterial:null;for(let $=0,ye=x.length;$<ye;$++){const Ce=x[$],{object:Ee,geometry:Ne,group:Fe}=Ce;let Ke=Ce.material;Ke.allowOverride===!0&&Y!==null&&(Ke=Y),Ee.layers.test(z.layers)&&de(Ee,B,z,Ne,Ke,Fe)}}function de(x,B,z,Y,$,ye){x.onBeforeRender(I,B,z,Y,$,ye),x.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),$.onBeforeRender(I,B,z,Y,x,ye),$.transparent===!0&&$.side===zn&&$.forceSinglePass===!1?($.side=Qt,$.needsUpdate=!0,I.renderBufferDirect(z,B,Y,$,x,ye),$.side=hi,$.needsUpdate=!0,I.renderBufferDirect(z,B,Y,$,x,ye),$.side=zn):I.renderBufferDirect(z,B,Y,$,x,ye),x.onAfterRender(I,B,z,Y,$,ye)}function Te(x,B,z){B.isScene!==!0&&(B=ht);const Y=y.get(x),$=w.state.lights,ye=w.state.shadowsArray,Ce=$.state.version,Ee=fe.getParameters(x,$.state,ye,B,z),Ne=fe.getProgramCacheKey(Ee);let Fe=Y.programs;Y.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?B.environment:null,Y.fog=B.fog;const Ke=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;Y.envMap=te.get(x.envMap||Y.environment,Ke),Y.envMapRotation=Y.environment!==null&&x.envMap===null?B.environmentRotation:x.envMapRotation,Fe===void 0&&(x.addEventListener("dispose",ft),Fe=new Map,Y.programs=Fe);let je=Fe.get(Ne);if(je!==void 0){if(Y.currentProgram===je&&Y.lightsStateVersion===Ce)return Ye(x,Ee),je}else Ee.uniforms=fe.getUniforms(x),x.onBeforeCompile(Ee,I),je=fe.acquireProgram(Ee,Ne),Fe.set(Ne,je),Y.uniforms=Ee.uniforms;const Be=Y.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Be.clippingPlanes=ue.uniform),Ye(x,Ee),Y.needsLights=tt(x),Y.lightsStateVersion=Ce,Y.needsLights&&(Be.ambientLightColor.value=$.state.ambient,Be.lightProbe.value=$.state.probe,Be.directionalLights.value=$.state.directional,Be.directionalLightShadows.value=$.state.directionalShadow,Be.spotLights.value=$.state.spot,Be.spotLightShadows.value=$.state.spotShadow,Be.rectAreaLights.value=$.state.rectArea,Be.ltc_1.value=$.state.rectAreaLTC1,Be.ltc_2.value=$.state.rectAreaLTC2,Be.pointLights.value=$.state.point,Be.pointLightShadows.value=$.state.pointShadow,Be.hemisphereLights.value=$.state.hemi,Be.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Be.spotLightMatrix.value=$.state.spotLightMatrix,Be.spotLightMap.value=$.state.spotLightMap,Be.pointShadowMatrix.value=$.state.pointShadowMatrix),Y.currentProgram=je,Y.uniformsList=null,je}function nt(x){if(x.uniformsList===null){const B=x.currentProgram.getUniforms();x.uniformsList=Sr.seqWithValue(B.seq,x.uniforms)}return x.uniformsList}function Ye(x,B){const z=y.get(x);z.outputColorSpace=B.outputColorSpace,z.batching=B.batching,z.batchingColor=B.batchingColor,z.instancing=B.instancing,z.instancingColor=B.instancingColor,z.instancingMorph=B.instancingMorph,z.skinning=B.skinning,z.morphTargets=B.morphTargets,z.morphNormals=B.morphNormals,z.morphColors=B.morphColors,z.morphTargetsCount=B.morphTargetsCount,z.numClippingPlanes=B.numClippingPlanes,z.numIntersection=B.numClipIntersection,z.vertexAlphas=B.vertexAlphas,z.vertexTangents=B.vertexTangents,z.toneMapping=B.toneMapping}function me(x,B,z,Y,$){B.isScene!==!0&&(B=ht),F.resetTextureUnits();const ye=B.fog,Ce=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?B.environment:null,Ee=V===null?I.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:io,Ne=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Fe=te.get(Y.envMap||Ce,Ne),Ke=Y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,je=!!z.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Be=!!z.morphAttributes.position,Et=!!z.morphAttributes.normal,bt=!!z.morphAttributes.color;let It=Nn;Y.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(It=I.toneMapping);const St=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ht=St!==void 0?St.length:0,De=y.get(Y),en=w.state.lights;if(Oe===!0&&(ze===!0||x!==G)){const Ut=x===G&&Y.id===X;ue.setState(Y,x,Ut)}let ct=!1;Y.version===De.__version?(De.needsLights&&De.lightsStateVersion!==en.state.version||De.outputColorSpace!==Ee||$.isBatchedMesh&&De.batching===!1||!$.isBatchedMesh&&De.batching===!0||$.isBatchedMesh&&De.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&De.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&De.instancing===!1||!$.isInstancedMesh&&De.instancing===!0||$.isSkinnedMesh&&De.skinning===!1||!$.isSkinnedMesh&&De.skinning===!0||$.isInstancedMesh&&De.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&De.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&De.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&De.instancingMorph===!1&&$.morphTexture!==null||De.envMap!==Fe||Y.fog===!0&&De.fog!==ye||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ue.numPlanes||De.numIntersection!==ue.numIntersection)||De.vertexAlphas!==Ke||De.vertexTangents!==je||De.morphTargets!==Be||De.morphNormals!==Et||De.morphColors!==bt||De.toneMapping!==It||De.morphTargetsCount!==Ht)&&(ct=!0):(ct=!0,De.__version=Y.version);let pn=De.currentProgram;ct===!0&&(pn=Te(Y,B,$));let An=!1,mi=!1,bi=!1;const Tt=pn.getUniforms(),Gt=De.uniforms;if(Pe.useProgram(pn.program)&&(An=!0,mi=!0,bi=!0),Y.id!==X&&(X=Y.id,mi=!0),An||G!==x){Pe.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),Tt.setValue(D,"projectionMatrix",x.projectionMatrix),Tt.setValue(D,"viewMatrix",x.matrixWorldInverse);const ei=Tt.map.cameraPosition;ei!==void 0&&ei.setValue(D,qe.setFromMatrixPosition(x.matrixWorld)),pt.logarithmicDepthBuffer&&Tt.setValue(D,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Tt.setValue(D,"isOrthographic",x.isOrthographicCamera===!0),G!==x&&(G=x,mi=!0,bi=!0)}if(De.needsLights&&(en.state.directionalShadowMap.length>0&&Tt.setValue(D,"directionalShadowMap",en.state.directionalShadowMap,F),en.state.spotShadowMap.length>0&&Tt.setValue(D,"spotShadowMap",en.state.spotShadowMap,F),en.state.pointShadowMap.length>0&&Tt.setValue(D,"pointShadowMap",en.state.pointShadowMap,F)),$.isSkinnedMesh){Tt.setOptional(D,$,"bindMatrix"),Tt.setOptional(D,$,"bindMatrixInverse");const Ut=$.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),Tt.setValue(D,"boneTexture",Ut.boneTexture,F))}$.isBatchedMesh&&(Tt.setOptional(D,$,"batchingTexture"),Tt.setValue(D,"batchingTexture",$._matricesTexture,F),Tt.setOptional(D,$,"batchingIdTexture"),Tt.setValue(D,"batchingIdTexture",$._indirectTexture,F),Tt.setOptional(D,$,"batchingColorTexture"),$._colorsTexture!==null&&Tt.setValue(D,"batchingColorTexture",$._colorsTexture,F));const jn=z.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&Se.update($,z,pn),(mi||De.receiveShadow!==$.receiveShadow)&&(De.receiveShadow=$.receiveShadow,Tt.setValue(D,"receiveShadow",$.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&B.environment!==null&&(Gt.envMapIntensity.value=B.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=jv()),mi&&(Tt.setValue(D,"toneMappingExposure",I.toneMappingExposure),De.needsLights&&Ue(Gt,bi),ye&&Y.fog===!0&&Le.refreshFogUniforms(Gt,ye),Le.refreshMaterialUniforms(Gt,Y,He,xe,w.state.transmissionRenderTarget[x.id]),Sr.upload(D,nt(De),Gt,F)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Sr.upload(D,nt(De),Gt,F),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Tt.setValue(D,"center",$.center),Tt.setValue(D,"modelViewMatrix",$.modelViewMatrix),Tt.setValue(D,"normalMatrix",$.normalMatrix),Tt.setValue(D,"modelMatrix",$.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ut=Y.uniformsGroups;for(let ei=0,Pi=Ut.length;ei<Pi;ei++){const hl=Ut[ei];Me.update(hl,pn),Me.bind(hl,pn)}}return pn}function Ue(x,B){x.ambientLightColor.needsUpdate=B,x.lightProbe.needsUpdate=B,x.directionalLights.needsUpdate=B,x.directionalLightShadows.needsUpdate=B,x.pointLights.needsUpdate=B,x.pointLightShadows.needsUpdate=B,x.spotLights.needsUpdate=B,x.spotLightShadows.needsUpdate=B,x.rectAreaLights.needsUpdate=B,x.hemisphereLights.needsUpdate=B}function tt(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(x,B,z){const Y=y.get(x);Y.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),y.get(x.texture).__webglTexture=B,y.get(x.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:z,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,B){const z=y.get(x);z.__webglFramebuffer=B,z.__useDefaultFramebuffer=B===void 0};const xt=D.createFramebuffer();this.setRenderTarget=function(x,B=0,z=0){V=x,N=B,H=z;let Y=null,$=!1,ye=!1;if(x){const Ee=y.get(x);if(Ee.__useDefaultFramebuffer!==void 0){Pe.bindFramebuffer(D.FRAMEBUFFER,Ee.__webglFramebuffer),q.copy(x.viewport),O.copy(x.scissor),re=x.scissorTest,Pe.viewport(q),Pe.scissor(O),Pe.setScissorTest(re),X=-1;return}else if(Ee.__webglFramebuffer===void 0)F.setupRenderTarget(x);else if(Ee.__hasExternalTextures)F.rebindTextures(x,y.get(x.texture).__webglTexture,y.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Ke=x.depthTexture;if(Ee.__boundDepthTexture!==Ke){if(Ke!==null&&y.has(Ke)&&(x.width!==Ke.image.width||x.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(x)}}const Ne=x.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ye=!0);const Fe=y.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Fe[B])?Y=Fe[B][z]:Y=Fe[B],$=!0):x.samples>0&&F.useMultisampledRTT(x)===!1?Y=y.get(x).__webglMultisampledFramebuffer:Array.isArray(Fe)?Y=Fe[z]:Y=Fe,q.copy(x.viewport),O.copy(x.scissor),re=x.scissorTest}else q.copy(ne).multiplyScalar(He).floor(),O.copy(he).multiplyScalar(He).floor(),re=pe;if(z!==0&&(Y=xt),Pe.bindFramebuffer(D.FRAMEBUFFER,Y)&&Pe.drawBuffers(x,Y),Pe.viewport(q),Pe.scissor(O),Pe.setScissorTest(re),$){const Ee=y.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ee.__webglTexture,z)}else if(ye){const Ee=B;for(let Ne=0;Ne<x.textures.length;Ne++){const Fe=y.get(x.textures[Ne]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ne,Fe.__webglTexture,z,Ee)}}else if(x!==null&&z!==0){const Ee=y.get(x.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ee.__webglTexture,z)}X=-1},this.readRenderTargetPixels=function(x,B,z,Y,$,ye,Ce,Ee=0){if(!(x&&x.isWebGLRenderTarget)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=y.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne){Pe.bindFramebuffer(D.FRAMEBUFFER,Ne);try{const Fe=x.textures[Ee],Ke=Fe.format,je=Fe.type;if(x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ee),!pt.textureFormatReadable(Ke)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!pt.textureTypeReadable(je)){rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=x.width-Y&&z>=0&&z<=x.height-$&&D.readPixels(B,z,Y,$,le.convert(Ke),le.convert(je),ye)}finally{const Fe=V!==null?y.get(V).__webglFramebuffer:null;Pe.bindFramebuffer(D.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(x,B,z,Y,$,ye,Ce,Ee=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=y.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne)if(B>=0&&B<=x.width-Y&&z>=0&&z<=x.height-$){Pe.bindFramebuffer(D.FRAMEBUFFER,Ne);const Fe=x.textures[Ee],Ke=Fe.format,je=Fe.type;if(x.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Ee),!pt.textureFormatReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!pt.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Be=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Be),D.bufferData(D.PIXEL_PACK_BUFFER,ye.byteLength,D.STREAM_READ),D.readPixels(B,z,Y,$,le.convert(Ke),le.convert(je),0);const Et=V!==null?y.get(V).__webglFramebuffer:null;Pe.bindFramebuffer(D.FRAMEBUFFER,Et);const bt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Th(D,bt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Be),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ye),D.deleteBuffer(Be),D.deleteSync(bt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,B=null,z=0){const Y=Math.pow(2,-z),$=Math.floor(x.image.width*Y),ye=Math.floor(x.image.height*Y),Ce=B!==null?B.x:0,Ee=B!==null?B.y:0;F.setTexture2D(x,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,Ce,Ee,$,ye),Pe.unbindTexture()};const Rt=D.createFramebuffer(),$t=D.createFramebuffer();this.copyTextureToTexture=function(x,B,z=null,Y=null,$=0,ye=0){let Ce,Ee,Ne,Fe,Ke,je,Be,Et,bt;const It=x.isCompressedTexture?x.mipmaps[ye]:x.image;if(z!==null)Ce=z.max.x-z.min.x,Ee=z.max.y-z.min.y,Ne=z.isBox3?z.max.z-z.min.z:1,Fe=z.min.x,Ke=z.min.y,je=z.isBox3?z.min.z:0;else{const Gt=Math.pow(2,-$);Ce=Math.floor(It.width*Gt),Ee=Math.floor(It.height*Gt),x.isDataArrayTexture?Ne=It.depth:x.isData3DTexture?Ne=Math.floor(It.depth*Gt):Ne=1,Fe=0,Ke=0,je=0}Y!==null?(Be=Y.x,Et=Y.y,bt=Y.z):(Be=0,Et=0,bt=0);const St=le.convert(B.format),Ht=le.convert(B.type);let De;B.isData3DTexture?(F.setTexture3D(B,0),De=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(F.setTexture2DArray(B,0),De=D.TEXTURE_2D_ARRAY):(F.setTexture2D(B,0),De=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);const en=D.getParameter(D.UNPACK_ROW_LENGTH),ct=D.getParameter(D.UNPACK_IMAGE_HEIGHT),pn=D.getParameter(D.UNPACK_SKIP_PIXELS),An=D.getParameter(D.UNPACK_SKIP_ROWS),mi=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,It.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,It.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Fe),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ke),D.pixelStorei(D.UNPACK_SKIP_IMAGES,je);const bi=x.isDataArrayTexture||x.isData3DTexture,Tt=B.isDataArrayTexture||B.isData3DTexture;if(x.isDepthTexture){const Gt=y.get(x),jn=y.get(B),Ut=y.get(Gt.__renderTarget),ei=y.get(jn.__renderTarget);Pe.bindFramebuffer(D.READ_FRAMEBUFFER,Ut.__webglFramebuffer),Pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let Pi=0;Pi<Ne;Pi++)bi&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,y.get(x).__webglTexture,$,je+Pi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,y.get(B).__webglTexture,ye,bt+Pi)),D.blitFramebuffer(Fe,Ke,Ce,Ee,Be,Et,Ce,Ee,D.DEPTH_BUFFER_BIT,D.NEAREST);Pe.bindFramebuffer(D.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if($!==0||x.isRenderTargetTexture||y.has(x)){const Gt=y.get(x),jn=y.get(B);Pe.bindFramebuffer(D.READ_FRAMEBUFFER,Rt),Pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,$t);for(let Ut=0;Ut<Ne;Ut++)bi?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Gt.__webglTexture,$,je+Ut):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Gt.__webglTexture,$),Tt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,jn.__webglTexture,ye,bt+Ut):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,jn.__webglTexture,ye),$!==0?D.blitFramebuffer(Fe,Ke,Ce,Ee,Be,Et,Ce,Ee,D.COLOR_BUFFER_BIT,D.NEAREST):Tt?D.copyTexSubImage3D(De,ye,Be,Et,bt+Ut,Fe,Ke,Ce,Ee):D.copyTexSubImage2D(De,ye,Be,Et,Fe,Ke,Ce,Ee);Pe.bindFramebuffer(D.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Tt?x.isDataTexture||x.isData3DTexture?D.texSubImage3D(De,ye,Be,Et,bt,Ce,Ee,Ne,St,Ht,It.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(De,ye,Be,Et,bt,Ce,Ee,Ne,St,It.data):D.texSubImage3D(De,ye,Be,Et,bt,Ce,Ee,Ne,St,Ht,It):x.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ye,Be,Et,Ce,Ee,St,Ht,It.data):x.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ye,Be,Et,It.width,It.height,St,It.data):D.texSubImage2D(D.TEXTURE_2D,ye,Be,Et,Ce,Ee,St,Ht,It);D.pixelStorei(D.UNPACK_ROW_LENGTH,en),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ct),D.pixelStorei(D.UNPACK_SKIP_PIXELS,pn),D.pixelStorei(D.UNPACK_SKIP_ROWS,An),D.pixelStorei(D.UNPACK_SKIP_IMAGES,mi),ye===0&&B.generateMipmaps&&D.generateMipmap(De),Pe.unbindTexture()},this.initRenderTarget=function(x){y.get(x).__webglFramebuffer===void 0&&F.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?F.setTextureCube(x,0):x.isData3DTexture?F.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?F.setTexture2DArray(x,0):F.setTexture2D(x,0),Pe.unbindTexture()},this.resetState=function(){N=0,H=0,V=null,Pe.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}function t0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var xo={exports:{}},Is={},ws,hc;function n0(){if(hc)return ws;hc=1;function n(e,t){typeof t=="boolean"&&(t={forever:t}),this._originalTimeouts=JSON.parse(JSON.stringify(e)),this._timeouts=e,this._options=t||{},this._maxRetryTime=t&&t.maxRetryTime||1/0,this._fn=null,this._errors=[],this._attempts=1,this._operationTimeout=null,this._operationTimeoutCb=null,this._timeout=null,this._operationStart=null,this._timer=null,this._options.forever&&(this._cachedTimeouts=this._timeouts.slice(0))}return ws=n,n.prototype.reset=function(){this._attempts=1,this._timeouts=this._originalTimeouts.slice(0)},n.prototype.stop=function(){this._timeout&&clearTimeout(this._timeout),this._timer&&clearTimeout(this._timer),this._timeouts=[],this._cachedTimeouts=null},n.prototype.retry=function(e){if(this._timeout&&clearTimeout(this._timeout),!e)return!1;var t=new Date().getTime();if(e&&t-this._operationStart>=this._maxRetryTime)return this._errors.push(e),this._errors.unshift(new Error("RetryOperation timeout occurred")),!1;this._errors.push(e);var i=this._timeouts.shift();if(i===void 0)if(this._cachedTimeouts)this._errors.splice(0,this._errors.length-1),i=this._cachedTimeouts.slice(-1);else return!1;var o=this;return this._timer=setTimeout(function(){o._attempts++,o._operationTimeoutCb&&(o._timeout=setTimeout(function(){o._operationTimeoutCb(o._attempts)},o._operationTimeout),o._options.unref&&o._timeout.unref()),o._fn(o._attempts)},i),this._options.unref&&this._timer.unref(),!0},n.prototype.attempt=function(e,t){this._fn=e,t&&(t.timeout&&(this._operationTimeout=t.timeout),t.cb&&(this._operationTimeoutCb=t.cb));var i=this;this._operationTimeoutCb&&(this._timeout=setTimeout(function(){i._operationTimeoutCb()},i._operationTimeout)),this._operationStart=new Date().getTime(),this._fn(this._attempts)},n.prototype.try=function(e){console.log("Using RetryOperation.try() is deprecated"),this.attempt(e)},n.prototype.start=function(e){console.log("Using RetryOperation.start() is deprecated"),this.attempt(e)},n.prototype.start=n.prototype.try,n.prototype.errors=function(){return this._errors},n.prototype.attempts=function(){return this._attempts},n.prototype.mainError=function(){if(this._errors.length===0)return null;for(var e={},t=null,i=0,o=0;o<this._errors.length;o++){var r=this._errors[o],s=r.message,l=(e[s]||0)+1;e[s]=l,l>=i&&(t=r,i=l)}return t},ws}var pc;function i0(){return pc||(pc=1,(function(n){var e=n0();n.operation=function(t){var i=n.timeouts(t);return new e(i,{forever:t&&(t.forever||t.retries===1/0),unref:t&&t.unref,maxRetryTime:t&&t.maxRetryTime})},n.timeouts=function(t){if(t instanceof Array)return[].concat(t);var i={retries:10,factor:2,minTimeout:1*1e3,maxTimeout:1/0,randomize:!1};for(var o in t)i[o]=t[o];if(i.minTimeout>i.maxTimeout)throw new Error("minTimeout is greater than maxTimeout");for(var r=[],s=0;s<i.retries;s++)r.push(this.createTimeout(s,i));return t&&t.forever&&!r.length&&r.push(this.createTimeout(s,i)),r.sort(function(l,d){return l-d}),r},n.createTimeout=function(t,i){var o=i.randomize?Math.random()+1:1,r=Math.round(o*Math.max(i.minTimeout,1)*Math.pow(i.factor,t));return r=Math.min(r,i.maxTimeout),r},n.wrap=function(t,i,o){if(i instanceof Array&&(o=i,i=null),!o){o=[];for(var r in t)typeof t[r]=="function"&&o.push(r)}for(var s=0;s<o.length;s++){var l=o[s],d=t[l];t[l]=(function(f){var p=n.operation(i),h=Array.prototype.slice.call(arguments,1),m=h.pop();h.push(function(v){p.retry(v)||(v&&(arguments[0]=p.mainError()),m.apply(this,arguments))}),p.attempt(function(){f.apply(t,h)})}).bind(t,d),t[l].options=i}}})(Is)),Is}var Rs,mc;function o0(){return mc||(mc=1,Rs=i0()),Rs}var gc;function r0(){if(gc)return xo.exports;gc=1;const n=o0(),e=["Failed to fetch","NetworkError when attempting to fetch resource.","The Internet connection appears to be offline.","Network request failed"];class t extends Error{constructor(l){super(),l instanceof Error?(this.originalError=l,{message:l}=l):(this.originalError=new Error(l),this.originalError.stack=this.stack),this.name="AbortError",this.message=l}}const i=(s,l,d)=>{const c=d.retries-(l-1);return s.attemptNumber=l,s.retriesLeft=c,s},o=s=>e.includes(s),r=(s,l)=>new Promise((d,c)=>{l={onFailedAttempt:()=>{},retries:10,...l};const f=n.operation(l);f.attempt(async p=>{try{d(await s(p))}catch(h){if(!(h instanceof Error)){c(new TypeError(`Non-error was thrown: "${h}". You should only throw errors.`));return}if(h instanceof t)f.stop(),c(h.originalError);else if(h instanceof TypeError&&!o(h.message))f.stop(),c(h);else{i(h,p,l);try{await l.onFailedAttempt(h)}catch(m){c(m);return}f.retry(h)||c(f.mainError())}}})});return xo.exports=r,xo.exports.default=r,xo.exports.AbortError=t,xo.exports}var kd=r0();const s0=t0(kd);var a0={};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let l0,c0;function u0(){return{geminiUrl:l0,vertexUrl:c0}}function d0(n,e,t,i){var o,r;if(!(n!=null&&n.baseUrl)){const s=u0();return e?(o=s.vertexUrl)!==null&&o!==void 0?o:t:(r=s.geminiUrl)!==null&&r!==void 0?r:i}return n.baseUrl}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Zn{}function ve(n,e){const t=/\{([^}]+)\}/g;return n.replace(t,(i,o)=>{if(Object.prototype.hasOwnProperty.call(e,o)){const r=e[o];return r!=null?String(r):""}else throw new Error(`Key '${o}' not found in valueMap.`)})}function u(n,e,t){for(let r=0;r<e.length-1;r++){const s=e[r];if(s.endsWith("[]")){const l=s.slice(0,-2);if(!(l in n))if(Array.isArray(t))n[l]=Array.from({length:t.length},()=>({}));else throw new Error(`Value must be a list given an array path ${s}`);if(Array.isArray(n[l])){const d=n[l];if(Array.isArray(t))for(let c=0;c<d.length;c++){const f=d[c];u(f,e.slice(r+1),t[c])}else for(const c of d)u(c,e.slice(r+1),t)}return}else if(s.endsWith("[0]")){const l=s.slice(0,-3);l in n||(n[l]=[{}]);const d=n[l];u(d[0],e.slice(r+1),t);return}(!n[s]||typeof n[s]!="object")&&(n[s]={}),n=n[s]}const i=e[e.length-1],o=n[i];if(o!==void 0){if(!t||typeof t=="object"&&Object.keys(t).length===0||t===o)return;if(typeof o=="object"&&typeof t=="object"&&o!==null&&t!==null)Object.assign(o,t);else throw new Error(`Cannot set value for an existing key. Key: ${i}`)}else i==="_self"&&typeof t=="object"&&t!==null&&!Array.isArray(t)?Object.assign(n,t):n[i]=t}function a(n,e,t=void 0){try{if(e.length===1&&e[0]==="_self")return n;for(let i=0;i<e.length;i++){if(typeof n!="object"||n===null)return t;const o=e[i];if(o.endsWith("[]")){const r=o.slice(0,-2);if(r in n){const s=n[r];return Array.isArray(s)?s.map(l=>a(l,e.slice(i+1),t)):t}else return t}else n=n[o]}return n}catch(i){if(i instanceof TypeError)return t;throw i}}function f0(n,e){for(const[t,i]of Object.entries(e)){const o=t.split("."),r=i.split("."),s=new Set;let l=-1;for(let d=0;d<o.length;d++)if(o[d]==="*"){l=d;break}if(l!==-1&&r.length>l)for(let d=l;d<r.length;d++){const c=r[d];c!=="*"&&!c.endsWith("[]")&&!c.endsWith("[0]")&&s.add(c)}wa(n,o,r,0,s)}}function wa(n,e,t,i,o){if(i>=e.length||typeof n!="object"||n===null)return;const r=e[i];if(r.endsWith("[]")){const s=r.slice(0,-2),l=n;if(s in l&&Array.isArray(l[s]))for(const d of l[s])wa(d,e,t,i+1,o)}else if(r==="*"){if(typeof n=="object"&&n!==null&&!Array.isArray(n)){const s=n,l=Object.keys(s).filter(c=>!c.startsWith("_")&&!o.has(c)),d={};for(const c of l)d[c]=s[c];for(const[c,f]of Object.entries(d)){const p=[];for(const h of t.slice(i))h==="*"?p.push(c):p.push(h);u(s,p,f)}for(const c of l)delete s[c]}}else{const s=n;r in s&&wa(s[r],e,t,i+1,o)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function il(n){if(typeof n!="string")throw new Error("fromImageBytes must be a string");return n}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function h0(n){const e={},t=a(n,["operationName"]);t!=null&&u(e,["operationName"],t);const i=a(n,["resourceName"]);return i!=null&&u(e,["_url","resourceName"],i),e}function p0(n){const e={},t=a(n,["name"]);t!=null&&u(e,["name"],t);const i=a(n,["metadata"]);i!=null&&u(e,["metadata"],i);const o=a(n,["done"]);o!=null&&u(e,["done"],o);const r=a(n,["error"]);r!=null&&u(e,["error"],r);const s=a(n,["response","generateVideoResponse"]);return s!=null&&u(e,["response"],g0(s)),e}function m0(n){const e={},t=a(n,["name"]);t!=null&&u(e,["name"],t);const i=a(n,["metadata"]);i!=null&&u(e,["metadata"],i);const o=a(n,["done"]);o!=null&&u(e,["done"],o);const r=a(n,["error"]);r!=null&&u(e,["error"],r);const s=a(n,["response"]);return s!=null&&u(e,["response"],_0(s)),e}function g0(n){const e={},t=a(n,["generatedSamples"]);if(t!=null){let r=t;Array.isArray(r)&&(r=r.map(s=>v0(s))),u(e,["generatedVideos"],r)}const i=a(n,["raiMediaFilteredCount"]);i!=null&&u(e,["raiMediaFilteredCount"],i);const o=a(n,["raiMediaFilteredReasons"]);return o!=null&&u(e,["raiMediaFilteredReasons"],o),e}function _0(n){const e={},t=a(n,["videos"]);if(t!=null){let r=t;Array.isArray(r)&&(r=r.map(s=>y0(s))),u(e,["generatedVideos"],r)}const i=a(n,["raiMediaFilteredCount"]);i!=null&&u(e,["raiMediaFilteredCount"],i);const o=a(n,["raiMediaFilteredReasons"]);return o!=null&&u(e,["raiMediaFilteredReasons"],o),e}function v0(n){const e={},t=a(n,["video"]);return t!=null&&u(e,["video"],A0(t)),e}function y0(n){const e={},t=a(n,["_self"]);return t!=null&&u(e,["video"],C0(t)),e}function E0(n){const e={},t=a(n,["operationName"]);return t!=null&&u(e,["_url","operationName"],t),e}function S0(n){const e={},t=a(n,["operationName"]);return t!=null&&u(e,["_url","operationName"],t),e}function x0(n){const e={},t=a(n,["name"]);t!=null&&u(e,["name"],t);const i=a(n,["metadata"]);i!=null&&u(e,["metadata"],i);const o=a(n,["done"]);o!=null&&u(e,["done"],o);const r=a(n,["error"]);r!=null&&u(e,["error"],r);const s=a(n,["response"]);return s!=null&&u(e,["response"],T0(s)),e}function T0(n){const e={},t=a(n,["sdkHttpResponse"]);t!=null&&u(e,["sdkHttpResponse"],t);const i=a(n,["parent"]);i!=null&&u(e,["parent"],i);const o=a(n,["documentName"]);return o!=null&&u(e,["documentName"],o),e}function Od(n){const e={},t=a(n,["name"]);t!=null&&u(e,["name"],t);const i=a(n,["metadata"]);i!=null&&u(e,["metadata"],i);const o=a(n,["done"]);o!=null&&u(e,["done"],o);const r=a(n,["error"]);r!=null&&u(e,["error"],r);const s=a(n,["response"]);return s!=null&&u(e,["response"],M0(s)),e}function M0(n){const e={},t=a(n,["sdkHttpResponse"]);t!=null&&u(e,["sdkHttpResponse"],t);const i=a(n,["parent"]);i!=null&&u(e,["parent"],i);const o=a(n,["documentName"]);return o!=null&&u(e,["documentName"],o),e}function A0(n){const e={},t=a(n,["uri"]);t!=null&&u(e,["uri"],t);const i=a(n,["encodedVideo"]);i!=null&&u(e,["videoBytes"],il(i));const o=a(n,["encoding"]);return o!=null&&u(e,["mimeType"],o),e}function C0(n){const e={},t=a(n,["gcsUri"]);t!=null&&u(e,["uri"],t);const i=a(n,["bytesBase64Encoded"]);i!=null&&u(e,["videoBytes"],il(i));const o=a(n,["mimeType"]);return o!=null&&u(e,["mimeType"],o),e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var _c;(function(n){n.LANGUAGE_UNSPECIFIED="LANGUAGE_UNSPECIFIED",n.PYTHON="PYTHON"})(_c||(_c={}));var vc;(function(n){n.OUTCOME_UNSPECIFIED="OUTCOME_UNSPECIFIED",n.OUTCOME_OK="OUTCOME_OK",n.OUTCOME_FAILED="OUTCOME_FAILED",n.OUTCOME_DEADLINE_EXCEEDED="OUTCOME_DEADLINE_EXCEEDED"})(vc||(vc={}));var yc;(function(n){n.SCHEDULING_UNSPECIFIED="SCHEDULING_UNSPECIFIED",n.SILENT="SILENT",n.WHEN_IDLE="WHEN_IDLE",n.INTERRUPT="INTERRUPT"})(yc||(yc={}));var fi;(function(n){n.TYPE_UNSPECIFIED="TYPE_UNSPECIFIED",n.STRING="STRING",n.NUMBER="NUMBER",n.INTEGER="INTEGER",n.BOOLEAN="BOOLEAN",n.ARRAY="ARRAY",n.OBJECT="OBJECT",n.NULL="NULL"})(fi||(fi={}));var Ec;(function(n){n.ENVIRONMENT_UNSPECIFIED="ENVIRONMENT_UNSPECIFIED",n.ENVIRONMENT_BROWSER="ENVIRONMENT_BROWSER"})(Ec||(Ec={}));var Sc;(function(n){n.AUTH_TYPE_UNSPECIFIED="AUTH_TYPE_UNSPECIFIED",n.NO_AUTH="NO_AUTH",n.API_KEY_AUTH="API_KEY_AUTH",n.HTTP_BASIC_AUTH="HTTP_BASIC_AUTH",n.GOOGLE_SERVICE_ACCOUNT_AUTH="GOOGLE_SERVICE_ACCOUNT_AUTH",n.OAUTH="OAUTH",n.OIDC_AUTH="OIDC_AUTH"})(Sc||(Sc={}));var xc;(function(n){n.HTTP_IN_UNSPECIFIED="HTTP_IN_UNSPECIFIED",n.HTTP_IN_QUERY="HTTP_IN_QUERY",n.HTTP_IN_HEADER="HTTP_IN_HEADER",n.HTTP_IN_PATH="HTTP_IN_PATH",n.HTTP_IN_BODY="HTTP_IN_BODY",n.HTTP_IN_COOKIE="HTTP_IN_COOKIE"})(xc||(xc={}));var Tc;(function(n){n.API_SPEC_UNSPECIFIED="API_SPEC_UNSPECIFIED",n.SIMPLE_SEARCH="SIMPLE_SEARCH",n.ELASTIC_SEARCH="ELASTIC_SEARCH"})(Tc||(Tc={}));var Mc;(function(n){n.PHISH_BLOCK_THRESHOLD_UNSPECIFIED="PHISH_BLOCK_THRESHOLD_UNSPECIFIED",n.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",n.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",n.BLOCK_HIGH_AND_ABOVE="BLOCK_HIGH_AND_ABOVE",n.BLOCK_HIGHER_AND_ABOVE="BLOCK_HIGHER_AND_ABOVE",n.BLOCK_VERY_HIGH_AND_ABOVE="BLOCK_VERY_HIGH_AND_ABOVE",n.BLOCK_ONLY_EXTREMELY_HIGH="BLOCK_ONLY_EXTREMELY_HIGH"})(Mc||(Mc={}));var Ac;(function(n){n.UNSPECIFIED="UNSPECIFIED",n.BLOCKING="BLOCKING",n.NON_BLOCKING="NON_BLOCKING"})(Ac||(Ac={}));var Cc;(function(n){n.MODE_UNSPECIFIED="MODE_UNSPECIFIED",n.MODE_DYNAMIC="MODE_DYNAMIC"})(Cc||(Cc={}));var Ic;(function(n){n.MODE_UNSPECIFIED="MODE_UNSPECIFIED",n.AUTO="AUTO",n.ANY="ANY",n.NONE="NONE",n.VALIDATED="VALIDATED"})(Ic||(Ic={}));var wc;(function(n){n.THINKING_LEVEL_UNSPECIFIED="THINKING_LEVEL_UNSPECIFIED",n.MINIMAL="MINIMAL",n.LOW="LOW",n.MEDIUM="MEDIUM",n.HIGH="HIGH"})(wc||(wc={}));var Rc;(function(n){n.DONT_ALLOW="DONT_ALLOW",n.ALLOW_ADULT="ALLOW_ADULT",n.ALLOW_ALL="ALLOW_ALL"})(Rc||(Rc={}));var bc;(function(n){n.PROMINENT_PEOPLE_UNSPECIFIED="PROMINENT_PEOPLE_UNSPECIFIED",n.ALLOW_PROMINENT_PEOPLE="ALLOW_PROMINENT_PEOPLE",n.BLOCK_PROMINENT_PEOPLE="BLOCK_PROMINENT_PEOPLE"})(bc||(bc={}));var Pc;(function(n){n.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",n.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",n.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",n.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",n.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",n.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY",n.HARM_CATEGORY_IMAGE_HATE="HARM_CATEGORY_IMAGE_HATE",n.HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT="HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT",n.HARM_CATEGORY_IMAGE_HARASSMENT="HARM_CATEGORY_IMAGE_HARASSMENT",n.HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT="HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT",n.HARM_CATEGORY_JAILBREAK="HARM_CATEGORY_JAILBREAK"})(Pc||(Pc={}));var Nc;(function(n){n.HARM_BLOCK_METHOD_UNSPECIFIED="HARM_BLOCK_METHOD_UNSPECIFIED",n.SEVERITY="SEVERITY",n.PROBABILITY="PROBABILITY"})(Nc||(Nc={}));var Dc;(function(n){n.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",n.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",n.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",n.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",n.BLOCK_NONE="BLOCK_NONE",n.OFF="OFF"})(Dc||(Dc={}));var Lc;(function(n){n.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",n.STOP="STOP",n.MAX_TOKENS="MAX_TOKENS",n.SAFETY="SAFETY",n.RECITATION="RECITATION",n.LANGUAGE="LANGUAGE",n.OTHER="OTHER",n.BLOCKLIST="BLOCKLIST",n.PROHIBITED_CONTENT="PROHIBITED_CONTENT",n.SPII="SPII",n.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",n.IMAGE_SAFETY="IMAGE_SAFETY",n.UNEXPECTED_TOOL_CALL="UNEXPECTED_TOOL_CALL",n.IMAGE_PROHIBITED_CONTENT="IMAGE_PROHIBITED_CONTENT",n.NO_IMAGE="NO_IMAGE",n.IMAGE_RECITATION="IMAGE_RECITATION",n.IMAGE_OTHER="IMAGE_OTHER"})(Lc||(Lc={}));var Uc;(function(n){n.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",n.NEGLIGIBLE="NEGLIGIBLE",n.LOW="LOW",n.MEDIUM="MEDIUM",n.HIGH="HIGH"})(Uc||(Uc={}));var Fc;(function(n){n.HARM_SEVERITY_UNSPECIFIED="HARM_SEVERITY_UNSPECIFIED",n.HARM_SEVERITY_NEGLIGIBLE="HARM_SEVERITY_NEGLIGIBLE",n.HARM_SEVERITY_LOW="HARM_SEVERITY_LOW",n.HARM_SEVERITY_MEDIUM="HARM_SEVERITY_MEDIUM",n.HARM_SEVERITY_HIGH="HARM_SEVERITY_HIGH"})(Fc||(Fc={}));var Bc;(function(n){n.URL_RETRIEVAL_STATUS_UNSPECIFIED="URL_RETRIEVAL_STATUS_UNSPECIFIED",n.URL_RETRIEVAL_STATUS_SUCCESS="URL_RETRIEVAL_STATUS_SUCCESS",n.URL_RETRIEVAL_STATUS_ERROR="URL_RETRIEVAL_STATUS_ERROR",n.URL_RETRIEVAL_STATUS_PAYWALL="URL_RETRIEVAL_STATUS_PAYWALL",n.URL_RETRIEVAL_STATUS_UNSAFE="URL_RETRIEVAL_STATUS_UNSAFE"})(Bc||(Bc={}));var kc;(function(n){n.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",n.SAFETY="SAFETY",n.OTHER="OTHER",n.BLOCKLIST="BLOCKLIST",n.PROHIBITED_CONTENT="PROHIBITED_CONTENT",n.IMAGE_SAFETY="IMAGE_SAFETY",n.MODEL_ARMOR="MODEL_ARMOR",n.JAILBREAK="JAILBREAK"})(kc||(kc={}));var Oc;(function(n){n.TRAFFIC_TYPE_UNSPECIFIED="TRAFFIC_TYPE_UNSPECIFIED",n.ON_DEMAND="ON_DEMAND",n.ON_DEMAND_PRIORITY="ON_DEMAND_PRIORITY",n.ON_DEMAND_FLEX="ON_DEMAND_FLEX",n.PROVISIONED_THROUGHPUT="PROVISIONED_THROUGHPUT"})(Oc||(Oc={}));var wr;(function(n){n.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",n.TEXT="TEXT",n.IMAGE="IMAGE",n.AUDIO="AUDIO"})(wr||(wr={}));var Gc;(function(n){n.MODEL_STAGE_UNSPECIFIED="MODEL_STAGE_UNSPECIFIED",n.UNSTABLE_EXPERIMENTAL="UNSTABLE_EXPERIMENTAL",n.EXPERIMENTAL="EXPERIMENTAL",n.PREVIEW="PREVIEW",n.STABLE="STABLE",n.LEGACY="LEGACY",n.DEPRECATED="DEPRECATED",n.RETIRED="RETIRED"})(Gc||(Gc={}));var Vc;(function(n){n.MEDIA_RESOLUTION_UNSPECIFIED="MEDIA_RESOLUTION_UNSPECIFIED",n.MEDIA_RESOLUTION_LOW="MEDIA_RESOLUTION_LOW",n.MEDIA_RESOLUTION_MEDIUM="MEDIA_RESOLUTION_MEDIUM",n.MEDIA_RESOLUTION_HIGH="MEDIA_RESOLUTION_HIGH"})(Vc||(Vc={}));var Hc;(function(n){n.TUNING_MODE_UNSPECIFIED="TUNING_MODE_UNSPECIFIED",n.TUNING_MODE_FULL="TUNING_MODE_FULL",n.TUNING_MODE_PEFT_ADAPTER="TUNING_MODE_PEFT_ADAPTER"})(Hc||(Hc={}));var zc;(function(n){n.ADAPTER_SIZE_UNSPECIFIED="ADAPTER_SIZE_UNSPECIFIED",n.ADAPTER_SIZE_ONE="ADAPTER_SIZE_ONE",n.ADAPTER_SIZE_TWO="ADAPTER_SIZE_TWO",n.ADAPTER_SIZE_FOUR="ADAPTER_SIZE_FOUR",n.ADAPTER_SIZE_EIGHT="ADAPTER_SIZE_EIGHT",n.ADAPTER_SIZE_SIXTEEN="ADAPTER_SIZE_SIXTEEN",n.ADAPTER_SIZE_THIRTY_TWO="ADAPTER_SIZE_THIRTY_TWO"})(zc||(zc={}));var Ra;(function(n){n.JOB_STATE_UNSPECIFIED="JOB_STATE_UNSPECIFIED",n.JOB_STATE_QUEUED="JOB_STATE_QUEUED",n.JOB_STATE_PENDING="JOB_STATE_PENDING",n.JOB_STATE_RUNNING="JOB_STATE_RUNNING",n.JOB_STATE_SUCCEEDED="JOB_STATE_SUCCEEDED",n.JOB_STATE_FAILED="JOB_STATE_FAILED",n.JOB_STATE_CANCELLING="JOB_STATE_CANCELLING",n.JOB_STATE_CANCELLED="JOB_STATE_CANCELLED",n.JOB_STATE_PAUSED="JOB_STATE_PAUSED",n.JOB_STATE_EXPIRED="JOB_STATE_EXPIRED",n.JOB_STATE_UPDATING="JOB_STATE_UPDATING",n.JOB_STATE_PARTIALLY_SUCCEEDED="JOB_STATE_PARTIALLY_SUCCEEDED"})(Ra||(Ra={}));var Wc;(function(n){n.TUNING_JOB_STATE_UNSPECIFIED="TUNING_JOB_STATE_UNSPECIFIED",n.TUNING_JOB_STATE_WAITING_FOR_QUOTA="TUNING_JOB_STATE_WAITING_FOR_QUOTA",n.TUNING_JOB_STATE_PROCESSING_DATASET="TUNING_JOB_STATE_PROCESSING_DATASET",n.TUNING_JOB_STATE_WAITING_FOR_CAPACITY="TUNING_JOB_STATE_WAITING_FOR_CAPACITY",n.TUNING_JOB_STATE_TUNING="TUNING_JOB_STATE_TUNING",n.TUNING_JOB_STATE_POST_PROCESSING="TUNING_JOB_STATE_POST_PROCESSING"})(Wc||(Wc={}));var qc;(function(n){n.AGGREGATION_METRIC_UNSPECIFIED="AGGREGATION_METRIC_UNSPECIFIED",n.AVERAGE="AVERAGE",n.MODE="MODE",n.STANDARD_DEVIATION="STANDARD_DEVIATION",n.VARIANCE="VARIANCE",n.MINIMUM="MINIMUM",n.MAXIMUM="MAXIMUM",n.MEDIAN="MEDIAN",n.PERCENTILE_P90="PERCENTILE_P90",n.PERCENTILE_P95="PERCENTILE_P95",n.PERCENTILE_P99="PERCENTILE_P99"})(qc||(qc={}));var $c;(function(n){n.PAIRWISE_CHOICE_UNSPECIFIED="PAIRWISE_CHOICE_UNSPECIFIED",n.BASELINE="BASELINE",n.CANDIDATE="CANDIDATE",n.TIE="TIE"})($c||($c={}));var Xc;(function(n){n.TUNING_TASK_UNSPECIFIED="TUNING_TASK_UNSPECIFIED",n.TUNING_TASK_I2V="TUNING_TASK_I2V",n.TUNING_TASK_T2V="TUNING_TASK_T2V",n.TUNING_TASK_R2V="TUNING_TASK_R2V"})(Xc||(Xc={}));var Yc;(function(n){n.STATE_UNSPECIFIED="STATE_UNSPECIFIED",n.STATE_PENDING="STATE_PENDING",n.STATE_ACTIVE="STATE_ACTIVE",n.STATE_FAILED="STATE_FAILED"})(Yc||(Yc={}));var Jc;(function(n){n.MEDIA_RESOLUTION_UNSPECIFIED="MEDIA_RESOLUTION_UNSPECIFIED",n.MEDIA_RESOLUTION_LOW="MEDIA_RESOLUTION_LOW",n.MEDIA_RESOLUTION_MEDIUM="MEDIA_RESOLUTION_MEDIUM",n.MEDIA_RESOLUTION_HIGH="MEDIA_RESOLUTION_HIGH",n.MEDIA_RESOLUTION_ULTRA_HIGH="MEDIA_RESOLUTION_ULTRA_HIGH"})(Jc||(Jc={}));var Kc;(function(n){n.TOOL_TYPE_UNSPECIFIED="TOOL_TYPE_UNSPECIFIED",n.GOOGLE_SEARCH_WEB="GOOGLE_SEARCH_WEB",n.GOOGLE_SEARCH_IMAGE="GOOGLE_SEARCH_IMAGE",n.URL_CONTEXT="URL_CONTEXT",n.GOOGLE_MAPS="GOOGLE_MAPS",n.FILE_SEARCH="FILE_SEARCH"})(Kc||(Kc={}));var ba;(function(n){n.COLLECTION="COLLECTION"})(ba||(ba={}));var Zc;(function(n){n.UNSPECIFIED="unspecified",n.FLEX="flex",n.STANDARD="standard",n.PRIORITY="priority"})(Zc||(Zc={}));var Qc;(function(n){n.FEATURE_SELECTION_PREFERENCE_UNSPECIFIED="FEATURE_SELECTION_PREFERENCE_UNSPECIFIED",n.PRIORITIZE_QUALITY="PRIORITIZE_QUALITY",n.BALANCED="BALANCED",n.PRIORITIZE_COST="PRIORITIZE_COST"})(Qc||(Qc={}));var Rr;(function(n){n.PREDICT="PREDICT",n.EMBED_CONTENT="EMBED_CONTENT"})(Rr||(Rr={}));var jc;(function(n){n.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",n.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",n.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",n.BLOCK_NONE="BLOCK_NONE"})(jc||(jc={}));var eu;(function(n){n.auto="auto",n.en="en",n.ja="ja",n.ko="ko",n.hi="hi",n.zh="zh",n.pt="pt",n.es="es"})(eu||(eu={}));var tu;(function(n){n.MASK_MODE_DEFAULT="MASK_MODE_DEFAULT",n.MASK_MODE_USER_PROVIDED="MASK_MODE_USER_PROVIDED",n.MASK_MODE_BACKGROUND="MASK_MODE_BACKGROUND",n.MASK_MODE_FOREGROUND="MASK_MODE_FOREGROUND",n.MASK_MODE_SEMANTIC="MASK_MODE_SEMANTIC"})(tu||(tu={}));var nu;(function(n){n.CONTROL_TYPE_DEFAULT="CONTROL_TYPE_DEFAULT",n.CONTROL_TYPE_CANNY="CONTROL_TYPE_CANNY",n.CONTROL_TYPE_SCRIBBLE="CONTROL_TYPE_SCRIBBLE",n.CONTROL_TYPE_FACE_MESH="CONTROL_TYPE_FACE_MESH"})(nu||(nu={}));var iu;(function(n){n.SUBJECT_TYPE_DEFAULT="SUBJECT_TYPE_DEFAULT",n.SUBJECT_TYPE_PERSON="SUBJECT_TYPE_PERSON",n.SUBJECT_TYPE_ANIMAL="SUBJECT_TYPE_ANIMAL",n.SUBJECT_TYPE_PRODUCT="SUBJECT_TYPE_PRODUCT"})(iu||(iu={}));var ou;(function(n){n.EDIT_MODE_DEFAULT="EDIT_MODE_DEFAULT",n.EDIT_MODE_INPAINT_REMOVAL="EDIT_MODE_INPAINT_REMOVAL",n.EDIT_MODE_INPAINT_INSERTION="EDIT_MODE_INPAINT_INSERTION",n.EDIT_MODE_OUTPAINT="EDIT_MODE_OUTPAINT",n.EDIT_MODE_CONTROLLED_EDITING="EDIT_MODE_CONTROLLED_EDITING",n.EDIT_MODE_STYLE="EDIT_MODE_STYLE",n.EDIT_MODE_BGSWAP="EDIT_MODE_BGSWAP",n.EDIT_MODE_PRODUCT_IMAGE="EDIT_MODE_PRODUCT_IMAGE"})(ou||(ou={}));var ru;(function(n){n.FOREGROUND="FOREGROUND",n.BACKGROUND="BACKGROUND",n.PROMPT="PROMPT",n.SEMANTIC="SEMANTIC",n.INTERACTIVE="INTERACTIVE"})(ru||(ru={}));var su;(function(n){n.ASSET="ASSET",n.STYLE="STYLE"})(su||(su={}));var au;(function(n){n.INSERT="INSERT",n.REMOVE="REMOVE",n.REMOVE_STATIC="REMOVE_STATIC",n.OUTPAINT="OUTPAINT"})(au||(au={}));var lu;(function(n){n.OPTIMIZED="OPTIMIZED",n.LOSSLESS="LOSSLESS"})(lu||(lu={}));var cu;(function(n){n.SUPERVISED_FINE_TUNING="SUPERVISED_FINE_TUNING",n.PREFERENCE_TUNING="PREFERENCE_TUNING",n.DISTILLATION="DISTILLATION"})(cu||(cu={}));var uu;(function(n){n.STATE_UNSPECIFIED="STATE_UNSPECIFIED",n.PROCESSING="PROCESSING",n.ACTIVE="ACTIVE",n.FAILED="FAILED"})(uu||(uu={}));var du;(function(n){n.SOURCE_UNSPECIFIED="SOURCE_UNSPECIFIED",n.UPLOADED="UPLOADED",n.GENERATED="GENERATED",n.REGISTERED="REGISTERED"})(du||(du={}));var fu;(function(n){n.TURN_COMPLETE_REASON_UNSPECIFIED="TURN_COMPLETE_REASON_UNSPECIFIED",n.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",n.RESPONSE_REJECTED="RESPONSE_REJECTED",n.NEED_MORE_INPUT="NEED_MORE_INPUT"})(fu||(fu={}));var hu;(function(n){n.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",n.TEXT="TEXT",n.IMAGE="IMAGE",n.VIDEO="VIDEO",n.AUDIO="AUDIO",n.DOCUMENT="DOCUMENT"})(hu||(hu={}));var pu;(function(n){n.VAD_SIGNAL_TYPE_UNSPECIFIED="VAD_SIGNAL_TYPE_UNSPECIFIED",n.VAD_SIGNAL_TYPE_SOS="VAD_SIGNAL_TYPE_SOS",n.VAD_SIGNAL_TYPE_EOS="VAD_SIGNAL_TYPE_EOS"})(pu||(pu={}));var mu;(function(n){n.TYPE_UNSPECIFIED="TYPE_UNSPECIFIED",n.ACTIVITY_START="ACTIVITY_START",n.ACTIVITY_END="ACTIVITY_END"})(mu||(mu={}));var gu;(function(n){n.START_SENSITIVITY_UNSPECIFIED="START_SENSITIVITY_UNSPECIFIED",n.START_SENSITIVITY_HIGH="START_SENSITIVITY_HIGH",n.START_SENSITIVITY_LOW="START_SENSITIVITY_LOW"})(gu||(gu={}));var _u;(function(n){n.END_SENSITIVITY_UNSPECIFIED="END_SENSITIVITY_UNSPECIFIED",n.END_SENSITIVITY_HIGH="END_SENSITIVITY_HIGH",n.END_SENSITIVITY_LOW="END_SENSITIVITY_LOW"})(_u||(_u={}));var vu;(function(n){n.ACTIVITY_HANDLING_UNSPECIFIED="ACTIVITY_HANDLING_UNSPECIFIED",n.START_OF_ACTIVITY_INTERRUPTS="START_OF_ACTIVITY_INTERRUPTS",n.NO_INTERRUPTION="NO_INTERRUPTION"})(vu||(vu={}));var yu;(function(n){n.TURN_COVERAGE_UNSPECIFIED="TURN_COVERAGE_UNSPECIFIED",n.TURN_INCLUDES_ONLY_ACTIVITY="TURN_INCLUDES_ONLY_ACTIVITY",n.TURN_INCLUDES_ALL_INPUT="TURN_INCLUDES_ALL_INPUT",n.TURN_INCLUDES_AUDIO_ACTIVITY_AND_ALL_VIDEO="TURN_INCLUDES_AUDIO_ACTIVITY_AND_ALL_VIDEO"})(yu||(yu={}));var Eu;(function(n){n.SCALE_UNSPECIFIED="SCALE_UNSPECIFIED",n.C_MAJOR_A_MINOR="C_MAJOR_A_MINOR",n.D_FLAT_MAJOR_B_FLAT_MINOR="D_FLAT_MAJOR_B_FLAT_MINOR",n.D_MAJOR_B_MINOR="D_MAJOR_B_MINOR",n.E_FLAT_MAJOR_C_MINOR="E_FLAT_MAJOR_C_MINOR",n.E_MAJOR_D_FLAT_MINOR="E_MAJOR_D_FLAT_MINOR",n.F_MAJOR_D_MINOR="F_MAJOR_D_MINOR",n.G_FLAT_MAJOR_E_FLAT_MINOR="G_FLAT_MAJOR_E_FLAT_MINOR",n.G_MAJOR_E_MINOR="G_MAJOR_E_MINOR",n.A_FLAT_MAJOR_F_MINOR="A_FLAT_MAJOR_F_MINOR",n.A_MAJOR_G_FLAT_MINOR="A_MAJOR_G_FLAT_MINOR",n.B_FLAT_MAJOR_G_MINOR="B_FLAT_MAJOR_G_MINOR",n.B_MAJOR_A_FLAT_MINOR="B_MAJOR_A_FLAT_MINOR"})(Eu||(Eu={}));var Su;(function(n){n.MUSIC_GENERATION_MODE_UNSPECIFIED="MUSIC_GENERATION_MODE_UNSPECIFIED",n.QUALITY="QUALITY",n.DIVERSITY="DIVERSITY",n.VOCALIZATION="VOCALIZATION"})(Su||(Su={}));var Yi;(function(n){n.PLAYBACK_CONTROL_UNSPECIFIED="PLAYBACK_CONTROL_UNSPECIFIED",n.PLAY="PLAY",n.PAUSE="PAUSE",n.STOP="STOP",n.RESET_CONTEXT="RESET_CONTEXT"})(Yi||(Yi={}));class Pa{constructor(e){const t={};for(const i of e.headers.entries())t[i[0]]=i[1];this.headers=t,this.responseInternal=e}json(){return this.responseInternal.json()}}class To{get text(){var e,t,i,o,r,s,l,d;if(((o=(i=(t=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||t===void 0?void 0:t.content)===null||i===void 0?void 0:i.parts)===null||o===void 0?void 0:o.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning text from the first one.");let c="",f=!1;const p=[];for(const h of(d=(l=(s=(r=this.candidates)===null||r===void 0?void 0:r[0])===null||s===void 0?void 0:s.content)===null||l===void 0?void 0:l.parts)!==null&&d!==void 0?d:[]){for(const[m,v]of Object.entries(h))m!=="text"&&m!=="thought"&&m!=="thoughtSignature"&&(v!==null||v!==void 0)&&p.push(m);if(typeof h.text=="string"){if(typeof h.thought=="boolean"&&h.thought)continue;f=!0,c+=h.text}}return p.length>0&&console.warn(`there are non-text parts ${p} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`),f?c:void 0}get data(){var e,t,i,o,r,s,l,d;if(((o=(i=(t=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||t===void 0?void 0:t.content)===null||i===void 0?void 0:i.parts)===null||o===void 0?void 0:o.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning data from the first one.");let c="";const f=[];for(const p of(d=(l=(s=(r=this.candidates)===null||r===void 0?void 0:r[0])===null||s===void 0?void 0:s.content)===null||l===void 0?void 0:l.parts)!==null&&d!==void 0?d:[]){for(const[h,m]of Object.entries(p))h!=="inlineData"&&(m!==null||m!==void 0)&&f.push(h);p.inlineData&&typeof p.inlineData.data=="string"&&(c+=atob(p.inlineData.data))}return f.length>0&&console.warn(`there are non-data parts ${f} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`),c.length>0?btoa(c):void 0}get functionCalls(){var e,t,i,o,r,s,l,d;if(((o=(i=(t=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||t===void 0?void 0:t.content)===null||i===void 0?void 0:i.parts)===null||o===void 0?void 0:o.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning function calls from the first one.");const c=(d=(l=(s=(r=this.candidates)===null||r===void 0?void 0:r[0])===null||s===void 0?void 0:s.content)===null||l===void 0?void 0:l.parts)===null||d===void 0?void 0:d.filter(f=>f.functionCall).map(f=>f.functionCall).filter(f=>f!==void 0);if((c==null?void 0:c.length)!==0)return c}get executableCode(){var e,t,i,o,r,s,l,d,c;if(((o=(i=(t=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||t===void 0?void 0:t.content)===null||i===void 0?void 0:i.parts)===null||o===void 0?void 0:o.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning executable code from the first one.");const f=(d=(l=(s=(r=this.candidates)===null||r===void 0?void 0:r[0])===null||s===void 0?void 0:s.content)===null||l===void 0?void 0:l.parts)===null||d===void 0?void 0:d.filter(p=>p.executableCode).map(p=>p.executableCode).filter(p=>p!==void 0);if((f==null?void 0:f.length)!==0)return(c=f==null?void 0:f[0])===null||c===void 0?void 0:c.code}get codeExecutionResult(){var e,t,i,o,r,s,l,d,c;if(((o=(i=(t=(e=this.candidates)===null||e===void 0?void 0:e[0])===null||t===void 0?void 0:t.content)===null||i===void 0?void 0:i.parts)===null||o===void 0?void 0:o.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning code execution result from the first one.");const f=(d=(l=(s=(r=this.candidates)===null||r===void 0?void 0:r[0])===null||s===void 0?void 0:s.content)===null||l===void 0?void 0:l.parts)===null||d===void 0?void 0:d.filter(p=>p.codeExecutionResult).map(p=>p.codeExecutionResult).filter(p=>p!==void 0);if((f==null?void 0:f.length)!==0)return(c=f==null?void 0:f[0])===null||c===void 0?void 0:c.output}}class xu{}class Tu{}class I0{}class w0{}class R0{}class b0{}class Mu{}class Au{}class Cu{}class P0{}class br{_fromAPIResponse({apiResponse:e,_isVertexAI:t}){const i=new br;let o;const r=e;return t?o=m0(r):o=p0(r),Object.assign(i,o),i}}class Iu{}class wu{}class Ru{}class bu{}class N0{}class D0{}class L0{}class ol{_fromAPIResponse({apiResponse:e,_isVertexAI:t}){const i=new ol,r=x0(e);return Object.assign(i,r),i}}class U0{}class F0{}class B0{}class k0{}class Pu{}class O0{get text(){var e,t,i;let o="",r=!1;const s=[];for(const l of(i=(t=(e=this.serverContent)===null||e===void 0?void 0:e.modelTurn)===null||t===void 0?void 0:t.parts)!==null&&i!==void 0?i:[]){for(const[d,c]of Object.entries(l))d!=="text"&&d!=="thought"&&c!==null&&s.push(d);if(typeof l.text=="string"){if(typeof l.thought=="boolean"&&l.thought)continue;r=!0,o+=l.text}}return s.length>0&&console.warn(`there are non-text parts ${s} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`),r?o:void 0}get data(){var e,t,i;let o="";const r=[];for(const s of(i=(t=(e=this.serverContent)===null||e===void 0?void 0:e.modelTurn)===null||t===void 0?void 0:t.parts)!==null&&i!==void 0?i:[]){for(const[l,d]of Object.entries(s))l!=="inlineData"&&d!==null&&r.push(l);s.inlineData&&typeof s.inlineData.data=="string"&&(o+=atob(s.inlineData.data))}return r.length>0&&console.warn(`there are non-data parts ${r} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`),o.length>0?btoa(o):void 0}}class G0{get audioChunk(){if(this.serverContent&&this.serverContent.audioChunks&&this.serverContent.audioChunks.length>0)return this.serverContent.audioChunks[0]}}class rl{_fromAPIResponse({apiResponse:e,_isVertexAI:t}){const i=new rl,r=Od(e);return Object.assign(i,r),i}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function ut(n,e){if(!e||typeof e!="string")throw new Error("model is required and must be a string");if(e.includes("..")||e.includes("?")||e.includes("&"))throw new Error("invalid model parameter");if(n.isVertexAI()){if(e.startsWith("publishers/")||e.startsWith("projects/")||e.startsWith("models/"))return e;if(e.indexOf("/")>=0){const t=e.split("/",2);return`publishers/${t[0]}/models/${t[1]}`}else return`publishers/google/models/${e}`}else return e.startsWith("models/")||e.startsWith("tunedModels/")?e:`models/${e}`}function Gd(n,e){const t=ut(n,e);return t?t.startsWith("publishers/")&&n.isVertexAI()?`projects/${n.getProject()}/locations/${n.getLocation()}/${t}`:t.startsWith("models/")&&n.isVertexAI()?`projects/${n.getProject()}/locations/${n.getLocation()}/publishers/google/${t}`:t:""}function Vd(n){return Array.isArray(n)?n.map(e=>Pr(e)):[Pr(n)]}function Pr(n){if(typeof n=="object"&&n!==null)return n;throw new Error(`Could not parse input as Blob. Unsupported blob type: ${typeof n}`)}function Hd(n){const e=Pr(n);if(e.mimeType&&e.mimeType.startsWith("image/"))return e;throw new Error(`Unsupported mime type: ${e.mimeType}`)}function zd(n){const e=Pr(n);if(e.mimeType&&e.mimeType.startsWith("audio/"))return e;throw new Error(`Unsupported mime type: ${e.mimeType}`)}function Nu(n){if(n==null)throw new Error("PartUnion is required");if(typeof n=="object")return n;if(typeof n=="string")return{text:n};throw new Error(`Unsupported part type: ${typeof n}`)}function Wd(n){if(n==null||Array.isArray(n)&&n.length===0)throw new Error("PartListUnion is required");return Array.isArray(n)?n.map(e=>Nu(e)):[Nu(n)]}function Na(n){return n!=null&&typeof n=="object"&&"parts"in n&&Array.isArray(n.parts)}function Du(n){return n!=null&&typeof n=="object"&&"functionCall"in n}function Lu(n){return n!=null&&typeof n=="object"&&"functionResponse"in n}function kt(n){if(n==null)throw new Error("ContentUnion is required");return Na(n)?n:{role:"user",parts:Wd(n)}}function sl(n,e){if(!e)return[];if(n.isVertexAI()&&Array.isArray(e))return e.flatMap(t=>{const i=kt(t);return i.parts&&i.parts.length>0&&i.parts[0].text!==void 0?[i.parts[0].text]:[]});if(n.isVertexAI()){const t=kt(e);return t.parts&&t.parts.length>0&&t.parts[0].text!==void 0?[t.parts[0].text]:[]}return Array.isArray(e)?e.map(t=>kt(t)):[kt(e)]}function on(n){if(n==null||Array.isArray(n)&&n.length===0)throw new Error("contents are required");if(!Array.isArray(n)){if(Du(n)||Lu(n))throw new Error("To specify functionCall or functionResponse parts, please wrap them in a Content object, specifying the role for them");return[kt(n)]}const e=[],t=[],i=Na(n[0]);for(const o of n){const r=Na(o);if(r!=i)throw new Error("Mixing Content and Parts is not supported, please group the parts into a the appropriate Content objects and specify the roles for them");if(r)e.push(o);else{if(Du(o)||Lu(o))throw new Error("To specify functionCall or functionResponse parts, please wrap them, and any other parts, in Content objects as appropriate, specifying the role for them");t.push(o)}}return i||e.push({role:"user",parts:Wd(t)}),e}function V0(n,e){n.includes("null")&&(e.nullable=!0);const t=n.filter(i=>i!=="null");if(t.length===1)e.type=Object.values(fi).includes(t[0].toUpperCase())?t[0].toUpperCase():fi.TYPE_UNSPECIFIED;else{e.anyOf=[];for(const i of t)e.anyOf.push({type:Object.values(fi).includes(i.toUpperCase())?i.toUpperCase():fi.TYPE_UNSPECIFIED})}}function Qi(n){const e={},t=["items"],i=["anyOf"],o=["properties"];if(n.type&&n.anyOf)throw new Error("type and anyOf cannot be both populated.");const r=n.anyOf;r!=null&&r.length==2&&(r[0].type==="null"?(e.nullable=!0,n=r[1]):r[1].type==="null"&&(e.nullable=!0,n=r[0])),n.type instanceof Array&&V0(n.type,e);for(const[s,l]of Object.entries(n))if(l!=null)if(s=="type"){if(l==="null")throw new Error("type: null can not be the only possible type for the field.");if(l instanceof Array)continue;e.type=Object.values(fi).includes(l.toUpperCase())?l.toUpperCase():fi.TYPE_UNSPECIFIED}else if(t.includes(s))e[s]=Qi(l);else if(i.includes(s)){const d=[];for(const c of l){if(c.type=="null"){e.nullable=!0;continue}d.push(Qi(c))}e[s]=d}else if(o.includes(s)){const d={};for(const[c,f]of Object.entries(l))d[c]=Qi(f);e[s]=d}else{if(s==="additionalProperties")continue;e[s]=l}return e}function al(n){return Qi(n)}function ll(n){if(typeof n=="object")return n;if(typeof n=="string")return{voiceConfig:{prebuiltVoiceConfig:{voiceName:n}}};throw new Error(`Unsupported speechConfig type: ${typeof n}`)}function cl(n){if("multiSpeakerVoiceConfig"in n)throw new Error("multiSpeakerVoiceConfig is not supported in the live API.");return n}function lo(n){if(n.functionDeclarations)for(const e of n.functionDeclarations)e.parameters&&(Object.keys(e.parameters).includes("$schema")?e.parametersJsonSchema||(e.parametersJsonSchema=e.parameters,delete e.parameters):e.parameters=Qi(e.parameters)),e.response&&(Object.keys(e.response).includes("$schema")?e.responseJsonSchema||(e.responseJsonSchema=e.response,delete e.response):e.response=Qi(e.response));return n}function co(n){if(n==null)throw new Error("tools is required");if(!Array.isArray(n))throw new Error("tools is required and must be an array of Tools");const e=[];for(const t of n)e.push(t);return e}function H0(n,e,t,i=1){const o=!e.startsWith(`${t}/`)&&e.split("/").length===i;return n.isVertexAI()?e.startsWith("projects/")?e:e.startsWith("locations/")?`projects/${n.getProject()}/${e}`:e.startsWith(`${t}/`)?`projects/${n.getProject()}/locations/${n.getLocation()}/${e}`:o?`projects/${n.getProject()}/locations/${n.getLocation()}/${t}/${e}`:e:o?`${t}/${e}`:e}function Qn(n,e){if(typeof e!="string")throw new Error("name must be a string");return H0(n,e,"cachedContents")}function qd(n){switch(n){case"STATE_UNSPECIFIED":return"JOB_STATE_UNSPECIFIED";case"CREATING":return"JOB_STATE_RUNNING";case"ACTIVE":return"JOB_STATE_SUCCEEDED";case"FAILED":return"JOB_STATE_FAILED";default:return n}}function pi(n){return il(n)}function z0(n){return n!=null&&typeof n=="object"&&"name"in n}function W0(n){return n!=null&&typeof n=="object"&&"video"in n}function q0(n){return n!=null&&typeof n=="object"&&"uri"in n}function $d(n){var e;let t;if(z0(n)&&(t=n.name),!(q0(n)&&(t=n.uri,t===void 0))&&!(W0(n)&&(t=(e=n.video)===null||e===void 0?void 0:e.uri,t===void 0))){if(typeof n=="string"&&(t=n),t===void 0)throw new Error("Could not extract file name from the provided input.");if(t.startsWith("https://")){const o=t.split("files/")[1].match(/[a-z0-9]+/);if(o===null)throw new Error(`Could not extract file name from URI ${t}`);t=o[0]}else t.startsWith("files/")&&(t=t.split("files/")[1]);return t}}function Xd(n,e){let t;return n.isVertexAI()?t=e?"publishers/google/models":"models":t=e?"models":"tunedModels",t}function Yd(n){for(const e of["models","tunedModels","publisherModels"])if($0(n,e))return n[e];return[]}function $0(n,e){return n!==null&&typeof n=="object"&&e in n}function X0(n,e={}){const t=n,i={name:t.name,description:t.description,parametersJsonSchema:t.inputSchema};return t.outputSchema&&(i.responseJsonSchema=t.outputSchema),e.behavior&&(i.behavior=e.behavior),{functionDeclarations:[i]}}function Y0(n,e={}){const t=[],i=new Set;for(const o of n){const r=o.name;if(i.has(r))throw new Error(`Duplicate function name ${r} found in MCP tools. Please ensure function names are unique.`);i.add(r);const s=X0(o,e);s.functionDeclarations&&t.push(...s.functionDeclarations)}return{functionDeclarations:t}}function Jd(n,e){let t;if(typeof e=="string")if(n.isVertexAI())if(e.startsWith("gs://"))t={format:"jsonl",gcsUri:[e]};else if(e.startsWith("bq://"))t={format:"bigquery",bigqueryUri:e};else throw new Error(`Unsupported string source for Vertex AI: ${e}`);else if(e.startsWith("files/"))t={fileName:e};else throw new Error(`Unsupported string source for Gemini API: ${e}`);else if(Array.isArray(e)){if(n.isVertexAI())throw new Error("InlinedRequest[] is not supported in Vertex AI.");t={inlinedRequests:e}}else t=e;const i=[t.gcsUri,t.bigqueryUri].filter(Boolean).length,o=[t.inlinedRequests,t.fileName].filter(Boolean).length;if(n.isVertexAI()){if(o>0||i!==1)throw new Error("Exactly one of `gcsUri` or `bigqueryUri` must be set for Vertex AI.")}else if(i>0||o!==1)throw new Error("Exactly one of `inlinedRequests`, `fileName`, must be set for Gemini API.");return t}function J0(n){if(typeof n!="string")return n;const e=n;if(e.startsWith("gs://"))return{format:"jsonl",gcsUri:e};if(e.startsWith("bq://"))return{format:"bigquery",bigqueryUri:e};throw new Error(`Unsupported destination: ${e}`)}function Kd(n){if(typeof n!="object"||n===null)return{};const e=n,t=e.inlinedResponses;if(typeof t!="object"||t===null)return n;const o=t.inlinedResponses;if(!Array.isArray(o)||o.length===0)return n;let r=!1;for(const s of o){if(typeof s!="object"||s===null)continue;const d=s.response;if(typeof d!="object"||d===null)continue;if(d.embedding!==void 0){r=!0;break}}return r&&(e.inlinedEmbedContentResponses=e.inlinedResponses,delete e.inlinedResponses),n}function uo(n,e){const t=e;if(!n.isVertexAI()){if(/batches\/[^/]+$/.test(t))return t.split("/").pop();throw new Error(`Invalid batch job name: ${t}.`)}if(/^projects\/[^/]+\/locations\/[^/]+\/batchPredictionJobs\/[^/]+$/.test(t))return t.split("/").pop();if(/^\d+$/.test(t))return t;throw new Error(`Invalid batch job name: ${t}.`)}function Zd(n){const e=n;return e==="BATCH_STATE_UNSPECIFIED"?"JOB_STATE_UNSPECIFIED":e==="BATCH_STATE_PENDING"?"JOB_STATE_PENDING":e==="BATCH_STATE_RUNNING"?"JOB_STATE_RUNNING":e==="BATCH_STATE_SUCCEEDED"?"JOB_STATE_SUCCEEDED":e==="BATCH_STATE_FAILED"?"JOB_STATE_FAILED":e==="BATCH_STATE_CANCELLED"?"JOB_STATE_CANCELLED":e==="BATCH_STATE_EXPIRED"?"JOB_STATE_EXPIRED":e}function K0(n){return n.includes("gemini")&&n!=="gemini-embedding-001"||n.includes("maas")}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Z0(n){const e={},t=a(n,["apiKey"]);if(t!=null&&u(e,["apiKey"],t),a(n,["apiKeyConfig"])!==void 0)throw new Error("apiKeyConfig parameter is not supported in Gemini API.");if(a(n,["authType"])!==void 0)throw new Error("authType parameter is not supported in Gemini API.");if(a(n,["googleServiceAccountConfig"])!==void 0)throw new Error("googleServiceAccountConfig parameter is not supported in Gemini API.");if(a(n,["httpBasicAuthConfig"])!==void 0)throw new Error("httpBasicAuthConfig parameter is not supported in Gemini API.");if(a(n,["oauthConfig"])!==void 0)throw new Error("oauthConfig parameter is not supported in Gemini API.");if(a(n,["oidcConfig"])!==void 0)throw new Error("oidcConfig parameter is not supported in Gemini API.");return e}function Q0(n){const e={},t=a(n,["responsesFile"]);t!=null&&u(e,["fileName"],t);const i=a(n,["inlinedResponses","inlinedResponses"]);if(i!=null){let r=i;Array.isArray(r)&&(r=r.map(s=>Ny(s))),u(e,["inlinedResponses"],r)}const o=a(n,["inlinedEmbedContentResponses","inlinedResponses"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>s)),u(e,["inlinedEmbedContentResponses"],r)}return e}function j0(n){const e={},t=a(n,["predictionsFormat"]);t!=null&&u(e,["format"],t);const i=a(n,["gcsDestination","outputUriPrefix"]);i!=null&&u(e,["gcsUri"],i);const o=a(n,["bigqueryDestination","outputUri"]);return o!=null&&u(e,["bigqueryUri"],o),e}function ey(n){const e={},t=a(n,["format"]);t!=null&&u(e,["predictionsFormat"],t);const i=a(n,["gcsUri"]);i!=null&&u(e,["gcsDestination","outputUriPrefix"],i);const o=a(n,["bigqueryUri"]);if(o!=null&&u(e,["bigqueryDestination","outputUri"],o),a(n,["fileName"])!==void 0)throw new Error("fileName parameter is not supported in Vertex AI.");if(a(n,["inlinedResponses"])!==void 0)throw new Error("inlinedResponses parameter is not supported in Vertex AI.");if(a(n,["inlinedEmbedContentResponses"])!==void 0)throw new Error("inlinedEmbedContentResponses parameter is not supported in Vertex AI.");return e}function xr(n){const e={},t=a(n,["name"]);t!=null&&u(e,["name"],t);const i=a(n,["metadata","displayName"]);i!=null&&u(e,["displayName"],i);const o=a(n,["metadata","state"]);o!=null&&u(e,["state"],Zd(o));const r=a(n,["metadata","createTime"]);r!=null&&u(e,["createTime"],r);const s=a(n,["metadata","endTime"]);s!=null&&u(e,["endTime"],s);const l=a(n,["metadata","updateTime"]);l!=null&&u(e,["updateTime"],l);const d=a(n,["metadata","model"]);d!=null&&u(e,["model"],d);const c=a(n,["metadata","output"]);return c!=null&&u(e,["dest"],Q0(Kd(c))),e}function Da(n){const e={},t=a(n,["name"]);t!=null&&u(e,["name"],t);const i=a(n,["displayName"]);i!=null&&u(e,["displayName"],i);const o=a(n,["state"]);o!=null&&u(e,["state"],Zd(o));const r=a(n,["error"]);r!=null&&u(e,["error"],r);const s=a(n,["createTime"]);s!=null&&u(e,["createTime"],s);const l=a(n,["startTime"]);l!=null&&u(e,["startTime"],l);const d=a(n,["endTime"]);d!=null&&u(e,["endTime"],d);const c=a(n,["updateTime"]);c!=null&&u(e,["updateTime"],c);const f=a(n,["model"]);f!=null&&u(e,["model"],f);const p=a(n,["inputConfig"]);p!=null&&u(e,["src"],ty(p));const h=a(n,["outputConfig"]);h!=null&&u(e,["dest"],j0(Kd(h)));const m=a(n,["completionStats"]);return m!=null&&u(e,["completionStats"],m),e}function ty(n){const e={},t=a(n,["instancesFormat"]);t!=null&&u(e,["format"],t);const i=a(n,["gcsSource","uris"]);i!=null&&u(e,["gcsUri"],i);const o=a(n,["bigquerySource","inputUri"]);return o!=null&&u(e,["bigqueryUri"],o),e}function ny(n,e){const t={};if(a(e,["format"])!==void 0)throw new Error("format parameter is not supported in Gemini API.");if(a(e,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");if(a(e,["bigqueryUri"])!==void 0)throw new Error("bigqueryUri parameter is not supported in Gemini API.");const i=a(e,["fileName"]);i!=null&&u(t,["fileName"],i);const o=a(e,["inlinedRequests"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>Py(n,s))),u(t,["requests","requests"],r)}return t}function iy(n){const e={},t=a(n,["format"]);t!=null&&u(e,["instancesFormat"],t);const i=a(n,["gcsUri"]);i!=null&&u(e,["gcsSource","uris"],i);const o=a(n,["bigqueryUri"]);if(o!=null&&u(e,["bigquerySource","inputUri"],o),a(n,["fileName"])!==void 0)throw new Error("fileName parameter is not supported in Vertex AI.");if(a(n,["inlinedRequests"])!==void 0)throw new Error("inlinedRequests parameter is not supported in Vertex AI.");return e}function oy(n){const e={},t=a(n,["data"]);if(t!=null&&u(e,["data"],t),a(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const i=a(n,["mimeType"]);return i!=null&&u(e,["mimeType"],i),e}function ry(n,e){const t={},i=a(e,["name"]);return i!=null&&u(t,["_url","name"],uo(n,i)),t}function sy(n,e){const t={},i=a(e,["name"]);return i!=null&&u(t,["_url","name"],uo(n,i)),t}function ay(n){const e={},t=a(n,["content"]);t!=null&&u(e,["content"],t);const i=a(n,["citationMetadata"]);i!=null&&u(e,["citationMetadata"],ly(i));const o=a(n,["tokenCount"]);o!=null&&u(e,["tokenCount"],o);const r=a(n,["finishReason"]);r!=null&&u(e,["finishReason"],r);const s=a(n,["groundingMetadata"]);s!=null&&u(e,["groundingMetadata"],s);const l=a(n,["avgLogprobs"]);l!=null&&u(e,["avgLogprobs"],l);const d=a(n,["index"]);d!=null&&u(e,["index"],d);const c=a(n,["logprobsResult"]);c!=null&&u(e,["logprobsResult"],c);const f=a(n,["safetyRatings"]);if(f!=null){let h=f;Array.isArray(h)&&(h=h.map(m=>m)),u(e,["safetyRatings"],h)}const p=a(n,["urlContextMetadata"]);return p!=null&&u(e,["urlContextMetadata"],p),e}function ly(n){const e={},t=a(n,["citationSources"]);if(t!=null){let i=t;Array.isArray(i)&&(i=i.map(o=>o)),u(e,["citations"],i)}return e}function Qd(n){const e={},t=a(n,["parts"]);if(t!=null){let o=t;Array.isArray(o)&&(o=o.map(r=>Oy(r))),u(e,["parts"],o)}const i=a(n,["role"]);return i!=null&&u(e,["role"],i),e}function cy(n,e){const t={},i=a(n,["displayName"]);if(e!==void 0&&i!=null&&u(e,["batch","displayName"],i),a(n,["dest"])!==void 0)throw new Error("dest parameter is not supported in Gemini API.");return t}function uy(n,e){const t={},i=a(n,["displayName"]);e!==void 0&&i!=null&&u(e,["displayName"],i);const o=a(n,["dest"]);return e!==void 0&&o!=null&&u(e,["outputConfig"],ey(J0(o))),t}function Uu(n,e){const t={},i=a(e,["model"]);i!=null&&u(t,["_url","model"],ut(n,i));const o=a(e,["src"]);o!=null&&u(t,["batch","inputConfig"],ny(n,Jd(n,o)));const r=a(e,["config"]);return r!=null&&cy(r,t),t}function dy(n,e){const t={},i=a(e,["model"]);i!=null&&u(t,["model"],ut(n,i));const o=a(e,["src"]);o!=null&&u(t,["inputConfig"],iy(Jd(n,o)));const r=a(e,["config"]);return r!=null&&uy(r,t),t}function fy(n,e){const t={},i=a(n,["displayName"]);return e!==void 0&&i!=null&&u(e,["batch","displayName"],i),t}function hy(n,e){const t={},i=a(e,["model"]);i!=null&&u(t,["_url","model"],ut(n,i));const o=a(e,["src"]);o!=null&&u(t,["batch","inputConfig"],Ey(n,o));const r=a(e,["config"]);return r!=null&&fy(r,t),t}function py(n,e){const t={},i=a(e,["name"]);return i!=null&&u(t,["_url","name"],uo(n,i)),t}function my(n,e){const t={},i=a(e,["name"]);return i!=null&&u(t,["_url","name"],uo(n,i)),t}function gy(n){const e={},t=a(n,["sdkHttpResponse"]);t!=null&&u(e,["sdkHttpResponse"],t);const i=a(n,["name"]);i!=null&&u(e,["name"],i);const o=a(n,["done"]);o!=null&&u(e,["done"],o);const r=a(n,["error"]);return r!=null&&u(e,["error"],r),e}function _y(n){const e={},t=a(n,["sdkHttpResponse"]);t!=null&&u(e,["sdkHttpResponse"],t);const i=a(n,["name"]);i!=null&&u(e,["name"],i);const o=a(n,["done"]);o!=null&&u(e,["done"],o);const r=a(n,["error"]);return r!=null&&u(e,["error"],r),e}function vy(n,e){const t={},i=a(e,["contents"]);if(i!=null){let r=sl(n,i);Array.isArray(r)&&(r=r.map(s=>s)),u(t,["requests[]","request","content"],r)}const o=a(e,["config"]);return o!=null&&(u(t,["_self"],yy(o,t)),f0(t,{"requests[].*":"requests[].request.*"})),t}function yy(n,e){const t={},i=a(n,["taskType"]);e!==void 0&&i!=null&&u(e,["requests[]","taskType"],i);const o=a(n,["title"]);e!==void 0&&o!=null&&u(e,["requests[]","title"],o);const r=a(n,["outputDimensionality"]);if(e!==void 0&&r!=null&&u(e,["requests[]","outputDimensionality"],r),a(n,["mimeType"])!==void 0)throw new Error("mimeType parameter is not supported in Gemini API.");if(a(n,["autoTruncate"])!==void 0)throw new Error("autoTruncate parameter is not supported in Gemini API.");return t}function Ey(n,e){const t={},i=a(e,["fileName"]);i!=null&&u(t,["file_name"],i);const o=a(e,["inlinedRequests"]);return o!=null&&u(t,["requests"],vy(n,o)),t}function Sy(n){const e={};if(a(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const t=a(n,["fileUri"]);t!=null&&u(e,["fileUri"],t);const i=a(n,["mimeType"]);return i!=null&&u(e,["mimeType"],i),e}function xy(n){const e={},t=a(n,["id"]);t!=null&&u(e,["id"],t);const i=a(n,["args"]);i!=null&&u(e,["args"],i);const o=a(n,["name"]);if(o!=null&&u(e,["name"],o),a(n,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(a(n,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return e}function Ty(n){const e={},t=a(n,["allowedFunctionNames"]);t!=null&&u(e,["allowedFunctionNames"],t);const i=a(n,["mode"]);if(i!=null&&u(e,["mode"],i),a(n,["streamFunctionCallArguments"])!==void 0)throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");return e}function My(n,e,t){const i={},o=a(e,["systemInstruction"]);t!==void 0&&o!=null&&u(t,["systemInstruction"],Qd(kt(o)));const r=a(e,["temperature"]);r!=null&&u(i,["temperature"],r);const s=a(e,["topP"]);s!=null&&u(i,["topP"],s);const l=a(e,["topK"]);l!=null&&u(i,["topK"],l);const d=a(e,["candidateCount"]);d!=null&&u(i,["candidateCount"],d);const c=a(e,["maxOutputTokens"]);c!=null&&u(i,["maxOutputTokens"],c);const f=a(e,["stopSequences"]);f!=null&&u(i,["stopSequences"],f);const p=a(e,["responseLogprobs"]);p!=null&&u(i,["responseLogprobs"],p);const h=a(e,["logprobs"]);h!=null&&u(i,["logprobs"],h);const m=a(e,["presencePenalty"]);m!=null&&u(i,["presencePenalty"],m);const v=a(e,["frequencyPenalty"]);v!=null&&u(i,["frequencyPenalty"],v);const E=a(e,["seed"]);E!=null&&u(i,["seed"],E);const g=a(e,["responseMimeType"]);g!=null&&u(i,["responseMimeType"],g);const _=a(e,["responseSchema"]);_!=null&&u(i,["responseSchema"],al(_));const T=a(e,["responseJsonSchema"]);if(T!=null&&u(i,["responseJsonSchema"],T),a(e,["routingConfig"])!==void 0)throw new Error("routingConfig parameter is not supported in Gemini API.");if(a(e,["modelSelectionConfig"])!==void 0)throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");const A=a(e,["safetySettings"]);if(t!==void 0&&A!=null){let X=A;Array.isArray(X)&&(X=X.map(G=>Gy(G))),u(t,["safetySettings"],X)}const C=a(e,["tools"]);if(t!==void 0&&C!=null){let X=co(C);Array.isArray(X)&&(X=X.map(G=>Hy(lo(G)))),u(t,["tools"],X)}const w=a(e,["toolConfig"]);if(t!==void 0&&w!=null&&u(t,["toolConfig"],Vy(w)),a(e,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const M=a(e,["cachedContent"]);t!==void 0&&M!=null&&u(t,["cachedContent"],Qn(n,M));const P=a(e,["responseModalities"]);P!=null&&u(i,["responseModalities"],P);const S=a(e,["mediaResolution"]);S!=null&&u(i,["mediaResolution"],S);const I=a(e,["speechConfig"]);if(I!=null&&u(i,["speechConfig"],ll(I)),a(e,["audioTimestamp"])!==void 0)throw new Error("audioTimestamp parameter is not supported in Gemini API.");const W=a(e,["thinkingConfig"]);W!=null&&u(i,["thinkingConfig"],W);const N=a(e,["imageConfig"]);N!=null&&u(i,["imageConfig"],by(N));const H=a(e,["enableEnhancedCivicAnswers"]);if(H!=null&&u(i,["enableEnhancedCivicAnswers"],H),a(e,["modelArmorConfig"])!==void 0)throw new Error("modelArmorConfig parameter is not supported in Gemini API.");const V=a(e,["serviceTier"]);return t!==void 0&&V!=null&&u(t,["serviceTier"],V),i}function Ay(n){const e={},t=a(n,["sdkHttpResponse"]);t!=null&&u(e,["sdkHttpResponse"],t);const i=a(n,["candidates"]);if(i!=null){let c=i;Array.isArray(c)&&(c=c.map(f=>ay(f))),u(e,["candidates"],c)}const o=a(n,["modelVersion"]);o!=null&&u(e,["modelVersion"],o);const r=a(n,["promptFeedback"]);r!=null&&u(e,["promptFeedback"],r);const s=a(n,["responseId"]);s!=null&&u(e,["responseId"],s);const l=a(n,["usageMetadata"]);l!=null&&u(e,["usageMetadata"],l);const d=a(n,["modelStatus"]);return d!=null&&u(e,["modelStatus"],d),e}function Cy(n,e){const t={},i=a(e,["name"]);return i!=null&&u(t,["_url","name"],uo(n,i)),t}function Iy(n,e){const t={},i=a(e,["name"]);return i!=null&&u(t,["_url","name"],uo(n,i)),t}function wy(n){const e={},t=a(n,["authConfig"]);t!=null&&u(e,["authConfig"],Z0(t));const i=a(n,["enableWidget"]);return i!=null&&u(e,["enableWidget"],i),e}function Ry(n){const e={},t=a(n,["searchTypes"]);if(t!=null&&u(e,["searchTypes"],t),a(n,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");if(a(n,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");const i=a(n,["timeRangeFilter"]);return i!=null&&u(e,["timeRangeFilter"],i),e}function by(n){const e={},t=a(n,["aspectRatio"]);t!=null&&u(e,["aspectRatio"],t);const i=a(n,["imageSize"]);if(i!=null&&u(e,["imageSize"],i),a(n,["personGeneration"])!==void 0)throw new Error("personGeneration parameter is not supported in Gemini API.");if(a(n,["prominentPeople"])!==void 0)throw new Error("prominentPeople parameter is not supported in Gemini API.");if(a(n,["outputMimeType"])!==void 0)throw new Error("outputMimeType parameter is not supported in Gemini API.");if(a(n,["outputCompressionQuality"])!==void 0)throw new Error("outputCompressionQuality parameter is not supported in Gemini API.");if(a(n,["imageOutputOptions"])!==void 0)throw new Error("imageOutputOptions parameter is not supported in Gemini API.");return e}function Py(n,e){const t={},i=a(e,["model"]);i!=null&&u(t,["request","model"],ut(n,i));const o=a(e,["contents"]);if(o!=null){let l=on(o);Array.isArray(l)&&(l=l.map(d=>Qd(d))),u(t,["request","contents"],l)}const r=a(e,["metadata"]);r!=null&&u(t,["metadata"],r);const s=a(e,["config"]);return s!=null&&u(t,["request","generationConfig"],My(n,s,a(t,["request"],{}))),t}function Ny(n){const e={},t=a(n,["response"]);t!=null&&u(e,["response"],Ay(t));const i=a(n,["metadata"]);i!=null&&u(e,["metadata"],i);const o=a(n,["error"]);return o!=null&&u(e,["error"],o),e}function Dy(n,e){const t={},i=a(n,["pageSize"]);e!==void 0&&i!=null&&u(e,["_query","pageSize"],i);const o=a(n,["pageToken"]);if(e!==void 0&&o!=null&&u(e,["_query","pageToken"],o),a(n,["filter"])!==void 0)throw new Error("filter parameter is not supported in Gemini API.");return t}function Ly(n,e){const t={},i=a(n,["pageSize"]);e!==void 0&&i!=null&&u(e,["_query","pageSize"],i);const o=a(n,["pageToken"]);e!==void 0&&o!=null&&u(e,["_query","pageToken"],o);const r=a(n,["filter"]);return e!==void 0&&r!=null&&u(e,["_query","filter"],r),t}function Uy(n){const e={},t=a(n,["config"]);return t!=null&&Dy(t,e),e}function Fy(n){const e={},t=a(n,["config"]);return t!=null&&Ly(t,e),e}function By(n){const e={},t=a(n,["sdkHttpResponse"]);t!=null&&u(e,["sdkHttpResponse"],t);const i=a(n,["nextPageToken"]);i!=null&&u(e,["nextPageToken"],i);const o=a(n,["operations"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>xr(s))),u(e,["batchJobs"],r)}return e}function ky(n){const e={},t=a(n,["sdkHttpResponse"]);t!=null&&u(e,["sdkHttpResponse"],t);const i=a(n,["nextPageToken"]);i!=null&&u(e,["nextPageToken"],i);const o=a(n,["batchPredictionJobs"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>Da(s))),u(e,["batchJobs"],r)}return e}function Oy(n){const e={},t=a(n,["mediaResolution"]);t!=null&&u(e,["mediaResolution"],t);const i=a(n,["codeExecutionResult"]);i!=null&&u(e,["codeExecutionResult"],i);const o=a(n,["executableCode"]);o!=null&&u(e,["executableCode"],o);const r=a(n,["fileData"]);r!=null&&u(e,["fileData"],Sy(r));const s=a(n,["functionCall"]);s!=null&&u(e,["functionCall"],xy(s));const l=a(n,["functionResponse"]);l!=null&&u(e,["functionResponse"],l);const d=a(n,["inlineData"]);d!=null&&u(e,["inlineData"],oy(d));const c=a(n,["text"]);c!=null&&u(e,["text"],c);const f=a(n,["thought"]);f!=null&&u(e,["thought"],f);const p=a(n,["thoughtSignature"]);p!=null&&u(e,["thoughtSignature"],p);const h=a(n,["videoMetadata"]);h!=null&&u(e,["videoMetadata"],h);const m=a(n,["toolCall"]);m!=null&&u(e,["toolCall"],m);const v=a(n,["toolResponse"]);v!=null&&u(e,["toolResponse"],v);const E=a(n,["partMetadata"]);return E!=null&&u(e,["partMetadata"],E),e}function Gy(n){const e={},t=a(n,["category"]);if(t!=null&&u(e,["category"],t),a(n,["method"])!==void 0)throw new Error("method parameter is not supported in Gemini API.");const i=a(n,["threshold"]);return i!=null&&u(e,["threshold"],i),e}function Vy(n){const e={},t=a(n,["retrievalConfig"]);t!=null&&u(e,["retrievalConfig"],t);const i=a(n,["functionCallingConfig"]);i!=null&&u(e,["functionCallingConfig"],Ty(i));const o=a(n,["includeServerSideToolInvocations"]);return o!=null&&u(e,["includeServerSideToolInvocations"],o),e}function Hy(n){const e={};if(a(n,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const t=a(n,["computerUse"]);t!=null&&u(e,["computerUse"],t);const i=a(n,["fileSearch"]);i!=null&&u(e,["fileSearch"],i);const o=a(n,["googleSearch"]);o!=null&&u(e,["googleSearch"],Ry(o));const r=a(n,["googleMaps"]);r!=null&&u(e,["googleMaps"],wy(r));const s=a(n,["codeExecution"]);if(s!=null&&u(e,["codeExecution"],s),a(n,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const l=a(n,["functionDeclarations"]);if(l!=null){let p=l;Array.isArray(p)&&(p=p.map(h=>h)),u(e,["functionDeclarations"],p)}const d=a(n,["googleSearchRetrieval"]);if(d!=null&&u(e,["googleSearchRetrieval"],d),a(n,["parallelAiSearch"])!==void 0)throw new Error("parallelAiSearch parameter is not supported in Gemini API.");const c=a(n,["urlContext"]);c!=null&&u(e,["urlContext"],c);const f=a(n,["mcpServers"]);if(f!=null){let p=f;Array.isArray(p)&&(p=p.map(h=>h)),u(e,["mcpServers"],p)}return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Kn;(function(n){n.PAGED_ITEM_BATCH_JOBS="batchJobs",n.PAGED_ITEM_MODELS="models",n.PAGED_ITEM_TUNING_JOBS="tuningJobs",n.PAGED_ITEM_FILES="files",n.PAGED_ITEM_CACHED_CONTENTS="cachedContents",n.PAGED_ITEM_FILE_SEARCH_STORES="fileSearchStores",n.PAGED_ITEM_DOCUMENTS="documents"})(Kn||(Kn={}));class Ri{constructor(e,t,i,o){this.pageInternal=[],this.paramsInternal={},this.requestInternal=t,this.init(e,i,o)}init(e,t,i){var o,r;this.nameInternal=e,this.pageInternal=t[this.nameInternal]||[],this.sdkHttpResponseInternal=t==null?void 0:t.sdkHttpResponse,this.idxInternal=0;let s={config:{}};!i||Object.keys(i).length===0?s={config:{}}:typeof i=="object"?s=Object.assign({},i):s=i,s.config&&(s.config.pageToken=t.nextPageToken),this.paramsInternal=s,this.pageInternalSize=(r=(o=s.config)===null||o===void 0?void 0:o.pageSize)!==null&&r!==void 0?r:this.pageInternal.length}initNextPage(e){this.init(this.nameInternal,e,this.paramsInternal)}get page(){return this.pageInternal}get name(){return this.nameInternal}get pageSize(){return this.pageInternalSize}get sdkHttpResponse(){return this.sdkHttpResponseInternal}get params(){return this.paramsInternal}get pageLength(){return this.pageInternal.length}getItem(e){return this.pageInternal[e]}[Symbol.asyncIterator](){return{next:async()=>{if(this.idxInternal>=this.pageLength)if(this.hasNextPage())await this.nextPage();else return{value:void 0,done:!0};const e=this.getItem(this.idxInternal);return this.idxInternal+=1,{value:e,done:!1}},return:async()=>({value:void 0,done:!0})}}async nextPage(){if(!this.hasNextPage())throw new Error("No more pages to fetch.");const e=await this.requestInternal(this.params);return this.initNextPage(e),this.page}hasNextPage(){var e;return((e=this.params.config)===null||e===void 0?void 0:e.pageToken)!==void 0}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class zy extends Zn{constructor(e){super(),this.apiClient=e,this.list=async(t={})=>new Ri(Kn.PAGED_ITEM_BATCH_JOBS,i=>this.listInternal(i),await this.listInternal(t),t),this.create=async t=>(this.apiClient.isVertexAI()&&(t.config=this.formatDestination(t.src,t.config)),this.createInternal(t)),this.createEmbeddings=async t=>{if(console.warn("batches.createEmbeddings() is experimental and may change without notice."),this.apiClient.isVertexAI())throw new Error("Vertex AI does not support batches.createEmbeddings.");return this.createEmbeddingsInternal(t)}}createInlinedGenerateContentRequest(e){const t=Uu(this.apiClient,e),i=t._url,o=ve("{model}:batchGenerateContent",i),l=t.batch.inputConfig.requests,d=l.requests,c=[];for(const f of d){const p=Object.assign({},f);if(p.systemInstruction){const h=p.systemInstruction;delete p.systemInstruction;const m=p.request;m.systemInstruction=h,p.request=m}c.push(p)}return l.requests=c,delete t.config,delete t._url,delete t._query,{path:o,body:t}}getGcsUri(e){if(typeof e=="string")return e.startsWith("gs://")?e:void 0;if(!Array.isArray(e)&&e.gcsUri&&e.gcsUri.length>0)return e.gcsUri[0]}getBigqueryUri(e){if(typeof e=="string")return e.startsWith("bq://")?e:void 0;if(!Array.isArray(e))return e.bigqueryUri}formatDestination(e,t){const i=t?Object.assign({},t):{},o=Date.now().toString();if(i.displayName||(i.displayName=`genaiBatchJob_${o}`),i.dest===void 0){const r=this.getGcsUri(e),s=this.getBigqueryUri(e);if(r)r.endsWith(".jsonl")?i.dest=`${r.slice(0,-6)}/dest`:i.dest=`${r}_dest_${o}`;else if(s)i.dest=`${s}_dest_${o}`;else throw new Error("Unsupported source for Vertex AI: No GCS or BigQuery URI found.")}return i}async createInternal(e){var t,i,o,r;let s,l="",d={};if(this.apiClient.isVertexAI()){const c=dy(this.apiClient,e);return l=ve("batchPredictionJobs",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>Da(f))}else{const c=Uu(this.apiClient,e);return l=ve("{model}:batchGenerateContent",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json()),s.then(f=>xr(f))}}async createEmbeddingsInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const l=hy(this.apiClient,e);return r=ve("{model}:asyncBatchEmbedContent",l._url),s=l._query,delete l._url,delete l._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json()),o.then(d=>xr(d))}}async get(e){var t,i,o,r;let s,l="",d={};if(this.apiClient.isVertexAI()){const c=Iy(this.apiClient,e);return l=ve("batchPredictionJobs/{name}",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>Da(f))}else{const c=Cy(this.apiClient,e);return l=ve("batches/{name}",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json()),s.then(f=>xr(f))}}async cancel(e){var t,i,o,r;let s="",l={};if(this.apiClient.isVertexAI()){const d=sy(this.apiClient,e);s=ve("batchPredictionJobs/{name}:cancel",d._url),l=d._query,delete d._url,delete d._query,await this.apiClient.request({path:s,queryParams:l,body:JSON.stringify(d),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal})}else{const d=ry(this.apiClient,e);s=ve("batches/{name}:cancel",d._url),l=d._query,delete d._url,delete d._query,await this.apiClient.request({path:s,queryParams:l,body:JSON.stringify(d),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal})}}async listInternal(e){var t,i,o,r;let s,l="",d={};if(this.apiClient.isVertexAI()){const c=Fy(e);return l=ve("batchPredictionJobs",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=ky(f),h=new Pu;return Object.assign(h,p),h})}else{const c=Uy(e);return l=ve("batches",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=By(f),h=new Pu;return Object.assign(h,p),h})}}async delete(e){var t,i,o,r;let s,l="",d={};if(this.apiClient.isVertexAI()){const c=my(this.apiClient,e);return l=ve("batchPredictionJobs/{name}",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"DELETE",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>_y(f))}else{const c=py(this.apiClient,e);return l=ve("batches/{name}",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"DELETE",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>gy(f))}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Wy(n){const e={},t=a(n,["apiKey"]);if(t!=null&&u(e,["apiKey"],t),a(n,["apiKeyConfig"])!==void 0)throw new Error("apiKeyConfig parameter is not supported in Gemini API.");if(a(n,["authType"])!==void 0)throw new Error("authType parameter is not supported in Gemini API.");if(a(n,["googleServiceAccountConfig"])!==void 0)throw new Error("googleServiceAccountConfig parameter is not supported in Gemini API.");if(a(n,["httpBasicAuthConfig"])!==void 0)throw new Error("httpBasicAuthConfig parameter is not supported in Gemini API.");if(a(n,["oauthConfig"])!==void 0)throw new Error("oauthConfig parameter is not supported in Gemini API.");if(a(n,["oidcConfig"])!==void 0)throw new Error("oidcConfig parameter is not supported in Gemini API.");return e}function qy(n){const e={},t=a(n,["data"]);if(t!=null&&u(e,["data"],t),a(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const i=a(n,["mimeType"]);return i!=null&&u(e,["mimeType"],i),e}function Fu(n){const e={},t=a(n,["parts"]);if(t!=null){let o=t;Array.isArray(o)&&(o=o.map(r=>pE(r))),u(e,["parts"],o)}const i=a(n,["role"]);return i!=null&&u(e,["role"],i),e}function Bu(n){const e={},t=a(n,["parts"]);if(t!=null){let o=t;Array.isArray(o)&&(o=o.map(r=>mE(r))),u(e,["parts"],o)}const i=a(n,["role"]);return i!=null&&u(e,["role"],i),e}function $y(n,e){const t={},i=a(n,["ttl"]);e!==void 0&&i!=null&&u(e,["ttl"],i);const o=a(n,["expireTime"]);e!==void 0&&o!=null&&u(e,["expireTime"],o);const r=a(n,["displayName"]);e!==void 0&&r!=null&&u(e,["displayName"],r);const s=a(n,["contents"]);if(e!==void 0&&s!=null){let f=on(s);Array.isArray(f)&&(f=f.map(p=>Fu(p))),u(e,["contents"],f)}const l=a(n,["systemInstruction"]);e!==void 0&&l!=null&&u(e,["systemInstruction"],Fu(kt(l)));const d=a(n,["tools"]);if(e!==void 0&&d!=null){let f=d;Array.isArray(f)&&(f=f.map(p=>vE(p))),u(e,["tools"],f)}const c=a(n,["toolConfig"]);if(e!==void 0&&c!=null&&u(e,["toolConfig"],gE(c)),a(n,["kmsKeyName"])!==void 0)throw new Error("kmsKeyName parameter is not supported in Gemini API.");return t}function Xy(n,e){const t={},i=a(n,["ttl"]);e!==void 0&&i!=null&&u(e,["ttl"],i);const o=a(n,["expireTime"]);e!==void 0&&o!=null&&u(e,["expireTime"],o);const r=a(n,["displayName"]);e!==void 0&&r!=null&&u(e,["displayName"],r);const s=a(n,["contents"]);if(e!==void 0&&s!=null){let p=on(s);Array.isArray(p)&&(p=p.map(h=>Bu(h))),u(e,["contents"],p)}const l=a(n,["systemInstruction"]);e!==void 0&&l!=null&&u(e,["systemInstruction"],Bu(kt(l)));const d=a(n,["tools"]);if(e!==void 0&&d!=null){let p=d;Array.isArray(p)&&(p=p.map(h=>yE(h))),u(e,["tools"],p)}const c=a(n,["toolConfig"]);e!==void 0&&c!=null&&u(e,["toolConfig"],_E(c));const f=a(n,["kmsKeyName"]);return e!==void 0&&f!=null&&u(e,["encryption_spec","kmsKeyName"],f),t}function Yy(n,e){const t={},i=a(e,["model"]);i!=null&&u(t,["model"],Gd(n,i));const o=a(e,["config"]);return o!=null&&$y(o,t),t}function Jy(n,e){const t={},i=a(e,["model"]);i!=null&&u(t,["model"],Gd(n,i));const o=a(e,["config"]);return o!=null&&Xy(o,t),t}function Ky(n,e){const t={},i=a(e,["name"]);return i!=null&&u(t,["_url","name"],Qn(n,i)),t}function Zy(n,e){const t={},i=a(e,["name"]);return i!=null&&u(t,["_url","name"],Qn(n,i)),t}function Qy(n){const e={},t=a(n,["sdkHttpResponse"]);return t!=null&&u(e,["sdkHttpResponse"],t),e}function jy(n){const e={},t=a(n,["sdkHttpResponse"]);return t!=null&&u(e,["sdkHttpResponse"],t),e}function eE(n){const e={};if(a(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const t=a(n,["fileUri"]);t!=null&&u(e,["fileUri"],t);const i=a(n,["mimeType"]);return i!=null&&u(e,["mimeType"],i),e}function tE(n){const e={},t=a(n,["id"]);t!=null&&u(e,["id"],t);const i=a(n,["args"]);i!=null&&u(e,["args"],i);const o=a(n,["name"]);if(o!=null&&u(e,["name"],o),a(n,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(a(n,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return e}function nE(n){const e={},t=a(n,["allowedFunctionNames"]);t!=null&&u(e,["allowedFunctionNames"],t);const i=a(n,["mode"]);if(i!=null&&u(e,["mode"],i),a(n,["streamFunctionCallArguments"])!==void 0)throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");return e}function iE(n){const e={},t=a(n,["description"]);t!=null&&u(e,["description"],t);const i=a(n,["name"]);i!=null&&u(e,["name"],i);const o=a(n,["parameters"]);o!=null&&u(e,["parameters"],o);const r=a(n,["parametersJsonSchema"]);r!=null&&u(e,["parametersJsonSchema"],r);const s=a(n,["response"]);s!=null&&u(e,["response"],s);const l=a(n,["responseJsonSchema"]);if(l!=null&&u(e,["responseJsonSchema"],l),a(n,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");return e}function oE(n,e){const t={},i=a(e,["name"]);return i!=null&&u(t,["_url","name"],Qn(n,i)),t}function rE(n,e){const t={},i=a(e,["name"]);return i!=null&&u(t,["_url","name"],Qn(n,i)),t}function sE(n){const e={},t=a(n,["authConfig"]);t!=null&&u(e,["authConfig"],Wy(t));const i=a(n,["enableWidget"]);return i!=null&&u(e,["enableWidget"],i),e}function aE(n){const e={},t=a(n,["searchTypes"]);if(t!=null&&u(e,["searchTypes"],t),a(n,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");if(a(n,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");const i=a(n,["timeRangeFilter"]);return i!=null&&u(e,["timeRangeFilter"],i),e}function lE(n,e){const t={},i=a(n,["pageSize"]);e!==void 0&&i!=null&&u(e,["_query","pageSize"],i);const o=a(n,["pageToken"]);return e!==void 0&&o!=null&&u(e,["_query","pageToken"],o),t}function cE(n,e){const t={},i=a(n,["pageSize"]);e!==void 0&&i!=null&&u(e,["_query","pageSize"],i);const o=a(n,["pageToken"]);return e!==void 0&&o!=null&&u(e,["_query","pageToken"],o),t}function uE(n){const e={},t=a(n,["config"]);return t!=null&&lE(t,e),e}function dE(n){const e={},t=a(n,["config"]);return t!=null&&cE(t,e),e}function fE(n){const e={},t=a(n,["sdkHttpResponse"]);t!=null&&u(e,["sdkHttpResponse"],t);const i=a(n,["nextPageToken"]);i!=null&&u(e,["nextPageToken"],i);const o=a(n,["cachedContents"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>s)),u(e,["cachedContents"],r)}return e}function hE(n){const e={},t=a(n,["sdkHttpResponse"]);t!=null&&u(e,["sdkHttpResponse"],t);const i=a(n,["nextPageToken"]);i!=null&&u(e,["nextPageToken"],i);const o=a(n,["cachedContents"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>s)),u(e,["cachedContents"],r)}return e}function pE(n){const e={},t=a(n,["mediaResolution"]);t!=null&&u(e,["mediaResolution"],t);const i=a(n,["codeExecutionResult"]);i!=null&&u(e,["codeExecutionResult"],i);const o=a(n,["executableCode"]);o!=null&&u(e,["executableCode"],o);const r=a(n,["fileData"]);r!=null&&u(e,["fileData"],eE(r));const s=a(n,["functionCall"]);s!=null&&u(e,["functionCall"],tE(s));const l=a(n,["functionResponse"]);l!=null&&u(e,["functionResponse"],l);const d=a(n,["inlineData"]);d!=null&&u(e,["inlineData"],qy(d));const c=a(n,["text"]);c!=null&&u(e,["text"],c);const f=a(n,["thought"]);f!=null&&u(e,["thought"],f);const p=a(n,["thoughtSignature"]);p!=null&&u(e,["thoughtSignature"],p);const h=a(n,["videoMetadata"]);h!=null&&u(e,["videoMetadata"],h);const m=a(n,["toolCall"]);m!=null&&u(e,["toolCall"],m);const v=a(n,["toolResponse"]);v!=null&&u(e,["toolResponse"],v);const E=a(n,["partMetadata"]);return E!=null&&u(e,["partMetadata"],E),e}function mE(n){const e={},t=a(n,["mediaResolution"]);t!=null&&u(e,["mediaResolution"],t);const i=a(n,["codeExecutionResult"]);i!=null&&u(e,["codeExecutionResult"],i);const o=a(n,["executableCode"]);o!=null&&u(e,["executableCode"],o);const r=a(n,["fileData"]);r!=null&&u(e,["fileData"],r);const s=a(n,["functionCall"]);s!=null&&u(e,["functionCall"],s);const l=a(n,["functionResponse"]);l!=null&&u(e,["functionResponse"],l);const d=a(n,["inlineData"]);d!=null&&u(e,["inlineData"],d);const c=a(n,["text"]);c!=null&&u(e,["text"],c);const f=a(n,["thought"]);f!=null&&u(e,["thought"],f);const p=a(n,["thoughtSignature"]);p!=null&&u(e,["thoughtSignature"],p);const h=a(n,["videoMetadata"]);if(h!=null&&u(e,["videoMetadata"],h),a(n,["toolCall"])!==void 0)throw new Error("toolCall parameter is not supported in Vertex AI.");if(a(n,["toolResponse"])!==void 0)throw new Error("toolResponse parameter is not supported in Vertex AI.");if(a(n,["partMetadata"])!==void 0)throw new Error("partMetadata parameter is not supported in Vertex AI.");return e}function gE(n){const e={},t=a(n,["retrievalConfig"]);t!=null&&u(e,["retrievalConfig"],t);const i=a(n,["functionCallingConfig"]);i!=null&&u(e,["functionCallingConfig"],nE(i));const o=a(n,["includeServerSideToolInvocations"]);return o!=null&&u(e,["includeServerSideToolInvocations"],o),e}function _E(n){const e={},t=a(n,["retrievalConfig"]);t!=null&&u(e,["retrievalConfig"],t);const i=a(n,["functionCallingConfig"]);if(i!=null&&u(e,["functionCallingConfig"],i),a(n,["includeServerSideToolInvocations"])!==void 0)throw new Error("includeServerSideToolInvocations parameter is not supported in Vertex AI.");return e}function vE(n){const e={};if(a(n,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const t=a(n,["computerUse"]);t!=null&&u(e,["computerUse"],t);const i=a(n,["fileSearch"]);i!=null&&u(e,["fileSearch"],i);const o=a(n,["googleSearch"]);o!=null&&u(e,["googleSearch"],aE(o));const r=a(n,["googleMaps"]);r!=null&&u(e,["googleMaps"],sE(r));const s=a(n,["codeExecution"]);if(s!=null&&u(e,["codeExecution"],s),a(n,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const l=a(n,["functionDeclarations"]);if(l!=null){let p=l;Array.isArray(p)&&(p=p.map(h=>h)),u(e,["functionDeclarations"],p)}const d=a(n,["googleSearchRetrieval"]);if(d!=null&&u(e,["googleSearchRetrieval"],d),a(n,["parallelAiSearch"])!==void 0)throw new Error("parallelAiSearch parameter is not supported in Gemini API.");const c=a(n,["urlContext"]);c!=null&&u(e,["urlContext"],c);const f=a(n,["mcpServers"]);if(f!=null){let p=f;Array.isArray(p)&&(p=p.map(h=>h)),u(e,["mcpServers"],p)}return e}function yE(n){const e={},t=a(n,["retrieval"]);t!=null&&u(e,["retrieval"],t);const i=a(n,["computerUse"]);if(i!=null&&u(e,["computerUse"],i),a(n,["fileSearch"])!==void 0)throw new Error("fileSearch parameter is not supported in Vertex AI.");const o=a(n,["googleSearch"]);o!=null&&u(e,["googleSearch"],o);const r=a(n,["googleMaps"]);r!=null&&u(e,["googleMaps"],r);const s=a(n,["codeExecution"]);s!=null&&u(e,["codeExecution"],s);const l=a(n,["enterpriseWebSearch"]);l!=null&&u(e,["enterpriseWebSearch"],l);const d=a(n,["functionDeclarations"]);if(d!=null){let h=d;Array.isArray(h)&&(h=h.map(m=>iE(m))),u(e,["functionDeclarations"],h)}const c=a(n,["googleSearchRetrieval"]);c!=null&&u(e,["googleSearchRetrieval"],c);const f=a(n,["parallelAiSearch"]);f!=null&&u(e,["parallelAiSearch"],f);const p=a(n,["urlContext"]);if(p!=null&&u(e,["urlContext"],p),a(n,["mcpServers"])!==void 0)throw new Error("mcpServers parameter is not supported in Vertex AI.");return e}function EE(n,e){const t={},i=a(n,["ttl"]);e!==void 0&&i!=null&&u(e,["ttl"],i);const o=a(n,["expireTime"]);return e!==void 0&&o!=null&&u(e,["expireTime"],o),t}function SE(n,e){const t={},i=a(n,["ttl"]);e!==void 0&&i!=null&&u(e,["ttl"],i);const o=a(n,["expireTime"]);return e!==void 0&&o!=null&&u(e,["expireTime"],o),t}function xE(n,e){const t={},i=a(e,["name"]);i!=null&&u(t,["_url","name"],Qn(n,i));const o=a(e,["config"]);return o!=null&&EE(o,t),t}function TE(n,e){const t={},i=a(e,["name"]);i!=null&&u(t,["_url","name"],Qn(n,i));const o=a(e,["config"]);return o!=null&&SE(o,t),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ME extends Zn{constructor(e){super(),this.apiClient=e,this.list=async(t={})=>new Ri(Kn.PAGED_ITEM_CACHED_CONTENTS,i=>this.listInternal(i),await this.listInternal(t),t)}async create(e){var t,i,o,r;let s,l="",d={};if(this.apiClient.isVertexAI()){const c=Jy(this.apiClient,e);return l=ve("cachedContents",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>f)}else{const c=Yy(this.apiClient,e);return l=ve("cachedContents",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json()),s.then(f=>f)}}async get(e){var t,i,o,r;let s,l="",d={};if(this.apiClient.isVertexAI()){const c=rE(this.apiClient,e);return l=ve("{name}",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>f)}else{const c=oE(this.apiClient,e);return l=ve("{name}",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json()),s.then(f=>f)}}async delete(e){var t,i,o,r;let s,l="",d={};if(this.apiClient.isVertexAI()){const c=Zy(this.apiClient,e);return l=ve("{name}",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"DELETE",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=jy(f),h=new Ru;return Object.assign(h,p),h})}else{const c=Ky(this.apiClient,e);return l=ve("{name}",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"DELETE",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=Qy(f),h=new Ru;return Object.assign(h,p),h})}}async update(e){var t,i,o,r;let s,l="",d={};if(this.apiClient.isVertexAI()){const c=TE(this.apiClient,e);return l=ve("{name}",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"PATCH",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>f)}else{const c=xE(this.apiClient,e);return l=ve("{name}",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"PATCH",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json()),s.then(f=>f)}}async listInternal(e){var t,i,o,r;let s,l="",d={};if(this.apiClient.isVertexAI()){const c=dE(e);return l=ve("cachedContents",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=hE(f),h=new bu;return Object.assign(h,p),h})}else{const c=uE(e);return l=ve("cachedContents",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=fE(f),h=new bu;return Object.assign(h,p),h})}}}function Nr(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(n);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(n,i[o])&&(t[i[o]]=n[i[o]]);return t}function ku(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function $e(n){return this instanceof $e?(this.v=n,this):new $e(n)}function Sn(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),o,r=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),l("next"),l("throw"),l("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(m){return function(v){return Promise.resolve(v).then(m,p)}}function l(m,v){i[m]&&(o[m]=function(E){return new Promise(function(g,_){r.push([m,E,g,_])>1||d(m,E)})},v&&(o[m]=v(o[m])))}function d(m,v){try{c(i[m](v))}catch(E){h(r[0][3],E)}}function c(m){m.value instanceof $e?Promise.resolve(m.value.v).then(f,p):h(r[0][2],m)}function f(m){d("next",m)}function p(m){d("throw",m)}function h(m,v){m(v),r.shift(),r.length&&d(r[0][0],r[0][1])}}function xn(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof ku=="function"?ku(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(r){t[r]=n[r]&&function(s){return new Promise(function(l,d){s=n[r](s),o(l,d,s.done,s.value)})}}function o(r,s,l,d){Promise.resolve(d).then(function(c){r({value:c,done:l})},s)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function AE(n){var e;if(n.candidates==null||n.candidates.length===0)return!1;const t=(e=n.candidates[0])===null||e===void 0?void 0:e.content;return t===void 0?!1:jd(t)}function jd(n){if(n.parts===void 0||n.parts.length===0)return!1;for(const e of n.parts)if(e===void 0||Object.keys(e).length===0)return!1;return!0}function CE(n){if(n.length!==0){for(const e of n)if(e.role!=="user"&&e.role!=="model")throw new Error(`Role must be user or model, but got ${e.role}.`)}}function Ou(n){if(n===void 0||n.length===0)return[];const e=[],t=n.length;let i=0;for(;i<t;)if(n[i].role==="user")e.push(n[i]),i++;else{const o=[];let r=!0;for(;i<t&&n[i].role==="model";)o.push(n[i]),r&&!jd(n[i])&&(r=!1),i++;r?e.push(...o):e.pop()}return e}class IE{constructor(e,t){this.modelsModule=e,this.apiClient=t}create(e){return new wE(this.apiClient,this.modelsModule,e.model,e.config,structuredClone(e.history))}}class wE{constructor(e,t,i,o={},r=[]){this.apiClient=e,this.modelsModule=t,this.model=i,this.config=o,this.history=r,this.sendPromise=Promise.resolve(),CE(r)}async sendMessage(e){var t;await this.sendPromise;const i=kt(e.message),o=this.modelsModule.generateContent({model:this.model,contents:this.getHistory(!0).concat(i),config:(t=e.config)!==null&&t!==void 0?t:this.config});return this.sendPromise=(async()=>{var r,s,l;const d=await o,c=(s=(r=d.candidates)===null||r===void 0?void 0:r[0])===null||s===void 0?void 0:s.content,f=d.automaticFunctionCallingHistory,p=this.getHistory(!0).length;let h=[];f!=null&&(h=(l=f.slice(p))!==null&&l!==void 0?l:[]);const m=c?[c]:[];this.recordHistory(i,m,h)})(),await this.sendPromise.catch(()=>{this.sendPromise=Promise.resolve()}),o}async sendMessageStream(e){var t;await this.sendPromise;const i=kt(e.message),o=this.modelsModule.generateContentStream({model:this.model,contents:this.getHistory(!0).concat(i),config:(t=e.config)!==null&&t!==void 0?t:this.config});this.sendPromise=o.then(()=>{}).catch(()=>{});const r=await o;return this.processStreamResponse(r,i)}getHistory(e=!1){const t=e?Ou(this.history):this.history;return structuredClone(t)}processStreamResponse(e,t){return Sn(this,arguments,function*(){var o,r,s,l,d,c;const f=[];try{for(var p=!0,h=xn(e),m;m=yield $e(h.next()),o=m.done,!o;p=!0){l=m.value,p=!1;const v=l;if(AE(v)){const E=(c=(d=v.candidates)===null||d===void 0?void 0:d[0])===null||c===void 0?void 0:c.content;E!==void 0&&f.push(E)}yield yield $e(v)}}catch(v){r={error:v}}finally{try{!p&&!o&&(s=h.return)&&(yield $e(s.call(h)))}finally{if(r)throw r.error}}this.recordHistory(t,f)})}recordHistory(e,t,i){let o=[];t.length>0&&t.every(r=>r.role!==void 0)?o=t:o.push({role:"model",parts:[]}),i&&i.length>0?this.history.push(...Ou(i)):this.history.push(e),this.history.push(...o)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Gr extends Error{constructor(e){super(e.message),this.name="ApiError",this.status=e.status,Object.setPrototypeOf(this,Gr.prototype)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function RE(n){const e={},t=a(n,["file"]);return t!=null&&u(e,["file"],t),e}function bE(n){const e={},t=a(n,["sdkHttpResponse"]);return t!=null&&u(e,["sdkHttpResponse"],t),e}function PE(n){const e={},t=a(n,["name"]);return t!=null&&u(e,["_url","file"],$d(t)),e}function NE(n){const e={},t=a(n,["sdkHttpResponse"]);return t!=null&&u(e,["sdkHttpResponse"],t),e}function DE(n){const e={},t=a(n,["name"]);return t!=null&&u(e,["_url","file"],$d(t)),e}function LE(n){const e={},t=a(n,["uris"]);return t!=null&&u(e,["uris"],t),e}function UE(n,e){const t={},i=a(n,["pageSize"]);e!==void 0&&i!=null&&u(e,["_query","pageSize"],i);const o=a(n,["pageToken"]);return e!==void 0&&o!=null&&u(e,["_query","pageToken"],o),t}function FE(n){const e={},t=a(n,["config"]);return t!=null&&UE(t,e),e}function BE(n){const e={},t=a(n,["sdkHttpResponse"]);t!=null&&u(e,["sdkHttpResponse"],t);const i=a(n,["nextPageToken"]);i!=null&&u(e,["nextPageToken"],i);const o=a(n,["files"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>s)),u(e,["files"],r)}return e}function kE(n){const e={},t=a(n,["sdkHttpResponse"]);t!=null&&u(e,["sdkHttpResponse"],t);const i=a(n,["files"]);if(i!=null){let o=i;Array.isArray(o)&&(o=o.map(r=>r)),u(e,["files"],o)}return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class OE extends Zn{constructor(e){super(),this.apiClient=e,this.list=async(t={})=>new Ri(Kn.PAGED_ITEM_FILES,i=>this.listInternal(i),await this.listInternal(t),t)}async upload(e){if(this.apiClient.isVertexAI())throw new Error("Vertex AI does not support uploading files. You can share files through a GCS bucket.");return this.apiClient.uploadFile(e.file,e.config).then(t=>t)}async download(e){await this.apiClient.downloadFile(e)}async registerFiles(e){throw new Error("registerFiles is only supported in Node.js environments.")}async _registerFiles(e){return this.registerFilesInternal(e)}async listInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const l=FE(e);return r=ve("files",l._url),s=l._query,delete l._url,delete l._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(l),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json().then(c=>{const f=c;return f.sdkHttpResponse={headers:d.headers},f})),o.then(d=>{const c=BE(d),f=new U0;return Object.assign(f,c),f})}}async createInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const l=RE(e);return r=ve("upload/v1beta/files",l._url),s=l._query,delete l._url,delete l._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json()),o.then(d=>{const c=bE(d),f=new F0;return Object.assign(f,c),f})}}async get(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const l=DE(e);return r=ve("files/{file}",l._url),s=l._query,delete l._url,delete l._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(l),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json()),o.then(d=>d)}}async delete(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const l=PE(e);return r=ve("files/{file}",l._url),s=l._query,delete l._url,delete l._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(l),httpMethod:"DELETE",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json().then(c=>{const f=c;return f.sdkHttpResponse={headers:d.headers},f})),o.then(d=>{const c=NE(d),f=new B0;return Object.assign(f,c),f})}}async registerFilesInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const l=LE(e);return r=ve("files:register",l._url),s=l._query,delete l._url,delete l._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json()),o.then(d=>{const c=kE(d),f=new k0;return Object.assign(f,c),f})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Gu(n){const e={};if(a(n,["languageCodes"])!==void 0)throw new Error("languageCodes parameter is not supported in Gemini API.");return e}function GE(n){const e={},t=a(n,["apiKey"]);if(t!=null&&u(e,["apiKey"],t),a(n,["apiKeyConfig"])!==void 0)throw new Error("apiKeyConfig parameter is not supported in Gemini API.");if(a(n,["authType"])!==void 0)throw new Error("authType parameter is not supported in Gemini API.");if(a(n,["googleServiceAccountConfig"])!==void 0)throw new Error("googleServiceAccountConfig parameter is not supported in Gemini API.");if(a(n,["httpBasicAuthConfig"])!==void 0)throw new Error("httpBasicAuthConfig parameter is not supported in Gemini API.");if(a(n,["oauthConfig"])!==void 0)throw new Error("oauthConfig parameter is not supported in Gemini API.");if(a(n,["oidcConfig"])!==void 0)throw new Error("oidcConfig parameter is not supported in Gemini API.");return e}function Tr(n){const e={},t=a(n,["data"]);if(t!=null&&u(e,["data"],t),a(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const i=a(n,["mimeType"]);return i!=null&&u(e,["mimeType"],i),e}function VE(n){const e={},t=a(n,["parts"]);if(t!=null){let o=t;Array.isArray(o)&&(o=o.map(r=>rS(r))),u(e,["parts"],o)}const i=a(n,["role"]);return i!=null&&u(e,["role"],i),e}function HE(n){const e={},t=a(n,["parts"]);if(t!=null){let o=t;Array.isArray(o)&&(o=o.map(r=>sS(r))),u(e,["parts"],o)}const i=a(n,["role"]);return i!=null&&u(e,["role"],i),e}function zE(n){const e={};if(a(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const t=a(n,["fileUri"]);t!=null&&u(e,["fileUri"],t);const i=a(n,["mimeType"]);return i!=null&&u(e,["mimeType"],i),e}function WE(n){const e={},t=a(n,["id"]);t!=null&&u(e,["id"],t);const i=a(n,["args"]);i!=null&&u(e,["args"],i);const o=a(n,["name"]);if(o!=null&&u(e,["name"],o),a(n,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(a(n,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return e}function qE(n){const e={},t=a(n,["description"]);t!=null&&u(e,["description"],t);const i=a(n,["name"]);i!=null&&u(e,["name"],i);const o=a(n,["parameters"]);o!=null&&u(e,["parameters"],o);const r=a(n,["parametersJsonSchema"]);r!=null&&u(e,["parametersJsonSchema"],r);const s=a(n,["response"]);s!=null&&u(e,["response"],s);const l=a(n,["responseJsonSchema"]);if(l!=null&&u(e,["responseJsonSchema"],l),a(n,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");return e}function $E(n){const e={},t=a(n,["modelSelectionConfig"]);t!=null&&u(e,["modelConfig"],t);const i=a(n,["responseJsonSchema"]);i!=null&&u(e,["responseJsonSchema"],i);const o=a(n,["audioTimestamp"]);o!=null&&u(e,["audioTimestamp"],o);const r=a(n,["candidateCount"]);r!=null&&u(e,["candidateCount"],r);const s=a(n,["enableAffectiveDialog"]);s!=null&&u(e,["enableAffectiveDialog"],s);const l=a(n,["frequencyPenalty"]);l!=null&&u(e,["frequencyPenalty"],l);const d=a(n,["logprobs"]);d!=null&&u(e,["logprobs"],d);const c=a(n,["maxOutputTokens"]);c!=null&&u(e,["maxOutputTokens"],c);const f=a(n,["mediaResolution"]);f!=null&&u(e,["mediaResolution"],f);const p=a(n,["presencePenalty"]);p!=null&&u(e,["presencePenalty"],p);const h=a(n,["responseLogprobs"]);h!=null&&u(e,["responseLogprobs"],h);const m=a(n,["responseMimeType"]);m!=null&&u(e,["responseMimeType"],m);const v=a(n,["responseModalities"]);v!=null&&u(e,["responseModalities"],v);const E=a(n,["responseSchema"]);E!=null&&u(e,["responseSchema"],E);const g=a(n,["routingConfig"]);g!=null&&u(e,["routingConfig"],g);const _=a(n,["seed"]);_!=null&&u(e,["seed"],_);const T=a(n,["speechConfig"]);T!=null&&u(e,["speechConfig"],ef(T));const A=a(n,["stopSequences"]);A!=null&&u(e,["stopSequences"],A);const C=a(n,["temperature"]);C!=null&&u(e,["temperature"],C);const w=a(n,["thinkingConfig"]);w!=null&&u(e,["thinkingConfig"],w);const M=a(n,["topK"]);M!=null&&u(e,["topK"],M);const P=a(n,["topP"]);if(P!=null&&u(e,["topP"],P),a(n,["enableEnhancedCivicAnswers"])!==void 0)throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");return e}function XE(n){const e={},t=a(n,["authConfig"]);t!=null&&u(e,["authConfig"],GE(t));const i=a(n,["enableWidget"]);return i!=null&&u(e,["enableWidget"],i),e}function YE(n){const e={},t=a(n,["searchTypes"]);if(t!=null&&u(e,["searchTypes"],t),a(n,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");if(a(n,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");const i=a(n,["timeRangeFilter"]);return i!=null&&u(e,["timeRangeFilter"],i),e}function JE(n,e){const t={},i=a(n,["generationConfig"]);e!==void 0&&i!=null&&u(e,["setup","generationConfig"],i);const o=a(n,["responseModalities"]);e!==void 0&&o!=null&&u(e,["setup","generationConfig","responseModalities"],o);const r=a(n,["temperature"]);e!==void 0&&r!=null&&u(e,["setup","generationConfig","temperature"],r);const s=a(n,["topP"]);e!==void 0&&s!=null&&u(e,["setup","generationConfig","topP"],s);const l=a(n,["topK"]);e!==void 0&&l!=null&&u(e,["setup","generationConfig","topK"],l);const d=a(n,["maxOutputTokens"]);e!==void 0&&d!=null&&u(e,["setup","generationConfig","maxOutputTokens"],d);const c=a(n,["mediaResolution"]);e!==void 0&&c!=null&&u(e,["setup","generationConfig","mediaResolution"],c);const f=a(n,["seed"]);e!==void 0&&f!=null&&u(e,["setup","generationConfig","seed"],f);const p=a(n,["speechConfig"]);e!==void 0&&p!=null&&u(e,["setup","generationConfig","speechConfig"],cl(p));const h=a(n,["thinkingConfig"]);e!==void 0&&h!=null&&u(e,["setup","generationConfig","thinkingConfig"],h);const m=a(n,["enableAffectiveDialog"]);e!==void 0&&m!=null&&u(e,["setup","generationConfig","enableAffectiveDialog"],m);const v=a(n,["systemInstruction"]);e!==void 0&&v!=null&&u(e,["setup","systemInstruction"],VE(kt(v)));const E=a(n,["tools"]);if(e!==void 0&&E!=null){let M=co(E);Array.isArray(M)&&(M=M.map(P=>uS(lo(P)))),u(e,["setup","tools"],M)}const g=a(n,["sessionResumption"]);e!==void 0&&g!=null&&u(e,["setup","sessionResumption"],lS(g));const _=a(n,["inputAudioTranscription"]);e!==void 0&&_!=null&&u(e,["setup","inputAudioTranscription"],Gu(_));const T=a(n,["outputAudioTranscription"]);e!==void 0&&T!=null&&u(e,["setup","outputAudioTranscription"],Gu(T));const A=a(n,["realtimeInputConfig"]);e!==void 0&&A!=null&&u(e,["setup","realtimeInputConfig"],A);const C=a(n,["contextWindowCompression"]);e!==void 0&&C!=null&&u(e,["setup","contextWindowCompression"],C);const w=a(n,["proactivity"]);if(e!==void 0&&w!=null&&u(e,["setup","proactivity"],w),a(n,["explicitVadSignal"])!==void 0)throw new Error("explicitVadSignal parameter is not supported in Gemini API.");return t}function KE(n,e){const t={},i=a(n,["generationConfig"]);e!==void 0&&i!=null&&u(e,["setup","generationConfig"],$E(i));const o=a(n,["responseModalities"]);e!==void 0&&o!=null&&u(e,["setup","generationConfig","responseModalities"],o);const r=a(n,["temperature"]);e!==void 0&&r!=null&&u(e,["setup","generationConfig","temperature"],r);const s=a(n,["topP"]);e!==void 0&&s!=null&&u(e,["setup","generationConfig","topP"],s);const l=a(n,["topK"]);e!==void 0&&l!=null&&u(e,["setup","generationConfig","topK"],l);const d=a(n,["maxOutputTokens"]);e!==void 0&&d!=null&&u(e,["setup","generationConfig","maxOutputTokens"],d);const c=a(n,["mediaResolution"]);e!==void 0&&c!=null&&u(e,["setup","generationConfig","mediaResolution"],c);const f=a(n,["seed"]);e!==void 0&&f!=null&&u(e,["setup","generationConfig","seed"],f);const p=a(n,["speechConfig"]);e!==void 0&&p!=null&&u(e,["setup","generationConfig","speechConfig"],ef(cl(p)));const h=a(n,["thinkingConfig"]);e!==void 0&&h!=null&&u(e,["setup","generationConfig","thinkingConfig"],h);const m=a(n,["enableAffectiveDialog"]);e!==void 0&&m!=null&&u(e,["setup","generationConfig","enableAffectiveDialog"],m);const v=a(n,["systemInstruction"]);e!==void 0&&v!=null&&u(e,["setup","systemInstruction"],HE(kt(v)));const E=a(n,["tools"]);if(e!==void 0&&E!=null){let P=co(E);Array.isArray(P)&&(P=P.map(S=>dS(lo(S)))),u(e,["setup","tools"],P)}const g=a(n,["sessionResumption"]);e!==void 0&&g!=null&&u(e,["setup","sessionResumption"],g);const _=a(n,["inputAudioTranscription"]);e!==void 0&&_!=null&&u(e,["setup","inputAudioTranscription"],_);const T=a(n,["outputAudioTranscription"]);e!==void 0&&T!=null&&u(e,["setup","outputAudioTranscription"],T);const A=a(n,["realtimeInputConfig"]);e!==void 0&&A!=null&&u(e,["setup","realtimeInputConfig"],A);const C=a(n,["contextWindowCompression"]);e!==void 0&&C!=null&&u(e,["setup","contextWindowCompression"],C);const w=a(n,["proactivity"]);e!==void 0&&w!=null&&u(e,["setup","proactivity"],w);const M=a(n,["explicitVadSignal"]);return e!==void 0&&M!=null&&u(e,["setup","explicitVadSignal"],M),t}function ZE(n,e){const t={},i=a(e,["model"]);i!=null&&u(t,["setup","model"],ut(n,i));const o=a(e,["config"]);return o!=null&&u(t,["config"],JE(o,t)),t}function QE(n,e){const t={},i=a(e,["model"]);i!=null&&u(t,["setup","model"],ut(n,i));const o=a(e,["config"]);return o!=null&&u(t,["config"],KE(o,t)),t}function jE(n){const e={},t=a(n,["musicGenerationConfig"]);return t!=null&&u(e,["musicGenerationConfig"],t),e}function eS(n){const e={},t=a(n,["weightedPrompts"]);if(t!=null){let i=t;Array.isArray(i)&&(i=i.map(o=>o)),u(e,["weightedPrompts"],i)}return e}function tS(n){const e={},t=a(n,["media"]);if(t!=null){let c=Vd(t);Array.isArray(c)&&(c=c.map(f=>Tr(f))),u(e,["mediaChunks"],c)}const i=a(n,["audio"]);i!=null&&u(e,["audio"],Tr(zd(i)));const o=a(n,["audioStreamEnd"]);o!=null&&u(e,["audioStreamEnd"],o);const r=a(n,["video"]);r!=null&&u(e,["video"],Tr(Hd(r)));const s=a(n,["text"]);s!=null&&u(e,["text"],s);const l=a(n,["activityStart"]);l!=null&&u(e,["activityStart"],l);const d=a(n,["activityEnd"]);return d!=null&&u(e,["activityEnd"],d),e}function nS(n){const e={},t=a(n,["media"]);if(t!=null){let c=Vd(t);Array.isArray(c)&&(c=c.map(f=>f)),u(e,["mediaChunks"],c)}const i=a(n,["audio"]);i!=null&&u(e,["audio"],zd(i));const o=a(n,["audioStreamEnd"]);o!=null&&u(e,["audioStreamEnd"],o);const r=a(n,["video"]);r!=null&&u(e,["video"],Hd(r));const s=a(n,["text"]);s!=null&&u(e,["text"],s);const l=a(n,["activityStart"]);l!=null&&u(e,["activityStart"],l);const d=a(n,["activityEnd"]);return d!=null&&u(e,["activityEnd"],d),e}function iS(n){const e={},t=a(n,["setupComplete"]);t!=null&&u(e,["setupComplete"],t);const i=a(n,["serverContent"]);i!=null&&u(e,["serverContent"],i);const o=a(n,["toolCall"]);o!=null&&u(e,["toolCall"],o);const r=a(n,["toolCallCancellation"]);r!=null&&u(e,["toolCallCancellation"],r);const s=a(n,["usageMetadata"]);s!=null&&u(e,["usageMetadata"],fS(s));const l=a(n,["goAway"]);l!=null&&u(e,["goAway"],l);const d=a(n,["sessionResumptionUpdate"]);d!=null&&u(e,["sessionResumptionUpdate"],d);const c=a(n,["voiceActivityDetectionSignal"]);c!=null&&u(e,["voiceActivityDetectionSignal"],c);const f=a(n,["voiceActivity"]);return f!=null&&u(e,["voiceActivity"],hS(f)),e}function oS(n){const e={},t=a(n,["speakerVoiceConfigs"]);if(t!=null){let i=t;Array.isArray(i)&&(i=i.map(o=>cS(o))),u(e,["speakerVoiceConfigs"],i)}return e}function rS(n){const e={},t=a(n,["mediaResolution"]);t!=null&&u(e,["mediaResolution"],t);const i=a(n,["codeExecutionResult"]);i!=null&&u(e,["codeExecutionResult"],i);const o=a(n,["executableCode"]);o!=null&&u(e,["executableCode"],o);const r=a(n,["fileData"]);r!=null&&u(e,["fileData"],zE(r));const s=a(n,["functionCall"]);s!=null&&u(e,["functionCall"],WE(s));const l=a(n,["functionResponse"]);l!=null&&u(e,["functionResponse"],l);const d=a(n,["inlineData"]);d!=null&&u(e,["inlineData"],Tr(d));const c=a(n,["text"]);c!=null&&u(e,["text"],c);const f=a(n,["thought"]);f!=null&&u(e,["thought"],f);const p=a(n,["thoughtSignature"]);p!=null&&u(e,["thoughtSignature"],p);const h=a(n,["videoMetadata"]);h!=null&&u(e,["videoMetadata"],h);const m=a(n,["toolCall"]);m!=null&&u(e,["toolCall"],m);const v=a(n,["toolResponse"]);v!=null&&u(e,["toolResponse"],v);const E=a(n,["partMetadata"]);return E!=null&&u(e,["partMetadata"],E),e}function sS(n){const e={},t=a(n,["mediaResolution"]);t!=null&&u(e,["mediaResolution"],t);const i=a(n,["codeExecutionResult"]);i!=null&&u(e,["codeExecutionResult"],i);const o=a(n,["executableCode"]);o!=null&&u(e,["executableCode"],o);const r=a(n,["fileData"]);r!=null&&u(e,["fileData"],r);const s=a(n,["functionCall"]);s!=null&&u(e,["functionCall"],s);const l=a(n,["functionResponse"]);l!=null&&u(e,["functionResponse"],l);const d=a(n,["inlineData"]);d!=null&&u(e,["inlineData"],d);const c=a(n,["text"]);c!=null&&u(e,["text"],c);const f=a(n,["thought"]);f!=null&&u(e,["thought"],f);const p=a(n,["thoughtSignature"]);p!=null&&u(e,["thoughtSignature"],p);const h=a(n,["videoMetadata"]);if(h!=null&&u(e,["videoMetadata"],h),a(n,["toolCall"])!==void 0)throw new Error("toolCall parameter is not supported in Vertex AI.");if(a(n,["toolResponse"])!==void 0)throw new Error("toolResponse parameter is not supported in Vertex AI.");if(a(n,["partMetadata"])!==void 0)throw new Error("partMetadata parameter is not supported in Vertex AI.");return e}function aS(n){const e={},t=a(n,["mimeType"]);t!=null&&u(e,["mimeType"],t);const i=a(n,["voiceSampleAudio"]);return i!=null&&u(e,["voiceSampleAudio"],i),e}function lS(n){const e={},t=a(n,["handle"]);if(t!=null&&u(e,["handle"],t),a(n,["transparent"])!==void 0)throw new Error("transparent parameter is not supported in Gemini API.");return e}function cS(n){const e={},t=a(n,["speaker"]);t!=null&&u(e,["speaker"],t);const i=a(n,["voiceConfig"]);return i!=null&&u(e,["voiceConfig"],tf(i)),e}function ef(n){const e={},t=a(n,["voiceConfig"]);t!=null&&u(e,["voiceConfig"],tf(t));const i=a(n,["languageCode"]);i!=null&&u(e,["languageCode"],i);const o=a(n,["multiSpeakerVoiceConfig"]);return o!=null&&u(e,["multiSpeakerVoiceConfig"],oS(o)),e}function uS(n){const e={};if(a(n,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const t=a(n,["computerUse"]);t!=null&&u(e,["computerUse"],t);const i=a(n,["fileSearch"]);i!=null&&u(e,["fileSearch"],i);const o=a(n,["googleSearch"]);o!=null&&u(e,["googleSearch"],YE(o));const r=a(n,["googleMaps"]);r!=null&&u(e,["googleMaps"],XE(r));const s=a(n,["codeExecution"]);if(s!=null&&u(e,["codeExecution"],s),a(n,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const l=a(n,["functionDeclarations"]);if(l!=null){let p=l;Array.isArray(p)&&(p=p.map(h=>h)),u(e,["functionDeclarations"],p)}const d=a(n,["googleSearchRetrieval"]);if(d!=null&&u(e,["googleSearchRetrieval"],d),a(n,["parallelAiSearch"])!==void 0)throw new Error("parallelAiSearch parameter is not supported in Gemini API.");const c=a(n,["urlContext"]);c!=null&&u(e,["urlContext"],c);const f=a(n,["mcpServers"]);if(f!=null){let p=f;Array.isArray(p)&&(p=p.map(h=>h)),u(e,["mcpServers"],p)}return e}function dS(n){const e={},t=a(n,["retrieval"]);t!=null&&u(e,["retrieval"],t);const i=a(n,["computerUse"]);if(i!=null&&u(e,["computerUse"],i),a(n,["fileSearch"])!==void 0)throw new Error("fileSearch parameter is not supported in Vertex AI.");const o=a(n,["googleSearch"]);o!=null&&u(e,["googleSearch"],o);const r=a(n,["googleMaps"]);r!=null&&u(e,["googleMaps"],r);const s=a(n,["codeExecution"]);s!=null&&u(e,["codeExecution"],s);const l=a(n,["enterpriseWebSearch"]);l!=null&&u(e,["enterpriseWebSearch"],l);const d=a(n,["functionDeclarations"]);if(d!=null){let h=d;Array.isArray(h)&&(h=h.map(m=>qE(m))),u(e,["functionDeclarations"],h)}const c=a(n,["googleSearchRetrieval"]);c!=null&&u(e,["googleSearchRetrieval"],c);const f=a(n,["parallelAiSearch"]);f!=null&&u(e,["parallelAiSearch"],f);const p=a(n,["urlContext"]);if(p!=null&&u(e,["urlContext"],p),a(n,["mcpServers"])!==void 0)throw new Error("mcpServers parameter is not supported in Vertex AI.");return e}function fS(n){const e={},t=a(n,["promptTokenCount"]);t!=null&&u(e,["promptTokenCount"],t);const i=a(n,["cachedContentTokenCount"]);i!=null&&u(e,["cachedContentTokenCount"],i);const o=a(n,["candidatesTokenCount"]);o!=null&&u(e,["responseTokenCount"],o);const r=a(n,["toolUsePromptTokenCount"]);r!=null&&u(e,["toolUsePromptTokenCount"],r);const s=a(n,["thoughtsTokenCount"]);s!=null&&u(e,["thoughtsTokenCount"],s);const l=a(n,["totalTokenCount"]);l!=null&&u(e,["totalTokenCount"],l);const d=a(n,["promptTokensDetails"]);if(d!=null){let m=d;Array.isArray(m)&&(m=m.map(v=>v)),u(e,["promptTokensDetails"],m)}const c=a(n,["cacheTokensDetails"]);if(c!=null){let m=c;Array.isArray(m)&&(m=m.map(v=>v)),u(e,["cacheTokensDetails"],m)}const f=a(n,["candidatesTokensDetails"]);if(f!=null){let m=f;Array.isArray(m)&&(m=m.map(v=>v)),u(e,["responseTokensDetails"],m)}const p=a(n,["toolUsePromptTokensDetails"]);if(p!=null){let m=p;Array.isArray(m)&&(m=m.map(v=>v)),u(e,["toolUsePromptTokensDetails"],m)}const h=a(n,["trafficType"]);return h!=null&&u(e,["trafficType"],h),e}function hS(n){const e={},t=a(n,["type"]);return t!=null&&u(e,["voiceActivityType"],t),e}function tf(n){const e={},t=a(n,["replicatedVoiceConfig"]);t!=null&&u(e,["replicatedVoiceConfig"],aS(t));const i=a(n,["prebuiltVoiceConfig"]);return i!=null&&u(e,["prebuiltVoiceConfig"],i),e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function pS(n,e){const t={},i=a(n,["apiKey"]);if(i!=null&&u(t,["apiKey"],i),a(n,["apiKeyConfig"])!==void 0)throw new Error("apiKeyConfig parameter is not supported in Gemini API.");if(a(n,["authType"])!==void 0)throw new Error("authType parameter is not supported in Gemini API.");if(a(n,["googleServiceAccountConfig"])!==void 0)throw new Error("googleServiceAccountConfig parameter is not supported in Gemini API.");if(a(n,["httpBasicAuthConfig"])!==void 0)throw new Error("httpBasicAuthConfig parameter is not supported in Gemini API.");if(a(n,["oauthConfig"])!==void 0)throw new Error("oauthConfig parameter is not supported in Gemini API.");if(a(n,["oidcConfig"])!==void 0)throw new Error("oidcConfig parameter is not supported in Gemini API.");return t}function mS(n,e){const t={},i=a(n,["data"]);if(i!=null&&u(t,["data"],i),a(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const o=a(n,["mimeType"]);return o!=null&&u(t,["mimeType"],o),t}function gS(n,e){const t={},i=a(n,["content"]);i!=null&&u(t,["content"],i);const o=a(n,["citationMetadata"]);o!=null&&u(t,["citationMetadata"],_S(o));const r=a(n,["tokenCount"]);r!=null&&u(t,["tokenCount"],r);const s=a(n,["finishReason"]);s!=null&&u(t,["finishReason"],s);const l=a(n,["groundingMetadata"]);l!=null&&u(t,["groundingMetadata"],l);const d=a(n,["avgLogprobs"]);d!=null&&u(t,["avgLogprobs"],d);const c=a(n,["index"]);c!=null&&u(t,["index"],c);const f=a(n,["logprobsResult"]);f!=null&&u(t,["logprobsResult"],f);const p=a(n,["safetyRatings"]);if(p!=null){let m=p;Array.isArray(m)&&(m=m.map(v=>v)),u(t,["safetyRatings"],m)}const h=a(n,["urlContextMetadata"]);return h!=null&&u(t,["urlContextMetadata"],h),t}function _S(n,e){const t={},i=a(n,["citationSources"]);if(i!=null){let o=i;Array.isArray(o)&&(o=o.map(r=>r)),u(t,["citations"],o)}return t}function vS(n,e,t){const i={},o=a(e,["model"]);o!=null&&u(i,["_url","model"],ut(n,o));const r=a(e,["contents"]);if(r!=null){let s=on(r);Array.isArray(s)&&(s=s.map(l=>fo(l))),u(i,["contents"],s)}return i}function yS(n,e){const t={},i=a(n,["sdkHttpResponse"]);i!=null&&u(t,["sdkHttpResponse"],i);const o=a(n,["tokensInfo"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>s)),u(t,["tokensInfo"],r)}return t}function ES(n,e){const t={},i=a(n,["values"]);i!=null&&u(t,["values"],i);const o=a(n,["statistics"]);return o!=null&&u(t,["statistics"],SS(o)),t}function SS(n,e){const t={},i=a(n,["truncated"]);i!=null&&u(t,["truncated"],i);const o=a(n,["token_count"]);return o!=null&&u(t,["tokenCount"],o),t}function Uo(n,e){const t={},i=a(n,["parts"]);if(i!=null){let r=i;Array.isArray(r)&&(r=r.map(s=>Px(s))),u(t,["parts"],r)}const o=a(n,["role"]);return o!=null&&u(t,["role"],o),t}function fo(n,e){const t={},i=a(n,["parts"]);if(i!=null){let r=i;Array.isArray(r)&&(r=r.map(s=>Nx(s))),u(t,["parts"],r)}const o=a(n,["role"]);return o!=null&&u(t,["role"],o),t}function xS(n,e){const t={},i=a(n,["controlType"]);i!=null&&u(t,["controlType"],i);const o=a(n,["enableControlImageComputation"]);return o!=null&&u(t,["computeControl"],o),t}function TS(n,e){const t={};if(a(n,["systemInstruction"])!==void 0)throw new Error("systemInstruction parameter is not supported in Gemini API.");if(a(n,["tools"])!==void 0)throw new Error("tools parameter is not supported in Gemini API.");if(a(n,["generationConfig"])!==void 0)throw new Error("generationConfig parameter is not supported in Gemini API.");return t}function MS(n,e,t){const i={},o=a(n,["systemInstruction"]);e!==void 0&&o!=null&&u(e,["systemInstruction"],fo(kt(o)));const r=a(n,["tools"]);if(e!==void 0&&r!=null){let l=r;Array.isArray(l)&&(l=l.map(d=>af(d))),u(e,["tools"],l)}const s=a(n,["generationConfig"]);return e!==void 0&&s!=null&&u(e,["generationConfig"],mx(s)),i}function AS(n,e,t){const i={},o=a(e,["model"]);o!=null&&u(i,["_url","model"],ut(n,o));const r=a(e,["contents"]);if(r!=null){let l=on(r);Array.isArray(l)&&(l=l.map(d=>Uo(d))),u(i,["contents"],l)}const s=a(e,["config"]);return s!=null&&TS(s),i}function CS(n,e,t){const i={},o=a(e,["model"]);o!=null&&u(i,["_url","model"],ut(n,o));const r=a(e,["contents"]);if(r!=null){let l=on(r);Array.isArray(l)&&(l=l.map(d=>fo(d))),u(i,["contents"],l)}const s=a(e,["config"]);return s!=null&&MS(s,i),i}function IS(n,e){const t={},i=a(n,["sdkHttpResponse"]);i!=null&&u(t,["sdkHttpResponse"],i);const o=a(n,["totalTokens"]);o!=null&&u(t,["totalTokens"],o);const r=a(n,["cachedContentTokenCount"]);return r!=null&&u(t,["cachedContentTokenCount"],r),t}function wS(n,e){const t={},i=a(n,["sdkHttpResponse"]);i!=null&&u(t,["sdkHttpResponse"],i);const o=a(n,["totalTokens"]);return o!=null&&u(t,["totalTokens"],o),t}function RS(n,e,t){const i={},o=a(e,["model"]);return o!=null&&u(i,["_url","name"],ut(n,o)),i}function bS(n,e,t){const i={},o=a(e,["model"]);return o!=null&&u(i,["_url","name"],ut(n,o)),i}function PS(n,e){const t={},i=a(n,["sdkHttpResponse"]);return i!=null&&u(t,["sdkHttpResponse"],i),t}function NS(n,e){const t={},i=a(n,["sdkHttpResponse"]);return i!=null&&u(t,["sdkHttpResponse"],i),t}function DS(n,e,t){const i={},o=a(n,["outputGcsUri"]);e!==void 0&&o!=null&&u(e,["parameters","storageUri"],o);const r=a(n,["negativePrompt"]);e!==void 0&&r!=null&&u(e,["parameters","negativePrompt"],r);const s=a(n,["numberOfImages"]);e!==void 0&&s!=null&&u(e,["parameters","sampleCount"],s);const l=a(n,["aspectRatio"]);e!==void 0&&l!=null&&u(e,["parameters","aspectRatio"],l);const d=a(n,["guidanceScale"]);e!==void 0&&d!=null&&u(e,["parameters","guidanceScale"],d);const c=a(n,["seed"]);e!==void 0&&c!=null&&u(e,["parameters","seed"],c);const f=a(n,["safetyFilterLevel"]);e!==void 0&&f!=null&&u(e,["parameters","safetySetting"],f);const p=a(n,["personGeneration"]);e!==void 0&&p!=null&&u(e,["parameters","personGeneration"],p);const h=a(n,["includeSafetyAttributes"]);e!==void 0&&h!=null&&u(e,["parameters","includeSafetyAttributes"],h);const m=a(n,["includeRaiReason"]);e!==void 0&&m!=null&&u(e,["parameters","includeRaiReason"],m);const v=a(n,["language"]);e!==void 0&&v!=null&&u(e,["parameters","language"],v);const E=a(n,["outputMimeType"]);e!==void 0&&E!=null&&u(e,["parameters","outputOptions","mimeType"],E);const g=a(n,["outputCompressionQuality"]);e!==void 0&&g!=null&&u(e,["parameters","outputOptions","compressionQuality"],g);const _=a(n,["addWatermark"]);e!==void 0&&_!=null&&u(e,["parameters","addWatermark"],_);const T=a(n,["labels"]);e!==void 0&&T!=null&&u(e,["labels"],T);const A=a(n,["editMode"]);e!==void 0&&A!=null&&u(e,["parameters","editMode"],A);const C=a(n,["baseSteps"]);return e!==void 0&&C!=null&&u(e,["parameters","editConfig","baseSteps"],C),i}function LS(n,e,t){const i={},o=a(e,["model"]);o!=null&&u(i,["_url","model"],ut(n,o));const r=a(e,["prompt"]);r!=null&&u(i,["instances[0]","prompt"],r);const s=a(e,["referenceImages"]);if(s!=null){let d=s;Array.isArray(d)&&(d=d.map(c=>kx(c))),u(i,["instances[0]","referenceImages"],d)}const l=a(e,["config"]);return l!=null&&DS(l,i),i}function US(n,e){const t={},i=a(n,["sdkHttpResponse"]);i!=null&&u(t,["sdkHttpResponse"],i);const o=a(n,["predictions"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>Vr(s))),u(t,["generatedImages"],r)}return t}function FS(n,e,t){const i={},o=a(n,["taskType"]);e!==void 0&&o!=null&&u(e,["requests[]","taskType"],o);const r=a(n,["title"]);e!==void 0&&r!=null&&u(e,["requests[]","title"],r);const s=a(n,["outputDimensionality"]);if(e!==void 0&&s!=null&&u(e,["requests[]","outputDimensionality"],s),a(n,["mimeType"])!==void 0)throw new Error("mimeType parameter is not supported in Gemini API.");if(a(n,["autoTruncate"])!==void 0)throw new Error("autoTruncate parameter is not supported in Gemini API.");return i}function BS(n,e,t){const i={};let o=a(t,["embeddingApiType"]);if(o===void 0&&(o="PREDICT"),o==="PREDICT"){const c=a(n,["taskType"]);e!==void 0&&c!=null&&u(e,["instances[]","task_type"],c)}else if(o==="EMBED_CONTENT"){const c=a(n,["taskType"]);e!==void 0&&c!=null&&u(e,["taskType"],c)}let r=a(t,["embeddingApiType"]);if(r===void 0&&(r="PREDICT"),r==="PREDICT"){const c=a(n,["title"]);e!==void 0&&c!=null&&u(e,["instances[]","title"],c)}else if(r==="EMBED_CONTENT"){const c=a(n,["title"]);e!==void 0&&c!=null&&u(e,["title"],c)}let s=a(t,["embeddingApiType"]);if(s===void 0&&(s="PREDICT"),s==="PREDICT"){const c=a(n,["outputDimensionality"]);e!==void 0&&c!=null&&u(e,["parameters","outputDimensionality"],c)}else if(s==="EMBED_CONTENT"){const c=a(n,["outputDimensionality"]);e!==void 0&&c!=null&&u(e,["outputDimensionality"],c)}let l=a(t,["embeddingApiType"]);if(l===void 0&&(l="PREDICT"),l==="PREDICT"){const c=a(n,["mimeType"]);e!==void 0&&c!=null&&u(e,["instances[]","mimeType"],c)}let d=a(t,["embeddingApiType"]);if(d===void 0&&(d="PREDICT"),d==="PREDICT"){const c=a(n,["autoTruncate"]);e!==void 0&&c!=null&&u(e,["parameters","autoTruncate"],c)}else if(d==="EMBED_CONTENT"){const c=a(n,["autoTruncate"]);e!==void 0&&c!=null&&u(e,["autoTruncate"],c)}return i}function kS(n,e,t){const i={},o=a(e,["model"]);o!=null&&u(i,["_url","model"],ut(n,o));const r=a(e,["contents"]);if(r!=null){let c=sl(n,r);Array.isArray(c)&&(c=c.map(f=>f)),u(i,["requests[]","content"],c)}const s=a(e,["content"]);s!=null&&Uo(kt(s));const l=a(e,["config"]);l!=null&&FS(l,i);const d=a(e,["model"]);return d!==void 0&&u(i,["requests[]","model"],ut(n,d)),i}function OS(n,e,t){const i={},o=a(e,["model"]);o!=null&&u(i,["_url","model"],ut(n,o));let r=a(t,["embeddingApiType"]);if(r===void 0&&(r="PREDICT"),r==="PREDICT"){const d=a(e,["contents"]);if(d!=null){let c=sl(n,d);Array.isArray(c)&&(c=c.map(f=>f)),u(i,["instances[]","content"],c)}}let s=a(t,["embeddingApiType"]);if(s===void 0&&(s="PREDICT"),s==="EMBED_CONTENT"){const d=a(e,["content"]);d!=null&&u(i,["content"],fo(kt(d)))}const l=a(e,["config"]);return l!=null&&BS(l,i,t),i}function GS(n,e){const t={},i=a(n,["sdkHttpResponse"]);i!=null&&u(t,["sdkHttpResponse"],i);const o=a(n,["embeddings"]);if(o!=null){let s=o;Array.isArray(s)&&(s=s.map(l=>l)),u(t,["embeddings"],s)}const r=a(n,["metadata"]);return r!=null&&u(t,["metadata"],r),t}function VS(n,e){const t={},i=a(n,["sdkHttpResponse"]);i!=null&&u(t,["sdkHttpResponse"],i);const o=a(n,["predictions[]","embeddings"]);if(o!=null){let s=o;Array.isArray(s)&&(s=s.map(l=>ES(l))),u(t,["embeddings"],s)}const r=a(n,["metadata"]);if(r!=null&&u(t,["metadata"],r),e&&a(e,["embeddingApiType"])==="EMBED_CONTENT"){const s=a(n,["embedding"]),l=a(n,["usageMetadata"]),d=a(n,["truncated"]);if(s){const c={};l&&l.promptTokenCount&&(c.tokenCount=l.promptTokenCount),d&&(c.truncated=d),s.statistics=c,u(t,["embeddings"],[s])}}return t}function HS(n,e){const t={},i=a(n,["endpoint"]);i!=null&&u(t,["name"],i);const o=a(n,["deployedModelId"]);return o!=null&&u(t,["deployedModelId"],o),t}function zS(n,e){const t={};if(a(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const i=a(n,["fileUri"]);i!=null&&u(t,["fileUri"],i);const o=a(n,["mimeType"]);return o!=null&&u(t,["mimeType"],o),t}function WS(n,e){const t={},i=a(n,["id"]);i!=null&&u(t,["id"],i);const o=a(n,["args"]);o!=null&&u(t,["args"],o);const r=a(n,["name"]);if(r!=null&&u(t,["name"],r),a(n,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(a(n,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return t}function qS(n,e){const t={},i=a(n,["allowedFunctionNames"]);i!=null&&u(t,["allowedFunctionNames"],i);const o=a(n,["mode"]);if(o!=null&&u(t,["mode"],o),a(n,["streamFunctionCallArguments"])!==void 0)throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");return t}function $S(n,e){const t={},i=a(n,["description"]);i!=null&&u(t,["description"],i);const o=a(n,["name"]);o!=null&&u(t,["name"],o);const r=a(n,["parameters"]);r!=null&&u(t,["parameters"],r);const s=a(n,["parametersJsonSchema"]);s!=null&&u(t,["parametersJsonSchema"],s);const l=a(n,["response"]);l!=null&&u(t,["response"],l);const d=a(n,["responseJsonSchema"]);if(d!=null&&u(t,["responseJsonSchema"],d),a(n,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");return t}function XS(n,e,t,i){const o={},r=a(e,["systemInstruction"]);t!==void 0&&r!=null&&u(t,["systemInstruction"],Uo(kt(r)));const s=a(e,["temperature"]);s!=null&&u(o,["temperature"],s);const l=a(e,["topP"]);l!=null&&u(o,["topP"],l);const d=a(e,["topK"]);d!=null&&u(o,["topK"],d);const c=a(e,["candidateCount"]);c!=null&&u(o,["candidateCount"],c);const f=a(e,["maxOutputTokens"]);f!=null&&u(o,["maxOutputTokens"],f);const p=a(e,["stopSequences"]);p!=null&&u(o,["stopSequences"],p);const h=a(e,["responseLogprobs"]);h!=null&&u(o,["responseLogprobs"],h);const m=a(e,["logprobs"]);m!=null&&u(o,["logprobs"],m);const v=a(e,["presencePenalty"]);v!=null&&u(o,["presencePenalty"],v);const E=a(e,["frequencyPenalty"]);E!=null&&u(o,["frequencyPenalty"],E);const g=a(e,["seed"]);g!=null&&u(o,["seed"],g);const _=a(e,["responseMimeType"]);_!=null&&u(o,["responseMimeType"],_);const T=a(e,["responseSchema"]);T!=null&&u(o,["responseSchema"],al(T));const A=a(e,["responseJsonSchema"]);if(A!=null&&u(o,["responseJsonSchema"],A),a(e,["routingConfig"])!==void 0)throw new Error("routingConfig parameter is not supported in Gemini API.");if(a(e,["modelSelectionConfig"])!==void 0)throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");const C=a(e,["safetySettings"]);if(t!==void 0&&C!=null){let G=C;Array.isArray(G)&&(G=G.map(q=>Gx(q))),u(t,["safetySettings"],G)}const w=a(e,["tools"]);if(t!==void 0&&w!=null){let G=co(w);Array.isArray(G)&&(G=G.map(q=>Jx(lo(q)))),u(t,["tools"],G)}const M=a(e,["toolConfig"]);if(t!==void 0&&M!=null&&u(t,["toolConfig"],Xx(M)),a(e,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const P=a(e,["cachedContent"]);t!==void 0&&P!=null&&u(t,["cachedContent"],Qn(n,P));const S=a(e,["responseModalities"]);S!=null&&u(o,["responseModalities"],S);const I=a(e,["mediaResolution"]);I!=null&&u(o,["mediaResolution"],I);const W=a(e,["speechConfig"]);if(W!=null&&u(o,["speechConfig"],ll(W)),a(e,["audioTimestamp"])!==void 0)throw new Error("audioTimestamp parameter is not supported in Gemini API.");const N=a(e,["thinkingConfig"]);N!=null&&u(o,["thinkingConfig"],N);const H=a(e,["imageConfig"]);H!=null&&u(o,["imageConfig"],Ex(H));const V=a(e,["enableEnhancedCivicAnswers"]);if(V!=null&&u(o,["enableEnhancedCivicAnswers"],V),a(e,["modelArmorConfig"])!==void 0)throw new Error("modelArmorConfig parameter is not supported in Gemini API.");const X=a(e,["serviceTier"]);return t!==void 0&&X!=null&&u(t,["serviceTier"],X),o}function YS(n,e,t,i){const o={},r=a(e,["systemInstruction"]);t!==void 0&&r!=null&&u(t,["systemInstruction"],fo(kt(r)));const s=a(e,["temperature"]);s!=null&&u(o,["temperature"],s);const l=a(e,["topP"]);l!=null&&u(o,["topP"],l);const d=a(e,["topK"]);d!=null&&u(o,["topK"],d);const c=a(e,["candidateCount"]);c!=null&&u(o,["candidateCount"],c);const f=a(e,["maxOutputTokens"]);f!=null&&u(o,["maxOutputTokens"],f);const p=a(e,["stopSequences"]);p!=null&&u(o,["stopSequences"],p);const h=a(e,["responseLogprobs"]);h!=null&&u(o,["responseLogprobs"],h);const m=a(e,["logprobs"]);m!=null&&u(o,["logprobs"],m);const v=a(e,["presencePenalty"]);v!=null&&u(o,["presencePenalty"],v);const E=a(e,["frequencyPenalty"]);E!=null&&u(o,["frequencyPenalty"],E);const g=a(e,["seed"]);g!=null&&u(o,["seed"],g);const _=a(e,["responseMimeType"]);_!=null&&u(o,["responseMimeType"],_);const T=a(e,["responseSchema"]);T!=null&&u(o,["responseSchema"],al(T));const A=a(e,["responseJsonSchema"]);A!=null&&u(o,["responseJsonSchema"],A);const C=a(e,["routingConfig"]);C!=null&&u(o,["routingConfig"],C);const w=a(e,["modelSelectionConfig"]);w!=null&&u(o,["modelConfig"],w);const M=a(e,["safetySettings"]);if(t!==void 0&&M!=null){let ie=M;Array.isArray(ie)&&(ie=ie.map(_e=>_e)),u(t,["safetySettings"],ie)}const P=a(e,["tools"]);if(t!==void 0&&P!=null){let ie=co(P);Array.isArray(ie)&&(ie=ie.map(_e=>af(lo(_e)))),u(t,["tools"],ie)}const S=a(e,["toolConfig"]);t!==void 0&&S!=null&&u(t,["toolConfig"],Yx(S));const I=a(e,["labels"]);t!==void 0&&I!=null&&u(t,["labels"],I);const W=a(e,["cachedContent"]);t!==void 0&&W!=null&&u(t,["cachedContent"],Qn(n,W));const N=a(e,["responseModalities"]);N!=null&&u(o,["responseModalities"],N);const H=a(e,["mediaResolution"]);H!=null&&u(o,["mediaResolution"],H);const V=a(e,["speechConfig"]);V!=null&&u(o,["speechConfig"],sf(ll(V)));const X=a(e,["audioTimestamp"]);X!=null&&u(o,["audioTimestamp"],X);const G=a(e,["thinkingConfig"]);G!=null&&u(o,["thinkingConfig"],G);const q=a(e,["imageConfig"]);if(q!=null&&u(o,["imageConfig"],Sx(q)),a(e,["enableEnhancedCivicAnswers"])!==void 0)throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");const O=a(e,["modelArmorConfig"]);t!==void 0&&O!=null&&u(t,["modelArmorConfig"],O);const re=a(e,["serviceTier"]);return t!==void 0&&re!=null&&u(t,["serviceTier"],re),o}function Vu(n,e,t){const i={},o=a(e,["model"]);o!=null&&u(i,["_url","model"],ut(n,o));const r=a(e,["contents"]);if(r!=null){let l=on(r);Array.isArray(l)&&(l=l.map(d=>Uo(d))),u(i,["contents"],l)}const s=a(e,["config"]);return s!=null&&u(i,["generationConfig"],XS(n,s,i)),i}function Hu(n,e,t){const i={},o=a(e,["model"]);o!=null&&u(i,["_url","model"],ut(n,o));const r=a(e,["contents"]);if(r!=null){let l=on(r);Array.isArray(l)&&(l=l.map(d=>fo(d))),u(i,["contents"],l)}const s=a(e,["config"]);return s!=null&&u(i,["generationConfig"],YS(n,s,i)),i}function zu(n,e){const t={},i=a(n,["sdkHttpResponse"]);i!=null&&u(t,["sdkHttpResponse"],i);const o=a(n,["candidates"]);if(o!=null){let f=o;Array.isArray(f)&&(f=f.map(p=>gS(p))),u(t,["candidates"],f)}const r=a(n,["modelVersion"]);r!=null&&u(t,["modelVersion"],r);const s=a(n,["promptFeedback"]);s!=null&&u(t,["promptFeedback"],s);const l=a(n,["responseId"]);l!=null&&u(t,["responseId"],l);const d=a(n,["usageMetadata"]);d!=null&&u(t,["usageMetadata"],d);const c=a(n,["modelStatus"]);return c!=null&&u(t,["modelStatus"],c),t}function Wu(n,e){const t={},i=a(n,["sdkHttpResponse"]);i!=null&&u(t,["sdkHttpResponse"],i);const o=a(n,["candidates"]);if(o!=null){let f=o;Array.isArray(f)&&(f=f.map(p=>p)),u(t,["candidates"],f)}const r=a(n,["createTime"]);r!=null&&u(t,["createTime"],r);const s=a(n,["modelVersion"]);s!=null&&u(t,["modelVersion"],s);const l=a(n,["promptFeedback"]);l!=null&&u(t,["promptFeedback"],l);const d=a(n,["responseId"]);d!=null&&u(t,["responseId"],d);const c=a(n,["usageMetadata"]);return c!=null&&u(t,["usageMetadata"],c),t}function JS(n,e,t){const i={};if(a(n,["outputGcsUri"])!==void 0)throw new Error("outputGcsUri parameter is not supported in Gemini API.");if(a(n,["negativePrompt"])!==void 0)throw new Error("negativePrompt parameter is not supported in Gemini API.");const o=a(n,["numberOfImages"]);e!==void 0&&o!=null&&u(e,["parameters","sampleCount"],o);const r=a(n,["aspectRatio"]);e!==void 0&&r!=null&&u(e,["parameters","aspectRatio"],r);const s=a(n,["guidanceScale"]);if(e!==void 0&&s!=null&&u(e,["parameters","guidanceScale"],s),a(n,["seed"])!==void 0)throw new Error("seed parameter is not supported in Gemini API.");const l=a(n,["safetyFilterLevel"]);e!==void 0&&l!=null&&u(e,["parameters","safetySetting"],l);const d=a(n,["personGeneration"]);e!==void 0&&d!=null&&u(e,["parameters","personGeneration"],d);const c=a(n,["includeSafetyAttributes"]);e!==void 0&&c!=null&&u(e,["parameters","includeSafetyAttributes"],c);const f=a(n,["includeRaiReason"]);e!==void 0&&f!=null&&u(e,["parameters","includeRaiReason"],f);const p=a(n,["language"]);e!==void 0&&p!=null&&u(e,["parameters","language"],p);const h=a(n,["outputMimeType"]);e!==void 0&&h!=null&&u(e,["parameters","outputOptions","mimeType"],h);const m=a(n,["outputCompressionQuality"]);if(e!==void 0&&m!=null&&u(e,["parameters","outputOptions","compressionQuality"],m),a(n,["addWatermark"])!==void 0)throw new Error("addWatermark parameter is not supported in Gemini API.");if(a(n,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const v=a(n,["imageSize"]);if(e!==void 0&&v!=null&&u(e,["parameters","sampleImageSize"],v),a(n,["enhancePrompt"])!==void 0)throw new Error("enhancePrompt parameter is not supported in Gemini API.");return i}function KS(n,e,t){const i={},o=a(n,["outputGcsUri"]);e!==void 0&&o!=null&&u(e,["parameters","storageUri"],o);const r=a(n,["negativePrompt"]);e!==void 0&&r!=null&&u(e,["parameters","negativePrompt"],r);const s=a(n,["numberOfImages"]);e!==void 0&&s!=null&&u(e,["parameters","sampleCount"],s);const l=a(n,["aspectRatio"]);e!==void 0&&l!=null&&u(e,["parameters","aspectRatio"],l);const d=a(n,["guidanceScale"]);e!==void 0&&d!=null&&u(e,["parameters","guidanceScale"],d);const c=a(n,["seed"]);e!==void 0&&c!=null&&u(e,["parameters","seed"],c);const f=a(n,["safetyFilterLevel"]);e!==void 0&&f!=null&&u(e,["parameters","safetySetting"],f);const p=a(n,["personGeneration"]);e!==void 0&&p!=null&&u(e,["parameters","personGeneration"],p);const h=a(n,["includeSafetyAttributes"]);e!==void 0&&h!=null&&u(e,["parameters","includeSafetyAttributes"],h);const m=a(n,["includeRaiReason"]);e!==void 0&&m!=null&&u(e,["parameters","includeRaiReason"],m);const v=a(n,["language"]);e!==void 0&&v!=null&&u(e,["parameters","language"],v);const E=a(n,["outputMimeType"]);e!==void 0&&E!=null&&u(e,["parameters","outputOptions","mimeType"],E);const g=a(n,["outputCompressionQuality"]);e!==void 0&&g!=null&&u(e,["parameters","outputOptions","compressionQuality"],g);const _=a(n,["addWatermark"]);e!==void 0&&_!=null&&u(e,["parameters","addWatermark"],_);const T=a(n,["labels"]);e!==void 0&&T!=null&&u(e,["labels"],T);const A=a(n,["imageSize"]);e!==void 0&&A!=null&&u(e,["parameters","sampleImageSize"],A);const C=a(n,["enhancePrompt"]);return e!==void 0&&C!=null&&u(e,["parameters","enhancePrompt"],C),i}function ZS(n,e,t){const i={},o=a(e,["model"]);o!=null&&u(i,["_url","model"],ut(n,o));const r=a(e,["prompt"]);r!=null&&u(i,["instances[0]","prompt"],r);const s=a(e,["config"]);return s!=null&&JS(s,i),i}function QS(n,e,t){const i={},o=a(e,["model"]);o!=null&&u(i,["_url","model"],ut(n,o));const r=a(e,["prompt"]);r!=null&&u(i,["instances[0]","prompt"],r);const s=a(e,["config"]);return s!=null&&KS(s,i),i}function jS(n,e){const t={},i=a(n,["sdkHttpResponse"]);i!=null&&u(t,["sdkHttpResponse"],i);const o=a(n,["predictions"]);if(o!=null){let s=o;Array.isArray(s)&&(s=s.map(l=>dx(l))),u(t,["generatedImages"],s)}const r=a(n,["positivePromptSafetyAttributes"]);return r!=null&&u(t,["positivePromptSafetyAttributes"],of(r)),t}function ex(n,e){const t={},i=a(n,["sdkHttpResponse"]);i!=null&&u(t,["sdkHttpResponse"],i);const o=a(n,["predictions"]);if(o!=null){let s=o;Array.isArray(s)&&(s=s.map(l=>Vr(l))),u(t,["generatedImages"],s)}const r=a(n,["positivePromptSafetyAttributes"]);return r!=null&&u(t,["positivePromptSafetyAttributes"],rf(r)),t}function tx(n,e,t){const i={},o=a(n,["numberOfVideos"]);if(e!==void 0&&o!=null&&u(e,["parameters","sampleCount"],o),a(n,["outputGcsUri"])!==void 0)throw new Error("outputGcsUri parameter is not supported in Gemini API.");if(a(n,["fps"])!==void 0)throw new Error("fps parameter is not supported in Gemini API.");const r=a(n,["durationSeconds"]);if(e!==void 0&&r!=null&&u(e,["parameters","durationSeconds"],r),a(n,["seed"])!==void 0)throw new Error("seed parameter is not supported in Gemini API.");const s=a(n,["aspectRatio"]);e!==void 0&&s!=null&&u(e,["parameters","aspectRatio"],s);const l=a(n,["resolution"]);e!==void 0&&l!=null&&u(e,["parameters","resolution"],l);const d=a(n,["personGeneration"]);if(e!==void 0&&d!=null&&u(e,["parameters","personGeneration"],d),a(n,["pubsubTopic"])!==void 0)throw new Error("pubsubTopic parameter is not supported in Gemini API.");const c=a(n,["negativePrompt"]);e!==void 0&&c!=null&&u(e,["parameters","negativePrompt"],c);const f=a(n,["enhancePrompt"]);if(e!==void 0&&f!=null&&u(e,["parameters","enhancePrompt"],f),a(n,["generateAudio"])!==void 0)throw new Error("generateAudio parameter is not supported in Gemini API.");const p=a(n,["lastFrame"]);e!==void 0&&p!=null&&u(e,["instances[0]","lastFrame"],Hr(p));const h=a(n,["referenceImages"]);if(e!==void 0&&h!=null){let m=h;Array.isArray(m)&&(m=m.map(v=>lT(v))),u(e,["instances[0]","referenceImages"],m)}if(a(n,["mask"])!==void 0)throw new Error("mask parameter is not supported in Gemini API.");if(a(n,["compressionQuality"])!==void 0)throw new Error("compressionQuality parameter is not supported in Gemini API.");if(a(n,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");return i}function nx(n,e,t){const i={},o=a(n,["numberOfVideos"]);e!==void 0&&o!=null&&u(e,["parameters","sampleCount"],o);const r=a(n,["outputGcsUri"]);e!==void 0&&r!=null&&u(e,["parameters","storageUri"],r);const s=a(n,["fps"]);e!==void 0&&s!=null&&u(e,["parameters","fps"],s);const l=a(n,["durationSeconds"]);e!==void 0&&l!=null&&u(e,["parameters","durationSeconds"],l);const d=a(n,["seed"]);e!==void 0&&d!=null&&u(e,["parameters","seed"],d);const c=a(n,["aspectRatio"]);e!==void 0&&c!=null&&u(e,["parameters","aspectRatio"],c);const f=a(n,["resolution"]);e!==void 0&&f!=null&&u(e,["parameters","resolution"],f);const p=a(n,["personGeneration"]);e!==void 0&&p!=null&&u(e,["parameters","personGeneration"],p);const h=a(n,["pubsubTopic"]);e!==void 0&&h!=null&&u(e,["parameters","pubsubTopic"],h);const m=a(n,["negativePrompt"]);e!==void 0&&m!=null&&u(e,["parameters","negativePrompt"],m);const v=a(n,["enhancePrompt"]);e!==void 0&&v!=null&&u(e,["parameters","enhancePrompt"],v);const E=a(n,["generateAudio"]);e!==void 0&&E!=null&&u(e,["parameters","generateAudio"],E);const g=a(n,["lastFrame"]);e!==void 0&&g!=null&&u(e,["instances[0]","lastFrame"],Tn(g));const _=a(n,["referenceImages"]);if(e!==void 0&&_!=null){let w=_;Array.isArray(w)&&(w=w.map(M=>cT(M))),u(e,["instances[0]","referenceImages"],w)}const T=a(n,["mask"]);e!==void 0&&T!=null&&u(e,["instances[0]","mask"],aT(T));const A=a(n,["compressionQuality"]);e!==void 0&&A!=null&&u(e,["parameters","compressionQuality"],A);const C=a(n,["labels"]);return e!==void 0&&C!=null&&u(e,["labels"],C),i}function ix(n,e){const t={},i=a(n,["name"]);i!=null&&u(t,["name"],i);const o=a(n,["metadata"]);o!=null&&u(t,["metadata"],o);const r=a(n,["done"]);r!=null&&u(t,["done"],r);const s=a(n,["error"]);s!=null&&u(t,["error"],s);const l=a(n,["response","generateVideoResponse"]);return l!=null&&u(t,["response"],ax(l)),t}function ox(n,e){const t={},i=a(n,["name"]);i!=null&&u(t,["name"],i);const o=a(n,["metadata"]);o!=null&&u(t,["metadata"],o);const r=a(n,["done"]);r!=null&&u(t,["done"],r);const s=a(n,["error"]);s!=null&&u(t,["error"],s);const l=a(n,["response"]);return l!=null&&u(t,["response"],lx(l)),t}function rx(n,e,t){const i={},o=a(e,["model"]);o!=null&&u(i,["_url","model"],ut(n,o));const r=a(e,["prompt"]);r!=null&&u(i,["instances[0]","prompt"],r);const s=a(e,["image"]);s!=null&&u(i,["instances[0]","image"],Hr(s));const l=a(e,["video"]);l!=null&&u(i,["instances[0]","video"],lf(l));const d=a(e,["source"]);d!=null&&cx(d,i);const c=a(e,["config"]);return c!=null&&tx(c,i),i}function sx(n,e,t){const i={},o=a(e,["model"]);o!=null&&u(i,["_url","model"],ut(n,o));const r=a(e,["prompt"]);r!=null&&u(i,["instances[0]","prompt"],r);const s=a(e,["image"]);s!=null&&u(i,["instances[0]","image"],Tn(s));const l=a(e,["video"]);l!=null&&u(i,["instances[0]","video"],cf(l));const d=a(e,["source"]);d!=null&&ux(d,i);const c=a(e,["config"]);return c!=null&&nx(c,i),i}function ax(n,e){const t={},i=a(n,["generatedSamples"]);if(i!=null){let s=i;Array.isArray(s)&&(s=s.map(l=>hx(l))),u(t,["generatedVideos"],s)}const o=a(n,["raiMediaFilteredCount"]);o!=null&&u(t,["raiMediaFilteredCount"],o);const r=a(n,["raiMediaFilteredReasons"]);return r!=null&&u(t,["raiMediaFilteredReasons"],r),t}function lx(n,e){const t={},i=a(n,["videos"]);if(i!=null){let s=i;Array.isArray(s)&&(s=s.map(l=>px(l))),u(t,["generatedVideos"],s)}const o=a(n,["raiMediaFilteredCount"]);o!=null&&u(t,["raiMediaFilteredCount"],o);const r=a(n,["raiMediaFilteredReasons"]);return r!=null&&u(t,["raiMediaFilteredReasons"],r),t}function cx(n,e,t){const i={},o=a(n,["prompt"]);e!==void 0&&o!=null&&u(e,["instances[0]","prompt"],o);const r=a(n,["image"]);e!==void 0&&r!=null&&u(e,["instances[0]","image"],Hr(r));const s=a(n,["video"]);return e!==void 0&&s!=null&&u(e,["instances[0]","video"],lf(s)),i}function ux(n,e,t){const i={},o=a(n,["prompt"]);e!==void 0&&o!=null&&u(e,["instances[0]","prompt"],o);const r=a(n,["image"]);e!==void 0&&r!=null&&u(e,["instances[0]","image"],Tn(r));const s=a(n,["video"]);return e!==void 0&&s!=null&&u(e,["instances[0]","video"],cf(s)),i}function dx(n,e){const t={},i=a(n,["_self"]);i!=null&&u(t,["image"],xx(i));const o=a(n,["raiFilteredReason"]);o!=null&&u(t,["raiFilteredReason"],o);const r=a(n,["_self"]);return r!=null&&u(t,["safetyAttributes"],of(r)),t}function Vr(n,e){const t={},i=a(n,["_self"]);i!=null&&u(t,["image"],nf(i));const o=a(n,["raiFilteredReason"]);o!=null&&u(t,["raiFilteredReason"],o);const r=a(n,["_self"]);r!=null&&u(t,["safetyAttributes"],rf(r));const s=a(n,["prompt"]);return s!=null&&u(t,["enhancedPrompt"],s),t}function fx(n,e){const t={},i=a(n,["_self"]);i!=null&&u(t,["mask"],nf(i));const o=a(n,["labels"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>s)),u(t,["labels"],r)}return t}function hx(n,e){const t={},i=a(n,["video"]);return i!=null&&u(t,["video"],rT(i)),t}function px(n,e){const t={},i=a(n,["_self"]);return i!=null&&u(t,["video"],sT(i)),t}function mx(n,e){const t={},i=a(n,["modelSelectionConfig"]);i!=null&&u(t,["modelConfig"],i);const o=a(n,["responseJsonSchema"]);o!=null&&u(t,["responseJsonSchema"],o);const r=a(n,["audioTimestamp"]);r!=null&&u(t,["audioTimestamp"],r);const s=a(n,["candidateCount"]);s!=null&&u(t,["candidateCount"],s);const l=a(n,["enableAffectiveDialog"]);l!=null&&u(t,["enableAffectiveDialog"],l);const d=a(n,["frequencyPenalty"]);d!=null&&u(t,["frequencyPenalty"],d);const c=a(n,["logprobs"]);c!=null&&u(t,["logprobs"],c);const f=a(n,["maxOutputTokens"]);f!=null&&u(t,["maxOutputTokens"],f);const p=a(n,["mediaResolution"]);p!=null&&u(t,["mediaResolution"],p);const h=a(n,["presencePenalty"]);h!=null&&u(t,["presencePenalty"],h);const m=a(n,["responseLogprobs"]);m!=null&&u(t,["responseLogprobs"],m);const v=a(n,["responseMimeType"]);v!=null&&u(t,["responseMimeType"],v);const E=a(n,["responseModalities"]);E!=null&&u(t,["responseModalities"],E);const g=a(n,["responseSchema"]);g!=null&&u(t,["responseSchema"],g);const _=a(n,["routingConfig"]);_!=null&&u(t,["routingConfig"],_);const T=a(n,["seed"]);T!=null&&u(t,["seed"],T);const A=a(n,["speechConfig"]);A!=null&&u(t,["speechConfig"],sf(A));const C=a(n,["stopSequences"]);C!=null&&u(t,["stopSequences"],C);const w=a(n,["temperature"]);w!=null&&u(t,["temperature"],w);const M=a(n,["thinkingConfig"]);M!=null&&u(t,["thinkingConfig"],M);const P=a(n,["topK"]);P!=null&&u(t,["topK"],P);const S=a(n,["topP"]);if(S!=null&&u(t,["topP"],S),a(n,["enableEnhancedCivicAnswers"])!==void 0)throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");return t}function gx(n,e,t){const i={},o=a(e,["model"]);return o!=null&&u(i,["_url","name"],ut(n,o)),i}function _x(n,e,t){const i={},o=a(e,["model"]);return o!=null&&u(i,["_url","name"],ut(n,o)),i}function vx(n,e){const t={},i=a(n,["authConfig"]);i!=null&&u(t,["authConfig"],pS(i));const o=a(n,["enableWidget"]);return o!=null&&u(t,["enableWidget"],o),t}function yx(n,e){const t={},i=a(n,["searchTypes"]);if(i!=null&&u(t,["searchTypes"],i),a(n,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");if(a(n,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");const o=a(n,["timeRangeFilter"]);return o!=null&&u(t,["timeRangeFilter"],o),t}function Ex(n,e){const t={},i=a(n,["aspectRatio"]);i!=null&&u(t,["aspectRatio"],i);const o=a(n,["imageSize"]);if(o!=null&&u(t,["imageSize"],o),a(n,["personGeneration"])!==void 0)throw new Error("personGeneration parameter is not supported in Gemini API.");if(a(n,["prominentPeople"])!==void 0)throw new Error("prominentPeople parameter is not supported in Gemini API.");if(a(n,["outputMimeType"])!==void 0)throw new Error("outputMimeType parameter is not supported in Gemini API.");if(a(n,["outputCompressionQuality"])!==void 0)throw new Error("outputCompressionQuality parameter is not supported in Gemini API.");if(a(n,["imageOutputOptions"])!==void 0)throw new Error("imageOutputOptions parameter is not supported in Gemini API.");return t}function Sx(n,e){const t={},i=a(n,["aspectRatio"]);i!=null&&u(t,["aspectRatio"],i);const o=a(n,["imageSize"]);o!=null&&u(t,["imageSize"],o);const r=a(n,["personGeneration"]);r!=null&&u(t,["personGeneration"],r);const s=a(n,["prominentPeople"]);s!=null&&u(t,["prominentPeople"],s);const l=a(n,["outputMimeType"]);l!=null&&u(t,["imageOutputOptions","mimeType"],l);const d=a(n,["outputCompressionQuality"]);d!=null&&u(t,["imageOutputOptions","compressionQuality"],d);const c=a(n,["imageOutputOptions"]);return c!=null&&u(t,["imageOutputOptions"],c),t}function xx(n,e){const t={},i=a(n,["bytesBase64Encoded"]);i!=null&&u(t,["imageBytes"],pi(i));const o=a(n,["mimeType"]);return o!=null&&u(t,["mimeType"],o),t}function nf(n,e){const t={},i=a(n,["gcsUri"]);i!=null&&u(t,["gcsUri"],i);const o=a(n,["bytesBase64Encoded"]);o!=null&&u(t,["imageBytes"],pi(o));const r=a(n,["mimeType"]);return r!=null&&u(t,["mimeType"],r),t}function Hr(n,e){const t={};if(a(n,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");const i=a(n,["imageBytes"]);i!=null&&u(t,["bytesBase64Encoded"],pi(i));const o=a(n,["mimeType"]);return o!=null&&u(t,["mimeType"],o),t}function Tn(n,e){const t={},i=a(n,["gcsUri"]);i!=null&&u(t,["gcsUri"],i);const o=a(n,["imageBytes"]);o!=null&&u(t,["bytesBase64Encoded"],pi(o));const r=a(n,["mimeType"]);return r!=null&&u(t,["mimeType"],r),t}function Tx(n,e,t,i){const o={},r=a(e,["pageSize"]);t!==void 0&&r!=null&&u(t,["_query","pageSize"],r);const s=a(e,["pageToken"]);t!==void 0&&s!=null&&u(t,["_query","pageToken"],s);const l=a(e,["filter"]);t!==void 0&&l!=null&&u(t,["_query","filter"],l);const d=a(e,["queryBase"]);return t!==void 0&&d!=null&&u(t,["_url","models_url"],Xd(n,d)),o}function Mx(n,e,t,i){const o={},r=a(e,["pageSize"]);t!==void 0&&r!=null&&u(t,["_query","pageSize"],r);const s=a(e,["pageToken"]);t!==void 0&&s!=null&&u(t,["_query","pageToken"],s);const l=a(e,["filter"]);t!==void 0&&l!=null&&u(t,["_query","filter"],l);const d=a(e,["queryBase"]);return t!==void 0&&d!=null&&u(t,["_url","models_url"],Xd(n,d)),o}function Ax(n,e,t){const i={},o=a(e,["config"]);return o!=null&&Tx(n,o,i),i}function Cx(n,e,t){const i={},o=a(e,["config"]);return o!=null&&Mx(n,o,i),i}function Ix(n,e){const t={},i=a(n,["sdkHttpResponse"]);i!=null&&u(t,["sdkHttpResponse"],i);const o=a(n,["nextPageToken"]);o!=null&&u(t,["nextPageToken"],o);const r=a(n,["_self"]);if(r!=null){let s=Yd(r);Array.isArray(s)&&(s=s.map(l=>La(l))),u(t,["models"],s)}return t}function wx(n,e){const t={},i=a(n,["sdkHttpResponse"]);i!=null&&u(t,["sdkHttpResponse"],i);const o=a(n,["nextPageToken"]);o!=null&&u(t,["nextPageToken"],o);const r=a(n,["_self"]);if(r!=null){let s=Yd(r);Array.isArray(s)&&(s=s.map(l=>Ua(l))),u(t,["models"],s)}return t}function Rx(n,e){const t={},i=a(n,["maskMode"]);i!=null&&u(t,["maskMode"],i);const o=a(n,["segmentationClasses"]);o!=null&&u(t,["maskClasses"],o);const r=a(n,["maskDilation"]);return r!=null&&u(t,["dilation"],r),t}function La(n,e){const t={},i=a(n,["name"]);i!=null&&u(t,["name"],i);const o=a(n,["displayName"]);o!=null&&u(t,["displayName"],o);const r=a(n,["description"]);r!=null&&u(t,["description"],r);const s=a(n,["version"]);s!=null&&u(t,["version"],s);const l=a(n,["_self"]);l!=null&&u(t,["tunedModelInfo"],Kx(l));const d=a(n,["inputTokenLimit"]);d!=null&&u(t,["inputTokenLimit"],d);const c=a(n,["outputTokenLimit"]);c!=null&&u(t,["outputTokenLimit"],c);const f=a(n,["supportedGenerationMethods"]);f!=null&&u(t,["supportedActions"],f);const p=a(n,["temperature"]);p!=null&&u(t,["temperature"],p);const h=a(n,["maxTemperature"]);h!=null&&u(t,["maxTemperature"],h);const m=a(n,["topP"]);m!=null&&u(t,["topP"],m);const v=a(n,["topK"]);v!=null&&u(t,["topK"],v);const E=a(n,["thinking"]);return E!=null&&u(t,["thinking"],E),t}function Ua(n,e){const t={},i=a(n,["name"]);i!=null&&u(t,["name"],i);const o=a(n,["displayName"]);o!=null&&u(t,["displayName"],o);const r=a(n,["description"]);r!=null&&u(t,["description"],r);const s=a(n,["versionId"]);s!=null&&u(t,["version"],s);const l=a(n,["deployedModels"]);if(l!=null){let h=l;Array.isArray(h)&&(h=h.map(m=>HS(m))),u(t,["endpoints"],h)}const d=a(n,["labels"]);d!=null&&u(t,["labels"],d);const c=a(n,["_self"]);c!=null&&u(t,["tunedModelInfo"],Zx(c));const f=a(n,["defaultCheckpointId"]);f!=null&&u(t,["defaultCheckpointId"],f);const p=a(n,["checkpoints"]);if(p!=null){let h=p;Array.isArray(h)&&(h=h.map(m=>m)),u(t,["checkpoints"],h)}return t}function bx(n,e){const t={},i=a(n,["speakerVoiceConfigs"]);if(i!=null){let o=i;Array.isArray(o)&&(o=o.map(r=>$x(r))),u(t,["speakerVoiceConfigs"],o)}return t}function Px(n,e){const t={},i=a(n,["mediaResolution"]);i!=null&&u(t,["mediaResolution"],i);const o=a(n,["codeExecutionResult"]);o!=null&&u(t,["codeExecutionResult"],o);const r=a(n,["executableCode"]);r!=null&&u(t,["executableCode"],r);const s=a(n,["fileData"]);s!=null&&u(t,["fileData"],zS(s));const l=a(n,["functionCall"]);l!=null&&u(t,["functionCall"],WS(l));const d=a(n,["functionResponse"]);d!=null&&u(t,["functionResponse"],d);const c=a(n,["inlineData"]);c!=null&&u(t,["inlineData"],mS(c));const f=a(n,["text"]);f!=null&&u(t,["text"],f);const p=a(n,["thought"]);p!=null&&u(t,["thought"],p);const h=a(n,["thoughtSignature"]);h!=null&&u(t,["thoughtSignature"],h);const m=a(n,["videoMetadata"]);m!=null&&u(t,["videoMetadata"],m);const v=a(n,["toolCall"]);v!=null&&u(t,["toolCall"],v);const E=a(n,["toolResponse"]);E!=null&&u(t,["toolResponse"],E);const g=a(n,["partMetadata"]);return g!=null&&u(t,["partMetadata"],g),t}function Nx(n,e){const t={},i=a(n,["mediaResolution"]);i!=null&&u(t,["mediaResolution"],i);const o=a(n,["codeExecutionResult"]);o!=null&&u(t,["codeExecutionResult"],o);const r=a(n,["executableCode"]);r!=null&&u(t,["executableCode"],r);const s=a(n,["fileData"]);s!=null&&u(t,["fileData"],s);const l=a(n,["functionCall"]);l!=null&&u(t,["functionCall"],l);const d=a(n,["functionResponse"]);d!=null&&u(t,["functionResponse"],d);const c=a(n,["inlineData"]);c!=null&&u(t,["inlineData"],c);const f=a(n,["text"]);f!=null&&u(t,["text"],f);const p=a(n,["thought"]);p!=null&&u(t,["thought"],p);const h=a(n,["thoughtSignature"]);h!=null&&u(t,["thoughtSignature"],h);const m=a(n,["videoMetadata"]);if(m!=null&&u(t,["videoMetadata"],m),a(n,["toolCall"])!==void 0)throw new Error("toolCall parameter is not supported in Vertex AI.");if(a(n,["toolResponse"])!==void 0)throw new Error("toolResponse parameter is not supported in Vertex AI.");if(a(n,["partMetadata"])!==void 0)throw new Error("partMetadata parameter is not supported in Vertex AI.");return t}function Dx(n,e){const t={},i=a(n,["productImage"]);return i!=null&&u(t,["image"],Tn(i)),t}function Lx(n,e,t){const i={},o=a(n,["numberOfImages"]);e!==void 0&&o!=null&&u(e,["parameters","sampleCount"],o);const r=a(n,["baseSteps"]);e!==void 0&&r!=null&&u(e,["parameters","baseSteps"],r);const s=a(n,["outputGcsUri"]);e!==void 0&&s!=null&&u(e,["parameters","storageUri"],s);const l=a(n,["seed"]);e!==void 0&&l!=null&&u(e,["parameters","seed"],l);const d=a(n,["safetyFilterLevel"]);e!==void 0&&d!=null&&u(e,["parameters","safetySetting"],d);const c=a(n,["personGeneration"]);e!==void 0&&c!=null&&u(e,["parameters","personGeneration"],c);const f=a(n,["addWatermark"]);e!==void 0&&f!=null&&u(e,["parameters","addWatermark"],f);const p=a(n,["outputMimeType"]);e!==void 0&&p!=null&&u(e,["parameters","outputOptions","mimeType"],p);const h=a(n,["outputCompressionQuality"]);e!==void 0&&h!=null&&u(e,["parameters","outputOptions","compressionQuality"],h);const m=a(n,["enhancePrompt"]);e!==void 0&&m!=null&&u(e,["parameters","enhancePrompt"],m);const v=a(n,["labels"]);return e!==void 0&&v!=null&&u(e,["labels"],v),i}function Ux(n,e,t){const i={},o=a(e,["model"]);o!=null&&u(i,["_url","model"],ut(n,o));const r=a(e,["source"]);r!=null&&Bx(r,i);const s=a(e,["config"]);return s!=null&&Lx(s,i),i}function Fx(n,e){const t={},i=a(n,["predictions"]);if(i!=null){let o=i;Array.isArray(o)&&(o=o.map(r=>Vr(r))),u(t,["generatedImages"],o)}return t}function Bx(n,e,t){const i={},o=a(n,["prompt"]);e!==void 0&&o!=null&&u(e,["instances[0]","prompt"],o);const r=a(n,["personImage"]);e!==void 0&&r!=null&&u(e,["instances[0]","personImage","image"],Tn(r));const s=a(n,["productImages"]);if(e!==void 0&&s!=null){let l=s;Array.isArray(l)&&(l=l.map(d=>Dx(d))),u(e,["instances[0]","productImages"],l)}return i}function kx(n,e){const t={},i=a(n,["referenceImage"]);i!=null&&u(t,["referenceImage"],Tn(i));const o=a(n,["referenceId"]);o!=null&&u(t,["referenceId"],o);const r=a(n,["referenceType"]);r!=null&&u(t,["referenceType"],r);const s=a(n,["maskImageConfig"]);s!=null&&u(t,["maskImageConfig"],Rx(s));const l=a(n,["controlImageConfig"]);l!=null&&u(t,["controlImageConfig"],xS(l));const d=a(n,["styleImageConfig"]);d!=null&&u(t,["styleImageConfig"],d);const c=a(n,["subjectImageConfig"]);return c!=null&&u(t,["subjectImageConfig"],c),t}function Ox(n,e){const t={},i=a(n,["mimeType"]);i!=null&&u(t,["mimeType"],i);const o=a(n,["voiceSampleAudio"]);return o!=null&&u(t,["voiceSampleAudio"],o),t}function of(n,e){const t={},i=a(n,["safetyAttributes","categories"]);i!=null&&u(t,["categories"],i);const o=a(n,["safetyAttributes","scores"]);o!=null&&u(t,["scores"],o);const r=a(n,["contentType"]);return r!=null&&u(t,["contentType"],r),t}function rf(n,e){const t={},i=a(n,["safetyAttributes","categories"]);i!=null&&u(t,["categories"],i);const o=a(n,["safetyAttributes","scores"]);o!=null&&u(t,["scores"],o);const r=a(n,["contentType"]);return r!=null&&u(t,["contentType"],r),t}function Gx(n,e){const t={},i=a(n,["category"]);if(i!=null&&u(t,["category"],i),a(n,["method"])!==void 0)throw new Error("method parameter is not supported in Gemini API.");const o=a(n,["threshold"]);return o!=null&&u(t,["threshold"],o),t}function Vx(n,e){const t={},i=a(n,["image"]);return i!=null&&u(t,["image"],Tn(i)),t}function Hx(n,e,t){const i={},o=a(n,["mode"]);e!==void 0&&o!=null&&u(e,["parameters","mode"],o);const r=a(n,["maxPredictions"]);e!==void 0&&r!=null&&u(e,["parameters","maxPredictions"],r);const s=a(n,["confidenceThreshold"]);e!==void 0&&s!=null&&u(e,["parameters","confidenceThreshold"],s);const l=a(n,["maskDilation"]);e!==void 0&&l!=null&&u(e,["parameters","maskDilation"],l);const d=a(n,["binaryColorThreshold"]);e!==void 0&&d!=null&&u(e,["parameters","binaryColorThreshold"],d);const c=a(n,["labels"]);return e!==void 0&&c!=null&&u(e,["labels"],c),i}function zx(n,e,t){const i={},o=a(e,["model"]);o!=null&&u(i,["_url","model"],ut(n,o));const r=a(e,["source"]);r!=null&&qx(r,i);const s=a(e,["config"]);return s!=null&&Hx(s,i),i}function Wx(n,e){const t={},i=a(n,["predictions"]);if(i!=null){let o=i;Array.isArray(o)&&(o=o.map(r=>fx(r))),u(t,["generatedMasks"],o)}return t}function qx(n,e,t){const i={},o=a(n,["prompt"]);e!==void 0&&o!=null&&u(e,["instances[0]","prompt"],o);const r=a(n,["image"]);e!==void 0&&r!=null&&u(e,["instances[0]","image"],Tn(r));const s=a(n,["scribbleImage"]);return e!==void 0&&s!=null&&u(e,["instances[0]","scribble"],Vx(s)),i}function $x(n,e){const t={},i=a(n,["speaker"]);i!=null&&u(t,["speaker"],i);const o=a(n,["voiceConfig"]);return o!=null&&u(t,["voiceConfig"],uf(o)),t}function sf(n,e){const t={},i=a(n,["voiceConfig"]);i!=null&&u(t,["voiceConfig"],uf(i));const o=a(n,["languageCode"]);o!=null&&u(t,["languageCode"],o);const r=a(n,["multiSpeakerVoiceConfig"]);return r!=null&&u(t,["multiSpeakerVoiceConfig"],bx(r)),t}function Xx(n,e){const t={},i=a(n,["retrievalConfig"]);i!=null&&u(t,["retrievalConfig"],i);const o=a(n,["functionCallingConfig"]);o!=null&&u(t,["functionCallingConfig"],qS(o));const r=a(n,["includeServerSideToolInvocations"]);return r!=null&&u(t,["includeServerSideToolInvocations"],r),t}function Yx(n,e){const t={},i=a(n,["retrievalConfig"]);i!=null&&u(t,["retrievalConfig"],i);const o=a(n,["functionCallingConfig"]);if(o!=null&&u(t,["functionCallingConfig"],o),a(n,["includeServerSideToolInvocations"])!==void 0)throw new Error("includeServerSideToolInvocations parameter is not supported in Vertex AI.");return t}function Jx(n,e){const t={};if(a(n,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const i=a(n,["computerUse"]);i!=null&&u(t,["computerUse"],i);const o=a(n,["fileSearch"]);o!=null&&u(t,["fileSearch"],o);const r=a(n,["googleSearch"]);r!=null&&u(t,["googleSearch"],yx(r));const s=a(n,["googleMaps"]);s!=null&&u(t,["googleMaps"],vx(s));const l=a(n,["codeExecution"]);if(l!=null&&u(t,["codeExecution"],l),a(n,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const d=a(n,["functionDeclarations"]);if(d!=null){let h=d;Array.isArray(h)&&(h=h.map(m=>m)),u(t,["functionDeclarations"],h)}const c=a(n,["googleSearchRetrieval"]);if(c!=null&&u(t,["googleSearchRetrieval"],c),a(n,["parallelAiSearch"])!==void 0)throw new Error("parallelAiSearch parameter is not supported in Gemini API.");const f=a(n,["urlContext"]);f!=null&&u(t,["urlContext"],f);const p=a(n,["mcpServers"]);if(p!=null){let h=p;Array.isArray(h)&&(h=h.map(m=>m)),u(t,["mcpServers"],h)}return t}function af(n,e){const t={},i=a(n,["retrieval"]);i!=null&&u(t,["retrieval"],i);const o=a(n,["computerUse"]);if(o!=null&&u(t,["computerUse"],o),a(n,["fileSearch"])!==void 0)throw new Error("fileSearch parameter is not supported in Vertex AI.");const r=a(n,["googleSearch"]);r!=null&&u(t,["googleSearch"],r);const s=a(n,["googleMaps"]);s!=null&&u(t,["googleMaps"],s);const l=a(n,["codeExecution"]);l!=null&&u(t,["codeExecution"],l);const d=a(n,["enterpriseWebSearch"]);d!=null&&u(t,["enterpriseWebSearch"],d);const c=a(n,["functionDeclarations"]);if(c!=null){let m=c;Array.isArray(m)&&(m=m.map(v=>$S(v))),u(t,["functionDeclarations"],m)}const f=a(n,["googleSearchRetrieval"]);f!=null&&u(t,["googleSearchRetrieval"],f);const p=a(n,["parallelAiSearch"]);p!=null&&u(t,["parallelAiSearch"],p);const h=a(n,["urlContext"]);if(h!=null&&u(t,["urlContext"],h),a(n,["mcpServers"])!==void 0)throw new Error("mcpServers parameter is not supported in Vertex AI.");return t}function Kx(n,e){const t={},i=a(n,["baseModel"]);i!=null&&u(t,["baseModel"],i);const o=a(n,["createTime"]);o!=null&&u(t,["createTime"],o);const r=a(n,["updateTime"]);return r!=null&&u(t,["updateTime"],r),t}function Zx(n,e){const t={},i=a(n,["labels","google-vertex-llm-tuning-base-model-id"]);i!=null&&u(t,["baseModel"],i);const o=a(n,["createTime"]);o!=null&&u(t,["createTime"],o);const r=a(n,["updateTime"]);return r!=null&&u(t,["updateTime"],r),t}function Qx(n,e,t){const i={},o=a(n,["displayName"]);e!==void 0&&o!=null&&u(e,["displayName"],o);const r=a(n,["description"]);e!==void 0&&r!=null&&u(e,["description"],r);const s=a(n,["defaultCheckpointId"]);return e!==void 0&&s!=null&&u(e,["defaultCheckpointId"],s),i}function jx(n,e,t){const i={},o=a(n,["displayName"]);e!==void 0&&o!=null&&u(e,["displayName"],o);const r=a(n,["description"]);e!==void 0&&r!=null&&u(e,["description"],r);const s=a(n,["defaultCheckpointId"]);return e!==void 0&&s!=null&&u(e,["defaultCheckpointId"],s),i}function eT(n,e,t){const i={},o=a(e,["model"]);o!=null&&u(i,["_url","name"],ut(n,o));const r=a(e,["config"]);return r!=null&&Qx(r,i),i}function tT(n,e,t){const i={},o=a(e,["model"]);o!=null&&u(i,["_url","model"],ut(n,o));const r=a(e,["config"]);return r!=null&&jx(r,i),i}function nT(n,e,t){const i={},o=a(n,["outputGcsUri"]);e!==void 0&&o!=null&&u(e,["parameters","storageUri"],o);const r=a(n,["safetyFilterLevel"]);e!==void 0&&r!=null&&u(e,["parameters","safetySetting"],r);const s=a(n,["personGeneration"]);e!==void 0&&s!=null&&u(e,["parameters","personGeneration"],s);const l=a(n,["includeRaiReason"]);e!==void 0&&l!=null&&u(e,["parameters","includeRaiReason"],l);const d=a(n,["outputMimeType"]);e!==void 0&&d!=null&&u(e,["parameters","outputOptions","mimeType"],d);const c=a(n,["outputCompressionQuality"]);e!==void 0&&c!=null&&u(e,["parameters","outputOptions","compressionQuality"],c);const f=a(n,["enhanceInputImage"]);e!==void 0&&f!=null&&u(e,["parameters","upscaleConfig","enhanceInputImage"],f);const p=a(n,["imagePreservationFactor"]);e!==void 0&&p!=null&&u(e,["parameters","upscaleConfig","imagePreservationFactor"],p);const h=a(n,["labels"]);e!==void 0&&h!=null&&u(e,["labels"],h);const m=a(n,["numberOfImages"]);e!==void 0&&m!=null&&u(e,["parameters","sampleCount"],m);const v=a(n,["mode"]);return e!==void 0&&v!=null&&u(e,["parameters","mode"],v),i}function iT(n,e,t){const i={},o=a(e,["model"]);o!=null&&u(i,["_url","model"],ut(n,o));const r=a(e,["image"]);r!=null&&u(i,["instances[0]","image"],Tn(r));const s=a(e,["upscaleFactor"]);s!=null&&u(i,["parameters","upscaleConfig","upscaleFactor"],s);const l=a(e,["config"]);return l!=null&&nT(l,i),i}function oT(n,e){const t={},i=a(n,["sdkHttpResponse"]);i!=null&&u(t,["sdkHttpResponse"],i);const o=a(n,["predictions"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>Vr(s))),u(t,["generatedImages"],r)}return t}function rT(n,e){const t={},i=a(n,["uri"]);i!=null&&u(t,["uri"],i);const o=a(n,["encodedVideo"]);o!=null&&u(t,["videoBytes"],pi(o));const r=a(n,["encoding"]);return r!=null&&u(t,["mimeType"],r),t}function sT(n,e){const t={},i=a(n,["gcsUri"]);i!=null&&u(t,["uri"],i);const o=a(n,["bytesBase64Encoded"]);o!=null&&u(t,["videoBytes"],pi(o));const r=a(n,["mimeType"]);return r!=null&&u(t,["mimeType"],r),t}function aT(n,e){const t={},i=a(n,["image"]);i!=null&&u(t,["_self"],Tn(i));const o=a(n,["maskMode"]);return o!=null&&u(t,["maskMode"],o),t}function lT(n,e){const t={},i=a(n,["image"]);i!=null&&u(t,["image"],Hr(i));const o=a(n,["referenceType"]);return o!=null&&u(t,["referenceType"],o),t}function cT(n,e){const t={},i=a(n,["image"]);i!=null&&u(t,["image"],Tn(i));const o=a(n,["referenceType"]);return o!=null&&u(t,["referenceType"],o),t}function lf(n,e){const t={},i=a(n,["uri"]);i!=null&&u(t,["uri"],i);const o=a(n,["videoBytes"]);o!=null&&u(t,["encodedVideo"],pi(o));const r=a(n,["mimeType"]);return r!=null&&u(t,["encoding"],r),t}function cf(n,e){const t={},i=a(n,["uri"]);i!=null&&u(t,["gcsUri"],i);const o=a(n,["videoBytes"]);o!=null&&u(t,["bytesBase64Encoded"],pi(o));const r=a(n,["mimeType"]);return r!=null&&u(t,["mimeType"],r),t}function uf(n,e){const t={},i=a(n,["replicatedVoiceConfig"]);i!=null&&u(t,["replicatedVoiceConfig"],Ox(i));const o=a(n,["prebuiltVoiceConfig"]);return o!=null&&u(t,["prebuiltVoiceConfig"],o),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function uT(n,e){const t={},i=a(n,["displayName"]);return e!==void 0&&i!=null&&u(e,["displayName"],i),t}function dT(n){const e={},t=a(n,["config"]);return t!=null&&uT(t,e),e}function fT(n,e){const t={},i=a(n,["force"]);return e!==void 0&&i!=null&&u(e,["_query","force"],i),t}function hT(n){const e={},t=a(n,["name"]);t!=null&&u(e,["_url","name"],t);const i=a(n,["config"]);return i!=null&&fT(i,e),e}function pT(n){const e={},t=a(n,["name"]);return t!=null&&u(e,["_url","name"],t),e}function mT(n,e){const t={},i=a(n,["customMetadata"]);if(e!==void 0&&i!=null){let r=i;Array.isArray(r)&&(r=r.map(s=>s)),u(e,["customMetadata"],r)}const o=a(n,["chunkingConfig"]);return e!==void 0&&o!=null&&u(e,["chunkingConfig"],o),t}function gT(n){const e={},t=a(n,["name"]);t!=null&&u(e,["name"],t);const i=a(n,["metadata"]);i!=null&&u(e,["metadata"],i);const o=a(n,["done"]);o!=null&&u(e,["done"],o);const r=a(n,["error"]);r!=null&&u(e,["error"],r);const s=a(n,["response"]);return s!=null&&u(e,["response"],vT(s)),e}function _T(n){const e={},t=a(n,["fileSearchStoreName"]);t!=null&&u(e,["_url","file_search_store_name"],t);const i=a(n,["fileName"]);i!=null&&u(e,["fileName"],i);const o=a(n,["config"]);return o!=null&&mT(o,e),e}function vT(n){const e={},t=a(n,["sdkHttpResponse"]);t!=null&&u(e,["sdkHttpResponse"],t);const i=a(n,["parent"]);i!=null&&u(e,["parent"],i);const o=a(n,["documentName"]);return o!=null&&u(e,["documentName"],o),e}function yT(n,e){const t={},i=a(n,["pageSize"]);e!==void 0&&i!=null&&u(e,["_query","pageSize"],i);const o=a(n,["pageToken"]);return e!==void 0&&o!=null&&u(e,["_query","pageToken"],o),t}function ET(n){const e={},t=a(n,["config"]);return t!=null&&yT(t,e),e}function ST(n){const e={},t=a(n,["sdkHttpResponse"]);t!=null&&u(e,["sdkHttpResponse"],t);const i=a(n,["nextPageToken"]);i!=null&&u(e,["nextPageToken"],i);const o=a(n,["fileSearchStores"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>s)),u(e,["fileSearchStores"],r)}return e}function df(n,e){const t={},i=a(n,["mimeType"]);e!==void 0&&i!=null&&u(e,["mimeType"],i);const o=a(n,["displayName"]);e!==void 0&&o!=null&&u(e,["displayName"],o);const r=a(n,["customMetadata"]);if(e!==void 0&&r!=null){let l=r;Array.isArray(l)&&(l=l.map(d=>d)),u(e,["customMetadata"],l)}const s=a(n,["chunkingConfig"]);return e!==void 0&&s!=null&&u(e,["chunkingConfig"],s),t}function xT(n){const e={},t=a(n,["fileSearchStoreName"]);t!=null&&u(e,["_url","file_search_store_name"],t);const i=a(n,["config"]);return i!=null&&df(i,e),e}function TT(n){const e={},t=a(n,["sdkHttpResponse"]);return t!=null&&u(e,["sdkHttpResponse"],t),e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const MT="Content-Type",AT="X-Server-Timeout",CT="User-Agent",Fa="x-goog-api-client",IT="1.48.0",wT=`google-genai-sdk/${IT}`,RT="v1beta1",bT="v1beta",PT=5,NT=[408,429,500,502,503,504];class DT{constructor(e){var t,i,o;this.clientOptions=Object.assign({},e),this.customBaseUrl=(t=e.httpOptions)===null||t===void 0?void 0:t.baseUrl,this.clientOptions.vertexai&&(this.clientOptions.project&&this.clientOptions.location?this.clientOptions.apiKey=void 0:this.clientOptions.apiKey&&(this.clientOptions.project=void 0,this.clientOptions.location=void 0));const r={};if(this.clientOptions.vertexai){if(!this.clientOptions.location&&!this.clientOptions.apiKey&&!this.customBaseUrl&&(this.clientOptions.location="global"),!(this.clientOptions.project&&this.clientOptions.location||this.clientOptions.apiKey)&&!this.customBaseUrl)throw new Error("Authentication is not set up. Please provide either a project and location, or an API key, or a custom base URL.");const l=e.project&&e.location||!!e.apiKey;this.customBaseUrl&&!l?(r.baseUrl=this.customBaseUrl,this.clientOptions.project=void 0,this.clientOptions.location=void 0):this.clientOptions.apiKey||this.clientOptions.location==="global"?r.baseUrl="https://aiplatform.googleapis.com/":this.clientOptions.project&&this.clientOptions.location&&this.clientOptions.location==="us"?r.baseUrl=`https://aiplatform.${this.clientOptions.location}.rep.googleapis.com/`:this.clientOptions.project&&this.clientOptions.location&&(r.baseUrl=`https://${this.clientOptions.location}-aiplatform.googleapis.com/`),r.apiVersion=(i=this.clientOptions.apiVersion)!==null&&i!==void 0?i:RT}else this.clientOptions.apiKey||console.warn("API key should be set when using the Gemini API."),r.apiVersion=(o=this.clientOptions.apiVersion)!==null&&o!==void 0?o:bT,r.baseUrl="https://generativelanguage.googleapis.com/";r.headers=this.getDefaultHeaders(),this.clientOptions.httpOptions=r,e.httpOptions&&(this.clientOptions.httpOptions=this.patchHttpOptions(r,e.httpOptions))}isVertexAI(){var e;return(e=this.clientOptions.vertexai)!==null&&e!==void 0?e:!1}getProject(){return this.clientOptions.project}getLocation(){return this.clientOptions.location}getCustomBaseUrl(){return this.customBaseUrl}async getAuthHeaders(){const e=new Headers;return await this.clientOptions.auth.addAuthHeaders(e),e}getApiVersion(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.apiVersion!==void 0)return this.clientOptions.httpOptions.apiVersion;throw new Error("API version is not set.")}getBaseUrl(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.baseUrl!==void 0)return this.clientOptions.httpOptions.baseUrl;throw new Error("Base URL is not set.")}getRequestUrl(){return this.getRequestUrlInternal(this.clientOptions.httpOptions)}getHeaders(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.headers!==void 0)return this.clientOptions.httpOptions.headers;throw new Error("Headers are not set.")}getRequestUrlInternal(e){if(!e||e.baseUrl===void 0||e.apiVersion===void 0)throw new Error("HTTP options are not correctly set.");const i=[e.baseUrl.endsWith("/")?e.baseUrl.slice(0,-1):e.baseUrl];return e.apiVersion&&e.apiVersion!==""&&i.push(e.apiVersion),i.join("/")}getBaseResourcePath(){return`projects/${this.clientOptions.project}/locations/${this.clientOptions.location}`}getApiKey(){return this.clientOptions.apiKey}getWebsocketBaseUrl(){const e=this.getBaseUrl(),t=new URL(e);return t.protocol=t.protocol=="http:"?"ws":"wss",t.toString()}setBaseUrl(e){if(this.clientOptions.httpOptions)this.clientOptions.httpOptions.baseUrl=e;else throw new Error("HTTP options are not correctly set.")}constructUrl(e,t,i){const o=[this.getRequestUrlInternal(t)];return i&&o.push(this.getBaseResourcePath()),e!==""&&o.push(e),new URL(`${o.join("/")}`)}shouldPrependVertexProjectPath(e,t){return!(t.baseUrl&&t.baseUrlResourceScope===ba.COLLECTION||this.clientOptions.apiKey||!this.clientOptions.vertexai||e.path.startsWith("projects/")||e.httpMethod==="GET"&&e.path.startsWith("publishers/google/models"))}async request(e){let t=this.clientOptions.httpOptions;e.httpOptions&&(t=this.patchHttpOptions(this.clientOptions.httpOptions,e.httpOptions));const i=this.shouldPrependVertexProjectPath(e,t),o=this.constructUrl(e.path,t,i);if(e.queryParams)for(const[s,l]of Object.entries(e.queryParams))o.searchParams.append(s,String(l));let r={};if(e.httpMethod==="GET"){if(e.body&&e.body!=="{}")throw new Error("Request body should be empty for GET request, but got non empty request body")}else r.body=e.body;return r=await this.includeExtraHttpOptionsToRequestInit(r,t,o.toString(),e.abortSignal),this.unaryApiCall(o,r,e.httpMethod)}patchHttpOptions(e,t){const i=JSON.parse(JSON.stringify(e));for(const[o,r]of Object.entries(t))typeof r=="object"?i[o]=Object.assign(Object.assign({},i[o]),r):r!==void 0&&(i[o]=r);return i}async requestStream(e){let t=this.clientOptions.httpOptions;e.httpOptions&&(t=this.patchHttpOptions(this.clientOptions.httpOptions,e.httpOptions));const i=this.shouldPrependVertexProjectPath(e,t),o=this.constructUrl(e.path,t,i);(!o.searchParams.has("alt")||o.searchParams.get("alt")!=="sse")&&o.searchParams.set("alt","sse");let r={};return r.body=e.body,r=await this.includeExtraHttpOptionsToRequestInit(r,t,o.toString(),e.abortSignal),this.streamApiCall(o,r,e.httpMethod)}async includeExtraHttpOptionsToRequestInit(e,t,i,o){if(t&&t.timeout||o){const r=new AbortController,s=r.signal;if(t.timeout&&(t==null?void 0:t.timeout)>0){const l=setTimeout(()=>r.abort(),t.timeout);l&&typeof l.unref=="function"&&l.unref()}o&&o.addEventListener("abort",()=>{r.abort()}),e.signal=s}return t&&t.extraBody!==null&&LT(e,t.extraBody),e.headers=await this.getHeadersInternal(t,i),e}async unaryApiCall(e,t,i){return this.apiCall(e.toString(),Object.assign(Object.assign({},t),{method:i})).then(async o=>(await qu(o),new Pa(o))).catch(o=>{throw o instanceof Error?o:new Error(JSON.stringify(o))})}async streamApiCall(e,t,i){return this.apiCall(e.toString(),Object.assign(Object.assign({},t),{method:i})).then(async o=>(await qu(o),this.processStreamResponse(o))).catch(o=>{throw o instanceof Error?o:new Error(JSON.stringify(o))})}processStreamResponse(e){return Sn(this,arguments,function*(){var i;const o=(i=e==null?void 0:e.body)===null||i===void 0?void 0:i.getReader(),r=new TextDecoder("utf-8");if(!o)throw new Error("Response body is empty");try{let s="";const l="data:",d=[`

`,"\r\r",`\r
\r
`];for(;;){const{done:c,value:f}=yield $e(o.read());if(c){if(s.trim().length>0)throw new Error("Incomplete JSON segment at the end");break}const p=r.decode(f,{stream:!0});try{const v=JSON.parse(p);if("error"in v){const E=JSON.parse(JSON.stringify(v.error)),g=E.status,_=E.code,T=`got status: ${g}. ${JSON.stringify(v)}`;if(_>=400&&_<600)throw new Gr({message:T,status:_})}}catch(v){if(v.name==="ApiError")throw v}s+=p;let h=-1,m=0;for(;;){h=-1,m=0;for(const g of d){const _=s.indexOf(g);_!==-1&&(h===-1||_<h)&&(h=_,m=g.length)}if(h===-1)break;const v=s.substring(0,h);s=s.substring(h+m);const E=v.trim();if(E.startsWith(l)){const g=E.substring(l.length).trim();try{const _=new Response(g,{headers:e==null?void 0:e.headers,status:e==null?void 0:e.status,statusText:e==null?void 0:e.statusText});yield yield $e(new Pa(_))}catch(_){throw new Error(`exception parsing stream chunk ${g}. ${_}`)}}}}}finally{o.releaseLock()}})}async apiCall(e,t){var i;if(!this.clientOptions.httpOptions||!this.clientOptions.httpOptions.retryOptions)return fetch(e,t);const o=this.clientOptions.httpOptions.retryOptions;return s0(async()=>{const s=await fetch(e,t);if(s.ok)return s;throw NT.includes(s.status)?new Error(`Retryable HTTP Error: ${s.statusText}`):new kd.AbortError(`Non-retryable exception ${s.statusText} sending request`)},{retries:((i=o.attempts)!==null&&i!==void 0?i:PT)-1})}getDefaultHeaders(){const e={},t=wT+" "+this.clientOptions.userAgentExtra;return e[CT]=t,e[Fa]=t,e[MT]="application/json",e}async getHeadersInternal(e,t){const i=new Headers;if(e&&e.headers){for(const[o,r]of Object.entries(e.headers))i.append(o,r);e.timeout&&e.timeout>0&&i.append(AT,String(Math.ceil(e.timeout/1e3)))}return await this.clientOptions.auth.addAuthHeaders(i,t),i}getFileName(e){var t;let i="";return typeof e=="string"&&(i=e.replace(/[/\\]+$/,""),i=(t=i.split(/[/\\]/).pop())!==null&&t!==void 0?t:""),i}async uploadFile(e,t){var i;const o={};t!=null&&(o.mimeType=t.mimeType,o.name=t.name,o.displayName=t.displayName),o.name&&!o.name.startsWith("files/")&&(o.name=`files/${o.name}`);const r=this.clientOptions.uploader,s=await r.stat(e);o.sizeBytes=String(s.size);const l=(i=t==null?void 0:t.mimeType)!==null&&i!==void 0?i:s.type;if(l===void 0||l==="")throw new Error("Can not determine mimeType. Please provide mimeType in the config.");o.mimeType=l;const d={file:o},c=this.getFileName(e),f=ve("upload/v1beta/files",d._url),p=await this.fetchUploadUrl(f,o.sizeBytes,o.mimeType,c,d,t==null?void 0:t.httpOptions);return r.upload(e,p,this)}async uploadFileToFileSearchStore(e,t,i){var o;const r=this.clientOptions.uploader,s=await r.stat(t),l=String(s.size),d=(o=i==null?void 0:i.mimeType)!==null&&o!==void 0?o:s.type;if(d===void 0||d==="")throw new Error("Can not determine mimeType. Please provide mimeType in the config.");const c=`upload/v1beta/${e}:uploadToFileSearchStore`,f=this.getFileName(t),p={};i!=null&&df(i,p);const h=await this.fetchUploadUrl(c,l,d,f,p,i==null?void 0:i.httpOptions);return r.uploadToFileSearchStore(t,h,this)}async downloadFile(e){await this.clientOptions.downloader.download(e,this)}async fetchUploadUrl(e,t,i,o,r,s){var l;let d={};s?d=s:d={apiVersion:"",headers:Object.assign({"Content-Type":"application/json","X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${t}`,"X-Goog-Upload-Header-Content-Type":`${i}`},o?{"X-Goog-Upload-File-Name":o}:{})};const c=await this.request({path:e,body:JSON.stringify(r),httpMethod:"POST",httpOptions:d});if(!c||!(c!=null&&c.headers))throw new Error("Server did not return an HttpResponse or the returned HttpResponse did not have headers.");const f=(l=c==null?void 0:c.headers)===null||l===void 0?void 0:l["x-goog-upload-url"];if(f===void 0)throw new Error("Failed to get upload url. Server did not return the x-google-upload-url in the headers");return f}}async function qu(n){var e;if(n===void 0)throw new Error("response is undefined");if(!n.ok){const t=n.status;let i;!((e=n.headers.get("content-type"))===null||e===void 0)&&e.includes("application/json")?i=await n.json():i={error:{message:await n.text(),code:n.status,status:n.statusText}};const o=JSON.stringify(i);throw t>=400&&t<600?new Gr({message:o,status:t}):new Error(o)}}function LT(n,e){if(!e||Object.keys(e).length===0)return;if(n.body instanceof Blob){console.warn("includeExtraBodyToRequestInit: extraBody provided but current request body is a Blob. extraBody will be ignored as merging is not supported for Blob bodies.");return}let t={};if(typeof n.body=="string"&&n.body.length>0)try{const r=JSON.parse(n.body);if(typeof r=="object"&&r!==null&&!Array.isArray(r))t=r;else{console.warn("includeExtraBodyToRequestInit: Original request body is valid JSON but not a non-array object. Skip applying extraBody to the request body.");return}}catch{console.warn("includeExtraBodyToRequestInit: Original request body is not valid JSON. Skip applying extraBody to the request body.");return}function i(r,s){const l=Object.assign({},r);for(const d in s)if(Object.prototype.hasOwnProperty.call(s,d)){const c=s[d],f=l[d];c&&typeof c=="object"&&!Array.isArray(c)&&f&&typeof f=="object"&&!Array.isArray(f)?l[d]=i(f,c):(f&&c&&typeof f!=typeof c&&console.warn(`includeExtraBodyToRequestInit:deepMerge: Type mismatch for key "${d}". Original type: ${typeof f}, New type: ${typeof c}. Overwriting.`),l[d]=c)}return l}const o=i(t,e);n.body=JSON.stringify(o)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const UT="mcp_used/unknown";let FT=!1;function ff(n){for(const e of n)if(BT(e)||typeof e=="object"&&"inputSchema"in e)return!0;return FT}function hf(n){var e;const t=(e=n[Fa])!==null&&e!==void 0?e:"";n[Fa]=(t+` ${UT}`).trimStart()}function BT(n){return n!==null&&typeof n=="object"&&n instanceof ul}function kT(n){return Sn(this,arguments,function*(t,i=100){let o,r=0;for(;r<i;){const s=yield $e(t.listTools({cursor:o}));for(const l of s.tools)yield yield $e(l),r++;if(!s.nextCursor)break;o=s.nextCursor}})}class ul{constructor(e=[],t){this.mcpTools=[],this.functionNameToMcpClient={},this.mcpClients=e,this.config=t}static create(e,t){return new ul(e,t)}async initialize(){var e,t,i,o;if(this.mcpTools.length>0)return;const r={},s=[];for(const f of this.mcpClients)try{for(var l=!0,d=(t=void 0,xn(kT(f))),c;c=await d.next(),e=c.done,!e;l=!0){o=c.value,l=!1;const p=o;s.push(p);const h=p.name;if(r[h])throw new Error(`Duplicate function name ${h} found in MCP tools. Please ensure function names are unique.`);r[h]=f}}catch(p){t={error:p}}finally{try{!l&&!e&&(i=d.return)&&await i.call(d)}finally{if(t)throw t.error}}this.mcpTools=s,this.functionNameToMcpClient=r}async tool(){return await this.initialize(),Y0(this.mcpTools,this.config)}async callTool(e){await this.initialize();const t=[];for(const i of e)if(i.name in this.functionNameToMcpClient){const o=this.functionNameToMcpClient[i.name];let r;this.config.timeout&&(r={timeout:this.config.timeout});const s=await o.callTool({name:i.name,arguments:i.args},void 0,r);t.push({functionResponse:{name:i.name,response:s.isError?{error:s}:s}})}return t}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */async function OT(n,e,t){const i=new G0;let o;t.data instanceof Blob?o=JSON.parse(await t.data.text()):o=JSON.parse(t.data),Object.assign(i,o),e(i)}class GT{constructor(e,t,i){this.apiClient=e,this.auth=t,this.webSocketFactory=i}async connect(e){var t,i;if(this.apiClient.isVertexAI())throw new Error("Live music is not supported for Vertex AI.");console.warn("Live music generation is experimental and may change in future versions.");const o=this.apiClient.getWebsocketBaseUrl(),r=this.apiClient.getApiVersion(),s=zT(this.apiClient.getDefaultHeaders()),l=this.apiClient.getApiKey(),d=`${o}/ws/google.ai.generativelanguage.${r}.GenerativeService.BidiGenerateMusic?key=${l}`;let c=()=>{};const f=new Promise(A=>{c=A}),p=e.callbacks,h=function(){c({})},m=this.apiClient,v={onopen:h,onmessage:A=>{OT(m,p.onmessage,A)},onerror:(t=p==null?void 0:p.onerror)!==null&&t!==void 0?t:function(A){},onclose:(i=p==null?void 0:p.onclose)!==null&&i!==void 0?i:function(A){}},E=this.webSocketFactory.create(d,HT(s),v);E.connect(),await f;const T={setup:{model:ut(this.apiClient,e.model)}};return E.send(JSON.stringify(T)),new VT(E,this.apiClient)}}class VT{constructor(e,t){this.conn=e,this.apiClient=t}async setWeightedPrompts(e){if(!e.weightedPrompts||Object.keys(e.weightedPrompts).length===0)throw new Error("Weighted prompts must be set and contain at least one entry.");const t=eS(e);this.conn.send(JSON.stringify({clientContent:t}))}async setMusicGenerationConfig(e){e.musicGenerationConfig||(e.musicGenerationConfig={});const t=jE(e);this.conn.send(JSON.stringify(t))}sendPlaybackControl(e){const t={playbackControl:e};this.conn.send(JSON.stringify(t))}play(){this.sendPlaybackControl(Yi.PLAY)}pause(){this.sendPlaybackControl(Yi.PAUSE)}stop(){this.sendPlaybackControl(Yi.STOP)}resetContext(){this.sendPlaybackControl(Yi.RESET_CONTEXT)}close(){this.conn.close()}}function HT(n){const e={};return n.forEach((t,i)=>{e[i]=t}),e}function zT(n){const e=new Headers;for(const[t,i]of Object.entries(n))e.append(t,i);return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const WT="FunctionResponse request must have an `id` field from the response of a ToolCall.FunctionalCalls in Google AI.";async function qT(n,e,t){const i=new O0;let o;t.data instanceof Blob?o=await t.data.text():t.data instanceof ArrayBuffer?o=new TextDecoder().decode(t.data):o=t.data;const r=JSON.parse(o);if(n.isVertexAI()){const s=iS(r);Object.assign(i,s)}else Object.assign(i,r);e(i)}class $T{constructor(e,t,i){this.apiClient=e,this.auth=t,this.webSocketFactory=i,this.music=new GT(this.apiClient,this.auth,this.webSocketFactory)}async connect(e){var t,i,o,r,s,l;if(e.config&&e.config.httpOptions)throw new Error("The Live module does not support httpOptions at request-level in LiveConnectConfig yet. Please use the client-level httpOptions configuration instead.");const d=this.apiClient.getWebsocketBaseUrl(),c=this.apiClient.getApiVersion();let f;const p=this.apiClient.getHeaders();e.config&&e.config.tools&&ff(e.config.tools)&&hf(p);const h=KT(p);if(this.apiClient.isVertexAI()){const I=this.apiClient.getProject(),W=this.apiClient.getLocation(),N=this.apiClient.getApiKey(),H=!!I&&!!W||!!N;this.apiClient.getCustomBaseUrl()&&!H?f=d:(f=`${d}/ws/google.cloud.aiplatform.${c}.LlmBidiService/BidiGenerateContent`,await this.auth.addAuthHeaders(h,f))}else{const I=this.apiClient.getApiKey();let W="BidiGenerateContent",N="key";I!=null&&I.startsWith("auth_tokens/")&&(console.warn("Warning: Ephemeral token support is experimental and may change in future versions."),c!=="v1alpha"&&console.warn("Warning: The SDK's ephemeral token support is in v1alpha only. Please use const ai = new GoogleGenAI({apiKey: token.name, httpOptions: { apiVersion: 'v1alpha' }}); before session connection."),W="BidiGenerateContentConstrained",N="access_token"),f=`${d}/ws/google.ai.generativelanguage.${c}.GenerativeService.${W}?${N}=${I}`}let m=()=>{};const v=new Promise(I=>{m=I}),E=e.callbacks,g=function(){var I;(I=E==null?void 0:E.onopen)===null||I===void 0||I.call(E),m({})},_=this.apiClient,T={onopen:g,onmessage:I=>{qT(_,E.onmessage,I)},onerror:(t=E==null?void 0:E.onerror)!==null&&t!==void 0?t:function(I){},onclose:(i=E==null?void 0:E.onclose)!==null&&i!==void 0?i:function(I){}},A=this.webSocketFactory.create(f,JT(h),T);A.connect(),await v;let C=ut(this.apiClient,e.model);if(this.apiClient.isVertexAI()&&C.startsWith("publishers/")){const I=this.apiClient.getProject(),W=this.apiClient.getLocation();I&&W&&(C=`projects/${I}/locations/${W}/`+C)}let w={};this.apiClient.isVertexAI()&&((o=e.config)===null||o===void 0?void 0:o.responseModalities)===void 0&&(e.config===void 0?e.config={responseModalities:[wr.AUDIO]}:e.config.responseModalities=[wr.AUDIO]),!((r=e.config)===null||r===void 0)&&r.generationConfig&&console.warn("Setting `LiveConnectConfig.generation_config` is deprecated, please set the fields on `LiveConnectConfig` directly. This will become an error in a future version (not before Q3 2025).");const M=(l=(s=e.config)===null||s===void 0?void 0:s.tools)!==null&&l!==void 0?l:[],P=[];for(const I of M)if(this.isCallableTool(I)){const W=I;P.push(await W.tool())}else P.push(I);P.length>0&&(e.config.tools=P);const S={model:C,config:e.config,callbacks:e.callbacks};return this.apiClient.isVertexAI()?w=QE(this.apiClient,S):w=ZE(this.apiClient,S),delete w.config,A.send(JSON.stringify(w)),new YT(A,this.apiClient)}isCallableTool(e){return"callTool"in e&&typeof e.callTool=="function"}}const XT={turnComplete:!0};class YT{constructor(e,t){this.conn=e,this.apiClient=t}tLiveClientContent(e,t){if(t.turns!==null&&t.turns!==void 0){let i=[];try{i=on(t.turns),e.isVertexAI()||(i=i.map(o=>Uo(o)))}catch{throw new Error(`Failed to parse client content "turns", type: '${typeof t.turns}'`)}return{clientContent:{turns:i,turnComplete:t.turnComplete}}}return{clientContent:{turnComplete:t.turnComplete}}}tLiveClienttToolResponse(e,t){let i=[];if(t.functionResponses==null)throw new Error("functionResponses is required.");if(Array.isArray(t.functionResponses)?i=t.functionResponses:i=[t.functionResponses],i.length===0)throw new Error("functionResponses is required.");for(const r of i){if(typeof r!="object"||r===null||!("name"in r)||!("response"in r))throw new Error(`Could not parse function response, type '${typeof r}'.`);if(!e.isVertexAI()&&!("id"in r))throw new Error(WT)}return{toolResponse:{functionResponses:i}}}sendClientContent(e){e=Object.assign(Object.assign({},XT),e);const t=this.tLiveClientContent(this.apiClient,e);this.conn.send(JSON.stringify(t))}sendRealtimeInput(e){let t={};this.apiClient.isVertexAI()?t={realtimeInput:nS(e)}:t={realtimeInput:tS(e)},this.conn.send(JSON.stringify(t))}sendToolResponse(e){if(e.functionResponses==null)throw new Error("Tool response parameters are required.");const t=this.tLiveClienttToolResponse(this.apiClient,e);this.conn.send(JSON.stringify(t))}close(){this.conn.close()}}function JT(n){const e={};return n.forEach((t,i)=>{e[i]=t}),e}function KT(n){const e=new Headers;for(const[t,i]of Object.entries(n))e.append(t,i);return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const $u=10;function Xu(n){var e,t,i;if(!((e=n==null?void 0:n.automaticFunctionCalling)===null||e===void 0)&&e.disable)return!0;let o=!1;for(const s of(t=n==null?void 0:n.tools)!==null&&t!==void 0?t:[])if(ji(s)){o=!0;break}if(!o)return!0;const r=(i=n==null?void 0:n.automaticFunctionCalling)===null||i===void 0?void 0:i.maximumRemoteCalls;return r&&(r<0||!Number.isInteger(r))||r==0?(console.warn("Invalid maximumRemoteCalls value provided for automatic function calling. Disabled automatic function calling. Please provide a valid integer value greater than 0. maximumRemoteCalls provided:",r),!0):!1}function ji(n){return"callTool"in n&&typeof n.callTool=="function"}function ZT(n){var e,t,i;return(i=(t=(e=n.config)===null||e===void 0?void 0:e.tools)===null||t===void 0?void 0:t.some(o=>ji(o)))!==null&&i!==void 0?i:!1}function Yu(n){var e;const t=[];return!((e=n==null?void 0:n.config)===null||e===void 0)&&e.tools&&n.config.tools.forEach((i,o)=>{if(ji(i))return;const r=i;r.functionDeclarations&&r.functionDeclarations.length>0&&t.push(o)}),t}function Ju(n){var e;return!(!((e=n==null?void 0:n.automaticFunctionCalling)===null||e===void 0)&&e.ignoreCallHistory)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class QT extends Zn{constructor(e){super(),this.apiClient=e,this.embedContent=async t=>{if(!this.apiClient.isVertexAI())return await this.embedContentInternal(t);if(t.model.includes("gemini")&&t.model!=="gemini-embedding-001"||t.model.includes("maas")){const o=on(t.contents);if(o.length>1)throw new Error("The embedContent API for this model only supports one content at a time.");const r=Object.assign(Object.assign({},t),{content:o[0],embeddingApiType:Rr.EMBED_CONTENT});return await this.embedContentInternal(r)}else{const o=Object.assign(Object.assign({},t),{embeddingApiType:Rr.PREDICT});return await this.embedContentInternal(o)}},this.generateContent=async t=>{var i,o,r,s,l;const d=await this.processParamsMaybeAddMcpUsage(t);if(this.maybeMoveToResponseJsonSchem(t),!ZT(t)||Xu(t.config))return await this.generateContentInternal(d);const c=Yu(t);if(c.length>0){const E=c.map(g=>`tools[${g}]`).join(", ");throw new Error(`Automatic function calling with CallableTools (or MCP objects) and basic FunctionDeclarations is not yet supported. Incompatible tools found at ${E}.`)}let f,p;const h=on(d.contents),m=(r=(o=(i=d.config)===null||i===void 0?void 0:i.automaticFunctionCalling)===null||o===void 0?void 0:o.maximumRemoteCalls)!==null&&r!==void 0?r:$u;let v=0;for(;v<m&&(f=await this.generateContentInternal(d),!(!f.functionCalls||f.functionCalls.length===0));){const E=f.candidates[0].content,g=[];for(const _ of(l=(s=t.config)===null||s===void 0?void 0:s.tools)!==null&&l!==void 0?l:[])if(ji(_)){const A=await _.callTool(f.functionCalls);g.push(...A)}v++,p={role:"user",parts:g},d.contents=on(d.contents),d.contents.push(E),d.contents.push(p),Ju(d.config)&&(h.push(E),h.push(p))}return Ju(d.config)&&(f.automaticFunctionCallingHistory=h),f},this.generateContentStream=async t=>{var i,o,r,s,l;if(this.maybeMoveToResponseJsonSchem(t),Xu(t.config)){const p=await this.processParamsMaybeAddMcpUsage(t);return await this.generateContentStreamInternal(p)}const d=Yu(t);if(d.length>0){const p=d.map(h=>`tools[${h}]`).join(", ");throw new Error(`Incompatible tools found at ${p}. Automatic function calling with CallableTools (or MCP objects) and basic FunctionDeclarations" is not yet supported.`)}const c=(r=(o=(i=t==null?void 0:t.config)===null||i===void 0?void 0:i.toolConfig)===null||o===void 0?void 0:o.functionCallingConfig)===null||r===void 0?void 0:r.streamFunctionCallArguments,f=(l=(s=t==null?void 0:t.config)===null||s===void 0?void 0:s.automaticFunctionCalling)===null||l===void 0?void 0:l.disable;if(c&&!f)throw new Error("Running in streaming mode with 'streamFunctionCallArguments' enabled, this feature is not compatible with automatic function calling (AFC). Please set 'config.automaticFunctionCalling.disable' to true to disable AFC or leave 'config.toolConfig.functionCallingConfig.streamFunctionCallArguments' to be undefined or set to false to disable streaming function call arguments feature.");return await this.processAfcStream(t)},this.generateImages=async t=>await this.generateImagesInternal(t).then(i=>{var o;let r;const s=[];if(i!=null&&i.generatedImages)for(const d of i.generatedImages)d&&(d!=null&&d.safetyAttributes)&&((o=d==null?void 0:d.safetyAttributes)===null||o===void 0?void 0:o.contentType)==="Positive Prompt"?r=d==null?void 0:d.safetyAttributes:s.push(d);let l;return r?l={generatedImages:s,positivePromptSafetyAttributes:r,sdkHttpResponse:i.sdkHttpResponse}:l={generatedImages:s,sdkHttpResponse:i.sdkHttpResponse},l}),this.list=async t=>{var i;const s={config:Object.assign(Object.assign({},{queryBase:!0}),t==null?void 0:t.config)};if(this.apiClient.isVertexAI()&&!s.config.queryBase){if(!((i=s.config)===null||i===void 0)&&i.filter)throw new Error("Filtering tuned models list for Vertex AI is not currently supported");s.config.filter="labels.tune-type:*"}return new Ri(Kn.PAGED_ITEM_MODELS,l=>this.listInternal(l),await this.listInternal(s),s)},this.editImage=async t=>{const i={model:t.model,prompt:t.prompt,referenceImages:[],config:t.config};return t.referenceImages&&t.referenceImages&&(i.referenceImages=t.referenceImages.map(o=>o.toReferenceImageAPI())),await this.editImageInternal(i)},this.upscaleImage=async t=>{let i={numberOfImages:1,mode:"upscale"};t.config&&(i=Object.assign(Object.assign({},i),t.config));const o={model:t.model,image:t.image,upscaleFactor:t.upscaleFactor,config:i};return await this.upscaleImageInternal(o)},this.generateVideos=async t=>{var i,o,r,s,l,d;if((t.prompt||t.image||t.video)&&t.source)throw new Error("Source and prompt/image/video are mutually exclusive. Please only use source.");return this.apiClient.isVertexAI()||(!((i=t.video)===null||i===void 0)&&i.uri&&(!((o=t.video)===null||o===void 0)&&o.videoBytes)?t.video={uri:t.video.uri,mimeType:t.video.mimeType}:!((s=(r=t.source)===null||r===void 0?void 0:r.video)===null||s===void 0)&&s.uri&&(!((d=(l=t.source)===null||l===void 0?void 0:l.video)===null||d===void 0)&&d.videoBytes)&&(t.source.video={uri:t.source.video.uri,mimeType:t.source.video.mimeType})),await this.generateVideosInternal(t)}}maybeMoveToResponseJsonSchem(e){e.config&&e.config.responseSchema&&(e.config.responseJsonSchema||Object.keys(e.config.responseSchema).includes("$schema")&&(e.config.responseJsonSchema=e.config.responseSchema,delete e.config.responseSchema))}async processParamsMaybeAddMcpUsage(e){var t,i,o;const r=(t=e.config)===null||t===void 0?void 0:t.tools;if(!r)return e;const s=await Promise.all(r.map(async d=>ji(d)?await d.tool():d)),l={model:e.model,contents:e.contents,config:Object.assign(Object.assign({},e.config),{tools:s})};if(l.config.tools=s,e.config&&e.config.tools&&ff(e.config.tools)){const d=(o=(i=e.config.httpOptions)===null||i===void 0?void 0:i.headers)!==null&&o!==void 0?o:{};let c=Object.assign({},d);Object.keys(c).length===0&&(c=this.apiClient.getDefaultHeaders()),hf(c),l.config.httpOptions=Object.assign(Object.assign({},e.config.httpOptions),{headers:c})}return l}async initAfcToolsMap(e){var t,i,o;const r=new Map;for(const s of(i=(t=e.config)===null||t===void 0?void 0:t.tools)!==null&&i!==void 0?i:[])if(ji(s)){const l=s,d=await l.tool();for(const c of(o=d.functionDeclarations)!==null&&o!==void 0?o:[]){if(!c.name)throw new Error("Function declaration name is required.");if(r.has(c.name))throw new Error(`Duplicate tool declaration name: ${c.name}`);r.set(c.name,l)}}return r}async processAfcStream(e){var t,i,o;const r=(o=(i=(t=e.config)===null||t===void 0?void 0:t.automaticFunctionCalling)===null||i===void 0?void 0:i.maximumRemoteCalls)!==null&&o!==void 0?o:$u;let s=!1,l=0;const d=await this.initAfcToolsMap(e);return(function(c,f,p){return Sn(this,arguments,function*(){for(var h,m,v,E,g,_;l<r;){s&&(l++,s=!1);const w=yield $e(c.processParamsMaybeAddMcpUsage(p)),M=yield $e(c.generateContentStreamInternal(w)),P=[],S=[];try{for(var T=!0,A=(m=void 0,xn(M)),C;C=yield $e(A.next()),h=C.done,!h;T=!0){E=C.value,T=!1;const I=E;if(yield yield $e(I),I.candidates&&(!((g=I.candidates[0])===null||g===void 0)&&g.content)){S.push(I.candidates[0].content);for(const W of(_=I.candidates[0].content.parts)!==null&&_!==void 0?_:[])if(l<r&&W.functionCall){if(!W.functionCall.name)throw new Error("Function call name was not returned by the model.");if(f.has(W.functionCall.name)){const N=yield $e(f.get(W.functionCall.name).callTool([W.functionCall]));P.push(...N)}else throw new Error(`Automatic function calling was requested, but not all the tools the model used implement the CallableTool interface. Available tools: ${f.keys()}, mising tool: ${W.functionCall.name}`)}}}}catch(I){m={error:I}}finally{try{!T&&!h&&(v=A.return)&&(yield $e(v.call(A)))}finally{if(m)throw m.error}}if(P.length>0){s=!0;const I=new To;I.candidates=[{content:{role:"user",parts:P}}],yield yield $e(I);const W=[];W.push(...S),W.push({role:"user",parts:P});const N=on(p.contents).concat(W);p.contents=N}else break}})})(this,d,e)}async generateContentInternal(e){var t,i,o,r;let s,l="",d={};if(this.apiClient.isVertexAI()){const c=Hu(this.apiClient,e);return l=ve("{model}:generateContent",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=Wu(f),h=new To;return Object.assign(h,p),h})}else{const c=Vu(this.apiClient,e);return l=ve("{model}:generateContent",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=zu(f),h=new To;return Object.assign(h,p),h})}}async generateContentStreamInternal(e){var t,i,o,r;let s,l="",d={};if(this.apiClient.isVertexAI()){const c=Hu(this.apiClient,e);return l=ve("{model}:streamGenerateContent?alt=sse",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.requestStream({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}),s.then(function(p){return Sn(this,arguments,function*(){var h,m,v,E;try{for(var g=!0,_=xn(p),T;T=yield $e(_.next()),h=T.done,!h;g=!0){E=T.value,g=!1;const A=E,C=Wu(yield $e(A.json()),e);C.sdkHttpResponse={headers:A.headers};const w=new To;Object.assign(w,C),yield yield $e(w)}}catch(A){m={error:A}}finally{try{!g&&!h&&(v=_.return)&&(yield $e(v.call(_)))}finally{if(m)throw m.error}}})})}else{const c=Vu(this.apiClient,e);return l=ve("{model}:streamGenerateContent?alt=sse",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.requestStream({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}),s.then(function(p){return Sn(this,arguments,function*(){var h,m,v,E;try{for(var g=!0,_=xn(p),T;T=yield $e(_.next()),h=T.done,!h;g=!0){E=T.value,g=!1;const A=E,C=zu(yield $e(A.json()),e);C.sdkHttpResponse={headers:A.headers};const w=new To;Object.assign(w,C),yield yield $e(w)}}catch(A){m={error:A}}finally{try{!g&&!h&&(v=_.return)&&(yield $e(v.call(_)))}finally{if(m)throw m.error}}})})}}async embedContentInternal(e){var t,i,o,r;let s,l="",d={};if(this.apiClient.isVertexAI()){const c=OS(this.apiClient,e,e),f=K0(e.model)?"{model}:embedContent":"{model}:predict";return l=ve(f,c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(p=>p.json().then(h=>{const m=h;return m.sdkHttpResponse={headers:p.headers},m})),s.then(p=>{const h=VS(p,e),m=new xu;return Object.assign(m,h),m})}else{const c=kS(this.apiClient,e);return l=ve("{model}:batchEmbedContents",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=GS(f),h=new xu;return Object.assign(h,p),h})}}async generateImagesInternal(e){var t,i,o,r;let s,l="",d={};if(this.apiClient.isVertexAI()){const c=QS(this.apiClient,e);return l=ve("{model}:predict",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=ex(f),h=new Tu;return Object.assign(h,p),h})}else{const c=ZS(this.apiClient,e);return l=ve("{model}:predict",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=jS(f),h=new Tu;return Object.assign(h,p),h})}}async editImageInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI()){const l=LS(this.apiClient,e);return r=ve("{model}:predict",l._url),s=l._query,delete l._url,delete l._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json().then(c=>{const f=c;return f.sdkHttpResponse={headers:d.headers},f})),o.then(d=>{const c=US(d),f=new I0;return Object.assign(f,c),f})}else throw new Error("This method is only supported by the Vertex AI.")}async upscaleImageInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI()){const l=iT(this.apiClient,e);return r=ve("{model}:predict",l._url),s=l._query,delete l._url,delete l._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json().then(c=>{const f=c;return f.sdkHttpResponse={headers:d.headers},f})),o.then(d=>{const c=oT(d),f=new w0;return Object.assign(f,c),f})}else throw new Error("This method is only supported by the Vertex AI.")}async recontextImage(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI()){const l=Ux(this.apiClient,e);return r=ve("{model}:predict",l._url),s=l._query,delete l._url,delete l._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json()),o.then(d=>{const c=Fx(d),f=new R0;return Object.assign(f,c),f})}else throw new Error("This method is only supported by the Vertex AI.")}async segmentImage(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI()){const l=zx(this.apiClient,e);return r=ve("{model}:predict",l._url),s=l._query,delete l._url,delete l._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json()),o.then(d=>{const c=Wx(d),f=new b0;return Object.assign(f,c),f})}else throw new Error("This method is only supported by the Vertex AI.")}async get(e){var t,i,o,r;let s,l="",d={};if(this.apiClient.isVertexAI()){const c=_x(this.apiClient,e);return l=ve("{name}",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>Ua(f))}else{const c=gx(this.apiClient,e);return l=ve("{name}",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json()),s.then(f=>La(f))}}async listInternal(e){var t,i,o,r;let s,l="",d={};if(this.apiClient.isVertexAI()){const c=Cx(this.apiClient,e);return l=ve("{models_url}",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=wx(f),h=new Mu;return Object.assign(h,p),h})}else{const c=Ax(this.apiClient,e);return l=ve("{models_url}",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=Ix(f),h=new Mu;return Object.assign(h,p),h})}}async update(e){var t,i,o,r;let s,l="",d={};if(this.apiClient.isVertexAI()){const c=tT(this.apiClient,e);return l=ve("{model}",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"PATCH",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>Ua(f))}else{const c=eT(this.apiClient,e);return l=ve("{name}",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"PATCH",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json()),s.then(f=>La(f))}}async delete(e){var t,i,o,r;let s,l="",d={};if(this.apiClient.isVertexAI()){const c=bS(this.apiClient,e);return l=ve("{name}",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"DELETE",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=NS(f),h=new Au;return Object.assign(h,p),h})}else{const c=RS(this.apiClient,e);return l=ve("{name}",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"DELETE",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=PS(f),h=new Au;return Object.assign(h,p),h})}}async countTokens(e){var t,i,o,r;let s,l="",d={};if(this.apiClient.isVertexAI()){const c=CS(this.apiClient,e);return l=ve("{model}:countTokens",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=wS(f),h=new Cu;return Object.assign(h,p),h})}else{const c=AS(this.apiClient,e);return l=ve("{model}:countTokens",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=IS(f),h=new Cu;return Object.assign(h,p),h})}}async computeTokens(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI()){const l=vS(this.apiClient,e);return r=ve("{model}:computeTokens",l._url),s=l._query,delete l._url,delete l._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json().then(c=>{const f=c;return f.sdkHttpResponse={headers:d.headers},f})),o.then(d=>{const c=yS(d),f=new P0;return Object.assign(f,c),f})}else throw new Error("This method is only supported by the Vertex AI.")}async generateVideosInternal(e){var t,i,o,r;let s,l="",d={};if(this.apiClient.isVertexAI()){const c=sx(this.apiClient,e);return l=ve("{model}:predictLongRunning",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s.then(f=>{const p=ox(f),h=new br;return Object.assign(h,p),h})}else{const c=rx(this.apiClient,e);return l=ve("{model}:predictLongRunning",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json()),s.then(f=>{const p=ix(f),h=new br;return Object.assign(h,p),h})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class jT extends Zn{constructor(e){super(),this.apiClient=e}async getVideosOperation(e){const t=e.operation,i=e.config;if(t.name===void 0||t.name==="")throw new Error("Operation name is required.");if(this.apiClient.isVertexAI()){const o=t.name.split("/operations/")[0];let r;i&&"httpOptions"in i&&(r=i.httpOptions);const s=await this.fetchPredictVideosOperationInternal({operationName:t.name,resourceName:o,config:{httpOptions:r}});return t._fromAPIResponse({apiResponse:s,_isVertexAI:!0})}else{const o=await this.getVideosOperationInternal({operationName:t.name,config:i});return t._fromAPIResponse({apiResponse:o,_isVertexAI:!1})}}async get(e){const t=e.operation,i=e.config;if(t.name===void 0||t.name==="")throw new Error("Operation name is required.");if(this.apiClient.isVertexAI()){const o=t.name.split("/operations/")[0];let r;i&&"httpOptions"in i&&(r=i.httpOptions);const s=await this.fetchPredictVideosOperationInternal({operationName:t.name,resourceName:o,config:{httpOptions:r}});return t._fromAPIResponse({apiResponse:s,_isVertexAI:!0})}else{const o=await this.getVideosOperationInternal({operationName:t.name,config:i});return t._fromAPIResponse({apiResponse:o,_isVertexAI:!1})}}async getVideosOperationInternal(e){var t,i,o,r;let s,l="",d={};if(this.apiClient.isVertexAI()){const c=S0(e);return l=ve("{operationName}",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json()),s}else{const c=E0(e);return l=ve("{operationName}",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json()),s}}async fetchPredictVideosOperationInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI()){const l=h0(e);return r=ve("{resourceName}:fetchPredictOperation",l._url),s=l._query,delete l._url,delete l._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json()),o}else throw new Error("This method is only supported by the Vertex AI.")}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Ku(n){const e={};if(a(n,["languageCodes"])!==void 0)throw new Error("languageCodes parameter is not supported in Gemini API.");return e}function eM(n){const e={},t=a(n,["apiKey"]);if(t!=null&&u(e,["apiKey"],t),a(n,["apiKeyConfig"])!==void 0)throw new Error("apiKeyConfig parameter is not supported in Gemini API.");if(a(n,["authType"])!==void 0)throw new Error("authType parameter is not supported in Gemini API.");if(a(n,["googleServiceAccountConfig"])!==void 0)throw new Error("googleServiceAccountConfig parameter is not supported in Gemini API.");if(a(n,["httpBasicAuthConfig"])!==void 0)throw new Error("httpBasicAuthConfig parameter is not supported in Gemini API.");if(a(n,["oauthConfig"])!==void 0)throw new Error("oauthConfig parameter is not supported in Gemini API.");if(a(n,["oidcConfig"])!==void 0)throw new Error("oidcConfig parameter is not supported in Gemini API.");return e}function tM(n){const e={},t=a(n,["data"]);if(t!=null&&u(e,["data"],t),a(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const i=a(n,["mimeType"]);return i!=null&&u(e,["mimeType"],i),e}function nM(n){const e={},t=a(n,["parts"]);if(t!=null){let o=t;Array.isArray(o)&&(o=o.map(r=>dM(r))),u(e,["parts"],o)}const i=a(n,["role"]);return i!=null&&u(e,["role"],i),e}function iM(n,e,t){const i={},o=a(e,["expireTime"]);t!==void 0&&o!=null&&u(t,["expireTime"],o);const r=a(e,["newSessionExpireTime"]);t!==void 0&&r!=null&&u(t,["newSessionExpireTime"],r);const s=a(e,["uses"]);t!==void 0&&s!=null&&u(t,["uses"],s);const l=a(e,["liveConnectConstraints"]);t!==void 0&&l!=null&&u(t,["bidiGenerateContentSetup"],uM(n,l));const d=a(e,["lockAdditionalFields"]);return t!==void 0&&d!=null&&u(t,["fieldMask"],d),i}function oM(n,e){const t={},i=a(e,["config"]);return i!=null&&u(t,["config"],iM(n,i,t)),t}function rM(n){const e={};if(a(n,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const t=a(n,["fileUri"]);t!=null&&u(e,["fileUri"],t);const i=a(n,["mimeType"]);return i!=null&&u(e,["mimeType"],i),e}function sM(n){const e={},t=a(n,["id"]);t!=null&&u(e,["id"],t);const i=a(n,["args"]);i!=null&&u(e,["args"],i);const o=a(n,["name"]);if(o!=null&&u(e,["name"],o),a(n,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(a(n,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return e}function aM(n){const e={},t=a(n,["authConfig"]);t!=null&&u(e,["authConfig"],eM(t));const i=a(n,["enableWidget"]);return i!=null&&u(e,["enableWidget"],i),e}function lM(n){const e={},t=a(n,["searchTypes"]);if(t!=null&&u(e,["searchTypes"],t),a(n,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");if(a(n,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");const i=a(n,["timeRangeFilter"]);return i!=null&&u(e,["timeRangeFilter"],i),e}function cM(n,e){const t={},i=a(n,["generationConfig"]);e!==void 0&&i!=null&&u(e,["setup","generationConfig"],i);const o=a(n,["responseModalities"]);e!==void 0&&o!=null&&u(e,["setup","generationConfig","responseModalities"],o);const r=a(n,["temperature"]);e!==void 0&&r!=null&&u(e,["setup","generationConfig","temperature"],r);const s=a(n,["topP"]);e!==void 0&&s!=null&&u(e,["setup","generationConfig","topP"],s);const l=a(n,["topK"]);e!==void 0&&l!=null&&u(e,["setup","generationConfig","topK"],l);const d=a(n,["maxOutputTokens"]);e!==void 0&&d!=null&&u(e,["setup","generationConfig","maxOutputTokens"],d);const c=a(n,["mediaResolution"]);e!==void 0&&c!=null&&u(e,["setup","generationConfig","mediaResolution"],c);const f=a(n,["seed"]);e!==void 0&&f!=null&&u(e,["setup","generationConfig","seed"],f);const p=a(n,["speechConfig"]);e!==void 0&&p!=null&&u(e,["setup","generationConfig","speechConfig"],cl(p));const h=a(n,["thinkingConfig"]);e!==void 0&&h!=null&&u(e,["setup","generationConfig","thinkingConfig"],h);const m=a(n,["enableAffectiveDialog"]);e!==void 0&&m!=null&&u(e,["setup","generationConfig","enableAffectiveDialog"],m);const v=a(n,["systemInstruction"]);e!==void 0&&v!=null&&u(e,["setup","systemInstruction"],nM(kt(v)));const E=a(n,["tools"]);if(e!==void 0&&E!=null){let M=co(E);Array.isArray(M)&&(M=M.map(P=>hM(lo(P)))),u(e,["setup","tools"],M)}const g=a(n,["sessionResumption"]);e!==void 0&&g!=null&&u(e,["setup","sessionResumption"],fM(g));const _=a(n,["inputAudioTranscription"]);e!==void 0&&_!=null&&u(e,["setup","inputAudioTranscription"],Ku(_));const T=a(n,["outputAudioTranscription"]);e!==void 0&&T!=null&&u(e,["setup","outputAudioTranscription"],Ku(T));const A=a(n,["realtimeInputConfig"]);e!==void 0&&A!=null&&u(e,["setup","realtimeInputConfig"],A);const C=a(n,["contextWindowCompression"]);e!==void 0&&C!=null&&u(e,["setup","contextWindowCompression"],C);const w=a(n,["proactivity"]);if(e!==void 0&&w!=null&&u(e,["setup","proactivity"],w),a(n,["explicitVadSignal"])!==void 0)throw new Error("explicitVadSignal parameter is not supported in Gemini API.");return t}function uM(n,e){const t={},i=a(e,["model"]);i!=null&&u(t,["setup","model"],ut(n,i));const o=a(e,["config"]);return o!=null&&u(t,["config"],cM(o,t)),t}function dM(n){const e={},t=a(n,["mediaResolution"]);t!=null&&u(e,["mediaResolution"],t);const i=a(n,["codeExecutionResult"]);i!=null&&u(e,["codeExecutionResult"],i);const o=a(n,["executableCode"]);o!=null&&u(e,["executableCode"],o);const r=a(n,["fileData"]);r!=null&&u(e,["fileData"],rM(r));const s=a(n,["functionCall"]);s!=null&&u(e,["functionCall"],sM(s));const l=a(n,["functionResponse"]);l!=null&&u(e,["functionResponse"],l);const d=a(n,["inlineData"]);d!=null&&u(e,["inlineData"],tM(d));const c=a(n,["text"]);c!=null&&u(e,["text"],c);const f=a(n,["thought"]);f!=null&&u(e,["thought"],f);const p=a(n,["thoughtSignature"]);p!=null&&u(e,["thoughtSignature"],p);const h=a(n,["videoMetadata"]);h!=null&&u(e,["videoMetadata"],h);const m=a(n,["toolCall"]);m!=null&&u(e,["toolCall"],m);const v=a(n,["toolResponse"]);v!=null&&u(e,["toolResponse"],v);const E=a(n,["partMetadata"]);return E!=null&&u(e,["partMetadata"],E),e}function fM(n){const e={},t=a(n,["handle"]);if(t!=null&&u(e,["handle"],t),a(n,["transparent"])!==void 0)throw new Error("transparent parameter is not supported in Gemini API.");return e}function hM(n){const e={};if(a(n,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const t=a(n,["computerUse"]);t!=null&&u(e,["computerUse"],t);const i=a(n,["fileSearch"]);i!=null&&u(e,["fileSearch"],i);const o=a(n,["googleSearch"]);o!=null&&u(e,["googleSearch"],lM(o));const r=a(n,["googleMaps"]);r!=null&&u(e,["googleMaps"],aM(r));const s=a(n,["codeExecution"]);if(s!=null&&u(e,["codeExecution"],s),a(n,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const l=a(n,["functionDeclarations"]);if(l!=null){let p=l;Array.isArray(p)&&(p=p.map(h=>h)),u(e,["functionDeclarations"],p)}const d=a(n,["googleSearchRetrieval"]);if(d!=null&&u(e,["googleSearchRetrieval"],d),a(n,["parallelAiSearch"])!==void 0)throw new Error("parallelAiSearch parameter is not supported in Gemini API.");const c=a(n,["urlContext"]);c!=null&&u(e,["urlContext"],c);const f=a(n,["mcpServers"]);if(f!=null){let p=f;Array.isArray(p)&&(p=p.map(h=>h)),u(e,["mcpServers"],p)}return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function pM(n){const e=[];for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t)){const i=n[t];if(typeof i=="object"&&i!=null&&Object.keys(i).length>0){const o=Object.keys(i).map(r=>`${t}.${r}`);e.push(...o)}else e.push(t)}return e.join(",")}function mM(n,e){let t=null;const i=n.bidiGenerateContentSetup;if(typeof i=="object"&&i!==null&&"setup"in i){const r=i.setup;typeof r=="object"&&r!==null?(n.bidiGenerateContentSetup=r,t=r):delete n.bidiGenerateContentSetup}else i!==void 0&&delete n.bidiGenerateContentSetup;const o=n.fieldMask;if(t){const r=pM(t);if(Array.isArray(e==null?void 0:e.lockAdditionalFields)&&(e==null?void 0:e.lockAdditionalFields.length)===0)r?n.fieldMask=r:delete n.fieldMask;else if(e!=null&&e.lockAdditionalFields&&e.lockAdditionalFields.length>0&&o!==null&&Array.isArray(o)&&o.length>0){const s=["temperature","topK","topP","maxOutputTokens","responseModalities","seed","speechConfig"];let l=[];o.length>0&&(l=o.map(c=>s.includes(c)?`generationConfig.${c}`:c));const d=[];r&&d.push(r),l.length>0&&d.push(...l),d.length>0?n.fieldMask=d.join(","):delete n.fieldMask}else delete n.fieldMask}else o!==null&&Array.isArray(o)&&o.length>0?n.fieldMask=o.join(","):delete n.fieldMask;return n}class gM extends Zn{constructor(e){super(),this.apiClient=e}async create(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("The client.tokens.create method is only supported by the Gemini Developer API.");{const l=oM(this.apiClient,e);r=ve("auth_tokens",l._url),s=l._query,delete l.config,delete l._url,delete l._query;const d=mM(l,e.config);return o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(d),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(c=>c.json()),o.then(c=>c)}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function _M(n,e){const t={},i=a(n,["force"]);return e!==void 0&&i!=null&&u(e,["_query","force"],i),t}function vM(n){const e={},t=a(n,["name"]);t!=null&&u(e,["_url","name"],t);const i=a(n,["config"]);return i!=null&&_M(i,e),e}function yM(n){const e={},t=a(n,["name"]);return t!=null&&u(e,["_url","name"],t),e}function EM(n,e){const t={},i=a(n,["pageSize"]);e!==void 0&&i!=null&&u(e,["_query","pageSize"],i);const o=a(n,["pageToken"]);return e!==void 0&&o!=null&&u(e,["_query","pageToken"],o),t}function SM(n){const e={},t=a(n,["parent"]);t!=null&&u(e,["_url","parent"],t);const i=a(n,["config"]);return i!=null&&EM(i,e),e}function xM(n){const e={},t=a(n,["sdkHttpResponse"]);t!=null&&u(e,["sdkHttpResponse"],t);const i=a(n,["nextPageToken"]);i!=null&&u(e,["nextPageToken"],i);const o=a(n,["documents"]);if(o!=null){let r=o;Array.isArray(r)&&(r=r.map(s=>s)),u(e,["documents"],r)}return e}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class TM extends Zn{constructor(e){super(),this.apiClient=e,this.list=async t=>new Ri(Kn.PAGED_ITEM_DOCUMENTS,i=>this.listInternal({parent:t.parent,config:i.config}),await this.listInternal(t),t)}async get(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const l=yM(e);return r=ve("{name}",l._url),s=l._query,delete l._url,delete l._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(l),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json()),o.then(d=>d)}}async delete(e){var t,i;let o="",r={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const s=vM(e);o=ve("{name}",s._url),r=s._query,delete s._url,delete s._query,await this.apiClient.request({path:o,queryParams:r,body:JSON.stringify(s),httpMethod:"DELETE",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal})}}async listInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const l=SM(e);return r=ve("{parent}/documents",l._url),s=l._query,delete l._url,delete l._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(l),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json()),o.then(d=>{const c=xM(d),f=new N0;return Object.assign(f,c),f})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class MM extends Zn{constructor(e,t=new TM(e)){super(),this.apiClient=e,this.documents=t,this.list=async(i={})=>new Ri(Kn.PAGED_ITEM_FILE_SEARCH_STORES,o=>this.listInternal(o),await this.listInternal(i),i)}async uploadToFileSearchStore(e){if(this.apiClient.isVertexAI())throw new Error("Vertex AI does not support uploading files to a file search store.");return this.apiClient.uploadFileToFileSearchStore(e.fileSearchStoreName,e.file,e.config)}async create(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const l=dT(e);return r=ve("fileSearchStores",l._url),s=l._query,delete l._url,delete l._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json()),o.then(d=>d)}}async get(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const l=pT(e);return r=ve("{name}",l._url),s=l._query,delete l._url,delete l._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(l),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json()),o.then(d=>d)}}async delete(e){var t,i;let o="",r={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const s=hT(e);o=ve("{name}",s._url),r=s._query,delete s._url,delete s._query,await this.apiClient.request({path:o,queryParams:r,body:JSON.stringify(s),httpMethod:"DELETE",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal})}}async listInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const l=ET(e);return r=ve("fileSearchStores",l._url),s=l._query,delete l._url,delete l._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(l),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json()),o.then(d=>{const c=ST(d),f=new D0;return Object.assign(f,c),f})}}async uploadToFileSearchStoreInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const l=xT(e);return r=ve("upload/v1beta/{file_search_store_name}:uploadToFileSearchStore",l._url),s=l._query,delete l._url,delete l._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json()),o.then(d=>{const c=TT(d),f=new L0;return Object.assign(f,c),f})}}async importFile(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const l=_T(e);return r=ve("{file_search_store_name}:importFile",l._url),s=l._query,delete l._url,delete l._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json()),o.then(d=>{const c=gT(d),f=new ol;return Object.assign(f,c),f})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let pf=function(){const{crypto:n}=globalThis;if(n!=null&&n.randomUUID)return pf=n.randomUUID.bind(n),n.randomUUID();const e=new Uint8Array(1),t=n?()=>n.getRandomValues(e)[0]:()=>Math.random()*255&255;return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,i=>(+i^t()&15>>+i/4).toString(16))};const AM=()=>pf();/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Ba(n){return typeof n=="object"&&n!==null&&("name"in n&&n.name==="AbortError"||"message"in n&&String(n.message).includes("FetchRequestCanceledException"))}const ka=n=>{if(n instanceof Error)return n;if(typeof n=="object"&&n!==null){try{if(Object.prototype.toString.call(n)==="[object Error]"){const e=new Error(n.message,n.cause?{cause:n.cause}:{});return n.stack&&(e.stack=n.stack),n.cause&&!e.cause&&(e.cause=n.cause),n.name&&(e.name=n.name),e}}catch{}try{return new Error(JSON.stringify(n))}catch{}}return new Error(n)};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class dn extends Error{}class Kt extends dn{constructor(e,t,i,o){super(`${Kt.makeMessage(e,t,i)}`),this.status=e,this.headers=o,this.error=t}static makeMessage(e,t,i){const o=t!=null&&t.message?typeof t.message=="string"?t.message:JSON.stringify(t.message):t?JSON.stringify(t):i;return e&&o?`${e} ${o}`:e?`${e} status code (no body)`:o||"(no status code or body)"}static generate(e,t,i,o){if(!e||!o)return new zr({message:i,cause:ka(t)});const r=t;return e===400?new gf(e,r,i,o):e===401?new _f(e,r,i,o):e===403?new vf(e,r,i,o):e===404?new yf(e,r,i,o):e===409?new Ef(e,r,i,o):e===422?new Sf(e,r,i,o):e===429?new xf(e,r,i,o):e>=500?new Tf(e,r,i,o):new Kt(e,r,i,o)}}class Oa extends Kt{constructor({message:e}={}){super(void 0,void 0,e||"Request was aborted.",void 0)}}class zr extends Kt{constructor({message:e,cause:t}){super(void 0,void 0,e||"Connection error.",void 0),t&&(this.cause=t)}}class mf extends zr{constructor({message:e}={}){super({message:e??"Request timed out."})}}class gf extends Kt{}class _f extends Kt{}class vf extends Kt{}class yf extends Kt{}class Ef extends Kt{}class Sf extends Kt{}class xf extends Kt{}class Tf extends Kt{}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const CM=/^[a-z][a-z0-9+.-]*:/i,IM=n=>CM.test(n);let Ga=n=>(Ga=Array.isArray,Ga(n));const wM=Ga;let RM=wM;const Zu=RM;function Qu(n){if(!n)return!0;for(const e in n)return!1;return!0}function bM(n,e){return Object.prototype.hasOwnProperty.call(n,e)}const PM=(n,e)=>{if(typeof e!="number"||!Number.isInteger(e))throw new dn(`${n} must be an integer`);if(e<0)throw new dn(`${n} must be a positive integer`);return e},NM=n=>{try{return JSON.parse(n)}catch{return}};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const DM=n=>new Promise(e=>setTimeout(e,n));/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function LM(){if(typeof fetch<"u")return fetch;throw new Error("`fetch` is not defined as a global; Either pass `fetch` to the client, `new GeminiNextGenAPIClient({ fetch })` or polyfill the global, `globalThis.fetch = fetch`")}function Mf(...n){const e=globalThis.ReadableStream;if(typeof e>"u")throw new Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");return new e(...n)}function UM(n){let e=Symbol.asyncIterator in n?n[Symbol.asyncIterator]():n[Symbol.iterator]();return Mf({start(){},async pull(t){const{done:i,value:o}=await e.next();i?t.close():t.enqueue(o)},async cancel(){var t;await((t=e.return)===null||t===void 0?void 0:t.call(e))}})}function Af(n){if(n[Symbol.asyncIterator])return n;const e=n.getReader();return{async next(){try{const t=await e.read();return t!=null&&t.done&&e.releaseLock(),t}catch(t){throw e.releaseLock(),t}},async return(){const t=e.cancel();return e.releaseLock(),await t,{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}async function FM(n){var e,t;if(n===null||typeof n!="object")return;if(n[Symbol.asyncIterator]){await((t=(e=n[Symbol.asyncIterator]()).return)===null||t===void 0?void 0:t.call(e));return}const i=n.getReader(),o=i.cancel();i.releaseLock(),await o}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const BM=({headers:n,body:e})=>({bodyHeaders:{"content-type":"application/json"},body:JSON.stringify(e)});/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function kM(n){return Object.entries(n).filter(([e,t])=>typeof t<"u").map(([e,t])=>{if(typeof t=="string"||typeof t=="number"||typeof t=="boolean")return`${encodeURIComponent(e)}=${encodeURIComponent(t)}`;if(t===null)return`${encodeURIComponent(e)}=`;throw new dn(`Cannot stringify type ${typeof t}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`)}).join("&")}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const OM="0.0.1";/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Cf=()=>{var n;if(typeof File>"u"){const{process:e}=globalThis,t=typeof((n=e==null?void 0:e.versions)===null||n===void 0?void 0:n.node)=="string"&&parseInt(e.versions.node.split("."))<20;throw new Error("`File` is not defined as a global, which is required for file uploads."+(t?" Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`.":""))}};function bs(n,e,t){return Cf(),new File(n,e??"unknown_file",t)}function GM(n){return(typeof n=="object"&&n!==null&&("name"in n&&n.name&&String(n.name)||"url"in n&&n.url&&String(n.url)||"filename"in n&&n.filename&&String(n.filename)||"path"in n&&n.path&&String(n.path))||"").split(/[\\/]/).pop()||void 0}const VM=n=>n!=null&&typeof n=="object"&&typeof n[Symbol.asyncIterator]=="function";/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const If=n=>n!=null&&typeof n=="object"&&typeof n.size=="number"&&typeof n.type=="string"&&typeof n.text=="function"&&typeof n.slice=="function"&&typeof n.arrayBuffer=="function",HM=n=>n!=null&&typeof n=="object"&&typeof n.name=="string"&&typeof n.lastModified=="number"&&If(n),zM=n=>n!=null&&typeof n=="object"&&typeof n.url=="string"&&typeof n.blob=="function";async function WM(n,e,t){if(Cf(),n=await n,HM(n))return n instanceof File?n:bs([await n.arrayBuffer()],n.name);if(zM(n)){const o=await n.blob();return e||(e=new URL(n.url).pathname.split(/[\\/]/).pop()),bs(await Va(o),e,t)}const i=await Va(n);if(e||(e=GM(n)),!(t!=null&&t.type)){const o=i.find(r=>typeof r=="object"&&"type"in r&&r.type);typeof o=="string"&&(t=Object.assign(Object.assign({},t),{type:o}))}return bs(i,e,t)}async function Va(n){var e,t,i,o,r;let s=[];if(typeof n=="string"||ArrayBuffer.isView(n)||n instanceof ArrayBuffer)s.push(n);else if(If(n))s.push(n instanceof Blob?n:await n.arrayBuffer());else if(VM(n))try{for(var l=!0,d=xn(n),c;c=await d.next(),e=c.done,!e;l=!0){o=c.value,l=!1;const f=o;s.push(...await Va(f))}}catch(f){t={error:f}}finally{try{!l&&!e&&(i=d.return)&&await i.call(d)}finally{if(t)throw t.error}}else{const f=(r=n==null?void 0:n.constructor)===null||r===void 0?void 0:r.name;throw new Error(`Unexpected data type: ${typeof n}${f?`; constructor: ${f}`:""}${qM(n)}`)}return s}function qM(n){return typeof n!="object"||n===null?"":`; props: [${Object.getOwnPropertyNames(n).map(t=>`"${t}"`).join(", ")}]`}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class wf{constructor(e){this._client=e}}wf._key=[];/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Rf(n){return n.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g,encodeURIComponent)}const ju=Object.freeze(Object.create(null)),$M=(n=Rf)=>(function(t,...i){if(t.length===1)return t[0];let o=!1;const r=[],s=t.reduce((f,p,h)=>{var m,v,E;/[?#]/.test(p)&&(o=!0);const g=i[h];let _=(o?encodeURIComponent:n)(""+g);return h!==i.length&&(g==null||typeof g=="object"&&g.toString===((E=Object.getPrototypeOf((v=Object.getPrototypeOf((m=g.hasOwnProperty)!==null&&m!==void 0?m:ju))!==null&&v!==void 0?v:ju))===null||E===void 0?void 0:E.toString))&&(_=g+"",r.push({start:f.length+p.length,length:_.length,error:`Value of type ${Object.prototype.toString.call(g).slice(8,-1)} is not a valid path parameter`})),f+p+(h===i.length?"":_)},""),l=s.split(/[?#]/,1)[0],d=/(^|\/)(?:\.|%2e){1,2}(?=\/|$)/gi;let c;for(;(c=d.exec(l))!==null;){const f=c[0].startsWith("/"),p=f?1:0,h=f?c[0].slice(1):c[0];r.push({start:c.index+p,length:h.length,error:`Value "${h}" can't be safely passed as a path parameter`})}if(r.sort((f,p)=>f.start-p.start),r.length>0){let f=0;const p=r.reduce((h,m)=>{const v=" ".repeat(m.start-f),E="^".repeat(m.length);return f=m.start+m.length,h+v+E},"");throw new dn(`Path parameters result in path with invalid segments:
${r.map(h=>h.error).join(`
`)}
${s}
${p}`)}return s}),dr=$M(Rf);/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class bf extends wf{create(e,t){var i;const{api_version:o=this._client.apiVersion}=e,r=Nr(e,["api_version"]);if("model"in r&&"agent_config"in r)throw new dn("Invalid request: specified `model` and `agent_config`. If specifying `model`, use `generation_config`.");if("agent"in r&&"generation_config"in r)throw new dn("Invalid request: specified `agent` and `generation_config`. If specifying `agent`, use `agent_config`.");return this._client.post(dr`/${o}/interactions`,Object.assign(Object.assign({body:r},t),{stream:(i=e.stream)!==null&&i!==void 0?i:!1}))}delete(e,t={},i){const{api_version:o=this._client.apiVersion}=t??{};return this._client.delete(dr`/${o}/interactions/${e}`,i)}cancel(e,t={},i){const{api_version:o=this._client.apiVersion}=t??{};return this._client.post(dr`/${o}/interactions/${e}/cancel`,i)}get(e,t={},i){var o;const r=t??{},{api_version:s=this._client.apiVersion}=r,l=Nr(r,["api_version"]);return this._client.get(dr`/${s}/interactions/${e}`,Object.assign(Object.assign({query:l},i),{stream:(o=t==null?void 0:t.stream)!==null&&o!==void 0?o:!1}))}}bf._key=Object.freeze(["interactions"]);class Pf extends bf{}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function XM(n){let e=0;for(const o of n)e+=o.length;const t=new Uint8Array(e);let i=0;for(const o of n)t.set(o,i),i+=o.length;return t}let fr;function dl(n){let e;return(fr??(e=new globalThis.TextEncoder,fr=e.encode.bind(e)))(n)}let hr;function ed(n){let e;return(hr??(e=new globalThis.TextDecoder,hr=e.decode.bind(e)))(n)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Wr{constructor(){this.buffer=new Uint8Array,this.carriageReturnIndex=null,this.searchIndex=0}decode(e){var t;if(e==null)return[];const i=e instanceof ArrayBuffer?new Uint8Array(e):typeof e=="string"?dl(e):e;this.buffer=XM([this.buffer,i]);const o=[];let r;for(;(r=YM(this.buffer,(t=this.carriageReturnIndex)!==null&&t!==void 0?t:this.searchIndex))!=null;){if(r.carriage&&this.carriageReturnIndex==null){this.carriageReturnIndex=r.index;continue}if(this.carriageReturnIndex!=null&&(r.index!==this.carriageReturnIndex+1||r.carriage)){o.push(ed(this.buffer.subarray(0,this.carriageReturnIndex-1))),this.buffer=this.buffer.subarray(this.carriageReturnIndex),this.carriageReturnIndex=null,this.searchIndex=0;continue}const s=this.carriageReturnIndex!==null?r.preceding-1:r.preceding,l=ed(this.buffer.subarray(0,s));o.push(l),this.buffer=this.buffer.subarray(r.index),this.carriageReturnIndex=null,this.searchIndex=0}return this.searchIndex=Math.max(0,this.buffer.length-1),o}flush(){return this.buffer.length?this.decode(`
`):[]}}Wr.NEWLINE_CHARS=new Set([`
`,"\r"]);Wr.NEWLINE_REGEXP=/\r\n|[\n\r]/g;function YM(n,e){const o=e??0,r=n.indexOf(10,o),s=n.indexOf(13,o);if(r===-1&&s===-1)return null;let l;return r!==-1&&s!==-1?l=Math.min(r,s):l=r!==-1?r:s,n[l]===10?{preceding:l,index:l+1,carriage:!1}:{preceding:l,index:l+1,carriage:!0}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Dr={off:0,error:200,warn:300,info:400,debug:500},td=(n,e,t)=>{if(n){if(bM(Dr,n))return n;Yt(t).warn(`${e} was set to ${JSON.stringify(n)}, expected one of ${JSON.stringify(Object.keys(Dr))}`)}};function Io(){}function pr(n,e,t){return!e||Dr[n]>Dr[t]?Io:e[n].bind(e)}const JM={error:Io,warn:Io,info:Io,debug:Io};let nd=new WeakMap;function Yt(n){var e;const t=n.logger,i=(e=n.logLevel)!==null&&e!==void 0?e:"off";if(!t)return JM;const o=nd.get(t);if(o&&o[0]===i)return o[1];const r={error:pr("error",t,i),warn:pr("warn",t,i),info:pr("info",t,i),debug:pr("debug",t,i)};return nd.set(t,[i,r]),r}const Ti=n=>(n.options&&(n.options=Object.assign({},n.options),delete n.options.headers),n.headers&&(n.headers=Object.fromEntries((n.headers instanceof Headers?[...n.headers]:Object.entries(n.headers)).map(([e,t])=>[e,e.toLowerCase()==="x-goog-api-key"||e.toLowerCase()==="authorization"||e.toLowerCase()==="cookie"||e.toLowerCase()==="set-cookie"?"***":t]))),"retryOfRequestLogID"in n&&(n.retryOfRequestLogID&&(n.retryOf=n.retryOfRequestLogID),delete n.retryOfRequestLogID),n);/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Ji{constructor(e,t,i){this.iterator=e,this.controller=t,this.client=i}static fromSSEResponse(e,t,i){let o=!1;const r=i?Yt(i):console;function s(){return Sn(this,arguments,function*(){var d,c,f,p;if(o)throw new dn("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");o=!0;let h=!1;try{try{for(var m=!0,v=xn(KM(e,t)),E;E=yield $e(v.next()),d=E.done,!d;m=!0){p=E.value,m=!1;const g=p;if(!h)if(g.data.startsWith("[DONE]")){h=!0;continue}else try{yield yield $e(JSON.parse(g.data))}catch(_){throw r.error("Could not parse message into JSON:",g.data),r.error("From chunk:",g.raw),_}}}catch(g){c={error:g}}finally{try{!m&&!d&&(f=v.return)&&(yield $e(f.call(v)))}finally{if(c)throw c.error}}h=!0}catch(g){if(Ba(g))return yield $e(void 0);throw g}finally{h||t.abort()}})}return new Ji(s,t,i)}static fromReadableStream(e,t,i){let o=!1;function r(){return Sn(this,arguments,function*(){var d,c,f,p;const h=new Wr,m=Af(e);try{for(var v=!0,E=xn(m),g;g=yield $e(E.next()),d=g.done,!d;v=!0){p=g.value,v=!1;const _=p;for(const T of h.decode(_))yield yield $e(T)}}catch(_){c={error:_}}finally{try{!v&&!d&&(f=E.return)&&(yield $e(f.call(E)))}finally{if(c)throw c.error}}for(const _ of h.flush())yield yield $e(_)})}function s(){return Sn(this,arguments,function*(){var d,c,f,p;if(o)throw new dn("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");o=!0;let h=!1;try{try{for(var m=!0,v=xn(r()),E;E=yield $e(v.next()),d=E.done,!d;m=!0){p=E.value,m=!1;const g=p;h||g&&(yield yield $e(JSON.parse(g)))}}catch(g){c={error:g}}finally{try{!m&&!d&&(f=v.return)&&(yield $e(f.call(v)))}finally{if(c)throw c.error}}h=!0}catch(g){if(Ba(g))return yield $e(void 0);throw g}finally{h||t.abort()}})}return new Ji(s,t,i)}[Symbol.asyncIterator](){return this.iterator()}tee(){const e=[],t=[],i=this.iterator(),o=r=>({next:()=>{if(r.length===0){const s=i.next();e.push(s),t.push(s)}return r.shift()}});return[new Ji(()=>o(e),this.controller,this.client),new Ji(()=>o(t),this.controller,this.client)]}toReadableStream(){const e=this;let t;return Mf({async start(){t=e[Symbol.asyncIterator]()},async pull(i){try{const{value:o,done:r}=await t.next();if(r)return i.close();const s=dl(JSON.stringify(o)+`
`);i.enqueue(s)}catch(o){i.error(o)}},async cancel(){var i;await((i=t.return)===null||i===void 0?void 0:i.call(t))}})}}function KM(n,e){return Sn(this,arguments,function*(){var i,o,r,s;if(!n.body)throw e.abort(),typeof globalThis.navigator<"u"&&globalThis.navigator.product==="ReactNative"?new dn("The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api"):new dn("Attempted to iterate over a response with no body");const l=new QM,d=new Wr,c=Af(n.body);try{for(var f=!0,p=xn(ZM(c)),h;h=yield $e(p.next()),i=h.done,!i;f=!0){s=h.value,f=!1;const m=s;for(const v of d.decode(m)){const E=l.decode(v);E&&(yield yield $e(E))}}}catch(m){o={error:m}}finally{try{!f&&!i&&(r=p.return)&&(yield $e(r.call(p)))}finally{if(o)throw o.error}}for(const m of d.flush()){const v=l.decode(m);v&&(yield yield $e(v))}})}function ZM(n){return Sn(this,arguments,function*(){var t,i,o,r;try{for(var s=!0,l=xn(n),d;d=yield $e(l.next()),t=d.done,!t;s=!0){r=d.value,s=!1;const c=r;if(c==null)continue;const f=c instanceof ArrayBuffer?new Uint8Array(c):typeof c=="string"?dl(c):c;yield yield $e(f)}}catch(c){i={error:c}}finally{try{!s&&!t&&(o=l.return)&&(yield $e(o.call(l)))}finally{if(i)throw i.error}}})}class QM{constructor(){this.event=null,this.data=[],this.chunks=[]}decode(e){if(e.endsWith("\r")&&(e=e.substring(0,e.length-1)),!e){if(!this.event&&!this.data.length)return null;const r={event:this.event,data:this.data.join(`
`),raw:this.chunks};return this.event=null,this.data=[],this.chunks=[],r}if(this.chunks.push(e),e.startsWith(":"))return null;let[t,i,o]=jM(e,":");return o.startsWith(" ")&&(o=o.substring(1)),t==="event"?this.event=o:t==="data"&&this.data.push(o),null}}function jM(n,e){const t=n.indexOf(e);return t!==-1?[n.substring(0,t),e,n.substring(t+e.length)]:[n,"",""]}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */async function eA(n,e){const{response:t,requestLogID:i,retryOfRequestLogID:o,startTime:r}=e,s=await(async()=>{var l;if(e.options.stream)return Yt(n).debug("response",t.status,t.url,t.headers,t.body),e.options.__streamClass?e.options.__streamClass.fromSSEResponse(t,e.controller,n):Ji.fromSSEResponse(t,e.controller,n);if(t.status===204)return null;if(e.options.__binaryResponse)return t;const d=t.headers.get("content-type"),c=(l=d==null?void 0:d.split(";")[0])===null||l===void 0?void 0:l.trim();return(c==null?void 0:c.includes("application/json"))||(c==null?void 0:c.endsWith("+json"))?t.headers.get("content-length")==="0"?void 0:await t.json():await t.text()})();return Yt(n).debug(`[${i}] response parsed`,Ti({retryOfRequestLogID:o,url:t.url,status:t.status,body:s,durationMs:Date.now()-r})),s}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class fl extends Promise{constructor(e,t,i=eA){super(o=>{o(null)}),this.responsePromise=t,this.parseResponse=i,this.client=e}_thenUnwrap(e){return new fl(this.client,this.responsePromise,async(t,i)=>e(await this.parseResponse(t,i),i))}asResponse(){return this.responsePromise.then(e=>e.response)}async withResponse(){const[e,t]=await Promise.all([this.parse(),this.asResponse()]);return{data:e,response:t}}parse(){return this.parsedPromise||(this.parsedPromise=this.responsePromise.then(e=>this.parseResponse(this.client,e))),this.parsedPromise}then(e,t){return this.parse().then(e,t)}catch(e){return this.parse().catch(e)}finally(e){return this.parse().finally(e)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Nf=Symbol("brand.privateNullableHeaders");function*tA(n){if(!n)return;if(Nf in n){const{values:i,nulls:o}=n;yield*i.entries();for(const r of o)yield[r,null];return}let e=!1,t;n instanceof Headers?t=n.entries():Zu(n)?t=n:(e=!0,t=Object.entries(n??{}));for(let i of t){const o=i[0];if(typeof o!="string")throw new TypeError("expected header name to be a string");const r=Zu(i[1])?i[1]:[i[1]];let s=!1;for(const l of r)l!==void 0&&(e&&!s&&(s=!0,yield[o,null]),yield[o,l])}}const Mo=n=>{const e=new Headers,t=new Set;for(const i of n){const o=new Set;for(const[r,s]of tA(i)){const l=r.toLowerCase();o.has(l)||(e.delete(r),o.add(l)),s===null?(e.delete(r),t.add(l)):(e.append(r,s),t.delete(l))}}return{[Nf]:!0,values:e,nulls:t}};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ps=n=>{var e,t,i,o,r,s;if(typeof globalThis.process<"u")return(i=(t=(e=a0)===null||e===void 0?void 0:e[n])===null||t===void 0?void 0:t.trim())!==null&&i!==void 0?i:void 0;if(typeof globalThis.Deno<"u")return(s=(r=(o=globalThis.Deno.env)===null||o===void 0?void 0:o.get)===null||r===void 0?void 0:r.call(o,n))===null||s===void 0?void 0:s.trim()};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Df;class qr{constructor(e){var t,i,o,r,s,l,d,{baseURL:c=Ps("GEMINI_NEXT_GEN_API_BASE_URL"),apiKey:f=(t=Ps("GEMINI_API_KEY"))!==null&&t!==void 0?t:null,apiVersion:p="v1beta"}=e,h=Nr(e,["baseURL","apiKey","apiVersion"]);const m=Object.assign(Object.assign({apiKey:f,apiVersion:p},h),{baseURL:c||"https://generativelanguage.googleapis.com"});this.baseURL=m.baseURL,this.timeout=(i=m.timeout)!==null&&i!==void 0?i:qr.DEFAULT_TIMEOUT,this.logger=(o=m.logger)!==null&&o!==void 0?o:console;const v="warn";this.logLevel=v,this.logLevel=(s=(r=td(m.logLevel,"ClientOptions.logLevel",this))!==null&&r!==void 0?r:td(Ps("GEMINI_NEXT_GEN_API_LOG"),"process.env['GEMINI_NEXT_GEN_API_LOG']",this))!==null&&s!==void 0?s:v,this.fetchOptions=m.fetchOptions,this.maxRetries=(l=m.maxRetries)!==null&&l!==void 0?l:2,this.fetch=(d=m.fetch)!==null&&d!==void 0?d:LM(),this.encoder=BM,this._options=m,this.apiKey=f,this.apiVersion=p,this.clientAdapter=m.clientAdapter}withOptions(e){return new this.constructor(Object.assign(Object.assign(Object.assign({},this._options),{baseURL:this.baseURL,maxRetries:this.maxRetries,timeout:this.timeout,logger:this.logger,logLevel:this.logLevel,fetch:this.fetch,fetchOptions:this.fetchOptions,apiKey:this.apiKey,apiVersion:this.apiVersion}),e))}baseURLOverridden(){return this.baseURL!=="https://generativelanguage.googleapis.com"}defaultQuery(){return this._options.defaultQuery}validateHeaders({values:e,nulls:t}){if(!(e.has("authorization")||e.has("x-goog-api-key"))&&!(this.apiKey&&e.get("x-goog-api-key"))&&!t.has("x-goog-api-key"))throw new Error('Could not resolve authentication method. Expected the apiKey to be set. Or for the "x-goog-api-key" headers to be explicitly omitted')}async authHeaders(e){const t=Mo([e.headers]);if(!(t.values.has("authorization")||t.values.has("x-goog-api-key"))){if(this.apiKey)return Mo([{"x-goog-api-key":this.apiKey}]);if(this.clientAdapter.isVertexAI())return Mo([await this.clientAdapter.getAuthHeaders()])}}stringifyQuery(e){return kM(e)}getUserAgent(){return`${this.constructor.name}/JS ${OM}`}defaultIdempotencyKey(){return`stainless-node-retry-${AM()}`}makeStatusError(e,t,i,o){return Kt.generate(e,t,i,o)}buildURL(e,t,i){const o=!this.baseURLOverridden()&&i||this.baseURL,r=IM(e)?new URL(e):new URL(o+(o.endsWith("/")&&e.startsWith("/")?e.slice(1):e)),s=this.defaultQuery(),l=Object.fromEntries(r.searchParams);return(!Qu(s)||!Qu(l))&&(t=Object.assign(Object.assign(Object.assign({},l),s),t)),typeof t=="object"&&t&&!Array.isArray(t)&&(r.search=this.stringifyQuery(t)),r.toString()}async prepareOptions(e){if(this.clientAdapter&&this.clientAdapter.isVertexAI()&&!e.path.startsWith(`/${this.apiVersion}/projects/`)){const t=e.path.slice(this.apiVersion.length+1);e.path=`/${this.apiVersion}/projects/${this.clientAdapter.getProject()}/locations/${this.clientAdapter.getLocation()}${t}`}}async prepareRequest(e,{url:t,options:i}){}get(e,t){return this.methodRequest("get",e,t)}post(e,t){return this.methodRequest("post",e,t)}patch(e,t){return this.methodRequest("patch",e,t)}put(e,t){return this.methodRequest("put",e,t)}delete(e,t){return this.methodRequest("delete",e,t)}methodRequest(e,t,i){return this.request(Promise.resolve(i).then(o=>Object.assign({method:e,path:t},o)))}request(e,t=null){return new fl(this,this.makeRequest(e,t,void 0))}async makeRequest(e,t,i){var o,r,s;const l=await e,d=(o=l.maxRetries)!==null&&o!==void 0?o:this.maxRetries;t==null&&(t=d),await this.prepareOptions(l);const{req:c,url:f,timeout:p}=await this.buildRequest(l,{retryCount:d-t});await this.prepareRequest(c,{url:f,options:l});const h="log_"+(Math.random()*(1<<24)|0).toString(16).padStart(6,"0"),m=i===void 0?"":`, retryOf: ${i}`,v=Date.now();if(Yt(this).debug(`[${h}] sending request`,Ti({retryOfRequestLogID:i,method:l.method,url:f,options:l,headers:c.headers})),!((r=l.signal)===null||r===void 0)&&r.aborted)throw new Oa;const E=new AbortController,g=await this.fetchWithTimeout(f,c,p,E).catch(ka),_=Date.now();if(g instanceof globalThis.Error){const A=`retrying, ${t} attempts remaining`;if(!((s=l.signal)===null||s===void 0)&&s.aborted)throw new Oa;const C=Ba(g)||/timed? ?out/i.test(String(g)+("cause"in g?String(g.cause):""));if(t)return Yt(this).info(`[${h}] connection ${C?"timed out":"failed"} - ${A}`),Yt(this).debug(`[${h}] connection ${C?"timed out":"failed"} (${A})`,Ti({retryOfRequestLogID:i,url:f,durationMs:_-v,message:g.message})),this.retryRequest(l,t,i??h);throw Yt(this).info(`[${h}] connection ${C?"timed out":"failed"} - error; no more retries left`),Yt(this).debug(`[${h}] connection ${C?"timed out":"failed"} (error; no more retries left)`,Ti({retryOfRequestLogID:i,url:f,durationMs:_-v,message:g.message})),C?new mf:new zr({cause:g})}const T=`[${h}${m}] ${c.method} ${f} ${g.ok?"succeeded":"failed"} with status ${g.status} in ${_-v}ms`;if(!g.ok){const A=await this.shouldRetry(g);if(t&&A){const I=`retrying, ${t} attempts remaining`;return await FM(g.body),Yt(this).info(`${T} - ${I}`),Yt(this).debug(`[${h}] response error (${I})`,Ti({retryOfRequestLogID:i,url:g.url,status:g.status,headers:g.headers,durationMs:_-v})),this.retryRequest(l,t,i??h,g.headers)}const C=A?"error; no more retries left":"error; not retryable";Yt(this).info(`${T} - ${C}`);const w=await g.text().catch(I=>ka(I).message),M=NM(w),P=M?void 0:w;throw Yt(this).debug(`[${h}] response error (${C})`,Ti({retryOfRequestLogID:i,url:g.url,status:g.status,headers:g.headers,message:P,durationMs:Date.now()-v})),this.makeStatusError(g.status,M,P,g.headers)}return Yt(this).info(T),Yt(this).debug(`[${h}] response start`,Ti({retryOfRequestLogID:i,url:g.url,status:g.status,headers:g.headers,durationMs:_-v})),{response:g,options:l,controller:E,requestLogID:h,retryOfRequestLogID:i,startTime:v}}async fetchWithTimeout(e,t,i,o){const r=t||{},{signal:s,method:l}=r,d=Nr(r,["signal","method"]),c=this._makeAbort(o);s&&s.addEventListener("abort",c,{once:!0});const f=setTimeout(c,i),p=globalThis.ReadableStream&&d.body instanceof globalThis.ReadableStream||typeof d.body=="object"&&d.body!==null&&Symbol.asyncIterator in d.body,h=Object.assign(Object.assign(Object.assign({signal:o.signal},p?{duplex:"half"}:{}),{method:"GET"}),d);l&&(h.method=l.toUpperCase());try{return await this.fetch.call(void 0,e,h)}finally{clearTimeout(f)}}async shouldRetry(e){const t=e.headers.get("x-should-retry");return t==="true"?!0:t==="false"?!1:e.status===408||e.status===409||e.status===429||e.status>=500}async retryRequest(e,t,i,o){var r;let s;const l=o==null?void 0:o.get("retry-after-ms");if(l){const c=parseFloat(l);Number.isNaN(c)||(s=c)}const d=o==null?void 0:o.get("retry-after");if(d&&!s){const c=parseFloat(d);Number.isNaN(c)?s=Date.parse(d)-Date.now():s=c*1e3}if(s===void 0){const c=(r=e.maxRetries)!==null&&r!==void 0?r:this.maxRetries;s=this.calculateDefaultRetryTimeoutMillis(t,c)}return await DM(s),this.makeRequest(e,t-1,i)}calculateDefaultRetryTimeoutMillis(e,t){const r=t-e,s=Math.min(.5*Math.pow(2,r),8),l=1-Math.random()*.25;return s*l*1e3}async buildRequest(e,{retryCount:t=0}={}){var i,o,r;const s=Object.assign({},e),{method:l,path:d,query:c,defaultBaseURL:f}=s,p=this.buildURL(d,c,f);"timeout"in s&&PM("timeout",s.timeout),s.timeout=(i=s.timeout)!==null&&i!==void 0?i:this.timeout;const{bodyHeaders:h,body:m}=this.buildBody({options:s}),v=await this.buildHeaders({options:e,method:l,bodyHeaders:h,retryCount:t});return{req:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({method:l,headers:v},s.signal&&{signal:s.signal}),globalThis.ReadableStream&&m instanceof globalThis.ReadableStream&&{duplex:"half"}),m&&{body:m}),(o=this.fetchOptions)!==null&&o!==void 0?o:{}),(r=s.fetchOptions)!==null&&r!==void 0?r:{}),url:p,timeout:s.timeout}}async buildHeaders({options:e,method:t,bodyHeaders:i,retryCount:o}){let r={};this.idempotencyHeader&&t!=="get"&&(e.idempotencyKey||(e.idempotencyKey=this.defaultIdempotencyKey()),r[this.idempotencyHeader]=e.idempotencyKey);const s=await this.authHeaders(e);let l=Mo([r,{Accept:"application/json","User-Agent":this.getUserAgent()},this._options.defaultHeaders,i,e.headers,s]);return this.validateHeaders(l),l.values}_makeAbort(e){return()=>e.abort()}buildBody({options:{body:e,headers:t}}){if(!e)return{bodyHeaders:void 0,body:void 0};const i=Mo([t]);return ArrayBuffer.isView(e)||e instanceof ArrayBuffer||e instanceof DataView||typeof e=="string"&&i.values.has("content-type")||globalThis.Blob&&e instanceof globalThis.Blob||e instanceof FormData||e instanceof URLSearchParams||globalThis.ReadableStream&&e instanceof globalThis.ReadableStream?{bodyHeaders:void 0,body:e}:typeof e=="object"&&(Symbol.asyncIterator in e||Symbol.iterator in e&&"next"in e&&typeof e.next=="function")?{bodyHeaders:void 0,body:UM(e)}:typeof e=="object"&&i.values.get("content-type")==="application/x-www-form-urlencoded"?{bodyHeaders:{"content-type":"application/x-www-form-urlencoded"},body:this.stringifyQuery(e)}:this.encoder({body:e,headers:i})}}qr.DEFAULT_TIMEOUT=6e4;class Ot extends qr{constructor(){super(...arguments),this.interactions=new Pf(this)}}Df=Ot;Ot.GeminiNextGenAPIClient=Df;Ot.GeminiNextGenAPIClientError=dn;Ot.APIError=Kt;Ot.APIConnectionError=zr;Ot.APIConnectionTimeoutError=mf;Ot.APIUserAbortError=Oa;Ot.NotFoundError=yf;Ot.ConflictError=Ef;Ot.RateLimitError=xf;Ot.BadRequestError=gf;Ot.AuthenticationError=_f;Ot.InternalServerError=Tf;Ot.PermissionDeniedError=vf;Ot.UnprocessableEntityError=Sf;Ot.toFile=WM;Ot.Interactions=Pf;/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function nA(n,e){const t={},i=a(n,["name"]);return i!=null&&u(t,["_url","name"],i),t}function iA(n,e){const t={},i=a(n,["name"]);return i!=null&&u(t,["_url","name"],i),t}function oA(n,e){const t={},i=a(n,["sdkHttpResponse"]);return i!=null&&u(t,["sdkHttpResponse"],i),t}function rA(n,e){const t={},i=a(n,["sdkHttpResponse"]);return i!=null&&u(t,["sdkHttpResponse"],i),t}function sA(n,e,t){const i={};if(a(n,["validationDataset"])!==void 0)throw new Error("validationDataset parameter is not supported in Gemini API.");const o=a(n,["tunedModelDisplayName"]);if(e!==void 0&&o!=null&&u(e,["displayName"],o),a(n,["description"])!==void 0)throw new Error("description parameter is not supported in Gemini API.");const r=a(n,["epochCount"]);e!==void 0&&r!=null&&u(e,["tuningTask","hyperparameters","epochCount"],r);const s=a(n,["learningRateMultiplier"]);if(s!=null&&u(i,["tuningTask","hyperparameters","learningRateMultiplier"],s),a(n,["exportLastCheckpointOnly"])!==void 0)throw new Error("exportLastCheckpointOnly parameter is not supported in Gemini API.");if(a(n,["preTunedModelCheckpointId"])!==void 0)throw new Error("preTunedModelCheckpointId parameter is not supported in Gemini API.");if(a(n,["adapterSize"])!==void 0)throw new Error("adapterSize parameter is not supported in Gemini API.");if(a(n,["tuningMode"])!==void 0)throw new Error("tuningMode parameter is not supported in Gemini API.");if(a(n,["customBaseModel"])!==void 0)throw new Error("customBaseModel parameter is not supported in Gemini API.");const l=a(n,["batchSize"]);e!==void 0&&l!=null&&u(e,["tuningTask","hyperparameters","batchSize"],l);const d=a(n,["learningRate"]);if(e!==void 0&&d!=null&&u(e,["tuningTask","hyperparameters","learningRate"],d),a(n,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");if(a(n,["beta"])!==void 0)throw new Error("beta parameter is not supported in Gemini API.");if(a(n,["baseTeacherModel"])!==void 0)throw new Error("baseTeacherModel parameter is not supported in Gemini API.");if(a(n,["tunedTeacherModelSource"])!==void 0)throw new Error("tunedTeacherModelSource parameter is not supported in Gemini API.");if(a(n,["sftLossWeightMultiplier"])!==void 0)throw new Error("sftLossWeightMultiplier parameter is not supported in Gemini API.");if(a(n,["outputUri"])!==void 0)throw new Error("outputUri parameter is not supported in Gemini API.");if(a(n,["encryptionSpec"])!==void 0)throw new Error("encryptionSpec parameter is not supported in Gemini API.");return i}function aA(n,e,t){const i={};let o=a(t,["config","method"]);if(o===void 0&&(o="SUPERVISED_FINE_TUNING"),o==="SUPERVISED_FINE_TUNING"){const M=a(n,["validationDataset"]);e!==void 0&&M!=null&&u(e,["supervisedTuningSpec"],Ns(M))}else if(o==="PREFERENCE_TUNING"){const M=a(n,["validationDataset"]);e!==void 0&&M!=null&&u(e,["preferenceOptimizationSpec"],Ns(M))}else if(o==="DISTILLATION"){const M=a(n,["validationDataset"]);e!==void 0&&M!=null&&u(e,["distillationSpec"],Ns(M))}const r=a(n,["tunedModelDisplayName"]);e!==void 0&&r!=null&&u(e,["tunedModelDisplayName"],r);const s=a(n,["description"]);e!==void 0&&s!=null&&u(e,["description"],s);let l=a(t,["config","method"]);if(l===void 0&&(l="SUPERVISED_FINE_TUNING"),l==="SUPERVISED_FINE_TUNING"){const M=a(n,["epochCount"]);e!==void 0&&M!=null&&u(e,["supervisedTuningSpec","hyperParameters","epochCount"],M)}else if(l==="PREFERENCE_TUNING"){const M=a(n,["epochCount"]);e!==void 0&&M!=null&&u(e,["preferenceOptimizationSpec","hyperParameters","epochCount"],M)}else if(l==="DISTILLATION"){const M=a(n,["epochCount"]);e!==void 0&&M!=null&&u(e,["distillationSpec","hyperParameters","epochCount"],M)}let d=a(t,["config","method"]);if(d===void 0&&(d="SUPERVISED_FINE_TUNING"),d==="SUPERVISED_FINE_TUNING"){const M=a(n,["learningRateMultiplier"]);e!==void 0&&M!=null&&u(e,["supervisedTuningSpec","hyperParameters","learningRateMultiplier"],M)}else if(d==="PREFERENCE_TUNING"){const M=a(n,["learningRateMultiplier"]);e!==void 0&&M!=null&&u(e,["preferenceOptimizationSpec","hyperParameters","learningRateMultiplier"],M)}else if(d==="DISTILLATION"){const M=a(n,["learningRateMultiplier"]);e!==void 0&&M!=null&&u(e,["distillationSpec","hyperParameters","learningRateMultiplier"],M)}let c=a(t,["config","method"]);if(c===void 0&&(c="SUPERVISED_FINE_TUNING"),c==="SUPERVISED_FINE_TUNING"){const M=a(n,["exportLastCheckpointOnly"]);e!==void 0&&M!=null&&u(e,["supervisedTuningSpec","exportLastCheckpointOnly"],M)}else if(c==="PREFERENCE_TUNING"){const M=a(n,["exportLastCheckpointOnly"]);e!==void 0&&M!=null&&u(e,["preferenceOptimizationSpec","exportLastCheckpointOnly"],M)}else if(c==="DISTILLATION"){const M=a(n,["exportLastCheckpointOnly"]);e!==void 0&&M!=null&&u(e,["distillationSpec","exportLastCheckpointOnly"],M)}let f=a(t,["config","method"]);if(f===void 0&&(f="SUPERVISED_FINE_TUNING"),f==="SUPERVISED_FINE_TUNING"){const M=a(n,["adapterSize"]);e!==void 0&&M!=null&&u(e,["supervisedTuningSpec","hyperParameters","adapterSize"],M)}else if(f==="PREFERENCE_TUNING"){const M=a(n,["adapterSize"]);e!==void 0&&M!=null&&u(e,["preferenceOptimizationSpec","hyperParameters","adapterSize"],M)}else if(f==="DISTILLATION"){const M=a(n,["adapterSize"]);e!==void 0&&M!=null&&u(e,["distillationSpec","hyperParameters","adapterSize"],M)}let p=a(t,["config","method"]);if(p===void 0&&(p="SUPERVISED_FINE_TUNING"),p==="SUPERVISED_FINE_TUNING"){const M=a(n,["tuningMode"]);e!==void 0&&M!=null&&u(e,["supervisedTuningSpec","tuningMode"],M)}else if(p==="DISTILLATION"){const M=a(n,["tuningMode"]);e!==void 0&&M!=null&&u(e,["distillationSpec","tuningMode"],M)}const h=a(n,["customBaseModel"]);e!==void 0&&h!=null&&u(e,["customBaseModel"],h);let m=a(t,["config","method"]);if(m===void 0&&(m="SUPERVISED_FINE_TUNING"),m==="SUPERVISED_FINE_TUNING"){const M=a(n,["batchSize"]);e!==void 0&&M!=null&&u(e,["supervisedTuningSpec","hyperParameters","batchSize"],M)}else if(m==="DISTILLATION"){const M=a(n,["batchSize"]);e!==void 0&&M!=null&&u(e,["distillationSpec","hyperParameters","batchSize"],M)}let v=a(t,["config","method"]);if(v===void 0&&(v="SUPERVISED_FINE_TUNING"),v==="SUPERVISED_FINE_TUNING"){const M=a(n,["learningRate"]);e!==void 0&&M!=null&&u(e,["supervisedTuningSpec","hyperParameters","learningRate"],M)}else if(v==="DISTILLATION"){const M=a(n,["learningRate"]);e!==void 0&&M!=null&&u(e,["distillationSpec","hyperParameters","learningRate"],M)}const E=a(n,["labels"]);e!==void 0&&E!=null&&u(e,["labels"],E);const g=a(n,["beta"]);e!==void 0&&g!=null&&u(e,["preferenceOptimizationSpec","hyperParameters","beta"],g);const _=a(n,["baseTeacherModel"]);e!==void 0&&_!=null&&u(e,["distillationSpec","baseTeacherModel"],_);const T=a(n,["tunedTeacherModelSource"]);e!==void 0&&T!=null&&u(e,["distillationSpec","tunedTeacherModelSource"],T);const A=a(n,["sftLossWeightMultiplier"]);e!==void 0&&A!=null&&u(e,["distillationSpec","hyperParameters","sftLossWeightMultiplier"],A);const C=a(n,["outputUri"]);e!==void 0&&C!=null&&u(e,["outputUri"],C);const w=a(n,["encryptionSpec"]);return e!==void 0&&w!=null&&u(e,["encryptionSpec"],w),i}function lA(n,e){const t={},i=a(n,["baseModel"]);i!=null&&u(t,["baseModel"],i);const o=a(n,["preTunedModel"]);o!=null&&u(t,["preTunedModel"],o);const r=a(n,["trainingDataset"]);r!=null&&yA(r);const s=a(n,["config"]);return s!=null&&sA(s,t),t}function cA(n,e){const t={},i=a(n,["baseModel"]);i!=null&&u(t,["baseModel"],i);const o=a(n,["preTunedModel"]);o!=null&&u(t,["preTunedModel"],o);const r=a(n,["trainingDataset"]);r!=null&&EA(r,t,e);const s=a(n,["config"]);return s!=null&&aA(s,t,e),t}function uA(n,e){const t={},i=a(n,["name"]);return i!=null&&u(t,["_url","name"],i),t}function dA(n,e){const t={},i=a(n,["name"]);return i!=null&&u(t,["_url","name"],i),t}function fA(n,e,t){const i={},o=a(n,["pageSize"]);e!==void 0&&o!=null&&u(e,["_query","pageSize"],o);const r=a(n,["pageToken"]);e!==void 0&&r!=null&&u(e,["_query","pageToken"],r);const s=a(n,["filter"]);return e!==void 0&&s!=null&&u(e,["_query","filter"],s),i}function hA(n,e,t){const i={},o=a(n,["pageSize"]);e!==void 0&&o!=null&&u(e,["_query","pageSize"],o);const r=a(n,["pageToken"]);e!==void 0&&r!=null&&u(e,["_query","pageToken"],r);const s=a(n,["filter"]);return e!==void 0&&s!=null&&u(e,["_query","filter"],s),i}function pA(n,e){const t={},i=a(n,["config"]);return i!=null&&fA(i,t),t}function mA(n,e){const t={},i=a(n,["config"]);return i!=null&&hA(i,t),t}function gA(n,e){const t={},i=a(n,["sdkHttpResponse"]);i!=null&&u(t,["sdkHttpResponse"],i);const o=a(n,["nextPageToken"]);o!=null&&u(t,["nextPageToken"],o);const r=a(n,["tunedModels"]);if(r!=null){let s=r;Array.isArray(s)&&(s=s.map(l=>Lf(l))),u(t,["tuningJobs"],s)}return t}function _A(n,e){const t={},i=a(n,["sdkHttpResponse"]);i!=null&&u(t,["sdkHttpResponse"],i);const o=a(n,["nextPageToken"]);o!=null&&u(t,["nextPageToken"],o);const r=a(n,["tuningJobs"]);if(r!=null){let s=r;Array.isArray(s)&&(s=s.map(l=>Ha(l))),u(t,["tuningJobs"],s)}return t}function vA(n,e){const t={},i=a(n,["name"]);i!=null&&u(t,["model"],i);const o=a(n,["name"]);return o!=null&&u(t,["endpoint"],o),t}function yA(n,e){const t={};if(a(n,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");if(a(n,["vertexDatasetResource"])!==void 0)throw new Error("vertexDatasetResource parameter is not supported in Gemini API.");const i=a(n,["examples"]);if(i!=null){let o=i;Array.isArray(o)&&(o=o.map(r=>r)),u(t,["examples","examples"],o)}return t}function EA(n,e,t){const i={};let o=a(t,["config","method"]);if(o===void 0&&(o="SUPERVISED_FINE_TUNING"),o==="SUPERVISED_FINE_TUNING"){const s=a(n,["gcsUri"]);e!==void 0&&s!=null&&u(e,["supervisedTuningSpec","trainingDatasetUri"],s)}else if(o==="PREFERENCE_TUNING"){const s=a(n,["gcsUri"]);e!==void 0&&s!=null&&u(e,["preferenceOptimizationSpec","trainingDatasetUri"],s)}else if(o==="DISTILLATION"){const s=a(n,["gcsUri"]);e!==void 0&&s!=null&&u(e,["distillationSpec","promptDatasetUri"],s)}let r=a(t,["config","method"]);if(r===void 0&&(r="SUPERVISED_FINE_TUNING"),r==="SUPERVISED_FINE_TUNING"){const s=a(n,["vertexDatasetResource"]);e!==void 0&&s!=null&&u(e,["supervisedTuningSpec","trainingDatasetUri"],s)}else if(r==="PREFERENCE_TUNING"){const s=a(n,["vertexDatasetResource"]);e!==void 0&&s!=null&&u(e,["preferenceOptimizationSpec","trainingDatasetUri"],s)}else if(r==="DISTILLATION"){const s=a(n,["vertexDatasetResource"]);e!==void 0&&s!=null&&u(e,["distillationSpec","promptDatasetUri"],s)}if(a(n,["examples"])!==void 0)throw new Error("examples parameter is not supported in Vertex AI.");return i}function Lf(n,e){const t={},i=a(n,["sdkHttpResponse"]);i!=null&&u(t,["sdkHttpResponse"],i);const o=a(n,["name"]);o!=null&&u(t,["name"],o);const r=a(n,["state"]);r!=null&&u(t,["state"],qd(r));const s=a(n,["createTime"]);s!=null&&u(t,["createTime"],s);const l=a(n,["tuningTask","startTime"]);l!=null&&u(t,["startTime"],l);const d=a(n,["tuningTask","completeTime"]);d!=null&&u(t,["endTime"],d);const c=a(n,["updateTime"]);c!=null&&u(t,["updateTime"],c);const f=a(n,["description"]);f!=null&&u(t,["description"],f);const p=a(n,["baseModel"]);p!=null&&u(t,["baseModel"],p);const h=a(n,["_self"]);return h!=null&&u(t,["tunedModel"],vA(h)),t}function Ha(n,e){const t={},i=a(n,["sdkHttpResponse"]);i!=null&&u(t,["sdkHttpResponse"],i);const o=a(n,["name"]);o!=null&&u(t,["name"],o);const r=a(n,["state"]);r!=null&&u(t,["state"],qd(r));const s=a(n,["createTime"]);s!=null&&u(t,["createTime"],s);const l=a(n,["startTime"]);l!=null&&u(t,["startTime"],l);const d=a(n,["endTime"]);d!=null&&u(t,["endTime"],d);const c=a(n,["updateTime"]);c!=null&&u(t,["updateTime"],c);const f=a(n,["error"]);f!=null&&u(t,["error"],f);const p=a(n,["description"]);p!=null&&u(t,["description"],p);const h=a(n,["baseModel"]);h!=null&&u(t,["baseModel"],h);const m=a(n,["tunedModel"]);m!=null&&u(t,["tunedModel"],m);const v=a(n,["preTunedModel"]);v!=null&&u(t,["preTunedModel"],v);const E=a(n,["supervisedTuningSpec"]);E!=null&&u(t,["supervisedTuningSpec"],E);const g=a(n,["preferenceOptimizationSpec"]);g!=null&&u(t,["preferenceOptimizationSpec"],g);const _=a(n,["distillationSpec"]);_!=null&&u(t,["distillationSpec"],_);const T=a(n,["tuningDataStats"]);T!=null&&u(t,["tuningDataStats"],T);const A=a(n,["encryptionSpec"]);A!=null&&u(t,["encryptionSpec"],A);const C=a(n,["partnerModelTuningSpec"]);C!=null&&u(t,["partnerModelTuningSpec"],C);const w=a(n,["customBaseModel"]);w!=null&&u(t,["customBaseModel"],w);const M=a(n,["evaluateDatasetRuns"]);if(M!=null){let re=M;Array.isArray(re)&&(re=re.map(ie=>ie)),u(t,["evaluateDatasetRuns"],re)}const P=a(n,["experiment"]);P!=null&&u(t,["experiment"],P);const S=a(n,["fullFineTuningSpec"]);S!=null&&u(t,["fullFineTuningSpec"],S);const I=a(n,["labels"]);I!=null&&u(t,["labels"],I);const W=a(n,["outputUri"]);W!=null&&u(t,["outputUri"],W);const N=a(n,["pipelineJob"]);N!=null&&u(t,["pipelineJob"],N);const H=a(n,["serviceAccount"]);H!=null&&u(t,["serviceAccount"],H);const V=a(n,["tunedModelDisplayName"]);V!=null&&u(t,["tunedModelDisplayName"],V);const X=a(n,["tuningJobState"]);X!=null&&u(t,["tuningJobState"],X);const G=a(n,["veoTuningSpec"]);G!=null&&u(t,["veoTuningSpec"],G);const q=a(n,["distillationSamplingSpec"]);q!=null&&u(t,["distillationSamplingSpec"],q);const O=a(n,["tuningJobMetadata"]);return O!=null&&u(t,["tuningJobMetadata"],O),t}function SA(n,e){const t={},i=a(n,["sdkHttpResponse"]);i!=null&&u(t,["sdkHttpResponse"],i);const o=a(n,["name"]);o!=null&&u(t,["name"],o);const r=a(n,["metadata"]);r!=null&&u(t,["metadata"],r);const s=a(n,["done"]);s!=null&&u(t,["done"],s);const l=a(n,["error"]);return l!=null&&u(t,["error"],l),t}function Ns(n,e){const t={},i=a(n,["gcsUri"]);i!=null&&u(t,["validationDatasetUri"],i);const o=a(n,["vertexDatasetResource"]);return o!=null&&u(t,["validationDatasetUri"],o),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class xA extends Zn{constructor(e){super(),this.apiClient=e,this.list=async(t={})=>new Ri(Kn.PAGED_ITEM_TUNING_JOBS,i=>this.listInternal(i),await this.listInternal(t),t),this.get=async t=>await this.getInternal(t),this.tune=async t=>{var i;if(this.apiClient.isVertexAI())if(t.baseModel.startsWith("projects/")){const o={tunedModelName:t.baseModel};!((i=t.config)===null||i===void 0)&&i.preTunedModelCheckpointId&&(o.checkpointId=t.config.preTunedModelCheckpointId);const r=Object.assign(Object.assign({},t),{preTunedModel:o});return r.baseModel=void 0,await this.tuneInternal(r)}else{const o=Object.assign({},t);return await this.tuneInternal(o)}else{const o=Object.assign({},t),r=await this.tuneMldevInternal(o);let s="";return r.metadata!==void 0&&r.metadata.tunedModel!==void 0?s=r.metadata.tunedModel:r.name!==void 0&&r.name.includes("/operations/")&&(s=r.name.split("/operations/")[0]),{name:s,state:Ra.JOB_STATE_QUEUED}}}}async getInternal(e){var t,i,o,r;let s,l="",d={};if(this.apiClient.isVertexAI()){const c=dA(e);return l=ve("{name}",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>Ha(f))}else{const c=uA(e);return l=ve("{name}",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>Lf(f))}}async listInternal(e){var t,i,o,r;let s,l="",d={};if(this.apiClient.isVertexAI()){const c=mA(e);return l=ve("tuningJobs",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=_A(f),h=new Iu;return Object.assign(h,p),h})}else{const c=pA(e);return l=ve("tunedModels",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"GET",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=gA(f),h=new Iu;return Object.assign(h,p),h})}}async cancel(e){var t,i,o,r;let s,l="",d={};if(this.apiClient.isVertexAI()){const c=iA(e);return l=ve("{name}:cancel",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=rA(f),h=new wu;return Object.assign(h,p),h})}else{const c=nA(e);return l=ve("{name}:cancel",c._url),d=c._query,delete c._url,delete c._query,s=this.apiClient.request({path:l,queryParams:d,body:JSON.stringify(c),httpMethod:"POST",httpOptions:(o=e.config)===null||o===void 0?void 0:o.httpOptions,abortSignal:(r=e.config)===null||r===void 0?void 0:r.abortSignal}).then(f=>f.json().then(p=>{const h=p;return h.sdkHttpResponse={headers:f.headers},h})),s.then(f=>{const p=oA(f),h=new wu;return Object.assign(h,p),h})}}async tuneInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI()){const l=cA(e,e);return r=ve("tuningJobs",l._url),s=l._query,delete l._url,delete l._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json().then(c=>{const f=c;return f.sdkHttpResponse={headers:d.headers},f})),o.then(d=>Ha(d))}else throw new Error("This method is only supported by the Vertex AI.")}async tuneMldevInternal(e){var t,i;let o,r="",s={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const l=lA(e);return r=ve("tunedModels",l._url),s=l._query,delete l._url,delete l._query,o=this.apiClient.request({path:r,queryParams:s,body:JSON.stringify(l),httpMethod:"POST",httpOptions:(t=e.config)===null||t===void 0?void 0:t.httpOptions,abortSignal:(i=e.config)===null||i===void 0?void 0:i.abortSignal}).then(d=>d.json().then(c=>{const f=c;return f.sdkHttpResponse={headers:d.headers},f})),o.then(d=>SA(d))}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class TA{async download(e,t){throw new Error("Download to file is not supported in the browser, please use a browser compliant download like an <a> tag.")}}const MA=1024*1024*8,AA=3,CA=1e3,IA=2,Lr="x-goog-upload-status";async function wA(n,e,t,i){var o;const r=await Uf(n,e,t,i),s=await(r==null?void 0:r.json());if(((o=r==null?void 0:r.headers)===null||o===void 0?void 0:o[Lr])!=="final")throw new Error("Failed to upload file: Upload status is not finalized.");return s.file}async function RA(n,e,t,i){var o;const r=await Uf(n,e,t,i),s=await(r==null?void 0:r.json());if(((o=r==null?void 0:r.headers)===null||o===void 0?void 0:o[Lr])!=="final")throw new Error("Failed to upload file: Upload status is not finalized.");const l=Od(s),d=new rl;return Object.assign(d,l),d}async function Uf(n,e,t,i){var o,r,s;let l=e;const d=(i==null?void 0:i.baseUrl)||((o=t.clientOptions.httpOptions)===null||o===void 0?void 0:o.baseUrl);if(d){const m=new URL(d),v=new URL(e);v.protocol=m.protocol,v.host=m.host,v.port=m.port,l=v.toString()}let c=0,f=0,p=new Pa(new Response),h="upload";for(c=n.size;f<c;){const m=Math.min(MA,c-f),v=n.slice(f,f+m);f+m>=c&&(h+=", finalize");let E=0,g=CA;for(;E<AA;){const _=Object.assign(Object.assign({},(i==null?void 0:i.headers)||{}),{"X-Goog-Upload-Command":h,"X-Goog-Upload-Offset":String(f),"Content-Length":String(m)});if(p=await t.request({path:"",body:v,httpMethod:"POST",httpOptions:Object.assign(Object.assign({},i),{apiVersion:"",baseUrl:l,headers:_})}),!((r=p==null?void 0:p.headers)===null||r===void 0)&&r[Lr])break;E++,await PA(g),g=g*IA}if(f+=m,((s=p==null?void 0:p.headers)===null||s===void 0?void 0:s[Lr])!=="active")break;if(c<=f)throw new Error("All content has been uploaded, but the upload status is not finalized.")}return p}async function bA(n){return{size:n.size,type:n.type}}function PA(n){return new Promise(e=>setTimeout(e,n))}class NA{async upload(e,t,i,o){if(typeof e=="string")throw new Error("File path is not supported in browser uploader.");return await wA(e,t,i,o)}async uploadToFileSearchStore(e,t,i,o){if(typeof e=="string")throw new Error("File path is not supported in browser uploader.");return await RA(e,t,i,o)}async stat(e){if(typeof e=="string")throw new Error("File path is not supported in browser uploader.");return await bA(e)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class DA{create(e,t,i){return new LA(e,t,i)}}class LA{constructor(e,t,i){this.url=e,this.headers=t,this.callbacks=i}connect(){this.ws=new WebSocket(this.url),this.ws.onopen=this.callbacks.onopen,this.ws.onerror=this.callbacks.onerror,this.ws.onclose=this.callbacks.onclose,this.ws.onmessage=this.callbacks.onmessage}send(e){if(this.ws===void 0)throw new Error("WebSocket is not connected");this.ws.send(e)}close(){if(this.ws===void 0)throw new Error("WebSocket is not connected");this.ws.close()}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const id="x-goog-api-key";class UA{constructor(e){this.apiKey=e}async addAuthHeaders(e,t){if(e.get(id)===null){if(this.apiKey.startsWith("auth_tokens/"))throw new Error("Ephemeral tokens are only supported by the live API.");if(!this.apiKey)throw new Error("API key is missing. Please provide a valid API key.");e.append(id,this.apiKey)}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const FA="gl-node/";class Ff{get interactions(){var e;if(this._interactions!==void 0)return this._interactions;console.warn("GoogleGenAI.interactions: Interactions usage is experimental and may change in future versions.");const t=this.httpOptions;t!=null&&t.extraBody&&console.warn("GoogleGenAI.interactions: Client level httpOptions.extraBody is not supported by the interactions client and will be ignored.");const i=new Ot({baseURL:this.apiClient.getBaseUrl(),apiKey:this.apiKey,apiVersion:this.apiClient.getApiVersion(),clientAdapter:this.apiClient,defaultHeaders:this.apiClient.getDefaultHeaders(),timeout:t==null?void 0:t.timeout,maxRetries:(e=t==null?void 0:t.retryOptions)===null||e===void 0?void 0:e.attempts});return this._interactions=i.interactions,this._interactions}constructor(e){var t;if(e.apiKey==null)throw new Error("An API Key must be set when running in a browser");if(e.project||e.location)throw new Error("Vertex AI project based authentication is not supported on browser runtimes. Please do not provide a project or location.");this.vertexai=(t=e.vertexai)!==null&&t!==void 0?t:!1,this.apiKey=e.apiKey;const i=d0(e.httpOptions,e.vertexai,void 0,void 0);i&&(e.httpOptions?e.httpOptions.baseUrl=i:e.httpOptions={baseUrl:i}),this.apiVersion=e.apiVersion,this.httpOptions=e.httpOptions;const o=new UA(this.apiKey);this.apiClient=new DT({auth:o,apiVersion:this.apiVersion,apiKey:this.apiKey,vertexai:this.vertexai,httpOptions:this.httpOptions,userAgentExtra:FA+"web",uploader:new NA,downloader:new TA}),this.models=new QT(this.apiClient),this.live=new $T(this.apiClient,o,new DA),this.batches=new zy(this.apiClient),this.chats=new IE(this.models,this.apiClient),this.caches=new ME(this.apiClient),this.files=new OE(this.apiClient),this.operations=new jT(this.apiClient),this.authTokens=new gM(this.apiClient),this.tunings=new xA(this.apiClient),this.fileSearchStores=new MM(this.apiClient)}}var Bf={};const BA=()=>{console.log("AI Consultation initializing via server-side bridge...");const n=document.createElement("div");n.className="ai-chat-btn",n.innerHTML='<i data-lucide="message-square"></i>',document.body.appendChild(n);const e=document.createElement("div");e.className="ai-chat-window",e.innerHTML=`
        <div class="ai-chat-header">
            <div class="ai-chat-title">
                <i data-lucide="sparkles"></i>
                <span>AI Evolution Consultant</span>
            </div>
            <button class="ai-chat-close"><i data-lucide="x"></i></button>
        </div>
        <div class="ai-chat-messages">
            <div class="ai-message bot">
                Greetings! I am your Digital Evolution Consultant. How can I help architect your prestige today?
            </div>
        </div>
        <div class="ai-chat-input-container">
            <input type="text" placeholder="Describe your vision..." class="ai-chat-input">
            <button class="ai-chat-send"><i data-lucide="send"></i></button>
        </div>
    `,document.body.appendChild(e),window.lucide&&window.lucide.createIcons();const t=e.querySelector(".ai-chat-messages"),i=e.querySelector(".ai-chat-input"),o=e.querySelector(".ai-chat-send"),r=e.querySelector(".ai-chat-close");let s=[];const l=(c,f)=>{const p=document.createElement("div");p.className=`ai-message ${f}`,p.innerText=c,t.appendChild(p),t.scrollTop=t.scrollHeight},d=async()=>{const c=i.value.trim();if(!c)return;l(c,"user"),i.value="",i.disabled=!0,o.disabled=!0;const f=document.createElement("div");f.className="ai-message bot typing",f.innerText="Consulting the digital ether...",t.appendChild(f),t.scrollTop=t.scrollHeight;try{const p=Bf.GEMINI_API_KEY;if(!p)throw new Error("GEMINI_API_KEY not found.");const g=(await new Ff({apiKey:p}).chats.create({model:"gemini-3-flash-preview",config:{systemInstruction:`You are the Elite Digital Evolution Consultant for QuickSite Kenya.
QuickSite Kenya is a premier web design agency in Nairobi providing 48-hour turnarounds for professional service businesses.
Our packages include:
1. Starter Presence: KES 11,999 Setup + KES 2,300 Monthly.
2. Business Growth: KES 14,999 Setup + KES 2,800 Monthly.
3. Pro Conversion System: KES 19,999 Setup + KES 3,500 Monthly.
4. Enterprise SaaS System: KES 25,000+ Setup.

CRITICAL: If a user expresses interest, encourage them to provide their Name and Email so the human team can follow up.`},history:s}).sendMessage({message:c})).text;f.remove(),l(g,"bot"),s.push({role:"user",parts:[{text:c}]}),s.push({role:"model",parts:[{text:g}]});const _=/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g,T=c.match(_);if(T&&T.length>0){console.log("AI Lead Capture detected email:",T[0]);try{await Xi(Bt(Mt,"inquiries"),{name:"AI Chat Lead",email:T[0],service:"AI Consultation",message:`Captured from AI Chat: "${c}"`,createdAt:ci(),source:"ai-chatbot",status:"New"}),console.log("AI Lead saved to Firestore.")}catch(A){console.error("Failed to save AI lead:",A)}}}catch(p){console.error("AI Chat Error:",p),f.parentNode&&f.remove(),l("I apologize, but my digital pathways are currently congested. Please try again or use our contact form.","bot")}finally{i.disabled=!1,o.disabled=!1,i.focus()}};n.addEventListener("click",()=>{e.classList.toggle("active"),n.classList.toggle("active"),e.classList.contains("active")&&i.focus()}),r.addEventListener("click",()=>{e.classList.remove("active"),n.classList.remove("active")}),i.addEventListener("keypress",c=>{c.key==="Enter"&&d()}),o.addEventListener("click",d),window.initiateAIConsultation=c=>{e.classList.add("active"),n.classList.add("active"),c&&(i.value=c,d())}};document.addEventListener("DOMContentLoaded",()=>{try{BA()}catch(n){console.error("Failed to initialize AI Consultation:",n)}});const it=(n,e="success")=>{const t=document.createElement("div");t.innerText=n,t.className="custom-toast",t.style.position="fixed",t.style.bottom="100px",t.style.left="50%",t.style.transform="translateX(-50%)",t.style.background=e==="error"?"#ff4444":"var(--gold-gradient)",t.style.color=e==="error"?"white":"var(--bg-color)",t.style.padding="15px 30px",t.style.borderRadius="30px",t.style.zIndex="10000",t.style.boxShadow="0 10px 30px rgba(0,0,0,0.5)",t.style.fontWeight="bold",t.style.textAlign="center",t.style.minWidth="300px",t.style.opacity="0",t.style.transition="opacity 0.5s ease, transform 0.5s ease",document.body.appendChild(t),setTimeout(()=>{t.style.opacity="1",t.style.transform="translateX(-50%) translateY(-10px)"},10),setTimeout(()=>{t.style.opacity="0",t.style.transform="translateX(-50%) translateY(0)",setTimeout(()=>t.remove(),500)},4e3)},mr=(n,e)=>{const t=document.createElement("div");t.className="custom-confirm-overlay",t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.background="rgba(0,0,0,0.85)",t.style.zIndex="20000",t.style.display="flex",t.style.alignItems="center",t.style.justifyContent="center",t.style.backdropFilter="blur(10px)";const i=document.createElement("div");i.style.background="#111",i.style.border="1px solid var(--primary-color)",i.style.padding="40px",i.style.borderRadius="20px",i.style.maxWidth="400px",i.style.textAlign="center",i.style.boxShadow="0 20px 50px rgba(0,0,0,0.5)",i.innerHTML=`
        <h3 style="margin-bottom: 20px; color: var(--primary-color); font-size: 1.5rem;">Confirm Action</h3>
        <p style="margin-bottom: 30px; color: white; opacity: 0.9; line-height: 1.6;">${n}</p>
        <div style="display: flex; gap: 15px; justify-content: center;">
            <button class="btn btn-primary btn-sm" id="confirmYes" style="background: #ff4444; border-color: #ff4444;">Yes, Proceed</button>
            <button class="btn btn-secondary btn-sm" id="confirmNo">Cancel</button>
        </div>
    `,t.appendChild(i),document.body.appendChild(t),t.querySelector("#confirmYes").onclick=()=>{e(),document.body.removeChild(t)},t.querySelector("#confirmNo").onclick=()=>{document.body.removeChild(t)}},kA=(n,e)=>{const t=document.createElement("div");t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.background="rgba(0,0,0,0.9)",t.style.zIndex="30000",t.style.display="flex",t.style.alignItems="center",t.style.justifyContent="center",t.style.backdropFilter="blur(15px)",t.style.padding="20px";const i=document.createElement("div");i.style.background="#111",i.style.border="1px solid var(--primary-color)",i.style.padding="30px",i.style.borderRadius="20px",i.style.maxWidth="600px",i.style.width="100%",i.style.maxHeight="90vh",i.style.overflowY="auto",i.style.boxShadow="0 25px 50px rgba(0,0,0,0.8)";let o="N/A";e.createdAt&&(e.createdAt.seconds?o=new Date(e.createdAt.seconds*1e3).toLocaleString():e.createdAt instanceof Date?o=e.createdAt.toLocaleString():o=new Date(e.createdAt).toLocaleString()),i.innerHTML=`
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 25px; border-bottom: 1px solid rgba(212, 175, 55, 0.3); padding-bottom: 15px;">
            <h3 style="color: var(--primary-color); font-size: 1.5rem; margin: 0;">Inquiry Details</h3>
            <button id="closeDetail" style="background: none; border: none; color: white; cursor: pointer; font-size: 1.5rem;">&times;</button>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px;">
            <div>
                <p style="font-size: 0.7rem; color: var(--primary-color); text-transform: uppercase; margin-bottom: 5px;">Full Name</p>
                <p style="color: white; font-weight: 500;">${e.name||"-"}</p>
            </div>
            <div>
                <p style="font-size: 0.7rem; color: var(--primary-color); text-transform: uppercase; margin-bottom: 5px;">Status</p>
                <span style="background: rgba(212, 175, 55, 0.2); color: var(--primary-color); padding: 2px 8px; border-radius: 4px; font-size: 0.8rem;">${e.status||"New"}</span>
            </div>
            <div>
                <p style="font-size: 0.7rem; color: var(--primary-color); text-transform: uppercase; margin-bottom: 5px;">Email</p>
                <p style="color: white;"><a href="mailto:${e.email}" style="color: white; text-decoration: underline;">${e.email||"-"}</a></p>
            </div>
            <div>
                <p style="font-size: 0.7rem; color: var(--primary-color); text-transform: uppercase; margin-bottom: 5px;">Phone</p>
                <p style="color: white;">${e.phone||"-"}</p>
            </div>
            <div>
                <p style="font-size: 0.7rem; color: var(--primary-color); text-transform: uppercase; margin-bottom: 5px;">Service</p>
                <p style="color: white;">${e.service||"-"}</p>
            </div>
            <div>
                <p style="font-size: 0.7rem; color: var(--primary-color); text-transform: uppercase; margin-bottom: 5px;">Date Submitted</p>
                <p style="color: white;">${o}</p>
            </div>
        </div>
        
        <div style="margin-bottom: 25px;">
            <p style="font-size: 0.7rem; color: var(--primary-color); text-transform: uppercase; margin-bottom: 5px;">Message</p>
            <div style="background: rgba(255,255,255,0.05); padding: 15px; border-radius: 10px; color: white; line-height: 1.6; white-space: pre-wrap;">${e.message||"-"}</div>
        </div>
        
        <div style="text-align: right;">
            <button class="btn btn-secondary" id="closeDetailBtn">Close</button>
        </div>
    `,t.appendChild(i),document.body.appendChild(t);const r=()=>document.body.removeChild(t);t.querySelector("#closeDetail").onclick=r,t.querySelector("#closeDetailBtn").onclick=r,t.onclick=s=>{s.target===t&&r()}},$i=(n,e="placeholder",t=600,i=400)=>{const o=e.toLowerCase().includes("safari luxury"),r=e.toLowerCase().includes("nairobi penthouse");if(o)return"https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80";if(r)return"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80";if(!n)return`https://placehold.co/${t}x${i}/1a1a1a/d4af37?text=${encodeURIComponent(e)}`;const s=n.toLowerCase(),l=window.location.protocol==="https:",d=s.includes("localhost")||s.includes("127.0.0.1")||s.includes("192.168.");return l&&d?(console.warn(`Local URL ${n} blocked by browser PNA policy. Using placeholder.`),`https://placehold.co/${t}x${i}/1a1a1a/d4af37?text=${encodeURIComponent(e)}`):n.startsWith("http://")&&!d?n.replace("http://","https://"):n},OA=()=>{const n=document.getElementById("three-canvas-container");if(!n)return;const e=new Oh,t=new ln(75,window.innerWidth/window.innerHeight,.1,1e3),i=new e0({antialias:!0,alpha:!0});i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),n.appendChild(i.domElement);const o=new fn,r=2e3,s=new Float32Array(r*3),l=new Float32Array(r*3),d=new Float32Array(r*3);for(let w=0;w<r*3;w++){const M=(Math.random()-.5)*15;s[w]=M,d[w]=M,l[w]=(Math.random()-.5)*.01}o.setAttribute("position",new En(s,3));const c=new Cd({size:.03,color:13938487,transparent:!0,opacity:.7,blending:Ds}),f=new Jh(o,c);e.add(f);const p=new nl(12,40,40),h=new tl({color:13938487,wireframe:!0,transparent:!0,opacity:.05}),m=new Un(p,h);e.add(m),t.position.z=6;let v=0,E=0,g=0,_=0;const T=new vt,A=new sp;document.addEventListener("mousemove",w=>{v=(w.clientX/window.innerWidth-.5)*2,E=(w.clientY/window.innerHeight-.5)*2,T.x=w.clientX/window.innerWidth*2-1,T.y=-(w.clientY/window.innerHeight)*2+1});const C=()=>{requestAnimationFrame(C),g+=(v-g)*.05,_+=(E-_)*.05,f.rotation.y+=3e-4,f.rotation.x+=1e-4,m.rotation.y-=2e-4,m.rotation.x-=1e-4,t.position.x+=(g*3-t.position.x)*.05,t.position.y+=(-_*3-t.position.y)*.05,t.lookAt(e.position);const w=o.attributes.position.array;A.setFromCamera(T,t);const M=new J;A.ray.at(8,M);for(let P=0;P<r;P++){const S=P*3;w[S]+=l[S],w[S+1]+=l[S+1],w[S+2]+=l[S+2];const I=w[S]-M.x,W=w[S+1]-M.y,N=w[S+2]-M.z,H=Math.sqrt(I*I+W*W+N*N);if(H<2){const V=(2-H)*.02;w[S]+=I*V,w[S+1]+=W*V,w[S+2]+=N*V}Math.abs(w[S])>10&&(l[S]*=-1),Math.abs(w[S+1])>10&&(l[S+1]*=-1),Math.abs(w[S+2])>10&&(l[S+2]*=-1)}o.attributes.position.needsUpdate=!0,i.render(e,t)};C(),window.addEventListener("resize",()=>{t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)})};document.addEventListener("DOMContentLoaded",async()=>{const n=document.getElementById("adminModal"),e=document.getElementById("adminLoginLink"),t=document.getElementById("closeAdminModal"),i=document.getElementById("adminLoginForm");document.getElementById("emailSignInBtn");const o=document.getElementById("adminEmail"),r=document.getElementById("adminPassword");document.getElementById("adminManageBtn");const s=document.getElementById("adminLogoutBtn");document.getElementById("viewInquiriesBtn");const l=document.getElementById("manageBlogBtn"),d=document.getElementById("inquiriesModal"),c=document.getElementById("blogPostModal"),f=document.getElementById("closeInquiriesModal"),p=document.getElementById("closeBlogPostModal"),h=document.getElementById("inquiriesList"),m=document.getElementById("blogPostForm");document.getElementById("clearMarketplaceBtn"),document.getElementById("adminManageDesc");const v=document.getElementById("addWebsiteModal"),E=document.getElementById("closeAddModal"),g=document.getElementById("addWebsiteForm"),_=document.getElementById("marketplaceSections"),T=document.getElementById("portfolioSections"),A=document.getElementById("featuredProjectsContainer"),C=document.getElementById("clientsModal"),w=document.getElementById("manageClientsBtn"),M=document.getElementById("closeClientsModal"),P=document.getElementById("clientsList"),S=document.getElementById("addNewClientBtn"),I=document.getElementById("siteEditorModal"),W=document.getElementById("closeSiteEditorModal"),N=document.getElementById("siteEditorForm"),H=document.getElementById("previewSiteBtn");w&&(w.onclick=()=>{C.style.display="block",G()}),M&&(M.onclick=()=>C.style.display="none"),W&&(W.onclick=()=>I.style.display="none"),S&&(S.onclick=()=>q());const V=document.querySelectorAll(".tab-btn");V.forEach(k=>{k.onclick=()=>{const b=k.getAttribute("data-tab");document.querySelectorAll(".tab-content").forEach(L=>L.style.display="none"),document.getElementById(b).style.display="block",V.forEach(L=>L.classList.remove("active")),k.classList.add("active")}}),(async()=>{const k=["https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword","https://securetoken.googleapis.com/v1/token","https://firebaseinstallations.googleapis.com/v1/projects/"];try{await Promise.all(k.map(b=>fetch(b,{method:"HEAD",mode:"no-cors"}).catch(L=>{throw L}))),console.log("Security Handshake domains are reachable.")}catch{console.warn("AD-BLOCKER ALERT: Critical security domains are being blocked by your browser."),window.securityBlocked=!0;const L=document.getElementById("authNetworkNote");L&&(L.style.display="block")}})();const G=()=>{P&&(P.innerHTML='<div class="loading-spinner"><div class="spinner"></div><p>Syncing clients...</p></div>',ti(rn(Bt(Mt,"clientSites"),ni("createdAt","desc")),k=>{if(P.innerHTML="",k.empty){P.innerHTML='<p style="text-align: center; padding: 20px; opacity: 0.5;">No active clients yet. Start by adding one!</p>';return}k.forEach(b=>{var nt;const L=b.data(),K=b.id;let ee=`site.html?id=${K}`;L.status==="Live"&&(L.custom_domains&&L.custom_domains.length>0?ee=`https://${L.custom_domains[0]}`:L.subdomain&&(ee=`https://${L.subdomain}.quicksitekenya.co.ke`));const Q=document.createElement("div");Q.className="client-item",Q.innerHTML=`
                        <div class="client-info">
                            <h4>${L.businessName||"Elite Business"} <span style="font-size: 0.75rem; opacity: 0.4; font-weight: 400;">(${L.clientName||((nt=L.clientEmail)==null?void 0:nt.split("@")[0])})</span></h4>
                            <p>${L.subscriptionPlan||L.plan||"Starter Presence"} | Template: ${L.template||"Universal"}</p>
                            <div class="client-badges">
                                <span class="client-badge plan">${L.subscriptionPlan||L.plan||"Starter Presence"}</span>
                                <span class="client-badge status-${(L.status||"Draft").toLowerCase()}">${L.status||"Draft"}</span>
                            </div>
                        </div>
                        <div class="client-actions">
                            <a href="${ee}" target="_blank" class="btn btn-primary btn-icon" title="View Site" style="background: rgba(255,255,255,0.02); border-color: rgba(255,255,255,0.1); color: var(--primary-color);">
                                <i data-lucide="external-link" style="width: 18px;"></i>
                            </a>
                            <button class="btn btn-secondary edit-client-btn" data-id="${K}" style="padding: 10px 18px; font-weight: 700; border-radius: 10px; display: flex; align-items: center; gap: 8px;">
                                <i data-lucide="edit-3" style="width: 18px;"></i> Manage
                            </button>
                            <button class="btn btn-primary btn-icon delete-client-btn" data-id="${K}" style="background: rgba(239, 68, 68, 0.2); border-color: rgba(239, 68, 68, 0.3); color: #ef4444;" title="Delete Client">
                                <i data-lucide="trash-2" style="width: 18px;"></i>
                            </button>
                        </div>
                    `,P.appendChild(Q),Q.querySelector(".edit-client-btn").onclick=()=>q(K,L);let de=!1;const Te=Q.querySelector(".delete-client-btn");Te.onclick=async()=>{if(!de)de=!0,Te.innerHTML="Click to Confirm Removal",Te.style.background="darkred",setTimeout(()=>{de&&(de=!1,Te.innerHTML='<i data-lucide="trash-2"></i>',Te.style.background="#ff4444",window.lucide&&window.lucide.createIcons())},3e3);else try{await po(Bn(Mt,"clientSites",K)),it("Client removed successfully.")}catch(Ye){it("Failed to delete: "+Ye.message,"error")}}}),window.lucide&&window.lucide.createIcons()},k=>{console.error("Clients list listener error:",k),k.code==="permission-denied"?P.innerHTML='<p style="padding: 20px; text-align: center; color: #ff6666;">Access Denied: You do not have permission to view the client sites list.</p>':P.innerHTML='<p style="padding: 20px; text-align: center;">Failed to sync clients.</p>'}))},q=(k=null,b=null)=>{document.getElementById("editSiteId").value=k||"",document.getElementById("siteEditorTitle").innerHTML=k?`Edit <span>${b.businessName}</span>`:"Add New <span>Client Site</span>",document.getElementById("clientNameInput").value=b&&b.clientName||"",document.getElementById("businessNameInput").value=b&&b.businessName||"",document.getElementById("planInput").value=b&&b.plan||"Starter Online Presence",document.getElementById("templateInput").value=b&&b.template||"Default",document.getElementById("taglineInput").value=b&&b.tagline||"",document.getElementById("aboutTextInput").value=b&&b.aboutText||"",document.getElementById("statusInput").value=b&&b.status||"Draft",document.getElementById("servicesInput").value=b&&b.services?b.services.map(L=>`${L.name} | ${L.price} | ${L.description}`).join(`
`):"",document.getElementById("phoneInput").value=b&&b.contact&&b.contact.phone||"",document.getElementById("whatsappInput").value=b&&b.contact&&b.contact.whatsapp||"",document.getElementById("addressInput").value=b&&b.contact&&b.contact.address||"",document.getElementById("mapUrlInput").value=b&&b.contact&&b.contact.mapUrl||"",document.getElementById("heroImageInput").value=b&&b.images&&b.images.hero||"",document.getElementById("aboutImageInput").value=b&&b.images&&b.images.about||"",document.getElementById("servicesImageInput").value=b&&b.images&&b.images.services||"",document.getElementById("logoImageInput").value=b&&b.images&&b.images.logo||"",document.getElementById("galleryImagesInput").value=b&&b.images&&b.images.gallery?b.images.gallery.join(`
`):"",document.getElementById("customDomainInput").value=b&&b.customDomain||"",document.getElementById("subdomainInput").value=b&&b.subdomain||"",document.getElementById("customDomainsListInput").value=b&&b.custom_domains?b.custom_domains.join(", "):"",document.getElementById("heroSettingsInput").value=b&&b.hero?`${b.hero.title||""} | ${b.hero.subtitle||""} | ${b.hero.cta||""}`:"",document.getElementById("featuresInput").value=b&&b.features?b.features.map(L=>`${L.title} | ${L.desc} | ${L.icon}`).join(`
`):"",document.getElementById("testimonialsInput").value=b&&b.testimonials?b.testimonials.map(L=>`${L.name} | ${L.quote}`).join(`
`):"",document.getElementById("pricingInput").value=b&&b.pricing?b.pricing.map(L=>`${L.plan} | ${L.price} | ${L.features.join(", ")}`).join(`
`):"",document.getElementById("ctaSettingsInput").value=b&&b.cta?`${b.cta.title||""} | ${b.cta.btn||""}`:"",document.getElementById("subscriptionPlanInput").value=b&&b.subscriptionPlan||"Starter Presence",document.getElementById("paymentStatusInput").value=b&&b.paymentStatus||"Unpaid",document.getElementById("setupFeeInput").value=b&&b.setupFee||0,document.getElementById("monthlyFeeInput").value=b&&b.monthlyFee||0,document.getElementById("featuresEnabledInput").value=b&&b.featuresEnabled?b.featuresEnabled.join(", "):"",document.getElementById("projectVisionInput").value=b&&b.projectVision||"",I.style.display="block"};N&&(N.onsubmit=async k=>{var de,Te,nt,Ye,me;k.preventDefault();const b=document.getElementById("editSiteId").value,L=N.querySelector('button[type="submit"]');L.disabled=!0,L.innerText="Publishing Instant Update...";const ee=document.getElementById("servicesInput").value.split(`
`).filter(Ue=>Ue.includes("|")).map(Ue=>{const tt=Ue.split("|");return{name:tt[0].trim(),price:tt[1].trim(),description:(tt[2]||"").trim()}}),Q={clientName:document.getElementById("clientNameInput").value,businessName:document.getElementById("businessNameInput").value,plan:document.getElementById("planInput").value,template:document.getElementById("templateInput").value,tagline:document.getElementById("taglineInput").value,aboutText:document.getElementById("aboutTextInput").value,contact:{phone:document.getElementById("phoneInput").value,whatsapp:document.getElementById("whatsappInput").value,address:document.getElementById("addressInput").value,mapUrl:document.getElementById("mapUrlInput").value},customDomain:document.getElementById("customDomainInput").value,custom_domains:document.getElementById("customDomainsListInput").value.split(",").map(Ue=>Ue.trim()).filter(Ue=>Ue),subdomain:document.getElementById("subdomainInput").value,template_type:document.getElementById("templateInput").value,subscriptionPlan:document.getElementById("subscriptionPlanInput").value,paymentStatus:document.getElementById("paymentStatusInput").value,setupFee:parseFloat(document.getElementById("setupFeeInput").value)||0,monthlyFee:parseFloat(document.getElementById("monthlyFeeInput").value)||0,featuresEnabled:document.getElementById("featuresEnabledInput").value.split(",").map(Ue=>Ue.trim()).filter(Ue=>Ue),projectVision:document.getElementById("projectVisionInput").value,hero:{title:((de=document.getElementById("heroSettingsInput").value.split("|")[0])==null?void 0:de.trim())||"",subtitle:((Te=document.getElementById("heroSettingsInput").value.split("|")[1])==null?void 0:Te.trim())||"",cta:((nt=document.getElementById("heroSettingsInput").value.split("|")[2])==null?void 0:nt.trim())||""},features:document.getElementById("featuresInput").value.split(`
`).filter(Ue=>Ue.includes("|")).map(Ue=>{const[tt,xt,Rt]=Ue.split("|").map($t=>$t.trim());return{title:tt,desc:xt,icon:Rt||"check"}}),testimonials:document.getElementById("testimonialsInput").value.split(`
`).filter(Ue=>Ue.includes("|")).map(Ue=>{const[tt,xt]=Ue.split("|").map(Rt=>Rt.trim());return{name:tt,quote:xt}}),pricing:document.getElementById("pricingInput").value.split(`
`).filter(Ue=>Ue.includes("|")).map(Ue=>{const[tt,xt,Rt]=Ue.split("|").map($t=>$t.trim());return{plan:tt,price:xt,features:Rt?Rt.split(",").map($t=>$t.trim()):[]}}),cta:{title:((Ye=document.getElementById("ctaSettingsInput").value.split("|")[0])==null?void 0:Ye.trim())||"",btn:((me=document.getElementById("ctaSettingsInput").value.split("|")[1])==null?void 0:me.trim())||""},images:{hero:document.getElementById("heroImageInput").value,about:document.getElementById("aboutImageInput").value,services:document.getElementById("servicesImageInput").value,logo:document.getElementById("logoImageInput").value,gallery:document.getElementById("galleryImagesInput").value.split(`
`).filter(Ue=>Ue.trim())},services:ee,status:document.getElementById("statusInput").value,updatedAt:ci()};try{b?(await ko(Bn(Mt,"clientSites",b),Q),it("Website Updated Live!")):(Q.createdAt=ci(),await Xi(Bt(Mt,"clientSites"),Q),it("New Client Site Created!")),I.style.display="none"}catch(Ue){se(Ue,b?le.UPDATE:le.CREATE,"clientSites")}finally{L.disabled=!1,L.innerText="Save → Website Live"}}),H&&(H.onclick=()=>{const k=document.getElementById("editSiteId").value;if(!k){it("Save the site first to generate a preview link.","info");return}window.open(`site.html?id=${k}&preview=true`,"_blank")});const O=document.getElementById("aiGenerateContentBtn"),re=document.getElementById("tabBriefGenerateBtn"),ie=async()=>{const k=document.getElementById("projectVisionInput").value,b=document.getElementById("businessNameInput").value,L=document.getElementById("templateInput").value,K=document.getElementById("editSiteId").value,ee=document.getElementById("phoneInput").value,Q=document.getElementById("whatsappInput").value,de=document.getElementById("addressInput").value,Te=document.getElementById("taglineInput").value,nt=document.getElementById("aboutTextInput").value;if(!k&&!nt){it("The Project Vision or About Business field is empty. AI needs a description to design from.","error");return}if(!K){it("Please save this client first before using AI generation.","info");return}const Ye=O?O.innerHTML:"AI Design";O&&(O.innerHTML='<i data-lucide="loader" class="spin" style="width: 16px; display: inline-block; vertical-align: middle; margin-right: 5px;"></i> Engineering...',O.disabled=!0),re&&(re.disabled=!0,re.innerText="Engineering Site...");try{const me=Bf.GEMINI_API_KEY;if(!me)throw new Error("GEMINI_API_KEY not found in environment.");const Ue=new Ff({apiKey:me}),tt=`You are an elite web designer and copywriter for QuickSite Kenya.
Generate a professional website content structure for a business based on the following context:

BUSINESS NAME: ${b}
TEMPLATE: ${L}
PROJECT BRIEF: ${k}
CONTACT INFO: ${ee?"Phone: "+ee:""} ${Q?"WhatsApp: "+Q:""} ${de?"Address: "+de:""}
EXISTING TAGLINE: ${Te}
EXISTING ABOUT: ${nt}

GOAL: Create a high-converting, professional website concept. 
If contact info or vision details are provided, incorporate them NATURALLY but improve the wording to be elite and persuasive.

Respond ONLY with a JSON object containing:
{
  "hero": { "title": "...", "subtitle": "..." },
  "heroImage": "...", // visual vibe for Hero
  "aboutImage": "...", // visual vibe for About section
  "servicesImage": "...", // visual vibe for Services section
  "aboutText": "...", // Professional, persuasive story
  "services": [ { "name": "...", "description": "...", "price": "..." }, ... (up to 4) ],
  "features": [ { "icon": "zap|sparkles|shield|star|phone", "title": "...", "desc": "..." }, ... (up to 4) ],
  "pricing": [ { "plan": "...", "price": "...", "features": ["...", "..."] }, ... (up to 3) ],
  "testimonials": [ { "name": "...", "quote": "..." }, ... (up to 3) ],
  "tagline": "...", // A punchy 1-sentence brand promise
  "cta": { "title": "...", "btn": "..." }
}

Ensure the copy is high-converting and specifically tailored to the Kenyan market. Use local nuances (Nairobi, Mombasa, specific Kenyan business culture) if appropriate.
The image keywords should be descriptive enough to get a relevant high-quality image.`,Rt=(await Ue.models.generateContent({model:"gemini-3-flash-preview",contents:tt,config:{responseMimeType:"application/json"}})).text;if(!Rt)throw new Error("AI returned empty response.");const $t=Rt.replace(/```json/g,"").replace(/```/g,"").trim(),x=JSON.parse($t);x.heroImage&&(x.heroImageUrl=`https://picsum.photos/seed/${x.heroImage.replace(/\s+/g,"")}/1920/1080`),x.aboutImage&&(x.aboutImageUrl=`https://picsum.photos/seed/${x.aboutImage.replace(/\s+/g,"")}/1080/1080`),x.servicesImage&&(x.servicesImageUrl=`https://picsum.photos/seed/${x.servicesImage.replace(/\s+/g,"")}/1280/720`),await ko(Bn(Mt,"clientSites",K),{hero:x.hero,aboutText:x.aboutText,tagline:x.tagline,services:x.services,features:x.features,pricing:x.pricing,testimonials:x.testimonials,cta:x.cta,images:{hero:x.heroImageUrl||document.getElementById("heroImageInput").value,about:x.aboutImageUrl||document.getElementById("aboutImageInput").value,services:x.servicesImageUrl||document.getElementById("servicesImageInput").value,logo:document.getElementById("logoImageInput").value,gallery:document.getElementById("galleryImagesInput").value.split(`
`).filter(z=>z.trim())},featuresEnabled:["Features","Pricing","Testimonials","CTA"],updatedAt:ci()}),document.getElementById("heroSettingsInput").value=`${x.hero.title} | ${x.hero.subtitle} | Learn More`,document.getElementById("taglineInput").value=x.tagline,document.getElementById("aboutTextInput").value=x.aboutText,document.getElementById("servicesInput").value=x.services.map(z=>`${z.name} | ${z.price} | ${z.description}`).join(`
`),document.getElementById("featuresInput").value=x.features.map(z=>`${z.title} | ${z.desc} | ${z.icon}`).join(`
`),document.getElementById("pricingInput").value=x.pricing.map(z=>`${z.plan} | ${z.price} | ${z.features.join(", ")}`).join(`
`),document.getElementById("testimonialsInput").value=x.testimonials.map(z=>`${z.name} | ${z.quote}`).join(`
`),document.getElementById("ctaSettingsInput").value=`${x.cta.title} | ${x.cta.btn}`,document.getElementById("heroImageInput").value=x.heroImageUrl||"",document.getElementById("aboutImageInput").value=x.aboutImageUrl||"",document.getElementById("servicesImageInput").value=x.servicesImageUrl||"",it("Design complete! Switched to Content tab to review results.","success");const B=document.querySelector('.tab-btn[data-tab="tab-content"]');B&&B.click()}catch(me){console.error("AI Gen error:",me),it("AI Generation failed. Check console for details.","error")}finally{O&&(O.innerHTML=Ye,O.disabled=!1),re&&(re.disabled=!1,re.innerHTML='<i data-lucide="brain-circuit"></i> Run AI Generation Phase'),window.lucide&&window.lucide.createIcons()}};O&&(O.onclick=ie),re&&(re.onclick=ie);const _e=()=>{const k=document.getElementById("categorySelector"),b=document.getElementById("siteCategory");if(!k||!b)return;k.querySelectorAll(".category-option").forEach(K=>{K.addEventListener("click",()=>{Ie(K.getAttribute("data-value"))})})},Ie=k=>{const b=document.getElementById("categorySelector"),L=document.getElementById("siteCategory");if(!b||!L)return;b.querySelectorAll(".category-option").forEach(ee=>{ee.getAttribute("data-value")===k?ee.classList.add("active"):ee.classList.remove("active")}),L.value=k},xe=(k=null)=>{const b=document.getElementById("addWebsiteModal");if(b)if(b.style.display="block",k)Ie(k);else{document.querySelectorAll(".category-option").forEach(ee=>ee.classList.remove("active"));const K=document.getElementById("siteCategory");K&&(K.value="")}};_e();const He=document.querySelector(".cursor-dot"),mt=document.querySelector(".cursor-outline");He&&mt&&(window.addEventListener("mousemove",b=>{const L=b.clientX,K=b.clientY;He.style.left=`${L}px`,He.style.top=`${K}px`,mt.animate({left:`${L}px`,top:`${K}px`},{duration:500,fill:"forwards"})}),document.querySelectorAll("a, button, .logo, .nav-links li, .stat-item, .bento-item, .gallery-item, .social-links a").forEach(b=>{b.addEventListener("mouseenter",()=>{He.classList.add("active"),mt.classList.add("active")}),b.addEventListener("mouseleave",()=>{He.classList.remove("active"),mt.classList.remove("active")})}));const yt=document.querySelector(".hero-content");yt&&window.addEventListener("mousemove",k=>{const b=(k.clientX-window.innerWidth/2)*.01,L=(k.clientY-window.innerHeight/2)*.01;yt.style.transform=`translate(${b}px, ${L}px)`});const ne=()=>{const k=document.querySelectorAll(".stat-item h3");k.length&&k.forEach(b=>{const L=parseInt(b.getAttribute("data-target"));if(isNaN(L))return;let K=0;const Q=L/(2e3/16),de=()=>{K+=Q,K<L?(b.innerText=Math.ceil(K),requestAnimationFrame(de)):b.innerText=L+(b.innerText.includes("+")?"+":"")};de()})},he={threshold:.15,rootMargin:"0px 0px -50px 0px"},pe=new IntersectionObserver((k,b)=>{k.forEach(L=>{L.isIntersecting&&(L.target.classList.add("active"),L.target.classList.contains("stats")&&ne(),b.unobserve(L.target))})},he),Ge=k=>{(k||document.querySelectorAll(".reveal:not(.active)")).forEach(L=>{!L.classList.contains("reveal-left")&&!L.classList.contains("reveal-right")&&L.classList.add("reveal-up"),pe.observe(L)})};Ge(),new MutationObserver(k=>{k.forEach(b=>{b.addedNodes.forEach(L=>{if(L.nodeType===1){L.classList.contains("reveal")&&Ge([L]);const K=L.querySelectorAll(".reveal");K.length>0&&Ge(K)}})})}).observe(document.body,{childList:!0,subtree:!0}),(()=>{document.querySelectorAll(".service-card").forEach(b=>{b.addEventListener("mousemove",L=>{const K=b.getBoundingClientRect(),ee=L.clientX-K.left,Q=L.clientY-K.top;b.style.setProperty("--mouse-x",`${ee}px`),b.style.setProperty("--mouse-y",`${Q}px`)})})})();try{OA()}catch(k){console.error("Failed to initialize 3D background:",k)}fetch("/api/health").then(k=>k.json()).then(k=>console.log("Server health check:",k)).catch(k=>console.warn("Server health check failed. Backend might be unreachable.",k));const At=document.getElementById("navbar"),qe=document.querySelector(".hamburger"),et=document.querySelector(".nav-links"),ht=document.querySelectorAll(".nav-links a");document.getElementById("openAddModal"),window.addEventListener("scroll",()=>{At&&(window.scrollY>50?At.classList.add("sticky"):At.classList.remove("sticky"))}),qe&&et&&(qe.addEventListener("click",k=>{k.stopPropagation(),qe.classList.toggle("active"),et.classList.toggle("active");const b=qe.querySelectorAll("span");b.length>=3&&(et.classList.contains("active")?(b[0].style.transform="rotate(45deg) translate(5px, 5px)",b[1].style.opacity="0",b[2].style.transform="rotate(-45deg) translate(7px, -7px)"):(b[0].style.transform="none",b[1].style.opacity="1",b[2].style.transform="none"))}),document.addEventListener("click",k=>{if(et.classList.contains("active")&&!et.contains(k.target)&&!qe.contains(k.target)){qe.classList.remove("active"),et.classList.remove("active");const b=qe.querySelectorAll("span");b.length>=3&&(b.forEach(L=>L.style.transform="none"),b[1].style.opacity="1")}})),ht&&qe&&et&&ht.forEach(k=>{k.addEventListener("click",()=>{qe.classList.remove("active"),et.classList.remove("active");const b=qe.querySelectorAll("span");b.length>=3&&(b.forEach(L=>L.style.transform="none"),b[1].style.opacity="1")})}),document.querySelectorAll('a[href^="#"]').forEach(k=>{k.addEventListener("click",function(b){const L=this.getAttribute("href");if(L!=="#"){b.preventDefault();try{const K=document.querySelector(L);K&&K.scrollIntoView({behavior:"smooth"})}catch{console.warn("Invalid selector:",L)}}})});const We=document.getElementById("contactForm");if(We){const k=new URLSearchParams(window.location.search),b=k.get("service"),L=k.get("interest"),K=k.get("package");if(b){const ee=document.getElementById("contactService");ee&&(ee.value=b)}if(K){const ee=document.getElementById("contactService"),Q=document.getElementById("contactMessage");let de="",Te="";K==="starter"?(de="Starter Presence",Te="Starter Presence"):K==="growth"?(de="Business Growth",Te="Business Growth"):K==="pro"||K==="generator"?(de="Pro Conversion System",Te="Pro Conversion System"):K==="enterprise"&&(de="Enterprise SaaS System",Te="Enterprise SaaS"),ee&&Te&&(ee.value=Te),Q&&de&&(Q.value=`I am interested in the elite "${de}" package and architecting a high-performance digital presence.`)}if(L){const ee=document.getElementById("contactMessage"),Q=document.getElementById("contactService");ee&&(ee.value=`I am interested in the "${L}" website from your marketplace. I would like to discuss the details and acquisition process.`),Q&&(Q.value="web-design")}We.addEventListener("submit",async ee=>{ee.preventDefault();const Q=We.querySelector('button[type="submit"]'),de=Q?Q.innerText:"Submit";Q&&(Q.innerText="Submitting Inquiry...",Q.disabled=!0);const Te=new FormData(We),nt={name:Te.get("name"),email:Te.get("email"),phone:Te.get("phone"),service:Te.get("service"),message:Te.get("message"),status:"New",createdAt:ci()};try{await Xi(Bt(Mt,"inquiries"),nt);try{await fetch("/api/consultation",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(nt)})}catch(Ye){console.warn("Email API ping failed, but DB saved successfully.",Ye)}We.innerHTML=`
                    <div style="text-align: center; padding: 40px; background: rgba(212, 175, 55, 0.1); border: 1px solid var(--primary-color); border-radius: 15px;">
                        <i data-lucide="check-circle" style="width: 60px; height: 60px; color: var(--primary-color); margin-bottom: 20px;"></i>
                        <h3 style="margin-bottom: 10px;">Success</h3>
                        <p style="color: var(--text-secondary);">Your inquiry has been submitted successfully. We will get back to you soon.</p>
                        <button onclick="location.reload()" class="btn btn-secondary" style="margin-top: 20px;">Send Another Inquiry</button>
                    </div>
                `,window.lucide&&window.lucide.createIcons()}catch(Ye){console.error("Error sending inquiry:",Ye),Q&&(Q.innerText=de,Q.disabled=!1),it("Failed to submit inquiry: "+Ye.message,"error")}})}let at=null,D=null;const Ct=k=>{const b=document.getElementById("viewInquiriesBtn");if(!b)return;let L=b.querySelector(".inquiry-badge");k>0?(L||(L=document.createElement("span"),L.className="inquiry-badge",L.style.background="#ff4444",L.style.color="white",L.style.fontSize="0.6rem",L.style.padding="2px 6px",L.style.borderRadius="10px",L.style.marginLeft="8px",L.style.fontWeight="bold",b.appendChild(L)),L.innerText=k):L&&L.remove()},lt=()=>{if(!Z||!Cn.currentUser){D&&(D(),D=null);return}const k=rn(Bt(Mt,"inquiries"),ni("createdAt","desc"));let b=!0;D=ti(k,L=>{const K=L.docs.filter(ee=>ee.data().status==="New"||!ee.data().status).length;if(Ct(K),!b&&!L.empty){const Q=L.docs[0].data(),de=Q.createdAt?Q.createdAt.toMillis():Date.now();Date.now()-de<1e4&&it(`New Inquiry from ${Q.name}!`,"success")}b=!1},L=>{console.error("Global Inquiries Listener Error:",L),L.code==="permission-denied"&&console.warn("Permission denied for global inquiries listener. Dashboard UI may be limited.")})},pt=()=>{if(!h)return;if(!Cn.currentUser){console.warn("Attempted to load inquiries while unauthenticated."),h.innerHTML=`
                <div style="text-align: center; padding: 40px; opacity: 0.6;">
                    <i data-lucide="lock" style="width: 48px; height: 48px; margin-bottom: 15px;"></i>
                    <p>Authentication required to view inquiries.</p>
                </div>
            `,window.lucide&&window.lucide.createIcons();return}at&&(at(),at=null),h.innerHTML=`
            <div class="loading-spinner" style="text-align: center; padding: 40px;">
                <div class="spinner"></div>
                <p style="margin-top: 15px; opacity: 0.6;">Retrieving inquiries...</p>
            </div>
        `;const k=rn(Bt(Mt,"inquiries"),ni("createdAt","desc"));at=ti(k,b=>{if(console.log(`>>> [Admin] Inquiries snapshot received. Size: ${b.size}`),b.empty){h.innerHTML=`
                    <div class="no-inquiries">
                        <i data-lucide="inbox" style="width: 48px; height: 48px; margin-bottom: 15px; opacity: 0.3;"></i>
                        <p>No inquiries found. Your marketplace is quiet... for now.</p>
                    </div>
                `,window.lucide&&window.lucide.createIcons();return}h.innerHTML="";const L=document.createElement("div");L.style.display="flex",L.style.justifyContent="flex-end",L.style.marginBottom="20px",L.innerHTML=`
                <button id="refreshInquiriesBtn" class="btn btn-secondary" style="font-size: 0.7rem; padding: 5px 12px;">
                    <i data-lucide="refresh-cw" style="width: 12px; height: 12px; margin-right: 5px;"></i> Refresh
                </button>
            `,h.appendChild(L);const K=L.querySelector("#refreshInquiriesBtn");K&&(K.onclick=()=>pt());const ee=document.createElement("div");ee.style.overflowX="auto",ee.innerHTML=`
                <table class="inquiries-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.85rem;">
                    <thead>
                        <tr style="border-bottom: 1px solid var(--glass-border); background: rgba(0,0,0,0.3);">
                            <th style="padding: 12px;">ID</th>
                            <th style="padding: 12px;">Full Name</th>
                            <th style="padding: 12px;">Email</th>
                            <th style="padding: 12px;">Phone</th>
                            <th style="padding: 12px;">Service</th>
                            <th style="padding: 12px;">Message</th>
                            <th style="padding: 12px;">Date Submitted</th>
                            <th style="padding: 12px;">Status</th>
                            <th style="padding: 12px;">Actions</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>
            `,h.appendChild(ee);const Q=ee.querySelector("tbody");b.forEach(Ye=>{const me=Ye.data(),Ue=Ye.id,tt=me.status||"New";let xt="Just now";me.createdAt&&(me.createdAt.seconds?xt=new Date(me.createdAt.seconds*1e3).toLocaleString():me.createdAt instanceof Date?xt=me.createdAt.toLocaleString():typeof me.createdAt=="string"&&(xt=new Date(me.createdAt).toLocaleString()));const Rt=document.createElement("tr");Rt.style.borderBottom="1px solid rgba(255,255,255,0.1)";const $t=Ue.substring(0,6)+"...",x=me.message&&me.message.length>30?me.message.substring(0,30)+"...":me.message;Rt.innerHTML=`
                    <td style="padding: 12px;" title="${Ue}">${$t}</td>
                    <td style="padding: 12px;">${me.name||"-"}</td>
                    <td style="padding: 12px;"><a href="mailto:${me.email||""}" style="color: var(--primary-color);">${me.email||"-"}</a></td>
                    <td style="padding: 12px;">${me.phone||"-"}</td>
                    <td style="padding: 12px;">${me.service||"-"}</td>
                    <td style="padding: 12px;" title="${me.message||""}">${x||"-"}</td>
                    <td style="padding: 12px;">${xt}</td>
                    <td style="padding: 12px;">
                        <select class="status-select" data-id="${Ue}" style="background: rgba(0,0,0,0.5); color: white; border: 1px solid var(--glass-border); padding: 5px; border-radius: 4px;">
                            <option value="New" ${tt==="New"?"selected":""}>New</option>
                            <option value="Read" ${tt==="Read"?"selected":""}>Read</option>
                            <option value="Replied" ${tt==="Replied"?"selected":""}>Replied</option>
                            <option value="Closed" ${tt==="Closed"?"selected":""}>Closed</option>
                        </select>
                    </td>
                    <td style="padding: 12px; display: flex; gap: 5px;">
                        <button class="btn btn-secondary btn-sm view-inquiry-btn" data-id="${Ue}" style="font-size: 0.7rem; padding: 4px 8px;">View</button>
                        <button class="inquiry-delete-btn" data-id="${Ue}" style="background: none; border: none; color: #ff4444; cursor: pointer; font-size: 0.7rem; display: flex; align-items: center; gap: 5px;">
                            <i data-lucide="trash-2" style="width: 12px; height: 12px;"></i>
                        </button>
                    </td>
                `,Q.appendChild(Rt)}),Q.querySelectorAll(".status-select").forEach(Ye=>{Ye.addEventListener("change",async me=>{const Ue=me.target.getAttribute("data-id"),tt=me.target.value;try{await ko(Bn(Mt,"inquiries",Ue),{status:tt}),it("Status updated to "+tt,"success")}catch(xt){console.error("Error updating status:",xt),it("Failed to update status","error")}})}),Q.querySelectorAll(".view-inquiry-btn").forEach(Ye=>{Ye.addEventListener("click",me=>{var xt;const Ue=me.currentTarget.getAttribute("data-id"),tt=(xt=b.docs.find(Rt=>Rt.id===Ue))==null?void 0:xt.data();tt&&kA(Ue,tt)})}),Q.querySelectorAll(".inquiry-delete-btn").forEach(Ye=>{Ye.addEventListener("click",me=>{const Ue=me.currentTarget.getAttribute("data-id");mr("Are you sure you want to delete this inquiry?",async()=>{try{await po(Bn(Mt,"inquiries",Ue)),it("Inquiry deleted.","success")}catch(tt){console.error("Error deleting inquiry:",tt),it("Failed to delete inquiry.","error")}})})}),window.lucide&&window.lucide.createIcons()},b=>{se(b,le.LIST,"inquiries")})};f&&(f.onclick=()=>{d.style.display="none",at&&(at(),at=null)}),p&&(p.onclick=()=>{c.style.display="none"}),l&&(l.onclick=k=>{k.preventDefault(),document.getElementById("blogModalTitle").innerHTML="Add <span>Blog Post</span>",m.reset(),document.getElementById("editPostId").value="",c.style.display="block"}),document.querySelectorAll(".newsletter form").forEach(k=>{k.addEventListener("submit",async b=>{b.preventDefault();const L=k.querySelector('input[type="email"]'),K=k.querySelector("button"),ee=L?L.value:"";if(ee){K&&(K.disabled=!0,K.innerText="Joining...");try{await Xi(Bt(Mt,"inquiries"),{name:"Newsletter Subscriber",email:ee,service:"Newsletter",message:"User subscribed to the elite newsletter.",createdAt:ci(),source:"newsletter",status:"New"}),k.innerHTML=`
                    <div style="color: var(--primary-color); font-weight: 600; padding: 10px; background: rgba(212, 175, 55, 0.1); border-radius: 8px; text-align: center;">
                        <i data-lucide="check-circle" style="width: 16px; height: 16px; margin-right: 5px;"></i> Welcome to the Elite.
                    </div>
                `,window.lucide&&window.lucide.createIcons()}catch(Q){console.error("Newsletter error:",Q),K&&(K.disabled=!1,K.innerText="Subscribe"),it("Digital pathways congested. Please try again.","error")}}})});const R=document.querySelector(".scroll-progress");R&&window.addEventListener("scroll",()=>{const k=document.body.scrollTop||document.documentElement.scrollTop,b=document.documentElement.scrollHeight-document.documentElement.clientHeight,L=k/b*100;R.style.width=L+"%"});const y=document.createElement("button");y.innerHTML="↑",y.className="scroll-top-btn",document.body.appendChild(y),window.addEventListener("scroll",()=>{window.scrollY>500?y.classList.add("visible"):y.classList.remove("visible")}),y.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});const F=document.querySelector(".hero-bg-video");F&&window.addEventListener("scroll",()=>{const k=window.pageYOffset;F.style.transform=`translateY(${k*.5}px)`});const te=document.getElementById("scrollDown");te&&te.addEventListener("click",()=>{const k=document.querySelector(".stats");k&&k.scrollIntoView({behavior:"smooth"})});const oe=document.querySelector(".cta-bg-glow");oe&&window.addEventListener("scroll",()=>{const k=window.pageYOffset,b=document.querySelector(".cta-section").offsetTop;k>b-window.innerHeight&&(oe.style.transform=`translate(-50%, -50%) translateY(${(k-b)*.2}px)`)});let Z=!1,Ae=null,fe=null;const Le=async()=>{try{await Vf(),Z=!1,ke()}catch(k){console.error("Error logging out",k)}},ke=(k=null)=>{console.log("Updating Admin UI. isAdmin:",Z,"User:",k);const b=document.getElementById("adminManageBtn"),L=document.getElementById("viewInquiriesBtn"),K=document.getElementById("adminManageDesc"),ee=document.getElementById("admin-dashboard"),Q=document.getElementById("adminNavLi"),de=document.getElementById("manageBlogBtn"),Te=document.getElementById("manageClientsBtn");if(Q&&(Q.style.display=Z?"block":"none"),de&&(de.style.display=Z?"inline-flex":"none"),Te&&(Te.style.display=Z?"inline-flex":"none"),Z){if(document.body.classList.add("is-admin"),ee){ee.style.display="block";let me=ee.querySelector(".admin-user-indicator");me||(me=document.createElement("div"),me.className="admin-user-indicator",me.style.fontSize="0.7rem",me.style.opacity="0.5",me.style.marginTop="10px",ee.querySelector(".container").appendChild(me));const Ue=Cn.currentUser,tt=Ue&&Ue.emailVerified;me.innerHTML=`Logged in as: ${k||"Administrator"} ${tt?'<span style="color: #00ff00;">(Verified)</span>':'<span style="color: #d4af37;">(Unverified / Development Mode)</span>'}`}}else document.body.classList.remove("is-admin"),ee&&(ee.style.display="none");b&&(Z?(b.innerHTML='<i data-lucide="plus-circle" style="width: 16px; height: 16px; margin-right: 8px;"></i> Add New Website',b.style.display="inline-flex",b.onclick=me=>{me.preventDefault(),xe()},L&&(L.style.display="inline-flex",L.onclick=me=>{me.preventDefault(),d&&(d.style.display="block",pt())}),K&&(K.innerText="Welcome back, Administrator. Your session is active across all pages."),window.lucide&&window.lucide.createIcons()):(b.style.display="none",L&&(L.style.display="none"),K&&(K.innerText="Exclusive access for QuickSite administrators.")));const nt=document.getElementById("clearMarketplaceBtn");nt&&(nt.style.display=Z?"inline-flex":"none",nt.onclick=me=>{me.preventDefault(),console.log("Clear Marketplace button clicked"),mr("Are you sure you want to clear ALL dynamic marketplace listings? This cannot be undone.",async()=>{try{const Ue=rn(Bt(Mt,"marketplaceItems")),xt=(await Oo(Ue)).docs.map(Rt=>po(Rt.ref));await Promise.all(xt),it("Marketplace cleared successfully.")}catch(Ue){se(Ue,le.DELETE,"marketplaceItems")}})});const Ye=document.getElementById("adminLogoutBtn");Ye&&(Ye.style.display=Z?"inline-flex":"none"),e&&(Z?(e.innerText="Admin Logout",e.style.display="inline-block",e.style.opacity="1",e.onclick=async me=>{me.preventDefault(),await Le()}):e.style.display="none")};let ae=0;const ue=document.getElementById("copyrightText");ue&&(ue.style.cursor="default",ue.addEventListener("click",()=>{if(ae++,ae===5){const k=document.getElementById("adminModal");k&&(k.style.display="block"),ae=0,it("Administrator Gateway Opened","success")}setTimeout(()=>{ae=0},3e3)}));let we=null;kf(Cn,k=>{if(!(k&&k.uid===we)){if(we=k?k.uid:null,console.log("Auth state changed:",k?`logged in (${k.email})`:"logged out"),k){const b=k.email?k.email.toLowerCase().trim():"";if(console.log("Checking admin privileges for:",b),["michaelmulili41@gmail.com","michael.mulili@quicksite.com","michael.michael@quicksite.com","quicksitekenya@gmail.com"].includes(b)){k.emailVerified||console.info("Admin access: Operating in unverified developer mode.",b),console.log("Admin access locally recognized for:",b),Z=!0,document.body.classList.add("is-admin");const K=document.getElementById("adminModal");if(K&&(K.style.display="none"),new URLSearchParams(window.location.search).get("action")==="addWebsite"){const Q=document.getElementById("addWebsiteModal");Q&&(Q.style.display="block"),window.history.replaceState({},document.title,window.location.pathname)}ke(b),lt()}else{console.warn("Access denied for non-admin user:",b),Z=!1,document.body.classList.remove("is-admin"),D&&(D(),D=null);const K=document.getElementById("adminModal");K&&K.style.display==="block"&&(it("Access Denied: Your account ("+b+") does not have administrator privileges.","error"),Le()),ke()}}else Z=!1,document.body.classList.remove("is-admin"),at&&(at(),at=null),D&&(D(),D=null),ke();_&&Me(),T&&be(),A&&ft(),document.getElementById("liveSlider")&&U()}}),ke(),n&&t&&(t.onclick=()=>n.style.display="none"),i&&i.addEventListener("submit",async k=>{k.preventDefault();const b=o.value,L=r.value;if(!b||!L){it("Please enter both email and password.","error");return}const K=document.getElementById("loadingOverlay");K&&(K.style.display="flex");try{await Of(b,L),K&&(K.style.display="none"),n&&(n.style.display="none")}catch(ee){if(Z){console.log("Manual login failed but user is authenticated. Ignoring error."),K&&(K.style.display="none"),n&&(n.style.display="none");return}if(ee.code==="auth/invalid-credential"){console.log("Invalid credential, attempting auto-signup...");try{await Gf(b,L),it("Account created and signed in successfully!","success"),K&&(K.style.display="none"),n&&(n.style.display="none");return}catch(Q){console.error("Auto-signup failed:",Q),K&&(K.style.display="none"),it("Sign In failed: Invalid email or password.","error");return}}if(K&&(K.style.display="none"),console.error("Sign In error:",ee),ee.code==="auth/network-request-failed"){it("SECURITY BLOCKED: Your Ad-blocker or Brave Shields is preventing login. See the instructions below.","error"),console.warn("AD-BLOCKER DETECTED: Firebase Auth requests are being blocked. This is common with uBlock Origin or Brave Shields.");const Q=document.getElementById("authNetworkNote");Q&&(Q.style.display="block",Q.scrollIntoView({behavior:"smooth",block:"nearest"})),alert(`⚠️ FIREBASE BLOCKED BY BROWSER ⚠️

You are inside an iframe and your browser's privacy shields are blocking the login.

We will now explicitly break out of the iframe and auto-open the application in a new tab for you to log in securely. Please hit Sign In on the new tab.`),window.open(window.location.href,"_blank")}else it("Sign In failed: "+ee.message,"error")}}),s&&(s.onclick=async k=>{k.preventDefault(),console.log("Admin Logout button clicked"),await Le()});const Re=document.getElementById("testConnectionBtn");Re&&(Re.onclick=async()=>{if(Z){it("Initiating test flow...","info");try{const L=await(await fetch("/api/consultation",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:"Admin Test",email:"quicksitekenya@gmail.com",service:"System Test",message:"This is a test inquiry to verify the notification and dashboard flow."})})).json();L.success?(it("Test flow successful! Check your email and dashboard.","success"),pt()):it("Test flow failed: "+L.error,"error")}catch(k){it("Test flow error: "+k.message,"error")}}}),v&&E&&(E.onclick=()=>v.style.display="none",window.addEventListener("click",k=>{k.target===v&&(v.style.display="none")})),g&&g.addEventListener("submit",async k=>{if(k.preventDefault(),!Z){it("Unauthorized: Only administrators can list websites.","error");return}const b=document.getElementById("siteName").value,L=document.getElementById("siteCategory").value,K=document.getElementById("sitePrice").value,ee=document.getElementById("siteDesc").value,Q=document.getElementById("siteLink").value,de=document.getElementById("siteImage").value,Te=g.querySelector('button[type="submit"]'),nt=Te.innerText;Te.innerText="Publishing...",Te.disabled=!0;try{await Xi(Bt(Mt,"marketplaceItems"),{name:b,category:L,price:K,desc:ee,img:de,link:Q,createdAt:ci()}),g.reset(),document.querySelectorAll(".category-option").forEach(Ue=>Ue.classList.remove("active"));const me=document.getElementById("siteCategory");me&&(me.value=""),v&&(v.style.display="none"),it("Website submitted successfully!")}catch(Ye){se(Ye,le.WRITE,"marketplaceItems")}finally{Te.innerText=nt,Te.disabled=!1}});let Se;const Je=()=>{const k=document.getElementById("liveSlider"),b=document.getElementById("prevSlide"),L=document.getElementById("nextSlide");if(k&&b&&L){Se&&clearInterval(Se);let K=0;const Q=k.querySelectorAll(".slide").length;if(Q>0){const de=()=>{k.style.transform=`translateX(-${K*100}%)`};L.onclick=()=>{K=(K+1)%Q,de()},b.onclick=()=>{K=(K-1+Q)%Q,de()},Se=setInterval(()=>{K=(K+1)%Q,de()},5e3)}}},U=()=>{const k=document.getElementById("liveSlider");if(!k)return;fe&&(fe(),fe=null);const b=rn(Bt(Mt,"marketplaceItems"),ni("createdAt","desc"));fe=ti(b,L=>{k.querySelectorAll(".dynamic-slide").forEach(Q=>Q.remove());const ee=k.querySelector(".no-items-message");ee&&!L.empty?ee.style.display="none":ee&&L.empty&&(ee.style.display="block"),L.forEach(Q=>{const de=Q.data();if(!de)return;const Te=de.name||"Unnamed Project",nt=de.desc||"Premium digital asset.",Ye=$i(de.img,Te,1200,600),me=document.createElement("div");me.className="slide dynamic-slide",me.innerHTML=`
                    <div class="slide-content">
                        <img src="${Ye}" alt="${Te}" onerror="this.src='https://placehold.co/800x500/1a1a1a/d4af37?text=Preview'" referrerPolicy="no-referrer">
                        <div class="slide-info">
                            <span class="slide-tag">Marketplace</span>
                            <h3>${Te}</h3>
                            <p>${nt}</p>
                            <a href="portfolio.html?site=${encodeURIComponent(Te)}" class="btn btn-primary btn-sm">Visit Site</a>
                        </div>
                    </div>
                `,k.insertBefore(me,k.firstChild)}),Je()})};Je();const le={CREATE:"create",UPDATE:"update",DELETE:"delete",LIST:"list",GET:"get",WRITE:"write"},se=(k,b,L)=>{var ee,Q,de,Te,nt,Ye;const K={error:k instanceof Error?k.message:String(k),authInfo:{userId:(ee=Cn.currentUser)==null?void 0:ee.uid,email:(Q=Cn.currentUser)==null?void 0:Q.email,emailVerified:(de=Cn.currentUser)==null?void 0:de.emailVerified,isAnonymous:(Te=Cn.currentUser)==null?void 0:Te.isAnonymous,tenantId:(nt=Cn.currentUser)==null?void 0:nt.tenantId,providerInfo:((Ye=Cn.currentUser)==null?void 0:Ye.providerData.map(me=>({providerId:me.providerId,displayName:me.displayName,email:me.email,photoUrl:me.photoURL})))||[]},operationType:b,path:L};if(console.error("Firestore Error: ",JSON.stringify(K)),K.error.includes("Could not reach Cloud Firestore backend")||K.error.includes("the client is offline")){const me=document.createElement("div");me.className="container firestore-error-msg",me.style.color="#ff4444",me.style.padding="20px",me.style.textAlign="center",me.innerHTML=`
                <p><strong>Database Connection Error:</strong> We could not reach the marketplace database.</p>
                <p style="font-size: 0.8rem; opacity: 0.8; margin-bottom: 15px;">This is often caused by an Ad Blocker (like uBlock Origin) or <strong>Brave Shields</strong> blocking the connection. Please try disabling them or refreshing the page.</p>
                <button class="btn btn-secondary btn-sm" onclick="location.reload()">Retry Connection</button>
            `,_&&(document.querySelectorAll(".firestore-error-msg").forEach(tt=>tt.remove()),_.parentElement.insertBefore(me,_))}throw new Error(JSON.stringify(K))},Me=()=>{if(!_)return;Ae&&(Ae(),Ae=null);const k=rn(Bt(Mt,"marketplaceItems"),ni("createdAt","desc"));Ae=ti(k,b=>{if(_.innerHTML="",b.empty){_.innerHTML=`
                    <div class="no-items-message" style="text-align: center; padding: 40px; opacity: 0.6;">
                        <p>The marketplace is currently being updated with elite digital assets. Stay tuned.</p>
                    </div>
                `;return}const L={};b.forEach(ee=>{const Q=ee.data(),de=Q.category||"Other Services";L[de]||(L[de]=[]),L[de].push({id:ee.id,...Q})}),["E-Commerce Platforms","E-Learning Systems","Social Media Websites","Business Landing Pages","Corporate & Business Sites","Portfolio & Creative Sites","Custom Web Applications","Other Digital Assets"].forEach(ee=>{L[ee]&&(ce(ee,L[ee],_),delete L[ee])}),Object.keys(L).forEach(ee=>{ce(ee,L[ee],_)}),window.lucide&&window.lucide.createIcons()},b=>{se(b,le.LIST,"marketplaceItems")})},ce=(k,b,L)=>{const K=document.createElement("div");K.className="marketplace-category-section reveal",K.style.marginBottom="60px",K.innerHTML=`
            <h3 class="category-title" style="font-size: 1.5rem; margin-bottom: 30px; border-left: 4px solid var(--primary-color); padding-left: 15px; color: white; font-weight: 600;">${k}</h3>
            <div class="marketplace-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 30px;"></div>
        `;const ee=K.querySelector(".marketplace-grid");b.forEach(Q=>{const de=Q.name||"Unnamed Project",Te=Q.price||"0",nt=Q.desc||"No description available.",Ye=Q.category||"Elite Website",me=Q.link||"#",Ue=$i(Q.img,de),tt=document.createElement("div");tt.className="marketplace-item dynamic-item";const xt=isNaN(Number(Te))?Te:Number(Te).toLocaleString(),Rt=Z?`
                <button class="delete-item-btn admin-only block" data-id="${Q.id}" title="Delete Listing" style="position: absolute; top: 10px; right: 10px; background: rgba(255,0,0,0.7); color: white; border: none; border-radius: 50%; width: 30px; height: 30px; cursor: pointer; display: flex; align-items: center; justify-content: center; z-index: 10;">
                    <i data-lucide="trash-2" style="width: 16px; height: 16px;"></i>
                </button>
            `:"";if(tt.innerHTML=`
                <div class="item-badge">For Sale</div>
                ${Rt}
                <img src="${Ue}" alt="${de}" onerror="this.src='https://placehold.co/800x500/1a1a1a/d4af37?text=Preview'" referrerPolicy="no-referrer">
                <div class="item-content">
                    <div class="item-header">
                        <div>
                            <h3 style="margin-bottom: 5px;">${de}</h3>
                            <span style="font-size: 0.7rem; color: var(--primary-color); text-transform: uppercase; letter-spacing: 1px;">${Ye}</span>
                        </div>
                        <span class="price-tag">KSh ${xt}</span>
                    </div>
                    <p>${nt}</p>
                    <div class="item-footer">
                        <a href="contact.html?interest=${encodeURIComponent(de)}" class="btn btn-secondary btn-sm">Inquire Now</a>
                        <a href="${me}" class="btn btn-primary btn-sm" target="_blank">Live Demo</a>
                    </div>
                </div>
            `,Z){const $t=tt.querySelector(".delete-item-btn");$t&&($t.onclick=x=>{x.preventDefault(),x.stopPropagation();const B=$t.getAttribute("data-id");mr(`Are you sure you want to delete "${de}"?`,async()=>{try{await po(Bn(Mt,"marketplaceItems",B)),it("Item deleted successfully.")}catch(z){se(z,le.DELETE,"marketplaceItems/"+B)}})})}ee.appendChild(tt)}),L.appendChild(K)};let j=null;const be=()=>{if(!T)return;j&&(j(),j=null);const k=rn(Bt(Mt,"marketplaceItems"),ni("createdAt","desc"));j=ti(k,b=>{if(T.innerHTML="",b.empty){T.innerHTML=`
                    <div class="no-items-message" style="text-align: center; padding: 40px; opacity: 0.6;">
                        <p>Our latest masterpieces are currently being curated. Check back soon for new additions.</p>
                    </div>
                `;return}const L={};b.forEach(ee=>{const Q=ee.data(),de=Q.category||"Other Services";L[de]||(L[de]=[]),L[de].push({id:ee.id,...Q})}),["E-Commerce Platforms","E-Learning Systems","Social Media Websites","Business Landing Pages","Corporate & Business Sites","Portfolio & Creative Sites","Custom Web Applications","Other Digital Assets"].forEach(ee=>{L[ee]&&(Ve(ee,L[ee],T),delete L[ee])}),Object.keys(L).forEach(ee=>{Ve(ee,L[ee],T)})},b=>{se(b,le.LIST,"marketplaceItems")})},Ve=(k,b,L)=>{const K=document.createElement("div");K.className="portfolio-category-section reveal",K.style.marginBottom="60px",K.innerHTML=`
            <h3 class="category-title" style="font-size: 1.5rem; margin-bottom: 30px; border-left: 4px solid var(--primary-color); padding-left: 15px; color: white; font-weight: 600;">${k}</h3>
            <div class="portfolio-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px;"></div>
        `;const ee=K.querySelector(".portfolio-grid");b.forEach(Q=>{const de=Q.name||"Unnamed Project",Te=Q.category||"Elite Website",nt=Q.link||"#",Ye=$i(Q.img,de),me=document.createElement("div");me.className="portfolio-item dynamic-item",me.innerHTML=`
                <img src="${Ye}" alt="${de}" referrerPolicy="no-referrer">
                <div class="portfolio-overlay">
                    <h3>${de}</h3>
                    <p>${Te}</p>
                    <a href="${nt}" class="btn btn-primary btn-sm" target="_blank">View Live Site</a>
                </div>
            `,ee.appendChild(me)}),L.appendChild(K)};let dt=null;const ft=()=>{if(!A)return;dt&&(dt(),dt=null);const k=rn(Bt(Mt,"marketplaceItems"),ni("createdAt","desc"),pl(3));dt=ti(k,b=>{A.querySelectorAll(".dynamic-item").forEach(ee=>ee.remove());const K=A.querySelector(".static-fallback");K&&!b.empty?K.style.display="none":K&&b.empty&&(K.style.display="block"),b.forEach((ee,Q)=>{const de=ee.data();if(!de)return;const Te=de.name||"Unnamed Project",nt=de.category||"Elite Website",Ye=de.desc||"No description available.",me=de.link||"#",Ue=$i(de.img,Te,1200,800),tt=Q%2!==0,xt=document.createElement("div");xt.className=`featured-grid dynamic-item reveal ${tt?"reverse reveal-right":"reveal-left"}`,xt.style.marginBottom="60px",xt.innerHTML=`
                    <div class="featured-img">
                        <img src="${Ue}" alt="${Te}" referrerPolicy="no-referrer">
                    </div>
                    <div class="featured-info">
                        <span class="section-tag" style="margin-bottom: 15px;">${nt}</span>
                        <h2>${Te.split(" ")[0]} <span>${Te.split(" ").slice(1).join(" ")}</span></h2>
                        <p class="lead">${nt} solution for elite clients.</p>
                        <p>${Ye}</p>
                        <ul class="service-features" style="margin-bottom: 30px;">
                            <li><i data-lucide="check-circle"></i> Custom Elite Design</li>
                            <li><i data-lucide="check-circle"></i> High Performance</li>
                            <li><i data-lucide="check-circle"></i> Secure Integration</li>
                        </ul>
                        <a href="${me}" class="btn btn-primary" target="_blank">Explore Project</a>
                    </div>
                `,A.appendChild(xt)}),window.lucide&&window.lucide.createIcons(),typeof Ge=="function"&&Ge()},b=>{se(b,le.LIST,"marketplaceItems")})};(async()=>{const b=new URLSearchParams(window.location.search).get("site");if(b&&window.location.pathname.includes("portfolio.html")){const L=document.querySelector(".page-header h1"),K=document.querySelector(".page-header p");if(L&&(L.innerHTML=`<span>${b}</span>`),K){K.innerText=`Detailed overview of the ${b} digital masterpiece. Crafted with precision for Nairobi's elite.`;const Q=document.createElement("a");Q.href="portfolio.html",Q.className="btn btn-primary btn-sm",Q.style.marginTop="20px",Q.innerText="← Back to All Projects",K.parentNode.appendChild(Q)}try{const Q=rn(Bt(Mt,"marketplaceItems"),Xr("name","==",b),pl(1));await Oo(Q)}catch(Q){console.error("Error fetching site details:",Q)}window.scrollTo(0,0),document.querySelectorAll(".portfolio-item, .marketplace-item").forEach(Q=>{var Te;const de=(Te=Q.querySelector("h3"))==null?void 0:Te.innerText;de&&b.toLowerCase().includes(de.toLowerCase())&&(Q.scrollIntoView({behavior:"smooth",block:"center"}),Q.style.border="2px solid var(--primary-color)",Q.style.boxShadow="0 0 30px rgba(212, 175, 55, 0.3)")})}})();const hn=()=>{const k=document.getElementById("blog-grid");if(!k)return;const b=rn(Bt(Mt,"blogPosts"),ni("createdAt","desc"));ti(b,L=>{if(k.innerHTML="",L.empty){k.innerHTML='<p style="grid-column: 1/-1; text-align: center; opacity: 0.5;">No elite insights published yet. Check back soon.</p>';return}L.forEach(K=>{const ee=K.data(),Q=K.id,de=document.createElement("article");de.className="blog-card reveal";const Te=$i(ee.img,ee.title,600,400);de.innerHTML=`
                    <div class="blog-img">
                        <img src="${Te}" alt="${ee.title}" referrerPolicy="no-referrer">
                        <div class="blog-category-badge">${ee.category||"Insights"}</div>
                    </div>
                    <div class="blog-content">
                        <span class="blog-date">${ee.date}</span>
                        <h3>${ee.title}</h3>
                        <p>${ee.subtitle}</p>
                        <div style="display: flex; gap: 10px; margin-top: 20px; flex-wrap: wrap;">
                            <a href="blog-post.html?id=${Q}" class="btn btn-primary">Explore Article</a>
                            ${Z?`
                                <button class="btn btn-secondary edit-post-btn" data-id="${Q}" style="padding: 8px 15px; font-size: 0.7rem;">Edit</button>
                                <button class="btn btn-primary delete-post-btn" data-id="${Q}" style="padding: 8px 15px; font-size: 0.7rem; background: #ff4444; border-color: #ff4444;">Delete</button>
                                <button class="btn btn-secondary share-post-btn" data-id="${Q}" data-title="${ee.title}" style="padding: 8px 15px; font-size: 0.7rem; background: #25D366; border-color: #25D366; color: white;">Share</button>
                            `:""}
                        </div>
                    </div>
                `,k.appendChild(de)}),Z&&(document.querySelectorAll(".edit-post-btn").forEach(K=>{K.onclick=ee=>{ee.preventDefault();const Q=K.getAttribute("data-id");Fo(Q)}}),document.querySelectorAll(".delete-post-btn").forEach(K=>{K.onclick=ee=>{ee.preventDefault();const Q=K.getAttribute("data-id");ho(Q)}}),document.querySelectorAll(".share-post-btn").forEach(K=>{K.onclick=ee=>{ee.preventDefault();const Q=K.getAttribute("data-id"),de=K.getAttribute("data-title");$r(Q,de)}})),window.lucide&&window.lucide.createIcons()},L=>{se(L,le.LIST,"blogPosts")})},Fo=async k=>{try{const b=Bn(Mt,"blogPosts",k),L=await Oo(rn(Bt(Mt,"blogPosts"),Xr("__name__","==",k)));if(!L.empty){const K=L.docs[0].data();document.getElementById("blogModalTitle").innerHTML="Edit <span>Blog Post</span>",document.getElementById("editPostId").value=k,document.getElementById("postTitleInput").value=K.title,document.getElementById("postSubtitleInput").value=K.subtitle,document.getElementById("postImgInput").value=K.img,document.getElementById("postCategoryInput").value=K.category||"Insights",document.getElementById("postContentInput").value=K.content,c.style.display="block"}}catch(b){se(b,le.GET,`blogPosts/${k}`)}},ho=k=>{mr("Are you sure you want to delete this elite insight?",async()=>{try{await po(Bn(Mt,"blogPosts",k)),it("Article removed from the digital ether.")}catch(b){se(b,le.DELETE,`blogPosts/${k}`)}})},$r=(k,b)=>{const L=encodeURIComponent(`${window.location.origin}/blog-post.html?id=${k}`),K=encodeURIComponent(b),ee=`${window.location.origin}/blog-post.html?id=${k}`,Q=document.createElement("div");Q.className="modal active",Q.style.display="flex",Q.style.alignItems="center",Q.style.justifyContent="center",Q.style.zIndex="10000",Q.innerHTML=`
            <div class="modal-content" style="text-align: center; max-width: 400px; padding: 40px 30px;">
                <div style="width: 60px; height: 60px; background: rgba(37, 211, 102, 0.1); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                    <i data-lucide="check" style="color: #25D366; width: 30px; height: 30px;"></i>
                </div>
                <h3 style="margin-bottom: 10px;">Post Published! 🎉</h3>
                <p style="margin-bottom: 25px; font-size: 0.9rem; opacity: 0.8;">Share your elite insight with your network.</p>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                    <a href="https://www.facebook.com/sharer/sharer.php?u=${L}" target="_blank" class="btn btn-primary" style="background: #1877F2; border-color: #1877F2; color: white; display: flex; justify-content: center; gap: 10px;">
                        <i data-lucide="facebook"></i> Share on Facebook
                    </a>
                    <a href="https://twitter.com/intent/tweet?text=${K}&url=${L}" target="_blank" class="btn btn-primary" style="background: #1DA1F2; border-color: #1DA1F2; color: white; display: flex; justify-content: center; gap: 10px;">
                        <i data-lucide="twitter"></i> Share on Twitter (X)
                    </a>
                    <a href="https://api.whatsapp.com/send?text=${K}%20${L}" target="_blank" class="btn btn-primary" style="background: #25D366; border-color: #25D366; color: white; display: flex; justify-content: center; gap: 10px;">
                        <i data-lucide="message-circle"></i> Share on WhatsApp
                    </a>
                    <button id="instagram-share-btn" class="btn btn-primary" style="background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); border: none; color: white; display: flex; justify-content: center; gap: 10px;">
                        <i data-lucide="instagram"></i> Copy Link for Instagram
                    </button>
                    <button id="tiktok-share-btn" class="btn btn-primary" style="background: #000000; border-color: #333333; color: white; display: flex; justify-content: center; gap: 10px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-tiktok"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg> Copy Link for TikTok
                    </button>
                </div>
                <button id="close-share-prompt" class="btn btn-secondary" style="margin-top: 25px; width: 100%;">Done</button>
            </div>
        `,document.body.appendChild(Q),window.lucide&&window.lucide.createIcons(),Q.querySelector("#tiktok-share-btn").onclick=()=>{navigator.clipboard.writeText(ee).then(()=>{it("Link copied! Open TikTok to paste and share."),setTimeout(()=>{window.open("https://www.tiktok.com/","_blank")},1500)})},Q.querySelector("#instagram-share-btn").onclick=()=>{navigator.clipboard.writeText(ee).then(()=>{it("Link copied! Open Instagram to paste in your bio/story."),setTimeout(()=>{window.open("https://www.instagram.com/","_blank")},1500)})};const de=()=>document.body.removeChild(Q);Q.querySelector("#close-share-prompt").onclick=de,Q.onclick=Te=>{Te.target===Q&&de()}};m&&(m.onsubmit=async k=>{k.preventDefault();const b=document.getElementById("editPostId").value,L=document.getElementById("postImgInput").value,K=m.querySelector('button[type="submit"]'),ee=K.innerText;K.innerText="Publishing...",K.disabled=!0;try{const Q={title:document.getElementById("postTitleInput").value,subtitle:document.getElementById("postSubtitleInput").value,img:L,category:document.getElementById("postCategoryInput").value,content:document.getElementById("postContentInput").value,date:new Date().toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"}),createdAt:ci()};let de=b;b?(await ko(Bn(Mt,"blogPosts",b),Q),it("Insight updated successfully.")):(de=(await Xi(Bt(Mt,"blogPosts"),Q)).id,it("New elite insight published.")),c.style.display="none",m.reset()}catch(Q){se(Q,b?le.UPDATE:le.CREATE,"blogPosts")}finally{K.innerText=ee,K.disabled=!1}});const Bo=async()=>{const b=new URLSearchParams(window.location.search).get("id");if(b&&window.location.pathname.includes("blog-post.html"))try{const L=rn(Bt(Mt,"blogPosts"),Xr("__name__","==",b)),K=await Oo(L);if(K.empty){const ee=document.getElementById("post-title"),Q=document.getElementById("post-subtitle");ee&&(ee.innerText="Article Not Found"),Q&&(Q.innerText="The requested article could not be located.")}else{const ee=K.docs[0].data();document.title=`${ee.title} | QuickSite Kenya`;const Q=document.getElementById("post-date"),de=document.getElementById("post-title"),Te=document.getElementById("post-subtitle"),nt=document.getElementById("post-img-container"),Ye=document.getElementById("post-body");if(Q&&(Q.innerText=ee.date),de&&(de.innerText=ee.title),Te&&(Te.innerText=ee.subtitle),nt){const me=$i(ee.img,ee.title,1200,600);nt.innerHTML=`<img src="${me}" alt="${ee.title}" referrerPolicy="no-referrer">`}Ye&&(Ye.innerHTML=ee.content),window.lucide&&window.lucide.createIcons()}}catch(L){se(L,le.GET,`blogPosts/${b}`)}};hn(),Bo()});

/**
 * @license
 * Lo-Dash 2.4.2 (Custom Build) lodash.com/license | Underscore.js 1.5.2 underscorejs.org/LICENSE
 * Build: `lodash modern -o ./dist/lodash.js`
 */
;(function(){function n(n,r,t){for(var e=(t||0)-1,u=n?n.length:0;++e<u;)if(n[e]===r)return e;return-1}function r(r,t){var e=typeof t;if(r=r.cache,"boolean"==e||null==t)return r[t]?0:-1;"number"!=e&&"string"!=e&&(e="object");var u="number"==e?t:m+t;return r=(r=r[e])&&r[u],"object"==e?r&&n(r,t)>-1?0:-1:r?0:-1}function t(n){var r=this.cache,t=typeof n;if("boolean"==t||null==n)r[n]=!0;else{"number"!=t&&"string"!=t&&(t="object");var e="number"==t?n:m+n,u=r[t]||(r[t]={});"object"==t?(u[e]||(u[e]=[])).push(n):u[e]=!0;

}}function e(n){return n.charCodeAt(0)}function u(n,r){for(var t=n.criteria,e=r.criteria,u=-1,o=t.length;++u<o;){var a=t[u],i=e[u];if(a!==i){if(a>i||"undefined"==typeof a)return 1;if(a<i||"undefined"==typeof i)return-1}}return n.index-r.index}function o(n){var r=-1,e=n.length,u=n[0],o=n[e/2|0],a=n[e-1];if(u&&"object"==typeof u&&o&&"object"==typeof o&&a&&"object"==typeof a)return!1;var i=f();i["false"]=i["null"]=i["true"]=i.undefined=!1;var l=f();for(l.array=n,l.cache=i,l.push=t;++r<e;)l.push(n[r]);

return l}function a(n){return"\\"+G[n]}function i(){return h.pop()||[]}function f(){return g.pop()||{array:null,cache:null,criteria:null,"false":!1,index:0,"null":!1,number:null,object:null,push:null,string:null,"true":!1,undefined:!1,value:null}}function l(n){n.length=0,h.length<_&&h.push(n)}function c(n){var r=n.cache;r&&c(r),n.array=n.cache=n.criteria=n.object=n.number=n.string=n.value=null,g.length<_&&g.push(n)}function p(n,r,t){r||(r=0),"undefined"==typeof t&&(t=n?n.length:0);for(var e=-1,u=t-r||0,o=Array(u<0?0:u);++e<u;)o[e]=n[r+e];

return o}function s(t){function h(n){return n&&"object"==typeof n&&!Yt(n)&&Tt.call(n,"__wrapped__")?n:new g(n)}function g(n,r){this.__chain__=!!r,this.__wrapped__=n}function _(n){function r(){if(e){var n=p(e);$t.apply(n,arguments)}if(this instanceof r){var o=J(t.prototype),a=t.apply(o,n||arguments);return Sn(a)?a:o}return t.apply(u,n||arguments)}var t=n[0],e=n[2],u=n[4];return Xt(r,n),r}function G(n,r,t,e,u){if(t){var o=t(n);if("undefined"!=typeof o)return o}var a=Sn(n);if(!a)return n;var f=Nt.call(n);

if(!K[f])return n;var c=Jt[f];switch(f){case F:case B:return new c(+n);case q:case P:return new c(n);case L:return o=c(n.source,C.exec(n)),o.lastIndex=n.lastIndex,o}var s=Yt(n);if(r){var v=!e;e||(e=i()),u||(u=i());for(var h=e.length;h--;)if(e[h]==n)return u[h];o=s?c(n.length):{}}else o=s?p(n):oe({},n);return s&&(Tt.call(n,"index")&&(o.index=n.index),Tt.call(n,"input")&&(o.input=n.input)),r?(e.push(n),u.push(o),(s?Xn:fe)(n,function(n,a){o[a]=G(n,r,t,e,u)}),v&&(l(e),l(u)),o):o}function J(n,r){return Sn(n)?zt(n):{};

}function Q(n,r,t){if("function"!=typeof n)return Yr;if("undefined"==typeof r||!("prototype"in n))return n;var e=n.__bindData__;if("undefined"==typeof e&&(Qt.funcNames&&(e=!n.name),e=e||!Qt.funcDecomp,!e)){var u=At.call(n);Qt.funcNames||(e=!O.test(u)),e||(e=I.test(u),Xt(n,e))}if(e===!1||e!==!0&&1&e[1])return n;switch(t){case 1:return function(t){return n.call(r,t)};case 2:return function(t,e){return n.call(r,t,e)};case 3:return function(t,e,u){return n.call(r,t,e,u)};case 4:return function(t,e,u,o){
return n.call(r,t,e,u,o)}}return $r(n,r)}function X(n){function r(){var n=f?a:this;if(u){var h=p(u);$t.apply(h,arguments)}if((o||c)&&(h||(h=p(arguments)),o&&$t.apply(h,o),c&&h.length<i))return e|=16,X([t,s?e:-4&e,h,null,a,i]);if(h||(h=arguments),l&&(t=n[v]),this instanceof r){n=J(t.prototype);var g=t.apply(n,h);return Sn(g)?g:n}return t.apply(n,h)}var t=n[0],e=n[1],u=n[2],o=n[3],a=n[4],i=n[5],f=1&e,l=2&e,c=4&e,s=8&e,v=t;return Xt(r,n),r}function Y(t,e){var u=-1,a=ln(),i=t?t.length:0,f=i>=b&&a===n,l=[];

if(f){var p=o(e);p?(a=r,e=p):f=!1}for(;++u<i;){var s=t[u];a(e,s)<0&&l.push(s)}return f&&c(e),l}function nn(n,r,t,e){for(var u=(e||0)-1,o=n?n.length:0,a=[];++u<o;){var i=n[u];if(i&&"object"==typeof i&&"number"==typeof i.length&&(Yt(i)||vn(i))){r||(i=nn(i,r,t));var f=-1,l=i.length,c=a.length;for(a.length+=l;++f<l;)a[c++]=i[f]}else t||a.push(i)}return a}function rn(n,r,t,e,u,o){if(t){var a=t(n,r);if("undefined"!=typeof a)return!!a}if(n===r)return 0!==n||1/n==1/r;var f=typeof n,c=typeof r;if(n===n&&(!n||!V[f])&&(!r||!V[c]))return!1;

if(null==n||null==r)return n===r;var p=Nt.call(n),s=Nt.call(r);if(p==T&&(p=z),s==T&&(s=z),p!=s)return!1;switch(p){case F:case B:return+n==+r;case q:return n!=+n?r!=+r:0==n?1/n==1/r:n==+r;case L:case P:return n==jt(r)}var h=p==$;if(!h){var g=Tt.call(n,"__wrapped__"),y=Tt.call(r,"__wrapped__");if(g||y)return rn(g?n.__wrapped__:n,y?r.__wrapped__:r,t,e,u,o);if(p!=z)return!1;var m=n.constructor,b=r.constructor;if(m!=b&&!(In(m)&&m instanceof m&&In(b)&&b instanceof b)&&"constructor"in n&&"constructor"in r)return!1;

}var _=!u;u||(u=i()),o||(o=i());for(var d=u.length;d--;)if(u[d]==n)return o[d]==r;var w=0;if(a=!0,u.push(n),o.push(r),h){if(d=n.length,w=r.length,a=w==d,a||e)for(;w--;){var j=d,k=r[w];if(e)for(;j--&&!(a=rn(n[j],k,t,e,u,o)););else if(!(a=rn(n[w],k,t,e,u,o)))break}}else ie(r,function(r,i,f){return Tt.call(f,i)?(w++,a=Tt.call(n,i)&&rn(n[i],r,t,e,u,o)):v}),a&&!e&&ie(n,function(n,r,t){return Tt.call(t,r)?a=--w>-1:v});return u.pop(),o.pop(),_&&(l(u),l(o)),a}function tn(n,r,t,e,u){(Yt(r)?Xn:fe)(r,function(r,o){
var a,i,f=r,l=n[o];if(r&&((i=Yt(r))||le(r))){for(var c=e.length;c--;)if(a=e[c]==r){l=u[c];break}if(!a){var p;t&&(f=t(l,r),(p="undefined"!=typeof f)&&(l=f)),p||(l=i?Yt(l)?l:[]:le(l)?l:{}),e.push(r),u.push(l),p||tn(l,r,t,e,u)}}else t&&(f=t(l,r),"undefined"==typeof f&&(f=r)),"undefined"!=typeof f&&(l=f);n[o]=l})}function en(n,r){return n+St(Ht()*(r-n+1))}function un(t,e,u){var a=-1,f=ln(),p=t?t.length:0,s=[],v=!e&&p>=b&&f===n,h=u||v?i():s;if(v){var g=o(h);f=r,h=g}for(;++a<p;){var y=t[a],m=u?u(y,a,t):y;

(e?!a||h[h.length-1]!==m:f(h,m)<0)&&((u||v)&&h.push(m),s.push(y))}return v?(l(h.array),c(h)):u&&l(h),s}function on(n){return function(r,t,e){var u={};t=h.createCallback(t,e,3);var o=-1,a=r?r.length:0;if("number"==typeof a)for(;++o<a;){var i=r[o];n(u,i,t(i,o,r),r)}else fe(r,function(r,e,o){n(u,r,t(r,e,o),o)});return u}}function an(n,r,t,e,u,o){var a=1&r,i=2&r,f=4&r,l=16&r,c=32&r;if(!i&&!In(n))throw new kt;l&&!t.length&&(r&=-17,l=t=!1),c&&!e.length&&(r&=-33,c=e=!1);var s=n&&n.__bindData__;if(s&&s!==!0)return s=p(s),
s[2]&&(s[2]=p(s[2])),s[3]&&(s[3]=p(s[3])),!a||1&s[1]||(s[4]=u),!a&&1&s[1]&&(r|=8),!f||4&s[1]||(s[5]=o),l&&$t.apply(s[2]||(s[2]=[]),t),c&&Wt.apply(s[3]||(s[3]=[]),e),s[1]|=r,an.apply(null,s);var v=1==r||17===r?_:X;return v([n,r,t,e,u,o])}function fn(n){return re[n]}function ln(){var r=(r=h.indexOf)===br?n:r;return r}function cn(n){return"function"==typeof n&&Rt.test(n)}function pn(n){var r,t;return n&&Nt.call(n)==z&&(r=n.constructor,!In(r)||r instanceof r)?(ie(n,function(n,r){t=r}),"undefined"==typeof t||Tt.call(n,t)):!1;

}function sn(n){return te[n]}function vn(n){return n&&"object"==typeof n&&"number"==typeof n.length&&Nt.call(n)==T||!1}function hn(n,r,t,e){return"boolean"!=typeof r&&null!=r&&(e=t,t=r,r=!1),G(n,r,"function"==typeof t&&Q(t,e,1))}function gn(n,r,t){return G(n,!0,"function"==typeof r&&Q(r,t,1))}function yn(n,r){var t=J(n);return r?oe(t,r):t}function mn(n,r,t){var e;return r=h.createCallback(r,t,3),fe(n,function(n,t,u){return r(n,t,u)?(e=t,!1):v}),e}function bn(n,r,t){var e;return r=h.createCallback(r,t,3),
dn(n,function(n,t,u){return r(n,t,u)?(e=t,!1):v}),e}function _n(n,r,t){var e=[];ie(n,function(n,r){e.push(r,n)});var u=e.length;for(r=Q(r,t,3);u--&&r(e[u--],e[u],n)!==!1;);return n}function dn(n,r,t){var e=ne(n),u=e.length;for(r=Q(r,t,3);u--;){var o=e[u];if(r(n[o],o,n)===!1)break}return n}function wn(n){var r=[];return ie(n,function(n,t){In(n)&&r.push(t)}),r.sort()}function jn(n,r){return n?Tt.call(n,r):!1}function kn(n){for(var r=-1,t=ne(n),e=t.length,u={};++r<e;){var o=t[r];u[n[o]]=o}return u}function xn(n){
return n===!0||n===!1||n&&"object"==typeof n&&Nt.call(n)==F||!1}function Cn(n){return n&&"object"==typeof n&&Nt.call(n)==B||!1}function On(n){return n&&1===n.nodeType||!1}function Nn(n){var r=!0;if(!n)return r;var t=Nt.call(n),e=n.length;return t==$||t==P||t==T||t==z&&"number"==typeof e&&In(n.splice)?!e:(fe(n,function(){return r=!1}),r)}function Rn(n,r,t,e){return rn(n,r,"function"==typeof t&&Q(t,e,2))}function En(n){return Pt(n)&&!Kt(parseFloat(n))}function In(n){return"function"==typeof n}function Sn(n){
return!(!n||!V[typeof n])}function An(n){return Tn(n)&&n!=+n}function Dn(n){return null===n}function Tn(n){return"number"==typeof n||n&&"object"==typeof n&&Nt.call(n)==q||!1}function $n(n){return n&&"object"==typeof n&&Nt.call(n)==L||!1}function Fn(n){return"string"==typeof n||n&&"object"==typeof n&&Nt.call(n)==P||!1}function Bn(n){return"undefined"==typeof n}function Wn(n,r,t){var e={};return r=h.createCallback(r,t,3),fe(n,function(n,t,u){e[t]=r(n,t,u)}),e}function qn(n){var r=arguments,t=2;if(!Sn(n))return n;

if("number"!=typeof r[2]&&(t=r.length),t>3&&"function"==typeof r[t-2])var e=Q(r[--t-1],r[t--],2);else t>2&&"function"==typeof r[t-1]&&(e=r[--t]);for(var u=p(arguments,1,t),o=-1,a=i(),f=i();++o<t;)tn(n,u[o],e,a,f);return l(a),l(f),n}function zn(n,r,t){var e={};if("function"!=typeof r){var u=[];ie(n,function(n,r){u.push(r)}),u=Y(u,nn(arguments,!0,!1,1));for(var o=-1,a=u.length;++o<a;){var i=u[o];e[i]=n[i]}}else r=h.createCallback(r,t,3),ie(n,function(n,t,u){r(n,t,u)||(e[t]=n)});return e}function Ln(n){
for(var r=-1,t=ne(n),e=t.length,u=ht(e);++r<e;){var o=t[r];u[r]=[o,n[o]]}return u}function Pn(n,r,t){var e={};if("function"!=typeof r)for(var u=-1,o=nn(arguments,!0,!1,1),a=Sn(n)?o.length:0;++u<a;){var i=o[u];i in n&&(e[i]=n[i])}else r=h.createCallback(r,t,3),ie(n,function(n,t,u){r(n,t,u)&&(e[t]=n)});return e}function Kn(n,r,t,e){var u=Yt(n);if(null==t)if(u)t=[];else{var o=n&&n.constructor,a=o&&o.prototype;t=J(a)}return r&&(r=h.createCallback(r,e,4),(u?Xn:fe)(n,function(n,e,u){return r(t,n,e,u)})),
t}function Un(n){for(var r=-1,t=ne(n),e=t.length,u=ht(e);++r<e;)u[r]=n[t[r]];return u}function Mn(n){for(var r=arguments,t=-1,e=nn(r,!0,!1,1),u=r[2]&&r[2][r[1]]===n?1:e.length,o=ht(u);++t<u;)o[t]=n[e[t]];return o}function Vn(n,r,t){var e=-1,u=ln(),o=n?n.length:0,a=!1;return t=(t<0?Mt(0,o+t):t)||0,Yt(n)?a=u(n,r,t)>-1:"number"==typeof o?a=(Fn(n)?n.indexOf(r,t):u(n,r,t))>-1:fe(n,function(n){return++e<t?v:!(a=n===r)}),a}function Gn(n,r,t){var e=!0;r=h.createCallback(r,t,3);var u=-1,o=n?n.length:0;if("number"==typeof o)for(;++u<o&&(e=!!r(n[u],u,n)););else fe(n,function(n,t,u){
return e=!!r(n,t,u)});return e}function Hn(n,r,t){var e=[];r=h.createCallback(r,t,3);var u=-1,o=n?n.length:0;if("number"==typeof o)for(;++u<o;){var a=n[u];r(a,u,n)&&e.push(a)}else fe(n,function(n,t,u){r(n,t,u)&&e.push(n)});return e}function Jn(n,r,t){r=h.createCallback(r,t,3);var e=-1,u=n?n.length:0;if("number"!=typeof u){var o;return fe(n,function(n,t,e){return r(n,t,e)?(o=n,!1):v}),o}for(;++e<u;){var a=n[e];if(r(a,e,n))return a}}function Qn(n,r,t){var e;return r=h.createCallback(r,t,3),Yn(n,function(n,t,u){
return r(n,t,u)?(e=n,!1):v}),e}function Xn(n,r,t){var e=-1,u=n?n.length:0;if(r=r&&"undefined"==typeof t?r:Q(r,t,3),"number"==typeof u)for(;++e<u&&r(n[e],e,n)!==!1;);else fe(n,r);return n}function Yn(n,r,t){var e=n?n.length:0;if(r=r&&"undefined"==typeof t?r:Q(r,t,3),"number"==typeof e)for(;e--&&r(n[e],e,n)!==!1;);else{var u=ne(n);e=u.length,fe(n,function(n,t,o){return t=u?u[--e]:--e,r(o[t],t,o)})}return n}function Zn(n,r){var t=p(arguments,2),e=-1,u="function"==typeof r,o=n?n.length:0,a=ht("number"==typeof o?o:0);

return Xn(n,function(n){a[++e]=(u?r:n[r]).apply(n,t)}),a}function nr(n,r,t){var e=-1,u=n?n.length:0;if(r=h.createCallback(r,t,3),"number"==typeof u)for(var o=ht(u);++e<u;)o[e]=r(n[e],e,n);else o=[],fe(n,function(n,t,u){o[++e]=r(n,t,u)});return o}function rr(n,r,t){var u=-(1/0),o=u;if("function"!=typeof r&&t&&t[r]===n&&(r=null),null==r&&Yt(n))for(var a=-1,i=n.length;++a<i;){var f=n[a];f>o&&(o=f)}else r=null==r&&Fn(n)?e:h.createCallback(r,t,3),Xn(n,function(n,t,e){var a=r(n,t,e);a>u&&(u=a,o=n)});return o;

}function tr(n,r,t){var u=1/0,o=u;if("function"!=typeof r&&t&&t[r]===n&&(r=null),null==r&&Yt(n))for(var a=-1,i=n.length;++a<i;){var f=n[a];f<o&&(o=f)}else r=null==r&&Fn(n)?e:h.createCallback(r,t,3),Xn(n,function(n,t,e){var a=r(n,t,e);a<u&&(u=a,o=n)});return o}function er(n,r,t,e){if(!n)return t;var u=arguments.length<3;r=h.createCallback(r,e,4);var o=-1,a=n.length;if("number"==typeof a)for(u&&(t=n[++o]);++o<a;)t=r(t,n[o],o,n);else fe(n,function(n,e,o){t=u?(u=!1,n):r(t,n,e,o)});return t}function ur(n,r,t,e){
var u=arguments.length<3;return r=h.createCallback(r,e,4),Yn(n,function(n,e,o){t=u?(u=!1,n):r(t,n,e,o)}),t}function or(n,r,t){return r=h.createCallback(r,t,3),Hn(n,function(n,t,e){return!r(n,t,e)})}function ar(n,r,t){if(n&&"number"!=typeof n.length&&(n=Un(n)),null==r||t)return n?n[en(0,n.length-1)]:v;var e=ir(n);return e.length=Vt(Mt(0,r),e.length),e}function ir(n){var r=-1,t=n?n.length:0,e=ht("number"==typeof t?t:0);return Xn(n,function(n){var t=en(0,++r);e[r]=e[t],e[t]=n}),e}function fr(n){var r=n?n.length:0;

return"number"==typeof r?r:ne(n).length}function lr(n,r,t){var e;r=h.createCallback(r,t,3);var u=-1,o=n?n.length:0;if("number"==typeof o)for(;++u<o&&!(e=r(n[u],u,n)););else fe(n,function(n,t,u){return!(e=r(n,t,u))});return!!e}function cr(n,r,t){var e=-1,o=Yt(r),a=n?n.length:0,p=ht("number"==typeof a?a:0);for(o||(r=h.createCallback(r,t,3)),Xn(n,function(n,t,u){var a=p[++e]=f();o?a.criteria=nr(r,function(r){return n[r]}):(a.criteria=i())[0]=r(n,t,u),a.index=e,a.value=n}),a=p.length,p.sort(u);a--;){
var s=p[a];p[a]=s.value,o||l(s.criteria),c(s)}return p}function pr(n){return n&&"number"==typeof n.length?p(n):Un(n)}function sr(n){for(var r=-1,t=n?n.length:0,e=[];++r<t;){var u=n[r];u&&e.push(u)}return e}function vr(n){return Y(n,nn(arguments,!0,!0,1))}function hr(n,r,t){var e=-1,u=n?n.length:0;for(r=h.createCallback(r,t,3);++e<u;)if(r(n[e],e,n))return e;return-1}function gr(n,r,t){var e=n?n.length:0;for(r=h.createCallback(r,t,3);e--;)if(r(n[e],e,n))return e;return-1}function yr(n,r,t){var e=0,u=n?n.length:0;

if("number"!=typeof r&&null!=r){var o=-1;for(r=h.createCallback(r,t,3);++o<u&&r(n[o],o,n);)e++}else if(e=r,null==e||t)return n?n[0]:v;return p(n,0,Vt(Mt(0,e),u))}function mr(n,r,t,e){return"boolean"!=typeof r&&null!=r&&(e=t,t="function"!=typeof r&&e&&e[r]===n?null:r,r=!1),null!=t&&(n=nr(n,t,e)),nn(n,r)}function br(r,t,e){if("number"==typeof e){var u=r?r.length:0;e=e<0?Mt(0,u+e):e||0}else if(e){var o=Nr(r,t);return r[o]===t?o:-1}return n(r,t,e)}function _r(n,r,t){var e=0,u=n?n.length:0;if("number"!=typeof r&&null!=r){
var o=u;for(r=h.createCallback(r,t,3);o--&&r(n[o],o,n);)e++}else e=null==r||t?1:r||e;return p(n,0,Vt(Mt(0,u-e),u))}function dr(){for(var t=[],e=-1,u=arguments.length,a=i(),f=ln(),p=f===n,s=i();++e<u;){var v=arguments[e];(Yt(v)||vn(v))&&(t.push(v),a.push(p&&v.length>=b&&o(e?t[e]:s)))}var h=t[0],g=-1,y=h?h.length:0,m=[];n:for(;++g<y;){var _=a[0];if(v=h[g],(_?r(_,v):f(s,v))<0){for(e=u,(_||s).push(v);--e;)if(_=a[e],(_?r(_,v):f(t[e],v))<0)continue n;m.push(v)}}for(;u--;)_=a[u],_&&c(_);return l(a),l(s),
m}function wr(n,r,t){var e=0,u=n?n.length:0;if("number"!=typeof r&&null!=r){var o=u;for(r=h.createCallback(r,t,3);o--&&r(n[o],o,n);)e++}else if(e=r,null==e||t)return n?n[u-1]:v;return p(n,Mt(0,u-e))}function jr(n,r,t){var e=n?n.length:0;for("number"==typeof t&&(e=(t<0?Mt(0,e+t):Vt(t,e-1))+1);e--;)if(n[e]===r)return e;return-1}function kr(n){for(var r=arguments,t=0,e=r.length,u=n?n.length:0;++t<e;)for(var o=-1,a=r[t];++o<u;)n[o]===a&&(Bt.call(n,o--,1),u--);return n}function xr(n,r,t){n=+n||0,t="number"==typeof t?t:+t||1,
null==r&&(r=n,n=0);for(var e=-1,u=Mt(0,Et((r-n)/(t||1))),o=ht(u);++e<u;)o[e]=n,n+=t;return o}function Cr(n,r,t){var e=-1,u=n?n.length:0,o=[];for(r=h.createCallback(r,t,3);++e<u;){var a=n[e];r(a,e,n)&&(o.push(a),Bt.call(n,e--,1),u--)}return o}function Or(n,r,t){if("number"!=typeof r&&null!=r){var e=0,u=-1,o=n?n.length:0;for(r=h.createCallback(r,t,3);++u<o&&r(n[u],u,n);)e++}else e=null==r||t?1:Mt(0,r);return p(n,e)}function Nr(n,r,t,e){var u=0,o=n?n.length:u;for(t=t?h.createCallback(t,e,1):Yr,r=t(r);u<o;){
var a=u+o>>>1;t(n[a])<r?u=a+1:o=a}return u}function Rr(){return un(nn(arguments,!0,!0))}function Er(n,r,t,e){return"boolean"!=typeof r&&null!=r&&(e=t,t="function"!=typeof r&&e&&e[r]===n?null:r,r=!1),null!=t&&(t=h.createCallback(t,e,3)),un(n,r,t)}function Ir(n){return Y(n,p(arguments,1))}function Sr(){for(var n=-1,r=arguments.length;++n<r;){var t=arguments[n];if(Yt(t)||vn(t))var e=e?un(Y(e,t).concat(Y(t,e))):t}return e||[]}function Ar(){for(var n=arguments.length>1?arguments:arguments[0],r=-1,t=n?rr(ve(n,"length")):0,e=ht(t<0?0:t);++r<t;)e[r]=ve(n,r);

return e}function Dr(n,r){var t=-1,e=n?n.length:0,u={};for(r||!e||Yt(n[0])||(r=[]);++t<e;){var o=n[t];r?u[o]=r[t]:o&&(u[o[0]]=o[1])}return u}function Tr(n,r){if(!In(r))throw new kt;return function(){return--n<1?r.apply(this,arguments):v}}function $r(n,r){return arguments.length>2?an(n,17,p(arguments,2),null,r):an(n,1,null,null,r)}function Fr(n){for(var r=arguments.length>1?nn(arguments,!0,!1,1):wn(n),t=-1,e=r.length;++t<e;){var u=r[t];n[u]=an(n[u],1,null,null,n)}return n}function Br(n,r){return arguments.length>2?an(r,19,p(arguments,2),null,n):an(r,3,null,null,n);

}function Wr(){for(var n=arguments,r=n.length;r--;)if(!In(n[r]))throw new kt;return function(){for(var r=arguments,t=n.length;t--;)r=[n[t].apply(this,r)];return r[0]}}function qr(n,r){return r="number"==typeof r?r:+r||n.length,an(n,4,null,null,null,r)}function zr(n,r,t){var e,u,o,a,i,f,l,c=0,p=!1,s=!0;if(!In(n))throw new kt;if(r=Mt(0,r)||0,t===!0){var h=!0;s=!1}else Sn(t)&&(h=t.leading,p="maxWait"in t&&(Mt(r,t.maxWait)||0),s="trailing"in t?t.trailing:s);var g=function(){var t=r-(ge()-a);if(t>0)f=Ft(g,t);
else{u&&It(u);var p=l;u=f=l=v,p&&(c=ge(),o=n.apply(i,e),f||u||(e=i=null))}},y=function(){f&&It(f),u=f=l=v,(s||p!==r)&&(c=ge(),o=n.apply(i,e),f||u||(e=i=null))};return function(){if(e=arguments,a=ge(),i=this,l=s&&(f||!h),p===!1)var t=h&&!f;else{u||h||(c=a);var v=p-(a-c),m=v<=0;m?(u&&(u=It(u)),c=a,o=n.apply(i,e)):u||(u=Ft(y,v))}return m&&f?f=It(f):f||r===p||(f=Ft(g,r)),t&&(m=!0,o=n.apply(i,e)),!m||f||u||(e=i=null),o}}function Lr(n){if(!In(n))throw new kt;var r=p(arguments,1);return Ft(function(){n.apply(v,r);

},1)}function Pr(n,r){if(!In(n))throw new kt;var t=p(arguments,2);return Ft(function(){n.apply(v,t)},r)}function Kr(n,r){if(!In(n))throw new kt;var t=function(){var e=t.cache,u=r?r.apply(this,arguments):m+arguments[0];return Tt.call(e,u)?e[u]:e[u]=n.apply(this,arguments)};return t.cache={},t}function Ur(n){var r,t;if(!In(n))throw new kt;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}}function Mr(n){return an(n,16,p(arguments,1))}function Vr(n){return an(n,32,null,p(arguments,1));

}function Gr(n,r,t){var e=!0,u=!0;if(!In(n))throw new kt;return t===!1?e=!1:Sn(t)&&(e="leading"in t?t.leading:e,u="trailing"in t?t.trailing:u),U.leading=e,U.maxWait=r,U.trailing=u,zr(n,r,U)}function Hr(n,r){return an(r,16,[n])}function Jr(n){return function(){return n}}function Qr(n,r,t){var e=typeof n;if(null==n||"function"==e)return Q(n,r,t);if("object"!=e)return tt(n);var u=ne(n),o=u[0],a=n[o];return 1!=u.length||a!==a||Sn(a)?function(r){for(var t=u.length,e=!1;t--&&(e=rn(r[u[t]],n[u[t]],null,!0)););
return e}:function(n){var r=n[o];return a===r&&(0!==a||1/a==1/r)}}function Xr(n){return null==n?"":jt(n).replace(ue,fn)}function Yr(n){return n}function Zr(n,r,t){var e=!0,u=r&&wn(r);r&&(t||u.length)||(null==t&&(t=r),o=g,r=n,n=h,u=wn(r)),t===!1?e=!1:Sn(t)&&"chain"in t&&(e=t.chain);var o=n,a=In(o);Xn(u,function(t){var u=n[t]=r[t];a&&(o.prototype[t]=function(){var r=this.__chain__,t=this.__wrapped__,a=[t];$t.apply(a,arguments);var i=u.apply(n,a);if(e||r){if(t===i&&Sn(i))return this;i=new o(i),i.__chain__=r;

}return i})})}function nt(){return t._=Ot,this}function rt(){}function tt(n){return function(r){return r[n]}}function et(n,r,t){var e=null==n,u=null==r;if(null==t&&("boolean"==typeof n&&u?(t=n,n=1):u||"boolean"!=typeof r||(t=r,u=!0)),e&&u&&(r=1),n=+n||0,u?(r=n,n=0):r=+r||0,t||n%1||r%1){var o=Ht();return Vt(n+o*(r-n+parseFloat("1e-"+((o+"").length-1))),r)}return en(n,r)}function ut(n,r){if(n){var t=n[r];return In(t)?n[r]():t}}function ot(n,r,t){var e=h.templateSettings;n=jt(n||""),t=ae({},t,e);var u,o=ae({},t.imports,e.imports),i=ne(o),f=Un(o),l=0,c=t.interpolate||E,p="__p += '",s=wt((t.escape||E).source+"|"+c.source+"|"+(c===N?x:E).source+"|"+(t.evaluate||E).source+"|$","g");

n.replace(s,function(r,t,e,o,i,f){return e||(e=o),p+=n.slice(l,f).replace(S,a),t&&(p+="' +\n__e("+t+") +\n'"),i&&(u=!0,p+="';\n"+i+";\n__p += '"),e&&(p+="' +\n((__t = ("+e+")) == null ? '' : __t) +\n'"),l=f+r.length,r}),p+="';\n";var g=t.variable,y=g;y||(g="obj",p="with ("+g+") {\n"+p+"\n}\n"),p=(u?p.replace(w,""):p).replace(j,"$1").replace(k,"$1;"),p="function("+g+") {\n"+(y?"":g+" || ("+g+" = {});\n")+"var __t, __p = '', __e = _.escape"+(u?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+p+"return __p\n}";

var m="\n/*\n//# sourceURL="+(t.sourceURL||"/lodash/template/source["+D++ +"]")+"\n*/";try{var b=mt(i,"return "+p+m).apply(v,f)}catch(_){throw _.source=p,_}return r?b(r):(b.source=p,b)}function at(n,r,t){n=(n=+n)>-1?n:0;var e=-1,u=ht(n);for(r=Q(r,t,1);++e<n;)u[e]=r(e);return u}function it(n){return null==n?"":jt(n).replace(ee,sn)}function ft(n){var r=++y;return jt(null==n?"":n)+r}function lt(n){return n=new g(n),n.__chain__=!0,n}function ct(n,r){return r(n),n}function pt(){return this.__chain__=!0,
this}function st(){return jt(this.__wrapped__)}function vt(){return this.__wrapped__}t=t?Z.defaults(H.Object(),t,Z.pick(H,A)):H;var ht=t.Array,gt=t.Boolean,yt=t.Date,mt=t.Function,bt=t.Math,_t=t.Number,dt=t.Object,wt=t.RegExp,jt=t.String,kt=t.TypeError,xt=[],Ct=dt.prototype,Ot=t._,Nt=Ct.toString,Rt=wt("^"+jt(Nt).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$"),Et=bt.ceil,It=t.clearTimeout,St=bt.floor,At=mt.prototype.toString,Dt=cn(Dt=dt.getPrototypeOf)&&Dt,Tt=Ct.hasOwnProperty,$t=xt.push,Ft=t.setTimeout,Bt=xt.splice,Wt=xt.unshift,qt=function(){
try{var n={},r=cn(r=dt.defineProperty)&&r,t=r(n,n,n)&&r}catch(e){}return t}(),zt=cn(zt=dt.create)&&zt,Lt=cn(Lt=ht.isArray)&&Lt,Pt=t.isFinite,Kt=t.isNaN,Ut=cn(Ut=dt.keys)&&Ut,Mt=bt.max,Vt=bt.min,Gt=t.parseInt,Ht=bt.random,Jt={};Jt[$]=ht,Jt[F]=gt,Jt[B]=yt,Jt[W]=mt,Jt[z]=dt,Jt[q]=_t,Jt[L]=wt,Jt[P]=jt,g.prototype=h.prototype;var Qt=h.support={};Qt.funcDecomp=!cn(t.WinRTError)&&I.test(s),Qt.funcNames="string"==typeof mt.name,h.templateSettings={escape:/<%-([\s\S]+?)%>/g,evaluate:/<%([\s\S]+?)%>/g,interpolate:N,
variable:"",imports:{_:h}},zt||(J=function(){function n(){}return function(r){if(Sn(r)){n.prototype=r;var e=new n;n.prototype=null}return e||t.Object()}}());var Xt=qt?function(n,r){M.value=r,qt(n,"__bindData__",M),M.value=null}:rt,Yt=Lt||function(n){return n&&"object"==typeof n&&"number"==typeof n.length&&Nt.call(n)==$||!1},Zt=function(n){var r,t=n,e=[];if(!t)return e;if(!V[typeof n])return e;for(r in t)Tt.call(t,r)&&e.push(r);return e},ne=Ut?function(n){return Sn(n)?Ut(n):[]}:Zt,re={"&":"&amp;",
"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},te=kn(re),ee=wt("("+ne(te).join("|")+")","g"),ue=wt("["+ne(re).join("")+"]","g"),oe=function(n,r,t){var e,u=n,o=u;if(!u)return o;var a=arguments,i=0,f="number"==typeof t?2:a.length;if(f>3&&"function"==typeof a[f-2])var l=Q(a[--f-1],a[f--],2);else f>2&&"function"==typeof a[f-1]&&(l=a[--f]);for(;++i<f;)if(u=a[i],u&&V[typeof u])for(var c=-1,p=V[typeof u]&&ne(u),s=p?p.length:0;++c<s;)e=p[c],o[e]=l?l(o[e],u[e]):u[e];return o},ae=function(n,r,t){var e,u=n,o=u;

if(!u)return o;for(var a=arguments,i=0,f="number"==typeof t?2:a.length;++i<f;)if(u=a[i],u&&V[typeof u])for(var l=-1,c=V[typeof u]&&ne(u),p=c?c.length:0;++l<p;)e=c[l],"undefined"==typeof o[e]&&(o[e]=u[e]);return o},ie=function(n,r,t){var e,u=n,o=u;if(!u)return o;if(!V[typeof u])return o;r=r&&"undefined"==typeof t?r:Q(r,t,3);for(e in u)if(r(u[e],e,n)===!1)return o;return o},fe=function(n,r,t){var e,u=n,o=u;if(!u)return o;if(!V[typeof u])return o;r=r&&"undefined"==typeof t?r:Q(r,t,3);for(var a=-1,i=V[typeof u]&&ne(u),f=i?i.length:0;++a<f;)if(e=i[a],
r(u[e],e,n)===!1)return o;return o},le=Dt?function(n){if(!n||Nt.call(n)!=z)return!1;var r=n.valueOf,t=cn(r)&&(t=Dt(r))&&Dt(t);return t?n==t||Dt(n)==t:pn(n)}:pn,ce=on(function(n,r,t){Tt.call(n,t)?n[t]++:n[t]=1}),pe=on(function(n,r,t){(Tt.call(n,t)?n[t]:n[t]=[]).push(r)}),se=on(function(n,r,t){n[t]=r}),ve=nr,he=Hn,ge=cn(ge=yt.now)&&ge||function(){return(new yt).getTime()},ye=8==Gt(d+"08")?Gt:function(n,r){return Gt(Fn(n)?n.replace(R,""):n,r||0)};return h.after=Tr,h.assign=oe,h.at=Mn,h.bind=$r,h.bindAll=Fr,
h.bindKey=Br,h.chain=lt,h.compact=sr,h.compose=Wr,h.constant=Jr,h.countBy=ce,h.create=yn,h.createCallback=Qr,h.curry=qr,h.debounce=zr,h.defaults=ae,h.defer=Lr,h.delay=Pr,h.difference=vr,h.filter=Hn,h.flatten=mr,h.forEach=Xn,h.forEachRight=Yn,h.forIn=ie,h.forInRight=_n,h.forOwn=fe,h.forOwnRight=dn,h.functions=wn,h.groupBy=pe,h.indexBy=se,h.initial=_r,h.intersection=dr,h.invert=kn,h.invoke=Zn,h.keys=ne,h.map=nr,h.mapValues=Wn,h.max=rr,h.memoize=Kr,h.merge=qn,h.min=tr,h.omit=zn,h.once=Ur,h.pairs=Ln,
h.partial=Mr,h.partialRight=Vr,h.pick=Pn,h.pluck=ve,h.property=tt,h.pull=kr,h.range=xr,h.reject=or,h.remove=Cr,h.rest=Or,h.shuffle=ir,h.sortBy=cr,h.tap=ct,h.throttle=Gr,h.times=at,h.toArray=pr,h.transform=Kn,h.union=Rr,h.uniq=Er,h.values=Un,h.where=he,h.without=Ir,h.wrap=Hr,h.xor=Sr,h.zip=Ar,h.zipObject=Dr,h.collect=nr,h.drop=Or,h.each=Xn,h.eachRight=Yn,h.extend=oe,h.methods=wn,h.object=Dr,h.select=Hn,h.tail=Or,h.unique=Er,h.unzip=Ar,Zr(h),h.clone=hn,h.cloneDeep=gn,h.contains=Vn,h.escape=Xr,h.every=Gn,
h.find=Jn,h.findIndex=hr,h.findKey=mn,h.findLast=Qn,h.findLastIndex=gr,h.findLastKey=bn,h.has=jn,h.identity=Yr,h.indexOf=br,h.isArguments=vn,h.isArray=Yt,h.isBoolean=xn,h.isDate=Cn,h.isElement=On,h.isEmpty=Nn,h.isEqual=Rn,h.isFinite=En,h.isFunction=In,h.isNaN=An,h.isNull=Dn,h.isNumber=Tn,h.isObject=Sn,h.isPlainObject=le,h.isRegExp=$n,h.isString=Fn,h.isUndefined=Bn,h.lastIndexOf=jr,h.mixin=Zr,h.noConflict=nt,h.noop=rt,h.now=ge,h.parseInt=ye,h.random=et,h.reduce=er,h.reduceRight=ur,h.result=ut,h.runInContext=s,
h.size=fr,h.some=lr,h.sortedIndex=Nr,h.template=ot,h.unescape=it,h.uniqueId=ft,h.all=Gn,h.any=lr,h.detect=Jn,h.findWhere=Jn,h.foldl=er,h.foldr=ur,h.include=Vn,h.inject=er,Zr(function(){var n={};return fe(h,function(r,t){h.prototype[t]||(n[t]=r)}),n}(),!1),h.first=yr,h.last=wr,h.sample=ar,h.take=yr,h.head=yr,fe(h,function(n,r){var t="sample"!==r;h.prototype[r]||(h.prototype[r]=function(r,e){var u=this.__chain__,o=n(this.__wrapped__,r,e);return u||null!=r&&(!e||t&&"function"==typeof r)?new g(o,u):o;

})}),h.VERSION="2.4.2",h.prototype.chain=pt,h.prototype.toString=st,h.prototype.value=vt,h.prototype.valueOf=vt,Xn(["join","pop","shift"],function(n){var r=xt[n];h.prototype[n]=function(){var n=this.__chain__,t=r.apply(this.__wrapped__,arguments);return n?new g(t,n):t}}),Xn(["push","reverse","sort","unshift"],function(n){var r=xt[n];h.prototype[n]=function(){return r.apply(this.__wrapped__,arguments),this}}),Xn(["concat","slice","splice"],function(n){var r=xt[n];h.prototype[n]=function(){return new g(r.apply(this.__wrapped__,arguments),this.__chain__);

}}),h}var v,h=[],g=[],y=0,m=+new Date+"",b=75,_=40,d=" 	\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000",w=/\b__p \+= '';/g,j=/\b(__p \+=) '' \+/g,k=/(__e\(.*?\)|\b__t\)) \+\n'';/g,x=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,C=/\w*$/,O=/^\s*function[ \n\r\t]+\w/,N=/<%=([\s\S]+?)%>/g,R=RegExp("^["+d+"]*0+(?=.$)"),E=/($^)/,I=/\bthis\b/,S=/['\n\r\t\u2028\u2029\\]/g,A=["Array","Boolean","Date","Function","Math","Number","Object","RegExp","String","_","attachEvent","clearTimeout","isFinite","isNaN","parseInt","setTimeout"],D=0,T="[object Arguments]",$="[object Array]",F="[object Boolean]",B="[object Date]",W="[object Function]",q="[object Number]",z="[object Object]",L="[object RegExp]",P="[object String]",K={};

K[W]=!1,K[T]=K[$]=K[F]=K[B]=K[q]=K[z]=K[L]=K[P]=!0;var U={leading:!1,maxWait:0,trailing:!1},M={configurable:!1,enumerable:!1,value:null,writable:!1},V={"boolean":!1,"function":!0,object:!0,number:!1,string:!1,undefined:!1},G={"\\":"\\","'":"'","\n":"n","\r":"r","	":"t","\u2028":"u2028","\u2029":"u2029"},H=V[typeof window]&&window||this,J=V[typeof exports]&&exports&&!exports.nodeType&&exports,Q=V[typeof module]&&module&&!module.nodeType&&module,X=Q&&Q.exports===J&&J,Y=V[typeof global]&&global;!Y||Y.global!==Y&&Y.window!==Y||(H=Y);

var Z=s();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(H._=Z,define(function(){return Z})):J&&Q?X?(Q.exports=Z)._=Z:J._=Z:H._=Z}).call(this);
/*
 AngularJS v1.2.28
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(W,X,u){'use strict';function z(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.28/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function Sa(b){if(null==b||Ja(b))return!1;
var a=b.length;return 1===b.nodeType&&a?!0:G(b)||L(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function r(b,a,c){var d;if(b)if(N(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(L(b)||Sa(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else if(b.forEach&&b.forEach!==r)b.forEach(a,c);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Xb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Sc(b,
a,c){for(var d=Xb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Yb(b){return function(a,c){b(c,a)}}function ib(){for(var b=na.length,a;b;){b--;a=na[b].charCodeAt(0);if(57==a)return na[b]="A",na.join("");if(90==a)na[b]="0";else return na[b]=String.fromCharCode(a+1),na.join("")}na.unshift("0");return na.join("")}function Zb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function E(b){var a=b.$$hashKey;r(arguments,function(a){a!==b&&r(a,function(a,c){b[c]=a})});Zb(b,a);return b}function U(b){return parseInt(b,
10)}function $b(b,a){return E(new (E(function(){},{prototype:b})),a)}function v(){}function ga(b){return b}function aa(b){return function(){return b}}function F(b){return"undefined"===typeof b}function D(b){return"undefined"!==typeof b}function T(b){return null!=b&&"object"===typeof b}function G(b){return"string"===typeof b}function jb(b){return"number"===typeof b}function va(b){return"[object Date]"===Ba.call(b)}function N(b){return"function"===typeof b}function kb(b){return"[object RegExp]"===Ba.call(b)}
function Ja(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Tc(b){return!(!b||!(b.nodeName||b.prop&&b.attr&&b.find))}function Uc(b,a,c){var d=[];r(b,function(b,f,g){d.push(a.call(c,b,f,g))});return d}function Ta(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Ua(b,a){var c=Ta(b,a);0<=c&&b.splice(c,1);return a}function Ka(b,a,c,d){if(Ja(b)||b&&b.$evalAsync&&b.$watch)throw Va("cpws");if(a){if(b===a)throw Va("cpi");c=c||[];
d=d||[];if(T(b)){var e=Ta(c,b);if(-1!==e)return d[e];c.push(b);d.push(a)}if(L(b))for(var f=a.length=0;f<b.length;f++)e=Ka(b[f],null,c,d),T(b[f])&&(c.push(b[f]),d.push(e)),a.push(e);else{var g=a.$$hashKey;L(a)?a.length=0:r(a,function(b,c){delete a[c]});for(f in b)e=Ka(b[f],null,c,d),T(b[f])&&(c.push(b[f]),d.push(e)),a[f]=e;Zb(a,g)}}else if(a=b)L(b)?a=Ka(b,[],c,d):va(b)?a=new Date(b.getTime()):kb(b)?(a=RegExp(b.source,b.toString().match(/[^\/]*$/)[0]),a.lastIndex=b.lastIndex):T(b)&&(a=Ka(b,{},c,d));
return a}function ha(b,a){if(L(b)){a=a||[];for(var c=0;c<b.length;c++)a[c]=b[c]}else if(T(b))for(c in a=a||{},b)!lb.call(b,c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(a[c]=b[c]);return a||b}function Ca(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&"object"==c)if(L(b)){if(!L(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!Ca(b[d],a[d]))return!1;return!0}}else{if(va(b))return va(a)?isNaN(b.getTime())&&isNaN(a.getTime())||b.getTime()===
a.getTime():!1;if(kb(b)&&kb(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Ja(b)||Ja(a)||L(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!N(b[d])){if(!Ca(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==u&&!N(a[d]))return!1;return!0}return!1}function Bb(b,a){var c=2<arguments.length?wa.call(arguments,2):[];return!N(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(wa.call(arguments,
0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Vc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=u:Ja(a)?c="$WINDOW":a&&X===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function oa(b,a){return"undefined"===typeof b?u:JSON.stringify(b,Vc,a?"  ":null)}function ac(b){return G(b)?JSON.parse(b):b}function Wa(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=x(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;
return b}function ia(b){b=A(b).clone();try{b.empty()}catch(a){}var c=A("<div>").append(b).html();try{return 3===b[0].nodeType?x(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+x(b)})}catch(d){return x(c)}}function bc(b){try{return decodeURIComponent(b)}catch(a){}}function cc(b){var a={},c,d;r((b||"").split("&"),function(b){b&&(c=b.replace(/\+/g,"%20").split("="),d=bc(c[0]),D(d)&&(b=D(c[1])?bc(c[1]):!0,lb.call(a,d)?L(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Cb(b){var a=
[];r(b,function(b,d){L(b)?r(b,function(b){a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))}):a.push(Da(d,!0)+(!0===b?"":"="+Da(b,!0)))});return a.length?a.join("&"):""}function mb(b){return Da(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function Da(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Wc(b,a){function c(a){a&&d.push(a)}var d=[b],e,f,g=["ng:app","ng-app","x-ng-app",
"data-ng-app"],h=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;r(g,function(a){g[a]=!0;c(X.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(r(b.querySelectorAll("."+a),c),r(b.querySelectorAll("."+a+"\\:"),c),r(b.querySelectorAll("["+a+"]"),c))});r(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");b?(e=a,f=(b[2]||"").replace(/\s+/g,",")):r(a.attributes,function(b){!e&&g[b.name]&&(e=a,f=b.value)})}});e&&a(e,f?[f]:[])}function dc(b,a){var c=function(){b=A(b);if(b.injector()){var c=b[0]===X?
"document":ia(b);throw Va("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=ec(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(W&&!d.test(W.name))return c();W.name=W.name.replace(d,"");Xa.resumeBootstrap=function(b){r(b,function(b){a.push(b)});c()}}function nb(b,a){a=
a||"_";return b.replace(Xc,function(b,d){return(d?a:"")+b.toLowerCase()})}function Db(b,a,c){if(!b)throw Va("areq",a||"?",c||"required");return b}function Ya(b,a,c){c&&L(b)&&(b=b[b.length-1]);Db(N(b),a,"not a function, got "+(b&&"object"===typeof b?b.constructor.name||"Object":typeof b));return b}function Ea(b,a){if("hasOwnProperty"===b)throw Va("badname",a);}function fc(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,f=a.length,g=0;g<f;g++)d=a[g],b&&(b=(e=b)[d]);return!c&&N(b)?Bb(e,b):b}function Eb(b){var a=
b[0];b=b[b.length-1];if(a===b)return A(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return A(c)}function Yc(b){var a=z("$injector"),c=z("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||z;return b.module||(b.module=function(){var b={};return function(e,f,g){if("hasOwnProperty"===e)throw c("badname","module");f&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!f)throw a("nomod",
e);var c=[],d=[],l=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:f,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide","constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};g&&l(g);return n}())}}())}
function Zc(b){E(b,{bootstrap:dc,copy:Ka,extend:E,equals:Ca,element:A,forEach:r,injector:ec,noop:v,bind:Bb,toJson:oa,fromJson:ac,identity:ga,isUndefined:F,isDefined:D,isString:G,isFunction:N,isObject:T,isNumber:jb,isElement:Tc,isArray:L,version:$c,isDate:va,lowercase:x,uppercase:La,callbacks:{counter:0},$$minErr:z,$$csp:Za});$a=Yc(W);try{$a("ngLocale")}catch(a){$a("ngLocale",[]).provider("$locale",ad)}$a("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:bd});a.provider("$compile",
gc).directive({a:cd,input:hc,textarea:hc,form:dd,script:ed,select:fd,style:gd,option:hd,ngBind:id,ngBindHtml:jd,ngBindTemplate:kd,ngClass:ld,ngClassEven:md,ngClassOdd:nd,ngCloak:od,ngController:pd,ngForm:qd,ngHide:rd,ngIf:sd,ngInclude:td,ngInit:ud,ngNonBindable:vd,ngPluralize:wd,ngRepeat:xd,ngShow:yd,ngStyle:zd,ngSwitch:Ad,ngSwitchWhen:Bd,ngSwitchDefault:Cd,ngOptions:Dd,ngTransclude:Ed,ngModel:Fd,ngList:Gd,ngChange:Hd,required:ic,ngRequired:ic,ngValue:Id}).directive({ngInclude:Jd}).directive(Fb).directive(jc);
a.provider({$anchorScroll:Kd,$animate:Ld,$browser:Md,$cacheFactory:Nd,$controller:Od,$document:Pd,$exceptionHandler:Qd,$filter:kc,$interpolate:Rd,$interval:Sd,$http:Td,$httpBackend:Ud,$location:Vd,$log:Wd,$parse:Xd,$rootScope:Yd,$q:Zd,$sce:$d,$sceDelegate:ae,$sniffer:be,$templateCache:ce,$timeout:de,$window:ee,$$rAF:fe,$$asyncCallback:ge})}])}function ab(b){return b.replace(he,function(a,b,d,e){return e?d.toUpperCase():d}).replace(ie,"Moz$1")}function Gb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:
[this],k=a,m,l,n,q,p,s;if(!d||null!=b)for(;e.length;)for(m=e.shift(),l=0,n=m.length;l<n;l++)for(q=A(m[l]),k?q.triggerHandler("$destroy"):k=!k,p=0,q=(s=q.children()).length;p<q;p++)e.push(Fa(s[p]));return f.apply(this,arguments)}var f=Fa.fn[b],f=f.$original||f;e.$original=f;Fa.fn[b]=e}function S(b){if(b instanceof S)return b;G(b)&&(b=$(b));if(!(this instanceof S)){if(G(b)&&"<"!=b.charAt(0))throw Hb("nosel");return new S(b)}if(G(b)){var a=b;b=X;var c;if(c=je.exec(a))b=[b.createElement(c[1])];else{var d=
b,e;b=d.createDocumentFragment();c=[];if(Ib.test(a)){d=b.appendChild(d.createElement("div"));e=(ke.exec(a)||["",""])[1].toLowerCase();e=da[e]||da._default;d.innerHTML="<div>&#160;</div>"+e[1]+a.replace(le,"<$1></$2>")+e[2];d.removeChild(d.firstChild);for(a=e[0];a--;)d=d.lastChild;a=0;for(e=d.childNodes.length;a<e;++a)c.push(d.childNodes[a]);d=b.firstChild;d.textContent=""}else c.push(d.createTextNode(a));b.textContent="";b.innerHTML="";b=c}Jb(this,b);A(X.createDocumentFragment()).append(this)}else Jb(this,
b)}function Kb(b){return b.cloneNode(!0)}function Ma(b){Lb(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Ma(b[a])}function lc(b,a,c,d){if(D(d))throw Hb("offargs");var e=pa(b,"events");pa(b,"handle")&&(F(a)?r(e,function(a,c){bb(b,c,a);delete e[c]}):r(a.split(" "),function(a){F(c)?(bb(b,a,e[a]),delete e[a]):Ua(e[a]||[],c)}))}function Lb(b,a){var c=b.ng339,d=cb[c];d&&(a?delete cb[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),lc(b)),delete cb[c],b.ng339=u))}function pa(b,a,c){var d=
b.ng339,d=cb[d||-1];if(D(c))d||(b.ng339=d=++me,d=cb[d]={}),d[a]=c;else return d&&d[a]}function Mb(b,a,c){var d=pa(b,"data"),e=D(c),f=!e&&D(a),g=f&&!T(a);d||g||pa(b,"data",d={});if(e)d[a]=c;else if(f){if(g)return d&&d[a];E(d,a)}else return d}function Nb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function ob(b,a){a&&b.setAttribute&&r(a.split(" "),function(a){b.setAttribute("class",$((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ").replace(" "+$(a)+" "," ")))})}function pb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(a.split(" "),function(a){a=$(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",$(c))}}function Jb(b,a){if(a){a=a.nodeName||!D(a.length)||Ja(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function mc(b,a){return qb(b,"$"+(a||"ngController")+"Controller")}function qb(b,a,c){9==b.nodeType&&(b=b.documentElement);for(a=L(a)?a:[a];b;){for(var d=
0,e=a.length;d<e;d++)if((c=A.data(b,a[d]))!==u)return c;b=b.parentNode||11===b.nodeType&&b.host}}function nc(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ma(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function oc(b,a){var c=rb[a.toLowerCase()];return c&&pc[b.nodeName]&&c}function ne(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||X);if(F(c.defaultPrevented)){var f=
c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;f.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var g=ha(a[e||c.type]||[]);r(g,function(a){a.call(b,c)});8>=R?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Na(b,a){var c=typeof b,d;"function"==c||"object"==c&&null!==b?"function"==typeof(d=
b.$$hashKey)?d=b.$$hashKey():d===u&&(d=b.$$hashKey=(a||ib)()):d=b;return c+":"+d}function db(b,a){if(a){var c=0;this.nextUid=function(){return++c}}r(b,this.put,this)}function qc(b){var a,c;"function"===typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(oe,""),c=c.match(pe),r(c[1].split(qe),function(b){b.replace(re,function(b,c,d){a.push(d)})})),b.$inject=a):L(b)?(c=b.length-1,Ya(b[c],"fn"),a=b.slice(0,c)):Ya(b,"fn",!0);return a}function ec(b){function a(a){return function(b,c){if(T(b))r(b,
Yb(a));else return a(b,c)}}function c(a,b){Ea(a,"service");if(N(b)||L(b))b=n.instantiate(b);if(!b.$get)throw eb("pget",a);return l[a+h]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,f,h;r(a,function(a){if(!m.get(a)){m.put(a,!0);try{if(G(a))for(c=$a(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,f=0,h=d.length;f<h;f++){var g=d[f],k=n.get(g[0]);k[g[1]].apply(k,g[2])}else N(a)?b.push(n.invoke(a)):L(a)?b.push(n.invoke(a)):Ya(a,"module")}catch(p){throw L(a)&&(a=
a[a.length-1]),p.message&&(p.stack&&-1==p.stack.indexOf(p.message))&&(p=p.message+"\n"+p.stack),eb("modulerr",a,p.stack||p.message||p);}}});return b}function f(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===g)throw eb("cdep",d+" <- "+k.join(" <- "));return a[d]}try{return k.unshift(d),a[d]=g,a[d]=b(d)}catch(e){throw a[d]===g&&delete a[d],e;}finally{k.shift()}}function d(a,b,e){var f=[],h=qc(a),g,k,p;k=0;for(g=h.length;k<g;k++){p=h[k];if("string"!==typeof p)throw eb("itkn",p);f.push(e&&e.hasOwnProperty(p)?
e[p]:c(p))}L(a)&&(a=a[g]);return a.apply(b,f)}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(L(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return T(e)||N(e)?e:c},get:c,annotate:qc,has:function(b){return l.hasOwnProperty(b+h)||a.hasOwnProperty(b)}}}var g={},h="Provider",k=[],m=new db([],!0),l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,aa(b))}),constant:a(function(a,
b){Ea(a,"constant");l[a]=b;q[a]=b}),decorator:function(a,b){var c=n.get(a+h),d=c.$get;c.$get=function(){var a=p.invoke(d,c);return p.invoke(b,null,{$delegate:a})}}}},n=l.$injector=f(l,function(){throw eb("unpr",k.join(" <- "));}),q={},p=q.$injector=f(q,function(a){a=n.get(a+h);return p.invoke(a.$get,a)});r(e(b),function(a){p.invoke(a||v)});return p}function Kd(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;
r(a,function(a){b||"a"!==x(a.nodeName)||(b=a)});return b}function f(){var b=c.hash(),d;b?(d=g.getElementById(b))?d.scrollIntoView():(d=e(g.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var g=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(f)});return f}]}function ge(){this.$get=["$$rAF","$timeout",function(b,a){return b.supported?function(a){return b(a)}:function(b){return a(b,0,!1)}}]}function se(b,a,c,d){function e(a){try{a.apply(null,
wa.call(arguments,1))}finally{if(s--,0===s)for(;J.length;)try{J.pop()()}catch(b){c.error(b)}}}function f(a,b){(function ea(){r(w,function(a){a()});t=b(ea,a)})()}function g(){y!=h.url()&&(y=h.url(),r(ba,function(a){a(h.url())}))}var h=this,k=a[0],m=b.location,l=b.history,n=b.setTimeout,q=b.clearTimeout,p={};h.isMock=!1;var s=0,J=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){s++};h.notifyWhenNoOutstandingRequests=function(a){r(w,function(a){a()});0===s?a():J.push(a)};
var w=[],t;h.addPollFn=function(a){F(t)&&f(100,n);w.push(a);return a};var y=m.href,K=a.find("base"),B=null;h.url=function(a,c){m!==b.location&&(m=b.location);l!==b.history&&(l=b.history);if(a){if(y!=a){var e=y&&Ga(y)===Ga(a);y=a;!e&&d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),K.attr("href",K.attr("href"))):(e||(B=a),c?m.replace(a):m.href=a);return h}}else return B||m.href.replace(/%27/g,"'")};var ba=[],O=!1;h.onUrlChange=function(a){if(!O){if(d.history)A(b).on("popstate",g);if(d.hashchange)A(b).on("hashchange",
g);else h.addPollFn(g);O=!0}ba.push(a);return a};h.$$checkUrlChange=g;h.baseHref=function(){var a=K.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var M={},ca="",P=h.baseHref();h.cookies=function(a,b){var d,e,f,h;if(a)b===u?k.cookie=escape(a)+"=;path="+P+";expires=Thu, 01 Jan 1970 00:00:00 GMT":G(b)&&(d=(k.cookie=escape(a)+"="+escape(b)+";path="+P).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(k.cookie!==
ca)for(ca=k.cookie,d=ca.split("; "),M={},f=0;f<d.length;f++)e=d[f],h=e.indexOf("="),0<h&&(a=unescape(e.substring(0,h)),M[a]===u&&(M[a]=unescape(e.substring(h+1))));return M}};h.defer=function(a,b){var c;s++;c=n(function(){delete p[c];e(a)},b||0);p[c]=!0;return c};h.defer.cancel=function(a){return p[a]?(delete p[a],q(a),e(v),!0):!1}}function Md(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new se(b,d,a,c)}]}function Nd(){this.$get=function(){function b(b,d){function e(a){a!=
n&&(q?q==a&&(q=a.n):q=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw z("$cacheFactory")("iid",b);var g=0,h=E({},d,{id:b}),k={},m=d&&d.capacity||Number.MAX_VALUE,l={},n=null,q=null;return a[b]={put:function(a,b){if(m<Number.MAX_VALUE){var c=l[a]||(l[a]={key:a});e(c)}if(!F(b))return a in k||g++,k[a]=b,g>m&&this.remove(q.key),b},get:function(a){if(m<Number.MAX_VALUE){var b=l[a];if(!b)return;e(b)}return k[a]},remove:function(a){if(m<Number.MAX_VALUE){var b=
l[a];if(!b)return;b==n&&(n=b.p);b==q&&(q=b.n);f(b.n,b.p);delete l[a]}delete k[a];g--},removeAll:function(){k={};g=0;l={};n=q=null},destroy:function(){l=h=k=null;delete a[b]},info:function(){return E({},h,{size:g})}}}var a={};b.info=function(){var b={};r(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function ce(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function gc(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/,f=/(([\d\w_\-]+)(?:\:([^;]+))?;?)/,
g=/^(on[a-z]+|formaction)$/;this.directive=function k(a,e){Ea(a,"directive");G(a)?(Db(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];r(c[a],function(c,f){try{var g=b.invoke(c);N(g)?g={compile:aa(g)}:!g.compile&&g.link&&(g.compile=aa(g.link));g.priority=g.priority||0;g.index=f;g.name=g.name||a;g.require=g.require||g.controller&&g.name;g.restrict=g.restrict||"A";e.push(g)}catch(k){d(k)}});return e}])),c[a].push(e)):r(a,Yb(k));
return this};this.aHrefSanitizationWhitelist=function(b){return D(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return D(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,l,n,q,p,s,J,w,t,y,K){function B(a,b,c,d,e){a instanceof
A||(a=A(a));r(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=A(b).wrap("<span></span>").parent()[0])});var f=O(a,b,a,c,d,e);ba(a,"ng-scope");return function(b,c,d,e){Db(b,"scope");var g=c?Oa.clone.call(a):a;r(d,function(a,b){g.data("$"+b+"Controller",a)});d=0;for(var k=g.length;d<k;d++){var p=g[d].nodeType;1!==p&&9!==p||g.eq(d).data("$scope",b)}c&&c(g,b);f&&f(b,g,g,e);return g}}function ba(a,b){try{a.addClass(b)}catch(c){}}function O(a,b,c,d,e,f){function g(a,c,d,e){var f,p,l,m,q,
n,w;f=c.length;var s=Array(f);for(m=0;m<f;m++)s[m]=c[m];n=m=0;for(q=k.length;m<q;n++)p=s[n],c=k[m++],f=k[m++],c?(c.scope?(l=a.$new(),A.data(p,"$scope",l)):l=a,w=c.transcludeOnThisElement?M(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?M(a,b):null,c(f,l,p,d,w)):f&&f(a,p.childNodes,u,e)}for(var k=[],p,l,m,q,n=0;n<a.length;n++)p=new Ob,l=ca(a[n],[],p,0===n?d:u,e),(f=l.length?I(l,a[n],p,b,c,null,[],[],f):null)&&f.scope&&ba(p.$$element,"ng-scope"),p=f&&f.terminal||!(m=a[n].childNodes)||!m.length?
null:O(m,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b),k.push(f,p),q=q||f||p,f=null;return q?g:null}function M(a,b,c){return function(d,e,f){var g=!1;d||(d=a.$new(),g=d.$$transcluded=!0);e=b(d,e,f,c);if(g)e.on("$destroy",function(){d.$destroy()});return e}}function ca(a,b,c,d,g){var k=c.$attr,p;switch(a.nodeType){case 1:ea(b,qa(Pa(a).toLowerCase()),"E",d,g);for(var l,m,q,n=a.attributes,w=0,s=n&&n.length;w<s;w++){var t=!1,J=!1;l=n[w];if(!R||8<=R||l.specified){p=l.name;m=
$(l.value);l=qa(p);if(q=U.test(l))p=nb(l.substr(6),"-");var y=l.replace(/(Start|End)$/,"");l===y+"Start"&&(t=p,J=p.substr(0,p.length-5)+"end",p=p.substr(0,p.length-6));l=qa(p.toLowerCase());k[l]=p;if(q||!c.hasOwnProperty(l))c[l]=m,oc(a,l)&&(c[l]=!0);S(a,b,m,l);ea(b,l,"A",d,g,t,J)}}a=a.className;if(G(a)&&""!==a)for(;p=f.exec(a);)l=qa(p[2]),ea(b,l,"C",d,g)&&(c[l]=$(p[3])),a=a.substr(p.index+p[0].length);break;case 3:x(b,a.nodeValue);break;case 8:try{if(p=e.exec(a.nodeValue))l=qa(p[1]),ea(b,l,"M",d,
g)&&(c[l]=$(p[2]))}catch(B){}}b.sort(F);return b}function P(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return A(d)}function C(a,b,c){return function(d,e,f,g,k){e=P(e[0],b,c);return a(d,e,f,g,k)}}function I(a,c,d,e,f,g,k,q,n){function w(a,b,c,d){if(a){c&&(a=C(a,c,d));a.require=H.require;a.directiveName=z;if(K===H||H.$$isolateScope)a=rc(a,
{isolateScope:!0});k.push(a)}if(b){c&&(b=C(b,c,d));b.require=H.require;b.directiveName=z;if(K===H||H.$$isolateScope)b=rc(b,{isolateScope:!0});q.push(b)}}function t(a,b,c,d){var e,f="data",g=!1;if(G(b)){for(;"^"==(e=b.charAt(0))||"?"==e;)b=b.substr(1),"^"==e&&(f="inheritedData"),g=g||"?"==e;e=null;d&&"data"===f&&(e=d[b]);e=e||c[f]("$"+b+"Controller");if(!e&&!g)throw ja("ctreq",b,a);}else L(b)&&(e=[],r(b,function(b){e.push(t(a,b,c,d))}));return e}function J(a,e,f,g,n){function w(a,b){var c;2>arguments.length&&
(b=a,a=u);Ia&&(c=ca);return n(a,b,c)}var y,Q,B,M,C,P,ca={},ra;y=c===f?d:ha(d,new Ob(A(f),d.$attr));Q=y.$$element;if(K){var ue=/^\s*([@=&])(\??)\s*(\w*)\s*$/;P=e.$new(!0);!I||I!==K&&I!==K.$$originalDirective?Q.data("$isolateScopeNoTemplate",P):Q.data("$isolateScope",P);ba(Q,"ng-isolate-scope");r(K.scope,function(a,c){var d=a.match(ue)||[],f=d[3]||c,g="?"==d[2],d=d[1],k,l,n,q;P.$$isolateBindings[c]=d+f;switch(d){case "@":y.$observe(f,function(a){P[c]=a});y.$$observers[f].$$scope=e;y[f]&&(P[c]=b(y[f])(e));
break;case "=":if(g&&!y[f])break;l=p(y[f]);q=l.literal?Ca:function(a,b){return a===b||a!==a&&b!==b};n=l.assign||function(){k=P[c]=l(e);throw ja("nonassign",y[f],K.name);};k=P[c]=l(e);P.$watch(function(){var a=l(e);q(a,P[c])||(q(a,k)?n(e,a=P[c]):P[c]=a);return k=a},null,l.literal);break;case "&":l=p(y[f]);P[c]=function(a){return l(e,a)};break;default:throw ja("iscp",K.name,c,a);}})}ra=n&&w;O&&r(O,function(a){var b={$scope:a===K||a.$$isolateScope?P:e,$element:Q,$attrs:y,$transclude:ra},c;C=a.controller;
"@"==C&&(C=y[a.name]);c=s(C,b);ca[a.name]=c;Ia||Q.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});g=0;for(B=k.length;g<B;g++)try{M=k[g],M(M.isolateScope?P:e,Q,y,M.require&&t(M.directiveName,M.require,Q,ca),ra)}catch(H){l(H,ia(Q))}g=e;K&&(K.template||null===K.templateUrl)&&(g=P);a&&a(g,f.childNodes,u,n);for(g=q.length-1;0<=g;g--)try{M=q[g],M(M.isolateScope?P:e,Q,y,M.require&&t(M.directiveName,M.require,Q,ca),ra)}catch(D){l(D,ia(Q))}}n=n||{};for(var y=-Number.MAX_VALUE,
M,O=n.controllerDirectives,K=n.newIsolateScopeDirective,I=n.templateDirective,ea=n.nonTlbTranscludeDirective,F=!1,E=!1,Ia=n.hasElementTranscludeDirective,x=d.$$element=A(c),H,z,V,S=e,R,Ha=0,sa=a.length;Ha<sa;Ha++){H=a[Ha];var U=H.$$start,Y=H.$$end;U&&(x=P(c,U,Y));V=u;if(y>H.priority)break;if(V=H.scope)M=M||H,H.templateUrl||(fb("new/isolated scope",K,H,x),T(V)&&(K=H));z=H.name;!H.templateUrl&&H.controller&&(V=H.controller,O=O||{},fb("'"+z+"' controller",O[z],H,x),O[z]=H);if(V=H.transclude)F=!0,H.$$tlb||
(fb("transclusion",ea,H,x),ea=H),"element"==V?(Ia=!0,y=H.priority,V=x,x=d.$$element=A(X.createComment(" "+z+": "+d[z]+" ")),c=x[0],ra(f,wa.call(V,0),c),S=B(V,e,y,g&&g.name,{nonTlbTranscludeDirective:ea})):(V=A(Kb(c)).contents(),x.empty(),S=B(V,e));if(H.template)if(E=!0,fb("template",I,H,x),I=H,V=N(H.template)?H.template(x,d):H.template,V=W(V),H.replace){g=H;V=Ib.test(V)?A($(V)):[];c=V[0];if(1!=V.length||1!==c.nodeType)throw ja("tplrt",z,"");ra(f,x,c);sa={$attr:{}};V=ca(c,[],sa);var Z=a.splice(Ha+
1,a.length-(Ha+1));K&&D(V);a=a.concat(V).concat(Z);v(d,sa);sa=a.length}else x.html(V);if(H.templateUrl)E=!0,fb("template",I,H,x),I=H,H.replace&&(g=H),J=te(a.splice(Ha,a.length-Ha),x,d,f,F&&S,k,q,{controllerDirectives:O,newIsolateScopeDirective:K,templateDirective:I,nonTlbTranscludeDirective:ea}),sa=a.length;else if(H.compile)try{R=H.compile(x,d,S),N(R)?w(null,R,U,Y):R&&w(R.pre,R.post,U,Y)}catch(ve){l(ve,ia(x))}H.terminal&&(J.terminal=!0,y=Math.max(y,H.priority))}J.scope=M&&!0===M.scope;J.transcludeOnThisElement=
F;J.templateOnThisElement=E;J.transclude=S;n.hasElementTranscludeDirective=Ia;return J}function D(a){for(var b=0,c=a.length;b<c;b++)a[b]=$b(a[b],{$$isolateScope:!0})}function ea(b,e,f,g,p,m,n){if(e===p)return null;p=null;if(c.hasOwnProperty(e)){var q;e=a.get(e+d);for(var w=0,s=e.length;w<s;w++)try{q=e[w],(g===u||g>q.priority)&&-1!=q.restrict.indexOf(f)&&(m&&(q=$b(q,{$$start:m,$$end:n})),b.push(q),p=q)}catch(y){l(y)}}return p}function v(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;r(a,function(d,e){"$"!=
e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,f){"class"==f?(ba(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function te(a,b,c,d,e,f,g,k){var p=[],l,m,w=b[0],s=a.shift(),y=E({},s,{templateUrl:null,transclude:null,replace:null,$$originalDirective:s}),J=N(s.templateUrl)?s.templateUrl(b,c):s.templateUrl;
b.empty();n.get(t.getTrustedResourceUrl(J),{cache:q}).success(function(q){var n,t;q=W(q);if(s.replace){q=Ib.test(q)?A($(q)):[];n=q[0];if(1!=q.length||1!==n.nodeType)throw ja("tplrt",s.name,J);q={$attr:{}};ra(d,b,n);var B=ca(n,[],q);T(s.scope)&&D(B);a=B.concat(a);v(c,q)}else n=w,b.html(q);a.unshift(y);l=I(a,n,c,e,b,s,f,g,k);r(d,function(a,c){a==n&&(d[c]=b[0])});for(m=O(b[0].childNodes,e);p.length;){q=p.shift();t=p.shift();var K=p.shift(),C=p.shift(),B=b[0];if(t!==w){var P=t.className;k.hasElementTranscludeDirective&&
s.replace||(B=Kb(n));ra(K,A(t),B);ba(A(B),P)}t=l.transcludeOnThisElement?M(q,l.transclude,C):C;l(m,q,B,d,t)}p=null}).error(function(a,b,c,d){throw ja("tpload",d.url);});return function(a,b,c,d,e){a=e;p?(p.push(b),p.push(c),p.push(d),p.push(a)):(l.transcludeOnThisElement&&(a=M(b,l.transclude,e)),l(m,b,c,d,a))}}function F(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function fb(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,ia(d));}function x(a,
c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){var b=a.parent().length;b&&ba(a.parent(),"ng-binding");return function(a,c){var e=c.parent(),f=e.data("$binding")||[];f.push(d);e.data("$binding",f);b||ba(e,"ng-binding");a.$watch(d,function(a){c[0].nodeValue=a})}}})}function z(a,b){if("srcdoc"==b)return t.HTML;var c=Pa(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return t.RESOURCE_URL}function S(a,c,d,e){var f=b(d,!0);if(f){if("multiple"===e&&"SELECT"===
Pa(a))throw ja("selmulti",ia(a));c.push({priority:100,compile:function(){return{pre:function(c,d,k){d=k.$$observers||(k.$$observers={});if(g.test(e))throw ja("nodomevents");if(f=b(k[e],!0,z(a,e)))k[e]=f(c),(d[e]||(d[e]=[])).$$inter=!0,(k.$$observers&&k.$$observers[e].$$scope||c).$watch(f,function(a,b){"class"===e&&a!=b?k.$updateClass(a,b):k.$set(e,a)})}}}})}}function ra(a,b,c){var d=b[0],e=b.length,f=d.parentNode,g,k;if(a)for(g=0,k=a.length;g<k;g++)if(a[g]==d){a[g++]=c;k=g+e-1;for(var p=a.length;g<
p;g++,k++)k<p?a[g]=a[k]:delete a[g];a.length-=e-1;break}f&&f.replaceChild(c,d);a=X.createDocumentFragment();a.appendChild(d);c[A.expando]=d[A.expando];d=1;for(e=b.length;d<e;d++)f=b[d],A(f).remove(),a.appendChild(f),delete b[d];b[0]=c;b.length=1}function rc(a,b){return E(function(){return a.apply(null,arguments)},a,b)}var Ob=function(a,b){this.$$element=a;this.$attr=b||{}};Ob.prototype={$normalize:qa,$addClass:function(a){a&&0<a.length&&y.addClass(this.$$element,a)},$removeClass:function(a){a&&0<
a.length&&y.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=sc(a,b),d=sc(b,a);0===c.length?y.removeClass(this.$$element,d):0===d.length?y.addClass(this.$$element,c):y.setClass(this.$$element,c,d)},$set:function(a,b,c,d){var e=oc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=nb(a,"-"));e=Pa(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=K(b,"src"===a);!1!==c&&(null===b||b===u?this.$$element.removeAttr(d):
this.$$element.attr(d,b));(c=this.$$observers)&&r(c[a],function(a){try{a(b)}catch(c){l(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);J.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var sa=b.startSymbol(),Ia=b.endSymbol(),W="{{"==sa||"}}"==Ia?ga:function(a){return a.replace(/\{\{/g,sa).replace(/}}/g,Ia)},U=/^ngAttr[A-Z]/;return B}]}function qa(b){return ab(b.replace(we,""))}function sc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),
f=0;a:for(;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(0<c.length?" ":"")+g}return c}function Od(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){Ea(a,"controller");T(a)?E(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,f){var g,h,k;G(e)&&(g=e.match(a),h=g[1],k=g[3],e=b.hasOwnProperty(h)?b[h]:fc(f.$scope,h,!0)||fc(d,h,!0),Ya(e,h,!0));g=c.instantiate(e,f);if(k){if(!f||"object"!==typeof f.$scope)throw z("$controller")("noscp",
h||e.name,k);f.$scope[k]=g}return g}}]}function Pd(){this.$get=["$window",function(b){return A(b.document)}]}function Qd(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function tc(b){var a={},c,d,e;if(!b)return a;r(b.split("\n"),function(b){e=b.indexOf(":");c=x($(b.substr(0,e)));d=$(b.substr(e+1));c&&(a[c]=a[c]?a[c]+", "+d:d)});return a}function uc(b){var a=T(b)?b:u;return function(c){a||(a=tc(b));return c?a[x(c)]||null:a}}function vc(b,a,c){if(N(c))return c(b,
a);r(c,function(c){b=c(b,a)});return b}function Td(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){G(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=ac(d)));return d}],transformRequest:[function(a){return T(a)&&"[object File]"!==Ba.call(a)&&"[object Blob]"!==Ba.call(a)?oa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ha(d),put:ha(d),patch:ha(d)},xsrfCookieName:"XSRF-TOKEN",
xsrfHeaderName:"X-XSRF-TOKEN"},f=this.interceptors=[],g=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,q){function p(a){function b(a){var d=E({},a,{data:vc(a.data,a.headers,c.transformResponse)});return 200<=a.status&&300>a.status?d:n.reject(d)}var c={method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},d=function(a){var b=e.headers,c=E({},a.headers),d,f,b=E({},b.common,b[x(a.method)]);
a:for(d in b){a=x(d);for(f in c)if(x(f)===a)continue a;c[d]=b[d]}(function(a){var b;r(a,function(c,d){N(c)&&(b=c(),null!=b?a[d]=b:delete a[d])})})(c);return c}(a);E(c,a);c.headers=d;c.method=La(c.method);var f=[function(a){d=a.headers;var c=vc(a.data,uc(d),a.transformRequest);F(c)&&r(d,function(a,b){"content-type"===x(b)&&delete d[b]});F(a.withCredentials)&&!F(e.withCredentials)&&(a.withCredentials=e.withCredentials);return s(a,c,d).then(b,b)},u],g=n.when(c);for(r(t,function(a){(a.request||a.requestError)&&
f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var h=f.shift(),g=g.then(a,h)}g.success=function(a){g.then(function(b){a(b.data,b.status,b.headers,c)});return g};g.error=function(a){g.then(null,function(b){a(b.data,b.status,b.headers,c)});return g};return g}function s(c,f,g){function m(a,b,c,e){C&&(200<=a&&300>a?C.put(A,[a,b,tc(c),e]):C.remove(A));q(b,a,c,e);d.$$phase||d.$apply()}function q(a,b,d,e){b=Math.max(b,0);(200<=
b&&300>b?t.resolve:t.reject)({data:a,status:b,headers:uc(d),config:c,statusText:e})}function s(){var a=Ta(p.pendingRequests,c);-1!==a&&p.pendingRequests.splice(a,1)}var t=n.defer(),r=t.promise,C,I,A=J(c.url,c.params);p.pendingRequests.push(c);r.then(s,s);!c.cache&&!e.cache||(!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method)||(C=T(c.cache)?c.cache:T(e.cache)?e.cache:w);if(C)if(I=C.get(A),D(I)){if(I&&N(I.then))return I.then(s,s),I;L(I)?q(I[1],I[0],ha(I[2]),I[3]):q(I,200,{},"OK")}else C.put(A,r);F(I)&&
((I=Pb(c.url)?b.cookies()[c.xsrfCookieName||e.xsrfCookieName]:u)&&(g[c.xsrfHeaderName||e.xsrfHeaderName]=I),a(c.method,A,f,m,g,c.timeout,c.withCredentials,c.responseType));return r}function J(a,b){if(!b)return a;var c=[];Sc(b,function(a,b){null===a||F(a)||(L(a)||(a=[a]),r(a,function(a){T(a)&&(a=va(a)?a.toISOString():oa(a));c.push(Da(b)+"="+Da(a))}))});0<c.length&&(a+=(-1==a.indexOf("?")?"?":"&")+c.join("&"));return a}var w=c("$http"),t=[];r(f,function(a){t.unshift(G(a)?q.get(a):q.invoke(a))});r(g,
function(a,b){var c=G(a)?q.get(a):q.invoke(a);t.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});p.pendingRequests=[];(function(a){r(arguments,function(a){p[a]=function(b,c){return p(E(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){p[a]=function(b,c,d){return p(E(d||{},{method:a,url:b,data:c}))}})})("post","put","patch");p.defaults=e;return p}]}function xe(b){if(8>=R&&(!b.match(/^(get|post|head|put|delete|options)$/i)||
!W.XMLHttpRequest))return new W.ActiveXObject("Microsoft.XMLHTTP");if(W.XMLHttpRequest)return new W.XMLHttpRequest;throw z("$httpBackend")("noxhr");}function Ud(){this.$get=["$browser","$window","$document",function(b,a,c){return ye(b,xe,b.defer,a.angular.callbacks,c[0])}]}function ye(b,a,c,d,e){function f(a,b,c){var f=e.createElement("script"),g=null;f.type="text/javascript";f.src=a;f.async=!0;g=function(a){bb(f,"load",g);bb(f,"error",g);e.body.removeChild(f);f=null;var h=-1,s="unknown";a&&("load"!==
a.type||d[b].called||(a={type:"error"}),s=a.type,h="error"===a.type?404:200);c&&c(h,s)};sb(f,"load",g);sb(f,"error",g);8>=R&&(f.onreadystatechange=function(){G(f.readyState)&&/loaded|complete/.test(f.readyState)&&(f.onreadystatechange=null,g({type:"load"}))});e.body.appendChild(f);return g}var g=-1;return function(e,k,m,l,n,q,p,s){function J(){t=g;K&&K();B&&B.abort()}function w(a,d,e,f,g){O&&c.cancel(O);K=B=null;0===d&&(d=e?200:"file"==xa(k).protocol?404:0);a(1223===d?204:d,e,f,g||"");b.$$completeOutstandingRequest(v)}
var t;b.$$incOutstandingRequestCount();k=k||b.url();if("jsonp"==x(e)){var y="_"+(d.counter++).toString(36);d[y]=function(a){d[y].data=a;d[y].called=!0};var K=f(k.replace("JSON_CALLBACK","angular.callbacks."+y),y,function(a,b){w(l,a,d[y].data,"",b);d[y]=v})}else{var B=a(e);B.open(e,k,!0);r(n,function(a,b){D(a)&&B.setRequestHeader(b,a)});B.onreadystatechange=function(){if(B&&4==B.readyState){var a=null,b=null,c="";t!==g&&(a=B.getAllResponseHeaders(),b="response"in B?B.response:B.responseText);t===g&&
10>R||(c=B.statusText);w(l,t||B.status,b,a,c)}};p&&(B.withCredentials=!0);if(s)try{B.responseType=s}catch(ba){if("json"!==s)throw ba;}B.send(m||null)}if(0<q)var O=c(J,q);else q&&N(q.then)&&q.then(J)}}function Rd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(f,m,l){for(var n,q,p=0,s=[],J=f.length,w=!1,t=[];p<J;)-1!=(n=f.indexOf(b,p))&&-1!=(q=f.indexOf(a,
n+g))?(p!=n&&s.push(f.substring(p,n)),s.push(p=c(w=f.substring(n+g,q))),p.exp=w,p=q+h,w=!0):(p!=J&&s.push(f.substring(p)),p=J);(J=s.length)||(s.push(""),J=1);if(l&&1<s.length)throw wc("noconcat",f);if(!m||w)return t.length=J,p=function(a){try{for(var b=0,c=J,g;b<c;b++){if("function"==typeof(g=s[b]))if(g=g(a),g=l?e.getTrusted(l,g):e.valueOf(g),null==g)g="";else switch(typeof g){case "string":break;case "number":g=""+g;break;default:g=oa(g)}t[b]=g}return t.join("")}catch(h){a=wc("interr",f,h.toString()),
d(a)}},p.exp=f,p.parts=s,p}var g=b.length,h=a.length;f.startSymbol=function(){return b};f.endSymbol=function(){return a};return f}]}function Sd(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,g,h,k){var m=a.setInterval,l=a.clearInterval,n=c.defer(),q=n.promise,p=0,s=D(k)&&!k;h=D(h)?h:0;q.then(null,null,d);q.$$intervalId=m(function(){n.notify(p++);0<h&&p>=h&&(n.resolve(p),l(q.$$intervalId),delete e[q.$$intervalId]);s||b.$apply()},g);e[q.$$intervalId]=n;return q}var e={};d.cancel=
function(b){return b&&b.$$intervalId in e?(e[b.$$intervalId].reject("canceled"),a.clearInterval(b.$$intervalId),delete e[b.$$intervalId],!0):!1};return d}]}function ad(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),
SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function Qb(b){b=b.split("/");for(var a=b.length;a--;)b[a]=
mb(b[a]);return b.join("/")}function xc(b,a,c){b=xa(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=U(b.port)||ze[b.protocol]||null}function yc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=xa(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=cc(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function ta(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Ga(b){var a=
b.indexOf("#");return-1==a?b:b.substr(0,a)}function Rb(b){return b.substr(0,Ga(b).lastIndexOf("/")+1)}function zc(b,a){this.$$html5=!0;a=a||"";var c=Rb(b);xc(b,this,b);this.$$parse=function(a){var e=ta(c,a);if(!G(e))throw Sb("ipthprfx",a,c);yc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Cb(this.$$search),b=this.$$hash?"#"+mb(this.$$hash):"";this.$$url=Qb(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$parseLinkUrl=function(d,
e){var f,g;(f=ta(b,d))!==u?(g=f,g=(f=ta(a,f))!==u?c+(ta("/",f)||f):b+g):(f=ta(c,d))!==u?g=c+f:c==d+"/"&&(g=c);g&&this.$$parse(g);return!!g}}function Tb(b,a){var c=Rb(b);xc(b,this,b);this.$$parse=function(d){var e=ta(b,d)||ta(c,d),e="#"==e.charAt(0)?ta(a,e):this.$$html5?e:"";if(!G(e))throw Sb("ihshprfx",d,a);yc(e,this,b);d=this.$$path;var f=/^\/[A-Z]:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));f.exec(e)||(d=(e=f.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Cb(this.$$search),
e=this.$$hash?"#"+mb(this.$$hash):"";this.$$url=Qb(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$parseLinkUrl=function(a,c){return Ga(b)==Ga(a)?(this.$$parse(a),!0):!1}}function Ac(b,a){this.$$html5=!0;Tb.apply(this,arguments);var c=Rb(b);this.$$parseLinkUrl=function(d,e){var f,g;b==Ga(d)?f=d:(g=ta(c,d))?f=b+a+g:c===d+"/"&&(f=c);f&&this.$$parse(f);return!!f};this.$$compose=function(){var c=Cb(this.$$search),e=this.$$hash?"#"+mb(this.$$hash):"";this.$$url=Qb(this.$$path)+
(c?"?"+c:"")+e;this.$$absUrl=b+a+this.$$url}}function tb(b){return function(){return this[b]}}function Bc(b,a){return function(c){if(F(c))return this[b];this[b]=a(c);this.$$compose();return this}}function Vd(){var b="",a=!1;this.hashPrefix=function(a){return D(a)?(b=a,this):b};this.html5Mode=function(b){return D(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,f){function g(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,k=d.baseHref(),m=d.url();
a?(k=m.substring(0,m.indexOf("/",m.indexOf("//")+2))+(k||"/"),e=e.history?zc:Ac):(k=Ga(m),e=Tb);h=new e(k,"#"+b);h.$$parseLinkUrl(m,m);var l=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=A(a.target);"a"!==x(b[0].nodeName);)if(b[0]===f[0]||!(b=b.parent())[0])return;var e=b.prop("href"),g=b.attr("href")||b.attr("xlink:href");T(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=xa(e.animVal).href);l.test(e)||(!e||(b.attr("target")||a.isDefaultPrevented())||
!h.$$parseLinkUrl(e,g))||(a.preventDefault(),h.absUrl()!=d.url()&&(c.$apply(),W.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=m&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",a,b).defaultPrevented?(h.$$parse(b),d.url(b)):g(b)}),c.$$phase||c.$digest())});var n=0;c.$watch(function(){var a=d.url(),b=h.$$replace;n&&a==h.absUrl()||(n++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",
h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),g(a))}));h.$$replace=!1;return n});return h}]}function Wd(){var b=!0,a=this;this.debugEnabled=function(a){return D(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||v;a=!1;try{a=!!e.apply}catch(k){}return a?
function(){var a=[];r(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function ka(b,a){if("__defineGetter__"===b||"__defineSetter__"===b||"__lookupGetter__"===b||"__lookupSetter__"===b||"__proto__"===b)throw la("isecfld",a);return b}function ma(b,a){if(b){if(b.constructor===b)throw la("isecfn",a);if(b.document&&
b.location&&b.alert&&b.setInterval)throw la("isecwindow",a);if(b.children&&(b.nodeName||b.prop&&b.attr&&b.find))throw la("isecdom",a);if(b===Object)throw la("isecobj",a);}return b}function ub(b,a,c,d,e){ma(b,d);e=e||{};a=a.split(".");for(var f,g=0;1<a.length;g++){f=ka(a.shift(),d);var h=ma(b[f],d);h||(h={},b[f]=h);b=h;b.then&&e.unwrapPromises&&(ya(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===u&&(b.$$v={}),b=b.$$v)}f=ka(a.shift(),d);ma(b[f],d);return b[f]=c}function Qa(b){return"constructor"==
b}function Cc(b,a,c,d,e,f,g){ka(b,f);ka(a,f);ka(c,f);ka(d,f);ka(e,f);var h=function(a){return ma(a,f)},k=g.expensiveChecks,m=k||Qa(b)?h:ga,l=k||Qa(a)?h:ga,n=k||Qa(c)?h:ga,q=k||Qa(d)?h:ga,p=k||Qa(e)?h:ga;return g.unwrapPromises?function(g,h){var k=h&&h.hasOwnProperty(b)?h:g,t;if(null==k)return k;(k=m(k[b]))&&k.then&&(ya(f),"$$v"in k||(t=k,t.$$v=u,t.then(function(a){t.$$v=m(a)})),k=m(k.$$v));if(!a)return k;if(null==k)return u;(k=l(k[a]))&&k.then&&(ya(f),"$$v"in k||(t=k,t.$$v=u,t.then(function(a){t.$$v=
l(a)})),k=l(k.$$v));if(!c)return k;if(null==k)return u;(k=n(k[c]))&&k.then&&(ya(f),"$$v"in k||(t=k,t.$$v=u,t.then(function(a){t.$$v=n(a)})),k=n(k.$$v));if(!d)return k;if(null==k)return u;(k=q(k[d]))&&k.then&&(ya(f),"$$v"in k||(t=k,t.$$v=u,t.then(function(a){t.$$v=q(a)})),k=q(k.$$v));if(!e)return k;if(null==k)return u;(k=p(k[e]))&&k.then&&(ya(f),"$$v"in k||(t=k,t.$$v=u,t.then(function(a){t.$$v=p(a)})),k=p(k.$$v));return k}:function(f,g){var h=g&&g.hasOwnProperty(b)?g:f;if(null==h)return h;h=m(h[b]);
if(!a)return h;if(null==h)return u;h=l(h[a]);if(!c)return h;if(null==h)return u;h=n(h[c]);if(!d)return h;if(null==h)return u;h=q(h[d]);return e?null==h?u:h=p(h[e]):h}}function Ae(b,a){return function(c,d){return b(c,d,ya,ma,a)}}function Dc(b,a,c){var d=a.expensiveChecks,e=d?Be:Ce;if(e.hasOwnProperty(b))return e[b];var f=b.split("."),g=f.length,h;if(a.csp)h=6>g?Cc(f[0],f[1],f[2],f[3],f[4],c,a):function(b,d){var e=0,h;do h=Cc(f[e++],f[e++],f[e++],f[e++],f[e++],c,a)(b,d),d=u,b=h;while(e<g);return h};
else{var k="var p;\n";d&&(k+="s = eso(s, fe);\nl = eso(l, fe);\n");var m=d;r(f,function(b,e){ka(b,c);var f=(e?"s":'((l&&l.hasOwnProperty("'+b+'"))?l:s)')+'["'+b+'"]',g=d||Qa(b);g&&(f="eso("+f+", fe)",m=!0);k+="if(s == null) return undefined;\ns="+f+";\n";a.unwrapPromises&&(k+='if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v='+(g?"eso(v)":"v")+";});\n}\n s="+(g?"eso(s.$$v)":"s.$$v")+"\n}\n")});k+="return s;";
h=new Function("s","l","pw","eso","fe",k);h.toString=aa(k);if(m||a.unwrapPromises)h=Ae(h,c)}"hasOwnProperty"!==b&&(e[b]=h);return h}function Xd(){var b={},a={},c={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0,expensiveChecks:!1};this.unwrapPromises=function(a){return D(a)?(c.unwrapPromises=!!a,this):c.unwrapPromises};this.logPromiseWarnings=function(a){return D(a)?(c.logPromiseWarnings=a,this):c.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(d,e,f){c.csp=e.csp;var g={csp:c.csp,
unwrapPromises:c.unwrapPromises,logPromiseWarnings:c.logPromiseWarnings,expensiveChecks:!0};ya=function(a){c.logPromiseWarnings&&!Ec.hasOwnProperty(a)&&(Ec[a]=!0,f.warn("[$parse] Promise found in the expression `"+a+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(e,f){var m;switch(typeof e){case "string":var l=f?a:b;if(l.hasOwnProperty(e))return l[e];m=f?g:c;var n=new Ub(m);m=(new gb(n,d,m)).parse(e);"hasOwnProperty"!==e&&(l[e]=m);return m;case "function":return e;
default:return v}}}]}function Zd(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return De(function(a){b.$evalAsync(a)},a)}]}function De(b,a){function c(a){return a}function d(a){return g(a)}var e=function(){var g=[],m,l;return l={resolve:function(a){if(g){var c=g;g=u;m=f(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],m.then(a[0],a[1],a[2])})}},reject:function(a){l.resolve(h(a))},notify:function(a){if(g){var c=g;g.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=
c[d],b[2](a)})}},promise:{then:function(b,f,h){var l=e(),J=function(d){try{l.resolve((N(b)?b:c)(d))}catch(e){l.reject(e),a(e)}},w=function(b){try{l.resolve((N(f)?f:d)(b))}catch(c){l.reject(c),a(c)}},t=function(b){try{l.notify((N(h)?h:c)(b))}catch(d){a(d)}};g?g.push([J,w,t]):m.then(J,w,t);return l.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(h){return b(h,
!1)}return g&&N(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},f=function(a){return a&&N(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},g=function(a){var b=e();b.reject(a);return b.promise},h=function(c){return{then:function(f,g){var h=e();b(function(){try{h.resolve((N(g)?g:d)(c))}catch(b){h.reject(b),a(b)}});return h.promise}}};return{defer:e,reject:g,
when:function(h,m,l,n){var q=e(),p,s=function(b){try{return(N(m)?m:c)(b)}catch(d){return a(d),g(d)}},J=function(b){try{return(N(l)?l:d)(b)}catch(c){return a(c),g(c)}},w=function(b){try{return(N(n)?n:c)(b)}catch(d){a(d)}};b(function(){f(h).then(function(a){p||(p=!0,q.resolve(f(a).then(s,J,w)))},function(a){p||(p=!0,q.resolve(J(a)))},function(a){p||q.notify(w(a))})});return q.promise},all:function(a){var b=e(),c=0,d=L(a)?[]:{};r(a,function(a,e){c++;f(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,
--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function fe(){this.$get=["$window","$timeout",function(b,a){var c=b.requestAnimationFrame||b.webkitRequestAnimationFrame||b.mozRequestAnimationFrame,d=b.cancelAnimationFrame||b.webkitCancelAnimationFrame||b.mozCancelAnimationFrame||b.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(b){var c=a(b,16.66,!1);return function(){a.cancel(c)}};f.supported=
e;return f}]}function Yd(){var b=10,a=z("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,f,g){function h(){this.$id=ib();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings=
{}}function k(b){if(q.$$phase)throw a("inprog",q.$$phase);q.$$phase=b}function m(a,b){var c=f(a);Ya(c,b);return c}function l(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(this.$$childScopeClass||(this.$$childScopeClass=function(){this.$$watchers=this.$$nextSibling=this.$$childHead=
this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$id=ib();this.$$childScopeClass=null},this.$$childScopeClass.prototype=this),a=new this.$$childScopeClass);a["this"]=a;a.$parent=this;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=m(a,"watch"),f=this.$$watchers,g={fn:b,last:n,get:e,exp:a,eq:!!d};c=null;if(!N(b)){var h=m(b||v,"listener");g.fn=function(a,
b,c){h(c)}}if("string"==typeof a&&e.constant){var k=g.fn;g.fn=function(a,b,c){k.call(this,a,b,c);Ua(f,g)}}f||(f=this.$$watchers=[]);f.unshift(g);return function(){Ua(f,g);c=null}},$watchCollection:function(a,b){var c=this,d,e,g,h=1<b.length,k=0,l=f(a),m=[],n={},q=!0,r=0;return this.$watch(function(){d=l(c);var a,b,f;if(T(d))if(Sa(d))for(e!==m&&(e=m,r=e.length=0,k++),a=d.length,r!==a&&(k++,e.length=r=a),b=0;b<a;b++)f=e[b]!==e[b]&&d[b]!==d[b],f||e[b]===d[b]||(k++,e[b]=d[b]);else{e!==n&&(e=n={},r=0,
k++);a=0;for(b in d)d.hasOwnProperty(b)&&(a++,e.hasOwnProperty(b)?(f=e[b]!==e[b]&&d[b]!==d[b],f||e[b]===d[b]||(k++,e[b]=d[b])):(r++,e[b]=d[b],k++));if(r>a)for(b in k++,e)e.hasOwnProperty(b)&&!d.hasOwnProperty(b)&&(r--,delete e[b])}else e!==d&&(e=d,k++);return k},function(){q?(q=!1,b(d,d,c)):b(d,g,c);if(h)if(T(d))if(Sa(d)){g=Array(d.length);for(var a=0;a<d.length;a++)g[a]=d[a]}else for(a in g={},d)lb.call(d,a)&&(g[a]=d[a]);else g=d})},$digest:function(){var d,f,h,l,m=this.$$asyncQueue,r=this.$$postDigestQueue,
K,B,u=b,O,M=[],A,P,C;k("$digest");g.$$checkUrlChange();c=null;do{B=!1;for(O=this;m.length;){try{C=m.shift(),C.scope.$eval(C.expression)}catch(I){q.$$phase=null,e(I)}c=null}a:do{if(l=O.$$watchers)for(K=l.length;K--;)try{if(d=l[K])if((f=d.get(O))!==(h=d.last)&&!(d.eq?Ca(f,h):"number"===typeof f&&"number"===typeof h&&isNaN(f)&&isNaN(h)))B=!0,c=d,d.last=d.eq?Ka(f,null):f,d.fn(f,h===n?f:h,O),5>u&&(A=4-u,M[A]||(M[A]=[]),P=N(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,P+="; newVal: "+oa(f)+"; oldVal: "+
oa(h),M[A].push(P));else if(d===c){B=!1;break a}}catch(D){q.$$phase=null,e(D)}if(!(l=O.$$childHead||O!==this&&O.$$nextSibling))for(;O!==this&&!(l=O.$$nextSibling);)O=O.$parent}while(O=l);if((B||m.length)&&!u--)throw q.$$phase=null,a("infdig",b,oa(M));}while(B||m.length);for(q.$$phase=null;r.length;)try{r.shift()()}catch(x){e(x)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==q&&(r(this.$$listenerCount,Bb(null,l,this)),a.$$childHead==
this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=null,this.$$listeners={},this.$$watchers=this.$$asyncQueue=this.$$postDigestQueue=[],this.$destroy=this.$digest=this.$apply=v,this.$on=this.$watch=function(){return v})}},
$eval:function(a,b){return f(a)(this,b)},$evalAsync:function(a){q.$$phase||q.$$asyncQueue.length||g.defer(function(){q.$$asyncQueue.length&&q.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},$apply:function(a){try{return k("$apply"),this.$eval(a)}catch(b){e(b)}finally{q.$$phase=null;try{q.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||
(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=Ta(c,b);-1!==d&&(c[d]=null,l(e,1,a))}},$emit:function(a,b){var c=[],d,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=[h].concat(wa.call(arguments,1)),l,m;do{d=f.$$listeners[a]||c;h.currentScope=f;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){e(n)}else d.splice(l,1),l--,m--;if(g)break;
f=f.$parent}while(f);return h},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(wa.call(arguments,1)),h,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){e(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return f}};var q=new h;
return q}]}function bd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*((https?|ftp|file):|data:image\/)/;this.aHrefSanitizationWhitelist=function(a){return D(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return D(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,f;if(!R||8<=R)if(f=xa(c).href,""!==f&&!f.match(e))return"unsafe:"+f;return c}}}function Ee(b){if("self"===b)return b;if(G(b)){if(-1<b.indexOf("***"))throw za("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,
"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(kb(b))return RegExp("^"+b.source+"$");throw za("imatcher");}function Fc(b){var a=[];D(b)&&r(b,function(b){a.push(Ee(b))});return a}function ae(){this.SCE_CONTEXTS=fa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=Fc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=Fc(b));return a};this.$get=["$injector",function(c){function d(a){var b=
function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw za("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var f=d(),g={};g[fa.HTML]=d(f);g[fa.CSS]=d(f);g[fa.URL]=d(f);g[fa.JS]=d(f);g[fa.RESOURCE_URL]=d(g[fa.URL]);return{trustAs:function(a,b){var c=g.hasOwnProperty(a)?g[a]:null;if(!c)throw za("icontext",
a,b);if(null===b||b===u||""===b)return b;if("string"!==typeof b)throw za("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===u||""===d)return d;var f=g.hasOwnProperty(c)?g[c]:null;if(f&&d instanceof f)return d.$$unwrapTrustedValue();if(c===fa.RESOURCE_URL){var f=xa(d.toString()),l,n,q=!1;l=0;for(n=b.length;l<n;l++)if("self"===b[l]?Pb(f):b[l].exec(f.href)){q=!0;break}if(q)for(l=0,n=a.length;l<n;l++)if("self"===a[l]?Pb(f):a[l].exec(f.href)){q=!1;break}if(q)return d;throw za("insecurl",
d.toString());}if(c===fa.HTML)return e(d);throw za("unsafe");},valueOf:function(a){return a instanceof f?a.$$unwrapTrustedValue():a}}}]}function $d(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw za("iequirks");var e=ha(fa);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},
e.valueOf=ga);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var f=e.parseAs,g=e.getTrusted,h=e.trustAs;r(fa,function(a,b){var c=x(b);e[ab("parse_as_"+c)]=function(b){return f(a,b)};e[ab("get_trusted_"+c)]=function(b){return g(a,b)};e[ab("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function be(){this.$get=["$window","$document",function(b,a){var c={},d=U((/android (\d+)/.exec(x((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||
{}).userAgent),f=a[0]||{},g=f.documentMode,h,k=/^(Moz|webkit|O|ms)(?=[A-Z])/,m=f.body&&f.body.style,l=!1,n=!1;if(m){for(var q in m)if(l=k.exec(q)){h=l[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in m&&"webkit");l=!!("transition"in m||h+"Transition"in m);n=!!("animation"in m||h+"Animation"in m);!d||l&&n||(l=G(f.body.style.webkitTransition),n=G(f.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!g||7<
g),hasEvent:function(a){if("input"==a&&9==R)return!1;if(F(c[a])){var b=f.createElement("div");c[a]="on"+a in b}return c[a]},csp:Za(),vendorPrefix:h,transitions:l,animations:n,android:d,msie:R,msieDocumentMode:g}}]}function de(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,k){var m=c.defer(),l=m.promise,n=D(k)&&!k;h=a.defer(function(){try{m.resolve(e())}catch(a){m.reject(a),d(a)}finally{delete f[l.$$timeoutId]}n||b.$apply()},h);l.$$timeoutId=h;f[h]=m;
return l}var f={};e.cancel=function(b){return b&&b.$$timeoutId in f?(f[b.$$timeoutId].reject("canceled"),delete f[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function xa(b,a){var c=b;R&&(Y.setAttribute("href",c),c=Y.href);Y.setAttribute("href",c);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:
"/"+Y.pathname}}function Pb(b){b=G(b)?xa(b):b;return b.protocol===Gc.protocol&&b.host===Gc.host}function ee(){this.$get=aa(W)}function kc(b){function a(d,e){if(T(d)){var f={};r(d,function(b,c){f[c]=a(c,b)});return f}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",Hc);a("date",Ic);a("filter",Fe);a("json",Ge);a("limitTo",He);a("lowercase",Ie);a("number",Jc);a("orderBy",Kc);a("uppercase",Je)}function Fe(){return function(b,
a,c){if(!L(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Xa.equals(a,b)}:function(a,b){if(a&&b&&"object"===typeof a&&"object"===typeof b){for(var d in a)if("$"!==d.charAt(0)&&lb.call(a,d)&&c(a[d],b[d]))return!0;return!1}b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var f=function(a,b){if("string"===typeof b&&"!"===b.charAt(0))return!f(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,
b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&f(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(f(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var g in a)(function(b){"undefined"!==typeof a[b]&&e.push(function(c){return f("$"==b?c:c&&c[b],a[b])})})(g);break;case "function":e.push(a);break;default:return b}d=[];for(g=0;g<b.length;g++){var h=
b[g];e.check(h)&&d.push(h)}return d}}function Hc(b){var a=b.NUMBER_FORMATS;return function(b,d){F(d)&&(d=a.CURRENCY_SYM);return Lc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Jc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Lc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Lc(b,a,c,d,e){if(null==b||!isFinite(b)||T(b))return"";var f=0>b;b=Math.abs(b);var g=b+"",h="",k=[],m=!1;if(-1!==g.indexOf("e")){var l=g.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&
l[3]>e+1?(g="0",b=0):(h=g,m=!0)}if(m)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));else{g=(g.split(Mc)[1]||"").length;F(e)&&(e=Math.min(Math.max(a.minFrac,g),a.maxFrac));b=+(Math.round(+(b.toString()+"e"+e)).toString()+"e"+-e);0===b&&(f=!1);b=(""+b).split(Mc);g=b[0];b=b[1]||"";var l=0,n=a.lgSize,q=a.gSize;if(g.length>=n+q)for(l=g.length-n,m=0;m<l;m++)0===(l-m)%q&&0!==m&&(h+=c),h+=g.charAt(m);for(m=l;m<g.length;m++)0===(g.length-m)%n&&0!==m&&(h+=c),h+=g.charAt(m);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,
e))}k.push(f?a.negPre:a.posPre);k.push(h);k.push(f?a.negSuf:a.posSuf);return k.join("")}function Vb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function Z(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Vb(e,a,d)}}function vb(b,a){return function(c,d){var e=c["get"+b](),f=La(a?"SHORT"+b:b);return d[f][e]}}function Ic(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var f=0,g=0,h=b[8]?
a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=U(b[9]+b[10]),g=U(b[9]+b[11]));h.call(a,U(b[1]),U(b[2])-1,U(b[3]));f=U(b[4]||0)-f;g=U(b[5]||0)-g;h=U(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var f="",g=[],h,k;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;G(c)&&(c=Ke.test(c)?U(c):a(c));jb(c)&&(c=new Date(c));
if(!va(c))return c;for(;e;)(k=Le.exec(e))?(g=g.concat(wa.call(k,1)),e=g.pop()):(g.push(e),e=null);r(g,function(a){h=Me[a];f+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return f}}function Ge(){return function(b){return oa(b,!0)}}function He(){return function(b,a){if(!L(b)&&!G(b))return b;a=Infinity===Math.abs(Number(a))?Number(a):U(a);if(G(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=
b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Kc(b){return function(a,c,d){function e(a,b){return Wa(b)?function(b,c){return a(c,b)}:a}function f(a,b){var c=typeof a,d=typeof b;return c==d?(va(a)&&va(b)&&(a=a.valueOf(),b=b.valueOf()),"string"==c&&(a=a.toLowerCase(),b=b.toLowerCase()),a===b?0:a<b?-1:1):c<d?-1:1}if(!Sa(a))return a;c=L(c)?c:[c];0===c.length&&(c=["+"]);c=Uc(c,function(a){var c=!1,d=a||ga;if(G(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);
if(""===a)return e(function(a,b){return f(a,b)},c);d=b(a);if(d.constant){var m=d();return e(function(a,b){return f(a[m],b[m])},c)}}return e(function(a,b){return f(d(a),d(b))},c)});return wa.call(a).sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function Aa(b){N(b)&&(b={link:b});b.restrict=b.restrict||"AC";return aa(b)}function Nc(b,a,c,d){function e(a,c){c=c?"-"+nb(c,"-"):"";d.setClass(b,(a?wb:xb)+c,(a?xb:wb)+c)}var f=this,g=b.parent().controller("form")||
yb,h=0,k=f.$error={},m=[];f.$name=a.name||a.ngForm;f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;g.$addControl(f);b.addClass(Ra);e(!0);f.$addControl=function(a){Ea(a.$name,"input");m.push(a);a.$name&&(f[a.$name]=a)};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(k,function(b,c){f.$setValidity(c,!0,a)});Ua(m,a)};f.$setValidity=function(a,b,c){var d=k[a];if(b)d&&(Ua(d,c),d.length||(h--,h||(e(b),f.$valid=!0,f.$invalid=!1),k[a]=!1,e(!0,a),g.$setValidity(a,!0,f)));else{h||
e(b);if(d){if(-1!=Ta(d,c))return}else k[a]=d=[],h++,e(!1,a),g.$setValidity(a,!1,f);d.push(c);f.$valid=!1;f.$invalid=!0}};f.$setDirty=function(){d.removeClass(b,Ra);d.addClass(b,zb);f.$dirty=!0;f.$pristine=!1;g.$setDirty()};f.$setPristine=function(){d.removeClass(b,zb);d.addClass(b,Ra);f.$dirty=!1;f.$pristine=!0;r(m,function(a){a.$setPristine()})}}function ua(b,a,c,d){b.$setValidity(a,c);return c?d:u}function Oc(b,a){var c,d;if(a)for(c=0;c<a.length;++c)if(d=a[c],b[d])return!0;return!1}function Ne(b,
a,c,d,e){T(e)&&(b.$$hasNativeValidators=!0,b.$parsers.push(function(f){if(b.$error[a]||Oc(e,d)||!Oc(e,c))return f;b.$setValidity(a,!1)}))}function Ab(b,a,c,d,e,f){var g=a.prop(Oe),h=a[0].placeholder,k={},m=x(a[0].type);d.$$validityState=g;if(!e.android){var l=!1;a.on("compositionstart",function(a){l=!0});a.on("compositionend",function(){l=!1;n()})}var n=function(e){if(!l){var f=a.val();if(R&&"input"===(e||k).type&&a[0].placeholder!==h)h=a[0].placeholder;else if("password"!==m&&Wa(c.ngTrim||"T")&&
(f=$(f)),e=g&&d.$$hasNativeValidators,d.$viewValue!==f||""===f&&e)b.$root.$$phase?d.$setViewValue(f):b.$apply(function(){d.$setViewValue(f)})}};if(e.hasEvent("input"))a.on("input",n);else{var q,p=function(){q||(q=f.defer(function(){n();q=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||p()});if(e.hasEvent("paste"))a.on("paste cut",p)}a.on("change",n);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var s=c.ngPattern;s&&((e=s.match(/^\/(.*)\/([gim]*)$/))?
(s=RegExp(e[1],e[2]),e=function(a){return ua(d,"pattern",d.$isEmpty(a)||s.test(a),a)}):e=function(c){var e=b.$eval(s);if(!e||!e.test)throw z("ngPattern")("noregexp",s,e,ia(a));return ua(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var r=U(c.ngMinlength);e=function(a){return ua(d,"minlength",d.$isEmpty(a)||a.length>=r,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var w=U(c.ngMaxlength);e=function(a){return ua(d,"maxlength",d.$isEmpty(a)||
a.length<=w,a)};d.$parsers.push(e);d.$formatters.push(e)}}function Wb(b,a){b="ngClass"+b;return["$animate",function(c){function d(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],l=0;l<b.length;l++)if(e==b[l])continue a;c.push(e)}return c}function e(a){if(!L(a)){if(G(a))return a.split(" ");if(T(a)){var b=[];r(a,function(a,c){a&&(b=b.concat(c.split(" ")))});return b}}return a}return{restrict:"AC",link:function(f,g,h){function k(a,b){var c=g.data("$classCounts")||{},d=[];r(a,function(a){if(0<
b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function m(b){if(!0===a||f.$index%2===a){var m=e(b||[]);if(!l){var p=k(m,1);h.$addClass(p)}else if(!Ca(b,l)){var s=e(l),p=d(m,s),m=d(s,m),m=k(m,-1),p=k(p,1);0===p.length?c.removeClass(g,m):0===m.length?c.addClass(g,p):c.setClass(g,p,m)}}l=ha(b)}var l;f.$watch(h[b],m,!0);h.$observe("class",function(a){m(f.$eval(h[b]))});"ngClass"!==b&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var l=e(f.$eval(h[b]));
g===a?(g=k(l,1),h.$addClass(g)):(g=k(l,-1),h.$removeClass(g))}})}}}]}var Oe="validity",x=function(b){return G(b)?b.toLowerCase():b},lb=Object.prototype.hasOwnProperty,La=function(b){return G(b)?b.toUpperCase():b},R,A,Fa,wa=[].slice,Pe=[].push,Ba=Object.prototype.toString,Va=z("ng"),Xa=W.angular||(W.angular={}),$a,Pa,na=["0","0","0"];R=U((/msie (\d+)/.exec(x(navigator.userAgent))||[])[1]);isNaN(R)&&(R=U((/trident\/.*; rv:(\d+)/.exec(x(navigator.userAgent))||[])[1]));v.$inject=[];ga.$inject=[];var L=
function(){return N(Array.isArray)?Array.isArray:function(b){return"[object Array]"===Ba.call(b)}}(),$=function(){return String.prototype.trim?function(b){return G(b)?b.trim():b}:function(b){return G(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Pa=9>R?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=b.scopeName?La(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Za=function(){if(D(Za.isActive_))return Za.isActive_;var b=!(!X.querySelector("[ng-csp]")&&
!X.querySelector("[data-ng-csp]"));if(!b)try{new Function("")}catch(a){b=!0}return Za.isActive_=b},Xc=/[A-Z]/g,$c={full:"1.2.28",major:1,minor:2,dot:28,codeName:"finnish-disembarkation"};S.expando="ng339";var cb=S.cache={},me=1,sb=W.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},bb=W.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)};S._data=function(b){return this.cache[b[this.expando]]||
{}};var he=/([\:\-\_]+(.))/g,ie=/^moz([A-Z])/,Hb=z("jqLite"),je=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Ib=/<|&#?\w+;/,ke=/<([\w:]+)/,le=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,da={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};da.optgroup=da.option;da.tbody=da.tfoot=da.colgroup=
da.caption=da.thead;da.th=da.td;var Oa=S.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===X.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),S(W).on("load",a))},toString:function(){var b=[];r(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?A(this[b]):A(this[this.length+b])},length:0,push:Pe,sort:[].sort,splice:[].splice},rb={};r("multiple selected checked disabled readOnly required open".split(" "),function(b){rb[x(b)]=b});
var pc={};r("input select option textarea button form details".split(" "),function(b){pc[La(b)]=!0});r({data:Mb,removeData:Lb},function(b,a){S[a]=b});r({data:Mb,inheritedData:qb,scope:function(b){return A.data(b,"$scope")||qb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return A.data(b,"$isolateScope")||A.data(b,"$isolateScopeNoTemplate")},controller:mc,injector:function(b){return qb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Nb,css:function(b,
a,c){a=ab(a);if(D(c))b.style[a]=c;else{var d;8>=R&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=R&&(d=""===d?u:d);return d}},attr:function(b,a,c){var d=x(a);if(rb[d])if(D(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||v).specified?d:u;else if(D(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?u:b},prop:function(b,a,c){if(D(c))b[a]=c;else return b[a]},text:function(){function b(b,
d){var e=a[b.nodeType];if(F(d))return e?b[e]:"";b[e]=d}var a=[];9>R?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(F(a)){if("SELECT"===Pa(b)&&b.multiple){var c=[];r(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(F(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Ma(d[c]);b.innerHTML=a},empty:nc},function(b,a){S.prototype[a]=function(a,d){var e,
f,g=this.length;if(b!==nc&&(2==b.length&&b!==Nb&&b!==mc?a:d)===u){if(T(a)){for(e=0;e<g;e++)if(b===Mb)b(this[e],a);else for(f in a)b(this[e],f,a[f]);return this}e=b.$dv;g=e===u?Math.min(g,1):g;for(f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<g;e++)b(this[e],a,d);return this}});r({removeData:Lb,dealoc:Ma,on:function a(c,d,e,f){if(D(f))throw Hb("onargs");var g=pa(c,"events"),h=pa(c,"handle");g||pa(c,"events",g={});h||pa(c,"handle",h=ne(c,g));r(d.split(" "),function(d){var f=g[d];if(!f){if("mouseenter"==
d||"mouseleave"==d){var l=X.body.contains||X.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};g[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||h(a,d)})}else sb(c,d,h),g[d]=[];f=g[d]}f.push(e)})},
off:lc,one:function(a,c,d){a=A(a);a.on(c,function f(){a.off(c,d);a.off(c,f)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ma(a);r(new S(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];r(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,c){r(new S(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,
c){if(1===a.nodeType){var d=a.firstChild;r(new S(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=A(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ma(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;r(new S(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:pb,removeClass:ob,toggleClass:function(a,c,d){c&&r(c.split(" "),function(c){var f=d;F(f)&&(f=!Nb(a,c));(f?pb:ob)(a,c)})},parent:function(a){return(a=
a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Kb,triggerHandler:function(a,c,d){var e,f;e=c.type||c;var g=(pa(a,"events")||{})[e];g&&(e={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopPropagation:v,type:e,target:a},
c.type&&(e=E(e,c)),c=ha(g),f=d?[e].concat(d):[e],r(c,function(c){c.apply(a,f)}))}},function(a,c){S.prototype[c]=function(c,e,f){for(var g,h=0;h<this.length;h++)F(g)?(g=a(this[h],c,e,f),D(g)&&(g=A(g))):Jb(g,a(this[h],c,e,f));return D(g)?g:this};S.prototype.bind=S.prototype.on;S.prototype.unbind=S.prototype.off});db.prototype={put:function(a,c){this[Na(a,this.nextUid)]=c},get:function(a){return this[Na(a,this.nextUid)]},remove:function(a){var c=this[a=Na(a,this.nextUid)];delete this[a];return c}};var pe=
/^function\s*[^\(]*\(\s*([^\)]*)\)/m,qe=/,/,re=/^\s*(_?)(\S+?)\1\s*$/,oe=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,eb=z("$injector"),Qe=z("$animate"),Ld=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Qe("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout","$$asyncCallback",
function(a,d){return{enter:function(a,c,g,h){g?g.after(a):(c&&c[0]||(c=g.parent()),c.append(a));h&&d(h)},leave:function(a,c){a.remove();c&&d(c)},move:function(a,c,d,h){this.enter(a,c,d,h)},addClass:function(a,c,g){c=G(c)?c:L(c)?c.join(" "):"";r(a,function(a){pb(a,c)});g&&d(g)},removeClass:function(a,c,g){c=G(c)?c:L(c)?c.join(" "):"";r(a,function(a){ob(a,c)});g&&d(g)},setClass:function(a,c,g,h){r(a,function(a){pb(a,c);ob(a,g)});h&&d(h)},enabled:v}}]}],ja=z("$compile");gc.$inject=["$provide","$$sanitizeUriProvider"];
var we=/^(x[\:\-_]|data[\:\-_])/i,wc=z("$interpolate"),Re=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,ze={http:80,https:443,ftp:21},Sb=z("$location");Ac.prototype=Tb.prototype=zc.prototype={$$html5:!1,$$replace:!1,absUrl:tb("$$absUrl"),url:function(a){if(F(a))return this.$$url;a=Re.exec(a);a[1]&&this.path(decodeURIComponent(a[1]));(a[2]||a[1])&&this.search(a[3]||"");this.hash(a[5]||"");return this},protocol:tb("$$protocol"),host:tb("$$host"),port:tb("$$port"),path:Bc("$$path",function(a){a=null!==a?a.toString():
"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(G(a)||jb(a))a=a.toString(),this.$$search=cc(a);else if(T(a))r(a,function(c,e){null==c&&delete a[e]}),this.$$search=a;else throw Sb("isrcharg");break;default:F(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:Bc("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};var la=z("$parse"),Ec=
{},ya,Se=Function.prototype.call,Te=Function.prototype.apply,Pc=Function.prototype.bind,hb={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:v,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return D(d)?D(e)?d+e:d:D(e)?e:u},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(D(d)?d:0)-(D(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^
e(a,c)},"=":v,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,
c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Ue={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Ub=function(a){this.options=a};Ub.prototype={constructor:Ub,lex:function(a){this.text=a;this.index=0;this.ch=u;this.lastCh=":";for(this.tokens=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent();
else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch}),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{a=this.ch+this.peek();var c=a+this.peek(2),d=hb[this.ch],e=hb[a],f=hb[c];f?(this.tokens.push({index:this.index,text:c,fn:f}),this.index+=3):e?(this.tokens.push({index:this.index,text:a,fn:e}),this.index+=2):d?(this.tokens.push({index:this.index,text:this.ch,fn:d}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+
1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},
throwError:function(a,c,d){d=d||this.index;c=D(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw la("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=x(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-
1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,literal:!0,constant:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,f,g,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}if(e)for(f=this.index;f<this.text.length;){h=this.text.charAt(f);if("("===h){g=c.substr(e-d+1);c=c.substr(0,e-d);this.index=f;break}if(this.isWhitespace(h))f++;
else break}d={index:d,text:c};if(hb.hasOwnProperty(c))d.fn=hb[c],d.literal=!0,d.constant=!0;else{var k=Dc(c,this.options,this.text);d.fn=E(function(a,c){return k(a,c)},{assign:function(d,e){return ub(d,c,e,a.text,a.options)}})}this.tokens.push(d);g&&(this.tokens.push({index:e,text:"."}),this.tokens.push({index:e+1,text:g}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,f=!1;this.index<this.text.length;){var g=this.text.charAt(this.index),e=e+g;if(f)"u"===g?(f=this.text.substring(this.index+
1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d+=Ue[g]||g,f=!1;else if("\\"===g)f=!0;else{if(g===a){this.index++;this.tokens.push({index:c,text:e,string:d,literal:!0,constant:!0,fn:function(){return d}});return}d+=g}this.index++}this.throwError("Unterminated quote",c)}};var gb=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};gb.ZERO=E(function(){return 0},{constant:!0});gb.prototype={constructor:gb,
parse:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);a.literal=!!a.literal;a.constant=!!a.constant;return a},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);a.literal=!!c.literal;a.constant=
!!c.constant}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw la("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw la("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var f=this.tokens[0],g=f.text;if(g===
a||g===c||g===d||g===e||!(a||c||d||e))return f}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return E(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return E(function(e,f){return a(e,f)?c(e,f):d(e,f)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return E(function(e,f){return c(e,
f,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,f=0;f<a.length;f++){var g=a[f];g&&(e=g(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());
else{var e=function(a,e,h){h=[h];for(var k=0;k<d.length;k++)h.push(d[k](a,e));return c.apply(a,h)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,f){return a.assign(d,c(d,f),f)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.assignment();
if(d=this.expect(":"))return this.ternaryFn(a,c,this.assignment());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},
relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(gb.ZERO,a.fn,
this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=Dc(d,this.options,this.text);return E(function(c,d,h){return e(h||a(c,d))},{assign:function(e,g,h){(h=a(e,h))||a.assign(e,h={});return ub(h,d,g,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return E(function(e,f){var g=a(e,f),h=d(e,f),k;ka(h,c.text);if(!g)return u;(g=ma(g[h],c.text))&&(g.then&&c.options.unwrapPromises)&&
(k=g,"$$v"in g||(k.$$v=u,k.then(function(a){k.$$v=a})),g=g.$$v);return g},{assign:function(e,f,g){var h=ka(d(e,g),c.text);(g=ma(a(e,g),c.text))||a.assign(e,g={});return g[h]=f}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(f,g){for(var h=[],k=c?c(f,g):f,m=0;m<d.length;m++)h.push(ma(d[m](f,g),e.text));m=a(f,g,k)||v;ma(k,e.text);var l=e.text;if(m){if(m.constructor===m)throw la("isecfn",
l);if(m===Se||m===Te||Pc&&m===Pc)throw la("isecff",l);}h=m.apply?m.apply(k,h):m(h[0],h[1],h[2],h[3],h[4]);return ma(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{if(this.peek("]"))break;var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return E(function(c,d){for(var g=[],h=0;h<a.length;h++)g.push(a[h](c,d));return g},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;
var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return E(function(c,d){for(var e={},k=0;k<a.length;k++){var m=a[k];e[m.key]=m.value(c,d)}return e},{literal:!0,constant:c})}};var Ce={},Be={},za=z("$sce"),fa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Y=X.createElement("a"),Gc=xa(W.location.href,!0);kc.$inject=["$provide"];Hc.$inject=["$locale"];Jc.$inject=["$locale"];
var Mc=".",Me={yyyy:Z("FullYear",4),yy:Z("FullYear",2,0,!0),y:Z("FullYear",1),MMMM:vb("Month"),MMM:vb("Month",!0),MM:Z("Month",2,1),M:Z("Month",1,1),dd:Z("Date",2),d:Z("Date",1),HH:Z("Hours",2),H:Z("Hours",1),hh:Z("Hours",2,-12),h:Z("Hours",1,-12),mm:Z("Minutes",2),m:Z("Minutes",1),ss:Z("Seconds",2),s:Z("Seconds",1),sss:Z("Milliseconds",3),EEEE:vb("Day"),EEE:vb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Vb(Math[0<
a?"floor":"ceil"](a/60),2)+Vb(Math.abs(a%60),2))}},Le=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Ke=/^\-?\d+$/;Ic.$inject=["$locale"];var Ie=aa(x),Je=aa(La);Kc.$inject=["$parse"];var cd=aa({restrict:"E",compile:function(a,c){8>=R&&(c.href||c.name||c.$set("href",""),a.append(X.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var f="[object SVGAnimatedString]"===Ba.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(f)||
a.preventDefault()})}}}),Fb={};r(rb,function(a,c){if("multiple"!=a){var d=qa("ng-"+c);Fb[d]=function(){return{priority:100,link:function(a,f,g){a.$watch(g[d],function(a){g.$set(c,!!a)})}}}}});r(["src","srcset","href"],function(a){var c=qa("ng-"+a);Fb[c]=function(){return{priority:99,link:function(d,e,f){var g=a,h=a;"href"===a&&"[object SVGAnimatedString]"===Ba.call(e.prop("href"))&&(h="xlinkHref",f.$attr[h]="xlink:href",g=null);f.$observe(c,function(c){c?(f.$set(h,c),R&&g&&e.prop(g,f[h])):"href"===
a&&f.$set(h,null)})}}}});var yb={$addControl:v,$removeControl:v,$setValidity:v,$setDirty:v,$setPristine:v};Nc.$inject=["$element","$attrs","$scope","$animate"];var Qc=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Nc,compile:function(){return{pre:function(a,e,f,g){if(!f.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};sb(e[0],"submit",h);e.on("$destroy",function(){c(function(){bb(e[0],"submit",h)},0,!1)})}var k=e.parent().controller("form"),
m=f.name||f.ngForm;m&&ub(a,m,g,m);if(k)e.on("$destroy",function(){k.$removeControl(g);m&&ub(a,m,u,m);E(g,yb)})}}}}}]},dd=Qc(),qd=Qc(!0),Ve=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,We=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Xe=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Rc={text:Ab,number:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Xe.test(a))return e.$setValidity("number",
!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return u});Ne(e,"number",Ye,null,e.$$validityState);e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return ua(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return ua(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return ua(e,"number",e.$isEmpty(a)||
jb(a),a)})},url:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);a=function(a){return ua(e,"url",e.$isEmpty(a)||Ve.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,f,g){Ab(a,c,d,e,f,g);a=function(a){return ua(e,"email",e.$isEmpty(a)||We.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){F(d.name)&&c.attr("name",ib());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};
d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var f=d.ngTrueValue,g=d.ngFalseValue;G(f)||(f=!0);G(g)||(g=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==f};e.$formatters.push(function(a){return a===f});e.$parsers.push(function(a){return a?f:g})},hidden:v,button:v,submit:v,reset:v,file:v},Ye=["badInput"],hc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",
link:function(d,e,f,g){g&&(Rc[x(f.type)]||Rc.text)(d,e,f,g,c,a)}}}],wb="ng-valid",xb="ng-invalid",Ra="ng-pristine",zb="ng-dirty",Ze=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate",function(a,c,d,e,f,g){function h(a,c){c=c?"-"+nb(c,"-"):"";g.removeClass(e,(a?xb:wb)+c);g.addClass(e,(a?wb:xb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=
d.name;var k=f(d.ngModel),m=k.assign;if(!m)throw z("ngModel")("nonassign",d.ngModel,ia(e));this.$render=v;this.$isEmpty=function(a){return F(a)||""===a||null===a||a!==a};var l=e.inheritedData("$formController")||yb,n=0,q=this.$error={};e.addClass(Ra);h(!0);this.$setValidity=function(a,c){q[a]!==!c&&(c?(q[a]&&n--,n||(h(!0),this.$valid=!0,this.$invalid=!1)):(h(!1),this.$invalid=!0,this.$valid=!1,n++),q[a]=!c,h(c,a),l.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=
!0;g.removeClass(e,zb);g.addClass(e,Ra)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,g.removeClass(e,Ra),g.addClass(e,zb),l.$setDirty());r(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,m(a,d),r(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var p=this;a.$watch(function(){var c=k(a);if(p.$modelValue!==c){var d=p.$formatters,e=d.length;for(p.$modelValue=c;e--;)c=d[e](c);p.$viewValue!==c&&(p.$viewValue=
c,p.$render())}return c})}],Fd=function(){return{require:["ngModel","^?form"],controller:Ze,link:function(a,c,d,e){var f=e[0],g=e[1]||yb;g.$addControl(f);a.$on("$destroy",function(){g.$removeControl(f)})}}},Hd=aa({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),ic=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var f=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",
!0),a};e.$formatters.push(f);e.$parsers.unshift(f);d.$observe("required",function(){f(e.$viewValue)})}}}},Gd=function(){return{require:"ngModel",link:function(a,c,d,e){var f=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!F(a)){var c=[];a&&r(a.split(f),function(a){a&&c.push($(a))});return c}});e.$formatters.push(function(a){return L(a)?a.join(", "):u});e.$isEmpty=function(a){return!a||!a.length}}}},$e=/^(true|false|\d+)$/,Id=function(){return{priority:100,
compile:function(a,c){return $e.test(c.ngValue)?function(a,c,f){f.$set("value",a.$eval(f.ngValue))}:function(a,c,f){a.$watch(f.ngValue,function(a){f.$set("value",a)})}}}},id=Aa({compile:function(a){a.addClass("ng-binding");return function(a,d,e){d.data("$binding",e.ngBind);a.$watch(e.ngBind,function(a){d.text(a==u?"":a)})}}}),kd=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],
jd=["$sce","$parse",function(a,c){return{compile:function(d){d.addClass("ng-binding");return function(d,f,g){f.data("$binding",g.ngBindHtml);var h=c(g.ngBindHtml);d.$watch(function(){return(h(d)||"").toString()},function(c){f.html(a.getTrustedHtml(h(d))||"")})}}}}],ld=Wb("",!0),nd=Wb("Odd",0),md=Wb("Even",1),od=Aa({compile:function(a,c){c.$set("ngCloak",u);a.removeClass("ng-cloak")}}),pd=[function(){return{scope:!0,controller:"@",priority:500}}],jc={},af={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),
function(a){var c=qa("ng-"+a);jc[c]=["$parse","$rootScope",function(d,e){return{compile:function(f,g){var h=d(g[c],!0);return function(c,d){d.on(a,function(d){var f=function(){h(c,{$event:d})};af[a]&&e.$$phase?c.$evalAsync(f):c.$apply(f)})}}}}]});var sd=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,k,m;c.$watch(e.ngIf,function(f){Wa(f)?k||(k=c.$new(),g(k,function(c){c[c.length++]=X.createComment(" end ngIf: "+e.ngIf+
" ");h={clone:c};a.enter(c,d.parent(),d)})):(m&&(m.remove(),m=null),k&&(k.$destroy(),k=null),h&&(m=Eb(h.clone),a.leave(m,function(){m=null}),h=null))})}}}],td=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Xa.noop,compile:function(g,h){var k=h.ngInclude||h.src,m=h.onload||"",l=h.autoscroll;return function(g,h,p,r,J){var w=0,t,y,u,B=function(){y&&(y.remove(),y=null);t&&(t.$destroy(),t=null);
u&&(e.leave(u,function(){y=null}),y=u,u=null)};g.$watch(f.parseAsResourceUrl(k),function(f){var k=function(){!D(l)||l&&!g.$eval(l)||d()},p=++w;f?(a.get(f,{cache:c}).success(function(a){if(p===w){var c=g.$new();r.template=a;a=J(c,function(a){B();e.enter(a,null,h,k)});t=c;u=a;t.$emit("$includeContentLoaded");g.$eval(m)}}).error(function(){p===w&&B()}),g.$emit("$includeContentRequested")):(B(),r.template=null)})}}}}],Jd=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",
link:function(c,d,e,f){d.html(f.template);a(d.contents())(c)}}}],ud=Aa({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),vd=Aa({terminal:!0,priority:1E3}),wd=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,f,g){var h=g.count,k=g.$attr.when&&f.attr(g.$attr.when),m=g.offset||0,l=e.$eval(k)||{},n={},q=c.startSymbol(),p=c.endSymbol(),s=/^when(Minus)?(.+)$/;r(g,function(a,c){s.test(c)&&(l[x(c.replace("when","").replace("Minus","-"))]=
f.attr(g.$attr[c]))});r(l,function(a,e){n[e]=c(a.replace(d,q+h+"-"+m+p))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-m));return n[c](e,f,!0)},function(a){f.text(a)})}}}],xd=["$parse","$animate",function(a,c){var d=z("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,f,g,h,k){var m=g.ngRepeat,l=m.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,q,p,s,u,w,t={$id:Na};if(!l)throw d("iexp",
m);g=l[1];h=l[2];(l=l[3])?(n=a(l),q=function(a,c,d){w&&(t[w]=a);t[u]=c;t.$index=d;return n(e,t)}):(p=function(a,c){return Na(c)},s=function(a){return a});l=g.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",g);u=l[3]||l[1];w=l[2];var y={};e.$watchCollection(h,function(a){var g,h,l=f[0],n,t={},D,C,I,x,G,v,z,F=[];if(Sa(a))v=a,G=q||p;else{G=q||s;v=[];for(I in a)a.hasOwnProperty(I)&&"$"!=I.charAt(0)&&v.push(I);v.sort()}D=v.length;h=F.length=v.length;for(g=0;g<h;g++)if(I=a===
v?g:v[g],x=a[I],n=G(I,x,g),Ea(n,"`track by` id"),y.hasOwnProperty(n))z=y[n],delete y[n],t[n]=z,F[g]=z;else{if(t.hasOwnProperty(n))throw r(F,function(a){a&&a.scope&&(y[a.id]=a)}),d("dupes",m,n,oa(x));F[g]={id:n};t[n]=!1}for(I in y)y.hasOwnProperty(I)&&(z=y[I],g=Eb(z.clone),c.leave(g),r(g,function(a){a.$$NG_REMOVED=!0}),z.scope.$destroy());g=0;for(h=v.length;g<h;g++){I=a===v?g:v[g];x=a[I];z=F[g];F[g-1]&&(l=F[g-1].clone[F[g-1].clone.length-1]);if(z.scope){C=z.scope;n=l;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);
z.clone[0]!=n&&c.move(Eb(z.clone),null,A(l));l=z.clone[z.clone.length-1]}else C=e.$new();C[u]=x;w&&(C[w]=I);C.$index=g;C.$first=0===g;C.$last=g===D-1;C.$middle=!(C.$first||C.$last);C.$odd=!(C.$even=0===(g&1));z.scope||k(C,function(a){a[a.length++]=X.createComment(" end ngRepeat: "+m+" ");c.enter(a,null,A(l));l=a;z.scope=C;z.clone=a;t[z.id]=z})}y=t})}}}],yd=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Wa(c)?"removeClass":"addClass"](d,"ng-hide")})}}],rd=["$animate",
function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Wa(c)?"addClass":"removeClass"](d,"ng-hide")})}}],zd=Aa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&r(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Ad=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,f){var g=[],h=[],k=[],m=[];c.$watch(e.ngSwitch||e.on,function(d){var n,q;n=0;for(q=k.length;n<q;++n)k[n].remove();n=k.length=0;for(q=
m.length;n<q;++n){var p=h[n];m[n].$destroy();k[n]=p;a.leave(p,function(){k.splice(n,1)})}h.length=0;m.length=0;if(g=f.cases["!"+d]||f.cases["?"])c.$eval(e.change),r(g,function(d){var e=c.$new();m.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],Bd=Aa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:f,element:c})}}),Cd=
Aa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,f){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:f,element:c})}}),Ed=Aa({link:function(a,c,d,e,f){if(!f)throw z("ngTransclude")("orphan",ia(c));f(function(a){c.empty();c.append(a)})}}),ed=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],bf=z("ngOptions"),Dd=aa({terminal:!0}),fd=["$compile","$parse",function(a,c){var d=
/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:v};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var k=this,m={},l=e,n;k.databound=d.ngModel;k.init=function(a,c,d){l=a;n=d};k.addOption=function(c){Ea(c,'"option value"');m[c]=!0;l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};
k.removeOption=function(a){this.hasOption(a)&&(delete m[a],l.$viewValue==a&&this.renderUnknownOption(a))};k.renderUnknownOption=function(c){c="? "+Na(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};k.hasOption=function(a){return m.hasOwnProperty(a)};c.$on("$destroy",function(){k.renderUnknownOption=v})}],link:function(e,g,h,k){function m(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(x.parent()&&x.remove(),c.val(a),""===a&&w.prop("selected",!0)):F(a)&&w?c.val(""):e.renderUnknownOption(a)};
c.on("change",function(){a.$apply(function(){x.parent()&&x.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new db(d.$viewValue);r(c.find("option"),function(c){c.selected=D(a.get(c.value))})};a.$watch(function(){Ca(e,d.$viewValue)||(e=ha(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];r(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,
s,u,v;s=g.$modelValue;u=A(e)||[];var F=n?Xb(u):u,G,Q,C;Q={};C=!1;if(p)if(k=g.$modelValue,w&&L(k))for(C=new db([]),d={},v=0;v<k.length;v++)d[m]=k[v],C.put(w(e,d),k[v]);else C=new db(k);v=C;var E,K;for(C=0;G=F.length,C<G;C++){k=C;if(n){k=F[C];if("$"===k.charAt(0))continue;Q[n]=k}Q[m]=u[k];d=r(e,Q)||"";(k=a[d])||(k=a[d]=[],c.push(d));p?d=D(v.remove(w?w(e,Q):x(e,Q))):(w?(d={},d[m]=s,d=w(e,d)===w(e,Q)):d=s===x(e,Q),v=v||d);E=l(e,Q);E=D(E)?E:"";k.push({id:w?w(e,Q):n?F[C]:C,label:E,selected:d})}p||(z||null===
s?a[""].unshift({id:"",label:"",selected:!v}):v||a[""].unshift({id:"?",label:"",selected:!0}));Q=0;for(F=c.length;Q<F;Q++){d=c[Q];k=a[d];B.length<=Q?(s={element:y.clone().attr("label",d),label:k.label},u=[s],B.push(u),f.append(s.element)):(u=B[Q],s=u[0],s.label!=d&&s.element.attr("label",s.label=d));E=null;C=0;for(G=k.length;C<G;C++)d=k[C],(v=u[C+1])?(E=v.element,v.label!==d.label&&(E.text(v.label=d.label),E.prop("label",v.label)),v.id!==d.id&&E.val(v.id=d.id),E[0].selected!==d.selected&&(E.prop("selected",
v.selected=d.selected),R&&E.prop("selected",v.selected))):(""===d.id&&z?K=z:(K=t.clone()).val(d.id).prop("selected",d.selected).attr("selected",d.selected).prop("label",d.label).text(d.label),u.push({element:K,label:d.label,id:d.id,selected:d.selected}),q.addOption(d.label,K),E?E.after(K):s.element.append(K),E=K);for(C++;u.length>C;)d=u.pop(),q.removeOption(d.label),d.element.remove()}for(;B.length>Q;)B.pop()[0].element.remove()}var k;if(!(k=s.match(d)))throw bf("iexp",s,ia(f));var l=c(k[2]||k[1]),
m=k[4]||k[6],n=k[5],r=c(k[3]||""),x=c(k[2]?k[1]:m),A=c(k[7]),w=k[8]?c(k[8]):null,B=[[{element:f,label:""}]];z&&(a(z)(e),z.removeClass("ng-scope"),z.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=A(e)||[],d={},k,l,q,r,s,t,v;if(p)for(l=[],r=0,t=B.length;r<t;r++)for(a=B[r],q=1,s=a.length;q<s;q++){if((k=a[q].element)[0].selected){k=k.val();n&&(d[n]=k);if(w)for(v=0;v<c.length&&(d[m]=c[v],w(e,d)!=k);v++);else d[m]=c[k];l.push(x(e,d))}}else if(k=f.val(),"?"==k)l=u;else if(""===
k)l=null;else if(w)for(v=0;v<c.length;v++){if(d[m]=c[v],w(e,d)==k){l=x(e,d);break}}else d[m]=c[k],n&&(d[n]=k),l=x(e,d);g.$setViewValue(l);h()})});g.$render=h;e.$watchCollection(A,h);e.$watchCollection(function(){var a={},c=A(e);if(c){for(var d=Array(c.length),f=0,g=c.length;f<g;f++)a[m]=c[f],d[f]=l(e,a);return d}},h);p&&e.$watchCollection(function(){return g.$modelValue},h)}if(k[1]){var q=k[0];k=k[1];var p=h.multiple,s=h.ngOptions,z=!1,w,t=A(X.createElement("option")),y=A(X.createElement("optgroup")),
x=t.clone();h=0;for(var B=g.children(),v=B.length;h<v;h++)if(""===B[h].value){w=z=B.eq(h);break}q.init(k,z,x);p&&(k.$isEmpty=function(a){return!a||0===a.length});s?n(e,g,k):p?l(e,g,k):m(e,g,k,q)}}}}],hd=["$interpolate",function(a){var c={addOption:v,removeOption:v};return{restrict:"E",priority:100,compile:function(d,e){if(F(e.value)){var f=a(d.text(),!0);f||e.$set("value",d.text())}return function(a,d,e){var m=d.parent(),l=m.data("$selectController")||m.parent().data("$selectController");l&&l.databound?
d.prop("selected",!1):l=c;f?a.$watch(f,function(a,c){e.$set("value",a);a!==c&&l.removeOption(c);l.addOption(a)}):l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],gd=aa({restrict:"E",terminal:!0});W.angular.bootstrap?console.log("WARNING: Tried to load angular more than once."):((Fa=W.jQuery)&&Fa.fn.on?(A=Fa,E(Fa.fn,{scope:Oa.scope,isolateScope:Oa.isolateScope,controller:Oa.controller,injector:Oa.injector,inheritedData:Oa.inheritedData}),Gb("remove",!0,!0,!1),Gb("empty",
!1,!1,!1),Gb("html",!1,!1,!0)):A=S,Xa.element=A,Zc(Xa),A(X).ready(function(){Wc(X,dc)}))})(window,document);!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-block-transitions{transition:0s all!important;-webkit-transition:0s all!important;}.ng-hide-add-active,.ng-hide-remove{display:block!important;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.2.28
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(H,a,A){'use strict';function D(p,g){g=g||{};a.forEach(g,function(a,c){delete g[c]});for(var c in p)!p.hasOwnProperty(c)||"$"===c.charAt(0)&&"$"===c.charAt(1)||(g[c]=p[c]);return g}var v=a.$$minErr("$resource"),C=/^(\.[a-zA-Z_$][0-9a-zA-Z_$]*)+$/;a.module("ngResource",["ng"]).factory("$resource",["$http","$q",function(p,g){function c(a,c){this.template=a;this.defaults=c||{};this.urlParams={}}function t(n,w,l){function r(h,d){var e={};d=x({},w,d);s(d,function(b,d){u(b)&&(b=b());var k;if(b&&
b.charAt&&"@"==b.charAt(0)){k=h;var a=b.substr(1);if(null==a||""===a||"hasOwnProperty"===a||!C.test("."+a))throw v("badmember",a);for(var a=a.split("."),f=0,c=a.length;f<c&&k!==A;f++){var g=a[f];k=null!==k?k[g]:A}}else k=b;e[d]=k});return e}function e(a){return a.resource}function f(a){D(a||{},this)}var F=new c(n);l=x({},B,l);s(l,function(h,d){var c=/^(POST|PUT|PATCH)$/i.test(h.method);f[d]=function(b,d,k,w){var q={},n,l,y;switch(arguments.length){case 4:y=w,l=k;case 3:case 2:if(u(d)){if(u(b)){l=
b;y=d;break}l=d;y=k}else{q=b;n=d;l=k;break}case 1:u(b)?l=b:c?n=b:q=b;break;case 0:break;default:throw v("badargs",arguments.length);}var t=this instanceof f,m=t?n:h.isArray?[]:new f(n),z={},B=h.interceptor&&h.interceptor.response||e,C=h.interceptor&&h.interceptor.responseError||A;s(h,function(a,b){"params"!=b&&("isArray"!=b&&"interceptor"!=b)&&(z[b]=G(a))});c&&(z.data=n);F.setUrlParams(z,x({},r(n,h.params||{}),q),h.url);q=p(z).then(function(b){var d=b.data,k=m.$promise;if(d){if(a.isArray(d)!==!!h.isArray)throw v("badcfg",
h.isArray?"array":"object",a.isArray(d)?"array":"object");h.isArray?(m.length=0,s(d,function(b){"object"===typeof b?m.push(new f(b)):m.push(b)})):(D(d,m),m.$promise=k)}m.$resolved=!0;b.resource=m;return b},function(b){m.$resolved=!0;(y||E)(b);return g.reject(b)});q=q.then(function(b){var a=B(b);(l||E)(a,b.headers);return a},C);return t?q:(m.$promise=q,m.$resolved=!1,m)};f.prototype["$"+d]=function(b,a,k){u(b)&&(k=a,a=b,b={});b=f[d].call(this,b,this,a,k);return b.$promise||b}});f.bind=function(a){return t(n,
x({},w,a),l)};return f}var B={get:{method:"GET"},save:{method:"POST"},query:{method:"GET",isArray:!0},remove:{method:"DELETE"},"delete":{method:"DELETE"}},E=a.noop,s=a.forEach,x=a.extend,G=a.copy,u=a.isFunction;c.prototype={setUrlParams:function(c,g,l){var r=this,e=l||r.template,f,p,h=r.urlParams={};s(e.split(/\W/),function(a){if("hasOwnProperty"===a)throw v("badname");!/^\d+$/.test(a)&&(a&&RegExp("(^|[^\\\\]):"+a+"(\\W|$)").test(e))&&(h[a]=!0)});e=e.replace(/\\:/g,":");g=g||{};s(r.urlParams,function(d,
c){f=g.hasOwnProperty(c)?g[c]:r.defaults[c];a.isDefined(f)&&null!==f?(p=encodeURIComponent(f).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"%20").replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+"),e=e.replace(RegExp(":"+c+"(\\W|$)","g"),function(a,c){return p+c})):e=e.replace(RegExp("(/?):"+c+"(\\W|$)","g"),function(a,c,d){return"/"==d.charAt(0)?d:c+d})});e=e.replace(/\/+$/,"")||"/";e=e.replace(/\/\.(?=\w+($|\?))/,".");c.url=e.replace(/\/\\\./,
"/.");s(g,function(a,e){r.urlParams[e]||(c.params=c.params||{},c.params[e]=a)})}};return t}])})(window,window.angular);
//# sourceMappingURL=angular-resource.min.js.map

/*
 AngularJS v1.2.28
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(q,g,r){'use strict';function F(a){var d=[];t(d,g.noop).chars(a);return d.join("")}function l(a){var d={};a=a.split(",");var c;for(c=0;c<a.length;c++)d[a[c]]=!0;return d}function G(a,d){function c(a,b,c,h){b=g.lowercase(b);if(u[b])for(;f.last()&&v[f.last()];)e("",f.last());w[b]&&f.last()==b&&e("",b);(h=x[b]||!!h)||f.push(b);var n={};c.replace(H,function(a,b,d,c,e){n[b]=s(d||c||e||"")});d.start&&d.start(b,n,h)}function e(a,b){var c=0,e;if(b=g.lowercase(b))for(c=f.length-1;0<=c&&f[c]!=b;c--);
if(0<=c){for(e=f.length-1;e>=c;e--)d.end&&d.end(f[e]);f.length=c}}"string"!==typeof a&&(a=null===a||"undefined"===typeof a?"":""+a);var b,k,f=[],n=a,h;for(f.last=function(){return f[f.length-1]};a;){h="";k=!0;if(f.last()&&y[f.last()])a=a.replace(RegExp("(.*)<\\s*\\/\\s*"+f.last()+"[^>]*>","i"),function(a,b){b=b.replace(I,"$1").replace(J,"$1");d.chars&&d.chars(s(b));return""}),e("",f.last());else{if(0===a.indexOf("\x3c!--"))b=a.indexOf("--",4),0<=b&&a.lastIndexOf("--\x3e",b)===b&&(d.comment&&d.comment(a.substring(4,
b)),a=a.substring(b+3),k=!1);else if(z.test(a)){if(b=a.match(z))a=a.replace(b[0],""),k=!1}else if(K.test(a)){if(b=a.match(A))a=a.substring(b[0].length),b[0].replace(A,e),k=!1}else L.test(a)&&((b=a.match(B))?(b[4]&&(a=a.substring(b[0].length),b[0].replace(B,c)),k=!1):(h+="<",a=a.substring(1)));k&&(b=a.indexOf("<"),h+=0>b?a:a.substring(0,b),a=0>b?"":a.substring(b),d.chars&&d.chars(s(h)))}if(a==n)throw M("badparse",a);n=a}e()}function s(a){if(!a)return"";var d=N.exec(a);a=d[1];var c=d[3];if(d=d[2])p.innerHTML=
d.replace(/</g,"&lt;"),d="textContent"in p?p.textContent:p.innerText;return a+d+c}function C(a){return a.replace(/&/g,"&amp;").replace(O,function(a){var c=a.charCodeAt(0);a=a.charCodeAt(1);return"&#"+(1024*(c-55296)+(a-56320)+65536)+";"}).replace(P,function(a){return"&#"+a.charCodeAt(0)+";"}).replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t(a,d){var c=!1,e=g.bind(a,a.push);return{start:function(a,k,f){a=g.lowercase(a);!c&&y[a]&&(c=a);c||!0!==D[a]||(e("<"),e(a),g.forEach(k,function(c,f){var m=
g.lowercase(f),k="img"===a&&"src"===m||"background"===m;!0!==Q[m]||!0===E[m]&&!d(c,k)||(e(" "),e(f),e('="'),e(C(c)),e('"'))}),e(f?"/>":">"))},end:function(a){a=g.lowercase(a);c||!0!==D[a]||(e("</"),e(a),e(">"));a==c&&(c=!1)},chars:function(a){c||e(C(a))}}}var M=g.$$minErr("$sanitize"),B=/^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/,A=/^<\/\s*([\w:-]+)[^>]*>/,H=/([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g,L=/^</,
K=/^<\//,I=/\x3c!--(.*?)--\x3e/g,z=/<!DOCTYPE([^>]*?)>/i,J=/<!\[CDATA\[(.*?)]]\x3e/g,O=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,P=/([^\#-~| |!])/g,x=l("area,br,col,hr,img,wbr");q=l("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");r=l("rp,rt");var w=g.extend({},r,q),u=g.extend({},q,l("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")),v=g.extend({},r,l("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var")),
y=l("script,style"),D=g.extend({},x,u,v,w),E=l("background,cite,href,longdesc,src,usemap"),Q=g.extend({},E,l("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width")),p=document.createElement("pre"),N=/^(\s*)([\s\S]*?)(\s*)$/;g.module("ngSanitize",[]).provider("$sanitize",
function(){this.$get=["$$sanitizeUri",function(a){return function(d){var c=[];G(d,t(c,function(c,b){return!/^unsafe/.test(a(c,b))}));return c.join("")}}]});g.module("ngSanitize").filter("linky",["$sanitize",function(a){var d=/((ftp|https?):\/\/|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"]/,c=/^mailto:/;return function(e,b){function k(a){a&&m.push(F(a))}function f(a,c){m.push("<a ");g.isDefined(b)&&(m.push('target="'),m.push(b),m.push('" '));m.push('href="',a.replace('"',"&quot;"),'">');k(c);m.push("</a>")}
if(!e)return e;for(var n,h=e,m=[],l,p;n=h.match(d);)l=n[0],n[2]==n[3]&&(l="mailto:"+l),p=n.index,k(h.substr(0,p)),f(l,n[0].replace(c,"")),h=h.substring(p+n[0].length);k(h);return a(m.join(""))}}])})(window,window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map

/*
 AngularJS v1.2.28
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(n,e,A){'use strict';function x(s,g,h){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,c,b,f,w){function y(){p&&(p.remove(),p=null);k&&(k.$destroy(),k=null);l&&(h.leave(l,function(){p=null}),p=l,l=null)}function v(){var b=s.current&&s.current.locals;if(e.isDefined(b&&b.$template)){var b=a.$new(),d=s.current;l=w(b,function(d){h.enter(d,null,l||c,function(){!e.isDefined(t)||t&&!a.$eval(t)||g()});y()});k=d.scope=b;k.$emit("$viewContentLoaded");k.$eval(u)}else y()}
var k,l,p,t=b.autoscroll,u=b.onload||"";a.$on("$routeChangeSuccess",v);v()}}}function z(e,g,h){return{restrict:"ECA",priority:-400,link:function(a,c){var b=h.current,f=b.locals;c.html(f.$template);var w=e(c.contents());b.controller&&(f.$scope=a,f=g(b.controller,f),b.controllerAs&&(a[b.controllerAs]=f),c.data("$ngControllerController",f),c.children().data("$ngControllerController",f));w(a)}}}n=e.module("ngRoute",["ng"]).provider("$route",function(){function s(a,c){return e.extend(new (e.extend(function(){},
{prototype:a})),c)}function g(a,e){var b=e.caseInsensitiveMatch,f={originalPath:a,regexp:a},h=f.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(a,e,b,c){a="?"===c?c:null;c="*"===c?c:null;h.push({name:b,optional:!!a});e=e||"";return""+(a?"":e)+"(?:"+(a?e:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");f.regexp=RegExp("^"+a+"$",b?"i":"");return f}var h={};this.when=function(a,c){h[a]=e.extend({reloadOnSearch:!0},c,a&&g(a,c));if(a){var b=
"/"==a[a.length-1]?a.substr(0,a.length-1):a+"/";h[b]=e.extend({redirectTo:a},g(b,c))}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(a,c,b,f,g,n,v,k){function l(){var d=p(),m=r.current;if(d&&m&&d.$$route===m.$$route&&e.equals(d.pathParams,m.pathParams)&&!d.reloadOnSearch&&!u)m.params=d.params,e.copy(m.params,b),a.$broadcast("$routeUpdate",m);else if(d||m)u=!1,a.$broadcast("$routeChangeStart",
d,m),(r.current=d)&&d.redirectTo&&(e.isString(d.redirectTo)?c.path(t(d.redirectTo,d.params)).search(d.params).replace():c.url(d.redirectTo(d.pathParams,c.path(),c.search())).replace()),f.when(d).then(function(){if(d){var a=e.extend({},d.resolve),c,b;e.forEach(a,function(d,c){a[c]=e.isString(d)?g.get(d):g.invoke(d)});e.isDefined(c=d.template)?e.isFunction(c)&&(c=c(d.params)):e.isDefined(b=d.templateUrl)&&(e.isFunction(b)&&(b=b(d.params)),b=k.getTrustedResourceUrl(b),e.isDefined(b)&&(d.loadedTemplateUrl=
b,c=n.get(b,{cache:v}).then(function(a){return a.data})));e.isDefined(c)&&(a.$template=c);return f.all(a)}}).then(function(c){d==r.current&&(d&&(d.locals=c,e.copy(d.params,b)),a.$broadcast("$routeChangeSuccess",d,m))},function(c){d==r.current&&a.$broadcast("$routeChangeError",d,m,c)})}function p(){var a,b;e.forEach(h,function(f,h){var q;if(q=!b){var g=c.path();q=f.keys;var l={};if(f.regexp)if(g=f.regexp.exec(g)){for(var k=1,p=g.length;k<p;++k){var n=q[k-1],r=g[k];n&&r&&(l[n.name]=r)}q=l}else q=null;
else q=null;q=a=q}q&&(b=s(f,{params:e.extend({},c.search(),a),pathParams:a}),b.$$route=f)});return b||h[null]&&s(h[null],{params:{},pathParams:{}})}function t(a,c){var b=[];e.forEach((a||"").split(":"),function(a,d){if(0===d)b.push(a);else{var e=a.match(/(\w+)(?:[?*])?(.*)/),f=e[1];b.push(c[f]);b.push(e[2]||"");delete c[f]}});return b.join("")}var u=!1,r={routes:h,reload:function(){u=!0;a.$evalAsync(l)}};a.$on("$locationChangeSuccess",l);return r}]});n.provider("$routeParams",function(){this.$get=
function(){return{}}});n.directive("ngView",x);n.directive("ngView",z);x.$inject=["$route","$anchorScroll","$animate"];z.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

/*
 angular-file-upload v0.5.7
 https://github.com/nervgh/angular-file-upload
*/
!function(a,b){return"function"==typeof define&&define.amd?(define("angular-file-upload",["angular"],function(a){return b(a)}),void 0):b(a)}(angular||null,function(a){var b=a.module("angularFileUpload",[]);return b.directive("ngFileDrop",["$fileUploader",function(b){"use strict";return{link:b.isHTML5?function(a,b,c){b.bind("drop",function(b){var d=b.dataTransfer?b.dataTransfer:b.originalEvent.dataTransfer;d&&(b.preventDefault(),b.stopPropagation(),a.$broadcast("file:removeoverclass"),a.$emit("file:add",d.files,a.$eval(c.ngFileDrop)))}).bind("dragover",function(b){var c=b.dataTransfer?b.dataTransfer:b.originalEvent.dataTransfer;b.preventDefault(),b.stopPropagation(),c.dropEffect="copy",a.$broadcast("file:addoverclass")}).bind("dragleave",function(c){c.target===b[0]&&a.$broadcast("file:removeoverclass")})}:a.noop}}]),b.directive("ngFileOver",function(){"use strict";return{link:function(a,b,c){a.$on("file:addoverclass",function(){b.addClass(c.ngFileOver||"ng-file-over")}),a.$on("file:removeoverclass",function(){b.removeClass(c.ngFileOver||"ng-file-over")})}}}),b.directive("ngFileSelect",["$fileUploader",function(a){"use strict";return{link:function(b,c,d){a.isHTML5||c.removeAttr("multiple"),c.bind("change",function(){var e=a.isHTML5?this.files:this,f=b.$eval(d.ngFileSelect);b.$emit("file:add",e,f),a.isHTML5&&c.attr("multiple")&&c.prop("value",null)}),c.prop("value",null)}}}]),b.factory("$fileUploader",["$compile","$rootScope","$http","$window",function(b,c,d,e){"use strict";function f(b){a.extend(this,{scope:c,url:"/",alias:"file",queue:[],headers:{},progress:null,autoUpload:!1,removeAfterUpload:!1,method:"POST",filters:[],formData:[],isUploading:!1,queueLimit:Number.MAX_VALUE,withCredentials:!1,_nextIndex:0,_timestamp:Date.now()},b),this.filters.unshift(this._queueLimitFilter),this.filters.unshift(this._emptyFileFilter),this.scope.$on("file:add",function(a,b,c){a.stopPropagation(),this.addToQueue(b,c)}.bind(this)),this.bind("beforeupload",g.prototype._beforeupload),this.bind("in:progress",g.prototype._progress),this.bind("in:success",g.prototype._success),this.bind("in:cancel",g.prototype._cancel),this.bind("in:error",g.prototype._error),this.bind("in:complete",g.prototype._complete),this.bind("in:progress",this._progress),this.bind("in:complete",this._complete)}function g(c){if(!f.prototype.isHTML5){var d=a.element(c.file),e=b(d.clone())(c.uploader.scope),g=d.val();c.file={lastModifiedDate:null,size:null,type:"like/"+g.slice(g.lastIndexOf(".")+1).toLowerCase(),name:g.slice(g.lastIndexOf("/")+g.lastIndexOf("\\")+2)},c._input=d,e.prop("value",null),d.css("display","none").after(e)}a.extend(this,{isReady:!1,isUploading:!1,isUploaded:!1,isSuccess:!1,isCancel:!1,isError:!1,progress:null,index:null},c)}return f.prototype={constructor:f,_emptyFileFilter:function(b){return a.isElement(b)?!0:!!b.size},_queueLimitFilter:function(){return this.queue.length<this.queueLimit},bind:function(a,b){return this.scope.$on(this._timestamp+":"+a,b.bind(this))},trigger:function(a){arguments[0]=this._timestamp+":"+a,this.scope.$broadcast.apply(this.scope,arguments)},isHTML5:!(!e.File||!e.FormData),addToQueue:function(b,c){var d=this.queue.length,e="length"in b?b:[b];a.forEach(e,function(b){var d=this.filters.length?this.filters.every(function(a){return a.call(this,b)},this):!0,e=new g(a.extend({url:this.url,alias:this.alias,headers:a.copy(this.headers),formData:a.copy(this.formData),removeAfterUpload:this.removeAfterUpload,withCredentials:this.withCredentials,method:this.method,uploader:this,file:b},c));d?(this.queue.push(e),this.trigger("afteraddingfile",e)):this.trigger("whenaddingfilefailed",e)},this),this.queue.length!==d&&(this.trigger("afteraddingall",this.queue),this.progress=this._getTotalProgress()),this._render(),this.autoUpload&&this.uploadAll()},removeFromQueue:function(a){var b=this.getIndexOfItem(a),c=this.queue[b];c.cancel&&c.cancel(),c._destroy&&c._destroy(),this.queue.splice(b,1),this.progress=this._getTotalProgress()},clearQueue:function(){for(;this.queue.length;)this.queue[this.queue.length-1].remove()},uploadItem:function(a){var b=this.getIndexOfItem(a),c=this.queue[b],d=this.isHTML5?"_xhrTransport":"_iframeTransport";c.index=c.index||this._nextIndex++,c.isReady=!0,this.isUploading||(this.isUploading=!0,this[d](c))},cancelItem:function(a){var b=this.getIndexOfItem(a),c=this.queue[b],d=this.isHTML5?"_xhr":"_form";c[d]&&c[d].abort()},uploadAll:function(){var a=this.getNotUploadedItems().filter(function(a){return!a.isUploading});a.forEach(function(a){a.index=a.index||this._nextIndex++,a.isReady=!0},this),a.length&&this.uploadItem(a[0])},cancelAll:function(){this.getNotUploadedItems().forEach(function(a){this.cancelItem(a)},this)},getIndexOfItem:function(b){return a.isNumber(b)?b:this.queue.indexOf(b)},getNotUploadedItems:function(){return this.queue.filter(function(a){return!a.isUploaded})},getReadyItems:function(){return this.queue.filter(function(a){return a.isReady&&!a.isUploading}).sort(function(a,b){return a.index-b.index})},_render:function(){this.scope.$$phase||this.scope.$digest()},_getTotalProgress:function(a){if(this.removeAfterUpload)return a||0;var b=this.getNotUploadedItems().length,c=b?this.queue.length-b:this.queue.length,d=100/this.queue.length,e=(a||0)*d/100;return Math.round(c*d+e)},_progress:function(a,b,c){var d=this._getTotalProgress(c);this.trigger("progressall",d),this.progress=d,this._render()},_complete:function(){var b=this.getReadyItems()[0];return this.isUploading=!1,a.isDefined(b)?(this.uploadItem(b),void 0):(this.trigger("completeall",this.queue),this.progress=this._getTotalProgress(),this._render(),void 0)},_xhrTransport:function(b){var c=b._xhr=new XMLHttpRequest,d=new FormData,e=this;this.trigger("beforeupload",b),b.formData.forEach(function(b){a.forEach(b,function(a,b){d.append(b,a)})}),d.append(b.alias,b.file),c.upload.onprogress=function(a){var c=a.lengthComputable?100*a.loaded/a.total:0;e.trigger("in:progress",b,Math.round(c))},c.onload=function(){var a=e._transformResponse(c.response),d=e._isSuccessCode(c.status)?"success":"error";e.trigger("in:"+d,c,b,a),e.trigger("in:complete",c,b,a)},c.onerror=function(){e.trigger("in:error",c,b),e.trigger("in:complete",c,b)},c.onabort=function(){e.trigger("in:cancel",c,b),e.trigger("in:complete",c,b)},c.open(b.method,b.url,!0),c.withCredentials=b.withCredentials,a.forEach(b.headers,function(a,b){c.setRequestHeader(b,a)}),c.send(d)},_iframeTransport:function(b){var c=a.element('<form style="display: none;" />'),d=a.element('<iframe name="iframeTransport'+Date.now()+'">'),e=b._input,f=this;b._form&&b._form.replaceWith(e),b._form=c,this.trigger("beforeupload",b),e.prop("name",b.alias),b.formData.forEach(function(b){a.forEach(b,function(b,d){c.append(a.element('<input type="hidden" name="'+d+'" value="'+b+'" />'))})}),c.prop({action:b.url,method:"POST",target:d.prop("name"),enctype:"multipart/form-data",encoding:"multipart/form-data"}),d.bind("load",function(){var a=d[0].contentDocument.body.innerHTML,c={response:a,status:200,dummy:!0},e=f._transformResponse(c.response);f.trigger("in:success",c,b,e),f.trigger("in:complete",c,b,e)}),c.abort=function(){var a={status:0,dummy:!0};d.unbind("load").prop("src","javascript:false;"),c.replaceWith(e),f.trigger("in:cancel",a,b),f.trigger("in:complete",a,b)},e.after(c),c.append(e).append(d),c[0].submit()},_isSuccessCode:function(a){return a>=200&&300>a||304===a},_transformResponse:function(a){return d.defaults.transformResponse.forEach(function(b){a=b(a)}),a}},g.prototype={constructor:g,remove:function(){this.uploader.removeFromQueue(this)},upload:function(){this.uploader.uploadItem(this)},cancel:function(){this.uploader.cancelItem(this)},_destroy:function(){this._form&&this._form.remove(),this._input&&this._input.remove(),delete this._form,delete this._input},_beforeupload:function(a,b){b.isReady=!0,b.isUploading=!0,b.isUploaded=!1,b.isSuccess=!1,b.isCancel=!1,b.isError=!1,b.progress=0},_progress:function(a,b,c){b.progress=c,b.uploader.trigger("progress",b,c)},_success:function(a,b,c,d){c.isReady=!1,c.isUploading=!1,c.isUploaded=!0,c.isSuccess=!0,c.isCancel=!1,c.isError=!1,c.progress=100,c.index=null,c.uploader.trigger("success",b,c,d)},_cancel:function(a,b,c){c.isReady=!1,c.isUploading=!1,c.isUploaded=!1,c.isSuccess=!1,c.isCancel=!0,c.isError=!1,c.progress=0,c.index=null,c.uploader.trigger("cancel",b,c)},_error:function(a,b,c,d){c.isReady=!1,c.isUploading=!1,c.isUploaded=!0,c.isSuccess=!1,c.isCancel=!1,c.isError=!0,c.progress=100,c.index=null,c.uploader.trigger("error",b,c,d)},_complete:function(a,b,c,d){c.uploader.trigger("complete",b,c,d),c.removeAfterUpload&&c.remove()}},{create:function(a){return new f(a)},isHTML5:f.prototype.isHTML5}}]),b});
//# sourceMappingURL=angular-file-upload.min.map
/**
 * angular-strap
 * @version v2.1.6 - 2015-01-11
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes (olivier@mg-crea.com)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
!function(e,t,n){"use strict";angular.module("mgcrea.ngStrap",["mgcrea.ngStrap.modal","mgcrea.ngStrap.aside","mgcrea.ngStrap.alert","mgcrea.ngStrap.button","mgcrea.ngStrap.select","mgcrea.ngStrap.datepicker","mgcrea.ngStrap.timepicker","mgcrea.ngStrap.navbar","mgcrea.ngStrap.tooltip","mgcrea.ngStrap.popover","mgcrea.ngStrap.dropdown","mgcrea.ngStrap.typeahead","mgcrea.ngStrap.scrollspy","mgcrea.ngStrap.affix","mgcrea.ngStrap.tab","mgcrea.ngStrap.collapse"]),angular.module("mgcrea.ngStrap.affix",["mgcrea.ngStrap.helpers.dimensions","mgcrea.ngStrap.helpers.debounce"]).provider("$affix",function(){var e=this.defaults={offsetTop:"auto"};this.$get=["$window","debounce","dimensions",function(t,n,a){function o(o,s){function l(e,t,n){var a=u(),o=c();return v>=a?"top":null!==e&&a+e<=t.top?"middle":null!==y&&t.top+n+$>=o-y?"bottom":"middle"}function u(){return p[0]===t?t.pageYOffset:p[0].scrollTop}function c(){return p[0]===t?t.document.body.scrollHeight:p[0].scrollHeight}var d={},f=angular.extend({},e,s),p=f.target,g="affix affix-top affix-bottom",m=!1,$=0,h=0,v=0,y=0,w=null,b=null,D=o.parent();if(f.offsetParent)if(f.offsetParent.match(/^\d+$/))for(var k=0;k<1*f.offsetParent-1;k++)D=D.parent();else D=angular.element(f.offsetParent);return d.init=function(){this.$parseOffsets(),h=a.offset(o[0]).top+$,m=!o[0].style.width,p.on("scroll",this.checkPosition),p.on("click",this.checkPositionWithEventLoop),r.on("resize",this.$debouncedOnResize),this.checkPosition(),this.checkPositionWithEventLoop()},d.destroy=function(){p.off("scroll",this.checkPosition),p.off("click",this.checkPositionWithEventLoop),r.off("resize",this.$debouncedOnResize)},d.checkPositionWithEventLoop=function(){setTimeout(d.checkPosition,1)},d.checkPosition=function(){var e=u(),t=a.offset(o[0]),n=a.height(o[0]),r=l(b,t,n);w!==r&&(w=r,o.removeClass(g).addClass("affix"+("middle"!==r?"-"+r:"")),"top"===r?(b=null,o.css("position",f.offsetParent?"":"relative"),m&&o.css("width",""),o.css("top","")):"bottom"===r?(b=f.offsetUnpin?-(1*f.offsetUnpin):t.top-e,m&&o.css("width",""),o.css("position",f.offsetParent?"":"relative"),o.css("top",f.offsetParent?"":i[0].offsetHeight-y-n-h+"px")):(b=null,m&&o.css("width",o[0].offsetWidth+"px"),o.css("position","fixed"),o.css("top",$+"px")))},d.$onResize=function(){d.$parseOffsets(),d.checkPosition()},d.$debouncedOnResize=n(d.$onResize,50),d.$parseOffsets=function(){var e=o.css("position");o.css("position",f.offsetParent?"":"relative"),f.offsetTop&&("auto"===f.offsetTop&&(f.offsetTop="+0"),f.offsetTop.match(/^[-+]\d+$/)?($=1*-f.offsetTop,v=f.offsetParent?a.offset(D[0]).top+1*f.offsetTop:a.offset(o[0]).top-a.css(o[0],"marginTop",!0)+1*f.offsetTop):v=1*f.offsetTop),f.offsetBottom&&(y=f.offsetParent&&f.offsetBottom.match(/^[-+]\d+$/)?c()-(a.offset(D[0]).top+a.height(D[0]))+1*f.offsetBottom+1:1*f.offsetBottom),o.css("position",e)},d.init(),d}var i=angular.element(t.document.body),r=angular.element(t);return o}]}).directive("bsAffix",["$affix","$window",function(e,t){return{restrict:"EAC",require:"^?bsAffixTarget",link:function(n,a,o,i){var r={scope:n,offsetTop:"auto",target:i?i.$element:angular.element(t)};angular.forEach(["offsetTop","offsetBottom","offsetParent","offsetUnpin"],function(e){angular.isDefined(o[e])&&(r[e]=o[e])});var s=e(a,r);n.$on("$destroy",function(){s&&s.destroy(),r=null,s=null})}}}]).directive("bsAffixTarget",function(){return{controller:["$element",function(e){this.$element=e}]}}),angular.module("mgcrea.ngStrap.alert",["mgcrea.ngStrap.modal"]).provider("$alert",function(){var e=this.defaults={animation:"am-fade",prefixClass:"alert",prefixEvent:"alert",placement:null,template:"alert/alert.tpl.html",container:!1,element:null,backdrop:!1,keyboard:!0,show:!0,duration:!1,type:!1,dismissable:!0};this.$get=["$modal","$timeout",function(t,n){function a(a){var o={},i=angular.extend({},e,a);o=t(i),o.$scope.dismissable=!!i.dismissable,i.type&&(o.$scope.type=i.type);var r=o.show;return i.duration&&(o.show=function(){r(),n(function(){o.hide()},1e3*i.duration)}),o}return a}]}).directive("bsAlert",["$window","$sce","$alert",function(e,t,n){e.requestAnimationFrame||e.setTimeout;return{restrict:"EAC",scope:!0,link:function(e,a,o){var i={scope:e,element:a,show:!1};angular.forEach(["template","placement","keyboard","html","container","animation","duration","dismissable"],function(e){angular.isDefined(o[e])&&(i[e]=o[e])}),angular.forEach(["title","content","type"],function(n){o[n]&&o.$observe(n,function(a){e[n]=t.trustAsHtml(a)})}),o.bsAlert&&e.$watch(o.bsAlert,function(t){angular.isObject(t)?angular.extend(e,t):e.content=t},!0);var r=n(i);a.on(o.trigger||"click",r.toggle),e.$on("$destroy",function(){r&&r.destroy(),i=null,r=null})}}}]),angular.module("mgcrea.ngStrap.aside",["mgcrea.ngStrap.modal"]).provider("$aside",function(){var e=this.defaults={animation:"am-fade-and-slide-right",prefixClass:"aside",prefixEvent:"aside",placement:"right",template:"aside/aside.tpl.html",contentTemplate:!1,container:!1,element:null,backdrop:!0,keyboard:!0,html:!1,show:!0};this.$get=["$modal",function(t){function n(n){var a={},o=angular.extend({},e,n);return a=t(o)}return n}]}).directive("bsAside",["$window","$sce","$aside",function(e,t,n){e.requestAnimationFrame||e.setTimeout;return{restrict:"EAC",scope:!0,link:function(e,a,o){var i={scope:e,element:a,show:!1};angular.forEach(["template","contentTemplate","placement","backdrop","keyboard","html","container","animation"],function(e){angular.isDefined(o[e])&&(i[e]=o[e])}),angular.forEach(["title","content"],function(n){o[n]&&o.$observe(n,function(a){e[n]=t.trustAsHtml(a)})}),o.bsAside&&e.$watch(o.bsAside,function(t){angular.isObject(t)?angular.extend(e,t):e.content=t},!0);var r=n(i);a.on(o.trigger||"click",r.toggle),e.$on("$destroy",function(){r&&r.destroy(),i=null,r=null})}}}]),angular.module("mgcrea.ngStrap.button",[]).provider("$button",function(){var e=this.defaults={activeClass:"active",toggleEvent:"click"};this.$get=function(){return{defaults:e}}}).directive("bsCheckboxGroup",function(){return{restrict:"A",require:"ngModel",compile:function(e,t){e.attr("data-toggle","buttons"),e.removeAttr("ng-model");var n=e[0].querySelectorAll('input[type="checkbox"]');angular.forEach(n,function(e){var n=angular.element(e);n.attr("bs-checkbox",""),n.attr("ng-model",t.ngModel+"."+n.attr("value"))})}}}).directive("bsCheckbox",["$button","$$rAF",function(e,t){var n=e.defaults,a=/^(true|false|\d+)$/;return{restrict:"A",require:"ngModel",link:function(e,o,i,r){var s=n,l="INPUT"===o[0].nodeName,u=l?o.parent():o,c=angular.isDefined(i.trueValue)?i.trueValue:!0;a.test(i.trueValue)&&(c=e.$eval(i.trueValue));var d=angular.isDefined(i.falseValue)?i.falseValue:!1;a.test(i.falseValue)&&(d=e.$eval(i.falseValue));var f="boolean"!=typeof c||"boolean"!=typeof d;f&&(r.$parsers.push(function(e){return e?c:d}),r.$formatters.push(function(e){return angular.equals(e,c)}),e.$watch(i.ngModel,function(){r.$render()})),r.$render=function(){var e=angular.equals(r.$modelValue,c);t(function(){l&&(o[0].checked=e),u.toggleClass(s.activeClass,e)})},o.bind(s.toggleEvent,function(){e.$apply(function(){l||r.$setViewValue(!u.hasClass("active")),f||r.$render()})})}}}]).directive("bsRadioGroup",function(){return{restrict:"A",require:"ngModel",compile:function(e,t){e.attr("data-toggle","buttons"),e.removeAttr("ng-model");var n=e[0].querySelectorAll('input[type="radio"]');angular.forEach(n,function(e){angular.element(e).attr("bs-radio",""),angular.element(e).attr("ng-model",t.ngModel)})}}}).directive("bsRadio",["$button","$$rAF",function(e,t){var n=e.defaults,a=/^(true|false|\d+)$/;return{restrict:"A",require:"ngModel",link:function(e,o,i,r){var s=n,l="INPUT"===o[0].nodeName,u=l?o.parent():o,c=a.test(i.value)?e.$eval(i.value):i.value;r.$render=function(){var e=angular.equals(r.$modelValue,c);t(function(){l&&(o[0].checked=e),u.toggleClass(s.activeClass,e)})},o.bind(s.toggleEvent,function(){e.$apply(function(){r.$setViewValue(c),r.$render()})})}}}]),angular.module("mgcrea.ngStrap.collapse",[]).provider("$collapse",function(){var e=this.defaults={animation:"am-collapse",disallowToggle:!1,activeClass:"in",startCollapsed:!1,allowMultiple:!1},t=this.controller=function(t,n,a){function o(e){for(var t=l.$targets.$active,n=0;n<t.length;n++)e<t[n]&&(t[n]=t[n]-1),t[n]===l.$targets.length&&(t[n]=l.$targets.length-1)}function i(e){var t=l.$targets.$active;return-1===t.indexOf(e)?!1:!0}function r(e){var t=l.$targets.$active.indexOf(e);-1!==t&&l.$targets.$active.splice(t,1)}function s(e){l.$options.allowMultiple||l.$targets.$active.splice(0,1),-1===l.$targets.$active.indexOf(e)&&l.$targets.$active.push(e)}var l=this;l.$options=angular.copy(e),angular.forEach(["animation","disallowToggle","activeClass","startCollapsed","allowMultiple"],function(e){angular.isDefined(a[e])&&(l.$options[e]=a[e])}),l.$toggles=[],l.$targets=[],l.$viewChangeListeners=[],l.$registerToggle=function(e){l.$toggles.push(e)},l.$registerTarget=function(e){l.$targets.push(e)},l.$unregisterToggle=function(e){var t=l.$toggles.indexOf(e);l.$toggles.splice(t,1)},l.$unregisterTarget=function(e){var t=l.$targets.indexOf(e);l.$targets.splice(t,1),l.$options.allowMultiple&&r(e),o(t),l.$viewChangeListeners.forEach(function(e){e()})},l.$targets.$active=l.$options.startCollapsed?[]:[0],l.$setActive=t.$setActive=function(e){angular.isArray(e)?l.$targets.$active=angular.copy(e):l.$options.disallowToggle?s(e):i(e)?r(e):s(e),l.$viewChangeListeners.forEach(function(e){e()})},l.$activeIndexes=function(){return l.$options.allowMultiple?l.$targets.$active:1===l.$targets.$active.length?l.$targets.$active[0]:-1}};this.$get=function(){var n={};return n.defaults=e,n.controller=t,n}}).directive("bsCollapse",["$window","$animate","$collapse",function(e,t,n){n.defaults;return{require:["?ngModel","bsCollapse"],controller:["$scope","$element","$attrs",n.controller],link:function(e,t,n,a){var o=a[0],i=a[1];o&&(i.$viewChangeListeners.push(function(){o.$setViewValue(i.$activeIndexes())}),o.$formatters.push(function(e){if(angular.isArray(e))i.$setActive(e);else{var t=i.$activeIndexes();angular.isArray(t)?-1===t.indexOf(1*e)&&i.$setActive(1*e):t!==1*e&&i.$setActive(1*e)}return e}))}}}]).directive("bsCollapseToggle",function(){return{require:["^?ngModel","^bsCollapse"],link:function(e,t,n,a){var o=(a[0],a[1]);t.attr("data-toggle","collapse"),o.$registerToggle(t),e.$on("$destroy",function(){o.$unregisterToggle(t)}),t.on("click",function(){var a=n.bsCollapseToggle||o.$toggles.indexOf(t);o.$setActive(1*a),e.$apply()})}}}).directive("bsCollapseTarget",["$animate",function(e){return{require:["^?ngModel","^bsCollapse"],link:function(t,n,a,o){function i(){var t=r.$targets.indexOf(n),a=r.$activeIndexes(),o="removeClass";angular.isArray(a)?-1!==a.indexOf(t)&&(o="addClass"):t===a&&(o="addClass"),e[o](n,r.$options.activeClass)}var r=(o[0],o[1]);n.addClass("collapse"),r.$options.animation&&n.addClass(r.$options.animation),r.$registerTarget(n),t.$on("$destroy",function(){r.$unregisterTarget(n)}),r.$viewChangeListeners.push(function(){i()}),i()}}}]),angular.module("mgcrea.ngStrap.datepicker",["mgcrea.ngStrap.helpers.dateParser","mgcrea.ngStrap.helpers.dateFormatter","mgcrea.ngStrap.tooltip"]).provider("$datepicker",function(){var e=this.defaults={animation:"am-fade",prefixClass:"datepicker",placement:"bottom-left",template:"datepicker/datepicker.tpl.html",trigger:"focus",container:!1,keyboard:!0,html:!1,delay:0,useNative:!1,dateType:"date",dateFormat:"shortDate",modelDateFormat:null,dayFormat:"dd",monthFormat:"MMM",yearFormat:"yyyy",monthTitleFormat:"MMMM yyyy",yearTitleFormat:"yyyy",strictFormat:!1,autoclose:!1,minDate:-1/0,maxDate:+1/0,startView:0,minView:0,startWeek:0,daysOfWeekDisabled:"",iconLeft:"glyphicon glyphicon-chevron-left",iconRight:"glyphicon glyphicon-chevron-right"};this.$get=["$window","$document","$rootScope","$sce","$dateFormatter","datepickerViews","$tooltip","$timeout",function(t,n,a,o,i,r,s,l){function u(t,n,a){function o(e){e.selected=u.$isSelected(e.date)}function i(){t[0].focus()}var u=s(t,angular.extend({},e,a)),f=a.scope,p=u.$options,g=u.$scope;p.startView&&(p.startView-=p.minView);var m=r(u);u.$views=m.views;var $=m.viewDate;g.$mode=p.startView,g.$iconLeft=p.iconLeft,g.$iconRight=p.iconRight;var h=u.$views[g.$mode];g.$select=function(e){u.select(e)},g.$selectPane=function(e){u.$selectPane(e)},g.$toggleMode=function(){u.setMode((g.$mode+1)%u.$views.length)},u.update=function(e){angular.isDate(e)&&!isNaN(e.getTime())&&(u.$date=e,h.update.call(h,e)),u.$build(!0)},u.updateDisabledDates=function(e){p.disabledDateRanges=e;for(var t=0,n=g.rows.length;n>t;t++)angular.forEach(g.rows[t],u.$setDisabledEl)},u.select=function(e,t){angular.isDate(n.$dateValue)||(n.$dateValue=new Date(e)),!g.$mode||t?(n.$setViewValue(angular.copy(e)),n.$render(),p.autoclose&&!t&&l(function(){u.hide(!0)})):(angular.extend($,{year:e.getFullYear(),month:e.getMonth(),date:e.getDate()}),u.setMode(g.$mode-1),u.$build())},u.setMode=function(e){g.$mode=e,h=u.$views[g.$mode],u.$build()},u.$build=function(e){e===!0&&h.built||(e!==!1||h.built)&&h.build.call(h)},u.$updateSelected=function(){for(var e=0,t=g.rows.length;t>e;e++)angular.forEach(g.rows[e],o)},u.$isSelected=function(e){return h.isSelected(e)},u.$setDisabledEl=function(e){e.disabled=h.isDisabled(e.date)},u.$selectPane=function(e){var t=h.steps,n=new Date(Date.UTC($.year+(t.year||0)*e,$.month+(t.month||0)*e,1));angular.extend($,{year:n.getUTCFullYear(),month:n.getUTCMonth(),date:n.getUTCDate()}),u.$build()},u.$onMouseDown=function(e){if(e.preventDefault(),e.stopPropagation(),d){var t=angular.element(e.target);"button"!==t[0].nodeName.toLowerCase()&&(t=t.parent()),t.triggerHandler("click")}},u.$onKeyDown=function(e){if(/(38|37|39|40|13)/.test(e.keyCode)&&!e.shiftKey&&!e.altKey){if(e.preventDefault(),e.stopPropagation(),13===e.keyCode)return g.$mode?g.$apply(function(){u.setMode(g.$mode-1)}):u.hide(!0);h.onKeyDown(e),f.$digest()}};var v=u.init;u.init=function(){return c&&p.useNative?(t.prop("type","date"),void t.css("-webkit-appearance","textfield")):(d&&(t.prop("type","text"),t.attr("readonly","true"),t.on("click",i)),void v())};var y=u.destroy;u.destroy=function(){c&&p.useNative&&t.off("click",i),y()};var w=u.show;u.show=function(){w(),l(function(){u.$isShown&&(u.$element.on(d?"touchstart":"mousedown",u.$onMouseDown),p.keyboard&&t.on("keydown",u.$onKeyDown))},0,!1)};var b=u.hide;return u.hide=function(e){u.$isShown&&(u.$element.off(d?"touchstart":"mousedown",u.$onMouseDown),p.keyboard&&t.off("keydown",u.$onKeyDown),b(e))},u}var c=(angular.element(t.document.body),/(ip(a|o)d|iphone|android)/gi.test(t.navigator.userAgent)),d="createTouch"in t.document&&c;return e.lang||(e.lang=i.getDefaultLocale()),u.defaults=e,u}]}).directive("bsDatepicker",["$window","$parse","$q","$dateFormatter","$dateParser","$datepicker",function(e,t,n,a,o,i){var r=(i.defaults,/(ip(a|o)d|iphone|android)/gi.test(e.navigator.userAgent));return{restrict:"EAC",require:"ngModel",link:function(e,t,n,s){function l(e){return e&&e.length?e:null}function u(e){if(angular.isDate(e)){var t=isNaN(f.$options.minDate)||e.getTime()>=f.$options.minDate,n=isNaN(f.$options.maxDate)||e.getTime()<=f.$options.maxDate,a=t&&n;s.$setValidity("date",a),s.$setValidity("min",t),s.$setValidity("max",n),a&&(s.$dateValue=e)}}function c(){return!s.$dateValue||isNaN(s.$dateValue.getTime())?"":g(s.$dateValue,d.dateFormat)}var d={scope:e,controller:s};angular.forEach(["placement","container","delay","trigger","keyboard","html","animation","template","autoclose","dateType","dateFormat","modelDateFormat","dayFormat","strictFormat","startWeek","startDate","useNative","lang","startView","minView","iconLeft","iconRight","daysOfWeekDisabled","id"],function(e){angular.isDefined(n[e])&&(d[e]=n[e])}),n.bsShow&&e.$watch(n.bsShow,function(e){f&&angular.isDefined(e)&&(angular.isString(e)&&(e=!!e.match(/true|,?(datepicker),?/i)),e===!0?f.show():f.hide())});var f=i(t,s,d);d=f.$options,r&&d.useNative&&(d.dateFormat="yyyy-MM-dd");var p=d.lang,g=function(e,t){return a.formatDate(e,t,p)},m=o({format:d.dateFormat,lang:p,strict:d.strictFormat});angular.forEach(["minDate","maxDate"],function(e){angular.isDefined(n[e])&&n.$observe(e,function(t){f.$options[e]=m.getDateForAttribute(e,t),!isNaN(f.$options[e])&&f.$build(!1),u(s.$dateValue)})}),e.$watch(n.ngModel,function(){f.update(s.$dateValue)},!0),angular.isDefined(n.disabledDates)&&e.$watch(n.disabledDates,function(e,t){e=l(e),t=l(t),e&&f.updateDisabledDates(e)}),s.$parsers.unshift(function(e){if(!e)return s.$setValidity("date",!0),null;var t=m.parse(e,s.$dateValue);return!t||isNaN(t.getTime())?void s.$setValidity("date",!1):(u(t),"string"===d.dateType?g(t,d.modelDateFormat||d.dateFormat):"number"===d.dateType?s.$dateValue.getTime():"unix"===d.dateType?s.$dateValue.getTime()/1e3:"iso"===d.dateType?s.$dateValue.toISOString():new Date(s.$dateValue))}),s.$formatters.push(function(e){var t;return t=angular.isUndefined(e)||null===e?0/0:angular.isDate(e)?e:"string"===d.dateType?m.parse(e,null,d.modelDateFormat):new Date("unix"===d.dateType?1e3*e:e),s.$dateValue=t,c()}),s.$render=function(){t.val(c())},e.$on("$destroy",function(){f&&f.destroy(),d=null,f=null})}}}]).provider("datepickerViews",function(){function e(e,t){for(var n=[];e.length>0;)n.push(e.splice(0,t));return n}function t(e,t){return(e%t+t)%t}this.defaults={dayFormat:"dd",daySplit:7};this.$get=["$dateFormatter","$dateParser","$sce",function(n,a,o){return function(i){var r=i.$scope,s=i.$options,l=s.lang,u=function(e,t){return n.formatDate(e,t,l)},c=a({format:s.dateFormat,lang:l,strict:s.strictFormat}),d=n.weekdaysShort(l),f=d.slice(s.startWeek).concat(d.slice(0,s.startWeek)),p=o.trustAsHtml('<th class="dow text-center">'+f.join('</th><th class="dow text-center">')+"</th>"),g=i.$date||(s.startDate?c.getDateForAttribute("startDate",s.startDate):new Date),m={year:g.getFullYear(),month:g.getMonth(),date:g.getDate()},$=(6e4*g.getTimezoneOffset(),[{format:s.dayFormat,split:7,steps:{month:1},update:function(e,t){!this.built||t||e.getFullYear()!==m.year||e.getMonth()!==m.month?(angular.extend(m,{year:i.$date.getFullYear(),month:i.$date.getMonth(),date:i.$date.getDate()}),i.$build()):e.getDate()!==m.date&&(m.date=i.$date.getDate(),i.$updateSelected())},build:function(){var n=new Date(m.year,m.month,1),a=n.getTimezoneOffset(),o=new Date(+n-864e5*t(n.getDay()-s.startWeek,7)),l=o.getTimezoneOffset(),d=(new Date).toDateString();l!==a&&(o=new Date(+o+6e4*(l-a)));for(var f,g=[],$=0;42>$;$++)f=c.daylightSavingAdjust(new Date(o.getFullYear(),o.getMonth(),o.getDate()+$)),g.push({date:f,isToday:f.toDateString()===d,label:u(f,this.format),selected:i.$date&&this.isSelected(f),muted:f.getMonth()!==m.month,disabled:this.isDisabled(f)});r.title=u(n,s.monthTitleFormat),r.showLabels=!0,r.labels=p,r.rows=e(g,this.split),this.built=!0},isSelected:function(e){return i.$date&&e.getFullYear()===i.$date.getFullYear()&&e.getMonth()===i.$date.getMonth()&&e.getDate()===i.$date.getDate()},isDisabled:function(e){var t=e.getTime();if(t<s.minDate||t>s.maxDate)return!0;if(-1!==s.daysOfWeekDisabled.indexOf(e.getDay()))return!0;if(s.disabledDateRanges)for(var n=0;n<s.disabledDateRanges.length;n++)if(t>=s.disabledDateRanges[n].start&&t<=s.disabledDateRanges[n].end)return!0;return!1},onKeyDown:function(e){if(i.$date){var t,n=i.$date.getTime();37===e.keyCode?t=new Date(n-864e5):38===e.keyCode?t=new Date(n-6048e5):39===e.keyCode?t=new Date(n+864e5):40===e.keyCode&&(t=new Date(n+6048e5)),this.isDisabled(t)||i.select(t,!0)}}},{name:"month",format:s.monthFormat,split:4,steps:{year:1},update:function(e){this.built&&e.getFullYear()===m.year?e.getMonth()!==m.month&&(angular.extend(m,{month:i.$date.getMonth(),date:i.$date.getDate()}),i.$updateSelected()):(angular.extend(m,{year:i.$date.getFullYear(),month:i.$date.getMonth(),date:i.$date.getDate()}),i.$build())},build:function(){for(var t,n=(new Date(m.year,0,1),[]),a=0;12>a;a++)t=new Date(m.year,a,1),n.push({date:t,label:u(t,this.format),selected:i.$isSelected(t),disabled:this.isDisabled(t)});r.title=u(t,s.yearTitleFormat),r.showLabels=!1,r.rows=e(n,this.split),this.built=!0},isSelected:function(e){return i.$date&&e.getFullYear()===i.$date.getFullYear()&&e.getMonth()===i.$date.getMonth()},isDisabled:function(e){var t=+new Date(e.getFullYear(),e.getMonth()+1,0);return t<s.minDate||e.getTime()>s.maxDate},onKeyDown:function(e){if(i.$date){var t=i.$date.getMonth(),n=new Date(i.$date);37===e.keyCode?n.setMonth(t-1):38===e.keyCode?n.setMonth(t-4):39===e.keyCode?n.setMonth(t+1):40===e.keyCode&&n.setMonth(t+4),this.isDisabled(n)||i.select(n,!0)}}},{name:"year",format:s.yearFormat,split:4,steps:{year:12},update:function(e,t){!this.built||t||parseInt(e.getFullYear()/20,10)!==parseInt(m.year/20,10)?(angular.extend(m,{year:i.$date.getFullYear(),month:i.$date.getMonth(),date:i.$date.getDate()}),i.$build()):e.getFullYear()!==m.year&&(angular.extend(m,{year:i.$date.getFullYear(),month:i.$date.getMonth(),date:i.$date.getDate()}),i.$updateSelected())},build:function(){for(var t,n=m.year-m.year%(3*this.split),a=[],o=0;12>o;o++)t=new Date(n+o,0,1),a.push({date:t,label:u(t,this.format),selected:i.$isSelected(t),disabled:this.isDisabled(t)});r.title=a[0].label+"-"+a[a.length-1].label,r.showLabels=!1,r.rows=e(a,this.split),this.built=!0},isSelected:function(e){return i.$date&&e.getFullYear()===i.$date.getFullYear()},isDisabled:function(e){var t=+new Date(e.getFullYear()+1,0,0);return t<s.minDate||e.getTime()>s.maxDate},onKeyDown:function(e){if(i.$date){var t=i.$date.getFullYear(),n=new Date(i.$date);37===e.keyCode?n.setYear(t-1):38===e.keyCode?n.setYear(t-4):39===e.keyCode?n.setYear(t+1):40===e.keyCode&&n.setYear(t+4),this.isDisabled(n)||i.select(n,!0)}}}]);return{views:s.minView?Array.prototype.slice.call($,s.minView):$,viewDate:m}}}]}),angular.module("mgcrea.ngStrap.dropdown",["mgcrea.ngStrap.tooltip"]).provider("$dropdown",function(){var e=this.defaults={animation:"am-fade",prefixClass:"dropdown",placement:"bottom-left",template:"dropdown/dropdown.tpl.html",trigger:"click",container:!1,keyboard:!0,html:!1,delay:0};this.$get=["$window","$rootScope","$tooltip","$timeout",function(t,n,a,o){function i(t,i){function l(e){return e.target!==t[0]?e.target!==t[0]&&u.hide():void 0}{var u={},c=angular.extend({},e,i);u.$scope=c.scope&&c.scope.$new()||n.$new()}u=a(t,c);var d=t.parent();u.$onKeyDown=function(e){if(/(38|40)/.test(e.keyCode)){e.preventDefault(),e.stopPropagation();var t=angular.element(u.$element[0].querySelectorAll("li:not(.divider) a"));if(t.length){var n;angular.forEach(t,function(e,t){s&&s.call(e,":focus")&&(n=t)}),38===e.keyCode&&n>0?n--:40===e.keyCode&&n<t.length-1?n++:angular.isUndefined(n)&&(n=0),t.eq(n)[0].focus()}}};var f=u.show;u.show=function(){f(),o(function(){c.keyboard&&u.$element.on("keydown",u.$onKeyDown),r.on("click",l)},0,!1),d.hasClass("dropdown")&&d.addClass("open")};var p=u.hide;u.hide=function(){u.$isShown&&(c.keyboard&&u.$element.off("keydown",u.$onKeyDown),r.off("click",l),d.hasClass("dropdown")&&d.removeClass("open"),p())};var g=u.destroy;return u.destroy=function(){r.off("click",l),g()},u}var r=angular.element(t.document.body),s=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector;return i}]}).directive("bsDropdown",["$window","$sce","$dropdown",function(e,t,n){return{restrict:"EAC",scope:!0,link:function(e,t,a){var o={scope:e};angular.forEach(["placement","container","delay","trigger","keyboard","html","animation","template","id"],function(e){angular.isDefined(a[e])&&(o[e]=a[e])}),a.bsDropdown&&e.$watch(a.bsDropdown,function(t){e.content=t},!0),a.bsShow&&e.$watch(a.bsShow,function(e){i&&angular.isDefined(e)&&(angular.isString(e)&&(e=!!e.match(/true|,?(dropdown),?/i)),e===!0?i.show():i.hide())});var i=n(t,o);e.$on("$destroy",function(){i&&i.destroy(),o=null,i=null})}}}]),angular.module("mgcrea.ngStrap.helpers.dateFormatter",[]).service("$dateFormatter",["$locale","dateFilter",function(e,t){function n(e){return/(h+)([:\.])?(m+)[ ]?(a?)/i.exec(e).slice(1)}this.getDefaultLocale=function(){return e.id},this.getDatetimeFormat=function(t){return e.DATETIME_FORMATS[t]||t},this.weekdaysShort=function(){return e.DATETIME_FORMATS.SHORTDAY},this.hoursFormat=function(e){return n(e)[0]},this.minutesFormat=function(e){return n(e)[2]},this.timeSeparator=function(e){return n(e)[1]},this.showAM=function(e){return!!n(e)[3]},this.formatDate=function(e,n){return t(e,n)}}]),angular.module("mgcrea.ngStrap.helpers.dateParser",[]).provider("$dateParser",["$localeProvider",function(){function e(){this.year=1970,this.month=0,this.day=1,this.hours=0,this.minutes=0,this.seconds=0,this.milliseconds=0}function t(){}function n(e){return!isNaN(parseFloat(e))&&isFinite(e)}function a(e,t){for(var n=e.length,a=t.toString().toLowerCase(),o=0;n>o;o++)if(e[o].toLowerCase()===a)return o;return-1}e.prototype.setMilliseconds=function(e){this.milliseconds=e},e.prototype.setSeconds=function(e){this.seconds=e},e.prototype.setMinutes=function(e){this.minutes=e},e.prototype.setHours=function(e){this.hours=e},e.prototype.getHours=function(){return this.hours},e.prototype.setDate=function(e){this.day=e},e.prototype.setMonth=function(e){this.month=e},e.prototype.setFullYear=function(e){this.year=e},e.prototype.fromDate=function(e){return this.year=e.getFullYear(),this.month=e.getMonth(),this.day=e.getDate(),this.hours=e.getHours(),this.minutes=e.getMinutes(),this.seconds=e.getSeconds(),this.milliseconds=e.getMilliseconds(),this},e.prototype.toDate=function(){return new Date(this.year,this.month,this.day,this.hours,this.minutes,this.seconds,this.milliseconds)};var o=e.prototype,i=this.defaults={format:"shortDate",strict:!1};this.$get=["$locale","dateFilter",function(r,s){var l=function(l){function u(e){var t,n=Object.keys(h),a=[],o=[],i=e;for(t=0;t<n.length;t++)if(e.split(n[t]).length>1){var r=i.search(n[t]);e=e.split(n[t]).join(""),h[n[t]]&&(a[r]=h[n[t]])}return angular.forEach(a,function(e){e&&o.push(e)}),o}function c(e){return e.replace(/\//g,"[\\/]").replace("/-/g","[-]").replace(/\./g,"[.]").replace(/\\s/g,"[\\s]")}function d(e){var t,n=Object.keys($),a=e;for(t=0;t<n.length;t++)a=a.split(n[t]).join("${"+t+"}");for(t=0;t<n.length;t++)a=a.split("${"+t+"}").join("("+$[n[t]]+")");return e=c(e),new RegExp("^"+a+"$",["i"])}var f,p,g=angular.extend({},i,l),m={},$={sss:"[0-9]{3}",ss:"[0-5][0-9]",s:g.strict?"[1-5]?[0-9]":"[0-9]|[0-5][0-9]",mm:"[0-5][0-9]",m:g.strict?"[1-5]?[0-9]":"[0-9]|[0-5][0-9]",HH:"[01][0-9]|2[0-3]",H:g.strict?"1?[0-9]|2[0-3]":"[01]?[0-9]|2[0-3]",hh:"[0][1-9]|[1][012]",h:g.strict?"[1-9]|1[012]":"0?[1-9]|1[012]",a:"AM|PM",EEEE:r.DATETIME_FORMATS.DAY.join("|"),EEE:r.DATETIME_FORMATS.SHORTDAY.join("|"),dd:"0[1-9]|[12][0-9]|3[01]",d:g.strict?"[1-9]|[1-2][0-9]|3[01]":"0?[1-9]|[1-2][0-9]|3[01]",MMMM:r.DATETIME_FORMATS.MONTH.join("|"),MMM:r.DATETIME_FORMATS.SHORTMONTH.join("|"),MM:"0[1-9]|1[012]",M:g.strict?"[1-9]|1[012]":"0?[1-9]|1[012]",yyyy:"[1]{1}[0-9]{3}|[2]{1}[0-9]{3}",yy:"[0-9]{2}",y:g.strict?"-?(0|[1-9][0-9]{0,3})":"-?0*[0-9]{1,4}"},h={sss:o.setMilliseconds,ss:o.setSeconds,s:o.setSeconds,mm:o.setMinutes,m:o.setMinutes,HH:o.setHours,H:o.setHours,hh:o.setHours,h:o.setHours,EEEE:t,EEE:t,dd:o.setDate,d:o.setDate,a:function(e){var t=this.getHours()%12;return this.setHours(e.match(/pm/i)?t+12:t)},MMMM:function(e){return this.setMonth(a(r.DATETIME_FORMATS.MONTH,e))},MMM:function(e){return this.setMonth(a(r.DATETIME_FORMATS.SHORTMONTH,e))},MM:function(e){return this.setMonth(1*e-1)},M:function(e){return this.setMonth(1*e-1)},yyyy:o.setFullYear,yy:function(e){return this.setFullYear(2e3+1*e)},y:o.setFullYear};return m.init=function(){m.$format=r.DATETIME_FORMATS[g.format]||g.format,f=d(m.$format),p=u(m.$format)},m.isValid=function(e){return angular.isDate(e)?!isNaN(e.getTime()):f.test(e)},m.parse=function(t,n,a){a&&(a=r.DATETIME_FORMATS[a]||a),angular.isDate(t)&&(t=s(t,a||m.$format));var o=a?d(a):f,i=a?u(a):p,l=o.exec(t);if(!l)return!1;for(var c=(new e).fromDate(n&&!isNaN(n.getTime())?n:new Date(1970,0,1,0)),g=0;g<l.length-1;g++)i[g]&&i[g].call(c,l[g+1]);var $=c.toDate();return parseInt(c.day,10)!==$.getDate()?!1:$},m.getDateForAttribute=function(e,t){var a;if("today"===t){var o=new Date;a=new Date(o.getFullYear(),o.getMonth(),o.getDate()+("maxDate"===e?1:0),0,0,0,"minDate"===e?0:-1)}else a=angular.isString(t)&&t.match(/^".+"$/)?new Date(t.substr(1,t.length-2)):n(t)?new Date(parseInt(t,10)):angular.isString(t)&&0===t.length?"minDate"===e?-1/0:+1/0:new Date(t);return a},m.getTimeForAttribute=function(e,t){var a;return a="now"===t?(new Date).setFullYear(1970,0,1):angular.isString(t)&&t.match(/^".+"$/)?new Date(t.substr(1,t.length-2)).setFullYear(1970,0,1):n(t)?new Date(parseInt(t,10)).setFullYear(1970,0,1):angular.isString(t)&&0===t.length?"minTime"===e?-1/0:+1/0:m.parse(t,new Date(1970,0,1,0))},m.daylightSavingAdjust=function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},m.init(),m};return l}]}]),angular.module("mgcrea.ngStrap.helpers.debounce",[]).factory("debounce",["$timeout",function(e){return function(t,n,a){var o=null;return function(){var i=this,r=arguments,s=a&&!o;return o&&e.cancel(o),o=e(function(){o=null,a||t.apply(i,r)},n,!1),s&&t.apply(i,r),o}}}]).factory("throttle",["$timeout",function(e){return function(t,n,a){var o=null;return a||(a={}),function(){var i=this,r=arguments;o||(a.leading!==!1&&t.apply(i,r),o=e(function(){o=null,a.trailing!==!1&&t.apply(i,r)},n,!1))}}}]),angular.module("mgcrea.ngStrap.helpers.dimensions",[]).factory("dimensions",["$document","$window",function(){var t=(angular.element,{}),n=t.nodeName=function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()};t.css=function(t,n,a){var o;return o=t.currentStyle?t.currentStyle[n]:e.getComputedStyle?e.getComputedStyle(t)[n]:t.style[n],a===!0?parseFloat(o)||0:o},t.offset=function(t){var n=t.getBoundingClientRect(),a=t.ownerDocument;return{width:n.width||t.offsetWidth,height:n.height||t.offsetHeight,top:n.top+(e.pageYOffset||a.documentElement.scrollTop)-(a.documentElement.clientTop||0),left:n.left+(e.pageXOffset||a.documentElement.scrollLeft)-(a.documentElement.clientLeft||0)}},t.position=function(e){var o,i,r={top:0,left:0};return"fixed"===t.css(e,"position")?i=e.getBoundingClientRect():(o=a(e),i=t.offset(e),n(o,"html")||(r=t.offset(o)),r.top+=t.css(o,"borderTopWidth",!0),r.left+=t.css(o,"borderLeftWidth",!0)),{width:e.offsetWidth,height:e.offsetHeight,top:i.top-r.top-t.css(e,"marginTop",!0),left:i.left-r.left-t.css(e,"marginLeft",!0)}};var a=function(e){var a=e.ownerDocument,o=e.offsetParent||a;if(n(o,"#document"))return a.documentElement;for(;o&&!n(o,"html")&&"static"===t.css(o,"position");)o=o.offsetParent;return o||a.documentElement};return t.height=function(e,n){var a=e.offsetHeight;return n?a+=t.css(e,"marginTop",!0)+t.css(e,"marginBottom",!0):a-=t.css(e,"paddingTop",!0)+t.css(e,"paddingBottom",!0)+t.css(e,"borderTopWidth",!0)+t.css(e,"borderBottomWidth",!0),a},t.width=function(e,n){var a=e.offsetWidth;return n?a+=t.css(e,"marginLeft",!0)+t.css(e,"marginRight",!0):a-=t.css(e,"paddingLeft",!0)+t.css(e,"paddingRight",!0)+t.css(e,"borderLeftWidth",!0)+t.css(e,"borderRightWidth",!0),a},t}]),angular.module("mgcrea.ngStrap.helpers.parseOptions",[]).provider("$parseOptions",function(){var e=this.defaults={regexp:/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/};this.$get=["$parse","$q",function(t,n){function a(a,o){function i(e,t){return e.map(function(e,n){var a,o,i={};return i[c]=e,a=u(t,i),o=p(t,i),{label:a,value:o,index:n}})}var r={},s=angular.extend({},e,o);r.$values=[];var l,u,c,d,f,p,g;return r.init=function(){r.$match=l=a.match(s.regexp),u=t(l[2]||l[1]),c=l[4]||l[6],d=l[5],f=t(l[3]||""),p=t(l[2]?l[1]:c),g=t(l[7])},r.valuesFn=function(e,t){return n.when(g(e,t)).then(function(t){return r.$values=t?i(t,e):{},r.$values
})},r.displayValue=function(e){var t={};return t[c]=e,u(t)},r.init(),r}return a}]}),angular.version.minor<3&&angular.version.dot<14&&angular.module("ng").factory("$$rAF",["$window","$timeout",function(e,t){var n=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame,a=e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.mozCancelAnimationFrame||e.webkitCancelRequestAnimationFrame,o=!!n,i=o?function(e){var t=n(e);return function(){a(t)}}:function(e){var n=t(e,16.66,!1);return function(){t.cancel(n)}};return i.supported=o,i}]),angular.module("mgcrea.ngStrap.modal",["mgcrea.ngStrap.helpers.dimensions"]).provider("$modal",function(){var e=this.defaults={animation:"am-fade",backdropAnimation:"am-fade",prefixClass:"modal",prefixEvent:"modal",placement:"top",template:"modal/modal.tpl.html",contentTemplate:!1,container:!1,element:null,backdrop:!0,keyboard:!0,html:!1,show:!0};this.$get=["$window","$rootScope","$compile","$q","$templateCache","$http","$animate","$timeout","$sce","dimensions",function(n,a,o,i,r,s,l,u,c){function d(t){function n(){w.$emit(d.prefixEvent+".show",u)}function i(){w.$emit(d.prefixEvent+".hide",u),v.removeClass(d.prefixClass+"-open"),d.animation&&v.removeClass(d.prefixClass+"-with-"+d.animation)}function r(e){e.target===e.currentTarget&&("static"===d.backdrop?u.focus():u.hide())}function s(e){e.preventDefault()}var u={},d=u.$options=angular.extend({},e,t);u.$promise=g(d.template);var w=u.$scope=d.scope&&d.scope.$new()||a.$new();d.element||d.container||(d.container="body"),u.$id=d.id||d.element&&d.element.attr("id")||"",m(["title","content"],function(e){d[e]&&(w[e]=c.trustAsHtml(d[e]))}),w.$hide=function(){w.$$postDigest(function(){u.hide()})},w.$show=function(){w.$$postDigest(function(){u.show()})},w.$toggle=function(){w.$$postDigest(function(){u.toggle()})},u.$isShown=w.$isShown=!1,d.contentTemplate&&(u.$promise=u.$promise.then(function(e){var n=angular.element(e);return g(d.contentTemplate).then(function(e){var a=p('[ng-bind="content"]',n[0]).removeAttr("ng-bind").html(e);return t.template||a.next().remove(),n[0].outerHTML})}));var b,D,k=angular.element('<div class="'+d.prefixClass+'-backdrop"/>');return u.$promise.then(function(e){angular.isObject(e)&&(e=e.data),d.html&&(e=e.replace(y,'ng-bind-html="')),e=$.apply(e),b=o(e),u.init()}),u.init=function(){d.show&&w.$$postDigest(function(){u.show()})},u.destroy=function(){D&&(D.remove(),D=null),k&&(k.remove(),k=null),w.$destroy()},u.show=function(){if(!u.$isShown&&!w.$emit(d.prefixEvent+".show.before",u).defaultPrevented){var e,t;angular.isElement(d.container)?(e=d.container,t=d.container[0].lastChild?angular.element(d.container[0].lastChild):null):d.container?(e=p(d.container),t=e[0].lastChild?angular.element(e[0].lastChild):null):(e=null,t=d.element),D=u.$element=b(w,function(){}),D.css({display:"block"}).addClass(d.placement),d.animation&&(d.backdrop&&k.addClass(d.backdropAnimation),D.addClass(d.animation)),d.backdrop&&l.enter(k,v,null);var a=l.enter(D,e,t,n);a&&a.then&&a.then(n),u.$isShown=w.$isShown=!0,f(w);var o=D[0];h(function(){o.focus()}),v.addClass(d.prefixClass+"-open"),d.animation&&v.addClass(d.prefixClass+"-with-"+d.animation),d.backdrop&&(D.on("click",r),k.on("click",r),k.on("wheel",s)),d.keyboard&&D.on("keyup",u.$onKeyUp)}},u.hide=function(){if(u.$isShown&&!w.$emit(d.prefixEvent+".hide.before",u).defaultPrevented){var e=l.leave(D,i);e&&e.then&&e.then(i),d.backdrop&&l.leave(k),u.$isShown=w.$isShown=!1,f(w),d.backdrop&&(D.off("click",r),k.off("click",r),k.off("wheel",s)),d.keyboard&&D.off("keyup",u.$onKeyUp)}},u.toggle=function(){u.$isShown?u.hide():u.show()},u.focus=function(){D[0].focus()},u.$onKeyUp=function(e){27===e.which&&u.$isShown&&(u.hide(),e.stopPropagation())},u}function f(e){e.$$phase||e.$root&&e.$root.$$phase||e.$digest()}function p(e,n){return angular.element((n||t).querySelectorAll(e))}function g(e){return w[e]?w[e]:w[e]=i.when(r.get(e)||s.get(e)).then(function(t){return angular.isObject(t)?(r.put(e,t.data),t.data):t})}var m=angular.forEach,$=String.prototype.trim,h=n.requestAnimationFrame||n.setTimeout,v=angular.element(n.document.body),y=/ng-bind="/gi,w={};return d}]}).directive("bsModal",["$window","$sce","$modal",function(e,t,n){return{restrict:"EAC",scope:!0,link:function(e,a,o){var i={scope:e,element:a,show:!1};angular.forEach(["template","contentTemplate","placement","backdrop","keyboard","html","container","animation","id"],function(e){angular.isDefined(o[e])&&(i[e]=o[e])}),angular.forEach(["title","content"],function(n){o[n]&&o.$observe(n,function(a){e[n]=t.trustAsHtml(a)})}),o.bsModal&&e.$watch(o.bsModal,function(t){angular.isObject(t)?angular.extend(e,t):e.content=t},!0);var r=n(i);a.on(o.trigger||"click",r.toggle),e.$on("$destroy",function(){r&&r.destroy(),i=null,r=null})}}}]),angular.module("mgcrea.ngStrap.navbar",[]).provider("$navbar",function(){var e=this.defaults={activeClass:"active",routeAttr:"data-match-route",strict:!1};this.$get=function(){return{defaults:e}}}).directive("bsNavbar",["$window","$location","$navbar",function(e,t,n){var a=n.defaults;return{restrict:"A",link:function(e,n,o){var i=angular.copy(a);angular.forEach(Object.keys(a),function(e){angular.isDefined(o[e])&&(i[e]=o[e])}),e.$watch(function(){return t.path()},function(e){var t=n[0].querySelectorAll("li["+i.routeAttr+"]");angular.forEach(t,function(t){var n=angular.element(t),a=n.attr(i.routeAttr).replace("/","\\/");i.strict&&(a="^"+a+"$");var o=new RegExp(a,["i"]);o.test(e)?n.addClass(i.activeClass):n.removeClass(i.activeClass)})})}}}]),angular.module("mgcrea.ngStrap.popover",["mgcrea.ngStrap.tooltip"]).provider("$popover",function(){var e=this.defaults={animation:"am-fade",customClass:"",container:!1,target:!1,placement:"right",template:"popover/popover.tpl.html",contentTemplate:!1,trigger:"click",keyboard:!0,html:!1,title:"",content:"",delay:0,autoClose:!1};this.$get=["$tooltip",function(t){function n(n,a){var o=angular.extend({},e,a),i=t(n,o);return o.content&&(i.$scope.content=o.content),i}return n}]}).directive("bsPopover",["$window","$sce","$popover",function(e,t,n){var a=e.requestAnimationFrame||e.setTimeout;return{restrict:"EAC",scope:!0,link:function(e,o,i){var r={scope:e};angular.forEach(["template","contentTemplate","placement","container","target","delay","trigger","keyboard","html","animation","customClass","autoClose","id"],function(e){angular.isDefined(i[e])&&(r[e]=i[e])}),angular.forEach(["title","content"],function(n){i[n]&&i.$observe(n,function(o,i){e[n]=t.trustAsHtml(o),angular.isDefined(i)&&a(function(){s&&s.$applyPlacement()})})}),i.bsPopover&&e.$watch(i.bsPopover,function(t,n){angular.isObject(t)?angular.extend(e,t):e.content=t,angular.isDefined(n)&&a(function(){s&&s.$applyPlacement()})},!0),i.bsShow&&e.$watch(i.bsShow,function(e){s&&angular.isDefined(e)&&(angular.isString(e)&&(e=!!e.match(/true|,?(popover),?/i)),e===!0?s.show():s.hide())});var s=n(o,r);e.$on("$destroy",function(){s&&s.destroy(),r=null,s=null})}}}]),angular.module("mgcrea.ngStrap.select",["mgcrea.ngStrap.tooltip","mgcrea.ngStrap.helpers.parseOptions"]).provider("$select",function(){var e=this.defaults={animation:"am-fade",prefixClass:"select",prefixEvent:"$select",placement:"bottom-left",template:"select/select.tpl.html",trigger:"focus",container:!1,keyboard:!0,html:!1,delay:0,multiple:!1,allNoneButtons:!1,sort:!0,caretHtml:'&nbsp;<span class="caret"></span>',placeholder:"Choose among the following...",allText:"All",noneText:"None",maxLength:3,maxLengthHtml:"selected",iconCheckmark:"glyphicon glyphicon-ok"};this.$get=["$window","$document","$rootScope","$tooltip","$timeout",function(t,n,a,o,i){function r(t,n,a){var r={},s=angular.extend({},e,a);r=o(t,s);var u=r.$scope;u.$matches=[],u.$activeIndex=0,u.$isMultiple=s.multiple,u.$showAllNoneButtons=s.allNoneButtons&&s.multiple,u.$iconCheckmark=s.iconCheckmark,u.$allText=s.allText,u.$noneText=s.noneText,u.$activate=function(e){u.$$postDigest(function(){r.activate(e)})},u.$select=function(e){u.$$postDigest(function(){r.select(e)})},u.$isVisible=function(){return r.$isVisible()},u.$isActive=function(e){return r.$isActive(e)},u.$selectAll=function(){for(var e=0;e<u.$matches.length;e++)u.$isActive(e)||u.$select(e)},u.$selectNone=function(){for(var e=0;e<u.$matches.length;e++)u.$isActive(e)&&u.$select(e)},r.update=function(e){u.$matches=e,r.$updateActiveIndex()},r.activate=function(e){return s.multiple?(u.$activeIndex.sort(),r.$isActive(e)?u.$activeIndex.splice(u.$activeIndex.indexOf(e),1):u.$activeIndex.push(e),s.sort&&u.$activeIndex.sort()):u.$activeIndex=e,u.$activeIndex},r.select=function(e){var t=u.$matches[e].value;u.$apply(function(){r.activate(e),s.multiple?n.$setViewValue(u.$activeIndex.map(function(e){return u.$matches[e].value})):(n.$setViewValue(t),r.hide())}),u.$emit(s.prefixEvent+".select",t,e,r)},r.$updateActiveIndex=function(){n.$modelValue&&u.$matches.length?u.$activeIndex=s.multiple&&angular.isArray(n.$modelValue)?n.$modelValue.map(function(e){return r.$getIndex(e)}):r.$getIndex(n.$modelValue):u.$activeIndex>=u.$matches.length&&(u.$activeIndex=s.multiple?[]:0)},r.$isVisible=function(){return s.minLength&&n?u.$matches.length&&n.$viewValue.length>=s.minLength:u.$matches.length},r.$isActive=function(e){return s.multiple?-1!==u.$activeIndex.indexOf(e):u.$activeIndex===e},r.$getIndex=function(e){var t=u.$matches.length,n=t;if(t){for(n=t;n--&&u.$matches[n].value!==e;);if(!(0>n))return n}},r.$onMouseDown=function(e){if(e.preventDefault(),e.stopPropagation(),l){var t=angular.element(e.target);t.triggerHandler("click")}},r.$onKeyDown=function(e){if(/(9|13|38|40)/.test(e.keyCode)){if(e.preventDefault(),e.stopPropagation(),!s.multiple&&(13===e.keyCode||9===e.keyCode))return r.select(u.$activeIndex);38===e.keyCode&&u.$activeIndex>0?u.$activeIndex--:40===e.keyCode&&u.$activeIndex<u.$matches.length-1?u.$activeIndex++:angular.isUndefined(u.$activeIndex)&&(u.$activeIndex=0),u.$digest()}};var c=r.show;r.show=function(){c(),s.multiple&&r.$element.addClass("select-multiple"),i(function(){r.$element.on(l?"touchstart":"mousedown",r.$onMouseDown),s.keyboard&&t.on("keydown",r.$onKeyDown)},0,!1)};var d=r.hide;return r.hide=function(){r.$element.off(l?"touchstart":"mousedown",r.$onMouseDown),s.keyboard&&t.off("keydown",r.$onKeyDown),d(!0)},r}var s=(angular.element(t.document.body),/(ip(a|o)d|iphone|android)/gi.test(t.navigator.userAgent)),l="createTouch"in t.document&&s;return r.defaults=e,r}]}).directive("bsSelect",["$window","$parse","$q","$select","$parseOptions",function(e,t,n,a,o){var i=a.defaults;return{restrict:"EAC",require:"ngModel",link:function(e,t,n,r){var s={scope:e,placeholder:i.placeholder};if(angular.forEach(["placement","container","delay","trigger","keyboard","html","animation","template","placeholder","multiple","allNoneButtons","maxLength","maxLengthHtml","allText","noneText","iconCheckmark","autoClose","id"],function(e){angular.isDefined(n[e])&&(s[e]=n[e])}),"select"===t[0].nodeName.toLowerCase()){var l=t;l.css("display","none"),t=angular.element('<button type="button" class="btn btn-default"></button>'),l.after(t)}var u=o(n.ngOptions),c=a(t,r,s),d=u.$match[7].replace(/\|.+/,"").trim();e.$watch(d,function(){u.valuesFn(e,r).then(function(e){c.update(e),r.$render()})},!0),e.$watch(n.ngModel,function(){c.$updateActiveIndex(),r.$render()},!0),r.$render=function(){var e,n;s.multiple&&angular.isArray(r.$modelValue)?(e=r.$modelValue.map(function(e){return n=c.$getIndex(e),angular.isDefined(n)?c.$scope.$matches[n].label:!1}).filter(angular.isDefined),e=e.length>(s.maxLength||i.maxLength)?e.length+" "+(s.maxLengthHtml||i.maxLengthHtml):e.join(", ")):(n=c.$getIndex(r.$modelValue),e=angular.isDefined(n)?c.$scope.$matches[n].label:!1),t.html((e?e:s.placeholder)+i.caretHtml)},s.multiple&&(r.$isEmpty=function(e){return!e||0===e.length}),e.$on("$destroy",function(){c&&c.destroy(),s=null,c=null})}}}]),angular.module("mgcrea.ngStrap.tab",[]).provider("$tab",function(){var e=this.defaults={animation:"am-fade",template:"tab/tab.tpl.html",navClass:"nav-tabs",activeClass:"active"},t=this.controller=function(t,n,a){var o=this;o.$options=angular.copy(e),angular.forEach(["animation","navClass","activeClass"],function(e){angular.isDefined(a[e])&&(o.$options[e]=a[e])}),t.$navClass=o.$options.navClass,t.$activeClass=o.$options.activeClass,o.$panes=t.$panes=[],o.$activePaneChangeListeners=o.$viewChangeListeners=[],o.$push=function(e){o.$panes.push(e)},o.$remove=function(e){var t=o.$panes.indexOf(e),n=o.$panes.$active;o.$panes.splice(t,1),n>t?n--:t===n&&n===o.$panes.length&&n--,o.$setActive(n)},o.$panes.$active=0,o.$setActive=t.$setActive=function(e){o.$panes.$active=e,o.$activePaneChangeListeners.forEach(function(e){e()})}};this.$get=function(){var n={};return n.defaults=e,n.controller=t,n}}).directive("bsTabs",["$window","$animate","$tab","$parse",function(e,t,n,a){var o=n.defaults;return{require:["?ngModel","bsTabs"],transclude:!0,scope:!0,controller:["$scope","$element","$attrs",n.controller],templateUrl:function(e,t){return t.template||o.template},link:function(e,t,n,o){var i=o[0],r=o[1];if(i&&(console.warn("Usage of ngModel is deprecated, please use bsActivePane instead!"),r.$activePaneChangeListeners.push(function(){i.$setViewValue(r.$panes.$active)}),i.$formatters.push(function(e){return r.$setActive(1*e),e})),n.bsActivePane){var s=a(n.bsActivePane);r.$activePaneChangeListeners.push(function(){s.assign(e,r.$panes.$active)}),e.$watch(n.bsActivePane,function(e){r.$setActive(1*e)},!0)}}}}]).directive("bsPane",["$window","$animate","$sce",function(e,t,n){return{require:["^?ngModel","^bsTabs"],scope:!0,link:function(e,a,o,i){function r(){var n=s.$panes.indexOf(e),o=s.$panes.$active;t[n===o?"addClass":"removeClass"](a,s.$options.activeClass)}var s=(i[0],i[1]);a.addClass("tab-pane"),o.$observe("title",function(t){e.title=n.trustAsHtml(t)}),s.$options.animation&&a.addClass(s.$options.animation),s.$push(e),e.$on("$destroy",function(){s.$remove(e)}),s.$activePaneChangeListeners.push(function(){r()}),r()}}}]),angular.module("mgcrea.ngStrap.scrollspy",["mgcrea.ngStrap.helpers.debounce","mgcrea.ngStrap.helpers.dimensions"]).provider("$scrollspy",function(){var e=this.$$spies={},n=this.defaults={debounce:150,throttle:100,offset:100};this.$get=["$window","$document","$rootScope","dimensions","debounce","throttle",function(a,o,i,r,s,l){function u(e,t){return e[0].nodeName&&e[0].nodeName.toLowerCase()===t.toLowerCase()}function c(o){var c=angular.extend({},n,o);c.element||(c.element=p);var g=u(c.element,"body"),m=g?d:c.element,$=g?"window":c.id;if(e[$])return e[$].$$count++,e[$];var h,v,y,w,b,D,k,T,S={},x=S.$trackedElements=[],C=[];return S.init=function(){this.$$count=1,w=s(this.checkPosition,c.debounce),b=l(this.checkPosition,c.throttle),m.on("click",this.checkPositionWithEventLoop),d.on("resize",w),m.on("scroll",b),D=s(this.checkOffsets,c.debounce),h=i.$on("$viewContentLoaded",D),v=i.$on("$includeContentLoaded",D),D(),$&&(e[$]=S)},S.destroy=function(){this.$$count--,this.$$count>0||(m.off("click",this.checkPositionWithEventLoop),d.off("resize",w),m.off("scroll",b),h(),v(),$&&delete e[$])},S.checkPosition=function(){if(C.length){if(T=(g?a.pageYOffset:m.prop("scrollTop"))||0,k=Math.max(a.innerHeight,f.prop("clientHeight")),T<C[0].offsetTop&&y!==C[0].target)return S.$activateElement(C[0]);for(var e=C.length;e--;)if(!angular.isUndefined(C[e].offsetTop)&&null!==C[e].offsetTop&&y!==C[e].target&&!(T<C[e].offsetTop||C[e+1]&&T>C[e+1].offsetTop))return S.$activateElement(C[e])}},S.checkPositionWithEventLoop=function(){setTimeout(S.checkPosition,1)},S.$activateElement=function(e){if(y){var t=S.$getTrackedElement(y);t&&(t.source.removeClass("active"),u(t.source,"li")&&u(t.source.parent().parent(),"li")&&t.source.parent().parent().removeClass("active"))}y=e.target,e.source.addClass("active"),u(e.source,"li")&&u(e.source.parent().parent(),"li")&&e.source.parent().parent().addClass("active")},S.$getTrackedElement=function(e){return x.filter(function(t){return t.target===e})[0]},S.checkOffsets=function(){angular.forEach(x,function(e){var n=t.querySelector(e.target);e.offsetTop=n?r.offset(n).top:null,c.offset&&null!==e.offsetTop&&(e.offsetTop-=1*c.offset)}),C=x.filter(function(e){return null!==e.offsetTop}).sort(function(e,t){return e.offsetTop-t.offsetTop}),w()},S.trackElement=function(e,t){x.push({target:e,source:t})},S.untrackElement=function(e,t){for(var n,a=x.length;a--;)if(x[a].target===e&&x[a].source===t){n=a;break}x=x.splice(n,1)},S.activate=function(e){x[e].addClass("active")},S.init(),S}var d=angular.element(a),f=angular.element(o.prop("documentElement")),p=angular.element(a.document.body);return c}]}).directive("bsScrollspy",["$rootScope","debounce","dimensions","$scrollspy",function(e,t,n,a){return{restrict:"EAC",link:function(e,t,n){var o={scope:e};angular.forEach(["offset","target"],function(e){angular.isDefined(n[e])&&(o[e]=n[e])});var i=a(o);i.trackElement(o.target,t),e.$on("$destroy",function(){i&&(i.untrackElement(o.target,t),i.destroy()),o=null,i=null})}}}]).directive("bsScrollspyList",["$rootScope","debounce","dimensions","$scrollspy",function(){return{restrict:"A",compile:function(e){var t=e[0].querySelectorAll("li > a[href]");angular.forEach(t,function(e){var t=angular.element(e);t.parent().attr("bs-scrollspy","").attr("data-target",t.attr("href"))})}}}]),angular.module("mgcrea.ngStrap.timepicker",["mgcrea.ngStrap.helpers.dateParser","mgcrea.ngStrap.helpers.dateFormatter","mgcrea.ngStrap.tooltip"]).provider("$timepicker",function(){var e=this.defaults={animation:"am-fade",prefixClass:"timepicker",placement:"bottom-left",template:"timepicker/timepicker.tpl.html",trigger:"focus",container:!1,keyboard:!0,html:!1,delay:0,useNative:!0,timeType:"date",timeFormat:"shortTime",modelTimeFormat:null,autoclose:!1,minTime:-1/0,maxTime:+1/0,length:5,hourStep:1,minuteStep:5,iconUp:"glyphicon glyphicon-chevron-up",iconDown:"glyphicon glyphicon-chevron-down",arrowBehavior:"pager"};this.$get=["$window","$document","$rootScope","$sce","$dateFormatter","$tooltip","$timeout",function(t,n,a,o,i,r,s){function l(t,n,a){function o(e,n){if(t[0].createTextRange){var a=t[0].createTextRange();a.collapse(!0),a.moveStart("character",e),a.moveEnd("character",n),a.select()}else t[0].setSelectionRange?t[0].setSelectionRange(e,n):angular.isUndefined(t[0].selectionStart)&&(t[0].selectionStart=e,t[0].selectionEnd=n)}function l(){t[0].focus()}var d=r(t,angular.extend({},e,a)),f=a.scope,p=d.$options,g=d.$scope,m=p.lang,$=function(e,t){return i.formatDate(e,t,m)},h=0,v=n.$dateValue||new Date,y={hour:v.getHours(),meridian:v.getHours()<12,minute:v.getMinutes(),second:v.getSeconds(),millisecond:v.getMilliseconds()},w=i.getDatetimeFormat(p.timeFormat,m),b=i.hoursFormat(w),D=i.timeSeparator(w),k=i.minutesFormat(w),T=i.showAM(w);g.$iconUp=p.iconUp,g.$iconDown=p.iconDown,g.$select=function(e,t){d.select(e,t)},g.$moveIndex=function(e,t){d.$moveIndex(e,t)},g.$switchMeridian=function(e){d.switchMeridian(e)},d.update=function(e){angular.isDate(e)&&!isNaN(e.getTime())?(d.$date=e,angular.extend(y,{hour:e.getHours(),minute:e.getMinutes(),second:e.getSeconds(),millisecond:e.getMilliseconds()}),d.$build()):d.$isBuilt||d.$build()},d.select=function(e,t,a){(!n.$dateValue||isNaN(n.$dateValue.getTime()))&&(n.$dateValue=new Date(1970,0,1)),angular.isDate(e)||(e=new Date(e)),0===t?n.$dateValue.setHours(e.getHours()):1===t&&n.$dateValue.setMinutes(e.getMinutes()),n.$setViewValue(angular.copy(n.$dateValue)),n.$render(),p.autoclose&&!a&&s(function(){d.hide(!0)})},d.switchMeridian=function(e){if(n.$dateValue&&!isNaN(n.$dateValue.getTime())){var t=(e||n.$dateValue).getHours();n.$dateValue.setHours(12>t?t+12:t-12),n.$setViewValue(angular.copy(n.$dateValue)),n.$render()}},d.$build=function(){var e,t,n=g.midIndex=parseInt(p.length/2,10),a=[];for(e=0;e<p.length;e++)t=new Date(1970,0,1,y.hour-(n-e)*p.hourStep),a.push({date:t,label:$(t,b),selected:d.$date&&d.$isSelected(t,0),disabled:d.$isDisabled(t,0)});var o,i=[];for(e=0;e<p.length;e++)o=new Date(1970,0,1,0,y.minute-(n-e)*p.minuteStep),i.push({date:o,label:$(o,k),selected:d.$date&&d.$isSelected(o,1),disabled:d.$isDisabled(o,1)});var r=[];for(e=0;e<p.length;e++)r.push([a[e],i[e]]);g.rows=r,g.showAM=T,g.isAM=(d.$date||a[n].date).getHours()<12,g.timeSeparator=D,d.$isBuilt=!0},d.$isSelected=function(e,t){return d.$date?0===t?e.getHours()===d.$date.getHours():1===t?e.getMinutes()===d.$date.getMinutes():void 0:!1},d.$isDisabled=function(e,t){var n;return 0===t?n=e.getTime()+6e4*y.minute:1===t&&(n=e.getTime()+36e5*y.hour),n<1*p.minTime||n>1*p.maxTime},g.$arrowAction=function(e,t){"picker"===p.arrowBehavior?d.$setTimeByStep(e,t):d.$moveIndex(e,t)},d.$setTimeByStep=function(e,t){{var n=new Date(d.$date),a=n.getHours(),o=($(n,b).length,n.getMinutes());$(n,k).length}0===t?n.setHours(a-parseInt(p.hourStep,10)*e):n.setMinutes(o-parseInt(p.minuteStep,10)*e),d.select(n,t,!0)},d.$moveIndex=function(e,t){var n;0===t?(n=new Date(1970,0,1,y.hour+e*p.length,y.minute),angular.extend(y,{hour:n.getHours()})):1===t&&(n=new Date(1970,0,1,y.hour,y.minute+e*p.length*p.minuteStep),angular.extend(y,{minute:n.getMinutes()})),d.$build()},d.$onMouseDown=function(e){if("input"!==e.target.nodeName.toLowerCase()&&e.preventDefault(),e.stopPropagation(),c){var t=angular.element(e.target);"button"!==t[0].nodeName.toLowerCase()&&(t=t.parent()),t.triggerHandler("click")}},d.$onKeyDown=function(e){if(/(38|37|39|40|13)/.test(e.keyCode)&&!e.shiftKey&&!e.altKey){if(e.preventDefault(),e.stopPropagation(),13===e.keyCode)return d.hide(!0);var t=new Date(d.$date),n=t.getHours(),a=$(t,b).length,i=t.getMinutes(),r=$(t,k).length,s=/(37|39)/.test(e.keyCode),l=2+1*T;s&&(37===e.keyCode?h=1>h?l-1:h-1:39===e.keyCode&&(h=l-1>h?h+1:0));var u=[0,a];0===h?(38===e.keyCode?t.setHours(n-parseInt(p.hourStep,10)):40===e.keyCode&&t.setHours(n+parseInt(p.hourStep,10)),a=$(t,b).length,u=[0,a]):1===h?(38===e.keyCode?t.setMinutes(i-parseInt(p.minuteStep,10)):40===e.keyCode&&t.setMinutes(i+parseInt(p.minuteStep,10)),r=$(t,k).length,u=[a+1,a+1+r]):2===h&&(s||d.switchMeridian(),u=[a+1+r+1,a+1+r+3]),d.select(t,h,!0),o(u[0],u[1]),f.$digest()}};var S=d.init;d.init=function(){return u&&p.useNative?(t.prop("type","time"),void t.css("-webkit-appearance","textfield")):(c&&(t.prop("type","text"),t.attr("readonly","true"),t.on("click",l)),void S())};var x=d.destroy;d.destroy=function(){u&&p.useNative&&t.off("click",l),x()};var C=d.show;d.show=function(){C(),s(function(){d.$element.on(c?"touchstart":"mousedown",d.$onMouseDown),p.keyboard&&t.on("keydown",d.$onKeyDown)},0,!1)};var M=d.hide;return d.hide=function(e){d.$isShown&&(d.$element.off(c?"touchstart":"mousedown",d.$onMouseDown),p.keyboard&&t.off("keydown",d.$onKeyDown),M(e))},d}var u=(angular.element(t.document.body),/(ip(a|o)d|iphone|android)/gi.test(t.navigator.userAgent)),c="createTouch"in t.document&&u;return e.lang||(e.lang=i.getDefaultLocale()),l.defaults=e,l}]}).directive("bsTimepicker",["$window","$parse","$q","$dateFormatter","$dateParser","$timepicker",function(e,t,n,a,o,i){{var r=i.defaults,s=/(ip(a|o)d|iphone|android)/gi.test(e.navigator.userAgent);e.requestAnimationFrame||e.setTimeout}return{restrict:"EAC",require:"ngModel",link:function(e,t,n,l){function u(e){if(angular.isDate(e)){var t=isNaN(d.minTime)||new Date(e.getTime()).setFullYear(1970,0,1)>=d.minTime,n=isNaN(d.maxTime)||new Date(e.getTime()).setFullYear(1970,0,1)<=d.maxTime,a=t&&n;l.$setValidity("date",a),l.$setValidity("min",t),l.$setValidity("max",n),a&&(l.$dateValue=e)}}function c(){return!l.$dateValue||isNaN(l.$dateValue.getTime())?"":g(l.$dateValue,d.timeFormat)}var d={scope:e,controller:l};angular.forEach(["placement","container","delay","trigger","keyboard","html","animation","template","autoclose","timeType","timeFormat","modelTimeFormat","useNative","hourStep","minuteStep","length","arrowBehavior","iconUp","iconDown","id"],function(e){angular.isDefined(n[e])&&(d[e]=n[e])}),n.bsShow&&e.$watch(n.bsShow,function(e){f&&angular.isDefined(e)&&(angular.isString(e)&&(e=!!e.match(/true|,?(timepicker),?/i)),e===!0?f.show():f.hide())}),s&&(d.useNative||r.useNative)&&(d.timeFormat="HH:mm");var f=i(t,l,d);d=f.$options;var p=d.lang,g=function(e,t){return a.formatDate(e,t,p)},m=o({format:d.timeFormat,lang:p});angular.forEach(["minTime","maxTime"],function(e){angular.isDefined(n[e])&&n.$observe(e,function(t){f.$options[e]=m.getTimeForAttribute(e,t),!isNaN(f.$options[e])&&f.$build(),u(l.$dateValue)})}),e.$watch(n.ngModel,function(){f.update(l.$dateValue)},!0),l.$parsers.unshift(function(e){if(!e)return l.$setValidity("date",!0),null;var t=angular.isDate(e)?e:m.parse(e,l.$dateValue);return!t||isNaN(t.getTime())?void l.$setValidity("date",!1):(u(t),"string"===d.timeType?g(t,d.modelTimeFormat||d.timeFormat):"number"===d.timeType?l.$dateValue.getTime():"unix"===d.timeType?l.$dateValue.getTime()/1e3:"iso"===d.timeType?l.$dateValue.toISOString():new Date(l.$dateValue))}),l.$formatters.push(function(e){var t;return t=angular.isUndefined(e)||null===e?0/0:angular.isDate(e)?e:"string"===d.timeType?m.parse(e,null,d.modelTimeFormat):new Date("unix"===d.timeType?1e3*e:e),l.$dateValue=t,c()}),l.$render=function(){t.val(c())},e.$on("$destroy",function(){f&&f.destroy(),d=null,f=null})}}}]),angular.module("mgcrea.ngStrap.tooltip",["mgcrea.ngStrap.helpers.dimensions"]).provider("$tooltip",function(){var e=this.defaults={animation:"am-fade",customClass:"",prefixClass:"tooltip",prefixEvent:"tooltip",container:!1,target:!1,placement:"top",template:"tooltip/tooltip.tpl.html",contentTemplate:!1,trigger:"hover focus",keyboard:!1,html:!1,show:!1,title:"",type:"",delay:0,autoClose:!1,bsEnabled:!0};this.$get=["$window","$rootScope","$compile","$q","$templateCache","$http","$animate","$sce","dimensions","$$rAF","$timeout",function(n,a,o,i,r,s,l,u,c,d,f){function p(n,i){function r(){O.$emit(P.prefixEvent+".show",F)}function s(){if(O.$emit(P.prefixEvent+".hide",F),R===W){if(U&&"focus"===P.trigger)return n[0].blur();A()}}function p(){var e=P.trigger.split(" ");angular.forEach(e,function(e){"click"===e?n.on("click",F.toggle):"manual"!==e&&(n.on("hover"===e?"mouseenter":"focus",F.enter),n.on("hover"===e?"mouseleave":"blur",F.leave),"button"===V&&"hover"!==e&&n.on(v?"touchstart":"mousedown",F.$onFocusElementMouseDown))})}function b(){for(var e=P.trigger.split(" "),t=e.length;t--;){var a=e[t];"click"===a?n.off("click",F.toggle):"manual"!==a&&(n.off("hover"===a?"mouseenter":"focus",F.enter),n.off("hover"===a?"mouseleave":"blur",F.leave),"button"===V&&"hover"!==a&&n.off(v?"touchstart":"mousedown",F.$onFocusElementMouseDown))}}function D(){"focus"!==P.trigger?R.on("keyup",F.$onKeyUp):n.on("keyup",F.$onFocusKeyUp)}function k(){"focus"!==P.trigger?R.off("keyup",F.$onKeyUp):n.off("keyup",F.$onFocusKeyUp)}function T(){f(function(){R.on("click",x),w.on("click",F.hide),j=!0},0,!1)}function S(){j&&(R.off("click",x),w.off("click",F.hide),j=!1)}function x(e){e.stopPropagation()}function C(e){e=e||P.target||n;var t=e[0],a=t.getBoundingClientRect();null===a.width&&(a=angular.extend({},a,{width:a.right-a.left,height:a.bottom-a.top}));var o;return o="body"===P.container?c.offset(t):c.position(t),angular.extend({},a,o)}function M(e,t,n,a){var o,i=e.split("-");switch(i[0]){case"right":o={top:t.top+t.height/2-a/2,left:t.left+t.width};break;case"bottom":o={top:t.top+t.height,left:t.left+t.width/2-n/2};break;case"left":o={top:t.top+t.height/2-a/2,left:t.left-n};break;default:o={top:t.top-a,left:t.left+t.width/2-n/2}}if(!i[1])return o;if("top"===i[0]||"bottom"===i[0])switch(i[1]){case"left":o.left=t.left;break;case"right":o.left=t.left+t.width-n}else if("left"===i[0]||"right"===i[0])switch(i[1]){case"top":o.top=t.top-a;break;case"bottom":o.top=t.top+t.height}return o}function E(e,t){R.css({top:e+"px",left:t+"px"})}function A(){clearTimeout(H),F.$isShown&&null!==R&&(P.autoClose&&S(),P.keyboard&&k()),K&&(K.$destroy(),K=null),R&&(R.remove(),R=F.$element=null)}var F={},V=n[0].nodeName.toLowerCase(),P=F.$options=angular.extend({},e,i);F.$promise=$(P.template);var O=F.$scope=P.scope&&P.scope.$new()||a.$new();if(P.delay&&angular.isString(P.delay)){var I=P.delay.split(",").map(parseFloat);P.delay=I.length>1?{show:I[0],hide:I[1]}:I[0]}F.$id=P.id||n.attr("id")||"",P.title&&(O.title=u.trustAsHtml(P.title)),O.$setEnabled=function(e){O.$$postDigest(function(){F.setEnabled(e)})},O.$hide=function(){O.$$postDigest(function(){F.hide()})},O.$show=function(){O.$$postDigest(function(){F.show()})},O.$toggle=function(){O.$$postDigest(function(){F.toggle()})},F.$isShown=O.$isShown=!1;var H,N;P.contentTemplate&&(F.$promise=F.$promise.then(function(e){var t=angular.element(e);return $(P.contentTemplate).then(function(e){var n=m('[ng-bind="content"]',t[0]);return n.length||(n=m('[ng-bind="title"]',t[0])),n.removeAttr("ng-bind").html(e),t[0].outerHTML})}));var L,R,q,Y,K;F.$promise.then(function(e){angular.isObject(e)&&(e=e.data),P.html&&(e=e.replace(y,'ng-bind-html="')),e=h.apply(e),q=e,L=o(e),F.init()}),F.init=function(){P.delay&&angular.isNumber(P.delay)&&(P.delay={show:P.delay,hide:P.delay}),"self"===P.container?Y=n:angular.isElement(P.container)?Y=P.container:P.container&&(Y=m(P.container)),p(),P.target&&(P.target=angular.isElement(P.target)?P.target:m(P.target)),P.show&&O.$$postDigest(function(){"focus"===P.trigger?n[0].focus():F.show()})},F.destroy=function(){b(),A(),O.$destroy()},F.enter=function(){return clearTimeout(H),N="in",P.delay&&P.delay.show?void(H=setTimeout(function(){"in"===N&&F.show()},P.delay.show)):F.show()},F.show=function(){if(P.bsEnabled&&!F.$isShown){O.$emit(P.prefixEvent+".show.before",F);var e,t;P.container?(e=Y,t=Y[0].lastChild?angular.element(Y[0].lastChild):null):(e=null,t=n),R&&A(),K=F.$scope.$new(),R=F.$element=L(K,function(){}),R.css({top:"-9999px",left:"-9999px",display:"block",visibility:"hidden"}),P.animation&&R.addClass(P.animation),P.type&&R.addClass(P.prefixClass+"-"+P.type),P.customClass&&R.addClass(P.customClass);var a=l.enter(R,e,t,r);a&&a.then&&a.then(r),F.$isShown=O.$isShown=!0,g(O),d(function(){F.$applyPlacement(),R&&R.css({visibility:"visible"})}),P.keyboard&&("focus"!==P.trigger&&F.focus(),D()),P.autoClose&&T()}},F.leave=function(){return clearTimeout(H),N="out",P.delay&&P.delay.hide?void(H=setTimeout(function(){"out"===N&&F.hide()},P.delay.hide)):F.hide()};var U,W;F.hide=function(e){if(F.$isShown){O.$emit(P.prefixEvent+".hide.before",F),U=e,W=R;var t=l.leave(R,s);t&&t.then&&t.then(s),F.$isShown=O.$isShown=!1,g(O),P.keyboard&&null!==R&&k(),P.autoClose&&null!==R&&S()}},F.toggle=function(){F.$isShown?F.leave():F.enter()},F.focus=function(){R[0].focus()},F.setEnabled=function(e){P.bsEnabled=e},F.$applyPlacement=function(){if(R){var a=P.placement,o=/\s?auto?\s?/i,i=o.test(a);i&&(a=a.replace(o,"")||e.placement),R.addClass(P.placement);var r=C(),s=R.prop("offsetWidth"),l=R.prop("offsetHeight");if(i){var u=a,c=P.container?angular.element(t.querySelector(P.container)):n.parent(),d=C(c);u.indexOf("bottom")>=0&&r.bottom+l>d.bottom?a=u.replace("bottom","top"):u.indexOf("top")>=0&&r.top-l<d.top&&(a=u.replace("top","bottom")),("right"===u||"bottom-left"===u||"top-left"===u)&&r.right+s>d.width?a="right"===u?"left":a.replace("left","right"):("left"===u||"bottom-right"===u||"top-right"===u)&&r.left-s<d.left&&(a="left"===u?"right":a.replace("right","left")),R.removeClass(u).addClass(a)}var f=M(a,r,s,l);E(f.top,f.left)}},F.$onKeyUp=function(e){27===e.which&&F.$isShown&&(F.hide(),e.stopPropagation())},F.$onFocusKeyUp=function(e){27===e.which&&(n[0].blur(),e.stopPropagation())},F.$onFocusElementMouseDown=function(e){e.preventDefault(),e.stopPropagation(),F.$isShown?n[0].blur():n[0].focus()};var j=!1;return F}function g(e){e.$$phase||e.$root&&e.$root.$$phase||e.$digest()}function m(e,n){return angular.element((n||t).querySelectorAll(e))}function $(e){return b[e]?b[e]:b[e]=i.when(r.get(e)||s.get(e)).then(function(t){return angular.isObject(t)?(r.put(e,t.data),t.data):t})}var h=String.prototype.trim,v="createTouch"in n.document,y=/ng-bind="/gi,w=angular.element(n.document),b={};return p}]}).directive("bsTooltip",["$window","$location","$sce","$tooltip","$$rAF",function(e,t,n,a,o){return{restrict:"EAC",scope:!0,link:function(e,t,i){var r={scope:e};
angular.forEach(["template","contentTemplate","placement","container","target","delay","trigger","keyboard","html","animation","backdropAnimation","type","customClass","id"],function(e){angular.isDefined(i[e])&&(r[e]=i[e])}),e.hasOwnProperty("title")||(e.title=""),i.$observe("title",function(t){if(angular.isDefined(t)||!e.hasOwnProperty("title")){var a=e.title;e.title=n.trustAsHtml(t),angular.isDefined(a)&&o(function(){s&&s.$applyPlacement()})}}),i.bsTooltip&&e.$watch(i.bsTooltip,function(t,n){angular.isObject(t)?angular.extend(e,t):e.title=t,angular.isDefined(n)&&o(function(){s&&s.$applyPlacement()})},!0),i.bsShow&&e.$watch(i.bsShow,function(e){s&&angular.isDefined(e)&&(angular.isString(e)&&(e=!!e.match(/true|,?(tooltip),?/i)),e===!0?s.show():s.hide())}),i.bsEnabled&&e.$watch(i.bsEnabled,function(e){s&&angular.isDefined(e)&&(angular.isString(e)&&(e=!!e.match(/true|1|,?(tooltip),?/i)),s.setEnabled(e===!1?!1:!0))});var s=a(t,r);e.$on("$destroy",function(){s&&s.destroy(),r=null,s=null})}}}]),angular.module("mgcrea.ngStrap.typeahead",["mgcrea.ngStrap.tooltip","mgcrea.ngStrap.helpers.parseOptions"]).provider("$typeahead",function(){var e=this.defaults={animation:"am-fade",prefixClass:"typeahead",prefixEvent:"$typeahead",placement:"bottom-left",template:"typeahead/typeahead.tpl.html",trigger:"focus",container:!1,keyboard:!0,html:!1,delay:0,minLength:1,filter:"filter",limit:6,comparator:""};this.$get=["$window","$rootScope","$tooltip","$timeout",function(t,n,a,o){function i(t,n,i){var r={},s=angular.extend({},e,i);r=a(t,s);var l=i.scope,u=r.$scope;u.$resetMatches=function(){u.$matches=[],u.$activeIndex=0},u.$resetMatches(),u.$activate=function(e){u.$$postDigest(function(){r.activate(e)})},u.$select=function(e){u.$$postDigest(function(){r.select(e)})},u.$isVisible=function(){return r.$isVisible()},r.update=function(e){u.$matches=e,u.$activeIndex>=e.length&&(u.$activeIndex=0)},r.activate=function(e){u.$activeIndex=e},r.select=function(e){var t=u.$matches[e].value;n.$setViewValue(t),n.$render(),u.$resetMatches(),l&&l.$digest(),u.$emit(s.prefixEvent+".select",t,e,r)},r.$isVisible=function(){return s.minLength&&n?u.$matches.length&&angular.isString(n.$viewValue)&&n.$viewValue.length>=s.minLength:!!u.$matches.length},r.$getIndex=function(e){var t=u.$matches.length,n=t;if(t){for(n=t;n--&&u.$matches[n].value!==e;);if(!(0>n))return n}},r.$onMouseDown=function(e){e.preventDefault(),e.stopPropagation()},r.$onKeyDown=function(e){/(38|40|13)/.test(e.keyCode)&&(r.$isVisible()&&(e.preventDefault(),e.stopPropagation()),13===e.keyCode&&u.$matches.length?r.select(u.$activeIndex):38===e.keyCode&&u.$activeIndex>0?u.$activeIndex--:40===e.keyCode&&u.$activeIndex<u.$matches.length-1?u.$activeIndex++:angular.isUndefined(u.$activeIndex)&&(u.$activeIndex=0),u.$digest())};var c=r.show;r.show=function(){c(),o(function(){r.$element.on("mousedown",r.$onMouseDown),s.keyboard&&t.on("keydown",r.$onKeyDown)},0,!1)};var d=r.hide;return r.hide=function(){r.$element.off("mousedown",r.$onMouseDown),s.keyboard&&t.off("keydown",r.$onKeyDown),d()},r}angular.element(t.document.body);return i.defaults=e,i}]}).directive("bsTypeahead",["$window","$parse","$q","$typeahead","$parseOptions",function(e,t,a,o,i){var r=o.defaults;return{restrict:"EAC",require:"ngModel",link:function(e,t,a,s){var l={scope:e};angular.forEach(["placement","container","delay","trigger","keyboard","html","animation","template","filter","limit","minLength","watchOptions","selectMode","comparator","id"],function(e){angular.isDefined(a[e])&&(l[e]=a[e])});var u=l.filter||r.filter,c=l.limit||r.limit,d=l.comparator||r.comparator,f=a.ngOptions;u&&(f+=" | "+u+":$viewValue"),d&&(f+=":"+d),c&&(f+=" | limitTo:"+c);var p=i(f),g=o(t,s,l);if(l.watchOptions){var m=p.$match[7].replace(/\|.+/,"").replace(/\(.*\)/g,"").trim();e.$watch(m,function(){p.valuesFn(e,s).then(function(e){g.update(e),s.$render()})},!0)}e.$watch(a.ngModel,function(t){e.$modelValue=t,p.valuesFn(e,s).then(function(e){if(l.selectMode&&!e.length&&t.length>0)return void s.$setViewValue(s.$viewValue.substring(0,s.$viewValue.length-1));e.length>c&&(e=e.slice(0,c));var n=g.$isVisible();n&&g.update(e),(1!==e.length||e[0].value!==t)&&(!n&&g.update(e),s.$render())})}),s.$formatters.push(function(e){var t=p.displayValue(e);return t===n?"":t}),s.$render=function(){if(s.$isEmpty(s.$viewValue))return t.val("");var e=g.$getIndex(s.$modelValue),n=angular.isDefined(e)?g.$scope.$matches[e].label:s.$viewValue;n=angular.isObject(n)?p.displayValue(n):n,t.val(n?n.toString().replace(/<(?:.|\n)*?>/gm,"").trim():"")},e.$on("$destroy",function(){g&&g.destroy(),l=null,g=null})}}}])}(window,document);
//# sourceMappingURL=angular-strap.min.js.map
/**
 * angular-strap
 * @version v2.1.6 - 2015-01-11
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes (olivier@mg-crea.com)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
!function(){"use strict";angular.module("mgcrea.ngStrap.alert").run(["$templateCache",function(t){t.put("alert/alert.tpl.html",'<div class="alert" ng-class="[type ? \'alert-\' + type : null]"><button type="button" class="close" ng-if="dismissable" ng-click="$hide()">&times;</button> <strong ng-bind="title"></strong>&nbsp;<span ng-bind-html="content"></span></div>')}]),angular.module("mgcrea.ngStrap.aside").run(["$templateCache",function(t){t.put("aside/aside.tpl.html",'<div class="aside" tabindex="-1" role="dialog"><div class="aside-dialog"><div class="aside-content"><div class="aside-header" ng-show="title"><button type="button" class="close" ng-click="$hide()">&times;</button><h4 class="aside-title" ng-bind="title"></h4></div><div class="aside-body" ng-bind="content"></div><div class="aside-footer"><button type="button" class="btn btn-default" ng-click="$hide()">Close</button></div></div></div></div>')}]),angular.module("mgcrea.ngStrap.datepicker").run(["$templateCache",function(t){t.put("datepicker/datepicker.tpl.html",'<div class="dropdown-menu datepicker" ng-class="\'datepicker-mode-\' + $mode" style="max-width: 320px"><table style="table-layout: fixed; height: 100%; width: 100%"><thead><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$selectPane(-1)"><i class="{{$iconLeft}}"></i></button></th><th colspan="{{ rows[0].length - 2 }}"><button tabindex="-1" type="button" class="btn btn-default btn-block text-strong" ng-click="$toggleMode()"><strong style="text-transform: capitalize" ng-bind="title"></strong></button></th><th><button tabindex="-1" type="button" class="btn btn-default pull-right" ng-click="$selectPane(+1)"><i class="{{$iconRight}}"></i></button></th></tr><tr ng-show="showLabels" ng-bind-html="labels"></tr></thead><tbody><tr ng-repeat="(i, row) in rows" height="{{ 100 / rows.length }}%"><td class="text-center" ng-repeat="(j, el) in row"><button tabindex="-1" type="button" class="btn btn-default" style="width: 100%" ng-class="{\'btn-primary\': el.selected, \'btn-info btn-today\': el.isToday && !el.selected}" ng-click="$select(el.date)" ng-disabled="el.disabled"><span ng-class="{\'text-muted\': el.muted}" ng-bind="el.label"></span></button></td></tr></tbody></table></div>')}]),angular.module("mgcrea.ngStrap.dropdown").run(["$templateCache",function(t){t.put("dropdown/dropdown.tpl.html",'<ul tabindex="-1" class="dropdown-menu" role="menu"><li role="presentation" ng-class="{divider: item.divider}" ng-repeat="item in content"><a role="menuitem" tabindex="-1" ng-href="{{item.href}}" ng-if="!item.divider && item.href" target="{{item.target || \'\'}}" ng-bind="item.text"></a> <a role="menuitem" tabindex="-1" href="javascript:void(0)" ng-if="!item.divider && item.click" ng-click="$eval(item.click);$hide()" ng-bind="item.text"></a></li></ul>')}]),angular.module("mgcrea.ngStrap.modal").run(["$templateCache",function(t){t.put("modal/modal.tpl.html",'<div class="modal" tabindex="-1" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header" ng-show="title"><button type="button" class="close" ng-click="$hide()">&times;</button><h4 class="modal-title" ng-bind="title"></h4></div><div class="modal-body" ng-bind="content"></div><div class="modal-footer"><button type="button" class="btn btn-default" ng-click="$hide()">Close</button></div></div></div></div>')}]),angular.module("mgcrea.ngStrap.popover").run(["$templateCache",function(t){t.put("popover/popover.tpl.html",'<div class="popover"><div class="arrow"></div><h3 class="popover-title" ng-bind="title" ng-show="title"></h3><div class="popover-content" ng-bind="content"></div></div>')}]),angular.module("mgcrea.ngStrap.select").run(["$templateCache",function(t){t.put("select/select.tpl.html",'<ul tabindex="-1" class="select dropdown-menu" ng-show="$isVisible()" role="select"><li ng-if="$showAllNoneButtons"><div class="btn-group" style="margin-bottom: 5px; margin-left: 5px"><button type="button" class="btn btn-default btn-xs" ng-click="$selectAll()">{{$allText}}</button> <button type="button" class="btn btn-default btn-xs" ng-click="$selectNone()">{{$noneText}}</button></div></li><li role="presentation" ng-repeat="match in $matches" ng-class="{active: $isActive($index)}"><a style="cursor: default" role="menuitem" tabindex="-1" ng-click="$select($index, $event)"><i class="{{$iconCheckmark}} pull-right" ng-if="$isMultiple && $isActive($index)"></i> <span ng-bind="match.label"></span></a></li></ul>')}]),angular.module("mgcrea.ngStrap.tab").run(["$templateCache",function(t){t.put("tab/tab.tpl.html",'<ul class="nav" ng-class="$navClass" role="tablist"><li ng-repeat="$pane in $panes track by $index" ng-class="$index == $panes.$active ? $activeClass : \'\'"><a role="tab" data-toggle="tab" ng-click="$setActive($index)" data-index="{{ $index }}" ng-bind-html="$pane.title"></a></li></ul><div ng-transclude class="tab-content"></div>')}]),angular.module("mgcrea.ngStrap.timepicker").run(["$templateCache",function(t){t.put("timepicker/timepicker.tpl.html",'<div class="dropdown-menu timepicker" style="min-width: 0px;width: auto"><table height="100%"><thead><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 0)"><i class="{{ $iconUp }}"></i></button></th><th>&nbsp;</th><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(-1, 1)"><i class="{{ $iconUp }}"></i></button></th></tr></thead><tbody><tr ng-repeat="(i, row) in rows"><td class="text-center"><button tabindex="-1" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[0].selected}" ng-click="$select(row[0].date, 0)" ng-disabled="row[0].disabled"><span ng-class="{\'text-muted\': row[0].muted}" ng-bind="row[0].label"></span></button></td><td><span ng-bind="i == midIndex ? timeSeparator : \' \'"></span></td><td class="text-center"><button tabindex="-1" ng-if="row[1].date" style="width: 100%" type="button" class="btn btn-default" ng-class="{\'btn-primary\': row[1].selected}" ng-click="$select(row[1].date, 1)" ng-disabled="row[1].disabled"><span ng-class="{\'text-muted\': row[1].muted}" ng-bind="row[1].label"></span></button></td><td ng-if="showAM">&nbsp;</td><td ng-if="showAM"><button tabindex="-1" ng-show="i == midIndex - !isAM * 1" style="width: 100%" type="button" ng-class="{\'btn-primary\': !!isAM}" class="btn btn-default" ng-click="$switchMeridian()" ng-disabled="el.disabled">AM</button> <button tabindex="-1" ng-show="i == midIndex + 1 - !isAM * 1" style="width: 100%" type="button" ng-class="{\'btn-primary\': !isAM}" class="btn btn-default" ng-click="$switchMeridian()" ng-disabled="el.disabled">PM</button></td></tr></tbody><tfoot><tr class="text-center"><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 0)"><i class="{{ $iconDown }}"></i></button></th><th>&nbsp;</th><th><button tabindex="-1" type="button" class="btn btn-default pull-left" ng-click="$arrowAction(1, 1)"><i class="{{ $iconDown }}"></i></button></th></tr></tfoot></table></div>')}]),angular.module("mgcrea.ngStrap.tooltip").run(["$templateCache",function(t){t.put("tooltip/tooltip.tpl.html",'<div class="tooltip in" ng-show="title"><div class="tooltip-arrow"></div><div class="tooltip-inner" ng-bind="title"></div></div>')}]),angular.module("mgcrea.ngStrap.typeahead").run(["$templateCache",function(t){t.put("typeahead/typeahead.tpl.html",'<ul tabindex="-1" class="typeahead dropdown-menu" ng-show="$isVisible()" role="select"><li role="presentation" ng-repeat="match in $matches" ng-class="{active: $index == $activeIndex}"><a role="menuitem" tabindex="-1" ng-click="$select($index, $event)" ng-bind="match.label"></a></li></ul>')}])}(window,document);
/*!
 * jsonformatter
 * 
 * Version: 0.2.6 - 2014-12-16T21:33:46.343Z
 * License: MIT
 */


'use strict';

angular.module('jsonFormatter', ['RecursionHelper'])
.directive('jsonFormatter', ['RecursionHelper', function (RecursionHelper) {
  function escapeString(str) {
    return str.replace('"', '\"');
  }

  // From http://stackoverflow.com/a/332429
  function getObjectName(object) {
    if (object === undefined) {
      return '';
    }
    if (object === null) {
      return 'Object';
    }
    var funcNameRegex = /function (.{1,})\(/;
    var results = (funcNameRegex).exec((object).constructor.toString());
    if (results && results.length > 1) {
      return results[1];
    } else {
      return '';
    }
  }

  function getType(object) {
    if (object === null) { return 'null'; }
    return typeof object;
  }

  function link(scope, element, attributes) {
    scope.isArray = function () {
      return Array.isArray(scope.json);
    };

    scope.isObject = function() {
      return scope.json && typeof scope.json === 'object';
    };

    scope.getKeys = function (){
      if (scope.isObject()) {
        return Object.keys(scope.json);
      }
    };
    scope.type = getType(scope.json);
    scope.hasKey = typeof scope.key !== 'undefined';
    scope.getConstructorName = function(){
      return getObjectName(scope.json);
    };

    if (scope.type === 'string'){

      // Add custom type for date
      if((new Date(scope.json)).toString() !== 'Invalid Date') {
        scope.isDate = true;
      }

      // Add custom type for URLs
      if (scope.json.indexOf('http') === 0) {
        scope.isUrl = true;
      }
    }

    scope.isEmptyObject = function () {
      return scope.getKeys() && !scope.getKeys().length &&
        scope.isOpen && !scope.isArray();
    };


    // If 'open' attribute is present
    scope.isOpen = !!scope.open;
    scope.toggleOpen = function () {
      scope.isOpen = !scope.isOpen;
    };
    scope.childrenOpen = function () {
      if (scope.open > 1){
        return scope.open - 1;
      }
      return 0;
    };

    scope.openLink = function (isUrl) {
      if(isUrl) {
        window.location.href = scope.json;
      }
    };

    scope.parseValue = function (value){
      scope.type = getType(scope.json);
      if (scope.type === 'null') {
        return 'null';
      }
      if (scope.type === 'undefined') {
        return 'undefined';
      }
      if (scope.type === 'string') {
        value = '"' + escapeString(value) + '"';
      }
      if (scope.type === 'function'){

        // Remove content of the function
        return scope.json.toString()
          .replace(/\n/g, '')
          .replace(/\{.+?\}/, '') + '{ ... }';

      }
      return value;
    };
  }

  return {
    templateUrl: 'json-formatter.html',
    restrict: 'E',
    replace: true,
    scope: {
      json: '=',
      key: '=',
      open: '='
    },
    compile: function(element) {

      // Use the compile function from the RecursionHelper,
      // And return the linking function(s) which it returns
      return RecursionHelper.compile(element, link);
    }
  };
}]);

'use strict';

// from http://stackoverflow.com/a/18609594
angular.module('RecursionHelper', []).factory('RecursionHelper', ['$compile', function($compile){
  return {
    /**
     * Manually compiles the element, fixing the recursion loop.
     * @param element
     * @param [link] A post-link function, or an object with function(s)
     * registered via pre and post properties.
     * @returns An object containing the linking functions.
     */
    compile: function(element, link){
      // Normalize the link parameter
      if(angular.isFunction(link)){
        link = { post: link };
      }

      // Break the recursion loop by removing the contents
      var contents = element.contents().remove();
      var compiledContents;
      return {
        pre: (link && link.pre) ? link.pre : null,
        /**
         * Compiles and re-adds the contents
         */
        post: function(scope, element){
          // Compile the contents
          if(!compiledContents){
            compiledContents = $compile(contents);
          }
          // Re-add the compiled contents to the element
          compiledContents(scope, function(clone){
            element.append(clone);
          });

          // Call the post-linking function, if any
          if(link && link.post){
            link.post.apply(null, arguments);
          }
        }
      };
    }
  };
}]);

angular.module("jsonFormatter").run(["$templateCache", function($templateCache) {$templateCache.put("json-formatter.html","<div ng-init=\"isOpen = open && open > 0\" class=\"json-formatter-row\"><a ng-click=\"toggleOpen()\"><span class=\"toggler {{isOpen ? \'open\' : \'\'}}\" ng-if=\"isObject()\"></span> <span class=\"key\" ng-if=\"hasKey\">{{key}}:</span> <span class=\"value\"><span ng-if=\"isObject()\"><span class=\"constructor-name\">{{getConstructorName(json)}}</span> <span ng-if=\"isArray()\"><span class=\"bracket\">[</span><span class=\"number\">{{json.length}}</span><span class=\"bracket\">]</span></span></span> <span ng-if=\"!isObject()\" ng-click=\"openLink(isUrl)\" class=\"{{type}}\" ng-class=\"{date: isDate, url: isUrl}\">{{parseValue(json)}}</span></span></a><div class=\"children\" ng-if=\"getKeys().length && isOpen\"><json-formatter ng-repeat=\"key in getKeys()\" json=\"json[key]\" key=\"key\" open=\"childrenOpen()\"></json-formatter></div><div class=\"children empty object\" ng-if=\"isEmptyObject()\"></div><div class=\"children empty array\" ng-if=\"getKeys() && !getKeys().length && isOpen && isArray()\"></div></div>");}]);
'use strict';
/**
 * Capitalize Filter
 * Capitalizes all the words of a given sentence.
 * If the format parameter is set to 'team', uppercase the team abbreviation.
 * i.e. CLUB DEPORTIVO LOGROÑÉS => Club Deportivo Logroñés
 * i.e. sd logroñés => SD Logroñés
 * @author Pablo Villoslada Puigcerber <pablo85@gmail.com>
 *
 * @param {string} input The string to be formatted.
 * @param {string} [format] The format to be applied being the options 'all', 'first' or 'team'.
 * If not specified, 'all' is used.
 * @returns {string} Formatted string.
 */
angular.module('angular-capitalize-filter',[])
  .filter('capitalize', function () {
    return function (input, format) {
      if (!input) {
        return input;
      }
      format = format || 'all';
      if (format === 'first') {
        // Capitalize the first letter of a sentence
        return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
      } else {
        var words = input.split(' ');
        var result = [];
        words.forEach(function(word) {
          if (word.length === 2 && format === 'team') {
            // Uppercase team abbreviations like FC, CD, SD
            result.push(word.toUpperCase());
          } else {
            result.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
          }
        });
        return result.join(' ');
      }
    };
  });
/* angular-moment.js / v0.8.3 / (c) 2013, 2014 Uri Shaked / MIT Licence */

'format global'; /* global define */
'deps angular';
'deps moment';

(function () {
	'use strict';

	function angularMoment(angular, moment) {

		/**
		 * @ngdoc overview
		 * @name angularMoment
		 *
		 * @description
		 * angularMoment module provides moment.js functionality for angular.js apps.
		 */
		return angular.module('angularMoment', [])

		/**
		 * @ngdoc object
		 * @name angularMoment.config:angularMomentConfig
		 *
		 * @description
		 * Common configuration of the angularMoment module
		 */
			.constant('angularMomentConfig', {
				/**
				 * @ngdoc property
				 * @name angularMoment.config.angularMomentConfig#preprocess
				 * @propertyOf angularMoment.config:angularMomentConfig
				 * @returns {string} The default preprocessor to apply
				 *
				 * @description
				 * Defines a default preprocessor to apply (e.g. 'unix', 'etc', ...). The default value is null,
				 * i.e. no preprocessor will be applied.
				 */
				preprocess: null, // e.g. 'unix', 'utc', ...

				/**
				 * @ngdoc property
				 * @name angularMoment.config.angularMomentConfig#timezone
				 * @propertyOf angularMoment.config:angularMomentConfig
				 * @returns {string} The default timezone
				 *
				 * @description
				 * The default timezone (e.g. 'Europe/London'). Empty string by default (does not apply
				 * any timezone shift).
				 */
				timezone: '',

				/**
				 * @ngdoc property
				 * @name angularMoment.config.angularMomentConfig#format
				 * @propertyOf angularMoment.config:angularMomentConfig
				 * @returns {string} The pre-conversion format of the date
				 *
				 * @description
				 * Specify the format of the input date. Essentially it's a
				 * default and saves you from specifying a format in every
				 * element. Overridden by element attr. Null by default.
				 */
				format: null
			})

		/**
		 * @ngdoc object
		 * @name angularMoment.object:moment
		 *
		 * @description
		 * moment global (as provided by the moment.js library)
		 */
			.constant('moment', moment)

		/**
		 * @ngdoc object
		 * @name angularMoment.config:amTimeAgoConfig
		 * @module angularMoment
		 *
		 * @description
		 * configuration specific to the amTimeAgo directive
		 */
			.constant('amTimeAgoConfig', {
				/**
				 * @ngdoc property
				 * @name angularMoment.config.amTimeAgoConfig#withoutSuffix
				 * @propertyOf angularMoment.config:amTimeAgoConfig
				 * @returns {boolean} Whether to include a suffix in am-time-ago directive
				 *
				 * @description
				 * Defaults to false.
				 */
				withoutSuffix: false,

				/**
				 * @ngdoc property
				 * @name angularMoment.config.amTimeAgoConfig#serverTime
				 * @propertyOf angularMoment.config:amTimeAgoConfig
				 * @returns {number} Server time in milliseconds since the epoch
				 *
				 * @description
				 * If set, time ago will be calculated relative to the given value.
				 * If null, local time will be used. Defaults to null.
				 */
				serverTime: null,

				/**
				 * @ngdoc property
				 * @name angularMoment.config.amTimeAgoConfig#format
				 * @propertyOf angularMoment.config:amTimeAgoConfig
				 * @returns {string} The format of the date to be displayed in the title of the element. If null,
				 * 		the directive set the title of the element.
				 *
				 * @description
				 * Specify the format of the date when displayed. null by default.
				 */
				titleFormat: null
			})

		/**
		 * @ngdoc directive
		 * @name angularMoment.directive:amTimeAgo
		 * @module angularMoment
		 *
		 * @restrict A
		 */
			.directive('amTimeAgo', ['$window', 'moment', 'amMoment', 'amTimeAgoConfig', 'angularMomentConfig', function ($window, moment, amMoment, amTimeAgoConfig, angularMomentConfig) {

				return function (scope, element, attr) {
					var activeTimeout = null;
					var currentValue;
					var currentFormat = angularMomentConfig.format;
					var withoutSuffix = amTimeAgoConfig.withoutSuffix;
					var titleFormat = amTimeAgoConfig.titleFormat;
					var localDate = new Date().getTime();
					var preprocess = angularMomentConfig.preprocess;
					var modelName = attr.amTimeAgo.replace(/^::/, '');
					var isBindOnce = (attr.amTimeAgo.indexOf('::') === 0);
					var isTimeElement = ('TIME' === element[0].nodeName.toUpperCase());
					var unwatchChanges;

					function getNow() {
						var now;
						if (amTimeAgoConfig.serverTime) {
							var localNow = new Date().getTime();
							var nowMillis = localNow - localDate + amTimeAgoConfig.serverTime;
							now = moment(nowMillis);
						}
						else {
							now = moment();
						}
						return now;
					}

					function cancelTimer() {
						if (activeTimeout) {
							$window.clearTimeout(activeTimeout);
							activeTimeout = null;
						}
					}

					function updateTime(momentInstance) {
						element.text(momentInstance.from(getNow(), withoutSuffix));

						if (titleFormat && !element.attr('title')) {
							element.attr('title', momentInstance.local().format(titleFormat));
						}

						if (!isBindOnce) {

							var howOld = Math.abs(getNow().diff(momentInstance, 'minute'));
							var secondsUntilUpdate = 3600;
							if (howOld < 1) {
								secondsUntilUpdate = 1;
							} else if (howOld < 60) {
								secondsUntilUpdate = 30;
							} else if (howOld < 180) {
								secondsUntilUpdate = 300;
							}

							activeTimeout = $window.setTimeout(function () {
								updateTime(momentInstance);
							}, secondsUntilUpdate * 1000);
						}
					}

					function updateDateTimeAttr(value) {
						if (isTimeElement) {
							element.attr('datetime', value);
						}
					}

					function updateMoment() {
						cancelTimer();
						if (currentValue) {
							var momentValue = amMoment.preprocessDate(currentValue, preprocess, currentFormat);
							updateTime(momentValue);
							updateDateTimeAttr(momentValue.toISOString());
						}
					}

					unwatchChanges = scope.$watch(modelName, function (value) {
						if ((typeof value === 'undefined') || (value === null) || (value === '')) {
							cancelTimer();
							if (currentValue) {
								element.text('');
								updateDateTimeAttr('');
								currentValue = null;
							}
							return;
						}

						currentValue = value;
						updateMoment();

						if (value !== undefined && isBindOnce) {
							unwatchChanges();
						}
					});

					if (angular.isDefined(attr.amWithoutSuffix)) {
						scope.$watch(attr.amWithoutSuffix, function (value) {
							if (typeof value === 'boolean') {
								withoutSuffix = value;
								updateMoment();
							} else {
								withoutSuffix = amTimeAgoConfig.withoutSuffix;
							}
						});
					}

					attr.$observe('amFormat', function (format) {
						if (typeof format !== 'undefined') {
							currentFormat = format;
							updateMoment();
						}
					});

					attr.$observe('amPreprocess', function (newValue) {
						preprocess = newValue;
						updateMoment();
					});

					scope.$on('$destroy', function () {
						cancelTimer();
					});

					scope.$on('amMoment:localeChanged', function () {
						updateMoment();
					});
				};
			}])

		/**
		 * @ngdoc service
		 * @name angularMoment.service.amMoment
		 * @module angularMoment
		 */
			.service('amMoment', ['moment', '$rootScope', '$log', 'angularMomentConfig', function (moment, $rootScope, $log, angularMomentConfig) {
				var that = this;
				/**
				 * @ngdoc property
				 * @name angularMoment:amMoment#preprocessors
				 * @module angularMoment
				 *
				 * @description
				 * Defines the preprocessors for the preprocessDate method. By default, the following preprocessors
				 * are defined: utc, unix.
				 */
				this.preprocessors = {
					utc: moment.utc,
					unix: moment.unix
				};

				/**
				 * @ngdoc function
				 * @name angularMoment.service.amMoment#changeLocale
				 * @methodOf angularMoment.service.amMoment
				 *
				 * @description
				 * Changes the locale for moment.js and updates all the am-time-ago directive instances
				 * with the new locale. Also broadcasts a `amMoment:localeChanged` event on $rootScope.
				 *
				 * @param {string} locale 2-letter language code (e.g. en, es, ru, etc.)
				 */
				this.changeLocale = function (locale) {
					var result = (moment.locale||moment.lang)(locale);
					if (angular.isDefined(locale)) {
						$rootScope.$broadcast('amMoment:localeChanged');

						// The following event is deprecated and will be removed in an upcoming
						// major release.
						$rootScope.$broadcast('amMoment:languageChange');
					}
					return result;
				};

				/**
				 * @ngdoc function
				 * @name angularMoment.service.amMoment#changeLanguage
				 * @methodOf angularMoment.service.amMoment
				 * @deprecated Please use changeLocale() instead.
				 *
				 * @description
				 * Deprecated. Please use changeLocale() instead.
				 */
				this.changeLanguage = function (lang) {
					$log.warn('angular-moment: Usage of amMoment.changeLanguage() is deprecated. Please use changeLocale()');
					return that.changeLocale(lang);
				};

				/**
				 * @ngdoc function
				 * @name angularMoment.service.amMoment#preprocessDate
				 * @methodOf angularMoment.service.amMoment
				 *
				 * @description
				 * Preprocess a given value and convert it into a Moment instance appropriate for use in the
				 * am-time-ago directive and the filters.
				 *
				 * @param {*} value The value to be preprocessed
				 * @param {string} preprocess The name of the preprocessor the apply (e.g. utc, unix)
				 * @param {string=} format Specifies how to parse the value (see {@link http://momentjs.com/docs/#/parsing/string-format/})
				 * @return {Moment} A value that can be parsed by the moment library
				 */
				this.preprocessDate = function (value, preprocess, format) {
					if (angular.isUndefined(preprocess)) {
						preprocess = angularMomentConfig.preprocess;
					}
					if (this.preprocessors[preprocess]) {
						return this.preprocessors[preprocess](value, format);
					}
					if (preprocess) {
						$log.warn('angular-moment: Ignoring unsupported value for preprocess: ' + preprocess);
					}
					if (!isNaN(parseFloat(value)) && isFinite(value)) {
						// Milliseconds since the epoch
						return moment(parseInt(value, 10));
					}
					// else just returns the value as-is.
					return moment(value, format);
				};

				/**
				 * @ngdoc function
				 * @name angularMoment.service.amMoment#applyTimezone
				 * @methodOf angularMoment.service.amMoment
				 *
				 * @description
				 * Apply a timezone onto a given moment object - if moment-timezone.js is included
				 * Otherwise, it'll not apply any timezone shift.
				 *
				 * @param {Moment} aMoment a moment() instance to apply the timezone shift to
				 * @returns {Moment} The given moment with the timezone shift applied
				 */
				this.applyTimezone = function (aMoment) {
					var timezone = angularMomentConfig.timezone;
					if (aMoment && timezone) {
						if (aMoment.tz) {
							aMoment = aMoment.tz(timezone);
						} else {
							$log.warn('angular-moment: timezone specified but moment.tz() is undefined. Did you forget to include moment-timezone.js?');
						}
					}
					return aMoment;
				};
			}])

		/**
		 * @ngdoc filter
		 * @name angularMoment.filter:amCalendar
		 * @module angularMoment
		 */
			.filter('amCalendar', ['moment', 'amMoment', function (moment, amMoment) {
				return function (value, preprocess) {
					if (typeof value === 'undefined' || value === null) {
						return '';
					}

					value = amMoment.preprocessDate(value, preprocess);
					var date = moment(value);
					if (!date.isValid()) {
						return '';
					}

					return amMoment.applyTimezone(date).calendar();
				};
			}])

		/**
		 * @ngdoc filter
		 * @name angularMoment.filter:amDateFormat
		 * @module angularMoment
		 * @function
		 */
			.filter('amDateFormat', ['moment', 'amMoment', function (moment, amMoment) {
				return function (value, format, preprocess) {
					if (typeof value === 'undefined' || value === null) {
						return '';
					}

					value = amMoment.preprocessDate(value, preprocess);
					var date = moment(value);
					if (!date.isValid()) {
						return '';
					}

					return amMoment.applyTimezone(date).format(format);
				};
			}])

		/**
		 * @ngdoc filter
		 * @name angularMoment.filter:amDurationFormat
		 * @module angularMoment
		 * @function
		 */
			.filter('amDurationFormat', ['moment', function (moment) {
				return function (value, format, suffix) {
					if (typeof value === 'undefined' || value === null) {
						return '';
					}

					return moment.duration(value, format).humanize(suffix);
				};
			}])

		/**
		 * @ngdoc filter
		 * @name angularMoment.filter:amTimeAgo
		 * @module angularMoment
		 * @function
		 */
			.filter('amTimeAgo', ['moment', 'amMoment', function (moment, amMoment) {
					return function (value, preprocess, suffix) {
						if (typeof value === 'undefined' || value === null) {
							return '';
						}

						value = amMoment.preprocessDate(value, preprocess);
						var date = moment(value);
						if (!date.isValid()) {
							return '';
						}

						return amMoment.applyTimezone(date).fromNow(suffix);
					};
				}]);
	}

	if (typeof define === 'function' && define.amd) {
		define('angular-moment', ['angular', 'moment'], angularMoment);
	} else if (typeof module !== 'undefined' && module && module.exports) {
		angularMoment(angular, require('moment'));
	} else {
		angularMoment(angular, window.moment);
	}
})();


(function(angular, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        define(['angular'], function(angular) {
            return factory(angular);
        });
    } else {
        return factory(angular);
    }
}(angular || null, function(angular) {
    'use strict';
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

/**
 * @ngdoc module
 * @name ngTable
 * @description ngTable: Table + Angular JS
 * @example
 <doc:example>
 <doc:source>
 <script>
 var app = angular.module('myApp', ['ngTable']);
 app.controller('MyCtrl', function($scope) {
                    $scope.users = [
                        {name: "Moroni", age: 50},
                        {name: "Tiancum", age: 43},
                        {name: "Jacob", age: 27},
                        {name: "Nephi", age: 29},
                        {name: "Enos", age: 34}
                    ];
                });
 </script>
 <table ng-table class="table">
 <tr ng-repeat="user in users">
 <td data-title="'Name'">{{user.name}}</td>
 <td data-title="'Age'">{{user.age}}</td>
 </tr>
 </table>
 </doc:source>
 </doc:example>
 */
var app = angular.module('ngTable', []);
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

/**
 * @ngdoc service
 * @name ngTable.factory:ngTableParams
 * @description Parameters manager for ngTable
 */
app.factory('ngTableParams', ['$q', '$log', function ($q, $log) {
    var isNumber = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    var ngTableParams = function (baseParameters, baseSettings) {
        var self = this,
            log = function () {
                if (settings.debugMode && $log.debug) {
                    $log.debug.apply(this, arguments);
                }
            };

        this.data = [];

        /**
         * @ngdoc method
         * @name ngTable.factory:ngTableParams#parameters
         * @methodOf ngTable.factory:ngTableParams
         * @description Set new parameters or get current parameters
         *
         * @param {string} newParameters      New parameters
         * @param {string} parseParamsFromUrl Flag if parse parameters like in url
         * @returns {Object} Current parameters or `this`
         */
        this.parameters = function (newParameters, parseParamsFromUrl) {
            parseParamsFromUrl = parseParamsFromUrl || false;
            if (angular.isDefined(newParameters)) {
                for (var key in newParameters) {
                    var value = newParameters[key];
                    if (parseParamsFromUrl && key.indexOf('[') >= 0) {
                        var keys = key.split(/\[(.*)\]/).reverse()
                        var lastKey = '';
                        for (var i = 0, len = keys.length; i < len; i++) {
                            var name = keys[i];
                            if (name !== '') {
                                var v = value;
                                value = {};
                                value[lastKey = name] = (isNumber(v) ? parseFloat(v) : v);
                            }
                        }
                        if (lastKey === 'sorting') {
                            params[lastKey] = {};
                        }
                        params[lastKey] = angular.extend(params[lastKey] || {}, value[lastKey]);
                    } else {
                        params[key] = (isNumber(newParameters[key]) ? parseFloat(newParameters[key]) : newParameters[key]);
                    }
                }
                log('ngTable: set parameters', params);
                return this;
            }
            return params;
        };

        /**
         * @ngdoc method
         * @name ngTable.factory:ngTableParams#settings
         * @methodOf ngTable.factory:ngTableParams
         * @description Set new settings for table
         *
         * @param {string} newSettings New settings or undefined
         * @returns {Object} Current settings or `this`
         */
        this.settings = function (newSettings) {
            if (angular.isDefined(newSettings)) {
                if (angular.isArray(newSettings.data)) {
                    //auto-set the total from passed in data
                    newSettings.total = newSettings.data.length;
                }
                settings = angular.extend(settings, newSettings);
                log('ngTable: set settings', settings);
                return this;
            }
            return settings;
        };

        /**
         * @ngdoc method
         * @name ngTable.factory:ngTableParams#page
         * @methodOf ngTable.factory:ngTableParams
         * @description If parameter page not set return current page else set current page
         *
         * @param {string} page Page number
         * @returns {Object|Number} Current page or `this`
         */
        this.page = function (page) {
            return angular.isDefined(page) ? this.parameters({'page': page}) : params.page;
        };

        /**
         * @ngdoc method
         * @name ngTable.factory:ngTableParams#total
         * @methodOf ngTable.factory:ngTableParams
         * @description If parameter total not set return current quantity else set quantity
         *
         * @param {string} total Total quantity of items
         * @returns {Object|Number} Current page or `this`
         */
        this.total = function (total) {
            return angular.isDefined(total) ? this.settings({'total': total}) : settings.total;
        };

        /**
         * @ngdoc method
         * @name ngTable.factory:ngTableParams#count
         * @methodOf ngTable.factory:ngTableParams
         * @description If parameter count not set return current count per page else set count per page
         *
         * @param {string} count Count per number
         * @returns {Object|Number} Count per page or `this`
         */
        this.count = function (count) {
            // reset to first page because can be blank page
            return angular.isDefined(count) ? this.parameters({'count': count, 'page': 1}) : params.count;
        };

        /**
         * @ngdoc method
         * @name ngTable.factory:ngTableParams#filter
         * @methodOf ngTable.factory:ngTableParams
         * @description If parameter page not set return current filter else set current filter
         *
         * @param {string} filter New filter
         * @returns {Object} Current filter or `this`
         */
        this.filter = function (filter) {
            return angular.isDefined(filter) ? this.parameters({'filter': filter}) : params.filter;
        };

        /**
         * @ngdoc method
         * @name ngTable.factory:ngTableParams#sorting
         * @methodOf ngTable.factory:ngTableParams
         * @description If 'sorting' parameter is not set, return current sorting. Otherwise set current sorting.
         *
         * @param {string} sorting New sorting
         * @returns {Object} Current sorting or `this`
         */
        this.sorting = function (sorting) {
            if (arguments.length == 2) {
                var sortArray = {};
                sortArray[sorting] = arguments[1];
                this.parameters({'sorting': sortArray});
                return this;
            }
            return angular.isDefined(sorting) ? this.parameters({'sorting': sorting}) : params.sorting;
        };

        /**
         * @ngdoc method
         * @name ngTable.factory:ngTableParams#isSortBy
         * @methodOf ngTable.factory:ngTableParams
         * @description Checks sort field
         *
         * @param {string} field     Field name
         * @param {string} direction Direction of sorting 'asc' or 'desc'
         * @returns {Array} Return true if field sorted by direction
         */
        this.isSortBy = function (field, direction) {
            return angular.isDefined(params.sorting[field]) && params.sorting[field] == direction;
        };

        /**
         * @ngdoc method
         * @name ngTable.factory:ngTableParams#orderBy
         * @methodOf ngTable.factory:ngTableParams
         * @description Return object of sorting parameters for angular filter
         *
         * @returns {Array} Array like: [ '-name', '+age' ]
         */
        this.orderBy = function () {
            var sorting = [];
            for (var column in params.sorting) {
                sorting.push((params.sorting[column] === "asc" ? "+" : "-") + column);
            }
            return sorting;
        };

        /**
         * @ngdoc method
         * @name ngTable.factory:ngTableParams#getData
         * @methodOf ngTable.factory:ngTableParams
         * @description Called when updated some of parameters for get new data
         *
         * @param {Object} $defer promise object
         * @param {Object} params New parameters
         */
        this.getData = function ($defer, params) {
            if (angular.isArray(this.data) && angular.isObject(params)) {
                $defer.resolve(this.data.slice((params.page() - 1) * params.count(), params.page() * params.count()));
            } else {
                $defer.resolve([]);
            }
        };

        /**
         * @ngdoc method
         * @name ngTable.factory:ngTableParams#getGroups
         * @methodOf ngTable.factory:ngTableParams
         * @description Return groups for table grouping
         */
        this.getGroups = function ($defer, column) {
            var defer = $q.defer();

            defer.promise.then(function (data) {
                var groups = {};
                angular.forEach(data, function (item) {
                    var groupName = angular.isFunction(column) ? column(item) : item[column];

                    groups[groupName] = groups[groupName] || {
                        data: []
                    };
                    groups[groupName]['value'] = groupName;
                    groups[groupName].data.push(item);
                });
                var result = [];
                for (var i in groups) {
                    result.push(groups[i]);
                }
                log('ngTable: refresh groups', result);
                $defer.resolve(result);
            });
            this.getData(defer, self);
        };

        /**
         * @ngdoc method
         * @name ngTable.factory:ngTableParams#generatePagesArray
         * @methodOf ngTable.factory:ngTableParams
         * @description Generate array of pages
         *
         * @param {boolean} currentPage which page must be active
         * @param {boolean} totalItems  Total quantity of items
         * @param {boolean} pageSize    Quantity of items on page
         * @returns {Array} Array of pages
         */
        this.generatePagesArray = function (currentPage, totalItems, pageSize) {
            var maxBlocks, maxPage, maxPivotPages, minPage, numPages, pages;
            maxBlocks = 11;
            pages = [];
            numPages = Math.ceil(totalItems / pageSize);
            if (numPages > 1) {
                pages.push({
                    type: 'prev',
                    number: Math.max(1, currentPage - 1),
                    active: currentPage > 1
                });
                pages.push({
                    type: 'first',
                    number: 1,
                    active: currentPage > 1
                });
                maxPivotPages = Math.round((maxBlocks - 5) / 2);
                minPage = Math.max(2, currentPage - maxPivotPages);
                maxPage = Math.min(numPages - 1, currentPage + maxPivotPages * 2 - (currentPage - minPage));
                minPage = Math.max(2, minPage - (maxPivotPages * 2 - (maxPage - minPage)));
                var i = minPage;
                while (i <= maxPage) {
                    if ((i === minPage && i !== 2) || (i === maxPage && i !== numPages - 1)) {
                        pages.push({
                            type: 'more',
                            active: false
                        });
                    } else {
                        pages.push({
                            type: 'page',
                            number: i,
                            active: currentPage !== i
                        });
                    }
                    i++;
                }
                pages.push({
                    type: 'last',
                    number: numPages,
                    active: currentPage !== numPages
                });
                pages.push({
                    type: 'next',
                    number: Math.min(numPages, currentPage + 1),
                    active: currentPage < numPages
                });
            }
            return pages;
        };

        /**
         * @ngdoc method
         * @name ngTable.factory:ngTableParams#url
         * @methodOf ngTable.factory:ngTableParams
         * @description Return groups for table grouping
         *
         * @param {boolean} asString flag indicates return array of string or object
         * @returns {Array} If asString = true will be return array of url string parameters else key-value object
         */
        this.url = function (asString) {
            asString = asString || false;
            var pairs = (asString ? [] : {});
            for (var key in params) {
                if (params.hasOwnProperty(key)) {
                    var item = params[key],
                        name = encodeURIComponent(key);
                    if (typeof item === "object") {
                        for (var subkey in item) {
                            if (!angular.isUndefined(item[subkey]) && item[subkey] !== "") {
                                var pname = name + "[" + encodeURIComponent(subkey) + "]";
                                if (asString) {
                                    pairs.push(pname + "=" + item[subkey]);
                                } else {
                                    pairs[pname] = item[subkey];
                                }
                            }
                        }
                    } else if (!angular.isFunction(item) && !angular.isUndefined(item) && item !== "") {
                        if (asString) {
                            pairs.push(name + "=" + encodeURIComponent(item));
                        } else {
                            pairs[name] = encodeURIComponent(item);
                        }
                    }
                }
            }
            return pairs;
        };

        /**
         * @ngdoc method
         * @name ngTable.factory:ngTableParams#reload
         * @methodOf ngTable.factory:ngTableParams
         * @description Reload table data
         */
        this.reload = function () {
            var $defer = $q.defer(),
                self = this;

            settings.$loading = true;
            if (settings.groupBy) {
                settings.getGroups($defer, settings.groupBy, this);
            } else {
                settings.getData($defer, this);
            }
            log('ngTable: reload data');
            $defer.promise.then(function (data) {
                settings.$loading = false;
                log('ngTable: current scope', settings.$scope);
                if (settings.groupBy) {
                    self.data = settings.$scope.$groups = data;
                } else {
                    self.data = settings.$scope.$data = data;
                }
                settings.$scope.pages = self.generatePagesArray(self.page(), self.total(), self.count());
                settings.$scope.$emit('ngTableAfterReloadData');
            });
        };

        this.reloadPages = function () {
            var self = this;
            settings.$scope.pages = self.generatePagesArray(self.page(), self.total(), self.count());
        };

        var params = this.$params = {
            page: 1,
            count: 1,
            filter: {},
            sorting: {},
            group: {},
            groupBy: null
        };
        var settings = {
            $scope: null, // set by ngTable controller
            $loading: false,
            data: null, //allows data to be set when table is initialized
            total: 0,
            defaultSort: 'desc',
            filterDelay: 750,
            counts: [10, 25, 50, 100],
            getGroups: this.getGroups,
            getData: this.getData
        };

        this.settings(baseSettings);
        this.parameters(baseParameters, true);
        return this;
    };
    return ngTableParams;
}]);

/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

/**
 * @ngdoc object
 * @name ngTable.directive:ngTable.ngTableController
 *
 * @description
 * Each {@link ngTable.directive:ngTable ngTable} directive creates an instance of `ngTableController`
 */
var ngTableController = ['$scope', 'ngTableParams', '$timeout', function ($scope, ngTableParams, $timeout) {
    $scope.$loading = false;

    if (!$scope.params) {
        $scope.params = new ngTableParams();
    }
    $scope.params.settings().$scope = $scope;

    var delayFilter = (function () {
        var timer = 0;
        return function (callback, ms) {
            $timeout.cancel(timer);
            timer = $timeout(callback, ms);
        };
    })();

    $scope.$watch('params.$params', function (newParams, oldParams) {
        $scope.params.settings().$scope = $scope;

        if (!angular.equals(newParams.filter, oldParams.filter)) {
            delayFilter(function () {
                $scope.params.$params.page = 1;
                $scope.params.reload();
            }, $scope.params.settings().filterDelay);
        } else {
            $scope.params.reload();
        }
    }, true);

    $scope.sortBy = function (column, event) {
        var parsedSortable = $scope.parse(column.sortable);
        if (!parsedSortable) {
            return;
        }
        var defaultSort = $scope.params.settings().defaultSort;
        var inverseSort = (defaultSort === 'asc' ? 'desc' : 'asc');
        var sorting = $scope.params.sorting() && $scope.params.sorting()[parsedSortable] && ($scope.params.sorting()[parsedSortable] === defaultSort);
        var sortingParams = (event.ctrlKey || event.metaKey) ? $scope.params.sorting() : {};
        sortingParams[parsedSortable] = (sorting ? inverseSort : defaultSort);
        $scope.params.parameters({
            sorting: sortingParams
        });
    };
}];
/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

/**
 * @ngdoc directive
 * @name ngTable.directive:ngTable
 * @restrict A
 *
 * @description
 * Directive that instantiates {@link ngTable.directive:ngTable.ngTableController ngTableController}.
 */
app.directive('ngTable', ['$compile', '$q', '$parse',
    function ($compile, $q, $parse) {
        'use strict';

        return {
            restrict: 'A',
            priority: 1001,
            scope: true,
            controller: ngTableController,
            compile: function (element) {
                var columns = [], i = 0, row = null;

                // custom header
                var thead = element.find('thead');

                // IE 8 fix :not(.ng-table-group) selector
                angular.forEach(angular.element(element.find('tr')), function (tr) {
                    tr = angular.element(tr);
                    if (!tr.hasClass('ng-table-group') && !row) {
                        row = tr;
                    }
                });
                if (!row) {
                    return;
                }
                angular.forEach(row.find('td'), function (item) {
                    var el = angular.element(item);
                    if (el.attr('ignore-cell') && 'true' === el.attr('ignore-cell')) {
                        return;
                    }
                    var parsedAttribute = function (attr, defaultValue) {
                        return function (scope) {
                            return $parse(el.attr('x-data-' + attr) || el.attr('data-' + attr) || el.attr(attr))(scope, {
                                $columns: columns
                            }) || defaultValue;
                        };
                    };

                    var parsedTitle = parsedAttribute('title', ' '),
                        headerTemplateURL = parsedAttribute('header', false),
                        filter = parsedAttribute('filter', false)(),
                        filterTemplateURL = false,
                        filterName = false;

                    if (filter && filter.$$name) {
                        filterName = filter.$$name;
                        delete filter.$$name;
                    }
                    if (filter && filter.templateURL) {
                        filterTemplateURL = filter.templateURL;
                        delete filter.templateURL;
                    }

                    el.attr('data-title-text', parsedTitle()); // this used in responsive table
                    columns.push({
                        id: i++,
                        title: parsedTitle,
                        sortable: parsedAttribute('sortable', false),
                        'class': el.attr('x-data-header-class') || el.attr('data-header-class') || el.attr('header-class'),
                        filter: filter,
                        filterTemplateURL: filterTemplateURL,
                        filterName: filterName,
                        headerTemplateURL: headerTemplateURL,
                        filterData: (el.attr("filter-data") ? el.attr("filter-data") : null),
                        show: (el.attr("ng-show") ? function (scope) {
                            return $parse(el.attr("ng-show"))(scope);
                        } : function () {
                            return true;
                        })
                    });
                });
                return function (scope, element, attrs) {
                    scope.$loading = false;
                    scope.$columns = columns;

                    scope.$watch(attrs.ngTable, (function (params) {
                        if (angular.isUndefined(params)) {
                            return;
                        }
                        scope.paramsModel = $parse(attrs.ngTable);
                        scope.params = params;
                    }), true);
                    scope.parse = function (text) {
                        return angular.isDefined(text) ? text(scope) : '';
                    };
                    if (attrs.showFilter) {
                        scope.$parent.$watch(attrs.showFilter, function (value) {
                            scope.show_filter = value;
                        });
                    }
                    angular.forEach(columns, function (column) {
                        var def;
                        if (!column.filterData) {
                            return;
                        }
                        def = $parse(column.filterData)(scope, {
                            $column: column
                        });
                        if (!(angular.isObject(def) && angular.isObject(def.promise))) {
                            throw new Error('Function ' + column.filterData + ' must be instance of $q.defer()');
                        }
                        delete column.filterData;
                        return def.promise.then(function (data) {
                            if (!angular.isArray(data)) {
                                data = [];
                            }
                            data.unshift({
                                title: '-',
                                id: ''
                            });
                            column.data = data;
                        });
                    });
                    if (!element.hasClass('ng-table')) {
                        scope.templates = {
                            header: (attrs.templateHeader ? attrs.templateHeader : 'ng-table/header.html'),
                            pagination: (attrs.templatePagination ? attrs.templatePagination : 'ng-table/pager.html')
                        };
                        var headerTemplate = thead.length > 0 ? thead : angular.element(document.createElement('thead')).attr('ng-include', 'templates.header');
                        var paginationTemplate = angular.element(document.createElement('div')).attr({
                            'ng-table-pagination': 'params',
                            'template-url': 'templates.pagination'
                        });

                        element.find('thead').remove();

                        element.addClass('ng-table')
                            .prepend(headerTemplate)
                            .after(paginationTemplate);

                        $compile(headerTemplate)(scope);
                        $compile(paginationTemplate)(scope);
                    }
                };
            }
        }
    }
]);

/**
 * ngTable: Table + Angular JS
 *
 * @author Vitalii Savchuk <esvit666@gmail.com>
 * @url https://github.com/esvit/ng-table/
 * @license New BSD License <http://creativecommons.org/licenses/BSD/>
 */

/**
 * @ngdoc directive
 * @name ngTable.directive:ngTablePagination
 * @restrict A
 */
app.directive('ngTablePagination', ['$compile',
    function ($compile) {
        'use strict';

        return {
            restrict: 'A',
            scope: {
                'params': '=ngTablePagination',
                'templateUrl': '='
            },
            replace: false,
            link: function (scope, element, attrs) {

                scope.params.settings().$scope.$on('ngTableAfterReloadData', function () {
                    scope.pages = scope.params.generatePagesArray(scope.params.page(), scope.params.total(), scope.params.count());
                }, true);

                scope.$watch('templateUrl', function(templateUrl) {
                    if (angular.isUndefined(templateUrl)) {
                        return;
                    }
                    var template = angular.element(document.createElement('div'))
                    template.attr({
                        'ng-include': 'templateUrl'
                    });
                    element.append(template);
                    $compile(template)(scope);
                });
            }
        };
    }
]);

angular.module('ngTable').run(['$templateCache', function ($templateCache) {
	$templateCache.put('ng-table/filters/select-multiple.html', '<select ng-options="data.id as data.title for data in column.data" multiple ng-multiple="true" ng-model="params.filter()[name]" ng-show="filter==\'select-multiple\'" class="filter filter-select-multiple form-control" name="{{column.filterName}}"> </select>');
	$templateCache.put('ng-table/filters/select.html', '<select ng-options="data.id as data.title for data in column.data" ng-model="params.filter()[name]" ng-show="filter==\'select\'" class="filter filter-select form-control" name="{{column.filterName}}"> </select>');
	$templateCache.put('ng-table/filters/text.html', '<input type="text" name="{{column.filterName}}" ng-model="params.filter()[name]" ng-if="filter==\'text\'" class="input-filter form-control"/>');
	$templateCache.put('ng-table/header.html', '<tr> <th ng-repeat="column in $columns" ng-class="{ \'sortable\': parse(column.sortable), \'sort-asc\': params.sorting()[parse(column.sortable)]==\'asc\', \'sort-desc\': params.sorting()[parse(column.sortable)]==\'desc\' }" ng-click="sortBy(column, $event)" ng-show="column.show(this)" ng-init="template=column.headerTemplateURL(this)" class="header {{column.class}}"> <div ng-if="!template" ng-show="!template" ng-bind="parse(column.title)"></div> <div ng-if="template" ng-show="template"><div ng-include="template"></div></div> </th> </tr> <tr ng-show="show_filter" class="ng-table-filters"> <th ng-repeat="column in $columns" ng-show="column.show(this)" class="filter"> <div ng-repeat="(name, filter) in column.filter"> <div ng-if="column.filterTemplateURL" ng-show="column.filterTemplateURL"> <div ng-include="column.filterTemplateURL"></div> </div> <div ng-if="!column.filterTemplateURL" ng-show="!column.filterTemplateURL"> <div ng-include="\'ng-table/filters/\' + filter + \'.html\'"></div> </div> </div> </th> </tr>');
	$templateCache.put('ng-table/pager.html', '<div class="ng-cloak ng-table-pager"> <div ng-if="params.settings().counts.length" class="ng-table-counts btn-group pull-right"> <button ng-repeat="count in params.settings().counts" type="button" ng-class="{\'active\':params.count()==count}" ng-click="params.count(count)" class="btn btn-default"> <span ng-bind="count"></span> </button> </div> <ul class="pagination ng-table-pagination"> <li ng-class="{\'disabled\': !page.active}" ng-repeat="page in pages" ng-switch="page.type"> <a ng-switch-when="prev" ng-click="params.page(page.number)" href="">&laquo;</a> <a ng-switch-when="first" ng-click="params.page(page.number)" href=""><span ng-bind="page.number"></span></a> <a ng-switch-when="page" ng-click="params.page(page.number)" href=""><span ng-bind="page.number"></span></a> <a ng-switch-when="more" ng-click="params.page(page.number)" href="">&#8230;</a> <a ng-switch-when="last" ng-click="params.page(page.number)" href=""><span ng-bind="page.number"></span></a> <a ng-switch-when="next" ng-click="params.page(page.number)" href="">&raquo;</a> </li> </ul> </div> ');
}]);
    return app;
}));
// shim layer with setTimeout fallback
// credit Erik Möller and http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
'use strict';

(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame){
        window.requestAnimationFrame = function(callback) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }

    if (!window.cancelAnimationFrame){
        window.cancelAnimationFrame = function(id) {
            window.clearTimeout(id);
        };
    }

}());

angular.module('angular-svg-round-progress', []);

'use strict';

angular.module('angular-svg-round-progress').constant('roundProgressConfig', {
    max:            50,
    semi:           false,
    rounded:        false,
    clockwise:      true,
    radius:         100,
    color:          "#45ccce",
    bgcolor:        "#eaeaea",
    stroke:         15,
    iterations:     50,
    animation:      "easeOutCubic"
});

'use strict';

angular.module('angular-svg-round-progress').service('roundProgressService', [function(){
    var service = {};

    // credits to http://modernizr.com/ for the feature test
    service.isSupported = !!(document.createElementNS && document.createElementNS('http://www.w3.org/2000/svg', "svg").createSVGRect);

    // utility function
    var polarToCartesian = function(centerX, centerY, radius, angleInDegrees) {
        var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    };

    // credit to http://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
    service.updateState = function(val, total, R, ring, size, isSemicircle) {

        if(!size) return ring;

        var value       = val >= total ? total - 0.00001 : val,
            type        = isSemicircle ? 180 : 359.9999,
            perc        = total === 0 ? 0 : (value / total) * type,
            x           = size/2,
            start       = polarToCartesian(x, x, R, perc), // in this case x and y are the same
            end         = polarToCartesian(x, x, R, 0),
            arcSweep    = (perc <= 180 ? "0" : "1"),
            d = [
                "M", start.x, start.y,
                "A", R, R, 0, arcSweep, 0, end.x, end.y
            ].join(" ");

        return ring.attr('d', d);
    };

    // Easing functions by Robert Penner
    // Source: http://www.robertpenner.com/easing/
    // License: http://www.robertpenner.com/easing_terms_of_use.html

    service.animations = {

        // t: Current iteration
        // b: Start value
        // c: Change in value
        // d: Total iterations
        // jshint eqeqeq: false, -W041: true

        linearEase: function(t, b, c, d) {
            return c * t / d + b;
        },

        easeInQuad: function (t, b, c, d) {
            return c*(t/=d)*t + b;
        },

        easeOutQuad: function (t, b, c, d) {
            return -c *(t/=d)*(t-2) + b;
        },

        easeInOutQuad: function (t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t + b;
            return -c/2 * ((--t)*(t-2) - 1) + b;
        },

        easeInCubic: function (t, b, c, d) {
            return c*(t/=d)*t*t + b;
        },

        easeOutCubic: function (t, b, c, d) {
            return c*((t=t/d-1)*t*t + 1) + b;
        },

        easeInOutCubic: function (t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        },

        easeInQuart: function (t, b, c, d) {
            return c*(t/=d)*t*t*t + b;
        },

        easeOutQuart: function (t, b, c, d) {
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },

        easeInOutQuart: function (t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        },

        easeInQuint: function (t, b, c, d) {
            return c*(t/=d)*t*t*t*t + b;
        },

        easeOutQuint: function (t, b, c, d) {
            return c*((t=t/d-1)*t*t*t*t + 1) + b;
        },

        easeInOutQuint: function (t, b, c, d) {
            if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
            return c/2*((t-=2)*t*t*t*t + 2) + b;
        },

        easeInSine: function (t, b, c, d) {
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },

        easeOutSine: function (t, b, c, d) {
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },

        easeInOutSine: function (t, b, c, d) {
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        },

        easeInExpo: function (t, b, c, d) {
            return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },

        easeOutExpo: function (t, b, c, d) {
            return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },

        easeInOutExpo: function (t, b, c, d) {
            if (t==0) return b;
            if (t==d) return b+c;
            if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        },

        easeInCirc: function (t, b, c, d) {
            return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
        },

        easeOutCirc: function (t, b, c, d) {
            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        },

        easeInOutCirc: function (t, b, c, d) {
            if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
            return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
        },

        easeInElastic: function (t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*0.3;
            if (a < Math.abs(c)) { a=c; s=p/4; }
            else s = p/(2*Math.PI) * Math.asin (c/a);
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },

        easeOutElastic: function (t, b, c, d) {
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*0.3;
            if (a < Math.abs(c)) { a=c; s=p/4; }
            else s = p/(2*Math.PI) * Math.asin (c/a);
            return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
        },

        easeInOutElastic: function (t, b, c, d) {
            // jshint eqeqeq: false, -W041: true
            var s=1.70158;var p=0;var a=c;
            if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(0.3*1.5);
            if (a < Math.abs(c)) { a=c; s=p/4; }
            else s = p/(2*Math.PI) * Math.asin (c/a);
            if (t < 1) return -0.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
        },

        easeInBack: function (t, b, c, d, s) {
            // jshint eqeqeq: false, -W041: true
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },

        easeOutBack: function (t, b, c, d, s) {
            // jshint eqeqeq: false, -W041: true
            if (s == undefined) s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },

        easeInOutBack: function (t, b, c, d, s) {
            // jshint eqeqeq: false, -W041: true
            if (s == undefined) s = 1.70158;
            if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        },

        easeInBounce: function (t, b, c, d) {
            return c - service.animations.easeOutBounce (d-t, 0, c, d) + b;
        },

        easeOutBounce: function (t, b, c, d) {
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
            }
        },

        easeInOutBounce: function (t, b, c, d) {
            if (t < d/2) return service.animations.easeInBounce (t*2, 0, c, d) * 0.5 + b;
            return service.animations.easeOutBounce (t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
        }
    };

    return service;
}]);

'use strict';

angular.module('angular-svg-round-progress')
    .directive('roundProgress', ['$window', 'roundProgressService', 'roundProgressConfig', function($window, service, roundProgressConfig){

            var base = {
                restrict: "EA",
                replace: true
            };

            if(!service.isSupported){
                return angular.extend(base, {
                    // placeholder element to keep the structure
                    template: '<div class="round-progress"></div>'
                });
            }

            return angular.extend(base, {
                scope:{
                    current:        "=",
                    max:            "=",
                    semi:           "=",
                    rounded:        "=",
                    clockwise:      "=",
                    radius:         "@",
                    color:          "@",
                    bgcolor:        "@",
                    stroke:         "@",
                    iterations:     "@",
                    animation:      "@"
                },
                link: function (scope, element) {
                    var ring        = element.find('path'),
                        background  = element.find('circle'),
                        options     = angular.copy(roundProgressConfig),
                        resetValue;

                    var renderCircle = function(){
                        var isSemicircle     = options.semi;
                        var radius           = parseInt(options.radius) || 0;
                        var stroke           = parseInt(options.stroke);
                        var diameter         = radius*2;
                        var backgroundSize   = radius - (stroke/2);

                        element.css({
                            "width":        diameter + "px",
                            "height":       (isSemicircle ? radius : diameter) + "px",
                            "overflow":     "hidden" // on some browsers the background overflows, if in semicircle mode
                        });

                        ring.css({
                            "stroke":           options.color,
                            "stroke-width":     stroke,
                            "stroke-linecap":   options.rounded ? "round": "butt"
                        });

                        if(isSemicircle){
                            ring.attr("transform", options.clockwise ? "translate("+ 0 +","+ diameter +") rotate(-90)" : "translate("+ diameter +", "+ diameter +") rotate(90) scale(-1, 1)");
                        }else{
                            ring.attr("transform", options.clockwise ? "" : "scale(-1, 1) translate("+ (-diameter) +" 0)");
                        }

                        background.attr({
                            "cx":           radius,
                            "cy":           radius,
                            "r":            backgroundSize >= 0 ? backgroundSize : 0
                        }).css({
                            "stroke":       options.bgcolor,
                            "stroke-width": stroke
                        });
                    };

                    var renderState = function (newValue, oldValue){
                        if(!angular.isDefined(newValue)){
                            return false;
                        }

                        if(newValue < 0){
                            resetValue = oldValue;
                            return scope.current = 0;
                        }

                        if(newValue > options.max){
                            resetValue = oldValue;
                            return scope.current = options.max;
                        }

                        var max                 = options.max || 0;
                        var easingAnimation     = service.animations[options.animation];
                        var start               = oldValue === newValue ? 0 : (oldValue || 0); // fixes the initial animation
                        var val                 = newValue - start;
                        var currentIteration    = 0;
                        var totalIterations     = parseInt(options.iterations);
                        var radius              = options.radius;
                        var circleSize          = radius - (options.stroke/2);
                        var elementSize         = radius*2;

                        if(angular.isNumber(resetValue)){
                            // the reset value fixes problems with animation, caused when limiting the scope.current
                            start       = resetValue;
                            val         = newValue - resetValue;
                            resetValue  = null;
                        }

                        (function animation(){
                            service.updateState(
                                easingAnimation(currentIteration, start, val, totalIterations),
                                max,
                                circleSize,
                                ring,
                                elementSize,
                                options.semi);

                            if(currentIteration < totalIterations){
                                $window.requestAnimationFrame(animation);
                                currentIteration++;
                            }
                        })();
                    };

                    scope.$watchCollection('[current, max, semi, rounded, clockwise, radius, color, bgcolor, stroke, iterations]', function(newValue, oldValue, scope){

                        // pretty much the same as angular.extend,
                        // but this skips undefined values and internal angular keys
                        angular.forEach(scope, function(value, key){
                            // note the scope !== value is because `this` is part of the scope
                            if(key.indexOf('$') && scope !== value && angular.isDefined(value)){
                                options[key] = value;
                            }
                        });

                        renderCircle();
                        renderState(newValue[0], oldValue[0]);
                    });
                },
                template:[
                    '<svg class="round-progress" xmlns="http://www.w3.org/2000/svg">',
                        '<circle fill="none"/>',
                        '<path fill="none"/>',
                    '</svg>'
                ].join('\n')
            });

        }]);

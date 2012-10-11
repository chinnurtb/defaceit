(function(){function e(h,a,b){if(h===a)return 0!==h||1/h==1/a;if(null==h||null==a)return h===a;h._chain&&(h=h._wrapped);a._chain&&(a=a._wrapped);if(h.isEqual&&d.isFunction(h.isEqual))return h.isEqual(a);if(a.isEqual&&d.isFunction(a.isEqual))return a.isEqual(h);var c=o.call(h);if(c!=o.call(a))return!1;switch(c){case "[object String]":return h==""+a;case "[object Number]":return h!=+h?a!=+a:0==h?1/h==1/a:h==+a;case "[object Date]":case "[object Boolean]":return+h==+a;case "[object RegExp]":return h.source==
a.source&&h.global==a.global&&h.multiline==a.multiline&&h.ignoreCase==a.ignoreCase}if("object"!=typeof h||"object"!=typeof a)return!1;for(var k=b.length;k--;)if(b[k]==h)return!0;b.push(h);var k=0,m=!0;if("[object Array]"==c){if(k=h.length,m=k==a.length)for(;k--&&(m=k in h==k in a&&e(h[k],a[k],b)););}else{if("constructor"in h!="constructor"in a||h.constructor!=a.constructor)return!1;for(var f in h)if(d.has(h,f)&&(k++,!(m=d.has(a,f)&&e(h[f],a[f],b))))break;if(m){for(f in a)if(d.has(a,f)&&!k--)break;
m=!k}}b.pop();return m}var f=this,j=f._,n={},i=Array.prototype,g=Object.prototype,l=i.slice,z=i.unshift,o=g.toString,s=g.hasOwnProperty,u=i.forEach,A=i.map,C=i.reduce,D=i.reduceRight,E=i.filter,q=i.every,v=i.some,w=i.indexOf,B=i.lastIndexOf,g=Array.isArray,H=Object.keys,x=Function.prototype.bind,d=function(a){return new t(a)};"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=d),exports._=d):f._=d;d.VERSION="1.3.3";var p=d.each=d.forEach=function(a,
b,c){if(null!=a)if(u&&a.forEach===u)a.forEach(b,c);else if(a.length===+a.length)for(var e=0,k=a.length;e<k&&!(e in a&&b.call(c,a[e],e,a)===n);e++);else for(e in a)if(d.has(a,e)&&b.call(c,a[e],e,a)===n)break};d.map=d.collect=function(a,b,d){var c=[];if(null==a)return c;if(A&&a.map===A)return a.map(b,d);p(a,function(a,h,e){c[c.length]=b.call(d,a,h,e)});a.length===+a.length&&(c.length=a.length);return c};d.reduce=d.foldl=d.inject=function(a,b,c,e){var k=2<arguments.length;null==a&&(a=[]);if(C&&a.reduce===
C)return e&&(b=d.bind(b,e)),k?a.reduce(b,c):a.reduce(b);p(a,function(a,h,d){k?c=b.call(e,c,a,h,d):(c=a,k=!0)});if(!k)throw new TypeError("Reduce of empty array with no initial value");return c};d.reduceRight=d.foldr=function(a,b,c,e){var k=2<arguments.length;null==a&&(a=[]);if(D&&a.reduceRight===D)return e&&(b=d.bind(b,e)),k?a.reduceRight(b,c):a.reduceRight(b);var m=d.toArray(a).reverse();e&&!k&&(b=d.bind(b,e));return k?d.reduce(m,b,c,e):d.reduce(m,b)};d.find=d.detect=function(a,b,c){var d;F(a,function(a,
h,e){if(b.call(c,a,h,e))return d=a,!0});return d};d.filter=d.select=function(a,b,c){var d=[];if(null==a)return d;if(E&&a.filter===E)return a.filter(b,c);p(a,function(a,h,e){b.call(c,a,h,e)&&(d[d.length]=a)});return d};d.reject=function(a,b,d){var c=[];if(null==a)return c;p(a,function(a,h,e){b.call(d,a,h,e)||(c[c.length]=a)});return c};d.every=d.all=function(a,b,c){var d=!0;if(null==a)return d;if(q&&a.every===q)return a.every(b,c);p(a,function(a,h,e){if(!(d=d&&b.call(c,a,h,e)))return n});return!!d};
var F=d.some=d.any=function(a,b,c){b||(b=d.identity);var e=!1;if(null==a)return e;if(v&&a.some===v)return a.some(b,c);p(a,function(a,h,d){if(e||(e=b.call(c,a,h,d)))return n});return!!e};d.include=d.contains=function(a,b){return null==a?!1:w&&a.indexOf===w?-1!=a.indexOf(b):F(a,function(a){return a===b})};d.invoke=function(a,b){var c=l.call(arguments,2);return d.map(a,function(a){return(d.isFunction(b)?b||a:a[b]).apply(a,c)})};d.pluck=function(a,b){return d.map(a,function(a){return a[b]})};d.max=function(a,
b,c){if(!b&&d.isArray(a)&&a[0]===+a[0])return Math.max.apply(Math,a);if(!b&&d.isEmpty(a))return-Infinity;var e={computed:-Infinity};p(a,function(a,h,d){h=b?b.call(c,a,h,d):a;h>=e.computed&&(e={value:a,computed:h})});return e.value};d.min=function(a,b,c){if(!b&&d.isArray(a)&&a[0]===+a[0])return Math.min.apply(Math,a);if(!b&&d.isEmpty(a))return Infinity;var e={computed:Infinity};p(a,function(a,h,d){h=b?b.call(c,a,h,d):a;h<e.computed&&(e={value:a,computed:h})});return e.value};d.shuffle=function(a){var b=
[],c;p(a,function(a,h){c=Math.floor(Math.random()*(h+1));b[h]=b[c];b[c]=a});return b};d.sortBy=function(a,b,c){var e=d.isFunction(b)?b:function(a){return a[b]};return d.pluck(d.map(a,function(a,b,h){return{value:a,criteria:e.call(c,a,b,h)}}).sort(function(a,b){var h=a.criteria,c=b.criteria;return void 0===h?1:void 0===c?-1:h<c?-1:h>c?1:0}),"value")};d.groupBy=function(a,b){var c={},e=d.isFunction(b)?b:function(a){return a[b]};p(a,function(a,b){var h=e(a,b);(c[h]||(c[h]=[])).push(a)});return c};d.sortedIndex=
function(a,b,c){c||(c=d.identity);for(var e=0,k=a.length;e<k;){var m=e+k>>1;c(a[m])<c(b)?e=m+1:k=m}return e};d.toArray=function(a){return!a?[]:d.isArray(a)||d.isArguments(a)?l.call(a):a.toArray&&d.isFunction(a.toArray)?a.toArray():d.values(a)};d.size=function(a){return d.isArray(a)?a.length:d.keys(a).length};d.first=d.head=d.take=function(a,b,c){return null!=b&&!c?l.call(a,0,b):a[0]};d.initial=function(a,b,c){return l.call(a,0,a.length-(null==b||c?1:b))};d.last=function(a,b,c){return null!=b&&!c?
l.call(a,Math.max(a.length-b,0)):a[a.length-1]};d.rest=d.tail=function(a,b,c){return l.call(a,null==b||c?1:b)};d.compact=function(a){return d.filter(a,function(a){return!!a})};d.flatten=function(a,b){return d.reduce(a,function(a,h){if(d.isArray(h))return a.concat(b?h:d.flatten(h));a[a.length]=h;return a},[])};d.without=function(a){return d.difference(a,l.call(arguments,1))};d.uniq=d.unique=function(a,b,c){var c=c?d.map(a,c):a,e=[];3>a.length&&(b=!0);d.reduce(c,function(c,k,m){if(b?d.last(c)!==k||
!c.length:!d.include(c,k))c.push(k),e.push(a[m]);return c},[]);return e};d.union=function(){return d.uniq(d.flatten(arguments,!0))};d.intersection=d.intersect=function(a){var b=l.call(arguments,1);return d.filter(d.uniq(a),function(a){return d.every(b,function(b){return 0<=d.indexOf(b,a)})})};d.difference=function(a){var b=d.flatten(l.call(arguments,1),!0);return d.filter(a,function(a){return!d.include(b,a)})};d.zip=function(){for(var a=l.call(arguments),b=d.max(d.pluck(a,"length")),c=Array(b),e=
0;e<b;e++)c[e]=d.pluck(a,""+e);return c};d.indexOf=function(a,b,c){if(null==a)return-1;var e;if(c)return c=d.sortedIndex(a,b),a[c]===b?c:-1;if(w&&a.indexOf===w)return a.indexOf(b);c=0;for(e=a.length;c<e;c++)if(c in a&&a[c]===b)return c;return-1};d.lastIndexOf=function(a,b){if(null==a)return-1;if(B&&a.lastIndexOf===B)return a.lastIndexOf(b);for(var c=a.length;c--;)if(c in a&&a[c]===b)return c;return-1};d.range=function(a,b,c){1>=arguments.length&&(b=a||0,a=0);for(var c=arguments[2]||1,d=Math.max(Math.ceil((b-
a)/c),0),e=0,k=Array(d);e<d;)k[e++]=a,a+=c;return k};var r=function(){};d.bind=function(a,b){var c,e;if(a.bind===x&&x)return x.apply(a,l.call(arguments,1));if(!d.isFunction(a))throw new TypeError;e=l.call(arguments,2);return c=function(){if(!(this instanceof c))return a.apply(b,e.concat(l.call(arguments)));r.prototype=a.prototype;var d=new r,k=a.apply(d,e.concat(l.call(arguments)));return Object(k)===k?k:d}};d.bindAll=function(a){var b=l.call(arguments,1);0==b.length&&(b=d.functions(a));p(b,function(b){a[b]=
d.bind(a[b],a)});return a};d.memoize=function(a,b){var c={};b||(b=d.identity);return function(){var e=b.apply(this,arguments);return d.has(c,e)?c[e]:c[e]=a.apply(this,arguments)}};d.delay=function(a,b){var c=l.call(arguments,2);return setTimeout(function(){return a.apply(null,c)},b)};d.defer=function(a){return d.delay.apply(d,[a,1].concat(l.call(arguments,1)))};d.throttle=function(a,b){var c,e,k,m,f,g,y=d.debounce(function(){f=m=!1},b);return function(){c=this;e=arguments;k||(k=setTimeout(function(){k=
null;f&&a.apply(c,e);y()},b));m?f=!0:g=a.apply(c,e);y();m=!0;return g}};d.debounce=function(a,b,c){var d;return function(){var e=this,k=arguments;c&&!d&&a.apply(e,k);clearTimeout(d);d=setTimeout(function(){d=null;c||a.apply(e,k)},b)}};d.once=function(a){var b=!1,c;return function(){if(b)return c;b=!0;return c=a.apply(this,arguments)}};d.wrap=function(a,b){return function(){var c=[a].concat(l.call(arguments,0));return b.apply(this,c)}};d.compose=function(){var a=arguments;return function(){for(var b=
arguments,c=a.length-1;0<=c;c--)b=[a[c].apply(this,b)];return b[0]}};d.after=function(a,b){return 0>=a?b():function(){if(1>--a)return b.apply(this,arguments)}};d.keys=H||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var b=[],c;for(c in a)d.has(a,c)&&(b[b.length]=c);return b};d.values=function(a){return d.map(a,d.identity)};d.functions=d.methods=function(a){var b=[],c;for(c in a)d.isFunction(a[c])&&b.push(c);return b.sort()};d.extend=function(a){p(l.call(arguments,1),function(b){for(var c in b)a[c]=
b[c]});return a};d.pick=function(a){var b={};p(d.flatten(l.call(arguments,1)),function(c){c in a&&(b[c]=a[c])});return b};d.defaults=function(a){p(l.call(arguments,1),function(b){for(var c in b)null==a[c]&&(a[c]=b[c])});return a};d.clone=function(a){return!d.isObject(a)?a:d.isArray(a)?a.slice():d.extend({},a)};d.tap=function(a,b){b(a);return a};d.isEqual=function(a,b){return e(a,b,[])};d.isEmpty=function(a){if(null==a)return!0;if(d.isArray(a)||d.isString(a))return 0===a.length;for(var b in a)if(d.has(a,
b))return!1;return!0};d.isElement=function(a){return!!(a&&1==a.nodeType)};d.isArray=g||function(a){return"[object Array]"==o.call(a)};d.isObject=function(a){return a===Object(a)};d.isArguments=function(a){return"[object Arguments]"==o.call(a)};d.isArguments(arguments)||(d.isArguments=function(a){return!(!a||!d.has(a,"callee"))});d.isFunction=function(a){return"[object Function]"==o.call(a)};d.isString=function(a){return"[object String]"==o.call(a)};d.isNumber=function(a){return"[object Number]"==
o.call(a)};d.isFinite=function(a){return d.isNumber(a)&&isFinite(a)};d.isNaN=function(a){return a!==a};d.isBoolean=function(a){return!0===a||!1===a||"[object Boolean]"==o.call(a)};d.isDate=function(a){return"[object Date]"==o.call(a)};d.isRegExp=function(a){return"[object RegExp]"==o.call(a)};d.isNull=function(a){return null===a};d.isUndefined=function(a){return void 0===a};d.has=function(a,b){return s.call(a,b)};d.noConflict=function(){f._=j;return this};d.identity=function(a){return a};d.times=
function(a,b,c){for(var d=0;d<a;d++)b.call(c,d)};d.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};d.result=function(a,b){if(null==a)return null;var c=a[b];return d.isFunction(c)?c.call(a):c};d.mixin=function(a){p(d.functions(a),function(b){J(b,d[b]=a[b])})};var G=0;d.uniqueId=function(a){var b=G++;return a?a+b:b};d.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,
escape:/<%-([\s\S]+?)%>/g};var a=/.^/,b={"\\":"\\","'":"'",r:"\r",n:"\n",t:"\t",u2028:"\u2028",u2029:"\u2029"},c;for(c in b)b[b[c]]=c;var k=/\\|'|\r|\n|\t|\u2028|\u2029/g,m=/\\(\\|'|r|n|t|u2028|u2029)/g,y=function(a){return a.replace(m,function(a,c){return b[c]})};d.template=function(c,e,m){m=d.defaults(m||{},d.templateSettings);c="__p+='"+c.replace(k,function(a){return"\\"+b[a]}).replace(m.escape||a,function(a,b){return"'+\n_.escape("+y(b)+")+\n'"}).replace(m.interpolate||a,function(a,b){return"'+\n("+
y(b)+")+\n'"}).replace(m.evaluate||a,function(a,b){return"';\n"+y(b)+"\n;__p+='"})+"';\n";m.variable||(c="with(obj||{}){\n"+c+"}\n");var c="var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n"+c+"return __p;\n",f=new Function(m.variable||"obj","_",c);if(e)return f(e,d);e=function(a){return f.call(this,a,d)};e.source="function("+(m.variable||"obj")+"){\n"+c+"}";return e};d.chain=function(a){return d(a).chain()};var t=function(a){this._wrapped=a};d.prototype=t.prototype;
var I=function(a,b){return b?d(a).chain():a},J=function(a,b){t.prototype[a]=function(){var a=l.call(arguments);z.call(a,this._wrapped);return I(b.apply(d,a),this._chain)}};d.mixin(d);p("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){var b=i[a];t.prototype[a]=function(){var c=this._wrapped;b.apply(c,arguments);var d=c.length;(a=="shift"||a=="splice")&&d===0&&delete c[0];return I(c,this._chain)}});p(["concat","join","slice"],function(a){var b=i[a];t.prototype[a]=function(){return I(b.apply(this._wrapped,
arguments),this._chain)}});t.prototype.chain=function(){this._chain=!0;return this};t.prototype.value=function(){return this._wrapped}}).call(this);(function(){var e=this,f=e.Backbone,j=Array.prototype.slice,n=Array.prototype.splice,i;i="undefined"!==typeof exports?exports:e.Backbone={};i.VERSION="0.9.2";var g=e._;!g&&"undefined"!==typeof require&&(g=require("underscore"));var l=e.jQuery||e.Zepto||e.ender;i.setDomLibrary=function(a){l=a};i.noConflict=function(){e.Backbone=f;return this};i.emulateHTTP=!1;i.emulateJSON=!1;var z=/\s+/,o=i.Events={on:function(a,b,c){var d,e,f,g,i;if(!b)return this;a=a.split(z);for(d=this._callbacks||(this._callbacks=
{});e=a.shift();)f=(i=d[e])?i.tail:{},f.next=g={},f.context=c,f.callback=b,d[e]={tail:g,next:i?i.next:f};return this},off:function(a,b,c){var d,e,f,i,j,l;if(e=this._callbacks){if(!a&&!b&&!c)return delete this._callbacks,this;for(a=a?a.split(z):g.keys(e);d=a.shift();)if(f=e[d],delete e[d],f&&(b||c))for(i=f.tail;(f=f.next)!==i;)if(j=f.callback,l=f.context,b&&j!==b||c&&l!==c)this.on(d,j,l);return this}},trigger:function(a){var b,c,d,e,f,g;if(!(d=this._callbacks))return this;f=d.all;a=a.split(z);for(g=
j.call(arguments,1);b=a.shift();){if(c=d[b])for(e=c.tail;(c=c.next)!==e;)c.callback.apply(c.context||this,g);if(c=f){e=c.tail;for(b=[b].concat(g);(c=c.next)!==e;)c.callback.apply(c.context||this,b)}}return this}};o.bind=o.on;o.unbind=o.off;var s=i.Model=function(a,b){var c;a||(a={});b&&b.parse&&(a=this.parse(a));if(c=r(this,"defaults"))a=g.extend({},c,a);b&&b.collection&&(this.collection=b.collection);this.attributes={};this._escapedAttributes={};this.cid=g.uniqueId("c");this.changed={};this._silent=
{};this._pending={};this.set(a,{silent:!0});this.changed={};this._silent={};this._pending={};this._previousAttributes=g.clone(this.attributes);this.initialize.apply(this,arguments)};g.extend(s.prototype,o,{changed:null,_silent:null,_pending:null,idAttribute:"id",initialize:function(){},toJSON:function(){return g.clone(this.attributes)},get:function(a){return this.attributes[a]},escape:function(a){var b;if(b=this._escapedAttributes[a])return b;b=this.get(a);return this._escapedAttributes[a]=g.escape(null==
b?"":""+b)},has:function(a){return null!=this.get(a)},set:function(a,b,c){var d,e;g.isObject(a)||null==a?(d=a,c=b):(d={},d[a]=b);c||(c={});if(!d)return this;d instanceof s&&(d=d.attributes);if(c.unset)for(e in d)d[e]=void 0;if(!this._validate(d,c))return!1;this.idAttribute in d&&(this.id=d[this.idAttribute]);var b=c.changes={},f=this.attributes,i=this._escapedAttributes,j=this._previousAttributes||{};for(e in d){a=d[e];if(!g.isEqual(f[e],a)||c.unset&&g.has(f,e))delete i[e],(c.silent?this._silent:
b)[e]=!0;c.unset?delete f[e]:f[e]=a;!g.isEqual(j[e],a)||g.has(f,e)!=g.has(j,e)?(this.changed[e]=a,c.silent||(this._pending[e]=!0)):(delete this.changed[e],delete this._pending[e])}c.silent||this.change(c);return this},unset:function(a,b){(b||(b={})).unset=!0;return this.set(a,null,b)},clear:function(a){(a||(a={})).unset=!0;return this.set(g.clone(this.attributes),a)},fetch:function(a){var a=a?g.clone(a):{},b=this,c=a.success;a.success=function(e,d,f){if(!b.set(b.parse(e,f),a))return!1;c&&c(b,e)};
a.error=i.wrapError(a.error,b,a);return(this.sync||i.sync).call(this,"read",this,a)},save:function(a,b,c){var e,d;g.isObject(a)||null==a?(e=a,c=b):(e={},e[a]=b);c=c?g.clone(c):{};if(c.wait){if(!this._validate(e,c))return!1;d=g.clone(this.attributes)}a=g.extend({},c,{silent:!0});if(e&&!this.set(e,c.wait?a:c))return!1;var f=this,j=c.success;c.success=function(a,b,d){b=f.parse(a,d);c.wait&&(delete c.wait,b=g.extend(e||{},b));if(!f.set(b,c))return!1;j?j(f,a):f.trigger("sync",f,a,c)};c.error=i.wrapError(c.error,
f,c);b=this.isNew()?"create":"update";b=(this.sync||i.sync).call(this,b,this,c);c.wait&&this.set(d,a);return b},destroy:function(a){var a=a?g.clone(a):{},b=this,c=a.success,e=function(){b.trigger("destroy",b,b.collection,a)};if(this.isNew())return e(),!1;a.success=function(d){a.wait&&e();c?c(b,d):b.trigger("sync",b,d,a)};a.error=i.wrapError(a.error,b,a);var d=(this.sync||i.sync).call(this,"delete",this,a);a.wait||e();return d},url:function(){var a=r(this,"urlRoot")||r(this.collection,"url")||G();
return this.isNew()?a:a+("/"==a.charAt(a.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(a){return a},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},change:function(a){a||(a={});var b=this._changing;this._changing=!0;for(var c in this._silent)this._pending[c]=!0;var e=g.extend({},a.changes,this._silent);this._silent={};for(c in e)this.trigger("change:"+c,this,this.get(c),a);if(b)return this;for(;!g.isEmpty(this._pending);){this._pending=
{};this.trigger("change",this,a);for(c in this.changed)!this._pending[c]&&!this._silent[c]&&delete this.changed[c];this._previousAttributes=g.clone(this.attributes)}this._changing=!1;return this},hasChanged:function(a){return!arguments.length?!g.isEmpty(this.changed):g.has(this.changed,a)},changedAttributes:function(a){if(!a)return this.hasChanged()?g.clone(this.changed):!1;var b,c=!1,e=this._previousAttributes,d;for(d in a)if(!g.isEqual(e[d],b=a[d]))(c||(c={}))[d]=b;return c},previous:function(a){return!arguments.length||
!this._previousAttributes?null:this._previousAttributes[a]},previousAttributes:function(){return g.clone(this._previousAttributes)},isValid:function(){return!this.validate(this.attributes)},_validate:function(a,b){if(b.silent||!this.validate)return!0;var a=g.extend({},this.attributes,a),c=this.validate(a,b);if(!c)return!0;b&&b.error?b.error(this,c,b):this.trigger("error",this,c,b);return!1}});var u=i.Collection=function(a,b){b||(b={});b.model&&(this.model=b.model);b.comparator&&(this.comparator=b.comparator);
this._reset();this.initialize.apply(this,arguments);a&&this.reset(a,{silent:!0,parse:b.parse})};g.extend(u.prototype,o,{model:s,initialize:function(){},toJSON:function(a){return this.map(function(b){return b.toJSON(a)})},add:function(a,b){var c,e,d,f,i,j={},l={},h=[];b||(b={});a=g.isArray(a)?a.slice():[a];c=0;for(e=a.length;c<e;c++){if(!(d=a[c]=this._prepareModel(a[c],b)))throw Error("Can't add an invalid model to a collection");f=d.cid;i=d.id;j[f]||this._byCid[f]||null!=i&&(l[i]||this._byId[i])?
h.push(c):j[f]=l[i]=d}for(c=h.length;c--;)a.splice(h[c],1);c=0;for(e=a.length;c<e;c++)(d=a[c]).on("all",this._onModelEvent,this),this._byCid[d.cid]=d,null!=d.id&&(this._byId[d.id]=d);this.length+=e;n.apply(this.models,[null!=b.at?b.at:this.models.length,0].concat(a));this.comparator&&this.sort({silent:!0});if(b.silent)return this;c=0;for(e=this.models.length;c<e;c++)if(j[(d=this.models[c]).cid])b.index=c,d.trigger("add",d,this,b);return this},remove:function(a,b){var c,d,e,f;b||(b={});a=g.isArray(a)?
a.slice():[a];c=0;for(d=a.length;c<d;c++)if(f=this.getByCid(a[c])||this.get(a[c]))delete this._byId[f.id],delete this._byCid[f.cid],e=this.indexOf(f),this.models.splice(e,1),this.length--,b.silent||(b.index=e,f.trigger("remove",f,this,b)),this._removeReference(f);return this},push:function(a,b){a=this._prepareModel(a,b);this.add(a,b);return a},pop:function(a){var b=this.at(this.length-1);this.remove(b,a);return b},unshift:function(a,b){a=this._prepareModel(a,b);this.add(a,g.extend({at:0},b));return a},
shift:function(a){var b=this.at(0);this.remove(b,a);return b},get:function(a){return null==a?void 0:this._byId[null!=a.id?a.id:a]},getByCid:function(a){return a&&this._byCid[a.cid||a]},at:function(a){return this.models[a]},where:function(a){return g.isEmpty(a)?[]:this.filter(function(b){for(var c in a)if(a[c]!==b.get(c))return!1;return!0})},sort:function(a){a||(a={});if(!this.comparator)throw Error("Cannot sort a set without a comparator");var b=g.bind(this.comparator,this);1==this.comparator.length?
this.models=this.sortBy(b):this.models.sort(b);a.silent||this.trigger("reset",this,a);return this},pluck:function(a){return g.map(this.models,function(b){return b.get(a)})},reset:function(a,b){a||(a=[]);b||(b={});for(var c=0,d=this.models.length;c<d;c++)this._removeReference(this.models[c]);this._reset();this.add(a,g.extend({silent:!0},b));b.silent||this.trigger("reset",this,b);return this},fetch:function(a){a=a?g.clone(a):{};void 0===a.parse&&(a.parse=!0);var b=this,c=a.success;a.success=function(d,
e,f){b[a.add?"add":"reset"](b.parse(d,f),a);c&&c(b,d)};a.error=i.wrapError(a.error,b,a);return(this.sync||i.sync).call(this,"read",this,a)},create:function(a,b){var c=this,b=b?g.clone(b):{},a=this._prepareModel(a,b);if(!a)return!1;b.wait||c.add(a,b);var d=b.success;b.success=function(e,f){b.wait&&c.add(e,b);d?d(e,f):e.trigger("sync",a,f,b)};a.save(null,b);return a},parse:function(a){return a},chain:function(){return g(this.models).chain()},_reset:function(){this.length=0;this.models=[];this._byId=
{};this._byCid={}},_prepareModel:function(a,b){b||(b={});a instanceof s?a.collection||(a.collection=this):(b.collection=this,a=new this.model(a,b),a._validate(a.attributes,b)||(a=!1));return a},_removeReference:function(a){this==a.collection&&delete a.collection;a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,b,c,d){("add"==a||"remove"==a)&&c!=this||("destroy"==a&&this.remove(b,d),b&&a==="change:"+b.idAttribute&&(delete this._byId[b.previous(b.idAttribute)],this._byId[b.id]=b),this.trigger.apply(this,
arguments))}});g.each("forEach,each,map,reduce,reduceRight,find,detect,filter,select,reject,every,all,some,any,include,contains,invoke,max,min,sortBy,sortedIndex,toArray,size,first,initial,rest,last,without,indexOf,shuffle,lastIndexOf,isEmpty,groupBy".split(","),function(a){u.prototype[a]=function(){return g[a].apply(g,[this.models].concat(g.toArray(arguments)))}});var A=i.Router=function(a){a||(a={});a.routes&&(this.routes=a.routes);this._bindRoutes();this.initialize.apply(this,arguments)},C=/:\w+/g,
D=/\*\w+/g,E=/[-[\]{}()+?.,\\^$|#\s]/g;g.extend(A.prototype,o,{initialize:function(){},route:function(a,b,c){i.history||(i.history=new q);g.isRegExp(a)||(a=this._routeToRegExp(a));c||(c=this[b]);i.history.route(a,g.bind(function(d){d=this._extractParameters(a,d);c&&c.apply(this,d);this.trigger.apply(this,["route:"+b].concat(d));i.history.trigger("route",this,b,d)},this));return this},navigate:function(a,b){i.history.navigate(a,b)},_bindRoutes:function(){if(this.routes){var a=[],b;for(b in this.routes)a.unshift([b,
this.routes[b]]);b=0;for(var c=a.length;b<c;b++)this.route(a[b][0],a[b][1],this[a[b][1]])}},_routeToRegExp:function(a){a=a.replace(E,"\\$&").replace(C,"([^/]+)").replace(D,"(.*?)");return RegExp("^"+a+"$")},_extractParameters:function(a,b){return a.exec(b).slice(1)}});var q=i.History=function(){this.handlers=[];g.bindAll(this,"checkUrl")},v=/^[#\/]/,w=/msie [\w.]+/;q.started=!1;g.extend(q.prototype,o,{interval:50,getHash:function(a){return(a=(a?a.location:window.location).href.match(/#(.*)$/))?a[1]:
""},getFragment:function(a,b){if(null==a)if(this._hasPushState||b){var a=window.location.pathname,c=window.location.search;c&&(a+=c)}else a=this.getHash();a.indexOf(this.options.root)||(a=a.substr(this.options.root.length));return a.replace(v,"")},start:function(a){if(q.started)throw Error("Backbone.history has already been started");q.started=!0;this.options=g.extend({},{root:"/"},this.options,a);this._wantsHashChange=!1!==this.options.hashChange;this._wantsPushState=!!this.options.pushState;this._hasPushState=
!(!this.options.pushState||!window.history||!window.history.pushState);var a=this.getFragment(),b=document.documentMode;if(b=w.exec(navigator.userAgent.toLowerCase())&&(!b||7>=b))this.iframe=l('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(a);this._hasPushState?l(window).bind("popstate",this.checkUrl):this._wantsHashChange&&"onhashchange"in window&&!b?l(window).bind("hashchange",this.checkUrl):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,
this.interval));this.fragment=a;a=window.location;b=a.pathname==this.options.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!b)return this.fragment=this.getFragment(null,!0),window.location.replace(this.options.root+"#"+this.fragment),!0;this._wantsPushState&&this._hasPushState&&b&&a.hash&&(this.fragment=this.getHash().replace(v,""),window.history.replaceState({},document.title,a.protocol+"//"+a.host+this.options.root+this.fragment));if(!this.options.silent)return this.loadUrl()},
stop:function(){l(window).unbind("popstate",this.checkUrl).unbind("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);q.started=!1},route:function(a,b){this.handlers.unshift({route:a,callback:b})},checkUrl:function(){var a=this.getFragment();a==this.fragment&&this.iframe&&(a=this.getFragment(this.getHash(this.iframe)));if(a==this.fragment)return!1;this.iframe&&this.navigate(a);this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(a){var b=this.fragment=this.getFragment(a);return g.any(this.handlers,
function(a){if(a.route.test(b))return a.callback(b),!0})},navigate:function(a,b){if(!q.started)return!1;if(!b||!0===b)b={trigger:b};var c=(a||"").replace(v,"");this.fragment!=c&&(this._hasPushState?(0!=c.indexOf(this.options.root)&&(c=this.options.root+c),this.fragment=c,window.history[b.replace?"replaceState":"pushState"]({},document.title,c)):this._wantsHashChange?(this.fragment=c,this._updateHash(window.location,c,b.replace),this.iframe&&c!=this.getFragment(this.getHash(this.iframe))&&(b.replace||
this.iframe.document.open().close(),this._updateHash(this.iframe.location,c,b.replace))):window.location.assign(this.options.root+a),b.trigger&&this.loadUrl(a))},_updateHash:function(a,b,c){c?a.replace(a.toString().replace(/(javascript:|#).*$/,"")+"#"+b):a.hash=b}});var B=i.View=function(a){this.cid=g.uniqueId("view");this._configure(a||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()},H=/^(\S+)\s*(.*)$/,x="model,collection,el,id,attributes,className,tagName".split(",");
g.extend(B.prototype,o,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();return this},make:function(a,b,c){a=document.createElement(a);b&&l(a).attr(b);c&&l(a).html(c);return a},setElement:function(a,b){this.$el&&this.undelegateEvents();this.$el=a instanceof l?a:l(a);this.el=this.$el[0];!1!==b&&this.delegateEvents();return this},delegateEvents:function(a){if(a||(a=r(this,"events"))){this.undelegateEvents();
for(var b in a){var c=a[b];g.isFunction(c)||(c=this[a[b]]);if(!c)throw Error('Method "'+a[b]+'" does not exist');var d=b.match(H),e=d[1],d=d[2],c=g.bind(c,this),e=e+(".delegateEvents"+this.cid);""===d?this.$el.bind(e,c):this.$el.delegate(d,e,c)}}},undelegateEvents:function(){this.$el.unbind(".delegateEvents"+this.cid)},_configure:function(a){this.options&&(a=g.extend({},this.options,a));for(var b=0,c=x.length;b<c;b++){var d=x[b];a[d]&&(this[d]=a[d])}this.options=a},_ensureElement:function(){if(this.el)this.setElement(this.el,
!1);else{var a=r(this,"attributes")||{};this.id&&(a.id=this.id);this.className&&(a["class"]=this.className);this.setElement(this.make(this.tagName,a),!1)}}});s.extend=u.extend=A.extend=B.extend=function(a,b){var c=F(this,a,b);c.extend=this.extend;return c};var d={create:"POST",update:"PUT","delete":"DELETE",read:"GET"};i.sync=function(a,b,c){var e=d[a];c||(c={});var f={type:e,dataType:"json"};c.url||(f.url=r(b,"url")||G());if(!c.data&&b&&("create"==a||"update"==a))f.contentType="application/json",
f.data=JSON.stringify(b.toJSON());i.emulateJSON&&(f.contentType="application/x-www-form-urlencoded",f.data=f.data?{model:f.data}:{});if(i.emulateHTTP&&("PUT"===e||"DELETE"===e))i.emulateJSON&&(f.data._method=e),f.type="POST",f.beforeSend=function(a){a.setRequestHeader("X-HTTP-Method-Override",e)};"GET"!==f.type&&!i.emulateJSON&&(f.processData=!1);return l.ajax(g.extend(f,c))};i.wrapError=function(a,b,c){return function(d,e){e=d===b?e:d;a?a(b,e,c):b.trigger("error",b,e,c)}};var p=function(){},F=function(a,
b,c){var d;d=b&&b.hasOwnProperty("constructor")?b.constructor:function(){a.apply(this,arguments)};g.extend(d,a);p.prototype=a.prototype;d.prototype=new p;b&&g.extend(d.prototype,b);c&&g.extend(d,c);d.prototype.constructor=d;d.__super__=a.prototype;return d},r=function(a,b){return!a||!a[b]?null:g.isFunction(a[b])?a[b]():a[b]},G=function(){throw Error('A "url" property or function must be specified');}}).call(this);DefaceitHome=window.DefaceitHome||!1;Defaceit=window.Defaceit||{};Defaceit.wait=function(e,f,j,n){var j=j||this,n=n||[],i=setInterval(function(){if(0<Defaceit.load.wait.length)for(var g=0;g<Defaceit.load.wait.length;g++)if("Ok"!=Defaceit.load.wait[g])return;window[e]&&(f.call(j,n),clearInterval(i))},100)};
Defaceit.load={wait:[],js:function(e){var f=document.createElement("script");f.setAttribute("src",e);document.getElementsByTagName("head")[0].appendChild(f)},css:function(e){var f=document.createElement("link");f.rel="stylesheet";f.type="text/css";f.href=e;document.getElementsByTagName("head")[0].appendChild(f)},image:function(e){this.wait=this.wait||[];var f=this.wait.length,j=document.createElement("img");j.src=e;this.wait[f]=e;document.getElementsByTagName("head")[0].appendChild(j);var n=this;
j.onload=function(){n.wait[f]="Ok"}}};Defaceit.extend=function(e,f){f=f||{};e=e||function(){};child=function(){e.apply(this,arguments)};child.prototype={};for(var j in e.prototype)child.prototype[j]=e.prototype[j];child.prototype.parent={};for(j in f)child.prototype[j]&&(child.prototype.parent[j]=e.prototype[j]),child.prototype[j]=f[j];return child};Defaceit.merge=function(e,f){return jQuery.merge(e,f)};Defaceit.request=function(e){var f=document.createElement("script");f.setAttribute("src",e);document.getElementsByTagName("head")[0].appendChild(f)};
callbacks=[];function request(e){var f=document.createElement("script");f.setAttribute("src",e);document.getElementsByTagName("head")[0].appendChild(f)}function defaceit(e){callback=callbacks[0];callback[0].call(callback[1],e)};Defaceit.CrossDomainRequest=function(e){this.url=e;this.create_iframe();this.create_form(e)};
Defaceit.CrossDomainRequest.prototype={create_iframe:function(){if(!document.getElementById("coaframe")){var e=document.createElement("iframe");e.name="coaframe";e.style.visibility="hidden";e.style.position="absolute";e.style.left=e.style.top="0px";e.height=width="1px";e.id="coaframe";document.getElementsByTagName("body")[0].appendChild(e)}},create_form:function(e){var f=document.getElementById("coaform");if(f){for(;f.firstChild;)f.removeChild(f.firstChild);this.form=f}else f=this.form=document.createElement("form"),
f.style.display="none",f.id="coaform",f.enctype="multipart/form-data",f.method="POST",f.action=e,f.target="coaframe",f.setAttribute("target","coaframe"),document.body.appendChild(f)},add:function(e,f){var j=document.createElement("input");j.type="hidden";j.name=e;j.value=f;this.form.appendChild(j)},request:function(e,f){this.form.submit();var j=setInterval(function(){""!=location.hash&&"#none"!=location.hash&&(e.call(f,location.hash),location.hash="none",clearInterval(j))},200)}};Defaceit.Screen={border:10,height:function(){return jQuery(window).height()},width:function(){return jQuery(window).width()},scroll_top:function(){return jQuery(window).scrollTop()}};Defaceit.Session=function(e){this.resource=e};Defaceit.Session.prototype={sign_in:!1,check_status:function(e){this.sign_in=!0;request(this.resource+"/show",function(f){null==f.data.key&&(this.sign_in=!1);this.data=f.data;e.call(this)},this)},signed_in:function(){return this.key?!0:!1}};Defaceit.Display={width:function(){return jQuery(window).width()},height:function(){return jQuery(window).height()}};Defaceit.Window||(Defaceit.Window={},Defaceit.Window.Simple=function(e){this.init(e)},Defaceit.Window.Simple.create=function(e){return new Defaceit.Window.Simple(e)},Defaceit.Window.Simple.prototype={wnd_handler:null,wnd_container:null,content_handler:null,config:{},init:function(e){e=this.configure(e);this.create_window();this.apply_title(e.title);this.apply_content(e.content);this.apply_buttons(e.buttons);this.modify(e.geometry)},configure:function(e){this.config=e||{};this.config.plugins=this.config.plugins||
{};this.config.geometry=this.config.geometry||[];this.config.buttons=this.config.buttons||[];return this.config},modify:function(e){if(!e||!e.length)return!1;for(var f=0;f<e.length;f++){var j=e[f],n=j.split(":"),j=n[0],n=1<n.length?n.slice(1):[];jQuery.isFunction(j)&&j.call(this)||this[j]&&this[j].apply(this,n)}},position:function(e,f){this.config.pX=e||this.config.pX;this.config.pY=f||this.config.pY;this.wnd_handler.css({left:this.config.pX,top:this.config.pY})},create_window:function(){(this.wnd_handler=
jQuery("<div>")).addClass("dtWindow").appendTo("body");(this.wnd_container=jQuery("<div>")).addClass("dtWindowContainer").appendTo(this.wnd_handler)},apply_title:function(e){if(!e)return!1;this.title=e;e=jQuery("<div>").html(e).addClass("dtWindowTitle");e.appendTo(this.wnd_container)},apply_content:function(e){if(!e)return!1;this.content=e;return this.content_handler&&this.content_handler.html(this.content)||(this.content_handler=jQuery("<div>").addClass("dtWindowContent").html(e).appendTo(this.wnd_container))},
apply_buttons:function(e){function f(e){var f=jQuery("<a>").attr("href","#").addClass("dtWindowButton").html(e.text);e.handler&&f.click(function(){e.handler.call(n);return!1});e.text&&f.attr("value",e.text);return f}if(!e||!e.length)return!1;for(var j=this.button_handler=jQuery("<div>").addClass("dtWindowButtons"),n=this,i=0;i<e.length;i++)j.append(f(e[i]));j.appendTo(this.wnd_container)},hide:function(){this.wnd_handler.hide()},show:function(){this.wnd_handler.show()},width:function(e){this.config.width=
parseInt(e||this.config.width);this.config.width&&this.wnd_handler.css({width:this.config.width})},height:function(e){this.config.height=parseInt(e||this.config.height);this.config.height&&this.wnd_handler.css({height:this.config.height})},fit_to_screen:function(){this.height(Defaceit.Screen.height()-2*Defaceit.Screen.border);this.width(Defaceit.Screen.width()-2*Defaceit.Screen.border);this.wnd_container.css({height:this.wnd_handler.height()-40,padding:20});var e=this.button_handler?this.button_handler.height():
0;this.content_handler.css({height:this.wnd_container.height()-e})},size:function(){this.wnd_container.css({width:this.width,height:this.height})},center:function(){this.config.pX=Math.floor(Defaceit.Screen.width()/2-this.wnd_handler.width()/2);this.config.pY=Math.floor(Defaceit.Screen.height()/2-this.wnd_handler.height()/2);this.position()},deltaXY:function(e,f){e=parseInt(e||0);f=parseInt(f||0);this.config.pX+=e;this.config.pY+=f;this.position()},top:function(){this.config.pY=Defaceit.Screen.border;
this.position()},right:function(){this.config.pX=Defaceit.Screen.width()-this.wnd_handler.width()-Defaceit.Screen.border;this.position()},left:function(){this.config.pX=Defaceit.Screen.border;this.position()},activate:function(){Defaceit.Window.Manager.get_active_window().deactivate();Defaceit.Window.Manager.active=this.nth;this.state=this.show_menu;this.wnd_handler.animate({width:this.width,height:this.height,left:this.width/2,top:this.height/2},"fast");this.wnd_handler.html(this.content)},deactivate:function(){Defaceit.Window.Manager.active=
-1;this.state=this.activate;this.wnd_handler.animate({width:50,height:50,left:this.init_position_x,top:this.init_position_y},"fast");this.wnd_handler.html(this.icon)},show_menu:function(){this.menu=this.menu||jQuery("<div>").addClass("menu").appendTo(this.wnd_handler).html('<a href="#">\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c</a><a href="#">\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c</a><a href="#">\u0423\u0434\u0430\u043b\u0438\u0442\u044c</a>');this.menu.animate({width:"20%"},
"fast");this.state=this.hide_menu},hide_menu:function(){this.menu.animate({width:"0%"},"fast");this.state=this.show_menu}},Defaceit.Window.InputBox=Defaceit.extend(Defaceit.Window.Simple,{configure:function(e){e.handler=e.handler||function(){alert("\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u043d\u0435 \u0437\u0430\u0434\u0430\u043d")};this.textarea=jQuery("<TEXTAREA>").addClass("dtWindowInputBoxTextarea");e.content=this.textarea;
e.buttons=[{text:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",handler:e.handler},{text:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",handler:function(){this.wnd_handler.remove()}}];return this.parent.configure(e)},message:function(){return this.textarea.val()}}),Defaceit.Window.Manager={collection:[],create:function(e,f){return new (Defaceit.Window[e]||Defaceit.Window.Simple)(f)},add:function(e){this.collection.push(e);return this.collection.length},get:function(e){return this.collection[e]},
get_active_window:function(){return 0<=Defaceit.Window.Manager.active?this.get(Defaceit.Window.Manager.active):{deactivate:function(){}}}});Defaceit.Queue||(Defaceit.Queue=function(e){if(this==Defaceit)return e=e||"",Defaceit.Queue.list[e]=Defaceit.Queue.list[e]||new Defaceit.Queue(e),Defaceit.Queue.list[e];this.queue=e;return this},Defaceit.Queue.prototype={queue:"",call_id:1,next_call_id:function(){return this.call_id++},list:function(){Defaceit.request("http://eservices.sandbox.defaceit.ru/queue/list/"+this.queue+"/"+this.next_call_id());return this},push:function(e){var f=this.next_call_id();Defaceit.request("http://eservices.sandbox.defaceit.ru/queue/push/"+
this.queue+"/"+f+"/"+encodeURIComponent(e));return f},top:function(){Defaceit.request("http://eservices.sandbox.defaceit.ru/queue/top/"+this.queue+"/"+this.next_call_id());return this},last:function(){Defaceit.request("http://eservices.sandbox.defaceit.ru/queue/last/"+this.queue+"/"+this.next_call_id());return this},client:function(e){this.clients=this.clients||[];this.clients.push(e)},client_callback:function(e){switch(e.type){case "messages":for(var f=0;f<e.data.length;f++)this.send_message(e.data[f].message_text,
e.data[f]);break;case "message":this.send_message(e.data.message_text,e.data);break;case "status":this.send_status_message(e)}},send_status_message:function(e){for(var f=0;f<this.clients.length;f++){var j=this.clients[f];j.queue_status&&j.queue_status(e)}},send_message:function(e,f){for(var e=decodeURIComponent(e),j=0;j<this.clients.length;j++){var n=this.clients[j];n.queue_message&&n.queue_message(e,f)}}},Defaceit.Queue.list=Defaceit.Queue.list||{},Defaceit.Queue.callbacks=Defaceit.Queue.callbacks||
[],Defaceit.Queue.response=function(e){Defaceit.Queue.list[e.queue_name].client_callback(e)});window.jQuery||Defaceit.load.js("http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js");Defaceit.load.css("http://sandbox.defaceit.ru/defaceit/tools/css/defaceit.css");

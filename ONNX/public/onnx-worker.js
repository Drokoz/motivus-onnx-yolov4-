!function(n){var t={};function e(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(r,i,function(t){return n[t]}.bind(null,i));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=2)}([function(n,t){var e,r,i=n.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(n){if(e===setTimeout)return setTimeout(n,0);if((e===o||!e)&&setTimeout)return e=setTimeout,setTimeout(n,0);try{return e(n,0)}catch(t){try{return e.call(null,n,0)}catch(t){return e.call(this,n,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:o}catch(n){e=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(n){r=a}}();var l,f=[],s=!1,c=-1;function p(){s&&l&&(s=!1,l.length?f=l.concat(f):c=-1,f.length&&m())}function m(){if(!s){var n=u(p);s=!0;for(var t=f.length;t;){for(l=f,f=[];++c<t;)l&&l[c].run();c=-1,t=f.length}l=null,s=!1,function(n){if(r===clearTimeout)return clearTimeout(n);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(n);try{r(n)}catch(t){try{return r.call(null,n)}catch(t){return r.call(this,n)}}}(n)}}function y(n,t){this.fun=n,this.array=t}function d(){}i.nextTick=function(n){var t=new Array(arguments.length-1);if(arguments.length>1)for(var e=1;e<arguments.length;e++)t[e-1]=arguments[e];f.push(new y(n,t)),1!==f.length||s||u(m)},y.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=d,i.addListener=d,i.once=d,i.off=d,i.removeListener=d,i.removeAllListeners=d,i.emit=d,i.prependListener=d,i.prependOnceListener=d,i.listeners=function(n){return[]},i.binding=function(n){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(n){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(n,t,e){(function(n){function e(n,t){for(var e=0,r=n.length-1;r>=0;r--){var i=n[r];"."===i?n.splice(r,1):".."===i?(n.splice(r,1),e++):e&&(n.splice(r,1),e--)}if(t)for(;e--;e)n.unshift("..");return n}function r(n,t){if(n.filter)return n.filter(t);for(var e=[],r=0;r<n.length;r++)t(n[r],r,n)&&e.push(n[r]);return e}t.resolve=function(){for(var t="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var a=o>=0?arguments[o]:n.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(t=a+"/"+t,i="/"===a.charAt(0))}return(i?"/":"")+(t=e(r(t.split("/"),(function(n){return!!n})),!i).join("/"))||"."},t.normalize=function(n){var o=t.isAbsolute(n),a="/"===i(n,-1);return(n=e(r(n.split("/"),(function(n){return!!n})),!o).join("/"))||o||(n="."),n&&a&&(n+="/"),(o?"/":"")+n},t.isAbsolute=function(n){return"/"===n.charAt(0)},t.join=function(){var n=Array.prototype.slice.call(arguments,0);return t.normalize(r(n,(function(n,t){if("string"!=typeof n)throw new TypeError("Arguments to path.join must be strings");return n})).join("/"))},t.relative=function(n,e){function r(n){for(var t=0;t<n.length&&""===n[t];t++);for(var e=n.length-1;e>=0&&""===n[e];e--);return t>e?[]:n.slice(t,e-t+1)}n=t.resolve(n).substr(1),e=t.resolve(e).substr(1);for(var i=r(n.split("/")),o=r(e.split("/")),a=Math.min(i.length,o.length),u=a,l=0;l<a;l++)if(i[l]!==o[l]){u=l;break}var f=[];for(l=u;l<i.length;l++)f.push("..");return(f=f.concat(o.slice(u))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(n){if("string"!=typeof n&&(n+=""),0===n.length)return".";for(var t=n.charCodeAt(0),e=47===t,r=-1,i=!0,o=n.length-1;o>=1;--o)if(47===(t=n.charCodeAt(o))){if(!i){r=o;break}}else i=!1;return-1===r?e?"/":".":e&&1===r?"/":n.slice(0,r)},t.basename=function(n,t){var e=function(n){"string"!=typeof n&&(n+="");var t,e=0,r=-1,i=!0;for(t=n.length-1;t>=0;--t)if(47===n.charCodeAt(t)){if(!i){e=t+1;break}}else-1===r&&(i=!1,r=t+1);return-1===r?"":n.slice(e,r)}(n);return t&&e.substr(-1*t.length)===t&&(e=e.substr(0,e.length-t.length)),e},t.extname=function(n){"string"!=typeof n&&(n+="");for(var t=-1,e=0,r=-1,i=!0,o=0,a=n.length-1;a>=0;--a){var u=n.charCodeAt(a);if(47!==u)-1===r&&(i=!1,r=a+1),46===u?-1===t?t=a:1!==o&&(o=1):-1!==t&&(o=-1);else if(!i){e=a+1;break}}return-1===t||-1===r||0===o||1===o&&t===r-1&&t===e+1?"":n.slice(t,r)};var i="b"==="ab".substr(-1)?function(n,t,e){return n.substr(t,e)}:function(n,t,e){return t<0&&(t=n.length+t),n.substr(t,e)}}).call(this,e(0))},function(n,t,e){"use strict";var r,i=this&&this.__extends||(r=function(n,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])})(n,t)},function(n,t){function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)});Object.defineProperty(t,"__esModule",{value:!0});var o,a=e(3),u=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return i(t,n),t.getInstance=function(){return t.instance||(t.instance=new t),t.instance},t}(a.WasmBinding);a.init().then((function(){o=u.getInstance(),postMessage({type:"init-success"})})),onmessage=function(n){if(!(n&&n.data&&n.data.type))throw new Error("missing message type from main thread");if("ccall"!==n.data.type)throw new Error("unknown message type from main thread: "+n.data.type);var t=n.data.func,e=n.data.buffer,r=o.ccallRaw(t,new Uint8Array(e));postMessage({type:"ccall",buffer:e,perfData:r},[e])}},function(n,t,e){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.now=t.WasmBinding=t.init=void 0;var i=!1,o=!1;t.init=function(){if(i)return Promise.resolve();if(o)throw new Error("multiple calls to 'init()' detected.");return o=!0,new Promise((function(n,t){(r=e(4))(r).then((function(){n(),o=!1,i=!0}),(function(n){o=!1,t(n)}))}))};var a=function(){function n(){this.ptr8=0,this.numBytesAllocated=0}return n.prototype.ccall=function(e){for(var o=[],a=1;a<arguments.length;a++)o[a-1]=arguments[a];if(!i)throw new Error("wasm not initialized. please ensure 'init()' is called.");var u=t.now(),l=[],f=n.calculateOffsets(l,o);f>this.numBytesAllocated&&this.expandMemory(f),n.ccallSerialize(r.HEAPU8.subarray(this.ptr8,this.ptr8+f),l,o);var s=t.now();this.func(e,this.ptr8);var c=t.now();n.ccallDeserialize(r.HEAPU8.subarray(this.ptr8,this.ptr8+f),l,o);var p=t.now();return{startTime:u,endTime:p,startTimeFunc:s,endTimeFunc:c}},n.prototype.ccallRaw=function(n,e){if(!i)throw new Error("wasm not initialized. please ensure 'init()' is called.");var o=t.now(),a=e.byteLength;a>this.numBytesAllocated&&this.expandMemory(a),r.HEAPU8.subarray(this.ptr8,this.ptr8+a).set(e);var u=t.now();this.func(n,this.ptr8);var l=t.now();return e.set(r.HEAPU8.subarray(this.ptr8,this.ptr8+a)),{startTime:o,endTime:t.now(),startTimeFunc:u,endTimeFunc:l}},n.prototype.func=function(n,t){(0,r[n])(t)},n.calculateOffsets=function(n,t){for(var e=4+4*t.length,r=0;r<t.length;r++){var i=t[r],o=i[0],a=i[1],u=i[2],l=0;switch(a){case"bool":case"int32":case"float32":l=4;break;case"float64":l=8;break;case"boolptr":if(!o){n.push(0);continue}if(!Array.isArray(o)&&!ArrayBuffer.isView(o))throw new Error("boolptr requires boolean array or Uint8Array");l=4*Math.ceil(o.length/4);break;case"int32ptr":case"float32ptr":if(!o){n.push(0);continue}if(Array.isArray(o)){if("inout"===u||"out"===u)throw new TypeError("inout/out parameters must be ArrayBufferView for ptr types.");l=4*o.length}else{if(!ArrayBuffer.isView(o))throw new TypeError("unsupported data type in 'ccall()'");l=o.byteLength}break;default:throw new Error("not supported parameter type: "+a)}n.push(e),e+=l}return e},n.ccallSerialize=function(n,t,e){var r=new Int32Array(n.buffer,n.byteOffset),i=new Uint32Array(n.buffer,n.byteOffset),o=new Float32Array(n.buffer,n.byteOffset);i[0]=e.length;for(var a=0;a<e.length;a++){var u=e[a],l=u[0],f=u[1],s=u[2],c=t[a],p=c>>2;if(i[a+1]=c,"out"!==s&&0!==c)switch(f){case"bool":n[c]=!0===l?1:0;break;case"int32":r[p]=l;break;case"float32":o[p]=l;break;case"boolptr":var m=l;n.subarray(c,c+m.length).set(l);break;case"int32ptr":var y=l;r.subarray(p,p+y.length).set(y);break;case"float32ptr":var d=l;o.subarray(p,p+d.length).set(d);break;default:throw new Error("not supported parameter type: "+f)}}},n.ccallDeserialize=function(n,t,e){for(var r=new Float32Array(n.buffer,n.byteOffset),i=new Uint8Array(n.buffer,n.byteOffset),o=0;o<e.length;o++){var a=e[o],u=a[0],l=a[1],f=a[2],s=t[o],c=s>>2;if("out"===f||"inout"===f)switch(l){case"float32ptr":var p=u;p.set(r.subarray(c,c+p.length));break;case"boolptr":var m=u;m.set(i.subarray(s,s+m.length));break;default:throw new Error("not supported parameter type: "+l)}}},n.prototype.expandMemory=function(n){if(0!==this.ptr8&&r._free(this.ptr8),this.numBytesAllocated=2*n,this.ptr8=r._malloc(this.numBytesAllocated),0===this.ptr8)throw new Error("Unable to allocate requested amount of memory. Failing.")},n.prototype.dispose=function(){if(!i)throw new Error("wasm not initialized. please ensure 'init()' is called.");0!==this.ptr8&&r._free(this.ptr8)},n}();t.WasmBinding=a,t.now="undefined"!=typeof performance&&performance.now?function(){return performance.now()}:Date.now},function(n,t,e){(function(t,r,i){var o,a=(o=(o="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0)||t,function(n){n=void 0!==(n=n||{})?n:{};var t,a={};for(t in n)n.hasOwnProperty(t)&&(a[t]=n[t]);var u=[],l=!1,f=!1,s=!1,c=!1;l="object"==typeof window,f="function"==typeof importScripts,s="object"==typeof r&&"object"==typeof r.versions&&"string"==typeof r.versions.node,c=!l&&!s&&!f;var p,m,y,d,h="";function _(t){return n.locateFile?n.locateFile(t,h):h+t}s?(h=f?e(1).dirname(h)+"/":i+"/",p=function(n,t){return y||(y=e(5)),d||(d=e(1)),n=d.normalize(n),y.readFileSync(n,t?null:"utf8")},m=function(n){var t=p(n,!0);return t.buffer||(t=new Uint8Array(t)),C(t.buffer),t},r.argv.length>1&&r.argv[1].replace(/\\/g,"/"),u=r.argv.slice(2),r.on("uncaughtException",(function(n){if(!(n instanceof Pn))throw n})),r.on("unhandledRejection",tn),n.inspect=function(){return"[Emscripten Module object]"}):c?("undefined"!=typeof read&&(p=function(n){return read(n)}),m=function(n){var t;return"function"==typeof readbuffer?new Uint8Array(readbuffer(n)):(C("object"==typeof(t=read(n,"binary"))),t)},"undefined"!=typeof scriptArgs?u=scriptArgs:void 0!==arguments&&(u=arguments),"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(l||f)&&(f?h=self.location.href:document.currentScript&&(h=document.currentScript.src),o&&(h=o),h=0!==h.indexOf("blob:")?h.substr(0,h.lastIndexOf("/")+1):"",p=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.send(null),t.responseText},f&&(m=function(n){var t=new XMLHttpRequest;return t.open("GET",n,!1),t.responseType="arraybuffer",t.send(null),new Uint8Array(t.response)}));var v=n.print||console.log.bind(console),b=n.printErr||console.warn.bind(console);for(t in a)a.hasOwnProperty(t)&&(n[t]=a[t]);a=null,n.arguments&&(u=n.arguments),n.thisProgram&&n.thisProgram,n.quit&&n.quit;var w,g,A=function(n){};n.wasmBinary&&(w=n.wasmBinary),n.noExitRuntime&&n.noExitRuntime,"object"!=typeof WebAssembly&&b("no native wasm support detected");var T=new WebAssembly.Table({initial:31,maximum:31,element:"anyfunc"}),x=!1;function C(n,t){n||tn("Assertion failed: "+t)}var E="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function R(n,t,e){for(var r=t+e,i=t;n[i]&&!(i>=r);)++i;if(i-t>16&&n.subarray&&E)return E.decode(n.subarray(t,i));for(var o="";t<i;){var a=n[t++];if(128&a){var u=63&n[t++];if(192!=(224&a)){var l=63&n[t++];if((a=224==(240&a)?(15&a)<<12|u<<6|l:(7&a)<<18|u<<12|l<<6|63&n[t++])<65536)o+=String.fromCharCode(a);else{var f=a-65536;o+=String.fromCharCode(55296|f>>10,56320|1023&f)}}else o+=String.fromCharCode((31&a)<<6|u)}else o+=String.fromCharCode(a)}return o}function k(n,t){return n?R(M,n,t):""}"undefined"!=typeof TextDecoder&&new TextDecoder("utf-16le");var j,M,S,P=65536;function O(n,t){return n%t>0&&(n+=t-n%t),n}function I(t){j=t,n.HEAP8=new Int8Array(t),n.HEAP16=new Int16Array(t),n.HEAP32=S=new Int32Array(t),n.HEAPU8=M=new Uint8Array(t),n.HEAPU16=new Uint16Array(t),n.HEAPU32=new Uint32Array(t),n.HEAPF32=new Float32Array(t),n.HEAPF64=new Float64Array(t)}var z=5248800,U=5760,W=n.INITIAL_MEMORY||16777216;function B(t){for(;t.length>0;){var e=t.shift();if("function"!=typeof e){var r=e.func;"number"==typeof r?void 0===e.arg?n.dynCall_v(r):n.dynCall_vi(r,e.arg):r(void 0===e.arg?null:e.arg)}else e()}}(g=n.wasmMemory?n.wasmMemory:new WebAssembly.Memory({initial:W/P}))&&(j=g.buffer),W=j.byteLength,I(j),S[U>>2]=z;var F=[],H=[],D=[],L=[],q=[];function V(){if(n.preRun)for("function"==typeof n.preRun&&(n.preRun=[n.preRun]);n.preRun.length;)Y(n.preRun.shift());B(F)}function G(){B(H)}function N(){B(D)}function X(){if(n.postRun)for("function"==typeof n.postRun&&(n.postRun=[n.postRun]);n.postRun.length;)J(n.postRun.shift());B(q)}function Y(n){F.unshift(n)}function J(n){q.unshift(n)}Math.abs,Math.ceil,Math.floor,Math.min;var K=0,Q=null,Z=null;function $(t){K++,n.monitorRunDependencies&&n.monitorRunDependencies(K)}function nn(t){if(K--,n.monitorRunDependencies&&n.monitorRunDependencies(K),0==K&&(null!==Q&&(clearInterval(Q),Q=null),Z)){var e=Z;Z=null,e()}}function tn(t){throw n.onAbort&&n.onAbort(t),v(t+=""),b(t),x=!0,t="abort("+t+"). Build with -s ASSERTIONS=1 for more info.",new WebAssembly.RuntimeError(t)}n.preloadedImages={},n.preloadedAudios={};var en="data:application/octet-stream;base64,";function rn(n){return String.prototype.startsWith?n.startsWith(en):0===n.indexOf(en)}var on="onnx-wasm.wasm";function an(){try{if(w)return new Uint8Array(w);if(m)return m(on);throw"both async and sync fetching of the wasm failed"}catch(n){tn(n)}}function un(){return w||!l&&!f||"function"!=typeof fetch?new Promise((function(n,t){n(an())})):fetch(on,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+on+"'";return n.arrayBuffer()})).catch((function(){return an()}))}function ln(){var t={env:En,wasi_snapshot_preview1:En};function e(t,e){var r=t.exports;n.asm=r,nn()}function r(n){e(n.instance)}function i(n){return un().then((function(n){return WebAssembly.instantiate(n,t)})).then(n,(function(n){b("failed to asynchronously prepare wasm: "+n),tn(n)}))}if($(),n.instantiateWasm)try{return n.instantiateWasm(t,e)}catch(n){return b("Module.instantiateWasm callback failed with error: "+n),!1}return function(){if(w||"function"!=typeof WebAssembly.instantiateStreaming||rn(on)||"function"!=typeof fetch)return i(r);fetch(on,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,t).then(r,(function(n){b("wasm streaming compile failed: "+n),b("falling back to ArrayBuffer instantiation"),i(r)}))}))}(),{}}function fn(n,t,e,r){tn("Assertion failed: "+k(n)+", at: "+[t?k(t):"unknown filename",e,r?k(r):"unknown function"])}function sn(n){return Mn(n)}rn(on)||(on=_(on)),H.push({func:function(){jn()}});var cn={};function pn(){return pn.uncaught_exceptions>0}function mn(n,t,e){throw cn[n]={ptr:n,adjusted:[n],type:t,destructor:e,refcount:0,caught:!1,rethrown:!1},"uncaught_exception"in pn?pn.uncaught_exceptions++:pn.uncaught_exceptions=1,n}function yn(){tn()}function dn(){return M.length}function hn(){return 5760}function _n(n,t,e){M.copyWithin(n,t,t+e)}function vn(n){try{return g.grow(n-j.byteLength+65535>>16),I(g.buffer),1}catch(n){}}function bn(n){var t=dn();if(n>2147418112)return!1;for(var e=1;e<=4;e*=2){var r=t*(1+.2/e);if(r=Math.min(r,n+100663296),vn(Math.min(2147418112,O(Math.max(16777216,n,r),65536))))return!0}return!1}var wn={mappings:{},buffers:[null,[],[]],printChar:function(n,t){var e=wn.buffers[n];0===t||10===t?((1===n?v:b)(R(e,0)),e.length=0):e.push(t)},varargs:void 0,get:function(){return wn.varargs+=4,S[wn.varargs-4>>2]},getStr:function(n){return k(n)},get64:function(n,t){return n}};function gn(n){return 0}function An(n,t,e,r,i){}function Tn(){void 0!==Sn&&Sn(0);var n=wn.buffers;n[1].length&&wn.printChar(1,10),n[2].length&&wn.printChar(2,10)}function xn(n,t,e,r){for(var i=0,o=0;o<e;o++){for(var a=S[t+8*o>>2],u=S[t+(8*o+4)>>2],l=0;l<u;l++)wn.printChar(n,M[a+l]);i+=u}return S[r>>2]=i,0}function Cn(n){A(0|n)}L.push(Tn);var En={__assert_fail:fn,__cxa_allocate_exception:sn,__cxa_throw:mn,abort:yn,emscripten_get_sbrk_ptr:hn,emscripten_memcpy_big:_n,emscripten_resize_heap:bn,fd_close:gn,fd_seek:An,fd_write:xn,memory:g,setTempRet0:Cn,table:T},Rn=ln();n.asm=Rn;var kn,jn=n.___wasm_call_ctors=function(){return(jn=n.___wasm_call_ctors=n.asm.__wasm_call_ctors).apply(null,arguments)},Mn=(n._batch_normalization_f32=function(){return(n._batch_normalization_f32=n.asm.batch_normalization_f32).apply(null,arguments)},n._add_f32=function(){return(n._add_f32=n.asm.add_f32).apply(null,arguments)},n._sub_f32=function(){return(n._sub_f32=n.asm.sub_f32).apply(null,arguments)},n._mul_f32=function(){return(n._mul_f32=n.asm.mul_f32).apply(null,arguments)},n._div_f32=function(){return(n._div_f32=n.asm.div_f32).apply(null,arguments)},n._prelu_f32=function(){return(n._prelu_f32=n.asm.prelu_f32).apply(null,arguments)},n._xor_u8=function(){return(n._xor_u8=n.asm.xor_u8).apply(null,arguments)},n._or_u8=function(){return(n._or_u8=n.asm.or_u8).apply(null,arguments)},n._and_u8=function(){return(n._and_u8=n.asm.and_u8).apply(null,arguments)},n._clip_f32=function(){return(n._clip_f32=n.asm.clip_f32).apply(null,arguments)},n._conv_f32=function(){return(n._conv_f32=n.asm.conv_f32).apply(null,arguments)},n._gemm_f32=function(){return(n._gemm_f32=n.asm.gemm_f32).apply(null,arguments)},n._free=function(){return(n._free=n.asm.free).apply(null,arguments)},n._malloc=function(){return(Mn=n._malloc=n.asm.malloc).apply(null,arguments)}),Sn=(n._instance_normalization_f32=function(){return(n._instance_normalization_f32=n.asm.instance_normalization_f32).apply(null,arguments)},n._matmul_f32=function(){return(n._matmul_f32=n.asm.matmul_f32).apply(null,arguments)},n._average_pool_f32=function(){return(n._average_pool_f32=n.asm.average_pool_f32).apply(null,arguments)},n._max_pool_f32=function(){return(n._max_pool_f32=n.asm.max_pool_f32).apply(null,arguments)},n._softmax_f32=function(){return(n._softmax_f32=n.asm.softmax_f32).apply(null,arguments)},n._sum_f32=function(){return(n._sum_f32=n.asm.sum_f32).apply(null,arguments)},n.___errno_location=function(){return(n.___errno_location=n.asm.__errno_location).apply(null,arguments)},n._fflush=function(){return(Sn=n._fflush=n.asm.fflush).apply(null,arguments)});function Pn(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n}function On(t){function e(){kn||(kn=!0,n.calledRun=!0,x||(G(),N(),n.onRuntimeInitialized&&n.onRuntimeInitialized(),X()))}t=t||u,K>0||(V(),K>0||(n.setStatus?(n.setStatus("Running..."),setTimeout((function(){setTimeout((function(){n.setStatus("")}),1),e()}),1)):e()))}if(n._setThrew=function(){return(n._setThrew=n.asm.setThrew).apply(null,arguments)},n.stackSave=function(){return(n.stackSave=n.asm.stackSave).apply(null,arguments)},n.stackAlloc=function(){return(n.stackAlloc=n.asm.stackAlloc).apply(null,arguments)},n.stackRestore=function(){return(n.stackRestore=n.asm.stackRestore).apply(null,arguments)},n.__growWasmMemory=function(){return(n.__growWasmMemory=n.asm.__growWasmMemory).apply(null,arguments)},n.dynCall_ii=function(){return(n.dynCall_ii=n.asm.dynCall_ii).apply(null,arguments)},n.dynCall_iiii=function(){return(n.dynCall_iiii=n.asm.dynCall_iiii).apply(null,arguments)},n.dynCall_jiji=function(){return(n.dynCall_jiji=n.asm.dynCall_jiji).apply(null,arguments)},n.dynCall_iidiiii=function(){return(n.dynCall_iidiiii=n.asm.dynCall_iidiiii).apply(null,arguments)},n.dynCall_vii=function(){return(n.dynCall_vii=n.asm.dynCall_vii).apply(null,arguments)},n.dynCall_vi=function(){return(n.dynCall_vi=n.asm.dynCall_vi).apply(null,arguments)},n.dynCall_viiiiii=function(){return(n.dynCall_viiiiii=n.asm.dynCall_viiiiii).apply(null,arguments)},n.dynCall_viiiii=function(){return(n.dynCall_viiiii=n.asm.dynCall_viiiii).apply(null,arguments)},n.dynCall_viiii=function(){return(n.dynCall_viiii=n.asm.dynCall_viiii).apply(null,arguments)},n.asm=Rn,n.then=function(t){if(kn)t(n);else{var e=n.onRuntimeInitialized;n.onRuntimeInitialized=function(){e&&e(),t(n)}}return n},Z=function n(){kn||On(),kn||(Z=n)},n.run=On,n.preInit)for("function"==typeof n.preInit&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return On(),n});n.exports=a}).call(this,"/index.js",e(0),"/")},function(n,t){}]);
//# sourceMappingURL=onnx-worker.js.map
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
var e=0;$("#header").load("/sections/header.html",function(){$(".useless").load("/assets/images/dots.svg"),$("#dots").load("/assets/images/dots.svg",function(){document.querySelector("#dots").addEventListener("click",function(){2==e++&&(e=0);var t=0;document.querySelectorAll("#header div").forEach(function(c){c.classList.remove("visible"),t++===e&&c.classList.add("visible")})})}),document.querySelector("#header div").classList.add("visible"),document.querySelector("#header #pages a").classList.add("highlighted"),document.querySelector("#header #languages a").classList.add("highlighted"),document.querySelector("#header #themes a").classList.add("highlighted"),document.querySelectorAll("#header #pages a").forEach(function(e){e.addEventListener("click",function(){document.querySelectorAll("#header #pages a").forEach(function(e){e.classList.remove("highlighted")}),e.classList.add("highlighted")})}),document.querySelectorAll("#header #languages a").forEach(function(e){e.addEventListener("click",function(){document.querySelectorAll("#header #languages a").forEach(function(e){e.classList.remove("highlighted")}),e.classList.add("highlighted")})}),document.querySelectorAll("#header #themes a").forEach(function(e){e.addEventListener("click",function(){document.querySelectorAll("#header #themes a").forEach(function(e){e.classList.remove("highlighted")}),e.classList.add("highlighted")})})}),$("#cookie-checkmark").load("/assets/images/checkmark.svg",function(){document.querySelector("#cookie-checkmark").addEventListener("click",function(){document.querySelector("#cookie").style.opacity="0",document.querySelector("#cookie").style.transform="translateX(-1rem)",setTimeout(function(){document.querySelector("#cookie").style.display="none"},300)})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=/scripts/main.js.map
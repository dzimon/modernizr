/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundsize-bgpositionshorthand-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-borderradius-cssanimations-csscalc-csstransforms-csstransforms3d-csstransitions-flexboxtweener-fontface-inlinesvg-localstorage-multiplebgs-preserve3d-sessionstorage-smil-svgclippaths-svgfilters-svgforeignobject-todataurljpeg_todataurlpng_todataurlwebp-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function s(){var e,t,n,s,a,o,i;for(var l in w)if(w.hasOwnProperty(l)){if(e=[],t=w[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(s=r(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)o=e[a],i=o.split("."),1===i.length?Modernizr[i[0]]=s:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=s),S.push((s?"":"no-")+i.join("-"))}}function a(e){var t=b.className,n=Modernizr._config.classPrefix||"";if(x&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),x?b.className.baseVal=t:b.className=t)}function o(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):x?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function i(){var e=t.body;return e||(e=o(x?"svg":"body"),e.fake=!0),e}function l(e,n,r,s){var a,l,d,u,c="modernizr",f=o("div"),p=i();if(parseInt(r,10))for(;r--;)d=o("div"),d.id=s?s[r]:c+(r+1),f.appendChild(d);return a=o("style"),a.type="text/css",a.id="s"+c,(p.fake?p:f).appendChild(a),p.appendChild(f),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),f.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",u=b.style.overflow,b.style.overflow="hidden",b.appendChild(p)),l=n(f,e),p.fake?(p.parentNode.removeChild(p),b.style.overflow=u,b.offsetHeight):f.parentNode.removeChild(f),!!l}function d(e,t){return!!~(""+e).indexOf(t)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function c(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,n){var s;for(var a in e)if(e[a]in t)return n===!1?e[a]:(s=t[e[a]],r(s,"function")?c(s,n||t):s);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function g(t,n,r){var s;if("getComputedStyle"in e){s=getComputedStyle.call(e,t,n);var a=e.console;if(null!==s)r&&(s=s.getPropertyValue(r));else if(a){var o=a.error?"error":"log";a[o].call(a,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else s=!n&&t.currentStyle&&t.currentStyle[r];return s}function m(t,r){var s=t.length;if("CSS"in e&&"supports"in e.CSS){for(;s--;)if(e.CSS.supports(p(t[s]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];s--;)a.push("("+p(t[s])+":"+r+")");return a=a.join(" or "),l("@supports ("+a+") { #modernizr { position: absolute; } }",function(e){return"absolute"==g(e,null,"position")})}return n}function v(e,t,s,a){function i(){c&&(delete O.style,delete O.modElem)}if(a=r(a,"undefined")?!1:a,!r(s,"undefined")){var l=m(e,s);if(!r(l,"undefined"))return l}for(var c,f,p,g,v,h=["modernizr","tspan","samp"];!O.style&&h.length;)c=!0,O.modElem=o(h.shift()),O.style=O.modElem.style;for(p=e.length,f=0;p>f;f++)if(g=e[f],v=O.style[g],d(g,"-")&&(g=u(g)),O.style[g]!==n){if(a||r(s,"undefined"))return i(),"pfx"==t?g:!0;try{O.style[g]=s}catch(y){}if(O.style[g]!=v)return i(),"pfx"==t?g:!0}return i(),!1}function h(e,t,n,s,a){var o=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+N.join(o+" ")+o).split(" ");return r(t,"string")||r(t,"undefined")?v(i,t,s,a):(i=(e+" "+j.join(o+" ")+o).split(" "),f(i,t,n))}function y(e,t,r){return h(e,n,n,t,r)}var S=[],w=[],T={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){w.push({name:e,fn:t,options:n})},addAsyncTest:function(e){w.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=T,Modernizr=new Modernizr,Modernizr.addTest("sessionstorage",function(){var e="modernizr";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}),Modernizr.addTest("svgfilters",function(){var t=!1;try{t="SVGFEColorMatrixElement"in e&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(n){}return t}),Modernizr.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(t){return!1}});var b=t.documentElement,x="svg"===b.nodeName.toLowerCase();Modernizr.addTest("bgpositionshorthand",function(){var e=o("a"),t=e.style,n="right 10px bottom 10px";return t.cssText="background-position: "+n+";",t.backgroundPosition===n}),Modernizr.addTest("inlinesvg",function(){var e=o("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)}),Modernizr.addTest("multiplebgs",function(){var e=o("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}),Modernizr.addTest("preserve3d",function(){var t,n,r=e.CSS,s=!1;return r&&r.supports&&r.supports("(transform-style: preserve-3d)")?!0:(t=o("a"),n=o("a"),t.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",n.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",t.appendChild(n),b.appendChild(t),s=n.getBoundingClientRect(),b.removeChild(t),s=s.width&&s.width<4)});var C={}.toString;Modernizr.addTest("svgclippaths",function(){return!!t.createElementNS&&/SVGClipPath/.test(C.call(t.createElementNS("http://www.w3.org/2000/svg","clipPath")))}),Modernizr.addTest("smil",function(){return!!t.createElementNS&&/SVGAnimate/.test(C.call(t.createElementNS("http://www.w3.org/2000/svg","animate")))}),Modernizr.addTest("svgforeignobject",function(){return!!t.createElementNS&&/SVGForeignObject/.test(C.call(t.createElementNS("http://www.w3.org/2000/svg","foreignObject")))});var E="CSS"in e&&"supports"in e.CSS,_="supportsCSS"in e;Modernizr.addTest("supports",E||_);var k=T._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];T._prefixes=k,Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=o("a");return n.style.cssText=e+k.join(t+e),!!n.style.length});var R=T.testStyles=l,z=function(){var e=navigator.userAgent,t=e.match(/w(eb)?osbrowser/gi),n=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;return t||n}();z?Modernizr.addTest("fontface",!1):R('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),s=r.sheet||r.styleSheet,a=s?s.cssRules&&s.cssRules[0]?s.cssRules[0].cssText:s.cssText||"":"",o=/src/i.test(a)&&0===a.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",o)});var P="Moz O ms Webkit",N=T._config.usePrefixes?P.split(" "):[];T._cssomPrefixes=N;var j=T._config.usePrefixes?P.toLowerCase().split(" "):[];T._domPrefixes=j;var A={elem:o("modernizr")};Modernizr._q.push(function(){delete A.elem});var O={style:A.elem.style};Modernizr._q.unshift(function(){delete O.style}),T.testAllProps=h,T.testAllProps=y,Modernizr.addTest("cssanimations",y("animationName","a",!0)),Modernizr.addTest("bgrepeatround",y("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",y("backgroundRepeat","space")),Modernizr.addTest("bgpositionxy",function(){return y("backgroundPositionX","3px",!0)&&y("backgroundPositionY","5px",!0)}),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&y("transform","scale(1)",!0)}),Modernizr.addTest("backgroundsize",y("backgroundSize","100%",!0)),Modernizr.addTest("csstransitions",y("transition","all",!0)),Modernizr.addTest("csstransforms3d",function(){return!!y("perspective","1px",!0)}),Modernizr.addTest("bgsizecover",y("backgroundSize","cover")),Modernizr.addTest("borderradius",y("borderRadius","0px",!0)),Modernizr.addTest("flexboxtweener",y("flexAlign","end",!0)),Modernizr.addTest("canvas",function(){var e=o("canvas");return!(!e.getContext||!e.getContext("2d"))});var V=o("canvas");Modernizr.addTest("todataurljpeg",function(){return!!Modernizr.canvas&&0===V.toDataURL("image/jpeg").indexOf("data:image/jpeg")}),Modernizr.addTest("todataurlpng",function(){return!!Modernizr.canvas&&0===V.toDataURL("image/png").indexOf("data:image/png")}),Modernizr.addTest("todataurlwebp",function(){var e=!1;try{e=!!Modernizr.canvas&&0===V.toDataURL("image/webp").indexOf("data:image/webp")}catch(t){}return e}),s(),a(S),delete T.addTest,delete T.addAsyncTest;for(var L=0;L<Modernizr._q.length;L++)Modernizr._q[L]();e.Modernizr=Modernizr}(window,document);
(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1127:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this.$createElement,e=this._self._c||t;return e("Slate",{attrs:{value:JSON.stringify(this.initialValue)}},[e("Editable",{attrs:{placeholder:"Enter some plain text...",renderElement:this.renderElement}})],1)};n._withStripped=!0;var a=r(5),o=r(0);function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=t[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){a=!0,o=t}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(t,e)||l(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){if(t){if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var u=function(t){var e=t.normalizeNode;return t.normalizeNode=function(r){var n=i(r,2),c=n[0],u=n[1];if(0===u.length){if(t.children.length<1){a.h.insertNodes(t,{type:"title",children:[{text:"Untitled"}]},{at:u.concat(0)})}if(t.children.length<2){a.h.insertNodes(t,{type:"paragraph",children:[{text:""}]},{at:u.concat(1)})}var s,f=function(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=l(t))){var e=0,r=function(){};return{s:r,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,a,o=!0,i=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){i=!0,a=t},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw a}}}}(o.c.children(t,u));try{for(f.s();!(s=f.n()).done;){var p=i(s.value,2),h=p[0],d=p[1],y=0===d[0]?"title":"paragraph";h.type!==y&&a.h.setNodes(t,{type:y},{at:d})}}catch(t){f.e(t)}finally{f.f()}}return e([c,u])},t};function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){p(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var h=function(t){var e=t.attributes,r=t.children,n=t.element;return{render:function(){var t=arguments[0];switch(n.type){case"title":return t("h2",{attrs:f({},e)},[r]);case"paragraph":return t("p",{attrs:f({},e)},[r])}}}},d=[{type:"title",children:[{text:"Enforce Your Layout!"}]},{type:"paragraph",children:[{text:"This example shows how to enforce your layout with domain-specific constraints. This document will always have a title block at the top and at least one paragraph in the body. Try deleting them and see what happens!"}]}],y={name:"index",components:{Slate:a.e,Editable:a.a},data:function(){return{initialValue:d,renderElement:h}},created:function(){u(this.$editor)}},b=r(6),m=Object(b.a)(y,n,[],!1,null,"11bb22c8",null);m.options.__file="site/pages/forced-layout/index.vue";e.default=m.exports}}]);
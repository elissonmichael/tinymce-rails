/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.1.5 (2019-12-19)
 */
!function(i){"use strict";function n(){}function u(n){return function(){return n}}function t(){return a}var e,r=tinymce.util.Tools.resolve("tinymce.PluginManager"),c=tinymce.util.Tools.resolve("tinymce.util.Tools"),o=function(n,t){var e,r=n.dom,o=n.selection.getSelectedBlocks();o.length&&(e=r.getAttrib(o[0],"dir"),c.each(o,function(n){r.getParent(n.parentNode,'*[dir="'+t+'"]',r.getRoot())||r.setAttrib(n,"dir",e!==t?t:null)}),n.nodeChanged())},d=function(n){n.addCommand("mceDirectionLTR",function(){o(n,"ltr")}),n.addCommand("mceDirectionRTL",function(){o(n,"rtl")})},f=u(!1),l=u(!0),a=(e={fold:function(n,t){return n()},is:f,isSome:f,isNone:l,getOr:s,getOrThunk:N,getOrDie:function(n){throw new Error(n||"error: getOrDie called on none.")},getOrNull:u(null),getOrUndefined:u(undefined),or:s,orThunk:N,map:t,each:n,bind:t,exists:f,forall:l,filter:t,equals:m,equals_:m,toArray:function(){return[]},toString:u("none()")},Object.freeze&&Object.freeze(e),e);function m(n){return n.isNone()}function N(n){return n()}function s(n){return n}function g(n,t){var e=n.dom(),r=i.window.getComputedStyle(e).getPropertyValue(t),o=""!==r||function(n){var t=A(n)?n.dom().parentNode:n.dom();return t!==undefined&&null!==t&&t.ownerDocument.body.contains(t)}(n)?r:w(e,t);return null===o?undefined:o}function T(t,r){return function(e){function n(n){var t=p.fromDom(n.element);e.setActive(function(n){return"rtl"===g(n,"direction")?"rtl":"ltr"}(t)===r)}return t.on("NodeChange",n),function(){return t.off("NodeChange",n)}}}var E,O,y=function(e){function n(){return o}function t(n){return n(e)}var r=u(e),o={fold:function(n,t){return t(e)},is:function(n){return e===n},isSome:l,isNone:f,getOr:r,getOrThunk:r,getOrDie:r,getOrNull:r,getOrUndefined:r,or:n,orThunk:n,map:function(n){return y(n(e))},each:function(n){n(e)},bind:t,exists:t,forall:t,filter:function(n){return n(e)?o:a},toArray:function(){return[e]},toString:function(){return"some("+e+")"},equals:function(n){return n.is(e)},equals_:function(n,t){return n.fold(f,function(n){return t(e,n)})}};return o},D=function(n){return null===n||n===undefined?a:y(n)},h=function(n){if(null===n||n===undefined)throw new Error("Node cannot be null or undefined");return{dom:u(n)}},p={fromHtml:function(n,t){var e=(t||i.document).createElement("div");if(e.innerHTML=n,!e.hasChildNodes()||1<e.childNodes.length)throw i.console.error("HTML does not have a single root node",n),new Error("HTML must have a single root node");return h(e.childNodes[0])},fromTag:function(n,t){var e=(t||i.document).createElement(n);return h(e)},fromText:function(n,t){var e=(t||i.document).createTextNode(n);return h(e)},fromDom:h,fromPoint:function(n,t,e){var r=n.dom();return D(r.elementFromPoint(t,e)).map(h)}},_=(E="function",function(n){return function(n){if(null===n)return"null";var t=typeof n;return"object"==t&&(Array.prototype.isPrototypeOf(n)||n.constructor&&"Array"===n.constructor.name)?"array":"object"==t&&(String.prototype.isPrototypeOf(n)||n.constructor&&"String"===n.constructor.name)?"string":t}(n)===E}),v=Array.prototype.slice,C=(_(Array.from)&&Array.from,i.Node.ATTRIBUTE_NODE,i.Node.CDATA_SECTION_NODE,i.Node.COMMENT_NODE,i.Node.DOCUMENT_NODE,i.Node.DOCUMENT_TYPE_NODE,i.Node.DOCUMENT_FRAGMENT_NODE,i.Node.ELEMENT_NODE,i.Node.TEXT_NODE),A=(i.Node.PROCESSING_INSTRUCTION_NODE,i.Node.ENTITY_REFERENCE_NODE,i.Node.ENTITY_NODE,i.Node.NOTATION_NODE,"undefined"!=typeof i.window?i.window:Function("return this;")(),O=C,function(n){return function(n){return n.dom().nodeType}(n)===O}),w=function(n,t){return function(n){return n.style!==undefined&&_(n.style.getPropertyValue)}(n)?n.style.getPropertyValue(t):""},S=function(n){n.ui.registry.addToggleButton("ltr",{tooltip:"Left to right",icon:"ltr",onAction:function(){return n.execCommand("mceDirectionLTR")},onSetup:T(n,"ltr")}),n.ui.registry.addToggleButton("rtl",{tooltip:"Right to left",icon:"rtl",onAction:function(){return n.execCommand("mceDirectionRTL")},onSetup:T(n,"rtl")})};!function R(){r.add("directionality",function(n){d(n),S(n)})}()}(window);
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 *
 * Version: 5.1.5 (2019-12-19)
 */
!function(){"use strict";function i(t,e){if(e<0&&(e=0),3===t.nodeType){var n=t.data.length;n<e&&(e=n)}return e}function C(t,e,n){1!==e.nodeType||e.hasChildNodes()?t.setStart(e,i(e,n)):t.setStartBefore(e)}function m(t,e,n){1!==e.nodeType||e.hasChildNodes()?t.setEnd(e,i(e,n)):t.setEndAfter(e)}var t=tinymce.util.Tools.resolve("tinymce.PluginManager"),o=tinymce.util.Tools.resolve("tinymce.Env"),y=function(t){return t.getParam("autolink_pattern",/^(https?:\/\/|ssh:\/\/|ftp:\/\/|file:\/|www\.|(?:mailto:)?[A-Z0-9._%+\-]+@)(.+)$/i)},k=function(t){return t.getParam("default_link_target",!1)},r=function(t,e,n){var i,o,r,f,a,s,d,c,l,u,g=y(t),h=k(t);if("A"!==t.selection.getNode().tagName){if((i=t.selection.getRng(!0).cloneRange()).startOffset<5){if(!(c=i.endContainer.previousSibling)){if(!i.endContainer.firstChild||!i.endContainer.firstChild.nextSibling)return;c=i.endContainer.firstChild.nextSibling}if(l=c.length,C(i,c,l),m(i,c,l),i.endOffset<5)return;o=i.endOffset,f=c}else{if(3!==(f=i.endContainer).nodeType&&f.firstChild){for(;3!==f.nodeType&&f.firstChild;)f=f.firstChild;3===f.nodeType&&(C(i,f,0),m(i,f,f.nodeValue.length))}o=1===i.endOffset?2:i.endOffset-1-e}for(r=o;C(i,f,2<=o?o-2:0),m(i,f,1<=o?o-1:0),o-=1," "!==(u=i.toString())&&""!==u&&160!==u.charCodeAt(0)&&0<=o-2&&u!==n;);!function(t,e){return t===e||" "===t||160===t.charCodeAt(0)}(i.toString(),n)?(0===i.startOffset?C(i,f,0):C(i,f,o),m(i,f,r)):(C(i,f,o),m(i,f,r),o+=1),"."===(s=i.toString()).charAt(s.length-1)&&m(i,f,r-1),(d=(s=i.toString().trim()).match(g))&&("www."===d[1]?d[1]="http://www.":/@$/.test(d[1])&&!/^mailto:/.test(d[1])&&(d[1]="mailto:"+d[1]),a=t.selection.getBookmark(),t.selection.setRng(i),t.execCommand("createlink",!1,d[1]+d[2]),!1!==h&&t.dom.setAttrib(t.selection.getNode(),"target",h),t.selection.moveToBookmark(a),t.nodeChanged())}},e=function(e){var n;e.on("keydown",function(t){if(13===t.keyCode)return function(t){r(t,-1,"")}(e)}),o.browser.isIE()?e.on("focus",function(){if(!n){n=!0;try{e.execCommand("AutoUrlDetect",!1,!0)}catch(t){}}}):(e.on("keypress",function(t){if(41===t.keyCode)return function(t){r(t,-1,"(")}(e)}),e.on("keyup",function(t){if(32===t.keyCode)return function(t){r(t,0,"")}(e)}))};!function n(){t.add("autolink",function(t){e(t)})}()}();
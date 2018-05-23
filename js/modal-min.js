!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e(t.bootstrap={},t.jQuery,t.Popper)}(this,function(t,$,e){"use strict";function n(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}function o(){return o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},o.apply(this,arguments)}function s(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}$=$&&$.hasOwnProperty("default")?$.default:$,e=e&&e.hasOwnProperty("default")?e.default:e;var r=function(t){function e(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function n(){return{bindType:a.end,delegateType:a.end,handle:function e(n){if(t(n.target).is(this))return n.handleObj.handler.apply(this,arguments)}}}function i(){return("undefined"==typeof window||!window.QUnit)&&{end:"transitionend"}}function o(e){var n=this,i=!1;return t(this).one(l.TRANSITION_END,function(){i=!0}),setTimeout(function(){i||l.triggerTransitionEnd(n)},e),this}function s(){a=i(),t.fn.emulateTransitionEnd=o,l.supportsTransitionEnd()&&(t.event.special[l.TRANSITION_END]=n())}function r(e){return e="function"==typeof t.escapeSelector?t.escapeSelector(e).substr(1):e.replace(/(:|\.|\[|\]|,|=|@)/g,"\\$1")}var a=!1,d=1e6,l={TRANSITION_END:"bsTransitionEnd",getUID:function t(e){do{e+=~~(1e6*Math.random())}while(document.getElementById(e));return e},getSelectorFromElement:function e(n){var i=n.getAttribute("data-target");i&&"#"!==i||(i=n.getAttribute("href")||""),"#"===i.charAt(0)&&(i=r(i));try{return t(document).find(i).length>0?i:null}catch(t){return null}},reflow:function t(e){return e.offsetHeight},triggerTransitionEnd:function e(n){t(n).trigger(a.end)},supportsTransitionEnd:function t(){return Boolean(a)},isElement:function t(e){return(e[0]||e).nodeType},typeCheckConfig:function t(n,i,o){for(var s in o)if(Object.prototype.hasOwnProperty.call(o,s)){var r=o[s],a=i[s],d=a&&l.isElement(a)?"element":e(a);if(!new RegExp(r).test(d))throw new Error(n.toUpperCase()+': Option "'+s+'" provided type "'+d+'" but expected type "'+r+'".')}}};return s(),l}($),a=function(t){var e="modal",n="4.0.0",s="bs.modal",a=".bs.modal",d=".data-api",l=t.fn[e],h=300,c=150,u=27,_={backdrop:!0,keyboard:!0,focus:!0,show:!0},f={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},p={HIDE:"hide.bs.modal",HIDDEN:"hidden.bs.modal",SHOW:"show.bs.modal",SHOWN:"shown.bs.modal",FOCUSIN:"focusin.bs.modal",RESIZE:"resize.bs.modal",CLICK_DISMISS:"click.dismiss.bs.modal",KEYDOWN_DISMISS:"keydown.dismiss.bs.modal",MOUSEUP_DISMISS:"mouseup.dismiss.bs.modal",MOUSEDOWN_DISMISS:"mousedown.dismiss.bs.modal",CLICK_DATA_API:"click.bs.modal.data-api"},g={SCROLLBAR_MEASURER:"modal-scrollbar-measure",BACKDROP:"modal-backdrop",OPEN:"modal-open",FADE:"fade",SHOW:"show"},m={DIALOG:".modal-dialog",DATA_TOGGLE:'[data-toggle="modal"]',DATA_DISMISS:'[data-dismiss="modal"]',FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"},S=function(){function n(e,n){this._config=this._getConfig(n),this._element=e,this._dialog=t(e).find(m.DIALOG)[0],this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._originalBodyPadding=0,this._scrollbarWidth=0}var d=n.prototype;return d.toggle=function t(e){return this._isShown?this.hide():this.show(e)},d.show=function e(n){var i=this;if(!this._isTransitioning&&!this._isShown){r.supportsTransitionEnd()&&t(this._element).hasClass(g.FADE)&&(this._isTransitioning=!0);var o=t.Event(p.SHOW,{relatedTarget:n});t(this._element).trigger(o),this._isShown||o.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),t(document.body).addClass(g.OPEN),this._setEscapeEvent(),this._setResizeEvent(),t(this._element).on(p.CLICK_DISMISS,m.DATA_DISMISS,function(t){return i.hide(t)}),t(this._dialog).on(p.MOUSEDOWN_DISMISS,function(){t(i._element).one(p.MOUSEUP_DISMISS,function(e){t(e.target).is(i._element)&&(i._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return i._showElement(n)}))}},d.hide=function e(n){var i=this;if(n&&n.preventDefault(),!this._isTransitioning&&this._isShown){var o=t.Event(p.HIDE);if(t(this._element).trigger(o),this._isShown&&!o.isDefaultPrevented()){this._isShown=!1;var s=r.supportsTransitionEnd()&&t(this._element).hasClass(g.FADE);s&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),t(document).off(p.FOCUSIN),t(this._element).removeClass(g.SHOW),t(this._element).off(p.CLICK_DISMISS),t(this._dialog).off(p.MOUSEDOWN_DISMISS),s?t(this._element).one(r.TRANSITION_END,function(t){return i._hideModal(t)}).emulateTransitionEnd(300):this._hideModal()}}},d.dispose=function e(){t.removeData(this._element,s),t(window,document,this._element,this._backdrop).off(a),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._scrollbarWidth=null},d.handleUpdate=function t(){this._adjustDialog()},d._getConfig=function t(n){return n=o({},_,n),r.typeCheckConfig(e,n,f),n},d._showElement=function e(n){var i=this,o=r.supportsTransitionEnd()&&t(this._element).hasClass(g.FADE);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.scrollTop=0,o&&r.reflow(this._element),t(this._element).addClass(g.SHOW),this._config.focus&&this._enforceFocus();var s=t.Event(p.SHOWN,{relatedTarget:n}),a=function e(){i._config.focus&&i._element.focus(),i._isTransitioning=!1,t(i._element).trigger(s)};o?t(this._dialog).one(r.TRANSITION_END,a).emulateTransitionEnd(300):a()},d._enforceFocus=function e(){var n=this;t(document).off(p.FOCUSIN).on(p.FOCUSIN,function(e){document!==e.target&&n._element!==e.target&&0===t(n._element).has(e.target).length&&n._element.focus()})},d._setEscapeEvent=function e(){var n=this;this._isShown&&this._config.keyboard?t(this._element).on(p.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),n.hide())}):this._isShown||t(this._element).off(p.KEYDOWN_DISMISS)},d._setResizeEvent=function e(){var n=this;this._isShown?t(window).on(p.RESIZE,function(t){return n.handleUpdate(t)}):t(window).off(p.RESIZE)},d._hideModal=function e(){var n=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._isTransitioning=!1,this._showBackdrop(function(){t(document.body).removeClass(g.OPEN),n._resetAdjustments(),n._resetScrollbar(),t(n._element).trigger(p.HIDDEN)})},d._removeBackdrop=function e(){this._backdrop&&(t(this._backdrop).remove(),this._backdrop=null)},d._showBackdrop=function e(n){var i=this,o=t(this._element).hasClass(g.FADE)?g.FADE:"";if(this._isShown&&this._config.backdrop){var s=r.supportsTransitionEnd()&&o;if(this._backdrop=document.createElement("div"),this._backdrop.className=g.BACKDROP,o&&t(this._backdrop).addClass(o),t(this._backdrop).appendTo(document.body),t(this._element).on(p.CLICK_DISMISS,function(t){if(i._ignoreBackdropClick)return void(i._ignoreBackdropClick=!1);t.target===t.currentTarget&&("static"===i._config.backdrop?i._element.focus():i.hide())}),s&&r.reflow(this._backdrop),t(this._backdrop).addClass(g.SHOW),!n)return;if(!s)return void n();t(this._backdrop).one(r.TRANSITION_END,n).emulateTransitionEnd(150)}else if(!this._isShown&&this._backdrop){t(this._backdrop).removeClass(g.SHOW);var a=function t(){i._removeBackdrop(),n&&n()};r.supportsTransitionEnd()&&t(this._element).hasClass(g.FADE)?t(this._backdrop).one(r.TRANSITION_END,a).emulateTransitionEnd(150):a()}else n&&n()},d._adjustDialog=function t(){var e=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&e&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!e&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},d._resetAdjustments=function t(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},d._checkScrollbar=function t(){var e=document.body.getBoundingClientRect();this._isBodyOverflowing=e.left+e.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},d._setScrollbar=function e(){var n=this;if(this._isBodyOverflowing){t(m.FIXED_CONTENT).each(function(e,i){var o=t(i)[0].style.paddingRight,s=t(i).css("padding-right");t(i).data("padding-right",o).css("padding-right",parseFloat(s)+n._scrollbarWidth+"px")}),t(m.STICKY_CONTENT).each(function(e,i){var o=t(i)[0].style.marginRight,s=t(i).css("margin-right");t(i).data("margin-right",o).css("margin-right",parseFloat(s)-n._scrollbarWidth+"px")}),t(m.NAVBAR_TOGGLER).each(function(e,i){var o=t(i)[0].style.marginRight,s=t(i).css("margin-right");t(i).data("margin-right",o).css("margin-right",parseFloat(s)+n._scrollbarWidth+"px")});var i=document.body.style.paddingRight,o=t("body").css("padding-right");t("body").data("padding-right",i).css("padding-right",parseFloat(o)+this._scrollbarWidth+"px")}},d._resetScrollbar=function e(){t(m.FIXED_CONTENT).each(function(e,n){var i=t(n).data("padding-right");void 0!==i&&t(n).css("padding-right",i).removeData("padding-right")}),t(m.STICKY_CONTENT+", "+m.NAVBAR_TOGGLER).each(function(e,n){var i=t(n).data("margin-right");void 0!==i&&t(n).css("margin-right",i).removeData("margin-right")});var n=t("body").data("padding-right");void 0!==n&&t("body").css("padding-right",n).removeData("padding-right")},d._getScrollbarWidth=function t(){var e=document.createElement("div");e.className=g.SCROLLBAR_MEASURER,document.body.appendChild(e);var n=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),n},n._jQueryInterface=function e(i,r){return this.each(function(){var e=t(this).data(s),a=o({},n.Default,t(this).data(),"object"==typeof i&&i);if(e||(e=new n(this,a),t(this).data(s,e)),"string"==typeof i){if(void 0===e[i])throw new TypeError('No method named "'+i+'"');e[i](r)}else a.show&&e.show(r)})},i(n,null,[{key:"VERSION",get:function t(){return"4.0.0"}},{key:"Default",get:function t(){return _}}]),n}();return t(document).on(p.CLICK_DATA_API,m.DATA_TOGGLE,function(e){var n=this,i,a=r.getSelectorFromElement(this);a&&(i=t(a)[0]);var d=t(i).data(s)?"toggle":o({},t(i).data(),t(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||e.preventDefault();var l=t(i).one(p.SHOW,function(e){e.isDefaultPrevented()||l.one(p.HIDDEN,function(){t(n).is(":visible")&&n.focus()})});S._jQueryInterface.call(t(i),d,this)}),t.fn[e]=S._jQueryInterface,t.fn[e].Constructor=S,t.fn[e].noConflict=function(){return t.fn[e]=l,S._jQueryInterface},S}($)});
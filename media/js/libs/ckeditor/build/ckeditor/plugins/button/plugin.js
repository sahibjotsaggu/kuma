﻿/*
 Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or http://ckeditor.com/license
*/
(function(){var c='<a id="{id}" class="cke_button cke_button__{name} cke_button_{state} {cls}"'+(CKEDITOR.env.gecko&&!CKEDITOR.env.hc?"":" href=\"javascript:void('{titleJs}')\"")+' title="{title}" tabindex="-1" hidefocus="true" role="button" aria-labelledby="{id}_label" aria-haspopup="{hasArrow}" aria-disabled="{ariaDisabled}"';CKEDITOR.env.gecko&&CKEDITOR.env.mac&&(c+=' onkeypress="return false;"');CKEDITOR.env.gecko&&(c+=' onblur="this.style.cssText = this.style.cssText;"');var c=c+(' onkeydown="return CKEDITOR.tools.callFunction({keydownFn},event);" onfocus="return CKEDITOR.tools.callFunction({focusFn},event);" '+
(CKEDITOR.env.ie?'onclick="return false;" onmouseup':"onclick")+'="CKEDITOR.tools.callFunction({clickFn},this);return false;"><span class="cke_button_icon cke_button__{iconName}_icon" style="{style}"'),c=c+'>&nbsp;</span><span id="{id}_label" class="cke_button_label cke_button__{name}_label" aria-hidden="false">{label}</span>{arrowHtml}</a>',m=CKEDITOR.addTemplate("buttonArrow",'<span class="cke_button_arrow">'+(CKEDITOR.env.hc?"&#9660;":"")+"</span>"),n=CKEDITOR.addTemplate("button",c);CKEDITOR.plugins.add("button",
{lang:"ca,cs,de,el,en,en-gb,eo,fa,fi,fr,gl,he,hu,it,ja,km,nb,nl,pl,pt,pt-br,ro,ru,sk,sl,sv,tr,tt,uk,vi,zh-cn",beforeInit:function(a){a.ui.addHandler(CKEDITOR.UI_BUTTON,CKEDITOR.ui.button.handler)}});CKEDITOR.UI_BUTTON="button";CKEDITOR.ui.button=function(a){CKEDITOR.tools.extend(this,a,{title:a.label,click:a.click||function(b){b.execCommand(a.command)}});this._={}};CKEDITOR.ui.button.handler={create:function(a){return new CKEDITOR.ui.button(a)}};CKEDITOR.ui.button.prototype={render:function(a,b){var c=
CKEDITOR.env,i=this._.id=CKEDITOR.tools.getNextId(),e="",f=this.command,k;this._.editor=a;var d={id:i,button:this,editor:a,focus:function(){CKEDITOR.document.getById(i).focus()},execute:function(){this.button.click(a)},attach:function(a){this.button.attach(a)}},o=CKEDITOR.tools.addFunction(function(a){if(d.onkey)return a=new CKEDITOR.dom.event(a),!1!==d.onkey(d,a.getKeystroke())}),p=CKEDITOR.tools.addFunction(function(a){var b;d.onfocus&&(b=!1!==d.onfocus(d,new CKEDITOR.dom.event(a)));return b}),
l=0;d.clickFn=k=CKEDITOR.tools.addFunction(function(){l&&(a.unlockSelection(1),l=0);d.execute();c.iOS&&a.focus()});if(this.modes){var j={},g=function(){var b=a.mode;b&&(b=this.modes[b]?void 0!=j[b]?j[b]:CKEDITOR.TRISTATE_OFF:CKEDITOR.TRISTATE_DISABLED,b=a.readOnly&&!this.readOnly?CKEDITOR.TRISTATE_DISABLED:b,this.setState(b),this.refresh&&this.refresh())};a.on("beforeModeUnload",function(){a.mode&&this._.state!=CKEDITOR.TRISTATE_DISABLED&&(j[a.mode]=this._.state)},this);a.on("activeFilterChange",
g,this);a.on("mode",g,this);!this.readOnly&&a.on("readOnly",g,this)}else if(f&&(f=a.getCommand(f)))f.on("state",function(){this.setState(f.state)},this),e+=f.state==CKEDITOR.TRISTATE_ON?"on":f.state==CKEDITOR.TRISTATE_DISABLED?"disabled":"off";if(this.directional)a.on("contentDirChanged",function(b){var c=CKEDITOR.document.getById(this._.id),d=c.getFirst(),b=b.data;b!=a.lang.dir?c.addClass("cke_"+b):c.removeClass("cke_ltr").removeClass("cke_rtl");d.setAttribute("style",CKEDITOR.skin.getIconStyle(h,
"rtl"==b,this.icon,this.iconOffset))},this);f||(e+="off");var h=g=this.name||this.command;this.icon&&!/\./.test(this.icon)&&(h=this.icon,this.icon=null);e={id:i,name:g,iconName:h,label:this.label,cls:this.className||"",state:e,ariaDisabled:"disabled"==e?"true":"false",title:this.title,titleJs:c.gecko&&!c.hc?"":(this.title||"").replace("'",""),hasArrow:this.hasArrow?"true":"false",keydownFn:o,focusFn:p,clickFn:k,style:CKEDITOR.skin.getIconStyle(h,"rtl"==a.lang.dir,this.icon,this.iconOffset),arrowHtml:this.hasArrow?
m.output():""};n.output(e,b);if(this.onRender)this.onRender();return d},setState:function(a){if(this._.state==a)return!1;this._.state=a;var b=CKEDITOR.document.getById(this._.id);return b?(b.setState(a,"cke_button"),a==CKEDITOR.TRISTATE_DISABLED?b.setAttribute("aria-disabled",!0):b.removeAttribute("aria-disabled"),this.hasArrow?(a=a==CKEDITOR.TRISTATE_ON?this._.editor.lang.button.selectedLabel.replace(/%1/g,this.label):this.label,CKEDITOR.document.getById(this._.id+"_label").setText(a)):a==CKEDITOR.TRISTATE_ON?
b.setAttribute("aria-pressed",!0):b.removeAttribute("aria-pressed"),!0):!1},getState:function(){return this._.state},toFeature:function(a){if(this._.feature)return this._.feature;var b=this;!this.allowedContent&&(!this.requiredContent&&this.command)&&(b=a.getCommand(this.command)||b);return this._.feature=b}};CKEDITOR.ui.prototype.addButton=function(a,b){this.add(a,CKEDITOR.UI_BUTTON,b)}})();
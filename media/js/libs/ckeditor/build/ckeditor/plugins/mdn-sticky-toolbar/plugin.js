﻿(function(){CKEDITOR.plugins.add("mdn-sticky-toolbar",{init:function(d){function j(){if(k){var c=n.getScrollPosition().y,e=a.getDocumentPosition().y,f=d.container.getClientRect();c>e&&f.bottom>i?g||(g=!0,b.setStyles({position:"fixed",top:0})):g&&(g=!1,b.setStyles({position:"relative"}))}}function l(){e.replace(f);h.replace(c);b.append(f);b.append(c);c.setStyle("border-top",null);b.setStyle("border","1px solid #B6B6B6")}var a,b,f,c,e,h,g=!1,k=!1,m,i,n=CKEDITOR.document.getWindow();CKEDITOR.document.on("scroll",
j);d.on("loaded",function(){f=d.ui.space("top");c=d.ui.space("bottom");a=new CKEDITOR.dom.element("div");b=new CKEDITOR.dom.element("div");e=new CKEDITOR.dom.element("span");h=new CKEDITOR.dom.element("span");e.setStyle("display","none");h.setStyle("display","none");a.insertBefore(d.container);a.append(b);l();m=a.getSize("width");i=a.getSize("height");b.setStyle("width",m+"px");a.setStyle("height",i+"px");k=!0;setTimeout(function(){j()},500)},null,null,999);d.on("beforeCommandExec",function(a){"maximize"==
a.data.name&&(a.data.command.state==CKEDITOR.TRISTATE_OFF?(f.replace(e),c.replace(h),c.removeStyle("border-top"),b.removeStyle("border")):l())})}})})();
﻿(function(){function d(a){return a.mime.toLowerCase()in{"image/png":1,"image/jpeg":1,"image/jpg":1,"image/pjpeg":1,"image/gif":1,"image/bmp":1,"image/x-windows-bmp":1,"image/svg+xml":1}}CKEDITOR.plugins.add("mdn-image-attachment",{requires:"image,mdn-attachment",onLoad:function(){CKEDITOR.on("dialogDefinition",function(a){var b=a.data.definition;"image"==a.data.name&&(a=b.getContents("info"),a.add({type:"vbox",children:[{type:"select",id:"attachment",label:gettext("Attachments"),items:[],onChange:function(){var a=
this.getValue(),b=this.getDialog(),c=mdn.ckeditor.getObjectByUrl(a);b.setValueOf("info","txtUrl",a);!b.getValueOf("info","txtAlt")&&c&&b.setValueOf("info","txtAlt",c.description)}}]}),a.elements.unshift(a.elements.pop()))})},init:function(a){a.on("dialogShow",function(a){a=a.data;if("image"==a.getName()){var e=a.getContentElement("info","attachment");mdn.ckeditor.updateAttachments(e,a.getValueOf("info","txtUrl"),d)}})}})})();
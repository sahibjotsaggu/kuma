﻿CKEDITOR.plugins.add("mdn-system-integration",{icons:"mdn-preview,mdn-save-edit-moono,mdn-save",init:function(a){var c=CKEDITOR.document.findOne(".page-buttons"),b=c.findOne(".btn-save-and-edit"),d=c.findOne(".btn-save"),e=c.findOne(".btn-preview");if(!d||!e)throw Error("[CKEDITOR plugin:mdn-system-integration] Page buttons have not been found");b&&a.addCommand("mdn-save-edit",{modes:{wysiwyg:1,source:1},exec:function(a){a.updateElement();b.$.click()}});a.addCommand("mdn-save",{modes:{wysiwyg:1,source:1},
exec:function(a){a.updateElement();d.$.click()}});a.addCommand("mdn-preview",{exec:function(a){a.updateElement();e.$.click()}});b&&a.ui.addButton("MdnSaveEdit",{icon:"mdn-save-edit-moono",label:b.getText(),command:"mdn-save-edit",toolbar:"document,100"});a.ui.addButton("MdnSave",{icon:"mdn-save",label:d.getText(),command:"mdn-save",toolbar:"document,110"});a.ui.addButton("MdnPreview",{icon:"mdn-preview",label:e.getText(),command:"mdn-preview",toolbar:"document,130"})}});
window.fukidashiGenerator={Models:{},Collections:{},Views:{},Routers:{},init:function(){"use strict";var a=new this.Models.SerifuModel({text:"な、なんだってー"}),b=new this.Views.EditorView({el:$("#editorView"),model:a}),c=new this.Views.FukidashiView({el:$("#fukidashiView"),model:a});b.render(),c.render()}},$(document).ready(function(){"use strict";fukidashiGenerator.init()}),this.JST=this.JST||{},this.JST["app/scripts/templates/editor.ejs"]=function(obj){obj||(obj={});{var __t,__p="";_.escape}with(obj)__p+='<form class="form" role="form">\n    <div class="form-group">\n        <textarea class="form-control form-control-serifu" rows="3">'+(null==(__t=serifu.text)?"":__t)+"</textarea>\n    </div>\n</form>";return __p},this.JST["app/scripts/templates/fukidashi.ejs"]=function(obj){obj||(obj={});{var __t,__p="";_.escape,Array.prototype.join}with(obj)__p+='<p class="fukidashi">\n＿'+(null==(__t=top)?"":__t)+"＿<br/>\n",_.each(contents,function(a){__p+="＞ "+(null==(__t=a)?"":__t)+" ＜<br/>"}),__p+="\n￣"+(null==(__t=bottom)?"":__t)+"￣<br/>\n</p>\n\n";return __p},fukidashiGenerator.Models=fukidashiGenerator.Models||{},function(){"use strict";fukidashiGenerator.Models.SerifuModel=Backbone.Model.extend({defaults:{text:""},initialize:function(){}})}(),fukidashiGenerator.Views=fukidashiGenerator.Views||{},function(){"use strict";fukidashiGenerator.Views.FukidashiView=Backbone.View.extend({template:JST["app/scripts/templates/fukidashi.ejs"],initialize:function(){_.bindAll(this,"textChanged"),this.listenTo(this.model,"change:text",this.textChanged)},textChanged:function(){this.render()},render:function(){var a=this.model.get("text").split(/\r\n|\r|\n/),b=0;_.each(a,function(a){b=Math.max(b,this.calcTextWidth(a))},this),_.each(a,function(a,c,d){var e=this.calcTextWidth(a);b>e&&(d[c]=a+this.repeatChar("　",b-e))},this),b=Math.min(18,b),$(this.el).html(this.template({top:this.repeatChar("人",b),contents:a,bottom:this.repeatChar("^Y",b/1.15)}))},calcTextWidth:function(a){for(var b=0,c=0;c<a.length;c++){var d=a.charCodeAt(c);b+=256>d||d>=65377&&65439>=d?.5:1}return b},repeatChar:function(a,b){for(var c="",d=0;d<Math.floor(b+.5);d++)c+=a;return c}})}(),fukidashiGenerator.Views=fukidashiGenerator.Views||{},function(){"use strict";fukidashiGenerator.Views.EditorView=Backbone.View.extend({events:{"change .form-control-serifu":"textChanged"},template:JST["app/scripts/templates/editor.ejs"],render:function(){console.log(this.model.attributes),$(this.el).html(this.template({serifu:this.model.attributes}))},textChanged:function(){this.model.set("text",this.$(".form-control-serifu").val())}})}();
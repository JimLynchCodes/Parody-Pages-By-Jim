/*!CK:1287536164!*//*1452822205,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["dtL\/z"]); }

__d('ReactComposerFeedStore',['ReactComposerActionStore','ReactComposerMediaConfig','ReactComposerPostUtils'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k,l;k=babelHelpers.inherits(m,h);l=k&&k.prototype;function m(){'use strict';l.constructor.call(this);}m.prototype.__onPostStarted=function(n){'use strict';j.post({actorID:n.actorID,composerID:n.composerID,contextInfo:n.config.contextInfo,targetID:n.targetID});};m.prototype.__canPost=function(n){'use strict';return !j.isPostButtonDisabled(n.composerID,i.photo.limit);};f.exports=new m();},null);
__d("XEventEmailToIDController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/events\/email_to_id\/",{email:{type:"String",required:true}});},null);
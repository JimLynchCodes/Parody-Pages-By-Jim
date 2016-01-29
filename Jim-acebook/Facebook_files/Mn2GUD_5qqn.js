/*!CK:1677243319!*//*1453801022,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["+tr0n"]); }

__d('EmployeeLinkRanges',['EmployeeLinkMatcher'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i={PHABRICATOR_PREFIX:'https://phabricator.fb.com/',TASKS_PREFIX:'https://our.intern.facebook.com/intern/tasks/?t=',get:function(j){var k=arguments.length<=1||arguments[1]===undefined?0:arguments[1],l=j.substr(k),m=h.match(l);if(!m)return [];var n=m.lnk;k+=m.idx;var o='';switch(n[0].toLowerCase()){case 'd':case 'p':o=this.PHABRICATOR_PREFIX+n.toUpperCase();break;case 't':o=this.TASKS_PREFIX+n.substr(1);break;default:return [];}var p=n.length,q=[{offset:k,length:p,entity:{url:o}}];return q.concat(this.get(j,k+p));}};f.exports=i;},null);
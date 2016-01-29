/*!CK:2415705212!*//*1453801022,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["2Mn54"]); }

__d('EmployeeLinkMatcher',['CurrentUser'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=new RegExp('^[\\s.,:]'),j=new RegExp('(?:[\\s.,:]|^)([DTP]\\d{4,})(?:[\\s.,:?]|$)','im'),k=function(n){if(!h.isEmployee())return null;var o=j.exec(n);if(o==null)return null;return {lnk:o[1],idx:o.index+(i.exec(o[0])?1:0)};},l=function(n){var o=h.isEmployee()&&j.exec(n)!=null;return o;},m={match:k,isMatch:l};f.exports=m;},null);
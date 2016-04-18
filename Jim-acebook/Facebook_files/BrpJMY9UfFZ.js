/*!CK:2500832087!*//*1453402438,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["hDVs3"]); }

__d('NotificationImpressions',['AsyncSignal','NotificationTokens','URI'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k='/ajax/notifications/impression.php';function l(m,n){var o={ref:n};i.untokenizeIDs(m).forEach(function(p,q){o['alert_ids['+q+']']=p;});new h(new j(k).getQualifiedURI().toString(),o).send();}f.exports={log:l};},null);
__d('NotificationBeeperConst',['keyMirror'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={IDLE_DELAY:10000,ACTIVE_DELAY_LONG:4000,FADE_OUT_LENGTH:1500,BeepStates:h({PENDING:true,RENDERED:true,READY_TO_HIDE:true,FADING_OUT:true})};f.exports=i;},null);
__d('NotificationBeeperItemContents.react',['Animation','AsyncRequest','Bootloader','FBProfilePhotoShadow.react','Image.react','ImageBlock.react','NotificationBeeperItemCloseButton.react','NotificationURI','NotificationUserActions','React','ReactDOM','TextWithEntities.react','Timestamp.react','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){if(c.__markCompiled)c.__markCompiled();function v(x,y){return q.createElement('span',{className:'fwb'},x);}var w=q.createClass({displayName:'NotificationBeeperItemContents',_markAsRead:function(){p.markNotificationsAsRead([this.props.beep.notificationID]);},_onClick:function(x){this._markAsRead();this.props.onHide();if(x.button===1||x.altKey||x.ctrlKey||x.metaKey||x.shiftKey)return;var y=this.props.beep;if(o.isAlbumDraftRecoveryDialogURI(y.link)){new i(y.link).send();x.preventDefault();}else if(y.photo&&o.snowliftable(y.link)){j.loadModules(["PhotoSnowlift"],function(z){z.bootstrap(y.link,x.currentTarget);});x.preventDefault();}else if(y.ajaxifyLink){j.loadModules(["AsyncDialog"],function(z){z.bootstrap(y.ajaxifyLink,x.currentTarget,'dialog');});x.preventDefault();}},_onClose:function(){this._markAsRead();this.props.onHide();},_doFlash:function(){new h(r.findDOMNode(this.refs.inner)).from('opacity','0').to('opacity','1').duration(200).go();},componentDidMount:function(){this.props.onReadyToHide(this.props.beep.notificationID);},componentDidUpdate:function(x){if(x.beep.beepID!==this.props.beep.beepID){this._doFlash();this.props.onReadyToHide(this.props.beep.notificationID);}},render:function(){var x=this.props.beep;return (q.createElement('div',{ref:'inner'},q.createElement(n,{onClick:this._onClose}),q.createElement('a',{href:x.link,onClick:this._onClick,className:"_3soi"},q.createElement(m,{className:"_3soj",spacing:'medium'},q.createElement(k,{className:"_2yt7"},q.createElement(l,{src:x.actors[0].profile_picture.uri,className:"_3sok"})),q.createElement('div',{className:"_3sol"},q.createElement(s,{renderEmoticons:true,renderEmoji:true,interpolator:v,ranges:x.text.ranges,aggregatedranges:x.text.aggregated_ranges,text:x.text.text}),q.createElement(m,{className:"_3som"},q.createElement(l,{className:"_1x8t",src:x.icon.uri}),q.createElement(t,{time:x.timestamp.time,text:x.timestamp.text,verbose:x.timestamp.verbose})))))));}});f.exports=w;},null);
__d('NotificationBeeperItem.react',['Animation','BrowserSupport','NotificationBeeperItemContents.react','React','ReactDOM','NotificationBeeperItemRenderersList','Style','NotificationBeeperConst','cx','setTimeoutAcrossTransitions'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();var r=k.createClass({displayName:'NotificationBeeperItem',getInitialState:function(){return {fadedIn:false,hidden:false};},componentDidMount:function(){var s;if(i.hasCSSAnimations()){s=this.setState.bind(this,{fadedIn:true},null);}else s=(function(){new h(l.findDOMNode(this.refs.item)).from('top','-30px').from('opacity','0').to('top','0px').to('opacity','1').duration(200).ondone(this.setState.bind(this,{fadedIn:true},null)).go();}).bind(this);q(s,50);this.props.onInserted(this.props.beep);},componentWillUnmount:function(){if(this._fadeOutAnimation){this._fadeOutAnimation.stop();this._fadeOutAnimation=null;}},_onHide:function(){this.setState({hidden:true});},render:function(){var s=this.props.beep,t="_3sod"+(this.state.fadedIn?' '+"_3soe":'')+(this.state.hidden?' '+"_3sof":''),u=this._getRenderer(s.beepRenderer);return (k.createElement('li',{className:t,ref:'item','data-gt':s.tracking},k.createElement(u,{beep:s,onHide:this._onHide,onReadyToHide:this.props.onReadyToHide,ref:'itemContents'})));},componentDidUpdate:function(s,t,u){if(this.props.fadingOut){if(!this._fadeOutAnimation)this._fadeOutAnimation=new h(l.findDOMNode(this.refs.item)).from('opacity','1').to('opacity','0').duration(o.FADE_OUT_LENGTH).ondone(this._onHide).go();l.findDOMNode(this.refs.item).style.transitionDuration='0ms';}else if(this._fadeOutAnimation){this._fadeOutAnimation.stop();this._fadeOutAnimation=null;n.set(l.findDOMNode(this.refs.item),'opacity','1');}},_getRenderer:function(s){if(s in m)return m[s];return j;}});f.exports=r;},null);
__d('NotificationSound',['Sound'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=5000;h.init(['audio/mpeg']);function j(k){this._soundPath=k;this._lastPlayed=0;}Object.assign(j.prototype,{play:function(k){if(!this._soundPath)return;var l=Date.now();if(l-this._lastPlayed<i)return;this._lastPlayed=l;h.play(this._soundPath,k);}});f.exports=j;},null);
__d('NotificationBeeper.react',['Arbiter','ChannelConstants','NotificationBeeperItem.react','NotificationConstants','NotificationImpressions','NotificationPhotoThumbnail','NotificationSound','NotificationUpdates','NotificationURI','NotificationUserActions','React','NotificationBeeperConst','NotificationBeeperPinnedPostLoader','cx','setTimeoutAcrossTransitions','shield'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){if(c.__markCompiled)c.__markCompiled();var x=s.BeepStates,y='beeper',z=k.PayloadSourceType.LIVE_SEND,aa=k.PayloadSourceType.OTHER_APPLICATION,ba=r.createClass({displayName:'NotificationBeeper',getInitialState:function(){return {soundEnabled:this.props.soundEnabled,hovering:false,fading:false,beeps:{}};},componentWillMount:function(){var ca=i.getArbiterType('notif_sound_pref_changed'),da='update-notifications';this.subscriptions=[o.subscribe(da,(function(ea,fa){if(fa.payloadsource===z||fa.payloadsource===aa){var ga=fa.nodes;if(ga&&ga.length)this._handleBeepChanges(this._convertNotifications(ga));}}).bind(this)),h.subscribe(ca,(function(ea,fa){this.setState({soundEnabled:fa.obj.enabled});}).bind(this))];h.inform('NotificationBeeper/mounted',null,h.BEHAVIOR_PERSISTENT);if(t.payload)this._handleBeepChanges(this._convertNotifications(t.payload.nodes));},componentWillUnmount:function(){this.subscriptions.forEach(function(ca){ca.unsubscribe();});this.subscriptions=null;},_onMouseEnter:function(){this._hideWait&&clearTimeout(this._hideWait);var ca=[],da=this.state.beeps;Object.keys(da).forEach(function(ea){if(da[ea].state!=x.PENDING){ca.push(ea);}else da[ea].state=x.RENDERED;});q.markNotificationsAsSeen(ca);this.setState({hovering:true,fading:false,beeps:da});},_onMouseLeave:function(){this._waitToHide(s.ACTIVE_DELAY_LONG);this.setState({hovering:false});},_onInsertedItem:function(ca){if(!this.state.hovering)this._waitToHide();if(this.state.soundEnabled&&ca.sound){if(!this._notifSound)this._notifSound=new n(this.props.soundPath);this._notifSound.play(ca.beepID);}if(this.props.shouldLogImpressions)l.log([ca.notificationID],y);},_waitToHide:function(ca){this._hideWait&&clearTimeout(this._hideWait);this._hideWait=v(w(this._hide,this),ca||s.IDLE_DELAY);},_onReadyToHide:function(ca){this.state.beeps[ca].state=x.READY_TO_HIDE;if(!this._hideWait)this._waitToHide();},_hide:function(){this._hideWait=null;var ca=this.state.beeps;Object.keys(ca).forEach(function(da){if(ca[da].state==x.READY_TO_HIDE)ca[da].state=x.FADING_OUT;});this.setState({fading:true});v(w(this._finishHide,this),s.FADE_OUT_LENGTH);},_finishHide:function(){if(!this.state.fading)return;var ca=this.state.beeps;Object.keys(ca).forEach(function(da){if(ca[da].state==x.FADING_OUT)delete ca[da];});this.setState({fading:false,beeps:ca});v((function(){var da=this.state.beeps;Object.keys(da).forEach(function(ea){if(da[ea].state==x.PENDING)da[ea].state=x.RENDERED;});this.setState({beeps:da});}).bind(this));},_handleBeepChanges:function(ca){var da=this.state.fading?x.PENDING:x.RENDERED,ea=this.state.beeps,fa=false;Object.keys(ca).reverse().forEach(function(ga){var ha={state:da,data:ca[ga]};if(!ea[ga]||ea[ga].data.beepID!=ha.data.beepID){if(ea[ga]){fa=true;if(ha.data.beepUpdatesOnTop)delete ea[ga];}ea[ga]=ha;}});if(fa)this._waitToHide();this.forceUpdate();},render:function(){var ca=this.state.beeps,da=[];Object.keys(ca).reverse().forEach(function(ga){var ha=ca[ga];if(ha.state==x.PENDING)return;da.push(r.createElement(j,{key:ga,fadingOut:this.state.fading&&ha.state==x.FADING_OUT,beep:ha.data,onInserted:this._onInsertedItem,onReadyToHide:this._onReadyToHide}));},this);var ea=da.length>0,fa=(!ea?"hidden_elem":'')+(' '+"_50d1");return (r.createElement('ul',{ref:'container',className:fa,'data-gt':this.props.tracking,onMouseEnter:this._onMouseEnter,onMouseLeave:this._onMouseLeave},da));},_convertNotifications:function(ca){var da={};ca.forEach(function(ea){if(!ea.showBeep)return;var fa=ea.alert_id,ga=fa+'-'+ea.receivedTime,ha=m.getThumbnail(ea.attachments,ea.attached_story),ia=da[fa]={notificationID:fa,notifID:ea.id,beepID:ga,beepRenderer:ea.beepRenderer,rendererData:ea.rendererData,beepUpdatesOnTop:ea.beepUpdatesOnTop,actors:ea.unaggregatedActors||ea.actors,icon:ea.icon,link:ea.url?p.localize(ea.url):'#',url:ea.url,ajaxifyLink:ea.ajaxify_url,photo:ha,text:ea.unaggregatedTitle||ea.title,timestamp:ea.timestamp,receivedTime:ea.receivedTime,sound:!!ea.sound,tracking:ea.tracking};});return da;}});f.exports=ba;},null);
/*!CK:1968035865!*//*1453860517,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["q5PJS"]); }

__d('SearchableTextInput.react',['EventListener','React','AbstractTextInput.react','getActiveElement'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=i.PropTypes,m=i.createClass({displayName:'SearchableTextInput',propTypes:babelHelpers._extends({},j.propTypes,{queryString:l.string,searchSource:l.object,searchSourceOptions:l.object,onEntriesFound:l.func.isRequired,searchOnFocus:l.bool,searchOnUpdate:l.bool,required:l.bool,onPaste:l.func,onFocus:l.func,onChange:l.func}),componentDidMount:function(){if(this.props.onPaste)this._listener=h.listen(this.refs.input.getTextFieldDOM(),'paste',this.props.onPaste);},componentWillReceiveProps:function(n){},componentDidUpdate:function(n){if(this.props.searchOnUpdate)if(n.queryString!==this.props.queryString)this.search(this.props.queryString);},componentWillUnmount:function(){if(this._listener){this._listener.remove();this._listener=null;}},_onInputFocus:function(){this.props.searchSource.bootstrap((function(){if(this.props.searchOnFocus)this.search(this.props.queryString);}).bind(this));this.props.onFocus&&this.props.onFocus();},_onSearchCallback:function(n,o,p){if(this.props.queryString===o)this.props.onEntriesFound(n,o,p);},_onChange:function(event){this.props.onChange&&this.props.onChange(event);var n=event.target.value;setTimeout((function(){return this.search(n);}).bind(this));},search:function(n){this.props.searchSource.search(n,this._onSearchCallback,this.props.searchSourceOptions);},focusInput:function(){var n=this.getTextFieldDOM();if(k()===n){this._onInputFocus();}else n.offsetHeight&&n.focus();},blurInput:function(){var n=this.getTextFieldDOM();n.offsetHeight&&n.blur();},getTextFieldDOM:function(){return this.refs.input.getTextFieldDOM();},render:function(){var n=this.props.queryString||'';return (i.createElement(j,babelHelpers._extends({},this.props,{onChange:this._onChange,onFocus:this._onInputFocus,ref:'input',role:'combobox',value:n})));}});f.exports=m;},null);
__d('TypeaheadView.react',['React','cx'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=h.PropTypes,k=h.createClass({displayName:'TypeaheadView',propTypes:{entries:j.array.isRequired,extraRendererProps:j.object,highlightedEntry:j.object,isVisible:j.bool,queryString:j.string,Renderer:j.func.isRequired,selectedEntry:j.object},_onSelect:function(l,m){if(this.props.onSelect)this.props.onSelect(l,m);},_onHighlight:function(l){this.props.onHighlight(l);},render:function(){var l=!this.props.isVisible?"hidden_elem":'',m=babelHelpers._extends({highlightedEntry:this.props.highlightedEntry,selectedEntry:this.props.selectedEntry,entries:this.props.entries,onSelect:this._onSelect,onHighlight:this._onHighlight,onRenderHighlight:this.props.onRenderHighlight,ariaOwneeID:this.props.ariaOwneeID,queryString:this.props.queryString},this.props.extraRendererProps),n=this.props.Renderer;return (h.createElement('div',{className:l},h.createElement(n,m)));}});f.exports=k;},null);
__d('AbstractTypeahead.react',['AbstractTextField.react','ContextualLayer.react','InputSelection','React','ReactLayeredComponentMixin','SearchableTextInput.react','SearchSourceQueryStatus','TypeaheadNavigation','TypeaheadView.react','cx','getOrCreateDOMID','joinClasses','uniqueID'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){if(c.__markCompiled)c.__markCompiled();var u=k.PropTypes,v=[],w=10,x=k.createClass({displayName:'AbstractTypeahead',mixins:[l],propTypes:babelHelpers._extends({},h.propTypes,{additionalElements:u.node,inputClassName:u.string,inputID:u.string,inputStyle:u.object,autoCapitalize:u.string,autoComplete:u.string,autoCorrect:u.string,queryString:u.string,searchSource:u.object.isRequired,searchSourceOptions:u.object,excludedEntries:u.object,presenter:u.object.isRequired,onSelectAttempt:u.func,onEntriesFound:u.func,onNoEntriesFound:u.func,onEnterWithoutSelection:u.func,autoHighlight:u.bool,showEntriesOnFocus:u.bool,selectOnBlur:u.bool,selectOnTab:u.bool,focusedOnInit:u.bool,hideViewWithEntries:u.bool,disabled:u.bool,entriesWidthMatchContext:u.bool,selectedEntry:u.object,onTypeaheadVisibilityChanged:u.func,onPaste:u.func,navigation:u.object}),getDefaultProps:function(){return {autoComplete:'off',autoCorrect:'off',selectOnBlur:false,selectOnTab:true,hideViewWithEntries:true,entriesWidthMatchContext:true,navigation:o};},getInitialState:function(){return {highlightedEntry:null,isArrowNavigation:false,isAutoHighlight:this.props.autoHighlight,ariaActiveDescendantID:null,ariaOwneeID:t(),activeEntries:null,focused:!!this.props.focusedOnInit,viewIsVisible:!!this.props.focusedOnInit};},_onRenderHighlight:function(y){var z=r(y);this.setState({ariaActiveDescendantID:z});},_determineViewVisibility:function(y,z){if(!y)return false;var aa=y.length>0&&(this.props.showEntriesOnFocus||this.props.queryString.length>0);return !!(z&&(this.props.presenter.alwaysVisibleOnFocus||aa));},_onEntriesFound:function(y,z,aa){if(!this.isMounted())return;if(this.props.excludedEntries){var ba=this.props.excludedEntries;y=y.filter(function(ja){return !ba.hasOwnProperty(ja.getUniqueID());});}var ca=this.props.presenter,da=typeof ca.sortEntries=='function'?ca.sortEntries(y,this.state.activeEntries,this.props.queryString):y,ea=da.slice(0,ca.maxEntries||w),fa=this._determineViewVisibility(ea,this.state.focused);if(!ea.length){this.setState({ariaActiveDescendantID:null,activeEntries:ea,highlightedEntry:null,isAutoHighlight:this.props.autoHighlight});this._setViewIsVisible(fa);if(this.props.onNoEntriesFound&&aa===n.COMPLETE)this.props.onNoEntriesFound();return;}if(this.props.onEntriesFound)this.props.onEntriesFound(ea,aa);var ga=this.state.highlightedEntry,ha=ga&&ea.indexOf(ga)!==-1;if(!this.props.autoHighlight){this.setState({activeEntries:ea,highlightedEntry:ha?ga:null});if(fa)this._setViewIsVisible(true);return;}var ia=this.state.isAutoHighlight;if(ia){ga=ea[0];}else{ga=ha?ga:ea[0];ia=!ha;}this.setState({activeEntries:ea,highlightedEntry:ga,isAutoHighlight:ia});if(fa)this._setViewIsVisible(true);},_onInputFocus:function(){var y=this._determineViewVisibility(this.state.activeEntries,true);if(y)this._setViewIsVisible(true);this.setState({focused:true});this.props.onFocus&&this.props.onFocus();},_onInputBlur:function(){if(this.props.hideViewWithEntries)this._close();if(this.props.selectOnBlur&&this.state.highlightedEntry)this.props.onSelectAttempt(this.state.highlightedEntry);this.setState({focused:false});this.props.onBlur&&this.props.onBlur();},_onInputClick:function(y){var z=this.getTextFieldDOM(),aa=j.get(z);if(aa&&aa.start==aa.end)z.select();this.props.onClick&&this.props.onClick(y);},_onEscape:function(){this._close();this.blurInput();this.setState({focused:false});this.props.onEscape&&this.props.onEscape();},_onEnter:function(event){if(this.props.onEnterWithoutSelection&&(!this.state.viewIsVisible||!this.state.highlightedEntry)){this.props.onEnterWithoutSelection(event);return;}if(!this.state.viewIsVisible)return;if(!this.state.highlightedEntry){event.preventDefault();return;}if(this.props.hideViewWithEntries)this._close();if(this.props.onSelectAttempt)this.props.onSelectAttempt(this.state.highlightedEntry,event);event.preventDefault();},_onTab:function(event){if(this.props.selectOnTab&&this.state.viewIsVisible&&this.props.onSelectAttempt&&this.state.highlightedEntry){if(this.props.hideViewWithEntries){this._close();event.preventDefault();}this.props.onSelectAttempt(this.state.highlightedEntry,event);}},_onDownArrow:function(event){event.preventDefault();this.props.navigation.moveDown(this.state.activeEntries||v,this.state.highlightedEntry,this._setHighlight);},_onUpArrow:function(event){event.preventDefault();this.props.navigation.moveUp(this.state.activeEntries||v,this.state.highlightedEntry,this._setHighlight);},_setHighlight:function(y){this.setState({highlightedEntry:y,isArrowNavigation:true,isAutoHighlight:!y});},_onInputChange:function(event){if(this.props.onChange)this.props.onChange(event);this._setViewIsVisible(this.state.focused&&(this.props.showEntriesOnFocus||event.target.value.length>0)&&(this.props.presenter.alwaysVisibleOnFocus||this.state.activeEntries!=null&&this.state.activeEntries.length>0));},_onViewHighlight:function(y){this.setState({highlightedEntry:y,isArrowNavigation:false,isAutoHighlight:false});},_getView:function(){return (k.createElement(p,{Renderer:this.props.presenter.ViewRenderer,extraRendererProps:babelHelpers._extends({},this.props.presenter.extraRendererProps,{isArrowNavigation:this.state.isArrowNavigation}),highlightedEntry:this.state.highlightedEntry,selectedEntry:this.props.selectedEntry,isVisible:this.state.viewIsVisible,ariaOwneeID:this.state.ariaOwneeID,onHighlight:this._onViewHighlight,onRenderHighlight:this._onRenderHighlight,onSelect:this.props.onSelectAttempt,entries:this.state.activeEntries||v,queryString:this.props.queryString}));},_setViewIsVisible:function(y){if(y!==this.state.viewIsVisible){if(this.props.onTypeaheadVisibilityChanged)this.props.onTypeaheadVisibilityChanged(y,this.state.activeEntries||v);this.setState({viewIsVisible:y});}},componentWillReceiveProps:function(y){if(!y.queryString&&!this.props.showEntriesOnFocus)this.clearActiveEntries();},componentDidUpdate:function(){var y=this._determineViewVisibility(this.state.activeEntries,this.state.focused);if(y)this._setViewIsVisible(true);},renderLayers:function(){if(!this.props.presenter.useLayer)return {};var y=null,z=null;if(this.props.context){y=this.props.context;}else z=(function(){return this.refs.input;}).bind(this);return {typeaheadView:k.createElement(i,{alignment:this.props.presenter.alignment,behaviors:this.props.presenter.layerBehaviors,containerWidthMatchContext:this.props.entriesWidthMatchContext,contextRef:z,context:y,position:this.props.presenter.layerPosition||"below",shown:this.state.viewIsVisible,shouldSetARIAProperties:false},this._getView())};},render:function(){var y=this.state.activeEntries,z=!!(y&&y.length),aa=k.createElement(m,{'aria-activedescendant':this.state.ariaActiveDescendantID,'aria-expanded':z,'aria-autocomplete':'list','aria-label':this.props.ariaLabel,'aria-owns':this.state.ariaOwneeID,required:this.props.required,ref:'input',autoCapitalize:this.props.autoCapitalize,autoComplete:this.props.autoComplete,autoCorrect:this.props.autoCorrect,className:this.props.inputClassName,id:this.props.inputID,queryString:this.props.queryString,placeholder:this.props.placeholder,maxLength:this.props.maxLength,searchSource:this.props.searchSource,searchSourceOptions:this.props.searchSourceOptions,searchOnFocus:!!this.props.showEntriesOnFocus,disabled:this.props.disabled,onEntriesFound:this._onEntriesFound,onEscape:this._onEscape,onBlur:this._onInputBlur,onFocus:this._onInputFocus,onChange:this._onInputChange,onDownArrow:this._onDownArrow,onUpArrow:this._onUpArrow,onTab:this._onTab,onEnter:this._onEnter,onBackspace:this.props.onBackspace,onPaste:this.props.onPaste,onClick:this._onInputClick,style:this.props.inputStyle,tabIndex:this.props.tabIndex}),ba=null;if(!this.props.presenter.useLayer)ba=this._getView();return (k.createElement('span',babelHelpers._extends({},this.props,{className:s(this.props.className,"_58ah"),onBlur:null,onClick:null,onFocus:null,tabIndex:null}),aa,this.props.additionalElements,ba));},componentDidMount:function(){if(this.props.focusedOnInit)this.focusInput();},clearActiveEntries:function(){this.setState({ariaActiveDescendantID:null,activeEntries:null,highlightedEntry:null});},focusInput:function(){var y=this.getTextFieldDOM();if(y.value)j.set(y,y.value.length);this.refs.input.focusInput();},blurInput:function(){if(this.refs.input.blur){this.refs.input.blur();}else if(this.refs.input.blurInput)this.refs.input.blurInput();},hideView:function(){this._setViewIsVisible(false);},_close:function(){this._setViewIsVisible(false);this.clearActiveEntries();},getTextFieldDOM:function(){return this.refs.input.getTextFieldDOM();}});f.exports=x;},null);
__d('XUITypeaheadTextOnlyView.react',['React','TypeaheadViewItem','TypeaheadViewPropTypes','cx'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=h.createClass({displayName:'XUITypeaheadTextOnlyViewItem',mixins:[i.Mixin],propTypes:i.propTypes,render:function(){var n=this.props.entry,o="_599m"+(this.props.highlighted?' '+"_599n":'');return (h.createElement('li',{'aria-label':n.getTitle(),'aria-selected':this.props.highlighted,className:o,key:n.getUniqueID(),onMouseDown:this._onSelect,onMouseEnter:this._onHighlight,role:this.props.role,title:n.getTitle()},h.createElement('div',{className:"_599p"},n.getTitle())));}}),m=h.createClass({displayName:'XUITypeaheadTextOnlyView',propTypes:j,getDefaultProps:function(){return {role:'listbox'};},_renderItem:function(n){var o=n===this.props.highlightedEntry;return (h.createElement(l,{entry:n,highlighted:o,key:n.getUniqueID(),onSelect:this.props.onSelect,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight}));},render:function(){var n="_599r"+(!this.props.entries.length?' '+"_599s":'');return (h.createElement('ul',{className:n,id:this.props.ariaOwneeID,role:this.props.role},this.props.entries.map(this._renderItem)));}});f.exports=m;},null);
__d('XUITypeahead.react',['AbstractTypeahead.react','React','Image.react','SearchableEntry','XUICloseButton.react','XUIError.react','XUITypeaheadTextOnlyView.react','XUITypeaheadView.react','cx','joinClasses','update'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();var s=i.PropTypes,t={ViewRenderer:o,useLayer:true},u={ViewRenderer:o,useLayer:false},v={ViewRenderer:n,useLayer:true},w=i.createClass({displayName:'XUITypeahead',propTypes:babelHelpers._extends({maxEntries:s.number,onChange:s.func.isRequired,onSelectAttempt:s.func.isRequired,onEntriesFound:s.func,onNoEntriesFound:s.func,selectedEntry:s.instanceOf(k),tallInput:s.bool,viewStyle:s.oneOf(['textonly','rich','richNoLayer']),clearable:s.bool,onClear:s.func,showPhoto:s.bool,highlightOnSelect:s.bool,presenter:s.object,inputID:s.string},m.propTypes),getDefaultProps:function(){return {viewStyle:'rich'};},componentWillMount:function(){},focusInput:function(){this.refs.typeahead&&this.refs.typeahead.focusInput();},blurInput:function(){this.refs.typeahead&&this.refs.typeahead.blurInput();},hideView:function(){this.refs.typeahead.hideView();},getTextFieldDOM:function(){return this.refs.typeahead.getTextFieldDOM();},_onClear:function(){this.props.onClear();setTimeout((function(){return this.focusInput();}).bind(this),0);},render:function(){var x="_55r1"+(!!this.props.tallInput?' '+"_55r2":''),y=null;if(this.props.presenter){y=this.props.presenter;}else if(this.props.viewStyle=='rich'){y=t;}else if(this.props.viewStyle=='richNoLayer'){y=u;}else y=v;if(!this.props.presenter&&this.props.maxEntries)y=r(y,{maxEntries:{$set:this.props.maxEntries}});var z=this.props.showPhoto&&this.props.selectedEntry?i.createElement(j,{className:"_wrl",src:this.props.selectedEntry.getPhoto()}):null,aa=this.props.clearable?i.createElement(l,{className:"_wrm"+(!this.props.queryString?' '+"hidden_elem":''),size:this.props.tallInput?'medium':'small',type:'button',onClick:this._onClear}):null,ba=this.props,ca=ba.className,da=babelHelpers.objectWithoutProperties(ba,['className']);return (i.createElement(m,this.props,i.createElement('span',{className:q("_wrn"+(!!this.props.tallInput?' '+"_213j":'')+(!!aa?' '+"_4ehf":'')+(!!z?' '+"_4ehg":'')+(!!this.props.queryString?' '+"_4in7":'')+(this.props.highlightOnSelect&&this.props.selectedEntry?' '+"_wrr":''),ca)},z,i.createElement(h,babelHelpers._extends({},da,{inputClassName:x,ref:'typeahead',presenter:y})),aa)));}});f.exports=w;},null);
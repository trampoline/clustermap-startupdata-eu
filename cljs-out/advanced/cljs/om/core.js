// Compiled by ClojureScript 0.0-2173
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('om.dom');
goog.require('om.dom');
om.core._STAR_read_enabled_STAR_ = false;
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core.IDisplayName = (function (){var obj27619 = {};return obj27619;
})();
om.core.display_name = (function display_name(this$){if((function (){var and__3429__auto__ = this$;if(and__3429__auto__)
{return this$.om$core$IDisplayName$display_name$arity$1;
} else
{return and__3429__auto__;
}
})())
{return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else
{var x__4068__auto__ = (((this$ == null))?null:this$);return (function (){var or__3441__auto__ = (om.core.display_name[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (om.core.display_name["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("IDisplayName.display-name",this$);
}
}
})().call(null,this$);
}
});
om.core.IInitState = (function (){var obj27621 = {};return obj27621;
})();
om.core.init_state = (function init_state(this$){if((function (){var and__3429__auto__ = this$;if(and__3429__auto__)
{return this$.om$core$IInitState$init_state$arity$1;
} else
{return and__3429__auto__;
}
})())
{return this$.om$core$IInitState$init_state$arity$1(this$);
} else
{var x__4068__auto__ = (((this$ == null))?null:this$);return (function (){var or__3441__auto__ = (om.core.init_state[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (om.core.init_state["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("IInitState.init-state",this$);
}
}
})().call(null,this$);
}
});
om.core.IShouldUpdate = (function (){var obj27623 = {};return obj27623;
})();
om.core.should_update = (function should_update(this$,next_props,next_state){if((function (){var and__3429__auto__ = this$;if(and__3429__auto__)
{return this$.om$core$IShouldUpdate$should_update$arity$3;
} else
{return and__3429__auto__;
}
})())
{return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else
{var x__4068__auto__ = (((this$ == null))?null:this$);return (function (){var or__3441__auto__ = (om.core.should_update[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (om.core.should_update["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IWillMount = (function (){var obj27625 = {};return obj27625;
})();
om.core.will_mount = (function will_mount(this$){if((function (){var and__3429__auto__ = this$;if(and__3429__auto__)
{return this$.om$core$IWillMount$will_mount$arity$1;
} else
{return and__3429__auto__;
}
})())
{return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else
{var x__4068__auto__ = (((this$ == null))?null:this$);return (function (){var or__3441__auto__ = (om.core.will_mount[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (om.core.will_mount["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillMount.will-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IDidMount = (function (){var obj27627 = {};return obj27627;
})();
om.core.did_mount = (function did_mount(this$){if((function (){var and__3429__auto__ = this$;if(and__3429__auto__)
{return this$.om$core$IDidMount$did_mount$arity$1;
} else
{return and__3429__auto__;
}
})())
{return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else
{var x__4068__auto__ = (((this$ == null))?null:this$);return (function (){var or__3441__auto__ = (om.core.did_mount[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (om.core.did_mount["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("IDidMount.did-mount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUnmount = (function (){var obj27629 = {};return obj27629;
})();
om.core.will_unmount = (function will_unmount(this$){if((function (){var and__3429__auto__ = this$;if(and__3429__auto__)
{return this$.om$core$IWillUnmount$will_unmount$arity$1;
} else
{return and__3429__auto__;
}
})())
{return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else
{var x__4068__auto__ = (((this$ == null))?null:this$);return (function (){var or__3441__auto__ = (om.core.will_unmount[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (om.core.will_unmount["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$);
}
});
om.core.IWillUpdate = (function (){var obj27631 = {};return obj27631;
})();
om.core.will_update = (function will_update(this$,next_props,next_state){if((function (){var and__3429__auto__ = this$;if(and__3429__auto__)
{return this$.om$core$IWillUpdate$will_update$arity$3;
} else
{return and__3429__auto__;
}
})())
{return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else
{var x__4068__auto__ = (((this$ == null))?null:this$);return (function (){var or__3441__auto__ = (om.core.will_update[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (om.core.will_update["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillUpdate.will-update",this$);
}
}
})().call(null,this$,next_props,next_state);
}
});
om.core.IDidUpdate = (function (){var obj27633 = {};return obj27633;
})();
om.core.did_update = (function did_update(this$,prev_props,prev_state){if((function (){var and__3429__auto__ = this$;if(and__3429__auto__)
{return this$.om$core$IDidUpdate$did_update$arity$3;
} else
{return and__3429__auto__;
}
})())
{return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else
{var x__4068__auto__ = (((this$ == null))?null:this$);return (function (){var or__3441__auto__ = (om.core.did_update[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (om.core.did_update["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("IDidUpdate.did-update",this$);
}
}
})().call(null,this$,prev_props,prev_state);
}
});
om.core.IWillReceiveProps = (function (){var obj27635 = {};return obj27635;
})();
om.core.will_receive_props = (function will_receive_props(this$,next_props){if((function (){var and__3429__auto__ = this$;if(and__3429__auto__)
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2;
} else
{return and__3429__auto__;
}
})())
{return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else
{var x__4068__auto__ = (((this$ == null))?null:this$);return (function (){var or__3441__auto__ = (om.core.will_receive_props[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (om.core.will_receive_props["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("IWillReceiveProps.will-receive-props",this$);
}
}
})().call(null,this$,next_props);
}
});
om.core.IRender = (function (){var obj27637 = {};return obj27637;
})();
om.core.render = (function render(this$){if((function (){var and__3429__auto__ = this$;if(and__3429__auto__)
{return this$.om$core$IRender$render$arity$1;
} else
{return and__3429__auto__;
}
})())
{return this$.om$core$IRender$render$arity$1(this$);
} else
{var x__4068__auto__ = (((this$ == null))?null:this$);return (function (){var or__3441__auto__ = (om.core.render[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (om.core.render["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("IRender.render",this$);
}
}
})().call(null,this$);
}
});
om.core.IRenderState = (function (){var obj27639 = {};return obj27639;
})();
om.core.render_state = (function render_state(this$,state){if((function (){var and__3429__auto__ = this$;if(and__3429__auto__)
{return this$.om$core$IRenderState$render_state$arity$2;
} else
{return and__3429__auto__;
}
})())
{return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else
{var x__4068__auto__ = (((this$ == null))?null:this$);return (function (){var or__3441__auto__ = (om.core.render_state[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (om.core.render_state["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("IRenderState.render-state",this$);
}
}
})().call(null,this$,state);
}
});
om.core.IOmSwap = (function (){var obj27641 = {};return obj27641;
})();
om.core._om_swap_BANG_ = (function _om_swap_BANG_(this$,cursor,korks,f,tag){if((function (){var and__3429__auto__ = this$;if(and__3429__auto__)
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5;
} else
{return and__3429__auto__;
}
})())
{return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else
{var x__4068__auto__ = (((this$ == null))?null:this$);return (function (){var or__3441__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (om.core._om_swap_BANG_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("IOmSwap.-om-swap!",this$);
}
}
})().call(null,this$,cursor,korks,f,tag);
}
});
om.core.IValue = (function (){var obj27643 = {};return obj27643;
})();
om.core._value = (function _value(x){if((function (){var and__3429__auto__ = x;if(and__3429__auto__)
{return x.om$core$IValue$_value$arity$1;
} else
{return and__3429__auto__;
}
})())
{return x.om$core$IValue$_value$arity$1(x);
} else
{var x__4068__auto__ = (((x == null))?null:x);return (function (){var or__3441__auto__ = (om.core._value[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (om.core._value["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("IValue.-value",x);
}
}
})().call(null,x);
}
});
(om.core.IValue["_"] = true);
(om.core._value["_"] = (function (x){return x;
}));
om.core.ICursor = (function (){var obj27645 = {};return obj27645;
})();
om.core._path = (function _path(cursor){if((function (){var and__3429__auto__ = cursor;if(and__3429__auto__)
{return cursor.om$core$ICursor$_path$arity$1;
} else
{return and__3429__auto__;
}
})())
{return cursor.om$core$ICursor$_path$arity$1(cursor);
} else
{var x__4068__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3441__auto__ = (om.core._path[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (om.core._path["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("ICursor.-path",cursor);
}
}
})().call(null,cursor);
}
});
om.core._state = (function _state(cursor){if((function (){var and__3429__auto__ = cursor;if(and__3429__auto__)
{return cursor.om$core$ICursor$_state$arity$1;
} else
{return and__3429__auto__;
}
})())
{return cursor.om$core$ICursor$_state$arity$1(cursor);
} else
{var x__4068__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3441__auto__ = (om.core._state[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (om.core._state["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("ICursor.-state",cursor);
}
}
})().call(null,cursor);
}
});
om.core.IToCursor = (function (){var obj27647 = {};return obj27647;
})();
om.core._to_cursor = (function() {
var _to_cursor = null;
var _to_cursor__2 = (function (value,state){if((function (){var and__3429__auto__ = value;if(and__3429__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$2;
} else
{return and__3429__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else
{var x__4068__auto__ = (((value == null))?null:value);return (function (){var or__3441__auto__ = (om.core._to_cursor[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (om.core._to_cursor["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state);
}
});
var _to_cursor__3 = (function (value,state,path){if((function (){var and__3429__auto__ = value;if(and__3429__auto__)
{return value.om$core$IToCursor$_to_cursor$arity$3;
} else
{return and__3429__auto__;
}
})())
{return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else
{var x__4068__auto__ = (((value == null))?null:value);return (function (){var or__3441__auto__ = (om.core._to_cursor[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (om.core._to_cursor["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
})().call(null,value,state,path);
}
});
_to_cursor = function(value,state,path){
switch(arguments.length){
case 2:
return _to_cursor__2.call(this,value,state);
case 3:
return _to_cursor__3.call(this,value,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_to_cursor.cljs$core$IFn$_invoke$arity$2 = _to_cursor__2;
_to_cursor.cljs$core$IFn$_invoke$arity$3 = _to_cursor__3;
return _to_cursor;
})()
;
om.core.path = (function path(cursor){return om.core._path(cursor);
});
om.core.value = (function value(cursor){return om.core._value(cursor);
});
om.core.state = (function state(cursor){return om.core._state(cursor);
});
om.core.ITransact = (function (){var obj27649 = {};return obj27649;
})();
om.core._transact_BANG_ = (function _transact_BANG_(cursor,korks,f,tag){if((function (){var and__3429__auto__ = cursor;if(and__3429__auto__)
{return cursor.om$core$ITransact$_transact_BANG_$arity$4;
} else
{return and__3429__auto__;
}
})())
{return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else
{var x__4068__auto__ = (((cursor == null))?null:cursor);return (function (){var or__3441__auto__ = (om.core._transact_BANG_[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (om.core._transact_BANG_["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("ITransact.-transact!",cursor);
}
}
})().call(null,cursor,korks,f,tag);
}
});
om.core.INotify = (function (){var obj27651 = {};return obj27651;
})();
om.core._notify = (function _notify(x,tx_data,root_cursor){if((function (){var and__3429__auto__ = x;if(and__3429__auto__)
{return x.om$core$INotify$_notify$arity$3;
} else
{return and__3429__auto__;
}
})())
{return x.om$core$INotify$_notify$arity$3(x,tx_data,root_cursor);
} else
{var x__4068__auto__ = (((x == null))?null:x);return (function (){var or__3441__auto__ = (om.core._notify[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (om.core._notify["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol("INotify.-notify",x);
}
}
})().call(null,x,tx_data,root_cursor);
}
});
om.core.transact_STAR_ = (function transact_STAR_(state,cursor,korks,f,tag){var old_state = cljs.core.deref(state);var path = cljs.core.into((om.core.path.cljs$core$IFn$_invoke$arity$1 ? om.core.path.cljs$core$IFn$_invoke$arity$1(cursor) : om.core.path.call(null,cursor)),korks);var ret = (((function (){var G__27653 = state;if(G__27653)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__27653.om$core$IOmSwap$;
}
})()))
{return true;
} else
{if((!G__27653.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__27653);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,G__27653);
}
})())?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):((cljs.core.constant$keyword$273)?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f):null)));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$339))
{return null;
} else
{var tx_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$340,path,cljs.core.constant$keyword$341,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),cljs.core.constant$keyword$342,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),path),cljs.core.constant$keyword$343,old_state,cljs.core.constant$keyword$344,cljs.core.deref(state)], null);if(!((tag == null)))
{return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(cursor,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.constant$keyword$311,tag)) : om.core.notify_STAR_.call(null,cursor,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.constant$keyword$311,tag)));
} else
{return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(cursor,tx_data) : om.core.notify_STAR_.call(null,cursor,tx_data));
}
}
});
om.core.children = (function children(node){var c = node.props.children;if(cljs.core.fn_QMARK_(c))
{return node.props.children = (function (){var _STAR_read_enabled_STAR_27655 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(node) : c.call(null,node));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27655;
}})();
} else
{return c;
}
});
/**
* Given an owning Pure node return the Om props. Analogous to React
* component props.
*/
om.core.get_props = (function get_props(x){return (x.props["__om_cursor"]);
});
/**
* Returns the component local state of an owning component. owner is
* the component. An optional key or sequence of keys may be given to
* extract a specific value. Always returns pending state.
*/
om.core.get_state = (function() {
var get_state = null;
var get_state__1 = (function (owner){var state = owner.state;var or__3441__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return (state["__om_state"]);
}
});
var get_state__2 = (function (owner,korks){if(!(cljs.core.sequential_QMARK_(korks)))
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(get_state.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else
{if(cljs.core.empty_QMARK_(korks))
{return get_state.cljs$core$IFn$_invoke$arity$1(owner);
} else
{if(cljs.core.constant$keyword$273)
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(get_state.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else
{return null;
}
}
}
});
get_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_state__1.call(this,owner);
case 2:
return get_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_state.cljs$core$IFn$_invoke$arity$1 = get_state__1;
get_state.cljs$core$IFn$_invoke$arity$2 = get_state__2;
return get_state;
})()
;
/**
* Takes an owner and returns a map of global shared values for a
* render loop. An optional key or sequence of keys may be given to
* extract a specific value.
*/
om.core.get_shared = (function() {
var get_shared = null;
var get_shared__1 = (function (owner){if((owner == null))
{return null;
} else
{return (owner.props["__om_shared"]);
}
});
var get_shared__2 = (function (owner,korks){if(!(cljs.core.sequential_QMARK_(korks)))
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else
{if(cljs.core.empty_QMARK_(korks))
{return get_shared.cljs$core$IFn$_invoke$arity$1(owner);
} else
{if(cljs.core.constant$keyword$273)
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else
{return null;
}
}
}
});
get_shared = function(owner,korks){
switch(arguments.length){
case 1:
return get_shared__1.call(this,owner);
case 2:
return get_shared__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_shared.cljs$core$IFn$_invoke$arity$1 = get_shared__1;
get_shared.cljs$core$IFn$_invoke$arity$2 = get_shared__2;
return get_shared;
})()
;
om.core.merge_pending_state = (function merge_pending_state(owner){var state = owner.state;var temp__4092__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(temp__4092__auto__))
{var pending_state = temp__4092__auto__;var G__27657 = state;(G__27657["__om_prev_state"] = (state["__om_state"]));
(G__27657["__om_state"] = pending_state);
(G__27657["__om_pending_state"] = null);
return G__27657;
} else
{return null;
}
});
om.core.merge_props_state = (function() {
var merge_props_state = null;
var merge_props_state__1 = (function (owner){return merge_props_state.cljs$core$IFn$_invoke$arity$2(owner,null);
});
var merge_props_state__2 = (function (owner,props){var props__$1 = (function (){var or__3441__auto__ = props;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return owner.props;
}
})();var temp__4092__auto__ = (props__$1["__om_state"]);if(cljs.core.truth_(temp__4092__auto__))
{var props_state = temp__4092__auto__;var state = owner.state;(state["__om_pending_state"] = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__3441__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return (state["__om_state"]);
}
})(),props_state], 0)));
return (props__$1["__om_state"] = null);
} else
{return null;
}
});
merge_props_state = function(owner,props){
switch(arguments.length){
case 1:
return merge_props_state__1.call(this,owner);
case 2:
return merge_props_state__2.call(this,owner,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge_props_state.cljs$core$IFn$_invoke$arity$1 = merge_props_state__1;
merge_props_state.cljs$core$IFn$_invoke$arity$2 = merge_props_state__2;
return merge_props_state;
})()
;
om.core.Pure = React.createClass({"componentWillUpdate": (function (next_props,next_state){var this$ = this;var c_27683 = om.core.children(this$);if((function (){var G__27658 = c_27683;if(G__27658)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__27658.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__27658.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__27658);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,G__27658);
}
})())
{var state_27684 = this$.state;var _STAR_read_enabled_STAR_27659_27685 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_update(c_27683,om.core.get_props({"props": next_props}),(function (){var or__3441__auto__ = (state_27684["__om_pending_state"]);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return (state_27684["__om_state"]);
}
})());
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27659_27685;
}} else
{}
return om.core.merge_pending_state(this$);
}), "componentDidUpdate": (function (prev_props,prev_state){var this$ = this;var c = om.core.children(this$);if((function (){var G__27660 = c;if(G__27660)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__27660.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__27660.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__27660);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,G__27660);
}
})())
{var state_27686 = this$.state;var _STAR_read_enabled_STAR_27661_27687 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.did_update(c,om.core.get_props({"props": prev_props}),(function (){var or__3441__auto__ = (state_27686["__om_prev_state"]);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return (state_27686["__om_state"]);
}
})());
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27661_27687;
}} else
{}
return (this$.state["__om_prev_state"] = null);
}), "render": (function (){var this$ = this;var c = om.core.children(this$);var props = this$.props;var _STAR_read_enabled_STAR_27662 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
if((function (){var G__27663 = c;if(G__27663)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__27663.om$core$IRender$;
}
})()))
{return true;
} else
{if((!G__27663.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__27663);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRender,G__27663);
}
})())
{var _STAR_parent_STAR_27664 = om.core._STAR_parent_STAR_;var _STAR_instrument_STAR_27665 = om.core._STAR_instrument_STAR_;try{om.core._STAR_parent_STAR_ = this$;
om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);
return om.core.render(c);
}finally {om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_27665;
om.core._STAR_parent_STAR_ = _STAR_parent_STAR_27664;
}} else
{if((function (){var G__27666 = c;if(G__27666)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__27666.om$core$IRenderState$;
}
})()))
{return true;
} else
{if((!G__27666.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__27666);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,G__27666);
}
})())
{var _STAR_parent_STAR_27667 = om.core._STAR_parent_STAR_;var _STAR_instrument_STAR_27668 = om.core._STAR_instrument_STAR_;try{om.core._STAR_parent_STAR_ = this$;
om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);
return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
}finally {om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_27668;
om.core._STAR_parent_STAR_ = _STAR_parent_STAR_27667;
}} else
{if(cljs.core.constant$keyword$273)
{return c;
} else
{return null;
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27662;
}}), "componentWillReceiveProps": (function (next_props){var this$ = this;var c = om.core.children(this$);if((function (){var G__27669 = c;if(G__27669)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__27669.om$core$IWillReceiveProps$;
}
})()))
{return true;
} else
{if((!G__27669.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__27669);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,G__27669);
}
})())
{var _STAR_read_enabled_STAR_27670 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.will_receive_props(c,om.core.get_props({"props": next_props}));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27670;
}} else
{return null;
}
}), "getDisplayName": (function (){var this$ = this;var c = om.core.children(this$);if((function (){var G__27671 = c;if(G__27671)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__27671.om$core$IDisplayName$;
}
})()))
{return true;
} else
{if((!G__27671.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__27671);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,G__27671);
}
})())
{var _STAR_read_enabled_STAR_27672 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.display_name(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27672;
}} else
{return null;
}
}), "componentWillUnmount": (function (){var this$ = this;var c = om.core.children(this$);if((function (){var G__27673 = c;if(G__27673)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__27673.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__27673.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__27673);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,G__27673);
}
})())
{var _STAR_read_enabled_STAR_27674 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.will_unmount(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27674;
}} else
{return null;
}
}), "componentWillMount": (function (){var this$ = this;om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);
var c_27688 = om.core.children(this$);if((function (){var G__27675 = c_27688;if(G__27675)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__27675.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__27675.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__27675);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IWillMount,G__27675);
}
})())
{var _STAR_read_enabled_STAR_27676_27689 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_mount(c_27688);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27676_27689;
}} else
{}
return om.core.merge_pending_state(this$);
}), "componentDidMount": (function (){var this$ = this;var c = om.core.children(this$);if((function (){var G__27677 = c;if(G__27677)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__27677.om$core$IDidMount$;
}
})()))
{return true;
} else
{if((!G__27677.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__27677);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IDidMount,G__27677);
}
})())
{var _STAR_read_enabled_STAR_27678 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.did_mount(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27678;
}} else
{return null;
}
}), "getInitialState": (function (){var this$ = this;var c = om.core.children(this$);var props = this$.props;var istate = (function (){var or__3441__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var ret = {"__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([istate,(((function (){var G__27679 = c;if(G__27679)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__27679.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__27679.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__27679);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IInitState,G__27679);
}
})())?(function (){var _STAR_read_enabled_STAR_27680 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.init_state(c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27680;
}})():null)], 0)), "__om_id": goog.ui.IdGenerator.getInstance().getNextUniqueId()};(props["__om_init_state"] = null);
return ret;
}), "shouldComponentUpdate": (function (next_props,next_state){var this$ = this;var _STAR_read_enabled_STAR_27681 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$.props;var state = this$.state;var c = om.core.children(this$);om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(this$,next_props);
if((function (){var G__27682 = c;if(G__27682)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__27682.om$core$IShouldUpdate$;
}
})()))
{return true;
} else
{if((!G__27682.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__27682);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,G__27682);
}
})())
{return om.core.should_update(c,om.core.get_props({"props": next_props}),(function (){var or__3441__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return (state["__om_state"]);
}
})());
} else
{if(!((om.core._value((props["__om_cursor"])) === om.core._value((next_props["__om_cursor"])))))
{return true;
} else
{if(!(((state["__om_pending_state"]) == null)))
{return true;
} else
{if(!(((props["__om_index"]) === (next_props["__om_index"]))))
{return true;
} else
{if(cljs.core.constant$keyword$273)
{return false;
} else
{return null;
}
}
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27681;
}})});
om.core.pure = (function pure(obj){return (new om.core.Pure(obj));
});
om.core.cursor_QMARK_ = (function cursor_QMARK_(x){var G__27691 = x;if(G__27691)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__27691.om$core$ICursor$;
}
})()))
{return true;
} else
{if((!G__27691.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__27691);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.ICursor,G__27691);
}
});

/**
* @constructor
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2158397195;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.cljs$lang$type = true;
om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";
om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"om.core/MapCursor");
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$__$1,k,null);
});
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{var v = cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.value,k,not_found);if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,not_found)))
{return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k)) : om.core.to_cursor.call(null,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k)));
} else
{return not_found;
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._contains_key_QMARK_(self__.value,k);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._assoc(self__.value,k,v),self__.state,self__.path));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.call = (function() {
var G__27695 = null;
var G__27695__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__27695__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__27695 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__27695__2.call(this,self__,k);
case 3:
return G__27695__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__27695;
})()
;
om.core.MapCursor.prototype.apply = (function (self__,args27692){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args27692)));
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.MapCursor.prototype.om$core$ICursor$ = true;
om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.state),self__.path);
} else
{throw (new Error([cljs.core.str("Cannot deref cursor during render phase: "),cljs.core.str(this$__$1)].join('')));
}
});
om.core.MapCursor.prototype.om$core$IValue$ = true;
om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._pr_writer(self__.value,writer,opts);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((cljs.core.count(self__.value) > 0))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27693){var vec__27694 = p__27693;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27694,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27694,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k)) : om.core.to_cursor.call(null,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k)))], null);
}),self__.value);
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._count(self__.value);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_(other))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});
om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.meta(self__.value);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.MapCursor(cljs.core._dissoc(self__.value,k),self__.state,self__.path));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.MapCursor.prototype.om$core$ITransact$ = true;
om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});
om.core.__GT_MapCursor = (function __GT_MapCursor(value,state,path){return (new om.core.MapCursor(value,state,path));
});

/**
* @constructor
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2175181595;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.cljs$lang$type = true;
om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";
om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"om.core/IndexedCursor");
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,null);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,not_found);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._contains_key_QMARK_(self__.value,k);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,n,v){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core._assoc_n(self__.value,n,v),self__.state,self__.path) : om.core.to_cursor.call(null,cljs.core._assoc_n(self__.value,n,v),self__.state,self__.path));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.call = (function() {
var G__27697 = null;
var G__27697__2 = (function (self__,k){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__27697__3 = (function (self__,k,not_found){var self__ = this;
var self____$1 = this;var this$ = self____$1;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__27697 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__27697__2.call(this,self__,k);
case 3:
return G__27697__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
return G__27697;
})()
;
om.core.IndexedCursor.prototype.apply = (function (self__,args27696){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args27696)));
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){var self__ = this;
var this$ = this;return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
om.core.IndexedCursor.prototype.om$core$ICursor$ = true;
om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.path;
});
om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.state;
});
om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.state),self__.path);
} else
{throw (new Error([cljs.core.str("Cannot deref cursor during render phase: "),cljs.core.str(this$__$1)].join('')));
}
});
om.core.IndexedCursor.prototype.om$core$IValue$ = true;
om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.value;
});
om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._pr_writer(self__.value,writer,opts);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.IndexedCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((cljs.core.count(self__.value) > 0))
{return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (v,i){return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,i)) : om.core.to_cursor.call(null,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,i)));
}),self__.value,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
} else
{return null;
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core._count(self__.value);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core._peek(self__.value),self__.state,self__.path) : om.core.to_cursor.call(null,cljs.core._peek(self__.value),self__.state,self__.path));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core._pop(self__.value),self__.state,self__.path) : om.core.to_cursor.call(null,cljs.core._pop(self__.value),self__.state,self__.path));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_(other))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (new om.core.IndexedCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});
om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return cljs.core.meta(self__.value);
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (_,n){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n)) : om.core.to_cursor.call(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n)));
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (_,n,not_found){var self__ = this;
var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if((n < cljs.core._count(self__.value)))
{return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n)) : om.core.to_cursor.call(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n)));
} else
{return not_found;
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
om.core.IndexedCursor.prototype.om$core$ITransact$ = true;
om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var self__ = this;
var this$__$1 = this;return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});
om.core.__GT_IndexedCursor = (function __GT_IndexedCursor(value,state,path){return (new om.core.IndexedCursor(value,state,path));
});
om.core.to_cursor_STAR_ = (function to_cursor_STAR_(val,state,path){var x27699 = cljs.core.clone(val);x27699.cljs$core$IEquiv$ = true;
x27699.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var ___$1 = this;if(om.core._STAR_read_enabled_STAR_)
{if(om.core.cursor_QMARK_(other))
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else
{return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
} else
{throw (new Error([cljs.core.str("Cannot manipulate cursor outside of render phase, only "),cljs.core.str("om.core/transact!, om.core/update!, and cljs.core/deref operations allowed")].join('')));
}
});
x27699.om$core$ITransact$ = true;
x27699.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){var this$__$1 = this;return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});
x27699.om$core$ICursor$ = true;
x27699.om$core$ICursor$_path$arity$1 = (function (_){var ___$1 = this;return path;
});
x27699.om$core$ICursor$_state$arity$1 = (function (_){var ___$1 = this;return state;
});
x27699.cljs$core$IDeref$ = true;
x27699.cljs$core$IDeref$_deref$arity$1 = (function (this$){var this$__$1 = this;if(!(om.core._STAR_read_enabled_STAR_))
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),path);
} else
{throw (new Error([cljs.core.str("Cannot deref cursor during render phase: "),cljs.core.str(this$__$1)].join('')));
}
});
return x27699;
});
om.core.to_cursor = (function() {
var to_cursor = null;
var to_cursor__1 = (function (val){return to_cursor.cljs$core$IFn$_invoke$arity$3(val,null,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__2 = (function (val,state){return to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,cljs.core.PersistentVector.EMPTY);
});
var to_cursor__3 = (function (val,state,path){if(om.core.cursor_QMARK_(val))
{return val;
} else
{if((function (){var G__27702 = val;if(G__27702)
{var bit__4091__auto__ = null;if(cljs.core.truth_((function (){var or__3441__auto__ = bit__4091__auto__;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return G__27702.om$core$IToCursor$;
}
})()))
{return true;
} else
{if((!G__27702.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__27702);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(om.core.IToCursor,G__27702);
}
})())
{return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,path);
} else
{if(cljs.core.indexed_QMARK_(val))
{return (new om.core.IndexedCursor(val,state,path));
} else
{if(cljs.core.map_QMARK_(val))
{return (new om.core.MapCursor(val,state,path));
} else
{if((function (){var G__27703 = val;if(G__27703)
{var bit__4091__auto__ = (G__27703.cljs$lang$protocol_mask$partition1$ & 8192);if((bit__4091__auto__) || (G__27703.cljs$core$ICloneable$))
{return true;
} else
{if((!G__27703.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__27703);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,G__27703);
}
})())
{return om.core.to_cursor_STAR_(val,state,path);
} else
{if(cljs.core.constant$keyword$273)
{return val;
} else
{return null;
}
}
}
}
}
}
});
to_cursor = function(val,state,path){
switch(arguments.length){
case 1:
return to_cursor__1.call(this,val);
case 2:
return to_cursor__2.call(this,val,state);
case 3:
return to_cursor__3.call(this,val,state,path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
to_cursor.cljs$core$IFn$_invoke$arity$1 = to_cursor__1;
to_cursor.cljs$core$IFn$_invoke$arity$2 = to_cursor__2;
to_cursor.cljs$core$IFn$_invoke$arity$3 = to_cursor__3;
return to_cursor;
})()
;
om.core.notify_STAR_ = (function notify_STAR_(cursor,tx_data){var state = om.core._state(cursor);return om.core._notify(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),state));
});
om.core.refresh_queued = false;
om.core.refresh_set = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
om.core.render_all = (function render_all(){om.core.refresh_queued = false;
var seq__27708 = cljs.core.seq(cljs.core.deref(om.core.refresh_set));var chunk__27709 = null;var count__27710 = 0;var i__27711 = 0;while(true){
if((i__27711 < count__27710))
{var f = chunk__27709.cljs$core$IIndexed$_nth$arity$2(null,i__27711);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__27712 = seq__27708;
var G__27713 = chunk__27709;
var G__27714 = count__27710;
var G__27715 = (i__27711 + 1);
seq__27708 = G__27712;
chunk__27709 = G__27713;
count__27710 = G__27714;
i__27711 = G__27715;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__27708);if(temp__4092__auto__)
{var seq__27708__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__27708__$1))
{var c__4189__auto__ = cljs.core.chunk_first(seq__27708__$1);{
var G__27716 = cljs.core.chunk_rest(seq__27708__$1);
var G__27717 = c__4189__auto__;
var G__27718 = cljs.core.count(c__4189__auto__);
var G__27719 = 0;
seq__27708 = G__27716;
chunk__27709 = G__27717;
count__27710 = G__27718;
i__27711 = G__27719;
continue;
}
} else
{var f = cljs.core.first(seq__27708__$1);(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
{
var G__27720 = cljs.core.next(seq__27708__$1);
var G__27721 = null;
var G__27722 = 0;
var G__27723 = 0;
seq__27708 = G__27720;
chunk__27709 = G__27721;
count__27710 = G__27722;
i__27711 = G__27723;
continue;
}
}
} else
{return null;
}
}
break;
}
});
om.core.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
om.core.valid_QMARK_ = (function valid_QMARK_(m){return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [cljs.core.constant$keyword$345,null,cljs.core.constant$keyword$346,null,cljs.core.constant$keyword$347,null,cljs.core.constant$keyword$348,null,cljs.core.constant$keyword$349,null,cljs.core.constant$keyword$350,null,cljs.core.constant$keyword$351,null,cljs.core.constant$keyword$352,null,cljs.core.constant$keyword$353,null,cljs.core.constant$keyword$354,null], null), null),cljs.core.keys(m));
});
om.core.id = (function id(owner){return (owner.state["__om_id"]);
});
om.core.build_STAR_ = (function() {
var build_STAR_ = null;
var build_STAR___2 = (function (f,cursor){return build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
});
var build_STAR___3 = (function (f,cursor,m){if(om.core.valid_QMARK_(m))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"build options contains invalid keys, only :key, :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose(", ",cljs.core.keys(m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"valid?","valid?",1830611324,null),new cljs.core.Symbol(null,"m","m",-1640531418,null))], 0)))].join('')));
}
if((m == null))
{var shared = (function (){var or__3441__auto__ = cljs.core.constant$keyword$352.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();var ctor = (function (){var or__3441__auto__ = cljs.core.constant$keyword$346.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return om.core.pure;
}
})();var pure__9267__auto__ = (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1({"children": (function (this$){var _STAR_read_enabled_STAR_27728 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cursor,this$) : f.call(null,cursor,this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27728;
}}), "__om_instrument": om.core._STAR_instrument_STAR_, "__om_shared": shared, "__om_cursor": cursor}) : ctor.call(null,{"children": (function (this$){var _STAR_read_enabled_STAR_27728 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cursor,this$) : f.call(null,cursor,this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27728;
}}), "__om_instrument": om.core._STAR_instrument_STAR_, "__om_shared": shared, "__om_cursor": cursor}));pure__9267__auto__.constructor = goog.getUid(f);
return pure__9267__auto__;
} else
{if(cljs.core.constant$keyword$273)
{var map__27729 = m;var map__27729__$1 = ((cljs.core.seq_QMARK_(map__27729))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27729):map__27729);var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27729__$1,cljs.core.constant$keyword$353);var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27729__$1,cljs.core.constant$keyword$345);var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27729__$1,cljs.core.constant$keyword$347);var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27729__$1,cljs.core.constant$keyword$350);var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$354);var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(cursor) : dataf.call(null,cursor)):cursor);var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.constant$keyword$348));var shared = (function (){var or__3441__auto__ = cljs.core.constant$keyword$352.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();var ctor = (function (){var or__3441__auto__ = cljs.core.constant$keyword$346.cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return om.core.pure;
}
})();var pure__9267__auto__ = (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1({"children": (((opts == null))?(function (this$){var _STAR_read_enabled_STAR_27730 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,this$) : f.call(null,cursor_SINGLEQUOTE_,this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27730;
}}):(function (this$){var _STAR_read_enabled_STAR_27731 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(cursor_SINGLEQUOTE_,this$,opts) : f.call(null,cursor_SINGLEQUOTE_,this$,opts));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27731;
}})), "key": rkey, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_shared": shared, "__om_state": state, "__om_init_state": init_state, "__om_index": cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(m), "__om_cursor": cursor_SINGLEQUOTE_}) : ctor.call(null,{"children": (((opts == null))?(function (this$){var _STAR_read_enabled_STAR_27730 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,this$) : f.call(null,cursor_SINGLEQUOTE_,this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27730;
}}):(function (this$){var _STAR_read_enabled_STAR_27731 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(cursor_SINGLEQUOTE_,this$,opts) : f.call(null,cursor_SINGLEQUOTE_,this$,opts));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27731;
}})), "key": rkey, "__om_instrument": om.core._STAR_instrument_STAR_, "__om_shared": shared, "__om_state": state, "__om_init_state": init_state, "__om_index": cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(m), "__om_cursor": cursor_SINGLEQUOTE_}));pure__9267__auto__.constructor = goog.getUid(f);
return pure__9267__auto__;
} else
{return null;
}
}
});
build_STAR_ = function(f,cursor,m){
switch(arguments.length){
case 2:
return build_STAR___2.call(this,f,cursor);
case 3:
return build_STAR___3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_STAR_.cljs$core$IFn$_invoke$arity$2 = build_STAR___2;
build_STAR_.cljs$core$IFn$_invoke$arity$3 = build_STAR___3;
return build_STAR_;
})()
;
/**
* Builds an Om component. Takes an IRender/IRenderState instance
* returning function f, a cursor, and an optional third argument
* which may be a map of build specifications.
* 
* f - is a function of 2 or 3 arguments. The first argument will be
* the cursor and the second argument will be the owning pure node.
* If a map of options m is passed in this will be the third
* argument. f must return at a minimum an IRender or IRenderState
* instance, this instance may implement other React life cycle
* protocols.
* 
* cursor - an ICursor instance
* 
* m - a map the following keys are allowed:
* 
* :key        - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key  - an explicit react key
* :fn         - a function to apply to the data before invoking f.
* :init-state - a map of initial state to pass to the component.
* :state      - a map of state to pass to the component, will be merged in.
* :opts       - a map of values. Can be used to pass side information down
* the render tree.
* 
* Example:
* 
* (build list-of-gadgets cursor
* {:init-state {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,cursor){return build.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
});
var build__3 = (function (f,cursor,m){if(!((om.core._STAR_instrument_STAR_ == null)))
{var ret = (function (){var _STAR_read_enabled_STAR_27733 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,m) : om.core._STAR_instrument_STAR_.call(null,f,cursor,m));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27733;
}})();if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.constant$keyword$355))
{return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
} else
{return ret;
}
} else
{return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}
});
build = function(f,cursor,m){
switch(arguments.length){
case 2:
return build__2.call(this,f,cursor);
case 3:
return build__3.call(this,f,cursor,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Build a sequence of components. f is the component constructor
* function, xs a sequence of cursors, and m a map of options the
* same as provided to om.core/build.
*/
om.core.build_all = (function() {
var build_all = null;
var build_all__2 = (function (f,xs){return build_all.cljs$core$IFn$_invoke$arity$3(f,xs,null);
});
var build_all__3 = (function (f,xs,m){return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,i){return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.constant$keyword$349,i));
}),xs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});
build_all = function(f,xs,m){
switch(arguments.length){
case 2:
return build_all__2.call(this,f,xs);
case 3:
return build_all__3.call(this,f,xs,m);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build_all.cljs$core$IFn$_invoke$arity$2 = build_all__2;
build_all.cljs$core$IFn$_invoke$arity$3 = build_all__3;
return build_all;
})()
;
/**
* Take a component constructor function f, value an immutable tree of
* associative data structures optionally an wrapped in an IAtom
* instance, and a map of options and installs an Om/React render
* loop.
* 
* f must return an instance that at a minimum implements IRender or
* IRenderState (it may implement other React life cycle protocols). f
* must take at least two arguments, the root cursor and the owning pure
* node. A cursor is just the original data wrapped in an ICursor
* instance which maintains path information. Only one root render
* loop allowed per target element. om.core/root is idempotent, if
* called again on the same target element the previous render loop
* will be replaced.
* 
* Options may also include any key allowed by om.core/build to
* customize f. In addition om.core/root supports the following
* special options:
* 
* :target     - (required) a DOM element.
* :shared     - data to be shared by all components, see om.core/get-shared
* :tx-listen  - a function that will listen in in transactions, should
* take 2 arguments - the first a map containing the
* path, old and new state at path, old and new global
* state, and transaction tag if provided.
* :instrument - a function of three arguments that if provided will
* intercept all calls to om.core/build. This function should
* correspond to the three arity version of om.core/build.
* 
* Example:
* 
* (root
* (fn [data owner]
* ...)
* {:message :hello}
* {:target js/document.body})
*/
om.core.root = (function root(f,value,p__27734){var map__27740 = p__27734;var map__27740__$1 = ((cljs.core.seq_QMARK_(map__27740))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27740):map__27740);var options = map__27740__$1;var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27740__$1,cljs.core.constant$keyword$351);var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27740__$1,cljs.core.constant$keyword$340);var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27740__$1,cljs.core.constant$keyword$356);var shared = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27740__$1,cljs.core.constant$keyword$352);var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27740__$1,cljs.core.constant$keyword$357);if(!((target == null)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",-1640422260,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",-1637150201,null),new cljs.core.Symbol(null,"target","target",1773529930,null)))], 0)))].join('')));
}
var roots_SINGLEQUOTE__27745 = cljs.core.deref(om.core.roots);if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__27745,target))
{cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__27745,target).call(null);
} else
{}
var state = (((function (){var G__27741 = value;if(G__27741)
{var bit__4091__auto__ = (G__27741.cljs$lang$protocol_mask$partition1$ & 16384);if((bit__4091__auto__) || (G__27741.cljs$core$IAtom$))
{return true;
} else
{if((!G__27741.cljs$lang$protocol_mask$partition1$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__27741);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,G__27741);
}
})())?value:cljs.core.atom.cljs$core$IFn$_invoke$arity$1(value));var state__$1 = (function (){var x27742 = state;x27742.om$core$INotify$ = true;
x27742.om$core$INotify$_notify$arity$3 = ((function (x27742,state){
return (function (_,tx_data,root_cursor){var ___$1 = this;if((tx_listen == null))
{return null;
} else
{return (tx_listen.cljs$core$IFn$_invoke$arity$2 ? tx_listen.cljs$core$IFn$_invoke$arity$2(tx_data,root_cursor) : tx_listen.call(null,tx_data,root_cursor));
}
});})(x27742,state))
;
return x27742;
})();var m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.constant$keyword$357,cljs.core.array_seq([cljs.core.constant$keyword$356,cljs.core.constant$keyword$340], 0));var rootf = ((function (state,state__$1,m){
return (function rootf(){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);
var value__$1 = cljs.core.deref(state__$1);var cursor = (((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path));return om.dom.render((function (){var _STAR_instrument_STAR_27744 = om.core._STAR_instrument_STAR_;try{om.core._STAR_instrument_STAR_ = instrument;
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_27744;
}})(),target);
});})(state,state__$1,m))
;var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();cljs.core.add_watch(state__$1,watch_key,(function (_,___$1,___$2,___$3){if(cljs.core.contains_QMARK_(cljs.core.deref(om.core.refresh_set),rootf))
{} else
{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}
if(cljs.core.truth_(om.core.refresh_queued))
{return null;
} else
{om.core.refresh_queued = true;
if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame(om.core.render_all);
} else
{return setTimeout(om.core.render_all,16);
}
}
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,(function (){cljs.core.remove_watch(state__$1,watch_key);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);
return React.unmountComponentAtNode(target);
}));
return rootf();
});
/**
* Given a tag, a cursor, an optional list of keys ks, mutate the tree
* at the path specified by the cursor + the optional keys by applying
* f to the specified value in the tree. An Om re-render will be
* triggered.
*/
om.core.transact_BANG_ = (function() {
var transact_BANG_ = null;
var transact_BANG___2 = (function (cursor,f){return transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,f,null);
});
var transact_BANG___3 = (function (cursor,korks,f){return transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,null);
});
var transact_BANG___4 = (function (cursor,korks,f,tag){var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:((cljs.core.constant$keyword$273)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null):null)));return om.core._transact_BANG_(cursor,korks__$1,f,tag);
});
transact_BANG_ = function(cursor,korks,f,tag){
switch(arguments.length){
case 2:
return transact_BANG___2.call(this,cursor,korks);
case 3:
return transact_BANG___3.call(this,cursor,korks,f);
case 4:
return transact_BANG___4.call(this,cursor,korks,f,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
transact_BANG_.cljs$core$IFn$_invoke$arity$2 = transact_BANG___2;
transact_BANG_.cljs$core$IFn$_invoke$arity$3 = transact_BANG___3;
transact_BANG_.cljs$core$IFn$_invoke$arity$4 = transact_BANG___4;
return transact_BANG_;
})()
;
/**
* Like transact! but no function provided, instead a replacement
* value is given.
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,v){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,(function (_){return v;
}),null);
});
var update_BANG___3 = (function (cursor,korks,v){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){return v;
}),null);
});
var update_BANG___4 = (function (cursor,korks,v,tag){return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){return v;
}),tag);
});
update_BANG_ = function(cursor,korks,v,tag){
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,korks);
case 3:
return update_BANG___3.call(this,cursor,korks,v);
case 4:
return update_BANG___4.call(this,cursor,korks,v,tag);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
return update_BANG_;
})()
;
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name.
*/
om.core.get_node = (function() {
var get_node = null;
var get_node__1 = (function (owner){return owner.getDOMNode();
});
var get_node__2 = (function (owner,name){var temp__4092__auto__ = owner.refs;if(cljs.core.truth_(temp__4092__auto__))
{var refs = temp__4092__auto__;return (refs[name]).getDOMNode();
} else
{return null;
}
});
get_node = function(owner,name){
switch(arguments.length){
case 1:
return get_node__1.call(this,owner);
case 2:
return get_node__2.call(this,owner,name);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_node.cljs$core$IFn$_invoke$arity$1 = get_node__1;
get_node.cljs$core$IFn$_invoke$arity$2 = get_node__2;
return get_node;
})()
;
/**
* Takes a pure owning component, a sequential list of keys and value and
* sets the state of the component. Conceptually analagous to React
* setState. Will schedule an Om re-render.
*/
om.core.set_state_BANG_ = (function set_state_BANG_(owner,korks,v){var _STAR_read_enabled_STAR_27747 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = owner.props;var state = owner.state;var cursor = (props["__om_cursor"]);var path = om.core._path(cursor);var pstate = (function (){var or__3441__auto__ = (state["__om_pending_state"]);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return (state["__om_state"]);
}
})();if(!(cljs.core.sequential_QMARK_(korks)))
{(state["__om_pending_state"] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pstate,korks,v));
} else
{(state["__om_pending_state"] = cljs.core.assoc_in(pstate,korks,v));
}
if(cljs.core.empty_QMARK_(path))
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(om.core._state(cursor),cljs.core.clone);
} else
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core._state(cursor),cljs.core.update_in,path,cljs.core.clone);
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_27747;
}});
/**
* Takes a pure owning component and an optional key or sequential
* list of keys and returns a property in the component local state if
* it exists. Always returns the rendered state, not the pending
* state.
*/
om.core.get_render_state = (function() {
var get_render_state = null;
var get_render_state__1 = (function (owner){return (owner.state["__om_state"]);
});
var get_render_state__2 = (function (owner,korks){if(!(cljs.core.sequential_QMARK_(korks)))
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(get_render_state.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else
{if(cljs.core.empty_QMARK_(korks))
{return get_render_state.cljs$core$IFn$_invoke$arity$1(owner);
} else
{if(cljs.core.constant$keyword$273)
{return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(get_render_state.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else
{return null;
}
}
}
});
get_render_state = function(owner,korks){
switch(arguments.length){
case 1:
return get_render_state__1.call(this,owner);
case 2:
return get_render_state__2.call(this,owner,korks);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_render_state.cljs$core$IFn$_invoke$arity$1 = get_render_state__1;
get_render_state.cljs$core$IFn$_invoke$arity$2 = get_render_state__2;
return get_render_state;
})()
;
/**
* Create a cursor instance by attaching to an existing cursor. This
* supports building components which don't need to set app state but
* need to be added to the render tree.
*/
om.core.graft = (function graft(value,cursor){var state = om.core._state(cursor);var path = om.core._path(cursor);if(om.core.cursor_QMARK_(value))
{throw (new Error([cljs.core.str(value),cljs.core.str(" is already a cursor.")].join('')));
} else
{var x27749 = cljs.core.clone(value);x27749.om$core$ICursor$ = true;
x27749.om$core$ICursor$_state$arity$1 = (function (_){var ___$1 = this;return state;
});
x27749.om$core$ICursor$_path$arity$1 = (function (_){var ___$1 = this;return path;
});
x27749.om$core$ITransact$ = true;
x27749.om$core$ITransact$_transact_BANG_$arity$3 = (function (_,___$1,___$2){var ___$3 = this;throw (new Error("Cannot transact on graft"));
});
return x27749;
}
});

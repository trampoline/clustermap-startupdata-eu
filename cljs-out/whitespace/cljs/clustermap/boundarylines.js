// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.boundarylines');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
clustermap.boundarylines.zoom_tolerances = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,0.07], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [7,0.01], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [9,0.002], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [12,3.0E-4], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,0], null)], null);
clustermap.boundarylines.ideal_tolerance = (function ideal_tolerance(zoom){var or__3441__auto__ = cljs.core.some.call(null,(function (p__33756){var vec__33757 = p__33756;var z = cljs.core.nth.call(null,vec__33757,0,null);var t = cljs.core.nth.call(null,vec__33757,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = z;if(cljs.core.truth_(and__3429__auto__))
{return (zoom <= z);
} else
{return and__3429__auto__;
}
})()))
{return t;
} else
{return null;
}
}),clustermap.boundarylines.zoom_tolerances);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
});
clustermap.boundarylines.best_available_tolerance = (function best_available_tolerance(zoom,available_tolerances){var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var coarser = cljs.core.reverse.call(null,cljs.core.filter.call(null,((function (i_tol){
return (function (t){return (t > i_tol);
});})(i_tol))
,cljs.core.map.call(null,cljs.core.last,clustermap.boundarylines.zoom_tolerances)));var finer = cljs.core.filter.call(null,((function (i_tol,coarser){
return (function (t){return (t < i_tol);
});})(i_tol,coarser))
,cljs.core.map.call(null,cljs.core.last,clustermap.boundarylines.zoom_tolerances));var avail_set = cljs.core.set.call(null,available_tolerances);var or__3441__auto__ = cljs.core.get.call(null,avail_set,i_tol);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = cljs.core.some.call(null,avail_set,finer);if(cljs.core.truth_(or__3441__auto____$1))
{return or__3441__auto____$1;
} else
{return cljs.core.some.call(null,avail_set,coarser);
}
}
});
/**
* fetch a boundaryline for a given tolerance and add it to the cache
*/
clustermap.boundarylines.fetch_boundaryline = (function fetch_boundaryline(app_state,korks,boundaryline_id,tolerance){var comm = clustermap.api.boundarylines.call(null,boundaryline_id,tolerance,new cljs.core.Keyword(null,"raw","raw",1014016922),true);var use_korks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));var path = cljs.core.concat.call(null,use_korks,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,tolerance], null));var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_33777){var state_val_33778 = (state_33777[1]);if((state_val_33778 === 2))
{var inst_33773 = (state_33777[2]);var inst_33774 = (function (){var bl = inst_33773;return ((function (bl,inst_33773,state_val_33778){
return (function (old){return bl;
});
;})(bl,inst_33773,state_val_33778))
})();var inst_33775 = cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,path,inst_33774);var state_33777__$1 = state_33777;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33777__$1,inst_33775);
} else
{if((state_val_33778 === 1))
{var state_33777__$1 = state_33777;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33777__$1,2,comm);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_33782 = [null,null,null,null,null,null,null];(statearr_33782[0] = state_machine__5548__auto__);
(statearr_33782[1] = 1);
return statearr_33782;
});
var state_machine__5548__auto____1 = (function (state_33777){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_33777);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e33783){if((e33783 instanceof Object))
{var ex__5551__auto__ = e33783;var statearr_33784_33786 = state_33777;(statearr_33784_33786[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33777);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33783;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33787 = state_33777;
state_33777 = G__33787;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_33777){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_33777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_33785 = f__5563__auto__.call(null);(statearr_33785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_33785;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
});
/**
* gets the best boundaryline version for a zoom level...
* if the best isn't available, fetches it async and immediately
* returns the next best available
* - default : default value to return if nothing currently available
* - min-zoom : if (<= zoom min-zoom) do nothing and return the default
* returns [tolerance, boundaryline] or default if nothing is available or
* (<= zoom min-zoom)
* @param {...*} var_args
*/
clustermap.boundarylines.get_or_fetch_best_boundaryline = (function() { 
var get_or_fetch_best_boundaryline__delegate = function (app_state,korks,boundaryline_id,zoom,p__33788){var map__33790 = p__33788;var map__33790__$1 = ((cljs.core.seq_QMARK_.call(null,map__33790))?cljs.core.apply.call(null,cljs.core.hash_map,map__33790):map__33790);var min_zoom = cljs.core.get.call(null,map__33790__$1,new cljs.core.Keyword(null,"min-zoom","min-zoom",3894785504));if(cljs.core.truth_((function (){var and__3429__auto__ = min_zoom;if(cljs.core.truth_(and__3429__auto__))
{return (zoom <= min_zoom);
} else
{return and__3429__auto__;
}
})()))
{return null;
} else
{var use_korks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));var boundarylines = cljs.core.get_in.call(null,cljs.core.deref.call(null,app_state),use_korks);var bl_versions = cljs.core.get.call(null,boundarylines,boundaryline_id);var i_tol = clustermap.boundarylines.ideal_tolerance.call(null,zoom);var use_tol = clustermap.boundarylines.best_available_tolerance.call(null,zoom,cljs.core.keys.call(null,bl_versions));var use_bl = cljs.core.get_in.call(null,boundarylines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boundaryline_id,use_tol], null));if(cljs.core.not_EQ_.call(null,i_tol,use_tol))
{clustermap.boundarylines.fetch_boundaryline.call(null,app_state,korks,boundaryline_id,i_tol);
} else
{}
if(cljs.core.truth_(use_bl))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [use_tol,use_bl], null);
} else
{return null;
}
}
};
var get_or_fetch_best_boundaryline = function (app_state,korks,boundaryline_id,zoom,var_args){
var p__33788 = null;if (arguments.length > 4) {
  p__33788 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return get_or_fetch_best_boundaryline__delegate.call(this,app_state,korks,boundaryline_id,zoom,p__33788);};
get_or_fetch_best_boundaryline.cljs$lang$maxFixedArity = 4;
get_or_fetch_best_boundaryline.cljs$lang$applyTo = (function (arglist__33791){
var app_state = cljs.core.first(arglist__33791);
arglist__33791 = cljs.core.next(arglist__33791);
var korks = cljs.core.first(arglist__33791);
arglist__33791 = cljs.core.next(arglist__33791);
var boundaryline_id = cljs.core.first(arglist__33791);
arglist__33791 = cljs.core.next(arglist__33791);
var zoom = cljs.core.first(arglist__33791);
var p__33788 = cljs.core.rest(arglist__33791);
return get_or_fetch_best_boundaryline__delegate(app_state,korks,boundaryline_id,zoom,p__33788);
});
get_or_fetch_best_boundaryline.cljs$core$IFn$_invoke$arity$variadic = get_or_fetch_best_boundaryline__delegate;
return get_or_fetch_best_boundaryline;
})()
;

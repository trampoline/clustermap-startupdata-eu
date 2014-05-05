// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.ganalytics');
goog.require('clustermap.routes');
goog.require('clustermap.boundarylines');
goog.require('clustermap.boundarylines');
goog.require('goog.History');
goog.require('clustermap.nav');
goog.require('clustermap.api');
goog.require('clustermap.components.page_title');
goog.require('clustermap.components.full_report');
goog.require('clustermap.api');
goog.require('clustermap.components.page_title');
goog.require('goog.events');
goog.require('clustermap.routes');
goog.require('secretary.core');
goog.require('clustermap.components.search');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.components.map');
goog.require('clustermap.rtree');
goog.require('om.core');
goog.require('clustermap.rtree');
goog.require('clustermap.components.map_report');
goog.require('clustermap.components.search');
goog.require('clustermap.ganalytics');
goog.require('om.dom');
goog.require('clustermap.components.full_report');
goog.require('clustermap.nav');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('clustermap.components.map_report');
goog.require('clustermap.components.map');
goog.require('goog.events');
goog.require('secretary.core');
clustermap.app.state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$479,cljs.core.constant$keyword$419,cljs.core.constant$keyword$509,cljs.core.constant$keyword$399,cljs.core.constant$keyword$518,cljs.core.constant$keyword$519,cljs.core.constant$keyword$465,cljs.core.constant$keyword$467,cljs.core.constant$keyword$373,cljs.core.constant$keyword$508,cljs.core.constant$keyword$510,cljs.core.constant$keyword$456,cljs.core.constant$keyword$466,cljs.core.constant$keyword$400,cljs.core.constant$keyword$480,cljs.core.constant$keyword$520,cljs.core.constant$keyword$511],[cljs.core.constant$keyword$488,null,null,null,null,null,null,null,null,null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,null,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,p__22432){var vec__22433 = p__22432;var key_or_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22433,0,null);var value_or_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22433,1,null);var path = ((cljs.core.sequential_QMARK_(key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,path,((cljs.core.fn_QMARK_(value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__22434){var map__22436 = p__22434;var map__22436__$1 = ((cljs.core.seq_QMARK_(map__22436))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22436):map__22436);var path_values = map__22436__$1;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__22434 = null;if (arguments.length > 0) {
  p__22434 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__22434);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__22437){
var p__22434 = cljs.core.seq(arglist__22437);
return set_state__delegate(p__22434);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_22459){var state_val_22460 = (state_22459[1]);if((state_val_22460 === 2))
{var inst_22455 = (state_22459[2]);var inst_22456 = clustermap.rtree.rtree_index(inst_22455);var inst_22457 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$509,inst_22455,cljs.core.constant$keyword$510,inst_22456], 0));var state_22459__$1 = state_22459;return cljs.core.async.impl.ioc_helpers.return_chan(state_22459__$1,inst_22457);
} else
{if((state_val_22460 === 1))
{var inst_22453 = clustermap.api.boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic("world_countries",cljs.core.array_seq([cljs.core.constant$keyword$298,true], 0));var state_22459__$1 = state_22459;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22459__$1,2,inst_22453);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_22464 = [null,null,null,null,null,null,null];(statearr_22464[0] = state_machine__5548__auto__);
(statearr_22464[1] = 1);
return statearr_22464;
});
var state_machine__5548__auto____1 = (function (state_22459){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_22459);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$284))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e22465){if((e22465 instanceof Object))
{var ex__5551__auto__ = e22465;var statearr_22466_22468 = state_22459;(statearr_22466_22468[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22459);
return cljs.core.constant$keyword$284;
} else
{if(cljs.core.constant$keyword$273)
{throw e22465;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$284))
{{
var G__22469 = state_22459;
state_22459 = G__22469;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_22459){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_22459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_22467 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_22467[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_22467;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_22489){var state_val_22490 = (state_22489[1]);if((state_val_22490 === 2))
{var inst_22486 = (state_22489[2]);var inst_22487 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$400,inst_22486], 0));var state_22489__$1 = state_22489;return cljs.core.async.impl.ioc_helpers.return_chan(state_22489__$1,inst_22487);
} else
{if((state_val_22490 === 1))
{var inst_22484 = clustermap.api.investment_stats();var state_22489__$1 = state_22489;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22489__$1,2,inst_22484);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_22494 = [null,null,null,null,null,null,null];(statearr_22494[0] = state_machine__5548__auto__);
(statearr_22494[1] = 1);
return statearr_22494;
});
var state_machine__5548__auto____1 = (function (state_22489){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_22489);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$284))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e22495){if((e22495 instanceof Object))
{var ex__5551__auto__ = e22495;var statearr_22496_22498 = state_22489;(statearr_22496_22498[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22489);
return cljs.core.constant$keyword$284;
} else
{if(cljs.core.constant$keyword$273)
{throw e22495;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$284))
{{
var G__22499 = state_22489;
state_22489 = G__22499;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_22489){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_22489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_22497 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_22497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_22497;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$480,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(results)], 0));
});
clustermap.app.process_selection = (function process_selection(p__22500,type){var vec__22502 = p__22500;var selection = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22502,0,null);var selection_investment_stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22502,1,null);var selection_investment_account_timelines = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22502,2,null);var selection_investment_aggs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22502,3,null);var selection_investments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22502,4,null);var selection_portfolio_company_locations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22502,5,null);return clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$373,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$317,type,cljs.core.constant$keyword$278,selection], null),cljs.core.constant$keyword$399,selection_investment_stats,cljs.core.constant$keyword$456,selection_investment_account_timelines,cljs.core.constant$keyword$467,selection_investment_aggs,cljs.core.constant$keyword$466,selection_investments,cljs.core.constant$keyword$508,selection_portfolio_company_locations], 0));
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__22503){var vec__22508 = p__22503;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22508,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22508,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = cljs.core.constant$keyword$465.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state));if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selector,old_selector))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$465,selector], 0));
var pred__22509 = cljs.core._EQ_;var expr__22510 = type;if(cljs.core.truth_((pred__22509.cljs$core$IFn$_invoke$arity$2 ? pred__22509.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$362,expr__22510) : pred__22509.call(null,cljs.core.constant$keyword$362,expr__22510))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__22509.cljs$core$IFn$_invoke$arity$2 ? pred__22509.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$363,expr__22510) : pred__22509.call(null,cljs.core.constant$keyword$363,expr__22510))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{if(cljs.core.truth_((pred__22509.cljs$core$IFn$_invoke$arity$2 ? pred__22509.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$364,expr__22510) : pred__22509.call(null,cljs.core.constant$keyword$364,expr__22510))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency(id),clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0))], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.investment_stats.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([selector], 0)),null], null),type], null);
}
}
}
} else
{return null;
}
});
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(view);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(view__$1,cljs.core.constant$keyword$479.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(clustermap.app.state))))
{clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$479,view__$1], 0));
return clustermap.nav.change_view(cljs.core.name(view__$1));
} else
{return null;
}
});
clustermap.app.history = (new goog.History());
clustermap.app.set_route = (function set_route(view,type,id){if(cljs.core.truth_((function (){var and__3429__auto__ = type;if(cljs.core.truth_(and__3429__auto__))
{return id;
} else
{return and__3429__auto__;
}
})()))
{return clustermap.app.history.setToken([cljs.core.str("/"),cljs.core.str(cljs.core.name((function (){var or__3441__auto__ = view;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "map";
}
})())),cljs.core.str("/"),cljs.core.str(cljs.core.name(type)),cljs.core.str("/"),cljs.core.str(cljs.core.name(id))].join(''));
} else
{if(cljs.core.truth_(view))
{return clustermap.app.history.setToken([cljs.core.str("/"),cljs.core.str(cljs.core.name(view))].join(''));
} else
{if(true)
{return clustermap.app.history.setToken([cljs.core.str("")].join(''));
} else
{return null;
}
}
}
});
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__22513 = cljs.core.re_matches(/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22513,0,null);var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22513,1,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22513,2,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22513,3,null);return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$479,view,cljs.core.constant$keyword$317,type,cljs.core.constant$keyword$313,id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__22514){var vec__22517 = p__22514;var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22517,0,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22517,1,null);var map__22518 = clustermap.app.parse_route();var map__22518__$1 = ((cljs.core.seq_QMARK_(map__22518))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22518):map__22518);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22518__$1,cljs.core.constant$keyword$479);return clustermap.app.set_route(view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__22520 = clustermap.app.parse_route();var map__22520__$1 = ((cljs.core.seq_QMARK_(map__22520))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22520):map__22520);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22520__$1,cljs.core.constant$keyword$313);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22520__$1,cljs.core.constant$keyword$317);return clustermap.app.set_route(view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_22553){var state_val_22554 = (state_22553[1]);if((state_val_22554 === 2))
{var inst_22544 = (state_22553[7]);var inst_22550 = (state_22553[2]);var inst_22551 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$518,inst_22544,cljs.core.constant$keyword$467,inst_22550], 0));var state_22553__$1 = state_22553;return cljs.core.async.impl.ioc_helpers.return_chan(state_22553__$1,inst_22551);
} else
{if((state_val_22554 === 1))
{var inst_22544 = (state_22553[7]);var inst_22542 = cljs.core.deref(clustermap.app.state);var inst_22543 = cljs.core.constant$keyword$518.cljs$core$IFn$_invoke$arity$1(inst_22542);var inst_22544__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_22543,table_view], 0));var inst_22545 = cljs.core.deref(clustermap.app.state);var inst_22546 = cljs.core.constant$keyword$465.cljs$core$IFn$_invoke$arity$1(inst_22545);var inst_22547 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_22546,inst_22544__$1], 0));var inst_22548 = clustermap.api.investment_aggs.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_22547], 0));var state_22553__$1 = (function (){var statearr_22555 = state_22553;(statearr_22555[7] = inst_22544__$1);
return statearr_22555;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22553__$1,2,inst_22548);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_22559 = [null,null,null,null,null,null,null,null];(statearr_22559[0] = state_machine__5548__auto__);
(statearr_22559[1] = 1);
return statearr_22559;
});
var state_machine__5548__auto____1 = (function (state_22553){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_22553);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$284))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e22560){if((e22560 instanceof Object))
{var ex__5551__auto__ = e22560;var statearr_22561_22563 = state_22553;(statearr_22561_22563[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22553);
return cljs.core.constant$keyword$284;
} else
{if(cljs.core.constant$keyword$273)
{throw e22560;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$284))
{{
var G__22564 = state_22553;
state_22553 = G__22564;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_22553){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_22553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_22562 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_22562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_22562;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_22597){var state_val_22598 = (state_22597[1]);if((state_val_22598 === 2))
{var inst_22588 = (state_22597[7]);var inst_22594 = (state_22597[2]);var inst_22595 = clustermap.app.set_state.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$519,inst_22588,cljs.core.constant$keyword$466,inst_22594], 0));var state_22597__$1 = state_22597;return cljs.core.async.impl.ioc_helpers.return_chan(state_22597__$1,inst_22595);
} else
{if((state_val_22598 === 1))
{var inst_22588 = (state_22597[7]);var inst_22586 = cljs.core.deref(clustermap.app.state);var inst_22587 = cljs.core.constant$keyword$519.cljs$core$IFn$_invoke$arity$1(inst_22586);var inst_22588__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_22587,table_view], 0));var inst_22589 = cljs.core.deref(clustermap.app.state);var inst_22590 = cljs.core.constant$keyword$465.cljs$core$IFn$_invoke$arity$1(inst_22589);var inst_22591 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_22590,inst_22588__$1], 0));var inst_22592 = clustermap.api.investments.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([inst_22591], 0));var state_22597__$1 = (function (){var statearr_22599 = state_22597;(statearr_22599[7] = inst_22588__$1);
return statearr_22599;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22597__$1,2,inst_22592);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_22603 = [null,null,null,null,null,null,null,null];(statearr_22603[0] = state_machine__5548__auto__);
(statearr_22603[1] = 1);
return statearr_22603;
});
var state_machine__5548__auto____1 = (function (state_22597){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_22597);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$284))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e22604){if((e22604 instanceof Object))
{var ex__5551__auto__ = e22604;var statearr_22605_22607 = state_22597;(statearr_22605_22607[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22597);
return cljs.core.constant$keyword$284;
} else
{if(cljs.core.constant$keyword$273)
{throw e22604;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$284))
{{
var G__22608 = state_22597;
state_22597 = G__22608;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_22597){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_22597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_22606 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_22606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_22606;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.event_handlers = cljs.core.PersistentArrayMap.EMPTY;
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clustermap.app.event_handlers,type);if(cljs.core.truth_(handler))
{return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(val) : handler.call(null,val));
} else
{return null;
}
});
clustermap.app.init_routes = (function init_routes(comm){var action__9284__auto___22625 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__22617 = params__9285__auto__;var map__22617__$1 = ((cljs.core.seq_QMARK_(map__22617))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22617):map__22617);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$521,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__22618 = params__9285__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$521,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("",action__9284__auto___22625);
var action__9284__auto___22626 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__22619 = params__9285__auto__;var map__22619__$1 = ((cljs.core.seq_QMARK_(map__22619))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22619):map__22619);return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$521,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__22620 = params__9285__auto__;return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$521,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/",action__9284__auto___22626);
var action__9284__auto___22627 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__22621 = params__9285__auto__;var map__22621__$1 = ((cljs.core.seq_QMARK_(map__22621))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22621):map__22621);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22621__$1,cljs.core.constant$keyword$479);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$522,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$521,null], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__22622 = params__9285__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22622,0,null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$522,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$521,null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view",action__9284__auto___22627);
var action__9284__auto___22628 = (function (params__9285__auto__){if(cljs.core.map_QMARK_(params__9285__auto__))
{var map__22623 = params__9285__auto__;var map__22623__$1 = ((cljs.core.seq_QMARK_(map__22623))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22623):map__22623);var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22623__$1,cljs.core.constant$keyword$313);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22623__$1,cljs.core.constant$keyword$317);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22623__$1,cljs.core.constant$keyword$479);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$522,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$521,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_(params__9285__auto__))
{var vec__22624 = params__9285__auto__;var view = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22624,0,null);var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22624,1,null);var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22624,2,null);cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$522,view], null));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$521,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_("/:view/:type/:id",action__9284__auto___22628);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview(token);
return secretary.core.dispatch_BANG_(token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$366,comm,cljs.core.constant$keyword$365,path_fn,cljs.core.constant$keyword$383,link_fn], null);clustermap.nav.init(comm);
clustermap.app.init_routes(comm);
clustermap.app.load_uk_constituencies();
clustermap.components.map.mount(clustermap.app.state,"map-component",shared);
var c__5562__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_22675){var state_val_22676 = (state_22675[1]);if((state_val_22676 === 7))
{var inst_22664 = (state_22675[2]);var inst_22665 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22664,0,null);var inst_22666 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_22664,1,null);var inst_22667 = clustermap.app.handle_event(inst_22665,inst_22666);var state_22675__$1 = (function (){var statearr_22677 = state_22675;(statearr_22677[7] = inst_22667);
return statearr_22677;
})();var statearr_22678_22691 = state_22675__$1;(statearr_22678_22691[2] = null);
(statearr_22678_22691[1] = 2);
return cljs.core.constant$keyword$284;
} else
{if((state_val_22676 === 6))
{var inst_22671 = (state_22675[2]);var state_22675__$1 = state_22675;var statearr_22679_22692 = state_22675__$1;(statearr_22679_22692[2] = inst_22671);
(statearr_22679_22692[1] = 3);
return cljs.core.constant$keyword$284;
} else
{if((state_val_22676 === 5))
{var state_22675__$1 = state_22675;var statearr_22680_22693 = state_22675__$1;(statearr_22680_22693[2] = null);
(statearr_22680_22693[1] = 6);
return cljs.core.constant$keyword$284;
} else
{if((state_val_22676 === 4))
{var state_22675__$1 = state_22675;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22675__$1,7,comm);
} else
{if((state_val_22676 === 3))
{var inst_22673 = (state_22675[2]);var state_22675__$1 = state_22675;return cljs.core.async.impl.ioc_helpers.return_chan(state_22675__$1,inst_22673);
} else
{if((state_val_22676 === 2))
{var state_22675__$1 = state_22675;if(true)
{var statearr_22681_22694 = state_22675__$1;(statearr_22681_22694[1] = 4);
} else
{var statearr_22682_22695 = state_22675__$1;(statearr_22682_22695[1] = 5);
}
return cljs.core.constant$keyword$284;
} else
{if((state_val_22676 === 1))
{var state_22675__$1 = state_22675;var statearr_22683_22696 = state_22675__$1;(statearr_22683_22696[2] = null);
(statearr_22683_22696[1] = 2);
return cljs.core.constant$keyword$284;
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_22687 = [null,null,null,null,null,null,null,null];(statearr_22687[0] = state_machine__5548__auto__);
(statearr_22687[1] = 1);
return statearr_22687;
});
var state_machine__5548__auto____1 = (function (state_22675){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__(state_22675);if(cljs.core.keyword_identical_QMARK_(result__5550__auto__,cljs.core.constant$keyword$284))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e22688){if((e22688 instanceof Object))
{var ex__5551__auto__ = e22688;var statearr_22689_22697 = state_22675;(statearr_22689_22697[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_22675);
return cljs.core.constant$keyword$284;
} else
{if(cljs.core.constant$keyword$273)
{throw e22688;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__5549__auto__,cljs.core.constant$keyword$284))
{{
var G__22698 = state_22675;
state_22675 = G__22698;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_22675){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_22675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_22690 = (f__5563__auto__.cljs$core$IFn$_invoke$arity$0 ? f__5563__auto__.cljs$core$IFn$_invoke$arity$0() : f__5563__auto__.call(null));(statearr_22690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_22690;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__5564__auto__);
}));
return c__5562__auto__;
});

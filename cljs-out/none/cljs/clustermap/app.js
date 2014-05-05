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
clustermap.app.state = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"view","view",1017523735),new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847),new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365),new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312),new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",4566552504),new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",4247521796),new cljs.core.Keyword(null,"selector","selector",2205476689),new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685),new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162),new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",3542903600),new cljs.core.Keyword(null,"selection-investment-account-timelines","selection-investment-account-timelines",1845704779),new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217),new cljs.core.Keyword(null,"all-investment-stats","all-investment-stats",2486056771),new cljs.core.Keyword(null,"search-results","search-results",1025331267),new cljs.core.Keyword(null,"all-portfolio-company-site-stats","all-portfolio-company-site-stats",1130880684),new cljs.core.Keyword(null,"zoom","zoom",1017648965)],[new cljs.core.Keyword(null,"map","map",1014012110),null,null,null,null,null,null,null,null,null,null,null,null,null,cljs.core.PersistentArrayMap.EMPTY,null,null]));
/**
* create a new app-state based on the old state
* - state : the old state
* - path-values : a seq of [key-or-path value-or-fn] pairs
* - key-or-path : a single key or sequence of keys
* describing a path into the state
* - value-or-fn : a new value or a function to mutate
* the previous value
*/
clustermap.app.new_state = (function new_state(state,path_values){return cljs.core.reduce.call(null,(function (s,p__20356){var vec__20357 = p__20356;var key_or_path = cljs.core.nth.call(null,vec__20357,0,null);var value_or_fn = cljs.core.nth.call(null,vec__20357,1,null);var path = ((cljs.core.sequential_QMARK_.call(null,key_or_path))?key_or_path:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_or_path], null));return cljs.core.update_in.call(null,s,path,((cljs.core.fn_QMARK_.call(null,value_or_fn))?value_or_fn:(function (ov){return value_or_fn;
})));
}),state,path_values);
});
/**
* @param {...*} var_args
*/
clustermap.app.set_state = (function() { 
var set_state__delegate = function (p__20358){var map__20360 = p__20358;var map__20360__$1 = ((cljs.core.seq_QMARK_.call(null,map__20360))?cljs.core.apply.call(null,cljs.core.hash_map,map__20360):map__20360);var path_values = map__20360__$1;return cljs.core.swap_BANG_.call(null,clustermap.app.state,clustermap.app.new_state,path_values);
};
var set_state = function (var_args){
var p__20358 = null;if (arguments.length > 0) {
  p__20358 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return set_state__delegate.call(this,p__20358);};
set_state.cljs$lang$maxFixedArity = 0;
set_state.cljs$lang$applyTo = (function (arglist__20361){
var p__20358 = cljs.core.seq(arglist__20361);
return set_state__delegate(p__20358);
});
set_state.cljs$core$IFn$_invoke$arity$variadic = set_state__delegate;
return set_state;
})()
;
clustermap.app.load_uk_constituencies = (function load_uk_constituencies(){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_20383){var state_val_20384 = (state_20383[1]);if((state_val_20384 === 2))
{var inst_20379 = (state_20383[2]);var inst_20380 = clustermap.rtree.rtree_index.call(null,inst_20379);var inst_20381 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"uk-constituencies","uk-constituencies",2507232365),inst_20379,new cljs.core.Keyword(null,"uk-constituencies-rtree","uk-constituencies-rtree",3542903600),inst_20380);var state_20383__$1 = state_20383;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20383__$1,inst_20381);
} else
{if((state_val_20384 === 1))
{var inst_20377 = clustermap.api.boundaryline_collection_index.call(null,"world_countries",new cljs.core.Keyword(null,"raw","raw",1014016922),true);var state_20383__$1 = state_20383;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20383__$1,2,inst_20377);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_20388 = [null,null,null,null,null,null,null];(statearr_20388[0] = state_machine__5548__auto__);
(statearr_20388[1] = 1);
return statearr_20388;
});
var state_machine__5548__auto____1 = (function (state_20383){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_20383);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e20389){if((e20389 instanceof Object))
{var ex__5551__auto__ = e20389;var statearr_20390_20392 = state_20383;(statearr_20390_20392[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20383);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20389;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20393 = state_20383;
state_20383 = G__20393;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_20383){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_20383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_20391 = f__5563__auto__.call(null);(statearr_20391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_20391;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.load_all_investment_stats = (function load_all_investment_stats(){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_20413){var state_val_20414 = (state_20413[1]);if((state_val_20414 === 2))
{var inst_20410 = (state_20413[2]);var inst_20411 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investment-stats","all-investment-stats",2486056771),inst_20410);var state_20413__$1 = state_20413;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20413__$1,inst_20411);
} else
{if((state_val_20414 === 1))
{var inst_20408 = clustermap.api.investment_stats.call(null);var state_20413__$1 = state_20413;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20413__$1,2,inst_20408);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_20418 = [null,null,null,null,null,null,null];(statearr_20418[0] = state_machine__5548__auto__);
(statearr_20418[1] = 1);
return statearr_20418;
});
var state_machine__5548__auto____1 = (function (state_20413){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_20413);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e20419){if((e20419 instanceof Object))
{var ex__5551__auto__ = e20419;var statearr_20420_20422 = state_20413;(statearr_20420_20422[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20413);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20419;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20423 = state_20413;
state_20413 = G__20423;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_20413){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_20413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_20421 = f__5563__auto__.call(null);(statearr_20421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_20421;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
});
/**
* process a search
*/
clustermap.app.process_search_results = (function process_search_results(results){return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),cljs.core.js__GT_clj.call(null,results));
});
clustermap.app.process_selection = (function process_selection(p__20424,type){var vec__20426 = p__20424;var selection = cljs.core.nth.call(null,vec__20426,0,null);var selection_investment_stats = cljs.core.nth.call(null,vec__20426,1,null);var selection_investment_account_timelines = cljs.core.nth.call(null,vec__20426,2,null);var selection_investment_aggs = cljs.core.nth.call(null,vec__20426,3,null);var selection_investments = cljs.core.nth.call(null,vec__20426,4,null);var selection_portfolio_company_locations = cljs.core.nth.call(null,vec__20426,5,null);return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"value","value",1125876963),selection], null),new cljs.core.Keyword(null,"selection-investment-stats","selection-investment-stats",4568560312),selection_investment_stats,new cljs.core.Keyword(null,"selection-investment-account-timelines","selection-investment-account-timelines",1845704779),selection_investment_account_timelines,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685),selection_investment_aggs,new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217),selection_investments,new cljs.core.Keyword(null,"selection-portfolio-company-locations","selection-portfolio-company-locations",1821239162),selection_portfolio_company_locations);
});
/**
* set the selection
* - extractor selector id
* - record selector
* - kick-off selection retrievals
*/
clustermap.app.make_selection = (function make_selection(p__20427){var vec__20432 = p__20427;var type = cljs.core.nth.call(null,vec__20432,0,null);var id = cljs.core.nth.call(null,vec__20432,1,null);var selector = (cljs.core.truth_(type)?new cljs.core.PersistentArrayMap.fromArray([type,id], true, false):cljs.core.PersistentArrayMap.EMPTY);var old_selector = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clustermap.app.state));if(cljs.core.not_EQ_.call(null,selector,old_selector))
{clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selector","selector",2205476689),selector);
var pred__20433 = cljs.core._EQ_;var expr__20434 = type;if(cljs.core.truth_(pred__20433.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__20434)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.portfolio_company.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__20433.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__20434)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.investor_company.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{if(cljs.core.truth_(pred__20433.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__20434)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [clustermap.api.constituency.call(null,id),clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),clustermap.api.portfolio_company_locations.call(null,selector)], null),type], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,clustermap.api.investment_stats.call(null,selector),clustermap.api.investment_account_timelines.call(null,selector),clustermap.api.investment_aggs.call(null,selector),clustermap.api.investments.call(null,selector),null], null),type], null);
}
}
}
} else
{return null;
}
});
clustermap.app.change_view = (function change_view(view){var view__$1 = cljs.core.keyword.call(null,view);if(cljs.core.not_EQ_.call(null,view__$1,new cljs.core.Keyword(null,"view","view",1017523735).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,clustermap.app.state))))
{clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"view","view",1017523735),view__$1);
return clustermap.nav.change_view.call(null,cljs.core.name.call(null,view__$1));
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
{return clustermap.app.history.setToken([cljs.core.str("/"),cljs.core.str(cljs.core.name.call(null,(function (){var or__3441__auto__ = view;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "map";
}
})())),cljs.core.str("/"),cljs.core.str(cljs.core.name.call(null,type)),cljs.core.str("/"),cljs.core.str(cljs.core.name.call(null,id))].join(''));
} else
{if(cljs.core.truth_(view))
{return clustermap.app.history.setToken([cljs.core.str("/"),cljs.core.str(cljs.core.name.call(null,view))].join(''));
} else
{if(true)
{return clustermap.app.history.setToken([cljs.core.str("")].join(''));
} else
{return null;
}
}
}
});
clustermap.app.parse_route = (function parse_route(){var fragment = clustermap.app.history.getToken();var vec__20437 = cljs.core.re_matches.call(null,/\/([^\/]+)(?:\/([^\/]+)\/(.+))?$/,fragment);var _ = cljs.core.nth.call(null,vec__20437,0,null);var view = cljs.core.nth.call(null,vec__20437,1,null);var type = cljs.core.nth.call(null,vec__20437,2,null);var id = cljs.core.nth.call(null,vec__20437,3,null);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"view","view",1017523735),view,new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"id","id",1013907597),id], null);
});
clustermap.app.set_selection_route = (function set_selection_route(p__20438){var vec__20441 = p__20438;var type = cljs.core.nth.call(null,vec__20441,0,null);var id = cljs.core.nth.call(null,vec__20441,1,null);var map__20442 = clustermap.app.parse_route.call(null);var map__20442__$1 = ((cljs.core.seq_QMARK_.call(null,map__20442))?cljs.core.apply.call(null,cljs.core.hash_map,map__20442):map__20442);var view = cljs.core.get.call(null,map__20442__$1,new cljs.core.Keyword(null,"view","view",1017523735));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.set_view_route = (function set_view_route(view){var map__20444 = clustermap.app.parse_route.call(null);var map__20444__$1 = ((cljs.core.seq_QMARK_.call(null,map__20444))?cljs.core.apply.call(null,cljs.core.hash_map,map__20444):map__20444);var id = cljs.core.get.call(null,map__20444__$1,new cljs.core.Keyword(null,"id","id",1013907597));var type = cljs.core.get.call(null,map__20444__$1,new cljs.core.Keyword(null,"type","type",1017479852));return clustermap.app.set_route.call(null,view,type,id);
});
clustermap.app.update_selection_investment_aggs_table_view = (function update_selection_investment_aggs_table_view(table_view){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_20477){var state_val_20478 = (state_20477[1]);if((state_val_20478 === 2))
{var inst_20468 = (state_20477[7]);var inst_20474 = (state_20477[2]);var inst_20475 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",4566552504),inst_20468,new cljs.core.Keyword(null,"selection-investment-aggs","selection-investment-aggs",989474685),inst_20474);var state_20477__$1 = state_20477;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20477__$1,inst_20475);
} else
{if((state_val_20478 === 1))
{var inst_20468 = (state_20477[7]);var inst_20466 = cljs.core.deref.call(null,clustermap.app.state);var inst_20467 = new cljs.core.Keyword(null,"selection-investment-aggs-table-view","selection-investment-aggs-table-view",4566552504).cljs$core$IFn$_invoke$arity$1(inst_20466);var inst_20468__$1 = cljs.core.merge.call(null,inst_20467,table_view);var inst_20469 = cljs.core.deref.call(null,clustermap.app.state);var inst_20470 = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(inst_20469);var inst_20471 = cljs.core.merge.call(null,inst_20470,inst_20468__$1);var inst_20472 = clustermap.api.investment_aggs.call(null,inst_20471);var state_20477__$1 = (function (){var statearr_20479 = state_20477;(statearr_20479[7] = inst_20468__$1);
return statearr_20479;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20477__$1,2,inst_20472);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_20483 = [null,null,null,null,null,null,null,null];(statearr_20483[0] = state_machine__5548__auto__);
(statearr_20483[1] = 1);
return statearr_20483;
});
var state_machine__5548__auto____1 = (function (state_20477){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_20477);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e20484){if((e20484 instanceof Object))
{var ex__5551__auto__ = e20484;var statearr_20485_20487 = state_20477;(statearr_20485_20487[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20477);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20484;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20488 = state_20477;
state_20477 = G__20488;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_20477){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_20477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_20486 = f__5563__auto__.call(null);(statearr_20486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_20486;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.update_selection_investments_table_view = (function update_selection_investments_table_view(table_view){var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_20521){var state_val_20522 = (state_20521[1]);if((state_val_20522 === 2))
{var inst_20512 = (state_20521[7]);var inst_20518 = (state_20521[2]);var inst_20519 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",4247521796),inst_20512,new cljs.core.Keyword(null,"selection-investments","selection-investments",2385751217),inst_20518);var state_20521__$1 = state_20521;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20521__$1,inst_20519);
} else
{if((state_val_20522 === 1))
{var inst_20512 = (state_20521[7]);var inst_20510 = cljs.core.deref.call(null,clustermap.app.state);var inst_20511 = new cljs.core.Keyword(null,"selection-investments-table-view","selection-investments-table-view",4247521796).cljs$core$IFn$_invoke$arity$1(inst_20510);var inst_20512__$1 = cljs.core.merge.call(null,inst_20511,table_view);var inst_20513 = cljs.core.deref.call(null,clustermap.app.state);var inst_20514 = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(inst_20513);var inst_20515 = cljs.core.merge.call(null,inst_20514,inst_20512__$1);var inst_20516 = clustermap.api.investments.call(null,inst_20515);var state_20521__$1 = (function (){var statearr_20523 = state_20521;(statearr_20523[7] = inst_20512__$1);
return statearr_20523;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20521__$1,2,inst_20516);
} else
{return null;
}
}
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_20527 = [null,null,null,null,null,null,null,null];(statearr_20527[0] = state_machine__5548__auto__);
(statearr_20527[1] = 1);
return statearr_20527;
});
var state_machine__5548__auto____1 = (function (state_20521){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_20521);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e20528){if((e20528 instanceof Object))
{var ex__5551__auto__ = e20528;var statearr_20529_20531 = state_20521;(statearr_20529_20531[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20521);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20528;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20532 = state_20521;
state_20521 = G__20532;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_20521){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_20521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_20530 = f__5563__auto__.call(null);(statearr_20530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_20530;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
});
clustermap.app.event_handlers = cljs.core.PersistentArrayMap.EMPTY;
clustermap.app.handle_event = (function handle_event(type,val){var handler = cljs.core.get.call(null,clustermap.app.event_handlers,type);if(cljs.core.truth_(handler))
{return handler.call(null,val);
} else
{return null;
}
});
clustermap.app.init_routes = (function init_routes(comm){var action__9284__auto___20549 = (function (params__9285__auto__){if(cljs.core.map_QMARK_.call(null,params__9285__auto__))
{var map__20541 = params__9285__auto__;var map__20541__$1 = ((cljs.core.seq_QMARK_.call(null,map__20541))?cljs.core.apply.call(null,cljs.core.hash_map,map__20541):map__20541);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9285__auto__))
{var vec__20542 = params__9285__auto__;return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"",action__9284__auto___20549);
var action__9284__auto___20550 = (function (params__9285__auto__){if(cljs.core.map_QMARK_.call(null,params__9285__auto__))
{var map__20543 = params__9285__auto__;var map__20543__$1 = ((cljs.core.seq_QMARK_.call(null,map__20543))?cljs.core.apply.call(null,cljs.core.hash_map,map__20543):map__20543);return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9285__auto__))
{var vec__20544 = params__9285__auto__;return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__9284__auto___20550);
var action__9284__auto___20551 = (function (params__9285__auto__){if(cljs.core.map_QMARK_.call(null,params__9285__auto__))
{var map__20545 = params__9285__auto__;var map__20545__$1 = ((cljs.core.seq_QMARK_.call(null,map__20545))?cljs.core.apply.call(null,cljs.core.hash_map,map__20545):map__20545);var view = cljs.core.get.call(null,map__20545__$1,new cljs.core.Keyword(null,"view","view",1017523735));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9285__auto__))
{var vec__20546 = params__9285__auto__;var view = cljs.core.nth.call(null,vec__20546,0,null);cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),null], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view",action__9284__auto___20551);
var action__9284__auto___20552 = (function (params__9285__auto__){if(cljs.core.map_QMARK_.call(null,params__9285__auto__))
{var map__20547 = params__9285__auto__;var map__20547__$1 = ((cljs.core.seq_QMARK_.call(null,map__20547))?cljs.core.apply.call(null,cljs.core.hash_map,map__20547):map__20547);var id = cljs.core.get.call(null,map__20547__$1,new cljs.core.Keyword(null,"id","id",1013907597));var type = cljs.core.get.call(null,map__20547__$1,new cljs.core.Keyword(null,"type","type",1017479852));var view = cljs.core.get.call(null,map__20547__$1,new cljs.core.Keyword(null,"view","view",1017523735));cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),id], null)], null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9285__auto__))
{var vec__20548 = params__9285__auto__;var view = cljs.core.nth.call(null,vec__20548,0,null);var type = cljs.core.nth.call(null,vec__20548,1,null);var id = cljs.core.nth.call(null,vec__20548,2,null);cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-change-view","route-change-view",1856546960),view], null));
return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-select","route-select",529886322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,type),id], null)], null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/:view/:type/:id",action__9284__auto___20552);
goog.events.listen(clustermap.app.history,goog.history.EventType.NAVIGATE,(function (e){var token = e.token;clustermap.ganalytics.send_pageview.call(null,token);
return secretary.core.dispatch_BANG_.call(null,token);
}));
return clustermap.app.history.setEnabled(true);
});
clustermap.app.init = (function init(){var comm = cljs.core.async.chan.call(null);var path_fn = clustermap.routes.path_for;var link_fn = clustermap.routes.link_for;var shared = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),path_fn,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301),link_fn], null);clustermap.nav.init.call(null,comm);
clustermap.app.init_routes.call(null,comm);
clustermap.app.load_uk_constituencies.call(null);
clustermap.components.map.mount.call(null,clustermap.app.state,"map-component",shared);
var c__5562__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_20599){var state_val_20600 = (state_20599[1]);if((state_val_20600 === 7))
{var inst_20588 = (state_20599[2]);var inst_20589 = cljs.core.nth.call(null,inst_20588,0,null);var inst_20590 = cljs.core.nth.call(null,inst_20588,1,null);var inst_20591 = clustermap.app.handle_event.call(null,inst_20589,inst_20590);var state_20599__$1 = (function (){var statearr_20601 = state_20599;(statearr_20601[7] = inst_20591);
return statearr_20601;
})();var statearr_20602_20615 = state_20599__$1;(statearr_20602_20615[2] = null);
(statearr_20602_20615[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20600 === 6))
{var inst_20595 = (state_20599[2]);var state_20599__$1 = state_20599;var statearr_20603_20616 = state_20599__$1;(statearr_20603_20616[2] = inst_20595);
(statearr_20603_20616[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20600 === 5))
{var state_20599__$1 = state_20599;var statearr_20604_20617 = state_20599__$1;(statearr_20604_20617[2] = null);
(statearr_20604_20617[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20600 === 4))
{var state_20599__$1 = state_20599;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20599__$1,7,comm);
} else
{if((state_val_20600 === 3))
{var inst_20597 = (state_20599[2]);var state_20599__$1 = state_20599;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20599__$1,inst_20597);
} else
{if((state_val_20600 === 2))
{var state_20599__$1 = state_20599;if(true)
{var statearr_20605_20618 = state_20599__$1;(statearr_20605_20618[1] = 4);
} else
{var statearr_20606_20619 = state_20599__$1;(statearr_20606_20619[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20600 === 1))
{var state_20599__$1 = state_20599;var statearr_20607_20620 = state_20599__$1;(statearr_20607_20620[2] = null);
(statearr_20607_20620[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
var state_machine__5548__auto____0 = (function (){var statearr_20611 = [null,null,null,null,null,null,null,null];(statearr_20611[0] = state_machine__5548__auto__);
(statearr_20611[1] = 1);
return statearr_20611;
});
var state_machine__5548__auto____1 = (function (state_20599){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_20599);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e20612){if((e20612 instanceof Object))
{var ex__5551__auto__ = e20612;var statearr_20613_20621 = state_20599;(statearr_20613_20621[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20599);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20612;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20622 = state_20599;
state_20599 = G__20622;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_20599){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_20599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_20614 = f__5563__auto__.call(null);(statearr_20614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto__);
return statearr_20614;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return c__5562__auto__;
});

//# sourceMappingURL=app.js.map
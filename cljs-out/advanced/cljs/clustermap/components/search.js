// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.search');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('clustermap.routes');
goog.require('sablono.core');
goog.require('clustermap.routes');
goog.require('sablono.core');
goog.require('clustermap.om');
goog.require('clustermap.model');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.model');
goog.require('om.core');
goog.require('jayq.core');
goog.require('om.dom');
goog.require('clustermap.om');
goog.require('cljs.core.async');
goog.require('jayq.core');
clustermap.components.search.ESCAPE_KEY = 27;
clustermap.components.search.ENTER_KEY = 13;
clustermap.components.search.LEFT_ARROW = 37;
clustermap.components.search.UP_ARROW = 38;
clustermap.components.search.RIGHT_ARROW = 39;
clustermap.components.search.DOWN_ARROW = 40;
clustermap.components.search.search_result_link = (function search_result_link(p__23530,owner,p__23531){var map__23540 = p__23530;var map__23540__$1 = ((cljs.core.seq_QMARK_(map__23540))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23540):map__23540);var search_result = map__23540__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23540__$1,cljs.core.constant$keyword$317);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23540__$1,cljs.core.constant$keyword$327);var map__23541 = p__23531;var map__23541__$1 = ((cljs.core.seq_QMARK_(map__23541))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23541):map__23541);var opts = map__23541__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23541__$1,cljs.core.constant$keyword$365);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23541__$1,cljs.core.constant$keyword$366);if(typeof clustermap.components.search.t23542 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t23542 = (function (p__23530,opts,p__23531,path_fn,name,comm,search_result,owner,map__23540,map__23541,type,search_result_link,meta23543){
this.p__23530 = p__23530;
this.opts = opts;
this.p__23531 = p__23531;
this.path_fn = path_fn;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.owner = owner;
this.map__23540 = map__23540;
this.map__23541 = map__23541;
this.type = type;
this.search_result_link = search_result_link;
this.meta23543 = meta23543;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t23542.cljs$lang$type = true;
clustermap.components.search.t23542.cljs$lang$ctorStr = "clustermap.components.search/t23542";
clustermap.components.search.t23542.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.search/t23542");
});
clustermap.components.search.t23542.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t23542.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__23545){var self__ = this;
var map__23546 = p__23545;var map__23546__$1 = ((cljs.core.seq_QMARK_(map__23546))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23546):map__23546);var state = map__23546__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23546__$1,cljs.core.constant$keyword$332);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__23547 = l;var G__23547__$1 = (((G__23547 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__23547));var G__23547__$2 = (((G__23547__$1 == null))?null:G__23547__$1.parents(".search-component"));var G__23547__$3 = (((G__23547__$2 == null))?null:G__23547__$2.toggle());return G__23547__$3;
})},sablono.interpreter.interpret(self__.name)));
});
clustermap.components.search.t23542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23544){var self__ = this;
var _23544__$1 = this;return self__.meta23543;
});
clustermap.components.search.t23542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23544,meta23543__$1){var self__ = this;
var _23544__$1 = this;return (new clustermap.components.search.t23542(self__.p__23530,self__.opts,self__.p__23531,self__.path_fn,self__.name,self__.comm,self__.search_result,self__.owner,self__.map__23540,self__.map__23541,self__.type,self__.search_result_link,meta23543__$1));
});
clustermap.components.search.__GT_t23542 = (function __GT_t23542(p__23530__$1,opts__$1,p__23531__$1,path_fn__$1,name__$1,comm__$1,search_result__$1,owner__$1,map__23540__$2,map__23541__$2,type__$1,search_result_link__$1,meta23543){return (new clustermap.components.search.t23542(p__23530__$1,opts__$1,p__23531__$1,path_fn__$1,name__$1,comm__$1,search_result__$1,owner__$1,map__23540__$2,map__23541__$2,type__$1,search_result_link__$1,meta23543));
});
}
return (new clustermap.components.search.t23542(p__23530,opts,p__23531,path_fn,name,comm,search_result,owner,map__23540__$1,map__23541__$1,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__23548,n){var map__23550 = p__23548;var map__23550__$1 = ((cljs.core.seq_QMARK_(map__23550))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23550):map__23550);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23550__$1,cljs.core.constant$keyword$418);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23550__$1,cljs.core.constant$keyword$477);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23550__$1,cljs.core.constant$keyword$408);var cons = (function (){var or__3441__auto__ = constituencies;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var pcs = (function (){var or__3441__auto__ = portfolio_companies;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var invs = (function (){var or__3441__auto__ = investor_companies;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();if((n < cljs.core.count(cons)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$364,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$362,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$363,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__23557 = cljs.core._EQ__EQ_;var expr__23558 = e.keyCode;if(cljs.core.truth_((pred__23557.cljs$core$IFn$_invoke$arity$2 ? pred__23557.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__23558) : pred__23557.call(null,clustermap.components.search.ESCAPE_KEY,expr__23558))))
{var G__23560 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__23560__$1 = (((G__23560 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__23560));var G__23560__$2 = (((G__23560__$1 == null))?null:G__23560__$1.toggle());return G__23560__$2;
} else
{if(cljs.core.truth_((pred__23557.cljs$core$IFn$_invoke$arity$2 ? pred__23557.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__23558) : pred__23557.call(null,clustermap.components.search.ENTER_KEY,expr__23558))))
{var vec__23561 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3441__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$478);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23561,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23561,1,null);var G__23562_23563 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__23562_23564__$1 = (((G__23562_23563 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__23562_23563));var G__23562_23565__$2 = (((G__23562_23564__$1 == null))?null:G__23562_23564__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$333,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__23557.cljs$core$IFn$_invoke$arity$2 ? pred__23557.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__23558) : pred__23557.call(null,clustermap.components.search.UP_ARROW,expr__23558))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$478,((function (){var or__3441__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$478);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__23557.cljs$core$IFn$_invoke$arity$2 ? pred__23557.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__23558) : pred__23557.call(null,clustermap.components.search.DOWN_ARROW,expr__23558))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$478,((function (){var or__3441__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$478);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})() + 1));
} else
{return null;
}
}
}
}
});
clustermap.components.search.search_component = (function search_component(p__23566,owner){var map__23598 = p__23566;var map__23598__$1 = ((cljs.core.seq_QMARK_(map__23598))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23598):map__23598);var map__23599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23598__$1,cljs.core.constant$keyword$373);var map__23599__$1 = ((cljs.core.seq_QMARK_(map__23599))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23599):map__23599);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23599__$1,cljs.core.constant$keyword$317);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23599__$1,cljs.core.constant$keyword$278);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23598__$1,cljs.core.constant$keyword$479);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23598__$1,cljs.core.constant$keyword$480);var map__23600 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__23600__$1 = ((cljs.core.seq_QMARK_(map__23600))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23600):map__23600);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23600__$1,cljs.core.constant$keyword$365);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23600__$1,cljs.core.constant$keyword$366);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,view);var map__23601 = search_results;var map__23601__$1 = ((cljs.core.seq_QMARK_(map__23601))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23601):map__23601);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23601__$1,cljs.core.constant$keyword$418);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23601__$1,cljs.core.constant$keyword$477);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23601__$1,cljs.core.constant$keyword$408);if(typeof clustermap.components.search.t23602 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t23602 = (function (map__23598,investor_companies,selection_value,path_fn,map__23601,map__23600,portfolio_companies,view,search_component,map__23599,comm,selection_type,owner,constituencies,search_results,p__23566,meta23603){
this.map__23598 = map__23598;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.map__23601 = map__23601;
this.map__23600 = map__23600;
this.portfolio_companies = portfolio_companies;
this.view = view;
this.search_component = search_component;
this.map__23599 = map__23599;
this.comm = comm;
this.selection_type = selection_type;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.p__23566 = p__23566;
this.meta23603 = meta23603;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t23602.cljs$lang$type = true;
clustermap.components.search.t23602.cljs$lang$ctorStr = "clustermap.components.search/t23602";
clustermap.components.search.t23602.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.search/t23602");
});
clustermap.components.search.t23602.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t23602.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
})},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$481,e.target.value], null));
})}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$481,e.target.value], null));
})}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$481,""], null));
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"search-field").value = "";
})},"\u00D7"))),sablono.interpreter.interpret((cljs.core.truth_((function (){var or__3441__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3441__auto____$1))
{return or__3441__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3441__auto__ = cljs.core.constant$keyword$478.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$478.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$478,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$482,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$307,"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$321,(cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$482,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$322,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$307,"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4158__auto__ = (function iter__23605(s__23606){return (new cljs.core.LazySeq(null,(function (){var s__23606__$1 = s__23606;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23606__$1);if(temp__4092__auto__)
{var s__23606__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23606__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__23606__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__23608 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__23607 = 0;while(true){
if((i__23607 < size__4157__auto__))
{var vec__23611 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__23607);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23611,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23611,1,null);cljs.core.chunk_append(b__23608,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$353,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$366,self__.comm,cljs.core.constant$keyword$365,self__.path_fn], null),cljs.core.constant$keyword$347,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$332,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$354,((function (i__23607,vec__23611,idx,con,c__4156__auto__,size__4157__auto__,b__23608,s__23606__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$317,cljs.core.constant$keyword$364,cljs.core.array_seq([cljs.core.constant$keyword$313,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$388),cljs.core.constant$keyword$483,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$388))].join('')], 0));
});})(i__23607,vec__23611,idx,con,c__4156__auto__,size__4157__auto__,b__23608,s__23606__$2,temp__4092__auto__))
,cljs.core.constant$keyword$350,cljs.core.constant$keyword$483], null)));
{
var G__23629 = (i__23607 + 1);
i__23607 = G__23629;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23608),iter__23605(cljs.core.chunk_rest(s__23606__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23608),null);
}
} else
{var vec__23612 = cljs.core.first(s__23606__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23612,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23612,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$353,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$366,self__.comm,cljs.core.constant$keyword$365,self__.path_fn], null),cljs.core.constant$keyword$347,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$332,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$354,((function (vec__23612,idx,con,s__23606__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$317,cljs.core.constant$keyword$364,cljs.core.array_seq([cljs.core.constant$keyword$313,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$388),cljs.core.constant$keyword$483,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$388))].join('')], 0));
});})(vec__23612,idx,con,s__23606__$2,temp__4092__auto__))
,cljs.core.constant$keyword$350,cljs.core.constant$keyword$483], null)),iter__23605(cljs.core.rest(s__23606__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$482,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$322,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$307,"search-results-header"], null),"Investor-backed companies"], null)], null),(function (){var iter__4158__auto__ = (function iter__23613(s__23614){return (new cljs.core.LazySeq(null,(function (){var s__23614__$1 = s__23614;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23614__$1);if(temp__4092__auto__)
{var s__23614__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23614__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__23614__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__23616 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__23615 = 0;while(true){
if((i__23615 < size__4157__auto__))
{var vec__23619 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__23615);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23619,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23619,1,null);cljs.core.chunk_append(b__23616,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$353,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$366,self__.comm,cljs.core.constant$keyword$365,self__.path_fn], null),cljs.core.constant$keyword$347,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$332,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$354,((function (i__23615,vec__23619,idx,pc,c__4156__auto__,size__4157__auto__,b__23616,s__23614__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$317,cljs.core.constant$keyword$362,cljs.core.array_seq([cljs.core.constant$keyword$313,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$425),cljs.core.constant$keyword$483,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$425))].join('')], 0));
});})(i__23615,vec__23619,idx,pc,c__4156__auto__,size__4157__auto__,b__23616,s__23614__$2,temp__4092__auto__))
,cljs.core.constant$keyword$350,cljs.core.constant$keyword$483], null)));
{
var G__23630 = (i__23615 + 1);
i__23615 = G__23630;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23616),iter__23613(cljs.core.chunk_rest(s__23614__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23616),null);
}
} else
{var vec__23620 = cljs.core.first(s__23614__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23620,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23620,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$353,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$366,self__.comm,cljs.core.constant$keyword$365,self__.path_fn], null),cljs.core.constant$keyword$347,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$332,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$354,((function (vec__23620,idx,pc,s__23614__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$317,cljs.core.constant$keyword$362,cljs.core.array_seq([cljs.core.constant$keyword$313,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$425),cljs.core.constant$keyword$483,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$425))].join('')], 0));
});})(vec__23620,idx,pc,s__23614__$2,temp__4092__auto__))
,cljs.core.constant$keyword$350,cljs.core.constant$keyword$483], null)),iter__23613(cljs.core.rest(s__23614__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$482,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$322,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$307,"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4158__auto__ = (function iter__23621(s__23622){return (new cljs.core.LazySeq(null,(function (){var s__23622__$1 = s__23622;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23622__$1);if(temp__4092__auto__)
{var s__23622__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23622__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__23622__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__23624 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__23623 = 0;while(true){
if((i__23623 < size__4157__auto__))
{var vec__23627 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__23623);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23627,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23627,1,null);cljs.core.chunk_append(b__23624,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$353,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$366,self__.comm,cljs.core.constant$keyword$365,self__.path_fn], null),cljs.core.constant$keyword$347,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$332,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$354,((function (i__23623,vec__23627,idx,inv,c__4156__auto__,size__4157__auto__,b__23624,s__23622__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$317,cljs.core.constant$keyword$363,cljs.core.array_seq([cljs.core.constant$keyword$313,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$386),cljs.core.constant$keyword$483,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$386))].join('')], 0));
});})(i__23623,vec__23627,idx,inv,c__4156__auto__,size__4157__auto__,b__23624,s__23622__$2,temp__4092__auto__))
,cljs.core.constant$keyword$350,cljs.core.constant$keyword$483], null)));
{
var G__23631 = (i__23623 + 1);
i__23623 = G__23631;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23624),iter__23621(cljs.core.chunk_rest(s__23622__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23624),null);
}
} else
{var vec__23628 = cljs.core.first(s__23622__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23628,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23628,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$353,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$366,self__.comm,cljs.core.constant$keyword$365,self__.path_fn], null),cljs.core.constant$keyword$347,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$332,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$354,((function (vec__23628,idx,inv,s__23622__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$317,cljs.core.constant$keyword$363,cljs.core.array_seq([cljs.core.constant$keyword$313,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$386),cljs.core.constant$keyword$483,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$386))].join('')], 0));
});})(vec__23628,idx,inv,s__23622__$2,temp__4092__auto__))
,cljs.core.constant$keyword$350,cljs.core.constant$keyword$483], null)),iter__23621(cljs.core.rest(s__23622__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(idx_invs);
})()):null)], null)], null);
})():null)));
});
clustermap.components.search.t23602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23604){var self__ = this;
var _23604__$1 = this;return self__.meta23603;
});
clustermap.components.search.t23602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23604,meta23603__$1){var self__ = this;
var _23604__$1 = this;return (new clustermap.components.search.t23602(self__.map__23598,self__.investor_companies,self__.selection_value,self__.path_fn,self__.map__23601,self__.map__23600,self__.portfolio_companies,self__.view,self__.search_component,self__.map__23599,self__.comm,self__.selection_type,self__.owner,self__.constituencies,self__.search_results,self__.p__23566,meta23603__$1));
});
clustermap.components.search.__GT_t23602 = (function __GT_t23602(map__23598__$2,investor_companies__$1,selection_value__$1,path_fn__$2,map__23601__$2,map__23600__$2,portfolio_companies__$1,view__$1,search_component__$1,map__23599__$2,comm__$1,selection_type__$1,owner__$1,constituencies__$1,search_results__$1,p__23566__$1,meta23603){return (new clustermap.components.search.t23602(map__23598__$2,investor_companies__$1,selection_value__$1,path_fn__$2,map__23601__$2,map__23600__$2,portfolio_companies__$1,view__$1,search_component__$1,map__23599__$2,comm__$1,selection_type__$1,owner__$1,constituencies__$1,search_results__$1,p__23566__$1,meta23603));
});
}
return (new clustermap.components.search.t23602(map__23598__$1,investor_companies,selection_value,path_fn__$1,map__23601__$1,map__23600__$1,portfolio_companies,view,search_component,map__23599__$1,comm,selection_type,owner,constituencies,search_results,p__23566,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$352,shared,cljs.core.constant$keyword$357,document.getElementById(elem_id)], null));
});

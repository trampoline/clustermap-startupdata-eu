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
clustermap.components.search.search_result_link = (function search_result_link(p__45348,owner,p__45349){var map__45358 = p__45348;var map__45358__$1 = ((cljs.core.seq_QMARK_.call(null,map__45358))?cljs.core.apply.call(null,cljs.core.hash_map,map__45358):map__45358);var search_result = map__45358__$1;var type = cljs.core.get.call(null,map__45358__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__45358__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__45359 = p__45349;var map__45359__$1 = ((cljs.core.seq_QMARK_.call(null,map__45359))?cljs.core.apply.call(null,cljs.core.hash_map,map__45359):map__45359);var opts = map__45359__$1;var path_fn = cljs.core.get.call(null,map__45359__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__45359__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t45360 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t45360 = (function (opts,path_fn,name,comm,search_result,owner,p__45348,p__45349,map__45359,type,map__45358,search_result_link,meta45361){
this.opts = opts;
this.path_fn = path_fn;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.owner = owner;
this.p__45348 = p__45348;
this.p__45349 = p__45349;
this.map__45359 = map__45359;
this.type = type;
this.map__45358 = map__45358;
this.search_result_link = search_result_link;
this.meta45361 = meta45361;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t45360.cljs$lang$type = true;
clustermap.components.search.t45360.cljs$lang$ctorStr = "clustermap.components.search/t45360";
clustermap.components.search.t45360.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.search/t45360");
});
clustermap.components.search.t45360.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t45360.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__45363){var self__ = this;
var map__45364 = p__45363;var map__45364__$1 = ((cljs.core.seq_QMARK_.call(null,map__45364))?cljs.core.apply.call(null,cljs.core.hash_map,map__45364):map__45364);var state = map__45364__$1;var selected = cljs.core.get.call(null,map__45364__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__45365 = l;var G__45365__$1 = (((G__45365 == null))?null:jayq.core.$.call(null,G__45365));var G__45365__$2 = (((G__45365__$1 == null))?null:G__45365__$1.parents(".search-component"));var G__45365__$3 = (((G__45365__$2 == null))?null:G__45365__$2.toggle());return G__45365__$3;
})},sablono.interpreter.interpret.call(null,self__.name)));
});
clustermap.components.search.t45360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45362){var self__ = this;
var _45362__$1 = this;return self__.meta45361;
});
clustermap.components.search.t45360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45362,meta45361__$1){var self__ = this;
var _45362__$1 = this;return (new clustermap.components.search.t45360(self__.opts,self__.path_fn,self__.name,self__.comm,self__.search_result,self__.owner,self__.p__45348,self__.p__45349,self__.map__45359,self__.type,self__.map__45358,self__.search_result_link,meta45361__$1));
});
clustermap.components.search.__GT_t45360 = (function __GT_t45360(opts__$1,path_fn__$1,name__$1,comm__$1,search_result__$1,owner__$1,p__45348__$1,p__45349__$1,map__45359__$2,type__$1,map__45358__$2,search_result_link__$1,meta45361){return (new clustermap.components.search.t45360(opts__$1,path_fn__$1,name__$1,comm__$1,search_result__$1,owner__$1,p__45348__$1,p__45349__$1,map__45359__$2,type__$1,map__45358__$2,search_result_link__$1,meta45361));
});
}
return (new clustermap.components.search.t45360(opts,path_fn,name,comm,search_result,owner,p__45348,p__45349,map__45359__$1,type,map__45358__$1,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__45366,n){var map__45368 = p__45366;var map__45368__$1 = ((cljs.core.seq_QMARK_.call(null,map__45368))?cljs.core.apply.call(null,cljs.core.hash_map,map__45368):map__45368);var investor_companies = cljs.core.get.call(null,map__45368__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__45368__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__45368__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3441__auto__ = constituencies;if(cljs.core.truth_(or__3441__auto__))
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
})();if((n < cljs.core.count.call(null,cons)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",3902864696),cljs.core.get.call(null,constituencies,n)], null);
} else
{if((n < (cljs.core.count.call(null,cons) + cljs.core.count.call(null,pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),cljs.core.get.call(null,pcs,(n - cljs.core.count.call(null,cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),cljs.core.get.call(null,invs,((n - cljs.core.count.call(null,cons)) - cljs.core.count.call(null,pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__45375 = cljs.core._EQ__EQ_;var expr__45376 = e.keyCode;if(cljs.core.truth_(pred__45375.call(null,clustermap.components.search.ESCAPE_KEY,expr__45376)))
{var G__45378 = om.core.get_node.call(null,owner,"search-component");var G__45378__$1 = (((G__45378 == null))?null:jayq.core.$.call(null,G__45378));var G__45378__$2 = (((G__45378__$1 == null))?null:G__45378__$1.toggle());return G__45378__$2;
} else
{if(cljs.core.truth_(pred__45375.call(null,clustermap.components.search.ENTER_KEY,expr__45376)))
{var vec__45379 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3441__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__45379,0,null);var res = cljs.core.nth.call(null,vec__45379,1,null);var G__45380_45381 = om.core.get_node.call(null,owner,"search-component");var G__45380_45382__$1 = (((G__45380_45381 == null))?null:jayq.core.$.call(null,G__45380_45381));var G__45380_45383__$2 = (((G__45380_45382__$1 == null))?null:G__45380_45382__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__45375.call(null,clustermap.components.search.UP_ARROW,expr__45376)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3441__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__45375.call(null,clustermap.components.search.DOWN_ARROW,expr__45376)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3441__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3441__auto__))
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
clustermap.components.search.search_component = (function search_component(p__45384,owner){var map__45416 = p__45384;var map__45416__$1 = ((cljs.core.seq_QMARK_.call(null,map__45416))?cljs.core.apply.call(null,cljs.core.hash_map,map__45416):map__45416);var map__45417 = cljs.core.get.call(null,map__45416__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__45417__$1 = ((cljs.core.seq_QMARK_.call(null,map__45417))?cljs.core.apply.call(null,cljs.core.hash_map,map__45417):map__45417);var selection_type = cljs.core.get.call(null,map__45417__$1,new cljs.core.Keyword(null,"type","type",1017479852));var selection_value = cljs.core.get.call(null,map__45417__$1,new cljs.core.Keyword(null,"value","value",1125876963));var view = cljs.core.get.call(null,map__45416__$1,new cljs.core.Keyword(null,"view","view",1017523735));var search_results = cljs.core.get.call(null,map__45416__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__45418 = om.core.get_shared.call(null,owner);var map__45418__$1 = ((cljs.core.seq_QMARK_.call(null,map__45418))?cljs.core.apply.call(null,cljs.core.hash_map,map__45418):map__45418);var path_fn = cljs.core.get.call(null,map__45418__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__45418__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__45419 = search_results;var map__45419__$1 = ((cljs.core.seq_QMARK_.call(null,map__45419))?cljs.core.apply.call(null,cljs.core.hash_map,map__45419):map__45419);var investor_companies = cljs.core.get.call(null,map__45419__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__45419__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__45419__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t45420 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t45420 = (function (investor_companies,map__45416,selection_value,path_fn,map__45417,portfolio_companies,p__45384,map__45418,map__45419,view,search_component,comm,selection_type,owner,constituencies,search_results,meta45421){
this.investor_companies = investor_companies;
this.map__45416 = map__45416;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.map__45417 = map__45417;
this.portfolio_companies = portfolio_companies;
this.p__45384 = p__45384;
this.map__45418 = map__45418;
this.map__45419 = map__45419;
this.view = view;
this.search_component = search_component;
this.comm = comm;
this.selection_type = selection_type;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.meta45421 = meta45421;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t45420.cljs$lang$type = true;
clustermap.components.search.t45420.cljs$lang$ctorStr = "clustermap.components.search/t45420";
clustermap.components.search.t45420.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.search/t45420");
});
clustermap.components.search.t45420.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t45420.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
})},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),e.target.value], null));
})})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
})},"\u00D7"))),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var or__3441__auto__ = cljs.core.not_empty.call(null,self__.constituencies);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = cljs.core.not_empty.call(null,self__.portfolio_companies);if(cljs.core.truth_(or__3441__auto____$1))
{return or__3441__auto____$1;
} else
{return cljs.core.not_empty.call(null,self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,cljs.core.count.call(null,idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod.call(null,(function (){var or__3441__auto__ = new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4158__auto__ = (function iter__45423(s__45424){return (new cljs.core.LazySeq(null,(function (){var s__45424__$1 = s__45424;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__45424__$1);if(temp__4092__auto__)
{var s__45424__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45424__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__45424__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__45426 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__45425 = 0;while(true){
if((i__45425 < size__4157__auto__))
{var vec__45429 = cljs.core._nth.call(null,c__4156__auto__,i__45425);var idx = cljs.core.nth.call(null,vec__45429,0,null);var con = cljs.core.nth.call(null,vec__45429,1,null);cljs.core.chunk_append.call(null,b__45426,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__45425,vec__45429,idx,con,c__4156__auto__,size__4157__auto__,b__45426,s__45424__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(i__45425,vec__45429,idx,con,c__4156__auto__,size__4157__auto__,b__45426,s__45424__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__45447 = (i__45425 + 1);
i__45425 = G__45447;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45426),iter__45423.call(null,cljs.core.chunk_rest.call(null,s__45424__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45426),null);
}
} else
{var vec__45430 = cljs.core.first.call(null,s__45424__$2);var idx = cljs.core.nth.call(null,vec__45430,0,null);var con = cljs.core.nth.call(null,vec__45430,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__45430,idx,con,s__45424__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(vec__45430,idx,con,s__45424__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__45423.call(null,cljs.core.rest.call(null,s__45424__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investor-backed companies"], null)], null),(function (){var iter__4158__auto__ = (function iter__45431(s__45432){return (new cljs.core.LazySeq(null,(function (){var s__45432__$1 = s__45432;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__45432__$1);if(temp__4092__auto__)
{var s__45432__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45432__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__45432__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__45434 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__45433 = 0;while(true){
if((i__45433 < size__4157__auto__))
{var vec__45437 = cljs.core._nth.call(null,c__4156__auto__,i__45433);var idx = cljs.core.nth.call(null,vec__45437,0,null);var pc = cljs.core.nth.call(null,vec__45437,1,null);cljs.core.chunk_append.call(null,b__45434,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__45433,vec__45437,idx,pc,c__4156__auto__,size__4157__auto__,b__45434,s__45432__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(i__45433,vec__45437,idx,pc,c__4156__auto__,size__4157__auto__,b__45434,s__45432__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__45448 = (i__45433 + 1);
i__45433 = G__45448;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45434),iter__45431.call(null,cljs.core.chunk_rest.call(null,s__45432__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45434),null);
}
} else
{var vec__45438 = cljs.core.first.call(null,s__45432__$2);var idx = cljs.core.nth.call(null,vec__45438,0,null);var pc = cljs.core.nth.call(null,vec__45438,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__45438,idx,pc,s__45432__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(vec__45438,idx,pc,s__45432__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__45431.call(null,cljs.core.rest.call(null,s__45432__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4158__auto__ = (function iter__45439(s__45440){return (new cljs.core.LazySeq(null,(function (){var s__45440__$1 = s__45440;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__45440__$1);if(temp__4092__auto__)
{var s__45440__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45440__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__45440__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__45442 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__45441 = 0;while(true){
if((i__45441 < size__4157__auto__))
{var vec__45445 = cljs.core._nth.call(null,c__4156__auto__,i__45441);var idx = cljs.core.nth.call(null,vec__45445,0,null);var inv = cljs.core.nth.call(null,vec__45445,1,null);cljs.core.chunk_append.call(null,b__45442,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__45441,vec__45445,idx,inv,c__4156__auto__,size__4157__auto__,b__45442,s__45440__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(i__45441,vec__45445,idx,inv,c__4156__auto__,size__4157__auto__,b__45442,s__45440__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__45449 = (i__45441 + 1);
i__45441 = G__45449;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45442),iter__45439.call(null,cljs.core.chunk_rest.call(null,s__45440__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45442),null);
}
} else
{var vec__45446 = cljs.core.first.call(null,s__45440__$2);var idx = cljs.core.nth.call(null,vec__45446,0,null);var inv = cljs.core.nth.call(null,vec__45446,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__45446,idx,inv,s__45440__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(vec__45446,idx,inv,s__45440__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__45439.call(null,cljs.core.rest.call(null,s__45440__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,idx_invs);
})()):null)], null)], null);
})():null)));
});
clustermap.components.search.t45420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45422){var self__ = this;
var _45422__$1 = this;return self__.meta45421;
});
clustermap.components.search.t45420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45422,meta45421__$1){var self__ = this;
var _45422__$1 = this;return (new clustermap.components.search.t45420(self__.investor_companies,self__.map__45416,self__.selection_value,self__.path_fn,self__.map__45417,self__.portfolio_companies,self__.p__45384,self__.map__45418,self__.map__45419,self__.view,self__.search_component,self__.comm,self__.selection_type,self__.owner,self__.constituencies,self__.search_results,meta45421__$1));
});
clustermap.components.search.__GT_t45420 = (function __GT_t45420(investor_companies__$1,map__45416__$2,selection_value__$1,path_fn__$2,map__45417__$2,portfolio_companies__$1,p__45384__$1,map__45418__$2,map__45419__$2,view__$1,search_component__$1,comm__$1,selection_type__$1,owner__$1,constituencies__$1,search_results__$1,meta45421){return (new clustermap.components.search.t45420(investor_companies__$1,map__45416__$2,selection_value__$1,path_fn__$2,map__45417__$2,portfolio_companies__$1,p__45384__$1,map__45418__$2,map__45419__$2,view__$1,search_component__$1,comm__$1,selection_type__$1,owner__$1,constituencies__$1,search_results__$1,meta45421));
});
}
return (new clustermap.components.search.t45420(investor_companies,map__45416__$1,selection_value,path_fn__$1,map__45417__$1,portfolio_companies,p__45384,map__45418__$1,map__45419__$1,view,search_component,comm,selection_type,owner,constituencies,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});

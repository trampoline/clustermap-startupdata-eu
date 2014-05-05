// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.page_title');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('cljs.core.async');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.components.reset_selection_button');
goog.require('clustermap.om');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.components.reset_selection_button');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('clustermap.om');
goog.require('cljs.core.async');
goog.require('clustermap.formats.number');
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__23502 = cljs.core._EQ_;var expr__23503 = type;if(cljs.core.truth_((pred__23502.cljs$core$IFn$_invoke$arity$2 ? pred__23502.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$362,expr__23503) : pred__23502.call(null,cljs.core.constant$keyword$362,expr__23503))))
{return "Investor-backed company";
} else
{if(cljs.core.truth_((pred__23502.cljs$core$IFn$_invoke$arity$2 ? pred__23502.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$363,expr__23503) : pred__23502.call(null,cljs.core.constant$keyword$363,expr__23503))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__23502.cljs$core$IFn$_invoke$arity$2 ? pred__23502.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$364,expr__23503) : pred__23502.call(null,cljs.core.constant$keyword$364,expr__23503))))
{return "Constituency";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23503)].join('')));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__23505,owner){var map__23516 = p__23505;var map__23516__$1 = ((cljs.core.seq_QMARK_(map__23516))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23516):map__23516);var selection = map__23516__$1;var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23516__$1,cljs.core.constant$keyword$278);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23516__$1,cljs.core.constant$keyword$317);var map__23517 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__23517__$1 = ((cljs.core.seq_QMARK_(map__23517))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23517):map__23517);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23517__$1,cljs.core.constant$keyword$365);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23517__$1,cljs.core.constant$keyword$366);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$367);var type_descr = (function (){var G__23518 = selection;var G__23518__$1 = (((G__23518 == null))?null:cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(G__23518));var G__23518__$2 = (((G__23518__$1 == null))?null:clustermap.components.page_title.describe_type(G__23518__$1));return G__23518__$2;
})();var name = (function (){var G__23519 = selection;var G__23519__$1 = (((G__23519 == null))?null:cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(G__23519));var G__23519__$2 = (((G__23519__$1 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__23519__$1));return G__23519__$2;
})();var url = (function (){var G__23520 = selection;var G__23520__$1 = (((G__23520 == null))?null:cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(G__23520));var G__23520__$2 = (((G__23520__$1 == null))?null:cljs.core.constant$keyword$368.cljs$core$IFn$_invoke$arity$1(G__23520__$1));return G__23520__$2;
})();if(typeof clustermap.components.page_title.t23521 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t23521 = (function (p__23505,value,path_fn,map__23516,map__23517,type_descr,selection,name,comm,page_title_component,owner,url,type,meta23522){
this.p__23505 = p__23505;
this.value = value;
this.path_fn = path_fn;
this.map__23516 = map__23516;
this.map__23517 = map__23517;
this.type_descr = type_descr;
this.selection = selection;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.owner = owner;
this.url = url;
this.type = type;
this.meta23522 = meta23522;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t23521.cljs$lang$type = true;
clustermap.components.page_title.t23521.cljs$lang$ctorStr = "clustermap.components.page-title/t23521";
clustermap.components.page_title.t23521.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.page-title/t23521");
});
clustermap.components.page_title.t23521.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t23521.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$369,"map"], null));
})},"View on map"),sablono.interpreter.interpret((cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn):null)),(function (){var attrs23524 = (function (){var or__3441__auto__ = self__.type_descr;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "All investor-backed companies";
}
})();if(cljs.core.map_QMARK_(attrs23524))
{return React.DOM.h2(sablono.interpreter.attributes(attrs23524),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs23524));
}
})(),(function (){var attrs23525 = (function (){var or__3441__auto__ = self__.name;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_(attrs23525))
{return React.DOM.h3(sablono.interpreter.attributes(attrs23525),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$364))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$370,"\u00A0(",cljs.core.constant$keyword$371.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$372.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null)));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs23525),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$364))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$370,"\u00A0(",cljs.core.constant$keyword$371.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$372.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null)));
}
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret(self__.url)):null));
});
clustermap.components.page_title.t23521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23523){var self__ = this;
var _23523__$1 = this;return self__.meta23522;
});
clustermap.components.page_title.t23521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23523,meta23522__$1){var self__ = this;
var _23523__$1 = this;return (new clustermap.components.page_title.t23521(self__.p__23505,self__.value,self__.path_fn,self__.map__23516,self__.map__23517,self__.type_descr,self__.selection,self__.name,self__.comm,self__.page_title_component,self__.owner,self__.url,self__.type,meta23522__$1));
});
clustermap.components.page_title.__GT_t23521 = (function __GT_t23521(p__23505__$1,value__$1,path_fn__$2,map__23516__$2,map__23517__$2,type_descr__$1,selection__$1,name__$1,comm__$1,page_title_component__$1,owner__$1,url__$1,type__$1,meta23522){return (new clustermap.components.page_title.t23521(p__23505__$1,value__$1,path_fn__$2,map__23516__$2,map__23517__$2,type_descr__$1,selection__$1,name__$1,comm__$1,page_title_component__$1,owner__$1,url__$1,type__$1,meta23522));
});
}
return (new clustermap.components.page_title.t23521(p__23505,value,path_fn__$1,map__23516__$1,map__23517__$1,type_descr,selection,name,comm,page_title_component,owner,url,type,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$373),app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$352,shared,cljs.core.constant$keyword$357,document.getElementById(elem_id)], null));
});

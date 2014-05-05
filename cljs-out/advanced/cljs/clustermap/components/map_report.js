// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
goog.require('cljs.core.async');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('domina.events');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.components.reset_selection_button');
goog.require('domina.events');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.formats.string');
goog.require('clustermap.components.reset_selection_button');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$369,"lists"], null));
})},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.type_counts = (function type_counts(site_stats){return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$485,(function (){var G__23268 = site_stats;var G__23268__$1 = (((G__23268 == null))?null:cljs.core.constant$keyword$410.cljs$core$IFn$_invoke$arity$1(G__23268));return G__23268__$1;
})(),cljs.core.constant$keyword$486,(function (){var G__23269 = site_stats;var G__23269__$1 = (((G__23269 == null))?null:cljs.core.constant$keyword$414.cljs$core$IFn$_invoke$arity$1(G__23269));return G__23269__$1;
})(),cljs.core.constant$keyword$487,(function (){var G__23270 = site_stats;var G__23270__$1 = (((G__23270 == null))?null:cljs.core.constant$keyword$416.cljs$core$IFn$_invoke$arity$1(G__23270));return G__23270__$1;
})()], null);
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(site_stats,comm){var map__23302 = clustermap.components.map_report.type_counts(site_stats);var map__23302__$1 = ((cljs.core.seq_QMARK_(map__23302))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23302):map__23302);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23302__$1,cljs.core.constant$keyword$487);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23302__$1,cljs.core.constant$keyword$486);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23302__$1,cljs.core.constant$keyword$485);if(typeof clustermap.components.map_report.t23303 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23303 = (function (pc_count,ic_count,const_count,map__23302,comm,site_stats,all_portfolio_companies_summary_report,meta23304){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23302 = map__23302;
this.comm = comm;
this.site_stats = site_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta23304 = meta23304;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23303.cljs$lang$type = true;
clustermap.components.map_report.t23303.cljs$lang$ctorStr = "clustermap.components.map-report/t23303";
clustermap.components.map_report.t23303.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t23303");
});
clustermap.components.map_report.t23303.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23303.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All investor-backed companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs23308 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$274,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$274,"-"));if(cljs.core.map_QMARK_(attrs23308))
{return React.DOM.li(sablono.interpreter.attributes(attrs23308),React.DOM.small(null,"Investor-backed companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23308),React.DOM.small(null,"Investor-backed companies"));
}
})(),(function (){var attrs23313 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$274,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$274,"-"));if(cljs.core.map_QMARK_(attrs23313))
{return React.DOM.li(sablono.interpreter.attributes(attrs23313),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23313),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs23318 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.const_count,cljs.core.constant$keyword$274,"-") : clustermap.formats.number.fnum.call(null,self__.const_count,cljs.core.constant$keyword$274,"-"));if(cljs.core.map_QMARK_(attrs23318))
{return React.DOM.li(sablono.interpreter.attributes(attrs23318),(function (){var attrs23319 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs23319))
{return React.DOM.small(sablono.interpreter.attributes(attrs23319),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs23319));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23318),(function (){var attrs23320 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs23320))
{return React.DOM.small(sablono.interpreter.attributes(attrs23320),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs23320));
}
})());
}
})(),(function (){var attrs23321 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__23331 = self__.site_stats;var G__23331__$1 = (((G__23331 == null))?null:cljs.core.constant$keyword$409.cljs$core$IFn$_invoke$arity$1(G__23331));var G__23331__$2 = (((G__23331__$1 == null))?null:cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(G__23331__$1));return G__23331__$2;
})(),cljs.core.constant$keyword$358,2,cljs.core.constant$keyword$274,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__23331 = self__.site_stats;var G__23331__$1 = (((G__23331 == null))?null:cljs.core.constant$keyword$409.cljs$core$IFn$_invoke$arity$1(G__23331));var G__23331__$2 = (((G__23331__$1 == null))?null:cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(G__23331__$1));return G__23331__$2;
})(),cljs.core.constant$keyword$358,2,cljs.core.constant$keyword$274,"-"));if(cljs.core.map_QMARK_(attrs23321))
{return React.DOM.li(sablono.interpreter.attributes(attrs23321),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23321),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs23326 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__23332 = self__.site_stats;var G__23332__$1 = (((G__23332 == null))?null:cljs.core.constant$keyword$415.cljs$core$IFn$_invoke$arity$1(G__23332));var G__23332__$2 = (((G__23332__$1 == null))?null:cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(G__23332__$1));return G__23332__$2;
})(),cljs.core.constant$keyword$360,0,cljs.core.constant$keyword$274,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__23332 = self__.site_stats;var G__23332__$1 = (((G__23332 == null))?null:cljs.core.constant$keyword$415.cljs$core$IFn$_invoke$arity$1(G__23332));var G__23332__$2 = (((G__23332__$1 == null))?null:cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(G__23332__$1));return G__23332__$2;
})(),cljs.core.constant$keyword$360,0,cljs.core.constant$keyword$274,"-"));if(cljs.core.map_QMARK_(attrs23326))
{return React.DOM.li(sablono.interpreter.attributes(attrs23326),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23326),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t23303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23305){var self__ = this;
var _23305__$1 = this;return self__.meta23304;
});
clustermap.components.map_report.t23303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23305,meta23304__$1){var self__ = this;
var _23305__$1 = this;return (new clustermap.components.map_report.t23303(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23302,self__.comm,self__.site_stats,self__.all_portfolio_companies_summary_report,meta23304__$1));
});
clustermap.components.map_report.__GT_t23303 = (function __GT_t23303(pc_count__$1,ic_count__$1,const_count__$1,map__23302__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta23304){return (new clustermap.components.map_report.t23303(pc_count__$1,ic_count__$1,const_count__$1,map__23302__$2,comm__$1,site_stats__$1,all_portfolio_companies_summary_report__$1,meta23304));
});
}
return (new clustermap.components.map_report.t23303(pc_count,ic_count,const_count,map__23302__$1,comm,site_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,site_stats,comm,path_fn){var map__23358 = clustermap.components.map_report.type_counts(site_stats);var map__23358__$1 = ((cljs.core.seq_QMARK_(map__23358))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23358):map__23358);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23358__$1,cljs.core.constant$keyword$487);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23358__$1,cljs.core.constant$keyword$486);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23358__$1,cljs.core.constant$keyword$485);if(typeof clustermap.components.map_report.t23359 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23359 = (function (pc_count,ic_count,const_count,map__23358,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,meta23360){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23358 = map__23358;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta23360 = meta23360;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23359.cljs$lang$type = true;
clustermap.components.map_report.t23359.cljs$lang$ctorStr = "clustermap.components.map-report/t23359";
clustermap.components.map_report.t23359.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t23359");
});
clustermap.components.map_report.t23359.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23359.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor-backed company"),(function (){var attrs23364 = cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs23364))
{return React.DOM.h3(sablono.interpreter.attributes(attrs23364),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs23364));
}
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs23365 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs23365))
{return React.DOM.li(sablono.interpreter.attributes(attrs23365),(function (){var attrs23366 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs23366))
{return React.DOM.small(sablono.interpreter.attributes(attrs23366),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs23366));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23365),(function (){var attrs23367 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs23367))
{return React.DOM.small(sablono.interpreter.attributes(attrs23367),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs23367));
}
})());
}
})(),(function (){var attrs23368 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs23368))
{return React.DOM.li(sablono.interpreter.attributes(attrs23368),(function (){var attrs23369 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs23369))
{return React.DOM.small(sablono.interpreter.attributes(attrs23369),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs23369));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23368),(function (){var attrs23370 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs23370))
{return React.DOM.small(sablono.interpreter.attributes(attrs23370),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs23370));
}
})());
}
})(),(function (){var attrs23371 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__23381 = self__.site_stats;var G__23381__$1 = (((G__23381 == null))?null:cljs.core.constant$keyword$409.cljs$core$IFn$_invoke$arity$1(G__23381));var G__23381__$2 = (((G__23381__$1 == null))?null:cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(G__23381__$1));return G__23381__$2;
})(),cljs.core.constant$keyword$358,2,cljs.core.constant$keyword$274,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__23381 = self__.site_stats;var G__23381__$1 = (((G__23381 == null))?null:cljs.core.constant$keyword$409.cljs$core$IFn$_invoke$arity$1(G__23381));var G__23381__$2 = (((G__23381__$1 == null))?null:cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(G__23381__$1));return G__23381__$2;
})(),cljs.core.constant$keyword$358,2,cljs.core.constant$keyword$274,"-"));if(cljs.core.map_QMARK_(attrs23371))
{return React.DOM.li(sablono.interpreter.attributes(attrs23371),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23371),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs23376 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__23382 = self__.site_stats;var G__23382__$1 = (((G__23382 == null))?null:cljs.core.constant$keyword$415.cljs$core$IFn$_invoke$arity$1(G__23382));var G__23382__$2 = (((G__23382__$1 == null))?null:cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(G__23382__$1));return G__23382__$2;
})(),cljs.core.constant$keyword$360,0,cljs.core.constant$keyword$274,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__23382 = self__.site_stats;var G__23382__$1 = (((G__23382 == null))?null:cljs.core.constant$keyword$415.cljs$core$IFn$_invoke$arity$1(G__23382));var G__23382__$2 = (((G__23382__$1 == null))?null:cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(G__23382__$1));return G__23382__$2;
})(),cljs.core.constant$keyword$360,0,cljs.core.constant$keyword$274,"-"));if(cljs.core.map_QMARK_(attrs23376))
{return React.DOM.li(sablono.interpreter.attributes(attrs23376),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23376),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t23359.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23361){var self__ = this;
var _23361__$1 = this;return self__.meta23360;
});
clustermap.components.map_report.t23359.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23361,meta23360__$1){var self__ = this;
var _23361__$1 = this;return (new clustermap.components.map_report.t23359(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23358,self__.path_fn,self__.comm,self__.site_stats,self__.portfolio_company,self__.portfolio_company_report,meta23360__$1));
});
clustermap.components.map_report.__GT_t23359 = (function __GT_t23359(pc_count__$1,ic_count__$1,const_count__$1,map__23358__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta23360){return (new clustermap.components.map_report.t23359(pc_count__$1,ic_count__$1,const_count__$1,map__23358__$2,path_fn__$1,comm__$1,site_stats__$1,portfolio_company__$1,portfolio_company_report__$1,meta23360));
});
}
return (new clustermap.components.map_report.t23359(pc_count,ic_count,const_count,map__23358__$1,path_fn,comm,site_stats,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,site_stats,comm,path_fn){var map__23408 = clustermap.components.map_report.type_counts(site_stats);var map__23408__$1 = ((cljs.core.seq_QMARK_(map__23408))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23408):map__23408);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23408__$1,cljs.core.constant$keyword$487);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23408__$1,cljs.core.constant$keyword$486);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23408__$1,cljs.core.constant$keyword$485);if(typeof clustermap.components.map_report.t23409 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23409 = (function (pc_count,ic_count,const_count,map__23408,path_fn,comm,site_stats,investor_company,investor_company_report,meta23410){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23408 = map__23408;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta23410 = meta23410;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23409.cljs$lang$type = true;
clustermap.components.map_report.t23409.cljs$lang$ctorStr = "clustermap.components.map-report/t23409";
clustermap.components.map_report.t23409.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t23409");
});
clustermap.components.map_report.t23409.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23409.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Investor"),(function (){var attrs23414 = cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs23414))
{return React.DOM.h3(sablono.interpreter.attributes(attrs23414),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs23414));
}
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs23415 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs23415))
{return React.DOM.li(sablono.interpreter.attributes(attrs23415),(function (){var attrs23416 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));if(cljs.core.map_QMARK_(attrs23416))
{return React.DOM.small(sablono.interpreter.attributes(attrs23416),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs23416));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23415),(function (){var attrs23417 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));if(cljs.core.map_QMARK_(attrs23417))
{return React.DOM.small(sablono.interpreter.attributes(attrs23417),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs23417));
}
})());
}
})(),(function (){var attrs23418 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs23418))
{return React.DOM.li(sablono.interpreter.attributes(attrs23418),(function (){var attrs23419 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs23419))
{return React.DOM.small(sablono.interpreter.attributes(attrs23419),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs23419));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23418),(function (){var attrs23420 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs23420))
{return React.DOM.small(sablono.interpreter.attributes(attrs23420),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs23420));
}
})());
}
})(),(function (){var attrs23421 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__23431 = self__.site_stats;var G__23431__$1 = (((G__23431 == null))?null:cljs.core.constant$keyword$409.cljs$core$IFn$_invoke$arity$1(G__23431));var G__23431__$2 = (((G__23431__$1 == null))?null:cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(G__23431__$1));return G__23431__$2;
})(),cljs.core.constant$keyword$358,2,cljs.core.constant$keyword$274,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__23431 = self__.site_stats;var G__23431__$1 = (((G__23431 == null))?null:cljs.core.constant$keyword$409.cljs$core$IFn$_invoke$arity$1(G__23431));var G__23431__$2 = (((G__23431__$1 == null))?null:cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(G__23431__$1));return G__23431__$2;
})(),cljs.core.constant$keyword$358,2,cljs.core.constant$keyword$274,"-"));if(cljs.core.map_QMARK_(attrs23421))
{return React.DOM.li(sablono.interpreter.attributes(attrs23421),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23421),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs23426 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__23432 = self__.site_stats;var G__23432__$1 = (((G__23432 == null))?null:cljs.core.constant$keyword$415.cljs$core$IFn$_invoke$arity$1(G__23432));var G__23432__$2 = (((G__23432__$1 == null))?null:cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(G__23432__$1));return G__23432__$2;
})(),cljs.core.constant$keyword$360,0,cljs.core.constant$keyword$274,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__23432 = self__.site_stats;var G__23432__$1 = (((G__23432 == null))?null:cljs.core.constant$keyword$415.cljs$core$IFn$_invoke$arity$1(G__23432));var G__23432__$2 = (((G__23432__$1 == null))?null:cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(G__23432__$1));return G__23432__$2;
})(),cljs.core.constant$keyword$360,0,cljs.core.constant$keyword$274,"-"));if(cljs.core.map_QMARK_(attrs23426))
{return React.DOM.li(sablono.interpreter.attributes(attrs23426),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23426),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t23409.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23411){var self__ = this;
var _23411__$1 = this;return self__.meta23410;
});
clustermap.components.map_report.t23409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23411,meta23410__$1){var self__ = this;
var _23411__$1 = this;return (new clustermap.components.map_report.t23409(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23408,self__.path_fn,self__.comm,self__.site_stats,self__.investor_company,self__.investor_company_report,meta23410__$1));
});
clustermap.components.map_report.__GT_t23409 = (function __GT_t23409(pc_count__$1,ic_count__$1,const_count__$1,map__23408__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta23410){return (new clustermap.components.map_report.t23409(pc_count__$1,ic_count__$1,const_count__$1,map__23408__$2,path_fn__$1,comm__$1,site_stats__$1,investor_company__$1,investor_company_report__$1,meta23410));
});
}
return (new clustermap.components.map_report.t23409(pc_count,ic_count,const_count,map__23408__$1,path_fn,comm,site_stats,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,site_stats,comm,path_fn){var map__23462 = clustermap.components.map_report.type_counts(site_stats);var map__23462__$1 = ((cljs.core.seq_QMARK_(map__23462))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23462):map__23462);var const_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23462__$1,cljs.core.constant$keyword$487);var ic_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23462__$1,cljs.core.constant$keyword$486);var pc_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23462__$1,cljs.core.constant$keyword$485);if(typeof clustermap.components.map_report.t23463 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t23463 = (function (pc_count,ic_count,const_count,map__23462,path_fn,comm,site_stats,constituency,constituency_report,meta23464){
this.pc_count = pc_count;
this.ic_count = ic_count;
this.const_count = const_count;
this.map__23462 = map__23462;
this.path_fn = path_fn;
this.comm = comm;
this.site_stats = site_stats;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta23464 = meta23464;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t23463.cljs$lang$type = true;
clustermap.components.map_report.t23463.cljs$lang$ctorStr = "clustermap.components.map-report/t23463";
clustermap.components.map_report.t23463.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.map-report/t23463");
});
clustermap.components.map_report.t23463.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t23463.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"Constituency"),(function (){var attrs23468 = cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs23468))
{return React.DOM.h3(sablono.interpreter.attributes(attrs23468),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = cljs.core.constant$keyword$371.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.constant$keyword$372.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$371.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$372.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs23468),React.DOM.br(null),(cljs.core.truth_((function (){var or__3441__auto__ = cljs.core.constant$keyword$371.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.constant$keyword$372.cljs$core$IFn$_invoke$arity$1(self__.constituency);
}
})())?React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$371.cljs$core$IFn$_invoke$arity$1(self__.constituency)),", ",sablono.interpreter.interpret(cljs.core.constant$keyword$372.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"):null));
}
})(),sablono.interpreter.interpret(clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn))),React.DOM.ul(null,(function (){var attrs23473 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs23473))
{return React.DOM.li(sablono.interpreter.attributes(attrs23473),(function (){var attrs23474 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));if(cljs.core.map_QMARK_(attrs23474))
{return React.DOM.small(sablono.interpreter.attributes(attrs23474),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs23474));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23473),(function (){var attrs23475 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Investor-backed company",cljs.core.array_seq(["Investor-backed companies"], 0));if(cljs.core.map_QMARK_(attrs23475))
{return React.DOM.small(sablono.interpreter.attributes(attrs23475),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs23475));
}
})());
}
})(),(function (){var attrs23476 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs23476))
{return React.DOM.li(sablono.interpreter.attributes(attrs23476),(function (){var attrs23477 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs23477))
{return React.DOM.small(sablono.interpreter.attributes(attrs23477),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs23477));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23476),(function (){var attrs23478 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs23478))
{return React.DOM.small(sablono.interpreter.attributes(attrs23478),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs23478));
}
})());
}
})(),(function (){var attrs23479 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__23489 = self__.site_stats;var G__23489__$1 = (((G__23489 == null))?null:cljs.core.constant$keyword$409.cljs$core$IFn$_invoke$arity$1(G__23489));var G__23489__$2 = (((G__23489__$1 == null))?null:cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(G__23489__$1));return G__23489__$2;
})(),cljs.core.constant$keyword$358,2,cljs.core.constant$keyword$274,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__23489 = self__.site_stats;var G__23489__$1 = (((G__23489 == null))?null:cljs.core.constant$keyword$409.cljs$core$IFn$_invoke$arity$1(G__23489));var G__23489__$2 = (((G__23489__$1 == null))?null:cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(G__23489__$1));return G__23489__$2;
})(),cljs.core.constant$keyword$358,2,cljs.core.constant$keyword$274,"-"));if(cljs.core.map_QMARK_(attrs23479))
{return React.DOM.li(sablono.interpreter.attributes(attrs23479),React.DOM.small(null,"Total revenue"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23479),React.DOM.small(null,"Total revenue"));
}
})(),(function (){var attrs23484 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__23490 = self__.site_stats;var G__23490__$1 = (((G__23490 == null))?null:cljs.core.constant$keyword$415.cljs$core$IFn$_invoke$arity$1(G__23490));var G__23490__$2 = (((G__23490__$1 == null))?null:cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(G__23490__$1));return G__23490__$2;
})(),cljs.core.constant$keyword$360,0,cljs.core.constant$keyword$274,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__23490 = self__.site_stats;var G__23490__$1 = (((G__23490 == null))?null:cljs.core.constant$keyword$415.cljs$core$IFn$_invoke$arity$1(G__23490));var G__23490__$2 = (((G__23490__$1 == null))?null:cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(G__23490__$1));return G__23490__$2;
})(),cljs.core.constant$keyword$360,0,cljs.core.constant$keyword$274,"-"));if(cljs.core.map_QMARK_(attrs23484))
{return React.DOM.li(sablono.interpreter.attributes(attrs23484),React.DOM.small(null,"Total employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs23484),React.DOM.small(null,"Total employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t23463.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23465){var self__ = this;
var _23465__$1 = this;return self__.meta23464;
});
clustermap.components.map_report.t23463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23465,meta23464__$1){var self__ = this;
var _23465__$1 = this;return (new clustermap.components.map_report.t23463(self__.pc_count,self__.ic_count,self__.const_count,self__.map__23462,self__.path_fn,self__.comm,self__.site_stats,self__.constituency,self__.constituency_report,meta23464__$1));
});
clustermap.components.map_report.__GT_t23463 = (function __GT_t23463(pc_count__$1,ic_count__$1,const_count__$1,map__23462__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta23464){return (new clustermap.components.map_report.t23463(pc_count__$1,ic_count__$1,const_count__$1,map__23462__$2,path_fn__$1,comm__$1,site_stats__$1,constituency__$1,constituency_report__$1,meta23464));
});
}
return (new clustermap.components.map_report.t23463(pc_count,ic_count,const_count,map__23462__$1,path_fn,comm,site_stats,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var map__23495 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__23495__$1 = ((cljs.core.seq_QMARK_(map__23495))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23495):map__23495);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23495__$1,cljs.core.constant$keyword$365);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23495__$1,cljs.core.constant$keyword$366);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$488);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$373,cljs.core.constant$keyword$317], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$373,cljs.core.constant$keyword$278], null));var site_stats = cljs.core.constant$keyword$399.cljs$core$IFn$_invoke$arity$1(data);var pred__23496 = cljs.core._EQ__EQ_;var expr__23497 = type;if(cljs.core.truth_((pred__23496.cljs$core$IFn$_invoke$arity$2 ? pred__23496.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$362,expr__23497) : pred__23496.call(null,cljs.core.constant$keyword$362,expr__23497))))
{return clustermap.components.map_report.portfolio_company_report(value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_((pred__23496.cljs$core$IFn$_invoke$arity$2 ? pred__23496.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$363,expr__23497) : pred__23496.call(null,cljs.core.constant$keyword$363,expr__23497))))
{return clustermap.components.map_report.investor_company_report(value,site_stats,comm,path_fn__$1);
} else
{if(cljs.core.truth_((pred__23496.cljs$core$IFn$_invoke$arity$2 ? pred__23496.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$364,expr__23497) : pred__23496.call(null,cljs.core.constant$keyword$364,expr__23497))))
{return clustermap.components.map_report.constituency_report(value,site_stats,comm,path_fn__$1);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(site_stats,comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.map_report.map_report_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$352,shared,cljs.core.constant$keyword$357,document.getElementById(elem_id)], null));
});

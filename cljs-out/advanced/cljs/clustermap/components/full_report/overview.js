// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.full_report.overview');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.full_report.overview.describe_selection = (function describe_selection(p__23011){var map__23016 = p__23011;var map__23016__$1 = ((cljs.core.seq_QMARK_(map__23016))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23016):map__23016);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23016__$1,cljs.core.constant$keyword$278);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23016__$1,cljs.core.constant$keyword$317);var pred__23017 = cljs.core._EQ_;var expr__23018 = type;if(cljs.core.truth_((pred__23017.cljs$core$IFn$_invoke$arity$2 ? pred__23017.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$362,expr__23018) : pred__23017.call(null,cljs.core.constant$keyword$362,expr__23018))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$373,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$327,"Total",cljs.core.constant$keyword$398,"Totals for the selected Portfolio Company"], null),cljs.core.constant$keyword$396,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$327,"Mean",cljs.core.constant$keyword$398,"Mean for the selected Portfolio Company"], null),cljs.core.constant$keyword$397,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$327,"Benchmark",cljs.core.constant$keyword$398,"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__23017.cljs$core$IFn$_invoke$arity$2 ? pred__23017.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$363,expr__23018) : pred__23017.call(null,cljs.core.constant$keyword$363,expr__23018))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$373,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$327,"Total",cljs.core.constant$keyword$398,"Totals for the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$396,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$327,"Mean",cljs.core.constant$keyword$398,"Mean over the Portfolio Companies of the selected Investor"], null),cljs.core.constant$keyword$397,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$327,"Benchmark",cljs.core.constant$keyword$398,"Mean over all UK Companies"], null)], null);
} else
{if(cljs.core.truth_((pred__23017.cljs$core$IFn$_invoke$arity$2 ? pred__23017.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$364,expr__23018) : pred__23017.call(null,cljs.core.constant$keyword$364,expr__23018))))
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$373,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$327,"Total",cljs.core.constant$keyword$398,"Totals for the selected Constituency"], null),cljs.core.constant$keyword$396,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$327,"Mean",cljs.core.constant$keyword$398,"Mean over the Portfolio Companies with sites in the selected Constituency"], null),cljs.core.constant$keyword$397,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$327,"Benchmark",cljs.core.constant$keyword$398,"Mean over all UK Companies"], null)], null);
} else
{return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$373,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$327,"Total",cljs.core.constant$keyword$398,"Totals over all Portfolio Companies"], null),cljs.core.constant$keyword$396,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$327,"Mean",cljs.core.constant$keyword$398,"Mean over all Portfolio Companies"], null),cljs.core.constant$keyword$397,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$327,"Benchmark",cljs.core.constant$keyword$398,"Mean over all UK Companies"], null)], null);
}
}
}
});
clustermap.components.full_report.overview.overview_data = (function overview_data(p__23020){var map__23046 = p__23020;var map__23046__$1 = ((cljs.core.seq_QMARK_(map__23046))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23046):map__23046);var selection_investment_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23046__$1,cljs.core.constant$keyword$399);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23046__$1,cljs.core.constant$keyword$373);var all_investment_stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23046__$1,cljs.core.constant$keyword$400);var sel_descrs = clustermap.components.full_report.overview.describe_selection(selection);var site_stats = (function (){var or__3441__auto__ = selection_investment_stats;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return all_investment_stats;
}
})();return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$373,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$373.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$401,cljs.core.constant$keyword$402,cljs.core.constant$keyword$403,cljs.core.constant$keyword$404,cljs.core.constant$keyword$405,cljs.core.constant$keyword$406,cljs.core.constant$keyword$407,cljs.core.constant$keyword$408,cljs.core.constant$keyword$409],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__23047 = site_stats;var G__23047__$1 = (((G__23047 == null))?null:cljs.core.constant$keyword$410.cljs$core$IFn$_invoke$arity$1(G__23047));return G__23047__$1;
})(),cljs.core.constant$keyword$274,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__23047 = site_stats;var G__23047__$1 = (((G__23047 == null))?null:cljs.core.constant$keyword$410.cljs$core$IFn$_invoke$arity$1(G__23047));return G__23047__$1;
})(),cljs.core.constant$keyword$274,"-")),(function (){var G__23048 = site_stats;var G__23048__$1 = (((G__23048 == null))?null:cljs.core.constant$keyword$411.cljs$core$IFn$_invoke$arity$1(G__23048));var G__23048__$2 = (((G__23048__$1 == null))?null:cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(G__23048__$1));return G__23048__$2;
})(),(function (){var G__23049 = site_stats;var G__23049__$1 = (((G__23049 == null))?null:cljs.core.constant$keyword$413.cljs$core$IFn$_invoke$arity$1(G__23049));var G__23049__$2 = (((G__23049__$1 == null))?null:cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(G__23049__$1));return G__23049__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__23050 = site_stats;var G__23050__$1 = (((G__23050 == null))?null:cljs.core.constant$keyword$414.cljs$core$IFn$_invoke$arity$1(G__23050));return G__23050__$1;
})(),cljs.core.constant$keyword$274,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__23050 = site_stats;var G__23050__$1 = (((G__23050 == null))?null:cljs.core.constant$keyword$414.cljs$core$IFn$_invoke$arity$1(G__23050));return G__23050__$1;
})(),cljs.core.constant$keyword$274,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__23051 = site_stats;var G__23051__$1 = (((G__23051 == null))?null:cljs.core.constant$keyword$411.cljs$core$IFn$_invoke$arity$1(G__23051));var G__23051__$2 = (((G__23051__$1 == null))?null:cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(G__23051__$1));return G__23051__$2;
})(),cljs.core.constant$keyword$360,0,cljs.core.constant$keyword$274,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__23051 = site_stats;var G__23051__$1 = (((G__23051 == null))?null:cljs.core.constant$keyword$411.cljs$core$IFn$_invoke$arity$1(G__23051));var G__23051__$2 = (((G__23051__$1 == null))?null:cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(G__23051__$1));return G__23051__$2;
})(),cljs.core.constant$keyword$360,0,cljs.core.constant$keyword$274,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__23052 = site_stats;var G__23052__$1 = (((G__23052 == null))?null:cljs.core.constant$keyword$413.cljs$core$IFn$_invoke$arity$1(G__23052));var G__23052__$2 = (((G__23052__$1 == null))?null:cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(G__23052__$1));return G__23052__$2;
})(),cljs.core.constant$keyword$358,2,cljs.core.constant$keyword$274,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__23052 = site_stats;var G__23052__$1 = (((G__23052 == null))?null:cljs.core.constant$keyword$413.cljs$core$IFn$_invoke$arity$1(G__23052));var G__23052__$2 = (((G__23052__$1 == null))?null:cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(G__23052__$1));return G__23052__$2;
})(),cljs.core.constant$keyword$358,2,cljs.core.constant$keyword$274,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__23053 = site_stats;var G__23053__$1 = (((G__23053 == null))?null:cljs.core.constant$keyword$415.cljs$core$IFn$_invoke$arity$1(G__23053));var G__23053__$2 = (((G__23053__$1 == null))?null:cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(G__23053__$1));return G__23053__$2;
})(),cljs.core.constant$keyword$360,0,cljs.core.constant$keyword$274,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__23053 = site_stats;var G__23053__$1 = (((G__23053 == null))?null:cljs.core.constant$keyword$415.cljs$core$IFn$_invoke$arity$1(G__23053));var G__23053__$2 = (((G__23053__$1 == null))?null:cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(G__23053__$1));return G__23053__$2;
})(),cljs.core.constant$keyword$360,0,cljs.core.constant$keyword$274,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__23054 = site_stats;var G__23054__$1 = (((G__23054 == null))?null:cljs.core.constant$keyword$416.cljs$core$IFn$_invoke$arity$1(G__23054));return G__23054__$1;
})(),cljs.core.constant$keyword$274,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__23054 = site_stats;var G__23054__$1 = (((G__23054 == null))?null:cljs.core.constant$keyword$416.cljs$core$IFn$_invoke$arity$1(G__23054));return G__23054__$1;
})(),cljs.core.constant$keyword$274,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__23055 = site_stats;var G__23055__$1 = (((G__23055 == null))?null:cljs.core.constant$keyword$409.cljs$core$IFn$_invoke$arity$1(G__23055));var G__23055__$2 = (((G__23055__$1 == null))?null:cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(G__23055__$1));return G__23055__$2;
})(),cljs.core.constant$keyword$358,2,cljs.core.constant$keyword$274,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__23055 = site_stats;var G__23055__$1 = (((G__23055 == null))?null:cljs.core.constant$keyword$409.cljs$core$IFn$_invoke$arity$1(G__23055));var G__23055__$2 = (((G__23055__$1 == null))?null:cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(G__23055__$1));return G__23055__$2;
})(),cljs.core.constant$keyword$358,2,cljs.core.constant$keyword$274,"-"))])], 0)),cljs.core.constant$keyword$396,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$396.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$401,cljs.core.constant$keyword$402,cljs.core.constant$keyword$403,cljs.core.constant$keyword$404,cljs.core.constant$keyword$405,cljs.core.constant$keyword$406,cljs.core.constant$keyword$407,cljs.core.constant$keyword$408,cljs.core.constant$keyword$409],["\u00A0",(function (){var G__23056 = site_stats;var G__23056__$1 = (((G__23056 == null))?null:cljs.core.constant$keyword$411.cljs$core$IFn$_invoke$arity$1(G__23056));var G__23056__$2 = (((G__23056__$1 == null))?null:cljs.core.constant$keyword$417.cljs$core$IFn$_invoke$arity$1(G__23056__$1));return G__23056__$2;
})(),(function (){var G__23057 = site_stats;var G__23057__$1 = (((G__23057 == null))?null:cljs.core.constant$keyword$413.cljs$core$IFn$_invoke$arity$1(G__23057));var G__23057__$2 = (((G__23057__$1 == null))?null:cljs.core.constant$keyword$417.cljs$core$IFn$_invoke$arity$1(G__23057__$1));return G__23057__$2;
})(),"\u00A0",(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__23058 = site_stats;var G__23058__$1 = (((G__23058 == null))?null:cljs.core.constant$keyword$411.cljs$core$IFn$_invoke$arity$1(G__23058));var G__23058__$2 = (((G__23058__$1 == null))?null:cljs.core.constant$keyword$417.cljs$core$IFn$_invoke$arity$1(G__23058__$1));return G__23058__$2;
})(),cljs.core.constant$keyword$360,0,cljs.core.constant$keyword$274,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__23058 = site_stats;var G__23058__$1 = (((G__23058 == null))?null:cljs.core.constant$keyword$411.cljs$core$IFn$_invoke$arity$1(G__23058));var G__23058__$2 = (((G__23058__$1 == null))?null:cljs.core.constant$keyword$417.cljs$core$IFn$_invoke$arity$1(G__23058__$1));return G__23058__$2;
})(),cljs.core.constant$keyword$360,0,cljs.core.constant$keyword$274,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__23059 = site_stats;var G__23059__$1 = (((G__23059 == null))?null:cljs.core.constant$keyword$413.cljs$core$IFn$_invoke$arity$1(G__23059));var G__23059__$2 = (((G__23059__$1 == null))?null:cljs.core.constant$keyword$417.cljs$core$IFn$_invoke$arity$1(G__23059__$1));return G__23059__$2;
})(),cljs.core.constant$keyword$358,2,cljs.core.constant$keyword$274,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__23059 = site_stats;var G__23059__$1 = (((G__23059 == null))?null:cljs.core.constant$keyword$413.cljs$core$IFn$_invoke$arity$1(G__23059));var G__23059__$2 = (((G__23059__$1 == null))?null:cljs.core.constant$keyword$417.cljs$core$IFn$_invoke$arity$1(G__23059__$1));return G__23059__$2;
})(),cljs.core.constant$keyword$358,2,cljs.core.constant$keyword$274,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__23060 = site_stats;var G__23060__$1 = (((G__23060 == null))?null:cljs.core.constant$keyword$415.cljs$core$IFn$_invoke$arity$1(G__23060));var G__23060__$2 = (((G__23060__$1 == null))?null:cljs.core.constant$keyword$417.cljs$core$IFn$_invoke$arity$1(G__23060__$1));return G__23060__$2;
})(),cljs.core.constant$keyword$360,0,cljs.core.constant$keyword$274,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__23060 = site_stats;var G__23060__$1 = (((G__23060 == null))?null:cljs.core.constant$keyword$415.cljs$core$IFn$_invoke$arity$1(G__23060));var G__23060__$2 = (((G__23060__$1 == null))?null:cljs.core.constant$keyword$417.cljs$core$IFn$_invoke$arity$1(G__23060__$1));return G__23060__$2;
})(),cljs.core.constant$keyword$360,0,cljs.core.constant$keyword$274,"-")),"\u00A0",(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__23061 = site_stats;var G__23061__$1 = (((G__23061 == null))?null:cljs.core.constant$keyword$409.cljs$core$IFn$_invoke$arity$1(G__23061));var G__23061__$2 = (((G__23061__$1 == null))?null:cljs.core.constant$keyword$417.cljs$core$IFn$_invoke$arity$1(G__23061__$1));return G__23061__$2;
})(),cljs.core.constant$keyword$358,2,cljs.core.constant$keyword$274,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__23061 = site_stats;var G__23061__$1 = (((G__23061 == null))?null:cljs.core.constant$keyword$409.cljs$core$IFn$_invoke$arity$1(G__23061));var G__23061__$2 = (((G__23061__$1 == null))?null:cljs.core.constant$keyword$417.cljs$core$IFn$_invoke$arity$1(G__23061__$1));return G__23061__$2;
})(),cljs.core.constant$keyword$358,2,cljs.core.constant$keyword$274,"-"))])], 0)),cljs.core.constant$keyword$397,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$397.cljs$core$IFn$_invoke$arity$1(sel_descrs),cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$401,cljs.core.constant$keyword$402,cljs.core.constant$keyword$403,cljs.core.constant$keyword$404,cljs.core.constant$keyword$405,cljs.core.constant$keyword$406,cljs.core.constant$keyword$407,cljs.core.constant$keyword$408,cljs.core.constant$keyword$409],[(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__23062 = all_investment_stats;var G__23062__$1 = (((G__23062 == null))?null:cljs.core.constant$keyword$410.cljs$core$IFn$_invoke$arity$1(G__23062));return G__23062__$1;
})(),cljs.core.constant$keyword$274,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__23062 = all_investment_stats;var G__23062__$1 = (((G__23062 == null))?null:cljs.core.constant$keyword$410.cljs$core$IFn$_invoke$arity$1(G__23062));return G__23062__$1;
})(),cljs.core.constant$keyword$274,"-")),(function (){var G__23063 = all_investment_stats;var G__23063__$1 = (((G__23063 == null))?null:cljs.core.constant$keyword$411.cljs$core$IFn$_invoke$arity$1(G__23063));var G__23063__$2 = (((G__23063__$1 == null))?null:cljs.core.constant$keyword$417.cljs$core$IFn$_invoke$arity$1(G__23063__$1));return G__23063__$2;
})(),(function (){var G__23064 = all_investment_stats;var G__23064__$1 = (((G__23064 == null))?null:cljs.core.constant$keyword$413.cljs$core$IFn$_invoke$arity$1(G__23064));var G__23064__$2 = (((G__23064__$1 == null))?null:cljs.core.constant$keyword$412.cljs$core$IFn$_invoke$arity$1(G__23064__$1));return G__23064__$2;
})(),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__23065 = all_investment_stats;var G__23065__$1 = (((G__23065 == null))?null:cljs.core.constant$keyword$414.cljs$core$IFn$_invoke$arity$1(G__23065));return G__23065__$1;
})(),cljs.core.constant$keyword$274,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__23065 = all_investment_stats;var G__23065__$1 = (((G__23065 == null))?null:cljs.core.constant$keyword$414.cljs$core$IFn$_invoke$arity$1(G__23065));return G__23065__$1;
})(),cljs.core.constant$keyword$274,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__23066 = all_investment_stats;var G__23066__$1 = (((G__23066 == null))?null:cljs.core.constant$keyword$411.cljs$core$IFn$_invoke$arity$1(G__23066));var G__23066__$2 = (((G__23066__$1 == null))?null:cljs.core.constant$keyword$417.cljs$core$IFn$_invoke$arity$1(G__23066__$1));return G__23066__$2;
})(),cljs.core.constant$keyword$360,0,cljs.core.constant$keyword$274,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__23066 = all_investment_stats;var G__23066__$1 = (((G__23066 == null))?null:cljs.core.constant$keyword$411.cljs$core$IFn$_invoke$arity$1(G__23066));var G__23066__$2 = (((G__23066__$1 == null))?null:cljs.core.constant$keyword$417.cljs$core$IFn$_invoke$arity$1(G__23066__$1));return G__23066__$2;
})(),cljs.core.constant$keyword$360,0,cljs.core.constant$keyword$274,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__23067 = all_investment_stats;var G__23067__$1 = (((G__23067 == null))?null:cljs.core.constant$keyword$413.cljs$core$IFn$_invoke$arity$1(G__23067));var G__23067__$2 = (((G__23067__$1 == null))?null:cljs.core.constant$keyword$417.cljs$core$IFn$_invoke$arity$1(G__23067__$1));return G__23067__$2;
})(),cljs.core.constant$keyword$358,2,cljs.core.constant$keyword$274,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__23067 = all_investment_stats;var G__23067__$1 = (((G__23067 == null))?null:cljs.core.constant$keyword$413.cljs$core$IFn$_invoke$arity$1(G__23067));var G__23067__$2 = (((G__23067__$1 == null))?null:cljs.core.constant$keyword$417.cljs$core$IFn$_invoke$arity$1(G__23067__$1));return G__23067__$2;
})(),cljs.core.constant$keyword$358,2,cljs.core.constant$keyword$274,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5((function (){var G__23068 = all_investment_stats;var G__23068__$1 = (((G__23068 == null))?null:cljs.core.constant$keyword$415.cljs$core$IFn$_invoke$arity$1(G__23068));var G__23068__$2 = (((G__23068__$1 == null))?null:cljs.core.constant$keyword$417.cljs$core$IFn$_invoke$arity$1(G__23068__$1));return G__23068__$2;
})(),cljs.core.constant$keyword$360,0,cljs.core.constant$keyword$274,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__23068 = all_investment_stats;var G__23068__$1 = (((G__23068 == null))?null:cljs.core.constant$keyword$415.cljs$core$IFn$_invoke$arity$1(G__23068));var G__23068__$2 = (((G__23068__$1 == null))?null:cljs.core.constant$keyword$417.cljs$core$IFn$_invoke$arity$1(G__23068__$1));return G__23068__$2;
})(),cljs.core.constant$keyword$360,0,cljs.core.constant$keyword$274,"-")),(clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__23069 = all_investment_stats;var G__23069__$1 = (((G__23069 == null))?null:cljs.core.constant$keyword$416.cljs$core$IFn$_invoke$arity$1(G__23069));return G__23069__$1;
})(),cljs.core.constant$keyword$274,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__23069 = all_investment_stats;var G__23069__$1 = (((G__23069 == null))?null:cljs.core.constant$keyword$416.cljs$core$IFn$_invoke$arity$1(G__23069));return G__23069__$1;
})(),cljs.core.constant$keyword$274,"-")),(clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__23070 = all_investment_stats;var G__23070__$1 = (((G__23070 == null))?null:cljs.core.constant$keyword$409.cljs$core$IFn$_invoke$arity$1(G__23070));var G__23070__$2 = (((G__23070__$1 == null))?null:cljs.core.constant$keyword$417.cljs$core$IFn$_invoke$arity$1(G__23070__$1));return G__23070__$2;
})(),cljs.core.constant$keyword$358,2,cljs.core.constant$keyword$274,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__23070 = all_investment_stats;var G__23070__$1 = (((G__23070 == null))?null:cljs.core.constant$keyword$409.cljs$core$IFn$_invoke$arity$1(G__23070));var G__23070__$2 = (((G__23070__$1 == null))?null:cljs.core.constant$keyword$417.cljs$core$IFn$_invoke$arity$1(G__23070__$1));return G__23070__$2;
})(),cljs.core.constant$keyword$358,2,cljs.core.constant$keyword$274,"-"))])], 0))], null);
});
clustermap.components.full_report.overview.pos_neg = (function pos_neg(value){if((value == null))
{return null;
} else
{if((value > 0))
{return React.DOM.i({"className": "icon-positive"});
} else
{if((value < 0))
{return React.DOM.i({"className": "icon-negative"});
} else
{if(true)
{return null;
} else
{return null;
}
}
}
}
});
clustermap.components.full_report.overview.overview = (function overview(data){var map__23094 = clustermap.components.full_report.overview.overview_data(data);var map__23094__$1 = ((cljs.core.seq_QMARK_(map__23094))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23094):map__23094);var benchmark = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23094__$1,cljs.core.constant$keyword$397);var averages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23094__$1,cljs.core.constant$keyword$396);var selection = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23094__$1,cljs.core.constant$keyword$373);if(typeof clustermap.components.full_report.overview.t23095 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.overview.t23095 = (function (selection,averages,benchmark,map__23094,data,overview,meta23096){
this.selection = selection;
this.averages = averages;
this.benchmark = benchmark;
this.map__23094 = map__23094;
this.data = data;
this.overview = overview;
this.meta23096 = meta23096;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.overview.t23095.cljs$lang$type = true;
clustermap.components.full_report.overview.t23095.cljs$lang$ctorStr = "clustermap.components.full-report.overview/t23095";
clustermap.components.full_report.overview.t23095.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.full-report.overview/t23095");
});
clustermap.components.full_report.overview.t23095.prototype.om$core$IRender$ = true;
clustermap.components.full_report.overview.t23095.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div({"className": "full-report-overview"},React.DOM.h4(null,"Overview of latest filings",React.DOM.small(null,"\u00A0(may span years : see table below for details)")),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table-stats"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"\u00A0"),React.DOM.th(null,"Investor-backed companies"),React.DOM.th(null,"Investors"),React.DOM.th(null,"Constituencies"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"))),React.DOM.tbody(null,React.DOM.tr(null,React.DOM.th(null,React.DOM.i({"className": "icon-info", "data-toggle": "tooltip", "data-container": "body", "title": (self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$398) : self__.selection.call(null,cljs.core.constant$keyword$398))}),sablono.interpreter.interpret((self__.selection.cljs$core$IFn$_invoke$arity$1 ? self__.selection.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$327) : self__.selection.call(null,cljs.core.constant$keyword$327)))),React.DOM.td(null,(function (){var attrs23102 = cljs.core.constant$keyword$401.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs23102))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$307,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs23102], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs23102));
}
})()),React.DOM.td(null,(function (){var attrs23103 = cljs.core.constant$keyword$404.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs23103))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$307,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs23103], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs23103));
}
})()),React.DOM.td(null,(function (){var attrs23104 = cljs.core.constant$keyword$408.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs23104))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$307,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs23104], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs23104));
}
})()),React.DOM.td(null,(function (){var attrs23105 = cljs.core.constant$keyword$409.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs23105))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$307,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs23105], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs23105));
}
})()),React.DOM.td(null,(function (){var attrs23106 = clustermap.components.full_report.overview.pos_neg(cljs.core.constant$keyword$403.cljs$core$IFn$_invoke$arity$1(self__.selection));if(cljs.core.map_QMARK_(attrs23106))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$307,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs23106], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs23106));
}
})()),React.DOM.td(null,(function (){var attrs23107 = cljs.core.constant$keyword$406.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs23107))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$307,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs23107], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs23107));
}
})()),React.DOM.td(null,(function (){var attrs23108 = cljs.core.constant$keyword$407.cljs$core$IFn$_invoke$arity$1(self__.selection);if(cljs.core.map_QMARK_(attrs23108))
{return React.DOM.span(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$307,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["selection"], null)], null),attrs23108], 0))),null);
} else
{return React.DOM.span({"className": "selection"},sablono.interpreter.interpret(attrs23108));
}
})()))))));
});
clustermap.components.full_report.overview.t23095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23097){var self__ = this;
var _23097__$1 = this;return self__.meta23096;
});
clustermap.components.full_report.overview.t23095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23097,meta23096__$1){var self__ = this;
var _23097__$1 = this;return (new clustermap.components.full_report.overview.t23095(self__.selection,self__.averages,self__.benchmark,self__.map__23094,self__.data,self__.overview,meta23096__$1));
});
clustermap.components.full_report.overview.__GT_t23095 = (function __GT_t23095(selection__$1,averages__$1,benchmark__$1,map__23094__$2,data__$1,overview__$1,meta23096){return (new clustermap.components.full_report.overview.t23095(selection__$1,averages__$1,benchmark__$1,map__23094__$2,data__$1,overview__$1,meta23096));
});
}
return (new clustermap.components.full_report.overview.t23095(selection,averages,benchmark,map__23094__$1,data,overview,null));
});

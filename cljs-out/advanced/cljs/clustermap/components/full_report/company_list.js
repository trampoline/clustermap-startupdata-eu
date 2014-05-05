// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.full_report.company_list');
goog.require('cljs.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('clustermap.components.table');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.components.table');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.number');
clustermap.components.full_report.company_list.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first(objs);var next_objs = cljs.core.next(objs);if(next_objs)
{var attrs22892 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));if(cljs.core.map_QMARK_(attrs22892))
{return React.DOM.div(sablono.interpreter.attributes(attrs22892),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs22892),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
}
} else
{return (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));
}
});
clustermap.components.full_report.company_list.pos_neg = (function pos_neg(value){if((value == null))
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__22901){var map__22914 = p__22901;var map__22914__$1 = ((cljs.core.seq_QMARK_(map__22914))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22914):map__22914);var opts = map__22914__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22914__$1,cljs.core.constant$keyword$365);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22914__$1,cljs.core.constant$keyword$383);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$362,company) : path_fn.call(null,cljs.core.constant$keyword$362,company));if(typeof clustermap.components.full_report.company_list.t22915 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t22915 = (function (company_path,link_fn,path_fn,opts,map__22914,p__22901,owner,company,portfolio_company,meta22916){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__22914 = map__22914;
this.p__22901 = p__22901;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta22916 = meta22916;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t22915.cljs$lang$type = true;
clustermap.components.full_report.company_list.t22915.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t22915";
clustermap.components.full_report.company_list.t22915.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.full-report.company-list/t22915");
});
clustermap.components.full_report.company_list.t22915.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t22915.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs22918 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$362,self__.company) : self__.link_fn.call(null,cljs.core.constant$keyword$362,self__.company));if(cljs.core.map_QMARK_(attrs22918))
{return React.DOM.td(sablono.interpreter.attributes(attrs22918),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22918));
}
})(),(function (){var attrs22919 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$363,cljs.core.constant$keyword$418.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_(attrs22919))
{return React.DOM.td(sablono.interpreter.attributes(attrs22919),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22919));
}
})(),(function (){var attrs22920 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$364,(function (){var G__22925 = self__.company;var G__22925__$1 = (((G__22925 == null))?null:cljs.core.constant$keyword$419.cljs$core$IFn$_invoke$arity$1(G__22925));var G__22925__$2 = (((G__22925__$1 == null))?null:cljs.core.filter(((function (G__22925,G__22925__$1){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$420.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__22925,G__22925__$1))
,G__22925__$1));return G__22925__$2;
})());if(cljs.core.map_QMARK_(attrs22920))
{return React.DOM.td(sablono.interpreter.attributes(attrs22920),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22920));
}
})(),(function (){var attrs22921 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$303.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$358,2,cljs.core.constant$keyword$274,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$303.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$358,2,cljs.core.constant$keyword$274,"-"));if(cljs.core.map_QMARK_(attrs22921))
{return React.DOM.td(sablono.interpreter.attributes(attrs22921),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3441__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$421.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22921),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3441__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$421.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
}
})(),(function (){var attrs22922 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$422.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_(attrs22922))
{return React.DOM.td(sablono.interpreter.attributes(attrs22922),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22922));
}
})(),(function (){var attrs22923 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$422.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$358,2,cljs.core.constant$keyword$274,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$422.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$358,2,cljs.core.constant$keyword$274,"-"));if(cljs.core.map_QMARK_(attrs22923))
{return React.DOM.td(sablono.interpreter.attributes(attrs22923),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22923));
}
})(),(function (){var attrs22924 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$423.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$360,0,cljs.core.constant$keyword$274,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$423.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$360,0,cljs.core.constant$keyword$274,"-"));if(cljs.core.map_QMARK_(attrs22924))
{return React.DOM.td(sablono.interpreter.attributes(attrs22924),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3441__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$421.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22924),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3441__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$421.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
}
})());
});
clustermap.components.full_report.company_list.t22915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22917){var self__ = this;
var _22917__$1 = this;return self__.meta22916;
});
clustermap.components.full_report.company_list.t22915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22917,meta22916__$1){var self__ = this;
var _22917__$1 = this;return (new clustermap.components.full_report.company_list.t22915(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__22914,self__.p__22901,self__.owner,self__.company,self__.portfolio_company,meta22916__$1));
});
clustermap.components.full_report.company_list.__GT_t22915 = (function __GT_t22915(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22914__$2,p__22901__$1,owner__$1,company__$1,portfolio_company__$1,meta22916){return (new clustermap.components.full_report.company_list.t22915(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22914__$2,p__22901__$1,owner__$1,company__$1,portfolio_company__$1,meta22916));
});
}
return (new clustermap.components.full_report.company_list.t22915(company_path,link_fn,path_fn,opts,map__22914__$1,p__22901,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$366);if(typeof clustermap.components.full_report.company_list.t22946 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t22946 = (function (comm,opts,owner,companies,company_list,meta22947){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta22947 = meta22947;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t22946.cljs$lang$type = true;
clustermap.components.full_report.company_list.t22946.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t22946";
clustermap.components.full_report.company_list.t22946.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.full-report.company-list/t22946");
});
clustermap.components.full_report.company_list.t22946.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t22946.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;var attrs22949 = clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$424);if(cljs.core.map_QMARK_(attrs22949))
{return React.DOM.div(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$307,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs22949], 0))),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs22950 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$424,"Investor-backed company",cljs.core.constant$keyword$327);if(cljs.core.map_QMARK_(attrs22950))
{return React.DOM.th(sablono.interpreter.attributes(attrs22950),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs22950));
}
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs22955 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$424,"Revenue",cljs.core.constant$keyword$303);if(cljs.core.map_QMARK_(attrs22955))
{return React.DOM.th(sablono.interpreter.attributes(attrs22955),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs22955));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$424,"Rev. change",cljs.core.constant$keyword$422))),(function (){var attrs22956 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$424,"Employees",cljs.core.constant$keyword$423);if(cljs.core.map_QMARK_(attrs22956))
{return React.DOM.th(sablono.interpreter.attributes(attrs22956),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs22956));
}
})())),(function (){var attrs22957 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$394.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$350,cljs.core.constant$keyword$425,cljs.core.constant$keyword$353,self__.opts], null));if(cljs.core.map_QMARK_(attrs22957))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs22957),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs22957));
}
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$424)));
} else
{return React.DOM.div({"className": "full-report-list"},sablono.interpreter.interpret(attrs22949),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs22958 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$424,"Investor-backed company",cljs.core.constant$keyword$327);if(cljs.core.map_QMARK_(attrs22958))
{return React.DOM.th(sablono.interpreter.attributes(attrs22958),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs22958));
}
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs22963 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$424,"Revenue",cljs.core.constant$keyword$303);if(cljs.core.map_QMARK_(attrs22963))
{return React.DOM.th(sablono.interpreter.attributes(attrs22963),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs22963));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret(clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$424,"Rev. change",cljs.core.constant$keyword$422))),(function (){var attrs22964 = clustermap.components.table.order_col(self__.comm,self__.companies,cljs.core.constant$keyword$424,"Employees",cljs.core.constant$keyword$423);if(cljs.core.map_QMARK_(attrs22964))
{return React.DOM.th(sablono.interpreter.attributes(attrs22964),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret(attrs22964));
}
})())),(function (){var attrs22965 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$394.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$350,cljs.core.constant$keyword$425,cljs.core.constant$keyword$353,self__.opts], null));if(cljs.core.map_QMARK_(attrs22965))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs22965),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs22965));
}
})())),sablono.interpreter.interpret(clustermap.components.table.paginate(self__.comm,self__.companies,cljs.core.constant$keyword$424)));
}
});
clustermap.components.full_report.company_list.t22946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22948){var self__ = this;
var _22948__$1 = this;return self__.meta22947;
});
clustermap.components.full_report.company_list.t22946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22948,meta22947__$1){var self__ = this;
var _22948__$1 = this;return (new clustermap.components.full_report.company_list.t22946(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta22947__$1));
});
clustermap.components.full_report.company_list.__GT_t22946 = (function __GT_t22946(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta22947){return (new clustermap.components.full_report.company_list.t22946(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta22947));
});
}
return (new clustermap.components.full_report.company_list.t22946(comm,opts,owner,companies,company_list,null));
});

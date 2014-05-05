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
clustermap.components.full_report.company_list.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first.call(null,objs);var next_objs = cljs.core.next.call(null,objs);if(next_objs)
{var attrs33801 = link_fn.call(null,type,first_obj);if(cljs.core.map_QMARK_.call(null,attrs33801))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs33801),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs33801),React.DOM.a({"href": owner_path},"\u00A0(more...)"));
}
} else
{return link_fn.call(null,type,first_obj);
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__33810){var map__33823 = p__33810;var map__33823__$1 = ((cljs.core.seq_QMARK_.call(null,map__33823))?cljs.core.apply.call(null,cljs.core.hash_map,map__33823):map__33823);var opts = map__33823__$1;var path_fn = cljs.core.get.call(null,map__33823__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__33823__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),company);if(typeof clustermap.components.full_report.company_list.t33824 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t33824 = (function (company_path,link_fn,path_fn,opts,map__33823,p__33810,owner,company,portfolio_company,meta33825){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__33823 = map__33823;
this.p__33810 = p__33810;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta33825 = meta33825;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t33824.cljs$lang$type = true;
clustermap.components.full_report.company_list.t33824.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t33824";
clustermap.components.full_report.company_list.t33824.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.full-report.company-list/t33824");
});
clustermap.components.full_report.company_list.t33824.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t33824.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs33827 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),self__.company);if(cljs.core.map_QMARK_.call(null,attrs33827))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33827),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33827));
}
})(),(function (){var attrs33828 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_.call(null,attrs33828))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33828),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33828));
}
})(),(function (){var attrs33829 = clustermap.components.full_report.company_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"constituency","constituency",3902864696),(function (){var G__33834 = self__.company;var G__33834__$1 = (((G__33834 == null))?null:new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847).cljs$core$IFn$_invoke$arity$1(G__33834));var G__33834__$2 = (((G__33834__$1 == null))?null:cljs.core.filter.call(null,((function (G__33834,G__33834__$1){
return (function (bl){return cljs.core._EQ_.call(null,"uk_constituencies",new cljs.core.Keyword(null,"collection_id","collection_id",4487629262).cljs$core$IFn$_invoke$arity$1(bl));
});})(G__33834,G__33834__$1))
,G__33834__$1));return G__33834__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs33829))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33829),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33829));
}
})(),(function (){var attrs33830 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33830))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33830),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3441__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33830),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3441__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
}
})(),(function (){var attrs33831 = clustermap.components.full_report.company_list.pos_neg.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_.call(null,attrs33831))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33831),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33831));
}
})(),(function (){var attrs33832 = clustermap.formats.money.fmoney.call(null,new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33832))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33832),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33832));
}
})(),(function (){var attrs33833 = clustermap.formats.number.fnum.call(null,new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(self__.company),new cljs.core.Keyword(null,"dec","dec",1014003572),0,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs33833))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33833),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3441__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33833),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret.call(null,(function (){var or__3441__auto__ = clustermap.formats.time.get_year.call(null,new cljs.core.Keyword(null,"latest_accounts_date","latest_accounts_date",2789706017).cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "no info";
}
})()),")"));
}
})());
});
clustermap.components.full_report.company_list.t33824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33826){var self__ = this;
var _33826__$1 = this;return self__.meta33825;
});
clustermap.components.full_report.company_list.t33824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33826,meta33825__$1){var self__ = this;
var _33826__$1 = this;return (new clustermap.components.full_report.company_list.t33824(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__33823,self__.p__33810,self__.owner,self__.company,self__.portfolio_company,meta33825__$1));
});
clustermap.components.full_report.company_list.__GT_t33824 = (function __GT_t33824(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__33823__$2,p__33810__$1,owner__$1,company__$1,portfolio_company__$1,meta33825){return (new clustermap.components.full_report.company_list.t33824(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__33823__$2,p__33810__$1,owner__$1,company__$1,portfolio_company__$1,meta33825));
});
}
return (new clustermap.components.full_report.company_list.t33824(company_path,link_fn,path_fn,opts,map__33823__$1,p__33810,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.full_report.company_list.t33855 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t33855 = (function (comm,opts,owner,companies,company_list,meta33856){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta33856 = meta33856;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t33855.cljs$lang$type = true;
clustermap.components.full_report.company_list.t33855.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t33855";
clustermap.components.full_report.company_list.t33855.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.full-report.company-list/t33855");
});
clustermap.components.full_report.company_list.t33855.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t33855.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;var attrs33858 = clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308));if(cljs.core.map_QMARK_.call(null,attrs33858))
{return React.DOM.div(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs33858)),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs33859 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Investor-backed company",new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core.map_QMARK_.call(null,attrs33859))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs33859),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs33859));
}
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs33864 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Revenue",new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451));if(cljs.core.map_QMARK_.call(null,attrs33864))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs33864),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs33864));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Rev. change",new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068)))),(function (){var attrs33865 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Employees",new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408));if(cljs.core.map_QMARK_.call(null,attrs33865))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs33865),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs33865));
}
})())),(function (){var attrs33866 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"company_no","company_no",4461198389),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs33866))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs33866),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs33866));
}
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308))));
} else
{return React.DOM.div({"className": "full-report-list"},sablono.interpreter.interpret.call(null,attrs33858),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs33867 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Investor-backed company",new cljs.core.Keyword(null,"name","name",1017277949));if(cljs.core.map_QMARK_.call(null,attrs33867))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs33867),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs33867));
}
})(),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),(function (){var attrs33872 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Revenue",new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451));if(cljs.core.map_QMARK_.call(null,attrs33872))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs33872),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs33872));
}
})(),React.DOM.th({"colSpan": "2"},sablono.interpreter.interpret.call(null,clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Rev. change",new cljs.core.Keyword(null,"latest_turnover_delta","latest_turnover_delta",4599982068)))),(function (){var attrs33873 = clustermap.components.table.order_col.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308),"Employees",new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408));if(cljs.core.map_QMARK_.call(null,attrs33873))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs33873),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs33873));
}
})())),(function (){var attrs33874 = om.core.build_all.call(null,clustermap.components.full_report.company_list.portfolio_company,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"company_no","company_no",4461198389),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs33874))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs33874),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs33874));
}
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.companies,new cljs.core.Keyword(null,"update-selection-investment-aggs-table-view","update-selection-investment-aggs-table-view",4073717308))));
}
});
clustermap.components.full_report.company_list.t33855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33857){var self__ = this;
var _33857__$1 = this;return self__.meta33856;
});
clustermap.components.full_report.company_list.t33855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33857,meta33856__$1){var self__ = this;
var _33857__$1 = this;return (new clustermap.components.full_report.company_list.t33855(self__.comm,self__.opts,self__.owner,self__.companies,self__.company_list,meta33856__$1));
});
clustermap.components.full_report.company_list.__GT_t33855 = (function __GT_t33855(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta33856){return (new clustermap.components.full_report.company_list.t33855(comm__$1,opts__$1,owner__$1,companies__$1,company_list__$1,meta33856));
});
}
return (new clustermap.components.full_report.company_list.t33855(comm,opts,owner,companies,company_list,null));
});

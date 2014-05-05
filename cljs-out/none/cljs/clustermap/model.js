// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.model');
goog.require('cljs.core');
clustermap.model.extract_id = (function extract_id(type,obj){var pred__12840 = cljs.core._EQ_;var expr__12841 = type;if(cljs.core.truth_(pred__12840.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__12841)))
{return new cljs.core.Keyword(null,"company_no","company_no",4461198389).cljs$core$IFn$_invoke$arity$1(obj);
} else
{if(cljs.core.truth_(pred__12840.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__12841)))
{return new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593).cljs$core$IFn$_invoke$arity$1(obj);
} else
{if(cljs.core.truth_(pred__12840.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__12841)))
{return new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318).cljs$core$IFn$_invoke$arity$1(obj);
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__12841)].join('')));
}
}
}
});

//# sourceMappingURL=model.js.map
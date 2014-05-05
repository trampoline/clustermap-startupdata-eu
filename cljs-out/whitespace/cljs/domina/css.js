// Compiled by ClojureScript 0.0-2173
goog.provide('domina.css');
goog.require('cljs.core');
goog.require('goog.dom.query');
goog.require('goog.dom.query');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('domina');
domina.css.root_element = (function root_element(){return (goog.dom.getElementsByTagNameAndClass("html")[0]);
});
/**
* Returns content based on a css selector expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
*/
domina.css.sel = (function() {
var sel = null;
var sel__1 = (function (expr){return sel.call(null,domina.css.root_element.call(null),expr);
});
var sel__2 = (function (base,expr){if(typeof domina.css.t39744 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.css.t39744 = (function (expr,base,sel,meta39745){
this.expr = expr;
this.base = base;
this.sel = sel;
this.meta39745 = meta39745;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
domina.css.t39744.cljs$lang$type = true;
domina.css.t39744.cljs$lang$ctorStr = "domina.css/t39744";
domina.css.t39744.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"domina.css/t39744");
});
domina.css.t39744.prototype.domina$DomContent$ = true;
domina.css.t39744.prototype.domina$DomContent$nodes$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.mapcat.call(null,(function (p1__39739_SHARP_){return domina.normalize_seq.call(null,goog.dom.query(self__.expr,p1__39739_SHARP_));
}),domina.nodes.call(null,self__.base));
});
domina.css.t39744.prototype.domina$DomContent$single_node$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,(function (p1__39740_SHARP_){return domina.normalize_seq.call(null,goog.dom.query(self__.expr,p1__39740_SHARP_));
}),domina.nodes.call(null,self__.base))));
});
domina.css.t39744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39746){var self__ = this;
var _39746__$1 = this;return self__.meta39745;
});
domina.css.t39744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39746,meta39745__$1){var self__ = this;
var _39746__$1 = this;return (new domina.css.t39744(self__.expr,self__.base,self__.sel,meta39745__$1));
});
domina.css.__GT_t39744 = (function __GT_t39744(expr__$1,base__$1,sel__$1,meta39745){return (new domina.css.t39744(expr__$1,base__$1,sel__$1,meta39745));
});
}
return (new domina.css.t39744(expr,base,sel,null));
});
sel = function(base,expr){
switch(arguments.length){
case 1:
return sel__1.call(this,base);
case 2:
return sel__2.call(this,base,expr);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sel.cljs$core$IFn$_invoke$arity$1 = sel__1;
sel.cljs$core$IFn$_invoke$arity$2 = sel__2;
return sel;
})()
;

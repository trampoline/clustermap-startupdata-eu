// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.om');
goog.require('cljs.core');
/**
* wraps a component constructor function so that
* the components state is found at path korks in
* the app-state
*/
clustermap.om.burrow = (function burrow(component_fn,korks){var use_korks = ((cljs.core.sequential_QMARK_.call(null,korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));return (function() { 
var G__12904__delegate = function (args){return cljs.core.apply.call(null,component_fn,cljs.core.get_in.call(null,cljs.core.first.call(null,args),use_korks),cljs.core.rest.call(null,args));
};
var G__12904 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__12904__delegate.call(this,args);};
G__12904.cljs$lang$maxFixedArity = 0;
G__12904.cljs$lang$applyTo = (function (arglist__12905){
var args = cljs.core.seq(arglist__12905);
return G__12904__delegate(args);
});
G__12904.cljs$core$IFn$_invoke$arity$variadic = G__12904__delegate;
return G__12904;
})()
;
});

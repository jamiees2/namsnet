// ==UserScript==
// @name       Námsnet Sucks!
// @namespace  http://jamessigurdarson.com/
// @version    0.1
// @description  Style fixes for Námsnet Tækniskólans
// @include      *//namsnet.tskoli.is/*
// @copyright  2013+, James Sigurðarson
// @resource        CSS  https://bitbucket.org/jamiees2/namsnet/raw/f93cd836357657488dc3d89aa0e32d7f552bc22e/styles.css
// ==/UserScript==
var cssTxt  = GM_getResourceText ("CSS");
GM_addStyle (cssTxt);
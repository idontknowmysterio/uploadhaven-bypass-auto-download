// ==UserScript==
// @name         Uploadhaven 0 sec timer auto downloads
// @namespace    http://tampermonkey.net/
// @version      2025-05-20
// @description  https://github.com/idontknowmysterio
// @author       idontknowmysterio
// @match        https://uploadhaven.com/download/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=uploadhaven.com
// @grant        none
// @license MIT
// ==/UserScript==
(function() {
    'use strict';
    window.addEventListener('load', function() {
        function inject(func) {
            var source = func.toString();
            var script = document.createElement('script');
            script.innerHTML = "("+ source +")()";
            document.body.appendChild(script);
        }
        function bypass_time() {
            seconds = 0;
        }
        inject(bypass_time);
        setTimeout(() => document.querySelector("#submitFree").click(), 3800);
    }, false);
})();
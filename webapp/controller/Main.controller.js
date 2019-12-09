	sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("testons.testo.controller.Main", {
		onInit: function () {
			alert("init");
		},
		onSelect: function () {
			alert("msgs");
			alert("msg1localbranch");
			alert("msgwithlocalbranch");
			alert("msggitbranch");
		}
		
	});
});

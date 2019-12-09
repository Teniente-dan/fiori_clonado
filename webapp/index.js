sap.ui.require([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/XMLView"
], function (JSONModel, XMLView) {
	"use strict";
	  
	 var coreController = this;

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {
		// Create a JSON model from an object literal
		// var oModel = new JSONModel({

		// 		firstName: "Harry",
		// 		lastName: "Hawk",
		// 		enabled: true,
		// 		panelHeaderText: "Data Binding Basics"

		// });
		var gModel = "";
		var items = [];
		$.getJSON("./model/testo.json", function (json) {
			// if (coreController) {
				coreController.items = [];
			// }
			var oModel = new JSONModel(json);
			sap.ui.getCore().setModel(oModel);
			gModel = sap.ui.getCore().getModel();

			$.each(json, function (key, val) {
				items.push("<li id='" + key + "'>" + val + "</li>");
			});
			alert("loadedjson");
			if (coreController) {
				coreController.items = items;
			}
		}, function (json) {});
		// .getModel("testo.json");
		// Assign the model object to the SAPUI5 core
		// sap.ui.getCore().setModel(oModel);

		// Display the XML view called "App"
		new XMLView({
			// viewName: "sap.ui.demo.db.view.App"
			viewName: "testons.testo.view.App"
		}).placeAt("contentofmain");
	});
});
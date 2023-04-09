sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    // "sap/m/MessageToast"
    // "sap/ui/model/json/JSONModel",
    // "sap/ui/model/resource/ResourceModel",
  ],
  function (Controller) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
    //   onInit: function () {
        // moved to component.js
        // var odata = { 
        //   recipient: { name: "ui5" },
        // };
        // var oModel = new JSONModel(odata);
        // this.getView().setModel(oModel);
        // var oResourceModel = new ResourceModel({
        //   bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
        //   supportedLocales: [""],
        //   fallbackLocale: "",
        // });
        // this.getView().setModel(oResourceModel, "i18n");
    //   },
      // onShowHello: function () {
      //   // alert("hello controller");
      //   // vanila js
      //   // MessageToast.show("Hellow message toast", {
      //   //   my: "center", // default
      //   //   at: "center", // default
      //   //   of: window, // default
      //   // });
      //   // show message from i18n
      //   var oBundle = this.getView().getModel("i18n").getResourceBundle();
      //   var sRecip = this.getView().getModel().getProperty("/receipt/name");
      //   var oMsg = oBundle.getText("helloMsg", [sRecip]);
      //   // show msg
      //   MessageToast.show(oMsg);
      // },
    });
  }
);

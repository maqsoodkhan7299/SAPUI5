sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/core/Fragment"],
  function (Controller, MessageToast, Fragment) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
      onShowHello: function () {
        // alert("hello controller");
        // vanila js
        // MessageToast.show("Hellow message toast", {
        //   my: "center", // default
        //   at: "center", // default
        //   of: window, // default
        // });
        // show message from i18n
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sRecip = this.getView().getModel().getProperty("/receipt/name");
        var oMsg = oBundle.getText("helloMsg", [sRecip]);
        // show msg
        MessageToast.show(oMsg);
      },
      onOpenDialog: function () {
        var oView = this.getView();

        // if dialog not created create it
        if (!this.byId("helloDialog")) {
          Fragment.load({
            id: oView.getId(),
            name: "sap.ui.demo.walkthrough.view.HelloDialog",
            controller: this,
          }).then(function (oDialog) {
            oView.addDependent(oDialog);
            oDialog.open();
          });
        } else {
          this.byId("helloDialog").open();
        }
      },

      onCloseDialog: function () {
        this.byId("helloDialog").close();
    // this.getOwnerComponent().openHelloDialog();
      },
    });
  }
);

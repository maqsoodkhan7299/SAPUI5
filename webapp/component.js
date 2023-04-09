sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"

], function(UIComponent, JSONModel, ResourceModel, HelloDialog) {
    'use strict';
    return UIComponent.extend("sap.ui.demo.walkthrough.component",{
        metadata: {
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
        },
        init: function () {
            // call the init function of Parent UIComponent
             UIComponent.prototype.init.apply(this, arguments);
            // set data model
            var odata = {
                recipient: { name: "ui5" },
              };
              var oModel = new JSONModel(odata);
              this.setModel(oModel);

            // set Dialog
        //    need to visit again
            // this._helloDialog = new HelloDialog(this.getRootControl());
            this._helloDialog = new HelloDialog();
        },
    //     exit : function(){
    //         this._helloDialog.destroy();
    //         delete this._helloDialog;
    //     },
    //     openHelloDialog: function(){
    //         this._helloDialog.open();
    //     }
    });
    
});
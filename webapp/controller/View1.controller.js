sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/Fragment"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, Fragment) {
    "use strict";

    return Controller.extend("DailyHuddle.dailyhuddleapp.controller.View1", {
      onInit: function () {},
      onPressOJC: function () {
        // Fragment.load({
        //     name: 'DailyHuddle.dailyhuddleapp.view.OpenJC'
        // }).then(function(oFragment){
        //     oFragment.open();
        // });
      },
      oPopupSupplier: null,
      onPressMSLA: function (oEvent) {
        debugger;
        // alert("thuis functionality is under construction");
        var that = this;
        if (!this.oPopupSupplier) {
          Fragment.load({
            name: "DailyHuddle.dailyhuddleapp.view.popup",
            type: "XML",
          }).then(function (oFragment) {
            // inside promise and call back function , we cannot access this pointer
            // this is controller object, so we need to create a local variable for controller 
            // object outside the promise and call back 
            that.oPopupSupplier = oFragment;
            // check sdk methos for select dialog or for which you want to open 
            that.oPopupSupplier.open();
          });
        } else {
          this.oPopupSupplier.open();
        }
      },
      onPressFloatUsage: function () {
        var that = this;
        if (!this.oPopupSupplier) {
          Fragment.load({
            name: "DailyHuddle.dailyhuddleapp.view.popup",
            type: "XML",
          }).then(function (oFragment) {
            // inside promise and call back function , we cannot access this pointer
            // this is controller object, so we need to create a local variable for controller 
            // object outside the promise and call back var that= this ;
            that.oPopupSupplier = oFragment;
            // check sdk methos for select dialog or for which you want to open 
            that.oPopupSupplier.open();
          });
        } else {
          this.oPopupSupplier.open();
        }
 
      }
    });
  }
);

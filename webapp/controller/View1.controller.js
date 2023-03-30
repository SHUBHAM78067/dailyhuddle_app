sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/Fragment"],
  /**
   * @param {typeof sap.ui.core.mvc.Controller} Controller
   */
  function (Controller, Fragment) {
    "use strict";

    return Controller.extend("DailyHuddle.dailyhuddleapp.controller.View1", {
      onInit: function () {


      },
      onPressOJC: function () {
        this.getView().byId("OpenjcToolBar").setVisible(true);
        this.getView().byId("uiTab1").setVisible(true);
        this.getView().byId("idMSLAToolbar").setVisible(false);
        this.getView().byId("uiTab2").setVisible(false);
        this.getView().byId("idFloatTable").setVisible(false);
    
      },
      onPressMSLA: function (oEvent) {
       this.getView().byId("idMSLAToolbar").setVisible(true);
       this.getView().byId("uiTab2").setVisible(true);
       this.getView().byId("OpenjcToolBar").setVisible(false);
       this.getView().byId("uiTab1").setVisible(false);
       this.getView().byId("idFloatTable").setVisible(false);
       
      },
      onPressFloatUsage: function () {
        this.getView().byId("idMSLAToolbar").setVisible(false);
        this.getView().byId("uiTab2").setVisible(false);
        this.getView().byId("OpenjcToolBar").setVisible(false);
        this.getView().byId("uiTab1").setVisible(false);
        this.getView().byId("idFloatTable").setVisible(true);
        var oTableData = [{
          "JcNo": "",
          "FloatPartNo": "",
          "FloatSerialNo": ""
        }, {
          "JcNo": "",
          "FloatPartNo": "",
          "FloatSerialNo": ""
        }, {
          "JcNo": "",
          "FloatPartNo": "",
          "FloatSerialNo": ""
        }, {
          "JcNo": "",
          "FloatPartNo": "",
          "FloatSerialNo": ""
        }, {
          "JcNo": "",
          "FloatPartNo": "",
          "FloatSerialNo": ""
        }, {
          "JcNo": "",
          "FloatPartNo": "",
          "FloatSerialNo": ""
        }, {
          "JcNo": "",
          "FloatPartNo": "",
          "FloatSerialNo": ""
        }, {
          "JcNo": "",
          "FloatPartNo": "",
          "FloatSerialNo": ""
        }, {
          "JcNo": "",
          "FloatPartNo": "",
          "FloatSerialNo": ""
        }, {
          "JcNo": "",
          "FloatPartNo": "",
          "FloatSerialNo": ""
        }];
        var oTableModel = new sap.ui.model.json.JSONModel(oTableData);
        this.getView().byId("idFloatTable").setModel(oTableModel, "oFloatUsageModel");
      },
      onPressOEOS:function(){
        this.getView().byId("oeostoolbarid").setVisible(true);
        this.getView().byId("uiTab3").setVisible(true);
        this.getView().byId("toolbarrmsla").setVisible(false);
        this.getView().byId("uiTab4").setVisible(false);
        this.getView().byId("toolbarrsmsla").setVisible(false);
        this.getView().byId("uiTab5").setVisible(false);
      },
      onPressRCMSLA:function(){
        this.getView().byId("oeostoolbarid").setVisible(false);
        this.getView().byId("uiTab3").setVisible(false);
        this.getView().byId("toolbarrmsla").setVisible(true);
        this.getView().byId("uiTab4").setVisible(true);
        this.getView().byId("toolbarrsmsla").setVisible(false);
        this.getView().byId("uiTab5").setVisible(false);
      },
      onPressRSMSLA:function(){
        this.getView().byId("oeostoolbarid").setVisible(false);
        this.getView().byId("uiTab3").setVisible(false);
        this.getView().byId("toolbarrmsla").setVisible(false);
        this.getView().byId("uiTab4").setVisible(false);
        this.getView().byId("toolbarrsmsla").setVisible(true);
        this.getView().byId("uiTab5").setVisible(true);
      },
      onPressOC:function(){
        this.getView().byId("toolbaroc").setVisible(true);
        this.getView().byId("uiTab6").setVisible(true);
        this.getView().byId("toolbarmslac").setVisible(false);
        this.getView().byId("uiTab7").setVisible(false);
      },
      onPressMSLAC:function(){
        this.getView().byId("toolbaroc").setVisible(false);
        this.getView().byId("uiTab6").setVisible(false);
        this.getView().byId("toolbarmslac").setVisible(true);
        this.getView().byId("uiTab7").setVisible(true);
      },
      onProceedPress:function(){
        this.getView().byId("idITB").setVisible(true);
      }
    });
  }
);

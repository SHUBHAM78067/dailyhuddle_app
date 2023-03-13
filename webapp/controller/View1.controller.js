sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,Fragment) {
        "use strict";

        return Controller.extend("DailyHuddle.dailyhuddleapp.controller.View1", {
            onInit: function () {

            },
            onPressOJC:function (){
                // Fragment.load({
                //     name: 'DailyHuddle.dailyhuddleapp.view.OpenJC'
                // }).then(function(oFragment){
                //     oFragment.open();
                // });

            },
            onPressMSLA:function(){
                // Fragment.load({
                //     name: 'DailyHuddle.dailyhuddleapp.view.MSLA'
                // }).then(function(oFragment){
                //     oFragment.open();
                // });
            },
            onPressFloatUsage:function(){
                // Fragment.load({
                //     name: 'DailyHuddle.dailyhuddleapp.view.Float_Usage'
                // }).then(function(oFragment){
                //     oFragment.open();
                // });
            }
        });
    });

sap.ui.define(["sap/ui/core/mvc/Controller","anubhav/app/util/formatter"],function(e,t){"use strict";return e.extend("anubhav.app.controller.View1",{formatter:t,onInit:function(){this.oRouter=this.getOwnerComponent().getRouter()},onItemSelect:function(e){var t=e.getParameter("listItem");var n=t.getTitle();this.onNext(n)},oRouter:null,onSelectChange:function(e){var t=e.getSource();var n=t.getSelectedItem().getBindingContextPath();var r=n.split("/")[n.split("/").length-1];this.onNext(r)},onSearch:function(e){var t=e.getParameter("query");if(!t){t=e.getParameter("newValue")}var n=new sap.ui.model.Filter("name",sap.ui.model.FilterOperator.Contains,t);var r=new sap.ui.model.Filter("type",sap.ui.model.FilterOperator.Contains,t);var a=[n,r];var i=new sap.ui.model.Filter({filters:a,and:false});var o=this.getView().byId("idList");o.getBinding("items").filter(i)},onNext:function(e){this.oRouter.navTo("detail",{navya:e})}})});
jQuery.sap.require("sap.m.MessageBox"); 

sap.ui.jsview("project.views.project_main", {
  getControllerName: function() {
    return "project.views.project_main";
  }, 

  createContent: function(oController) {

    this.setHeight("100%"); 


    var item = new sap.m.ListItemBase({
      text: "Test"
    });

    var list = new sap.m.List({
      items: [item]
    }); 

    var label = new sap.m.Label({
      text: "Label"
    }) 

    var button = new sap.m.Button({
      text: "Button"
    })

    var bar = new sap.m.Bar({
      contentLeft: [label],
      contentRight: [button]
    })

    var column = new sap.m.Column({
      header: new sap.m.Label({
        text: "Label"
      })
    })

    var table = new sap.m.Table({
      columns: [column]
    })

    var splitapp = new sap.m.SplitApp({});
    splitapp.addMasterPage(list);
    // splitapp.addDetailPage(bar);
    // splitapp.addDetailPage(table);
    // splitapp.addDetailPage([bar, table]]);

    var detailpage = new sap.m.Page({
      content: [bar, table]
    })
    splitapp.addDetailPage(detailpage); 











    // HEADER BAR 

    // var homeBtn = new sap.m.Button(this.createId("project-homebutton"), {
    //   icon: "sap-icon://home",
    //   tooltip: "Home",
    //   press: function() {
    //     alert("Home sweet home");
    //   }
    // });
    // oController.homeBtn = homeBtn; 

    // var headerLabel = new sap.m.Label(this.createId("project-label"), {
    //   text: "project"
    // }); 

    // var filterBtn = new sap.m.Button(this.createId("project-filterBtnnbutton"),{
    //   icon: "sap-icon://add-filter",
    //   tooltip: "Filter",
    //   press: function(e) {
    //     oController.openFilterPanel();
    //   }
    // });
    // oController.filterBtn = filterBtn; 


    // var appHeader = new sap.m.Bar(this.createId("app-headerBar"), {      
    //   contentLeft: [homeBtn],
    //   contentMiddle: [headerLabel],
    //   contentRight: [filterBtn]
    // }).addStyleClass("as-app-header");

    // var paginationHeader = new sap.m.Bar(this.createId("project-headerBar"), {});
    // oController.paginationHeader = paginationHeader; 


    // // CONTENT TABLE 
    // var contentTable = new sap.m.Table({
    //   // mode: sap.m.ListMode.MultiSelect,
    //   // growing: false,
    //   columns : [
    //     new sap.m.Column({
    //       hAlign : "Center",
    //       header : new sap.m.Label({
    //         text: "Content: "
    //       })
    //     })
    //   ]
    // });
    // oController.contentTable = contentTable;     

    var oPage = new sap.m.Page({
      // customHeader: appHeader, 
      content: [splitapp]
    })

    return oPage; 
  }

})
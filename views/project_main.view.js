jQuery.sap.require("sap.m.MessageBox"); 

sap.ui.jsview("project.views.project_main", {
  getControllerName: function() {
    return "project.views.project_main";
  }, 

  createContent: function(oController) {

    this.setHeight("100%"); 

    // var item = new sap.m.ObjectListItem({
    //   title: "Test"
    // });

    var itemContainer = new sap.m.VBox();
    
    var subitem = new sap.m.Label({
      text: "Item"
    })

    var subitem1 = new sap.m.Label({
      text: " Item1"
    })

    itemContainer.addItem(subitem);
    itemContainer.addItem(subitem1);

    var item = new sap.m.CustomListItem({
      content: [itemContainer]
    });

    var list = new sap.m.List({
      items: [item]
    }); 

    var label = new sap.m.Label({
      text: "Label"
    }) 

    var button = new sap.m.Button({
      icon: "sap-icon://donut-chart",
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
    
    var masterpage = new sap.m.Page({
      content: [list]
    })
    splitapp.addMasterPage(masterpage);

    var detailpage = new sap.m.Page({
      content: [bar, table]
    })
    splitapp.addDetailPage(detailpage); 

    return splitapp; 
  }

})
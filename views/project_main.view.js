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

  
    var subitem = new sap.m.Label({
      text: "{name}"
    })

    var subitem1 = new sap.m.Label({
      text: "{email}"
    });

    // var company = new sap.m.Label({
    //   text: "{company}"
    // });

    var company = new sap.m.Label({
      text: {
        path: "company",
        formatter: function(company) {
          return "Works at: " + company;
        }
      }
    });

    var itemContainer = new sap.m.VBox({
      items: [subitem, subitem1, company]
    });

    var item = new sap.m.CustomListItem({
      content: [itemContainer]
    });

    var list = new sap.m.List({
    }); 
    //list.setModel(oController.olistModel);
    list.bindAggregation("items", "/", item);
    oController.list = list; 

    var label = new sap.m.Label({
      text: "Label"
    }) 

    var button = new sap.m.Button({
      icon: "sap-icon://home",
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
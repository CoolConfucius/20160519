var that; 
var obj = {};
var data = []; 
var currentpage = 1; 
for (var i = 0; i < 100; i++) {
  data.push(i.toString()); 
};
// ajax

obj = {
  pagesint: 1,
  all: data
}
var datacursor = 0; 
var page = 1; 
while (datacursor < data.length){
  obj[page.toString()] = [];
  // 100 instead of 10 for records
  for (var i = 0; i < 10; i++) {
    if (datacursor < data.length) {   
      obj[page.toString()].push(data[datacursor]);
      datacursor++; 
    };
  };
  page++; 
}
obj.pagesint = page - 1; 

sap.ui.controller("project.views.project_main", {
  
  //bus : sap.ui.getCore().getEventBus(),




  onInit: function() {
    console.log("on init main controller");
    this.app = sap.ui.getCore().byId("project-app");
    this.list.attachItemPress(this.listSelection, this);
    this.fetchdata(); 
  },

  // _handleRouteMatched:function(evt){
  //   if ("project_main") {};
  // }

  onAfterRendering: function() {

  }, 

  dataarray:[],
  tablearray:[],
  olistModel: new sap.ui.model.json.JSONModel(),
  otableModel: new sap.ui.model.json.JSONModel(),

  fetchdata: function() {
    var that = this; 
    var url = "http://localhost:3000/example.json"
    $.ajax({
      url: url,
      type: "GET",
      cache: false, 
      dataType: "json",
      success: function(data) {
        
        that.dataarray = data; 
        console.log(that.dataarray);
        
        
        // for (var i = 0; i < data.length; i++) {
        //   var itemContainer = new sap.m.VBox();
        //   var name = new sap.m.Label({
        //     text: data[i].name
        //   })
        //   var email = new sap.m.Label({
        //     text: data[i].email
        //   })

        //   itemContainer.addItem(name);
        //   itemContainer.addItem(email);

        //   var $item = new sap.m.CustomListItem({
        //     content: itemContainer
        //   })
        //   that.list.addItem($item); 
        // };
        that.olistModel.setData(that.dataarray);
        // that.otableModel.setData(that.dataarray);
        that.list.setModel(that.olistModel);

      }, 
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        sap.m.MessageToast.show("Error: "+XMLHttpRequest.responseText);
      }
    })
  },

  display: function() {
    this.contentTable.removeAllColumns(); 
 
    for (var i = 0; i < obj[currentpage.toString()].length; i++) {

      var $item = new sap.m.Column({
        hAlign : "Center",
        header : new sap.m.Label({
          text: obj[currentpage.toString()][i].toString()
        })
      });

      this.contentTable.addColumn($item); 
    };
  },

  paginationrender: function(){
    for (var i = 1; i <= obj.pagesint; i++) {
      var $page = new sap.m.Button({
        text: i.toString(),
        press: this.pageclick
      });
    
      this.paginationHeader.addContentLeft($page);
    };
    this.display(); 
  },

  pageclick: function() {
    var btnnum = this.getText(); 
    // if (btnnum === "1") {
    //   console.log("First page");
    // };
    // if (btnnum === obj.pagesint.toString()) {
    //   console.log("Last page");
    // };
    currentpage = btnnum; 
    console.log(currentpage); 
    // this.oParent.display(); 
    // that.display(); 
    // console.log(this.oParent);
  },

  selectFirstItem: function(event) {
    var item = this.list.getItems()[0];
    this.list.setSelectedItem(item, true);
    this.setTableArray(item);
    
  },

  listSelection: function(event) {
    var item = event.getParameter("listItem");
    this.setTableArray(item);
  },

  setTableArray: function(item) {
    this.tablearray = [];
    var context = item.getBindingContext();
    this.tablearray.push(context.getObject())
    this.otableModel.setData(this.tablearray);
    this.table.setModel(this.otableModel);
  }
})
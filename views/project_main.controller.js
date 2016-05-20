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
    // this.paginationrender();
    // console.log(obj);
    that = this; 
    this.fetchdata(); 
  },

  // _handleRouteMatched:function(evt){
  //   if ("project_main") {};
  // }

  onAfterRendering: function() {

  }, 

  dataarray:[],
  olistModel: new sap.ui.model.json.JSONModel(),

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
        var name = new sap.m.Label({
          text: data[0].name
        })
        var email = new sap.m.Label({
          text: data[0].email
        })
        var $item = new sap.m.CustomListItem({
          content: [name, email]
        })
        that.list.addItem($item); 
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
    that.display(); 
    console.log(this.oParent);
  }
})
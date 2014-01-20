var ewSlideManager = ewSlideManager || {};

ewActivityManager = {
    
    init: function() {
          
    },
    
    renderJson: function() {
        
    } 
    
}


ewActivityManager.slideManager = {
    
    jsonObj: {},
    itemIndex: 0,
    counter: 0,
    
    init: function(obj) {
        activityContainerObj = $("#activityContainer");
        screenWidth = $(activityContainerObj).width();
        screenHeight = $(activityContainerObj).height();
        this.jsonObj.width = this.screenWidth;
        this.jsonObj.height = this.screenHeight;
    },
    
    renderNewSlideToUI: function() {
        var html = [], htmlStr = "";
        
        this.addNewSlideToObject();
        
        html.push('<li id="slide_' + this.itemIndex +'" class="slideItem ui-state-default">');
        html.push(' <span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item_' + this.itemIndex);
        html.push('</li>');
        htmlStr = html.join("\n");

        $("#slideContainer ul").append(htmlStr);
        
    },
    
    addNewSlideToObject: function() {
        var item = {};

        this.counter = this.counter + 1;
        this.itemIndex = this.counter;
        item.slideId = this.itemIndex;
        item.orderId = this.itemIndex;
        item.slideName = "slide_" + this.itemIndex;     
        this.jsonObj[item.slideName] = item;  
        console.log(JSON.stringify(this.jsonObj));
    },
    
    doOrderList: function() {
        var jsonObj = this.jsonObj

        $("#slideContainer ul li").each(function(i) {            
            var name = $(this).attr("id");
            jsonObj[name].orderId = i+1; 
        })
        
        this.jsonObj = jsonObj;
    },
    
    sortList: function() {       
        var sortedJson = {}, sortable = [];
        
        for (var item in this.jsonObj) {
            sortable.push([item, this.jsonObj[item]]);
        }
        
        sortable.sort(function(a, b) {
            return a[1].orderId - b[1].orderId;
        });
        
        for (var obj in sortable){
            sortedJson[sortable[obj][0]] = sortable[obj][1];
        }
        
        return sortedJson;          
    },
    
    renderJson: function() {
        activityContainerObj = $("#activityContainer");
        screenWidth = $(activityContainerObj).width();
        screenHeight = $(activityContainerObj).height();
        this.jsonObj.width = screenWidth;
        this.jsonObj.height = screenHeight;
        this.jsonObj = this.sortList();
        $("#jsonStr").html(JSON.stringify(this.jsonObj));    
    }
    
}


$(document).ready(function() {
    ewActivityManager.slideManager.init();
    $( "#sortable" ).sortable({
        placeholder: "slideContainer",
        stop: function(event, ui) { 
            ewActivityManager.slideManager.doOrderList();        
        }
    });
    
})

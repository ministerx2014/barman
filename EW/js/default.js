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
        this.slideId = obj.slideId;
        
        
    },
    
    renderNewSlideToUI: function() {
        var html = [], htmlStr = "";
        
        this.addNewSlideToObject();
        
        html.push('<li id="item_' + this.itemIndex +'" class="slideItem ui-state-default">');
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
        item.slideName = "item_" + this.itemIndex;
        
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
        console.log("orderd List--> ", this.jsonObj);
    },
    
    sortList: function() {
        
        /* TODO: Convert this code into my objects...
         * 
        
        var maxSpeed = {car:300, bike:60, motorbike:200, airplane:1000,
                    helicopter:400, rocket:8*60*60}
                var sortable = [];
                for (var vehicle in maxSpeed)
                      sortable.push([vehicle, maxSpeed[vehicle]])
                sortable.sort(function(a, b) {return a[1] - b[1]})*/
          
    },
    
    renderJson: function() {
        
    }
    
}



/*
ewActivityManager.views.slideManager = {
    init: function() {
        
    },
    
    renderNewSlide: function() {
        
    },
    
}*/



$(document).ready(function() {
    $( "#sortable" ).sortable({
        placeholder: "slideContainer",
        stop: function(event, ui) { 
            ewActivityManager.slideManager.doOrderList();        
        }
    });
    
})

var ewSlideManager = ewSlideManager || {};

ewActivityManager = {
    
    init: function() {
          
    },
    
    renderJson: function() {
        
    } 
    
}


ewActivityManager.slideManager = {
    jsonObj: [],
    itemIndex: 0,
    
    init: function(obj) {
        this.slideId = obj.slideId;
        
        
    },
    
    renderNewSlideToUI: function() {
        
        this.addNewSlideToObject();
        
        var html = [];
        html.push('<li id="item_' + this.itemIndex +'" class="slideItem ui-state-default">');
        html.push(' <span class="ui-icon ui-icon-arrowthick-2-n-s"></span>Item_' + this.itemIndex);
        html.push('</li>');
        var htmlStr = html.join("\n");
        $("#slideContainer ul").append(htmlStr);
        
    },
    
    addNewSlideToObject: function() {
        var item = {};
        this.itemIndex = this.jsonObj.length + 1;
        item.slideId = this.itemIndex;
        item.orderId = this.itemIndex;
        item.slideName = "item_" + this.itemIndex;
        this.jsonObj.push(item);  
        console.log(JSON.stringify(this.jsonObj));
    },
    
    sortList: function() {
        $("#slideContainer ul li").each(function() {
            console.log($(this).attr("id"));
            var name = $(this).attr("id");
            // TODO : ADD LOOP FOR SORT.
            // this.jsonObj.each(function () {
                // console.log("1-> ", name);
                // console.log("2-> ", this);
                // // if (this.== name) {
// //                         
                // // }
             // });     
        })
        

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
        out: function(event, ui) { 
            ewActivityManager.slideManager.sortList();        
        }
    });
    
})

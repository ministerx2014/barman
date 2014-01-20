var events = events || {};

events = {
    showSubMenu: function(obj){
        
        var subMenuId = $(obj).attr("subMenuId");
        $(".subCategory").hide();
        console.log($("#" + subMenuId + "_category"));
        console.log(subMenuId);
        $("#" + subMenuId + "_category").show();
    }
}



$(document).ready(function() {
     $("#mainList li").bind("click", function(){
        events.showSubMenu(this);
     });
})

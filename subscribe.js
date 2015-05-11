$(function(){
    
    function dayClick() {
        if ($("#name").val() == "") {
            $("#error").fadeIn();

            return;
            
        } 
        else if ($("#email").val() == "") {
            $("#error").fadeIn();
            return;
        } 
        
        $("#error").hide();
        
                
        var name= $("#name").val();
        $(".name").html(name);
        
        var email= $("#email").val();
        $(".email").html(email);
                 
        $("#result").fadeIn();  
    }

    $("#result").hide();
    $("#error").hide();
    $("#dayCTA").click(dayClick);

});




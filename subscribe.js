$(function(){
    
    $("#result").hide();
function myFunction() {
            $.ajax(
                {
                    url: "data.json",
                    cache:false,
                    success: function(data){
                    $("#result").show();                
                    }
                }
                
            );
     
};

    
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

    $("#error").hide();
    $("#dayCTA").click(dayClick);

});








$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#btn-back-to-top').fadeIn(); 
        } else { 
            $('#btn-back-to-top').fadeOut(); 
        } 
    }); 
    $('#btn-back-to-top').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});
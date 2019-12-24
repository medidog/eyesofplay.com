//run instantly and then goes after (setTimeout interval)

$("html, body").animate({ scrollTop: $(document).height() }, 8000);

setTimeout(function() {
           $('html, body').animate({scrollTop:0}, 8000);
           },8000);


setInterval(function(){
            // 4000 - it will take 4 secound in total from the top of the page to the bottom
            $("html, body").animate({ scrollTop: $(document).height() }, 8000);
            setTimeout(function() {
                       $('html, body').animate({scrollTop:0}, 8000);
                       },8000);
            
            },8000);


$('html, body').mouseover(function(e) {
                          $(this).stop(true);
                          
                          }).mouseout(function() {
                                      $(this).stop(false);
                                      });


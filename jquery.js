$(document).ready(function() {


    $('p#b').each(function() {
        var word = $(this);
        word.html(word.html().replace(/^(\w+)/, '<strong>$1</strong>'));
    })

//################################################################################

    $("p#clicker").click(function() {
        $(this).text('This is a click event!');
    });

    $("p").dblclick(function() {
        $(this).text("This is a double-click event!");
    });

 //################################################################################
 
 	$("div").on( "click", "button", function( event ) {  
  		$(event.delegateTarget ).css( "background-color", "green");  		 
	});
 	
});

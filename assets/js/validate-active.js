/*
 _____      						 _______ 	     
|  __ \  							|_ _ _ _| _  	 	    
| |__) | 					     _	   | |	 | |	        
|  ___/    ___    __ _    __ _  | |    | |	 | |__     ___ 	 _ __  _ __    ___ 
| |\ \    / _ \  / _` |  / _` | | |    | |	 | '_ \   / _ \ | '_ \| '_ \  / _ \
| | \ \  |  __/ | (_| | | (_| | | |    | |	 | | | | |  __/ | |  ||  | | |  __/
|_|  \ \  \___|  \__, |  \__,_| |_|    |_|   |_| |_|  \___| |_|  ||  |_|  \___|
                  __/ |              
                 |___/  		     
================================================================================ */

(function ($) {
 "use strict";	
	/*
	CONTACT FORM VALIDATIONS SETTINGS
	========================================*/
	var CTForm = $('#contact_form');
    CTForm.validate({
        onfocusout: false,
        onkeyup: false,
        rules: {
            name: "required",
            email: {
                required: true,
                email: true
            }
        },
        errorPlacement: function(error, element) {
            error.insertBefore(element);
        },
        messages: {
            name: "What's your name?",
            email: {
                required: "What's your email?",
                email: "Please, enter a valid email"
            }
        },
					
        highlight: function(element) {
            $(element)
            .text('').addClass('error')
        },                    
					
        success: function(element) {
            element
            .text('').addClass('valid')
        }
    });   

	/*
	CONTACT FORM SCRIPT
	========================================*/
 	var CTSubmit = $('#contact_submit');
    CTForm.submit(function() {
        // submit the form
        if($(this).valid()){
           CTSubmit.button('loading'); 
            var action = $(this).attr('action');
            $.ajax({
                url: action,
                type: 'POST',
                data: {
                    contactname: $('#contact_name').val(),
                    contactemail: $('#contact_email').val(),
                    contactmessage: $('#contact_message').val()
                },
                success: function() {
                   CTSubmit.button('reset');
                   CTSubmit.button('complete');
                },
                error: function() {
					CTSubmit.button('reset');
					CTSubmit.button('error');
                }
            });
        // return false to prevent normal browser submit and page navigation 
        } else {
            CTSubmit.button('reset')
        }
        return false; 
    });
	
})(jQuery);
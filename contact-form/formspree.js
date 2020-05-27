
var widgetId1;
var onloadCallback = function() {
    widgetId1 = grecaptcha.render('captcha-link', {
      'sitekey' : '6LcFUiQTAAAAADYbup3IUSChZkwj8Tz4Q0wbB6r6',
      'callback' : recaptchaCallbackLink,
      'theme' : 'light'
    });
};
function recaptchaCallbackLink() {
    $('#submitBtnLink').removeAttr('disabled');
};

(function($) {
        
        $('#someForm').on('submit', function(e) {
        e.preventDefault();

        //get the name field value
        var email = $('#email').val();
        //get the message
        var message = $('#message').val();
            
        var captch = $('#g-recaptcha-response').val();
            
        $('#loader').show();

        //send to formspree
        $.ajax({
            url:'https://formspree.io/9344215662.hu7k4@zapiermail.com',
            method:'POST',
            data:{
                name:name,
                _replyto:email,
                email:email,
                message:message,
                _subject:'My Form Submission',
                captch:captch,
            },
            dataType:"json",
            success:function() {
                console.log('success'); 
                $('#formBlock, #captcha-link, #loader').hide();
                $('#thankyouBlock').show();
            }

        });

    });

})(jQuery);

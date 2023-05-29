$(window).on('load', function() {
  $('.message').children('p').text('ITS-I').delay(600).fadeOut(300, function() {
    $(this).text('Image-2-Text').show().delay(500).fadeOut(300, function() {
      $(this).text('Text-2-Sound').show().delay(500).fadeOut(300, function() {
  	    $(this).text('Translating into').show().delay(500).fadeOut(300, function() {
            $(this).text('Seonsory Language').show().delay(1000).fadeOut(600, function() {
          		$(this).parent().fadeOut(800, function() {
            	   	setTimeout(function() {
              			 $('.button').removeAttr('disabled');
           			  }, 800);
              });
            });
          });
        });
      });
    });
});

const el = document.getElementById('folder');

setTimeout(function() {
  el.style.visibility = 'visible';
}, 3800);
/* Start with document ready */
$(document).ready(function() {
    /* Add sound */
var hadoukenSound = false;
function playHadouken () {
  hadoukenSound = !hadoukenSound;
  if (hadoukenSound) {
    $('#hadouken-sound')[0].volume = 0.5;
    $('#hadouken-sound')[0].load();
    $('#hadouken-sound')[0].play();
  }
}
var coolSound = false;
function playCool () {
  coolSound = !coolSound;
  if (coolSound) {
    /*$('#cool')[0].load();*/
    $('#cool')[0].play();
  }
}

/* On page load show Ryu Still, hide everything else */
$('.ryu-action').hide(); //(this line means hide all 4 divs)
/* is replacing ...
$('.ryu-ready').hide();
$('.ryu-throwing').hide();
$('.ryu-cool').hide();
*/
$('.ryu-still').show();
/* On mouse enter move to Ryu Ready, hide everything else */
    $('.ryu').mouseenter(function() {
				    $('.ryu-action').hide(); //(this line means hide all 4 divs)
				    $('.ryu-ready').show();
				  });
/* On mouse leave go back to Ryu Still */
    	$('.ryu').mouseleave(function() {
				    $('.ryu-action').hide(); //(this line means hide all 4 divs)
				    $('.ryu-still').show();
				  });
/* On mouse click on Ryu make Ryu Throw and Hadouken */
    $('.ryu').mousedown(function() {
				    $('.ryu-action').hide();  //(this line means hide all 4 divs) 
				    $('.ryu-throwing').show();
                    playHadouken();
                    $('.hadouken').finish().show()
                            .animate(
                            {'left': '1020px'},
                            500,
                            function() {
                              $(this).stop();
                              $(this).hide();
                              $(this).css('left', '520px');
                            }
                            );
				  });
/* On mouse unclick go back to Ryu Still */
    $('.ryu').mouseup(function() {
				    $('.ryu-action').hide(); //(this line means hide all 4 divs)
				    $('.ryu-still').show();
				  });
		
/* On keypress X -- go to Ryu Cool */
    $(document).keydown(function(key) {
					//console.log(key);
				    if (key.keyCode == 88) {
				      $('.ryu-action').hide(); //(this line means hide all 4 divs)
				      $('.ryu-cool').show();
                        playCool();
				    }   
				  });
		
/* On keyunpress - go back to Ryu Still */
    $(document).keyup(function(key) {
				    if (key.keyCode == 88) {
				      $('.ryu-action').hide(); //(this line means hide all 4 divs)
				      $('.ryu-still').show();
                      $('#cool')[0].pause();
                      $('#cool')[0].load();
				    }
				  });
//close document ready    
});

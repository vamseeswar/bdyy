function resetAll() {
    // Pause and reset the song
    $('.song')[0].pause();
    $('.song')[0].currentTime = 0;

    // Animate balloon disappearance before resetting
    $('.balloons').animate({ top: '+=1000', opacity: 0 }, 1000, function () {
        $(this).removeClass().addClass('balloons').css({ top: '', opacity: '' });
    });

    // Hide and reset cake and flames with fade effects
    $('.fuego').fadeOut(800);
    $('.cake').fadeOut(800);
    $('.message').fadeOut(800);

    // Reset bannar animation
    $('.bannar').removeClass('bannar-come').fadeOut(500, function () {
        $(this).show(); // Ensure it's visible when animation is retriggered
    });

    // Reset bulbs with glowing effects reversed
    $('#bulb_yellow,#bulb_red,#bulb_blue,#bulb_green,#bulb_pink,#bulb_orange')
      .fadeOut(300, function () {
          $(this).removeClass().addClass('bulb').fadeIn(300);
      });

    // Reset background and theme
    $('body')
      .removeClass('peach peach-after')
      .animate({ backgroundColor: '#ffffff' }, 800); // animate if jQuery UI is present

    // Restore initial button state with delays and animations
    $('#turn_on').delay(1000).fadeIn('slow');
    $('#play, #bannar_coming, #balloons_flying, #cake_fadein, #light_candle, #wish_message, #story')
        .fadeOut(600);

    // Revert balloon IDs and smoothly reset their positions
    $('#b11').attr('id', 'b1').css({ top: '', left: '', right: '', bottom: '', opacity: '' });
    $('#b22').attr('id', 'b2').css({ top: '', left: '', right: '', bottom: '', opacity: '' });
    $('#b33').attr('id', 'b3').css({ top: '', left: '', right: '', bottom: '', opacity: '' });
    $('#b44').attr('id', 'b4').css({ top: '', left: '', right: '', bottom: '', opacity: '' });
    $('#b55').attr('id', 'b5').css({ top: '', left: '', right: '', bottom: '', opacity: '' });
    $('#b66').attr('id', 'b6').css({ top: '', left: '', right: '', bottom: '', opacity: '' });
    $('#b77').attr('id', 'b7').css({ top: '', left: '', right: '', bottom: '', opacity: '' });
    $('#b88').attr('id', 'b8').css({ top: '', left: '', right: '', bottom: '', opacity: '' });

    // Hide message text with staggered animation
    $('.message p').each(function (index) {
        $(this).delay(index * 50).fadeOut(300);
    });

    // Optional: show a subtle reset flash
    $('body').append('<div id="resetFlash"></div>');
    $('#resetFlash')
        .css({
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: '#fff',
            opacity: 0
        })
        .animate({ opacity: 0.6 }, 300)
        .delay(200)
        .animate({ opacity: 0 }, 500, function () {
            $(this).remove();
        });
}

/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#cccccc',
    lineColor: '#cccccc'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
$(document).ready(function() {
  console.log("hello world");


  $('#secretBox').css(
    'background-color',
    'white'
  ).html('<h1>SECRET BOX</h1>');

  $('#row1').children().addClass('.boxType3');

  $('#row4').children().last().hide();

  // $('.boxType1').css('background-color', 'white');

  $('#row2').children().slice(0, 2).removeAttr('class');

  // $('div:not([class=row], [id=secretBox])').css('width', '2px');

  $('#container').on('click', function(event) {
    console.log("pageX: " + event.pageX + ", pageY: " + event.pageY);
  });

  // $('.boxType1').html('<a href="http://www.galvanize.com/phoenix">Galvanize</a>').on('click', function() {
  //   alert("you will never leave this page");
  //   event.preventDefault();
  var boxy = $('.box');
  boxy.click(function() {
    $(this).css('background-image', 'url(' + "http://ghk.h-cdn.co/assets/16/09/980x490/landscape-1457107485-gettyimages-512366437.jpg" + ')',
      'width', '50px', 'height', '50px');
  });
  $(document).click(function(e) {

  })
});

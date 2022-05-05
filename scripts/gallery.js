var start = 0;
var nb = 60;
var end = start + nb;
var length = $('.grid img, .top, .item').length;
var list = $('.grid img, .top, .item');

list.hide().filter(':lt('+(end)+')').show();


$('.prev, .next').click(function(e){
  e.preventDefault();

  if (($(this).hasClass('prev') && start > 0) || ($(this).hasClass('next') && end < length))
  {

    if( $(this).hasClass('prev') ){
      start -= nb;
    } else {
      start += nb;
    }

    end = start + nb;

    
  }

  if( start == 0 ) list.hide().filter(':lt('+(end)+')').show();
  else list.hide().filter(':lt('+(end)+'):gt('+(start-1)+')').show();

  $(".grid").colcade("destroy").colcade({
      columns: '.grid-col',
      items: '.grid-item, item bottom bottom3'
  });
});

window.onload = function () {
  $('.grid').colcade({
      columns: '.grid-col',
      items: '.grid-item, .item bottom bottom3'
  });
}
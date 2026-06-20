$('button').on('mouseover',function() {
  $(this).css({
    top: (Math.random()*10)+'%',
    left: (Math.random()*10)+'%' 
  });
});
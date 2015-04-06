$(document).ready(function(){
      $('div.bar-1').mousemove(function(e){
            var y = e.pageY;
            $('.moveAble').css('top', y-20);
      });
    });
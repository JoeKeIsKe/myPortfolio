$(document).ready(function(){
  
  //create scroll animation
  $('a.page-scroll').on('click',function(e){
    e.preventDefault();
   var $anchor=$(this);
    $('html,body').stop().animate({
      scrollTop:$($anchor.attr('href')).offset().top-30}, 1500, 'easeInOutExpo');
    
  });
  
  //add a scrollspy by JS
  var $window=$(window);
  $window.on('scroll',function(){
    var currentTop=$window.scrollTop();
    var $els=$('.scrollspy');
    
    $els.each(function(index){
      //adjust the height
      var elTop=$(this).offset().top-32;
      var elBottom=elTop+$(this).height();
      
      if(currentTop>=elTop && currentTop<elBottom){
       var id=$(this).attr('id');
        var $as=$('a[href="#'+id+'"]');
        $as.parent().addClass('on').siblings().removeClass('on');
      }
    });
  });
  
  
  
  
  });
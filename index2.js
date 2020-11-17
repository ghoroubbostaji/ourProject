

$(".mission").hover(function(){  $(this).fadeOut("slow").fadeIn("slow");
}).mouseleave(function(){
$(".mission").finish().fadeIn();});
  var cardh = $(".card").height();

$(".card").hover(function(){
$(this).addClass("shadow-lg p-3 bg-white rounded");
  $(".card").animate({
   height: cardh,
   // width: '150px'
 });
}).mouseleave(function(){
  $(this).removeClass("shadow-lg p-3 bg-white rounded");
    // $(this).animate({
    //     height: cardh
    // });
});

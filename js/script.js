//=require jquery
//=require jquery_ujs
//=require ./waypoints.min
//=require ./jquery.tweet.js
//=require_self



//--SCROLLING


//--POSITION IPHONE SCREENS

$(function(){
  //--VARIABLES
  var speed=0.7;
  var height_diff=-190; //negative number is higher up the page
  var bottom_thresh=3855;
  var iphone_top, $iphone,$ff1,$ff2,$ff3,$ff4,$ff5,$ib1,$ib2,$ib3,$ib4,$tweets,$onscreen;
  var count=5;
  var wait=1000;
  $onscreen=$('#onscreen');
  var current_scroll=window.scrollY||document.documentElement.scrollTop;
	$onscreen.css("top",-current_scroll+"px");
	//feature foregrounds
	$ff1=$('#feature_foreground_1');
	$ff2=$('#feature_foreground_2');
	$ff3=$('#feature_foreground_3');
	$ff4=$('#feature_foreground_4');
	$ff5=$('#feature_foreground_5');
	//iphone foregrounds
	$if1=$('#app_screen_1');
	$if2=$('#app_screen_2');
	$if3=$('#app_screen_3');
	$if4=$('#app_screen_4');
	$iphone=$('#iphone_area');
	$tweets=$('#tweets');
	
	
	function scrolling(){
    var screen_pos;
    current_scroll=window.scrollY||document.documentElement.scrollTop;
    
  
      if(current_scroll<bottom_thresh){
        screen_pos=current_scroll*speed;
        $onscreen.css("top",-screen_pos+"px");
        $iphone.css({"position":"","top":""});
        iphone_top=null;
    }//if within the threshold
    else{
      if(iphone_top===null)
        iphone_top=bottom_thresh;//$("#iphone").offset().top;
        screen_pos=(bottom_thresh)*speed;
        $onscreen.css("top",-screen_pos+"px");
        $iphone.css({"position":"absolute","top":iphone_top+"px"});

    }//else
  }// function scrolling
	
	function placeOnScreen(){ 
    
    if(window.scrollY>=bottom_thresh) scrolling();
		var background_top1=$ff1.offset().top;
		background_top1+=height_diff;
		background_top1*=speed;
		$if1.css("top",background_top1+"px");
  
    var background_top2=$ff2.offset().top;
		background_top2+=height_diff;
		background_top2*=speed;
		$if2.css("top",background_top2+"px");
	
		var background_top3=$ff3.offset().top;
		background_top3+=height_diff;
		background_top3*=speed;
		$if3.css("top",background_top3+"px");
  
  
    var background_top4=$ff4.offset().top;
		background_top4+=height_diff-0;
		background_top4*=speed;
		$if4.css("top",background_top4+"px");
		
		var background_top5=$ff5.offset().top;
		background_top5+=height_diff;
		bottom_thresh=background_top5;
		background_top5*=speed;
		$tweets.css("top",background_top5+"px");
	
	

  	
		}//function placeOnScreen
		
	setInterval(placeOnScreen,wait);
  		
  setTimeout(function(){$('.app_screen').show()},wait)
		
	window.onscroll = scrolling;


});

$(function(){
  var scrollUp=function(){
    $('html').animate({scrollTop : 0},2000);
    $('body').animate({scrollTop : 0},2000);
    return false;
  }
  $('#go').click(scrollUp);
  $('#signup_form_footer').click(scrollUp);
  
});

//--WAYPOINTS
/*
$(function(){
  $('.feature_image').waypoint(function(event, direction) {
    if(direction==='down'){
      $(this).siblings('.feature_text').fadeIn();
    }//if
  },{offset:250,triggerOnce:true,onlyOnScroll:true});
  
});
*/
//--TWITTER

$(function(){
  
  $("#tweets").tweet({
              username: "secondmenu",
              join_text: "auto",
              avatar_size: 20,
              count: 3,
              auto_join_text_default: "", 
              auto_join_text_ed: "",
              auto_join_text_ing: "",
              auto_join_text_url: "",
              auto_join_text_reply: "We replied to",
              loading_text: "loading tweets...",
              template:"{avatar}{join}{text}{time}"
          });
  
  
});


//--OLD FORM FUNCTIONS
/*$(function(){
  
  //$('#sign_up').find('input').hide();
  
	$('form').submit(function() {
		$this=$(this)
		var url = this.action;
		var data=$this.serialize();
		$this.find("input[type='submit']").attr('disabled','disabled').hide();
		$("#spinner").show();
	  $.ajax({
	      beforeSend      : function(request) { request.setRequestHeader("Accept", "text/javascript"); },
	      type : 'POST',
				data: data,
	      url : url
	
	  }); 
	  return false;
	});
	
});*/





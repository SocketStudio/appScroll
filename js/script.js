//=require jquery
//=require jquery_ujs
//=require ./waypoints.min
//=require ./jquery.tweet.js
//=require_self



//--SCROLLING


//--POSITION IPHONE SCREENS

var scroller={};

scroller.init=function(){
	this.speed=0.6;
	this.height_diff=-100; //negative number is higher up the page
	this.count=5;
	this.wait=1000;
	this.$onscreen=$('#onscreen');
	var current_scroll=window.scrollY||document.documentElement.scrollTop;

	this.$iphone=$('#iphone');
	this.$tweets=$('#tweets');
	this.$features=$(".feature");
	this.bottom_thresh = $(this.$features[this.$features.length-1]).offset().top;

	this.$onscreen.css("top",-current_scroll+"px");
}

scroller.scrolling=function(){
	var screen_pos, iphone_top, current_scroll=window.scrollY||document.documentElement.scrollTop;
	if(current_scroll<scroller.bottom_thresh){
		screen_pos=current_scroll*scroller.speed;
		scroller.$onscreen.css("top",-screen_pos+"px");
		scroller.$iphone.css({"position":"","top":""});
		scoller.iphone_top=null;
	}//if within the threshold
	else{
		if(scroller.iphone_top===null)
		scroller.iphone_top=this.bottom_thresh;//$("#iphone").offset().top;
		screen_pos=(this.bottom_thresh)*this.speed;
		scroller.$onscreen.css("top",-screen_pos+"px");
		scroller.$iphone.css({"position":"absolute","top":scroller.iphone_top+"px"});
	}//else
  }//scrolling

scroller.placeOnScreen=function(){ 
    
    if(window.scrollY>=scroller.bottom_thresh) scroller.scrolling();
    
    scroller.$features.each(function(i){
    	var $this=$(this), top=$this.offset().top
    	top+=scroller.height_diff;
    	top*=scroller.speed;
    	$app_screen=$this.parents('.container')
    					.children('.app_screen')
    					.css("top",top+"px")
    					.remove()
    					.appendTo(scroller.$onscreen); 

    });

    $('.app_screen').fadeIn(2000);

  	
}//function placeOnScreen

$(function(){
  //--VARIABLES

	
	scroller.init();
	scroller.placeOnScreen();
	window.onscroll = scroller.scrolling;

	

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





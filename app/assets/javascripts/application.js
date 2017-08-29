// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require_tree .

$(document).ready(function() {

	// display contact info
	$("#contact").mouseover(function(){
        $("#contactbox").css("display", "inline-block");
    });
	$("#contact").mouseout(function(){
        $("#contactbox").css("display", "none");
    });
	// show resume

	$("#resume").click(function(){
	    $("#showresume").css("display", "inline-block");
		});

	$("#close").click(function(){
			$("#showresume").css("display", "none");
		});

	// change inner html of name
	$( "#name" ).hover(
  function() {
    $( this ).html("<p>A business-minded millennial with a solid foundation in HTML, CSS, JavaScript, and Ruby, and previous experience in sales and management.As well as an avid reader of motivational and self-development literature.</p>");
  }, function() {
    $( this ).html(
    "<h1>Hans-Sebastian Palacios</h1>\r\
		<h4><strong>Web Developer & Designer</strong></h4>");
  }
);
	
	// circle formatting and display of skills, interests, and links
	$(".container").each(function(index) {
		var circle_element = $('.field'),
		    fields = $(this).find(circle_element),
	      fields_total = fields.length,
	      radius = 80,
	      container = $(this),
		    container_width = container.width(),
		    container_height = container.height(),
		    angle = 0,
		    step = (2*Math.PI) / fields_total;
		 fields.each(function() {
		    var x = Math.round(container_width/2 + radius * Math.cos(angle) - $(this).width()/2);
		    var y = Math.round(container_height/2 + radius * Math.sin(angle) - $(this).height()/2);
		    if(window.console) {
		        console.log($(this).text(), x, y);
		    }
		    $(this).css({
		        left: x + 'px',
		        top: y + 'px'
		    });
		    angle += step;
		});
		container.mouseover(function(){
        fields.addClass("active");
    });
    container.mouseout(function(){
        fields.removeClass("active");
    });
    
	});
});
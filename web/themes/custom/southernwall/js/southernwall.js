jQuery(document).ready(function(e){
	ismobile();
  //Hide carousel thumbnails from flexslider if only one slide
  var slides = jQuery('.optionset-flexslider-carousel ul.slides > li')
  if(slides.length <= 1){
    slides.parents('.flexslider-carousel').css("display","none");
  }
  //Entire Project/services card module clickable

	var exposedFormControlLabels = jQuery('.views-exposed-form .control-label');
	var widestFormControlLabel = 0;
	for (var i = 0; i < exposedFormControlLabels.length; i++) {
		var labelWidth = exposedFormControlLabels.eq(i).innerWidth();
		if(labelWidth > widestFormControlLabel) {
			widestFormControlLabel = labelWidth;
		}
	}
	exposedFormControlLabels.each(function() {
		jQuery(this).innerWidth(widestFormControlLabel + 'px');
	})

  jQuery('.featured-views-display .view-content .row > .col .views-field:not(.views-field-nothing,.no-link-wrapper)').on('click', function(){
    var location = jQuery(this).parent().find('.featured-view-title a').attr('href');
    window.location.href = location;
  });

});

jQuery(window).resize(function(e){
	ismobile();
});

jQuery(window).scroll(function() {
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 10) {
           jQuery("header").addClass("stickyheader");
    }else{
		 jQuery("header").removeClass("stickyheader");
	}
});




function ismobile(){
if ( jQuery(window).width() > 739) {
  jQuery('body').removeClass('ismobile');

  jQuery('.dropdown-toggle').click(function() {
    var location = jQuery(this).attr('href');
    window.location.href = location;
    return false;
  });
}
else {
	jQuery('body').addClass('ismobile');
	var clicks=0;
	jQuery(document).on("click",".dropdown-toggle",function(){
		if(++clicks==2){
			var location = jQuery(this).attr('href');
			window.location.href = location;
			return false;
		}
	});
}
}

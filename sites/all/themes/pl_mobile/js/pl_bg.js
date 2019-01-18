Drupal.behaviors.pl_bg = {
	attach: function (context, settings) {
		
		
		/*
		  Backstretch does not support slideshows out of the box (yet)
		  But, it's fairly easy to set one up.
		  Here is an example of how to use Backstretch as a slideshow.
		
		
		  var images = [
		      "http://dl.dropbox.com/u/515046/www/outside.jpg"
		    , "http://dl.dropbox.com/u/515046/www/garfield-interior.jpg"
		    , "http://dl.dropbox.com/u/515046/www/cheers.jpg"
		  ];*/
		
		  // A little script for preloading all of the images
		  // It"s not necessary, but generally a good idea
		  jQuery(images).each(function(){
		    jQuery("<img/>")[0].src = this; 
		  });
		
		  // The index variable will keep track of which image is currently showing
		  var index = 0;
		
		  // Call backstretch for the first time,
		  // In this case, I"m settings speed of 500ms for a fadeIn effect between images.
		  jQuery.backstretch(images[index], {speed: 1000});
		
		  // Set an interval that increments the index and sets the new image
		  // Note: The fadeIn speed set above will be inherited
		  var start_show = setInterval(function() {
		    nextImage();
		  }, 5000);
		  
		  function nextImage(){
		  	index = (index >= images.length - 1) ? 0 : index + 1;
		    jQuery.backstretch(images[index]);
		    
		    if(colors[index] == "dark"){
		    	jQuery('#main-header a').css('color', '#333');
		    }else{
		    	jQuery('#main-header a').css('color', '#fff');
		    }
		    
		  }
		  
		  //console.log( colors);
		  
		  jQuery('#backstretch img').click(function(){
		  	console.log("SdcsdF");
		  	clearInterval(start_show);
		  	nextImage();
		  	return false;
		  });
		
	}	
}


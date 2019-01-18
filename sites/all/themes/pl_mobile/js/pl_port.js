Drupal.behaviors.pl_port = {
	attach: function (context, settings) {
		
		var max_height;
		var max_width;
		var bottom_border = jQuery('#main-header').height() + 150;
		console.log(bottom_border)
		if(jQuery('.gallery-full').hasClass('controls-on')){
			bottom_border = 60;
		}
		
		// onResize
		jQuery(window).resize(set_image_size);
		
		function set_image_size(){
			max_height = jQuery(window).height() - (30 + bottom_border);
			if(max_height > 900){ max_height = 900;}
			
			max_width = jQuery('.gallery-full .images .item-list ul li').width();
			//console.log(max_width);
			
			jQuery('.gallery-full .images .item-list ul li img').css('max-height', max_height);
			
			
			jQuery('.gallery-full .images .item-list ul li img[alt="linked"]').each(function(index) {
				var w1 = jQuery(this).attr('iw') - 0;
				var w2 = jQuery('~ img', this).attr('iw') - 0 ;
				
				var x = max_width / (w1 + w2);
				
				var linked_height;
				
				if((w1 + w2) > max_width && (900 * x) - 25 < max_height){
					linked_height = (900 * x) - 25;
				}else{
					linked_height = max_height;
				}
				 
				
				jQuery(this).css('max-height', linked_height).css('margin-right', 20);
				jQuery('~ img', this).css('max-height', linked_height);
				
							
			});
			
			
			jQuery('#controls').css('top', max_height + 10);
		}
		
		// INIT
		
		var current_item = 0;
		var last_item;
		var start_show;
		var image_array = [];
		
		jQuery('.gallery-full .images .item-list ul li').each(function(index) {
			
			var sib = jQuery('+ li', this);
			if(jQuery('img', this).attr('alt') == 'linked'){
				jQuery(this).append(sib.html()).addClass('linked');
				jQuery(sib).remove();
			}
		
			image_array.push(index);
		
		
		
		});
		var total_items = jQuery('.gallery-full .images .item-list ul li').length;
				
		// Randomize
		if(jQuery('.gallery-full').hasClass('random-on')){
			
			//image_array = jQuery.shuffle(image_array);
			//console.log(image_array)
		}
		
		jQuery('.gallery-full .images .item-list ul li').each(function(index) {
		    jQuery(this).attr('ref', index).attr('id', 'image-' + image_array[index]);
		});
		
		jQuery('.gallery-full .thumbs .item-list ul li').each(function(index) {
		    jQuery(this).attr('ref', index).attr('rel', image_array[index]);
		});
		
		
		// Intro Gallery
		jQuery('.front .gallery-full.slideshow-on .item-list ul li#image-0').delay(2200).fadeIn(1000, function(){
			start_show = setInterval(function(){nextItem();}, 3000);
		});
		
		// Slideshow
		jQuery('.not-front .gallery-full.slideshow-on .item-list ul li#image-0').fadeIn(1000, function(){
			start_show = setInterval(function(){nextItem();}, 3000);
		});
		
		// No Slideshow
		jQuery('.not-front .gallery-full.slideshow-off .item-list ul li#image-0').fadeIn(1000);
		
		
		
		jQuery('.gallery-full .images .item-list ul li').click(function(){
			clearInterval(start_show);
			nextItem();
			return false;
		});
		
		function nextItem(){
			last_item = current_item;
			current_item++;
			if(current_item == total_items){
				current_item = 0;
			}
			fadeItems();
		}
		
		function lastItem(){
			last_item = current_item;
			current_item--;
			if(current_item == -1){
				current_item = total_items - 1;
			}
			fadeItems();
		}
		
		
		function selectItem(item_num){
			last_item = current_item;
			current_item = parseInt(item_num);
			setItemCount();
			setCaption();
			if(last_item != current_item){
				console.log(last_item)
				console.log(current_item)
				jQuery('#image-' + current_item).fadeIn(1000);
				jQuery('#image-' + last_item).fadeOut(0);
			}
		}
		
		function thumbClick(item_num){
			thumbClose();
			selectItem(item_num);
			
		}
		
		function thumbClose(){
			jQuery('.gallery-full .images').fadeIn(1000);
			jQuery('.gallery-full .thumbs').fadeOut(1000);
		}
		
		function thumbOpen(){
			jQuery('.gallery-full .images').fadeOut(1000);
			jQuery('.gallery-full .thumbs').fadeIn(1000);
		}
	
		function fadeItems(){
			setItemCount();
			setCaption();
			if(last_item != current_item){
				jQuery('#image-' + current_item).fadeIn(1000);
				jQuery('#image-' + last_item).fadeOut(1000);
			}
		}
		
		function setItemCount(){
			var item_count = (current_item + 1) + '/' + (total_items);
			jQuery('#item-count').html(item_count);
		}
		
		function setCaption(){
			var caption = jQuery('#image-' + current_item + ' img').attr('alt');
			
			jQuery('#caption').html(caption);
		}
		
		set_image_size();
		setItemCount();
		setCaption();
		
		// Set Controls
		jQuery('#last-item').click(function(){
			clearInterval(start_show);
			lastItem();
			return false;
		});
		jQuery('#next-item').click(function(){
			clearInterval(start_show);
			nextItem();
			return false;
		});
		
		jQuery('.gallery-full .thumbs li').click(function(){
			clearInterval(start_show);
			var item_num = jQuery(this).attr('rel');
			thumbClick(item_num);
			return false;
		});
		
		jQuery('#thumb-open').click(function(){
			clearInterval(start_show);
			thumbOpen();
			return false;
		});
		
		jQuery('img').mousedown(function(){return false});
				
		
	}	
}


jQuery.fn.shuffle = function() {
	    return this.each(function(){
	      var items = jQuery(this).children();
	      return (items.length)
	        ? jQuery(this).html(jQuery.shuffle(items))
	        : this;
	    });
	  }
	 
	  jQuery.shuffle = function(arr) {
	    for(
	      var j, x, i = arr.length; i;
	      j = parseInt(Math.random() * i),
	      x = arr[--i], arr[i] = arr[j], arr[j] = x
	    );
	    return arr;
	  }



		
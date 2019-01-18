Drupal.behaviors.pl_contact = {
	attach: function (context, settings) {
		
				
		// INIT
		
		var current_item = 0;
		var last_item;
		var start_show;
		var image_array = [];
		
		jQuery('#bio .images .item-list ul li').each(function(index) {
			image_array.push(index);
		});
		var total_items = jQuery('#bio .images .item-list ul li').length;
				
		
		jQuery('#bio .images .item-list ul li').each(function(index) {
		    jQuery(this).attr('ref', index).attr('id', 'image-' + image_array[index]);
		});
		
		jQuery('.gallery-full .thumbs .item-list ul li').each(function(index) {
		    jQuery(this).attr('ref', index).attr('rel', image_array[index]);
		});
		
		
		
		
		jQuery('#bio .images .item-list ul li').click(function(){
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
		
		
		function fadeItems(){
			setItemCount();
			setCaption();
			if(last_item != current_item){
				jQuery('#image-' + current_item).fadeIn(2000);
				jQuery('#image-' + last_item).fadeOut(2000);
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
		
	
		start_show = setInterval(function(){nextItem();}, 5000);
		
		jQuery('img').mousedown(function(){return false});
		
		
		jQuery('#show-clients').click(function(){
			showClients();
			return false;
		});
		
		jQuery('#hide-clients').click(function(){
			hideClients();
			return false;
		});
		
		function showClients(){
			jQuery('#clients').fadeIn(1000);
			jQuery('#bio .body').fadeOut(1000);
		}
		
		function hideClients(){
			jQuery('#clients').fadeOut(1000);
			jQuery('#bio .body').fadeIn(1000);
		}
		
				
		
	}	
}

	
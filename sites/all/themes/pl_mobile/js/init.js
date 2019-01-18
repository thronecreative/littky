Drupal.behaviors.init = {
	attach: function (context, settings) {
		
		//console.log('ASDASD');
		
		// Create the dropdown base
		jQuery("<select />").appendTo("#mobile-nav");
		
		// Create default option "Go to..."
		jQuery("<option />", {
		   "selected": "selected",
		   "value"   : "",
		   "text"    : "Go to..."
		}).appendTo("#mobile-nav select");
		
		// Populate dropdown with menu items
		jQuery("#main-header .block-menu a").each(function() {
		 var el = jQuery(this);
		 jQuery("<option />", {
		     "value"   : el.attr("href"),
		     "text"    : el.text()
		 }).appendTo("#mobile-nav select");
		});
		
		jQuery("#mobile-nav select").change(function() {
		  window.location = jQuery(this).find("option:selected").val();
		});
		
	}	
}

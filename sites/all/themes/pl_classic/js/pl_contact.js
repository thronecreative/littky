Drupal.behaviors.pl_contact = {
	attach: function (context, settings) {
		
				
		
		
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

	
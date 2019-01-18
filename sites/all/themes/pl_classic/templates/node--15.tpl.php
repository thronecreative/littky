<div class="contact-full">

	<div id="contacts"><?php print $contacts; ?></div>
	<div id="bio">
		<div class="body">
			<h2>About Pamela</h2>
			<?php print $bio; ?>
			<a id="show-clients" href="#"><< view partial client list</a>
		</div>
		
		<div id="clients">
			<h2>Clients</h2>
			<?php print  views_embed_view('clients', 'clients_block'); ?>
			<br />
			<a id="hide-clients" href="#"><< close client list</a>
		</div>
		
	</div>
	
	


</div>
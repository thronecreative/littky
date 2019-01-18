<div id="main-header" class="clearfix">
	<div id="logo"><a href="/">Pamela Littky</a></div>	
	<?php print render($page['header']); ?>
	<div id="mobile-nav"></div>
</div>
	
<div id="container" class="clearfix">
	<div id="container-inner">
		<?php if ($messages): ?>
			<div id="messages">
				<?php print $messages; ?>
			</div>
		<?php endif; ?>
		
			
		<?php if ($tabs): ?>
			<div class="tabs">
				<?php print render($tabs); ?>
			</div>
		<?php endif; ?>
		
	  
		<div id="main-content">
			<?php print render($page['content']); ?>
		</div>
	</div>
</div>





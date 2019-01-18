
<div class="video-full">
	<div class="vid">
	<?php 
		$settings = array('width' => 400, 'height' => 200);
		$output = video_embed_field_handle_vimeo($video_url, $settings); 
		print $output['#markup'];
	?>
	</div>
	<h2><?php print $title; ?></h2>
	<h3><?php print $vid_desc; ?></h3>
</div>

<!--
<div id="video-block">
<br /><br /><br />
<h2>Other Videos</h2>
<?php //print  views_embed_view('videos', 'video_block'); ?>
</div>
-->

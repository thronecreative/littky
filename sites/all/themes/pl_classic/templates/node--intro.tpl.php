<script type="">
	
	var image_string = "<?php print $images; ?>";
	var images = image_string.split("|");
	
	var color_string = "<?php print $colors; ?>";
	var colors = color_string.split("|");
</script>

<div id="image-loader"><?php print $intro_images; ?></div>
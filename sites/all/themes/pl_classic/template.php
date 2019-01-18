<?

/** 
 * @file
 * template.php for Copious Classic theme.
 * 
 * Implements preprocess and hook alter functions in this file.
 */
 
 
/**
 * Preprocess functions for page.tpl.php.
 */
function pl_classic_preprocess_page(&$vars){
	
}
 

/**
 * Preprocess functions for node.tpl.php.
 */
 
function pl_classic_preprocess_node(&$vars){

	$node = $vars['node'];
	
	// Add general theme suggestions for all content types and view modes
	$vars['theme_hook_suggestions'][] = 'node__' . $vars['type'] . '__' . $vars['view_mode'];
	
	// TEASER VIEWS ---------------------------------------------------
	if($vars['teaser']){
		if($vars['type'] == 'video'){
			$url = substr($vars['node_url'], 1);
			$vars['title'] = l($vars['title'], $url, array('html'=>TRUE));
			$vars['vid_desc'] = render($vars['content']['field_video_desc']);
			$vars['vid_thumb'] = render($vars['content']['field_video_url']);
		}
	}	
	
	// FULL VIEWS ---------------------------------------------------
	if($vars['view_mode'] == 'full'){
		
		// PORTFOLIO
		if($vars['type'] == 'gallery'){
			
			if($vars['vid'] == 16){
				$vars['theme_hook_suggestions'][] = 'node__intro';
				
				
				
				$images = "";
				$colors = "";
				$intro_loader = array();
				
				//shuffle($vars['field_images']);
				
				for($i = 0; $i < count($vars['field_images']); $i++){
					
					//$image = '/pl/sites/default/files/images/' . $vars['field_images'][$i]['filename'];
					$image_tag = $vars['field_images'][$i]['uri'];
					$intro_loader[] = render_image($image_tag, 'intro_image', 'intro image');
					//print($image_item);
					$image = '/sites/default/files/styles/intro_image/public/images/' . $vars['field_images'][$i]['filename'];
					
					$color =  $vars['field_images'][$i]['title'];
					
					$images .= $image ."|";
					$colors .= $color ."|";
				}
				
				$vars['images'] = $images;
				$vars['colors'] = $colors;
				$vars['intro_images'] = theme('item_list', array('items' => $intro_loader));
				
				drupal_add_js('/sites/all/themes/pl_classic/js/jquery.backstretch.min.js');
				drupal_add_js('/sites/all/themes/pl_classic/js/pl_bg.js');
				
			}else{
			
			drupal_add_js('/sites/all/themes/pl_classic/js/pl_port.js');
				
				$images = array();
				$thumbs = array();
				
				
				
				for($i = 0; $i < count($vars['field_images']); $i++){
					$image = $vars['field_images'][$i]['uri'];
					$alt = $vars['field_images'][$i]['title'];
					$width = $vars['field_images'][$i]['width'];
					$images[] = render_image($image, 'gallery_full', $alt);
					$thumbs[] = render_image($image, 'rec_thumbnail', $alt);
				}
				
				$vars['images'] = theme('item_list', array('items' => $images));
				$vars['thumbs'] = theme('item_list', array('items' => $thumbs));
			}			
		}
		
		
		// VIDEO
		if($vars['type'] == 'video'){
			$url = substr($vars['node_url'], 1);
			//$vars['title'] = l($vars['title'], $url, array('html'=>TRUE));
			$vars['vid_desc'] = render($vars['content']['field_video_desc']);
			$vars['vid_thumb'] = render($vars['content']['field_video_url']);
		}
		
		
		// CONTACT
		if($vars['type'] == 'contact_page'){
			drupal_add_js('/sites/all/themes/pl_classic/js/pl_contact.js');
			$vars['contacts'] = render($vars['content']['field_contacts']);
			$vars['bio'] = render($vars['content']['field_bio']);
			
			
		}
		
	}
	
	
	
}


// Renders image with a given image style
function render_image($path, $style = 'default', $alt){
	$image_style = array( 'style_name' => $style, 'path' => $path, 'alt' => $alt);
	return theme('image_style', $image_style);
};


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
function pl_mobile_preprocess_page(&$vars){
	
}
 

/**
 * Preprocess functions for node.tpl.php.
 */
 
function pl_mobile_preprocess_node(&$vars){

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
			
			/*
if($vars['vid'] == 16){
				$vars['theme_hook_suggestions'][] = 'node__intro';
				
				//drupal_add_js(path_to_theme() . '/js/jquery.backstretch.min.js');
				//drupal_add_js(path_to_theme() . '/js/pl_bg.js');
				
				$images = "";
				$colors = "";
				
				for($i = 0; $i < count($vars['field_images']); $i++){
					$image = '/pl/sites/default/files/images/' . $vars['field_images'][$i]['filename'];
					$images .= $image ."|";
					$color =  $vars['field_images'][$i]['title'];
					$colors .= $color ."|";
				}
				
				$vars['images'] = $images;
				$vars['colors'] = $colors;
				kpr($vars['field_images']);
				
			}else{
*/
			
			//drupal_add_js(path_to_theme() . '/js/pl_port.js');
				
				$images = array();
				//$thumbs = array();
				
				if(isset($vars['field_portfolio_random'][0]['value'])){
					if($vars['field_portfolio_random'][0]['value'] == 1){
						shuffle($vars['field_images']);
					}
				}
				
				//print_r($vars['field_images']);
				
				for($i = 0; $i < count($vars['field_images']); $i++){
					$image = $vars['field_images'][$i]['uri'];
					$alt = $vars['field_images'][$i]['title'];
					$width = $vars['field_images'][$i]['width'];
					
					if($vars['vid'] == 16){
						$images[] = render_image($image, 'gallery_full_mobile', $alt);
					}else{
						$images[] = render_image($image, 'gallery_full_mobile', $alt) . '<div class="caption">' . $alt .'</div>';
					}
					
					
					//$thumbs[] = render_image($image, 'rec_thumbnail', $alt);
				}
				
				$vars['images'] = theme('item_list', array('items' => $images));
				//$vars['thumbs'] = theme('item_list', array('items' => $thumbs));
			}			
		//}
		
		
		// VIDEO
		if($vars['type'] == 'video'){
			$url = substr($vars['node_url'], 1);
			//$vars['title'] = l($vars['title'], $url, array('html'=>TRUE));
			$vars['video_url'] = $vars['field_video_url'][0]['video_url'];
			$vars['vid_desc'] = render($vars['content']['field_video_desc']);
			$vars['vid_thumb'] = render($vars['content']['field_video_url']);
		}
		
		
		// CONTACT
		if($vars['type'] == 'contact_page'){
			
			//drupal_add_js(path_to_theme() . '/js/pl_contact.js');
		
			$vars['contacts'] = render($vars['content']['field_contacts']);
			$vars['bio'] = render($vars['content']['field_bio']);
			
			$images = array();
			/*
for($i = 0; $i < count($vars['field_contact_page_images']); $i++){
				$image = $vars['field_contact_page_images'][$i]['uri'];
				$alt = $vars['field_contact_page_images'][$i]['title'];
				$width = $vars['field_contact_page_images'][$i]['width'];
				$images[] = render_image($image, 'contact_full', $alt);
			}
*/
			$vars['images'] = theme('item_list', array('items' => $images));
			
		}
		
	}
	
	
	
}


// Renders image with a given image style
function render_image($path, $style = 'default', $alt){
	$image_style = array( 'style_name' => $style, 'path' => $path, 'alt' => $alt);
	return theme('image_style', $image_style);
};


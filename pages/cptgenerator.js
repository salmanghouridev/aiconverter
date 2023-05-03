import React, { useState } from 'react'

const Cptgenerator = () => {

          const [postTypeName, setPostTypeName] = useState('');
          const [generatedCode, setGeneratedCode] = useState('');
        
          const handleSubmit = (e) => {
            e.preventDefault();
            const code = generateCustomPostTypeCode(postTypeName);
            setGeneratedCode(code);
          };
        
          const handleCopyCode = () => {
            navigator.clipboard.writeText(generatedCode);
          };
        
  return (
          <div>
          <h1>WordPress Custom Post Type Generator</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="postTypeName">Post Type Name:</label>
            <input
              type="text"
              id="postTypeName"
              value={postTypeName}
              onChange={(e) => setPostTypeName(e.target.value)}
            />
            <button type="submit">Generate Code</button>
          </form>
          {generatedCode && (
            <div>
              <h2>Generated Code:</h2>
              <pre>{generatedCode}</pre>
              <button onClick={handleCopyCode}>Copy to Clipboard</button>
            </div>
          )}
        </div>
  )
}

export default Cptgenerator

function generateCustomPostTypeCode(postTypeName) {
          const postTypeSlug = postTypeName.toLowerCase().replace(/\s+/g, '_');
          const code = `
        function create_${postTypeSlug}_post_type() {
          $labels = array(
            'name' => _x('${postTypeName}', 'Post Type General Name', 'text_domain'),
            'singular_name' => _x('${postTypeName}', 'Post Type Singular Name', 'text_domain'),
            'menu_name' => __('${postTypeName}', 'text_domain'),
            'parent_item_colon' => __('Parent ${postTypeName}:', 'text_domain'),
            'all_items' => __('All ${postTypeName}', 'text_domain'),
            'view_item' => __('View ${postTypeName}', 'text_domain'),
            'add_new_item' => __('Add New ${postTypeName}', 'text_domain'),
            'add_new' => __('Add New', 'text_domain'),
            'edit_item' => __('Edit ${postTypeName}', 'text_domain'),
            'update_item' => __('Update ${postTypeName}', 'text_domain'),
            'search_items' => __('Search ${postTypeName}', 'text_domain'),
            'not_found' => __('Not Found', 'text_domain'),
            'not_found_in_trash' => __('Not found in Trash', 'text_domain'),
          );
        
          $args = array(
            'label' => __('${postTypeName}', 'text_domain'),
            'description' => __('${postTypeName}', 'text_domain'),
            'labels' => $labels,
            'supports' => array('title', 'editor', 'excerpt', 'author', 'thumbnail', 'comments', 'revisions', 'custom-fields', 'post-formats'),
            'taxonomies' => array('category', 'post_tag'),
            'hierarchical' => false,
            'public' => true,
            'show_ui' => true,
            'show_in_menu' => true,
            'show_in_nav_menus' => true,
            'show_in_admin_bar' => true,
            'menu_position' => 5,
            'can_export' => true,
            'has_archive' => true,
            'exclude_from_search' => false,
            'publicly_queryable' => true,
            'capability_type' => 'post',
'show_in_rest' => true,
);

register_post_type('${postTypeSlug}', $args);
}

add_action('init', 'create_${postTypeSlug}_post_type', 0);
`;

return code.trim();
}
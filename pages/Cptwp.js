import React, { useState } from 'react'

const Cptwp = () => {
 
          const [postTypeName, setPostTypeName] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [taxonomies, setTaxonomies] = useState({
    category: false,
    post_tag: false,
    custom: false,
    custom_taxonomy: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = generateCustomPostTypeCode(postTypeName, taxonomies);
    setGeneratedCode(code);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(generatedCode);
  };

  const handleTaxonomyChange = (e) => {
    const { name, checked } = e.target;
    setTaxonomies({ ...taxonomies, [name]: checked });
  };

  const handleCustomTaxonomyChange = (e) => {
    setTaxonomies({ ...taxonomies, custom_taxonomy: e.target.value });
  };

        
  return (
    <div className="bg-gray-100 min-h-screen">
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">WordPress Custom Post Type Generator</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
        <div className="mb-6">
          <label htmlFor="postTypeName" className="block text-sm font-medium text-gray-700">Post Type Name:</label>
          <input
            type="text"
            id="postTypeName"
            value={postTypeName}
            onChange={(e) => setPostTypeName(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              id="category"
              name="category"
              checked={taxonomies.category}
              onChange={handleTaxonomyChange}
              className="rounded border-gray-300 text-indigo-600 shadow-sm"
            />
            <span className="ml-2 text-sm font-medium text-gray-700">Category</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              id="post_tag"
              name="post_tag"
              checked={taxonomies.post_tag}
              onChange={handleTaxonomyChange}
              className="rounded border-gray-300 text-indigo-600 shadow-sm"
            />
            <span className="ml-2 text-sm font-medium text-gray-700">Tag</span>
          </label>
        </div>
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              id="custom"
              name="custom"
              checked={taxonomies.custom}
              onChange={handleTaxonomyChange}
              className="rounded border-gray-300 text-indigo-600 shadow-sm"
            />
            <span className="ml-2 text-sm font-medium text-gray-700">Custom Taxonomy</span>
          </label>
          {taxonomies.custom && (
            <input
              type="text"
              id="custom_taxonomy"
              value={taxonomies.custom_taxonomy}
              onChange={handleCustomTaxonomyChange}
              className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="Enter custom taxonomy name"
            />
          )}
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Generate Code
        </button>
      </form>
      {generatedCode && (
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Generated Code:</h2>
          <pre className="bg-gray-100 p-4 rounded-lg shadow-md">{generatedCode}</pre>
          <button
            onClick={handleCopyCode}
            className="mt-4 inline-flex items-center px-
            4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Copy to Clipboard
            </button>
            </div>
            )}
            
              </div>
            </div>
  
      );
    };
    export default Cptwp;

    function generateCustomPostTypeCode(postTypeName, taxonomies) {
      const postTypeSlug = postTypeName.toLowerCase().replace(/\s+/g, '_');
      const taxonomiesArray = Object.keys(taxonomies).filter(key => taxonomies[key]);
      const taxonomiesString = taxonomiesArray.map(tax => `'${tax}'`).join(', ');
    
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
        'taxonomies' => array(${taxonomiesString}),
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
    
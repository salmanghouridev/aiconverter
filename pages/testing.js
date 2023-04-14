import React from 'react';

const MyComponent = () => {
  return (
    <div className="flex overflow-hidden rounded-lg bg-white shadow-lg transition-shadow duration-300 hover:shadow-sm">
      
      <img src="https://example.com/myimage.jpg" alt="Property Image" className="w-1/3 rounded-l-sm object-cover"></img>
      
      <div className="flex w-2/3 flex-col justify-between p-4">
        
        <div>
          
          <h2 className="mb-2 text-3xl font-bold text-gray-900">
            Beautiful House
          </h2>
          
          <div className="mb-2 flex items-center">
            
            <div className="mr-2 rounded-full bg-blue-600 py-1 px-3 text-sm font-medium text-white">
              name; ?{'&gt;'}
            </div>
            
            <div className="rounded-full bg-yellow-500 py-1 px-3 text-sm font-medium text-white">
              name . ', '; {'}'} ?{'&gt;'}
            </div>
            
          </div>
          
          <div className="flex py-1">
            
            <div className="mr-4 flex items-center">
              
              <img src="https://img.icons8.com/windows/24/null/bedroom.png"></img>
              
              <p className="ml-2 font-medium text-gray-700">
                3 Bedrooms
              </p>
              
            </div>
            
            <div className="mr-4 flex items-center">
              
              <img src="https://img.icons8.com/pastel-glyph/24/null/bath--v2.png"></img>
              
              <p className="ml-2 font-medium text-gray-700">
                2 Bathrooms
              </p>
              
            </div>
            
            <div className="flex items-center">
              
              <img src="https://img.icons8.com/ios-glyphs/24/null/expand--v1.png"></img>
              
              <p className="ml-2 font-medium text-gray-700">
                120 sqm
              </p>
              
            </div>
            
          </div>
          
          <div className="mt-4">
            
            <p className="text-4xl font-extrabold text-blue-800">
              $200,000
            </p>
            
          </div>
          
          <div className="mt-4 flex items-center justify-between">
            
            <div className="flex items-center">
              
              <img src="https://via.placeholder.com/50" alt="Agent Image" className="mr-2 rounded-full object-cover"></img>
              
              <div>
                
                <p className="font-medium text-gray-800">
                  Agent Name
                </p>
                
                <p className="text-gray-600">
                  Contact me for more details
                </p>
                
              </div>
              
            </div>
            
            <div className="mt-2 flex">
              
              <a href="tel:+1234567890" className="mr-4 rounded-xl bg-gray-300 p-2 text-gray-700 hover:text-gray-800">
                
                <img src="https://img.icons8.com/color/24/null/ringer-volume.png"></img>
                
              </a>
              
              <a href="https://wa.me/1234567890" className="rounded-xl bg-green-500 p-2 text-white hover:bg-green-600">
                
                <img src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/null/external-WhatsApp-social-media-those-icons-lineal-color-those-icons.png"></img>
                
              </a>
              
            </div>
            
          </div>
          
        </div>
        
      </div>
      
    </div>
    
  );
};

export default MyComponent;
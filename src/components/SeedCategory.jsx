import React from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';

const SeedCategories = () => {
    const categories = [
      {
        name: 'Corriander',
        image: 'https://static.vecteezy.com/system/resources/previews/047/727/008/non_2x/coriander-bunch-of-coriander-top-view-cilantro-herb-flat-lay-aromatic-herb-for-food-preparation-isolated-png.png',
        description: 'High-yield, drought-resistant varieties',
        link:'/corriander'
    },
        {
            name: 'Groundnut',
            link: 'Groundnut',
            image: '/groundnut.png',
            description: 'High-yield, drought-resistant varieties',

        },
        {
            name: 'Carrot',
            link: 'Carrot',
            image: '/carrot.png',
            description: 'Nutrient-rich hybrid cultivars',
        link:'/corriander'

        },
        {
            name: 'Spinach',
            link: 'Spinach',
            image: '/spinach.png',
            description: 'Fast-growing, nutrient-packed seeds',
        link:'/corriander'

        },
        {
            name: 'Cabbage',
            link: 'Cabbage',
            image: '/cabbage.png',
            description: 'Cold-tolerant, high-performance seeds',
        link:'/corriander'

        },
      
        {
            name: "Chilli",
            link: "Chilli",
            image: "/chilli.png",
            description: "Spicy and flavorful"
        },
        {
            name: "Brinjal",
            link: "Brinjal",
            image: "/bringle.png",
            description: "Versatile vegetable"
        },
        {
            name: "Bhindi/Okra",
            link: "Bhindi",
            image: "/bhindi.png",
            description: "Slimy and nutritious"
        },
        {
            name: "Tomato",
            link: "Tomato",
            image: "/tomato.png",
            description: "Juicy and versatile"
        },
        {
            name: "Cauliflower",
            link: "Cauliflower",
            image: "/cauliflower.png",
            description: "Healthy and versatile"
        },
        {
            name: "Bitter Gourd",
            link: "Bitter Gourd",
            image: "/bittergaurd.png",
            description: "Bitter but healthy"
        }
        ,
        {
            name: "Bottle Gourd",
            link: "Bottle Gourd",
            image: "https://t3.ftcdn.net/jpg/04/51/71/04/360_F_451710427_nr8WeVO4k9tnh2QWcFaGv0sGb1kY6Lzb.jpghttps://t3.ftcdn.net/jpg/00/35/15/06/360_F_35150693_KYha2ohmEHO3edrzUHBDWvfkfoTnoHey.jpg",
            description: "Health benefits and a crunchy twist!"
        }
        
        ,
        {
            name: "Peas",
            link: "Peas",
            image: "/peas.png",
            description: "Sweet and nutritious"
        },
        {
            name: "Onion",
            link: "Onion",
            image: "/onion.png",
            description: "A pungent bulb used as a flavoring agent."
        },
 
        {
            name: "Sesame Seeds",
            link: "Sesame Seeds",
            image: "/sessame.png",
            description: "Small, oil-rich seeds used in various cuisines."
        }
        ,
 
        {
            name: "Beetroot",
            link: "Beetroot",
            image: "https://media.istockphoto.com/id/162682961/photo/beetroot.jpg?s=612x612&w=0&k=20&c=AzHmJ6fPa44BN7y_rji9nziIXMuOrPeU502KpsPv6Ks=",
            description: "."
        }
        ,
 
        {
            name: "Radish",
            link: "Radish",
            image: "/radish.png",
            description: "."
        }
        ,
 
        {
            name: "Cucumber",
            link: "Cucumber",
            image: "https://urjaseeds.com/cdn/shop/products/cucumber-seeds-malaysia-t103m_1024x.jpg?v=1591175147",
            description: "."
        }
    ];

  return (
    <div className="flex flex-col  overflow-hidden bg-gradient-to-b from-green-50 to-white">
      {/* Container for entire content */}
      <div className="flex-grow flex flex-col overflow-hidden">
        {/* Header Section - Compact and Centered */}
        <div className="text-center py-4 px-4">
          
          <h1 className="text-5xl font-bold text-gray-900 mb-2">
            Explore Our Seed Categories
          </h1>
          <p className="text-md text-gray-600 max-w-3xl mx-auto mb-4">
            Discover our premium hybrid seed collection, engineered for optimal performance and sustainable agriculture.
          </p>
        </div>

        {/* Categories Grid - Scrollable if needed */}
        <div className="flex-grow overflow-auto px-4 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {categories.map((category) => (
              <Link
                to={category.link} 
                key={category.name} 
                className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 flex flex-col"
              >
                {/* Image Container - Fixed Height */}
                <div className="h-48 flex items-center justify-center p-4">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Category Details */}
                <div className="p-2  flex-grow flex flex-col justify-between p-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600 ">
                      {category.description}
                    </p>
                  </div>
                  
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeedCategories;
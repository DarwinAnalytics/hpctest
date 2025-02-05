import React from 'react';

const ProductCard = ({ title, features, imageUrl }) => (
  <div className="mb-6 rounded-lg border border-gray-200 bg-white shadow">
    <div className="border-b border-gray-200 p-4">
      <h2 className="text-xl font-bold text-green-700">{title}</h2>
    </div>
    <div className="p-4">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3">
          <img
            src={imageUrl}
            alt={`${title} coriander variety`}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-2/3">
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const ProductDescription = () => {
  const products = [
    {
      title: 'Vart.-sugandha 55-60 days maurity',
      features: [
        'Plant type erect',
        'Maturity early',
        'Leaves are Broad dark green',
        'It gives number of cuttings of tender leaves',
        'Leaves have excellent aroma'
      ]
    },
    {
      title: 'Vart.-Early 30(Imported)',
      features: [
        'Plant type erect',
        'Maturity early',
        'Leaves are Big leaves with lush Green colour',
        'Vigorous & fast growing variety',
        'Leaves have excellent quality & flavour'
      ]
    }
    
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-green-800 mb-8">Improved Coriander Varieties</h1>
      <div className="space-y-6">
        {products.map((product) => (
          <ProductCard
            imageUrl='https://static.vecteezy.com/system/resources/previews/047/727/008/non_2x/coriander-bunch-of-coriander-top-view-cilantro-herb-flat-lay-aromatic-herb-for-food-preparation-isolated-png.png'
            key={product.title}
            title={product.title}
            features={product.features}
          />
        ))}
      </div>
     
    </div>
  );
};

export default ProductDescription;
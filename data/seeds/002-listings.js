
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('listings').del()
    .then(function () {
      // Inserts seed entries
      return knex('listings').insert([

        { product_name: "Maize", product_category: "Cereal", product_description: "20kg of Dry Maize", product_quantity: "20kg", product_price: "KES51/kg", country: "Kenya", market_name: "Bungoma", user_id: 1 },
        { product_name: "Coffee (Arabic)", product_category: "Other", product_description: "50kg of Arabic Coffee", product_quantity: "50kg", product_price: "KES255/kg", country: "Kenya", market_name: "Bungoma", user_id: 1 },
        { product_name: "Mangos", product_category: "Fruits", product_description: "45kg of Dried Mangos", product_quantity: "45kg", product_price: "KES625/kg", country: "Kenya", market_name: "Bungoma", user_id: 1 },

        { product_name: "Maize", product_category: "Cereal", product_description: "30kg of Maize", product_quantity: "30kg", product_price: "KES55/kg", country: "Kenya", market_name: "Busia", user_id: 2 },
        { product_name: "Mangos", product_category: "Fruits", product_description: "55kg of Dried Mangos", product_quantity: "55kg", product_price: "KES650/kg", country: "Kenya", market_name: "Busia", user_id: 2 },
        { product_name: "Coffee (Robusta)", product_category: "Other", product_description: "60kg of Robusta Coffee", product_quantity: "60kg", product_price: "KES265/kg", country: "Kenya", market_name: "Busia", user_id: 2 },

        { product_name: "Paddy Rice", product_category: "Cereal-Rice", product_description: "40kg of Paddy Rice", product_quantity: "40kg", product_price: "UGX35/kg", country: "Uganda", market_name: "Iganga", user_id: 3 },
        { product_name: "Tea", product_category: "Other", product_description: "20kg of Black Tea", product_quantity: "20kg", product_price: "UGX250/kg", country: "Uganda", market_name: "Iganga", user_id: 3 },
        { product_name: "Red Irish Potatoes", product_category: "Roots & Tubers", product_description: "80kg of Red Irish Potatoes", product_quantity: "80kg", product_price: "UGX3800/kg", country: "Uganda", market_name: "Iganda", user_id: 3 },

        { product_name: "Maize", product_category: "Cereal", product_description: "30kg of Dry Maize", product_quantity: "30kg", product_price: "UGX26/kg", country: "Uganda", market_name: "Kabale", user_id: 4 },
        { product_name: "Red Irish Potatoes", product_category: "Roots & Tubers", product_description: "66kg of Red Irish Potatoes", product_quantity: "66kg", product_price: "UGX3900/kg", country: "Uganda", market_name: "Kabale", user_id: 4 },
        { product_name: "Tea", product_category: "Other", product_description: "30kg of Black Tea", product_quantity: "30kg", product_price: "UGX260/kg", country: "Uganda", market_name: "Kabale", user_id: 4 },

        { product_name: "Simsim", product_category: "Seeds & Nuts", product_description: "100kg of Simsims(sesame)", product_quantity: "100kg", product_price: "RWF3000/kg", country: "Rwanda", market_name: "Kigali", user_id: 5 },
        { product_name: "Cabbages", product_category: "Vegetables", product_description: "50kg of large Cabbages", product_quantity: "50kg", product_price: "RWF600/kg", country: "Rwanda", market_name: "Kigali", user_id: 5 },
        { product_name: "Chick Pea", product_category: "Peas", product_description: "80kg of fresh Chick Peas", product_quantity: "80kg", product_price: "RWF480/kg", country: "Rwanda", market_name: "Kigali", user_id: 5 },

        { product_name: "Carrots", product_category: "Vegetables", product_description: "50kg of large Carrots", product_quantity: "50kg", product_price: "RWF540/kg", country: "Rwanda", market_name: "Butare", user_id: 6 },
        { product_name: "Chick Pea", product_category: "Peas", product_description: "63kg of fresh Chick Peas", product_quantity: "63kg", product_price: "RWF391/kg", country: "Rwanda", market_name: "Butare", user_id: 6 },
        { product_name: "Simsim", product_category: "Seeds & Nuts", product_description: "90kg of Simsims(sesame)", product_quantity: "90kg", product_price: "RWF2790/kg", country: "Rwanda", market_name: "Butare", user_id: 6 },

        { product_name: "Mangos", product_category: "Fruits", product_description: "45kg of Dried Mangos", product_quantity: "45kg", product_price: "KES700/kg", country: "Kenya", market_name: "Kisumu", user_id: 7 },
        { product_name: "Coffee (Robusta)", product_category: "Other", product_description: "28kg of Robusta Coffee", product_quantity: "28kg", product_price: "KES300/kg", country: "Kenya", market_name: "Kisumu", user_id: 7 },
        { product_name: "Maize", product_category: "Cereal", product_description: "40kg of Maize", product_quantity: "40kg", product_price: "KES60/kg", country: "Kenya", market_name: "Kisumu", user_id: 7 },

        { product_name: "Maize", product_category: "Cereal", product_description: "40kg of Dry Maize", product_quantity: "40kg", product_price: "UGX30/kg", country: "Uganda", market_name: "Gulu", user_id: 8 },
        { product_name: "Paddy Rice", product_category: "Cereal-Rice", product_description: "67kg of Paddy Rice", product_quantity: "67kg", product_price: "UGX37/kg", country: "Uganda", market_name: "Gulu", user_id: 8 },
        { product_name: "Tea", product_category: "Other", product_description: "50kg of Black Tea", product_quantity: "50kg", product_price: "UGX245/kg", country: "Uganda", market_name: "Gulu", user_id: 8 },

        { product_name: "Simsim", product_category: "Seeds & Nuts", product_description: "55kg of Simsims(sesame)", product_quantity: "55kg", product_price: "RWF3150/kg", country: "Rwanda", market_name: "Gitarama", user_id: 9 },
        { product_name: "Cabbages", product_category: "Vegetables", product_description: "45kg of large Cabbages", product_quantity: "45kg", product_price: "RWF626/kg", country: "Rwanda", market_name: "Gitarama", user_id: 9 },
        { product_name: "Chick Pea", product_category: "Peas", product_description: "120kg of fresh Chick Peas", product_quantity: "120kg", product_price: "RWF350/kg", country: "Rwanda", market_name: "Gitarama", user_id: 9 },
      ]);
    });
};

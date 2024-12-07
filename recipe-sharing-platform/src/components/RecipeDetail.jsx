import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipeData from '../data.json'; // Import the mock data

const RecipeDetail = () => {
  const { id } = useParams(); // Retrieve the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe based on the ID from the URL
    const selectedRecipe = recipeData.find((recipe) => recipe.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>; // Show loading message while data is being fetched
  }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">Ingredients</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Cooking Instructions</h2>
            <ol className="list-decimal pl-5 space-y-2 text-gray-600">
              {recipe.instructions && recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;


import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!title || !ingredients || !instructions) {
      setError('All fields are required!');
      return;
    }

    // Split ingredients and instructions into arrays
    const ingredientsArray = ingredients.split('\n').map(ingredient => ingredient.trim()).filter(Boolean);
    const instructionsArray = instructions.split('\n').map(instruction => instruction.trim()).filter(Boolean);

    if (ingredientsArray.length < 2) {
      setError('Please enter at least two ingredients.');
      return;
    }

    // Clear error
    setError('');

    // Log the submitted data (you can replace this with API call to submit data)
    const newRecipe = {
      title,
      ingredients: ingredientsArray,
      instructions: instructionsArray,
      image: 'https://via.placeholder.com/150', // Default image for now
    };
    console.log('New Recipe Submitted:', newRecipe);

    // Clear the form
    setTitle('');
    setIngredients('');
    setInstructions('');
  };

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Add New Recipe</h2>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Recipe Title</label>
            <input
              type="text"
              id="title"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter recipe title"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">Ingredients (one per line)</label>
            <textarea
              id="ingredients"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md"
              rows="4"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              placeholder="Enter ingredients (one per line)"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">Instructions (one per line)</label>
            <textarea
              id="instructions"
              className="mt-2 p-3 w-full border border-gray-300 rounded-md"
              rows="6"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="Enter instructions (one per line)"
            />
          </div>
          <div className="mb-4">
            <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Submit Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;


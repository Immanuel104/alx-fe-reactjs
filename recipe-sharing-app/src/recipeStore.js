import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
     favorites: [],
  
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId],
  })),

  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId),
  })),

  recommendations: [],

  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(
      recipe =>
        state.favorites.includes(recipe.id) && Math.random() > 0.5 // Mock recommendation logic
    );
    return { recommendations: recommended };
  }),
}));
  searchTerm: '',
  filteredRecipes: [],
  
  setSearchTerm: (term) => set(state => {
    const filtered = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    return { searchTerm: term, filteredRecipes: filtered };
  }),

  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.recipes, newRecipe].filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),

  setRecipes: (recipes) => set({ 
    recipes, 
    filteredRecipes: recipes 
  }),
}));

export { useRecipeStore };

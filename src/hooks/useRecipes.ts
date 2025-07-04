import { useContext, useState } from 'react';
import { RecipeContext } from '../context/RecipeContext';

export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (context === undefined) {
    throw new Error('useRecipes debe ser usado dentro de un RecipeProvider');
  }

  const [difficultyFilter, setDifficultyFilter] = useState<string | null>(null);

  const filterByDifficulty = (recipes: any[], difficulty: 'Fácil' | 'medio' | 'Difícil') => {
    return recipes.filter(recipe => recipe.dificultad === difficulty);
  };

  return {
    ...context,
    difficultyFilter,
    setDifficultyFilter,
    filterByDifficulty,
  };
};
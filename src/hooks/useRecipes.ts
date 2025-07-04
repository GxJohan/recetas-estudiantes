import { useContext, useState } from 'react';
import { RecipeContext } from '../context/RecipeContext';
import type { Recipe } from '../types/Recipe';

export const useRecipes = () => {
  const context = useContext(RecipeContext);

  if (!context) {
    throw new Error('useRecipes debe ser usado dentro de un RecipeProvider');
  }

  const [difficultyFilter, setDifficultyFilter] = useState<string | null>(null);

  // Cambia el filtro de dificultad
  const filterByDifficulty = (difficulty: string | null) => {
    setDifficultyFilter(difficulty);
  };

  // Recetas filtradas por dificultad
  const filteredRecetas: Recipe[] =
    difficultyFilter
      ? context.recetas.filter(
          receta => receta.dificultad.toLowerCase() === difficultyFilter.toLowerCase()
        )
      : context.recetas;

  return {
    ...context,
    difficultyFilter,
    setDifficultyFilter,
    filterByDifficulty,
    filteredRecetas,
  };
};

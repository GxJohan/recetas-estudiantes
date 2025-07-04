import { useContext, useState } from 'react';
import { RecipeContext } from '../context/RecipeContext';

export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (context === undefined) {
    throw new Error('useRecipes debe ser usado dentro de un RecipeProvider');
  }

  
  const [difficultyFilter, setDifficultyFilter] = useState<string | null>(null);
 
  const filterByDifficulty = (dificultad: string) => {
    setDifficultyFilter(dificultad);
    if (!dificultad) return context.recetas;
    return context.recetas.filter(
      (receta) =>
        receta.dificultad.toLowerCase() === dificultad.toLowerCase()
    );
  };

  return {
    ...context,
    difficultyFilter,
    setDifficultyFilter,
    filterByDifficulty,
  };
};
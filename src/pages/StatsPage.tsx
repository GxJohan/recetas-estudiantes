import React from "react";
import { useRecipes } from "../hooks/useRecipes";

const StatsPage: React.FC = () => {
  const { recetas } = useRecipes();


  const totalRecetas = recetas.length;


  const recetasPorCategoria: Record<string, number> = {};
  recetas.forEach((receta) => {
    recetasPorCategoria[receta.categoria] = (recetasPorCategoria[receta.categoria] || 0) + 1;
  });

 
  const recetaPopular = recetas.reduce((max, receta) =>
    receta.valoracion > max.valoracion ? receta : max,
    recetas[0]
  );

  return (
    <div className="stats-page" style={{ maxWidth: 600, margin: '0 auto', padding: '2rem' }}>
      <h1 className="page-title">📊 Estadísticas de Recetas</h1>
      <div className="card mb-4" style={{ background: '#fff', borderRadius: '1rem', padding: '1.5rem', marginBottom: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        <h2>Total de Recetas</h2>
        <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>{totalRecetas}</p>
      </div>
      <div className="card mb-4" style={{ background: '#fff', borderRadius: '1rem', padding: '1.5rem', marginBottom: '2rem', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        <h2>Recetas por Categoría</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {Object.entries(recetasPorCategoria).map(([categoria, cantidad]) => (
            <li key={categoria} style={{ marginBottom: '0.5rem' }}>
              <span style={{ fontWeight: 'bold', textTransform: 'capitalize' }}>{categoria}:</span> {cantidad}
            </li>
          ))}
        </ul>
      </div>
      <div className="card" style={{ background: '#fff', borderRadius: '1rem', padding: '1.5rem', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
        <h2>Receta Más Popular</h2>
        <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{recetaPopular.nombre}</p>
        <p>Valoración: <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>{recetaPopular.valoracion} ⭐</span></p>
        <p>Categoría: <span style={{ textTransform: 'capitalize' }}>{recetaPopular.categoria}</span></p>
      </div>
    </div>
  );
};

export default StatsPage;
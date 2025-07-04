import React from 'react';
import { useRecipes } from '../hooks/useRecipes';
import type { Recipe } from '../types/Recipe';

const StatsPage: React.FC = () => {
  const { recetas } = useRecipes();

  const totalRecetas = recetas.length;

  const categorias: { [key: string]: number } = {};
  recetas.forEach(r => {
    if (r.categoria) {
      categorias[r.categoria] = (categorias[r.categoria] || 0) + 1;
    }
  });

  const recetaPopular = recetas.length > 0 ? recetas.reduce((max: Recipe, r: Recipe) => (r.valoracion > max.valoracion ? r : max), recetas[0]) : null;

  return (
    <div className="container py-4">
      <h1 className="mb-4">Estadísticas de Recetas</h1>
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Total de Recetas</h5>
              <p className="card-text display-6">{totalRecetas}</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Recetas por Categoría</h5>
              <ul className="list-group list-group-flush">
                {Object.entries(categorias).map(([cat, count]) => (
                  <li className="list-group-item d-flex justify-content-between align-items-center" key={cat}>
                    {cat}
                    <span className="badge bg-primary rounded-pill">{count}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">Receta Más Popular</h5>
              {recetaPopular ? (
                <>
                  <p className="fw-bold mb-1">{recetaPopular.nombre}</p>
                  <span className="badge bg-success mb-2">Valoración: {recetaPopular.valoracion}</span>
                  <p className="mb-0 text-muted">Categoría: {recetaPopular.categoria}</p>
                </>
              ) : (
                <p>No hay recetas</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;

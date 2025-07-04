import React from 'react';
import { useRecipes } from '../hooks/useRecipes';

const StatsPage: React.FC = () => {
  const { recetas } = useRecipes();

  const totalRecetas = recetas.length;

  const recetasPorCategoria: Record<string, number> = {};
  recetas.forEach((receta) => {
    recetasPorCategoria[receta.categoria] =
      (recetasPorCategoria[receta.categoria] || 0) + 1;
  });

  const recetaPopular = recetas.reduce((prev, current) =>
    prev.valoracion > current.valoracion ? prev : current
  );

  const capitalize = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">
        📊 <strong>Estadísticas</strong>
      </h1>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h5 className="card-title">🍽️ Total de Recetas</h5>
              <p className="display-6">{totalRecetas}</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">📂 Recetas por Categoría</h5>
              <ul className="list-group list-group-flush">
                {Object.entries(recetasPorCategoria).map(
                  ([categoria, cantidad]) => (
                    <li key={categoria} className="list-group-item">
                      <strong>{capitalize(categoria)}</strong>: {cantidad}
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center shadow-sm">
            <div className="card-body">
              <h5 className="card-title">⭐ Receta más Popular</h5>
              <p className="fw-bold">{recetaPopular.nombre}</p>
              <p>
                <span className="text-warning">⭐</span> {recetaPopular.valoracion}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;

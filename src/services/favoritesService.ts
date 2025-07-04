
const FAVORITES_KEY = 'favoritos';

export function getFavorites(): number[] {
  const stored = localStorage.getItem(FAVORITES_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function addFavorite(id: number): void {
  const current = getFavorites();
  if (!current.includes(id)) {
    const updated = [...current, id];
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  }
}

export function removeFavorite(id: number): void {
  const current = getFavorites();
  const updated = current.filter(favId => favId !== id);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
}

export const FAVORITES_KEY = 'favoritos';

export function getFavorites(): string[] {
  const stored = localStorage.getItem(FAVORITES_KEY);
  return stored ? JSON.parse(stored) : [];
}

export function addFavorite(id: string) {
  const current = getFavorites();
  if (!current.includes(id)) {
    current.push(id);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(current));
  }
}

export function removeFavorite(id: string) {
  const current = getFavorites().filter((fav) => fav !== id);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(current));
}
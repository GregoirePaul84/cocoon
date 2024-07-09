import { createContext, useContext } from 'react';

// Créer le contexte avec une structure incluant aussi locomotiveScroll
export const ScrollContext = createContext({
  scrollTo: () => {},
  locomotiveScroll: null  // Ajouter cette ligne pour référencer l'instance
});

// Créer un hook personnalisé pour accéder au contexte
export const useScroll = () => useContext(ScrollContext);

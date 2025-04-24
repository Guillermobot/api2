import express from 'express';
import fetch from 'node-fetch';

const router = express.Router();

// Obtener todas las películas
router.get('/peliculas', async (req, res) => {
  const response = await fetch('https://potterhead-api.vercel.app/api/movies');
  
  if (!response.ok) {
    return res.status(404).json({ error: "No se encontraron películas" });
  }

  const data = await response.json();
  res.json({
    peliculas: data,
  });
});

// Obtener todos los personajes
router.get('/personajes', async (req, res) => {
    const response = await fetch('https://potterhead-api.vercel.app/api/characters');
    
    if (!response.ok) {
      return res.status(404).json({ error: "No se encontraron personajes" });
    }
  
    const data = await response.json();
    res.json({
      personajes: data,
    });
  });
  
  // Obtener información sobre un personaje específico por su nombre
  router.get('/personajes/:character', async (req, res) => {
    const { character } = req.params;
    const response = await fetch(`https://potterhead-api.vercel.app/api/characters/${character}`);
    
    if (!response.ok) {
      return res.status(404).json({ error: `Personaje ${character} no encontrado` });
    }
  
    const data = await response.json();
    res.json({
      personaje: data,
    });
  });

export default router;

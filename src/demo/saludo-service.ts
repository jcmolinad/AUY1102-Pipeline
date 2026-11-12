import express from 'express';
 
const app = express();
 
// Endpoint de demostración: devuelve un saludo personalizado.
// CORREGIDO: responde JSON, por lo que el navegador no interpreta HTML.
app.get('/saludo', (req, res) => {
  const nombre = String(req.query.nombre ?? '');
  res.json({ saludo: `Hola ${nombre}` });
});
 
app.listen(3000);
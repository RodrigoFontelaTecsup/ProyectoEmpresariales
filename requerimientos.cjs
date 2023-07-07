const fs = require('fs');

const requisitos = [
  'Requisito 1',
  'Requisito 2',
  'Requisito 3',
  // Agrega aquí los requisitos adicionales que necesites
];

const contenido = requisitos.join('\n');

fs.writeFile('requisitos.txt', contenido, 'utf8', (err) => {
  if (err) {
    console.error('Error al crear el archivo:', err);
    return;
  }

  console.log('Archivo requisitos.txt creado exitosamente.');
});

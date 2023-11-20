import React, { useState } from 'react';
import './saludointeractivo.css'; 

const SaludoInteractivo = () => {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleChange = (event) => {
    setNombre(event.target.value);
  }

  const handleClick = () => {
    setMensaje(`Hola, ${nombre}! ¡Bienvenido al componente interactivo de saludo en React!`);
  }

  return (
    <div className="saludo-interactivo-container">
      <h1>Componente Interactivo de Saludo</h1>
      <label>Ingrese su nombre: </label>
      <input type="text" value={nombre} onChange={handleChange} />
      <button onClick={handleClick}>Saludar</button>
      <p>{mensaje}</p>
    </div>
  );
}

export default SaludoInteractivo;

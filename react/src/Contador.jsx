import React, { useState, useEffect } from 'react';

function Contador() {
  // 1. Usar useState para manejar el estado de 'count'. Inicializamos en 0.
    const [count, setCount] = useState(0);

  // 2. Implementar useEffect para monitorear los cambios en 'count'.
    useEffect(() => {
    // 3. Ejecutar una condición que impide que supere 10.
    if (count > 10) {
      // 4. Si count > 10, se muestra una alerta...
        alert('El contador ha alcanzado el límite máximo de 10.');
      // 5. ... y se restablece el valor a 10.
        setCount(10);
    }
  }, [count]); // La matriz [count] le dice a useEffect que solo se ejecute cuando 'count' cambie.

    return (
    <div style={{ padding: '20px', textAlign: 'center', fontFamily: 'sans-serif' }}>
        <h2>Mi Contador</h2>
        <p style={{ fontSize: '24px' }}>
        Valor actual: <strong>{count}</strong>
        </p>
    
      {/* Botón para incrementar el valor de count */}
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <button
          onClick={() => setCount(prev => prev + 1)}
          style={{ padding: '10px 16px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px' }}
          aria-label="Incrementar"
        >
          +
        </button>

        <button
          onClick={() => setCount(prev => prev - 1)}
          style={{ padding: '10px 16px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '5px' }}
          aria-label="Disminuir"
        >
          -
        </button>

        <button
          onClick={() => setCount(0)}
          style={{ padding: '10px 16px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px' }}
          aria-label="Resetear"
        >
          Reset
        </button>
      </div>
    </div>
    );
}

export default Contador;
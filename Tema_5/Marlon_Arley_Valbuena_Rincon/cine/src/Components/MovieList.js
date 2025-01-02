import React from 'react';

const movies = [
  { id: 1, title: 'Avatar', description: 'Una aventura en Pandora.', image: 'https://hips.hearstapps.com/hmg-prod/images/avatar-poster-copia-1669121322.jpg' },
    { id: 2, title: 'Inception', description: 'Sueños dentro de sueños.', image: 'data:image/jpeg;base64,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' },
    { id: 3, title: 'Titanic', description: 'Una historia de amor épica.', image: 'data:image/jpeg;base64,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' }
  ];
  

  const MovieList = ({ onSelectMovie }) => {
    return (
      <div style={{ padding: '20px', backgroundColor: '#1e1e1e', color: 'white', borderRadius: '10px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Películas Disponibles</h2>
        <ul style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none', padding: 0 }}>
          {movies.map((movie) => (
            <li key={movie.id} style={{ backgroundColor: '#292929', borderRadius: '10px', padding: '15px', width: '250px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}>
              <img src={movie.image} alt={movie.title} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
              <h3 style={{ margin: '15px 0', color: '#f9a825' }}>{movie.title}</h3>
              <p style={{ fontSize: '14px', color: '#ccc' }}>{movie.description}</p>
              <button 
                onClick={() => onSelectMovie(movie)}
                style={{
                  backgroundColor: '#f9a825',
                  border: 'none',
                  padding: '10px 15px',
                  borderRadius: '5px',
                  color: '#1e1e1e',
                  cursor: 'pointer',
                  marginTop: '10px'
                }}
              >
                Ver Detalles
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default MovieList;
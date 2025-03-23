
import React from 'react';
import ComicsCard from './ComicsCard';
import comics from '../data/comics.js';

const ComicsList = () => {
  return (
    <div className="comics-list">
      {comics.map((comic, index) => (
        <ComicsCard 
          key={index}
          title={comic.title}
          image={comic.image}
          description={comic.description}
        />
      ))}
    </div>
  );
};

export default ComicsList;
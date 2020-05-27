import React from 'react';
import { MovieCard, Jumbotron, Carousel } from '../components';

const Home = ({ movieJumbotron, favoriteList, onAddListPressed, data }) => (
  <div className="home-container">
    <Jumbotron
      movie={movieJumbotron}
      favoriteList={favoriteList}
      onAddListPressed={movie => onAddListPressed(movie)}
    />

    <Carousel title="Series de zombies">
      {data.filter(movie => movie.genre === 'zombies').map(movie => (
        <MovieCard
          key={movie._id}
          movie={movie}
          favoriteList={favoriteList}
          onAddListPressed={movie => onAddListPressed(movie)}
        />
      ))}
    </Carousel>

    <Carousel title="Series de tecnología">
      {data.filter(movie => movie.genre === 'technology').map(movie => (
        <MovieCard
          key={movie._id}
          movie={movie}
          favoriteList={favoriteList}
          onAddListPressed={movie => onAddListPressed(movie)}
        />
      ))}
    </Carousel>
  </div>
);

export default Home;

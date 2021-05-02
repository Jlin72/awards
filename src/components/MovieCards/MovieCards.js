import React from 'react';

// Importing CSS
import './style.css'

// Importing components
import Card from '../Card/Card';

const MovieCards = ({movieCardAdditionalClasses, cardTitle, nomineeList, searchMovieList, buttonCb, buttonText, buttonClass, children}) => {

  const renderDisabled = (nominees, movieName) => {
    if(nominees) {
      if(nominees.length !==5) {
        if(nominees.includes(movieName)) {
          return true;
        }
      } else {
        return true;
      }
    }
  }

  // This function will render either the movie or nominee list depending on what values are passed to the MovieCard component
  const renderList = () => {
    if(searchMovieList) {
      return (searchMovieList[0] === 'undefined') ? <p>No movie found</p> : searchMovieList.map((movie, index) => <li key={index}><p className='movieTitle'>{movie.Title} ({movie.Year})<button className={buttonClass} disabled={renderDisabled(nomineeList, `${movie.Title} (${movie.Year})`)} id={`${movie.Title} (${movie.Year})`} onClick={buttonCb}>{buttonText}</button></p></li>)
    } else if (nomineeList) {
      return !nomineeList.length ? <p>No movie nominated yet</p> : nomineeList.map((movie, index) => <li key={index}><p className='movieTitle'>{movie}<button className={buttonClass} id={movie} onClick={buttonCb}>{buttonText}</button></p></li>)
    }
  }
  return(
      <Card additionalClasses={movieCardAdditionalClasses}>
        <h5 className='card-title'>{cardTitle}</h5>
        <ul>
          {renderList()}
        </ul>
        {children}
      </Card>
  )
}

export default MovieCards;
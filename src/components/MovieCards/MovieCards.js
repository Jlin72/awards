import React from 'react';

// Importing components
import DivRow from '../DivRow/DivRow';
import Card from '../Card/Card';

const MovieCards = ({movieCardAdditionalClasses, cardTitle, nomineeList, searchMovieList, buttonCb, buttonText, buttonClass}) => {

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

  const renderList = () => {
    if(searchMovieList) {
      return (searchMovieList[0] === 'undefined') ? <p>No movie found</p> : searchMovieList.map((movie, index) => <li key={index}>{movie.Title} ({movie.Year})<button className={buttonClass} disabled={renderDisabled(nomineeList, `${movie.Title} (${movie.Year})`)} id={`${movie.Title} (${movie.Year})`} onClick={buttonCb}>{buttonText}</button></li>)
    } else if (nomineeList) {
      return !nomineeList.length ? <p>No movie nominated yet</p> : nomineeList.map((movie, index) => <li key={index}>{movie}<button className={buttonClass} id={movie} onClick={buttonCb}>{buttonText}</button></li>)
    }
  }
  return(
      <Card additionalClasses={`col-6 ${movieCardAdditionalClasses}`}>
        <h5 className='card-title'>{cardTitle}</h5>
        <ul>
          {renderList()}
        </ul>
      </Card>
  )
}

export default MovieCards;
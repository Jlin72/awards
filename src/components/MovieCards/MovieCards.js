import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

// Importing components
import DivRow from '../DivRow/DivRow';
import Card from '../Card/Card';

const MovieCards = ({movieCardAdditionalClasses, cardTitle, nomineeList, searchMovieList, buttonCb, buttonText, buttonClass, droppableId, onDragEndCb}) => {

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
      return (searchMovieList[0] === 'undefined') ? <p>No movie found</p> : 
        searchMovieList.map((movie, index) => {
          return (
          <Draggable draggableId={movie.imdbID} index={index}  key={index}>
            {(provided) => {
              return(
                  <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    {movie.Title} ({movie.Year})<button className={buttonClass} disabled={renderDisabled(nomineeList, `${movie.Title} (${movie.Year})`)} id={`${movie.Title} (${movie.Year})`} onClick={buttonCb}>{buttonText}</button>
                  </li>
              )
            }}
          </Draggable>
        )})

    } else if (nomineeList) {
      return (!nomineeList.length ? <p>No movie nominated yet</p> : 
        nomineeList.map((movie, index) => { return (
          <Draggable draggableId={movie} index={index} key={index}>
            {(provided) => {
              return(
                  <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                    {movie}<button className={buttonClass} id={movie} onClick={buttonCb}>{buttonText}</button>
                  </li>
              )
            }}
          </Draggable>
        )}))
    }
  }
  return(
      <Card additionalClasses={`col-6 ${movieCardAdditionalClasses}`}>
        <h5 className='card-title'>{cardTitle}</h5>
        <DragDropContext onDragEnd={onDragEndCb}>
        <Droppable droppableId={droppableId} type='PERSON'>
          {( provided ) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {renderList()}
            </ul>
          )}
        </Droppable>
        </DragDropContext>
      </Card>
  )
}

export default MovieCards;
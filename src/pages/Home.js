import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

// CSS
import './style.css';

// Importing custom context and hooks
import { useStoreContext } from '../utils/GlobalState';
import useDebounce from '../utils/debouncedHook';

// ReactJS components
import Container from '../components/Container/Container';
import DivRow from '../components/DivRow/DivRow';
import SearchBar from '../components/SearchBar/SearchBar';
import MovieCards from '../components/MovieCards/MovieCards';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [state, dispatch] = useStoreContext();

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const searchInputRef = useRef();

  useEffect(() => {
    if(!searchTerm) {
      return;
    }

    if(debouncedSearchTerm) {
      axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=580ff57a&s=${debouncedSearchTerm}`)
      .then(({data}) => {
        console.log(data.Search);
        if(!data.Search) {
          return dispatch({
            type: 'ADDING_MOVIES',
            movies: ['undefined']
          })
        } else {
          return dispatch({
            type: 'ADDING_MOVIES',
            movies: data.Search
          })
        }
      });
    }
    console.log(state.nominees);
  }, [debouncedSearchTerm])

  const searchInputOnChange = () => {
    setSearchTerm(searchInputRef.current.value);
    console.log(searchInputRef.current.value);
  }

  const addingNominee = (e) => {
    console.log(e.target)
    if(state.nominees.length === 5) {
      return;
    }
    console.log(e.target.id);
    dispatch({
      type: 'ADDING_NOMINEE',
      nominee: e.target.id
    })
  }

  const removeNominee = (e) => {
    const indexOfNominee = state.nominees.indexOf(e.target.id);
    state.nominees.splice(indexOfNominee, 1);
    dispatch({
      type: 'REMOVING_NOMINEE',
      nominees: state.nominees
    })
  }

  const onDragEndCb = (result) => {
    console.log(result);
    // const { destination, source, draggableId } = result;
    // const movieListArray = Array.from(state.movies);
    // const [movedItem] = movieListArray.splice(source.index, 1);
    // console.log(movedItem);
    // console.log(destination);
    // const nomineeListArray = Array.from(state.nominees);
    // nomineeListArray.splice(destination.index, 0, movedItem);
    // console.log(nomineeListArray);
  }

  return(
    <Container>
      <SearchBar inputRef={searchInputRef} inputOnChangeCb={searchInputOnChange} />
      <DivRow additionalClasses='movieCardRow'>
        <MovieCards cardTitle={!searchTerm ? 'Enter movie title to start search' : `Results for "${searchTerm}"`} searchMovieList={state.movies} buttonText='Nominate' buttonCb={addingNominee} buttonClass='btn btn-outline-secondary' nomineeList={state.nominees} droppableId='movieLists' onDragEndCb={onDragEndCb} draggableId='yo' />
        <MovieCards cardTitle='Nominees' nomineeList={state.nominees} buttonText='Remove' buttonCb={removeNominee} buttonClass='btn btn-outline-secondary' droppableId='nomineeList' onDragEndCb={onDragEndCb} draggableId='no' />
      </DivRow>
    </Container>
  )
}

export default Home;
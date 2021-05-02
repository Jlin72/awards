// Importing third party npm packages
import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Parallax, ParallaxLayer} from '@react-spring/parallax';

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
import Landing from '../components/Landing/Landing'

const Home = () => {
  //Accessing indexedDB
  const request = indexedDB.open('awards', 1);
  request.onupgradeneeded = (event) => {
    let db = event.target.result;
    db.createObjectStore('nominees', {autoIncrement: true});
  }

  // Creating state varialbes for functionality
  const [searchTerm, setSearchTerm] = useState('');
  const [state, dispatch] = useStoreContext();

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const searchInputRef = useRef();

  useEffect(() => {
    if(!searchTerm) {
      return;
    }
    
    // The next function will only search the api if the user finished typing
    if(debouncedSearchTerm) {
      axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=580ff57a&s=${debouncedSearchTerm}`)
      .then(({data}) => {
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
  }, [debouncedSearchTerm]);

  useEffect(() => {
        // Accessing indexedDB on render
        request.onsuccess = () => {
          const transaction = request.result.transaction(["nominees"], "readwrite");
          const store = transaction.objectStore("nominees");
          const getNominees = store.getAll();
          getNominees.onsuccess = () => {
            if(getNominees.result.length > 0) {
              dispatch({
                type: 'FETCHING_NOMINEES',
                nominees: getNominees.result[0]
              })
            }
          }
        }
  }, [])

  const searchInputOnChange = () => {
    // Changes the searchTerm state, this will be used to search for movies
    setSearchTerm(searchInputRef.current.value);
  }

  const addingNominee = (e) => {
    // Prevent adding more nominees if the nominees array length is equal to 5
    if(state.nominees.length === 5) {
      return;
    }
    dispatch({
      type: 'ADDING_NOMINEE',
      nominee: e.target.id
    })
  }

  // The next function will use the id on the remove button to remove nominees
  const removeNominee = (e) => {
    const indexOfNominee = state.nominees.indexOf(e.target.id);
    state.nominees.splice(indexOfNominee, 1);
    dispatch({
      type: 'REMOVING_NOMINEE',
      nominees: state.nominees
    })
  }

  // Save nominees to the indexedDB
  const saveNominees = () => {
    
    const transaction = request.result.transaction(["nominees"], "readwrite");
    const store = transaction.objectStore("nominees");
    const getNominees = store.getAll();

    //If there is already a previous nominee list delete it and update it.
    getNominees.onsuccess = () => {
      if(getNominees.result.length > 0) {
        store.clear();
      }
      // Add the new list to indexedDB
    return store.add(state.nominees);
    }
  }

  return(
    <div>
      <Parallax pages={2} style={{ top: '0', left: '0' }}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          className='landing'
          >
          <Landing />
        </ParallaxLayer>

  <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: '#d3d3d3' }} />

  <ParallaxLayer
    offset={1}
    speed={0.5}
    >
    <Container additionalClasses='homeContainer'>
      <SearchBar inputRef={searchInputRef} inputOnChangeCb={searchInputOnChange} />
        <DivRow additionalClasses='movieCardRow'>
          <MovieCards cardTitle={!searchTerm ? 'Enter movie title to start search' : `Results for "${searchTerm}"`} searchMovieList={state.movies} buttonText='Nominate' buttonCb={addingNominee} buttonClass='btn btn-outline-secondary' nomineeList={state.nominees}  movieCardAdditionalClasses='movieList col-6' />
          <div className='col-6'>
            <DivRow>
              <MovieCards cardTitle='Nominees' nomineeList={state.nominees} buttonText='Remove' buttonCb={removeNominee} buttonClass='btn btn-outline-secondary' movieCardAdditionalClasses='col-12' >
              <DivRow additionalClasses='justify-content-end'>
                <button className='col-3 btn-primary btn' disabled={!state.nominees?.length} onClick={saveNominees}>Save</button>
              </DivRow>
              </MovieCards>
            </DivRow>
            
          </div>
          
        </DivRow>
    </Container>
    
  </ParallaxLayer>
</Parallax>
      
    </div>
  )
}

export default Home;
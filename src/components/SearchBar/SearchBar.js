import React from 'react';

// Importing css
import './style.css';

// Importing react components
import DivRow from '../DivRow/DivRow';
import Card from '../Card/Card';
import Input from '../Input/Input';

const SearchBar = ({inputOnChangeCb, inputRef}) => {
  return(
    <DivRow>
      <Card additionalClasses='col-12'>
          <form className='row' onSubmit={(e)=> e.preventDefault()}>
            <label htmlFor='movieInputSearch' className='form-label'>Movie Title</label>
            <div className='input-group'>
              <span className="input-group-text" id="inputSearch">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>
               </span>
              <Input inputId='movieInputSearch' inputClassName='form-control' inputAriaDescribedby='movieInputSearch' inputAriaLabel='Enter movie search'
              inputPlaceholder='Enter movie name' inputOnChangeCb={inputOnChangeCb} inputRef={inputRef} />
            </div>
          </form>
        </Card>
    </DivRow>
  )
}

export default SearchBar;
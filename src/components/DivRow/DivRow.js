import React from 'react';

// Importing CSS
import './style.css'

const DivRow = ({children, additionalClasses}) => {
  return(
    <div className={`row ${additionalClasses}`}>
      {children}
    </div>
  )
}

export default DivRow;
import React from 'react';

const Container = ({children, additionalClasses}) => {
  return(
    <div className={`container ${additionalClasses}`}>
      {children}
    </div>
  )
}

export default Container;
import React from 'react';

const Card = ({children, additionalClasses, ref, providedDroppable}) => {
  return(
    <div className={`card ${additionalClasses}`} ref={ref} {...providedDroppable}>
      <div className='card-body' ref={ref} {...providedDroppable}>
        {children}
      </div>
    </div>
  )
}

export default Card;
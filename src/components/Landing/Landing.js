import React from 'react';
import { animated, useSpring } from 'react-spring';
import './style.css';


const Landing = () => {
  const h1Style = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: false,
    delay: 200,
  });

  const pStyle = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: false,
    delay: 1000,
  })


  return(
    <div>
      <animated.h1 className='landingTitle' style={h1Style}>Welcome to the shoppify awards!</animated.h1>
      <br />
      <animated.p className='landingText' style={pStyle}>Scroll Down to start nominating movies</animated.p>
    </div>
  )
}

export default Landing;
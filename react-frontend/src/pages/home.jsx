import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../animation/Animation - 1701092715488.json'; // Replace with your animation file path

const LottieAnimation = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ width: '850px', height: '850px' }} // Adjust the width and height as needed
      />
    </div>
  );
};

export default LottieAnimation;

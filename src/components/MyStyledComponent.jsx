import React from 'react';
// import reallyAdorablePuppy from '../assets/images/cutestpuppy.jpg';

function MyStyledComponent() {

  return (
    <div>
      <p className="red-text">only this paragraph will get the style :)</p>
      <style jsx>{`
        .red-text {
          color: white;
        }
    `}</style>
    </div>
  );
}

// <div>
//   <img src={reallyAdorablePuppy}/>
// </div>
export default MyStyledComponent;

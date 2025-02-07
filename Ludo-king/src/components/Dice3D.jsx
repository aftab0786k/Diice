import React from 'react';
import './Dice3D.css';

const Dice3D = () => {
  const diceFaces = [
    { id: 1, face: 'front', number: 'one', dots: 1 },
    { id: 2, face: 'back', number: 'two', dots: 2 },
    { id: 3, face: 'left', number: 'three', dots: 3 },
    { id: 4, face: 'right', number: 'four', dots: 4 },
    { id: 5, face: 'top', number: 'five', dots: 5 },
    { id: 6, face: 'bottom', number: 'six', dots: 6 },
  ];

  return (
    <div className="diceContainer">
      <div className="scene">
        <div className="dice">
          {diceFaces.map((face) => (
            <div
              key={face.id}
              className={`diceFace ${face.face} ${face.number}`}
            >
              <div className="dotContainer">
                {Array.from({ length: face.dots }).map((_, index) => (
                  <div key={index} className="dot" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dice3D;
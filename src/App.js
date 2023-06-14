import "./App.css";
import { useState } from "react";

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
];

function App() {
  const [current, setCurrent] = useState(0);

  function nextImg() {
    setCurrent(current - 1 === images.length - 1 ? current - 1 : current + 1);
  }

  function prevImg() {
    setCurrent(current - 1 === 0 ? 0 : current - 1);
  }

  var lastPicture = (current - 1 === images.length - 2)
  const firstPicture = (current === 0);


  return (
    <div className="App">
      <div className="right-arrow" onClick={ !lastPicture ? nextImg : null }></div>
      <div>
        {images.map(
          (image, index) =>
            current === index && (
              <div key={image} className="slider">
                <img src={image} alt="image" />
              </div>
            )
        )}
      </div>
      <div className="left-arrow" onClick={ !firstPicture ? prevImg : null }></div>
    </div>
  );
}

export default App;

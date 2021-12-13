import './App.css';
import Glide from "@glidejs/glide";
import React from 'react';

const items = [
  "https://dummyimage.com/601x400/db07db/fff",
  "https://dummyimage.com/602x400/db07db/fff",
  "https://dummyimage.com/603x400/db07db/fff",
  "https://dummyimage.com/601x400/db07db/fff",
  "https://dummyimage.com/602x400/db07db/fff",
  "https://dummyimage.com/603x400/db07db/fff",
]
function App() {
  React.useEffect(() => {
    new Glide(".CaroSlider .Slider", {
      peek: 0,
      perView: 1,
      type: "carrusel",
      gap: 0,
    }).mount();
    new Glide(".CaroSliderCirculo .Slider", {
      peek: 0,
      perView: 4,
      type: "carrusel",
      gap: 0,
    }).mount();
  }, [])
  return (
    <div className="App">
      <div className="CaroSlider">
        <div className="Slider">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {items.map((i) => <div className="image" style={{ backgroundImage: `url(${i})` }} />)}
            </ul>
          </div>
          <div className="container">
            <div className="glide__bullets" data-glide-el="controls[nav]">
              {items.map((i, index) => (<button className="glide__bullet" data-glide-dir={`=${index}`}></button>))}
            </div>
          </div>
        </div>
        <div className="overBox"></div>
      </div>
      <div className="CaroSliderCirculo">
        <div className="Slider">
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {items.map((i, index) => <div className="circle">
                <div className="image" style={{ backgroundImage: `url(${i})` }} />
                <div className="data" >
                  <p>
                    Caracteristicas de la imagen {index}
                  </p>
                </div>
              </div>)}
            </ul>
          </div>
          <div className="container">
            <div className="glide__bullets" data-glide-el="controls[nav]">
              {items.map((i, index) => (<button className="glide__bullet" data-glide-dir={`=${index}`}></button>))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

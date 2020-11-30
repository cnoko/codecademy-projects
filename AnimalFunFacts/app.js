import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';
const content = [];
const images = [];
const showBackground = false;
const animalFacts = (
  <div>
    <h1>
    {title || 'Click an animal for a fun fact'}
    </h1>
    <p id="fact"></p>
  </div>
);
const background = (
        <img 
        class="background" 
        alt="ocean" 
        src="/images/ocean.jpg" />
);

content.push(
);
for (let animal in animals) {
  images.push(
        <img 
          key={animal} 
          className="animal" 
          alt={animal} 
          src={animals[animal].image}
          aria-label={animal}
          onClick={displayFact}
          role="button" />
  );
}
content.push(animalFacts)
if (showBackground)
 content.push(background);
content.push(
      <div className="animals">
        {images}
      </div>
);
function displayFact(e) {
  const key = e.target.alt;
  const selectedAnimal = animals[key];
  const optionIndex = Math.floor(Math.random() * selectedAnimal.facts.length);
  const fact = animals[key].facts[optionIndex];
  document.getElementById('fact').innerHTML = fact;
}
ReactDOM.render(
    <div>
      {content}
    </div>, document.getElementById('root'));
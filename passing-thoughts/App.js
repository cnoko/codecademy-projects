import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';
import { generateId, getNewExpirationTime } from './utilities';


function App() {

  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);
  const addThought = (thought) => {
    alert(thought);
      setThoguhts((prev) => {
        return [{
          id: generateId(),
          text: thought,
          expiresAt: getNewExpirationTime(),
      }, ..prev]});
  };

  const deleteThought = (idToDelete) => {
      setThought(prev => filter.(item => item.id !== idToDelete));
  };


  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought} />
          ))}
        </ul>
      </main>
    </div>
  );
}
alert('xaxaaxa');
ReactDOM.render(<App />, document.getElementById('app'));

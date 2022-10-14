import React, {createElement as e, useState} from 'react';
import { couldStartTrivia } from 'typescript';

function App() {

  const [count, setCount] = useState(0)
  // return (
  //  <h1>Hello React!!!</h1>
  // );

// return React.createElement('h1', {}, 'Hello from JS')
return React.createElement('div', {className:'container'}, [
  e('h1', {className:'font-bold', key:1}, `Test JSX ${count}`),
  e('button', {
  className:'py-2 px-4 border', 
  key:2,
  onClick: () => setCount(count+1)
  }, 'Click me')]);

}

export default App;

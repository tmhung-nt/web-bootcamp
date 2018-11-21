import React from 'react';
import ReactDOM from 'react-dom';

const update = (model = {time: 0, running: false}, intent) => {
	const updates = {
  	'TICK': (model) => Object.assign(model, {time: model.time + (model.running ?  1 : 0)}),
    'STOP': (model) => Object.assign(model, {running: false}),
    'START': (model) => Object.assign(model, {running: true})
  };
  return ( updates[intent] || ( () => model ))(model);
  // after "||" is just a function that will be execute after then with input param is 'model'
}

const view = (model) => {
	const minutes = Math.floor(model.time / 60);
  const seconds = model.time - minutes*60;
  const handler = (event) => {
    container.dispatch(model.running ? 'STOP' : 'START');
  }

  return (
    <div>
      <p>{minutes}:{seconds < 10 ? '0' : ''}{seconds}</p>
      <button onClick={handler}>{model.running ? 'STOP' : 'START'}</button>     
    </div>
  )
}

const createStore = (reducer) => {
  let internalState;
  let handlers = [];
  
  return {
    dispatch: (intent) => {
      internalState = reducer(internalState, intent);
      handlers.forEach( h => { h(); }); // invoke each function in the handlers
    },
    subscribe: (handler) => {
      handlers.push(handler);
    },
    getState: () => internalState
  };
}

let container = createStore(update);

const render = () => {
	ReactDOM.render(view(container.getState()),
       document.getElementById('root'));
}

container.subscribe(render);

setInterval( () => {
  container.dispatch('TICK');
}, 1000);

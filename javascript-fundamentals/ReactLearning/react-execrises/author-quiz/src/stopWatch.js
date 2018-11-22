import React from 'react';
import ReactDOM from 'react-dom';


let model = {
	time: 0,
  running: true
}

const handleClick = (event) => {
  console.log(event);
	model = event.target.textContent === 'RESET' ? update(model, 'RESET') : update(model, model.running? 'STOP' : 'START');
}

const view = (model) => {
	const minutes = Math.floor(model.time / 60);
  const seconds = model.time - minutes*60;
  const displayReset = model.running || model.time === 0 ? 'none' : '';
  return (
    <div>
      {minutes}:{seconds < 10 ? '0' : ''}{seconds}
      <br/>
      <button onClick={handleClick}>{model.running ? 'STOP' : 'START'}</button>
			<button style={{display: displayReset}}  onClick={handleClick}>RESET</button>      
    </div>
  )
}

const intents = {
	TICK: 'TICK',
  START: 'START',
  STOP: 'STOP',
  RESET: 'RESET'
}

const render = (model) => {
	ReactDOM.render(view(model), document.getElementById('root'));
}

const update = (model, intent) => {
	const updates = {
  	'TICK': (model) => Object.assign(model, {time: model.time + (model.running ?  1 : 0)}),
    'STOP': (model) => Object.assign(model, {running: false}),
    'START': (model) => Object.assign(model, {running: true}),
    'RESET': (model) => Object.assign(model, {time: 0})
  };
  return updates[intent](model);
}

render(model);
setInterval( () => {
    model = update(model, 'TICK');
    console.log(model);
		render(model);
}, 1000);

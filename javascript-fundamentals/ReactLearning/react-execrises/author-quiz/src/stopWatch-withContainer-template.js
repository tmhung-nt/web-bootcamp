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
    const handleClick = (event) => {
  
    }
    return (
        <div>
            <p>{minutes}:{seconds < 10 ? '0' : ''}{seconds}</p>
            <button onClick={handler}>{model.running ? 'STOP' : 'START'}</button>      
        </div>
  )
}

let container = {};

const render = () => {
	ReactDOM.render(view(),
       document.getElementById('root'));
}



render(model);
setInterval( () => {

}, 1000);

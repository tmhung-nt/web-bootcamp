// Write JavaScript here and press Ctrl+Enter to execute

// simple example
// const Button = (props) => {
// 	return (
//   	<button>Go</button>
//   );
// };

// React Component which can render automatically when change(s) come(s)
// first, our component needs to have a state
// --> JS function can't have a state
// --> need a JS Class here

class Button extends React.Component {
    // normal constructor
       // constructor(props){
       // super(props);
       // this.state = { counter: 0};
       // }
     
     // short hand constrcutor
     state = {counter: 2};
     
     handleClick = () => {
       // asynchonous way (just schedule the update), may cause bad performance (when there are multiple setState calls) because it's depend on previous state
         // this.setState({
         // counter: this.state.counter + 1
         // })
       
       // better way
       this.setState((prevState) => ({
           counter: prevState.counter + 1
       }));
     };
     
     render(){
         return (
           <button onClick = {this.handleClick}>
             {this.state.counter}
         </button>
       )
     }
   }
   
   
   ReactDOM.render(<Button />, mountNode);
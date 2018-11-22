class Button extends React.Component {
    handleClick = () => this.props.onClickFunction(this.props.incrementValue);   
    
    render(){
        return (
          <button onClick={ this.handleClick }>
            +{this.props.incrementValue}
        </button>
      )
    }
  }
  
  const Result = (props) => {
      return (
        <div>{props.counter}</div>
    );
  };
  
  const Reset = (props) => {
      return (
        <button onClick={props.clickToResetCounter}>Reset Counter</button>
    );
  };  
  
  // we have two component now, but the global ReactDom just return 1 --> need a wrapper (parent) here --> App component is needed
  class App extends React.Component {
    state = {counter: 0};
    
    incrementCounter = (incrementValue) => {
        this.setState((prevState) => ({
          counter: prevState.counter + incrementValue
      }));
    };
    
    resetCounter = () => {
    	this.setState({counter: 0});
    }
    
  //   ============= can't pass below function to other object since this is a property function of the __proto__ property of this object  
  //   incrementCounter(){
  //     return this.setState((prevState) => ({counter: prevState.counter}));
  //   }
    
      render(){
        return (
        <div>
          <Button incrementValue={1} onClickFunction={this.incrementCounter}/>  
          <Button incrementValue={5} onClickFunction={this.incrementCounter}/>  
          <Button incrementValue={10} onClickFunction={this.incrementCounter}/>  
          <Button incrementValue={100} onClickFunction={this.incrementCounter}/>  
          <Result counter={this.state.counter}/>
          <Reset clickToResetCounter={this.resetCounter}/>
        </div>
      );  	
    }
  }
  
  
  
  
  ReactDOM.render(<App />, mountNode);
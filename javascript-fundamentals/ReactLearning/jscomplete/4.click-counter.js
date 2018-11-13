class App extends Component {
  state = {
    clicks: 0
  }
  
  onClickFunction = () => {
    // this.setState(prevState => ({
    //   clicks: prevState.clicks++  // can't use ++ here
    // }));
    this.setState((prevState) => ({
      clicks: prevState.clicks + 1
  }));
  }

  resetCounter = () => {
      this.setState({clicks: 0})
  }

  render(){
    return (
      <div>
        <div onClick={this.onClickFunction}>
          This div has been clicked {this.state.clicks} time.
        </div>
        <button onClick={this.resetCounter}>Reset counter</button>
      </div>
    )
  }
}

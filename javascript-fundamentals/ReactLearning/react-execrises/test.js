class EvenCounter  {
    constructor(props) {
      super(props);
      this.state = {clicks: 0};
      this.clickHandler = this.clickHandler.bind(this);
    }
    
    clickHandler(event) {
      const clicksNew = this.state.clicks + 1;
      this.setState({clicks: clicksNew});
      if (clicksNew % 2 === 0) {
        this.props.onEvenClick(clicksNew);
      }
    }
    
  }
  
  const abc = new EvenCounter('abc');
  abc.clickHandler;
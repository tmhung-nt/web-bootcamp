import React from 'react';

const Gate = ({isOpen, handleClick}) => {
  return (
    <button onClick={handleClick} >{isOpen ? 'Close' : 'Open'}</button>
  )
}

const MediaCard = ({title, body, imageUrl, newEle, isHide}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <img alt={title} src={imageUrl} style={{display: isHide}}/>
      {newEle}
    </div>
  )
}

class App extends React.Component {
  state = {
    isOpen: true,
    imageUrl: this.props.imageUrl
  }

  handleClick = () => {
    this.setState((prevState) =>( {
      isOpen: !prevState.isOpen
    }))
  }

 render(){
    return (
      <div>
        <Gate isOpen={this.state.isOpen} handleClick={this.handleClick}/>
        <MediaCard {...this.props} isHide={this.state.isOpen ? '' : 'none'}/>
      </div>
    )
  }
}

export default App;
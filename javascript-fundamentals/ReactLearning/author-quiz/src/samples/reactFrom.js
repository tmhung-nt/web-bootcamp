class Form extends React.Component  {
	state = {
        inputText: 'react',
        textAreaText: 'react',
        selectValue: 'sunday'
    }

    onFieldChange = (event) => {
        this.setState({event.target.name: event.target.value})
    }

	render() {
    return (
        <div>
          <input name="inputText" value={this.state.inputText} onChange={this.onFieldChange}></input>
          <br/>
          <textarea name="textAreaText" value={this.state.textAreaText} onChange={this.onFieldChange}></textarea>
          <br/>
          <select name="selectValue" value={this.state.selectValue} onChange={this.onFieldChange}>
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
          </select>
        </div>
      )

	}
}

ReactDOM.render(<Form />, mountNode);
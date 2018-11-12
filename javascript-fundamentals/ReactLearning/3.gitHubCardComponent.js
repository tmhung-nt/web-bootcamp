const Card = (props) => {
	return (
  	<div sytle={{margin: '1em'}}>
    	<img width= "75" src={props.avatar_url}/>
        <div style={{display: 'inline-block', marginLeft: 10}}>
            <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
            <div>{props.company}</div>
        </div>
    </div>
  );
};

// const CardList = (props) => {
//     return (
//         <div>
//             {<Card avatar_url="https://avatars1.githubusercontent.com/u/8445?v=4" name="Paul O’Shannessy" company="Facebook"/>}
//         </div>
//     );
// };

class Form extends React.Component {
    // ========= Use ref property of React Component class
        // handleSubmit = (event) => {
        //     event.preventDefault();
        //     console.log("Event: form submit " + this.userNameInput.value;
        // }; 
    // render(){
    //     return (
    //     <form onSubmit={this.handleSubmit}>
    //         <input type="text" 
    //             ref = {(input) => this.userNameInput = input} 
    //             placeholder="Github username"/>
    //         <button type="submit">Add card</button>
    //     </form>
    //     );
    // }

    // ======= use controlled component
    state = { userName: ''};
    handleSubmit = (event) => {
            event.preventDefault();
            // console.log("Event: form submit " + this.state.userName);
            // ajax... (fetch or axios)
            axios.get(`https://api.github.com/users/${this.state.userName}`)
                 .then( resp => {
                     this.props.onSubmitForm(resp.data);
                     this.setState({userName: ''});
                 })
    };

    render(){
        return (
        <form onSubmit={this.handleSubmit}>
            <input type="text" 
                value={this.state.userName}
                onChange = {(event) => this.setState({ userName: event.target.value})}
                placeholder="Github username"/>
            <button type="submit">Add card</button>
        </form>            
        );
    }
}

const CardList = (props) => {
    return (
        <div>
            {props.cards.map(card => <Card key={card.id} {...card}/>)}
        </div>
    );
}

class App extends React.Component {
    state = {
        cards: [
            {
                avatar_url: "https://avatars1.githubusercontent.com/u/8445?v=4",
                name: "Paul O’Shannessy",
                company: "Facebook"
            },
            {
                avatar_url: "https://avatars0.githubusercontent.com/u/18?v=4",
                name: "Wayne E. Seguin",
                company: "http://starkandwayne.com/"
            }
        ]
    }

    addNewCard = (cardInfo) => {
        // console.log(cardInfo);
        this.setState((prevState) => ({cards: prevState.cards.concat(cardInfo)}));
    }
    render(){
        return (
            <div>
                <Form onSubmitForm = {this.addNewCard}/>
                <CardList cards={this.state.cards}/>
            </div>
        );
    }
}

ReactDOM.render(<App />,  mountNode);
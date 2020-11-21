import React, {Component} from 'react';

class App extends Component {

    componentDidMount() {
        fetch('https://www.instagram.com/p/CH0P-qYhgxZ/?__a=1')
            .then(response => response.json())
            .then(data => this.setState({ data }));
    }

    render() {
    return (
        <div>
          dd
        </div>
    );
  }
}

export default App;
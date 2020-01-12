import React from 'react';
import Example from './Example';

class ToolsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tools: [{id: 1, name: "hammer", amount: 3}, {id: 2, name: "cos tam", amount: 3}, {
                id: 3, name: "narzedzie", amount: 3
            }]
        };
    }

    componentDidMount() {
        // fetch('http://34.89.239.19:8000/api/tools', {
        //   method: 'GET',
        //   headers: {
        //     Accept: 'application/json',
        //     'Content-Type': 'application/json'
        //   }
        // })
        //   .then(res => {
        //     return res.json();
        //   })
        //   .then(json => {
        //     this.setState({
        //       tools: json
        //     });
        //   });
    }

    render() {
        return (
            <div>
                <Example items={this.state.tools} name='Choose your tool' type='tools'/>
            </div>
        );
    }
}

export default ToolsList;

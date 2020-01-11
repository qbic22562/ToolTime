import React from 'react';
import Example from './Example';

class ToolsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tools: [] };
  }

  componentDidMount() {
    fetch('http://34.89.239.19:8000/api/tools', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.setState({
          tools: json
        });
      });
  }

  render() {
    return (
      <div>
        <Example items={this.state.tools} name='Choose your tool' />
      </div>
    );
  }
}

export default ToolsList;

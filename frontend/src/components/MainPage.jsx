import React, {Component} from 'react';
import ToolsList from "./toolsList/ToolsList";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {tools: []}
    }

    render() {
        return (
            <ToolsList/>
            )
    }
}

export default MainPage;

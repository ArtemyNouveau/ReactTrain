import React, {Component} from 'react'

class NameOutput extends Component{
    render() {
        return(
            <span className="card-title">{this.props.children}</span>
        )
    }
}

export default NameOutput
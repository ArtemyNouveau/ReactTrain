import React, {Component} from 'react'

class NameInput extends Component {
    render() {
        return (
            <div className="row">
                <div className="input-field col s8 offset-s2">
                    <input
                        onChange={this.props.input}
                        value={this.props.children}
                        id={this.props.id}
                        type="text"
                        className="validate"
                    />
                    <label className="active" htmlFor={this.props.id}>First Name</label>
                </div>
            </div>
        )
    }
}

export default NameInput
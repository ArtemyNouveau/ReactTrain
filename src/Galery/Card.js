import React, {Component} from 'react';
import Name from './NameOutput'
import Input from './NameInput'

import './card.css';


class Card extends Component {
    render() {
        const imgStyle = {
            width: '100%',
        };

        return (
            <div className="col s12 m6 l4 card-item">
                <div className="card">
                    <div className="card-image">
                        <img style={imgStyle} src={this.props.img} alt='img'/>
                        <Name>{this.props.name}</Name>
                        <a onClick={this.props.click}
                            className="btn-floating halfway-fab waves-effect waves-light red"><i
                            className="material-icons">delete_outline</i></a>
                    </div>
                    <div className="card-content">
                        <p>{this.props.children}</p>
                        <Input
                            id={this.props.id}
                            input={this.props.input}>
                            {this.props.name}
                        </Input>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;

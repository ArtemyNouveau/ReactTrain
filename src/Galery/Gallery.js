import React, {Component} from 'react';
import Card from './Card';
import './galery.css'

class Gallery extends Component {
    state = {
        persons: [
            {
                id: '1',
                name: 'Max',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum arcu vitae neque ullamcorper fringilla.',
                imgPath: 'https://kitchenbathroomcreations.com/wp-content/uploads/2016/01/testi-3.jpg'
            },
            {
                id: '2',
                name: 'John',
                description: 'Etiam accumsan elementum quam a venenatis. Donec venenatis quam et diam consectetur, sed vestibulum dolor feugiat.',
                imgPath: 'http://swipemarket.com/wp-content/uploads/2014/06/Untitled-6.jpg'
            },
            {
                id: '3',
                name: 'Ed',
                description: 'Nullam eu porta dui. Duis lacinia maximus ultricies. Quisque non pulvinar enim, volutpat cursus libero.',
                imgPath: 'http://auto-bahn.ru/wp-content/uploads/2017/03/testy3-1.png'
            }
        ]
    }


    deletePersonHandler = (personIndex) => {
        const persons = this.state.persons.slice();
        console.log(persons);
        persons.splice(personIndex, 1);
        this.setState({persons: persons})
    };

    nameChangedHandler = ( event, id ) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState( {persons: persons} );
    }

    render() {
        console.log();

        return (

            <div className="row card-list">
                {this.state.persons.map((person, index) => {
                    return (
                        <Card
                            key={person.id} click={() => this.deletePersonHandler(index)}
                            img={person.imgPath}
                            name={person.name}
                            input={(event) => this.nameChangedHandler(event, person.id)}
                            id={person.id}
                        >
                            {person.description}
                        </Card>
                    )
                })}
            </div>
        )
    }
}

export default Gallery
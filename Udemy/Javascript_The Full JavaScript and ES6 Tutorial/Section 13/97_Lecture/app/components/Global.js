import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap'

class Global extends Component {
    constructor(props){
        super(props);
        this.state = {
            query: ''
        }
    }
    search(){
        console.log("The User Searched for: ", this.state.query)
    }
    render(){
        // people forget the return
        return (
            <div className="Global">
                <h2>Book Explorer!</h2>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Search for a book"
                            onChange = {event => this.setState({query: event.target.value })}
                            onKeyPress = {event => {
                                if(event.key === 'Enter'){
                                    this.search();
                                }
                            }}
                        />
                        <InputGroup.Addon onClick={() => this.search()}>
                            <Glyphicon glyph="search"></Glyphicon>
                        </InputGroup.Addon>
                    </InputGroup>
                </FormGroup>
            </div>
        )
    }
}

// export
export default Global;
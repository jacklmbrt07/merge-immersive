import React, { Component } from 'react';

class Students extends Component {
    studentDiv = React.createRef();


    render() {
        return (
            <div ref={this.studentDiv} >
                <form action="/" method="POST">
                    <input type="text" name='username'
                        class="form-contorl" placeholder="Enter a GitHub Username"></input>
                    <button class=" btn btn-sucess" type="submit">GO!</button>
                </form>
            </div>
        );
    }
}


export default Students;
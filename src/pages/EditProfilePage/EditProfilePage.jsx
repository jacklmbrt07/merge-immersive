import React, { Component } from 'react';
import EditProfile from '../../components/EditProfile/EditProfile'
import NavBar from '../../components/NavBar/NavBar'


class EditProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '' // Not sureif even necessary
        }
    }
    render() {
        return (
            <React.Fragment>
                <NavBar />
            <div className='EditProfilePage'>
                <EditProfile {...this.props} />
            </div>
            </React.Fragment>
        )
    }
}

export default EditProfilePage;
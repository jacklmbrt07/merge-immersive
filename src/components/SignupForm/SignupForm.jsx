import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';
import 'bootstrap/dist/css/bootstrap.min.css'

class SignupForm extends Component {

    state = {
        name: '',
        email: '',
        discipline: '',
        classNo: '',
        password: '',
        passwordConf: ''
    };

    handleChange = (e) => {
        this.props.updateMessage('');
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userService.signup(this.state);
            this.props.handleSignUpOrLogin();
            this.props.history.push('/');

        } catch (err) {
            this.props.updateMessage(err.message);
        }
    }

    // isFormInvalid() {
    //     return !(this.state.name && this.state.email && this.state.password && this.state.discipline && this.state.classNo === this.state.passwordConf);
    // }

    render() {
        return (
            <div>
                <header className="header-footer">Sign Up</header>
                <form className="form-horizontal" onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" className="form-control" placeholder="Name" value={this.state.name} name="name" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <select name="discipline" className="form-control" value={this.state.discipline} onChange={this.handleChange}>
                                <option value="UXI">UX Immersive</option>
                                <option value="SEI">Software Engineer Immersive</option>
                                <option value="DSI">Data Science Immersive</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="text" className="form-control" placeholder="Class Number" value={this.state.classNo} name="classNo" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="password" className="form-control" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12">
                            <input type="password" className="form-control" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-12 text-center">
                            {/* disabled={this.isFormInvalid()} */}
                            <button className="btn btn-default" >Sign Up</button>&nbsp;&nbsp;
              <Link to='/'>Cancel</Link>
                        </div>
                    </div>
                </form >
            </div >
        );
    }
}

export default SignupForm;

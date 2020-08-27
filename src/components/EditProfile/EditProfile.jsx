import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import userService from "../../utils/userService";
import StateDrop from "./StateDrop";

//use this tutorial https://code.tutsplus.com/tutorials/creating-a-blogging-app-using-react-part-5-profile-page--cms-29131

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    this.state = {
      //do not change users email as it is tied to OAuth
      name: this.props.user.name,
      phoneNum: "",
      location: {
        city: "",
        unitedState: "",
      },
    };
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleLocation(event) {
    let clone = { ...this.state.location };
    clone[event.target.name] = event.target.value;
    this.setState({
      location: clone,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    userService.updateUser(this.props.user, this.state);
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="EditPage-container">
        <Container className="shadow p-3 mb-5 bg-white rounded">
          <Form onSubmit={this.handleSubmit}>
            <h3>Edit Your Profile</h3>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder={this.props.user.name}
                value={this.state.name}
                name="name"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Row>
              <Form.Group>
                <Form.Label>Phone #</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder={this.props.user.phoneNum}
                  value={this.state.phoneNum}
                  name="phoneNum"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Text>City</Form.Text>
              <Form.Control
                type="text"
                placeholder={this.props.user.location}
                value={this.state.location.city}
                name="city"
                onChange={this.handleLocation}
              />

              <StateDrop
                value={this.state.location.unitedState}
                name="unitedState"
                onChange={this.handleLocation}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={this.state.website}
                name="website"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                value={this.state.bio}
                name="bio"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant={"primary"} type="submit">
              Submit Changes
            </Button>{" "}
          </Form>
        </Container>
      </div>
    );
  }
}

export default EditProfile;

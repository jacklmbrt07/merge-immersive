import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "./EditProfile.css"
import userService from "../../utils/userService";
import StateDrop from "./StateDrop";
// import ImageUpload from "./ImageUpload"
import Emoji2 from "./Emoji2";
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
      avatar: '',
      favEmoji: '',
      website: '',
      bio: '',
      projects: '',
      hobbies: '',
      publications: '',
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
    this.props.history.push("/profile");
    console.log('before', event.target.name)
    console.log(this.props.user)
    // this.setState({
    //   [event.target.name]: event.target.value,
    // });
    console.log('after', event.target.name)
  };

  render() {
    return (
      <div className="EditPage-container">
        <Container className="shadow p-3 mb-5 bg-white rounded">
          <div className="form-header">
            <h3>Edit Your Profile</h3>
          </div>
          <Form className="edit-form" onSubmit={this.handleSubmit}>
            <br />
            <Form.Group>
              <Form.File
                id="exampleFormControlFile1"
                label="Upload Profile Image"
                value={this.state.avatar}
                name="avatar"
                onChange={this.handleChange}
              />
            </Form.Group>
            <br />
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
            <Form.Group>
              <Form.Label>Phone #</Form.Label>
              <Form.Control
                type="tel"
                placeholder='Enter Phone Number'
                value={this.state.phoneNum}
                name="phoneNum"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Text>City</Form.Text>
              <Form.Control
                type="text"
                placeholder='Enter City'
                value={this.state.location.city}
                name="city"
                onChange={this.handleLocation}
              />
              <br />
              <StateDrop
                value={this.state.location.unitedState}
                name="unitedState"
                onChange={this.handleLocation}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Favorite Emoji</Form.Label>
              <Emoji2
                value={this.state.emoji2}
                name="favEmoji"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Portfolio</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Portfolio"
                value={this.state.website}
                name="website"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Publications/Article Links</Form.Label>
              <Form.Text><em>Please seperate by a comma ","</em></Form.Text>
              <Form.Control
                type="text"
                placeholder="Enter an Publications or Articles"
                value={this.state.publications}
                name="publications"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Project Links</Form.Label>
              <Form.Text><em>Please seperate by a comma ","</em></Form.Text>
              <Form.Control
                type="text"
                placeholder="Enter Projects Links"
                value={this.state.projects}
                name="projects"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Hobbies</Form.Label>
              <Form.Text><em>Please seperate by a comma ","</em></Form.Text>
              <Form.Control
                type="text"
                placeholder="What are your hobbies?"
                value={this.state.hobbies}
                name="hobbies"
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
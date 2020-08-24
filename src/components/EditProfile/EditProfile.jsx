import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

class EditProfile extends Component {
  state = {
    //do not change users email as it is tied to OAuth
    name: "",
    phoneNum: "",
    location: "",
    favEmoji: "",
    projects: [],
    hobbies: [],
    publications: [],
    website: "",
    password: "",
    bio: "",
  };
  
  handleChange = (event) => {};
  handleSubmit = (event) => {
    event.preventDefault();
    // submit();
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
                placeholder=""
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
                  placeholder=""
                  value={this.state.name}
                  name="phone"
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder=""
                  value={this.state.name}
                  name="password"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form.Row>
            <Form.Group>
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={this.state.name}
                name="location"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={this.state.name}
                name="website"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Bio</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                value={this.state.name}
                name="website"
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

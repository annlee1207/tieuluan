import React, { Component } from "react";

/* Import Components */
import Input from "../formContainers/Input";
import TextArea from "../formContainers/TextArea";
import Button from "../formContainers/Button";

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: "",
        email: "",
        sdt: "",
        about: ""
      },

    };
    this.handleTextArea = this.handleTextArea.bind(this);
    this.handleSDT = this.handleSDT.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleFullName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleEmail(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          email: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleSDT(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          sdt: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    let email = e.target.email;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value,
          [email]: value
        }
      }),
      () => console.log("emaildasd"+this.state.newUser)
    );
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          about: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }


  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;
    console.log(userData)
    fetch("http://example.com", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        name: "",
        email: "",
        sdt: "",
        about: ""
      }
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          inputType={"text"}
          title={"TÊN"}
          name={"name"}
          value={this.state.newUser.name}
          handleChange={this.handleInput}
        />{" "}
        {/* Name of the user */}
        <Input
          inputType={"text"}
          title={"EMAIL"}
          value={this.state.newUser.email}
          handleChange={this.handleEmail}
        />{" "}
        {/*Email of the user */}
        <Input
          inputType={"number"}
          name={"ĐIỆN THOẠI"}
          title={"SDT"}
          value={this.state.newUser.sdt}
          handleChange={this.handleSDT}
        />{" "}
        {/* Age */}
        
        {/* Skill */}
        <TextArea
          title={"LỜI NHẮN"}
          rows={10}
          value={this.state.newUser.about}
          name={"currentPetInfo"}
          handleChange={this.handleTextArea}
        />
        {/* About you */}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"GỬI"}
          style={buttonStyle}
        />{" "}
        {/*Submit */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"XÓA"}
          style={buttonStyle}
        />{" "}
        {/* Clear the form */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;

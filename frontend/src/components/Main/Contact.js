import React, { Component } from 'react';
import "./mainstyles.css";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
        firstName: "",
        lastName: "",
        email: "",
        msg: "",
        showInvalidMsg: false,
        showSubmitMsg: false
        };
    }

    handleInputChange(event) {
        event.preventDefault();
        let value = event.target.value;
        const name = event.target.name;
        this.setState({ [name]: value });
    }

    handleFormSubmit(event) {
        event.preventDefault();
        if (this.state.firstName === "" || this.state.lastName === "" || this.state.email === "" || this.state.msg === "") {
            this.setState({ showInvalidMsg: true });
          this.setState({ showSubmitMsg: false });
        } else {
          this.setState({ showInvalidMsg: false });
          this.setState({ showSubmitMsg: true });
        } 
    }

    render() {
        return (
        <div id="contact">
            <h2>Contact Me</h2>
            <div id="content-container">
                <h4>Let's connect!</h4>
                <p>I am currently looking for new projects to work on and would love to collaborate.</p>
                <p>Please reach out with any comments, questions, or just to say hi.</p>
            </div>
            <div id="contact-form" className={this.props.showForm ? "show" : "hide"}>
                <form>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name</label>
                        <input 
                            type="text" 
                            name="firstName" 
                            id="firstName"
                            value={this.state.firstName} 
                            onChange={this.handleInputChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input 
                            type="text" 
                            name="lastName" 
                            id="lastName"
                            value={this.state.lastName} 
                            onChange={this.handleInputChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            id="email"
                            value={this.state.email} 
                            onChange={this.handleInputChange.bind(this)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="msg">Message</label>
                        <textarea 
                            type="text" 
                            name="msg" 
                            id="msg"
                            value={this.state.message} 
                            onChange={this.handleInputChange.bind(this)}
                        >
                        </textarea>
                    </div>
                    <div id="button-container">
                        <button id="submit-msg-btn" onClick={this.handleFormSubmit.bind(this)}>
                            Send me a message
                        </button>
                        <p id="form-error" className={this.state.showInvalidMsg ? "show" : "hide"}>
                            Please fill out every field
                        </p>
                        <p id="form-success" className={this.state.showSubmitMsg ? "show" : "hide"}>
                            Thanks for the message!
                        </p>
                    </div>
                </form>
            </div>
            
        </div>
        );
    }
}

export default Contact;
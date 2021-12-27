import React, { useState } from 'react';
import { toast } from 'react-toastify'; 
import firebase from "../../firebase"
import { useHistory } from 'react-router-dom';

const PhoneAuth = () => {
    let history=useHistory()
    let [state, setState] = useState({
        loading: false,
        phone: ""
    })
    let { loading, phone } = state;
    let handleChange = e => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value });

    }
    let handleSubmit = async e => {
        e.preventDefault();
        try {
            setState({ loading: true })
            let recapthaContainer = new firebase.auth.RecaptchaVerifier("recaptcha-Container")
            let ConfirmationMessage = await firebase.auth().signInWithPhoneNumber(phone, recapthaContainer)
            let code = window.prompt("enter otp");
            ConfirmationMessage.confirm(code);
            toast.success("sucessfully loggedin")
            history.push("/userHome/profile")
            console.log(phone)
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
      <section id="authBlock">
        <article>
          <div className="authcontent">
            <h1>ENTER A PHONE NUMBER</h1>
            <p style={{ fontSize: "14px", paddingBottom: "20px" }}></p>
          </div>
          <div className="formContent">
            <div className="addForm">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label
                    htmlFor="password_reset"
                    style={{ marginLeft: "45mm" }}
                  >
                    Enter a phone number
                  </label>
                  <input
                    type="text"
                    name="phone"
                                    required
                                    value={phone}
                                    onChange={handleChange}
                    style={{ marginLeft: "30mm" }}
                  />
                            </div>
                            <div id="recaptcha-Container">

                            </div>
                <div className="form-group btn-group">
                 <button>Send</button>
                </div>
              </form>
            </div>
          </div>
        </article>
      </section>
    );
}

export default PhoneAuth

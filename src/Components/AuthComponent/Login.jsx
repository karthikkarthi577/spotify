import React from 'react'
import Loginform from './Loginform';
import Logo from "../../Pages/HeaderComponent/Logo";
import "./auth.css";
import { useHistory } from 'react-router-dom';
import SocialLogin, { Googleprovider, FacebookProvider } from './LoginwithSocial';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


const Login = () => {
  let history= useHistory()
  let HandleClick = async provider => {
    try {
      await SocialLogin(provider);
      toast.success("sucessfully logged in")
      history.push("/userHome/profile")
    } catch (error) {
      toast.error(error.message)
    }
      
  }
  
  return (
    <section id="authBlock">
      <article>
        <Logo />
        <div className="authContent">
          <h1>To continue, log in to Spotify.</h1>
          <div>
            <button className="btn" onClick={() => { HandleClick(FacebookProvider) }
            }>
              <span> <i class="fab fa-facebook-f" style={{ padding: "5px", background: "transparent" }}></i>
                Sign up with FaceBook</span>
            </button>
            <button className="btn2">CONTINUE WITH APPLE</button>
            <button className="btn" onClick={() => HandleClick(Googleprovider)}>CONTINUE WITH GOOGLE</button>
            {/* <button className="btn3">CONTINUE WITH PHONE NUMBER</button> */}
          </div>
          <Link className="btn" to="/phone-auth">
            continue with the phone number
           </Link> 
          <p className="orBlock">
            <strong>or</strong>
          </p>
        </div>
        <div className="formContent">
          <Loginform />
        </div>
      </article>
    </section>
  );

}
export default Login

import React, {
  Fragment,
  useContext,
  useState,
  useEffect,
  useRef,
} from "react";

import { Link } from "react-router-dom";
import { AuthContextApi } from './../../Apis/AuthContent';
import firebase from "firebase";
import { toast } from 'react-toastify';
const HeaderMenu = () => {
  let AUTH = useContext(AuthContextApi);
  let [toggle, setToggle] = useState(false);
  let toggleElement = useRef();
  let childRef = useRef();
  let ToggleIt = () => {
    setToggle(!toggle);
  };
  const handleClickOutside = event => {
    if (
      childRef.current &&
      toggleElement.current &&
      !toggleElement.current.contains(event.target) &&
      !childRef.current.contains(event.target)
    ) {
      setToggle(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  let Logout = () => {
    firebase.auth().signOut().then(_ => {
      toast.success('successfully logged out');
      window.location.assign('/login')
    }).catch(err => toast.error(err.message));
  }
  console.log(AUTH);
  let AnonymousUser = () => (
    <Fragment>
      <li>
        <Link to="/">Premium</Link>
      </li>

      <li>
        <Link to="/">Support</Link>
      </li>

      <li>
        <Link to="/">Download</Link>
      </li>

      <li className="bar"></li>

      <li>
        <Link to="/signup">SignUp</Link>
      </li>

      
      <li>
        <Link to="/login">Login</Link></li>
      
    </Fragment>
  );
  let AuthenticatedUser = () => (
    <Fragment>
      <div
        style={{ paddingRight: "560px", margin: "30px 40px", fontSize: "50px",display:"flex" }}
      >
        <i
          class="fad fa-chevron-circle-left"
          style={{ color: "white", padding: "5px", fontSize: "50px" ,flexDirection:"row",marginTop:"-3px"}}
        ></i>

        <i class="fad fa-chevron-circle-right" style={{ color: "white" }}></i>
      </div>

      <button
        style={{
          borderRadius: "20px",
          background: "#000",
          color: "white",
          padding: "10px",
          margin: "20px 12px",
          border: "1px solid white",
          width: "33mm",
          height: "47px",
        }}
      >
        UPGRADE
      </button>
      <li>
        <figure className="profile_img" ref={toggleElement} onClick={ToggleIt}>
          <img src={AUTH.photoURL} alt={AUTH.displayName} />
          <figcaption style={{ fontSize: "25px" }}>
            {AUTH.displayName}
            <i
              class="fas fa-caret-down"
              style={{ fontSize: "25px", padding: "10px" }}
            ></i>
          </figcaption>
        </figure>
      </li>
      <div
        ref={childRef}
        className="dropProfile"
        style={toggle === true ? { display: "block" } : { display: "none" }}
      >
        <ul>
          <Link>
            <li className="list">Account</li>
          </Link>
          <Link to="/userhome/profile">
            <li className="list">Profile</li>
          </Link>
          <Link>
            <li className="list">Upgrade to Premium</li>
          </Link>
          <Link>
            <li className="list" onClick={Logout}>
              Logout
            </li>
          </Link>
        </ul>
      </div>
    </Fragment>
  );
  return (
    <Fragment>
      <nav>
        <ul className="ul">
          {AUTH ? <AuthenticatedUser /> : <AnonymousUser />}
        </ul>
      </nav>
    </Fragment>
  );
};

export default HeaderMenu;

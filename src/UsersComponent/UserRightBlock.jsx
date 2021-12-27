import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import AudioDetails from "../Components/AudioComponent/AudioDetails";
// import AudioList from "../Components/AudioComponent/AudioList";
import CreatePlaylist from "../Components/AudioComponent/CreatePlaylist";
import MusicHome from "../Components/AudioComponent/MusicHome";
import Profile from "./ProfileComponents/Profile";
import ProfileUpload from "./ProfileComponents/ProfileUpload";

const UserRightBlock = () => {
  let { id } = useParams();
  return (
    <Fragment>
      <div className="userRightBlock">
        {id === "profile" && <Profile />}
        {id === "photo_upload" && <ProfileUpload />}
        {id === "create-play-list" && <CreatePlaylist />}
        {id === "music-home" && <MusicHome />}

        <footer> <AudioDetails /></footer>
      </div>
    </Fragment>
  );
};

export default UserRightBlock;

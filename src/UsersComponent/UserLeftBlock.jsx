import React from "react";
import { Link } from "react-router-dom";

const UserLeftBlock = () => {
  return (
    <section className="userLeftBlock">
      <article>
        <ul>
          <li>
            <i class="fal fa-home" style={{ fontSize: "25px" }}></i>
            <Link to="/userHome/music-home">Home</Link>
          </li>
          <li>
            <i class="fas fa-search" style={{ fontSize: "25px" }}></i>
            <a href="#">Search</a>
          </li>
          <li>
            <i class="fal fa-books" style={{ fontSize: "25px" }}></i>
            <a href="#">Your Library</a>
          </li>

          <li>
            <i class="fas fa-plus-square" style={{ fontSize: "25px" }}></i>
            <Link to="/userHome/create-play-list">Create Playlist</Link>
          </li>
          <li>
            <i class="fas fa-heart-square" style={{ fontSize: "25px" }}></i>
            <a href="#">Liked songs</a>
          </li>
        </ul>
        <div
          className="horizontalLine"
          style={{ position: "absolute", left: " 0px", top: "350px" }}
        >
          <hr />
        </div>
        <div className="install" style={{ marginTop: "500px" }}>
          <i class="fal fa-arrow-circle-down" style={{ fontSize: "25px" }}></i>
          <a href="#">Install</a>
        </div>
      </article>
    </section>
  );
};

export default UserLeftBlock;

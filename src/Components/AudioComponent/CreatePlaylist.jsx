import React, { Fragment, useState } from "react";
import "./Audio.css";
import firebase from "../../firebase";
import { toast } from "react-toastify";

let genre = ["Blues", "Classical", "Country", "Disco", "HipHop", "Jazz"];

const CreatPlayList = () => {
  let [state, setState] = useState({
    audio_title: "",
    audio_artist: "",
    audio_language: "",
    audio_category: "",
    audio_details: "",
    loading: "false",
    audio_poster: "",
    audio_file: "",
    barStatus: "false",
    progress: 0,
  });
  let {
    audio_title,
    audio_artist,
    audio_language,
    audio_category,
    audio_details,
    loading,
    barStatus,
    progress,
    audio_poster,
    audio_file,
  } = state;
  let [poster, setPoster] = useState("");
  let [AudioFile, setAudioFile] = useState("");

  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  let handlePoster = e => {
    setPoster({ [e.target.name]: e.target.files[0] });
  };
  let handleAudioFile = e => {
    setAudioFile({ [e.target.name]: e.target.files[0] });
  };
  let handleSubmit = async e => {
    e.preventDefault();
    try {
      setState({ loading: true });

      let AUDIO_POSTER = poster.audio_poster.name;
      let AUDIO_FILE = AudioFile.audio_file.name;
      let audio_storage = firebase
        .storage()
        .ref(`/music-poster/${AUDIO_POSTER}`)
        .put(poster.audio_poster);
      let Mp3_storage = firebase
        .storage()
        .ref(`/music-Files/${AUDIO_FILE}`)
        .put(AudioFile.audio_file);
      Mp3_storage.on(
        "state_chaned",
        snapshot => {
          let progressBar =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setState({ loading: true, progress: progressBar, barStatus: true });
        },
        err => {
          throw err;
        },
        async () => {
          let DownloadPoster = await firebase
            .storage()
            .ref("music-poster")
            .child(AUDIO_POSTER)
            .getDownloadURL();
          let DownloadMp3 = await firebase
            .storage()
            .ref("music-Files")
            .child(AUDIO_FILE)
            .getDownloadURL();
          setAudioFile(DownloadMp3);
          firebase
            .database()
            .ref("audio_library")
            .push({ ...state, DownloadMp3, DownloadPoster });

          toast.success("sucessfully audio file is uploaded");
        }
      );
    } catch (error) {
      toast.error(error.message);
    }
    //   setState({ loading: false });
  };

  let ProgressTemplate = () => {
    return (
      <progress value={progress} min={0} max={100}>
        {progress}
      </progress>
    );
  };
  return (
    <section id="AudioBlock">
      <div id="progressSection">
        {barStatus === true ? (
          <>
            <span>
              <ProgressTemplate />
            </span>
            <span>{Math.round(progress) + "%"}</span>
          </>
        ) : (
          ""
        )}
      </div>
      <article>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title" style={{ color: "white" }}>
              title
            </label>
            <input
              type="text"
              className="form-control"
              name="audio_title"
              placeholder="enter audio title"
              required
              value={audio_title}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="artist" style={{ color: "white" }}>
              Artist
            </label>
            <input
              type="text"
              className="form-control"
              name="audio_artist"
              value={audio_artist}
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="language" style={{ color: "white" }}>
              Language
            </label>
            <input
              type="text"
              className="form-control"
              name="audio_language"
              required
              onChange={handleChange}
              value={audio_language}
            />
          </div>
          <div className="form-group">
            <label htmlFor="audio_category" style={{ color: "white" }}>
              Audio Category
            </label>
            <select
              name="audio_category"
              value={audio_category}
              onChange={handleChange}
            >
              {genre.map((value, index) => (
                <Fragment key={index}>
                  <option value={value}>{value}</option>
                </Fragment>
              ))}
            </select>
          </div>
          <div className="form-group" style={{ color: "white" }}>
            <label htmlFor="audio_details"></label>
            <textarea
              name="audio_details"
              cols={10}
              rows={10}
              onChange={handleChange}
              value={audio_details}
            ></textarea>
          </div>
          <div className="form-group" style={{ color: "white" }}>
            <label htmlFor="audio_poster"> Poster</label>
            <input
              type="file"
              className="form-control"
              name="audio_poster"
              onChange={handlePoster}
              // value={audio_poster}
            />
          </div>
          <div className="form-group" style={{ color: "white" }}>
            <label htmlFor="audio_file">upload Audio Files</label>
            <input
              type="file"
              className="form-control"
              name="audio_file"
              // value={audio_file}
              onChange={handleAudioFile}
            />
          </div>

          <button
            className="btn-large"
            name="progress"
            style={{
              border: "1px solid white",
              borderRadius: "13px",
              width: "35mm",
              background: " green",
            }}
          >
            Submit
          </button>
        </form>
      </article>
    </section>
  );
};

export default CreatPlayList;

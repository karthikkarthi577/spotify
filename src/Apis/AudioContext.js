import React, { useState, useEffect, createContext } from "react";
import firebase from "../firebase";
export let AudioContextApi = createContext();

let AudioContextProvider = ({ children }) => {
  let [state, setstate] = useState([]);
  let [selectSong, setSelectSong] = useState("");
  let HandleSelect = audio => {
    setSelectSong(audio);
    console.log(selectSong);
  };
  useState(() => {
    let fetchAudios = async () => {
      // fetching data from the data base
      let audioList = firebase.database().ref("audio_library");
      // firebase event to fetch
      audioList.on("value", callback => {
        let SpotifyMusics = [];
        callback.forEach(audio => {
          let {
            DownloadMp3,
            DownloadPoster,
            audio_artist,
            audio_Category,
            audio_details,
            audio_languages,
            audio_title,
          } = audio.val();

          SpotifyMusics.push({
            id: audio.key,
            title: audio_title,
            artist: audio_artist,
            languages: audio_languages,
            cateogry: audio_Category,
            details: audio_details,
            poster: DownloadPoster,
            src: DownloadMp3,
          });
        });
        setstate(SpotifyMusics);
      });
    };
    fetchAudios();
  }, []);
  return (
    <AudioContextApi.Provider value={{ state, HandleSelect, selectSong }}>
      {children}
    </AudioContextApi.Provider>
  );
};
export default AudioContextProvider;

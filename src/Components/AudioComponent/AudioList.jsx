import React from "react";
import AudioItem from "./AudioItem"

const AudioList = props => {
  let { audio, HandleSelect } = props;
  
  return (
    <section id="musicHome">
      <article>
        {audio.map(x => {
          return <AudioItem key={x.id} audio={x} HandleSelect={HandleSelect} />;
        })}
      </article>
    </section>
  );
};

export default AudioList;

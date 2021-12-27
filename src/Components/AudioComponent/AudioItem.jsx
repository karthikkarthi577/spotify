import React from 'react'


const AudioItem = (props) => {
    console.log(props.audio.title);
    return (
      <div className="col-3" onClick={()=>props.HandleSelect(props.audio)}>
        <figure>
          <img src={props.audio.poster} alt={props.audio.title} />
            </figure>
            <h2>{ props.audio.title}</h2>
      </div>
    );
}

export default AudioItem

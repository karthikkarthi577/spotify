import { React ,useContext,useRef}from 'react';
// import Spinner from '../../Pages/Spinner/Spinner';
import { AudioContextApi } from '../../Apis/AudioContext';
import { useState } from 'react';
import "./Audio.css";
import { Fragment } from 'react';
import AudioList from './AudioList';



const MusicHome = () => {
    let AUDIO = useContext(AudioContextApi);
    // let [play, setPlay] = useState(false);
 
    
  

    return (
    //     <section id="musicHome">
    //         <article>
    //             {/* <h1 style={{ color: "red" }}>home</h1>
    //              */}
                
    //             {AUDIO === null ? (<Spinner />) : (
                    


    //                 AUDIO.map(audio => {
                        
    //                     // let {
    //                     //     id,
    //                     //     title,
    //                     //     artist,
    //                     //     languages,
    //                     //     category,
    //                     //     details,
    //                     //     poster,
    //                     //     src,
    //                     // } = audio;
    //                     // console.log(poster)

                        
    //                     return (
    //                       <div className="col-3" key={id}>
    //                         <figure>
    //                           <img src={poster} alt={title} />
    //                         </figure>
    //                         <h1>{title}</h1>
    //                         {/* <button>play</button> */}
    //                         <audio
    //                           src={src}
    //                           controls
                             
    //                         ></audio>
    //                       </div>
    //                     );
    //                 })
    //             )
                
            
    //         }
    //         </article>
            
    //    </section>
        
        <Fragment>{AUDIO.state.length >= 0 && (<AudioList audio={AUDIO.state}
       HandleSelect={AUDIO.HandleSelect} />)}</Fragment>
    
    
    
    )
}

export default MusicHome

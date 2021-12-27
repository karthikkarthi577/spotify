import React, { useContext } from 'react';
import { AudioContextApi } from '../../Apis/AudioContext'; 



const AudioDetails = () => {
    let currentSong = useContext(AudioContextApi);
    let playSong=currentSong.selectSong
    return (
        <section className='audioPlayer'>

            <article>
                {currentSong === null ? ("loading"):(
                <div className='_contextBlock'>
                    <header>
                        <h5>{playSong.title}</h5>
                    <p>
                        <img src={playSong.poster} alt={playSong.title} />
                    </p>
                    <main>
                        <audio autoPlay="true" src={playSong.src} controls style={{width:"1200px"}}></audio>
                        </main>
                    </header>
                        </div>
                    
            )}
            </article>
       </section>
    )
}

export default AudioDetails


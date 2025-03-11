import { myIcons, myMusic } from "../Fetches.jsx"
import { useState, useRef } from "react"

export const MusicPlayer = () => {

    const [currentSongIndex, setCurrentSongIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)
    const audioRef = useRef(new Audio(myMusic[currentSongIndex].src))


    const playPauseHandler = () => {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }

      const changeSong = (index) => {
        audioRef.current.pause();
        audioRef.current = new Audio(myMusic[index].src);
        setCurrentSongIndex(index);
        if (isPlaying) {
          audioRef.current.play();
        }
      }

      const nextSong = () => {
        const newIndex = (currentSongIndex + 1) % myMusic.length;
        changeSong(newIndex);
      }

      const prevSong = () => {
        const newIndex = (currentSongIndex - 1 + myMusic.length) % myMusic.length;
        changeSong(newIndex);
      }

      return (
        <div className="flex flex-row gap-x-10 text-2xl">

          <div>
              <img src={myMusic[currentSongIndex].cover} alt="song-cover" className="h-[100px] w-[100px]" />
          </div>

          <div className="flex flex-col gap-y-10 ">

            <h2 className="w-full space-x-5">Song Name: {myMusic[currentSongIndex].Name}</h2>
            <div className="flex flex-row w-full justify-between">
            <button onClick={() => prevSong()}>{<img src={myIcons.back} alt="backIcon" className="h-[16px] w-[16px]"/>}</button>
              {isPlaying ? <button onClick={() => playPauseHandler()}>{<img src={myIcons.pause} alt="pauseIcon" className="h-[16px] w-[16px]"/>}</button>: <button onClick={() => playPauseHandler()}>{<img src={myIcons.play} alt="playIcon" className="h-[16px] w-[16px]"/>}</button>}

              <button onClick={() => nextSong()}>{<img src={myIcons.next} alt="nextIcon" className="h-[16px] w-[16px]"/>}</button>
            </div>
          </div>

        </div>
      )
}

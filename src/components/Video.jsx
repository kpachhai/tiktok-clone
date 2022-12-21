import { useRef, useState } from 'react'
import './Video.css'

function Video({ url, song, description, channel, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)
  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause()
      videoRef.current.muted = true
      setPlaying(false)
    } else {
      videoRef.current.play()
      videoRef.current.muted = false
      setPlaying(true)
    }
  }
  return (
    <div className='video'>
      <video
        className='video__player'
        loop
        autoPlay
        preLoad='auto'
        muted
        ref={videoRef}
        onClick={onVideoPress}
        src={url}
      ></video>
    </div>
  )
}

export default Video

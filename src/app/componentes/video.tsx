"use client"
import { useState, useRef, useEffect } from 'react';
import styles from '../css/VideoPlayer.module.css';
import Image from 'next/image';
import Play from '../../../public/play.svg'


interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handlePlayButtonClick = () => {
    const video = videoRef.current;
    if (video) {
      video.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const video = videoRef.current;

    const updateProgress = () => {
      if (video && video.duration) {
        const percentage = (video.currentTime / video.duration) * 100;
        setProgress(percentage);
      }
    };

    if (video) {
      video.addEventListener('timeupdate', updateProgress);
    }

    return () => {
      if (video) {
        video.removeEventListener('timeupdate', updateProgress);
      }
    };
  }, [isPlaying]);

  return (
    <div className={styles.videoPlayer}>
      <video
        ref={videoRef}
        src={src}
        autoPlay
        muted
        onClick={handleVideoClick}
        className={styles.video}
      />
      {!isPlaying && (
          <Image className={styles.playButton} onClick={handlePlayButtonClick} src={Play} alt={'Play'} />
      )}
      <div className={styles.progressContainer}>
        <div
          className={styles.progressBar}
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;

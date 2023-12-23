import VideoPlayer from '../componentes/video';

const VSL = () => {
  const videoSource = '/vsl/video.mp4';

  return (
    <div>
      <VideoPlayer src={videoSource} />
    </div>
  );
};

export default VSL;

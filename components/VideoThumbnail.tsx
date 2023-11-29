interface VideoThumbnailProps {
    url: string;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ url }) => {
    return <img className="w-[200px] h-[100px]" src={url} alt={url} />;
};

export default VideoThumbnail;

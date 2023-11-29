import { Image } from 'antd';

interface VideoThumbnailProps {
    url: string;
    name: string;
}

const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ url, name }) => {
    return (
        <div className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <Image
                preview={false}
                className="w-[200px] h-[100px] rounded-xl"
                src={url}
                alt={url}
            />
            <p className="mt-2">{name}</p>
        </div>
    );
};

export default VideoThumbnail;

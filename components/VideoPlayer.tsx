import React from 'react';

interface VideoContentProps {
    videoId: string;
}

const VideoContent: React.FC<VideoContentProps> = ({ videoId }) => {
    // Fetch video details based on videoId
    // You can fetch data from an API or use dummy data for demonstration

    const videoDetails = {
        title: 'Sample Video Title',
        url: 'https://www.youtube.com/watch?v=' + videoId,
        description: 'Sample video description.',
    };

    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">{videoDetails.title}</h2>
            <iframe
                width="560"
                height="315"
                src={videoDetails.url}
                title={videoDetails.title}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="mb-4"
            ></iframe>
            <p>{videoDetails.description}</p>
        </div>
    );
};

export default VideoContent;

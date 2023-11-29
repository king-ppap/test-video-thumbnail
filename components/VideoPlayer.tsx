'use client';
import { apiGetVideoDetail } from '@/api/videos';
import { NextResponse } from 'next/server';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';

interface VideoContentProps {
    videoId: string;
}

const VideoContent: React.FC<VideoContentProps> = ({ videoId }) => {
    const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null);
    const getVideoDetail = async (id: string) => {
        const data = await apiGetVideoDetail(id);
        if (!data) {
            return NextResponse.json({ error: 'Not found' }, { status: 404 });
        }
        setVideoDetails(data as VideoDetails);
    };

    useEffect(() => {
        getVideoDetail(videoId);
    }, []);

    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">{videoDetails?.name}</h2>
            <ReactPlayer url={videoDetails?.url} controls={true} />
            <p>{videoDetails?.description}</p>
        </div>
    );
};

export default VideoContent;

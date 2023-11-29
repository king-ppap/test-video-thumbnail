'use client';
import { apiGetVideoDetail } from '@/api/videos';
import { NextResponse } from 'next/server';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import AppLoadingFullScreen from './app/AppLoadingFullScreen';

interface VideoContentProps {
    videoId: string;
}

const VideoContent: React.FC<VideoContentProps> = ({ videoId }) => {
    const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null);
    const [isLoadingVideoDetails, setIsLoadingVideoDetails] =
        useState<boolean>(true);

    const getVideoDetail = async (id: string) => {
        const data = await apiGetVideoDetail(id);
        if (!data) {
            return NextResponse.json({ error: 'Not found' }, { status: 404 });
        }
        setVideoDetails(data as VideoDetails);
        setIsLoadingVideoDetails(false);
    };

    useEffect(() => {
        getVideoDetail(videoId);
    }, []);

    return isLoadingVideoDetails ? (
        <AppLoadingFullScreen />
    ) : (
        <div className="">
            <ReactPlayer url={videoDetails?.url} controls={true} width="100%" volume={0.3} />
            <h2 className="text-2xl font-bold my-4">{videoDetails?.name}</h2>
            <p>{videoDetails?.description}</p>
        </div>
    );
};

export default VideoContent;

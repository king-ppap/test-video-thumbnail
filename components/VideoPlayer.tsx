'use client';
import { apiGetVideoDetail } from '@/api/videos';
import { NextResponse } from 'next/server';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import AppLoadingFullScreen from './app/AppLoadingFullScreen';
import { Result } from 'antd';

interface VideoContentProps {
    videoId: string;
}

const VideoContent: React.FC<VideoContentProps> = ({ videoId }) => {
    const [videoDetails, setVideoDetails] = useState<VideoDetails | null>(null);
    const [isLoadingVideoDetails, setIsLoadingVideoDetails] =
        useState<boolean>(true);
    const [isErrorVideoDetails, setIsErrorVideoDetails] = useState<any>(false);

    const getVideoDetail = async (id: string) => {
        try {
            const data = await apiGetVideoDetail(id);
            setVideoDetails(data as VideoDetails);
        } catch (error) {
            console.error(error);
            setIsErrorVideoDetails(error);
        } finally {
            setIsLoadingVideoDetails(false);
        }
    };

    useEffect(() => {
        getVideoDetail(videoId);
    }, []);

    if (isErrorVideoDetails) {
        return (
            <div className="w-full flex justify-center items-center text-white">
                <Result status="404" title="Not found" subTitle={videoId} />
            </div>
        );
    }

    return isLoadingVideoDetails ? (
        <AppLoadingFullScreen />
    ) : (
        <div className="">
            <ReactPlayer
                url={videoDetails?.url}
                controls={true}
                width="100%"
                volume={0.3}
            />
            <h2 className="text-2xl font-bold my-4">{videoDetails?.name}</h2>
            <p>{videoDetails?.description}</p>
        </div>
    );
};

export default VideoContent;

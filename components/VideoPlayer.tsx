'use client';
import { apiGetVideoDetail } from '@/api/videos';
import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
import React, { useEffect, useState } from 'react';

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
            <iframe
                width="560"
                height="315"
                src={videoDetails?.url}
                title={videoDetails?.name}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="mb-4"
            ></iframe>
            <p>{videoDetails?.description}</p>
        </div>
    );
};

export default VideoContent;

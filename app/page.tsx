'use client';

import { useVideos } from '@/api/videos';
import VideoThumbnail from '@/components/VideoThumbnail';
import AppLoadingFullScreen from '@/components/app/AppLoadingFullScreen';
import { Alert } from 'antd';
import Link from 'next/link';

export default function Home() {
    const videoList = useVideos();
    if (videoList.error)
        return (
            <div className="w-full bg-slate-700 flex justify-center items-center">
                {videoList.error && (
                    <Alert
                        message="Error: Can not get videos"
                        type="error"
                        showIcon
                    />
                )}
            </div>
        );

    const renderVideosThumbnailList = () => {
        return videoList.data.map((value) => (
            <Link
                href={`http://localhost:3000/watch?v=${value.id}`}
                key={value.id}
            >
                {' '}
                <VideoThumbnail url={value.thumbnail} name={value.name} />
            </Link>
        ));
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            {videoList.isLoading ? (
                <AppLoadingFullScreen />
            ) : (
                <div className="grid grid-flow-col sm:grid-cols-1 md:grid-cols-3 gap-4">
                    {renderVideosThumbnailList()}
                </div>
            )}
        </main>
    );
}

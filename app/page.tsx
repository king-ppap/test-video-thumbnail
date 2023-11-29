'use client';

import { useVideos } from '@/api/videos';
import VideoThumbnail from '@/components/VideoThumbnail';
import AppLoadingFullScreen from '@/components/app/AppLoadingFullScreen';
import { Alert } from 'antd';

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
            <VideoThumbnail url={value.thumbnail} />
        ));
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            {videoList.isLoading ? (
                <AppLoadingFullScreen />
            ) : (
                renderVideosThumbnailList()
            )}
        </main>
    );
}

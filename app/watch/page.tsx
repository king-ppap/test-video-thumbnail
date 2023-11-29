'use client'
import VideoContent from '@/components/VideoPlayer';
import { useSearchParams } from 'next/navigation';

export default function Home() {
    const searchParams = useSearchParams();

    const videoId = searchParams.get('v') || '';

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <VideoContent videoId={videoId} />
        </main>
    );
}

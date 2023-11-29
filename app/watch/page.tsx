'use client';
import VideoContent from '@/components/VideoPlayer';
import { useSearchParams } from 'next/navigation';

export default function Home() {
    const searchParams = useSearchParams();

    const videoId = searchParams.get('v') || '';

    return <VideoContent videoId={videoId} />;
}

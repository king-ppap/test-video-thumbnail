import useSWR from 'swr';
import { fetcher } from ".";

const useVideos = () => {
    const url = `/videos`;
    const { data, isLoading, error }: {
        data: VideoListResponse;
        isLoading: boolean;
        error: any;
    } = useSWR(url, (url) => fetcher(url));
    return { data, isLoading, error }
}

const apiGetVideoDetail = (uuid: string): Promise<VideoDetails> => {
    return fetcher(`/videos/${uuid}/`);
}

export {
    useVideos,
    apiGetVideoDetail,
}
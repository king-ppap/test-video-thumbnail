
type VideoListResponse = VideoDetails[]

interface VideoDetails {
    id: string
    name: string
    description: string
    url: string
    thumbnail: string
}
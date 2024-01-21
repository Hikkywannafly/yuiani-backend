export enum MediaFormat {
    TV = 'TV',
    TV_SHORT = 'TV_SHORT',
    MOVIE = 'MOVIE',
    SPECIAL = 'SPECIAL',
    OVA = 'OVA',
    ONA = 'ONA',
    MUSIC = 'MUSIC',
    MANGA = 'MANGA',
    NOVEL = 'NOVEL',
    ONE_SHOT = 'ONE_SHOT',
}


export interface ISource {
    id: string;
    title: string | ITitle;
    description?: string;
    url?: string;
    image?: string;
    imageHash?: string;
    cover?: string;
    coverHash?: string;
    status?: MediaStatus;
    rating?: number;
    type?: MediaFormat;
    releaseDate?: string;
    [x: string]: any; // other fields
}

export interface ITitle {
    romaji?: string;
    english?: string;
    native?: string;
    userPreferred?: string;
}

export enum MediaStatus {
    ONGOING = 'Ongoing',
    COMPLETED = 'Completed',
    HIATUS = 'Hiatus',
    CANCELLED = 'Cancelled',
    NOT_YET_AIRED = 'Not yet aired',
    UNKNOWN = 'Unknown',
}
export interface IEpisode {
    number: string;
    id: string;
    title?: string;
    isFiller?: boolean;
    description?: string;
    thumbnail?: string;
    section?: string;
    extra?: Record<string, string>;
}

export interface IEpisodeServer {
    name: string,
    url: string,
    extraData?: Record<string, string>
}

export interface IVideo {
    headers?: { [k: string]: string };
    intro?: Intro;
    outro?: Intro;
    subtitles?: ISubtitle[];
    sources: IVideoContainer[];
    download?: string;
    embedURL?: string;
}

/**
 * The start, and the end of the intro or opening in seconds.
 */
export interface Intro {
    start: number;
    end: number;
}


export interface ISubtitle {
    /**
     * The id of the subtitle. **not** required
     */
    id?: string;
    /**
     * The **url** that should take you to the subtitle **directly**.
     */
    url: string;
    /**
     * The language of the subtitle
     */
    lang: string;

}

export interface IVideoContainer {
    /**
     * The **MAIN URL** of the video provider that should take you to the video
     */
    url: string;
    /**
     * The Quality of the video should include the `p` suffix
     */
    quality?: string;
    /**
     * make sure to set this to `true` if the video is hls
     */
    isM3U8?: boolean;
    /**
     * set this to `true` if the video is dash (mpd)
     */
    isDASH?: boolean;
    /**
     * size of the video in **bytes**
     */
    size?: number;
    [x: string]: unknown; // other fields
}
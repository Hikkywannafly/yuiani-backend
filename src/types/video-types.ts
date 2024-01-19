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
    sources: IVideo[];
    download?: string;
    embedURL?: string;
}

export interface Intro {

}

export interface ISubtitle {

}
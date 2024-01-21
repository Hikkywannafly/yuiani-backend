import { Anime } from "../../modules";
import { ISource, IEpisodeServer, IEpisode, IVideo } from "../../types";
import { load } from 'cheerio';

class AnimeVSub extends Anime {

    override readonly name = " animeVSub";
    protected override baseUrl = 'https://animevietsub.io';
    protected override logo = 'https://cdn.animevietsub.io/data/logo/logoz.png';


    override search(): Promise<unknown> {

        throw new Error("Method not implemented.");
    }

    override async getAnimeInfo(animeId: string): Promise<ISource> {

        try {
            const res = await fetch(`${this.baseUrl}/phim/a-a${animeId}`);

            const data = await res.text();

            const $ = load(data);

            const title = $('.movie-title').text().trim();

            const source: ISource = {
                id: animeId,
                title: title,
            }

            return source;

        } catch (error) {
            console.log(error);
        }
    }

    override getEpisodesServer(): Promise<IEpisodeServer[]> {

        throw new Error("Method not implemented.");

    }

    override getEpisodeInfo(): Promise<IEpisode> {

        throw new Error("Method not implemented.");

    }

    override getVideoSources(): Promise<IVideo> {
        throw new Error("Method not implemented.");
    }


}
export default AnimeVSub;
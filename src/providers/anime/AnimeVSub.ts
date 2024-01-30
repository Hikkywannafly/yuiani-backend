import { Anime } from "../../modules";
import { ISource, IEpisodeServer, IEpisode, IVideo } from "../../types";
import { getAnilistMedia } from "../../utils/anilist";
import fetch from "node-fetch";
import { load } from 'cheerio';
import { parseNumberFromString } from '../../utils';

class AnimeVSub extends Anime {

    override readonly name = " animeVSub";
    protected override baseUrl = 'https://animevietsub.io';
    protected override logo = 'https://cdn.animevietsub.io/data/logo/logoz.png';
    public anilistId: string | number;

    override search(): Promise<unknown> {
        throw new Error("Method not implemented.");
    }

    override async getID(animeId: string | number): Promise<void> {
        try {
            const data = await getAnilistMedia(animeId);
            if (!data) {
                throw new Error("Anilist media not found");
            }
            this.anilistId = data.media.id;
        } catch (error) {
            console.log(error);
        }
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
    /**
     * 
     * 
     * 
     *
    **/

    override async getEpisodesServer(animeId: string): Promise<IEpisodeServer[]> {

        try {
            const res = await fetch(
                `${this.baseUrl}/phim/a-a${animeId}/xem-phim.html`
            );

            const $ = load(await res.text());

            const episodes: IEpisodeServer[] = $(".episode a")
                .toArray()
                .map((episodeEl) => {
                    const $el = $(episodeEl);
                    const name = $el.attr("title");
                    const number = parseNumberFromString(name, "Full").toString();
                    const id = $el.data("id").toString();
                    if (!name || !id) return null;

                    return { title: id, name, number };
                })
                .filter((a) => a);

            return episodes;

        } catch (error) {
            console.log(error);
        }

        throw new Error("Method not implemented.");

    }

    override async getEpisodeInfo(episodeId: string): Promise<IEpisode> {
        try {
            const res = await fetch(
                `${this.baseUrl}/ajax/player?v=2019a`,
                {
                    body: `episodeId=${episodeId}&backup=1`,
                    redirect: "manual",
                    method: "post",
                    headers: {
                        "content-type": "application/x-www-form-urlencoded",
                    },
                }
            );
            const data = await res.json();
            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
        throw new Error("Method not implemented.");
    }

    override getVideoSources(): Promise<IVideo> {
        throw new Error("Method not implemented.");
    }


}
export default AnimeVSub;
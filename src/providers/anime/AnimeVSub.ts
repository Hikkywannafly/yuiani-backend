import { Anime } from "../../modules";
import { ISource, IVideoServer, IEpisode, IVideo } from "../../types";
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
    override async getEpisodes(animeId: string): Promise<IEpisode[]> {
        try {
            const res = await fetch(
                `${this.baseUrl}/phim/a-a${animeId}/xem-phim.html`
            );

            const $ = load(await res.text());

            const episodes: IEpisode[] = $(".episode a")
                .toArray()
                .map((episodeEl) => {
                    const $el = $(episodeEl);
                    const title = $el.attr("title");
                    const number = parseNumberFromString(title, "Full").toString();
                    const id = $el.data("id").toString();
                    if (!title || !id) return null;
                    return { id, title, number };
                })
                .filter((a) => a);

            return episodes;

        } catch (error) {
            console.log(error);
        }
        throw new Error("Method not implemented.");
    }


    override async getVideoServer(episodeId: string): Promise<IVideoServer[]> {
        try {
            const response = await fetch(
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
            const data = await response.json();

            const $ = load(data?.html);

            const servers: IVideoServer[] = $("a")
                .toArray()
                .filter((el) => $(el).data("play") === "api")
                .map((el) => {
                    const $el = $(el);

                    const id = $el.data("id") as string;
                    const hash = $el.data("href") as string;
                    const name = $el.text().trim();

                    return { name, extraData: { id, hash }, embed: "" };
                });

            return servers;
        }
        catch (error) {
            console.log(error);
        }
        throw new Error("Method not implemented.");
    }

    override getVideoSources(): Promise<IVideo> {
        try {

        }
        catch (error) {
            console.log(error);

        }
        throw new Error("Method not implemented.");
    }


}
export default AnimeVSub;
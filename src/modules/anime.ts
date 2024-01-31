import { BaseModule } from ".";
import { ISource, IVideoServer, IEpisode, IVideo } from "../types"

abstract class Anime extends BaseModule {

  /**
    * if the provider has dub and it's avialable seperatly from sub set this to `true`
    */
  protected readonly isDubAvailableSeparately: boolean = false;

  abstract getID(animeId: string | number): Promise<any>;
  /**
      *  Anime information from the provider (source) provice the information of the anime
      */

  abstract getAnimeInfo(animeId: string, ...args: any[]): Promise<ISource>;
  /**
      * 
      */
  abstract getVideoServer(episodeId: string): Promise<IVideoServer[]>
  /**
      * 
      */
  abstract getEpisodes(animeId: string): Promise<IEpisode[]>;
  /**
      * 
      */
  abstract getVideoSources(_: IVideoServer, extraData?: Record<string, string>): Promise<IVideo>;

}


export default Anime;
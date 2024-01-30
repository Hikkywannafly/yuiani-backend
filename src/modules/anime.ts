import { BaseModule } from ".";
import { ISource, IEpisodeServer, IEpisode, IVideo } from "../types"

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
  abstract getEpisodesServer(animeId: string, ...args: any[]): Promise<IEpisodeServer[]>;
  /**
      * 
      */
  abstract getEpisodeInfo(animeId: string, ...args: any[]): Promise<IEpisode>;
  /**
      * 
      */
  abstract getVideoSources(animeId: string, ...args: any[]): Promise<IVideo>;

}


export default Anime;
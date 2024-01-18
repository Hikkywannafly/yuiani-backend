import { BaseModule } from ".";
import { ISource } from "../types"

abstract class Anime extends BaseModule {

  /**
    * if the provider has dub and it's avialable seperatly from sub set this to `true`
    */
  protected readonly isDubAvailableSeparately: boolean = false;
  /**
      *  Anime information from the provider (source) provice the information of the anime
      */
  abstract getAnimeInfo(animeId: string, ...args: any[]): Promise<ISource>;
  /**
      * 
      */
  abstract getEpisodesServer(animeId: string, ...args: any[]): Promise<unknown>;
  /**
      * 
      */
  abstract getEpisodeInfo(animeId: string, ...args: any[]): Promise<unknown>;
  /**
      * 
      */
  abstract getVideoSources(animeId: string, ...args: any[]): Promise<unknown>;

}


export default Anime;
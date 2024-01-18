export interface IBaseProvider {
    name: string;
    baseUrl: string;
    locales: string[];
    logo: string;
    isNSFW: boolean;
    isWorking: boolean;
}

abstract class BaseProvider {
    /**
    * Name of the provider
    */
    readonly name: string;

    /**
    * Base url of the provider
    */
    protected readonly baseUrl: string;
    /**
     * The lauguages the provider supports 
     *  must be in [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format
     */
    protected readonly locales: string[];


    protected readonly logo: string;


    protected readonly isNSFW: boolean = false;

    /**
     * Override source is working or not
     */
    protected readonly isWorking: boolean = true;


    get toString(): IBaseProvider {

        return {
            name: this.name,
            baseUrl: this.baseUrl,
            locales: this.locales,
            isWorking: this.isWorking,
            isNSFW: this.isNSFW,
            logo: this.logo
        }

    }

}

export default BaseProvider;
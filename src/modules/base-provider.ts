
export abstract class BaseProvider {
    /**
    * Name of the provider
    */
    name: string;

    /**
    * Base url of the provider
    */
    baseUrl: string;
    /**
     * The lauguages the provider supports 
     *  must be in [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) format
     */
    locales: string[];


    logo: string;

    readonly isNSFW: boolean = false;

    /**
     * Override source is working or not
     */
    readonly isWorking: boolean = true;


    get toString(): any {

        return {
            name: this.name,
            baseUrl: this.baseUrl,
            locales: this.locales,
            isWorking: this.isWorking
        }

    }

}
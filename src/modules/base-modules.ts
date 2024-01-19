import { BaseProvider } from "."

abstract class BaseModule extends BaseProvider {

    /**
     * Function to search the name of source
     * 
     */
    abstract search(query: any, ...args: any[]): Promise<unknown>;


}

export default BaseModule;
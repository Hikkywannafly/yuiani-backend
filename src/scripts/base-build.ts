import { handlePath, hasPath } from "../utils";
import * as  fs from "fs";

export enum ProviderTypePath {
    ANIME = "./src/providers/anime",
    MANGA = "manga",
    BOOKS = "books",
    COMICS = "comics",
    LIGHT_NOVELS = "light-novels",
    MOVIES = "movies",
    META = "meta",
    NEWS = "news",
    OTHERS = "others"
}

/* eslint-disable @typescript-eslint/no-unused-vars */
export const getProviderType = async () => {

    const providerType = handlePath("./src/providers");

    const data = await fs.promises.readdir(providerType);

    return data;
}

export const getProviderId = async (providerType: string, providerId: string) => {

    const providerFolder = handlePath(`./src/providers/${providerType}/${providerId}`);

    if (hasPath(providerFolder)) {
        throw new Error(`Provider ${providerId} not found`);
    }
    return providerFolder;

}





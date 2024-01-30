// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// import fetch from "node-fetch";
import AnimeVSub from "../src/providers/anime/AnimeVSub";
test("parse", async () => {
    const avs = new AnimeVSub();
    const data = await avs.getEpisodesServer("5152")
    console.log(data);

});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// import fetch from "node-fetch";
import AnimeVSub from "../src/providers/anime/AnimeVSub";
test("parse", async () => {
    const avs = new AnimeVSub();
    const data = await avs.getVideoServer("96102")
    const data2 = await avs.getVideoSources(data[0], data[0].extraData)
    console.log(data2)
});
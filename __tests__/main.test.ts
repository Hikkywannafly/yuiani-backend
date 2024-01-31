// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
// import fetch from "node-fetch";
import { getProviderType } from "../src/scripts/base-build";
test("parse", async () => {
    const data = getProviderType();
    console.log(data);
});
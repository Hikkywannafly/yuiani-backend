import { handlePath } from "../utils";
// import fs from "fs";

/* eslint-disable @typescript-eslint/no-unused-vars */
export const getProviderType = async () => {

    const providerType = handlePath("../providers");

    // const data = await fs.promises.readdir(providerType);

    return providerType;

}

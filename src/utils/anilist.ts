import axios from "axios";

export const getAnilistMedia = async (mediaId: number | string): Promise<any> => {

    try {
        const { data } = await axios({
            url: "https://graphql.anilist.co",
            method: "post",
            data: {
                query: `
            query ($id: Int) {
              Media (id: $id, type: ANIME) {
                id
                title {
                  romaji
                  english
                  native
                  userPreferred
                }
              }
            }
          `,
                variables: {
                    id: mediaId,
                },
            },
        });

        return data?.data?.Media;
    } catch (err) {
        console.error(err);
    }
};
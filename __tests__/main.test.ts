// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// eslint-disable-next-line @typescript-eslint/no-unused-vars

// import axios from "axios";

test("parse", async () => {

    // const { data: hmtl } = await axios.get("https://truyenconect.com/truyen/lop-hoc-biet-tuot/chuong-01-bai-thi-dac-biet-moi-trai-huan-luyen-hon-hop-220002",

    //     {
    //         headers: {
    //             "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:91.0) Gecko/20100101 Firefox/91.0"
    //         }
    //     }

    // );
    const parser = new DOMParser();

    const text = "<bookstore><book>" +
        "<title>Everyday Italian</title>" +
        "<author>Giada De Laurentiis</author>" +
        "<year>2005</year>" +
        "</book></bookstore>";




    const doc = parser.parseFromString(text, "text/html");

    console.log(`Test doc`, doc);

});
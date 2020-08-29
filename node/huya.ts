import axios from "axios";
var fs = require('fs');


export function main(url: string) {
    return new Promise(function (resolve, reject) {
        axios
            .get(url)
            .then(function (response: any) {
                const html: string = response.data;
                //"stream":hjh jh h.";
                const reg: RegExp = /(?<=("stream":[\s]*"))(.+?)(?=("[\s]*\}))/g;
                const result: any = html.match(reg);
                console.log("1----------------");
                console.log(result);
                if (result && result.length >= 1) {
                    const infoObj: any = JSON.parse(
                        Buffer.from(result[0], "base64").toString("ascii")
                    );
                    const streamInfoList: any = infoObj.data[0].gameStreamInfoList;
                    //const streamerName = infoObj["data"][0]["gameLiveInfo"]["nick"];
                    const urlInfo1: any = streamInfoList[0];

                    //可以得到六种链接，m3u8链接最稳定
                    //console.log("阿里的CDN");
                    const aliFLV =
                        urlInfo1["sFlvUrl"] +
                        "/" +
                        urlInfo1["sStreamName"] +
                        ".flv?" +
                        urlInfo1["sFlvAntiCode"];
                    resolve(aliFLV.replace(/\amp\;/g, ""));
                } else {
                    reject(
                        "HUYA=>No match results:Maybe the roomid is error,or this room is not open!"
                    );
                }
            })
            .catch(function (error: any) {
                reject(error);
            });
    });
}

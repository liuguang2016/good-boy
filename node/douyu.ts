import axios from "axios";
import moment from "moment";
import crypto from "crypto";

const hash = crypto.createHash('md5');


export function main(url: string) {
    const rid:string=url.split('/').pop();
    const [tt1, tt2, today]=[Date.now(), Date.now()*1000, moment(Date.now()).format('%Y%m%d')];
    get_pre_url =>(rid, tt) {
        const request_url:string = 'https://playweb.douyucdn.cn/lapi/live/hlsH5Preview/' + rid
    let post_data = {
        'rid': rid,
        'did': '10000000000000000000000000001501'
    }
    const auth =hash.digest((rid + tt).encode('utf-8'));
    const header = {
        'content-type': 'application/x-www-form-urlencoded',
        'rid': rid,
        'time': tt,
        'auth': auth
    }
    axios.post(request_url,post_data,{headers:header}).then(res=>{
        let pre_url:string = "";
        if(res['error']==0){
            let real_url = res['data']['rtmp_live'];
            if(real_url.test('mix=1')){
                pre_url = mix_room(rid);
            }
            else{
                pre_url = re.search(r'^[0-9a-zA-Z]*', real_url, re.I).group()
            }
        }
        return pre_url;
    })
    }
    
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

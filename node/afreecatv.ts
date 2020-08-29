import axios from "axios";
export function main(url: string) {
    return new Promise(function (resolve, reject) {
        const params: Array<any> = url.split('/');
        const bno = params[params.length-1];
        const bid = params[params.length-2];
        console.log(params);
        const config: any = {
            method: "post",
            url: `http://live.afreecatv.com/afreeca/player_live_api.php?bjid=${bid}`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Origin": "http://play.afreecatv.com",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.105 Safari/537.36",
            },
            data:{
                bid: bid,
                bno: bno,
                type: 'live',
                pwd: '',
                player_type: 'html5',
                stream_type: 'common',
                quality: 'HD',
                mode: 'landing'
            },
        };
        axios(config)
            .then(function (response: any) {
                const jsons: any = response.data;
                console.log(jsons);
                if(jsons["CHANNEL"]['RESULT']!=0){
                    resolve(
                        `http://live-global-cdn-v02.afreecatv.com/live-stm-13/auth_playlist.m3u8?aid=${jsons["CHANNEL"]["FTK"]}`
                    );
                }
                else{
                    reject(
                        "Afreecatv=>No match results:Maybe the roomid is error,or this room is not open!"
                    );
                }
                
            })
            .catch(function (error: any) {
                reject(error);
                console.error(error);
            });
    });
}

// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
// import Koa from "koa";
import {main} from "./afreecatv";
// import {main} from "./afreecatv";

// // 创建一个Koa对象表示web app本身:
// const app = new Koa();

// // 对于任何请求，app将调用该异步函数处理请求：
// app.use(async (ctx, next) => {
//     await next();
//     ctx.response.type = 'text/html';
//     ctx.response.body = '<h1>Hello, koa2!</h1>';
// });

// // 在端口3000监听:
// app.listen(3000);
// console.log('app started at port 3000...');
let url1="https://www.douyu.com/265438";
let url2="https://www.huya.com/22431006";
let url3="http://play.afreecatv.com/feel0100/225796074";
let url4="http://play.afreecatv.com/awl/225886899";
let url5="https://live.ixigua.com/701580/";
let url6="https://www.yy.com/87687944/87687944?tempId=16777217";

//http://live-global-cdn-v02.afreecatv.com/live-stm-13/auth_playlist.m3u8?aid=.A32.7bbT56vyHM9fKZk.t1elsiB4qhbF7_4UrEvWrdSJrJDZIwEJuHDoBBQsGgD-CNuda591fHYwtotkUmjgEa22IiTiG7wqQqbecomhXyC8E4oGbe8qj45f3By90uebqyKMit7liuZG5iFC9GOX
main(url4).then(url=>{
    console.log(url);
});

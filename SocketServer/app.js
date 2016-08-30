/**
 * Created by plter on 7/11/16.
 */

"use strict";

const net = require("net");
const server = net.createServer((client)=> {

    client.write("Hello Client\n");

    client.on("end", ()=> {
        console.log("Client disconnected.");
    });

    // client.on("data", (data)=> {
    //     var content = String(data);
    //
    //     console.log(content);
    //
    //     if (content.trim() == "q") {
    //         client.end();
    //     } else {
    //         client.write(content);
    //     }
    // });

    client.on("readable", (data)=> {
        console.log("" + client.read());
    });

    client.on("error", function (e) {
        console.log(e);
    });
});
server.listen(9999, ()=> {
    console.log("server started");
});
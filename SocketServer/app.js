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

    client.on("data", (data)=> {
        var content = String(data);
        if (content.trim() == "q") {
            client.end();
        } else {
            client.write(content);
        }
    });
});
server.listen(9999, ()=> {
    console.log("server started");
});
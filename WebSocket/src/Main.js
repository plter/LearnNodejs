/**
 * Created by plter on 7/12/16.
 */

"use strict";

const http = require("http");
const socket = require("socket.io");
const express = require("express");


class Main {

    constructor() {
        this.HTTP_SERVER_PORT = 3000;

        this.createHttpServer();
        this.createWebSocketServer();
    }

    createHttpServer() {
        this.app = express();
        this.app.use(express.static(APP_DIR + "/static"));

        this.httpServer = http.createServer(this.app);
        this.httpServer.listen(this.HTTP_SERVER_PORT, ()=> {
            console.log("Http server started at port " + this.HTTP_SERVER_PORT);
        });
    }

    createWebSocketServer() {
        this.io = socket(this.httpServer);
        this.io.on("connection", (socket)=> {
            console.log("User connected");
            socket.emit("news", "Hello World");

            socket.on("disconnect", ()=> {
                console.log("client lost connect");
            });
        });
    }
}

module.exports = Main;
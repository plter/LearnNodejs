/**
 * Created by plter on 8/30/16.
 */

const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;

MongoClient.connect("mongodb://localhost/imagelog", function (err, db) {
    var users = db.collection("users");
    users.insertOne({name: "ucai", age: 10}, (err, result) => {
        console.log(arguments);
    });
});
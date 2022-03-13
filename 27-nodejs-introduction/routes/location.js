"use strict";
const exp = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
/**
 * Mongo Config
 */
const dbName = "locationsDB";
const nameCollection = "user-locations";
const username = "ibnushevayanto";
const password = "garudapancasila132";
const clusters = "freecluster";
const urlDatabase = `mongodb+srv://${username}:${password}@${clusters}.mkmjb.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const client = new MongoClient(urlDatabase, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
});
const router = exp.Router();
const locationStorage = { locations: [] };
router.post("/add-location", async (req, res, next) => {
    await client.connect();
    const result = await client
        .db()
        .collection(nameCollection)
        .insertOne({
        address: req.body.address,
        coords: { lat: req.body.lat, lng: req.body.lng },
    });
    client.close();
    res.json({ message: "Stored location!", id: ObjectId(result.insertedId) });
});
router.get("/location/:lid", async (req, res, next) => {
    await client.connect();
    const locationId = req.params.lid;
    const dataLocation = await client
        .db()
        .collection(nameCollection)
        .findOne({ _id: ObjectId(locationId) });
    client.close();
    if (dataLocation) {
        res.json({
            message: "Data Found",
            data: { ...dataLocation, id: ObjectId(dataLocation.id) },
        });
    }
    else {
        res.status(404).json({ message: "Data Not Found" });
    }
});
module.exports = router;

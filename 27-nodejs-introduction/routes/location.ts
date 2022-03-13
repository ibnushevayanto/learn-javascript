const exp = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

/**
 * Mongo Config
 */
const dbName = "";
const nameCollection = "";
const username = "";
const password = "";
const clusters = "";
const urlDatabase = `mongodb+srv://${username}:${password}@${clusters}.mkmjb.mongodb.net/${dbName}?retryWrites=true&w=majority`;
const client = new MongoClient(urlDatabase, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const router = exp.Router();

type coordsType = {
  lat: number;
  lng: number;
};

type locationsType = {
  id: number;
  address: string;
  coords: coordsType;
};

type locationStorage = {
  locations: locationsType[];
};
const locationStorage: locationStorage = { locations: [] };

type ResponseData = {
  message: string;
  id: string;
};

router.post(
  "/add-location",
  async (req: any, res: any, next: () => Promise<ResponseData>) => {
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
  }
);

router.get(
  "/location/:lid",
  async (req: any, res: any, next: () => Promise<ResponseData>) => {
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
    } else {
      res.status(404).json({ message: "Data Not Found" });
    }
  }
);

module.exports = router;

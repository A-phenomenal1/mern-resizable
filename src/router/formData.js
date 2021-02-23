const express = require("express");
const FormData = require("../models/formData");
const router = new express.Router();

router.post("/carClient", async (req, res) => {
  const clientData = new FormData(req.body);

  try {
    await FormData.deleteOne({});
    await clientData.save();
    res.status(201).send(clientData);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/client", async (req, res) => {
  try {
    const client = await FormData.find({});
    res.send(client);
  } catch (error) {
    res.status(500).send("Error in load client");
  }
});

router.patch("/updateClient", async (req, res) => {
  try {
    const client = await FormData.find({});
    const updatedClient = await FormData.findOneAndUpdate(
      { name: client[0].name },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.send(updatedClient);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

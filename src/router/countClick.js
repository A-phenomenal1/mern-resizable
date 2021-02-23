const express = require("express");
const CountClick = require("../models/countClick");
const router = new express.Router();

router.post("/createClicks", async (req, res) => {
  const clickData = new CountClick(req.body);
  try {
    await CountClick.deleteOne({});
    await clickData.save();
    res.status(201).send(clickData);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/readCount", async (req, res) => {
  try {
    const clicks = await CountClick.find({});
    res.send(clicks);
  } catch (error) {
    res.status(500).send("Error in load clicks");
  }
});

router.patch("/updateCount", async (req, res) => {
  try {
    const clicks = await CountClick.find({});
    const updatedCount = await CountClick.findOneAndUpdate(
      { _id: clicks[0]._id },
      req.body,
      {
        new: true,
      }
    );
    res.send(updatedCount);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;

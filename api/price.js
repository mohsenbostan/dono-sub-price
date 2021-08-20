const axios = require("axios");

const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const donoResponse = await axios.get(
      "https://sub-api.dono.gg/v2/subscriptions/active"
    );
    const responseObject = {
      status: "success",
      tiers: [
        donoResponse.data.data[0].price,
        donoResponse.data.data[1].price,
        donoResponse.data.data[2].price,
      ],
      message: `Tier 1: ${donoResponse.data.data[0].price} ✔ Tier 2: ${donoResponse.data.data[1].price} ✔ Tier 3: ${donoResponse.data.data[2].price} ✔`,
    };

    return res.json(responseObject);
  } catch (err) {
    return res.json({
      status: "failed",
      tiers: null,
      message: null,
    });
  }
});

module.exports = router;
const express = require("express");
const app = express();
const price = require("./api/price");

app.use(express.json({ extended: false }));

app.use("/api/price", price);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
const express = require("express");

const app = express();

const PORT = 5000;

app.get("/health", (req, res) => {
    res.json({
        status: "ok",
        service: "AdForge AI"
    });
});

app.listen(PORT, () => {
    console.log(`AdForge backend running on http://localhost:${PORT}`);
});
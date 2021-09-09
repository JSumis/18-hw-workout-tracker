const router = require("express").Router()
const { Router } = require("express")
const path = require("path")
const directory = path.join(__dirname, "../public")

router.get("/stats", (req, res) => {
    res.sendFile(path.join(directory, "stats.html"))
})

module.exports = router;
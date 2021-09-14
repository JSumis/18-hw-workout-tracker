const router = require("express").Router()
const { Router } = require("express")
const path = require("path")
const directory = path.join(__dirname, "../public")

router.get("/", (req, res) => {
    res.sendFile(path.join(directory, "index.html"))
})

router.get("/stats", (req, res) => {
    res.sendFile(path.join(directory, "stats.html"))
})

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(directory, "exercise.html"))
})

module.exports = router;
import express from "express"

const PORT = process.env.PORT || 3000
const app = express()

app.get("/api", (req, res) => {
  res.json({ message: "What up dudes!!"})
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
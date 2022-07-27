const express = require("express")
const cors = require("cors")
const app = express()
const PORT = 5000
const AddressBookRoutes = require("./routes/addressbook")

const corsOpts = {
  origin: "*",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}

app.use(express.json())
app.use(cors(corsOpts))
app.use("/", AddressBookRoutes)
app.listen(PORT, () => console.log("server is starting..."))

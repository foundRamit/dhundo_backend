const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const port = 5400;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.log(err);
  });

app.get('/', (req, res) => {
   res.send('Dhundo APIs!');
 });

app.listen(port, () => {
 console.log("Server Listening on port http://localhost:" + port);
});
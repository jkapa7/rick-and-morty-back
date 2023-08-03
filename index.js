const app = require("./src/app");
const { PORT } = process.env;

app.listen(3000, () => {
  console.log(`http://localhost:${PORT}`);
  console.log(`Listening at port ${PORT}`);
});

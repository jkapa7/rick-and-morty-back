const app = require("./src/app");
const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
  console.log(`Listening at port ${PORT}`);
});

const app = require("./src/app");
const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`in server http://localhost:${PORT}`);
});

const notFound = (req, res) =>
  res.status(404).send("Page does not exits in this server");
module.exports = notFound;

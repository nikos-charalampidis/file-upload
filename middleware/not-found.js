//handling og not found routes
const notFound = (req, res) => res.status(404).send('Route does not exist')

const test = "test";

module.exports = notFound

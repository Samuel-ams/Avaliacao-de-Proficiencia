const router = require("express-promise-router")();
const dataTableController = require("../controller/tb01.controller")

router.get("/tb01", dataTableController.getDataTable)

module.exports = router
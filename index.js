var models = require("../models");
var express = require("express");
var router = express.Router();
syslog2("ALERTA DE PRUEBA");
/* GET home page. */
router.get("/", function(req, res, next) {
  models.sequelize
    .query(
      `SELECT
          name,
          birth_date,
          EXTRACT(YEAR FROM age(birth_date)) AS age
      FROM
          "People"
      ORDER BY
          birth_date ASC`,

      {
        model: models.Person
      }
    )
    .then(function(people) {
      res.render("index", { title: "Celebrities, ordered by age", people: people });
    });
});

module.exports = router;

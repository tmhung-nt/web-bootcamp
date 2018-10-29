var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("api GET landing");
  res.render('landing');
});

router.get('/column-to-in-statement', function(req, res){
  console.log("api GET columnToIN")
  res.render('utils/columnToIN');
});

router.get('/generate-import-payroll-file', function(req, res){
  console.log("api GET generateImportPayrollFile")
  res.render('utils/genereateImportPayroll');
});
 

module.exports = router;

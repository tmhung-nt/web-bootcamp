var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("api GET landing");
  res.render('landing');
});

router.get('/col-to-statement', function(req, res){
  console.log("api GET columnToIN")
  res.render('utils/columnToIN');
});

router.get('/genr-import-payroll', function(req, res){
  console.log("api GET generateImportPayrollFile")
  res.render('utils/genereateImportPayroll');
});
 

module.exports = router;

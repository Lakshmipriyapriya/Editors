var express= require('express');
var router = express.Router();
var Task= require('../models/task');
var tasks=require('../src/resources/tasks_operations');
router.get('/', function(req, res, next) {
	res.send('Express...')
});

router.get('/editor', function(req, res, next) {
	res.writeHead(302, {
	  'Location': '/ckeditor/samples/index.html'
	});
	res.end();
});
router.post('/',function(req,res,next){
  	 tasks.createMyTaskDetails(req,res)
  	 });
module.exports = router;

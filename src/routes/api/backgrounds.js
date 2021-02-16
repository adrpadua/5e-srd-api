const router = require('express').Router();
const BackgroundController = require('../../controllers/api/backgroundController');

router.get('/', function(req, res, next) {
  BackgroundController.index(req, res, next);
});

router.get('/:index', function(req, res, next) {
  BackgroundController.show(req, res, next);
});

router.get('/:index/feature', BackgroundController.showFeatureForBackground);

module.exports = router;

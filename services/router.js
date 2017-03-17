/* service router*/

var router = express.Router();

var authentication = require(root_path+'/server/services/authentication');
router.get('/authentication', authentication);

module.exports = router;


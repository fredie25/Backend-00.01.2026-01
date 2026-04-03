const Router = require('express');
const { createUser, updateUser, deleteUser } = require('../controllers/user.controller');


const router = Router();

router.post('/', createUser);
router.put('/', updateUser);
router.delete('/', deleteUser)

module.exports = router;

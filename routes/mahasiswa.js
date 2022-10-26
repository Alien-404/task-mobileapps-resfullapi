const express = require('express');
const {
  getMahasiswas,
  getMahasiswa,
  postMahasiswa,
  upMahasiswa,
  delMahasiswa,
} = require('../controllers/mahasiswaController');

// init router
const router = express.Router();

// use middleware
// router.use(requireAuth);

// GET ALL
router.get('/', getMahasiswas);

// GET SINGLE
router.get('/:id', getMahasiswa);

// POST DATA
router.post('/', postMahasiswa);

// DELETE DATA
router.delete('/:id', delMahasiswa);

// UPDATE DATA
router.patch('/:id', upMahasiswa);

module.exports = router;

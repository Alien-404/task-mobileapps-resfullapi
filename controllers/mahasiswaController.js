// import
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// method

// GET ALL
const getMahasiswas = async (req, res) => {
  const mahasiswas = await prisma.mahasiswa.findMany();
  res.status(200).json({
    data: mahasiswas,
  });
};

// GET SINGLE
const getMahasiswa = async (req, res) => {
  const { id } = req.params;

  // logic
  const mahasiswa = await prisma.mahasiswa.findFirst({
    where: {
      id: Number(id),
    },
  });

  if (!mahasiswa) {
    return res.status(404).json({
      error: `No such mahasiswa with id: ${id}`,
    });
  }

  res.status(200).json({
    data: mahasiswa,
  });
};

// POST DATA
const postMahasiswa = async (req, res) => {
  const { name, age } = req.body;

  // check
  if (!name && !age) {
    return res.status(400).json({
      error: 'please provide name and age',
    });
  }

  const newMahasiswa = await prisma.mahasiswa.create({
    data: {
      name,
      age,
    },
  });

  res.status(200).json({
    message: 'mahasiswa successfully added',
    data: newMahasiswa,
  });
};

// UPDATE DATA
const upMahasiswa = async (req, res) => {
  const { id } = req.params;

  const mahasiswa = await prisma.mahasiswa.findFirst({
    where: {
      id: Number(id),
    },
  });

  // logic
  if (!mahasiswa) {
    return res.status(404).json({
      error: `No such mahasiswa with id: ${id}`,
    });
  }

  const updateMahasiswa = await prisma.mahasiswa.update({
    where: {
      id: Number(id),
    },
    data: {
      ...req.body,
    },
  });

  res.status(200).json({
    message: 'mahasiswa successfully updated',
    data: updateMahasiswa,
  });
};

// DELETE DATA
const delMahasiswa = async (req, res) => {
  const { id } = req.params;

  const mahasiswa = await prisma.mahasiswa.findFirst({
    where: {
      id: Number(id),
    },
  });

  // logic
  if (!mahasiswa) {
    return res.status(404).json({
      error: `No such mahasiswa with id: ${id}`,
    });
  }

  const deleteMahasiswa = await prisma.mahasiswa.delete({
    where: {
      id: Number(id),
    },
  });

  res.status(200).json({
    message: 'mahasiswa successfully deleted',
    data: deleteMahasiswa,
  });
};

// export
module.exports = {
  getMahasiswas,
  getMahasiswa,
  postMahasiswa,
  upMahasiswa,
  delMahasiswa,
};

const { Op } = require('sequelize');
const { Course, User, Lesson, Enrollment, sequelize } = require('../models');

// Helper
const slugify = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
};

exports.createCourse = async (req, res) => {
    try {
        const { title, description } = req.body;
        const user = req.user;

        if (!['admin', 'instructor'].includes(user.role)) {
            return res.status(403).json({ message: 'No autorizado' });
        }

        const slug = slugify(title);

        const course = await Course.create({
            title,
            slug,
            description,
            published: false,
            ownerId: user.id
        });

        return res.status(201).json(course);

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error creando curso' });
    }
};

exports.getCourses = async (req, res) => {
  try {
    const { published, q, order = 'createdAt:DESC' } = req.query;

    const page = Math.max(parseInt(req.query.page) || 1, 1);
    const pageSize = Math.min(parseInt(req.query.pageSize) || 10, 100);

    const limit = pageSize;
    const offset = (page - 1) * limit;

    const where = {};

    // filtro published
    if (published !== undefined) {
      where.published = published === 'true';
    }

    // búsqueda
    if (q) {
      where[Op.or] = [
        { title: { [Op.like]: `%${q}%` } },
        { description: { [Op.like]: `%${q}%` } }
      ];
    }

    // orden seguro (whitelist)
    const allowedFields = ['createdAt', 'title'];
    let [field, direction] = order.split(':');

    if (!allowedFields.includes(field)) field = 'createdAt';
    direction = direction === 'ASC' ? 'ASC' : 'DESC';

    const { count, rows } = await Course.findAndCountAll({
      where,
      limit,
      offset,
      order: [[field, direction]]
    });

    return res.json({
      total: count,
      page,
      pageSize,
      totalPages: Math.ceil(count / pageSize),
      data: rows
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error obteniendo cursos' });
  }
};

exports.getCourseBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const course = await Course.findOne({
      where: { slug },
      attributes: {
        include: [
          // Conteo de lessons
          [
            sequelize.literal(`(
              SELECT COUNT(*)
              FROM Lessons AS l
              WHERE l.courseId = Course.id
            )`),
            'lessonsCount'
          ],
          // Conteo de enrollments
          [
            sequelize.literal(`(
              SELECT COUNT(*)
              FROM Enrollments AS e
              WHERE e.courseId = Course.id
            )`),
            'enrollmentsCount'
          ]
        ]
      },
      include: [
        {
          model: User,
          as: 'owner',
          attributes: ['id', 'firstName', 'lastName', 'email']
        }
      ]
    });

    if (!course) {
      return res.status(404).json({ message: 'Curso no encontrado' });
    }

    return res.json(course);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error obteniendo curso' });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, published } = req.body;

    const user = req.user;

    const course = await Course.findByPk(id);

    if (!course) {
      return res.status(404).json({ message: 'Curso no encontrado' });
    }

    // Solo owner o admin
    if (user.role !== 'admin' && course.ownerId !== user.id) {
      return res.status(403).json({ message: 'No autorizado' });
    }

    if (title) {
      course.title = title;
      course.slug = slugify(title);
    }

    if (description !== undefined) {
      course.description = description;
    }

    if (published !== undefined) {
      course.published = published;
    }

    await course.save();

    return res.json(course);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error actualizando curso' });
  }
};

exports.deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.user;

    const course = await Course.findByPk(id);

    if (!course) {
      return res.status(404).json({ message: 'Curso no encontrado' });
    }

    // Solo owner o admin
    if (user.role !== 'admin' && course.ownerId !== user.id) {
      return res.status(403).json({ message: 'No autorizado' });
    }

    await course.destroy(); // soft delete

    return res.json({ message: 'Curso eliminado correctamente' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error eliminando curso' });
  }
};

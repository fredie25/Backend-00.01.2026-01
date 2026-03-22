const controller = require('../controllers/course.controller');
const courseRouter = require('express').Router();
const { authMiddleware, requireRole } = require('../middlewares/auth.middleware');

courseRouter.post(
    '/',
    authMiddleware,
    requireRole('admin', 'instructor'),
    controller.createCourse
);
courseRouter.get('/', controller.getCourses);
courseRouter.get('/:slug', controller.getCourseBySlug);
courseRouter.put(
    '/:id',
    authMiddleware,
    controller.updateCourse
);
courseRouter.delete(
    '/:id',
    authMiddleware,
    controller.deleteCourse
);

module.exports = { courseRouter };
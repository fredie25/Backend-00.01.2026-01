const { Task } = require("../models");
const { getPagination, paginatedResponse } = require("../utils/pagination");

const createTask = async (req, res, next) => {
  try {
    const { title, description, deadline } = req.body;
    console.log("req.usuario:", req.usuario.id);

    const task = await Task.create({
      title,
      description,
      deadline,
      userId: req.usuario.id,
    });

    return res.status(201).json({ status: "ok", data: task });
  } catch (error) {
    next(error);
  }
};

const listTaskByUser = async (req, res, next) => {
  try {
    const { page, pageSize, limit, offset } = getPagination(req.query);
    const { status } = req.query;

    const where = { userId: req.usuario.id };

    if (status !== undefined) {
      where.isCompleted = status;
    }

    const result = await Task.findAndCountAll({
      where,
      limit,
      offset,
      order: [["createdAt", "DESC"]],
    });
    return res.status(200).json({
      status: "ok",
      ...paginatedResponse(result, page, pageSize),
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { createTask, listTaskByUser };

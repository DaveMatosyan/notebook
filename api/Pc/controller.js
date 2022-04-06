import {
  getOneService, getAllService, createService, updateService, removeService,
} from './service.js';

export async function getOne(req, res, next) {
  try {
    const { params: { id } } = req;
    const getPC = await getOneService(id);
    return res.send(JSON.stringify(getPC));
  } catch (err) {
    return next(err);
  }
}

export async function getAll(req, res, next) {
  try {
    const getedPcs = await getAllService();
    return res.send(JSON.stringify(getedPcs));
  } catch (err) {
    return next(err);
  }
}

export async function create(req, res, next) {
  try {
    const { body } = req;
    const createdPc = await createService(body);
    return res.send(JSON.stringify(createdPc));
  } catch (err) {
    return next(err);
  }
}

export async function update(req, res, next) {
  try {
    const { body, params: { id } } = req;
    const updatedPc = await updateService(body, id);
    return res.send(JSON.stringify(updatedPc));
  } catch (err) {
    return next(err);
  }
}

export async function remove(req, res, next) {
  try {
    const { params: { id } } = req;
    const deletedPc = await removeService(id);
    return res.send(JSON.stringify(deletedPc));
  } catch (err) {
    return next(err);
  }
}

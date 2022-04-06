import {
  createService, getOneService, getAllService, updateService, removeService,
} from './service.js';

export async function getAll(req, res, next) {
  try {
    const geted = await getAllService();
    return res.send(geted);
  } catch (err) {
    return next(err);
  }
}
export async function getOne(req, res, next) {
  try {
    const { params: { id } } = req;
    const geted = await getOneService(id);
    return res.send(JSON.stringify(geted));
  } catch (err) {
    return next(err);
  }
}
export async function create(req, res, next) {
  try {
    const creted = await createService(req.body);
    return res.send(JSON.stringify(creted));
  } catch (err) {
    return next(err);
  }
}

export async function update(req, res, next) {
  try {
    const { params: { id }, body } = req;
    const updaed = await updateService(id, body);
    return res.send(JSON.stringify(updaed));
  } catch (err) {
    return next(err);
  }
}
export async function remove(req, res, next) {
  try {
    const { params: { id } } = req;
    const removed = await removeService(id);
    return res.send(JSON.stringify(removed));
  } catch (err) {
    return next(err);
  }
}

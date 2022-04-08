import {
  getOneService, getAllService, createService, updateService, removeService,
} from './service.js';

// import { updateService as userUpadeService } from '../user/service.js';

export async function getOne(req, res, next) {
  try {
    const { params: { id } } = req;
    const getProduct = await getOneService(id, req.user._id);
    return res.send(JSON.stringify(getProduct));
  } catch (err) {
    return next(err);
  }
}

export async function getAll(req, res, next) {
  try {
    const getedProducts = await getAllService(req.user._id);
    return res.send(JSON.stringify(getedProducts));
  } catch (err) {
    return next(err);
  }
}

export async function create(req, res, next) {
  try {
    const { body, user } = req;
    const createdProduct = await createService(body, user._id);
    return res.send(JSON.stringify(createdProduct));
  } catch (err) {
    return next(err);
  }
}

export async function update(req, res, next) {
  try {
    const { body, params: { id }, user } = req;
    const updatedProduct = await updateService(body, id, user._id);
    return res.send(JSON.stringify(updatedProduct));
  } catch (err) {
    return next(err);
  }
}

export async function remove(req, res, next) {
  try {
    const { params: { id }, user } = req;
    const deletedProduct = await removeService(id, user._id);
    return res.send(JSON.stringify(deletedProduct));
  } catch (err) {
    return next(err);
  }
}

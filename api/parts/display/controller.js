import {
  getOneService, getAllService, createService, updateService, removeService,
} from './service.js';

export async function getOne(req, res, next) {
  try {
    const { params: { id } } = req;
    const getProduct = await getOneService(id);
    return res.send(JSON.stringify(getProduct));
  } catch (err) {
    return next(err);
  }
}

export async function getAll(req, res, next) {
  try {
    const getedProducts = await getAllService();
    return res.send(JSON.stringify(getedProducts));
  } catch (err) {
    return next(err);
  }
}

export async function create(req, res, next) {
  try {
    const { body } = req;
    const createdProduct = await createService(body);
    return res.send(JSON.stringify(createdProduct));
  } catch (err) {
    return next(err);
  }
}

export async function update(req, res, next) {
  try {
    const { body, params: { id } } = req;
    const updatedProduct = await updateService(body, id);
    return res.send(JSON.stringify(updatedProduct));
  } catch (err) {
    return next(err);
  }
}

export async function remove(req, res, next) {
  try {
    const { params: { id } } = req;
    const deletedProduct = await removeService(id);
    return res.send(JSON.stringify(deletedProduct));
  } catch (err) {
    return next(err);
  }
}

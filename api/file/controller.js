import {
  createOneService, removeService, getAllService,
} from './service.js';

export async function getAll(req, res, next) {
  try {
    const getedProducts = await getAllService();
    return res.send(JSON.stringify(getedProducts));
  } catch (err) {
    return next(err);
  }
}

export async function createOne(req, res, next) {
  try {
    const { file } = req;
    const body = {
      fileName: file.filename,
    };
    const createdProduct = await createOneService(body);
    return res.send(JSON.stringify(createdProduct));
  } catch (err) {
    return next(err);
  }
}

// export async function createMany(req, res, next) {
//   try {
//     const { file } = req;
//     const createdProduct = await createService(file);
//     return res.send(JSON.stringify(createdProduct));
//   } catch (err) {
//     return next(err);
//   }
// }

export async function remove(req, res, next) {
  try {
    const { params: { id } } = req;
    const deletedProduct = await removeService(id);
    return res.send(JSON.stringify(deletedProduct));
  } catch (err) {
    return next(err);
  }
}

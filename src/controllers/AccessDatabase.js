import AccessDatabaseModel from '../models/AccessDatabase';

const AccessDatabase = {
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} reflections array
   */
  getAll(req, res) {
    const reflections = AccessDatabaseModel.findAll();
    return res.status(200).send(reflections);
  },
  /**
   *
   * @param {object} req
   * @param {object} res
   * @returns {object} reflection object
   */
  getOne(req, res) {
    const reflection = AccessDatabaseModel.findOne(req.params.id);
    if (!reflection) {
      return res.status(404).send({'message': 'reflection not found'});
    }
    return res.status(200).send(reflection);
  },
}

export default AccessDatabase;

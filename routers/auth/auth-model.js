const db = require('../../data/dbConfig');

module.exports = {
    findBy,
    findById,
    add
}

function findBy(filter) {
    return db('users')
        .where(( filter ))
}

function findById(id) {
    return db('users')
        .where({ id: id })
        .first()
}

function add(user) {
    return db('users')
        .insert(user, 'id')
        .then(([id]) => {
            return findById(id)
        })
}
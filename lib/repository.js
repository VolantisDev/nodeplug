module.exports = {
    getRepository: getRepository
}

function getRepository (repository) {
    try {
        return require('./repositories/' + repository)
    } catch (e) {
        throw e
    }
}

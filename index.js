var config = require('./lib/config')

module.exports = (appConfig) => {
    if (appConfig) {
        config = Object.assign(appConfig, config)
    }

    return {
        config: config
    }
}

function bootstrap () {

}

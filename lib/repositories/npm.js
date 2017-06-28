var Promise = require('bluebird')
var npm = require('global-npm')

module.exports = {
    exists: exists,
    install: install,
    uninstall: uninstall,
    upgrade: upgrade
}

function exists (plugins, dir) {
    return npm.list(dir)
        .then(packages => {
            packages.filter(package => packages.indexOf(package) > -1)
            return packages.length === plugins.length
        })
        .catch(reject)
}

function install (plugins, dir) {
    var installOpts = {
        cwd: dir,
        save: true
    }

    return npm.install(plugins, installOpts)
}

function uninstall (plugins, dir) {
    var installOpts = {
        cwd: dir,
        save: true
    }

    return npm.uninstall(plugins, installOpts)
}

function upgrade (plugins, dir) {

}

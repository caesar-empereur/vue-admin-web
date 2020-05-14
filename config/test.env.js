'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = {
    NODE_ENV: '"testing"',
    EVN_CONFIG:'"test"',
    API_ROOT: '"https://vue-admin-server.top"'
}

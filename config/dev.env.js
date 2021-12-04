'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = {
    NODE_ENV: '"development"',
    EVN_CONFIG: '"dev"',
    API_ROOT: '"https://niceprince.cloud/api"',
    WS_ROOT: '"wss://niceprince.cloud/api/wss"'
}

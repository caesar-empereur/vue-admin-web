'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = {
    NODE_ENV: '"production"',
    EVN_CONFIG:'"prod"',
    API_ROOT: '"https://vue-admin-server.top"',
    WS_ROOT: '"wss://47.113.188.83:9090/wss"'
}

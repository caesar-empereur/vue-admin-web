'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = {
    NODE_ENV: '"testing"',
    EVN_CONFIG:'"test"',
    API_ROOT: '"http://47.113.188.83:9090"',
    WS_ROOT: '"ws://47.113.188.83:9090/wss"'
}

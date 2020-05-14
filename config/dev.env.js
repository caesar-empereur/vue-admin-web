'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = {
    NODE_ENV: '"development"',
    EVN_CONFIG: '"dev"',
    API_ROOT: '"https://local.vue-api.com"'
}

'use strict'

const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = {
    NODE_ENV: '"production"',
    EVN_CONFIG:'"prod"',
    API_ROOT: '"https://prod.vue-api.com"'
}

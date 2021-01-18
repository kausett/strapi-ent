'use strict';
let axios = require('axios')
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/services.html#core-services)
 * to customize this service
 */

const _ = require('lodash');

module.exports = {
  find: async (params, populate) => {
    const host = strapi.config.get('server.host', 'defaultValueIfUndefined');
    const port = strapi.config.get('server.port', 'defaultValueIfUndefined');
    const url = `http://${host}:${port}`
    const entity = await strapi.query('global').find(params, populate);
    const dataData = entity[0];
    let socialData = await axios.get(`${url}/socials`)
    dataData.footer.organization.socials = socialData.data
    return dataData;
  }
};


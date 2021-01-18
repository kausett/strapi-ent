'use strict';
let axios = require('axios')
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/services.html#core-services)
 * to customize this service
 */



module.exports = {
  find: async (params, populate) => {
    const host = strapi.config.get('server.host', 'defaultValueIfUndefined');
    const port = strapi.config.get('server.port', 'defaultValueIfUndefined');
    const url = `http://${host}:${port}`
    const entity = await strapi.query('page').find(params, populate);

    const strapiPages = await strapi.query('page').find(params,
      [ "pageSections.sections.feature-list-row" ]
    )


    return strapiPages;
  }

};

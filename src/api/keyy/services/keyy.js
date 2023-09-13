'use strict';

/**
 * keyy service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::keyy.keyy');

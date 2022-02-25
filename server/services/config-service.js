/**
 * @module financas
 * 
 * @author moreira - 2022-02-25
 */
'use strict';

const { Service } = require('sicinfo-router')(__filename);

module.exports = class extends Service {

  doGet() {
    return new Promise(resolve => {
      resolve(null)
    })
  }
}
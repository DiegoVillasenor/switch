'use strict';

var _switch = require('./switch.js');

console.log(_switch.Switch);
var search_switch = 'pa';
var filterBySku = function filterBySku() {
  return 'filtrado';
};
var filterByName = function filterByName() {
  return 'filtrado por nombre';
};
var searchSwitch = _switch.Switch.of(search_switch, [['sku', filterBySku], ['name', filterByName]]);

console.log(searchSwitch.run());
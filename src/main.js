import {Switch} from './switch.js';
console.log(Switch);
var search_switch = 'pa'
var filterBySku = () => 'filtrado';
var filterByName = () => 'filtrado por nombre';
var searchSwitch = Switch.of(search_switch, [['sku', filterBySku], ['name', filterByName]]);

console.log(searchSwitch.run());
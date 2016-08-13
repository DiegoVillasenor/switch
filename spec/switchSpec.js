import {Switch} from '../build/switch.js';

describe("Switch", function() {
  beforeEach(function() {
    console.log(Switch.of);
  });
  it("run a different function depending of the state of the switcher", function() {
    var search_switch = 'sku'
    var filterBySku = () => 'filtrado';
    var filterByName = () => 'filtrado por nombre';
    var searchSwitch = Switch.of([['sku', filterBySku], ['name', filterByName]]);

    //primer estado
    expect(searchSwitch.run(search_switch)).toBe('filtrado');
    //cambio de estado
    search_switch = 'name'
    expect(searchSwitch.run(search_switch)).toBe('filtrado por nombre');
  });

  it("returns null if the state is not a registered option on the switcher", function() {
    var filterBySku = () => 'filtrado';
    var filterByName = () => 'filtrado por nombre';
    var searchSwitch = Switch.of([['sku', filterBySku], ['name', filterByName]]);
    var search_switch = 'papas'

    //primer estado
    expect(searchSwitch.run(search_switch)).toBe(null);
  });
});

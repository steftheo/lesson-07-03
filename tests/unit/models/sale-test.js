import { moduleForModel, test } from 'ember-qunit';

moduleForModel('sale', 'Unit | Model | sale', {
  // Specify the other units that are required for this test.
  needs: ['model:branch']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

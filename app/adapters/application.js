import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api/alt',

  headers: Ember.computed('session.user', function() {
    if (this.get('session.user')) {
      return {
        'username': this.get('session.user').get('name')
      };
    }
  })
});

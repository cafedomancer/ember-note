import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login() {
      this.store.query('user', {
        name: this.controller.get('name')
      }).then(users => {
        if (users.get('length') === 1) {
          let user = users.get('firstObject');
          this.controllerFor('application').set('user', user);
          this.transitionTo('notebooks', user.get('id'));
        } else {
          console.log('unexpected query result');
        }
      });
    }
  }
});

import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('notebook', { user: params.user_id });
  },

  actions: {
    addNotebook() {
      let notebook = this.store.createRecord('notebook', {
        title: this.controller.get('title'),
        user: this.session.get('user')
      });

      notebook.save().then(() => {
        console.log('save successful');
        this.controller.set('title', null);
        this.refresh();
      }, () => {
        console.log('save failed');
      });
    }
  }
});

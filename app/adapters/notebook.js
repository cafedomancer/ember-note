import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  query(store, type, query) {
    let keys = Object.keys(query);

    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let classifiedKey = Ember.String.classify(key);
      query[classifiedKey] = query[key];
      delete query[key];
    }

    return this._super(store, type, query);
  }
});

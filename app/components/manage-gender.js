import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingGender: false,
  isAddingNewPermission: false,
  dataModel: null,

  genderModel: Ember.computed(function(){
    return this.get('store').findAll('gender');
  }),

  actions: {
    saveNewGender (){
      var myStore = this.get('store');
      var newGender = myStore.createRecord('gender', {
        name: this.get('name')
      });
      newGender.save().then(() => {
        this.set('isAddingNewGender', false);
      });
    },

    cancelAddNewGender() {
      this.set('isAddingNewGender', false);
    },

    manageGender() {
      this.set('isManagingGender', true);
    },

    addNewGender() {
      this.set('isAddingNewGender', true);
    },
    doneGender(){
      this.set('isManagingGender', false);
    }

  }
});

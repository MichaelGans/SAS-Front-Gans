import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  isManagingAcademicload: false,
  isAddingNewPermission: false,
  dataModel: null,

  academicloadModel: Ember.computed(function(){
    return this.get('store').findAll('academicload');
  }),

  actions: {
    saveNewAcademicload (){
      var myStore = this.get('store');
      var newAcademicload = myStore.createRecord('academicload', {
        name: this.get('name')
      });
      newAcademicload.save().then(() => {
        this.set('isAddingNewAcademicload', false);
      });
    },

    cancelAddNewAcademicload() {
      this.set('isAddingNewAcademicload', false);
    },

    manageAcademicload() {
      this.set('isManagingAcademicload', true);
    },

    addNewAcademicload() {
      this.set('isAddingNewAcademicload', true);
    },
    doneAcademicload(){
      this.set('isManagingAcademicload', false);
    }

  }
});

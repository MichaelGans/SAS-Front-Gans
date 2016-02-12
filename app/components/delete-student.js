import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  actions: {
    deleteStudent: function(id){
      var myStore = this.get('store');
      if (confirm ('Are you sure you need to delete this student?')) {

        myStore.find('student',  id).then(function(student) {
          student.set('resInfo', null); // repeat this line for all connected lookup tables
          student.set('gender', null);
          student.set('country', null);
          student.set('province', null);
          student.save().then(function(){
            student.destroyRecord();
          });
        });

      }
    }
  }
});

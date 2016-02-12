import Ember from 'ember';

export default Ember.Component.extend({
  isStudentFormEditing: false,
  store: Ember.inject.service(),
  selectedResidency: null,
  selectedProvince: null,
  selectedCountry: null,
  selectedCity: null,
  studentModel: null,
  ID: null,

  generateModel: Ember.observer('isStudentFormEditing', function(){
    var self = this;
    self.set ('studentModel', this.get('store').peekRecord('student', this.get('ID')));
    self.set ('selectedResidency',self.get('studentModel').get('resInfo') );
    self.set ('selectedGender',self.get('studentModel').get('gender') );
    self.set ('selectedCountry',self.get('studentModel').get('country') );
    self.set ('selectedProvince',self.get('studentModel').get('province') );
    self.set ('selectedCity',self.get('studentModel').get('city') );
    self.set ('selectedAcademicload',self.get('studentModel').get('academicload') );
  }),

  residencyModel: Ember.computed(function(){
    return this.get('store').findAll('residency');
  }),

  genderModel: Ember.computed(function(){
    return this.get('store').findAll('gender');
  }),

  countryModel: Ember.computed(function(){
    return this.get('store').findAll('country');
  }),

  provinceModel: Ember.computed(function(){
    return this.get('store').findAll('province');
  }),

  cityModel: Ember.computed(function(){
    return this.get('store').findAll('city');
  }),

  academicloadModel: Ember.computed(function(){
    return this.get('store').findAll('academicload');
  }),

  actions: {
    saveStudent () {
      var updatedStudent = this.get('studentModel')
      updatedStudent.set('resInfo',this.get('selectedResidency') );
      updatedStudent.set('gender',this.get('selectedGender') );
      updatedStudent.set('country',this.get('selectedCountry') );
      updatedStudent.set('province',this.get('selectedProvince') );
      updatedStudent.set('city',this.get('selectedCity') );
      updatedStudent.set('academicload',this.get('selectedAcademicload') );
      updatedStudent.save().then(() => {
        this.set('isStudentFormEditing', false);
      });
    },

    editStudent () {
      this.set('isStudentFormEditing', true);
    },

    cancel () {
      this.set('isStudentFormEditing', false);
    }

  }
});

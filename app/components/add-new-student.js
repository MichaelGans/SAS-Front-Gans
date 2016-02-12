import Ember from 'ember';

export default Ember.Component.extend({
    isStudentFormEditing: false,
    store: Ember.inject.service(),
    selectedResidency: null,
    selectedGender: null,
    selectedCountry: null,
    selectedProvince: null,
    selectedCity: null,
    selectedAcademicload: null,

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
        var myStore = this.get('store');
        var chosenResidency = myStore.peekRecord('residency', this.get ('selectedResidency'));
        var chosenGender = myStore.peekRecord('gender', this.get ('selectedGender'));
        var chosenCountry = myStore.peekRecord('country', this.get ('selectedCountry'));
        var chosenProvince = myStore.peekRecord('province', this.get ('selectedProvince'));
        var chosenCity = myStore.peekRecord('city', this.get ('selectedCity'));
        var chosenAcademicload = myStore.peekRecord('academicload', this.get ('selectedAcademicload'));
        var newStudent = myStore.createRecord('student', {
          number: this.get('number'),
          firstName: this.get('firstName'),
          lastName: this.get('lastName'),
          DOB: this.get('DOB'),
          resInfo: chosenResidency,
          gender: chosenGender,
          country: chosenCountry,
          province: chosenProvince,
          city: chosenCity,
          academicload: chosenAcademicload
        });

        newStudent.save().then(() => {
          this.set('isStudentFormEditing', false);
        });
      },

      selectResidency (residency){
        this.set('selectedResidency', residency);
        Ember.Logger.log(this.get('selectedResidency'));
      },

      selectGender (gender){
        this.set('selectedGender', gender);
        Ember.Logger.log(this.get('selectedGender'));
      },

      selectCountry (country){
        this.set('selectedCountry', country);
        Ember.Logger.log(this.get('selectedCountry'));
      },

      selectProvince (province){
        this.set('selectedProvince', province);
        Ember.Logger.log(this.get('selectedProvince'));
      },

      selectCity (city){
        this.set('selectedCity', city);
        Ember.Logger.log(this.get('selectedCity'));
      },

      selectedAcademicload (academicload){
        this.set('selectedAcademicload', academicload);
        Ember.Logger.log(this.get('selectedAcademicload'));
      },

      addNewStudent () {
        this.set('isStudentFormEditing', true);
      },

      cancel () {
        this.set('isStudentFormEditing', false);
      }

    }
});

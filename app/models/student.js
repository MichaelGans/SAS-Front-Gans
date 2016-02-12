import DS from 'ember-data';

export default DS.Model.extend({
  number: DS.attr(),
  firstName: DS.attr(),
  lastName: DS.attr(),
  DOB: DS.attr(),
  resInfo: DS.belongsTo('residency',{ async: true }),
  gender: DS.belongsTo('gender',{ async: true }),
  country: DS.belongsTo('country',{ async: true }),
  province: DS.belongsTo('province',{ async: true }),
  city: DS.belongsTo('city',{ async: true }),
  academicload: DS.belongsTo('academicload',{ async: true })
});

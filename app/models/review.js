import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  rating: DS.attr(),
  reviews: DS.attr(),
  business: DS.belongsTo('business', {async:true})
});

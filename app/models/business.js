import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  description:DS.attr(),
  type: DS.attr(),
  imageURL: DS.attr(),
  reviews: DS.hasMany('review' ,{async:true}),

});

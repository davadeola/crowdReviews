import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    Ember.RSVP.hash({
      businesses: this.store.findAll('business'),
      reviews: this.store.findAll('review')
    });
},
    actions:{
      addBusiness(params){
        var newBusiness = this.store.createRecord('business', params);
        newBusiness.save();
        this.transitionTo('index');

      }
    }


});

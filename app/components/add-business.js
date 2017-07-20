import Ember from 'ember';

export default Ember.Component.extend({
  addBusinessSubmit: false,
  actions:{
    addBusiness(){
      var params ={
        name: this.get('name')?this.get('name'):null,
        description:this.get('description')?this.get('description'):null,
        type: this.get('type')?this.get('type'):null,
        imageURL: this.get('imageURL')?this.get('imageURL'):null

      };
      this.set('addBusinessSubmit', true);
      this.sendAction('addBusiness', params);
    }
  }
});

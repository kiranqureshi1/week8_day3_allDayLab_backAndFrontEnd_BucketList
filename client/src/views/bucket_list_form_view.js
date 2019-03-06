const PubSub = require('../helpers/pub_sub.js');

const BucketListFormView = function (form) {
  this.form = form;
};

BucketListFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
     this.handleSubmit(evt);

  });
};

BucketListFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  console.log(evt);
  const  newBucketList = this.createBucketList(evt.target);
  PubSub.publish('EventView:event-save-clicked', newBucketList);
  evt.target.reset();
};

BucketListFormView.prototype.createBucketList = function (form) {
  const newBucketList = {
    event: form.event.value,
    year: form.year.value,
    location: form.location.value
  }
  return newBucketList;
};

module.exports = BucketListFormView;

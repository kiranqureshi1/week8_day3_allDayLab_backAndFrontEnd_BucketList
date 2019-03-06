const PubSub = require('../helpers/pub_sub.js');
const BucketListView = require('./bucket_list_view.js');

const BucketListGridView = function (container) {
  this.container = container;
};

BucketListGridView.prototype.bindEvents = function () {
  PubSub.subscribe('BucketList: data-loaded', (evt) =>{

   this.display(evt.detail);
   // console.log(evt.detail)
  });
};

BucketListGridView.prototype.display = function (data) {
  this.container.innerHTML = '';
  const bucketListView = new BucketListView(this.container);
  data.forEach((bucketList) => bucketListView.render(bucketList));
};

module.exports = BucketListGridView;

const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

  const BucketList = function (url) {
    this.url = url;
    this.request = new RequestHelper(this.url);
  };

  BucketList.prototype.bindEvents = function () {
    PubSub.subscribe('BucketListView: event-delete-clicked', (evt) =>{
      this.deleteBucketList(evt.detail);
    });

    PubSub.subscribe('EventView:event-save-clicked', (evt) => {
      this.postBucketList(evt.detail);
    });
  };

  BucketList.prototype.getData = function () {
      this.request.get()
      .then((data) => {
        PubSub.publish('BucketList: data-loaded', data);
        // console.log(data)
      })
      .catch(console.err);
  };

  BucketList.prototype.postBucketList = function (bucketList) {
    this.request.post(bucketList)
    .then((data) =>{
      PubSub.publish('BucketList: data-loaded', data)
      console.log(data);
    })
    .catch(console.err);
  };


  BucketList.prototype.deleteBucketList = function (bucketListId) {
    this.request.delete(bucketListId)
    .then((data) => {
      PubSub.publish('BucketList: data-loaded', data);
    })
    .catch(console.error);
  };

  module.exports = BucketList;

const BucketListFormView = require('./views/bucket_list_form_view.js');
const BucketListGridView = require('./views/bucket_list_grid_view.js');
const BucketList = require('./models/bucket_list.js');


document.addEventListener('DOMContentLoaded', () => {

  const url = 'http://localhost:3000/api/bucket-list';
  const bucketList = new BucketList(url);
  bucketList.bindEvents();
  bucketList.getData();


  const bucketListForm = document.querySelector('form#bucket-list-form');
  const bucketListFormView = new BucketListFormView(bucketListForm);
  bucketListFormView.bindEvents();

  const bucketListContainer =
  document.querySelector('div#bucket-list');
  const bucketListGridView = new
  BucketListGridView(bucketListContainer);
  bucketListGridView.bindEvents();

  // const url = 'http://localhost:3000/api/bucket-list';
  // const bucketList = new BucketList(url);
  // bucketList.bindEvents();
  // bucketList.getData();

});

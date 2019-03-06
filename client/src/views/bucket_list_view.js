const PubSub = require('../helpers/pub_sub.js');

  const BucketListView = function (container) {
    this.container = container;
  };

  BucketListView.prototype.render = function (bucketList) {
    const bucketListContainer = document.createElement


    const eventName = document.createElement("h2");
    eventName.textContent = bucketList.event;
    this.container.appendChild(eventName);

    const eventYear = document.createElement("li");
    eventYear.textContent = bucketList.year;
    this.container.appendChild(eventYear);

    const eventLocation = document.createElement("li");
    eventLocation.textContent = bucketList.location;
    this.container.appendChild(eventLocation);

    const eventDeleteButton = document.createElement('button');
      eventDeleteButton.classList.add('delete-btn');
    eventDeleteButton.value = bucketList._id
    this.container.appendChild(eventDeleteButton);

    eventDeleteButton.addEventListener('click', (evt) => {
      PubSub.publish('BucketListView: event-delete-clicked', evt.target.value);
    });
    return eventDeleteButton;

  };

  module.exports = BucketListView;

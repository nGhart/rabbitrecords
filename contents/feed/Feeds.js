import React from 'react';
import SingleFeed from './SingleFeed';
import Table from 'react-bootstrap/Table';
import feedStore from '../../stores/feedStore';

const Feeds = () => {
  const store = feedStore();

  return (
    <div>
      <Table bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>NAME</th>
            <th>DATE PURCHASED</th>
            <th>QUANTITY</th>
            <th>SERVING/DAY</th>
            <th>ESTIMATED DURATION</th>
            <th>ESTIMATED RESTOCK DATE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {store.feeds &&
            store.feeds.map((item, index) => {
              return <SingleFeed index={index} item={item} key={item._id} />;
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default Feeds;

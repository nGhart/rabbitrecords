import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import animalStore from '../stores/store';
import feedStore from '../stores/feedStore';

const FeedingSummary = () => {
  const store = feedStore();
  const animal = animalStore();
  const [recentFeeds, setRecentFeeds] = useState([]);
  useEffect(() => {
    store.getFeeds();
  }, [store]);

  useEffect(() => {
    const feed = (store.feeds || []).slice(-3);
    setRecentFeeds(feed);
  }, [store.feeds]);

  useEffect(() => {
    store.getFeeds();
  }, [store]);

  useEffect(() => {
    animal.getAnimals();
  }, [animal]);

  const animals = animal.animals || [];
  let totalAnimals = animals.length;

  function getEstDuration(feedQuantity, feedServing) {
    return Math.floor(feedQuantity / (totalAnimals * feedServing));
  }

  return (
    <Container>
      <Row>
        <h3 className="font2">Feed Restock</h3>
      </Row>
      <Stack className="font1" direction="horizontal" gap={2}>
        {recentFeeds &&
          recentFeeds.map((item, index) => {
            const estimate = getEstDuration(
              item.feedQuantity,
              item.feedServing
            );
            function calculateRemainder(originalDate, daysToAdd) {
              const date = new Date(originalDate);
              date.setDate(date.getDate() + daysToAdd);
              const today = new Date();
              const differenceInMilliseconds = date - today;
              const remainder = Math.ceil(
                differenceInMilliseconds / (1000 * 60 * 60 * 24)
              );
              return remainder;
            }
            return (
              <div
                className="homeBack"
                key={index}
                style={{
                  textAlign: 'center',
                  margin: 'auto',
                }}
              >
                <h6>{item.feedName}</h6>
                <h6>
                  {calculateRemainder(item.feedDatePurchased, estimate)} days
                </h6>
              </div>
            );
          })}
      </Stack>
    </Container>
  );
};

export default FeedingSummary;

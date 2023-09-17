import React, { useState } from 'react';
import feedStore from '../../stores/feedStore';
import EditFeed from './EditFeeds';
import Modal from 'react-bootstrap/Modal';

const SingleFeed = ({ item, index }) => {
  const store = feedStore((store) => {
    return {
      editFeed: store.editFeed,
      deleteFeed: store.deleteFeed,
      handleUpdateFeed: store.handleUpdateFeed,
      updateFeed: store.updateFeed,
      updateFormFeed: store.updateFormFeed,
    };
  });
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    store.editFeed(item);
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <tr key={item._id}>
        <td>{index + 1}</td>
        <td>{item.feedName}</td>
        <td>{item.feedDatePurchased}</td>
        <td>{item.feedQuantity}</td>
        <td>{item.feedServing}</td>
        <td>calc</td>
        <td>calc</td>
        <td>
          <div className="around actionIcons">
            <button className="actionIcons" onClick={handleOpenModal}>
              <i className="fas fa-edit"></i>
            </button>
            <button
              className="actionIcons"
              onClick={() => store.deleteFeed(item._id)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </td>
      </tr>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditFeed
            updateFeed={store.updateFeed}
            handleUpdateFeed={store.handleUpdateFeed}
            updateFormFeed={store.updateFormFeed}
            handleCloseModal={handleCloseModal}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SingleFeed;

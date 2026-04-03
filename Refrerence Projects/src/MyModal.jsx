import React from "react";
import Modal from "react-modal";

const MyModal = (props) => {
  var data = props.data;
  return (
    <Modal
      isOpen={props.selectedOption}
      contentLabel="Minimal Modal Example"
      // closes tab when we click outside the tab window
      onRequestClose={props.closeModal}
    >
      {data.map((user) => (
        <div key={user.id}>
          <h2>
            {user.name} - {user.city}
          </h2>
        </div>
      ))}
      <button onClick={props.closeModal}>Close</button>
    </Modal>
  );
};
export default MyModal;

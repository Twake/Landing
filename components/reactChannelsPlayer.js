import React, { Component } from "react";
import ReactPlayer from "react-player";
import Modal from "react-responsive-modal";

class ChannelsPlayer extends Component {
  render() {
    const { openChannels, toggleModal } = this.props;
    return (
      <Modal
        open={openChannels}
        onClose={toggleModal}
        styles={{
          modal: {
            maxWidth: "unset",
            width: "100%",
            padding: "unset"
          },
          overlay: {
            background: "rgba(0, 0, 0, 0.5)"
          },
          closeButton: {
            background: "yellow"
          }
        }}
        center
      >
        <ReactPlayer
          url="https://www.youtube.com/watch?v=Yl98t9rzaII"
          width="100%"
          height="calc(100vh - 100px)"
        />
      </Modal>
    );
  }
}

export default ChannelsPlayer;

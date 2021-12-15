import { Modal } from "react-responsive-modal";
import React, { useState } from "react";
import styled from "styled-components";
import ResourceModal from "../modals/ResourceModal";
const VideoBackgroundContainer = styled.div`
  display: block;
  width: 100%;
  height: 50vh;
  background: url("${({ videoPoster }) => videoPoster} ");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 1.2rem;
  borderradius: 1rem;
`;

const VideoBackground = ({ children, videoPoster, video, height }) => {
  const [open, setOpen] = useState(false);
  const onCloseModal = () => {
    setOpen(false);
  };

  const onOpenModal = () => {
    setOpen(true);
  };
  return (
    <>
      <div className="resource-wrap">
        <Modal
          open={open}
          onClose={onCloseModal}
          center
          style={{ maxWidth: "80vw" }}
        >
          <ResourceModal
            type="video"
            asset={video}
            triggerClose={onCloseModal}
          />
        </Modal>
      </div>

      <VideoBackgroundContainer
        // href={video}
        onClick={onOpenModal}
        videoPoster={videoPoster}
        data-effect="fadeIn"
        height={height}
      >
        {children}
      </VideoBackgroundContainer>
    </>
  );
};

export default VideoBackground;

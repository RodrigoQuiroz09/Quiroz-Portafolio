/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import UnrealCert from "../../assets/Unreal.jpg";
import UnityCert from "../../assets/Unity.jpg";
import ReactRedux from "../../assets/ReactRedux.jpg";
import ReactNative from "../../assets/ReactNative.jpg";
import UnityCert2 from "../../assets/Unity2.jpg";

const certImgs = [UnrealCert, UnityCert, ReactRedux, ReactNative, UnityCert2];
const modal = {
  position: "fixed",
  zIndex: 2,
  left: 0,
  top: 0,
  width: "100vw",
  height: "100vh",
  overflow: "auto",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
};

const close = {
  position: "absolute",
  top: 15,
  right: 35,
  color: "#f1f1f1",
  fontSize: 40,
  fontWeight: "bold",
  cursor: "pointer",
};

const modalContent = {
  display: "flex",
  alignItems: "center",
  width: "55%",
  height: "100%",
  margin: "auto",
};

export const CertModal = ({ isOpen, setIsopen, cert }) => {
  console.log(cert);
  return (
    <>
      {isOpen && (
        <CertModalContent onClose={() => setIsopen(false)}>
          <img src={certImgs[cert]} alt="" />
        </CertModalContent>
      )}
    </>
  );
};

export const CertModalContent = ({ onClose, children }) => {
  return (
    <div style={modal}>
      <span style={close} onClick={onClose}>
        &times;
      </span>

      <div style={modalContent}>{children}</div>
    </div>
  );
};

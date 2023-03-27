import React, {Fragment} from 'react';
import classes from './Modal.module.css';
import {createPortal} from "react-dom";

const Backdrop = props => {
    return (
        <div className={classes.backdrop}  onClick={props.onClose}></div>
    );
}

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
}

const Modal = (props) => {
    const portalElement = document.getElementById('overlays');
    return (
        <Fragment>
            {createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
            {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    )
}

export default Modal;
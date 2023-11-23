import { Component } from 'react';
import { createPortal } from 'react-dom';
import css from '../Modal/Modal.module.css';
const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.close();
    }
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }

  render() {
    return createPortal(
      <div onClick={this.closeModal} className={css.overlay}>
        <div className={css.modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;

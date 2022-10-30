import css from './Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <p className={css.notification}>{message}</p>;
};

Notification.protoType = {
  message: PropTypes.string,
};

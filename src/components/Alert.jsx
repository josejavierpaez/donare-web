import swal from 'sweetalert';

export const Alert = ({title, body, type}) => {
  return swal(`${title}`, `${body}`, `${type}`).then(
    () => (window.location = '/'),
  );
};

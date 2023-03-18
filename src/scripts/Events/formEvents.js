import { createOrder, getOrders } from '../../api/orderData';
import { viewAllOrders } from '../components/shared/pages/viewOrders';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();
    if (e.target.id.includes('edit-item')) {
      const [, firebaseKey] = e.target.id.split('--');
      const payload = {
        name: document.querySelector('name').value,
        price: document.querySelector('#price').value,
        firebaseKey,
      };

      (payload).then(() => {
        getOrders().then(viewAllOrders);
      });
    }

    if (e.target.id.includes('submit-order')) {
      const payload = {
        name: document.querySelector('#order-name').value,
        phone: document.querySelector('#customer-phone').value,
        email: document.querySelector('#customer-email').value,
        price: document.querySelector('#price').value,
      };

      createOrder(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        getOrders(patchPayload).then(() => {
          getOrders().then(viewAllOrders);
        });
      });
    }
  });
};
export default formEvents;

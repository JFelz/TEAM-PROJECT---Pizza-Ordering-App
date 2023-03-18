import getItems from '../../api/itemData';
import signOut from '../helpers/signOut';

const navigationEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#google-auth')
    .addEventListener('click', signOut);

  document.querySelector('#view-orders').addEventListener('click', () => {

    getItems().then(showItems)
  });

  document.querySelector('#create-order').addEventListener('click', () => {
    // Create order Form call

  });

  // STRETCH: SEARCH
  //   document.querySelector('#search').addEventListener('keyup', (e) => {
  //     const searchValue = document.querySelector('#search').value.toLowerCase();
  //     console.warn(searchValue);

  //     // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
  //     if (e.keyCode === 13) {
  //       // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
  //       // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
  //       // OTHERWISE SHOW THE STORE

//       document.querySelector('#search').value = '';
//     }
//   });
};

export default navigationEvents;

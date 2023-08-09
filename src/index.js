import './styles.css';

import searchUser from './modules/profileSearch.js';

const search =  document.querySelector('.btn-primary');
const userInput = document.querySelector('.profile');

search.addEventListener('click', () => {
  const user = userInput.value;
  searchUser(user);
});
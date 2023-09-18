const API_URL = 'https://api.github.com/users/';

const userImage = document.querySelector('.image-1');
const userActualName = document.querySelector('.name-text');
const userName = document.querySelector('.username');
const userEntryDate = document.querySelector('.created-date');
const userBio = document.querySelector('.bio');
const userRepo = document.querySelector('.repos');
const userFollower = document.querySelector('.follower');
const userFollowing = document.querySelector('.following');
const userLocation = document.querySelector('.location');
const userLink = document.querySelector('.actlink');
const userSocial = document.querySelector('.social-media');
const userOrg = document.querySelector('.organisation');

const searchUser = async (user) => {
  const response = await fetch(`${API_URL}${user}`);
  const data = await response.json();

  userImage.setAttribute('src', data.avatar_url);
  userActualName.innerHTML = data.name;
  userName.innerHTML = data.login;
  userEntryDate.innerHTML = `Joined on ${data.created_at}`;
  userBio.innerHTML = data.bio;
  userRepo.innerHTML = data.public_repos;
  userFollower.innerHTML = data.followers;
  userFollowing.innerHTML = data.following;

  if (data.location === null) {
    userLocation.innerHTML = 'No location set';
    userLocation.style.color = '#445069';
  } else {
    userLocation.innerHTML = data.location;
  }

  if (data.blog === null) {
    userLink.innerHTML = 'Link not available';
    userLink.style.color = '#445069';
    userLink.style.textDecoration = 'none';
  } else {
    userLink.innerHTML = data.blog;
    userLink.setAttribute('href', data.blog);
  }

  if (data.twitter_username === null) {
    userSocial.innerHTML = 'Social presence not available';
    userSocial.style.color = '#445069';
  } else {
    userSocial.innerHTML = data.twitter_username;
  }

  if (data.company === null) {
    userOrg.innerHTML = 'Company not available';
    userOrg.style.color = '#445069';
  } else {
    userOrg.innerHTML = data.company;
  }
};

export default searchUser;

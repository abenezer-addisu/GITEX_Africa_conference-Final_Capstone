const mobileMenu = document.querySelector('.mobile-menu i');
const menu = document.querySelectorAll('.menu-mobile,.mobile-menu i');

const toogleMenu = () => {
  menu[1].classList.toggle('hideMenu');
};

menu.forEach((list) => {
  list.addEventListener('click', () => toogleMenu());
});

const setBg = (sy) => {
  if (sy > 60) {
    mobileMenu.style.background = '#fff';
    mobileMenu.style.padding = '0.5rem';
    mobileMenu.style.borderRadius = '50%';
  } else {
    mobileMenu.style.background = 'none';
  }
};

window.addEventListener('scroll', () => setBg(window.scrollY));

const guests = [
  {
    name: 'ABENEZER ADDISU',
    title: 'Senior Advisor',
    description:
      'Ethiopian Prime Minister Office Digital directorate',
    image: 'assets/images/1677005875774.jpg',
  },
  {
    name: 'SAMIYA ABDULKADIR GODU',
    title:
      "President",
    description:
      " Ethiopian Youth Entrepreneurs Association (EYEA) Ethiopia ",
    image: 'assets/images/samiya.jpg',
  },
  {
    name: 'BELETE MOLLA',
    title: 'Minister Dieata',
    description:
      'Ministry of Minister of Innovation and Technology',
    image: 'assets/images/molla.jpg',
  },
  {
    name: 'NATHALIE AKON GABALA',
    title: 'Executive Director, Pan African Programs"',
    description:
      'Mastercard Foundation   Kenya ',
    image: 'assets/images/Nathalie1603.jpg',
  },
  {
    name: 'Aodhán King',
    title: 'Global Chief Government Industry Scientist',
    description:
      'Huawei Technologies.',
    image: 'assets/images/juliana.jpg',
  },
  {
    name: 'Matt Crocker',
    title: 'Head of Service Development & Innovation',
    description:
      'UK Civil Service',
    image: 'assets/images/Zacharia George.jpg',
  },
  
];

const guestsList = document.querySelector('.guests-list');

guests.forEach((guest, i) => {
  const guestDiv = document.createElement('div');
  guestDiv.classList.add('guest-div');
  if (i > 1) {
    guestDiv.classList.add('hide');
  }
  const img = document.createElement('img');
  img.classList.add('guest-img');
  img.src = guest.image;
  img.alt = `${guest.name}'s picture`;

  const imgCover = document.createElement('img');
  imgCover.classList.add('img-cover');
  imgCover.src = 'assets/images/bg-art.png';
  imgCover.alt = 'background tile';

  const guestDescription = document.createElement('div');
  guestDescription.classList.add('guest-description');

  const guestName = document.createElement('h3');
  guestName.classList.add('guest-name');
  guestName.innerHTML = guest.name;

  const guestTitle = document.createElement('h3');
  guestTitle.classList.add('guest-title');
  guestTitle.innerHTML = guest.title;

  const guestDesc = document.createElement('h3');
  guestDesc.classList.add('guest-desc');
  guestDesc.innerHTML = guest.description;

  guestDescription.appendChild(guestName);
  guestDescription.appendChild(guestTitle);
  guestDescription.appendChild(guestDesc);

  guestDiv.appendChild(imgCover);
  guestDiv.appendChild(img);
  guestDiv.appendChild(guestDescription);

  guestsList.appendChild(guestDiv);
});

const moreGuests = document.createElement('button');
moreGuests.classList.add('more');
moreGuests.innerHTML = `
More <span><i class="fa-solid fa-chevron-down"></i><span>
`;

const showMore = () => {
  const hidden = document.querySelectorAll('.hide');
  hidden.forEach((guest) => {
    guest.classList.toggle('hide');
  });
  moreGuests.classList.add('hide');
};

moreGuests.addEventListener('click', () => showMore());

guestsList.appendChild(moreGuests);

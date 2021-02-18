import getBearStuff from './getBearStuff';

const buttonEvents = () => {
  document.querySelector('#submit').addEventListener('click', getBearStuff);
};

export default buttonEvents;

import { getBearStuff } from '../components/bearBuilder';

const river = () => {
  document.querySelector('#submit').addEventListener('click', getBearStuff);
};

export default river;

import bears from './data/bearsData';
import bearBuilder from '../components/bearBuilder';

const getBearStuff = (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const imgUrl = document.querySelector('#imgUrl').value;

  const obj = {
    name,
    imgUrl,
  };

  bears.push(obj);
  bearBuilder(bears);

  document.querySelector('form').reset();
};

export default getBearStuff;

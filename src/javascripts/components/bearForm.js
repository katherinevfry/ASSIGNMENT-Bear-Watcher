import printToDom from '../helpers/printToDom';
import { bearBuilder } from './bearBuilder';
import bears from '../helpers/data/bearsData';

const bearForm = () => {
  const bearPage = `
  <div class='jumbotron jumbotron-fluid bear-header'>
  <div class="container">
    <h1 class="display-4 header-text">Brown Bears</h1>
    <p class="lead header-text">of Katmai National Park</p>
  </div>
</div>
  
  <!-- form -->
  <div class='shadow-sm card card-body' id='build-a-bear'>
  <h3>Build a Bear</h3>
  <form id='bear-form'>
    <div class='mb-3'>
      <label for='name' class='form-label'>Name</label>
      <input type='text' class='form-control' id='name' required>
    </div>
    <div class='mb-3'>
      <label for='imageUrl' class='form-label'>Image Url</label>
      <input type='url' class='form-control' id='imgUrl' required>
    </div>
    <button type='submit' class='btn btn-outline-dark' id='submit'>Submit</button>
 </div>
 </div>
  
  <div class='shadow-sm p-4 bearDen'>
  <h4 class='text-left'>The Bear Den</h4>
<div class='d-flex flex-row flex-wrap justify-content-center' id='bearCave'></div>
</div>`;

  printToDom('body', bearPage);
  bearBuilder(bears);
};

export default bearForm;

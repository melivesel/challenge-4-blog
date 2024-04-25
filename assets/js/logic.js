const themeSwitcher =document.querySelector('#toggle');
const container = document.querySelector('.container');

let mode = 'dark';

themeSwitcher.addEventListener('click', function () {
   
    if (mode === 'dark') {
      mode = 'light';
      container.setAttribute('class', 'light');
      document.getElementById('toggle').textContent = "🌆";

    }
   
    else {
      mode = 'dark';
      container.setAttribute('class', 'dark');
      document.getElementById('toggle').textContent = "🌇";
    }

  });
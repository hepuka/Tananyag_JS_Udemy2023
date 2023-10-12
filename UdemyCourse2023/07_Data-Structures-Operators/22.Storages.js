document.addEventListener('click', () => {
  localStorage.setItem(
    'sessionData',
    JSON.stringify({ name: 'zoli', age: 46, address: 'Debrecen' })
  );
});

window.addEventListener('storage', e => {
  console.log(e);
});

const func = () => {
  console.log('Helloka');
};

setTimeout(func, 2000);

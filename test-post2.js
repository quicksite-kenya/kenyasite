fetch('http://localhost:3000/contact.html', {
  method: 'POST'
}).then(res => res.text()).then(console.log).catch(console.error);

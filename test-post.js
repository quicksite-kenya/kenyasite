fetch('http://localhost:3000/api/consultation', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'test', email: 'test@test.com', service: 'test', message: 'test' })
}).then(res => res.text()).then(console.log).catch(console.error);

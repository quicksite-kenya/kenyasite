import http from 'http';

const req = http.request({
  hostname: 'localhost',
  port: 3000,
  path: '/api/generate-design',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
}, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => console.log('RESPONSE:', res.statusCode, data));
});
req.write(JSON.stringify({
  promptText: "Return a JSON",
  systemInstruction: "You are a test"
}));
req.end();

import handler from "./api/consultation.js";

async function test() {
  const req = {
    method: "POST",
    body: { name: 'test', email: 'test@o.com', service: 'test', message: 'test' }
  };
  const res = {
    setHeader: () => {},
    status: (code) => ({
      json: (data) => console.log(code, data),
      end: () => console.log(code, "Ended")
    })
  };
  await handler(req, res);
}

test();

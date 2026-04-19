import handler from "./api/consultation.js";

async function test() {
  const req = {
    method: "POST",
    body: { name: 'test', email: 'test@o.com', service: 'test', message: 'test' }
  };
  const res = {
    setHeader: () => {},
    status: (code) => ({
      json: (data) => console.log(Date.now() - start, "ms |", code, data),
      end: () => console.log(code, "Ended")
    })
  };
  const start = Date.now();
  await handler(req, res);
  console.log("Total time:", Date.now() - start, "ms");
  process.exit(0);
}

test();

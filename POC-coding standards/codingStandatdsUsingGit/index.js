module.exports = async function (context, req) {
  const name = req.query.name || (req.body && req.body.name);
  if (!name) {
    context.res = {
      status: 400,
      body: "Please provide a name"
    };
    return;
  }

  context.res = {
    status: 200,
    body: `Hello, ${name}`
  };
};
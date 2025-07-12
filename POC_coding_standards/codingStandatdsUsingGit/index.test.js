const func = require('./index');

describe('condingStandardsUsingGit Function', () => {
  it('should return 200 if name is provided', async () => {
    const context = {};
    const req = { query: { name: 'Aditya' } };
    await func(context, req);
    expect(context.res.status).toBe(200);
    expect(context.res.body).toBe('Hello, Aditya');
  });

  it('should return 400 if name is missing', async () => {
    const context = {};
    const req = { query: {} };
    await func(context, req);
    expect(context.res.status).toBe(400);
    expect(context.res.body).toBe('Please provide a name');
  });
});
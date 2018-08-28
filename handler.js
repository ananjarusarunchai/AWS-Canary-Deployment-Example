module.exports.hello = (event, context, callback) => {
  if ((event.queryStringParameters || {}).error) callback(new Error('Oh no!'));
  // console.log('The first version');
  throw "version 0.0.13 is failed";
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'API version 0.0.12'
    })
  };
  return callback(null, response);
};

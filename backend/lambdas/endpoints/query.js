const Responses = require('../common/API_Responses');
const { withHooks } = require('../common/hooks');

const handler = async event => {
  return Responses._200({ message: 'Query. ' + JSON.stringify(event.query)});
};

exports.handler = withHooks(handler);
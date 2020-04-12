const Responses = require('../common/API_Responses');
const { withHooks } = require('../common/hooks');

const handler = async event => {
  return Responses._200({ message: 'Update. ' + JSON.stringify(event.body)});
};

exports.handler = withHooks(handler);
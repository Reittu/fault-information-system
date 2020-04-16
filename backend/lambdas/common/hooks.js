const { useHooks, parseEvent, handleUnexpectedError } = require('lambda-hooks');

const withHooks = useHooks({
    before: [parseEvent],
    after: [],
    onError: [handleUnexpectedError],
});

module.exports = {
    withHooks,
};
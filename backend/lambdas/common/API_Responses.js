const Responses = {
    _DefineResponse(statusCode = 502, data = {}) {
        return {
            statusCode,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token'
            },
            body: JSON.stringify(data),
        };
    },
    _200(data = {}) {
        return this._DefineResponse(200, data);
    },
    _400(data = {}) {
        return this._DefineResponse(400, data);
    },
    _404(data = {}) {
        return this._DefineResponse(404, data);
    },
    _500(data = {}) {
        return this._DefineResponse(500, data);
    },
};

module.exports = Responses;
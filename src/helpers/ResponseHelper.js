const categories = {
    create: (type, message) => ({
        error: {
            messages: [{
                type: 'error',
                body: message,
            }],
            type: 'error',
            statusCode: 400,
        },
        notFound: {
            messages: [{
                type: 'error',
                body: message,
            }],
            type: 'error',
            statusCode: 404,
        },
        success: {
            messages: [{
                type: 'success',
                body: message,
            }],
            type: 'success',
            statusCode: 200,
        },
    }[type]),
    update: (type, message, id = null) => ({
        error: {
            messages: [{
                type: 'error',
                body: message,
            }],
            type: 'error',
            statusCode: 400,
        },
        notFound: {
            messages: [{
                type: 'error',
                body: message,
            }],
            type: 'error',
            statusCode: 404,
        },
        success: {
            id,
            messages: [{
                type: 'success',
                body: message,
            }],
            type: 'success',
            statusCode: 200,
        },
    }[type]),
    delete: (type, message, id = null) => ({
        notFound: {
            messages: [{
                type: 'error',
                body: message,
            }],
            type: 'error',
            statusCode: 404,
        },
        success: {
            id,
            messages: [{
                type: 'success',
                body: message,
            }],
            type: 'success',
            statusCode: 200,
        },
    }[type]),
    get: (item, fileType) => ({
      notFound: {
        messages: [{
            type: 'error',
            body: message,
        }],
        type: 'error',
        statusCode: 404,
    },
    success: {
        id,
        messages: [{
            type: 'success',
            body: message,
        }],
        type: 'success',
        statusCode: 200,
    },
    }[type]),
    findOne: (type, message) => ({
        error: {
            messages: [{
                type: 'error',
                body: message,
            }],
            type: 'error',
            statusCode: 400,
        },
        notFound: {
            messages: [{
                type: 'error',
                body: message,
            }],
            type: 'error',
            statusCode: 404,
        },
    }[type]),
};

const users = {
    create: (type, message) => ({
        error: {
            messages: [{
                type: 'error',
                body: message,
            }],
            type: 'error',
            statusCode: 400,
        },
        notFound: {
            messages: [{
                type: 'error',
                body: message,
            }],
            type: 'error',
            statusCode: 404,
        },
        success: {
            messages: [{
                type: 'success',
                body: message,
            }],
            type: 'success',
            statusCode: 200,
        },
    }[type]),
    update: (type, message, id = null) => ({
        error: {
            messages: [{
                type: 'error',
                body: message,
            }],
            type: 'error',
            statusCode: 400,
        },
        notFound: {
            messages: [{
                type: 'error',
                body: message,
            }],
            type: 'error',
            statusCode: 404,
        },
        success: {
            id,
            messages: [{
                type: 'success',
                body: message,
            }],
            type: 'success',
            statusCode: 200,
        },
    }[type]),
    delete: (type, message, id = null) => ({
        notFound: {
            messages: [{
                type: 'error',
                body: message,
            }],
            type: 'error',
            statusCode: 404,
        },
        success: {
            id,
            messages: [{
                type: 'success',
                body: message,
            }],
            type: 'success',
            statusCode: 200,
        },
    }[type]),
    get: (item, fileType) => ({
      notFound: {
        messages: [{
            type: 'error',
            body: message,
        }],
        type: 'error',
        statusCode: 404,
    },
    success: {
        id,
        messages: [{
            type: 'success',
            body: message,
        }],
        type: 'success',
        statusCode: 200,
    },
    }[type]),
    findOne: (type, message) => ({
        error: {
            messages: [{
                type: 'error',
                body: message,
            }],
            type: 'error',
            statusCode: 400,
        },
        notFound: {
            messages: [{
                type: 'error',
                body: message,
            }],
            type: 'error',
            statusCode: 404,
        },
    }[type]),
};

const items = {
    create: (type, message) => ({
        error: {
            messages: [{
                type: 'error',
                body: message,
            }],
            type: 'error',
            statusCode: 400,
        },
        notFound: {
            messages: [{
                type: 'error',
                body: message,
            }],
            type: 'error',
            statusCode: 404,
        },
        success: {
            messages: [{
                type: 'success',
                body: message,
            }],
            type: 'success',
            statusCode: 200,
        },
    }[type]),
    update: (type, message, id = null) => ({
        error: {
            messages: [{
                type: 'error',
                body: message,
            }],
            type: 'error',
            statusCode: 400,
        },
        notFound: {
            messages: [{
                type: 'error',
                body: message,
            }],
            type: 'error',
            statusCode: 404,
        },
        success: {
            id,
            messages: [{
                type: 'success',
                body: message,
            }],
            type: 'success',
            statusCode: 200,
        },
    }[type]),
    delete: (type, message, id = null) => ({
        notFound: {
            messages: [{
                type: 'error',
                body: message,
            }],
            type: 'error',
            statusCode: 404,
        },
        success: {
            id,
            messages: [{
                type: 'success',
                body: message,
            }],
            type: 'success',
            statusCode: 200,
        },
    }[type]),
    get: (item, fileType) => ({
      notFound: {
        messages: [{
            type: 'error',
            body: message,
        }],
        type: 'error',
        statusCode: 404,
    },
    success: {
        id,
        messages: [{
            type: 'success',
            body: message,
        }],
        type: 'success',
        statusCode: 200,
    },
    }[type]),
    findOne: (type, message) => ({
        error: {
            messages: [{
                type: 'error',
                body: message,
            }],
            type: 'error',
            statusCode: 400,
        },
        notFound: {
            messages: [{
                type: 'error',
                body: message,
            }],
            type: 'error',
            statusCode: 404,
        },
    }[type]),
};

module.exports = {
  categories,
  users,
  items
};

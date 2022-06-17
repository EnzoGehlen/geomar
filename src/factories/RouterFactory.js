const categories = require('../routes/categories');
const users = require('../routes/users');
const items = require('../routes/items');

class RouterFactory {
    constructor() {
        this.categories = categories();
        this.users = users();
        this.items = items();
        this.routers = {};
    }


    get(router) {
        if (!this.routers[router] && this[router]) {
            this.routers[router] = this[router];
        }
        return this.routers[router];
    }
}

module.exports = new RouterFactory();

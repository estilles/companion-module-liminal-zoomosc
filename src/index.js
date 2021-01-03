const instance_skel = require('../../../instance_skel');

const actions = require('./actions');
const configs = require('./configs');
const constants = require('./constants');

class HoobsInstance extends instance_skel {
    constructor(system, id, config) {
        super(system, id, config);

        Object.assign(this, {
            ...actions,
            ...configs,
            ...constants,
        });

        this.config = config;
        this.initConstants();
    }

    init() {

    }

    updateConfig(config) {
        this.config = config;
    }

    destroy() {

    }
}

module.exports = HoobsInstance;

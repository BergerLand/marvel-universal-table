var controller = (() => {

    const table = require("./table.json");

    const getTable = () => {
        return table;
    };

    const getFeats = () => {
        return table.feats;
    };

    const getRanks = () => {
        return table.ranks;
    };

    return {
        getModel: getModel
    }

})();

module.exports = controller;
const controller = (() => {

    const table = require("./table.json");

    return {
        table: table
    }

})();

module.exports = controller.table;
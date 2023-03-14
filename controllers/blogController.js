const db = require('../db');
const helper = require('../helper');
const config = require('../config');

const getMultiple = async (req, res) => {
    const offset = helper.getOffset(1, config.listPerPage);
    const rows = await db.query(
        `SELECT id, title, description, time 
    FROM blogs LIMIT ${offset},${config.listPerPage}`
    );
    const data = helper.emptyOrRows(rows);
    res.json(data)
    return {
        data
    }
}

async function create(data) {
    const result = await db.query(
        `INSERT INTO blogs (title, description, time) VALUES (?,?,?)`, [data.title, data.description, data.time]
    );

    let message = 'Error in creating blogs';
    if (result.affectedRows) {
        message = 'blogs created successfully';
    }

    return {
        message
    };
}

async function update(id, data) {
    const result = await db.query(
        `UPDATE blogs 
    SET name="${data.name}", released_year=${data.released_year}, githut_rank=${data.githut_rank}, 
    pypl_rank=${data.pypl_rank}, tiobe_rank=${data.tiobe_rank} 
    WHERE id=${id}`
    );

    let message = 'Error in updating blogs';

    if (result.affectedRows) {
        message = 'blogs updated successfully';
    }

    return {
        message
    };
}

async function remove(id) {
    const result = await db.query(
        `DELETE FROM blogs WHERE id=${id}`
    );

    let message = 'Error in deleting blogs';

    if (result.affectedRows) {
        message = 'blogs deleted successfully';
    }

    return {
        message
    };
}

module.exports = {
    getMultiple,
    create,
    update,
    remove
}
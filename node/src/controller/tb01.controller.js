const db = require("../config/database");

exports.getDataTable = async (req, res) => {
    try {
        const result = await db.query(`
        SELECT * FROM tb01  
        ORDER BY col_dt DESC 
        LIMIT 10`);
        res.send(result.rows);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Ocorreu um erro ao buscar os dados no banco de dados."
        })
    }
}
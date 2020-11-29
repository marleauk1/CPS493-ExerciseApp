const mysql = require('./mysql');

async function getAll(){
    console.log("Called Get All")
    const sql = `SELECT W.*, FirstName, LastName FROM Comments W Join Users U ON W.Owner_id = U.id`
    return await mysql.query(sql);
}

async function getForWorkout(workout_id){
    const sql = `SELECT W.*, FirstName, LastName FROM Comments W Join Users U ON W.Owner_id = U.id WHERE W.Workout_id = ?`
    return await mysql.query(sql, [workout_id]);
}

async function get(id){
    const sql = `SELECT 
        *
    FROM Comments WHERE id=?`;
    const rows = await mysql.query(sql, [id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such comment" };
    return rows[0];
}

async function add( Text, Workout_id, Owner_id){
    const sql = `INSERT INTO Comments (created_at, Text, Workout_id, Owner_id) VALUES ? ;`;
    const params = [[new Date(), Text, Workout_id, Owner_id]];
    const res = await mysql.query(sql, [params]);
    return get(res.insertId);
}

async function update(id, Text, Workout_id, Owner_id){
    const sql = `UPDATE Comments SET ? WHERE id = ?;`;
    const params = { Text, Workout_id, Owner_id };
    const res = await mysql.query(sql, [params, id]);
    return get(res.insertId);
}

async function remove(id){
    const sql = `DELETE FROM Comments WHERE id = ?`;
    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`SELECT id, Text, Workout_id FROM Comments WHERE Text LIKE ? ; `, [`%${q}%`]);

module.exports = { getAll, get, add, update, remove, search, getForWorkout }
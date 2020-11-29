const mysql = require('./mysql');

const Types = { CARDIO: 'Cardio', STRENGTH: 'Strength' };
const MuscleGroups = { UPPER_BODY: 'Upper Body', LOWER_BODY: 'Lower Body' };

async function getAll(){
    console.log("Called getAll")
    return await mysql.query(`SELECT * FROM Exercise_Types`);
}

async function get(id){
    const sql = `SELECT * FROM Exercise_Types WHERE id=?`;
    const rows = await mysql.query(sql, [id]);
    if(!rows.length) throw { status: 404, message: "Exercise type not found" }
    return rows[0];
}

async function getTypes(){
    return await mysql.query(`SELECT id, Name FROM Types WHERE Type_id = 4`);
}

async function getMuscleGroups(){
    return await mysql.query(`SELECT id, Name FROM Types WHERE Type_id = 5`);
}

const search = async q => await mysql.query(`SELECT id, Name FROM Exercise_Types WHERE 
    Name LIKE ? ; `, [`%${q}%`])

async function add(Name, Type, Muscle_Group, Video_Url, Relative_Difficulty){
    const sql = 'INSERT INTO `Exercise_Types` (`created_at`, `Name`, `Type`, `Muscle_Group`, `Video_Url`, `Relative_Difficulty`) VALUES ? ;'; 
    const params = [[ new Date(), Name, Type, Muscle_Group, Video_Url, Relative_Difficulty ]];
    return await mysql.query(sql, [params]);
}

async function update(id, Name, Type, Muscle_Group, Video_Url, Relative_Difficulty){
    const sql = 'UPDATE `Exercise_Types` SET ? WHERE `id` = ?; '; 
    const params = { Name, Type, Muscle_Group, Video_Url, Relative_Difficulty };
    return await mysql.query(sql, [params, id]);
}

async function remove(id){
    const sql = 'DELETE FROM `Exercise_Types` WHERE `Exercise_Types`.`id` = ?; ';
    return await mysql.query(sql, [id]);
}

module.exports = { getAll, get, getTypes, getMuscleGroups, search, add, update, remove }
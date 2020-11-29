const mysql = require('./mysql');
const cm = require('./ContactMethods');
const exTypes = require('./ExerciseTypes');
// const comments = require('./comments');

const MediaTypes = { GIF: 'image/gif', JPG: 'image/jpeg', PNG: 'image/png' };
const Privacy_Levels = { HIDDEN: 0, ONLY_ME: 1, ONLY_FRIENDS: 2, PUBLIC: 4 };

async function getAll(){
    console.log("Called Get All")
    const sql = `SELECT * FROM Exercise_Types`;
    return await mysql.query(sql);
}

async function getByUser(user_id){
    console.log("Called Get All")
    const sql = `
        SELECT 
            W.*, FirstName, LastName,
            (SELECT Value FROM ContactMethods Where User_id = U.id AND Type='${cm.Types.EMAIL}' AND IsPrimary = 1) as PrimaryEmail,
            (SELECT COUNT(*) FROM Reactions WHERE Workout_id = W.id) as Reactions
        FROM Workouts W Join Users U ON W.Owner_id = U.id
        WHERE W.Owner_id = ?`
        console.log(sql);

        const workouts = await mysql.query(sql, [user_id]);

        /*
        for (const p of workouts) {
            p.Comments = await comments.getForWorkout(p.id); 
        }
        */

    return workouts;
}

async function get(id){
    const sql = `SELECT 
        *
    FROM Workouts WHERE id=?`;
    const rows = await mysql.query(sql, [id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such workout" };
    return rows[0];
}

async function getTypes(){
    return await mysql.query(`SELECT id, Name FROM Types WHERE Type_id = 3`);
}

async function add(Owner_id, Privacy_Setting, Start_Time, End_Time, Exercise_Type, Note,
    Distance, Sets, Reps_Per_Set, Weight){
    const sql = `INSERT INTO Workouts 
    (created_at, Owner_id, Privacy_Setting, Start_Time, End_Time, Exercise_Type, Note,
        Distance, Sets, Reps_Per_Set, Weight) VALUES ? ;`;
    const params = [[new Date(), Owner_id, Privacy_Setting, Start_Time, End_Time, Exercise_Type, Note,
        Distance, Sets, Reps_Per_Set, Weight]];
    const res = await mysql.query(sql, [params]);
    return get(res.insertId);
}

async function update(id, Owner_id, Privacy_Setting, Start_Time, End_Time, Exercise_Type, Note,
    Distance, Sets, Reps_Per_Set, Weight){
    const sql = `UPDATE Workouts SET ? WHERE id = ?;`;
    const params = { Owner_id, Privacy_Setting, Start_Time, End_Time, Exercise_Type, Note,
        Distance, Sets, Reps_Per_Set, Weight };
    const res = await mysql.query(sql, [params]);
    return get(res.insertId);
}

async function remove(id){
    const sql = `DELETE FROM Workouts WHERE id = ?`;
    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`SELECT id, URL, Text, Media_Type FROM Workouts WHERE Text LIKE ? ; `, [`%${q}%`]);

module.exports = { MediaTypes, Privacy_Levels, getAll, get, add, update, remove, getTypes, search, getByUser }
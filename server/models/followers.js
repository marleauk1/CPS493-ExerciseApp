const mysql = require('./mysql');

async function getFollowing(Follower_id){
    const sql = `SELECT * FROM Followers WHERE Follower_id=?`;
    return await mysql.query(sql, [Follower_id]);
}

async function getFollowers(Following_id){
    const sql = `SELECT * FROM Followers WHERE Following_id=?`;
    return await mysql.query(sql, [Following_id]);
}

async function getUnacceptedFollowing(Follower_id){
    const sql = `SELECT * FROM Followers WHERE Follower_id=? AND IsAccepted = 0`;
    return await mysql.query(sql, [Follower_id]);
}

async function getUnacceptedFollower(Following_id){
    const sql = `SELECT * FROM Followers WHERE Following_id=? and IsAccepted = 0`;
    return await mysql.query(sql, [Following_id]);
}

async function follow(Follower_id, Following_id){
    const sql = 'INSERT INTO `Followers` (`created_at`, `Follower_id`, `Following_id`) VALUES ? ;'; 
    const params = [[ new Date(), Follower_id, Following_id ]];
    return await mysql.query(sql, [params]);
}

async function acceptFollow(Follow_id){
    const sql = 'UPDATE `Followers` SET .`IsAccepted` = 1 WHERE `id` = ?; '; 
    return await mysql.query(sql, [Follow_id]);
}

async function removeFollow(Follow_id){
    const sql = 'DELETE FROM `Follow` WHERE `Users`.`id` = ?; ';
    return await mysql.query(sql, [Follow_id]);
}

module.exports = { getFollowing, getFollowers, getUnacceptedFollower, getUnacceptedFollowing, follow, acceptFollow, removeFollow }
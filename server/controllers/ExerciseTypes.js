const express = require('express');
const exerciseTypes = require('../models/ExerciseTypes')

const router = express.Router();

router
    .get('/', (req, res, next) => {
        exerciseTypes.getAll()
        .then(x => res.send( x  ) )
        .catch(next);
    })
    .get('/:id', (req, res, next) => {
        const id = +req.params.id;
        if(!id) return next();
        exerciseTypes.get(id)
        .then(x => res.send( x ) )
        .catch(next);
    })
    .get('/types', (req, res, next) => {
        exerciseTypes.getTypes()
        .then(x => res.send( x ) )
        .catch(next);
    })
    .get('/muscleGroups', (req, res, next) => {
        exerciseTypes.getMuscleGroups()
        .then(x => res.send( x ) )
        .catch(next);
    })
    .get('/search', (req, res, next) => {
        exerciseTypes.search(req.query.q)
        .then(x => res.send( x ) )
        .catch(next);
    })
    .post('/', (req, res, next) => {
        exerciseTypes.add(
            req.body.Name, 
            req.body.Type, 
            req.body.Muscle_Group, 
            req.body.Video_Url, 
            req.body.Relative_Difficulty
        )
        .then(newUser => { res.send( newUser ); })
        .catch(next);
    })
    .put('/:id', (req, res, next) => {
        exerciseType.update( 
            req.params.id,
            req.body.Name, 
            req.body.Type, 
            req.body.Muscle_Group, 
            req.body.Video_Url, 
            req.body.Relative_Difficulty
        )
        .then(newUser => { res.send( newUser ); })
        .catch(next);
    })
    .delete('/:id', (req, res, next) => {
        exerciseType.remove( req.params.id )
        .then(msg => { res.send( msg ); })
        .catch(next);
    })
module.exports = router;
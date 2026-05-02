const routes = require('express').Router();
const lesson1controller = require('../controllers/lesson1');

routes.get('/', lesson1controller.johnathonroute); 
routes.get('/angela', lesson1controller.angelaroute);
routes.get('/rebekah', lesson1controller.rebekahroute);

module.exports = routes;
import express from 'express' ;
import { auth } from '../middleware/auth.js';
import { getUser, updateUser, favoritePost, getFavorite, follow, unFollow, getPeople } from '../controllers/users.js';
import upload from '../middleware/upload.js';


const usersRoutes = express.Router();

// usersRoutes.get('/', auth , getUser );
usersRoutes.get('/:username', auth , getUser );
usersRoutes.put('/:id', auth , upload.single('avatar') , updateUser );
usersRoutes.post('/:username/save', auth, favoritePost)
usersRoutes.get('/:username/save', auth, getFavorite)
usersRoutes.post('/follow/:id', auth, follow)
usersRoutes.post('/unFollow/:id', auth, unFollow)
usersRoutes.get('/people/follow', auth, getPeople)




export default usersRoutes
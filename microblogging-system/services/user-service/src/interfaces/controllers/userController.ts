import { Router } from 'express';
import UserService from '../../application/services/userService';
import { UserRepositoryImpl } from '../../infrastructure/persistence/userRepositoryImpl';

const router = Router();
const userRepository = new UserRepositoryImpl();
const userService = new UserService(userRepository);


//Testing Purpose
router.post('/posts', async (req, res) => {
    try {
        await userService.register("username", "email@gmail.com", "password");
        res.status(201).send('User registered successfully');
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.status(400).send('An unknown error occurred');
        }
    }
});


router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        await userService.register(username, email, password);
        res.status(201).send('User registered successfully');
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.status(400).send('An unknown error occurred');
        }
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userService.login(email, password);
        res.status(200).json(user);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.status(400).send('An unknown error occurred');
        }
    }
});

router.put('/profile', async (req, res) => {
    const { userID, profile } = req.body;
    try {
        await userService.updateProfile(userID, profile);
        res.status(200).send('Profile updated successfully');
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).send(error.message);
        } else {
            res.status(400).send('An unknown error occurred');
        }
    }
});

export default router;

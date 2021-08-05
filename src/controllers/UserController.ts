import { Request, Response, Router } from "express";
import { User } from "../entity/User";


const userController = Router();


userController.post('/', async (req: Request, res: Response) => {
    const { name, email, role } = req.body;

    try {
        const user = User.create({name, email, role});
        await user.save(); 
        return res.status(201).json(user);
    }
    catch(err) {
        console.log(err);
        return res.status(500).json({error: 'Something went wrong'}); 
    }
});

// READ
userController.get('/', async (_: Request, res: Response) => {
    try {
        // include related posts for users
        const users = await User.find({ relations: ['posts'] });
        return res.json(users);
    }
    catch(err) {
        console.log(err);
        return res.status(500).json({error: 'Something went wrong'}); 
    }
});

// UPDATE
userController.put('/:uuid', async (req: Request, res: Response) => {
    const uuid = req.params.uuid;
    const { name, email, role } = req.body;

    try {
        const user = await User.findOneOrFail({ uuid });
        user.name = name || user.name;
        user.email = email || user.email;
        user.role = role || user.role;

        await user.save();
        return res.json(user);

    } catch (err) {
        console.log(err);
        return res.status(500).json({error: 'Something went wrong'}); 
    }
});

// DELETE
userController.delete('/:uuid', async (req: Request, res: Response) => {
    const uuid = req.params.uuid;

    try {
        const user = await User.findOneOrFail({ uuid });
        await user.remove();
        console.log({message: 'User deleted successfully', user});
        return res.status(204).json();

    } catch (err) {
        console.log(err);
        return res.status(500).json({error: 'Something went wrong'}); 
    }
});

// FIND
userController.get('/:uuid', async (req: Request, res: Response) => {
    const uuid = req.params.uuid;

    try {
        const user = await User.findOneOrFail({ uuid }, { relations: ['posts']});
        return res.json(user);

    } catch (err) {
        console.log(err);
        return res.status(404).json({user: 'User not found'}); 
    }
});


module.exports = userController;
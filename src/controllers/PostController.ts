import { Request, Response, Router } from "express";
import { Post } from "../entity/Post";
import { User } from "../entity/User";


const postController = Router();


// Create a Post
postController.post('/', async (req: Request, res: Response) => {
    const { userUuid, title, body } = req.body

    try {
        const user = await User.findOneOrFail({ uuid: userUuid })
        const post = new Post({ title, body, user })
        await post.save()
        return res.json(post)

    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Something went wrong' })
    }
})

// Read posts
postController.get('/', async (req: Request, res: Response) => {
    try {
        const posts = await Post.find({ relations: ['user'] })
        return res.json(posts)
        
    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Something went wrong' })
    }
})


module.exports = postController;

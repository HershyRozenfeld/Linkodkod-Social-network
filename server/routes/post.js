import { Router } from 'express';
import { getPostById } from '../public/js/getPostById.js';
import { setPost } from '../public/js/crudUtils.js'
const router = Router();

router.get('/:id', async (req, res) => {
    try {
        const post = await getPostById(req.params.id);

        if (!post.length) {
            console.log("Error")
            return res.status(404).send('Post not found');
        }

        res.status(200).json(post);
    } catch (error) {
        next(error);
    }
})

router.post('/new', async (req, res) => {
    try {
        const post = req.body;
        await setPost(post);
        console.log('ffff')
        res.status(200).json({ 'message': 'Data received successfully!' });
    } catch (error) {
        next(error);
    }
})



export default router;
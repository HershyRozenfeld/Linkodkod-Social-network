import express from 'express';
import utilsRoutes from './routes/utils.js'
import postsRoutes from './routes/post.js'

const app = express();
const port = 3000;

app.use(utilsRoutes);

app.use('/api/posts', postsRoutes);
// app.use('/api/post', post);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
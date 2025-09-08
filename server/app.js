import express from 'express';
import utilsRoutes from './routes/utils.js'
import postsRoutes from './routes/post.js'
import path from 'path';
import { fileURLToPath } from 'url';


const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

app.use(utilsRoutes);
app.use('/api/posts', postsRoutes);
app.use(express.static(path.join(__dirname, 'public')))


app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
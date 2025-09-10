import express from 'express';
import utilsRoutes from './routes/utils.js'
import postsRoutes from './routes/post.js'
import errorHandling from './routes/error.js'
import path from 'path';
import { fileURLToPath } from 'url';


const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);


app.use(utilsRoutes);
app.use('/api/post/', postsRoutes);

app.use(express.static(path.join(__dirname, 'public')))

app.use((err, req, res, next) => errorHandling);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
import { Router } from 'express';

const router = Router();

router.use((err, req, res, next) => {
    console.error(err.stack);
    const statusCode = err.status || 500;
    res.status(statusCode).json({
        message: err.message || 'Internal Server Error',
    });
});




export default router;
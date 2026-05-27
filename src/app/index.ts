import express from 'express';
import type { Express } from 'express'; 

export function createExpressApplication(): Express{
    const app = express();

    //middleware

    //routes
    app.get('/', (req, res) => {
        res.json({ message: 'Hello, World!' });
    });

    return app; 


}
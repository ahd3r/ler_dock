import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use((req: express.Request, res: express.Response, next:express.NextFunction) => {
    // only one hostname or every
    res.header('Access-Control-Allow-Origin', 'http://localhost:4000'); // you can not use last / in cors in Access-Control-Allow-Origin, like this - http://localhost:4000/, acceptable only this - http://localhost:4000 (without last slash)
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
}, bodyParser.json());

app.get('/', (req,res,next)=>{
    res.send({msg:'fuck you'});
});

app.post('/', (req,res,next)=>{
    res.send({msg:'hi, my mister, here is what you send me', sended: req.body});
});

app.listen(3000, ()=>{
    console.log('Runing on 3000...');
});

import express, {Express, Router, Request, Response} from 'express';

import axios from 'axios';

const app: Express = express()

// 配置跨域
app.use("*", (req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    next()
})

const router:Router = express.Router()

app.use('/api', router)

router.get('/list', async (req:Request, res: Response) => {
    let result = await axios.post('https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf')

    res.json({
        data: result.data.data
    })
    
})


app.listen(3333, () => {
    console.log('success server http://localhost:3333');
})
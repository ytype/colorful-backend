import { Router,Request, Response } from 'express'
import Color, {IColor} from '@models/color'
import Comment, {IComment} from '@models/comment'

const router: Router = Router()

// id => colorid, commentid = commentid
router.get('/', (req: Request, res: Response)=>{
    res.send('Hello world')
})

router.get('/color', async (req: Request, res: Response) => {
    res.send('Hello world')
})

router.get('/color/:id', async (req: Request, res: Response) => {
    res.send('Hello world')
})

router.post('/color', async (req: Request, res: Response) => {
    res.send('Hello world')
})

router.delete('/color/:id', async (req: Request, res: Response) => {
    res.send('Hello world')
})

router.post('/comment', async (req: Request, res: Response) => {
    res.send('Hello world')
})

router.delete('/comment/:id/:commentid', async (req: Request, res: Response) => {
    res.send('Hello world')
})

router.post('/like', async (req: Request, res: Response) => {
    res.send('Hello world')
})

router.delete('/color/:id', async (req: Request, res: Response) => {
    res.send('Hello world')
})




export default router

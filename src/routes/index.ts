import { Router,Request, Response } from 'express'
import { OK, CREATED } from 'http-status-codes'
import Color, {IColor} from '@models/color'
import Comment, {IComment} from '@models/comment'
import logger from '@util/logger'

const router: Router = Router()

// id => colorid, commentid = commentid
router.get('/color', async (req: Request, res: Response) => {
        const color = await Color.find().sort({like:'desc'})
        res.status(OK).json({color})
})

router.get('/color/:id', async (req: Request, res: Response) => {
    const color = await Color.find({_id:req.params.id})
    res.status(OK).json({color})
})

router.post('/color', async (req: Request, res: Response) => {
    const data = new Color(req.body)
    const len = data.color.length
    const color = new Array()
    data.color.forEach((element:any)=> {
        color.push(element.value.hex)
    })
    data.color = color
    const response = await data.save()
    res.status(OK).json({response})
})

router.delete('/color/:id', async (req: Request, res: Response) => {
    const response = await Color.deleteOne({_id:req.params.id})
    res.status(OK).json({response})
})

router.post('/comment', async (req: Request, res: Response) => {
    const id = req.body.id
    const comment = new Comment({
        user: req.body.user,
        content: req.body.content
    })
    const response = await Color.updateOne({ _id: id }, {
        $push: { comments: comment }
    })
    res.status(OK).json({response})
})

router.delete('/comment/:id/:commentid', async (req: Request, res: Response) => {
    const id = req.params.id
    const commentid = req.params.commentid
    const response = await Color.updateOne({ _id: id },{
        $pull: { comments: { _id: commentid }}
    })
    res.status(OK).json({response})
})

router.post('/like', async (req: Request, res: Response) => {
    const id = req.body.params.id
    const user = req.body.params.user
    const response = await Color.updateOne({ _id: id },
        { $push: { like: user }
    })
    res.status(OK).json({response})
})

router.delete('/color/:id', async (req: Request, res: Response) => {
    const id = req.body.params.id
    const user = req.body.params.user
    const response = await Color.updateOne({ _id: id },
        { $pull: { like: user }
    })
    res.status(OK).json({response})
})

export default router

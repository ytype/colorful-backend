import dotenv from 'dotenv'
dotenv.config()
import logger from '@util/logger'
import app from '@app'

const port = Number(process.env.PORT || 3000)
app.listen(port, () => {
    logger.info('Express server started on port: ' + port)
})

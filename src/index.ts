import dotenv from 'dotenv'
dotenv.config()
import logger from './util/logger'
import app from './app'

const port = 5000
app.listen(port, () => {
    logger.info('Express server started on port: ' + port)
})

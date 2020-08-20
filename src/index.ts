import dotenv from 'dotenv'
dotenv.config()
import logger from './util/logger'
import app from './app'
import fs from 'fs'
import https from 'https'

const options = {
	key: fs.readFileSync('./keys/private.pem'),
	cert: fs.readFileSync('./keys/public.pem')

}
const port = Number(process.env.PORT || 5000)
https.createServer(options, app).listen(port, () => {
    logger.info('Express server started on port: ' + port)
})

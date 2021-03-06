import { ConnectionOptions, connect } from 'mongoose'
import logger from '../util/logger'
const connectDB = async () => {
  try {
    const mongoURI =  'mongodb://localhost/colorful-test-1'
    const options: ConnectionOptions = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
    await connect(mongoURI, options)
  } catch (err) {
    logger.error(err.message, err)
    process.exit(1)
  }
}

export default connectDB
import mongoose, { ConnectionStates, Mongoose } from 'mongoose';
import { MONGODB_URI } from './constant';

let connection: ConnectionStates = 0;

async function dbConnect() {
  if (connection) {
    return;
  }

  console.log('Connecting db...', mongoose.connections[0]?.readyState);
  console.log(MONGODB_URI);

  try {
    const db = await mongoose.connect(
      MONGODB_URI,
      // {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
      //   useFindAndModify: false,
      // }
    );
    console.log('Connected db', mongoose.connections[0]?.readyState);
  } catch (error) {
    console.log(error);
  }

  connection = mongoose.connections[0].readyState;
}

export default dbConnect;

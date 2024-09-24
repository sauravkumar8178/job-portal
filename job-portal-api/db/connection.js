import { dotenv } from 'dotenv';
import { connect } from 'mongoose';

dotenv.config();

async function dbConnection() {
    try {
        await connect(process.env.DATABASE_URL);
        console.log('Database Connect Successfully');
    } catch (error) {
        console.log(`Database Is Not Connected: ${error}`);
        process.exit(1);
    }
}

export default dbConnection;
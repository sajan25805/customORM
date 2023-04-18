import "../env.js";
import * as process from "process";

export default config = {
    host:process.env.DB_HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DATABASE
}






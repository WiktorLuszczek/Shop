import { NextApiHandler } from "next";
import * as bcrypt from 'bcrypt'

const handler: NextApiHandler = async (req, res) => {
    if(req.method !== 'POST'){
        res.status(403).end();
    }
    const {email, password} = req.body as { email :string, password: string}
    const hashedPassword = await bcrypt.hash(password, 12);
}

export default NextApiHandler
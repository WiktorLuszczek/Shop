import type { NextApiHandler } from "next";
import * as bcrypt from 'bcrypt'
import { authorizedClient } from "../../apollo/apollo-client";
import type { CreateAccountMutation, CreateAccountMutationVariables } from "../../generated/graphql";
import { CreateAccountDocument } from "../../generated/graphql";

const handler: NextApiHandler = async (req, res) => {
    if(req.method !== 'POST'){
        res.status(403).end();
    }
    const data = JSON.parse(req.body)
    const { email, password } = data
    const hashedPassword = await bcrypt.hash(password, 12);
    const responseGraph = await authorizedClient.mutate<CreateAccountMutation, CreateAccountMutationVariables>({
        mutation: CreateAccountDocument,
        variables: {
            email,
            password: hashedPassword
        }
    })
    res.json(responseGraph)
}

export default handler;
import type { NextApiHandler } from "next"
import { newsletterSchema } from "types/types"
import * as yup from 'yup'
const handler: NextApiHandler = async (req, res) => {
    if(req.method !== 'POST'){
        res.setHeader('Allow-Method', 'POST').status(403).end()
    }
    if(!process.env.MAILERLITE_API){
        throw new Error('Env MAILERLITE_API not exist')
    }
    const reqBody = newsletterSchema.validateSync(JSON.parse(req.body))

    const isValidReqBody = newsletterSchema.isValidSync(req.body)
    if(!isValidReqBody){
        res.status(400).json({message: 'Email is not valid'})
    }

    // eslint-disable-next-line no-undef
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
        body: JSON.stringify(reqBody),
        method: 'POST', 
        headers:{
            'Content-Type': 'application/json',
            accept: 'application/json',
            Authorization: `Bearer ${process.env.MAILERLITE_API}`
        }})
    const dataMailerLite = await response.json()
    try {
        const data = schemaMailerliteApi.validateSync(dataMailerLite.data)
        return res.status(200).json(data)
    } catch (error) {
        if(error instanceof yup.ValidationError){
            return res.status(400).json({message: error.message})
        }
        return res.status(404).json({message: 'Problem with api mailerlite'})
    }

}

export default handler;

export const schemaMailerliteApi = yup.object({
    email: yup.string().required('Data email not exist in Mailer api/subscribers'),
    status: yup.string().required('Data status not exist in Mailer api/subscribers'),
})
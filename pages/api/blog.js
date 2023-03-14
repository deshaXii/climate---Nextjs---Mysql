import nc from 'next-connect'
import {
    getMultiple
} from '../../controllers/blogController'

const handler = nc()

handler.get(getMultiple)

export default handler
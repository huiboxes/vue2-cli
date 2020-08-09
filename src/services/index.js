import {
    getTest,
} from './request'

export default async (field,tt) => {
    let data = null

    switch (field) {
        case 'test':
            data = await getTest()
            break;
        default:
            break;
    }

    return data
}
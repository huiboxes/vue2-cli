import { axiosGet, axiosPost } from '@/libs/http'

function getTest() {
    return new Promise((resolve,reject) => {
        axiosGet({
            url: 'https://www.fastmock.site/mock/d690b6751903bdb776c854b719ee9b6b/data/data',
            success(data) {
                resolve(data);
            },
            error(err) {
                reject(err)
            }
        })
    })
}

export {
    getTest
}
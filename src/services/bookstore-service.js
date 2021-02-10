
export default class BookstoreService {

    data = [
        {
            id: 1,
            title: 'Lego',
            author: 'L. Row',
            price: 33,
            coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVVdbfQTJcFt9hEGhlQAXNXeN8gXDSD-ERVA&usqp=CAU'
        },
        {
            id: 2,
            title: 'Rego',
            author: 'R. Frow',
            price: 31,
            coverImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREllHlMkbHRTkTboypNeFvx0_r2N7dDSMeRQ&usqp=CAU'
        }
    ]
    
    getBooks() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Oh, this is Error!'))
                } else {
                    resolve(this.data)
                }                 
            }, 700)
        })
    }
    
};
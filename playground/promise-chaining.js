require('../src/db/mongoose')
const User = require('../src/models/user')

const id = '5ceedace879d4a4a383f6eeb'

// User.findByIdAndUpdate(_id, { age: 1 }).then((user) =>{
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount(id, 12).then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})
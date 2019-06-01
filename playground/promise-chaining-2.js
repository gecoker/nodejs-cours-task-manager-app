require('../src/db/mongoose')
const Task = require('../src/models/task')

const id = '5cef423d3307d159a4345212'

// Task.findByIdAndDelete(_id).then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findOneAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount(id).then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})
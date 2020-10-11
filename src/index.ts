import './mongoose'
import app from './app'

const PORT = 8080

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
}) 
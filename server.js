import app from './app.js'
import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('view engine', 'ejs');

// Use JSON file for storage
const file = join(__dirname, 'db.json')
const adapter = new JSONFile(file)
const db = new Low(adapter)

// Read data from JSON file, this will set db.data content
await db.read()

// If file.json doesn't exist, db.data will be null
// Set default data
db.data = { users: [] }
// db.data = db.data || { posts: [] } // for node < v15.x
export default db;

app.listen(8080, () => console.log('listening on port 8080'));
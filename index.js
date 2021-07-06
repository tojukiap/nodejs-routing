const http = require ('http')
const {readFileSync} = require ('fs')

let home = readFileSync('./index.html')
let about = readFileSync('./about.html')
let contact = readFileSync('./contact.html')
let error = readFileSync('./error.html')

const server = http.createServer( (req, res) => {
    const url = req.url

    if (url === '/' || url === '/home') {
        res.writeHead(200, 'content-type : text/html')
        res.write(home)
        res.end()
    } else if (url === '/about' || url === '/about-us') {
        res.writeHead(200, 'content-type : text/html')
        res.write(about)
        res.end()
    } else if (url === '/contact') {
        res.writeHead(200, 'content-type : text/html')
        res.write(contact)
        res.end()
    } else {
        res.writeHead(404, 'content-type : text/html')
        res.write(error)
        res.end()
    }
})

server.listen(8080, () => {
    console.log(`Server is running at port 8080`)
})
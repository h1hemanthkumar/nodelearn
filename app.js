const http=require('http')

const display=http.createServer((req,res)=>{
    if(req.url==='/')
    {   res.end(`
            <h1>This is Our home page babe<h1>
        `); 
    }
    else if(req.url==='/about')
    {   res.end(`
            <h1>This is Our about page babe<h1>
    `)
    }
    else{
    res.end(`
        <h1>I guess Your missing something babe<h1>
        <a href='/'>go back</a>
    `)
    }
})

display.listen(5000);
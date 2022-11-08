const Koa = require('koa')
const app = new Koa
app.use((ctx,next)=>{
    ctx.body = 'welcome api'
})
app.listen(4000,()=>{
    console.log('running... on localhost:4000')
})
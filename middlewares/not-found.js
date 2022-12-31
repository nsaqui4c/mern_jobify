const notFoundMiddleware =(req,res)=>{
    res.status(404).json({
        message:'route does not exist. Please use available routes',
        '/':'Home',


    })
}


export default notFoundMiddleware
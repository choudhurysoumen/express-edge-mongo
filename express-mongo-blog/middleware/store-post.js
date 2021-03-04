module.exports = (req, res, next) => {
    const data = req.body;
    if(!data.createdBy || !data.title || !data.subtitle || !data.content) {
        console.log("Invalid form");
        return  res.redirect('/post/new');
    }
    next();
}
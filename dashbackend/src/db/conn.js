const mongoose = require(mongoose);

mongoose.connect("mongodb://localhost:27017/LoginPage", {
    useNewurlParser:true,
    useUnifiedTopology:true,
    usecreateIndex:true
}).then(() => {
    console.log('connection succesful');

}).catch(() => {
    console.log('no connection');
})
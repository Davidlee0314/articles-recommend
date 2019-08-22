module.exports = {
    // For simple configuration of static files in Flask (the "static_folder='client/dist/static'" part in app.py)
    assetsDir: 'static',
    // baseUrl: process.env.NODE_ENV === 'production'
    //     ? '/production-sub-path/'
    //     : '/',

    devServer: {
        host: '0.0.0.0',
        port: 8080, // CHANGE YOUR PORT HERE!
        https: false,
        hotOnly: false,
    }
}

// const portfinder = require('portfinder');
// portfinder.basePort=8080
// portfinder.getPortPromise().then((port) => { 
//     console.log(port) 
// })
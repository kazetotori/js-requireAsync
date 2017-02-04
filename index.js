/**
 * config the requirejs
 */
requirejs.config({
    baseUrl: 'node_modules',
    paths: {
        jquery: 'jquery/dist/jquery',
        bluebird: 'bluebird/js/browser/bluebird'
    }
})


/**
 * define the function co
 */
var co;


/**
 * Load main function.
 */
requirejs(['bluebird', 'jquery'], function (bluebird, $) {
    Promise = bluebird.Promise;
    co = function (gen) {
        var ctx = this;
        var args = slice(arguments, 1);
        return (bluebird.coroutine(gen).apply(ctx, args));
    }

    co(function* () {
        let args = yield new Promise(function (resolve, reject) {
            $(function () { resolve(slice(arguments, 0)) });
        })
        return co(main, args);
    })
})


/**
 * Apply array prototype slice
 * @param {Array} arr
 * @param {Number} start
 * @param {Number} end
 * @return {Array}
 */
function slice(arr, start, end) {
    var args = [start];
    if (end) args.push(end);
    return Array.prototype.slice.apply(arr, args);
}


/**
 * Promise resolve an array that contains the modules required.
 * @param {String} arguments required modules' name.
 * @return {Promise<Array>} required modules
 */
function requireAsync() {
    var moduleNames = slice(arguments, 0);
    return new Promise(function (resolve, reject) {
        requirejs(moduleNames,
            function () {
                resolve(slice(arguments, 0));
            },
            function (err) {
                reject(err)
            })
    });
}



/**
 * the main function of the application
 */
function* main(args) {
    
}
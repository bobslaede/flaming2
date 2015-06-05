
var fs = require('fs');
var path = require('path');


var getAllPolymerElements = function (done) {

    var root = path.resolve(__dirname, '../');

    var json = fs.readFileSync(path.join(root, '.bowerrc'));
    var bowerSettings = JSON.parse(json);
    var bower = require(path.join(root, 'bower.json'));

    var exportFile = './src/elements/polymer.html';
    var bowerDir = bowerSettings.directory;
    var tmpl = '<link rel="import" href="__path__">';
    var relPath = path.relative(path.dirname(exportFile), bowerDir);

    var imports = [];
    var deps = [];
    for (var x in bower.dependencies) {
        deps.push(x);
    }
    for (var i = 0; i < deps.length; i++) {

        try {
            var configFile = path.join(root, bowerDir, deps[i], 'bower.json');
            var moduleSettings = require(configFile);


            var mains = moduleSettings.main && [].concat(moduleSettings.main);

            if (moduleSettings.main && mains.length > 0) {
                mains.forEach(function (f) {
                    if (f.substr(-4) == 'html') {
                        var p = relPath + '/' + deps[i] + '/' + f;
                        var importStatement = tmpl.replace('__path__', p);
                        imports.push(importStatement);
                    }
                })
            } else { // useless when the bower.json doesnt include the main file
                var p1 = relPath + '/' + deps[i] + '/' + deps[i] + '.html';
                var p2 = bowerDir + '/' + deps[i] + '/' + deps[i] + '.html';
                if (fs.existsSync(path.join(root, p2))) {
                    var importStatement = tmpl.replace('__path__', p1);
                    imports.push(importStatement);
                }
            }

        } catch (e) {}
    }

    var html = imports.join("\n");

    //console.log(exportFile);
    //console.log(html);

    fs.writeFile(exportFile, html, function () {
        done();
    });

};


module.exports = function (done) {
    getAllPolymerElements(done)
};
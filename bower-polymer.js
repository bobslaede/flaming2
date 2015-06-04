
var fs = require('fs');
var path = require('path');

var json = fs.readFileSync('./.bowerrc');
var bowerSettings = JSON.parse(json);
var bower = require('./bower.json');

var exportFile = './src/elements/polymer.html';
var bowerDir = bowerSettings.directory;
var tmpl = '<link rel="import" href="__path__">';
var relPath = path.relative(path.dirname(exportFile), bowerDir);

var getAllPolymerElements = function () {
    var imports = [];
    var deps = [];
    for (var x in bower.dependencies) {
        deps.push(x);
    }
    for (var i = 0; i < deps.length; i++) {

        try {
            var configFile = path.join(__dirname, bowerDir, deps[i], 'bower.json');
            var moduleSettings = require(configFile);

            if (moduleSettings.main && moduleSettings.main.substr(-4) == 'html') {
                var p = relPath + '/' + deps[i] + '/' + moduleSettings.main;
                var importStatement = tmpl.replace('__path__', p);
                imports.push(importStatement);
            }

        } catch (e) {}
    }

    return imports;
};


var imports = getAllPolymerElements();
var html = imports.join("\n");

fs.writeFileSync(exportFile, html);
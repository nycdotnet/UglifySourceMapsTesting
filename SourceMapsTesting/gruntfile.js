module.exports = function (grunt) {
    grunt.initConfig({
        ts: {
            ex1: {
                src: ["Class1.ts"],
                out: "ex1.js",
                options: {
                    fast: "never"
                }
            },
            ex2: {
                src: ["Class1.ts"],
                out: "ex2.js",
                options: {
                    fast: "never"
                }
            },
            ex3: {
                src: ["Class1.ts"],
                out: "ex3.js",
                options: {
                    fast: "never"
                }
            }
        },
        uglify: {
            ex2: {
                options: {
                    sourceMap: true,
                    sourceMapName: 'ex2.min.js.map',
                    sourceMapIn: 'ex2.js.map',
                    mangle: false
                },
                files: {
                    'ex2.min.js': ['ex2.js']
                }
            }
        },
        run: {
            ex3: {
                args: [
                    './node_modules/uglify-js/bin/uglifyjs',
                    'ex3.js',
                    '--output',
                    'ex3.min.js',
                    '--source-map',
                    'ex3.min.js.map',
                    '--in-source-map',
                    'ex3.js.map'
                ]
            }
        }
    });
    grunt.loadNpmTasks("grunt-ts");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-run');
    grunt.registerTask("default", ["ts","uglify","run"]);
    grunt.registerTask("ex1", ["ts:ex1"]);
    grunt.registerTask("ex2", ["ts:ex2", "uglify:ex2"]);
    grunt.registerTask("ex3", ["ts:ex3", "run:ex3"]);
};
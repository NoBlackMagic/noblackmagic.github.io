/**
 * NoBlackMagic - Building Tool
 * ============================
 *
 *
 */

module.exports = function (grunt) {
    
    
// --------------------------------------- //
// ---[[   G R U N T   C O N F I G   ]]--- //
// --------------------------------------- //
    
	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),
        
        clean: {
			assets: [
                'assets/css',
                'assets/js'
            ]
		},
        
        less: {
            build: {
                options: {
                    sourceMap: true,
                    sourceMapFilename: 'assets/css/nomb.min.css.map',
                    sourceMapURL: './nomb.min.css.map',
                    outputSourceFiles: true
                },
                files: {
                    'assets/css/nobm.min.css' : 'src/less/nobm.less'
                }
            },
            release: {
                files: {
                    'assets/css/nobm.css' : 'src/less/nobm.less'
                }
            },
            releasemin: {
                options: {
                    compress: true,
                    cleancss: true
                },
                files: {
                    'assets/css/nobm.min.css' : 'src/less/nobm.less'
                }
            }
        },
        
        uglify: {
            build: {
                options: {
                    mangle: false,
                    compress: false,
                    beautify: true,
                    preserveComments: true,
                    sourceMap: true,
                    sourceMapFilename: 'nobm.js.map'
                },
                files: {
                    'assets/js/mpeg.min.js' : ['src/js/mpeg.js'],
                    'assets/js/mchimp.min.js' : ['src/js/mchimp.js'],
                    'assets/js/nobm.min.js' : ['src/js/nobm.js'],
                    'assets/js/js-spells.min.js' : ['src/js/js-spells.js']
                }
            },
            release: {
                options: {
                    mangle: false,
                    compress: false,
                    beautify: true,
                    preserveComments: true
                },
                files: {
                    'assets/js/mpeg.js' : ['src/js/mpeg.js'],
                    'assets/js/mchimp.js' : ['src/js/mchimp.js'],
                    'assets/js/nobm.js' : ['src/js/nobm.js'],
                    'assets/js/js-spells.js' : ['src/js/js-spells.js']
                }
            },
            releasemin: {
                files: {
                    'assets/js/mpeg.min.js' : ['src/js/mpeg.js'],
                    'assets/js/mchimp.min.js' : ['src/js/mchimp.js'],
                    'assets/js/nobm.min.js' : ['src/js/nobm.js'],
                    'assets/js/js-spells.min.js' : ['src/js/js-spells.js']
                }
            }
        },
        
        usebanner: {
            build: {
                options: {
                    position: 'top',
                    banner: '/* NoBlackMagic.com v<%= pkg.version %> - DEVELOPEMENT VERSION | by Marco Pegoraro | https://github.com/NoBlackMagic/noblackmagic.github.io */'
                },
                files: {
                    src: [
                        'assets/css/*.css', 
                        'assets/js/*.js'
                    ]
                }
            },
            release: {
                options: {
                    position: 'top',
                    banner: '/* NoBlackMagic.com v<%= pkg.version %> | by Marco Pegoraro | https://github.com/NoBlackMagic/noblackmagic.github.io */'
                },
                files: {
                    src: [
                        'assets/css/*.css', 
                        'assets/js/*.js'
                    ]
                }
            }
        },
            
        watch: {
            build: {
                files: ['src/**/*'],
                tasks: ['build']
            }
        }
		
	});
    
    
    
    
    
// ----------------------------------------------- //
// ---[[   P U B L I C   I N T E R F A C E   ]]--- //
// ----------------------------------------------- //
    
    grunt.registerTask('build', [
        'clean:assets',
        'less:build',
        'uglify:build',
        'usebanner:build'
    ]);
    
    grunt.registerTask('release', [
        'clean:assets',
        'less:release',
        'less:releasemin',
        'uglify:release',
        'uglify:releasemin',
        'usebanner:release'
    ]);
        
    grunt.registerTask('develop', [
        'build',
        'watch:build'
    ]);
    
    grunt.registerTask('default', ['build']);
    
    
    
    
    
// --------------------------------------------------- //
// ---[[   L O A D   G R U N T   M O D U L E S   ]]--- //
// --------------------------------------------------- //
    
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-banner');
    

    
    
// --------------------------------------- //
// ---[[   C U S T O M   T A S K S   ]]--- //
// --------------------------------------- //
    
    
    
};

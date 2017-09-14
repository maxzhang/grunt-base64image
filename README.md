# grunt-base64image
> Base64 images in your css file.


## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-base64image --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-base64image');
```


## Base64 Image Task

base64image任务使用[css-base64-images](https://github.com/maxzhang/css-base64-images)项目编码图片。


### Compile Options

#### styles : String
指定CSS源目录

#### root : String
指定CSS的路径，和css-base64-images root概念一致。
比如root 为 a/foo/css

那么在css 中 可以使用 ../image 
来得到 a/foo/image 这个路径

#### dest : String
指定输出目录


### Usage Examples
```js
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-base64image');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        base64image: {
            css: {
                styles: 'app/styles/',
                root: 'app/images/',
                dest: 'dest/styles/base64/'
            }
        }
    });
};
```


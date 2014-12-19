# Bootstrap for Sass [![Bower Version](https://badge.fury.io/bo/bootstrap-sass-official.svg)](http://badge.fury.io/bo/bootstrap-sass-official)

`grunt-bootstrap-sass` is a Sass-powered version of [Bootstrap](http://github.com/twbs/bootstrap), ready to drop right into your Sass powered applications with Grunt file pre-configured

## Installation

```console
npm install && bower install
grunt build && grunt watch
```

## Customizing Boostrap

Go through Gruntfile.js and include your required javascripts.

Check scss/app.scss to see options of including serparate bootstrap components if you need to.

Customizing bootstrap varialbes in scss/_variables.scss

## Usage

Add these files to your project's html

Stylesheet:
```html
<link rel="stylesheet" href="css/app.css" />
```

Javascripts:
```html
<script src="js/libs/libs.min.js"></script>
<script src="js/libs/bootstrap.min.js"></script>
<script src="js/app.min.js"></script>
```
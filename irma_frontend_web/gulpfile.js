var gulp = require('gulp')
  , plugins = require('gulp-load-plugins')()
  , path = require('path')
;

gulp.task('less', function () {
  return gulp.src('app/styles/main.less')
    .pipe(plugins.less({paths: [path.join(__dirname, 'app', 'components', 'bootstrap', 'less')]}))
    .pipe(plugins.autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('app/styles'));
});

gulp.task('lint', function() {
  return gulp.src('app/scripts/**/*.js')
    .pipe(plugins.jshint())
    .pipe(plugins.ngmin())
    .pipe(plugins.jshint.reporter('default'));
});

gulp.task('clean', function(){
  return gulp.src(['dist/*'], {read: false})
    .pipe(plugins.clean());
});

gulp.task('clean-fir', function(){
  return gulp.src(['dist-fir/*'], {read: false})
    .pipe(plugins.clean());
});

gulp.task('html', ['clean'], function() {
  return gulp.src('app/views/**/*.html')
    .pipe(plugins.htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/views'))
});

gulp.task('resources', ['clean'], function() {
  return gulp.src('app/resources/**/*')
    .pipe(gulp.dest('dist/resources'));
});

gulp.task('clean-debug-js', function(){
  return gulp.src(['../fir_irma/static/irma/scripts/debug/*'], {read: false, force: true})
    .pipe(plugins.clean());
});

gulp.task('fir-debug-js', ['clean-debug-js'], function() {
  return gulp.src('app/scripts/**/*')
    .pipe(gulp.dest('../fir_irma/static/irma/scripts/debug'));
});

gulp.task('clean-fir-js', function(){
  return gulp.src(['../fir_irma/static/irma/scripts/*'], {read: false, force: true})
    .pipe(plugins.clean());
});

gulp.task('fir-js', ['clean-fir-js'], function() {
  return gulp.src('dist-fir/scripts/*')
    .pipe(gulp.dest('../fir_irma/static/irma/scripts'));
});

gulp.task('clean-fir-css', function(){
  return gulp.src(['../fir_irma/static/irma/styles/*'], {read: false, force: true})
    .pipe(plugins.clean());
});

gulp.task('fir-css', ['clean-fir-js'], function() {
  return gulp.src('dist-fir/styles/*')
    .pipe(gulp.dest('../fir_irma/static/irma/styles'));
});

gulp.task('fir-resources', ['clean-fir-js'], function() {
  return gulp.src('dist-fir/resources/**/*')
    .pipe(gulp.dest('../fir_irma/static/irma/resources'));
});

gulp.task('clean-standalone-js', function(){
  return gulp.src(['../fir_irma/static/irma/scripts/standalone/*'], {read: false, force: true})
    .pipe(plugins.clean());
});

gulp.task('standalone-js', ['clean-standalone-js'], function() {
  return gulp.src('dist/scripts/dependencies.js')
    .pipe(gulp.dest('../fir_irma/static/irma/scripts/standalone'));
});

gulp.task('resources-fir', ['clean-fir'], function() {
  return gulp.src('app/resources/**/*')
    .pipe(gulp.dest('dist-fir/resources'));
});

gulp.task('e2e', [], function () {
  return gulp.src(["test/e2e/*.js"])
    .pipe(plugins.protractor({ configFile: "test/protractor-conf.js"}))
    .on('error', function(e) { throw e });
});

gulp.task('unit', [], function () {
  return gulp.src([
      'dist/scripts/dependencies.js',
      'app/components/angular-mocks/angular-mocks.js',
      'dist/scripts/combined.js',
      'test/unit/**/*.js'
    ])
    .pipe(plugins.karma({ configFile: 'test/karma.conf.js', action: 'run'}))
    .on('error', function(e) { throw e });
});

gulp.task('build', ['clean', 'less', 'lint'], function () {
  var jsFilter = plugins.filter('scripts/combined.js');
  var cssFilter = plugins.filter('**/*.css');

  return gulp.src('app/index.html')
    .pipe(plugins.useref.assets())
    .pipe(jsFilter)
    .pipe(plugins.ngmin())
    .pipe(plugins.uglify())
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe(plugins.minifyCss())
    .pipe(cssFilter.restore())
    .pipe(plugins.useref.restore())
    .pipe(plugins.useref())
    .pipe(gulp.dest('dist'));
});

gulp.task('build-fir', ['clean-fir', 'less'], function () {
  var jsFilter = plugins.filter('scripts/combined.js');
  var cssFilter = plugins.filter('**/*.css');

  return gulp.src('app/index-fir.html')
    .pipe(plugins.useref.assets())
    .pipe(jsFilter)
    .pipe(plugins.ngmin())
    .pipe(plugins.uglify())
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe(plugins.minifyCss())
    .pipe(cssFilter.restore())
    .pipe(plugins.useref.restore())
    .pipe(plugins.useref())
    .pipe(gulp.dest('dist-fir'));
});

gulp.task('default', ['html', 'build']);
gulp.task('dist', ['html', 'resources', 'resources-fir', 'build', 'build-fir']);
gulp.task('fir', function(){
  return plugins.runSequence('dist', 'fir-debug-js', 'fir-js', 'standalone-js', 'fir-css', 'fir-resources');
});
gulp.task('full', function(){
  return plugins.runSequence('dist', 'unit', 'e2e');
});

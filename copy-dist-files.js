var fs = require('fs');
var resources = [
  'src/styles.scss',
];
resources.map(function (f) {
  var path = f.split('/');
  var t = 'aot/' + path[path.length-1];
  fs.createReadStream(f).pipe(fs.createWriteStream(t));
});

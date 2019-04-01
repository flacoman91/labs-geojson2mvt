var fs = require('fs');
var geojson2mvt = require('../src');

var options = {
  layers: {
   // layer0: JSON.parse(fs.readFileSync('2017-zip.geojson', "utf8")),
    //layer0: JSON.parse(fs.readFileSync('2017-cong.geojson', "utf8"))
    layer0: JSON.parse(fs.readFileSync('2015-tract.geojson', "utf8"))
  },
  rootDir: 'tiles/tract',
  bbox : [18.91619,-171.791110603,71.3577635769,-66.96466], //[south,west,north,east]
  zoom : {
    min : 12,
    max : 14,
  }
};
// build the static tile pyramid
geojson2mvt(options);

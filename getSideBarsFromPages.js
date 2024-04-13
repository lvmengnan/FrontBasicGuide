const fs = require('fs');
const Common_Path = './pages';
const Sidebars_Path = './_sidebar.md';

fs.readdir(Common_Path, function(err, files) {
  if (err)  return console.log(err);
  let sidebars = `* [Home](/)\n`;
  
  files.forEach(file => {
    const fileName = file.split('.')[0];
    sidebars += `* [${fileName}](${Common_Path}/${file})\n`
  })

  fs.writeFileSync(Sidebars_Path, sidebars);
})
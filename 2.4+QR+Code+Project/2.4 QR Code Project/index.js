import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
      type: "input",
      message: "Type Your URL",
      name: "URL"
    },
  ])
  .then((answers) => {
    const url = answers.URL;

    const qr_svg = qr.image(url, { type: 'png' });

    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
      
    fs.writeFile("URL.txt",url,(err)=>{
      if(err){
        console.log("error happened");
      }})
    console.log("QR Code generated successfully!");
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("TTY Error");
    } else {
      console.log(error);
    }
  });
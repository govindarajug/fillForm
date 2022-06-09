const fs = require('fs');

const recordResponse = (form, detail, logger) => {
  form.addDetail(detail.trim());
  if (form.isFilled()) {
    writeToFile(form.toString());
    logger('Thank you');
    return;
  }
  logger(form.message());
};

const writeToFile = (details) => {
  fs.writeFile('./form.json', details, (err) => {
    if (err) {
      console.error('File not saved');
    }
  });
  process.stdin.destroy();
};

module.exports = { recordResponse };

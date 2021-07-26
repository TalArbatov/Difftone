const router = require('express').Router();
const fs = require('fs');

const getData = callback => {
  fs.readFile('./questionnaires.json', 'utf-8', (err, data) => {
    if (err) console.log(err);
    else {
      obj = JSON.parse(data);
      console.log(obj)
      callback(obj);
    }
  });
};

const saveData = (data, callback) => {
  fs.writeFile('./questionnaires.json', data, 'utf-8', callback);
}

// TODO: add validation + error handling
// TODO: export router paths to constants file
router.post('/questionnaire', (req,res,next) => {
  getData(data => {    
    console.log('req.data');
    console.log(req.body);
    const questionnaires = [...data.questionnaires, req.body];
    const newData = { ...data, questionnaires }
    console.log('new Data');
    console.log(newData);
    saveData(JSON.stringify(newData), () => {
      res.send({ success: true });
    })
  });
});

router.get('/questionnaire', async (req,res,next) => {
  getData(data => {
    console.log(data);
    res.send(data.questionnaires);
  });
  
});

module.exports = router;
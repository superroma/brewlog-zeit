const {send} = require('micro')

let batchListData = 
  [
    {id: 1, RecipeName: "London Pride", SessionDate: "01.01.2016"},
    {id: 2, RecipeName: "R&R Stout", SessionDate: "12.12.2016"},
    {id: 3, RecipeName: "R&R IPA", SessionDate: "01.01.2017"},
    {id: 4, RecipeName: "R&R IPA from server!", SessionDate: "05.05.2017"},
  ]

module.exports = async (req, res) => { 
  result = batchListData
  res.setHeader('Access-Control-Allow-Origin', '*')
  send(res, 200, result)
}   
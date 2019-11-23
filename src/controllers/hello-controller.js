exports.getAll = (req, res, next) => {
    res.status(200).send([{
        "id": 1,
        "name": "Rafael",
        "age": "35"
      },{
        "id": 2,
        "name": "Lara",
        "age": "1"
        }
    ]);
};

exports.getOne = (req, res, next) => {
    res.status(200).send([{
        "name": ""+ req.params.name +""
      }
    ]);
}
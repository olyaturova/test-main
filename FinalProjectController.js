const FinalProjectModel = require('./FinalProjectModel');
const FinalProjectController = require ('./FinalProjectModel');

module.exports.getFinalProject = async (req,res) =>{
    const myComment = await FinalProjectModel.find();
    res.send (myComment)
}


module.exports.saveFinalProject = async (req,res) =>{
    const {comment} = req.body;
    FinalProjectModel.create ({comment})
    .then ((data) => {console.log ('Comment added')
    res.send (data)
})
}

module.exports.deleteFinalProject = async (req,res) =>{
    const {_id} = req.body;
    FinalProjectModel.findByIdAndDelete(_id)
    .then (() => res.send ('Delete comment'))
}

module.exports.editFinalProject = async (req,res) =>{
    const {_id, comment} = req.body;
    FinalProjectModel.findByIdAndUpdate (_id, {comment})
    .then (() => res.send ('Edited a comment'))
}





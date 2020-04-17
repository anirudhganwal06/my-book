
// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const keywordsSchema = new Schema({
//     keywordsList: [{
//         name: {
//             type: String,
//             required: true
//         },
//         bookIds: [
//             {
//                 type: mongoose.Types.ObjectId,
//                 ref: 'Book',
//                 required: true
//             }
//         ]
//     }]
// });

// keywordsSchema.statics.addKeywords = function (keywords, id) {
//     //console.log('REACHED 1');
//     this.findById("5e91eb878539de3e0cf4b1c1")
//     .then( list => {
//         const newList = [...list];
//         // console.log('REACHED 2');
//         keywords.forEach(keyword => {
//             const keywordIndex = newList.findIndex( k => {
//                 return k.name === keyword;
//             });
//             if( keywordIndex < 0 ){
//                 newList.push({
//                     name: keyword,
//                     bookIds: [id]
//                 });
//             }
//             else{
//                 newList[keywordIndex].bookIds.push(id);
//             }
//         });
//         this = [...newList];
//         this.save();   
//     })
//     .catch();
//     return this.save();
// };

// module.exports = mongoose.model('keyword', keywordsSchema);
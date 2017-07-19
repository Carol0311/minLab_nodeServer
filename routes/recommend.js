/**
 * Created by Administrator on 2017/7/19.
 */
var fs=require('fs');
var file="testagain.json";
var recommend=JSON.parse(fs.readFileSync( file));
module.exports = recommend;
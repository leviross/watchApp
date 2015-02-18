/**
* Watch.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {

    modelNum:{
      type:'string',
      required:true
    },
    brand:{
      type:'string',
      required:true
    },
    name:{
      type:'string',
      required:true
    },
    price:{
      type:'integer',
      required:true
    },
    used:{
      type:'boolean',
      required:true
    },
    image_url:{
      type:'string'
      //required:true
    },

    //// associations

    owner:{
      model:'User'
    }

  }
};


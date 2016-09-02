//Created by: Rong Fan
//Email:rong.fan1031@gmail.com
//2016-8-30
var app=angular.module("app05",[]);


app.controller("Controller1", function(){
   
   this.objectArray=[{
     name:"David Beckam",
     email:"david@gmail.com",
     phonemodel:"6S", 
     status:"Positive",
     purchasedate:"2015-01-01T05:00:00.000Z",
   }];
   
   
   
   this.SubmitForm = function()
   {
      this.objectArray.push(
      {
        name:this.Object.name,
        email:this.Object.email,
        phonemodel:this.Object.phonemodel,
        status:this.Object.status,
        purchasedate:this.Object.purchasedate
      });  
      
      //clear the inputs
       this.Object.name="";
       this.Object.email="";
       this.Object.phonemodel="";
       this.Object.status="";
       this.Object.purchasedate="";
      
   }
   
});
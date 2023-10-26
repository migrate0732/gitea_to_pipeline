import { DatePipe } from '@angular/common';
import { OnInit } from '@angular/core';

export class UserService {
    // date=new Date();
    pipe = new DatePipe('en-US');
    formatedDate=this.pipe.transform(Date.now(), 'MMM d, y, h:mm a');

    isLogin=false;

    userCredentails:{email:string,password:string}={
        email:"admin",
        password: "Admin@123"
    }

    data=[{
        amount:3000,
        transactionType: "pay",
        transactionDirection:"sent",
        transactionId: "AP120989099990",
        date:this.formatedDate,
    },
    {
        amount:4000,
        transactionType: "pay",
        transactionDirection:"received",
        transactionId: "AP120989099990",
        date:this.formatedDate,
    },
    {
        amount:3500,
        transactionType: "collect",
        transactionDirection:"received",
        transactionId: "AP120989099990",
        date:this.formatedDate,
    },
    {
        amount:6000,
        transactionType: "collect",
        transactionDirection:"sent",
        transactionId: "AP120989099990",
        date:this.formatedDate,
    },
    {
        amount:3000,
        transactionType: "pay",
        transactionDirection:"sent",
        transactionId: "AP120989099990",
        date:this.formatedDate,
    },
    {
        amount:4000,
        transactionType: "pay",
        transactionDirection:"received",
        transactionId: "AP120989099990",
        date:this.formatedDate,
    },
    {
        amount:3500,
        transactionType: "collect",
        transactionDirection:"received",
        transactionId: "AP120989099990",
        date:this.formatedDate,
    },
    {
        amount:6000,
        transactionType: "collect",
        transactionDirection:"sent",
        transactionId: "AP120989099990",
        date:this.formatedDate,
    }]


    isloggedIn(email:string,password:string){
        if(this.userCredentails.email === email && this.userCredentails.password === password)
        {
            this.isLogin=true;
        }
        else{
            this.isLogin=false;
        }

    }
}
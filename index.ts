#! /usr/bin/env node
import inquirer from "inquirer"

let myBalance = 10000; // Dollar
let myPin = 2468;

let pinAnswer = await inquirer.prompt(
   [ 
        { name: "pin" ,
          message: "enter your pin number" ,
          type : "number"   
        }
    ]
);
 // 24689 === 2468 false
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!")

    let operationAns = await inquirer.prompt(
      [
         { 
            name: "operation",                         
            message: "please select option",             
            type: "list",                              
            choices: ["withdraw","check balance"]       
         }
     ]
);
{ 
    console.log("Incorrect pin number");
};

console.log(operationAns);

   if (operationAns.operation === "withdraw"){
    let amountAns =await inquirer.prompt(
        [
            {
                name:"amount",
                message:"enter your amount",
                type:"number"
            }
        ]
    )
   
    if(myBalance - amountAns.amount <= 0){
        console.log("insufficient balance")
        }
        else{
        myBalance -= amountAns.amount

        console.log("your balance is", myBalance)
        }
}
 if (operationAns.operation === "check balance"){
    console.log(myBalance)
};
}
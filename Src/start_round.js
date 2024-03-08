
import { comChoice } from "./com_choice";

export const startRound = (playerChoice) => {
   const computerChoice = comChoice();
 
   console.log(`com choice is ${computerChoice}`);  
   
   console.log(` player choice is ${playerChoice}`);
   console.log('----------------');
   console.log('----------------');
   return {computerChoice, playerChoice} 
}
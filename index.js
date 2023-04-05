// code your solution here

function superbowlWin(x){
    let ball = null; 
      for(let rec of x){
          if (rec.result === "W"){
             let  ball =  rec.year;
             return ball; 
            
          }
      }
    
    
  } 
  superbowlWin(record);
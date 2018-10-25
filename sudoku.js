
var sol = [[0,7,0,2,3,8,0,0,0],
    [0,0,0,7,4,0,8,0,9],
    [0,6,8,1,0,9,0,0,2],
    [0,3,5,4,0,0,0,0,8],
    [6,0,7,8,0,2,5,0,1],
    [8,0,0,0,0,5,7,6,0],
    [2,0,0,6,0,3,1,9,0],
    [7,0,9,0,2,1,0,0,0],
    [0,0,0,9,7,4,0,8,0]];

var table = document.getElementById("table");

console.log(table);
console.log(s);
var s = sol;
var printboard = function(s) {
    //display the beginning board
    for(let i = 0; i < table.rows.length; i++){
        for(let j = 0; j < table.rows[i].cells.length; j++){
            if (s[i][j] != 0)
                table.rows[i].cells[j].innerHTML = s[i][j];
        }
    }
console.log('hello world');
printboard(sol);

};
var printSolution = function(s) {
    //display final solution
    if (solved(s)){
        printboard(s);
    }
};
// var solve = function(s) {
//     //solve the puzzle s by using a recusrsive depth first search


//     //Base Case (solved == true?)
//     // == 45;

//     //base case
//     if (solved(s))
//         return s;
//     else{
//         //start recursive part here


//     }


//     s = sol;

//     var frontier = [];
//     var explored = [];
   

//     while(!(solved(s))) {
//         var start =  {state: s,
//             parent: null
//             }
//         frontier.unshift(start.s);
//         var curr = frontier.shift();
  
//     }




//     // var arr = [];
//     // for (let i = 0; i < table.rows.length; i++){
//     //     arr[i] = table.rows[i].cells[0];
//     //     for (let j = 0; j < arr.length; j++){
//     //         var sum = 0;
//     //         sum += arr[j];
             
//     //     }
//     // }



//     // if (sol[i][j] == 0){
        
//     // }


// };
var solved = function(s) {
    //check to see if the puzzle s is solved
    //return true or false

    var ret = true;

    //checking for rows to add to 45
    var rowCheck = ()=> {
        for(let j = 0; j < cells.length; j++){
            for(let i = 0; i < rows.legth; i++){
                let sum =+ table.rows[i].cells[j];
                if(sum != 45){
                    return false;
                }
                else {
                    ret = true;
                }
                if ((i == table.length-1) && (sum != 45)){
                    return false;
                }            
            }
        }
    }
    //checking for collumns to add to 45
    var colCheck = ()=> {
        for(let j = 0; j < rows.length; j++){
            for(let i = 0; i < cells.legth; i++){
                let sum =+ table.rows[i].cells[j];
                if(sum != 45){
                    return false;
                }
                else {
                    ret = true;
                }
                // if ((i == table.length-1) && (sum != 45)){
                //     return ret;
                // }            
            }
        }
     }

    //check if row elements duplicate
    var dupilcateRowCheck = ()=> {
        table.row.forEach(function(e) {
            table.row.forEach(function(element) {
                if (e == element){
                    return false;
                }
            });
        });
    }

    //check if collumn elements duplicate
    var duplicateColCheck =  ()=>{
        table.cell.forEach(function(e) {
            table.cell.forEach(function(element) {
                if (e == element){
                    return false;
                }
            });
        });
    }

    if (ret){return true;}
    else {return false;}
 
    //need to check that each 3x3 is only 45 and not repeating too



};
printboard(sol);
solve(sol);



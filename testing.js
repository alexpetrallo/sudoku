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

    var solved = function(s) {
    //check to see if the puzzle s is solved
    //return true or false

    var ret = true;

    var sum = 0;
    //checking for rows to add to 45
    for(let j = 0; j < 9; j++){
        for(let i = 0; i < 9; i++){
            sum = sum + table.rows[i].cells[j];
            if(sum != 45){
                return false;
            }
            else {
                ret = true;
            }
            if ((i == 9) && (sum != 45)){
                return false;
            }
        }
    }
    //checking for collumns to add to 45
    for(let j = 0; j < 9; j++){
        for(let i = 0; i < 9; i++){
            sum = sum + table.rows[i].cells[j];
            if(sum != 45){
                return false;
            }
            else {
                ret = true;
            }
            if ((i == 9) && (sum != 45)){
                return ret;
            }
        }
    }

    //check if row elements duplicate
    table.row.forEach(function(e) {
        table.row.forEach(function(element) {
            if (e == element){
                return false;
            }
        });
    });
    //check if collumn elements duplicate
    table.cell.forEach(function(e) {
        table.cell.forEach(function(element) {
            if (e == element){
                return false;
            }
        });
    });

 //need to check that each 3x3 is only 45 and not repeating too



};

console.log(solved(sol));

columns = ["placement1","placement2","placement3","placement4","placement5","placement6","placement7","placement8","placement9"];
// These lists will contain all of the numbers to go into each column. 
// These lists will contain all of the numbers to go into each column. 
pushingcol1 = []
pushingcol2 = []
pushingcol3 = []
pushingcol4 = []
pushingcol5 = []
pushingcol6 = []
pushingcol7 = []
pushingcol8 = []
pushingcol9 = []

// To make sure that a number can only be placed in the Ticket once.
col1 = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9];
col2 = [10 ,11 ,12 ,13 ,14 ,15 ,16 ,17 ,18 ,19];
col3 = [20 ,21 ,22 ,23 ,24 ,25 ,26 ,27 ,28 ,29];
col4 = [30 ,31 ,32 ,33 ,34 ,35 ,36 ,37 ,38 ,39];
col5 = [40 ,41 ,42 ,43 ,44 ,45 ,46 ,47 ,48 ,49];
col6 = [50 ,51 ,52 ,53 ,54 ,55 ,56 ,57 ,58 ,59];
col7 = [60 ,61 ,62 ,63 ,64 ,65 ,66 ,67 ,68 ,69];
col8 = [70 ,71 ,72 ,73 ,74 ,75 ,76 ,77 ,78 ,79];
col9 = [80 ,81 ,82 ,83 ,84 ,85 ,86 ,87 ,88 ,89 ,90];

// Since a board can only have 15 numbers in total, this will help make sure that it has the right amount. 
var number_left = 15;
var nums_a = 0;
var nums_b = 0;
var nums_c = 0;

// The basic onload function. 
function generate_one_ticket(){
  while(columns.length != 0){
    // To make sure that all the columns in the columns list has been canceled. 
    // This has the number from the columns above
    column_picked = pick_one_random_column();
    index_of_column = columns.indexOf(column_picked);
    columns.splice(index_of_column,1);
    prepare_tmp_list_for_column();
  }
  process2();
}

function pick_one_random_column(){
  // uses random index to pick an element from the columns list. 
  return columns[random(columns.length)];
  //return columns[1];
}

function prepare_tmp_list_for_column(){
  // Use this to find out how many times you ahve to loop. 
  loop_number = number_left - columns.length;
  // Check to see if loop_number exceeds the number of rows. 
  if(loop_number > 3){
    loop_number = 3;
    //loop_number = random(3,1);
  }
  else{
    loop_number = loop_number;
  }
  // Subtract the actual loop numbers from the numbers left. 
  number_left = number_left - loop_number;
  generate_num_to_fill_tmp_list()
}
function generate_num_to_fill_tmp_list(){
  var ind;
  // finds the column chosen and find a number in the range of that number 
  for(i = 0; i < loop_number; i++){
    if (column_picked == "placement1"){
      ind = random(col1.length);
      pushingcol1.push(col1[ind]);
      col1.splice(ind,1);
    }
    else if (column_picked == "placement2"){
      ind = random(col2.length);
      pushingcol2.push(col2[ind]);
      col2.splice(ind,1);
    }
    else if (column_picked == "placement3"){
      ind = random(col3.length);
      pushingcol3.push(col3[ind]);
      col3.splice(ind,1);
    }
    else if (column_picked == "placement5"){
      ind = random(col5.length);
      pushingcol5.push(col5[ind]);
      col5.splice(ind,1);
    }
    else if (column_picked == "placement6"){
      ind = random(col6.length);
      pushingcol6.push(col6[ind]);
      col6.splice(ind,1);
    }
    else if (column_picked == "placement7"){
      ind = random(col7.length);
      pushingcol7.push(col7[ind]);
      col7.splice(ind,1);
    }
    else if (column_picked == "placement8"){
      ind = random(col8.length);
      pushingcol8.push(col8[ind]);
      col8.splice(ind,1);
    }
    else if (column_picked == "placement4"){
      ind = random(col4.length);
      pushingcol4.push(col4[ind]);
      col4.splice(ind,1);
    }
    else if (column_picked == "placement9"){
      ind = random(col9.length);
      pushingcol9.push(col9[ind]);
      col9.splice(ind,1);
    }
  }
}

function process2(){
  checkForList1();
  checkForList2();
  checkForList3();
  checkForList4();
  checkForList5();
  checkForList6();
  checkForList7();
  checkForList8();
  checkForList9();
}

function checkRows(){
  if (nums_a == 5){
    var ind = abclist.indexOf("a");
    abclist.splice(ind,1)
  }
  else if (nums_b == 5){
    var ind = abclist.indexOf("b");
    abclist.splice(ind,1)
  }
  else if (nums_c == 5){
    var ind = abclist.indexOf("c");
    abclist.splice(ind,1)
  }
}

function checkForList1(){
  abclist = ["a","b","c"]
  checkRows();
  for(k=0;k<pushingcol1.length;k++){
      var ind= random(abclist.length);
      var row = abclist[ind];
      var concat = row+"1";
      document.getElementById(concat).innerHTML = pushingcol1[k];
      var indexOfRow = abclist.indexOf(row)
      abclist.splice(indexOfRow,1);
      if(row == "a"){
        nums_a += 1
      }
      else if(row == "b"){
        nums_b += 1
      }
      else if(row == "c"){
        nums_c += 1
      }
  }
}

  function checkForList2(){
    abclist = ["a","b","c"]
    checkRows();
    for(k=0;k<pushingcol2.length;k++){
      var ind= random(abclist.length)
      var row = abclist[ind];
      var concat = row+"2";
      document.getElementById(concat).innerHTML = pushingcol2[k];
      var indexOfRow = abclist.indexOf(row)
      abclist.splice(indexOfRow,1);
      if(row == "a"){
        nums_a += 1
      }
      else if(row == "b"){
        nums_b += 1
      }
      else if(row == "c"){
        nums_c += 1
      }
    }
  }
  function checkForList3(){
  abclist = ["a","b","c"]
  checkRows();
  for(k=0;k<pushingcol3.length;k++){
      var ind= random(abclist.length)
      var row = abclist[ind];
      var concat = row+"3";
      document.getElementById(concat).innerHTML = pushingcol3[k];
      var indexOfRow = abclist.indexOf(row)
      abclist.splice(indexOfRow,1);
      if(row == "a"){
        nums_a += 1
      }
      else if(row == "b"){
        nums_b += 1
      }
      else if(row == "c"){
        nums_c += 1
      }
    }
  }
  function checkForList4(){
  abclist = ["a","b","c"]
  checkRows();
  for(k=0;k<pushingcol4.length;k++){
      var ind= random(abclist.length)
      var row = abclist[ind];
      var concat = row+"4";
      document.getElementById(concat).innerHTML = pushingcol4[k];
      var indexOfRow = abclist.indexOf(row)
      abclist.splice(indexOfRow,1);
      if(row == "a"){
        nums_a += 1
      }
      else if(row == "b"){
        nums_b += 1
      }
      else if(row == "c"){
        nums_c += 1
      }
    }
  }
  function checkForList5(){
  abclist = ["a","b","c"]
  checkRows();
  for(k=0;k<pushingcol5.length;k++){
      var ind= random(abclist.length)
      var row = abclist[ind];
      var concat = row+"5";
      document.getElementById(concat).innerHTML = pushingcol5[k];
      var indexOfRow = abclist.indexOf(row)
      abclist.splice(indexOfRow,1);
      if(row == "a"){
        nums_a += 1
      }
      else if(row == "b"){
        nums_b += 1
      }
      else if(row == "c"){
        nums_c += 1
      }
    }
  }
  function checkForList6(){
  abclist = ["a","b","c"]
  checkRows();
  for(k=0;k<pushingcol6.length;k++){
      var ind= random(abclist.length)
      var row = abclist[ind];
      var concat = row+"6";
      document.getElementById(concat).innerHTML = pushingcol6[k];
      var indexOfRow = abclist.indexOf(row)
      abclist.splice(indexOfRow,1);
      if(row == "a"){
        nums_a += 1
      }
      else if(row == "b"){
        nums_b += 1
      }
      else if(row == "c"){
        nums_c += 1
      }
    }
  }
  function checkForList7(){
  abclist = ["a","b","c"]
  checkRows();
  for(k=0;k<pushingcol7.length;k++){
      var ind= random(abclist.length)
      var row = abclist[ind];
      var concat = row+"7";
      document.getElementById(concat).innerHTML = pushingcol7[k];
      var indexOfRow = abclist.indexOf(row)
      abclist.splice(indexOfRow,1);
      if(row == "a"){
        nums_a += 1
      }
      else if(row == "b"){
        nums_b += 1
      }
      else if(row == "c"){
        nums_c += 1
      }
    }
  }
  function checkForList8(){
  abclist = ["a","b","c"]
  checkRows();
  for(k=0;k<pushingcol8.length;k++){
      var ind= random(abclist.length)
      var row = abclist[ind];
      var concat = row+"8";
      document.getElementById(concat).innerHTML = pushingcol8[k];
      var indexOfRow = abclist.indexOf(row)
      abclist.splice(indexOfRow,1);
      if(row == "a"){
        nums_a += 1
      }
      else if(row == "b"){
        nums_b += 1
      }
      else if(row == "c"){
        nums_c += 1
      }
    }
  }
  function checkForList9(){
  abclist = ["a","b","c"];
  checkRows();
  console.log(abclist);
  for(k=0;k<pushingcol9.length;k++){
    console.log(pushingcol9);
      var ind= random(abclist.length);
      var row = abclist[ind];
      console.log(row);
      var concat = row+"9";
      console.log(concat);
      document.getElementById(concat).innerHTML = pushingcol9[k];
      var indexOfRow = abclist.indexOf(row);
      abclist.splice(indexOfRow,1);
      if(row == "a"){
        nums_a += 1
      }
      else if(row == "b"){
        nums_b += 1
      }
      else if(row == "c"){
        nums_c += 1
      }
    }
  }


function random(topn, bottomn=0){
  return (Math.floor(Math.random() * topn) + bottomn);
}

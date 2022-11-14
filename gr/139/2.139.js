let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
for (let q = 0; q < arr.length; q++){
    for (let i = 0; i < arr.length; i++) {
	    for (let j = 0; j < arr[i].length; j++) {
                var s = 0;
                s += arr[q][i][j];
                console.log(s);
            }
         }   
    }

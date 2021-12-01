
function App() {
    let I = 1;
    let V = 5;
    let X = 10;
    let L = 50;
    let C = 100;
    let D = 500;
    let M = 1000;

    let glob = I;
    let prok = V;
    let pish = X;
    let tegj = L;

    let Silver = 17;
    let Gold = 14450;
    let Iron = 195.5;
    let result = 0; 

    let simbols = [
        [pish, tegj, glob, glob],
        [glob, prok, Silver],
        [glob, prok, Gold], 
        [glob, prok, Iron]
    ];

    for ( let i = 0; i < simbols.length; i++ ) {
        for ( let j = 0; j <= simbols[i].length - 2; j++ ) {
            let k = j + 1;

            if ( simbols[i][j] == I && 
                (simbols[j][k] == L ||
                simbols[j][k] == C || 
                simbols[j][k] == D || 
                simbols[j][k] == M) ) {
                return "Error Symbol, I can be subtracted by V & X";
            }

            if ( simbols[i][j] == X &&
                 (simbols[j][k] == D || simbols[j][k] == M) ) {
                return "Error Symbol, X can be subtracted by L & C";
            }

            if ( simbols[i][j] == D ||
                simbols[i][j] == L ||
                simbols[i][j] == V ) {
                if ( simbols[i][j] == simbols[j][k] ) {
                    return "Error symbol, symbol D / L / V  cannot be repeated ";
                }
            }


            if ( i == simbols[i].length-2 ) {             
                if ( simbols[i][j] < simbols[i][k] ) {         
                    result += simbols[i][k] - simbols[i][j]; 
                } else if ( simbols[i][j] > simbols[i][k] ) { 
                    result += simbols[i][j] + simbols[i][k];
                } else if ( simbols[i][j] == simbols[i][k] ) {
                    result += simbols[i][j] + simbols[i][k];
                }
            } else if ( simbols[i][j] > simbols[i][k] ){
                result += simbols[i][j];
            } else if ( simbols[i][j] < simbols[i][k] ) {
                result += simbols[i][k] - simbols[i][j];
                i += 1;

                if ( i == simbols[i].length-2 ) {
                    if( simbols[i][j] < simbols[i][k+1] ) {
                        result = result * simbols[i][k+1] ;
                    }
                }
            } else if ( simbols[i][j] == simbols[i][k] ) {
                if ( ( simbols[i].length-1 - i ) == 4 || simbols[i].length == 4 ) {
                    if ( simbols[i][j] == simbols[i][k] &&
                         simbols[i][j] == simbols[i][k+1] &&
                         simbols[i][j] == simbols[i][k+2] ) {
                        return "Error symbol, symbol can only be repeated max 3 times";
                    }
                }
                result += simbols[i][j] + simbols[i][k];
                i += 1;
                if (i == simbols.length-2) {
                    if (simbols[i][j] < simbols[i][k+1]){
                        result *= simbols[i][k+1];
                    } else {
                    result += simbols[i][j];
                    }
                }
            }
        }
        
        const output = Math.round(result);
        switch(i) {
            case 0:
                console.log(`pish tegj glob glob is ${output} Credits`);
                result = 0;
            break;
            case 1:
                console.log(`glob prok Silver is ${output} Credits`);
                result = 0;
            break;
            case 2:
                console.log(`glob prok Gold is ${output} Credits`);
                result = 0;
            break;
            case 3:
                console.log(`glob prok Iron is ${output} Credits`);
                result = 0;
            break;
        }
         
    }

}

App();
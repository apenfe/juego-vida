/*
    function principal(filas){

        var generacion = 0;
        var suma;
        var columnas = filas;
        var zepa = [[]];
        var zepanew = [[]];

        inicializarZepa();
        imprimirZepa(generacion);
        actualizarZepa();
                
        while(generacion<5){

            for (let i = 1; i < filas-1; i++) { 

                for (let j = 1; j < columnas-1; j++) {
                        
                    if(zepa[i][j]==1){
                        suma=-1;
                    } else {
                        suma=0;
                    }

                    for ( let a = i-1; a < i+2; a++) { 

                        for (let b = j-1; b < j+2; b++) {

                            suma=suma+zepa[a][b]; 
                        }
                    }

                    if(zepa[i][j]==0 && suma==3) {
                        zepanew[i][j]=1;
                    } else if (zepa[i][j]==1 && (suma<2 || suma>3)) {
                        zepanew[i][j]=0;
                    } else {
                        zepanew[i][j]=zepa[i][j]  ;
                    }            
                }
            }

            generacion++;
                
            imprimirZepa(generacion);
            actualizarZepa();
        }

    }

    function imprimirZepa(gen){

        console.log("Generación: "+gen);

        for (let i = 0; i < filas; i++) { 

            for (let j = 0; j < columnas; j++) {

                if(zepa[i][j]==1){
                    console.log("*");
                }
                else{
                    console.log(" ");
                }
            }

            console.log("");  // ver como representarlo
        }

    }

    function actualizarZepa(){

        for (let i = 0; i < filas; i++) {

            for (let j = 0; j < columnas; j++) {
                zepa[i][j] = zepanew[i][j];
            }

        }

    }


    function inicializarZepa(fil, col){

var nuevaZepa = [];

for (let i = 0; i < fil; i++){

    var fila = [];

    for (let j = 0; j < col; j++){

        let celula = Math.random();

        if (celula < 0.52) {

            fila.push(0);

        } else {

            fila.push(1);

        }

    }

    nuevaZepa.push(fila);

}

matriz.splice(0, matriz.length, ...nuevaZepa);

}
*/
 
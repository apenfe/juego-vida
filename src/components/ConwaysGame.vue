<template>

    <header>
        <h1>Conway's - Game Of Life</h1>
    </header>

    <div id="contendor">
        <ConwaysForm id="formulario" @createTable="updateTable"></ConwaysForm>
    </div>

    <div id="zepa">

        <table border="1">

            <tr v-for="(fila, rowIndex) in matriz" :key="rowIndex">
                <!-- Recorremos las celdas en cada fila -->
                <td v-for="(celula, colIndex) in fila" :key="colIndex">
                    <div v-if="celula === 0" class="off"></div>
                    <div v-else class="on"></div>
                </td>
            </tr>

        </table>

    </div>

</template>

<script lang="js" setup>

import ConwaysForm from './ConwaysForm.vue';

import {ref, reactive} from 'vue';

let filas = ref(0);
let columnas = ref(0);

let matriz = reactive([]);

function updateTable(row,col){
    filas.value = row;
    columnas.value = col;

    inicializarZepa(row, col);
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

</script>

<style scoped lang="scss"> 

header{

    height: 80px;
    background-color: #333;
    padding: 10px;
    line-height: 90px;
    box-shadow: 1px 2px 3px gray;

    h1{
        color: white;
        font-size: 35px;
    }
}

#zepa{

    margin: 10px auto;
    padding: 5px;
    border-radius: 30px;
    background-color: #868585;
    min-width: 100px;
    width: auto;
    height: auto;

    table{

        margin: 15px auto;
        background-color: #ccc;
        border: 2px solid black;
        border-radius: 5px;

        tr{

            margin: 5px;

            td{

                width: 20px;
                height: 20px;
                background-color: black;
                margin: 3px;

            }

            .on{
                width: 20px;
                height: 20px;
                background-color: rgb(1, 167, 1);
                margin: 3px;
                border-radius: 100%;
            }

            .off{
                width: 20px;
                height: 20px;
                background-color: black;
                margin: 3px;
            }
        }
    }
    
}

</style>
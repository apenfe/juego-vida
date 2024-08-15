<template>

    <form>

        <div id="filas">

            <label for="rows">Filas: </label>
            <input v-model="filas" type="number" name="rows" id="rows" placeholder="Nº filas" maxlength="20" minlength="1">

        </div>

        <div id="columnas">
            <label for="colums">Columnas: </label>
            <input v-model="columnas" type="number" name="colums" id="colums" placeholder="Nº columnas" maxlength="95" minlength="1">
        </div>

        <br/>

        <div class="if" v-if="columnas > 0 && filas > 0">

            <h5>Has seleccionado {{filas}} filas y {{columnas}} columnas</h5>
            <input @click="handleClick" type="submit" value="Enviar">

        </div>
        <div class="if" v-else>
            <h5>Selecciona una cantidad valida de filas y columnas</h5>
        </div>

    </form>

</template>

<script lang="js" setup>

import {ref, defineEmits} from 'vue';

let columnas = ref(0);
let filas = ref(0);

const emit = defineEmits(['createTable']);

const handleClick = ()=>{

    emit("createTable", filas.value, columnas.value)
    filas.value = ""
    columnas.value=""

}

</script>

<style scoped lang="scss">

form{
    margin: 0px auto;
    width: 80%;
    height: 80px;
    background-color: #474646;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    color: white;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 1px 2px 3px gray;
    padding: 15px;
    justify-content: space-between;
    align-items: center;

    #filas{
        
        label{
            font-size: 24px;
            font-family: Arial, Helvetica, sans-serif;
            margin-right: 10px;
        }
        input{
            width: 100px;
            border-radius: 5px;

        }
    }

    #columnas{

        label{
            font-size: 24px;
            font-family: Arial, Helvetica, sans-serif;
            margin-right: 10px;
        }
        input{

            width: 100px;
            border-radius: 5px;
            
        }
        
    }

    .if{

        h5{
            font-size: 15px;
        }

        input{

        }
    }
}


</style>
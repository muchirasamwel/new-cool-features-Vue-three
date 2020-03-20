<template>
    <div>
        <div class="">
            <label>Number 1 </label>
            <input type="number" v-model="number1">
        </div>
        <div class="">
            <label>Number 2 </label>
            <input type="number" v-model="number2">
        </div>
        <br>
        <div>
            <label>Operation</label>
            <select name="operation" id="" v-model="operation" >
                <option v-for="option in options" :key="option"> {{option}}</option>
            </select>
        </div>
        <hr>
        <div class="">
            <label>Results</label>
            <label>{{results}}</label>
        </div>
    </div>
</template>

<script>
    import calculator from "./calculator";
    export default {
       mixins:[calculator]
    }
</script>
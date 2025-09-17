<script setup>
import { reactive } from 'vue';

const estado = reactive({
  tarefa: {
    input1: 0,
    input2: 0,
    operacao: 'somar',
    
  }
})

function somarNumeros() {
  
  let operacao = estado.tarefa.operacao
  switch (operacao) {
    case'somar':
    return parseInt(estado.tarefa.input1) + parseInt(estado.tarefa.input2)
      
    case'subtrair':
    return parseInt(estado.tarefa.input1) - parseInt(estado.tarefa.input2)

    case'multiplicar': 
    return parseInt(estado.tarefa.input1) * parseInt(estado.tarefa.input2)

    case'dividir':
    return parseInt(estado.tarefa.input1) / parseInt(estado.tarefa.input2)
     
    default: 
    return 'Operação inválida'
      
  }
}

</script>

<template>
  <header>
    <div class="container">
      <input @keyup="event => estado.tarefa.input1 = event.target.value" type="number" placeholder="Digite um numero">
      <input @keyup="event => estado.tarefa.input2 = event.target.value" type="number" placeholder="Digite um numero">
      <select @change="event => estado.tarefa.operacao = event.target.value">
        <option value="somar">+</option>
        <option value="subtrair">-</option>
        <option value="multiplicar">*</option>
        <option value="dividir">/</option>
      </select>
      <div class="campo">
        {{ somarNumeros() }}
      </div>
    </div>
  </header>
</template>

<style scoped>
:global(*) {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container {
  display: flex;
  max-width: 1200px;
  width: 100%;
  justify-content: center;
  margin: 10px auto;
  align-items: center;
  padding: 20px;
  border: 1px solid black;

}

input, select {
  margin-left: 10px;
  padding: 5px;
}

.campo {
  margin-left: 10px;
  font-weight: bold;
  font-size: 24px;
}
</style>

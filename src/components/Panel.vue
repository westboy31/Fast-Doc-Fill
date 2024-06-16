<script setup lang="ts">
import { ref } from 'vue'
import "./style/Panel.css"

const props = defineProps(["text"])
const focusHandler = (e) =>{
  const textPlaceholder = document.getElementById(e.target.name)
  if (textPlaceholder){
    textPlaceholder.classList.add("text-focus")
   
  }
}

const changeHandler = (e)=>{
  const textPlaceholder = document.getElementById(e.target.name)
   if (textPlaceholder){
    textPlaceholder.innerText = e.target.value
   
  }
}

const focusoutHandler = (e) =>{
  const textPlaceholder = document.getElementById(e.target.name)
   if (textPlaceholder){
    textPlaceholder.classList.remove("text-focus")
   
  }
}


</script>

<template>
  <div >
    <div  v-for="(form, i) in text" class="input">
      <div>{{form}}</div>
      <textarea 
        placeholder="fill" 
        :name="'placeholder-'+(i*2+1)" 
        @focus="focusHandler"
        @input="changeHandler"
        @focusout="focusoutHandler"></textarea>
      
    </div>
    
  </div>
</template>

<style scoped>

</style>

<script setup lang="ts">
import Panel from './components/Panel.vue'
import TextZone from './components/TextZone.vue'
import html2pdf from 'html2pdf.js'
import { ref } from 'vue'
import markdownit from 'markdown-it'
const markdown = ref("")

const forms = []
const updateText = (text)=>{
  const splitedtext = text.split("$$")
  console.log(splitedtext)
  for (let i = 1 ;i < splitedtext.length ; i+=2  ){
    forms.push(splitedtext[i])
  }
console.log(forms)
  markdown.value = forms
}

const copyHandler = ()=>{
  const textZone = document.querySelectorAll("#divText")
  if (textZone){
     navigator.clipboard.writeText(textZone[0].innerText);
  }
}

const copyMarkdownHandler = ()=>{
  const textZone = document.querySelectorAll("#divText")
  if (textZone){
     navigator.clipboard.writeText(markdownit(textZone[0].innerHTML));
  }
}

const exportPDFHandler = ()=>{
  const textZone = document.getElementById("divText")

  debugger
  if (textZone){
    const placeholders = document.querySelectorAll("#divText span")

    if (placeholders){
       placeholders.forEach((p)=>{
      p.style.color = "black"
    })
    }
   
html2pdf(textZone).then(()=>{
   if (placeholders){
       placeholders.forEach((p)=>{
      p.style.color = "#8996ff"
    })
    }
})

  }
}
</script>

<template>
   <div id="base">
         <div id="left" class="left">
           <nav><span>FAST DOC FILL</span></nav>
           <Panel class="comp" :text="markdown"></Panel>
           <nav id="bottom-nav">
            <button @click="copyHandler">copy content</button>
            <button @click="copyMarkdownHandler">copy markdown</button>
            <button @click="exportPDFHandler">export PDF</button></nav>
         </div>
         <div id="right" class="right">
           <TextZone @textPastedEvent="updateText" ></TextZone>
         </div>
       </div>
</template>

<style scoped>

</style>

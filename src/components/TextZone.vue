<script setup lang="ts">
import { ref } from 'vue'
import markdownit from 'markdown-it'
import DOMPurify from 'dompurify'
import "./style/TextZone.css"

defineProps<{ msg: string }>()
const emit = defineEmits(['textPastedEvent'])
const mdit = markdownit()
const md_txt = ref("")
const textPasted = ref(false)
const inputEmpty = ref(true)

function colorPlaceHolder(text){
	const splitedtext = text.split("$$")
  for (let i = 1 ;i < splitedtext.length ; i+=2  ){
  	
    splitedtext[i] = `<span style="color: #8996ff" id="placeholder-${i}">` +  splitedtext[i] + "</span>"
    console.log(splitedtext[i])
  }
  return splitedtext.join(" ")
}


const loadMarkdown = (e) =>{
	textPasted.value = true
	inputEmpty.value = false
	let text = e.target.value
	md_txt.value = DOMPurify.sanitize(colorPlaceHolder(mdit.render(text)))
	emit("textPastedEvent",text)
	
}
</script>

<template>
  <div    id="TextZone">
        <div    id="divText" 
        		v-html="md_txt"
        		:class="{visible : textPasted , invisible : inputEmpty}"
        ></div>
		<textarea 
	
			id="txtU" 
			placeholder='Past your text'
			:class="{visible : inputEmpty , invisible : textPasted}"
			@input="loadMarkdown"
			></textarea>
		</div>
</template>

<style scoped>
	.visible{
		display: block;
	}
	.invisible{
		display: none;
	}
</style>

import markdownit from 'markdown-it'

const mdit = markdownit()
const md_txt : string = mdit.render('# markdown-it rulezz!');
console.log(md_txt)
const pastText = () : void =>{
				console.log("click")
			}
function TextZone(){
	return( 
	<>
		<div id="TextZone">
		<button 
			className="btn" 
			id="past_text" 
			onClick={pastText}>
			Past text
			</button>
		</div>

	</>)
}

export default TextZone
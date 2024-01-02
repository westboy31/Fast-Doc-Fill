//Imports------------------
import markdownit from 'markdown-it'
import {  useRef, useState } from 'react'; //j'ai enlever le Ref
import DOMPurify from 'dompurify'
//----------------------------------


//VAR init--------------
const mdit = markdownit()
//let md_txt: string = ""
//const mdHTML = createElement()
//------------------


function TextZone() {
	//Use Ref -------------------------------------------------------
    const txtU: React.MutableRefObject < null > = useRef(null)
    const TextDiv: React.MutableRefObject < null > = useRef(null)
    //---------------------------------------------------------------

	//Use Ref -------------------------------------------------------
    const [dispalyTxtU, setDispalyTxtU] = useState("block")
    const [md_txt, setMd_txt] = useState("")
    //---------------------------------------------------------------

    //Function events ------------------------------------------------
    const handleInput = (e: { nativeEvent: { inputType: string; }; }) => {
        if (e.nativeEvent.inputType == "insertFromPaste") {
            setMd_txt( DOMPurify.sanitize(mdit.render(txtU.current.value)))
            setDispalyTxtU("none")
            txtU.current.innerHTML = md_txt
        } else {
            txtU.current.value = ""
        }
    }
	//-------------------------------------------------------------

//Render---------------------------------------------------------------
    return ( < >
        <div ref={TextDiv} id="TextZone">
        <div    id="divText" 
        		dangerouslySetInnerHTML={{__html : md_txt}}
        		style={{display : dispalyTxtU=="block" ? "none" : "block"}}
        ></div>
		<textarea 
			ref={txtU} 
			id="txtU" 
			placeholder='Past your text'
			style={{display : dispalyTxtU}}
			onInput={handleInput}
			></textarea>
		</div>

        </ >)
    }
//-----------------------------------------------------------------
    export default TextZone
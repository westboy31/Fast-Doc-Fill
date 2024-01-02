//Imports------------------
import markdownit from 'markdown-it'
import {  useRef, useState } from 'react'; //j'ai enlever le Ref
import DOMPurify from 'dompurify'
//----------------------------------


//VAR init--------------
const mdit = markdownit()
//------------------


function TextZone() {
	//Use Ref -------------------------------------------------------
    const txtU  = useRef<HTMLTextAreaElement>(null)
    //const TextDiv: React.MutableRefObject < null > = useRef(null)
    //---------------------------------------------------------------

    //types---------------------------------------------------------
    type display = "block" | "none"
    //types---------------------------------------------------------

	//Use Ref -------------------------------------------------------
    const [dispalyTxtU, setDispalyTxtU] = useState<display>("block")
    const [md_txt, setMd_txt] = useState<string>("")
    //---------------------------------------------------------------

    //Function events ------------------------------------------------
	const handleInput = (e: any) => {
	    if (txtU.current) {
	        if (e.nativeEvent.inputType == "insertFromPaste") {
	            setMd_txt(DOMPurify.sanitize(mdit.render(txtU.current.value)))
	            setDispalyTxtU("none")
	            txtU.current.innerHTML = md_txt
	        } else {
	            txtU.current.value = ""
	        }
	    }
	}
	//-------------------------------------------------------------

//Render---------------------------------------------------------------
    return ( < >
        <div    id="TextZone">
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
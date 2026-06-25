import "./InputBar.css";
import api from './axiosConfig'
export function InputBar({inputText,setInputText}){
    


      function saveInputText(event){
        setInputText(event.target.value);
      }
    async function addFunction(){
        console.log(inputText)
        console.log(api.getUri);
        await api.post(`/tasks/${Number(localStorage.getItem('userId'))}`,
            {
                name: inputText
            }
        
            
        );
        setInputText('');
        
    }
    return(
        <div className="input-grid">
            <input placeholder="Enter to do task" className="input-element"
            onChange={saveInputText} value={inputText}></input>
            <button className="add-button" onClick={addFunction}>Add</button>
        </div>
    )
}
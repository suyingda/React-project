import { connect } from "react-redux";
import { addTodo } from "./../actions/index.js  ";
 
let AddTodo = ({dispatch})=>{
    let input;
    return (
        <div>
         <form  onSubmit={e=>{
             e.preventDefault();
             if(!input.value.trim()){return}
             dispatch(addTodo(FIXME?))
             input.value=""
         }}>
            <input type="text" ref={node=>{input=node}}/>   
            <button value="23" type="submit"/>
       </form>
            </div>
    )
}
AddTodo = connect()(AddTodo);
export default AddTodo
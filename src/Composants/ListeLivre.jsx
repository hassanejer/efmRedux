import { useDispatch, useSelector } from "react-redux"
import { delete_Livre } from "../Config/action"

function ListeLivre(){
    const livres = useSelector(state => state.livers)

    const dispatch = useDispatch()

    const handleDelete =(id)=>{
        dispatch(delete_Livre(id))
    }

    return(

        <div>
            {
                console.log(livres)
            }
            {
                livres.map(l =>(
                    <div key={l.id}>
                        <h1  >{l.id}</h1>
                        <p style={{fontSize:'bold',color:'red'}}>{l.title}</p>
                        <button onClick={()=>handleDelete(l.id)} >Delete</button>
                    </div>
                ))
            }
        </div>
    )

}

export default ListeLivre
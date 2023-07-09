import React,{useState,useRef, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './edit.css';

const Edit = () => {
    // const[getTaskData,setTaskData]=useState([]);
    const{id}=useParams("");
    console.log(id);
    let history  =  useNavigate();
    
    const [inptodo, setTodo] = useState({
        tasks: "",
    });
    const fname = useRef('');
    const setdata = (e) => {
        console.log(e.target.value);

        const { name, value } = e.target;
        setTodo((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }
    const getdata = async () => {
        const res = await fetch(`/gettask/${id}`, {
            method: "GET",
            headers: {
                "Content-type": "application/JSON"
            }
        })
        const taskdata = await res.json();
        console.log(taskdata);

        if (res.status === 404 || !taskdata)
            console.log("error")
        else {
            setTodo(taskdata);
            console.log("Get data successfully....");
        }
    };
   
    useEffect(() => {
        getdata();
    },[]);

    const updatedata = async (e) => {
        e.preventDefault();
        const{tasks}=inptodo;

        const res3 = await fetch(`/updatetask/${id}`, {
          method: "PATCH",
          headers:
          {
            "Content-Type": "application/json"
          },
          body:JSON.stringify({tasks})
        });
        const updatetasks = await res3.json();
        console.log(updatetasks)
        if (res3.status === 422 ) {
          console.log("error");
          alert("something went wrong")
        }
        else {
            alert("Task Updated");
          console.log("Task updated");
          history("/homen");
        }
      }
  return (
   <>
    <div>
                <h3 className='todos'>TODO LIST</h3>
            </div><br/><br/><br/><br/><br/>
            <h3 className='up'>Update your task</h3>
            <div className='f2'>
                <form>
                    <center><input type="text " ref={fname} value={inptodo.tasks} name="tasks" onChange={setdata} className='w3-input w3-animate-input form1' placeholder='Enter task to be added' /><br />
                        <button type="submit" className='w3-hover-shadow request'onClick={updatedata
                        }><i class="fa fa-plus"></i>&nbsp;&nbsp; Update Task</button></center>
                </form>
            </div>

            <div></div>
   </>
  )
}

export default Edit 
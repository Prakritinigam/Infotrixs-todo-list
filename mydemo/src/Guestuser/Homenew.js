import React, { useState, useEffect, useRef } from 'react'
import './home.css'
import { Link, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Home_new = () => {

const [inptodo, setTodo] = useState({ 
    uname:"",
    tasks: "",
});
    const [getTaskData, setTaskData] = useState([]);

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

    const addinpdata = async (e) => {
        e.preventDefault();
        fname.current.value = '';
        const { uemail,tasks } = inptodo
        if (!tasks) {
            alert("Please enter the task to be added")
        }
        else {
            const res = await fetch("/taskadd", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                uemail,tasks
                })
            }
            );
            const data = await res.json();
            console.log(data);
            if (!data || res.status === 404) {
                alert("Error");
                console.log("Error")
            }
            else {
                console.log("Task added successfully")
               alert("Success! Task added Successfully")

            }
        }
    }

    const getdata = async () => {
        const res = await fetch(`/gettask`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })
        const taskdata = await res.json();
        console.log(taskdata);

        if (res.status === 404 || !taskdata) {
            console.log("error")   
        }
        else {
            setTaskData(taskdata)
            console.log("Get data successfully");
        }
    }

    const deletedata = async (id) => {
        const res2 = await fetch(`/deletetask/${id}`, {
          method: "DELETE",
          heasders:
          {
            "Content-Type": "application/json"
          }
        });
        const deletetasks = await res2.json();
        if (res2.status === 404 || !deletetasks) {
          console.log("error");
        }
        else {
          console.log("Task Deleted");
          alert("Task Deleted");
    
        }
      }
      useEffect(() => {
        getdata();
    }, []);

    return (
        <>

            <div>
                <h3 className='todos'>TODO LIST</h3>
            </div>
            <br/><br/><br/>
      
            <div className='f2'>
                <form>
                    <center><input type="text " ref={fname} value={inptodo.tasks} name="tasks" onChange={setdata} className='w3-input w3-animate-input form1' placeholder='Enter task to be added' /><br />
                        <button type="submit" className='w3-hover-shadow request' onClick={addinpdata}><i class="fa fa-plus"></i>&nbsp;&nbsp; Add new task</button></center>
                </form>
            </div>

            <div>
<br/><br/><br/>
<h3 className='all'>All Tasks</h3>
                {
                    getTaskData.map((element, id) => {
                        return (
                            <>
                            <div className='row show'>
                                <div className='col-sm-8'>
                                {element.tasks}    
                                </div>
                                      <div className='col-sm-2'> <Link to={`/edit/${element._id}`}> <button  className='space w3-hover-shadow'  ><i class="fa fa-trash"></i>&nbsp;&nbsp;&nbsp;Update</button></Link></div>
                          <div className='col-sm-2'><button  className='space1 w3-hover-shadow'  onClick={() => deletedata(element._id)}><i class="fa fa-trash"></i>&nbsp;&nbsp;&nbsp;Delete</button></div>
                            </div><br/>
                            </>
                        )
                    })}
            </div>
        </>
    )
}

export default Home_new
    import axios from "axios";
    import { React,useState } from "react";
    import {useNavigate} from "react-router-dom";
    // import {useHistory} from "react-router-dom";

    function Addlist()
    {
      const navigate = useNavigate()
    const[album,setAlbum]=useState({
        userId:"",
        id:"",
        title:""
    });

    // const {userId, id, title}  = album;
    // const onInputChange = e =>{
    //     setAlbum=({...album,[e.target.userId]:e.target.value});
    //     console.log(e.target.value);
    // };
    // const onSubmit = async e  =>{
    //     e.preventDefault();
    //     await axios.post("https://jsonplaceholder.typicode.com/albums", album)
    // }

    
    // }
    // return (
    //     <div className="container">
    //         <div className="w-75 mx-auto shadow p-5">
    //             <h2 className="text-center mb-4">Add A Album</h2>
    //             <form onSubmit={e=>onSubmit(e)}>
    //                 <div className="form-group">
    //                     <input type="text"
    //                     className="form-control form-control-ig"
    //                     placeholder="Enter userId"
    //                     name="userId"
    //                     value={userId}
    //                     onChange={e=> onInputChange(e)}
    //                     />
    //                 </div>
    //                 <div className="form-group">
    //                     <input type="text"
    //                     className="form-control form-control-ig"
    //                     placeholder="Enter id"
    //                     name="id"
    //                     value={id}
    //                     onChange={e=> onInputChange(e)}
    //                     />
    //                 </div>
    //                 <div className="form-group">
    //                     <input type="text"
    //                     className="form-control form-control-ig"
    //                     placeholder="Enter title"
    //                     name="title"
    //                     value={title}
    //                     onChange={e=> onInputChange(e)}
    //                     />
    //                 </div>
    //                 <button type="submit" onClick={e=> onSubmit(e)} className="btn btn-primary mx-3">
    //                 Add album
    //             </button>
    //             <button className="btn btn-primary mx-3" onClick={handleClick}>Back to Home</button>
    //             </form>
    //         </div>
    //     </div>
    // )

    function onFieldChange(e){
       setAlbum({
            ...album,
            [e.target.name] : e.target.value
        })
    }
    async function onFormSubmit(e){
         e.preventDefault()
         try {
             const alb= await axios.post("https://jsonplaceholder.typicode.com/albums",album);
           
              console.log("alb", alb);
              navigate("/")
         } catch (error) {
             console.log("something is wrong", error);
         }
     }
     console.log(album)
     function handleClick(){
      navigate("/")
    }
   return (
     <div>
     
 
       <div className="container">
         <div className="row">
           <div className="col-sm">
             <h2>Add album</h2>
             <form>
               <div className="mb-3">
                 <label className="form-label">
                   userId:
                 </label>
                 <input
                   name="userId"
                   type="text"
                   className="form-control"
                   id="exampleInputEmail1"
                   aria-describedby="emailHelp"
                   onChange={e=> onFieldChange(e)}
                 />
                 <div id="emailHelp" className="form-text"></div>
               </div>
               <div className="mb-3">
                 <label className="form-label">
                   id:
                 </label>
                 <input
                 name="id"
                   type="text"
                   className="form-control"
                   id="exampleInputPassword1"
                   onChange={e=> onFieldChange(e)}
                 />
               </div>
               <div className="mb-3">
                 <label className="form-label">
                   title:
                 </label>
                 <input
                 name="title"
                   type="text"
                   className="form-control"
                   id="exampleInputPassword1"
                   onChange={e=> onFieldChange(e)}
                 />
               </div>
               <button type="submit" onClick={e=> onFormSubmit(e)} className="btn btn-primary">
                 Add Album
               </button>
               <button className="btn btn-primary mx-3" onClick={handleClick}>Back to Home</button>
             </form>
           </div>
           
         </div>
       </div>
     </div>
   );

    }

    export default Addlist;
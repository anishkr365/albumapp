import React,{Component} from 'react';

import axios from 'axios';
import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';

function List() {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        getAlbums();
    },[]);

    async function getAlbums() {
        try {
            const albums = await axios.get("https://jsonplaceholder.typicode.com/albums");
            console.log(albums, "albums");
            setAlbums(albums.data);
        } catch (error) {
            console.log("error");
        }
    }

    const handleDelete = async id =>{
        axios.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
        let newAlbum = albums.filter((item)=>{
            return item.id !== id;
        })
        setAlbums(newAlbum);
   }
    return (
        <div className='container'>
            <div className='py-4'>
                <h1>List</h1>
                <table class="table">
                    <thead>
                        <tr className='bg-dark text-white'>
                            <th scope="col">#</th>
                            <th scope="col">UserId</th>
                            <th scope="col">id</th>
                            <th scope="col">title</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                    albums.map((album, index)=>{
             return(
                <tr key={index}>
          <td>{index+1}</td>
          <td>{album.userId}</td>
          <td>{album.id}</td>
          <td>{album.title}</td>
          <td>
          <button className='btn btn-outline-primary m-2'><Link to={`/edit/${album.id}`}>Edit</Link></button> 
          <button style={{backgroundColor:"red"}} className="btn btn-primary" onClick={()=> handleDelete(album.id)}>Delete</button>
          </td>
          </tr>
             )
})
}
                    </tbody>
                </table>

            </div>
        </div>
    );



}
export default List;


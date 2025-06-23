import React, { useState } from 'react'
import { getFirestore } from "firebase/firestore";
import { app } from '../DB_Connect';
import { collection, addDoc, query, where, getDocs } from "firebase/firestore"; 
import './index.css'

export default function Firestore_CRUD_Practice() 
{
    const db = getFirestore(app);

    const [username_value, setUsername] = useState("");
    const [email_value, setEmail] = useState("");
    const [saved_item_name_value, setSavedItemName] = useState("");
    const [search_input, setSearchInput] = useState("");
    const [divs_array, setDivsArray] = useState([]);
    // const [render_data, setRenderData] = useState(""); //data to be rendered within return divs
    
    
    
const addUserToFireStore = async() => {
    const collection_name = "Users";

    const docRef = await addDoc(collection(db, collection_name), {
        Username: username_value,
        email : email_value
    });
    console.log(docRef);
}
//Creating a Sub Collection within a Document....Example: Users Collection ke Individual Document ke andar "Saved Items"
//Ismei Simply put-in ExternalmostCollection/UserDocID/Sub_Collection_Name

//Now Deliberate on Creation of Sub_Collection when the Doc ID is not known, i.e. Data needs to be Queried



const addSubCollectionToUser= async() => {
    const sub_collection_path = "Users" + "/mXsaK7DfE7KeUxOolODk";
    const sub_collection_name = "/Saved_Item";
     //Ab "Saved_Item_Name_Value" ko Split krenge with " " taaki agar Multi-Word hua, toh Splitted Rahe;
     const search_words = saved_item_name_value.toLowerCase().split(" ");
     //search_words is now an array that contains ["word1", "word2"];

    const result = await addDoc(collection(db, sub_collection_path + sub_collection_name), {
        saved_item_name: saved_item_name_value,
        search_keywords: search_words,
        time: new Date().toLocaleString()
    })
    console.log(result);
}
//Now Retrieving Data from the Collections
//1)
const [div_key_indexer, setDivKeyIndexer] = useState(1);

const Search_Retrieve_Docs = async() => {

    const search_input_splitted_arr = search_input.toLowerCase.split(" ");
    //Iterate over it  now
    search_input_splitted_arr.forEach(ind_search_word => {
        query(collection(db, ""))
    });

    const q = query(collection(db, "Users"), where("Username", "==", search_input));
    const snapshot_docs = await getDocs(q); //snapsjot_docs will contain Multiple Docs
    
    snapshot_docs.docs.map((individual_doc, index)=>
    {
        // setRenderData(JSON.stringify(individual_doc.data()));
//The .data object of each of multiple Docs received after using getDocs is in JSON Format by Default
// Needs to be Stringified
//Also Define the Case here jaha the entered Search_Input does not match any of the "USername" Values in any Document....
//When default indices are not possible as keys for the divs, make ur custom indices then like here
        const shallow_divs_array = [...divs_array];
        shallow_divs_array.push(
            <div className='border-2 border-black w-[20%] h-full text-black flex flex-col' key={div_key_indexer}> 
                <p>{JSON.stringify(individual_doc.data().email)} </p> 
                <p>{JSON.stringify(individual_doc.data().Username)} </p>
            </div>
            )
            // console.log(render_data);
        setDivsArray(shallow_divs_array);
        setDivKeyIndexer(div_key_indexer + 1);
    }
    );
}
  return (
    <div>
        <div className="form1 w-[90vw] h-[75vh] flex justify-center items-center border-2 border-black">
         <form>
            <label htmlFor="username"> Username: </label>
            <input type="text" value={username_value} onChange={(event)=> setUsername(event.target.value)} className='border-2 border-black' />
                <br></br>
                <br></br>
            <label htmlFor="email"> Email: </label>
            <textarea name="email" id="email" value={email_value} onChange={(event)=> setEmail(event.target.value)} className='border-2 border-black'></textarea>
                <br></br>
                <br></br>
            <label htmlFor="saved_item"> Enter Saved Item Name: </label>
            <input type="text" value={saved_item_name_value} onChange={(event)=> setSavedItemName(event.target.value)} className='border-2 border-black'/>
                <br></br>
                <br></br>
            <button onClick={addUserToFireStore} type='button' className='bg-black border border-black rounded-lg text-white p-2'>Submit Data </button>
                <br></br>
                <br></br>
            <button onClick={addSubCollectionToUser} type='button' className='bg-black border border-black rounded-lg text-white p-2'> Add Playlist </button>
        </form>
    </div>
    <div className="form2">
       <form>
            <label htmlFor="search_input"></label>
            <input type="text" value={search_input} onChange={(event)=> setSearchInput(event.target.value)} placeholder='Search by Username' className='border-2 border-black'/>
                <br></br>
                <br></br>
            <button type='button' onClick={Search_Retrieve_Docs} className='bg-black text-white p-2 border border-black rounded-lg'> Search </button>
       </form>
    </div>

    <div className="results_render_div w-full h-[60vh] border-2 border-red-500 inline text-wrap">
        {divs_array}
    </div>
    </div>
  )
}

import axios from "axios";

const baseUrl = "http://localhost:5000/api/"

export default {
    dReminder(url = baseUrl + 'DReminders/'){
        return {
            fetchAll: () => {return axios.get(url)},
            fetchById: id => axios.get(url + id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url + id, updateRecord),
            delete: id => axios.delete(url + id)
        }
    },
    Patients(url=baseUrl+'Patient/'){
        return{
            //fetchAll:()=>{return axios.get(url)},
            fetchAll:()=>axios.get(url),
            fetchById:id=>axios.get(url+id),
            create:newRecord=>axios.post(url,newRecord),
            update:(id,updateRecord)=>axios.put(url+id,updateRecord),
            delete:id=>axios.delete(url+id)
        }
    },
    hrDoctor(url=baseUrl+'Doctors/'){
        return{
            fetchAll:()=>axios.get(url),
            fetchById:id=>axios.get(url+id),
            create:newRecord=>axios.post(url,newRecord),
            update:(id,updateRecord)=>axios.put(url+id,updateRecord),
            delete:id=>axios.delete(url+id)
        }
    },
    birthRaport(url=baseUrl+'birthraport/'){
        return{
            fetchAll:()=>axios.get(url),
            fetchById:id=>axios.get(url+id),
            create:newRecord=>axios.post(url,newRecord),
            update:(id,updateRecord)=>axios.put(url+id,updateRecord),
            delete:id=>axios.delete(url+id)
        }
    },
    deathRaport(url=baseUrl+'deathraport/'){
        return{
            fetchAll:()=>axios.get(url),
            fetchById:id=>axios.get(url+id),
            create:newRecord=>axios.post(url,newRecord),
            update:(id,updateRecord)=>axios.put(url+id,updateRecord),
            delete:id=>axios.delete(url+id)
        }
    }
}
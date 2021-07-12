import api from "../../Dashboard/actions/api";

export const ACTION_TYPES={
    CREATE:'CREATE',
    UPDATE:'UPDATE',
    DELETE:'DELETE',
    FETCH_ALL:'FETCH_ALL'
}

export const fetchAll=()=>dispatch=>{
    api.Patients().fetchAll().then(
        response=>{
            dispatch({
                type:ACTION_TYPES.FETCH_ALL,
                payload:response.data
            })
        }
    ).catch(err=>console.log(err));
}
/*
export const fetchAll=()=>dispatch=>{
    api.Patients().fetchAll().then(
        (response)=>{
            return response.json();
        }
    ).then((data)=>{
        const patients=[];
        for(const key in data){
            const patients={
                id:key,
                ...data[key],
            };
            console.log(patients);
            patients.push(patients);
        }
    })
    .catch(err=>console.log(err));
}*/

export const create =(data,onSuccess)=>dispatch=>{
    api.Patients().create(data)
    .then(res=>{
        dispatch({
            type:ACTION_TYPES.CREATE,
            payload:res.data
        })
        onSuccess()
    })
    .catch((error) => console.log(error.response.request._response));
}

export const update=(id,data,onSuccess)=>dispatch=>{
    api.Patients().update(id,data)
        .then(res=>{
            dispatch({
                type:ACTION_TYPES.UPDATE,
                payload:{id,...data}
            })
            onSuccess()
        })
    .catch((error) => console.log( error.response.request._response ));
}

export const Delete=(id,onSuccess)=>dispatch=>{
    api.Patients().delete(id)
        .then(res=>{
            dispatch({
                type:ACTION_TYPES.DELETE,
                payload:id
            })
            onSuccess()
        })
    .catch((error) => console.log( error.response.request._response ));
}

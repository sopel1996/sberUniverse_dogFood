import { SettingsRemote } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../../utils/api';
export const Item = () => {
    const [item,setItem] = useState(null)
    const params = useParams();
    useEffect(()=>{
        api.getProducts(params.itemID).then((data)=>{
            setItem(data);
        })
        .catch((err)=>alert(err))
    },[])
  return (

    <pre>{JSON.stringify(item, null, 4)}</pre>
  )
}

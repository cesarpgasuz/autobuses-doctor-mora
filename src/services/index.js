import { useState, useEffect } from "react";

function ObtenerData(){

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

   

    useEffect(() => {
        const url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRZPiJBskxZxNG0FSLvGrxizDSypbc9sIqfHe-8hgZ5N69NRu_7yxKgpWMSHzRsGjvusWFalcaE6Zi2/pub?gid=0&single=true&output=csv'
        
        async function consultarDatos(){
           try {
            
            const data = await fetch(url)
            const datos = await data.text()

            const lines = datos.split('\n').slice(1);
            const rows = lines.map(line => line.split(','))

            const conv = parseCvs(rows)
            
            setData(conv)
            setLoading(false)
           } catch (error) {
            console.log(error)
           }
        }


        consultarDatos()

    },[])


    function parseCvs(data){
        return data.map((element) => ({
            id: element[0],
            horario: element[1],
            destino: element[2]
        }))
    }

    return {data, loading}

}

export default ObtenerData
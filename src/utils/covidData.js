import {setter as localStoragesetter,getter as localStoragegetter} from '../utils/localStorage';
import Covid from '../api/covid';
import {timings} from '../enums/data';


export default async function getCovidApiData() {
        
    let stateCode = this.props.match.params.stateCode;
    let expiryTime = localStoragegetter("expiry");
    let data = localStoragegetter("data");

    if(!expiryTime || expiryTime < Date.now() || data==null)
    {
        try {
            const result = await Covid.get('/v4/min/data.min.json');
            if(result.status===200)
            {
                this.setState({data:result.data[stateCode]});
                localStoragesetter("data",result.data);
                localStoragesetter("expiry",Date.now() + timings.dataValidDuration )
            }
            else
            {
                throw new Error("Failed to fetch Data");
            }
        }
        catch(err)
        {
            console.log(err);
            this.setState({error:err.message});
        }
    }
    else
    {
        const data = localStoragegetter("data");
        this.setState({data:data[stateCode]});
    }
}


async function getCovidApiDataHome() {
    let expiryTime = localStoragegetter("expiry");
    let data = localStoragegetter("data");

    if(!expiryTime || expiryTime < Date.now() || data==null)
    {
        try{
            const result = await Covid.get('/v4/min/data.min.json');
            console.log(result);
            if(result.status===200)
            {
                this.setState({result:result.data});
                localStoragesetter("data",result.data);
                localStoragesetter("expiry",Date.now() + timings.dataValidDuration )
            }
            else
            {
                throw new Error("Failed to fetch Data");
            }
        }
        catch(err)
        {
            console.log(err);
            this.setState({error:err.message});
        }
    }
    else
    {
        const data = localStoragegetter("data");
        this.setState({result:data});
    }
}


export {getCovidApiDataHome}


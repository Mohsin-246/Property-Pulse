const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

// Fetch All Properties

async function fetchProperties(){
    try{
        // hANDLE THE CASE IF DMAIN IS NOT AVAILABLE
      if(!apiDomain) {
        return [];
      }
      
      
      
      
        const res = await fetch(`${apiDomain}/properties`)
      if (!res.ok) {
        throw new Error('Failed to fetch data')
      }
      const data = await res.json();

      return data;
   
   
   
    }
    catch(error){
      console.log(error)
      return [];
    }
  }

// Fetch Single Property
async function fetchProperty(id){
    try{
        // hANDLE THE CASE IF DMAIN IS NOT AVAILABLE
      if(!apiDomain) {
        return null;
      }
      
      
      
      
        const res = await fetch(`${apiDomain}/properties/${id}`)
      if (!res.ok) {
        throw new Error('Failed to fetch data')
      }
      const data = await res.json();

      return data;
   
   
   
    }
    catch(error){
      console.log(error)
      return null;
    }
  }

export {fetchProperties , fetchProperty};
import connectDB from "@/config/config";
import Property from "@/models/Property";


//GET /api/properties/:id
export const GET = async (request, { params }) => {
    try{
       await connectDB();

        const property = await Property.findById(params.id);
        if (!property) return new Response('Property Not Found', {status:404})
       return new Response(JSON.stringify(property),{
        status:200,
       }
    )

    } catch(error){
        return new Response('Something Wwent Wrong', {status:500});
    }
}
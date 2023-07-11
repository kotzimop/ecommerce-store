import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`

const getSize = async(id:string):Promise<Size> => {
    const response = await fetch(`${URL}/${id}`)
    return response.json()
}

export default getSize;
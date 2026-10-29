import pb from "@/service/pocketBase";

const getVehicleData = async(userId: string) => {
    try{


        return await pb.collection('available_spots', ).getFullList()
    }
    catch(err) {console.log('something error fetching vehicle data', err)}
}

export default getVehicleData;
import PocketBase from 'pocketbase'

const pb = new PocketBase('http://127.0.0.1:8090');

const DBADMINUSERNAME = process.env.EXPO_PUBLIC_DBADMINUSERNAME as string
const DBADMINPASSWORD = process.env.EXPO_PUBLIC_DBADMINPASSWORD as string

export const authAsAdmin = async()  => {
    await pb.collection('_superUsers').authWithPassword(
       DBADMINUSERNAME,
        DBADMINPASSWORD,
        { cache: "no-store" }
    );

    return pb;
}

export default pb
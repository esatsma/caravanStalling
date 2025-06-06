import PocketBase from 'pocketbase'

const pb = new PocketBase('http://127.0.0.1:8090');


// authenticate as auth collection record
const userData = await pb.collection('users').authWithPassword('test@example.com', '123456');
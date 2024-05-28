 
// import axios from 'axios';


// const getAllData = async () => {
//     var data = [];
//   const options = {
//     headers: {
//       Authorization: 'Bearer 2cb43430-c616-48d2-b23f-02ec88f025d2'
//     }
//   };

//   try {
//     const response = await axios.get('https://api.vapi.ai/assistant', options);
//     data = response.data;
//     return data ;
//   } catch(err) {
//     console.error(err);
//   }
// }

// // console.log( await getAllData() )

// // console.log('data r',rr)

// export const fetchAssistantByID = async () => {

//     const data =  await getAllData() ;

//     console.log(data[0].id)
//     const id = data[0].id
    
//   const options = {
//     headers: {
//       Authorization: 'Bearer 2cb43430-c616-48d2-b23f-02ec88f025d2'
//     }
//   };

//   try {
//     const response = await axios.get(`https://api.vapi.ai/assistant/${id}`, options);
//     console.log(response.data)

//   } catch(err) {
//     console.error(err);
//   }
// }

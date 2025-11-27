// import axios from "axios";
// import { rapidApiKey } from "../constants";

// const baseUrl = 'https://exercisedb.p.rapidapi.com';


// const apiCall = async (url, params) => {
//     try {
//         const options = {
//             method: 'GET',
//             url,
//             params,
//             headers: {
//                 'x-rapidapi-key': rapidApiKey,
//                 'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
//             }
//         };
//         const response = await axios.request(options);
//         return response.data;
//     } catch (err) {
//         console.log("error: ", err.message);
//     }
// }

// export const fetchExercisesBodyPart = async (bodyPart) => {
//     let data = await apiCall(baseUrl+`/exercises/bodyPart/${bodyPart}`);
//     return data;
// }
// // In your api/exerciseDB.js
// // const apiCall = async (url, params) => {
// //     try {
// //         const options = {
// //             method: 'GET',
// //             url,
// //             params,
// //             headers: {
// //                 'x-rapidapi-key': rapidApiKey,
// //                 'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
// //             },
// //             timeout: 10000 // 10 second timeout
// //         };
// //         const response = await axios.request(options);
// //         return response.data;
// //     } catch (err) {
// //         console.log("API error: ", err.response?.status, err.message);
        
// //         // Handle specific error cases
// //         if (err.response?.status === 429) {
// //             throw new Error('Rate limit exceeded. Please try again later.');
// //         } else if (err.response?.status === 404) {
// //             throw new Error('Exercises not found for this body part.');
// //         } else {
// //             throw new Error('Failed to fetch exercises. Please check your connection.');
// //         }
// //     }
// // }

// // export const fetchExercisesBodyPart = async (bodyPart) => {
// //     try {
// //         // Convert to lowercase and handle spaces if needed
// //         const formattedBodyPart = bodyPart.toLowerCase().trim();
// //         let data = await apiCall(baseUrl + `/exercises/bodyPart/${formattedBodyPart}`);
        
// //         if (!data) {
// //             console.log("No data returned from API");
// //             return [];
// //         }
        
// //         return data;
// //     } catch (error) {
// //         console.log("Error in fetchExercisesBodyPart:", error.message);
// //         throw error; // Re-throw to handle in component
// //     }
// // };


import axios from "axios";

const baseUrl = 'https://exercisedb.p.rapidapi.com';

// GitHub GIF base URL
const gifBaseUrl = 'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/';

const apiCall = async (url, params) => {
  try {
    const options = {
      method: 'GET',
      url,
      params,
      headers: {
        'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY', // replace with your key if online fetch
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
      }
    };
    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    console.log("error: ", err.message);
    return []; // return empty array on error
  }
}

// Fetch exercises by body part + add GIF URL
export const fetchExercisesBodyPart = async (bodyPart) => {
  let data = await apiCall(baseUrl + `/exercises/bodyPart/${bodyPart}`);
  
  const dataWithGif = data.map(ex => ({
    ...ex,
    gifUrl: `${gifBaseUrl}${ex.id}.gif`
  }));

  return dataWithGif;
}

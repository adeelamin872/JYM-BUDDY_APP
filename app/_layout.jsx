import { Stack } from 'expo-router';
import { LogBox } from 'react-native';

export default function _layout() {
  LogBox.ignoreLogs(['warning failed to load']);
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name='exercises' options={{
        presentation: 'fullScreenModal'
      }}
      /> */}
       {/* <Stack.Screen name='exercisedetails' options={{
        presentation: 'modal'
      }}
      /> */}
    </Stack>
  );
}


// import { Stack } from "expo-router";

// export default function Layout() {
//   return (
//     <Stack screenOptions={{ headerShown: false }}>
//       {/* Starter (index) */}
//       <Stack.Screen name="index" />

//       {/* Home */}
//       <Stack.Screen name="home" />

//       {/* BodyParts */}
//       <Stack.Screen name="bodyparts" />

//       {/* Exercises - modal style */}
//       <Stack.Screen 
//         name="exercises" 
//         options={{ presentation: "fullScreenModal" }} 
//       />
//     </Stack>
//   );
// }

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "~/@types/navigators";
import { Text } from "react-native";
import PostListing from "~/screens/posts";

interface ApplicationProps {
    
}

const Stack = createNativeStackNavigator<RootStackParamList>();
 
const Application: React.FC<ApplicationProps> = () => {
    return ( 
        <NavigationContainer>
             <Stack.Navigator
        initialRouteName={"Start-Screen"}
        screenOptions={{
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
              name="Start-Screen"
              component={PostListing}
              options={{
                headerShown: false,
              }}
            />
      </Stack.Navigator>
        </NavigationContainer>
    
     );
}
 
export default Application;
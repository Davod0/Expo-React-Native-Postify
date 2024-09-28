import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { SegmentedButtons } from "react-native-paper";
import { RootStackParamList } from "../Navigators/RootStackNavigator";
import { TabStackParamList } from "../Navigators/TabStackNavigator";


// type Props = NativeStackScreenProps<RootStackParamList, "UserAccount">;
type Props = CompositeScreenProps<
  NativeStackScreenProps<RootStackParamList, "UserAccount">,  BottomTabScreenProps<TabStackParamList>
>

export default function UserAccountScreen(props: Props){

    const userId = props.route.params.userId;
    const userName = props.route.params.userName;

    // const user = users.find(user => user.id === userId);
      
    const value: "StartPage" | "FavoritePosts" | "CreatePost" | "StartPage" | ""= ""; 

    return(
        <View>
            <Text>User Acount Screen</Text>
            <Text>User Name: {userName}</Text>
            <Text>User ID: {userId}</Text>

            <SafeAreaView >
                <SegmentedButtons
                    value={value}
                    onValueChange={(value) => props.navigation.navigate(value as "StartPage" | "FavoritePosts" | "CreatePost")}
                    buttons={[
                    {
                        value: 'StartPage',
                        label: 'Start Page',
                    },
                    {
                        value: 'FavoritePosts',
                        label: 'favorite Posts', 
                    },
                    { 
                        value: 'CreatePost', 
                        label: 'Create Post' 
                    },
                ]}
                />
            </SafeAreaView>
        </View>


            
    );
}



{/*

    
    const startPageRoute = () => <Text>Start</Text>;
    const createPostRoute = () => <Text>Create post</Text>;
    const favoritePostRoute = () => <Text>Favorite</Text>;
    
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'StartPage', title: 'Go to start page', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
        { key: 'CreatePost', title: 'Go to create new post', focusedIcon: 'album' },
        { key: 'FavoritePosts', title: 'Go to favorite post', focusedIcon: 'history' },
    ]);

     const renderScene = BottomNavigation.SceneMap({
        StartPage: startPageRoute,
        CreatePost: createPostRoute,
        FavoritePosts: favoritePostRoute,
    });

        
    <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        />

*/}
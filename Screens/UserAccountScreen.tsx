import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import { BottomNavigation, Button } from "react-native-paper";
import { RootStackParamList } from "../Navigators/RootStackNavigator";
import { TabStackParamList } from "../Navigators/TabStackNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "UserAccount">;

type Props2 = CompositeScreenProps<
  NativeStackScreenProps<RootStackParamList, "UserAccount">,  BottomTabScreenProps<TabStackParamList>
>


export default function UserAccountScreen(props: Props2){

    const userId = props.route.params.userId;
    const userName = props.route.params.userName;

    // const user = users.find(user => user.id === userId);

    // const createPost = () => props.navigation.navigate();
    // const AlbumsRoute = () => <Text>Albums</Text>;
    // const RecentsRoute = () => <Text>Recents</Text>;
    // const NotificationsRoute = () => <Text>Notifications</Text>;

    // const [index, setIndex] = React.useState(0);
    // const [routes] = useState([
    //     { key: 'createPost', title: 'Create new Post', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    //     { key: 'favoritePost', title: 'Go to favorite post', focusedIcon: 'album' },
    //     { key: 'startPage', title: 'Go to start page', focusedIcon: 'history' },
    // ]);


    return(
        <View>
            <Text>User Acount Screen</Text>
            <Text>User Name: {userName}</Text>
            <Text>User ID: {userId}</Text>

            <Button onPress={() => props.navigation.navigate("StartPage")}>Go to Start Page</Button>
            <Button onPress={() => props.navigation.navigate("CreatePost")}>Go to create post</Button>
            <Button onPress={() => props.navigation.navigate("FavoritePosts")}>Go to favorite post</Button>

            {/* <View>
                <BottomNavigation
                    navigationState={{ index, routes }}
                    onIndexChange={setIndex}
                    renderScene={renderScene}
                    />
            </View> */}
        </View>
    );
}

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'albums', title: 'Albums', focusedIcon: 'album' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};
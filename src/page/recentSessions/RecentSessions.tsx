import * as React from "react";
import { View, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { RecentlyWatched } from "./RecentlyWatched";
import RecentlyListened from "./RecentlyListened";

const renderScene = SceneMap({
  recently_watched: RecentlyWatched,
  recently_listened: RecentlyListened,
});

export function RecentSessions() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "recently_watched", title: "Watched" },
    { key: "recently_listened", title: "Listened" },
  ]);

  const renderTabBar = (props: any) => {
    return <TabBar {...props} />;
  };

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={renderTabBar}
    />
  );
}

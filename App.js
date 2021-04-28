import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  BackHandler,
} from "react-native";
import { WebView } from "react-native-webview";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  const WEBVIEW_REF = React.createRef();
  let [canGoBack, setCanGoBack] = useState(true);

  const handleBackButton = () => {
    if (canGoBack) {
      WEBVIEW_REF.current.goBack();
      return true;
    }
  };

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    };
  });

  const onNavigationStateChange = () => setCanGoBack(true);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.webViewContainer}>
          <WebView
            source={{ uri: "http://www.numerologybit.com/" }}
            style={styles.webView}
            ref={WEBVIEW_REF}
            onNavigationStateChange={onNavigationStateChange}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    width: windowWidth,
  },
  webViewContainer: {
    flex: 1,
  },
  webView: {
    height: windowHeight,
    width: windowWidth,
  },
  adBanner: {
    height: 52,
    width: "100%",
    position: "absolute",
    backgroundColor: "red",
    bottom: 0,
  },
});

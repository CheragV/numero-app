import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.webViewContainer}>
          <WebView
            source={{ uri: "http://www.numerologybit.com/" }}
            style={styles.webView}
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

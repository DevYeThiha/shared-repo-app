import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Application from "~/navigation/Application";

const queryClient = new QueryClient({});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
     <Application/>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

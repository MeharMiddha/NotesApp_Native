import { StyleSheet, View } from "react-native";
import React from "react";
import Navbar from "@/components/Navbar";
import InputTag from "@/components/InputTag";

export default function index() {
  return (
    <View>
      <Navbar />
      <InputTag />
    </View>
  );
}

const styles = StyleSheet.create({});

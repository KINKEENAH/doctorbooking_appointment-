import * as React from "react";
import {
  Button,
  View,
  Text,
  SafeAreaView,
  Image,
  className,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";

function DetailScreen({ navigation }) {
  return (
    <SafeAreaView className="p-5">
      <View className="flex-row justify-between p-6">
        <AntDesign name="leftsquareo" size={24} color="black" />
        <Text>My Appointment</Text>
      </View>

      <View className="border border-gray-100 pb-4 rounded-3xl ">
        <Image
          height={220}
          borderTopLeftRadius={30}
          borderTopRightRadius={30}
          width={343}
          source={{
            uri: "https://img.freepik.com/free-photo/african-medical-doctor-man-isolated-white-background_93675-128521.jpg",
          }}
        />
        <View className="absolute top-0 right-0 p-2  rounded-2xl">
          <AntDesign name="heart" size={24} color="blue" />
        </View>
        <View className="flex-row justify-between ">
          <Text className="text-gray-950 text-lg">Dr.Georg Kasio</Text>
          <View className="flex-row">
            <View>
              <AntDesign name="star" size={18} color="yellow" />
            </View>
            <View className="pl-4">
              <Text className="">5.0 (332 reviews)</Text>
            </View>
          </View>
        </View>
        <View>
          <Text className="text-gray-600">Cardiologists | Mars Hospital</Text>
        </View>
      </View>

      <View className="border border-gray-100 ">
        <View className="flex-row justify-between ">
          <View className="items-center">
            <View className=" rounded-3xl border-gray-200 p-2 bg-white">
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Ionicons name="people-sharp" size={24} color="blue" />
              </TouchableOpacity>
            </View>

            <Text className="text-gray-950 text-md text-center ">326+</Text>
            <Text className="text-gray-600 ">Patients</Text>
          </View>

          <View className="items-center">
            <View className="rounded-3xl border-gray-400 p-2 bg-white">
              <Fontisto name="messenger" size={24} color="blue" />
            </View>

            <Text className="text-gray-950 text-md text-center ">9+</Text>
            <Text className="text-gray-600 ">Years expert</Text>
          </View>

          <View className="items-center">
            <View className="rounded-3xl border-gray-400 p-2 bg-white">
              <AntDesign name="star" size={24} color="blue" />
            </View>

            <Text className="text-gray-950 text-md text-center ">5.0</Text>
            <Text className="text-gray-600 ">Rating</Text>
          </View>

          <View className="items-center">
            <View className="rounded-3xl border-gray-400 p-2 bg-white">
              <AntDesign name="message1" size={24} color="blue" />
            </View>
            <Text className="text-gray-950 text-md text-center ">300+</Text>
            <Text className="text-gray-600 ">Reviews</Text>
          </View>
        </View>
      </View>

      <View className="p-2">
        <Text className="text-gray-950 text-lg">About Me</Text>
      </View>
      <View className="">
        <Text className="text-gray-700 ">
          Dr. Carly Angel is the top most immunologists specialist in Crist
          Hospital in London,UK.She achieved several awards for her wonderful
          contributions <Text className="text-blue-500">Read More....</Text>
        </Text>
       
      </View>
      <View className="p-1">
        <Text className="text-gray-950 text-lg">Patient information</Text>
      </View>
      <View className="flex-row p-1">
        <Text className="text-gray-600">Full Name:</Text>
        <Text className="text-gray-950">Richard Lee</Text>
      </View>
      <View className="flex-row p-2">
        <Text className="text-gray-600">Gender: </Text>
        <Text className="text-gray-950">Male</Text>
      </View>

      <View className="flex-row p-3 border border-indigo-500 rounded-md bg-indigo-500 ">
        <View>
          <Ionicons name="call" size={24} color="white" />
        </View>
        <View className="pl-4">
          <Text className="text-white">Start Voice Call (14.30-15.00 PM)</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
export default DetailScreen;

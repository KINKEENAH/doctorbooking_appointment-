import { View, Text, Button, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView, Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView className="">
        <View className=" bg-indigo-500 h-48 w-84 p-6 rounded-md">
          {/*First section starts here */}
          <View className="flex-row justify-between pb-5 ">
            <View className="flex-row">
              <Image
                height={60}
                width={50}
                borderRadius={500}
                source={{
                  uri: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                }}
              />
              <View className="pt-2 pl-3">
                <Text className="text-white">Hello,welcome</Text>
                <Text className="text-white">Andrew Milestone</Text>
              </View>
            </View>

            <View className="pt-2 ">
              <FontAwesome name="bell-o" size={24} color="white" />
            </View>
          </View>
          {/*First section ends here */}

          {/*second section starts here */}
          <View className="flex-row justify-between border p-3 rounded-2xl border-gray-100 ">
            <View className="flex-row ">
              <View>
                <Feather name="search" size={24} color="white" />
              </View>

              <View className="pl-3 ">
                <Text className="text-md text-white">Search Doctor...</Text>
              </View>
            </View>

            <View>
              <AntDesign name="menu-fold" size={24} color="white" />
            </View>
          </View>
          {/*second section ends here  */}
        </View>

        <View className="p-4">
          {/*Text section starts here */}
          <View className="pt-1">
            <Text className="text-lg text-black">Your symptoms</Text>
          </View>

          <View className="flex-row justify-between pt-4">
            <View className="p-2 text-md bg-indigo-500 rounded-lg w-28 ">
              <Text className="text-white text-center ">Snuffle</Text>
            </View>

            <View className="border p-1 rounded-lg border-gray-200 bg-gray-200">
              <Text className="">High Fever</Text>
            </View>
            <View className="border p-1 rounded-lg border-gray-200 bg-gray-200">
              <Text className="">Nauseous</Text>
            </View>
          </View>

          <View className="flex-row justify-between pt-5 pb-3">
            <Text className="text-lg">Favourite Doctor</Text>
            <Text className="text-violet-500">See all</Text>
          </View>
          {/*Text section ends here */}

          <View className="flex-row justify-between">
            {/*First image starts here */}
            <View className="border pb-4 rounded-xl border-gray-200">
              <Image
                height={100}
                width={160}
                borderRadius={10}
                source={{
                  uri: "https://i.pinimg.com/736x/f4/c9/ef/f4c9ef33d04a22050038e9e53eeb7d85.jpg",
                }}
              />
              <View className="absolute top-0 right-0 p-2 bg-white rounded-2xl">
                <AntDesign name="heart" size={14} color="blue" />
              </View>

              <View className="flex-row justify-between pt-3">
                <Text className="pl-2 text-md">Dr.Friska</Text>
                <View className="flex-row">
                  <View className="pr-2">
                    <AntDesign name="star" size={14} color="yellow" />
                  </View>
                  <View className="pr-2">
                    <Text>4.5</Text>
                  </View>
                </View>
              </View>
              <View>
                <Text className="pl-2">Utritionists-Hospital</Text>
              </View>
            </View>
            {/*First image ends here */}

            {/*Second image starts here */}
            <View className="border rounded-xl border-gray-200  ">
              <Image
                height={100}
                width={180}
                borderRadius={10}
                source={{
                  uri: "https://media.istockphoto.com/id/1372002650/photo/cropped-portrait-of-an-attractive-young-female-doctor-standing-with-her-arms-folded-in-the.jpg?s=612x612&w=0&k=20&c=o1QtStNsowOU0HSof6xQ_jZMglU8ZK565gHd655U6S4=",
                }}
              />

              <View className="absolute top-0 right-0 p-2 bg-white rounded-2xl">
                <AntDesign name="heart" size={14} color="blue" />
              </View>

              <View className="flex-row justify-between ">
                <Text className="pl-2 text-md">Dr.Lidya Bey</Text>

                <View className="flex-row">
                  <View className="pr-2">
                    <AntDesign name="star" size={14} color="yellow" />
                  </View>
                  <View className="pr-2">
                    <Text>4.5</Text>
                  </View>
                </View>
              </View>

              <View>
                <Text className="pl-2">Utritionists-Hospital</Text>
              </View>
            </View>
            {/*second image ends here */}
          </View>

          {/*Down section starts here */}
          <View className="flex-row justify-between pt-3 pb-2">
            <Text className="text-lg text-black">Top Doctor</Text>

            <Text className="text-blue-400">See all</Text>
          </View>

          <View className="flex-row  border border-gray-200 rounded-md pb-4 ">
            <View className="pb-3">
              <Image
                height={110}
                width={120}
                borderRadius={10}
                source={{
                  uri: "https://media.istockphoto.com/id/1390000431/photo/shot-of-a-mature-doctor-using-a-digital-tablet-in-a-modern-hospital.jpg?s=612x612&w=0&k=20&c=ofnikeDwvLhhEvLpSuQME5kWclGchqUKSHQFdQ4mcWo=",
                }}
              />
            </View>

            <View className="pl-3">
              <View className="flex-row justify-between pt-3 pb-3">
                <Text className="text-lg text-black">Dr.Berlin Elizerd</Text>
                <AntDesign name="heart" size={14} color="blue" />
              </View>

              <View className="pb-2">
                <Text>Cardiologists | Mars Hospital</Text>
              </View>

              <View className="flex-row">
                <View className="">
                  <AntDesign name="star" size={14} color="yellow" />
                </View>
                <Text className="pl-2">4.7 (7.932 reviews)</Text>
              </View>
            </View>
          </View>
        </View>

        {/*Down section ends here */}

        {/*bottom section starts here */}
        <View className="p-3">
          <View className="flex-row justify-between  border border-gray-200 rounded-md pt-2">
            <View>
              <TouchableOpacity onPress={() => navigation.navigate("Detail")}>
                <Entypo name="home" size={27} color="blue" />
              </TouchableOpacity>
            </View>

            <View>
              <AntDesign name="calendar" size={27} color="black" />
            </View>
            <View>
              <AntDesign name="codesquareo" size={27} color="black" />
            </View>
            <View>
              <AntDesign name="contacts" size={27} color="black" />
            </View>
          </View>
        </View>
        {/*bottom section ends here */}
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

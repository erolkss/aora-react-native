import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
import { useGlobalContext } from "../context/GlobalProvider";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import "./../assets/utils/i18n";

export default function App() {
  const { t, i18n } = useTranslation();
  const { isLoading, isLoggedIn } = useGlobalContext();
  const [isActiveButton, setActiveButton] = useState("english");
  const handlePress = (button) => {
    setActiveButton(button);
  };

  const changeLanguage = (value) => {
    i18n.changeLanguage(value);
  };

  if (!isLoading && isLoggedIn) return <Redirect href="/home" />;

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <View>
            <View className="flex flex-row space-x-12">
              <TouchableOpacity
                className={`border-spacing-1 rounded-lg p-2 hover:border-slate-400  
                  ${isActiveButton === "english" ? "bg-secondary-100" : ""}`}
                onPress={() => {
                  handlePress("english");
                  changeLanguage("en");
                }}
              >
                <Text className="text-white font-pbold text-lg">Inglês</Text>
              </TouchableOpacity>

              <TouchableOpacity
                className={`border-spacing-1 rounded-lg p-2 hover:border-slate-400  
                ${isActiveButton === "portuguese" ? "bg-secondary-100" : ""}`}
                onPress={() => {
                  handlePress("portuguese");
                  changeLanguage("pt");
                }}
              >
                <Text className=" font-pbold text-lg text-white">
                  Português Brasil
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              {t("Discover Endless Possibilities with ")}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className={`w-[136px] h-[15px] absolute -bottom-2  ${
                isActiveButton === "portuguese" ? "-right-8" : "right-20"
              }`}
              // className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            {t(
              "Where creativity meets innovation: embark on a journey of limitless exploration with Aora"
            )}
          </Text>
          <CustomButton
            title={t("Continue with Email")}
            handlePress={() => router.push("sign-in")}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}

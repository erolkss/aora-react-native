import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";
import { useTranslation } from "react-i18next";



const EmptyState = ({title, subtitle}) => {
  const { t, i18n } = useTranslation();
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <Text className="font-pmedium text-sm text-gray-100">{title}</Text>
      <Text className="text-xl text-center font-psemibold text-white">{subtitle}</Text>
      <CustomButton
        title={t("Create Video")}
        handlePress={() => router.push('/create')}
        containerStyles="w-full my-5"
      />
    </View>
  );
};

export default EmptyState;

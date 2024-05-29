import {
  View,
  FlatList,
  Text
} from "react-native";
import React, { useEffect} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../components/SearchInput";
import EmptyState from "../../components/EmptyState";
import useAppWrite from "../../lib/useAppWrite";
import { searchPosts } from "../../lib/appwrite";
import VideoCard from "../../components/VideoCard";
import { useLocalSearchParams } from "expo-router";
import { useTranslation } from "react-i18next";

const Search = () => {
  const { query } = useLocalSearchParams();
  const { t, i18n } = useTranslation();
  const { data: posts, refetch } = useAppWrite(() => searchPosts(query));

  useEffect(() => {
    refetch();
  }, [query]);

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 ">
            <Text className="font-pmedium text-sm text-gray-100">
              {t("Search results")}
            </Text>
            <Text className="text-2xl font-psemibold text-white">{query}</Text>

            <View className="mt-6 mb-8">
              <SearchInput initialQuery={query} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title={t("No videos found")}
            subtitle={t("No videos found for this search query")}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Search;

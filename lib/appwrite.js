import { Account, Client, ID } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: "https://cloud.appwrite.io/v1",
  platform: "br.com.ero.aora",
  projectId: "6642ba210006910bfab8",
  databaseId: "6642bbde002c9a7ba279",
  userCollectionId: "6642bc0d00379d8ec6e3",
  videoCollectionId: "6642bc36003066343c2a",
  storageId: "6642bda1002674c001a6",
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
  .setProject(appwriteConfig.projectId) // Your project ID
  .setPlatform(appwriteConfig.platform); // Your application ID or bundle ID.

const account = new Account(client);
export const createUser = () => {
  // Register User
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};

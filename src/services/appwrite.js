import { Client, Databases } from 'appwrite';

const projectId = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const client = new Client();
client
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject(projectId);

const databases = new Databases(client);
const databaseId = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const collectionId = import.meta.env.VITE_APPWRITE_COLLECTION_ID;

export { client, databaseId, collectionId, databases };
import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";

import { groupsGetAll } from "./groupsGetAll";

export async function groupRemoveByName(groupDeleted: string) {
  try {
    // Pega todos os grupos
    const storedGroups = await groupsGetAll();

    // pega todos os grupos, exceto o grupo deletado
    const groups = storedGroups.filter((group) => group !== groupDeleted);

    // Substitui o conjunto de grupos anterior pelo novo conjunto de grupos
    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));

    // Remover os jogadores do grupo deletado
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`);
  } catch (error) {
    throw error;
  }
}

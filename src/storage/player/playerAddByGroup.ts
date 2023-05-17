import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerStorageDTO} from './PlayerStorageDTO';
import { AppError } from "@utils/AppError";

import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { playerGetByGroup } from "./playersGetByGroup";


export async function playerAddByGroup (newPlayer: PlayerStorageDTO, group: string){
  try {
    const storedPlayers = await playerGetByGroup(group);

    const playerAlreadyExists = storedPlayers.filter(player => player.name === newPlayer.name);
    if (playerAlreadyExists.length > 0) {
      throw new AppError(`Player already exists`);
    } 

    const storage = JSON.stringify([...playerAlreadyExists, newPlayer]);

  await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);

  } catch (error) {
  throw (error);
  }
}
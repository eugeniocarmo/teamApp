import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { PLAYER_COLLECTION } from '@storage/storageConfig';

import { PlayerStorageDTO} from './PlayerStorageDTO';


import { playersGetByGroup } from "./playersGetByGroup";


export async function playerAddByGroup (newPlayer: PlayerStorageDTO, group: string){
  try {
    const storedPlayers = await playersGetByGroup(group);
    console.log(storedPlayers);

    const playerAlreadyExists = storedPlayers.filter(player => player.name === newPlayer.name);
    
    if (playerAlreadyExists.length > 0) {
      throw new AppError(`This Player already exists in one of the teams.`);
    } 

    const updatedPlayers = [...storedPlayers, newPlayer]; // fix added
    const storage = JSON.stringify(updatedPlayers);

  await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);

  } catch (error) {
  throw (error);
  }
}
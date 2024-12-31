import { playersGetByGroup } from "./playersGetByGroup";

export async function playersGetByGroupAndTeam(group: string, team: string) {
  try {
    // Pega todos os jogadores
    const storage = await playersGetByGroup(group);

    // Filtra os jogadores por time
    const players = storage.filter((player) => player.team === team);

    return players;
  } catch (error) {
    throw error;
  }
}

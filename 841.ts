/**
 * 841. Keys and Rooms
 *
 * There are n rooms labeled from 0 to n - 1 and all the rooms are locked except for room 0. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.
 *
 * When you visit a room, you may find a set of distinct keys in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.
 *
 * Given an array rooms where rooms[i] is the set of keys that you can obtain if you visited room i, return true if you can visit all the rooms, or false otherwise.
 *
 * */
export function canVisitAllRooms(rooms: number[][]): boolean {
  const roomsVisitedStatus = Array(rooms.length).fill(false);

  function visitRoom(room: number) {
    // If we've already been here or the key is to a room that doesn't exist, turn around
    if (roomsVisitedStatus[room] === true || roomsVisitedStatus[room] === undefined) {
      return;
    }
    // We have now visited the room
    roomsVisitedStatus[room] = true;
    for (const key of rooms[room]) {
      if (!Boolean(roomsVisitedStatus[key])) {
        visitRoom(key);
      }
    }
    return;
  }
  visitRoom(0);
  const hasVisitedAllRooms = !roomsVisitedStatus.includes(false);
  return hasVisitedAllRooms;
}

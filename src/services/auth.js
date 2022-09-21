import AsyncStorage from "@react-native-async-storage/async-storage";

export default class ExpireStorage {
  static async getItem(key) {
    let data = await AsyncStorage.getItem(key);
    data = JSON.parse(data);
    if (
      data !== null &&
      data.expireAt &&
      new Date(data.expireAt) < new Date()
    ) {
      await AsyncStorage.removeItem(key);
      data = null;
    }
    return data?.value;
  }

  static async setItem(key, value, expireInMinutes) {
    const data = { value };
    if (expireInMinutes) {
      const expireAt = this.getExpireDate(expireInMinutes);
      data.expireAt = expireAt;
    } else {
      const expireAt = JSON.parse(await AsyncStorage.getItem(key))?.expireAt;
      if (expireAt) {
        data.expireAt = expireAt;
      } else {
        return;
      }
    }
    const objectToStore = JSON.stringify(data);
    return AsyncStorage.setItem(key, objectToStore);
  }

  static async removeItem(key) {
    return AsyncStorage.removeItem(key);
  }

  static getExpireDate(expireInMinutes) {
    const now = new Date();
    const expireTime = new Date(now);
    expireTime.setMinutes(now.getMinutes() + expireInMinutes);
    return expireTime;
  }
}

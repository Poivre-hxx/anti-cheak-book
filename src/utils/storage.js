import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Storage {
  static async get(key) {
    const _value = await AsyncStorage.getItem(key);
    return _value !== null ? JSON.parse(_value) : null;
  }

  static async set(key, value) {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  }
}

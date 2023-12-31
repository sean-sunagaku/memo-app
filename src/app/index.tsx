import { View, Text, StyleSheet } from 'react-native';

const index = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Memo App</Text>
        <Text>ログアウト</Text>
      </View>

      <View>
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2023年10月1日 10:00</Text>
            <View>
              <Text>×</Text>
            </View>
          </View>
        </View>
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2023年10月1日 10:00</Text>
            <View>
              <Text>×</Text>
            </View>
          </View>
        </View>
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2023年10月1日 10:00</Text>
            <View>
              <Text>×</Text>
            </View>
          </View>
        </View>
      </View>

      <View>
        <Text>+</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default index;

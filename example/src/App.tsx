import * as React from 'react';
import { Layout, Switch, Text } from '@smarteat/ui';
import Header from '../../src/components/Header/Header';
import { SafeAreaView, StatusBar } from 'react-native';
import { useState } from 'react';

const LeftComponent = () => <Text>Left</Text>;
const RightComponent = () => <Text>Right</Text>;

export default function App() {
  const [switchValue, setSwitchValue] = useState(false);
  return (
    <Layout f={1}>
      <SafeAreaView>
        <StatusBar />
      </SafeAreaView>
      <Header
        title="hello"
        leftActionComponent={<LeftComponent />}
        rightActionComponent={<RightComponent />}
      />
      <Switch
        currentValue={switchValue}
        onChange={() => {
          setSwitchValue(!switchValue);
        }}
      />
    </Layout>
  );
}

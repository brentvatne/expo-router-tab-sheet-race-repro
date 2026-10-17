import { Stack, useRootNavigationState } from 'expo-router';
import { useEffect } from 'react';

type S = { type?: string; index?: number; routes: { name: string; key: string; state?: S }[] } | undefined;
const brief = (s: S): unknown =>
  s && { type: s.type, index: s.index, routes: s.routes.map((r) => (r.state ? { [r.name]: brief(r.state) } : r.name)) };

function StateLogger() {
  const state = useRootNavigationState();
  useEffect(() => {
    console.log('NAVSTATE', JSON.stringify(brief(state as S)));
  }, [state]);
  return null;
}

export const unstable_settings = { anchor: '(tabs)' };

export default function RootLayout() {
  return (
    <>
      <StateLogger />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="share" options={{ presentation: 'formSheet', sheetAllowedDetents: [0.5], sheetGrabberVisible: true }} />
      </Stack>
    </>
  );
}

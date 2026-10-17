import { Stack } from 'expo-router';

// The /p sheet lives in this tab's stack, so a link to it selects this tab on the way in; `list` (named for the
// group) is always underneath it.
export const unstable_settings = { anchor: 'list' };

export default function ListStack() {
  return (
    <Stack>
      <Stack.Screen name="list" options={{ title: 'List' }} />
      <Stack.Screen name="p" options={{ presentation: 'formSheet', sheetAllowedDetents: [0.45], sheetGrabberVisible: true, headerShown: false }} />
    </Stack>
  );
}

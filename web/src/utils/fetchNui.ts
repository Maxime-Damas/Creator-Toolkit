/**
 * Simple wrapper around fetch API to communicate with FiveM NUI callbacks.
 *
 * @param eventName - The endpoint name registered in Lua with RegisterNUICallback
 * @param data - The data payload to send to Lua
 * @param mockData - Mocked data returned when testing in an external browser
 */
export async function fetchNui<T = unknown>(
  eventName: string,
  data?: unknown,
  mockData?: T
): Promise<T> {
  const isEnvBrowser = !(window as any).invokeNative;

  if (isEnvBrowser) {
    if (mockData !== undefined) return mockData;
    return undefined as unknown as T;
  }

  const resourceName = (window as any).GetParentResourceName
    ? (window as any).GetParentResourceName()
    : 'light-studio';

  try {
    const response = await fetch(`https://${resourceName}/${eventName}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data ?? {}),
    });

    const text = await response.text();
    try {
      return JSON.parse(text) as T;
    } catch {
      return text as unknown as T;
    }
  } catch (error) {
    console.error(`[fetchNui] Error calling ${eventName}:`, error);
    throw error;
  }
}


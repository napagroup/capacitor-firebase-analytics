// add this line to ignore tsc errors to fix the issue
// @ts-ignore
declare module '@capacitor/core' {
  interface PluginRegistry {
    CapacitorFirebaseAnalytics?: CapacitorFirebaseAnalytics;
  }
}

export interface CapacitorFirebaseAnalytics {
  logEvent(options: { name: string, parameters: object }): Promise<void>;
  setUserProperty(options: { value: string, name: string }): Promise<void>;
  setUserId(options: { userId: string }): Promise<void>;
  setAnalyticsCollectionEnabled(options: { enabled: boolean }): Promise<void>;
  setScreenName(options: { screenName: string, screenClassOverride?: string }): Promise<void>;
  appInstanceId(): Promise<{appInstanceId: string}>;
  resetAnalyticsData(): Promise<void>;
}

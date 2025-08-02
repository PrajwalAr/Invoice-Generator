const KEY = "invoiceConfigV1";
export const saveConfig = (json: string) => {
  try { localStorage.setItem(KEY, json); } catch {
    /* ignore */
  }
};
export const loadConfig = (): string | null => {
  try { return localStorage.getItem(KEY); } catch {
    /* ignore */
    return null;
  }
};

import cookie from "cookie";

export function setCookie(res, name, value, options = {}) {
  const stringValue =
    typeof value === "object" ? JSON.stringify(value) : String(value);

  if (res.setHeader) {
    const serializedCookie = cookie.serialize(name, stringValue, options);
    res.setHeader("Set-Cookie", serializedCookie);
  }
}

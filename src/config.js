/* ============================================================
 * SAPINEX AI — SITE CONFIG
 * ============================================================
 * One place for launch-critical settings.
 * ============================================================ */

/**
 * Web3Forms access key — powers the Contact form and the
 * early-access (Register) form. No backend / SMTP setup needed.
 *
 * TO ACTIVATE (takes ~30 seconds, no signup):
 *   1. Go to https://web3forms.com
 *   2. Enter the inbox address you want submissions delivered to
 *      (e.g. office@sapinex.com) and press "Create Access Key"
 *   3. Check that inbox for the key, paste it below, redeploy.
 *
 * Until a real key is set, forms show a friendly "email us directly"
 * message instead of silently failing.
 */
export const WEB3FORMS_ACCESS_KEY =
  "6b6cae4d-a835-421c-9367-d7695ccb1f59"
  || "";

export const CONTACT_EMAIL = "office@sapinex.com";

export function isFormsConfigured() {
  return (
    typeof WEB3FORMS_ACCESS_KEY === "string" &&
    WEB3FORMS_ACCESS_KEY.length > 20 &&
    !WEB3FORMS_ACCESS_KEY.startsWith("REPLACE_WITH")
  );
}

/**
 * Submit a plain object to Web3Forms.
 * Returns { ok: boolean, message: string }.
 */
export async function submitForm(fields) {
  if (!isFormsConfigured()) {
    return {
      ok: false,
      message: `Our form isn't live yet — please email us directly at ${CONTACT_EMAIL}.`,
    };
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ access_key: WEB3FORMS_ACCESS_KEY, ...fields }),
    });
    const data = await res.json();
    if (res.ok && data.success) {
      return { ok: true, message: "Message sent." };
    }
    return {
      ok: false,
      message: `Something went wrong — please email us at ${CONTACT_EMAIL}.`,
    };
  } catch {
    return {
      ok: false,
      message: `Network error — please email us at ${CONTACT_EMAIL}.`,
    };
  }
}

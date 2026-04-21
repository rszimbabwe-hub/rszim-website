import { SITE_INQUIRY_EMAIL } from "../seo/site";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export type Web3FormsSubmitResult =
  | { ok: true }
  | { ok: false; message: string };

/**
 * Submits to Web3Forms. The notification is delivered to the inbox tied to `access_key`
 * in the Web3Forms dashboard — set that to SITE_INQUIRY_EMAIL (see app/seo/site.ts).
 *
 * We set the reserved `email` field to SITE_INQUIRY_EMAIL (your inbox), not the visitor’s
 * address, and use `replyto` for their address so “Reply” in your mail client still goes to them.
 */
export async function submitToWeb3Forms(params: {
  accessKey: string;
  subject: string;
  fromName: string;
  visitorEmail: string;
  message: string;
}): Promise<Web3FormsSubmitResult> {
  try {
    const res = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: params.accessKey,
        subject: params.subject,
        from_name: params.fromName,
        email: SITE_INQUIRY_EMAIL,
        replyto: params.visitorEmail,
        message: params.message,
      }),
    });
    const data = (await res.json()) as { success?: boolean; message?: string };
    if (!res.ok || !data.success) {
      return {
        ok: false,
        message: data.message ?? "Something went wrong. Please try again.",
      };
    }
    return { ok: true };
  } catch {
    return {
      ok: false,
      message: "Network error. Check your connection and try again.",
    };
  }
}

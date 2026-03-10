"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { submitContact, type ContactState } from "@/app/actions/contact";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/TextArea";
import Button from "@/components/Button";
import Toast from "@/components/Toast";
import { t } from "@/lib/i18n";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState<ContactState, FormData>(
    submitContact,
    null,
  );
  const [dismissedState, setDismissedState] = useState<ContactState>(null);
  const showToast = !!state && state !== dismissedState;
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <>
      <form ref={formRef} className="flex flex-col gap-4" action={formAction}>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 md:gap-3">
          <Input
            label={t("contact_form_name")}
            name="first_name"
            required
            placeholder={t("contact_form_name_placeholder")}
          />
          <Input
            label={t("contact_form_lastname")}
            name="last_name"
            required
            placeholder={t("contact_form_lastname_placeholder")}
          />
        </div>
        <Input
          label={t("contact_form_email")}
          name="email"
          required
          placeholder={t("contact_form_email_placeholder")}
        />
        <Input
          label={t("contact_form_phone")}
          name="phone"
          required
          placeholder={t("contact_form_phone_placeholder")}
        />
        <Textarea label={t("contact_form_message")} name="message" />
        <label>
          <input className="mr-1" type="checkbox" required />
          {t("contact_form_privacy_agree")}
        </label>
        <div>
          <Button disabled={pending}>
            {pending ? t("contact_form_sending") : t("contact_form_send")}
          </Button>
        </div>
      </form>

      {showToast && (
        <Toast
          message={state!.message}
          variant={state!.success ? "success" : "error"}
          onClose={() => setDismissedState(state)}
        />
      )}
    </>
  );
}

"use client";
import { useEffect, useState } from "react";
import Script from "next/script";
import type { Intercom as IntercomType } from "@types/intercom-client";
import { faker } from "@faker-js/faker";

declare global {
  interface Window {
    Intecom: IntercomType;
  }
}

export default function Intercom() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(function loadIntercom() {
    if (!window.Intercom) {
      return;
    }

    window.Intercom("boot", {
      app_id: process.env.NEXT_PUBLIC_INTERCOM_APP_ID,
      api_base: "https://api-iam.eu.intercom.io",
      user_id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
    });
    window.Intercom("onHide", function () {
      setIsOpen(false);
    });
    window.Intercom("onShow", function () {
      setIsOpen(true);
    });
    return () => {
      window.Intercom("shutdown");
    };
  }, []);

  return (
    <>
      <Script id="intercom-script">
        {`
(function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/${process.env.NEXT_PUBLIC_INTERCOM_APP_ID}';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s, x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();
`}
      </Script>
    </>
  );
}

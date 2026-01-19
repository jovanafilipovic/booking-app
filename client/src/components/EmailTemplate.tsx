import { Panel } from "rsuite";
import { EmailTemplateProps } from "../types";

export default function EmailTemplate({
  court,
  address,
  date,
  time,
}: EmailTemplateProps) {
  return (
    <Panel header="Potvrda rezervacije" shaded>
      <p>Poštovani, hvala na rezervaciji.</p>
      <p>
        Ovde su detalji Vaše rezervacije - Objekat: {court}, Adresa: {address},
        Datum: {date}, Vreme: {time}
      </p>
    </Panel>
  );
}

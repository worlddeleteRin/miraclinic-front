import TitleBig from '@/components/content/TitleBig';
import {
  Button,
} from '@mui/material';

import CallActionContainer from '@/components/content/CallActionContainer';

function DocumentsPage() {

  const titleBlock = (
      <TitleBig
          title="Документы"
          size="medium" 
      />
  )

  const licenseBlock = (
    <div>
      Лицензия №ЛО-82-xx-xxx-xxx от xx xxxx 2021 г. <br />
      Общество с ограниченной ответственностью «Мира Клиник» <br />
    </div>
  )

  const infoBlock1 = (
    <div className="mt-5">
      <div className="text-xl font-semibold mb-3">
        Адреса и телефоны органов исполнительной власти в сфере охраны здоровья граждан
      </div>
      <div>
        Органы исполнительной власти субъекта Российской Федерации в сфере охраны здоровья, территориальные органы Федеральной службы по надзору в сфере здравоохранения, территориальные органы Федеральной службы по надзору в сфере защиты прав потребителей и благополучия человека:
        <br />
      <ul>
        <li>
          - Министерство здравоохранения Республики Крым 295000, Республика Крым, г. Симферополь, пр. Кирова, 1 тел. (3652) 27-26-24 
        </li>
        <li>
          - Федеральная служба по надзору в сфере здравоохранения по Республики Крым 295034 Республика Крым, г. Симферополь, ул. Полевая, д. 24/23 8 (380652) 60-16-86
        </li>
        <li>
          - Межрегиональное Управление Федеральная служба по надзору в сфере защиты прав потребителя и благополучия человека по Республике Крым и городу федерального значения Севастополю 295034, Республика Крым, г. Симферополь, ул. Набережная, 67 +7 978 9191143.
        </li>
      </ul>
      </div>
    </div>
  )

  const infoBlock2 = (
    <div className="mt-5">
      ООО «Мира Клиник» не является участником программы Государственных гарантий бесплатного оказания гражданам медицинской помощи и территориальных программ государственных гарантий бесплатного оказания гражданам медицинской помощи.
      <br />
      Вы можете получить бесплатную медицинскую помощь по адресу:
      <br />
      г.Ялта, ул.Грибоедова, 3
      <br />
      ГОСУДАРСТВЕННОЕ АВТОНОМНОЕ УЧРЕЖДЕНИЕ ЗДРАВООХРАНЕНИЯ РЕСПУБЛИКИ KРЫМ «ЯЛТИНСКАЯ СТОМАТОЛОГИЧЕСКАЯ ПОЛИКЛИНИКА»
    </div>
  )

  const memoButton = (
    <div className="mt-4">
      <Button
        variant="outlined"
      >
        Памятка о правах и обязанностях пациента
      </Button>
    </div>
  )

  return (
    <div className="mx-4">
      <div className="max-w-screen-lg mx-auto">
        { titleBlock }
        <div className="py-4">
            { licenseBlock }
            { infoBlock1 }
            { infoBlock2 }
            { memoButton }
        </div>
      </div>
        <CallActionContainer />
    </div>
  )
}

export default DocumentsPage;

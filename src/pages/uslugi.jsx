import { BreadCrumbs } from "../bloc/breadСrumbs";
import LegalServices from "../bloc/legalServiceses";
import { StructuredData } from "../bloc/StructuredData";


export default function Uslugi(params) {
    return(
       <>
        <StructuredData type="organization" />
      <StructuredData type="localbusiness" />
      <StructuredData type="breadcrumb" />
        <main>
            <BreadCrumbs/>
            <LegalServices/>
        </main></>
    )
}
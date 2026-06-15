import { BreadCrumbs } from "../bloc/breadСrumbs";
import LegalServices from "../bloc/legalServiceses";
import { SEO } from "../bloc/SEO";
import { StructuredData } from "../bloc/StructuredData";
import { useDomainContent } from "../hooks/useDomainContent";


export default function Uslugi(params) {
    const { replaceTemplate } = useDomainContent();
    return (
        <>
            <SEO
                title={"Услуги "}
                description={replaceTemplate(`Независимая оценка промышленного оборудования, машин для залога, банка, суда, банкротства в {{city.in}}. Отчет в течение 5–7 дней. Опытные оценщики СРО. Рассчитайте стоимость онлайн!`)}
            />
                <StructuredData type="organization" />
                <StructuredData type="localbusiness" />
                <StructuredData type="breadcrumb" />
            <main>
                <BreadCrumbs />
                <LegalServices />
            </main></>
    )
}
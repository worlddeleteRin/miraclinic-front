import SubPageHeader from '@/components/header/SubPageHeader';
import ServicesBlock from '@/components/content/ServicesBlock';

function ServicePage() {
    return (
        <div className="mx-4">
            <div className="max-w-screen-lg mx-auto">
                <SubPageHeader title="Услуги" />
                <ServicesBlock />
            </div>
        </div>
    )
}

export default ServicePage

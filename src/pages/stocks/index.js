import TitleBig from '@/components/content/TitleBig';
import StockCard from '@/components/stocks/StockCard';

import { useStocks } from '@/hooks/useSite';

function StocksPage () {
    const stocksQuery = useStocks();
    const stocks = stocksQuery?.data;

    const titleBlock = (
        <TitleBig
            title="Акции"
        />
    )
    const stocksList = (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {stocks && stocks.map((stock, index) => (
                <StockCard
                    key={index}
                    stock={stock}
                />
            ))
            }
        </div>
    )
    return (
        <div className="mx-4">
            <div className="max-w-screen-lg mx-auto">
                { titleBlock }
                <div className="py-4">
                { stocksList }
                </div>
            </div>
        </div>
    )
}

export default StocksPage;

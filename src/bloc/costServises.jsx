export function CostServises({ tab }) {
    if (!tab || tab.length === 0) return null;
    const { title, items, note } = tab[0];

    return (
        <section className="CostServises">
            <div className="container flex">
                <h2>{title.toUpperCase()}</h2>
                <div className="CostServises_items flex">
                    <div className="CostServises_item">
                        <div className="CostServises_item_name">Наименование</div>
                        <div className="CostServises_item_name">стоимость</div>
                    </div>
                    {items.map((item, index) => (
                        <div key={index} className="CostServises_item">
                            <div className="CostServises_item_name">{item.name}</div>
                            <div className={`CostServises_item_name ${item.cost === 'БЕСПЛАТНО' ? 'CostServises_item_costRed' : ''}`}>
                                {item.cost}
                            </div>
                        </div>
                    ))}
                </div>
                {note && <p className="services_faise_text">{note}</p>}
            </div>
        </section>
    );
}
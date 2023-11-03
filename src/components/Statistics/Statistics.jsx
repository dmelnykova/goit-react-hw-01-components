export const Statistics = ({ title, data }) => {
    return (
        <section>
            {title && <h2>{title}</h2>}
            <ul>
               {data && data.map((item) => (
                    <li key={item.id}>
                        <span>{item.label}</span>
                        <span>{item.percentage}%</span>
                    </li>
                    ))}
            </ul>
        </section>
    );
};
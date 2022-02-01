import PropTypes from "prop-types";
import s from './Statistics.module.css';

const Statistics = ({ stats }) => {
    return <section className={s["statistics"]}>
    <h2 className={s["title"]}>Upload stats</h2>
    <ul className={s["statList"]}>
        {stats.map(stat => (
            <li className={s["item"]} key={stat.id}
            style={{
                backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
                16,
                )}`,
            }}
            >
                <span className={s["label"]}>{stat.label} </span>
                <span className={s["percentage"]}>{stat.percentage}%</span>
            </li>
            ))
        }
     </ul>
    </section> 
};

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number,
        })
    )
}

export default Statistics;
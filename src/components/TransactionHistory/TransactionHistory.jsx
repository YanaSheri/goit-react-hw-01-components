import PropTypes from "prop-types";
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={s["transactionHistory"]}>
            <thead>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </thead>
            {items.map(({ id, type, amount, currency }) => {
                return (
                    <tbody key={id} className={s["transitionRow"]}>
                        <tr >
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    </tbody>
                )}
            )}             
        </table>)
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.string,
            amount: PropTypes.string,
            currency: PropTypes.string,
        })
    )
}

export default TransactionHistory;
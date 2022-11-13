import { useNavigate, useParams } from 'react-router-dom';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import { Section } from 'components/Section/Section';
import s from './TransactionHistoryPage.module.css';
import sprite from '../../assets/sprite.svg';
import { useSelector } from 'react-redux';

export const TransactionHistoryPage = props => {
  const income = useSelector(state => state.transactions.income);
  const expense = useSelector(state => state.transactions.expense);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1, { replace: true });
  };

  const { transType } = useParams();
  const transactions =
    transType === 'income' ? income : transType === 'expense' ? expense : [];

  return (
    <>
      <Header title={`TransactionHistoryPage`} onClick={goBack} />

      {/* <svg>
        <use href="../sprite.svg#icon-arrow-left2"></use>
      </svg> */}

      <Section>
        <Container>
          <ul className={s.list}>
            {transactions.map(({ date, time, summ, currency, comment, id }) => {
              return (
                <li className={s.item} key={id}>
                  <div className={s['content-wrapper']}>
                    <div className={s['descr-wrapper']}>
                      <span className={s.date}>
                        {date} {time}
                      </span>
                      <span className={s.comment}>{comment}</span>
                    </div>
                    <div className={s['summ-wrapper']}>
                      <span className={s.summ}>{summ}</span>
                      <span className={s.currency}>{currency}</span>
                    </div>
                  </div>
                  <div className={s['btn-wrapper']}>
                    <button className={s['btn-action']} type="button">
                      <svg>
                        <use href={sprite + '#icon-edit-pencil'}></use>
                      </svg>
                    </button>
                    <button className={s['btn-action']} type="button">
                      <svg>
                        <use href={sprite + '#icon-trash'}></use>
                      </svg>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>
    </>
  );
};

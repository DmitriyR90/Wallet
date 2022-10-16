import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import { Section } from 'components/Section/Section';
import s from './TransactionHistoryPage.module.css';
import sprite from '../../assets/sprite.svg';

export const TransactionHistoryPage = ({ changePage }) => {
  const goBack = () => changePage();

  return (
    <>
      <Header title={TransactionHistoryPage} onClick={goBack} />

      {/* <svg>
        <use href="../sprite.svg#icon-arrow-left2"></use>
      </svg> */}

      <Section>
        <Container>
          <ul className={s.list}>
            <li className={s.item}>
              <div className={s['content-wrapper']}>
                <div className={s['descr-wrapper']}>
                  <span className={s.date}>Нд 3 бер 2022, 14:30 </span>
                  <span className={s.comment}>Кіно</span>
                </div>
                <div className={s['summ-wrapper']}>
                  <span className={s.summ}>150</span>
                  <span className={s.currency}>UAH</span>
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
          </ul>
        </Container>
      </Section>
    </>
  );
};

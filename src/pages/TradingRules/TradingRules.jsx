import styles from './TradingRules.module.css';
import DocumentationPage from '../../components/Documentation/Documentation';
import Title from '../../components/UI/Title/Title';

function TradingRules() {
  return (
    <DocumentationPage>
      <Title titleText="Правила продажи товаров" />
      <div className={styles.content}>
        <ol>
          <li>
            Условия покупки и продажи товара
            <ul>
              <li>
                Товары, представленные в интернет-магазине мебели, имеются
                в наличии и снабжаются соответствующими характеристиками и фотографиями.
              </li>
              <li>
                Каждый товар имеет описание, размеры, условия доставки и цену.
              </li>
              <li>
                Права и обязанности покупателя и продавца регулируются Договором купли-продажи,
                заключаемым при оформлении заказа.
              </li>
            </ul>
          </li>
          <li>
            Оформление заказа
            <ul>
              <li>
                Оформление заказа производится через интернет-магазин мебели.
              </li>
              <li>
                После выбора товара, покупатель должен заполнить форму заказа,
                в которой указываются контактные данные покупателя, наименование
                и количество заказываемого товара, а также требуемый адрес доставки.
              </li>
              <li>
                После проверки корзины и подтверждения заказа, куплю-продажа считается заключенной.
              </li>
            </ul>
          </li>
          <li>
            Цены
            <ul>
              <li>
                Цены на все товары интернет-магазина мебели указываются в рублях и включают НДС.
              </li>
              <li>
                Цены могут быть изменены продавцом без предварительного уведомления покупателя.
              </li>
            </ul>
          </li>
          <li>
            Оплата
            <ul>
              <li>
                Оплата товара производится в соответствии с договором купли-продажи
                и выбранным способом оплаты.
              </li>
              <li>
                Возможные способы оплаты: наличные, банковские карты,
                электронные платежные системы, кредиты и рассрочки.
              </li>
            </ul>
          </li>
          <li>
            Доставка
            <ul>
              <li>
                Доставка товара осуществляется в соответствии с договором купли-продажи
                и выбранным способом доставки.
              </li>
              <li>
                Возможные способы доставки: самовывоз, курьерская доставка
                в пределах города, пункты выдачи заказов и транспортные компании.
              </li>
            </ul>
          </li>
          <li>
            Правила возврата товара
            <ul>
              <li>
                Возврат товара возможен в соответствии с законодательством.
              </li>
              <li>
                Покупатель обязан сообщить о намерении вернуть товар продавцу не позднее,
                чем через 7 дней с момента получения товара.
              </li>
              <li>
                Возврат возможен только наличными.
              </li>
              <li>
                Возврат товара осуществляется по предварительному согласованию
                и при наличии документа об оплате.
              </li>
            </ul>
          </li>
          <li>
            Гарантии
            <ul>
              <li>
                Все товары имеют соответствующие гарантии от производителя.
              </li>
              <li>
                Гарантийные обязательства предоставляются только в случае соблюдения
                правил эксплуатации и хранения товара.
              </li>
            </ul>
          </li>
          <li>
            Контакты
            <ul>
              <li>
                Контактные данные интернет-магазина мебели указаны на сайте магазина
                и в договоре купли-продажи.
              </li>
              <li>
                В случае возникновения вопросов покупатель может обратиться за помощью
                к представителям интернет-магазина через телефон, электронную почту или онлайн-чат.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </DocumentationPage>
  );
}

export default TradingRules;

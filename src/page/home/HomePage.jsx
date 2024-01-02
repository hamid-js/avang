import Article from "../../components/article/Article";
import AllCards from "../../components/card/AllCards";
import Cta from "../../components/cta/Cta";
import Header from "../../components/header/Header";
import Navbar from "../../components/header/Navbar";
import Numbers from "../../components/numbers/Numbers";
import Statistics from "../../components/statistics/Statistics";

import styles from './HomePage.module.css'
function HomePage() {
  const siteName = " طنین لوله ";
  const cityName = " تهران";
  const number = "0206_039_0912"; //REVERS
  const hiroImage = "/images/tanin3.jpg"; 
  return (
    <div className={styles.home}>
    <Navbar siteName={siteName} />

      <Header siteName={siteName} cityName={cityName} hiroImage={hiroImage} />

      <Article img="/images/tanin2.jpg" siteName={siteName}>
        {
          <>
            <h2>خدمات فوری {siteName}</h2>
            <ul>
              <li>لوله بازکنی فوری 24 ساعته</li>
              <li>رفع گرفتگی چاه</li>
              <li>درآوردن آشیا ارزشمند از چاه</li>
              <li>تخلیه چاه فوری</li>
              <li>امداد رسانی در کمتر از 20دقیقه</li>
            </ul>
          </>
        }
      </Article>

      <Numbers cityName={cityName} number={number} />
      <AllCards />
      <Statistics />

      <Article img="/images/tanin1.jpg" siteName={siteName}>
        {
          <>
            <h2>نشانه های گرفتگی لوله:</h2>
            <ul>
              <li>پیچیدن بوی بد فاضلاب در ساختمان و آپارتمان</li>
              <li>تخلیه نشدن فاضلاب از سینک‌ ظرف‌شویی و روشویی</li>
              <li>بالا زدن آب سرویس بهداشتی</li>
              <li>جمع شدن اب درکاسه توالت ایرانی و فرنگی</li>
              <li>کندشدن خروج اب </li>
              <li>وجود حشرات موزی در ساختمان </li>
            </ul>
          </>
        }
      </Article>
      <Cta/>

    </div>
  );
}

export default HomePage;

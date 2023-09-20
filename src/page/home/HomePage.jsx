import Article from "../../components/article/Article";
import AllCards from "../../components/card/AllCards";
import Header from "../../components/header/Header";
import Numbers from "../../components/numbers/Numbers";
import Statistics from "../../components/statistics/Statistics";

function HomePage() {
  const siteName = "آونگ سرویس";
  const cityName = "تهران";
  const number = "0206_039_0912"; //REVERS
  const hiroImage = "./assets/avangserviceCom6.jpg"; 
  return (
    <>
      <Header siteName={siteName} cityName={cityName} hiroImage={hiroImage} />

      <Article img="./assets/avangserviceCom3.jpg">
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

      <Article img="./assets/avangserviceCom5.jpg">
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
    </>
  );
}

export default HomePage;

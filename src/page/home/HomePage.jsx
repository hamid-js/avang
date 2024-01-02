import Article from "../../components/article/Article";
import AllCards from "../../components/card/AllCards";
import Cta from "../../components/cta/Cta";
import Header from "../../components/header/Header";
import Navbar from "../../components/header/Navbar";
import Numbers from "../../components/numbers/Numbers";
import Statistics from "../../components/statistics/Statistics";

import styles from "./HomePage.module.css";
function HomePage() {
  const siteName = " سیار سرویس ";
  const cityName = " تهران";
  const number = "0206_039_0912"; //REVERS
  const hiroImage = "/images/car1.jpg";
  return (
    <div className={styles.home}>
      <Navbar siteName={siteName} />

      <Header siteName={siteName} cityName={cityName} hiroImage={hiroImage} />

      <Article img="/images/car5.jpg" siteName={siteName}>
        {
          <>
            <h2>خدمات فوری {siteName}</h2>
            <ul>
              <li>تعمیرات سیار خودرو 24 ساعته</li>
              <li>رفع خرابی خودرو</li>
              <li>امداد رسانی در کمتر از 20دقیقه</li>
              <li>امداد رسانی در کمتر از 20دقیقه</li>
              <li>امداد رسانی در کمتر از 20دقیقه</li>
            </ul>
          </>
        }
      </Article>

      <Numbers cityName={cityName} number={number} />
      <AllCards />
      <Statistics />

      <Article img="/images/car2.jpg" siteName={siteName}>
        {
          <>
            <h2>نشانه آسیب به خودرو:</h2>
            <ul>
              <li> صدای بد خودرو</li>
              <li> صدای بد خودرو</li>
              <li> صدای بد خودرو</li>
              <li> صدای بد خودرو</li>
              <li> صدای بد خودرو</li>
            
            </ul>
          </>
        }
      </Article>
      <Cta />
    </div>
  );
}

export default HomePage;

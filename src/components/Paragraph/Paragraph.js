import React, { Component } from "react";
import Board from "../Board/Board.js";
import "./Paragraph.css";

class Paragraph extends Component {
  constructor(props) {
    super();
  }

  // Return the paragraph needed.
  GetParagraph() {
    if (this.props.currentCard === "About") return this.GetAbout();
    if (this.props.currentCard === "The scholarship") return this.GetTheScholarship();
    if (this.props.currentCard === "Tzvika Levi") return this.GetTzvikaLevi();
    return;
  }

  GetAbout() {
    if (this.props.styleLanguage === "cardHebrew") {
      return (
        <div>
          <h2>{`אודות קרן צביקה`}</h2>
          <p>
            {`
            במשך למעלה מ- 25 שנה פעל צביקה, בדרכים שונות, מקובלות או חריגות, בכדי לעזור ולסייע בכל דרך אפשרית לחיילים הבודדים. בשנים האחרונות הקשתה עליו מחלתו והגבילה את יכולת התנועה שלו, אך צביקה המשיך מביתו שביפעת להפעיל בנחישות את כל הגורמים, כדי שמפעל חשוב זה לא ייפגע.
            `}
            <br />
            {`
            מתחילת פעילותו היו בני משפחתו וחבריו מעורבים בעשיה העניפה ובמפעל החיים הציוני והייחודי שהקים. במהלך שנה מאז לכתו של צביקה, חברה קבוצת חברים יחד עם בני משפחתו בהחלטה להמשיך את מורשתו. "קרן צביקה" הוקמה כהמשך ישיר למפעל חייו של צביקה לוי ז''ל, במטרה להיות קשובים לצרכי החיילות והחיילים הבודדים ולסייע בידם ככל הניתן. הקרן שמה לה למטרה להמשיך בקיום פועלו של צביקה עפ"י רוחו, ובנוסף להגשים חלומות שטרם הספיק לממש.
            `}
            <br />
            {`
            בינואר 2020, בתום שנה ללכתו של צביקה מאתנו, נערך בקיבוץ יפעת טקס ובו הוכרז על הקמת הקרן על שמו וחולקו שבע המלגות הראשונות. 
            `}
          </p>
          <h2>{`חזון "קרן צביקה" – שילוב חיילים בודדים משוחררים בחברה הישראלית `}</h2>
          <p>
            {`
            הקרן תעניק מלגות לימודים לחיילות וחיילים בודדים ששרתו בצה"ל, המתעתדים ללמוד במוסדות להשכלה גבוהה בישראל.
            `}
            <br />
            {`
            הקרן תשמש כמערכת תומכת לחיילות וחיילים בודדים אשר החליטו לקשור את גורלם עם מדינת ישראל גם בתום השירות הצבאי, תסייע בכך לקליטתם בחברה הישראלית ולשילובם בה.
            `}
            <br />{" "}
            {`
            מייסדי הקרן רואים בשילובו של נוער צעיר מכל קצוות תבל בחברה הישראלית מהלך ציוני, חשוב והכרחי אשר יתרום לשגשוג, ליכוד ופיתוח המרקם האנושי  של החברה הישראלית על כל גווניה.    
            `}
          </p>
          <h2>{`מטרות הקרן`}</h2>
          <ol>
            <li>{`להעניק מלגות לימודים לחיילות וחיילים בודדים, אשר החליטו ללמוד בתום השירות הצבאי, במוסדות להשכלה גבוהה בישראל;`}</li>
            <li>{`לשמש כתובת לקהילת החיילות והחיילים הבודדים לאחר שחרורם מצה"ל ובתקופת לימודיהם;`}</li>
            <li>{`להעניק סיוע לחיילות וחיילים בודדים במסגרות נוספות, בהתאם להחלטות הנהלת הקרן.`}</li>
          </ol>
          <h2>{`חברי הקרן`}</h2>
          <Board language="Hebrew" />
        </div>
      );
    }

    return (
      <div>
        <h2>{`About "The Tzvika Foundation"`}</h2>
        <p>
          {`
          For over 25 years Tzvika acted formally and informally in order to help lone soldiers in any possible way. During his last years, the disease made it harder for him and limited his mobility, but Tzvika continued persistently to work hard in order to keep this operation going smoothly.
          `}
          <br />
          {`
          Throughout the years, Tzvika's family and friends have always been involved in his unique Zionist enterprise. After his passing, a group of family members and friends formed "The Tzvika Foundation", a non-profit organization, to continue Tzvika's legacy. The Foundation was established as a direct continuation of Tzvika's lifetime enterprise, in an attempt to support lone soldiers and address their needs. The Foundation aspires to continue Tzvika's mission and make his unfulfilled dreams a reality.
          `}
          <br />
          {`
          In January 2020, approximately one year after Tzvika's passing, a ceremony was held in kibbutz Yifat where the establishment of "The Tzvika Foundation" was announced - giving scholarships to lone soldiers who completed their military service and planned to pursue higher education in Israel. 
          `}
        </p>
        <h2>{`The Vision of "The Tzvika Foundation" – Integration of lone soldiers post military service in the Israeli society `}</h2>
        <p>
          {`
          The foundation will serve as a support system for lone soldiers who have decided to tie their future with the State of Israel post military service.
          `}
          <br />
          {`
          The foundation sees the integration of these young people from the Diaspora into the Israeli society as a Zionist act, essential to the development of the Israeli ecosystem, fostering its unity and prosperity.
          `}
        </p>
        <h2>{`"The Tzvika Foundation" - Goals`}</h2>
        <ol>
          <li>{`Grant student scholarships to lone soldiers who pursue higher education in Israeli institutions.`}</li>
          <li>{`Serve as a source of community support to lone soldiers during their academic years.`}</li>
          <li>{`Extend support to lone soldiers in other aspects, under the direction of the Board of Directors.`}</li>
        </ol>
        <h2>Foundation Members</h2>
        <Board language="English" />
      </div>
    );
  }

  GetTheScholarship() {
    if (this.props.styleLanguage === "cardHebrew") {
      return (
        <div>
          <h2>{`מסלולי מלגות:`}</h2>
          <ol>
            <li>{`מלגת לימודים לתואר ראשון במוסד אקדמי מוכר בארץ;`}</li>
            <li>{`מלגות לימודים נוספות, כדוגמת תואר שני ורפואה, בכפוף להחלטה פרטנית של הנהלת הקרן.`}</li>
          </ol>
          <h2>{`הרשמה: `}</h2>
          <ol>
            <li>{`ההרשמה לצורך קבלת מלגה תהיה בכל שנה עבור השנה העוקבת, בין התאריכים:        ____________ ל-____________;`}</li>
            <li>{`את טפסי ההרשמה ניתן להוריד מאתר הקרן ו/או לפנות ישירות בכתובת הדואר האלקטרוני ________________.`}</li>
          </ol>
          <h2>{`קריטריונים לזכאות:`}</h2>
          <p>{`חיילות וחיילים בודדים יוכלו להגיש מועמדות למלגה בתנאי שיעמדו בקריטריונים הבאים:`}</p>
          <ol>
            <li>{`מגורים ולימודים בארץ;`}</li>
            <li>{`המועמד/ת עומדים בהגדרת 'חייל בודד' של משרד הביטחון;`}</li>
            <li>{`הגשת בקשה למלגה יכולה להיעשות תוך חמש שנים מיום השחרור של המועמד/ת; `}</li>
            <li>{`לימודי תואר ראשון ישראלי או לימודי תעודה בהיקף לימודים מלא במוסד שקיבל את אישור המל"ג (למעט האוניברסיטה הפתוחה);`}</li>
            <li>{`למודי תעודה מלאים המוכרים על ידי משרד העבודה, הרווחה והשירותים החברתיים.`}</li>
          </ol>
          <h2>{`לתשומת לב המועמדים`}</h2>
          <ul>
            <li>{`מועמדים שיעמדו בכל הקריטריונים וימלאו טופס הרשמה בהתאם להנחיות, יוזמנו למיון במקום ובמועד שיקבע וישלח לידיעת המועמדים. במידה ותוך שבועיים ממועד סיום ההרשמה לא נוצר עם המועמד/ת קשר, יש לפנות להנהלת הקרן טלפונית או באמצעות המייל.`}</li>
            <li>{`ברצוננו לידע אתכם, שתהליך המיון ב'קרן צביקה' כולל מספר שלבים ונמשך כחודשיים. לכן, על המועמדים להיות זמינים לפחות למשך 60 יום ממועד סיום ההרשמה.`}</li>
            <li>{`הנהלת הקרן מבקשת להדגיש כי תינתן עדיפות למועמד/ת שאינו מקבל תמיכה ו/או סיוע מכל גורם אחר.`}</li>
            <li>{`תהליך המיון ימשך עד סוף חודש אוגוסט. בסיום תהליך המיון תשלחנה הודעות לזוכים במלגה. מועמדים שמתעדים לנסוע לחו"ל בתקופה זו, יתבקשו להודיע להנהלת הקרן מבעוד מועד, כדי שנוכל לתאם אופן התקשרות בעת שהותכם בחו"ל.`}</li>
          </ul>
          <h2>{`הגדרת 'חייל בודד'`}</h2>
          <ol>
            <li>{`מי שהוריו גרים בחו"ל והוא/היא עלו לארץ לבדם לצורך גיוס לצה"ל (לא כולל ילדי שליחים);`}</li>
            <li>{`מי שהוריו בחרו להגר והוא/היא בחרו להישאר בארץ;`}</li>
            <li>{`מי שהוריו הביולוגיים בארץ, אך אין לו כל קשר עימם (בכפוף לדו"ח עו"ס והמלצת מחלקת רווחה);`}</li>
            <li>{`יתומים משני הורים.`}</li>
          </ol>
          <p>{`ניתן לפנות בכל שאלה באמצעות הטלפון שמספרו:_________________;`}</p>
          <p>{`או באמצעות דואר אלקטרוני לכתובת:____________________________.`}</p>
        </div>
      );
    }

    return (
      <div>
        <h2>{`Scholarships:`}</h2>
        <ol>
          <li>{`Scholarships for B.A. Degree in an approved academic institute in Israel.`}</li>
          <li>{`A scholarship for a higher academic degree i.e. M.A. or M.D. subject to the approval of the Fund's Board of Directors.`}</li>
        </ol>
        <h2>{`Application: `}</h2>
        <ol>
          <li>{`Application for scholarship should be submitted from ______ to ______.`}</li>
          <li>{`Application forms can be filled on the Fund's website or downloaded and sent by email to:  _________@__________.____.`}</li>
        </ol>
        <h2>{`Scholarships entitlement criteria:`}</h2>
        <ol>
          <li>{`The applicant meets the Ministry of Defense criteria for a "Lone Soldier".`}</li>
          <li>{`Within 5 years of discharge of applicant from military service.`}</li>
          <li>{`Enrolment to an approved academic institute in Israel, or a full-time Professional   Program approved by the Israel Higher Education Committee (excluding the Open University).`}</li>
          <li>{`Enrolment to full-time Professional studies, recognized and approved by Israel ministry of Labor, Social Affairs and Social Services. `}</li>
        </ol>
        <h2>{`Screening Process:`}</h2>
        <ul>
          <li>{`Applicants, who meet the above criteria and apply for a scholarship, will be invited for screening process within two weeks. Should an unexpected delay occur, the applicant is requested to contact the Fund by Email: ____________@_____._____ or phone: ___-_______`}</li>
          <li>{`The screening process includes several stages and will take throughout the end of August. `}</li>
          <li>{`Qualifying applicants will be informed not later than _______.`}</li>
          <li>{`Should an applicant expects to be unreachable from the date of submission, an early notification is required, in order to coordinate the communication.`}</li>
          <li>{`Please note: priority will be granted to applicants who do not have support from any other organization.`}</li>
        </ul>
        <h2>{`Ministry of Defense criteria for a "Lone Soldier":`}</h2>
        <ol>
          <li>{`Parents live abroad and he/she came to Israel alone for the purpose of military service (Not including children of emissaries);`}</li>
          <li>{`Parents decided to leave Israel but he/she decided to stay;`}</li>
          <li>{`Biological parents are in Israel but he/she have no contact with them (based on a social worker report and the welfare recommendation);`}</li>
          <li>{`Orphaned from both parents. `}</li>
        </ol>
      </div>
    );
  }

  GetTzvikaLevi() {
    if (this.props.styleLanguage === "cardHebrew") {
      return (
        <div>
          <h2>{`צביקה לוי – " האבא של החיילים הבודדים"`}</h2>
          <h3>{`"איש של אנשים ואמונה באדם"`}</h3>
          <p>
            {`צביקה נולד ומת בעמק יזרעאל. במהלך שבעים שנות חייו נותר צביקה קשור לעמק ונופיו. קיבוצניק, חקלאי, לוחם בצנחנים ופעיל חברתי.`}
          </p>
          <p>
            {`צביקה נולד בקיבוץ גבת בינואר 1948. אביו בנימין נולד בקווקז ואימו רבקה בפולין. הוריו נפגשו בקיבוץ גבת, היו ממקימיו והקימו בו משפחה. בתקופת הפילוג בתנועה הקיבוצית עזבו הוריו את גבת והיו ממקימי קיבוץ יפעת, בו התגורר צביקה עד יום מותו.`}
          </p>
          <p>
            {`צביקה היה מחובר לארץ ישראל, נופיה, אנשיה על כל גווניהם ובטחונה השוטף, בגופו ובנפשו. הוא  לחם במלחמת ההתשה, מלחמת יום כיפור, מלחמת שלום הגליל ובפעילות מבצעית ובביטחון השוטף שבין המלחמות. לאחר מלחמת של"ג זכה אף לקבל דרגת קצונה. מיום גיוסו ועד שנפל למשכב המשיך לשרת בשירות מילואים פעיל כחייל וכלוחם ועלה בסולם הדרגות. את דרגת האלוף משנה, קיבל מידי הרמטכ״ל בשנת 2016 כאות הוקרה מיוחד על תרומתו הרבה לצה''ל ועל פעילותו העניפה למען חיילות וחיילים בודדים - מפעל חייו.`}
          </p>
          <p>
            {`מותה הטרגי של בתו עפרי ז''ל בשנת 1983, הוביל את צביקה לתעל את האבל והעצב לפעילות ציבורית למען החברה אותה כל כך אהב. בהתייעצות עם הרמטכ''ל דאז רא''ל רפאל איתן, נולדה והוקמה מסגרת צבאית חדשה - "נערי רפול". המטרה היתה איתור וגיוס נערים ונערות אשר מסיבות של אי התאמה קיבלו פטור מגיוס לצה''ל.  צביקה, שהיה אז צעיר בן 35 ואב לילדים צעירים, לקח על עצמו את ניהול וריכוז המיזם, תוך שהוא מלווה באופן אישי וצמוד כל אחד ואחת.`}
          </p>
          <p>
            {`אך עבור צביקה לא היה די בכך. כעשור לאחר מכן, בעידוד ותמיכה של ראש אגף כח אדם בצה"ל דאז, האלוף יורם יאיר, החל צביקה במיזם של איש אחד, שהפך עם השנים למהות ומרכז חייו - ליווי צמוד וטיפול אישי לחיילות וחיילים בודדים המשרתים בצה״ל. במסגרת המיזם פעל גם כנציג התנועה הקיבוצית, ודאג לשילובם בצה''ל של בוגרי תנועת ''צבר'', שעלו לארץ כחיילים בודדים. במהלך השנים טיפל צביקה טיפול אישי, הדוק וצמוד באלפים רבים של חיילות וחיילים בודדים ששרתו בצה"ל, דאג עבורם למקום מגורים, לציוד בסיסי ולאירוח בשבתות וחגים. בתחושת שליחות עמוקה, מסירות אין קץ ואהבה עצומה העמיד צביקה את עצמו בכל יום ובכל שעה לרשות החיילות והחיילים הבודדים. פעמים רבות נזעק בשעות לא שעות ויצא מביתו לתמוך בחייל או חיילת במצוקה. פעילותו זו זיכתה אותו במהרה בשם שכה היטיב להגדירו – "האבא של החיילים הבודדים".`}
          </p>
          <p>
            {`בנוסף לטיפול בחיילות וחיילים בודדים, פעל צביקה ב'קרן הצנחנים - החברים של אבא'. קרן המטפלת באלמנות ויתומים של המערך המוצנח. צביקה אף ראה חשיבות בהנצחת הנופלים. בלוויות, אזכרות וטקסי זיכרון דאג להניח על קברי הנופלים ענף של שיח כותנה, שסימל עבורו בצבעו הלבן טוהר וטוב. עם השנים הפך ענף הכותנה לסמל פועלו של צביקה. מעבר לכל אלו פעל גם למען אוכלוסיות שונות ובסיוע במקרים מיוחדים.`}
          </p>
          <p>
            {`במסגרת פעילותו הרבה, יצר צביקה קשרים רבים בארץ ובחו''ל, זאת על מנת לשלב גורמים רבים ככל הניתן במיזם ייחודי זה. בין היתר פעל צביקה לאתר מקורות כספיים שיבטיחו סיוע מירבי לצעירים אלו, כדי שיוכלו להשלים צבא, לרכוש השכלה ולבנות חיים עצמאיים, מלאים ומשמעותיים בארץ ישראל.`}
          </p>
          <p>
            {`על מפעל חיים זה בו פעל צביקה מיום הקמתו, זכה צביקה בשנת 2017 בפרס ישראל למפעל חיים. `}
          </p>
          <p>
            {`בשנת 2016 חלה צביקה ב– A.L.S (ניוון שרירים). בעזרת נחישות וכוח רצון הצליח צביקה גם בהיותו מרותק למיטת חוליו, תוך מאבק עיקש במחלה ובהשלכותיה, להתגבר על מגבלות המחלה, לתקשר עם הסביבה ולהמשיך ולפעול ללא לאות למען החיילים הבודדים.`}
          </p>
          <p>{`בדצמבר 2018 לאחר מאבק ממושך ועיקש, הלך צביקה לעולמו, אך קולו לא נדם.`}</p>
        </div>
      );
    }

    return (
      <div>
        <h2>{`Commemorating Tzvika Levi – 'Father of the Lone Soldiers'`}</h2>
        <h3>{`"A people's person with faith in mankind"`}</h3>
        <p>
          {`Tzvika Levi was born in Kibbutz Gvat, Israel in 1948. His Father was born in the Caucasus (a European region between the Black Sea and the Caspian Sea) and his mother was born in Poland. His parents, who were among the founders of the Zionist movement, met in Kibbutz Gvat in the Jezre'el Valley, Northern Israel and soon became a family. A few years later, during the rift within the Kibbutz movement, The family left Gvat and were the founders of Kibbutz Yifat, where Tzvika lived most of his adult life.`}
        </p>
        <p>
          {`Tzvika was a "Kibbutznik"** his entire life, a farmer, a paratrooper in the IDF and a social activist. He fought in the war of Attrition, the ‘Yom Kippur War’ and the ‘First Lebanon War’, after which he received an officer's rank without attending the qualifying course. Throughout the years Tzvika continued to serve in the IDF reserve force. He gradually climbed up the ranks, from a junior officer, always with full dedication and commitment, up to the rank of Colonel in 2016 – a rank granted as special recognition of his extraordinary contribution to the IDF.`}
        </p>
        <p>
          {`Following the tragic death of his youngest daughter Ofri (1983), Tzvika channeled his grief and sadness towards social activity. After a meeting with then IDF's Chief of the General Staff, Raffael Eitan, Tzvika took upon himself a new project - "The Boys of Rafful", which involved locating problematic youth who were dismissed from military service, and recruiting them to an alternative military service. `}
        </p>
        <p>
          {`A decade later Tzvika, with the support of the IDF Head of Human Resources, Major General Yoram Yair, initiated a project which later became the hallmark of his life, i.e. helping and caring for ‘lone soldiers’. In this project Tzvika operated as the representative of the Kibbutz Movement, to integrate the "Tzabar Movement" graduates, who made Aliyah without their families, and served as ‘lone soldiers’ in the IDF.`}
        </p>
        <p>
          {`Tzvika's sense of mission, his devotion and the enormous amount of love he bestowed upon these young soldiers quickly named him as: "Father of the Lone Soldiers".`}
        </p>
        <p>
          {`Throughout the years, Tzvika worked continuously and successfully built a significant network of connections in Israel and abroad. The goal was to raise the funds required to guarantee maximum support to the ‘lone soldiers’.`}
        </p>
        <p>
          {`For this enterprise, to which Tzvika dedicated his life, he received the honorable "Israel Prize for a Lifetime Achievement" in 2017.`}
        </p>
        <p>
          {`While taking care of the lone soldiers, Tzvika also supported families of soldiers killed in action, as well as helped groups and individuals with special needs.`}
        </p>
        <p>
          {`In 2016 Tzvika was diagnosed with A.L.S. While confined to bed, Tzvika managed with endless persistence, perseverance and strong willpower to overcome physical limitation to communicate with his surroundings and continue working tirelessly for the lone soldiers.`}
        </p>
        <p>{`Tzvika passed away on December 2018. His voice and legacy will forever stand.`}</p>
        <p className="commentParagraph">
          {`** ‘Kibbutznik’ – A man lives in a Kibbutz, and/or has the spirit of a man lives in a Kibbutz.`}
        </p>
      </div>
    );
  }

  render() {
    return <div className={this.props.styleLanguage}>{this.GetParagraph()}</div>;
  }
}

export default Paragraph;

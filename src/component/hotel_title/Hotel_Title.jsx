import css from "./Hotel_Title.module.css"
import photo1 from "../../assets/1 (1).png"
import photo2 from "../../assets/2 (1).png"
import photo3 from "../../assets/1 (2).png"
import photo5 from "../../assets/no photo.png"
import Data from "../../Data"

const Hotel_Title = () => {
    return (
        <section className="container">
            <div className={css.row}>

                <div className={css.row_left}>
                    <h2>Миссия - За гранью обычного</h2>
                    <p className={css.text}>
                        Мы видим свое предназначение в том,
                        чтобы объединить мир через истинное кыргызское
                        гостеприимство и национальную культуру. Через
                        улучшение качества сервиса, обеспечивать процветание
                        компании и сотрудников. Главная цель - превзойти
                        ожидания наших гостей. Орион - больше, чем отель! Мы видим
                        свое предназначение в том, чтобы объединить мир через истинное кыргызское
                        гостеприимство и национальную культуру. Через улучшение
                        качества сервиса, обеспечивать процветание компании и сотрудников.
                    </p>
                    <div className={css.photo}>
                        <img src={photo1} alt="" />
                        <img src={photo2} alt="" />
                    </div>
                    <h2>Место для деловых встреч</h2>
                    <p className={css.text}>
                        В отеле «Орион» есть не только уютные номера и прекрасный ресторан, но и высококлассный
                        конференц-зал, который поразит своей современной аудиовизуальной техникой и функциональностью.
                        Он является идеальным местом для проведения деловых встреч, конференций и частных ужинов. <br /><br />
                        Конференц-зал «Ак-Сай» имеет площадь в 123 квадратных метра, а его вместимость составляет
                        от 35 до 100 человек в зависимости от рассадки. П-образная рассадка вмещает до 30 человек,
                        а в театральной версии зала могут поместиться до 100 гостей.
                    </p>
                    <img src={photo3} alt="" />
                    <p className={css.text}>В отеле «Орион» - это не только место для отдыха
                        и проживания, но и идеальное место для проведения
                        деловых и культурных мероприятий в самом центре Бишкека.
                        Конференц-зал - прекрасный выбор для тех, кто ищет место для проведения
                        важных мероприятий в комфортном и уютном атмосферном. Современное оборудование и внимательный
                        персонал гарантируют, что каждое мероприятие.
                    </p>
                    <div className={css.teg}>
                        <h4 className={css.label}>теги:</h4>
                        <div>
                            <span className={css.tegis}>отель</span>
                            <span className={css.tegis}>роскошный отдых</span>
                            <span className={css.tegis}>отдых</span>
                            <span className={css.tegis}>место встречи</span>
                        </div>
                    </div>

                    <div className={css.otziv}>
                        <h4 className={css.label}>Отзывы</h4>
                        <input type="text" placeholder="Имя и фамилия" className={css.input1} />
                        <input type="text" placeholder="Напишите отзыв о статье" className={css.input2} />
                        <button>Добавить</button>
                    </div>

                    <div className={css.user}>
                        <div className={css.user_name}>
                            <img src={photo5} alt="" />
                            <div className={css.user_title}>
                                <p>Нурзида Асанбекова</p>
                                <span>7 марта 2024</span>
                            </div>
                        </div>
                        <p className={css.opa}>
                            Много где бывал, много отелей видел. Орион меня удивил. 
                            Огромный бассейн, хамам и сауна. Идеальная чистота , в номере также.
                             Завтрак супер! Номер люкс огромный, 70 м2 с гостевой комнатой. Постельное 
                             белье👍, никаких запахов, хотя всюду ковровое покрытие.
                             Персонал вышколен!молодцы!  Удачи ребятам, обязательно приедем еще.
                        </p>
                    </div>

                    <div className={css.user}>
                        <div className={css.user_name}>
                            <img src={photo5} alt="" />
                            <div className={css.user_title}>
                                <p>Нурзида Асанбекова</p>
                                <span>7 марта 2024</span>
                            </div>
                        </div>
                        <p className={css.opa}>
                            Много где бывал, много отелей видел. Орион меня удивил. 
                            Огромный бассейн, хамам и сауна. Идеальная чистота , в номере также.
                             Завтрак супер! Номер люкс огромный, 70 м2 с гостевой комнатой. Постельное 
                             белье👍, никаких запахов, хотя всюду ковровое покрытие.
                             Персонал вышколен!молодцы!  Удачи ребятам, обязательно приедем еще.
                        </p>
                    </div>

                </div>

                <div className={css.row_right}>
                    <h2>Читайте также:</h2>
                    {Data.map((el,index) => (
                        <div key={index} className={css.right}>
                            <img src={el.image} alt="" />
                            <div>
                               <p className={css.name}>{el.name}</p>
                            <p className={css.title}>{el.title}</p>
                            <span className={css.date}>{el.date}</span> 
                            </div>
                            
                        </div>
                    ))}
                    
                </div>



            </div>
        </section>
    )
}

export default Hotel_Title
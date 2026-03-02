import clsx from "clsx"
import {FC} from "react"

import {PageLayout} from "../../layouts"

import styles from "./index.module.scss"

interface IHome {}

export const Home: FC<IHome> = () => {
  return (
    <PageLayout>
      <div id="home" className={clsx(styles.page)}>
        <div className={clsx(styles.page_content)}>
          <div className={clsx(styles.page_content_inner)}>
            <div className={clsx(styles.home_hero)}>
              <div className={clsx(styles.home_hero_info)}>
                <div className={clsx(styles.home_hero_info_title)}>
                  Методична комісія автомобільних та металообробних професій
                </div>
                <div className={clsx(styles.home_hero_info_des)}>
                  <p>
                    Навчаючись у нас, Ви здобудете необхідні знання, навички та компетентності для успішної кар’єри у сфері автомобільного транспорту, металообробки та флексографічного друкування. Ви опануєте сучасні технології діагностики, ремонту та обслуговування автомобілів, а також методи металообробки, необхідні для роботи в машинобудуванні та промисловості. Ви також зможете вивчити повний цикл створення сучасної упаковки та етикетки: від підготовки друкарських форм і налаштування фарбових систем до роботи з автоматизованими лініями.
                  </p>
                  <p>
                    Випускники усіх спеціальностей підготовлені до ремонтно-експлуатаційної, виробничої та організаційної діяльності, а це запорука успішного працевлаштування.
                  </p>
                </div>
              </div>
            </div>
            <div className={clsx(styles.home_section)}>
              <div className={clsx(styles.home_section_title)}>
                <div className={clsx(styles.home_section_title_inner)}>
                  Перспективи навчання у нашому коледжі за
                  <br/> автомобільною, металообробною та поліграфічною галузями
                </div>
              </div>
              <div className={clsx(styles.home_prospects)}>
                <div className={clsx(styles.home_prospects_item)}>
                  <div className={clsx(styles.home_prospects_item_title)}>
                    Після завершення навчання випускники можуть займати такі первинні посади:
                  </div>
                  <div className={clsx(styles.home_prospects_item_prospects)}>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      🚗 Автомобільні професії:
                      <ul>
                        <li>Автослюсар</li>
                        <li>Автомеханік</li>
                        <li>Водій автотранспортних засобів</li>
                        <li>Оператор діагностичного обладнання</li>
                        <li>Майстер з ремонту автомобілів</li>
                      </ul>
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      👨🏻‍🔧 Металообробні професії:
                      <ul>
                        <li>Токар</li>
                        <li>Фрезерувальник</li>
                        <li>Слюсар-ремонтник</li>
                        <li>Зварювальник</li>
                        <li>Верстатник широкого профілю</li>
                      </ul>
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      📄 Професії поліграфічної галузі:
                      <ul>
                        <li>Друкар флексографічного друкування</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={clsx(styles.home_prospects_item)}>
                  <div className={clsx(styles.home_prospects_item_title)}>
                    Підготовка фахівців включає вивчення комплексу професійно-орієнтованих дисциплін, зокрема:
                  </div>
                  <div className={clsx(styles.home_prospects_item_prospects)}>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      🔧 Автомобільна справа:
                      <ul>
                        <li>Будова та експлуатація автомобілів</li>
                        <li>Діагностика та ремонт автотранспорту</li>
                        <li>Автомобільна електроніка та мікропроцесорні системи</li>
                        <li>Технічне обслуговування автомобілів</li>
                        <li>Основи керування автомобілем</li>
                      </ul>
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      ⚙ Металообробка:
                      <ul>
                        <li>Основи машинобудування</li>
                        <li>Методи обробки металів</li>
                        <li>Технологія механічної обробки</li>
                        <li>Програмування верстатів із ЧПУ</li>
                        <li>Зварювальні технології</li>
                      </ul>
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      🖨 Друкар флексографічного друкування:
                      <ul>
                        <li>Технологія флексографічного друку</li>
                        <li>Комп'ютеризовані системи друкарського обладнання</li>
                        <li>Загальна поліграфія</li>
                        <li>Виробнича графіка</li>
                        <li>Матеріалознавство</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={clsx(styles.home_prospects_item)}>
                  <div className={clsx(styles.home_prospects_item_title)}>
                    Особлива увага приділяється практичному навчанню, яке включає:
                  </div>
                  <div className={clsx(styles.home_prospects_item_prospects)}>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      Навчання на сучасному обладнанні
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      Практику на виробничих підприємствах та автосервісах
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      Використання комп’ютерних технологій у ремонті та металообробці, а також під час флексографічного друкування
                    </div>
                    <div
                      className={clsx(
                        styles.home_prospects_item_prospects_item,
                      )}
                    >
                      Переддипломну практику з можливістю працевлаштування
                    </div>
                    <div
                    >
                      Практичне навчання сприяє формуванню професійної майстерності, відповідальності та готовності до самостійної роботи на сучасному виробництві.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

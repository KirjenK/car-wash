import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import styles from './yandexMap.module.css';

export default function YandexMap(): JSX.Element {
  return (
    <div className={styles.wrapper}>
 <YMaps>
    <div className={styles.mapBlockWrapper}>
      <h3>Наш адрес</h3>
      <h4 className={styles.h4}>г. Санкт-Петербург, Невский пр-кт 66/68</h4>
      <h5>Телефон: +7 (812) 523-42-33 </h5>
      <Map
        width={832}
        height={320}
        defaultState={{
       center: [59.933735, 30.341991],
       zoom: 13,
       controls: ['zoomControl', 'fullscreenControl'],
       }}
        modules={['geoObject.addon.balloon', 'geoObject.addon.hint',
       'control.ZoomControl', 'control.FullscreenControl']}
      >
      <Placemark
        geometry={[59.933735, 30.341991]}
        options={{
          preset: 'islands#oliveStretchyIcon', // список темплейтов на сайте яндекса
          iconColor: 'violet', // цвет иконки
        }}
        properties={{
          iconContent: 'Bumblebee', // название
          hintContent: '<em>Подробная инфа по клику</em>',
          balloonContent: `<section class="my-balloon">
          <h4>Bumblebee car wash</h4>
          <p> Санкт-Петербург </p>
          <p> Невский проспект, д.66-68 </p>
          <p>Режим работы: 24 часа</p>
          <p class="telephoneNumber">Тел: +7 (812) 523-42-33</p>
        </section>`
        }}
      />
      </Map>
    </div>
 </YMaps>
    </div>
  );
}

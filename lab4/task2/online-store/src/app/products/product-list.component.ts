import { Component } from '@angular/core';
import { Product } from '../models/product.models';
import { ProductCardComponent } from './product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      description: 'Apple iPhone 15 Pro 256Gb серый.',
      price: 699990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h5b/86302542495774.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h5b/86302542495774.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h37/ha8/86319883452446.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h9b/h62/86319883485214.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-seryi-113138213/?c=750000000'
    },
    {
        id: 2,
        name: ' MacBook Air 13 ',
        description: 'Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS',
        price: 439000,
        rating: 4.5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-large',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-large',
                'https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/h3a/h0d/64213216755742.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000'
    },
    {
        id: 3,
        name: 'Наушники Apple AirPods Pro 3 белый',
        description: 'Наушники Apple AirPods Pro 3 — это идеальный выбор для тех, кто ценит превосходное качество звука и удобство использования.',
        price: 129000,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p89/pc5/64466278.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p89/pc5/64466278.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p6d/pc5/64466277.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p12/pc8/64466280.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-3-belyi-145554533/?c=750000000'
    },
    {
        id: 4,
        name: 'Телевизор Samsung QE75QN85FAUXCE 191 см черный',
        description: 'Samsung QE75QN85FAUXCE — это потрясающий QLED-телевизор с диагональю 75 дюймов (191 см), который подарит вам невероятное качество изображения и захватывающий звук!',
        price: 1050000,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pfd/62900922.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pef/pfd/62900922.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p44/pfe/62900925.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p8a/pfe/62900933.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/samsung-qe75qn85fauxce-191-sm-chernyi-145236849/?c=750000000'
    },
    {
        id: 5 ,
        name: 'Телевизор Samsung QE55LS03DAUXCE 140 см черный',
        description: 'Телевизор Samsung QE55LS03DAUXCE — это высококачественное решение для вашего дома, которое сочетает в себе современные технологии и стильный дизайн.',
        price: 630644,
        rating: 4.3,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h63/h32/86147861086238.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h63/h32/86147861086238.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/samsung-qe55ls03dauxce-140-sm-chernyi-119902386/?c=750000000'
    },
    {
        id: 6,
        name: 'Dyson Airwrap Co-Anda 2X стайлер фиолетовый, сиреневый',
        description: 'Ветер в два раза сильнее, чем у двигателя Dyson Hyper - Dimium 2. Идеальный локон. Быстрее высыхает. Теперь это без чрезмерного теплового повреждения',
        price: 331000,
        rating: 4.6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p2f/pa5/40929286.png?format=gallery-large',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p2f/pa5/40929286.png?format=gallery-large',
            'https://resources.cdn-kaspi.kz/img/m/p/p1c/p06/40929288.jpeg?format=gallery-large',
            'https://resources.cdn-kaspi.kz/img/m/p/p41/p62/40929294.jpeg?format=gallery-large'
        ],
        link: 'https://kaspi.kz/shop/p/dyson-airwrap-co-anda-2x-stailer-fioletovyi-sirenevyi-138973740/?c=750000000'
    },
    {
        id: 7,
        name: 'Пылесос Dyson V16 Piston Animal Submarine золотистый, черный',
        description: 'Два вращающихся конических валика сразу отправляют волосы в контейнер . Автоматическая адаптация к типу пола',
        price: 544361,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p59/p7c/71228703.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p59/p7c/71228703.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p75/p7c/71228704.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p92/p7c/71228705.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/dyson-dyson-v16-piston-animal-submarine-zolotistyi-chernyi-147580156/?c=750000000'
    },
    {
        id: 8,
        name: 'Аэрогриль Tefal Easy Fry Max EY245B10 черный',
        description: 'Вкусные блюда с хрустящей корочкой готовятся быстрее, чем в духовке.',
        price: 72990,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pa0/p5a/62446122.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pa0/p5a/62446122.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pe2/p56/62446135.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p37/p57/62446132.png?format=gallery-large'
        ],
        link: 'https://kaspi.kz/shop/p/tefal-easy-fry-max-ey245b10-chernyi-117249296/?c=750000000'
    },
    {
        id: 9 ,
        name: 'Смартфон Apple iPhone 15 128Gb черный',
        description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн',
        price: 407000,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'
    },
    {
        id: 10,
        name: 'Гладильная система LAURASTAR Smart U черный',
        description: 'Этот утюг с парогенератором сочетает в себе высокую мощность и инновационные технологии',
        price: 1479999,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h4b/hf2/63760928833566.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h4b/hf2/63760928833566.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h0c/hcf/63760930013214.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h90/he1/63760931192862.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/laurastar-smart-u-chernyi-3801166/?c=750000000'
    }
  ];
}
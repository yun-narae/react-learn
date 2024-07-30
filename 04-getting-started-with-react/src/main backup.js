// 실습
import {createElement} from './lib/virtual/index.js';
import {createRoot} from './lib/virtual-dom/index.js';

// TODO: <ul> 가상요소 생성
// API : createElement

const list = createElement('ul', { className:'architectures', lang: 'en' },
    createElement('li', { className: 'item'},
        createElement('img', { src: '/architectures/architecture-2.jpg', alt: ''}),
        createElement('span', {className: 'content'}, 'Climatology')
    ),
    createElement('li', { className: 'item'},
        createElement('img', { src: '/architectures/architecture-2.jpg', alt: ''}),
        createElement('span', {className: 'content'}, 'Climatology')
    ),
    createElement('li', { className: 'item'},
        createElement('img', { src: '/architectures/architecture-2.jpg', alt: ''}),
        createElement('span', {className: 'content'}, 'Climatology')
    ),
);

root.render(list);

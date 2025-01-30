import { levelType } from '../type/levelType';

export const levels: levelType[] = [
  {
    html: `
<div class='plate'>
  <img src='/salmon.svg' alt='salmon' class='h-16 w-16'/>    
</div>
<img src='/sushi.svg' alt='sushi' class='h-16 w-16'/>    
<img src='/onigiri.svg' alt='onigiri' class='h-16 w-16'/>    
<div class='bento'>
  <img src='/sushi.svg' alt='sushi' class='h-16 w-16'/>    
</div>`,
    selector: 'sushi',
    boardMarkup: `<plate>
    <salmon />
</plate>
<sushi />
<onigiri />
<bento>
    <sushi />
</bento>`,
    todo: 'Ambil semua sushi',
    hintSelector: 'element selector',
    hintDesc: 'Element selector adalah selector yang digunakan untuk memilih elemen berdasarkan nama elemen tersebut.',
    hintLink: 'https://www.w3schools.com/css/css_selectors.asp',
  },
  {
    html: `
<div class='plate'>
  <img src='/shrimp.svg' alt='shrimp' class='h-16 w-16'/>    
</div>
<img src='/shrimp.svg' alt='shrimp' class='h-16 w-16'/>    
<img src='/tuna.svg' alt='tuna' class='h-16 w-16'/>`,
    selector: 'plate shrimp',
    boardMarkup: `<plate>
    <shrimp />
</plate>
<shrimp />
<tuna />`,
    todo: 'Ambil udang di atas piring',
    hintSelector: 'Descendant selector',
    hintDesc:
      'Descendant selector adalah selector yang digunakan untuk memilih elemen yang berada di dalam elemen lain.',
    hintLink: 'https://www.w3schools.com/css/css_combinators.asp',
  },
  {
    html: `
<div class='plate'>
  <img src='/egg.svg' alt='egg' class='h-16 w-16'/>
</div>
<div class='plate'>
  <img src='/egg.svg' alt='egg' class='h-16 w-16'/>
</div>
<div class='plate'>
  <img src='/onigiri.svg' alt='onigiri' class='h-16 w-16'/>
</div>`,
    selector: '.asin',
    boardMarkup: `<plate>
    <egg class='asin' />
</plate>
<plate>
    <egg />
</plate>
<plate>
    <onigiri />
</plate>`,
    todo: 'Ambil telur asin',
    hintSelector: '.class selector',
    hintDesc: 'Class selector adalah selector yang digunakan untuk memilih elemen berdasarkan nama class tersebut.',
    hintLink: 'https://www.w3schools.com/cssref/sel_class.php',
  },
  {
    html: `
<img src='/onigiri.svg' alt='onigiri' class='h-8 w-8'/>
<div class='bento'>
  <img src='/salmon.svg' alt='salmon' class='h-16 w-16'/>    
</div>
<img src='/onigiri.svg' alt='onigiri' class='h-16 w-16'/>
<img src='/onigiri.svg' alt='onigiri' class='h-8 w-8'/>
<div class='bento'>
  <img src='/tuna.svg' alt='tuna' class='h-8 w-8'/>    
</div>`,
    selector: 'onigiri.small',
    boardMarkup: `<onigiri class='small' />
<bento>
    <salmon />
</bento>
<onigiri />
<onigiri class='small' />
<bento>
    <tuna />
</bento>`,
    todo: 'Ambil onigiri ukuran kecil',
    hintSelector: 'Gabungan Element dan Class selector',
    hintDesc:
      'Gabungan Element dan Class selector adalah selector yang digunakan untuk memilih elemen berdasarkan nama elemen dan class tersebut.',
    hintLink: 'https://www.w3schools.com/cssref/sel_class.php',
  },
  {
    html: `
<div class='plate'>
  <img src='/egg.svg' alt='egg' class='h-16 w-16'/>    
</div> 
<div class='plate'>
  <img src='/tuna.svg' alt='tuna' class='h-16 w-16'/>    
</div> 
<div class='bento'>
  <img src='/egg.svg' alt='egg' class='h-16 w-16'/>    
</div> 
<img src='/rice.svg' alt='rice' class='h-16 w-16'/>    
<div class='bento'>
  <img src='/egg.svg' alt='egg' class='h-16 w-16'/>    
</div>`,
    selector: 'bento egg.asin',
    boardMarkup: `<plate>
    <egg />
</plate>
<plate>
    <shrimp />
</plate>
<bento>
    <egg class='asin' />
</bento>
<bento>
    <egg />
</bento>`,
    todo: 'Ambil semua telur asin di bento box',
    hintSelector: 'Gabungan Descendant dan Class Selector',
    hintDesc:
      'Gabungan Descendant dan Class Selector adalah selector yang digunakan untuk memilih elemen berdasarkan nama elemen dan class tersebut.',
    hintLink: 'https://www.w3schools.com/css/css_combinators.asp',
  },
  {
    html: `
<img src='/egg.svg' alt='egg' class='h-16 w-16'/>    
<img src='/tuna.svg' alt='tuna' class='h-16 w-16'/>    
<img src='/onigiri.svg' alt='onigiri' class='h-16 w-16'/>    
<img src='/nori.svg' alt='nori' class='h-16 w-16'/>    
<img src='/shrimp.svg' alt='shrimp' class='h-16 w-16'/>    `,
    selector: 'onigiri, nori',
    boardMarkup: `<egg />
<tuna />
<onigiri />
<nori />
<shrimp />`,
    todo: 'Ambil onigiri dan nori',
    hintSelector: 'Comma Combinator',
    hintDesc: 'Comma Combinator adalah selector yang digunakan untuk memilih beberapa elemen sekaligus.',
    hintLink: 'https://www.w3schools.com/cssref/sel_element_comma.php',
  },
  {
    html: `
<div class='plate'>
  <img src='/egg.svg' alt='egg' class='h-16 w-16'/>    
</div> 
<div class='bento'>
  <img src='/tuna.svg' alt='tuna' class='h-16 w-16'/>    
</div> 
<div class='bento'>
  <img src='/salmon.svg' alt='salmon' class='h-16 w-16'/>    
</div> 
<img src='/rice.svg' alt='rice' class='h-16 w-16'/>    
<div class='plate'>
  <img src='/shrimp.svg' alt='shrimp' class='h-16 w-16'/>    
</div>`,
    selector: '*',
    boardMarkup: `<plate>
    <egg />
</plate>
<bento>
    <tuna />
</bento>
<bento>
    <salmon />
</bento>
<rice />
<plate>
    <shrimp />
</plate>`,
    todo: 'Ambil semua makanan',
    hintSelector: 'Universal Selector',
    hintDesc: 'Universal selector adalah selector yang digunakan untuk memilih semua elemen di dalam dokumen.',
    hintLink: 'https://www.w3schools.com/cssref/sel_all.php',
  },
  {
    html: `
<div class='bento'>
  <img src='/onigiri.svg' alt='onigiri' class='h-16 w-16'/>    
</div>
<div class='bento'>
  <img src='/nori.svg' alt='nori' class='h-16 w-16'/>    
</div>
<img src='/rice.svg' alt='rice' class='h-16 w-16'/>    
<div class='bento'>
  <img src='/tuna.svg' alt='tuna' class='h-16 w-16'/>    
</div>`,
    selector: 'bento *',
    boardMarkup: `<bento>
    <onigiri />
</bento>
<bento>
    <nori />
</bento>
<rice />
<bento>
    <tuna />
</bento>`,
    todo: 'Ambil semua bento box',
    hintSelector: 'Kombinasi Universal Selector',
    hintDesc:
      'Kombinasi universal selector adalah selector yang digunakan untuk memilih semua elemen di dalam elemen lain.',
    hintLink: 'https://www.w3schools.com/cssref/sel_all.php',
  },
];

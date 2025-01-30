import { levelType } from '../type/levelType';

export const levels: levelType[] = [
  {
    html: `<div class='h-25 w-25 rounded-full bg-[#2b2b2b]'></div>
<div class='h-25 w-25 rounded-full bg-[#2b2b2b]'></div>
<div class='h-25 w-25 rounded-full bg-[#2b2b2b]'></div>
<div class='h-25 w-25 rounded-full bg-[#2b2b2b]'></div>
<div class='h-25 w-25 rounded-full bg-[#2b2b2b]'></div>
    `,
    selector: 'hello',
    boardMarkup: `<plate>
  <sushi></sushi>
  <sushi></sushi>
  <sushi></sushi>
  <sushi></sushi>
  <sushi></sushi>
</plate>
    `,
    todo: 'Ambil semua sushi',
    hintSelector: ':nth-child(2)',
    hintDesc: 'Gunakan pseudo-class `:nth-child()`',
    hintLink: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child',
  },
];

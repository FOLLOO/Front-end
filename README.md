This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

SOme more for me

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.




##Some functions for me 

#What we will have on fufuture
```js
/**
   *
   * @param balance - желаемый вклад
   * @param ac - наличие акций
   * @param price - цена акции сред
   * @constructor
   *
   * @example Arcti(100000, 78, 585)
   */
  function Arcti (balance, ac, price){
    // const price = 585

    const div = [2, 4, 5]
    const one = price / 100;
    const firstBuy = Math.floor( balance / price)
    ac += firstBuy;
    balance -= firstBuy * price

    for (let i = 0; i < 10; i++) {
      console.log('year', i, 'acksi', ac, 'balance', balance );
      for(let j = 0; j < div.length; j++) {
        balance += (div[j] * one) * ac;
        if (balance >= price) {
          let buy = Math.floor( balance / price)
          balance -= buy * price;
          ac += buy;
        }
        console.log('balance',balance,'acii', ac,  'chart', j)
      }
    }
    return console.log('END', '\n', 'balance', balance, 'ac', ac);
  }
  Arcti(100000, 78, 585)
```


#Сложный процент
 
```js
function doxod(start, end, year, day) { let result = (end - start) / start * 365 / (year? year*365 + day day); console.log(result * 100);
}

doxod(300000,446000,2,0)
```

#Денежный поток 
```js
function CashFlow(inc, expen){
 return console.log(inc – expen)
}
```

#Долговая нагрузка 
```js
function leverageRatio(inc, pay) {

return console.log(pay / inc) 
}
```


Доход с поправкой на инфляцию 
```js
/**
*@example 
*So, if you have earned a 9%
* investment return when the rate
* of inflation is 4%, your
* inflation-adjusted return would be:
*
*[(1 + 0.09/ 1+ 0.04) – 1] x 100 = 4.80%
*/

function InflationAdjusted(inflation, investment){
return console.log(((1 + investment / 1 + inflation) – 1) x 100)
}

```


The rule of 72

Some interesting thing if u wanna to take double-capital from your capital u have to do this calculation 
```js
72/year = 7,2% year return from your capital for double-capital
```

If u have a second ( procent of your capital return) u also can calculate how many years of investing witch this procent u should return for double your capital
```js
future value = present value * (1+ interest rate)¹*n
```

N - it is hw many year of investing 

interest - ключевая ЦБ 

Futer value - your capital in future
Present value - your capital now
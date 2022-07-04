const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');
const hrs = document.getElementById('hrs');
const hrs1 = document.getElementById('hrs1');
const hrs2 = document.getElementById('hrs2');
const hrs3 = document.getElementById('hrs3');
const hrs4 = document.getElementById('hrs4');
const hrs5 = document.getElementById('hrs5');
const title1 = document.getElementById('title1');
const title2 = document.getElementById('title2');
const title3 = document.getElementById('title3');
const title4 = document.getElementById('title4');
const title5 = document.getElementById('title5');
const title6 = document.getElementById('title6');
const subtitle1 = document.getElementById('subtitle1');
const subtitle2 = document.getElementById('subtitle2');
const subtitle3 = document.getElementById('subtitle3');
const subtitle4 = document.getElementById('subtitle4');
const subtitle5 = document.getElementById('subtitle5');
const subtitle6 = document.getElementById('subtitle6');

async function info() {
    const resp = await fetch('data.json');
    const data = await resp.json();

    daily.addEventListener('click', () => {
        daily.classList.add('active');
        weekly.classList.remove('active');
        monthly.classList.remove('active');

        hrs.textContent = `${data[0].timeframes.daily.current}hrs`;
        hrs1.textContent = `${data[1].timeframes.daily.current}hrs`;
        hrs2.textContent = `${data[2].timeframes.daily.current}hrs`;
        hrs3.textContent = `${data[3].timeframes.daily.current}hrs`;
        hrs4.textContent = `${data[4].timeframes.daily.current}hrs`;
        hrs5.textContent = `${data[5].timeframes.daily.current}hrs`;

        title1.textContent = data[0].title;
        title2.textContent = data[1].title;
        title3.textContent = data[2].title;
        title4.textContent = data[3].title;
        title5.textContent = data[4].title;
        title6.textContent = data[5].title;

        subtitle1.textContent = `Last Week - ${data[0].timeframes.daily.previous}hrs`;
        subtitle2.textContent = `Last Week - ${data[1].timeframes.daily.previous}hrs`;
        subtitle3.textContent = `Last Week - ${data[2].timeframes.daily.previous}hrs`;
        subtitle4.textContent = `Last Week - ${data[3].timeframes.daily.previous}hrs`;
        subtitle5.textContent = `Last Week - ${data[4].timeframes.daily.previous}hrs`;
        subtitle6.textContent = `Last Week - ${data[5].timeframes.daily.previous}hrs`;
    });

    weekly.addEventListener('click', () => {
        weekly.classList.add('active');
        monthly.classList.remove('active');
        daily.classList.remove('active');

        hrs.textContent = `${data[0].timeframes.weekly.current}hrs`;
        hrs1.textContent = `${data[1].timeframes.weekly.current}hrs`;
        hrs2.textContent = `${data[2].timeframes.weekly.current}hrs`;
        hrs3.textContent = `${data[3].timeframes.weekly.current}hrs`;
        hrs4.textContent = `${data[4].timeframes.weekly.current}hrs`;
        hrs5.textContent = `${data[5].timeframes.weekly.current}hrs`;

        title1.textContent = data[0].title;
        title2.textContent = data[1].title;
        title3.textContent = data[2].title;
        title4.textContent = data[3].title;
        title5.textContent = data[4].title;
        title6.textContent = data[5].title;

        subtitle1.textContent = `Last Week - ${data[0].timeframes.weekly.previous}hrs`;
        subtitle2.textContent = `Last Week - ${data[1].timeframes.weekly.previous}hrs`;
        subtitle3.textContent = `Last Week - ${data[2].timeframes.weekly.previous}hrs`;
        subtitle4.textContent = `Last Week - ${data[3].timeframes.weekly.previous}hrs`;
        subtitle5.textContent = `Last Week - ${data[4].timeframes.weekly.previous}hrs`;
        subtitle6.textContent = `Last Week - ${data[5].timeframes.weekly.previous}hrs`;
    });

    monthly.addEventListener('click', () => {
        monthly.classList.add('active');
        weekly.classList.remove('active');
        daily.classList.remove('active');

        hrs.textContent = `${data[0].timeframes.monthly.current}hrs`;
        hrs1.textContent = `${data[1].timeframes.monthly.current}hrs`;
        hrs2.textContent = `${data[2].timeframes.monthly.current}hrs`;
        hrs3.textContent = `${data[3].timeframes.monthly.current}hrs`;
        hrs4.textContent = `${data[4].timeframes.monthly.current}hrs`;
        hrs5.textContent = `${data[5].timeframes.monthly.current}hrs`;

        title1.textContent = data[0].title;
        title2.textContent = data[1].title;
        title3.textContent = data[2].title;
        title4.textContent = data[3].title;
        title5.textContent = data[4].title;
        title6.textContent = data[5].title;

        subtitle1.textContent = `Last Week - ${data[0].timeframes.monthly.previous}hrs`;
        subtitle2.textContent = `Last Week - ${data[1].timeframes.monthly.previous}hrs`;
        subtitle3.textContent = `Last Week - ${data[2].timeframes.monthly.previous}hrs`;
        subtitle4.textContent = `Last Week - ${data[3].timeframes.monthly.previous}hrs`;
        subtitle5.textContent = `Last Week - ${data[4].timeframes.monthly.previous}hrs`;
        subtitle6.textContent = `Last Week - ${data[5].timeframes.monthly.previous}hrs`;
    });
}

info();
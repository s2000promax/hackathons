//Copyright by Vera
import {Module} from '../core/module'
import {random, setToDefaultDOM} from '../utils';

export class VoicesModule extends Module {
  trigger() {
    //Очистка DOM-дерева от предыдущего модуля
    setToDefaultDOM();

    //Контейнер модуля
    const divContainer = document.createElement('div');
    divContainer.className = 'div-container';

    function getCanvas() {

      const nbEddies = 5;
      const nbParticles = 1000;
      const lifeTime = 1000;

      let canv, ctx;
      let maxx, maxy;
      let dimx, dimy;

      let eddies;
      let particles;

      let requestID;
      let hueShift;

      const mrandom = Math.random;
      const mfloor = Math.floor;
      const mround = Math.round;
      const mceil = Math.ceil;
      const mabs = Math.abs;
      const mmin = Math.min;
      const mmax = Math.max;

      const mPI = Math.PI;
      const mPIS2 = Math.PI / 2;
      const m2PI = Math.PI * 2;
      const msin = Math.sin;
      const mcos = Math.cos;
      const matan2 = Math.atan2;
      const mexp = Math.exp;

      const mhypot = Math.hypot;
      const msqrt = Math.sqrt;

      function alea (min, max) {
        if (typeof max == 'undefined') return min * mrandom();
        return min + (max - min) * mrandom();
      }

      function intAlea (min, max) {
        if (typeof max == 'undefined') {
          max = min; min = 0;
        }
        return mfloor(min + (max - min) * mrandom());
      }
      function createEddy () {

        return {
          x: alea (dimx),
          y: alea (dimy),
          coeffR: 0.001 * (alea(0.7, 1.3)),
          radius: 150 + alea(-50, 50),
          coeffA1: 10000 * alea(0.8, 1.2),
          coeffA2: 0.01 * alea(0.8, 1.2),
          dir: (mrandom() > 0.5) ? 1 : -1
        }

      }

      function createEddies() {
        eddies = [];
        for (let k = 0; k < nbEddies; ++k) {
          eddies.push(createEddy());
        }
      }

      function createParticle() {

        return {
          x: alea (-100, dimx + 100),
          y: alea (-100, dimy + 100),
          sat:  `${intAlea(50, 101)}%`,
          light: `${intAlea(30, 80)}%`,
          TTL: alea(lifeTime * 0.8, lifeTime * 1.2)
        }
      }

      function createParticles() {
        particles = [];
        for (let k = 0; k < nbParticles; ++k) {
          particles.push(createParticle());
        }
        particles.forEach (part => {
          part.TTL = intAlea(lifeTime);
        });
      }

      function move() {

        let part, prev, dx, dy, s, c, r, rv, av, deltar;
        let mindeltar;

        for (let k = 0; k < nbParticles; ++k) {
          part = particles[k];

          if (part.TTL <= 0) {
            part = createParticle();
            particles[k] = part;
          }

          prev = {x: part.x, y: part.y};
          mindeltar = 10000;

          eddies.forEach ((eddy, ke) => {
            dx = prev.x - eddy.x;
            dy = prev.y - eddy.y;
            r = mhypot(dx, dy);

            if (r < 0.001) r = 0.001;
            s = dy / r;
            c = dx / r;
            deltar = r - eddy.radius;
            av = eddy.coeffA2 * mexp (- deltar * deltar / eddy.coeffA1) * eddy.dir;
            rv = - deltar * eddy.coeffR;
            part.x += rv * c -  av * r * s;
            part.y += rv * s +  av * r * c;

          })
          --part.TTL;

          let speed =mhypot (prev.x - part.x, prev.y - part.y) ;
          let hue = mmin (speed * 100, 300);
          hue = (hue + hueShift) % 360;
          ctx.beginPath();
          ctx.moveTo (prev.x, prev.y);
          ctx.lineTo (part.x, part.y);
          ctx.strokeStyle = `hsl(${hue},${part.sat},${part.light})`;
          ctx.stroke();

        }
      }

      function startOver() {
        maxx = window.innerWidth;
        maxy = window.innerHeight;
        dimx = maxx - 8;
        dimy = maxy - 8;
        canv.style.left = (maxx - dimx) / 2 + 'px';
        canv.style.top = (maxy - dimy) / 2 + 'px';
        canv.width = dimx;
        canv.height = dimy;
        ctx.lineWidth = 1.5;
        ctx.imageSmoothingEnabled = false;
        hueShift = intAlea(360);
        createEddies();
        createParticles();
        if (typeof requestID == 'number') window.cancelAnimationFrame(requestID);
        (function animate () {
          move();
          requestID = window.requestAnimationFrame(animate);
        })();

      }

      function clickCanvas() {
        startOver();
        getAudio();
      }

      {
        canv = document.createElement('canvas');
        canv.style.position = "absolute";
        canv.addEventListener('click',clickCanvas);
        document.body.appendChild(canv);
        ctx = canv.getContext('2d');

      }
      startOver();
      window.addEventListener('resize',startOver);
    }

    function getAudio() {

      const audio = document.createElement('audio');
      audio.src = 'http://www.noiseaddicts.com/samples_1w72b820/37' + random(20, 40) + '.mp3';
      if (divContainer.querySelector('audio')) {
        divContainer.querySelector('audio').remove();
      }
      divContainer.append(audio);
      divContainer.querySelector('audio').play();

    }

    document.body.append(divContainer);
    getCanvas();

  }
}
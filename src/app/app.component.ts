import  Splitting  from 'splitting';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import gsap from 'gsap';
import Lenis from '@studio-freight/lenis';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    Splitting();
    const lenis = new Lenis()
    lenis.on('scroll', (e:any) => {
    })
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)
  }

  moving(e: any) {
    gsap.to('.hand', {
      left: e.clientX - 50 + 'px',
      top: e.clientY - 50 + 'px',
      // delay: .1,
      ease: 'sine.out'
    })
  }
  enter(e: any) {
    gsap.fromTo(".hand", { scale: 0 }, {
      scale: 1,
      opacity: 1,
    })
  }

  leave(e: any) {
    gsap.to(".hand", {
      scale: 0,
      opacity: 0
    })
  }
}

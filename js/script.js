const tl = gsap.timeline({
    duration: .5
})

tl.to('#s1 .img-wrap', {
    opacity: 1,
    x: 30
})

tl.to('#s1 .img-wrap .name', {
    opacity: 1,
    x: 10
})

tl.to('.pf-con h3', {
    opacity: 1,
    x: -10,
    stagger: .2
})

tl.to('.pf-con dl>*', {
    opacity: 1,
    x: -10,
    stagger: .2,
    duration: .2
})

tl.to('.skill-list li>*', {
    opacity: 1,
    x: -10,
    stagger: .2,
    duration: .2
})

tl.to('.pg-wrap .pg.pg1', {
    width: '70%',
    delay: -.2,
})

tl.to('.pg-wrap .pg.pg2', {
    width: '60%',
    delay: -.2,
})

tl.to('.pg-wrap .pg.pg3', {
    width: '80%',
    delay: -.2,
})

tl.to('.pg-wrap .pg.pg4', {
    width: '90%',
    delay: -.2,
})
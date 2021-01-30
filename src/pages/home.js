import React from 'react'
import { useSpring, animated } from 'react-spring'
import CustomTerminal from '../components/custom-terminal'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 40}px,${y / 40}px,0)`
const trans2 = (x, y) => `translate3d(${x * -0.04 }px,${y * -0.04}px,0)`

export default function Home () {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 100 } }))

    return (
        <main className="home-container" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <section className="bg-circle-container">
                {/* section 1 moves with cursor */}
                <animated.div className="rightSlant" style={{ transform: props.xy.interpolate(trans1) }}> \ </animated.div>
                <animated.div className="upTri" style={{ transform: props.xy.interpolate(trans1) }}> △ </animated.div>
                <animated.div className="rightTri" style={{ transform: props.xy.interpolate(trans1) }}> ▷ </animated.div>
                <animated.div className="rightSemiCir" style={{ transform: props.xy.interpolate(trans1) }}> ◝ </animated.div>
                <animated.div className="leftSlant" style={{ transform: props.xy.interpolate(trans1) }}> / </animated.div>
                {/* section 2 moves away from cursor */}
                <animated.div className="leftTri" style={{ transform: props.xy.interpolate(trans2) }}> ◁ </animated.div>
                <animated.div className="downTri" style={{ transform: props.xy.interpolate(trans2) }}> ▽ </animated.div>
                <animated.div className="topSemiCir" style={{ transform: props.xy.interpolate(trans2) }}> ◠ </animated.div>
                <animated.div className="leftSemiCir" style={{ transform: props.xy.interpolate(trans2) }}> ◜ </animated.div>
                <animated.div className="bottomSemiCir" style={{ transform: props.xy.interpolate(trans2) }}> ◡ </animated.div>
                {/* ◡ ╰ ╮ */}
            </section>
            <CustomTerminal/>
        </main>
    )}